// this will generate the wrappers & type-adapters in src/generated

// this file comes from https://github.com/raysan5/raylib/blob/master/parser/raylib_api.json
const defs = require('./raylib_api.json')

// TODO: once array-support works, I should be able to do this:
const { structs, enums, functions } = defs

const { writeFileSync } = require('fs')
const path = require('path')

// use this to keep from wrapping things
// TODO: document why these are being blocked
const blocklist = [
  'TraceLog',
  'TextFormat',

  // these appear to not be defined, even though they are in JSON
  'SetWindowOpacity',
  'GetRenderWidth',
  'GetRenderHeight',
  'ExportFontAsCode'
]

// thse are aliased types
const typeAliases = {
  Quaternion: 'Vector4'
}

// pre-process the data for later analysis
const rSize = /\[([0-9]+)\]/g
for (const struct of structs) {
  // take multi-fields (like in Matrix) and make them all distinct fields
  let newfields = []
  for (const i in struct.fields) {
    const field = struct.fields[i]

    if (field.name.includes(',')) {
      newfields = [...newfields, ...field.name.split(',').map(n => {
        return {
          ...field,
          name: n.trim()
        }
      })]
    } else {
      newfields.push(field)
    }
  }
  struct.fields = newfields

  // find all arrays in structs, and give all fields a size and stripped name for later
  for (const field of struct.fields) {
    const n = [...field.name.matchAll(rSize)]
    if (n.length) {
      field.size = parseInt(n[0][1])
      field.name = field.name.replace(rSize, '')
    } else {
      field.size = 1
    }
    const type = field.type.replace(/[* ]+/g, '')
    if (typeAliases[type]) {
      field.type = typeAliases[type]
    }
  }

  // TODO: should I also process *-refs to seperate name & the fact it's a ref?
}

// aliases
// structs.push({ ...structs.find(s => s.name === 'Vector4'), name: 'Quaternion' })

// XXX: Since array support isn't complete, just filter out all structs & functions that use them,
// so we get an (incomplete) wrapper that will build.
// THIS IS CURRENTLY NOT WORKING

for (const struct of structs) {
  const usesArray = struct.fields.find(f => f.size !== 1)
  if (usesArray) {
    blocklist.push(struct.name)
  }
}

// filter out all functions that use blocked types
for (const f of functions) {
  if (blocklist.includes(f.returnType.replace(/[* ]/g, ''))) {
    blocklist.push(f.name)
  } else {
    for (const param of (f.params || [])) {
      if (blocklist.includes(param.type.replace(/[* ]/g, ''))) {
        blocklist.push(f.name)
        break
      }
    }
  }
}

console.log('blocking:\n ', blocklist.join('\n  '))
writeFileSync('/home/konsumer/Downloads/processed_raylib_api.json', JSON.stringify({ structs, enums, functions }, null, 2))

// When Outputting an Napi::Object, you cannot Set() instances of structs - so they need to be converted to Napi::Objects first
const toJSClassConvert = (name, type) => {
  if (type.endsWith('*')) { return `out.Set("${name}", (int64_t)input.${name});` }
  return type[0].toUpperCase() !== type[0]
    ? `out.Set("${name}", input.${name});`
    : `out.Set("${name}", ToObject(env, input.${name}));`
}

// generate a single adapter for C->JS
const toJS = struct => `
Napi::Object ToObject(Napi::Env& env, const ${struct.name}& input) {
  Napi::Object out = Napi::Object::New(env);
  ${struct.fields.map(({ name, type }) => toJSClassConvert(name, type)).join('\n  ')}
  return out;
}`

// generate a single adapter for JS->C
const toC = struct => {
  const fields = struct.fields.map(field => {
    if (field.type.endsWith('*')) {
      return `
  if (argObject.Has("${field.name}")) {
    out.${field.name} = (${field.type})argObject.Get("${field.name}").As<Napi::Number>().Int64Value();
  }
`
    }
    const type = field.type.replace(/[* ]+/g, '')

    let fname = `To${type}`
    if (type === 'Texture2D') {
      fname = 'ToTexture'
    }

    return `
  if (argObject.Has("${field.name}")) {
    out.${field.name} = ${fname}(env, argObject.Get("${field.name}"));
  }
`
  })
  return `
${struct.name} To${struct.name}(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  ${struct.name} out;
  ${fields.join('\n')}
  return out;
}
`
}

const templates = {}

templates['node-raylib'] = () => `
#ifndef NODE_RAYLIB_NODE_RAYLIB_H
#define NODE_RAYLIB_NODE_RAYLIB_H
#include <string>
#include <napi.h>
#include "raylib.h"
#include "../lib/AddDefine.h"
#include "../lib/AddFunction.h"
void node_raylib_bindings_defines(Napi::Env& env, Napi::Object& exports) {
  ${enums
    .filter(({ name }) => !blocklist.includes(name))
    .map(({ values }) => values.map(({ name }) => `AddDefineInteger(env, exports, "${name}", ${name});`).join('\n  '))
    .join('\n  ')
  }
}
void node_raylib_bindings_functions(Napi::Env& env, Napi::Object& exports) {
  ${functions
    .filter(({ name }) => !blocklist.includes(name))
    .map(({ name }) => `AddFunction(env, exports, "${name}", &${name});`)
    .join('\n  ')
  }
}
void node_raylib_bindings(Napi::Env& env, Napi::Object& exports) {
  node_raylib_bindings_defines(env, exports);
  node_raylib_bindings_functions(env, exports);
}
#endif
`

templates.ToValue = () => `
#ifndef NODE_RAYLIB_TOVALUE_H_
#define NODE_RAYLIB_TOVALUE_H_
#include <napi.h>
#include "./ToObject.h"
inline Napi::Value ToValue(Napi::Env& env, bool value) {
  return Napi::Boolean::New(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, const char* value) {
  return Napi::String::New(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, const std::string& value) {
  return Napi::String::New(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, char* value) {
  return Napi::String::New(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, int value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, unsigned int value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, long value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, double value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, float value) {
  return Napi::Number::New(env, value);
}
${structs
    .filter(({ name }) => !blocklist.includes(name))
    .map(({ name }) => `inline Napi::Value ToValue(Napi::Env& env, ${name} value) { return ToObject(env, value); }`)
    .join('\n')
}
#endif
`

templates.ToObject = () => `
#ifndef NODE_RAYLIB_TOOBJECT_H_
#define NODE_RAYLIB_TOOBJECT_H_
#include <napi.h>
void Tovoid(Napi::Env& env, Napi::Value value) {
}
float Tofloat(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>().FloatValue();
}
unsigned char Tounsignedchar(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>().Uint32Value();
}
int Toint(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>().Int32Value();
}
unsigned int Tounsignedint(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>().Uint32Value();
}
unsigned short Tounsignedshort(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>().Uint32Value();
}
char Tochar(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>().Uint32Value();
}
bool Tobool(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Boolean>();
}

${structs
    .filter(({ name }) => !blocklist.includes(name))
    .map((struct) => toJS(struct) + '\n' + toC(struct))
    .join('\n  ')
}

#endif
`

Object.keys(templates).forEach(file => {
  writeFileSync(path.join(__dirname, '..', 'generated', `${file}.h`), templates[file]())
})

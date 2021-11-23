// this will generate the wrappers & type-adapters in src/generated

// this file comes from https://github.com/raysan5/raylib/blob/master/parser/raylib_api.json
const def = require('./raylib_api.json')

const { writeFileSync } = require('fs')
const path = require('path')

// first clean up def data
def.structs.forEach(struct => {
  struct.fields.forEach((field, i) => {
    if (field.name.includes(',')) {
      const newfields = field.name.split(',').map(n => {
        return {
          ...field,
          name: n.trim()
        }
      })
      delete struct.fields[i]
      struct.fields = [...struct.fields, ...newfields]
    }
  })
  struct.fields = struct.fields.filter(f => f)
})

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
  ${struct.fields.map(({ name, type }) => toJSClassConvert(name.replace(/\[[0-9]+\]/g, ''), type)).join('\n  ')}
  return out;
}`

// generate a single adapter for JS->C
const toC = struct => {
  const fields = struct.fields.map(field => {
    const name = field.name.replace(/\[[0-9]+\]+/g, '')
    if (field.type.endsWith('*')) {
      return `
  if (argObject.Has("${name}")) {
    out.${name} = (${field.type})argObject.Get("${name}").As<Napi::Number>().Int64Value();
  }
`
    }
    const type = field.type.replace(/[* ]+/g, '')

    let fname = `To${type}`
    if (type === 'Texture2D') {
      fname = 'ToTexture'
    }

    return `
  if (argObject.Has("${name}")) {
    out.${name} = ${fname}(env, argObject.Get("${name}"));
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

// use this to keep from wrapping things
// TODO: document why these are being blocked
const blocklist = [
  'TraceLog',
  'TextFormat'
]

templates['node-raylib'] = () => `
#ifndef NODE_RAYLIB_NODE_RAYLIB_H
#define NODE_RAYLIB_NODE_RAYLIB_H

#include <string>
#include <napi.h>

#include "raylib.h"
#include "../lib/AddDefine.h"
#include "../lib/AddFunction.h"

void node_raylib_bindings_defines(Napi::Env& env, Napi::Object& exports) {
  ${def.enums
    .filter(({ name }) => !blocklist.includes(name))
    .map(({ values }) => values.map(({ name }) => `AddDefineInteger(env, exports, "${name}", ${name});`).join('\n  '))
    .join('\n  ')
  }
}

void node_raylib_bindings_functions(Napi::Env& env, Napi::Object& exports) {
  ${def.functions
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

${def.structs
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

${def.structs
    .filter(({ name }) => !blocklist.includes(name))
    .map((struct) => toJS(struct) + '\n' + toC(struct))
    .join('\n  ')
}

#endif
`

Object.keys(templates).forEach(file => {
  writeFileSync(path.join(__dirname, '..', 'generated', `${file}.h`), templates[file]())
})

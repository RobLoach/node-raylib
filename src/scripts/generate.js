// this will generate the wrappers & type-adapters in src/generated

// this file comes from https://github.com/raysan5/raylib/blob/master/parser/raylib_api.json
const def = require('./raylib_api.json')

const { writeFileSync } = require('fs')
const path = require('path')

// TODO: handle vars with commas in them

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
  ${struct.fields.map(({ name, type }) => toJSClassConvert(name.replace(/[\[\]0-9]+/g, ''), type)).join('\n  ')}
  return out;
}`

// generate a single adapter for JS->C
const toC = struct => {
  const fields = struct.fields.map(field => {
    const name = field.name.replace(/[\[\]0-9]+/g, '')
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
  let converter = `To${struct.name}`
  if (struct.name === 'Texture2D') {
    converter = 'ToTexture'
  }
  return `
${struct.name} ${converter}(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  ${struct.name} out;
  ${fields.join('\n')}
  return out;
}
`
}

const templates = {}

// use this to keep from wrapping things
const blocklist = [
  'Matrix',
  'ToTexture2D',
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

inline Napi::Value ToValue(Napi::Env& env, Matrix value) { return ToObject(env, value); }
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

// TODO: these need soem more stuff to output correct values

void Tovoid(Napi::Env& env, Napi::Value value) {
}

float Tofloat(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>();
}

unsigned char Tounsignedchar(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>().Uint32Value();
}

int Toint(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>();
}

unsigned int Tounsignedint(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>();
}

unsigned short Tounsignedshort(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>();
}

char Tochar(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>().Uint32Value();
}

bool Tobool(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Boolean>();
}


Matrix ToMatrix(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Matrix out;
  if (argObject.Has("m0")) {
    out.m0 = argObject.Get("m0").ToNumber().FloatValue();
  }
  if (argObject.Has("m1")) {
    out.m1 = argObject.Get("m1").ToNumber().FloatValue();
  }
  if (argObject.Has("m2")) {
    out.m2 = argObject.Get("m2").ToNumber().FloatValue();
  }
  if (argObject.Has("m3")) {
    out.m3 = argObject.Get("m3").ToNumber().FloatValue();
  }
  if (argObject.Has("m4")) {
    out.m4 = argObject.Get("m4").ToNumber().FloatValue();
  }
  if (argObject.Has("m5")) {
    out.m5 = argObject.Get("m5").ToNumber().FloatValue();
  }
  if (argObject.Has("m6")) {
    out.m6 = argObject.Get("m6").ToNumber().FloatValue();
  }
  if (argObject.Has("m7")) {
    out.m7 = argObject.Get("m7").ToNumber().FloatValue();
  }
  if (argObject.Has("m8")) {
    out.m8 = argObject.Get("m8").ToNumber().FloatValue();
  }
  if (argObject.Has("m9")) {
    out.m9 = argObject.Get("m9").ToNumber().FloatValue();
  }
  if (argObject.Has("m10")) {
    out.m10 = argObject.Get("m10").ToNumber().FloatValue();
  }
  if (argObject.Has("m11")) {
    out.m11 = argObject.Get("m11").ToNumber().FloatValue();
  }
  if (argObject.Has("m12")) {
    out.m12 = argObject.Get("m12").ToNumber().FloatValue();
  }
  if (argObject.Has("m13")) {
    out.m13 = argObject.Get("m13").ToNumber().FloatValue();
  }
  if (argObject.Has("m14")) {
    out.m14 = argObject.Get("m14").ToNumber().FloatValue();
  }
  if (argObject.Has("m15")) {
    out.m15 = argObject.Get("m15").ToNumber().FloatValue();
  }
  return out;
}

Napi::Object ToObject(Napi::Env& env, const Matrix& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("m0", input.m0);
  out.Set("m1", input.m1);
  out.Set("m2", input.m2);
  out.Set("m3", input.m3);
  out.Set("m4", input.m4);
  out.Set("m5", input.m5);
  out.Set("m6", input.m6);
  out.Set("m7", input.m7);
  out.Set("m8", input.m8);
  out.Set("m9", input.m9);
  out.Set("m10", input.m10);
  out.Set("m11", input.m11);
  out.Set("m12", input.m12);
  out.Set("m13", input.m13);
  out.Set("m14", input.m14);
  out.Set("m15", input.m15);
  return out;
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

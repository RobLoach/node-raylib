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

module.exports = ({ structs, blocklist }) => `
// GENERATED CODE: DO NOT MODIFY

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

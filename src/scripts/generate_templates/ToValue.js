const addToValue = ({ name }) => `inline Napi::Value ToValue(Napi::Env& env, ${name} value) { return ToObject(env, value); }`

module.exports = ({ structs, blocklist }) => `
// GENERATED CODE: DO NOT MODIFY

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
    .map(addToValue)
    .join('\n')
}
#endif
`

#ifndef NODE_RAYLIB_ADDDEFINE_H_
#define NODE_RAYLIB_ADDDEFINE_H_

#include <napi.h>

void AddDefineInteger(Napi::Env& env, Napi::Object& exports, const char* name, int value) {
  exports.Set(Napi::String::New(env, name), Napi::Number::New(env, value));
}

void AddDefine(Napi::Env& env, Napi::Object& exports, const char* name, float value) {
  exports.Set(Napi::String::New(env, name), Napi::Number::New(env, value));
}

void AddDefineBoolean(Napi::Env& env, Napi::Object& exports, const char* name, bool value) {
  exports.Set(Napi::String::New(env, name), Napi::Boolean::New(env, value));
}

#endif // NODE_RAYLIB_ADDDEFINE_H_

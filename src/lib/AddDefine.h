#ifndef NODE_RAYLIB_ADDDEFINE_H_
#define NODE_RAYLIB_ADDDEFINE_H_

#include <napi.h>

void AddDefine(Napi::Env& env, Napi::Object& exports, const char* name, float value) {
  exports.Set(Napi::String::New(env, name), Napi::Number::New(env, value));
}

#endif // NODE_RAYLIB_ADDDEFINE_H_

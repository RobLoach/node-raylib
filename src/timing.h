#ifndef NODE_RAYLIB_TIMING_H
#define NODE_RAYLIB_TIMING_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "helper.h"

Napi::Value SetTargetFPS_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!checkNumberOfArguments(env, info, 1)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();

  SetTargetFPS(arg0);

  return env.Null();
}

Napi::Value GetFPS_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!checkNumberOfArguments(env, info, 0)) {
    return env.Null();
  }
  return Napi::Number::New(env, GetFPS());
}

Napi::Value GetFrameTime_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!checkNumberOfArguments(env, info, 0)) {
    return env.Null();
  }
  return Napi::Number::New(env, GetFrameTime());
}

Napi::Value GetTime_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!checkNumberOfArguments(env, info, 0)) {
    return env.Null();
  }
  return Napi::Number::New(env, GetTime());
}

void node_raylib_init_timing(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "SetTargetFPS"), Napi::Function::New(env, SetTargetFPS_binding));
  exports.Set(Napi::String::New(env, "GetFPS"), Napi::Function::New(env, GetFPS_binding));
  exports.Set(Napi::String::New(env, "GetFrameTime"), Napi::Function::New(env, GetFrameTime_binding));
  exports.Set(Napi::String::New(env, "GetTime"), Napi::Function::New(env, GetTime_binding));
  // TODO: Add remaining timing functions.
}

#endif

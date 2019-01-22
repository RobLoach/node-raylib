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

void node_raylib_init_timing(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "SetTargetFPS"), Napi::Function::New(env, SetTargetFPS_binding));
  // TODO: Add remaining timing functions.
}

#endif

#ifndef NODE_RAYLIB_MISC_H
#define NODE_RAYLIB_MISC_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

Napi::Value SetConfigFlags_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  unsigned char arg0 = info[0].As<Napi::Number>().Int32Value();

  SetConfigFlags(arg0);

  return env.Null();
}

void node_raylib_init_misc(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "TakeScreenshot", TakeScreenshot);
  AddFunction(env, exports, "GetRandomValue", GetRandomValue);
  exports.Set(Napi::String::New(env, "SetConfigFlags"), Napi::Function::New(env, SetConfigFlags_binding));
  // TODO: Add remaining misc functions.
}

#endif

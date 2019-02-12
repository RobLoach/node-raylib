#ifndef NODE_RAYLIB_MISC_H
#define NODE_RAYLIB_MISC_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "helper.h"

Napi::Value SetConfigFlags_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  unsigned char arg0 = info[0].As<Napi::Number>().Int32Value();

  SetConfigFlags(arg0);

  return env.Null();
}

Napi::Value TakeScreenshot_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  std::string arg0 = info[0].As<Napi::String>().Utf8Value();
  TakeScreenshot(arg0.c_str());
  return env.Null();
}

Napi::Value GetRandomValue_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 2)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();
  int arg1 = info[1].As<Napi::Number>().Int32Value();

  return Napi::Number::New(env, GetRandomValue(arg0, arg1));
}

void node_raylib_init_misc(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "SetConfigFlags"), Napi::Function::New(env, SetConfigFlags_binding));
  exports.Set(Napi::String::New(env, "TakeScreenshot"), Napi::Function::New(env, TakeScreenshot_binding));
  exports.Set(Napi::String::New(env, "GetRandomValue"), Napi::Function::New(env, GetRandomValue_binding));
  // TODO: Add remaining misc functions.
}

#endif

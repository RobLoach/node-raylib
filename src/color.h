#ifndef NODE_RAYLIB_COLOR_H
#define NODE_RAYLIB_COLOR_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "helper.h"

Napi::Value ColorToInt_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  Color arg0 = ToColor(env, info[0]);

  return Napi::Number::New(env, ColorToInt(arg0));
}

Napi::Value GetColor_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();
  Color color = GetColor(arg0);
  return ToObject(env, color);
}

void node_raylib_init_color(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "ColorToInt"), Napi::Function::New(env, ColorToInt_binding));
  exports.Set(Napi::String::New(env, "GetColor"), Napi::Function::New(env, GetColor_binding));
  // TODO: Add remaining color functions.
}


#endif

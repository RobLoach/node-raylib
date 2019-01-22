#ifndef NODE_RAYLIB_TEXT_H
#define NODE_RAYLIB_TEXT_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "helper.h"

Napi::Value DrawText_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!checkNumberOfArguments(env, info, 5)) {
    return env.Null();
  }
  std::string arg0 = info[0].As<Napi::String>().Utf8Value();
  int arg1 = info[1].As<Napi::Number>().Int32Value();
  int arg2 = info[2].As<Napi::Number>().Int32Value();
  int arg3 = info[3].As<Napi::Number>().Int32Value();
  Color arg4 = node_raylib_helper_value_to_color(env, info[4]);

  DrawText(arg0.c_str(), arg1, arg2, arg3, arg4);

  return env.Null();
}

Napi::Value DrawFPS_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!checkNumberOfArguments(env, info, 2)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();
  int arg1 = info[1].As<Napi::Number>().Int32Value();

  DrawFPS(arg0, arg1);

  return env.Null();
}

void node_raylib_init_text(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "DrawText"), Napi::Function::New(env, DrawText_binding));
  exports.Set(Napi::String::New(env, "DrawFPS"), Napi::Function::New(env, DrawFPS_binding));
  // TODO: Add remaining text functions.
}

#endif

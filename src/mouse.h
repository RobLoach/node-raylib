#ifndef NODE_RAYLIB_MOUSE_H
#define NODE_RAYLIB_MOUSE_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "helper.h"

Napi::Value GetMousePosition_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 0)) {
    return env.Null();
  }
  return ToObject(env, GetMousePosition());
}

Napi::Value IsMouseButtonPressed_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }

  int arg0 = info[0].As<Napi::Number>().Int32Value();
  return Napi::Boolean::New(env, IsMouseButtonPressed(arg0));
}

Napi::Value IsMouseButtonDown_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }

  int arg0 = info[0].As<Napi::Number>().Int32Value();
  return Napi::Boolean::New(env, IsMouseButtonDown(arg0));
}

void node_raylib_init_mouse(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "GetMousePosition"), Napi::Function::New(env, GetMousePosition_binding));
  exports.Set(Napi::String::New(env, "IsMouseButtonPressed"), Napi::Function::New(env, IsMouseButtonPressed_binding));
  exports.Set(Napi::String::New(env, "IsMouseButtonDown"), Napi::Function::New(env, IsMouseButtonDown_binding));
  // TODO: Add remaining mouse functions.
}

#endif

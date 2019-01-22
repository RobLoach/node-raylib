#ifndef NODE_RAYLIB_KEYBOARD_H
#define NODE_RAYLIB_KEYBOARD_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "helper.h"

Napi::Value IsKeyPressed_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!checkNumberOfArguments(env, info, 1)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();

  return Napi::Boolean::New(env, IsKeyPressed(arg0));
}

Napi::Value IsKeyDown_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!checkNumberOfArguments(env, info, 1)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();

  return Napi::Boolean::New(env, IsKeyDown(arg0));
}

void node_raylib_init_keyboard(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "IsKeyPressed"), Napi::Function::New(env, IsKeyPressed_binding));
  exports.Set(Napi::String::New(env, "IsKeyDown"), Napi::Function::New(env, IsKeyDown_binding));
  // TODO: Add remaining keyboard functions.
}

#endif

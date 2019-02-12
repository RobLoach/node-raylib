#ifndef NODE_RAYLIB_KEYBOARD_H
#define NODE_RAYLIB_KEYBOARD_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "helper.h"

Napi::Value IsKeyPressed_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();

  return Napi::Boolean::New(env, IsKeyPressed(arg0));
}

Napi::Value IsKeyDown_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();

  return Napi::Boolean::New(env, IsKeyDown(arg0));
}

Napi::Value IsKeyReleased_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();

  return Napi::Boolean::New(env, IsKeyReleased(arg0));
}

Napi::Value IsKeyUp_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();

  return Napi::Boolean::New(env, IsKeyUp(arg0));
}

Napi::Value GetKeyPressed_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 0)) {
    return env.Null();
  }
  return Napi::Number::New(env, GetKeyPressed());
}

Napi::Value SetExitKey_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();
  SetExitKey(arg0);

  return env.Null();
}

void node_raylib_init_keyboard(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "IsKeyPressed"), Napi::Function::New(env, IsKeyPressed_binding));
  exports.Set(Napi::String::New(env, "IsKeyDown"), Napi::Function::New(env, IsKeyDown_binding));
  exports.Set(Napi::String::New(env, "IsKeyReleased"), Napi::Function::New(env, IsKeyReleased_binding));
  exports.Set(Napi::String::New(env, "IsKeyUp"), Napi::Function::New(env, IsKeyUp_binding));
  exports.Set(Napi::String::New(env, "GetKeyPressed"), Napi::Function::New(env, GetKeyPressed_binding));
  exports.Set(Napi::String::New(env, "SetExitKey"), Napi::Function::New(env, SetExitKey_binding));
}

#endif

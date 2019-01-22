#ifndef NODE_RAYLIB_WINDOW_H
#define NODE_RAYLIB_WINDOW_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "helper.h"

Napi::Value InitWindow_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 3)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();
  int arg1 = info[1].As<Napi::Number>().Int32Value();
  std::string arg2 = info[2].As<Napi::String>().Utf8Value();

  InitWindow(arg0, arg1, arg2.c_str());

  return info.Env().Null();
}

Napi::Value CloseWindow_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 0)) {
    return env.Null();
  }

  CloseWindow();

  return env.Null();
}

Napi::Value IsWindowReady_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 0)) {
    return env.Null();
  }
  return Napi::Boolean::New(env, IsWindowReady());
}

Napi::Value WindowShouldClose_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 0)) {
    return env.Null();
  }
  return Napi::Boolean::New(env, WindowShouldClose());
}

Napi::Value IsWindowMinimized_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 0)) {
    return env.Null();
  }
  return Napi::Boolean::New(env, IsWindowMinimized());
}

Napi::Value ToggleFullscreen_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 0)) {
    return env.Null();
  }
  ToggleFullscreen();
  return env.Null();
}

Napi::Value SetWindowTitle_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  std::string arg0 = info[0].As<Napi::String>().Utf8Value();
  SetWindowTitle(arg0.c_str());
  return env.Null();
}

void node_raylib_init_window(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "IsWindowReady"), Napi::Function::New(env, IsWindowReady_binding));
  exports.Set(Napi::String::New(env, "InitWindow"), Napi::Function::New(env, InitWindow_binding));
  exports.Set(Napi::String::New(env, "CloseWindow"), Napi::Function::New(env, CloseWindow_binding));
  exports.Set(Napi::String::New(env, "WindowShouldClose"), Napi::Function::New(env, WindowShouldClose_binding));
  exports.Set(Napi::String::New(env, "IsWindowMinimized"), Napi::Function::New(env, IsWindowMinimized_binding));
  exports.Set(Napi::String::New(env, "ToggleFullscreen"), Napi::Function::New(env, ToggleFullscreen_binding));
  exports.Set(Napi::String::New(env, "SetWindowTitle"), Napi::Function::New(env, SetWindowTitle_binding));
  // TODO: Add remaining window functions.
}

#endif

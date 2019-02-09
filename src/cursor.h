#ifndef NODE_RAYLIB_CURSOR_H
#define NODE_RAYLIB_CURSOR_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "helper.h"

Napi::Value ShowCursor_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 0)) {
    return env.Null();
  }
  ShowCursor();

  return env.Null();
}

Napi::Value HideCursor_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 0)) {
    return env.Null();
  }
  HideCursor();

  return env.Null();
}

Napi::Value IsCursorHidden_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 0)) {
    return env.Null();
  }

  return Napi::Boolean::New(env, IsCursorHidden());
}

Napi::Value EnableCursor_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 0)) {
    return env.Null();
  }
  EnableCursor();

  return env.Null();
}

Napi::Value DisableCursor_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 0)) {
    return env.Null();
  }
  DisableCursor();

  return env.Null();
}

void node_raylib_init_cursor(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "ShowCursor"), Napi::Function::New(env, ShowCursor_binding));
  exports.Set(Napi::String::New(env, "HideCursor"), Napi::Function::New(env, HideCursor_binding));
  exports.Set(Napi::String::New(env, "IsCursorHidden"), Napi::Function::New(env, IsCursorHidden_binding));
  exports.Set(Napi::String::New(env, "EnableCursor"), Napi::Function::New(env, EnableCursor_binding));
  exports.Set(Napi::String::New(env, "DisableCursor"), Napi::Function::New(env, DisableCursor_binding));
}


#endif

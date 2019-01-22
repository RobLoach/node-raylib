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

void node_raylib_init_mouse(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "GetMousePosition"), Napi::Function::New(env, GetMousePosition_binding));
  // TODO: Add remaining mouse functions.
}

#endif

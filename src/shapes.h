#ifndef NODE_RAYLIB_SHAPES_H
#define NODE_RAYLIB_SHAPES_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "helper.h"

Napi::Value DrawRectangleV_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 3)) {
    return env.Null();
  }

  Vector2 arg0 = ToVector2(env, info[0]);
  Vector2 arg1 = ToVector2(env, info[1]);
  Color arg2 = ToColor(env, info[2]);

  DrawRectangleV(arg0, arg1, arg2);
  return env.Null();
}

Napi::Value DrawRectangleRec_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 2)) {
    return env.Null();
  }

  Rectangle arg0 = ToRectangle(env, info[0]);
  Color arg1 = ToColor(env, info[1]);

  DrawRectangleRec(arg0, arg1);
  return env.Null();
}

Napi::Value DrawCircleV_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 3)) {
    return env.Null();
  }

  Vector2 arg0 = ToVector2(env, info[0]);
  float arg1 = info[1].As<Napi::Number>().FloatValue();
  Color arg2 = ToColor(env, info[2]);

  DrawCircleV(arg0, arg1, arg2);
  return env.Null();
}

void node_raylib_init_shapes(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "DrawRectangleV"), Napi::Function::New(env, DrawRectangleV_binding));
  exports.Set(Napi::String::New(env, "DrawRectangleRec"), Napi::Function::New(env, DrawRectangleRec_binding));
  exports.Set(Napi::String::New(env, "DrawCircleV"), Napi::Function::New(env, DrawCircleV_binding));
  // TODO: Add remaining shapes functions.
}

#endif

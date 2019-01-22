#ifndef NODE_RAYLIB_DRAWING_H
#define NODE_RAYLIB_DRAWING_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "helper.h"

Napi::Value ClearBackground_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!checkNumberOfArguments(env, info, 1)) {
    return env.Null();
  }
  //int arg0 = info[0].As<Napi::Number>().Int32Value();

  // TODO: Add Color support.
  ClearBackground(RAYWHITE);

  return env.Null();
}

Napi::Value BeginDrawing_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!checkNumberOfArguments(env, info, 0)) {
    return env.Null();
  }
  BeginDrawing();

  return env.Null();
}

Napi::Value EndDrawing_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!checkNumberOfArguments(env, info, 0)) {
    return env.Null();
  }
  //int arg0 = info[0].As<Napi::Number>().Int32Value();
  //int arg1 = info[1].As<Napi::Number>().Int32Value();
  //std::string arg2 = info[2].As<Napi::String>().Utf8Value();

  // TODO: Add Color support.
  EndDrawing();

  return env.Null();
}

void node_raylib_init_drawing(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "ClearBackground"), Napi::Function::New(env, ClearBackground_binding));
  exports.Set(Napi::String::New(env, "BeginDrawing"), Napi::Function::New(env, BeginDrawing_binding));
  exports.Set(Napi::String::New(env, "EndDrawing"), Napi::Function::New(env, EndDrawing_binding));
  // TODO: Add remaining drawing functions.
}

#endif

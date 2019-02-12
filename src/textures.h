#ifndef NODE_RAYLIB_TEXTURES_H
#define NODE_RAYLIB_TEXTURES_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

Napi::Value LoadTexture_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  std::string arg0 = info[0].As<Napi::String>().Utf8Value();
  Texture texture = LoadTexture(arg0.c_str());
  return ToObject(env, texture);
}

Napi::Value UnloadTexture_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  Texture texture = ToTexture(env, info[0]);
  UnloadTexture(texture);
  return env.Null();
}

Napi::Value DrawTexture_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 4)) {
    return env.Null();
  }
  Texture arg0 = ToTexture(env, info[0]);
  int arg1 = info[1].As<Napi::Number>().Int32Value();
  int arg2 = info[2].As<Napi::Number>().Int32Value();
  Color arg3 = ToColor(env, info[3]);
  DrawTexture(arg0, arg1, arg2, arg3);
  return env.Null();
}

void node_raylib_init_textures(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "LoadTexture"), Napi::Function::New(env, LoadTexture_binding));
  exports.Set(Napi::String::New(env, "UnloadTexture"), Napi::Function::New(env, UnloadTexture_binding));
  exports.Set(Napi::String::New(env, "DrawTexture"), Napi::Function::New(env, DrawTexture_binding));
  // TODO: Add remaining texture functions.
}

#endif

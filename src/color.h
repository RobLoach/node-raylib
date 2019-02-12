#ifndef NODE_RAYLIB_COLOR_H
#define NODE_RAYLIB_COLOR_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "helper.h"

Napi::Value ColorToInt_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  Color arg0 = ToColor(env, info[0]);

  return Napi::Number::New(env, ColorToInt(arg0));
}

Napi::Value ColorNormalize_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  Color arg0 = ToColor(env, info[0]);
  Vector4 output = ColorNormalize(arg0);

  return ToObject(env, output);
}

Napi::Value ColorToHSV_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  Color arg0 = ToColor(env, info[0]);
  Vector3 output = ColorToHSV(arg0);

  return ToObject(env, output);
}

Napi::Value GetColor_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();
  Color output = GetColor(arg0);
  return ToObject(env, output);
}

Napi::Value Fade_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  Color arg0 = ToColor(env, info[0]);
  float arg1 = info[1].As<Napi::Number>().FloatValue();
  Color output = Fade(arg0, arg1);
  return ToObject(env, output);
}

void node_raylib_init_color(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "ColorToInt"), Napi::Function::New(env, ColorToInt_binding));
  exports.Set(Napi::String::New(env, "ColorNormalize"), Napi::Function::New(env, ColorNormalize_binding));
  exports.Set(Napi::String::New(env, "ColorToHSV"), Napi::Function::New(env, ColorToHSV_binding));
  exports.Set(Napi::String::New(env, "GetColor"), Napi::Function::New(env, GetColor_binding));
  exports.Set(Napi::String::New(env, "Fade"), Napi::Function::New(env, Fade_binding));
}


#endif

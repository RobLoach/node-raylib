#ifndef NODE_RAYLIB_TEXT_H
#define NODE_RAYLIB_TEXT_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

Napi::Value DrawText_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 5)) {
    return env.Null();
  }
  std::string arg0 = info[0].As<Napi::String>().Utf8Value();
  int arg1 = info[1].As<Napi::Number>().Int32Value();
  int arg2 = info[2].As<Napi::Number>().Int32Value();
  int arg3 = info[3].As<Napi::Number>().Int32Value();
  Color arg4 = ToColor(env, info[4]);

  DrawText(arg0.c_str(), arg1, arg2, arg3, arg4);

  return env.Null();
}

Napi::Value DrawFPS_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 2)) {
    return env.Null();
  }
  int arg0 = info[0].As<Napi::Number>().Int32Value();
  int arg1 = info[1].As<Napi::Number>().Int32Value();

  DrawFPS(arg0, arg1);

  return env.Null();
}

Napi::Value TextFormat_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (info.Length() < 2) {
    std::string output("Invalid number of arguments. Expected >= 2");
    Napi::TypeError::New(env, output).ThrowAsJavaScriptException();
    return env.Null();
  }

  std::string out;

  // TODO: Make the parameter detection dynamic.
  std::string arg0 = info[0].As<Napi::String>().Utf8Value();
  if (info.Length() == 2) {
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    out = TextFormat(arg0.c_str(), arg1);
  }
  if (info.Length() == 3) {
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    int arg2 = info[2].As<Napi::Number>().Int32Value();
    out = TextFormat(arg0.c_str(), arg1, arg2);
  }
  return Napi::String::New(env, out);
}

void node_raylib_init_text(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "DrawText"), Napi::Function::New(env, DrawText_binding));
  exports.Set(Napi::String::New(env, "DrawFPS"), Napi::Function::New(env, DrawFPS_binding));
  exports.Set(Napi::String::New(env, "TextFormat"), Napi::Function::New(env, TextFormat_binding));
  exports.Set(Napi::String::New(env, "FormatText"), Napi::Function::New(env, TextFormat_binding));
  // TODO: Add remaining text functions.
}

#endif

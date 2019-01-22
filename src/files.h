#ifndef NODE_RAYLIB_FILES_H
#define NODE_RAYLIB_FILES_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "helper.h"

Napi::Value FileExists_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 1)) {
    return env.Null();
  }
  std::string arg0 = info[0].As<Napi::String>().Utf8Value();

  return Napi::Boolean::New(env, FileExists(arg0.c_str()));
}

Napi::Value IsFileExtension_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (!ValidArgs(env, info, 2)) {
    return env.Null();
  }
  std::string arg0 = info[0].As<Napi::String>().Utf8Value();
  std::string arg1 = info[1].As<Napi::String>().Utf8Value();

  return Napi::Boolean::New(env, IsFileExtension(arg0.c_str(), arg1.c_str()));
}

void node_raylib_init_files(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "FileExists"), Napi::Function::New(env, FileExists_binding));
  exports.Set(Napi::String::New(env, "IsFileExtension"), Napi::Function::New(env, IsFileExtension_binding));
  // TODO: Add remaining files functions.
}


#endif

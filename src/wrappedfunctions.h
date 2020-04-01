#ifndef NODE_RAYLIB_WRAPPEDFUNCTIONS_H
#define NODE_RAYLIB_WRAPPEDFUNCTIONS_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

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
  if (info.Length() == 4) {
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    int arg2 = info[2].As<Napi::Number>().Int32Value();
    int arg3 = info[3].As<Napi::Number>().Int32Value();
    out = TextFormat(arg0.c_str(), arg1, arg2, arg3);
  }
  if (info.Length() == 5) {
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    int arg2 = info[2].As<Napi::Number>().Int32Value();
    int arg3 = info[3].As<Napi::Number>().Int32Value();
    int arg4 = info[2].As<Napi::Number>().Int32Value();
    out = TextFormat(arg0.c_str(), arg1, arg2, arg3, arg4);
  }
  return Napi::String::New(env, out);
}

Camera UpdateCameraWrap(Camera camera) {
  UpdateCamera(&camera);
  return camera;
}
Camera UpdateVrTrackingWrap(Camera camera) {
  UpdateVrTracking(&camera);
  return camera;
}

void node_raylib_wrappedfunctions(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "TextFormat"), Napi::Function::New(env, TextFormat_binding));

  AddFunction(env, exports, "UpdateCameraWrap", UpdateCameraWrap);
  AddFunction(env, exports, "UpdateVrTrackingWrap", UpdateVrTrackingWrap);
}

#endif

#ifndef NODE_RAYLIB_CAMERA_H
#define NODE_RAYLIB_CAMERA_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

/**
 * Wrapper function around UpdateCamera().
 */
Napi::Value node_raylib_init_camera_updatecamera(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }

    Camera input = ToCamera(env, info[0]);
    UpdateCamera(&input);
    return ToValue(env, input);
}

void node_raylib_init_camera(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "SetCameraMode", SetCameraMode);
  AddFunction(env, exports, "SetCameraPanControl", SetCameraPanControl);
  AddFunction(env, exports, "SetCameraAltControl", SetCameraAltControl);
  AddFunction(env, exports, "SetCameraSmoothZoomControl", SetCameraSmoothZoomControl);
  AddFunction(env, exports, "SetCameraMoveControls", SetCameraMoveControls);

  // TODO: Find a clean solution around allowing object references.
  // AddFunction(env, exports, "UpdateCamera", UpdateCamera);
  exports.Set(Napi::String::New(env, "UpdateCameraWrap"), Napi::Function::New(env, node_raylib_init_camera_updatecamera));
}

#endif

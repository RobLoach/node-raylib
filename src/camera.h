#ifndef NODE_RAYLIB_CAMERA_H
#define NODE_RAYLIB_CAMERA_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_camera(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "SetCameraMode", SetCameraMode);
  AddFunction(env, exports, "UpdateCamera", UpdateCamera);
  AddFunction(env, exports, "SetCameraPanControl", SetCameraPanControl);
  AddFunction(env, exports, "SetCameraAltControl", SetCameraAltControl);
  AddFunction(env, exports, "SetCameraSmoothZoomControl", SetCameraSmoothZoomControl);
  AddFunction(env, exports, "SetCameraMoveControls", SetCameraMoveControls);
}

#endif

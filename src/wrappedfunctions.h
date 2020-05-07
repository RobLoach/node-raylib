#ifndef NODE_RAYLIB_WRAPPEDFUNCTIONS_H
#define NODE_RAYLIB_WRAPPEDFUNCTIONS_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

Camera UpdateCameraWrap(Camera camera) {
  UpdateCamera(&camera);
  return camera;
}

Camera UpdateVrTrackingWrap(Camera camera) {
  UpdateVrTracking(&camera);
  return camera;
}

void TraceLogWrap(int logType, const char* message) {
  TraceLog(logType, message);
}

void node_raylib_wrappedfunctions(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "TraceLogWrap", TraceLogWrap);
  AddFunction(env, exports, "UpdateVrTrackingWrap", UpdateVrTrackingWrap);
  AddFunction(env, exports, "UpdateCameraWrap", UpdateCameraWrap);
}

#endif

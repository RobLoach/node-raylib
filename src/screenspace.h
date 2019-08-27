#ifndef NODE_RAYLIB_SCREENSPACE_H
#define NODE_RAYLIB_SCREENSPACE_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

void node_raylib_init_screenspace(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "GetMouseRay", GetMouseRay);
  AddFunction(env, exports, "GetCameraMatrix", GetCameraMatrix);
  AddFunction(env, exports, "GetCameraMatrix2D", GetCameraMatrix2D);
  AddFunction(env, exports, "GetWorldToScreen", GetWorldToScreen);
  AddFunction(env, exports, "GetWorldToScreen2D", GetWorldToScreen2D);
  AddFunction(env, exports, "GetScreenToWorld2D", GetScreenToWorld2D);
}

#endif

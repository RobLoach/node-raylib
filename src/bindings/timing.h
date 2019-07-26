#ifndef NODE_RAYLIB_TIMING_H
#define NODE_RAYLIB_TIMING_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

void node_raylib_init_timing(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "SetTargetFPS", SetTargetFPS);
  AddFunction(env, exports, "GetFPS", GetFPS);
  AddFunction(env, exports, "GetFrameTime", GetFrameTime);
  AddFunction(env, exports, "GetTime", GetTime);
}

#endif

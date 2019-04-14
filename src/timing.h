#ifndef NODE_RAYLIB_TIMING_H
#define NODE_RAYLIB_TIMING_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_timing(Napi::Env& env, Napi::Object& exports) {
  AddMethod(env, exports, "SetTargetFPS", SetTargetFPS);
  AddMethod(env, exports, "GetFPS", GetFPS);
  AddFunction(env, exports, "GetFrameTime", GetFrameTime);
  AddFunction(env, exports, "GetTime", GetTime);
}

#endif

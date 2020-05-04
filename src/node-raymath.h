#ifndef NODE_RAYLIB_NODE_RAYMATH_H_
#define NODE_RAYLIB_NODE_RAYMATH_H_

#include <string>
#include <napi.h>

// TODO: Add raymath.
// #include "raymath.h"

#include "./lib/AddFunction.h"
#include "./lib/AddDefine.h"

void node_raylib_raymath_defines(Napi::Env& env, Napi::Object& exports) {
  // AddDefine(env, exports, "PI", PI);
  // AddDefine(env, exports, "DEG2RAD", DEG2RAD);
  // AddDefine(env, exports, "RAD2DEG", RAD2DEG);
}

void node_raylib_raymath_functions(Napi::Env& env, Napi::Object& exports) {
  (void)env;
  (void)exports;
}

void node_raylib_raymath(Napi::Env& env, Napi::Object& exports) {
  node_raylib_raymath_defines(env, exports);
  node_raylib_raymath_functions(env, exports);
}

#endif // NODE_RAYLIB_NODE_RAYMATH_H_

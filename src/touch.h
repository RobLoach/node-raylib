#ifndef NODE_RAYLIB_TOUCH_H
#define NODE_RAYLIB_TOUCH_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_touch(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "GetTouchX", GetTouchX);
  AddFunction(env, exports, "GetTouchY", GetTouchY);
  AddFunction(env, exports, "GetTouchPosition", GetTouchPosition);
}

#endif

#ifndef NODE_RAYLIB_MOUSE_H
#define NODE_RAYLIB_MOUSE_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_mouse(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "GetMousePosition", GetMousePosition);
  AddFunction(env, exports, "IsMouseButtonPressed", IsMouseButtonPressed);
  AddFunction(env, exports, "IsMouseButtonDown", IsMouseButtonDown);
  // TODO: Add remaining mouse functions.
}

#endif

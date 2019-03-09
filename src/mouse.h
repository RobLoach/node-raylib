#ifndef NODE_RAYLIB_MOUSE_H
#define NODE_RAYLIB_MOUSE_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_mouse(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "IsMouseButtonPressed", IsMouseButtonPressed);
  AddFunction(env, exports, "IsMouseButtonDown", IsMouseButtonDown);
  AddFunction(env, exports, "IsMouseButtonReleased", IsMouseButtonReleased);
  AddFunction(env, exports, "IsMouseButtonUp", IsMouseButtonUp);
  AddFunction(env, exports, "GetMouseX", GetMouseX);
  AddFunction(env, exports, "GetMouseY", GetMouseY);
  AddFunction(env, exports, "GetMousePosition", GetMousePosition);
  AddFunction(env, exports, "SetMousePosition", SetMousePosition);
  AddFunction(env, exports, "SetMouseOffset", SetMouseOffset);
  AddFunction(env, exports, "SetMouseScale", SetMouseScale);
  AddFunction(env, exports, "GetMouseWheelMove", GetMouseWheelMove);
}

#endif

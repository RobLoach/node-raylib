#ifndef NODE_RAYLIB_CORE_H
#define NODE_RAYLIB_CORE_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

void node_raylib_init_core(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "IsKeyPressed", IsKeyPressed);
  AddFunction(env, exports, "IsKeyDown", IsKeyDown);
  AddFunction(env, exports, "IsKeyReleased", IsKeyReleased);
  AddFunction(env, exports, "IsKeyUp", IsKeyUp);
  AddFunction(env, exports, "SetExitKey", SetExitKey);
  AddFunction(env, exports, "GetKeyPressed", GetKeyPressed);
  AddFunction(env, exports, "IsGamepadAvailable", IsGamepadAvailable);
  AddFunction(env, exports, "IsGamepadName", IsGamepadName);
  AddFunction(env, exports, "GetGamepadName", GetGamepadName);
  AddFunction(env, exports, "IsGamepadButtonPressed", IsGamepadButtonPressed);
  AddFunction(env, exports, "IsGamepadButtonDown", IsGamepadButtonDown);
  AddFunction(env, exports, "IsGamepadButtonReleased", IsGamepadButtonReleased);
  AddFunction(env, exports, "IsGamepadButtonUp", IsGamepadButtonUp);
  AddFunction(env, exports, "GetGamepadButtonPressed", GetGamepadButtonPressed);
  AddFunction(env, exports, "GetGamepadAxisCount", GetGamepadAxisCount);
  AddFunction(env, exports, "GetGamepadAxisMovement", GetGamepadAxisMovement);
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
  AddFunction(env, exports, "GetTouchX", GetTouchX);
  AddFunction(env, exports, "GetTouchY", GetTouchY);
  AddFunction(env, exports, "GetTouchPosition", GetTouchPosition);
}

#endif

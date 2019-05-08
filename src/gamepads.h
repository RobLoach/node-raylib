#ifndef NODE_RAYLIB_GAMEPADS_H
#define NODE_RAYLIB_GAMEPADS_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_gamepads(Napi::Env& env, Napi::Object& exports) {
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
}

#endif

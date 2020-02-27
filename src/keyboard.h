#ifndef NODE_RAYLIB_KEYBOARD_H
#define NODE_RAYLIB_KEYBOARD_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

void node_raylib_init_keyboard(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "IsKeyPressed", IsKeyPressed);
  AddFunction(env, exports, "IsKeyDown", IsKeyDown);
  AddFunction(env, exports, "IsKeyReleased", IsKeyReleased);
  AddFunction(env, exports, "IsKeyUp", IsKeyUp);
  AddFunction(env, exports, "SetExitKey", SetExitKey);
  AddFunction(env, exports, "GetKeyPressed", GetKeyPressed);
}

#endif

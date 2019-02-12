#ifndef NODE_RAYLIB_DRAWING_H
#define NODE_RAYLIB_DRAWING_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_drawing(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "ClearBackground", ClearBackground);
  AddFunction(env, exports, "BeginDrawing", BeginDrawing);
  AddFunction(env, exports, "EndDrawing", EndDrawing);
  // TODO: Add remaining drawing functions.
}

#endif

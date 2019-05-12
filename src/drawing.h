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
  AddFunction(env, exports, "BeginMode2D", BeginMode2D);
  AddFunction(env, exports, "EndMode2D", EndMode2D);
  AddFunction(env, exports, "BeginMode3D", BeginMode3D);
  AddFunction(env, exports, "EndMode3D", EndMode3D);
  AddFunction(env, exports, "BeginTextureMode", BeginTextureMode);
  AddFunction(env, exports, "EndTextureMode", EndTextureMode);

  AddFunction(env, exports, "GetMouseRay", GetMouseRay);
  AddFunction(env, exports, "GetWorldToScreen", GetWorldToScreen);
  AddFunction(env, exports, "GetCameraMatrix", GetCameraMatrix);
}

#endif

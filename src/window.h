#ifndef NODE_RAYLIB_WINDOW_H
#define NODE_RAYLIB_WINDOW_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_window(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "InitWindow", InitWindow);
  AddMethod(env, exports, "IsWindowReady", IsWindowReady);
  AddFunction(env, exports, "CloseWindow", CloseWindow);
  AddFunction(env, exports, "WindowShouldClose", WindowShouldClose);
  AddFunction(env, exports, "IsWindowMinimized", IsWindowMinimized);
  AddFunction(env, exports, "ToggleFullscreen", ToggleFullscreen);
  AddFunction(env, exports, "SetWindowTitle", SetWindowTitle);
  AddFunction(env, exports, "SetWindowPosition", SetWindowPosition);
  AddFunction(env, exports, "SetWindowMonitor", SetWindowMonitor);
  AddFunction(env, exports, "SetWindowSize", SetWindowSize);
  AddFunction(env, exports, "GetScreenWidth", GetScreenWidth);
  AddFunction(env, exports, "GetScreenHeight", GetScreenHeight);
  // TODO: SetWindowIcon

  // TODO: Add remaining window functions.
}

#endif

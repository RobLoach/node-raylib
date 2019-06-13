#ifndef NODE_RAYLIB_WINDOW_H
#define NODE_RAYLIB_WINDOW_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_window(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "InitWindow", InitWindow);
  AddFunction(env, exports, "WindowShouldClose", WindowShouldClose);
  AddFunction(env, exports, "CloseWindow", CloseWindow);
  AddFunction(env, exports, "IsWindowReady", IsWindowReady);
  AddFunction(env, exports, "IsWindowMinimized", IsWindowMinimized);
  AddFunction(env, exports, "IsWindowResized", IsWindowResized);
  AddFunction(env, exports, "IsWindowHidden", IsWindowHidden);
  AddFunction(env, exports, "ToggleFullscreen", ToggleFullscreen);
  AddFunction(env, exports, "UnhideWindow", UnhideWindow);
  AddFunction(env, exports, "HideWindow", HideWindow);
  AddFunction(env, exports, "SetWindowIcon", SetWindowIcon);
  AddFunction(env, exports, "SetWindowTitle", SetWindowTitle);
  AddFunction(env, exports, "SetWindowPosition", SetWindowPosition);
  AddFunction(env, exports, "SetWindowMonitor", SetWindowMonitor);
  AddFunction(env, exports, "SetWindowMinSize", SetWindowMinSize);
  AddFunction(env, exports, "SetWindowSize", SetWindowSize);
  AddFunction(env, exports, "GetWindowHandle", GetWindowHandle);
  AddFunction(env, exports, "GetScreenWidth", GetScreenWidth);
  AddFunction(env, exports, "GetScreenHeight", GetScreenHeight);
  AddFunction(env, exports, "GetMonitorCount", GetMonitorCount);
  AddFunction(env, exports, "GetMonitorWidth", GetMonitorWidth);
  AddFunction(env, exports, "GetMonitorHeight", GetMonitorHeight);
  AddFunction(env, exports, "GetMonitorPhysicalWidth", GetMonitorPhysicalWidth);
  AddFunction(env, exports, "GetMonitorPhysicalHeight", GetMonitorPhysicalHeight);
  AddFunction(env, exports, "GetMonitorName", GetMonitorName);
  AddFunction(env, exports, "GetClipboardText", GetClipboardText);
  AddFunction(env, exports, "SetClipboardText", SetClipboardText);
}

#endif

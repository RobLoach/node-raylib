#ifndef NODE_RAYLIB_CURSOR_H
#define NODE_RAYLIB_CURSOR_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_cursor(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "ShowCursor", ShowCursor);
  AddFunction(env, exports, "HideCursor", HideCursor);
  AddFunction(env, exports, "IsCursorHidden", IsCursorHidden);
  AddFunction(env, exports, "EnableCursor", EnableCursor);
  AddFunction(env, exports, "DisableCursor", DisableCursor);
}

#endif

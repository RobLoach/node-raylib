#ifndef NODE_RAYLIB_MISC_H
#define NODE_RAYLIB_MISC_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_misc(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "TakeScreenshot", TakeScreenshot);
  AddFunction(env, exports, "GetRandomValue", GetRandomValue);
  AddFunction(env, exports, "SetConfigFlags", SetConfigFlags);
  // TODO: Add remaining misc functions.
}

#endif

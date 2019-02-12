#ifndef NODE_RAYLIB_COLOR_H
#define NODE_RAYLIB_COLOR_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_color(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "ColorToInt", ColorToInt);
  AddFunction(env, exports, "ColorNormalize", ColorNormalize);
  AddFunction(env, exports, "ColorToHSV", ColorToHSV);
  AddFunction(env, exports, "GetColor", GetColor);
  AddFunction(env, exports, "Fade", Fade);
}

#endif

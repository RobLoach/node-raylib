#ifndef NODE_RAYLIB_RLGL_H
#define NODE_RAYLIB_RLGL_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

void node_raylib_init_rlgl(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "LoadText", LoadText);
  // TODO: Add remaining misc functions.
}

#endif

#ifndef NODE_RAYLIB_FILES_H
#define NODE_RAYLIB_FILES_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_files(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "FileExists", FileExists);
  AddFunction(env, exports, "IsFileExtension", IsFileExtension);
  // TODO: Add remaining files functions.
}


#endif

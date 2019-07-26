#ifndef NODE_RAYLIB_STORAGE_H
#define NODE_RAYLIB_STORAGE_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

void node_raylib_init_storage(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "StorageSaveValue", StorageSaveValue);
  AddFunction(env, exports, "StorageLoadValue", StorageLoadValue);
  AddFunction(env, exports, "OpenURL", OpenURL);
}

#endif

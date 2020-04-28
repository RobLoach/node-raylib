#include <napi.h>
#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"
#include "node-raylib.h"
#include "node-raymath.h"
#include "node-rlgl.h"
#include "wrappedfunctions.h"

/**
 * Initialize all the node-raylib modules.
 */
Napi::Object Init(Napi::Env env, Napi::Object exports) {
  node_raylib_bindings(env, exports);
  node_raylib_raymath(env, exports);
  node_raylib_rlgl(env, exports);
  node_raylib_wrappedfunctions(env, exports);

  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)

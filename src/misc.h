#ifndef NODE_RAYLIB_MISC_H
#define NODE_RAYLIB_MISC_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

void node_raylib_init_misc(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "SetConfigFlags", SetConfigFlags);
  AddFunction(env, exports, "SetTraceLogLevel", SetTraceLogLevel);
  AddFunction(env, exports, "SetTraceLogExit", SetTraceLogExit);
  // AddFunction(env, exports, "SetTraceLogCallback", SetTraceLogCallback);
  // AddFunction(env, exports, "TraceLog", TraceLog);
  AddFunction(env, exports, "TakeScreenshot", TakeScreenshot);
  AddFunction(env, exports, "GetRandomValue", GetRandomValue);
}

#endif

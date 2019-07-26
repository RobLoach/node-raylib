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
  //AddFunction(env, exports, SetTraceLogCallback(TraceLogCallback callback);        // Set a trace log callback to enable custom logging
  //RLAPI void TraceLog(int logType, const char *text, ...);          // Show trace log messages (LOG_DEBUG, LOG_INFO, LOG_WARNING, LOG_ERROR)
  AddFunction(env, exports, "TakeScreenshot", TakeScreenshot);
  AddFunction(env, exports, "GetRandomValue", GetRandomValue);
}

#endif

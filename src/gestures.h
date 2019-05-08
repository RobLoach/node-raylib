#ifndef NODE_RAYLIB_GESTURES_H
#define NODE_RAYLIB_GESTURES_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_gestures(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "SetGesturesEnabled", SetGesturesEnabled);
  AddFunction(env, exports, "IsGestureDetected", IsGestureDetected);
  AddFunction(env, exports, "GetGestureDetected", GetGestureDetected);
  AddFunction(env, exports, "GetTouchPointsCount", GetTouchPointsCount);
  AddFunction(env, exports, "GetGestureHoldDuration", GetGestureHoldDuration);
  AddFunction(env, exports, "GetGestureDragVector", GetGestureDragVector);
  AddFunction(env, exports, "GetGestureDragAngle", GetGestureDragAngle);
  AddFunction(env, exports, "GetGesturePinchVector", GetGesturePinchVector);
  AddFunction(env, exports, "GetGesturePinchAngle", GetGesturePinchAngle);
}

#endif

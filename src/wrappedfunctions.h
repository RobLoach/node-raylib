#ifndef NODE_RAYLIB_WRAPPEDFUNCTIONS_H
#define NODE_RAYLIB_WRAPPEDFUNCTIONS_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

Camera UpdateCameraWrap(Camera camera) {
  UpdateCamera(&camera);
  return camera;
}

Camera UpdateVrTrackingWrap(Camera camera) {
  UpdateVrTracking(&camera);
  return camera;
}

/**
 * RLAPI#SetShaderValue & SetShaderValueV uses a void pointer and some internal
 * logic based on the `uniformType` param for casting, which is tricky with N-API.
 * So let's use type-explicit methods instead...
 */ 
void SetShaderValueFloat(Shader shader, int loc, float value) {
  SetShaderValueV(shader, loc, &value, UNIFORM_FLOAT, 1);
}

void SetShaderValueVector2(Shader shader, int loc, Vector2 value) {
  SetShaderValueV(shader, loc, &value, UNIFORM_VEC2, 2);
}

void SetShaderValueVector3(Shader shader, int loc, Vector3 value) {
  SetShaderValueV(shader, loc, &value, UNIFORM_VEC3, 3);
}

void SetShaderValueVector4(Shader shader, int loc, Vector4 value) {
  SetShaderValueV(shader, loc, &value, UNIFORM_VEC4, 4);
}

void TraceLogWrap(int logType, const char* message) {
  TraceLog(logType, message);
}

void node_raylib_wrappedfunctions(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "SetShaderValueFloat", &SetShaderValueFloat);
  AddFunction(env, exports, "SetShaderValueVector2", &SetShaderValueVector2);
  AddFunction(env, exports, "SetShaderValueVector3", &SetShaderValueVector3);
  AddFunction(env, exports, "SetShaderValueVector4", &SetShaderValueVector4);
  AddFunction(env, exports, "TraceLogWrap", &TraceLogWrap);
  AddFunction(env, exports, "UpdateVrTrackingWrap", &UpdateVrTrackingWrap);
  AddFunction(env, exports, "UpdateCameraWrap", &UpdateCameraWrap);
}

#endif

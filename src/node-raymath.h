#ifndef NODE_RAYLIB_NODE_RAYMATH_H_
#define NODE_RAYLIB_NODE_RAYMATH_H_

#include <string>
#include <napi.h>

// TODO: Add raymath.
#include "raymath.h"

#include "./lib/AddFunction.h"
#include "./lib/AddDefine.h"

void node_raylib_raymath_defines(Napi::Env& env, Napi::Object& exports) {
  AddDefine(env, exports, "PI", PI);
  AddDefine(env, exports, "DEG2RAD", DEG2RAD);
  AddDefine(env, exports, "RAD2DEG", RAD2DEG);
}

void node_raylib_raymath_functions(Napi::Env& env, Napi::Object& exports) {
  // TODO: Add float3 and float16 wrappers for MatrixToFloatV and Vector3ToFloatV
  AddFunction(env, exports, "Clamp", &Clamp);
  AddFunction(env, exports, "Lerp", &Lerp);
  AddFunction(env, exports, "Vector2Zero", &Vector2Zero);
  AddFunction(env, exports, "Vector2One", &Vector2One);
  AddFunction(env, exports, "Vector2Add", &Vector2Add);
  AddFunction(env, exports, "Vector2AddValue", &Vector2AddValue);
  AddFunction(env, exports, "Vector2Subtract", &Vector2Subtract);
  AddFunction(env, exports, "Vector2SubtractValue", &Vector2SubtractValue);
  AddFunction(env, exports, "Vector2Length", &Vector2Length);
  AddFunction(env, exports, "Vector2DotProduct", &Vector2DotProduct);
  AddFunction(env, exports, "Vector2Distance", &Vector2Distance);
  AddFunction(env, exports, "Vector2Angle", &Vector2Angle);
  AddFunction(env, exports, "Vector2Scale", &Vector2Scale);
  AddFunction(env, exports, "Vector2Multiply", &Vector2Multiply);
  AddFunction(env, exports, "Vector2Negate", &Vector2Negate);
  AddFunction(env, exports, "Vector2Divide", &Vector2Divide);
  AddFunction(env, exports, "Vector2Normalize", &Vector2Normalize);
  AddFunction(env, exports, "Vector2Lerp", &Vector2Lerp);
  AddFunction(env, exports, "Vector2Rotate", &Vector2Rotate);
  AddFunction(env, exports, "Vector2MoveTowards", &Vector2MoveTowards);
  AddFunction(env, exports, "Vector3Zero", &Vector3Zero);
  AddFunction(env, exports, "Vector3One", &Vector3One);
  AddFunction(env, exports, "Vector3Add", &Vector3Add);
  AddFunction(env, exports, "Vector3AddValue", &Vector3AddValue);
  AddFunction(env, exports, "Vector3Subtract", &Vector3Subtract);
  AddFunction(env, exports, "Vector3SubtractValue", &Vector3SubtractValue);
  AddFunction(env, exports, "Vector3Scale", &Vector3Scale);
  AddFunction(env, exports, "Vector3Multiply", &Vector3Multiply);
  AddFunction(env, exports, "Vector3CrossProduct", &Vector3CrossProduct);
  AddFunction(env, exports, "Vector3Perpendicular", &Vector3Perpendicular);
  AddFunction(env, exports, "Vector3Length", &Vector3Length);
  AddFunction(env, exports, "Vector3DotProduct", &Vector3DotProduct);
  AddFunction(env, exports, "Vector3Distance", &Vector3Distance);
  AddFunction(env, exports, "Vector3Negate", &Vector3Negate);
  AddFunction(env, exports, "Vector3Divide", &Vector3Divide);
  AddFunction(env, exports, "Vector3Normalize", &Vector3Normalize);
  AddFunction(env, exports, "Vector3OrthoNormalize", &Vector3OrthoNormalize);
  AddFunction(env, exports, "Vector3Transform", &Vector3Transform);
  AddFunction(env, exports, "Vector3RotateByQuaternion", &Vector3RotateByQuaternion);
  AddFunction(env, exports, "Vector3Lerp", &Vector3Lerp);
  AddFunction(env, exports, "Vector3Reflect", &Vector3Reflect);
  AddFunction(env, exports, "Vector3Min", &Vector3Min);
  AddFunction(env, exports, "Vector3Max", &Vector3Max);
  AddFunction(env, exports, "Vector3Barycenter", &Vector3Barycenter);
  // AddFunction(env, exports, "Vector3ToFloatV", &Vector3ToFloatV);
  AddFunction(env, exports, "MatrixDeterminant", &MatrixDeterminant);
  AddFunction(env, exports, "MatrixTrace", &MatrixTrace);
  AddFunction(env, exports, "MatrixTranspose", &MatrixTranspose);
  AddFunction(env, exports, "MatrixInvert", &MatrixInvert);
  AddFunction(env, exports, "MatrixNormalize", &MatrixNormalize);
  AddFunction(env, exports, "MatrixIdentity", &MatrixIdentity);
  AddFunction(env, exports, "MatrixAdd", &MatrixAdd);
  AddFunction(env, exports, "MatrixSubtract", &MatrixSubtract);
  AddFunction(env, exports, "MatrixTranslate", &MatrixTranslate);
  AddFunction(env, exports, "MatrixRotate", &MatrixRotate);
  AddFunction(env, exports, "MatrixRotateXYZ", &MatrixRotateXYZ);
  AddFunction(env, exports, "MatrixRotateX", &MatrixRotateX);
  AddFunction(env, exports, "MatrixRotateY", &MatrixRotateY);
  AddFunction(env, exports, "MatrixRotateZ", &MatrixRotateZ);
  AddFunction(env, exports, "MatrixScale", &MatrixScale);
  AddFunction(env, exports, "MatrixMultiply", &MatrixMultiply);
  AddFunction(env, exports, "MatrixFrustum", &MatrixFrustum);
  AddFunction(env, exports, "MatrixPerspective", &MatrixPerspective);
  AddFunction(env, exports, "MatrixOrtho", &MatrixOrtho);
  AddFunction(env, exports, "MatrixLookAt", &MatrixLookAt);
  // AddFunction(env, exports, "MatrixToFloatV", &MatrixToFloatV);
  AddFunction(env, exports, "QuaternionAdd", &QuaternionAdd);
  AddFunction(env, exports, "QuaternionAddValue", &QuaternionAddValue);
  AddFunction(env, exports, "QuaternionSubtract", &QuaternionSubtract);
  AddFunction(env, exports, "QuaternionSubtractValue", &QuaternionSubtractValue);
  AddFunction(env, exports, "QuaternionIdentity", &QuaternionIdentity);
  AddFunction(env, exports, "QuaternionLength", &QuaternionLength);
  AddFunction(env, exports, "QuaternionNormalize", &QuaternionNormalize);
  AddFunction(env, exports, "QuaternionInvert", &QuaternionInvert);
  AddFunction(env, exports, "QuaternionMultiply", &QuaternionMultiply);
  AddFunction(env, exports, "QuaternionScale", &QuaternionScale);
  AddFunction(env, exports, "QuaternionDivide", &QuaternionDivide);
  AddFunction(env, exports, "QuaternionLerp", &QuaternionLerp);
  AddFunction(env, exports, "QuaternionSlerp", &QuaternionSlerp);
  AddFunction(env, exports, "QuaternionFromVector3ToVector3", &QuaternionFromVector3ToVector3);
  AddFunction(env, exports, "QuaternionFromMatrix", &QuaternionFromMatrix);
  AddFunction(env, exports, "QuaternionToMatrix", &QuaternionToMatrix);
  AddFunction(env, exports, "QuaternionFromAxisAngle", &QuaternionFromAxisAngle);
  AddFunction(env, exports, "QuaternionToAxisAngle", &QuaternionToAxisAngle);
  AddFunction(env, exports, "QuaternionFromEuler", &QuaternionFromEuler);
  AddFunction(env, exports, "QuaternionToEuler", &QuaternionToEuler);
  AddFunction(env, exports, "QuaternionTransform", &QuaternionTransform);
}

void node_raylib_raymath(Napi::Env& env, Napi::Object& exports) {
  node_raylib_raymath_defines(env, exports);
  node_raylib_raymath_functions(env, exports);
}

#endif // NODE_RAYLIB_NODE_RAYMATH_H_

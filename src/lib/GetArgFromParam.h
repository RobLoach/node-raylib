#ifndef NODE_RAYLIB_GETARGFROMPARAM_H_
#define NODE_RAYLIB_GETARGFROMPARAM_H_

#include <napi.h>
// cstring is used for memcpy()
#include <cstring>
#include <iostream>
#include "ToObject.h"

template <typename ReturnType>
inline ReturnType GetArgFromParam(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  throw "GetArgFromParam not defined for this type!";
}

template <>
unsigned char GetArgFromParam<unsigned char>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return info[paramNum].As<Napi::Number>().Int32Value();
}

template <>
unsigned int GetArgFromParam<unsigned int>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return info[paramNum].As<Napi::Number>().Uint32Value();
}

template <>
const char* GetArgFromParam<const char*>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  std::string val = info[paramNum].As<Napi::String>().Utf8Value();
  const std::string::size_type size = val.size();
  char *buffer = new char[size + 1];   //we need extra char for NUL
  memcpy(buffer, val.c_str(), size + 1);
  return buffer;
}

template <>
int GetArgFromParam<int>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return info[paramNum].As<Napi::Number>().Int32Value();
}

template <>
long GetArgFromParam<long>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return info[paramNum].As<Napi::Number>().Int64Value();
}

template <>
bool GetArgFromParam<bool>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return info[paramNum].As<Napi::Boolean>().Value();
}

template <>
Color GetArgFromParam<Color>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToColor(env, info[paramNum]);
}

template <>
Texture GetArgFromParam<Texture>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToTexture(env, info[paramNum]);
}

template <>
RenderTexture2D GetArgFromParam<RenderTexture2D>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToRenderTexture2D(env, info[paramNum]);
}

template <>
NPatchInfo GetArgFromParam<NPatchInfo>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToNPatchInfo(env, info[paramNum]);
}

template <>
Rectangle GetArgFromParam<Rectangle>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToRectangle(env, info[paramNum]);
}

template <>
float GetArgFromParam<float>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return info[paramNum].As<Napi::Number>().FloatValue();
}

template <>
Camera GetArgFromParam<Camera>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToCamera(env, info[paramNum]);
}

template <>
Camera* GetArgFromParam<Camera*>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  std::cout << "Camera* GetArgFromParam" << std::endl;
  Camera params = ToCamera(env, info[paramNum]);
  std::cout << "Fovy: " << params.fovy << std::endl;
  Camera* output = new Camera();
  output->position = params.position;
  output->target = params.target;
  output->up = params.up;
  output->fovy = params.fovy;
  output->type = params.type;
  return output;
}

template <>
Camera2D GetArgFromParam<Camera2D>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToCamera2D(env, info[paramNum]);
}

template <>
Matrix GetArgFromParam<Matrix>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToMatrix(env, info[paramNum]);
}

template <>
Ray GetArgFromParam<Ray>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToRay(env, info[paramNum]);
}

template <>
BoundingBox GetArgFromParam<BoundingBox>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToBoundingBox(env, info[paramNum]);
}

template <>
Vector2 GetArgFromParam<Vector2>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToVector2(env, info[paramNum]);
}

template <>
Vector3 GetArgFromParam<Vector3>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToVector3(env, info[paramNum]);
}

template <>
Vector4 GetArgFromParam<Vector4>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToVector4(env, info[paramNum]);
}

#endif

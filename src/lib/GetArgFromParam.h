#ifndef NODE_RAYLIB_GETARGFROMPARAM_H_
#define NODE_RAYLIB_GETARGFROMPARAM_H_

#include <napi.h>
// cstring is used for memcpy()
#include <cstring>
#include "ToObject.h"

template <typename ReturnType>
inline ReturnType GetArgFromParam(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  (void)env;
  (void)info;
  (void)paramNum;
  throw "GetArgFromParam not defined for this type!";
}

template <>
unsigned char GetArgFromParam<unsigned char>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  (void)env;
  return info[paramNum].As<Napi::Number>().Int32Value();
}

template <>
unsigned int GetArgFromParam<unsigned int>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  (void)env;
  return info[paramNum].As<Napi::Number>().Uint32Value();
}

template <>
const char* GetArgFromParam<const char*>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  (void)env;
  std::string val = info[paramNum].As<Napi::String>().Utf8Value();
  const std::string::size_type size = val.size();
  char *buffer = new char[size + 1];   //we need extra char for NUL
  memcpy(buffer, val.c_str(), size + 1);
  return buffer;
}

template <>
const unsigned char* GetArgFromParam<const unsigned char*>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  (void)env;
  Napi::Buffer<unsigned char> buf = info[paramNum].As<Napi::Buffer<unsigned char>>();
  return (const unsigned char*) buf.Data();
}

template <>
int GetArgFromParam<int>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  (void)env;
  return info[paramNum].As<Napi::Number>().Int32Value();
}

template <>
long GetArgFromParam<long>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  (void)env;
  return info[paramNum].As<Napi::Number>().Int64Value();
}

template <>
bool GetArgFromParam<bool>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  (void)env;
  return info[paramNum].As<Napi::Boolean>().Value();
}

template <>
float GetArgFromParam<float>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  (void)env;
  return info[paramNum].As<Napi::Number>().FloatValue();
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

template <>
Matrix GetArgFromParam<Matrix>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToMatrix(env, info[paramNum]);
}

template <>
Color GetArgFromParam<Color>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToColor(env, info[paramNum]);
}

template <>
Rectangle GetArgFromParam<Rectangle>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToRectangle(env, info[paramNum]);
}

template <>
Image GetArgFromParam<Image>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToImage(env, info[paramNum]);
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
CharInfo GetArgFromParam<CharInfo>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToCharInfo(env, info[paramNum]);
}

template <>
Camera GetArgFromParam<Camera>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToCamera(env, info[paramNum]);
}

template <>
Camera* GetArgFromParam<Camera*>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  Camera params = ToCamera(env, info[paramNum]);
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
Shader GetArgFromParam<Shader>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToShader(env, info[paramNum]);
}

template <>
MaterialMap GetArgFromParam<MaterialMap>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToMaterialMap(env, info[paramNum]);
}

template <>
Material GetArgFromParam<Material>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToMaterial(env, info[paramNum]);
}

template <>
Transform GetArgFromParam<Transform>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToTransform(env, info[paramNum]);
}

template <>
Ray GetArgFromParam<Ray>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToRay(env, info[paramNum]);
}

template <>
RayHitInfo GetArgFromParam<RayHitInfo>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToRayHitInfo(env, info[paramNum]);
}

template <>
BoundingBox GetArgFromParam<BoundingBox>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToBoundingBox(env, info[paramNum]);
}

template <>
Wave GetArgFromParam<Wave>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToWave(env, info[paramNum]);
}

template <>
Font GetArgFromParam<Font>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToFont(env, info[paramNum]);
}

template <>
AudioStream GetArgFromParam<AudioStream>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToAudioStream(env, info[paramNum]);
}

template <>
Sound GetArgFromParam<Sound>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToSound(env, info[paramNum]);
}

template <>
Music GetArgFromParam<Music>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    return ToMusic(env, info[paramNum]);
}

#endif

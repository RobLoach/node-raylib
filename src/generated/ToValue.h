
#ifndef NODE_RAYLIB_TOVALUE_H_
#define NODE_RAYLIB_TOVALUE_H_

#include <napi.h>
#include "./ToObject.h"

inline Napi::Value ToValue(Napi::Env& env, bool value) {
  return Napi::Boolean::New(env, value);
}

inline Napi::Value ToValue(Napi::Env& env, const char* value) {
  return Napi::String::New(env, value);
}

inline Napi::Value ToValue(Napi::Env& env, const std::string& value) {
  return Napi::String::New(env, value);
}

inline Napi::Value ToValue(Napi::Env& env, char* value) {
  return Napi::String::New(env, value);
}

inline Napi::Value ToValue(Napi::Env& env, int value) {
  return Napi::Number::New(env, value);
}

inline Napi::Value ToValue(Napi::Env& env, unsigned int value) {
  return Napi::Number::New(env, value);
}

inline Napi::Value ToValue(Napi::Env& env, long value) {
  return Napi::Number::New(env, value);
}

inline Napi::Value ToValue(Napi::Env& env, double value) {
  return Napi::Number::New(env, value);
}

inline Napi::Value ToValue(Napi::Env& env, Vector2 value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Vector3 value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Vector4 value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Color value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Rectangle value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Image value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Texture value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, RenderTexture value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, NPatchInfo value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, GlyphInfo value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Font value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Camera3D value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Camera2D value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Mesh value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Shader value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, MaterialMap value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Material value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Transform value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, BoneInfo value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Model value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, ModelAnimation value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Ray value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, RayCollision value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, BoundingBox value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Wave value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, AudioStream value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Sound value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, Music value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, VrDeviceInfo value) { return ToObject(env, value); }
inline Napi::Value ToValue(Napi::Env& env, VrStereoConfig value) { return ToObject(env, value); }

#endif

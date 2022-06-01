
// GENERATED CODE: DO NOT MODIFY
#include <string>
#include <napi.h>
#include <iostream>
#include <cstring>
#include "raylib.h"
#include "extras/easings.h"
using namespace Napi;

inline Napi::Value ToValue(Napi::Env env, bool value) {
  return Napi::Boolean::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, const char* value) {
  return Napi::String::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, const std::string& value) {
  return Napi::String::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, char* value) {
  return Napi::String::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, int value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, unsigned int value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, long value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, double value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, float value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, void * value) {
  return Napi::Number::New(env, (int64_t) value);
}

inline float floatFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>();
}
inline int intFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>();
}
uintptr_t pointerFromValue(const Napi::CallbackInfo& info, int index) {
  return (uintptr_t) info[index].As<Napi::Number>().Int64Value();
}
inline unsigned char unsignedcharFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().Uint32Value();
}
inline unsigned int unsignedintFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>();
}
inline bool boolFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Boolean>();
}
inline const char * stringFromValue(const Napi::CallbackInfo& info, int index) {
  std::string val = info[index].As<Napi::String>().Utf8Value();
  const std::string::size_type size = val.size();
  char *buffer = new char[size + 1];   //we need extra char for NUL
  memcpy(buffer, val.c_str(), size + 1);
  return buffer;
}
inline char charFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().Uint32Value();
}

// Convert structs from Napi::Values in info[] arguments

inline Vector2 Vector2FromValue(const Napi::CallbackInfo& info, int index) {
  return {
     floatFromValue(info, index + 0),
     floatFromValue(info, index + 1)
  };
}

inline Vector3 Vector3FromValue(const Napi::CallbackInfo& info, int index) {
  return {
     floatFromValue(info, index + 0),
     floatFromValue(info, index + 1),
     floatFromValue(info, index + 2)
  };
}

inline Vector4 Vector4FromValue(const Napi::CallbackInfo& info, int index) {
  return {
     floatFromValue(info, index + 0),
     floatFromValue(info, index + 1),
     floatFromValue(info, index + 2),
     floatFromValue(info, index + 3)
  };
}

inline Matrix MatrixFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     floatFromValue(info, index + 0),
     floatFromValue(info, index + 1),
     floatFromValue(info, index + 2),
     floatFromValue(info, index + 3),
     floatFromValue(info, index + 4),
     floatFromValue(info, index + 5),
     floatFromValue(info, index + 6),
     floatFromValue(info, index + 7),
     floatFromValue(info, index + 8),
     floatFromValue(info, index + 9),
     floatFromValue(info, index + 10),
     floatFromValue(info, index + 11),
     floatFromValue(info, index + 12),
     floatFromValue(info, index + 13),
     floatFromValue(info, index + 14),
     floatFromValue(info, index + 15)
  };
}

inline Color ColorFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     unsignedcharFromValue(info, index + 0),
     unsignedcharFromValue(info, index + 1),
     unsignedcharFromValue(info, index + 2),
     unsignedcharFromValue(info, index + 3)
  };
}

inline Rectangle RectangleFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     floatFromValue(info, index + 0),
     floatFromValue(info, index + 1),
     floatFromValue(info, index + 2),
     floatFromValue(info, index + 3)
  };
}

inline Image ImageFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     (void *) pointerFromValue(info, index + 0),
     intFromValue(info, index + 1),
     intFromValue(info, index + 2),
     intFromValue(info, index + 3),
     intFromValue(info, index + 4)
  };
}

inline Texture TextureFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     unsignedintFromValue(info, index + 0),
     intFromValue(info, index + 1),
     intFromValue(info, index + 2),
     intFromValue(info, index + 3),
     intFromValue(info, index + 4)
  };
}

inline RenderTexture RenderTextureFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     unsignedintFromValue(info, index + 0),
     TextureFromValue(info, index + 1),
     TextureFromValue(info, index + 6)
  };
}

inline NPatchInfo NPatchInfoFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     RectangleFromValue(info, index + 0),
     intFromValue(info, index + 4),
     intFromValue(info, index + 5),
     intFromValue(info, index + 6),
     intFromValue(info, index + 7),
     intFromValue(info, index + 8)
  };
}

inline GlyphInfo GlyphInfoFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     intFromValue(info, index + 0),
     intFromValue(info, index + 1),
     intFromValue(info, index + 2),
     intFromValue(info, index + 3),
     ImageFromValue(info, index + 4)
  };
}

inline Font FontFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     intFromValue(info, index + 0),
     intFromValue(info, index + 1),
     intFromValue(info, index + 2),
     TextureFromValue(info, index + 3),
     (Rectangle *) pointerFromValue(info, index + 8),
     (GlyphInfo *) pointerFromValue(info, index + 9)
  };
}

inline Camera3D Camera3DFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     Vector3FromValue(info, index + 0),
     Vector3FromValue(info, index + 3),
     Vector3FromValue(info, index + 6),
     floatFromValue(info, index + 9),
     intFromValue(info, index + 10)
  };
}

inline Camera2D Camera2DFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     Vector2FromValue(info, index + 0),
     Vector2FromValue(info, index + 2),
     floatFromValue(info, index + 4),
     floatFromValue(info, index + 5)
  };
}

inline Mesh MeshFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     intFromValue(info, index + 0),
     intFromValue(info, index + 1),
     (float *) pointerFromValue(info, index + 2),
     (float *) pointerFromValue(info, index + 3),
     (float *) pointerFromValue(info, index + 4),
     (float *) pointerFromValue(info, index + 5),
     (float *) pointerFromValue(info, index + 6),
     (unsigned char *) pointerFromValue(info, index + 7),
     (unsigned short *) pointerFromValue(info, index + 8),
     (float *) pointerFromValue(info, index + 9),
     (float *) pointerFromValue(info, index + 10),
     (unsigned char *) pointerFromValue(info, index + 11),
     (float *) pointerFromValue(info, index + 12),
     unsignedintFromValue(info, index + 13),
     (unsigned int *) pointerFromValue(info, index + 14)
  };
}

inline Shader ShaderFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     unsignedintFromValue(info, index + 0),
     (int *) pointerFromValue(info, index + 1)
  };
}

inline MaterialMap MaterialMapFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     TextureFromValue(info, index + 0),
     ColorFromValue(info, index + 5),
     floatFromValue(info, index + 9)
  };
}

inline Material MaterialFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     ShaderFromValue(info, index + 0),
     (MaterialMap *) pointerFromValue(info, index + 2),
     floatFromValue(info, index + 3)
  };
}

inline Transform TransformFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     Vector3FromValue(info, index + 0),
     Vector4FromValue(info, index + 3),
     Vector3FromValue(info, index + 7)
  };
}

inline BoneInfo BoneInfoFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     charFromValue(info, index + 0),
     charFromValue(info, index + 1)
  };
}

inline Model ModelFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     MatrixFromValue(info, index + 0),
     intFromValue(info, index + 16),
     intFromValue(info, index + 17),
     (Mesh *) pointerFromValue(info, index + 18),
     (Material *) pointerFromValue(info, index + 19),
     (int *) pointerFromValue(info, index + 20),
     intFromValue(info, index + 21),
     (BoneInfo *) pointerFromValue(info, index + 22),
     (Transform *) pointerFromValue(info, index + 23)
  };
}

inline ModelAnimation ModelAnimationFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     intFromValue(info, index + 0),
     intFromValue(info, index + 1),
     (BoneInfo *) pointerFromValue(info, index + 2),
     (Transform **) pointerFromValue(info, index + 3)
  };
}

inline Ray RayFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     Vector3FromValue(info, index + 0),
     Vector3FromValue(info, index + 3)
  };
}

inline RayCollision RayCollisionFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     boolFromValue(info, index + 0),
     floatFromValue(info, index + 1),
     Vector3FromValue(info, index + 2),
     Vector3FromValue(info, index + 5)
  };
}

inline BoundingBox BoundingBoxFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     Vector3FromValue(info, index + 0),
     Vector3FromValue(info, index + 3)
  };
}

inline Wave WaveFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     unsignedintFromValue(info, index + 0),
     unsignedintFromValue(info, index + 1),
     unsignedintFromValue(info, index + 2),
     unsignedintFromValue(info, index + 3),
     (void *) pointerFromValue(info, index + 4)
  };
}

inline AudioStream AudioStreamFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     (rAudioBuffer *) pointerFromValue(info, index + 0),
     unsignedintFromValue(info, index + 1),
     unsignedintFromValue(info, index + 2),
     unsignedintFromValue(info, index + 3)
  };
}

inline Sound SoundFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     AudioStreamFromValue(info, index + 0),
     unsignedintFromValue(info, index + 4)
  };
}

inline Music MusicFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     AudioStreamFromValue(info, index + 0),
     unsignedintFromValue(info, index + 4),
     boolFromValue(info, index + 5),
     intFromValue(info, index + 6),
     (void *) pointerFromValue(info, index + 7)
  };
}

inline VrDeviceInfo VrDeviceInfoFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     intFromValue(info, index + 0),
     intFromValue(info, index + 1),
     floatFromValue(info, index + 2),
     floatFromValue(info, index + 3),
     floatFromValue(info, index + 4),
     floatFromValue(info, index + 5),
     floatFromValue(info, index + 6),
     floatFromValue(info, index + 7),
     floatFromValue(info, index + 8),
     floatFromValue(info, index + 9)
  };
}

inline VrStereoConfig VrStereoConfigFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     MatrixFromValue(info, index + 0),
     MatrixFromValue(info, index + 16),
     floatFromValue(info, index + 32),
     floatFromValue(info, index + 33),
     floatFromValue(info, index + 34),
     floatFromValue(info, index + 35),
     floatFromValue(info, index + 36),
     floatFromValue(info, index + 37)
  };
}
// Convert structs to Napi::Objects for output to JS

inline Napi::Value ToValue(Napi::Env env, Vector2 obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", ToValue(env, obj.x));
  out.Set("y", ToValue(env, obj.y));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Vector3 obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", ToValue(env, obj.x));
  out.Set("y", ToValue(env, obj.y));
  out.Set("z", ToValue(env, obj.z));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Vector4 obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", ToValue(env, obj.x));
  out.Set("y", ToValue(env, obj.y));
  out.Set("z", ToValue(env, obj.z));
  out.Set("w", ToValue(env, obj.w));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Matrix obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("m0", ToValue(env, obj.m0));
  out.Set("m1", ToValue(env, obj.m1));
  out.Set("m2", ToValue(env, obj.m2));
  out.Set("m3", ToValue(env, obj.m3));
  out.Set("m4", ToValue(env, obj.m4));
  out.Set("m5", ToValue(env, obj.m5));
  out.Set("m6", ToValue(env, obj.m6));
  out.Set("m7", ToValue(env, obj.m7));
  out.Set("m8", ToValue(env, obj.m8));
  out.Set("m9", ToValue(env, obj.m9));
  out.Set("m10", ToValue(env, obj.m10));
  out.Set("m11", ToValue(env, obj.m11));
  out.Set("m12", ToValue(env, obj.m12));
  out.Set("m13", ToValue(env, obj.m13));
  out.Set("m14", ToValue(env, obj.m14));
  out.Set("m15", ToValue(env, obj.m15));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Color obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("r", ToValue(env, obj.r));
  out.Set("g", ToValue(env, obj.g));
  out.Set("b", ToValue(env, obj.b));
  out.Set("a", ToValue(env, obj.a));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Rectangle obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", ToValue(env, obj.x));
  out.Set("y", ToValue(env, obj.y));
  out.Set("width", ToValue(env, obj.width));
  out.Set("height", ToValue(env, obj.height));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Image obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("data", ToValue(env, obj.data));
  out.Set("width", ToValue(env, obj.width));
  out.Set("height", ToValue(env, obj.height));
  out.Set("mipmaps", ToValue(env, obj.mipmaps));
  out.Set("format", ToValue(env, obj.format));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Texture obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("id", ToValue(env, obj.id));
  out.Set("width", ToValue(env, obj.width));
  out.Set("height", ToValue(env, obj.height));
  out.Set("mipmaps", ToValue(env, obj.mipmaps));
  out.Set("format", ToValue(env, obj.format));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, RenderTexture obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("id", ToValue(env, obj.id));
  out.Set("texture", ToValue(env, obj.texture));
  out.Set("depth", ToValue(env, obj.depth));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, NPatchInfo obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("source", ToValue(env, obj.source));
  out.Set("left", ToValue(env, obj.left));
  out.Set("top", ToValue(env, obj.top));
  out.Set("right", ToValue(env, obj.right));
  out.Set("bottom", ToValue(env, obj.bottom));
  out.Set("layout", ToValue(env, obj.layout));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, GlyphInfo obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("value", ToValue(env, obj.value));
  out.Set("offsetX", ToValue(env, obj.offsetX));
  out.Set("offsetY", ToValue(env, obj.offsetY));
  out.Set("advanceX", ToValue(env, obj.advanceX));
  out.Set("image", ToValue(env, obj.image));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Font obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("baseSize", ToValue(env, obj.baseSize));
  out.Set("glyphCount", ToValue(env, obj.glyphCount));
  out.Set("glyphPadding", ToValue(env, obj.glyphPadding));
  out.Set("texture", ToValue(env, obj.texture));
  out.Set("recs", ToValue(env, obj.recs));
  out.Set("glyphs", ToValue(env, obj.glyphs));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Camera3D obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("position", ToValue(env, obj.position));
  out.Set("target", ToValue(env, obj.target));
  out.Set("up", ToValue(env, obj.up));
  out.Set("fovy", ToValue(env, obj.fovy));
  out.Set("projection", ToValue(env, obj.projection));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Camera2D obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("offset", ToValue(env, obj.offset));
  out.Set("target", ToValue(env, obj.target));
  out.Set("rotation", ToValue(env, obj.rotation));
  out.Set("zoom", ToValue(env, obj.zoom));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Mesh obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("vertexCount", ToValue(env, obj.vertexCount));
  out.Set("triangleCount", ToValue(env, obj.triangleCount));
  out.Set("vertices", ToValue(env, obj.vertices));
  out.Set("texcoords", ToValue(env, obj.texcoords));
  out.Set("texcoords2", ToValue(env, obj.texcoords2));
  out.Set("normals", ToValue(env, obj.normals));
  out.Set("tangents", ToValue(env, obj.tangents));
  out.Set("colors", ToValue(env, obj.colors));
  out.Set("indices", ToValue(env, obj.indices));
  out.Set("animVertices", ToValue(env, obj.animVertices));
  out.Set("animNormals", ToValue(env, obj.animNormals));
  out.Set("boneIds", ToValue(env, obj.boneIds));
  out.Set("boneWeights", ToValue(env, obj.boneWeights));
  out.Set("vaoId", ToValue(env, obj.vaoId));
  out.Set("vboId", ToValue(env, obj.vboId));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Shader obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("id", ToValue(env, obj.id));
  out.Set("locs", ToValue(env, obj.locs));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, MaterialMap obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("texture", ToValue(env, obj.texture));
  out.Set("color", ToValue(env, obj.color));
  out.Set("value", ToValue(env, obj.value));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Material obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("shader", ToValue(env, obj.shader));
  out.Set("maps", ToValue(env, obj.maps));
  out.Set("params", ToValue(env, obj.params));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Transform obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("translation", ToValue(env, obj.translation));
  out.Set("rotation", ToValue(env, obj.rotation));
  out.Set("scale", ToValue(env, obj.scale));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, BoneInfo obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("name", ToValue(env, obj.name));
  out.Set("parent", ToValue(env, obj.parent));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Model obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("transform", ToValue(env, obj.transform));
  out.Set("meshCount", ToValue(env, obj.meshCount));
  out.Set("materialCount", ToValue(env, obj.materialCount));
  out.Set("meshes", ToValue(env, obj.meshes));
  out.Set("materials", ToValue(env, obj.materials));
  out.Set("meshMaterial", ToValue(env, obj.meshMaterial));
  out.Set("boneCount", ToValue(env, obj.boneCount));
  out.Set("bones", ToValue(env, obj.bones));
  out.Set("bindPose", ToValue(env, obj.bindPose));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, ModelAnimation obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("boneCount", ToValue(env, obj.boneCount));
  out.Set("frameCount", ToValue(env, obj.frameCount));
  out.Set("bones", ToValue(env, obj.bones));
  out.Set("framePoses", ToValue(env, obj.framePoses));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Ray obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("position", ToValue(env, obj.position));
  out.Set("direction", ToValue(env, obj.direction));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, RayCollision obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("hit", ToValue(env, obj.hit));
  out.Set("distance", ToValue(env, obj.distance));
  out.Set("point", ToValue(env, obj.point));
  out.Set("normal", ToValue(env, obj.normal));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, BoundingBox obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("min", ToValue(env, obj.min));
  out.Set("max", ToValue(env, obj.max));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Wave obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("frameCount", ToValue(env, obj.frameCount));
  out.Set("sampleRate", ToValue(env, obj.sampleRate));
  out.Set("sampleSize", ToValue(env, obj.sampleSize));
  out.Set("channels", ToValue(env, obj.channels));
  out.Set("data", ToValue(env, obj.data));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, AudioStream obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("buffer", ToValue(env, obj.buffer));
  out.Set("sampleRate", ToValue(env, obj.sampleRate));
  out.Set("sampleSize", ToValue(env, obj.sampleSize));
  out.Set("channels", ToValue(env, obj.channels));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Sound obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("stream", ToValue(env, obj.stream));
  out.Set("frameCount", ToValue(env, obj.frameCount));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, Music obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("stream", ToValue(env, obj.stream));
  out.Set("frameCount", ToValue(env, obj.frameCount));
  out.Set("looping", ToValue(env, obj.looping));
  out.Set("ctxType", ToValue(env, obj.ctxType));
  out.Set("ctxData", ToValue(env, obj.ctxData));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, VrDeviceInfo obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("hResolution", ToValue(env, obj.hResolution));
  out.Set("vResolution", ToValue(env, obj.vResolution));
  out.Set("hScreenSize", ToValue(env, obj.hScreenSize));
  out.Set("vScreenSize", ToValue(env, obj.vScreenSize));
  out.Set("vScreenCenter", ToValue(env, obj.vScreenCenter));
  out.Set("eyeToScreenDistance", ToValue(env, obj.eyeToScreenDistance));
  out.Set("lensSeparationDistance", ToValue(env, obj.lensSeparationDistance));
  out.Set("interpupillaryDistance", ToValue(env, obj.interpupillaryDistance));
  out.Set("lensDistortionValues", ToValue(env, obj.lensDistortionValues));
  out.Set("chromaAbCorrection", ToValue(env, obj.chromaAbCorrection));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, VrStereoConfig obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("projection", ToValue(env, obj.projection));
  out.Set("viewOffset", ToValue(env, obj.viewOffset));
  out.Set("leftLensCenter", ToValue(env, obj.leftLensCenter));
  out.Set("rightLensCenter", ToValue(env, obj.rightLensCenter));
  out.Set("leftScreenCenter", ToValue(env, obj.leftScreenCenter));
  out.Set("rightScreenCenter", ToValue(env, obj.rightScreenCenter));
  out.Set("scale", ToValue(env, obj.scale));
  out.Set("scaleIn", ToValue(env, obj.scaleIn));
  return out;
}

inline Texture2D Texture2DFromValue(const Napi::CallbackInfo& info, int index) {
  return (Texture2D) TextureFromValue(info, index);
}
inline RenderTexture2D RenderTexture2DFromValue(const Napi::CallbackInfo& info, int index) {
  return (RenderTexture2D) RenderTextureFromValue(info, index);
}
inline Camera CameraFromValue(const Napi::CallbackInfo& info, int index) {
  return Camera3DFromValue(info, index);
}

// Raylib API function bindings

Napi::Value BindWindowShouldClose(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    WindowShouldClose(
      
    )
  );
}

Napi::Value BindIsWindowReady(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsWindowReady(
      
    )
  );
}

Napi::Value BindIsWindowFullscreen(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsWindowFullscreen(
      
    )
  );
}

Napi::Value BindIsWindowHidden(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsWindowHidden(
      
    )
  );
}

Napi::Value BindIsWindowMinimized(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsWindowMinimized(
      
    )
  );
}

Napi::Value BindIsWindowMaximized(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsWindowMaximized(
      
    )
  );
}

Napi::Value BindIsWindowFocused(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsWindowFocused(
      
    )
  );
}

Napi::Value BindIsWindowResized(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsWindowResized(
      
    )
  );
}

Napi::Value BindIsWindowState(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsWindowState(
       unsignedintFromValue(info, 0)
    )
  );
}

Napi::Value BindGetWindowHandle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetWindowHandle(
      
    )
  );
}

Napi::Value BindGetScreenWidth(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetScreenWidth(
      
    )
  );
}

Napi::Value BindGetScreenHeight(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetScreenHeight(
      
    )
  );
}

Napi::Value BindGetMonitorCount(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMonitorCount(
      
    )
  );
}

Napi::Value BindGetCurrentMonitor(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetCurrentMonitor(
      
    )
  );
}

Napi::Value BindGetMonitorPosition(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMonitorPosition(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetMonitorWidth(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMonitorWidth(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetMonitorHeight(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMonitorHeight(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetMonitorPhysicalWidth(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMonitorPhysicalWidth(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetMonitorPhysicalHeight(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMonitorPhysicalHeight(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetMonitorRefreshRate(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMonitorRefreshRate(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetWindowPosition(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetWindowPosition(
      
    )
  );
}

Napi::Value BindGetWindowScaleDPI(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetWindowScaleDPI(
      
    )
  );
}

Napi::Value BindGetMonitorName(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMonitorName(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetClipboardText(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetClipboardText(
      
    )
  );
}

Napi::Value BindIsCursorHidden(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsCursorHidden(
      
    )
  );
}

Napi::Value BindIsCursorOnScreen(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsCursorOnScreen(
      
    )
  );
}

Napi::Value BindLoadShader(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadShader(
       (const char *) stringFromValue(info, 0),
       (const char *) stringFromValue(info, 1)
    )
  );
}

Napi::Value BindLoadShaderFromMemory(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadShaderFromMemory(
       (const char *) stringFromValue(info, 0),
       (const char *) stringFromValue(info, 1)
    )
  );
}

Napi::Value BindGetShaderLocation(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetShaderLocation(
       ShaderFromValue(info, 0),
       (const char *) stringFromValue(info, 2)
    )
  );
}

Napi::Value BindGetShaderLocationAttrib(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetShaderLocationAttrib(
       ShaderFromValue(info, 0),
       (const char *) stringFromValue(info, 2)
    )
  );
}

Napi::Value BindGetMouseRay(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMouseRay(
       Vector2FromValue(info, 0),
       Camera3DFromValue(info, 2)
    )
  );
}

Napi::Value BindGetCameraMatrix(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetCameraMatrix(
       Camera3DFromValue(info, 0)
    )
  );
}

Napi::Value BindGetCameraMatrix2D(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetCameraMatrix2D(
       Camera2DFromValue(info, 0)
    )
  );
}

Napi::Value BindGetWorldToScreen(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetWorldToScreen(
       Vector3FromValue(info, 0),
       Camera3DFromValue(info, 3)
    )
  );
}

Napi::Value BindGetWorldToScreenEx(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetWorldToScreenEx(
       Vector3FromValue(info, 0),
       Camera3DFromValue(info, 3),
       intFromValue(info, 14),
       intFromValue(info, 15)
    )
  );
}

Napi::Value BindGetWorldToScreen2D(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetWorldToScreen2D(
       Vector2FromValue(info, 0),
       Camera2DFromValue(info, 2)
    )
  );
}

Napi::Value BindGetScreenToWorld2D(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetScreenToWorld2D(
       Vector2FromValue(info, 0),
       Camera2DFromValue(info, 2)
    )
  );
}

Napi::Value BindGetFPS(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetFPS(
      
    )
  );
}

Napi::Value BindGetFrameTime(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetFrameTime(
      
    )
  );
}

Napi::Value BindGetTime(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetTime(
      
    )
  );
}

Napi::Value BindGetRandomValue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetRandomValue(
       intFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindMemAlloc(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MemAlloc(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindMemRealloc(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MemRealloc(
       (void *) pointerFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindLoadFileData(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadFileData(
       (const char *) stringFromValue(info, 0),
       (unsigned int *) pointerFromValue(info, 1)
    )
  );
}

Napi::Value BindSaveFileData(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    SaveFileData(
       (const char *) stringFromValue(info, 0),
       (void *) pointerFromValue(info, 1),
       unsignedintFromValue(info, 2)
    )
  );
}

Napi::Value BindLoadFileText(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadFileText(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindSaveFileText(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    SaveFileText(
       (const char *) stringFromValue(info, 0),
       (char *) pointerFromValue(info, 1)
    )
  );
}

Napi::Value BindFileExists(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    FileExists(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindDirectoryExists(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    DirectoryExists(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindIsFileExtension(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsFileExtension(
       (const char *) stringFromValue(info, 0),
       (const char *) stringFromValue(info, 1)
    )
  );
}

Napi::Value BindGetFileExtension(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetFileExtension(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindGetFileName(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetFileName(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindGetFileNameWithoutExt(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetFileNameWithoutExt(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindGetDirectoryPath(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetDirectoryPath(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindGetPrevDirectoryPath(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetPrevDirectoryPath(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindGetWorkingDirectory(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetWorkingDirectory(
      
    )
  );
}

Napi::Value BindGetDirectoryFiles(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetDirectoryFiles(
       (const char *) stringFromValue(info, 0),
       (int *) pointerFromValue(info, 1)
    )
  );
}

Napi::Value BindChangeDirectory(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ChangeDirectory(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindIsFileDropped(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsFileDropped(
      
    )
  );
}

Napi::Value BindGetDroppedFiles(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetDroppedFiles(
       (int *) pointerFromValue(info, 0)
    )
  );
}

Napi::Value BindGetFileModTime(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetFileModTime(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindCompressData(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CompressData(
       (unsigned char *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       (int *) pointerFromValue(info, 2)
    )
  );
}

Napi::Value BindDecompressData(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    DecompressData(
       (unsigned char *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       (int *) pointerFromValue(info, 2)
    )
  );
}

Napi::Value BindEncodeDataBase64(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EncodeDataBase64(
       (const unsigned char *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       (int *) pointerFromValue(info, 2)
    )
  );
}

Napi::Value BindDecodeDataBase64(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    DecodeDataBase64(
       (unsigned char *) pointerFromValue(info, 0),
       (int *) pointerFromValue(info, 1)
    )
  );
}

Napi::Value BindSaveStorageValue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    SaveStorageValue(
       unsignedintFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindLoadStorageValue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadStorageValue(
       unsignedintFromValue(info, 0)
    )
  );
}

Napi::Value BindIsKeyPressed(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsKeyPressed(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindIsKeyDown(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsKeyDown(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindIsKeyReleased(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsKeyReleased(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindIsKeyUp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsKeyUp(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetKeyPressed(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetKeyPressed(
      
    )
  );
}

Napi::Value BindGetCharPressed(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetCharPressed(
      
    )
  );
}

Napi::Value BindIsGamepadAvailable(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsGamepadAvailable(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetGamepadName(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetGamepadName(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindIsGamepadButtonPressed(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsGamepadButtonPressed(
       intFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindIsGamepadButtonDown(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsGamepadButtonDown(
       intFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindIsGamepadButtonReleased(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsGamepadButtonReleased(
       intFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindIsGamepadButtonUp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsGamepadButtonUp(
       intFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindGetGamepadButtonPressed(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetGamepadButtonPressed(
      
    )
  );
}

Napi::Value BindGetGamepadAxisCount(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetGamepadAxisCount(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetGamepadAxisMovement(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetGamepadAxisMovement(
       intFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindSetGamepadMappings(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    SetGamepadMappings(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindIsMouseButtonPressed(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsMouseButtonPressed(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindIsMouseButtonDown(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsMouseButtonDown(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindIsMouseButtonReleased(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsMouseButtonReleased(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindIsMouseButtonUp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsMouseButtonUp(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetMouseX(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMouseX(
      
    )
  );
}

Napi::Value BindGetMouseY(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMouseY(
      
    )
  );
}

Napi::Value BindGetMousePosition(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMousePosition(
      
    )
  );
}

Napi::Value BindGetMouseDelta(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMouseDelta(
      
    )
  );
}

Napi::Value BindGetMouseWheelMove(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMouseWheelMove(
      
    )
  );
}

Napi::Value BindGetTouchX(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetTouchX(
      
    )
  );
}

Napi::Value BindGetTouchY(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetTouchY(
      
    )
  );
}

Napi::Value BindGetTouchPosition(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetTouchPosition(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetTouchPointId(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetTouchPointId(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetTouchPointCount(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetTouchPointCount(
      
    )
  );
}

Napi::Value BindIsGestureDetected(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsGestureDetected(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindGetGestureDetected(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetGestureDetected(
      
    )
  );
}

Napi::Value BindGetGestureHoldDuration(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetGestureHoldDuration(
      
    )
  );
}

Napi::Value BindGetGestureDragVector(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetGestureDragVector(
      
    )
  );
}

Napi::Value BindGetGestureDragAngle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetGestureDragAngle(
      
    )
  );
}

Napi::Value BindGetGesturePinchVector(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetGesturePinchVector(
      
    )
  );
}

Napi::Value BindGetGesturePinchAngle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetGesturePinchAngle(
      
    )
  );
}

Napi::Value BindCheckCollisionRecs(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CheckCollisionRecs(
       RectangleFromValue(info, 0),
       RectangleFromValue(info, 4)
    )
  );
}

Napi::Value BindCheckCollisionCircles(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CheckCollisionCircles(
       Vector2FromValue(info, 0),
       floatFromValue(info, 2),
       Vector2FromValue(info, 3),
       floatFromValue(info, 5)
    )
  );
}

Napi::Value BindCheckCollisionCircleRec(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CheckCollisionCircleRec(
       Vector2FromValue(info, 0),
       floatFromValue(info, 2),
       RectangleFromValue(info, 3)
    )
  );
}

Napi::Value BindCheckCollisionPointRec(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CheckCollisionPointRec(
       Vector2FromValue(info, 0),
       RectangleFromValue(info, 2)
    )
  );
}

Napi::Value BindCheckCollisionPointCircle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CheckCollisionPointCircle(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindCheckCollisionPointTriangle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CheckCollisionPointTriangle(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       Vector2FromValue(info, 6)
    )
  );
}

Napi::Value BindCheckCollisionLines(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CheckCollisionLines(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       Vector2FromValue(info, 6),
       (Vector2 *) pointerFromValue(info, 8)
    )
  );
}

Napi::Value BindCheckCollisionPointLine(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CheckCollisionPointLine(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       intFromValue(info, 6)
    )
  );
}

Napi::Value BindGetCollisionRec(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetCollisionRec(
       RectangleFromValue(info, 0),
       RectangleFromValue(info, 4)
    )
  );
}

Napi::Value BindLoadImage(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadImage(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadImageRaw(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadImageRaw(
       (const char *) stringFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       intFromValue(info, 4)
    )
  );
}

Napi::Value BindLoadImageAnim(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadImageAnim(
       (const char *) stringFromValue(info, 0),
       (int *) pointerFromValue(info, 1)
    )
  );
}

Napi::Value BindLoadImageFromMemory(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadImageFromMemory(
       (const char *) stringFromValue(info, 0),
       (const unsigned char *) pointerFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindLoadImageFromTexture(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadImageFromTexture(
       TextureFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadImageFromScreen(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadImageFromScreen(
      
    )
  );
}

Napi::Value BindExportImage(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ExportImage(
       ImageFromValue(info, 0),
       (const char *) stringFromValue(info, 5)
    )
  );
}

Napi::Value BindExportImageAsCode(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ExportImageAsCode(
       ImageFromValue(info, 0),
       (const char *) stringFromValue(info, 5)
    )
  );
}

Napi::Value BindGenImageColor(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenImageColor(
       intFromValue(info, 0),
       intFromValue(info, 1),
       ColorFromValue(info, 2)
    )
  );
}

Napi::Value BindGenImageGradientV(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenImageGradientV(
       intFromValue(info, 0),
       intFromValue(info, 1),
       ColorFromValue(info, 2),
       ColorFromValue(info, 6)
    )
  );
}

Napi::Value BindGenImageGradientH(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenImageGradientH(
       intFromValue(info, 0),
       intFromValue(info, 1),
       ColorFromValue(info, 2),
       ColorFromValue(info, 6)
    )
  );
}

Napi::Value BindGenImageGradientRadial(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenImageGradientRadial(
       intFromValue(info, 0),
       intFromValue(info, 1),
       floatFromValue(info, 2),
       ColorFromValue(info, 3),
       ColorFromValue(info, 7)
    )
  );
}

Napi::Value BindGenImageChecked(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenImageChecked(
       intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       ColorFromValue(info, 4),
       ColorFromValue(info, 8)
    )
  );
}

Napi::Value BindGenImageWhiteNoise(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenImageWhiteNoise(
       intFromValue(info, 0),
       intFromValue(info, 1),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindGenImageCellular(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenImageCellular(
       intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindImageCopy(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ImageCopy(
       ImageFromValue(info, 0)
    )
  );
}

Napi::Value BindImageFromImage(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ImageFromImage(
       ImageFromValue(info, 0),
       RectangleFromValue(info, 5)
    )
  );
}

Napi::Value BindImageText(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ImageText(
       (const char *) stringFromValue(info, 0),
       intFromValue(info, 1),
       ColorFromValue(info, 2)
    )
  );
}

Napi::Value BindImageTextEx(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ImageTextEx(
       FontFromValue(info, 0),
       (const char *) stringFromValue(info, 10),
       floatFromValue(info, 11),
       floatFromValue(info, 12),
       ColorFromValue(info, 13)
    )
  );
}

Napi::Value BindLoadImageColors(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadImageColors(
       ImageFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadImagePalette(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadImagePalette(
       ImageFromValue(info, 0),
       intFromValue(info, 5),
       (int *) pointerFromValue(info, 6)
    )
  );
}

Napi::Value BindGetImageAlphaBorder(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetImageAlphaBorder(
       ImageFromValue(info, 0),
       floatFromValue(info, 5)
    )
  );
}

Napi::Value BindGetImageColor(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetImageColor(
       ImageFromValue(info, 0),
       intFromValue(info, 5),
       intFromValue(info, 6)
    )
  );
}

Napi::Value BindLoadTexture(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadTexture(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadTextureFromImage(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadTextureFromImage(
       ImageFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadTextureCubemap(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadTextureCubemap(
       ImageFromValue(info, 0),
       intFromValue(info, 5)
    )
  );
}

Napi::Value BindLoadRenderTexture(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadRenderTexture(
       intFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindFade(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Fade(
       ColorFromValue(info, 0),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindColorToInt(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ColorToInt(
       ColorFromValue(info, 0)
    )
  );
}

Napi::Value BindColorNormalize(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ColorNormalize(
       ColorFromValue(info, 0)
    )
  );
}

Napi::Value BindColorFromNormalized(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ColorFromNormalized(
       Vector4FromValue(info, 0)
    )
  );
}

Napi::Value BindColorToHSV(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ColorToHSV(
       ColorFromValue(info, 0)
    )
  );
}

Napi::Value BindColorFromHSV(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ColorFromHSV(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindColorAlpha(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ColorAlpha(
       ColorFromValue(info, 0),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindColorAlphaBlend(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ColorAlphaBlend(
       ColorFromValue(info, 0),
       ColorFromValue(info, 4),
       ColorFromValue(info, 8)
    )
  );
}

Napi::Value BindGetColor(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetColor(
       unsignedintFromValue(info, 0)
    )
  );
}

Napi::Value BindGetPixelColor(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetPixelColor(
       (void *) pointerFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindGetPixelDataSize(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetPixelDataSize(
       intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindGetFontDefault(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetFontDefault(
      
    )
  );
}

Napi::Value BindLoadFont(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadFont(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadFontEx(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadFontEx(
       (const char *) stringFromValue(info, 0),
       intFromValue(info, 1),
       (int *) pointerFromValue(info, 2),
       intFromValue(info, 3)
    )
  );
}

Napi::Value BindLoadFontFromImage(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadFontFromImage(
       ImageFromValue(info, 0),
       ColorFromValue(info, 5),
       intFromValue(info, 9)
    )
  );
}

Napi::Value BindLoadFontFromMemory(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadFontFromMemory(
       (const char *) stringFromValue(info, 0),
       (const unsigned char *) pointerFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       (int *) pointerFromValue(info, 4),
       intFromValue(info, 5)
    )
  );
}

Napi::Value BindLoadFontData(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadFontData(
       (const unsigned char *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       (int *) pointerFromValue(info, 3),
       intFromValue(info, 4),
       intFromValue(info, 5)
    )
  );
}

Napi::Value BindGenImageFontAtlas(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenImageFontAtlas(
       (const GlyphInfo *) pointerFromValue(info, 0),
       (Rectangle **) pointerFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       intFromValue(info, 4),
       intFromValue(info, 5)
    )
  );
}

Napi::Value BindMeasureText(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MeasureText(
       (const char *) stringFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindMeasureTextEx(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MeasureTextEx(
       FontFromValue(info, 0),
       (const char *) stringFromValue(info, 10),
       floatFromValue(info, 11),
       floatFromValue(info, 12)
    )
  );
}

Napi::Value BindGetGlyphIndex(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetGlyphIndex(
       FontFromValue(info, 0),
       intFromValue(info, 10)
    )
  );
}

Napi::Value BindGetGlyphInfo(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetGlyphInfo(
       FontFromValue(info, 0),
       intFromValue(info, 10)
    )
  );
}

Napi::Value BindGetGlyphAtlasRec(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetGlyphAtlasRec(
       FontFromValue(info, 0),
       intFromValue(info, 10)
    )
  );
}

Napi::Value BindLoadCodepoints(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadCodepoints(
       (const char *) stringFromValue(info, 0),
       (int *) pointerFromValue(info, 1)
    )
  );
}

Napi::Value BindGetCodepointCount(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetCodepointCount(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindGetCodepoint(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetCodepoint(
       (const char *) stringFromValue(info, 0),
       (int *) pointerFromValue(info, 1)
    )
  );
}

Napi::Value BindCodepointToUTF8(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CodepointToUTF8(
       intFromValue(info, 0),
       (int *) pointerFromValue(info, 1)
    )
  );
}

Napi::Value BindTextCodepointsToUTF8(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextCodepointsToUTF8(
       (int *) pointerFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindTextCopy(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextCopy(
       (char *) pointerFromValue(info, 0),
       (const char *) stringFromValue(info, 1)
    )
  );
}

Napi::Value BindTextIsEqual(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextIsEqual(
       (const char *) stringFromValue(info, 0),
       (const char *) stringFromValue(info, 1)
    )
  );
}

Napi::Value BindTextLength(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextLength(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindTextSubtext(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextSubtext(
       (const char *) stringFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindTextReplace(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextReplace(
       (char *) pointerFromValue(info, 0),
       (const char *) stringFromValue(info, 1),
       (const char *) stringFromValue(info, 2)
    )
  );
}

Napi::Value BindTextInsert(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextInsert(
       (const char *) stringFromValue(info, 0),
       (const char *) stringFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindTextJoin(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextJoin(
       (const char **) pointerFromValue(info, 0),
       intFromValue(info, 1),
       (const char *) stringFromValue(info, 2)
    )
  );
}

Napi::Value BindTextSplit(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextSplit(
       (const char *) stringFromValue(info, 0),
       charFromValue(info, 1),
       (int *) pointerFromValue(info, 2)
    )
  );
}

Napi::Value BindTextFindIndex(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextFindIndex(
       (const char *) stringFromValue(info, 0),
       (const char *) stringFromValue(info, 1)
    )
  );
}

Napi::Value BindTextToUpper(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextToUpper(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindTextToLower(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextToLower(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindTextToPascal(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextToPascal(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindTextToInteger(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextToInteger(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadModel(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadModel(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadModelFromMesh(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadModelFromMesh(
       MeshFromValue(info, 0)
    )
  );
}

Napi::Value BindGetModelBoundingBox(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetModelBoundingBox(
       ModelFromValue(info, 0)
    )
  );
}

Napi::Value BindExportMesh(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ExportMesh(
       MeshFromValue(info, 0),
       (const char *) stringFromValue(info, 15)
    )
  );
}

Napi::Value BindGetMeshBoundingBox(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMeshBoundingBox(
       MeshFromValue(info, 0)
    )
  );
}

Napi::Value BindGenMeshPoly(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenMeshPoly(
       intFromValue(info, 0),
       floatFromValue(info, 1)
    )
  );
}

Napi::Value BindGenMeshPlane(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenMeshPlane(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3)
    )
  );
}

Napi::Value BindGenMeshCube(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenMeshCube(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindGenMeshSphere(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenMeshSphere(
       floatFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindGenMeshHemiSphere(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenMeshHemiSphere(
       floatFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindGenMeshCylinder(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenMeshCylinder(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindGenMeshCone(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenMeshCone(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindGenMeshTorus(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenMeshTorus(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3)
    )
  );
}

Napi::Value BindGenMeshKnot(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenMeshKnot(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3)
    )
  );
}

Napi::Value BindGenMeshHeightmap(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenMeshHeightmap(
       ImageFromValue(info, 0),
       Vector3FromValue(info, 5)
    )
  );
}

Napi::Value BindGenMeshCubicmap(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenMeshCubicmap(
       ImageFromValue(info, 0),
       Vector3FromValue(info, 5)
    )
  );
}

Napi::Value BindLoadModelAnimations(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadModelAnimations(
       (const char *) stringFromValue(info, 0),
       (unsigned int *) pointerFromValue(info, 1)
    )
  );
}

Napi::Value BindIsModelAnimationValid(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsModelAnimationValid(
       ModelFromValue(info, 0),
       ModelAnimationFromValue(info, 24)
    )
  );
}

Napi::Value BindCheckCollisionSpheres(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CheckCollisionSpheres(
       Vector3FromValue(info, 0),
       floatFromValue(info, 3),
       Vector3FromValue(info, 4),
       floatFromValue(info, 7)
    )
  );
}

Napi::Value BindCheckCollisionBoxes(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CheckCollisionBoxes(
       BoundingBoxFromValue(info, 0),
       BoundingBoxFromValue(info, 6)
    )
  );
}

Napi::Value BindCheckCollisionBoxSphere(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CheckCollisionBoxSphere(
       BoundingBoxFromValue(info, 0),
       Vector3FromValue(info, 6),
       floatFromValue(info, 9)
    )
  );
}

Napi::Value BindGetRayCollisionSphere(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetRayCollisionSphere(
       RayFromValue(info, 0),
       Vector3FromValue(info, 6),
       floatFromValue(info, 9)
    )
  );
}

Napi::Value BindGetRayCollisionBox(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetRayCollisionBox(
       RayFromValue(info, 0),
       BoundingBoxFromValue(info, 6)
    )
  );
}

Napi::Value BindGetRayCollisionModel(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetRayCollisionModel(
       RayFromValue(info, 0),
       ModelFromValue(info, 6)
    )
  );
}

Napi::Value BindGetRayCollisionMesh(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetRayCollisionMesh(
       RayFromValue(info, 0),
       MeshFromValue(info, 6),
       MatrixFromValue(info, 21)
    )
  );
}

Napi::Value BindGetRayCollisionTriangle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetRayCollisionTriangle(
       RayFromValue(info, 0),
       Vector3FromValue(info, 6),
       Vector3FromValue(info, 9),
       Vector3FromValue(info, 12)
    )
  );
}

Napi::Value BindGetRayCollisionQuad(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetRayCollisionQuad(
       RayFromValue(info, 0),
       Vector3FromValue(info, 6),
       Vector3FromValue(info, 9),
       Vector3FromValue(info, 12),
       Vector3FromValue(info, 15)
    )
  );
}

Napi::Value BindIsAudioDeviceReady(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsAudioDeviceReady(
      
    )
  );
}

Napi::Value BindLoadWave(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadWave(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadWaveFromMemory(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadWaveFromMemory(
       (const char *) stringFromValue(info, 0),
       (const unsigned char *) pointerFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindLoadSound(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadSound(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadSoundFromWave(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadSoundFromWave(
       WaveFromValue(info, 0)
    )
  );
}

Napi::Value BindExportWave(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ExportWave(
       WaveFromValue(info, 0),
       (const char *) stringFromValue(info, 5)
    )
  );
}

Napi::Value BindExportWaveAsCode(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ExportWaveAsCode(
       WaveFromValue(info, 0),
       (const char *) stringFromValue(info, 5)
    )
  );
}

Napi::Value BindGetSoundsPlaying(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetSoundsPlaying(
      
    )
  );
}

Napi::Value BindIsSoundPlaying(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsSoundPlaying(
       SoundFromValue(info, 0)
    )
  );
}

Napi::Value BindWaveCopy(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    WaveCopy(
       WaveFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadWaveSamples(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadWaveSamples(
       WaveFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadMusicStream(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadMusicStream(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadMusicStreamFromMemory(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadMusicStreamFromMemory(
       (const char *) stringFromValue(info, 0),
       (unsigned char *) pointerFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindIsMusicStreamPlaying(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsMusicStreamPlaying(
       MusicFromValue(info, 0)
    )
  );
}

Napi::Value BindGetMusicTimeLength(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMusicTimeLength(
       MusicFromValue(info, 0)
    )
  );
}

Napi::Value BindGetMusicTimePlayed(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMusicTimePlayed(
       MusicFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadAudioStream(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadAudioStream(
       unsignedintFromValue(info, 0),
       unsignedintFromValue(info, 1),
       unsignedintFromValue(info, 2)
    )
  );
}

Napi::Value BindIsAudioStreamProcessed(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsAudioStreamProcessed(
       AudioStreamFromValue(info, 0)
    )
  );
}

Napi::Value BindIsAudioStreamPlaying(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsAudioStreamPlaying(
       AudioStreamFromValue(info, 0)
    )
  );
}

Napi::Value BindEaseLinearNone(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseLinearNone(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseLinearIn(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseLinearIn(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseLinearOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseLinearOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseLinearInOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseLinearInOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseSineIn(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseSineIn(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseSineOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseSineOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseSineInOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseSineInOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseCircIn(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseCircIn(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseCircOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseCircOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseCircInOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseCircInOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseCubicIn(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseCubicIn(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseCubicOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseCubicOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseCubicInOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseCubicInOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseQuadIn(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseQuadIn(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseQuadOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseQuadOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseQuadInOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseQuadInOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseExpoIn(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseExpoIn(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseExpoOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseExpoOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseExpoInOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseExpoInOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseBackIn(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseBackIn(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseBackOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseBackOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseBackInOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseBackInOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseBounceOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseBounceOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseBounceIn(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseBounceIn(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseBounceInOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseBounceInOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseElasticIn(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseElasticIn(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseElasticOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseElasticOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindEaseElasticInOut(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    EaseElasticInOut(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

void BindInitWindow(const Napi::CallbackInfo& info) {
  InitWindow(
     intFromValue(info, 0),
       intFromValue(info, 1),
       (const char *) stringFromValue(info, 2)
  );
}

void BindCloseWindow(const Napi::CallbackInfo& info) {
  CloseWindow(
    
  );
}

void BindSetWindowState(const Napi::CallbackInfo& info) {
  SetWindowState(
     unsignedintFromValue(info, 0)
  );
}

void BindClearWindowState(const Napi::CallbackInfo& info) {
  ClearWindowState(
     unsignedintFromValue(info, 0)
  );
}

void BindToggleFullscreen(const Napi::CallbackInfo& info) {
  ToggleFullscreen(
    
  );
}

void BindMaximizeWindow(const Napi::CallbackInfo& info) {
  MaximizeWindow(
    
  );
}

void BindMinimizeWindow(const Napi::CallbackInfo& info) {
  MinimizeWindow(
    
  );
}

void BindRestoreWindow(const Napi::CallbackInfo& info) {
  RestoreWindow(
    
  );
}

void BindSetWindowIcon(const Napi::CallbackInfo& info) {
  SetWindowIcon(
     ImageFromValue(info, 0)
  );
}

void BindSetWindowTitle(const Napi::CallbackInfo& info) {
  SetWindowTitle(
     (const char *) stringFromValue(info, 0)
  );
}

void BindSetWindowPosition(const Napi::CallbackInfo& info) {
  SetWindowPosition(
     intFromValue(info, 0),
       intFromValue(info, 1)
  );
}

void BindSetWindowMonitor(const Napi::CallbackInfo& info) {
  SetWindowMonitor(
     intFromValue(info, 0)
  );
}

void BindSetWindowMinSize(const Napi::CallbackInfo& info) {
  SetWindowMinSize(
     intFromValue(info, 0),
       intFromValue(info, 1)
  );
}

void BindSetWindowSize(const Napi::CallbackInfo& info) {
  SetWindowSize(
     intFromValue(info, 0),
       intFromValue(info, 1)
  );
}

void BindSetClipboardText(const Napi::CallbackInfo& info) {
  SetClipboardText(
     (const char *) stringFromValue(info, 0)
  );
}

void BindSwapScreenBuffer(const Napi::CallbackInfo& info) {
  SwapScreenBuffer(
    
  );
}

void BindPollInputEvents(const Napi::CallbackInfo& info) {
  PollInputEvents(
    
  );
}

void BindWaitTime(const Napi::CallbackInfo& info) {
  WaitTime(
     floatFromValue(info, 0)
  );
}

void BindShowCursor(const Napi::CallbackInfo& info) {
  ShowCursor(
    
  );
}

void BindHideCursor(const Napi::CallbackInfo& info) {
  HideCursor(
    
  );
}

void BindEnableCursor(const Napi::CallbackInfo& info) {
  EnableCursor(
    
  );
}

void BindDisableCursor(const Napi::CallbackInfo& info) {
  DisableCursor(
    
  );
}

void BindClearBackground(const Napi::CallbackInfo& info) {
  ClearBackground(
     ColorFromValue(info, 0)
  );
}

void BindBeginDrawing(const Napi::CallbackInfo& info) {
  BeginDrawing(
    
  );
}

void BindEndDrawing(const Napi::CallbackInfo& info) {
  EndDrawing(
    
  );
}

void BindBeginMode2D(const Napi::CallbackInfo& info) {
  BeginMode2D(
     Camera2DFromValue(info, 0)
  );
}

void BindEndMode2D(const Napi::CallbackInfo& info) {
  EndMode2D(
    
  );
}

void BindBeginMode3D(const Napi::CallbackInfo& info) {
  BeginMode3D(
     Camera3DFromValue(info, 0)
  );
}

void BindEndMode3D(const Napi::CallbackInfo& info) {
  EndMode3D(
    
  );
}

void BindBeginTextureMode(const Napi::CallbackInfo& info) {
  BeginTextureMode(
     RenderTexture2DFromValue(info, 0)
  );
}

void BindEndTextureMode(const Napi::CallbackInfo& info) {
  EndTextureMode(
    
  );
}

void BindBeginShaderMode(const Napi::CallbackInfo& info) {
  BeginShaderMode(
     ShaderFromValue(info, 0)
  );
}

void BindEndShaderMode(const Napi::CallbackInfo& info) {
  EndShaderMode(
    
  );
}

void BindBeginBlendMode(const Napi::CallbackInfo& info) {
  BeginBlendMode(
     intFromValue(info, 0)
  );
}

void BindEndBlendMode(const Napi::CallbackInfo& info) {
  EndBlendMode(
    
  );
}

void BindBeginScissorMode(const Napi::CallbackInfo& info) {
  BeginScissorMode(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3)
  );
}

void BindEndScissorMode(const Napi::CallbackInfo& info) {
  EndScissorMode(
    
  );
}

void BindEndVrStereoMode(const Napi::CallbackInfo& info) {
  EndVrStereoMode(
    
  );
}

void BindSetShaderValueMatrix(const Napi::CallbackInfo& info) {
  SetShaderValueMatrix(
     ShaderFromValue(info, 0),
       intFromValue(info, 2),
       MatrixFromValue(info, 3)
  );
}

void BindSetShaderValueTexture(const Napi::CallbackInfo& info) {
  SetShaderValueTexture(
     ShaderFromValue(info, 0),
       intFromValue(info, 2),
       TextureFromValue(info, 3)
  );
}

void BindUnloadShader(const Napi::CallbackInfo& info) {
  UnloadShader(
     ShaderFromValue(info, 0)
  );
}

void BindSetTargetFPS(const Napi::CallbackInfo& info) {
  SetTargetFPS(
     intFromValue(info, 0)
  );
}

void BindSetRandomSeed(const Napi::CallbackInfo& info) {
  SetRandomSeed(
     unsignedintFromValue(info, 0)
  );
}

void BindTakeScreenshot(const Napi::CallbackInfo& info) {
  TakeScreenshot(
     (const char *) stringFromValue(info, 0)
  );
}

void BindSetConfigFlags(const Napi::CallbackInfo& info) {
  SetConfigFlags(
     unsignedintFromValue(info, 0)
  );
}

void BindSetTraceLogLevel(const Napi::CallbackInfo& info) {
  SetTraceLogLevel(
     intFromValue(info, 0)
  );
}

void BindMemFree(const Napi::CallbackInfo& info) {
  MemFree(
     (void *) pointerFromValue(info, 0)
  );
}

void BindUnloadFileData(const Napi::CallbackInfo& info) {
  UnloadFileData(
     (unsigned char *) pointerFromValue(info, 0)
  );
}

void BindUnloadFileText(const Napi::CallbackInfo& info) {
  UnloadFileText(
     (char *) pointerFromValue(info, 0)
  );
}

void BindClearDirectoryFiles(const Napi::CallbackInfo& info) {
  ClearDirectoryFiles(
    
  );
}

void BindClearDroppedFiles(const Napi::CallbackInfo& info) {
  ClearDroppedFiles(
    
  );
}

void BindOpenURL(const Napi::CallbackInfo& info) {
  OpenURL(
     (const char *) stringFromValue(info, 0)
  );
}

void BindSetExitKey(const Napi::CallbackInfo& info) {
  SetExitKey(
     intFromValue(info, 0)
  );
}

void BindSetMousePosition(const Napi::CallbackInfo& info) {
  SetMousePosition(
     intFromValue(info, 0),
       intFromValue(info, 1)
  );
}

void BindSetMouseOffset(const Napi::CallbackInfo& info) {
  SetMouseOffset(
     intFromValue(info, 0),
       intFromValue(info, 1)
  );
}

void BindSetMouseScale(const Napi::CallbackInfo& info) {
  SetMouseScale(
     floatFromValue(info, 0),
       floatFromValue(info, 1)
  );
}

void BindSetMouseCursor(const Napi::CallbackInfo& info) {
  SetMouseCursor(
     intFromValue(info, 0)
  );
}

void BindSetGesturesEnabled(const Napi::CallbackInfo& info) {
  SetGesturesEnabled(
     unsignedintFromValue(info, 0)
  );
}

void BindSetCameraMode(const Napi::CallbackInfo& info) {
  SetCameraMode(
     Camera3DFromValue(info, 0),
       intFromValue(info, 11)
  );
}

void BindSetCameraPanControl(const Napi::CallbackInfo& info) {
  SetCameraPanControl(
     intFromValue(info, 0)
  );
}

void BindSetCameraAltControl(const Napi::CallbackInfo& info) {
  SetCameraAltControl(
     intFromValue(info, 0)
  );
}

void BindSetCameraSmoothZoomControl(const Napi::CallbackInfo& info) {
  SetCameraSmoothZoomControl(
     intFromValue(info, 0)
  );
}

void BindSetCameraMoveControls(const Napi::CallbackInfo& info) {
  SetCameraMoveControls(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       intFromValue(info, 4),
       intFromValue(info, 5)
  );
}

void BindSetShapesTexture(const Napi::CallbackInfo& info) {
  SetShapesTexture(
     TextureFromValue(info, 0),
       RectangleFromValue(info, 5)
  );
}

void BindDrawPixel(const Napi::CallbackInfo& info) {
  DrawPixel(
     intFromValue(info, 0),
       intFromValue(info, 1),
       ColorFromValue(info, 2)
  );
}

void BindDrawPixelV(const Napi::CallbackInfo& info) {
  DrawPixelV(
     Vector2FromValue(info, 0),
       ColorFromValue(info, 2)
  );
}

void BindDrawLine(const Napi::CallbackInfo& info) {
  DrawLine(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       ColorFromValue(info, 4)
  );
}

void BindDrawLineV(const Napi::CallbackInfo& info) {
  DrawLineV(
     Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       ColorFromValue(info, 4)
  );
}

void BindDrawLineEx(const Napi::CallbackInfo& info) {
  DrawLineEx(
     Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       floatFromValue(info, 4),
       ColorFromValue(info, 5)
  );
}

void BindDrawLineBezier(const Napi::CallbackInfo& info) {
  DrawLineBezier(
     Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       floatFromValue(info, 4),
       ColorFromValue(info, 5)
  );
}

void BindDrawLineBezierQuad(const Napi::CallbackInfo& info) {
  DrawLineBezierQuad(
     Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       floatFromValue(info, 6),
       ColorFromValue(info, 7)
  );
}

void BindDrawLineBezierCubic(const Napi::CallbackInfo& info) {
  DrawLineBezierCubic(
     Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       Vector2FromValue(info, 6),
       floatFromValue(info, 8),
       ColorFromValue(info, 9)
  );
}

void BindDrawLineStrip(const Napi::CallbackInfo& info) {
  DrawLineStrip(
     (Vector2 *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       ColorFromValue(info, 2)
  );
}

void BindDrawCircle(const Napi::CallbackInfo& info) {
  DrawCircle(
     intFromValue(info, 0),
       intFromValue(info, 1),
       floatFromValue(info, 2),
       ColorFromValue(info, 3)
  );
}

void BindDrawCircleSector(const Napi::CallbackInfo& info) {
  DrawCircleSector(
     Vector2FromValue(info, 0),
       floatFromValue(info, 2),
       floatFromValue(info, 3),
       floatFromValue(info, 4),
       intFromValue(info, 5),
       ColorFromValue(info, 6)
  );
}

void BindDrawCircleSectorLines(const Napi::CallbackInfo& info) {
  DrawCircleSectorLines(
     Vector2FromValue(info, 0),
       floatFromValue(info, 2),
       floatFromValue(info, 3),
       floatFromValue(info, 4),
       intFromValue(info, 5),
       ColorFromValue(info, 6)
  );
}

void BindDrawCircleGradient(const Napi::CallbackInfo& info) {
  DrawCircleGradient(
     intFromValue(info, 0),
       intFromValue(info, 1),
       floatFromValue(info, 2),
       ColorFromValue(info, 3),
       ColorFromValue(info, 7)
  );
}

void BindDrawCircleV(const Napi::CallbackInfo& info) {
  DrawCircleV(
     Vector2FromValue(info, 0),
       floatFromValue(info, 2),
       ColorFromValue(info, 3)
  );
}

void BindDrawCircleLines(const Napi::CallbackInfo& info) {
  DrawCircleLines(
     intFromValue(info, 0),
       intFromValue(info, 1),
       floatFromValue(info, 2),
       ColorFromValue(info, 3)
  );
}

void BindDrawEllipse(const Napi::CallbackInfo& info) {
  DrawEllipse(
     intFromValue(info, 0),
       intFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3),
       ColorFromValue(info, 4)
  );
}

void BindDrawEllipseLines(const Napi::CallbackInfo& info) {
  DrawEllipseLines(
     intFromValue(info, 0),
       intFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3),
       ColorFromValue(info, 4)
  );
}

void BindDrawRing(const Napi::CallbackInfo& info) {
  DrawRing(
     Vector2FromValue(info, 0),
       floatFromValue(info, 2),
       floatFromValue(info, 3),
       floatFromValue(info, 4),
       floatFromValue(info, 5),
       intFromValue(info, 6),
       ColorFromValue(info, 7)
  );
}

void BindDrawRingLines(const Napi::CallbackInfo& info) {
  DrawRingLines(
     Vector2FromValue(info, 0),
       floatFromValue(info, 2),
       floatFromValue(info, 3),
       floatFromValue(info, 4),
       floatFromValue(info, 5),
       intFromValue(info, 6),
       ColorFromValue(info, 7)
  );
}

void BindDrawRectangle(const Napi::CallbackInfo& info) {
  DrawRectangle(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       ColorFromValue(info, 4)
  );
}

void BindDrawRectangleV(const Napi::CallbackInfo& info) {
  DrawRectangleV(
     Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       ColorFromValue(info, 4)
  );
}

void BindDrawRectangleRec(const Napi::CallbackInfo& info) {
  DrawRectangleRec(
     RectangleFromValue(info, 0),
       ColorFromValue(info, 4)
  );
}

void BindDrawRectanglePro(const Napi::CallbackInfo& info) {
  DrawRectanglePro(
     RectangleFromValue(info, 0),
       Vector2FromValue(info, 4),
       floatFromValue(info, 6),
       ColorFromValue(info, 7)
  );
}

void BindDrawRectangleGradientV(const Napi::CallbackInfo& info) {
  DrawRectangleGradientV(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       ColorFromValue(info, 4),
       ColorFromValue(info, 8)
  );
}

void BindDrawRectangleGradientH(const Napi::CallbackInfo& info) {
  DrawRectangleGradientH(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       ColorFromValue(info, 4),
       ColorFromValue(info, 8)
  );
}

void BindDrawRectangleGradientEx(const Napi::CallbackInfo& info) {
  DrawRectangleGradientEx(
     RectangleFromValue(info, 0),
       ColorFromValue(info, 4),
       ColorFromValue(info, 8),
       ColorFromValue(info, 12),
       ColorFromValue(info, 16)
  );
}

void BindDrawRectangleLines(const Napi::CallbackInfo& info) {
  DrawRectangleLines(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       ColorFromValue(info, 4)
  );
}

void BindDrawRectangleLinesEx(const Napi::CallbackInfo& info) {
  DrawRectangleLinesEx(
     RectangleFromValue(info, 0),
       floatFromValue(info, 4),
       ColorFromValue(info, 5)
  );
}

void BindDrawRectangleRounded(const Napi::CallbackInfo& info) {
  DrawRectangleRounded(
     RectangleFromValue(info, 0),
       floatFromValue(info, 4),
       intFromValue(info, 5),
       ColorFromValue(info, 6)
  );
}

void BindDrawRectangleRoundedLines(const Napi::CallbackInfo& info) {
  DrawRectangleRoundedLines(
     RectangleFromValue(info, 0),
       floatFromValue(info, 4),
       intFromValue(info, 5),
       floatFromValue(info, 6),
       ColorFromValue(info, 7)
  );
}

void BindDrawTriangle(const Napi::CallbackInfo& info) {
  DrawTriangle(
     Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       ColorFromValue(info, 6)
  );
}

void BindDrawTriangleLines(const Napi::CallbackInfo& info) {
  DrawTriangleLines(
     Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       ColorFromValue(info, 6)
  );
}

void BindDrawTriangleFan(const Napi::CallbackInfo& info) {
  DrawTriangleFan(
     (Vector2 *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       ColorFromValue(info, 2)
  );
}

void BindDrawTriangleStrip(const Napi::CallbackInfo& info) {
  DrawTriangleStrip(
     (Vector2 *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       ColorFromValue(info, 2)
  );
}

void BindDrawPoly(const Napi::CallbackInfo& info) {
  DrawPoly(
     Vector2FromValue(info, 0),
       intFromValue(info, 2),
       floatFromValue(info, 3),
       floatFromValue(info, 4),
       ColorFromValue(info, 5)
  );
}

void BindDrawPolyLines(const Napi::CallbackInfo& info) {
  DrawPolyLines(
     Vector2FromValue(info, 0),
       intFromValue(info, 2),
       floatFromValue(info, 3),
       floatFromValue(info, 4),
       ColorFromValue(info, 5)
  );
}

void BindDrawPolyLinesEx(const Napi::CallbackInfo& info) {
  DrawPolyLinesEx(
     Vector2FromValue(info, 0),
       intFromValue(info, 2),
       floatFromValue(info, 3),
       floatFromValue(info, 4),
       floatFromValue(info, 5),
       ColorFromValue(info, 6)
  );
}

void BindUnloadImage(const Napi::CallbackInfo& info) {
  UnloadImage(
     ImageFromValue(info, 0)
  );
}

void BindUnloadImageColors(const Napi::CallbackInfo& info) {
  UnloadImageColors(
     (Color *) pointerFromValue(info, 0)
  );
}

void BindUnloadImagePalette(const Napi::CallbackInfo& info) {
  UnloadImagePalette(
     (Color *) pointerFromValue(info, 0)
  );
}

void BindUnloadTexture(const Napi::CallbackInfo& info) {
  UnloadTexture(
     TextureFromValue(info, 0)
  );
}

void BindUnloadRenderTexture(const Napi::CallbackInfo& info) {
  UnloadRenderTexture(
     RenderTexture2DFromValue(info, 0)
  );
}

void BindUpdateTexture(const Napi::CallbackInfo& info) {
  UpdateTexture(
     TextureFromValue(info, 0),
       (const void *) pointerFromValue(info, 5)
  );
}

void BindUpdateTextureRec(const Napi::CallbackInfo& info) {
  UpdateTextureRec(
     TextureFromValue(info, 0),
       RectangleFromValue(info, 5),
       (const void *) pointerFromValue(info, 9)
  );
}

void BindSetTextureFilter(const Napi::CallbackInfo& info) {
  SetTextureFilter(
     TextureFromValue(info, 0),
       intFromValue(info, 5)
  );
}

void BindSetTextureWrap(const Napi::CallbackInfo& info) {
  SetTextureWrap(
     TextureFromValue(info, 0),
       intFromValue(info, 5)
  );
}

void BindDrawTexture(const Napi::CallbackInfo& info) {
  DrawTexture(
     TextureFromValue(info, 0),
       intFromValue(info, 5),
       intFromValue(info, 6),
       ColorFromValue(info, 7)
  );
}

void BindDrawTextureV(const Napi::CallbackInfo& info) {
  DrawTextureV(
     TextureFromValue(info, 0),
       Vector2FromValue(info, 5),
       ColorFromValue(info, 7)
  );
}

void BindDrawTextureEx(const Napi::CallbackInfo& info) {
  DrawTextureEx(
     TextureFromValue(info, 0),
       Vector2FromValue(info, 5),
       floatFromValue(info, 7),
       floatFromValue(info, 8),
       ColorFromValue(info, 9)
  );
}

void BindDrawTextureRec(const Napi::CallbackInfo& info) {
  DrawTextureRec(
     TextureFromValue(info, 0),
       RectangleFromValue(info, 5),
       Vector2FromValue(info, 9),
       ColorFromValue(info, 11)
  );
}

void BindDrawTextureQuad(const Napi::CallbackInfo& info) {
  DrawTextureQuad(
     TextureFromValue(info, 0),
       Vector2FromValue(info, 5),
       Vector2FromValue(info, 7),
       RectangleFromValue(info, 9),
       ColorFromValue(info, 13)
  );
}

void BindDrawTextureTiled(const Napi::CallbackInfo& info) {
  DrawTextureTiled(
     TextureFromValue(info, 0),
       RectangleFromValue(info, 5),
       RectangleFromValue(info, 9),
       Vector2FromValue(info, 13),
       floatFromValue(info, 15),
       floatFromValue(info, 16),
       ColorFromValue(info, 17)
  );
}

void BindDrawTexturePro(const Napi::CallbackInfo& info) {
  DrawTexturePro(
     TextureFromValue(info, 0),
       RectangleFromValue(info, 5),
       RectangleFromValue(info, 9),
       Vector2FromValue(info, 13),
       floatFromValue(info, 15),
       ColorFromValue(info, 16)
  );
}

void BindDrawTextureNPatch(const Napi::CallbackInfo& info) {
  DrawTextureNPatch(
     TextureFromValue(info, 0),
       NPatchInfoFromValue(info, 5),
       RectangleFromValue(info, 14),
       Vector2FromValue(info, 18),
       floatFromValue(info, 20),
       ColorFromValue(info, 21)
  );
}

void BindDrawTexturePoly(const Napi::CallbackInfo& info) {
  DrawTexturePoly(
     TextureFromValue(info, 0),
       Vector2FromValue(info, 5),
       (Vector2 *) pointerFromValue(info, 7),
       (Vector2 *) pointerFromValue(info, 8),
       intFromValue(info, 9),
       ColorFromValue(info, 10)
  );
}

void BindSetPixelColor(const Napi::CallbackInfo& info) {
  SetPixelColor(
     (void *) pointerFromValue(info, 0),
       ColorFromValue(info, 1),
       intFromValue(info, 5)
  );
}

void BindUnloadFontData(const Napi::CallbackInfo& info) {
  UnloadFontData(
     (GlyphInfo *) pointerFromValue(info, 0),
       intFromValue(info, 1)
  );
}

void BindUnloadFont(const Napi::CallbackInfo& info) {
  UnloadFont(
     FontFromValue(info, 0)
  );
}

void BindDrawFPS(const Napi::CallbackInfo& info) {
  DrawFPS(
     intFromValue(info, 0),
       intFromValue(info, 1)
  );
}

void BindDrawText(const Napi::CallbackInfo& info) {
  DrawText(
     (const char *) stringFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       ColorFromValue(info, 4)
  );
}

void BindDrawTextEx(const Napi::CallbackInfo& info) {
  DrawTextEx(
     FontFromValue(info, 0),
       (const char *) stringFromValue(info, 10),
       Vector2FromValue(info, 11),
       floatFromValue(info, 13),
       floatFromValue(info, 14),
       ColorFromValue(info, 15)
  );
}

void BindDrawTextPro(const Napi::CallbackInfo& info) {
  DrawTextPro(
     FontFromValue(info, 0),
       (const char *) stringFromValue(info, 10),
       Vector2FromValue(info, 11),
       Vector2FromValue(info, 13),
       floatFromValue(info, 15),
       floatFromValue(info, 16),
       floatFromValue(info, 17),
       ColorFromValue(info, 18)
  );
}

void BindDrawTextCodepoint(const Napi::CallbackInfo& info) {
  DrawTextCodepoint(
     FontFromValue(info, 0),
       intFromValue(info, 10),
       Vector2FromValue(info, 11),
       floatFromValue(info, 13),
       ColorFromValue(info, 14)
  );
}

void BindUnloadCodepoints(const Napi::CallbackInfo& info) {
  UnloadCodepoints(
     (int *) pointerFromValue(info, 0)
  );
}

void BindTextAppend(const Napi::CallbackInfo& info) {
  TextAppend(
     (char *) pointerFromValue(info, 0),
       (const char *) stringFromValue(info, 1),
       (int *) pointerFromValue(info, 2)
  );
}

void BindDrawLine3D(const Napi::CallbackInfo& info) {
  DrawLine3D(
     Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       ColorFromValue(info, 6)
  );
}

void BindDrawPoint3D(const Napi::CallbackInfo& info) {
  DrawPoint3D(
     Vector3FromValue(info, 0),
       ColorFromValue(info, 3)
  );
}

void BindDrawCircle3D(const Napi::CallbackInfo& info) {
  DrawCircle3D(
     Vector3FromValue(info, 0),
       floatFromValue(info, 3),
       Vector3FromValue(info, 4),
       floatFromValue(info, 7),
       ColorFromValue(info, 8)
  );
}

void BindDrawTriangle3D(const Napi::CallbackInfo& info) {
  DrawTriangle3D(
     Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       Vector3FromValue(info, 6),
       ColorFromValue(info, 9)
  );
}

void BindDrawTriangleStrip3D(const Napi::CallbackInfo& info) {
  DrawTriangleStrip3D(
     (Vector3 *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       ColorFromValue(info, 2)
  );
}

void BindDrawCube(const Napi::CallbackInfo& info) {
  DrawCube(
     Vector3FromValue(info, 0),
       floatFromValue(info, 3),
       floatFromValue(info, 4),
       floatFromValue(info, 5),
       ColorFromValue(info, 6)
  );
}

void BindDrawCubeV(const Napi::CallbackInfo& info) {
  DrawCubeV(
     Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       ColorFromValue(info, 6)
  );
}

void BindDrawCubeWires(const Napi::CallbackInfo& info) {
  DrawCubeWires(
     Vector3FromValue(info, 0),
       floatFromValue(info, 3),
       floatFromValue(info, 4),
       floatFromValue(info, 5),
       ColorFromValue(info, 6)
  );
}

void BindDrawCubeWiresV(const Napi::CallbackInfo& info) {
  DrawCubeWiresV(
     Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       ColorFromValue(info, 6)
  );
}

void BindDrawCubeTexture(const Napi::CallbackInfo& info) {
  DrawCubeTexture(
     TextureFromValue(info, 0),
       Vector3FromValue(info, 5),
       floatFromValue(info, 8),
       floatFromValue(info, 9),
       floatFromValue(info, 10),
       ColorFromValue(info, 11)
  );
}

void BindDrawCubeTextureRec(const Napi::CallbackInfo& info) {
  DrawCubeTextureRec(
     TextureFromValue(info, 0),
       RectangleFromValue(info, 5),
       Vector3FromValue(info, 9),
       floatFromValue(info, 12),
       floatFromValue(info, 13),
       floatFromValue(info, 14),
       ColorFromValue(info, 15)
  );
}

void BindDrawSphere(const Napi::CallbackInfo& info) {
  DrawSphere(
     Vector3FromValue(info, 0),
       floatFromValue(info, 3),
       ColorFromValue(info, 4)
  );
}

void BindDrawSphereEx(const Napi::CallbackInfo& info) {
  DrawSphereEx(
     Vector3FromValue(info, 0),
       floatFromValue(info, 3),
       intFromValue(info, 4),
       intFromValue(info, 5),
       ColorFromValue(info, 6)
  );
}

void BindDrawSphereWires(const Napi::CallbackInfo& info) {
  DrawSphereWires(
     Vector3FromValue(info, 0),
       floatFromValue(info, 3),
       intFromValue(info, 4),
       intFromValue(info, 5),
       ColorFromValue(info, 6)
  );
}

void BindDrawCylinder(const Napi::CallbackInfo& info) {
  DrawCylinder(
     Vector3FromValue(info, 0),
       floatFromValue(info, 3),
       floatFromValue(info, 4),
       floatFromValue(info, 5),
       intFromValue(info, 6),
       ColorFromValue(info, 7)
  );
}

void BindDrawCylinderEx(const Napi::CallbackInfo& info) {
  DrawCylinderEx(
     Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       floatFromValue(info, 6),
       floatFromValue(info, 7),
       intFromValue(info, 8),
       ColorFromValue(info, 9)
  );
}

void BindDrawCylinderWires(const Napi::CallbackInfo& info) {
  DrawCylinderWires(
     Vector3FromValue(info, 0),
       floatFromValue(info, 3),
       floatFromValue(info, 4),
       floatFromValue(info, 5),
       intFromValue(info, 6),
       ColorFromValue(info, 7)
  );
}

void BindDrawCylinderWiresEx(const Napi::CallbackInfo& info) {
  DrawCylinderWiresEx(
     Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       floatFromValue(info, 6),
       floatFromValue(info, 7),
       intFromValue(info, 8),
       ColorFromValue(info, 9)
  );
}

void BindDrawPlane(const Napi::CallbackInfo& info) {
  DrawPlane(
     Vector3FromValue(info, 0),
       Vector2FromValue(info, 3),
       ColorFromValue(info, 5)
  );
}

void BindDrawRay(const Napi::CallbackInfo& info) {
  DrawRay(
     RayFromValue(info, 0),
       ColorFromValue(info, 6)
  );
}

void BindDrawGrid(const Napi::CallbackInfo& info) {
  DrawGrid(
     intFromValue(info, 0),
       floatFromValue(info, 1)
  );
}

void BindUnloadModel(const Napi::CallbackInfo& info) {
  UnloadModel(
     ModelFromValue(info, 0)
  );
}

void BindUnloadModelKeepMeshes(const Napi::CallbackInfo& info) {
  UnloadModelKeepMeshes(
     ModelFromValue(info, 0)
  );
}

void BindDrawModel(const Napi::CallbackInfo& info) {
  DrawModel(
     ModelFromValue(info, 0),
       Vector3FromValue(info, 24),
       floatFromValue(info, 27),
       ColorFromValue(info, 28)
  );
}

void BindDrawModelEx(const Napi::CallbackInfo& info) {
  DrawModelEx(
     ModelFromValue(info, 0),
       Vector3FromValue(info, 24),
       Vector3FromValue(info, 27),
       floatFromValue(info, 30),
       Vector3FromValue(info, 31),
       ColorFromValue(info, 34)
  );
}

void BindDrawModelWires(const Napi::CallbackInfo& info) {
  DrawModelWires(
     ModelFromValue(info, 0),
       Vector3FromValue(info, 24),
       floatFromValue(info, 27),
       ColorFromValue(info, 28)
  );
}

void BindDrawModelWiresEx(const Napi::CallbackInfo& info) {
  DrawModelWiresEx(
     ModelFromValue(info, 0),
       Vector3FromValue(info, 24),
       Vector3FromValue(info, 27),
       floatFromValue(info, 30),
       Vector3FromValue(info, 31),
       ColorFromValue(info, 34)
  );
}

void BindDrawBoundingBox(const Napi::CallbackInfo& info) {
  DrawBoundingBox(
     BoundingBoxFromValue(info, 0),
       ColorFromValue(info, 6)
  );
}

void BindDrawBillboard(const Napi::CallbackInfo& info) {
  DrawBillboard(
     Camera3DFromValue(info, 0),
       TextureFromValue(info, 11),
       Vector3FromValue(info, 16),
       floatFromValue(info, 19),
       ColorFromValue(info, 20)
  );
}

void BindDrawBillboardRec(const Napi::CallbackInfo& info) {
  DrawBillboardRec(
     Camera3DFromValue(info, 0),
       TextureFromValue(info, 11),
       RectangleFromValue(info, 16),
       Vector3FromValue(info, 20),
       Vector2FromValue(info, 23),
       ColorFromValue(info, 25)
  );
}

void BindDrawBillboardPro(const Napi::CallbackInfo& info) {
  DrawBillboardPro(
     Camera3DFromValue(info, 0),
       TextureFromValue(info, 11),
       RectangleFromValue(info, 16),
       Vector3FromValue(info, 20),
       Vector3FromValue(info, 23),
       Vector2FromValue(info, 26),
       Vector2FromValue(info, 28),
       floatFromValue(info, 30),
       ColorFromValue(info, 31)
  );
}

void BindUpdateMeshBuffer(const Napi::CallbackInfo& info) {
  UpdateMeshBuffer(
     MeshFromValue(info, 0),
       intFromValue(info, 15),
       (void *) pointerFromValue(info, 16),
       intFromValue(info, 17),
       intFromValue(info, 18)
  );
}

void BindUnloadMesh(const Napi::CallbackInfo& info) {
  UnloadMesh(
     MeshFromValue(info, 0)
  );
}

void BindUpdateModelAnimation(const Napi::CallbackInfo& info) {
  UpdateModelAnimation(
     ModelFromValue(info, 0),
       ModelAnimationFromValue(info, 24),
       intFromValue(info, 28)
  );
}

void BindUnloadModelAnimation(const Napi::CallbackInfo& info) {
  UnloadModelAnimation(
     ModelAnimationFromValue(info, 0)
  );
}

void BindUnloadModelAnimations(const Napi::CallbackInfo& info) {
  UnloadModelAnimations(
     (ModelAnimation*) pointerFromValue(info, 0),
       unsignedintFromValue(info, 1)
  );
}

void BindInitAudioDevice(const Napi::CallbackInfo& info) {
  InitAudioDevice(
    
  );
}

void BindCloseAudioDevice(const Napi::CallbackInfo& info) {
  CloseAudioDevice(
    
  );
}

void BindSetMasterVolume(const Napi::CallbackInfo& info) {
  SetMasterVolume(
     floatFromValue(info, 0)
  );
}

void BindUpdateSound(const Napi::CallbackInfo& info) {
  UpdateSound(
     SoundFromValue(info, 0),
       (const void *) pointerFromValue(info, 5),
       intFromValue(info, 6)
  );
}

void BindUnloadWave(const Napi::CallbackInfo& info) {
  UnloadWave(
     WaveFromValue(info, 0)
  );
}

void BindUnloadSound(const Napi::CallbackInfo& info) {
  UnloadSound(
     SoundFromValue(info, 0)
  );
}

void BindPlaySound(const Napi::CallbackInfo& info) {
  PlaySound(
     SoundFromValue(info, 0)
  );
}

void BindStopSound(const Napi::CallbackInfo& info) {
  StopSound(
     SoundFromValue(info, 0)
  );
}

void BindPauseSound(const Napi::CallbackInfo& info) {
  PauseSound(
     SoundFromValue(info, 0)
  );
}

void BindResumeSound(const Napi::CallbackInfo& info) {
  ResumeSound(
     SoundFromValue(info, 0)
  );
}

void BindPlaySoundMulti(const Napi::CallbackInfo& info) {
  PlaySoundMulti(
     SoundFromValue(info, 0)
  );
}

void BindStopSoundMulti(const Napi::CallbackInfo& info) {
  StopSoundMulti(
    
  );
}

void BindSetSoundVolume(const Napi::CallbackInfo& info) {
  SetSoundVolume(
     SoundFromValue(info, 0),
       floatFromValue(info, 5)
  );
}

void BindSetSoundPitch(const Napi::CallbackInfo& info) {
  SetSoundPitch(
     SoundFromValue(info, 0),
       floatFromValue(info, 5)
  );
}

void BindUnloadWaveSamples(const Napi::CallbackInfo& info) {
  UnloadWaveSamples(
     (float *) pointerFromValue(info, 0)
  );
}

void BindUnloadMusicStream(const Napi::CallbackInfo& info) {
  UnloadMusicStream(
     MusicFromValue(info, 0)
  );
}

void BindPlayMusicStream(const Napi::CallbackInfo& info) {
  PlayMusicStream(
     MusicFromValue(info, 0)
  );
}

void BindUpdateMusicStream(const Napi::CallbackInfo& info) {
  UpdateMusicStream(
     MusicFromValue(info, 0)
  );
}

void BindStopMusicStream(const Napi::CallbackInfo& info) {
  StopMusicStream(
     MusicFromValue(info, 0)
  );
}

void BindPauseMusicStream(const Napi::CallbackInfo& info) {
  PauseMusicStream(
     MusicFromValue(info, 0)
  );
}

void BindResumeMusicStream(const Napi::CallbackInfo& info) {
  ResumeMusicStream(
     MusicFromValue(info, 0)
  );
}

void BindSeekMusicStream(const Napi::CallbackInfo& info) {
  SeekMusicStream(
     MusicFromValue(info, 0),
       floatFromValue(info, 8)
  );
}

void BindSetMusicVolume(const Napi::CallbackInfo& info) {
  SetMusicVolume(
     MusicFromValue(info, 0),
       floatFromValue(info, 8)
  );
}

void BindSetMusicPitch(const Napi::CallbackInfo& info) {
  SetMusicPitch(
     MusicFromValue(info, 0),
       floatFromValue(info, 8)
  );
}

void BindUnloadAudioStream(const Napi::CallbackInfo& info) {
  UnloadAudioStream(
     AudioStreamFromValue(info, 0)
  );
}

void BindUpdateAudioStream(const Napi::CallbackInfo& info) {
  UpdateAudioStream(
     AudioStreamFromValue(info, 0),
       (const void *) pointerFromValue(info, 4),
       intFromValue(info, 5)
  );
}

void BindPlayAudioStream(const Napi::CallbackInfo& info) {
  PlayAudioStream(
     AudioStreamFromValue(info, 0)
  );
}

void BindPauseAudioStream(const Napi::CallbackInfo& info) {
  PauseAudioStream(
     AudioStreamFromValue(info, 0)
  );
}

void BindResumeAudioStream(const Napi::CallbackInfo& info) {
  ResumeAudioStream(
     AudioStreamFromValue(info, 0)
  );
}

void BindStopAudioStream(const Napi::CallbackInfo& info) {
  StopAudioStream(
     AudioStreamFromValue(info, 0)
  );
}

void BindSetAudioStreamVolume(const Napi::CallbackInfo& info) {
  SetAudioStreamVolume(
     AudioStreamFromValue(info, 0),
       floatFromValue(info, 4)
  );
}

void BindSetAudioStreamPitch(const Napi::CallbackInfo& info) {
  SetAudioStreamPitch(
     AudioStreamFromValue(info, 0),
       floatFromValue(info, 4)
  );
}

void BindSetAudioStreamBufferSizeDefault(const Napi::CallbackInfo& info) {
  SetAudioStreamBufferSizeDefault(
     intFromValue(info, 0)
  );
}
// By-Reference function bindings

Napi::Value BindUpdateCamera(const Napi::CallbackInfo& info) {
  Camera obj = CameraFromValue(info, 0);
  UpdateCamera(
    &obj

  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageFormat(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageFormat(
    &obj, intFromValue(info, 5)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageToPOT(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageToPOT(
    &obj, ColorFromValue(info, 5)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageCrop(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageCrop(
    &obj, RectangleFromValue(info, 5)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageAlphaCrop(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageAlphaCrop(
    &obj, floatFromValue(info, 5)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageAlphaClear(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageAlphaClear(
    &obj, ColorFromValue(info, 5),
       floatFromValue(info, 9)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageAlphaMask(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageAlphaMask(
    &obj, ImageFromValue(info, 5)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageAlphaPremultiply(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageAlphaPremultiply(
    &obj

  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageResize(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageResize(
    &obj, intFromValue(info, 5),
       intFromValue(info, 6)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageResizeNN(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageResizeNN(
    &obj, intFromValue(info, 5),
       intFromValue(info, 6)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageResizeCanvas(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageResizeCanvas(
    &obj, intFromValue(info, 5),
       intFromValue(info, 6),
       intFromValue(info, 7),
       intFromValue(info, 8),
       ColorFromValue(info, 9)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageMipmaps(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageMipmaps(
    &obj

  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDither(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDither(
    &obj, intFromValue(info, 5),
       intFromValue(info, 6),
       intFromValue(info, 7),
       intFromValue(info, 8)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageFlipVertical(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageFlipVertical(
    &obj

  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageFlipHorizontal(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageFlipHorizontal(
    &obj

  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageRotateCW(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageRotateCW(
    &obj

  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageRotateCCW(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageRotateCCW(
    &obj

  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageColorTint(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageColorTint(
    &obj, ColorFromValue(info, 5)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageColorInvert(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageColorInvert(
    &obj

  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageColorGrayscale(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageColorGrayscale(
    &obj

  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageColorContrast(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageColorContrast(
    &obj, floatFromValue(info, 5)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageColorBrightness(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageColorBrightness(
    &obj, intFromValue(info, 5)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageColorReplace(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageColorReplace(
    &obj, ColorFromValue(info, 5),
       ColorFromValue(info, 9)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageClearBackground(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageClearBackground(
    &obj, ColorFromValue(info, 5)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawPixel(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDrawPixel(
    &obj, intFromValue(info, 5),
       intFromValue(info, 6),
       ColorFromValue(info, 7)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawPixelV(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDrawPixelV(
    &obj, Vector2FromValue(info, 5),
       ColorFromValue(info, 7)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawLine(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDrawLine(
    &obj, intFromValue(info, 5),
       intFromValue(info, 6),
       intFromValue(info, 7),
       intFromValue(info, 8),
       ColorFromValue(info, 9)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawLineV(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDrawLineV(
    &obj, Vector2FromValue(info, 5),
       Vector2FromValue(info, 7),
       ColorFromValue(info, 9)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawCircle(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDrawCircle(
    &obj, intFromValue(info, 5),
       intFromValue(info, 6),
       intFromValue(info, 7),
       ColorFromValue(info, 8)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawCircleV(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDrawCircleV(
    &obj, Vector2FromValue(info, 5),
       intFromValue(info, 7),
       ColorFromValue(info, 8)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawRectangle(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDrawRectangle(
    &obj, intFromValue(info, 5),
       intFromValue(info, 6),
       intFromValue(info, 7),
       intFromValue(info, 8),
       ColorFromValue(info, 9)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawRectangleV(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDrawRectangleV(
    &obj, Vector2FromValue(info, 5),
       Vector2FromValue(info, 7),
       ColorFromValue(info, 9)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawRectangleRec(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDrawRectangleRec(
    &obj, RectangleFromValue(info, 5),
       ColorFromValue(info, 9)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawRectangleLines(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDrawRectangleLines(
    &obj, RectangleFromValue(info, 5),
       intFromValue(info, 9),
       ColorFromValue(info, 10)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDraw(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDraw(
    &obj, ImageFromValue(info, 5),
       RectangleFromValue(info, 10),
       RectangleFromValue(info, 14),
       ColorFromValue(info, 18)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawText(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDrawText(
    &obj, (const char *) stringFromValue(info, 5),
       intFromValue(info, 6),
       intFromValue(info, 7),
       intFromValue(info, 8),
       ColorFromValue(info, 9)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawTextEx(const Napi::CallbackInfo& info) {
  Image obj = ImageFromValue(info, 0);
  ImageDrawTextEx(
    &obj, FontFromValue(info, 5),
       (const char *) stringFromValue(info, 15),
       Vector2FromValue(info, 16),
       floatFromValue(info, 18),
       floatFromValue(info, 19),
       ColorFromValue(info, 20)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindGenTextureMipmaps(const Napi::CallbackInfo& info) {
  Texture2D obj = Texture2DFromValue(info, 0);
  GenTextureMipmaps(
    &obj

  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindUploadMesh(const Napi::CallbackInfo& info) {
  Mesh obj = MeshFromValue(info, 0);
  UploadMesh(
    &obj, boolFromValue(info, 15)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindGenMeshTangents(const Napi::CallbackInfo& info) {
  Mesh obj = MeshFromValue(info, 0);
  GenMeshTangents(
    &obj

  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindGenMeshBinormals(const Napi::CallbackInfo& info) {
  Mesh obj = MeshFromValue(info, 0);
  GenMeshBinormals(
    &obj

  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindSetModelMeshMaterial(const Napi::CallbackInfo& info) {
  Model obj = ModelFromValue(info, 0);
  SetModelMeshMaterial(
    &obj, intFromValue(info, 24),
       intFromValue(info, 25)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindWaveFormat(const Napi::CallbackInfo& info) {
  Wave obj = WaveFromValue(info, 0);
  WaveFormat(
    &obj, intFromValue(info, 5),
       intFromValue(info, 6),
       intFromValue(info, 7)
  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindWaveCrop(const Napi::CallbackInfo& info) {
  Wave obj = WaveFromValue(info, 0);
  WaveCrop(
    &obj, intFromValue(info, 5),
       intFromValue(info, 6)
  );
  return ToValue(info.Env(), obj);
}

// Shader Functions
void BindSetShaderFloat(const Napi::CallbackInfo& info) {
  float value = floatFromValue(info, 3);
  SetShaderValueV(
     ShaderFromValue(info, 0),
       intFromValue(info, 2),
       &value,
       SHADER_UNIFORM_FLOAT,
       1
  );
}

void BindSetShaderInt(const Napi::CallbackInfo& info) {
  int value = intFromValue(info, 3);
  SetShaderValueV(
     ShaderFromValue(info, 0),
       intFromValue(info, 2),
       &value,
       SHADER_UNIFORM_INT,
       1
  );
}

void BindSetShaderVec2(const Napi::CallbackInfo& info) {
  Vector2 value = Vector2FromValue(info, 3);
  SetShaderValueV(
     ShaderFromValue(info, 0),
       intFromValue(info, 2),
       &value,
       SHADER_UNIFORM_VEC2,
       1
  );
}

void BindSetShaderVec3(const Napi::CallbackInfo& info) {
  Vector3 value = Vector3FromValue(info, 3);
  SetShaderValueV(
     ShaderFromValue(info, 0),
       intFromValue(info, 2),
       &value,
       SHADER_UNIFORM_VEC3,
       1
  );
}

void BindSetShaderVec4(const Napi::CallbackInfo& info) {
  Vector4 value = Vector4FromValue(info, 3);
  SetShaderValueV(
     ShaderFromValue(info, 0),
       intFromValue(info, 2),
       &value,
       SHADER_UNIFORM_VEC4,
       1
  );
}

// Exported JS Module object
Napi::Object Init(Napi::Env env, Napi::Object exports) {

  exports.Set("BindInitWindow", Napi::Function::New(env, BindInitWindow));
  exports.Set("BindWindowShouldClose", Napi::Function::New(env, BindWindowShouldClose));
  exports.Set("BindCloseWindow", Napi::Function::New(env, BindCloseWindow));
  exports.Set("BindIsWindowReady", Napi::Function::New(env, BindIsWindowReady));
  exports.Set("BindIsWindowFullscreen", Napi::Function::New(env, BindIsWindowFullscreen));
  exports.Set("BindIsWindowHidden", Napi::Function::New(env, BindIsWindowHidden));
  exports.Set("BindIsWindowMinimized", Napi::Function::New(env, BindIsWindowMinimized));
  exports.Set("BindIsWindowMaximized", Napi::Function::New(env, BindIsWindowMaximized));
  exports.Set("BindIsWindowFocused", Napi::Function::New(env, BindIsWindowFocused));
  exports.Set("BindIsWindowResized", Napi::Function::New(env, BindIsWindowResized));
  exports.Set("BindIsWindowState", Napi::Function::New(env, BindIsWindowState));
  exports.Set("BindSetWindowState", Napi::Function::New(env, BindSetWindowState));
  exports.Set("BindClearWindowState", Napi::Function::New(env, BindClearWindowState));
  exports.Set("BindToggleFullscreen", Napi::Function::New(env, BindToggleFullscreen));
  exports.Set("BindMaximizeWindow", Napi::Function::New(env, BindMaximizeWindow));
  exports.Set("BindMinimizeWindow", Napi::Function::New(env, BindMinimizeWindow));
  exports.Set("BindRestoreWindow", Napi::Function::New(env, BindRestoreWindow));
  exports.Set("BindSetWindowIcon", Napi::Function::New(env, BindSetWindowIcon));
  exports.Set("BindSetWindowTitle", Napi::Function::New(env, BindSetWindowTitle));
  exports.Set("BindSetWindowPosition", Napi::Function::New(env, BindSetWindowPosition));
  exports.Set("BindSetWindowMonitor", Napi::Function::New(env, BindSetWindowMonitor));
  exports.Set("BindSetWindowMinSize", Napi::Function::New(env, BindSetWindowMinSize));
  exports.Set("BindSetWindowSize", Napi::Function::New(env, BindSetWindowSize));
  exports.Set("BindGetWindowHandle", Napi::Function::New(env, BindGetWindowHandle));
  exports.Set("BindGetScreenWidth", Napi::Function::New(env, BindGetScreenWidth));
  exports.Set("BindGetScreenHeight", Napi::Function::New(env, BindGetScreenHeight));
  exports.Set("BindGetMonitorCount", Napi::Function::New(env, BindGetMonitorCount));
  exports.Set("BindGetCurrentMonitor", Napi::Function::New(env, BindGetCurrentMonitor));
  exports.Set("BindGetMonitorPosition", Napi::Function::New(env, BindGetMonitorPosition));
  exports.Set("BindGetMonitorWidth", Napi::Function::New(env, BindGetMonitorWidth));
  exports.Set("BindGetMonitorHeight", Napi::Function::New(env, BindGetMonitorHeight));
  exports.Set("BindGetMonitorPhysicalWidth", Napi::Function::New(env, BindGetMonitorPhysicalWidth));
  exports.Set("BindGetMonitorPhysicalHeight", Napi::Function::New(env, BindGetMonitorPhysicalHeight));
  exports.Set("BindGetMonitorRefreshRate", Napi::Function::New(env, BindGetMonitorRefreshRate));
  exports.Set("BindGetWindowPosition", Napi::Function::New(env, BindGetWindowPosition));
  exports.Set("BindGetWindowScaleDPI", Napi::Function::New(env, BindGetWindowScaleDPI));
  exports.Set("BindGetMonitorName", Napi::Function::New(env, BindGetMonitorName));
  exports.Set("BindSetClipboardText", Napi::Function::New(env, BindSetClipboardText));
  exports.Set("BindGetClipboardText", Napi::Function::New(env, BindGetClipboardText));
  exports.Set("BindSwapScreenBuffer", Napi::Function::New(env, BindSwapScreenBuffer));
  exports.Set("BindPollInputEvents", Napi::Function::New(env, BindPollInputEvents));
  exports.Set("BindWaitTime", Napi::Function::New(env, BindWaitTime));
  exports.Set("BindShowCursor", Napi::Function::New(env, BindShowCursor));
  exports.Set("BindHideCursor", Napi::Function::New(env, BindHideCursor));
  exports.Set("BindIsCursorHidden", Napi::Function::New(env, BindIsCursorHidden));
  exports.Set("BindEnableCursor", Napi::Function::New(env, BindEnableCursor));
  exports.Set("BindDisableCursor", Napi::Function::New(env, BindDisableCursor));
  exports.Set("BindIsCursorOnScreen", Napi::Function::New(env, BindIsCursorOnScreen));
  exports.Set("BindClearBackground", Napi::Function::New(env, BindClearBackground));
  exports.Set("BindBeginDrawing", Napi::Function::New(env, BindBeginDrawing));
  exports.Set("BindEndDrawing", Napi::Function::New(env, BindEndDrawing));
  exports.Set("BindBeginMode2D", Napi::Function::New(env, BindBeginMode2D));
  exports.Set("BindEndMode2D", Napi::Function::New(env, BindEndMode2D));
  exports.Set("BindBeginMode3D", Napi::Function::New(env, BindBeginMode3D));
  exports.Set("BindEndMode3D", Napi::Function::New(env, BindEndMode3D));
  exports.Set("BindBeginTextureMode", Napi::Function::New(env, BindBeginTextureMode));
  exports.Set("BindEndTextureMode", Napi::Function::New(env, BindEndTextureMode));
  exports.Set("BindBeginShaderMode", Napi::Function::New(env, BindBeginShaderMode));
  exports.Set("BindEndShaderMode", Napi::Function::New(env, BindEndShaderMode));
  exports.Set("BindBeginBlendMode", Napi::Function::New(env, BindBeginBlendMode));
  exports.Set("BindEndBlendMode", Napi::Function::New(env, BindEndBlendMode));
  exports.Set("BindBeginScissorMode", Napi::Function::New(env, BindBeginScissorMode));
  exports.Set("BindEndScissorMode", Napi::Function::New(env, BindEndScissorMode));
  exports.Set("BindEndVrStereoMode", Napi::Function::New(env, BindEndVrStereoMode));
  exports.Set("BindLoadShader", Napi::Function::New(env, BindLoadShader));
  exports.Set("BindLoadShaderFromMemory", Napi::Function::New(env, BindLoadShaderFromMemory));
  exports.Set("BindGetShaderLocation", Napi::Function::New(env, BindGetShaderLocation));
  exports.Set("BindGetShaderLocationAttrib", Napi::Function::New(env, BindGetShaderLocationAttrib));
  exports.Set("BindSetShaderValueMatrix", Napi::Function::New(env, BindSetShaderValueMatrix));
  exports.Set("BindSetShaderValueTexture", Napi::Function::New(env, BindSetShaderValueTexture));
  exports.Set("BindUnloadShader", Napi::Function::New(env, BindUnloadShader));
  exports.Set("BindGetMouseRay", Napi::Function::New(env, BindGetMouseRay));
  exports.Set("BindGetCameraMatrix", Napi::Function::New(env, BindGetCameraMatrix));
  exports.Set("BindGetCameraMatrix2D", Napi::Function::New(env, BindGetCameraMatrix2D));
  exports.Set("BindGetWorldToScreen", Napi::Function::New(env, BindGetWorldToScreen));
  exports.Set("BindGetWorldToScreenEx", Napi::Function::New(env, BindGetWorldToScreenEx));
  exports.Set("BindGetWorldToScreen2D", Napi::Function::New(env, BindGetWorldToScreen2D));
  exports.Set("BindGetScreenToWorld2D", Napi::Function::New(env, BindGetScreenToWorld2D));
  exports.Set("BindSetTargetFPS", Napi::Function::New(env, BindSetTargetFPS));
  exports.Set("BindGetFPS", Napi::Function::New(env, BindGetFPS));
  exports.Set("BindGetFrameTime", Napi::Function::New(env, BindGetFrameTime));
  exports.Set("BindGetTime", Napi::Function::New(env, BindGetTime));
  exports.Set("BindGetRandomValue", Napi::Function::New(env, BindGetRandomValue));
  exports.Set("BindSetRandomSeed", Napi::Function::New(env, BindSetRandomSeed));
  exports.Set("BindTakeScreenshot", Napi::Function::New(env, BindTakeScreenshot));
  exports.Set("BindSetConfigFlags", Napi::Function::New(env, BindSetConfigFlags));
  exports.Set("BindSetTraceLogLevel", Napi::Function::New(env, BindSetTraceLogLevel));
  exports.Set("BindMemAlloc", Napi::Function::New(env, BindMemAlloc));
  exports.Set("BindMemRealloc", Napi::Function::New(env, BindMemRealloc));
  exports.Set("BindMemFree", Napi::Function::New(env, BindMemFree));
  exports.Set("BindLoadFileData", Napi::Function::New(env, BindLoadFileData));
  exports.Set("BindUnloadFileData", Napi::Function::New(env, BindUnloadFileData));
  exports.Set("BindSaveFileData", Napi::Function::New(env, BindSaveFileData));
  exports.Set("BindLoadFileText", Napi::Function::New(env, BindLoadFileText));
  exports.Set("BindUnloadFileText", Napi::Function::New(env, BindUnloadFileText));
  exports.Set("BindSaveFileText", Napi::Function::New(env, BindSaveFileText));
  exports.Set("BindFileExists", Napi::Function::New(env, BindFileExists));
  exports.Set("BindDirectoryExists", Napi::Function::New(env, BindDirectoryExists));
  exports.Set("BindIsFileExtension", Napi::Function::New(env, BindIsFileExtension));
  exports.Set("BindGetFileExtension", Napi::Function::New(env, BindGetFileExtension));
  exports.Set("BindGetFileName", Napi::Function::New(env, BindGetFileName));
  exports.Set("BindGetFileNameWithoutExt", Napi::Function::New(env, BindGetFileNameWithoutExt));
  exports.Set("BindGetDirectoryPath", Napi::Function::New(env, BindGetDirectoryPath));
  exports.Set("BindGetPrevDirectoryPath", Napi::Function::New(env, BindGetPrevDirectoryPath));
  exports.Set("BindGetWorkingDirectory", Napi::Function::New(env, BindGetWorkingDirectory));
  exports.Set("BindGetDirectoryFiles", Napi::Function::New(env, BindGetDirectoryFiles));
  exports.Set("BindClearDirectoryFiles", Napi::Function::New(env, BindClearDirectoryFiles));
  exports.Set("BindChangeDirectory", Napi::Function::New(env, BindChangeDirectory));
  exports.Set("BindIsFileDropped", Napi::Function::New(env, BindIsFileDropped));
  exports.Set("BindGetDroppedFiles", Napi::Function::New(env, BindGetDroppedFiles));
  exports.Set("BindClearDroppedFiles", Napi::Function::New(env, BindClearDroppedFiles));
  exports.Set("BindGetFileModTime", Napi::Function::New(env, BindGetFileModTime));
  exports.Set("BindCompressData", Napi::Function::New(env, BindCompressData));
  exports.Set("BindDecompressData", Napi::Function::New(env, BindDecompressData));
  exports.Set("BindEncodeDataBase64", Napi::Function::New(env, BindEncodeDataBase64));
  exports.Set("BindDecodeDataBase64", Napi::Function::New(env, BindDecodeDataBase64));
  exports.Set("BindSaveStorageValue", Napi::Function::New(env, BindSaveStorageValue));
  exports.Set("BindLoadStorageValue", Napi::Function::New(env, BindLoadStorageValue));
  exports.Set("BindOpenURL", Napi::Function::New(env, BindOpenURL));
  exports.Set("BindIsKeyPressed", Napi::Function::New(env, BindIsKeyPressed));
  exports.Set("BindIsKeyDown", Napi::Function::New(env, BindIsKeyDown));
  exports.Set("BindIsKeyReleased", Napi::Function::New(env, BindIsKeyReleased));
  exports.Set("BindIsKeyUp", Napi::Function::New(env, BindIsKeyUp));
  exports.Set("BindSetExitKey", Napi::Function::New(env, BindSetExitKey));
  exports.Set("BindGetKeyPressed", Napi::Function::New(env, BindGetKeyPressed));
  exports.Set("BindGetCharPressed", Napi::Function::New(env, BindGetCharPressed));
  exports.Set("BindIsGamepadAvailable", Napi::Function::New(env, BindIsGamepadAvailable));
  exports.Set("BindGetGamepadName", Napi::Function::New(env, BindGetGamepadName));
  exports.Set("BindIsGamepadButtonPressed", Napi::Function::New(env, BindIsGamepadButtonPressed));
  exports.Set("BindIsGamepadButtonDown", Napi::Function::New(env, BindIsGamepadButtonDown));
  exports.Set("BindIsGamepadButtonReleased", Napi::Function::New(env, BindIsGamepadButtonReleased));
  exports.Set("BindIsGamepadButtonUp", Napi::Function::New(env, BindIsGamepadButtonUp));
  exports.Set("BindGetGamepadButtonPressed", Napi::Function::New(env, BindGetGamepadButtonPressed));
  exports.Set("BindGetGamepadAxisCount", Napi::Function::New(env, BindGetGamepadAxisCount));
  exports.Set("BindGetGamepadAxisMovement", Napi::Function::New(env, BindGetGamepadAxisMovement));
  exports.Set("BindSetGamepadMappings", Napi::Function::New(env, BindSetGamepadMappings));
  exports.Set("BindIsMouseButtonPressed", Napi::Function::New(env, BindIsMouseButtonPressed));
  exports.Set("BindIsMouseButtonDown", Napi::Function::New(env, BindIsMouseButtonDown));
  exports.Set("BindIsMouseButtonReleased", Napi::Function::New(env, BindIsMouseButtonReleased));
  exports.Set("BindIsMouseButtonUp", Napi::Function::New(env, BindIsMouseButtonUp));
  exports.Set("BindGetMouseX", Napi::Function::New(env, BindGetMouseX));
  exports.Set("BindGetMouseY", Napi::Function::New(env, BindGetMouseY));
  exports.Set("BindGetMousePosition", Napi::Function::New(env, BindGetMousePosition));
  exports.Set("BindGetMouseDelta", Napi::Function::New(env, BindGetMouseDelta));
  exports.Set("BindSetMousePosition", Napi::Function::New(env, BindSetMousePosition));
  exports.Set("BindSetMouseOffset", Napi::Function::New(env, BindSetMouseOffset));
  exports.Set("BindSetMouseScale", Napi::Function::New(env, BindSetMouseScale));
  exports.Set("BindGetMouseWheelMove", Napi::Function::New(env, BindGetMouseWheelMove));
  exports.Set("BindSetMouseCursor", Napi::Function::New(env, BindSetMouseCursor));
  exports.Set("BindGetTouchX", Napi::Function::New(env, BindGetTouchX));
  exports.Set("BindGetTouchY", Napi::Function::New(env, BindGetTouchY));
  exports.Set("BindGetTouchPosition", Napi::Function::New(env, BindGetTouchPosition));
  exports.Set("BindGetTouchPointId", Napi::Function::New(env, BindGetTouchPointId));
  exports.Set("BindGetTouchPointCount", Napi::Function::New(env, BindGetTouchPointCount));
  exports.Set("BindSetGesturesEnabled", Napi::Function::New(env, BindSetGesturesEnabled));
  exports.Set("BindIsGestureDetected", Napi::Function::New(env, BindIsGestureDetected));
  exports.Set("BindGetGestureDetected", Napi::Function::New(env, BindGetGestureDetected));
  exports.Set("BindGetGestureHoldDuration", Napi::Function::New(env, BindGetGestureHoldDuration));
  exports.Set("BindGetGestureDragVector", Napi::Function::New(env, BindGetGestureDragVector));
  exports.Set("BindGetGestureDragAngle", Napi::Function::New(env, BindGetGestureDragAngle));
  exports.Set("BindGetGesturePinchVector", Napi::Function::New(env, BindGetGesturePinchVector));
  exports.Set("BindGetGesturePinchAngle", Napi::Function::New(env, BindGetGesturePinchAngle));
  exports.Set("BindSetCameraMode", Napi::Function::New(env, BindSetCameraMode));
  exports.Set("BindUpdateCamera", Napi::Function::New(env, BindUpdateCamera));
  exports.Set("BindSetCameraPanControl", Napi::Function::New(env, BindSetCameraPanControl));
  exports.Set("BindSetCameraAltControl", Napi::Function::New(env, BindSetCameraAltControl));
  exports.Set("BindSetCameraSmoothZoomControl", Napi::Function::New(env, BindSetCameraSmoothZoomControl));
  exports.Set("BindSetCameraMoveControls", Napi::Function::New(env, BindSetCameraMoveControls));
  exports.Set("BindSetShapesTexture", Napi::Function::New(env, BindSetShapesTexture));
  exports.Set("BindDrawPixel", Napi::Function::New(env, BindDrawPixel));
  exports.Set("BindDrawPixelV", Napi::Function::New(env, BindDrawPixelV));
  exports.Set("BindDrawLine", Napi::Function::New(env, BindDrawLine));
  exports.Set("BindDrawLineV", Napi::Function::New(env, BindDrawLineV));
  exports.Set("BindDrawLineEx", Napi::Function::New(env, BindDrawLineEx));
  exports.Set("BindDrawLineBezier", Napi::Function::New(env, BindDrawLineBezier));
  exports.Set("BindDrawLineBezierQuad", Napi::Function::New(env, BindDrawLineBezierQuad));
  exports.Set("BindDrawLineBezierCubic", Napi::Function::New(env, BindDrawLineBezierCubic));
  exports.Set("BindDrawLineStrip", Napi::Function::New(env, BindDrawLineStrip));
  exports.Set("BindDrawCircle", Napi::Function::New(env, BindDrawCircle));
  exports.Set("BindDrawCircleSector", Napi::Function::New(env, BindDrawCircleSector));
  exports.Set("BindDrawCircleSectorLines", Napi::Function::New(env, BindDrawCircleSectorLines));
  exports.Set("BindDrawCircleGradient", Napi::Function::New(env, BindDrawCircleGradient));
  exports.Set("BindDrawCircleV", Napi::Function::New(env, BindDrawCircleV));
  exports.Set("BindDrawCircleLines", Napi::Function::New(env, BindDrawCircleLines));
  exports.Set("BindDrawEllipse", Napi::Function::New(env, BindDrawEllipse));
  exports.Set("BindDrawEllipseLines", Napi::Function::New(env, BindDrawEllipseLines));
  exports.Set("BindDrawRing", Napi::Function::New(env, BindDrawRing));
  exports.Set("BindDrawRingLines", Napi::Function::New(env, BindDrawRingLines));
  exports.Set("BindDrawRectangle", Napi::Function::New(env, BindDrawRectangle));
  exports.Set("BindDrawRectangleV", Napi::Function::New(env, BindDrawRectangleV));
  exports.Set("BindDrawRectangleRec", Napi::Function::New(env, BindDrawRectangleRec));
  exports.Set("BindDrawRectanglePro", Napi::Function::New(env, BindDrawRectanglePro));
  exports.Set("BindDrawRectangleGradientV", Napi::Function::New(env, BindDrawRectangleGradientV));
  exports.Set("BindDrawRectangleGradientH", Napi::Function::New(env, BindDrawRectangleGradientH));
  exports.Set("BindDrawRectangleGradientEx", Napi::Function::New(env, BindDrawRectangleGradientEx));
  exports.Set("BindDrawRectangleLines", Napi::Function::New(env, BindDrawRectangleLines));
  exports.Set("BindDrawRectangleLinesEx", Napi::Function::New(env, BindDrawRectangleLinesEx));
  exports.Set("BindDrawRectangleRounded", Napi::Function::New(env, BindDrawRectangleRounded));
  exports.Set("BindDrawRectangleRoundedLines", Napi::Function::New(env, BindDrawRectangleRoundedLines));
  exports.Set("BindDrawTriangle", Napi::Function::New(env, BindDrawTriangle));
  exports.Set("BindDrawTriangleLines", Napi::Function::New(env, BindDrawTriangleLines));
  exports.Set("BindDrawTriangleFan", Napi::Function::New(env, BindDrawTriangleFan));
  exports.Set("BindDrawTriangleStrip", Napi::Function::New(env, BindDrawTriangleStrip));
  exports.Set("BindDrawPoly", Napi::Function::New(env, BindDrawPoly));
  exports.Set("BindDrawPolyLines", Napi::Function::New(env, BindDrawPolyLines));
  exports.Set("BindDrawPolyLinesEx", Napi::Function::New(env, BindDrawPolyLinesEx));
  exports.Set("BindCheckCollisionRecs", Napi::Function::New(env, BindCheckCollisionRecs));
  exports.Set("BindCheckCollisionCircles", Napi::Function::New(env, BindCheckCollisionCircles));
  exports.Set("BindCheckCollisionCircleRec", Napi::Function::New(env, BindCheckCollisionCircleRec));
  exports.Set("BindCheckCollisionPointRec", Napi::Function::New(env, BindCheckCollisionPointRec));
  exports.Set("BindCheckCollisionPointCircle", Napi::Function::New(env, BindCheckCollisionPointCircle));
  exports.Set("BindCheckCollisionPointTriangle", Napi::Function::New(env, BindCheckCollisionPointTriangle));
  exports.Set("BindCheckCollisionLines", Napi::Function::New(env, BindCheckCollisionLines));
  exports.Set("BindCheckCollisionPointLine", Napi::Function::New(env, BindCheckCollisionPointLine));
  exports.Set("BindGetCollisionRec", Napi::Function::New(env, BindGetCollisionRec));
  exports.Set("BindLoadImage", Napi::Function::New(env, BindLoadImage));
  exports.Set("BindLoadImageRaw", Napi::Function::New(env, BindLoadImageRaw));
  exports.Set("BindLoadImageAnim", Napi::Function::New(env, BindLoadImageAnim));
  exports.Set("BindLoadImageFromMemory", Napi::Function::New(env, BindLoadImageFromMemory));
  exports.Set("BindLoadImageFromTexture", Napi::Function::New(env, BindLoadImageFromTexture));
  exports.Set("BindLoadImageFromScreen", Napi::Function::New(env, BindLoadImageFromScreen));
  exports.Set("BindUnloadImage", Napi::Function::New(env, BindUnloadImage));
  exports.Set("BindExportImage", Napi::Function::New(env, BindExportImage));
  exports.Set("BindExportImageAsCode", Napi::Function::New(env, BindExportImageAsCode));
  exports.Set("BindGenImageColor", Napi::Function::New(env, BindGenImageColor));
  exports.Set("BindGenImageGradientV", Napi::Function::New(env, BindGenImageGradientV));
  exports.Set("BindGenImageGradientH", Napi::Function::New(env, BindGenImageGradientH));
  exports.Set("BindGenImageGradientRadial", Napi::Function::New(env, BindGenImageGradientRadial));
  exports.Set("BindGenImageChecked", Napi::Function::New(env, BindGenImageChecked));
  exports.Set("BindGenImageWhiteNoise", Napi::Function::New(env, BindGenImageWhiteNoise));
  exports.Set("BindGenImageCellular", Napi::Function::New(env, BindGenImageCellular));
  exports.Set("BindImageCopy", Napi::Function::New(env, BindImageCopy));
  exports.Set("BindImageFromImage", Napi::Function::New(env, BindImageFromImage));
  exports.Set("BindImageText", Napi::Function::New(env, BindImageText));
  exports.Set("BindImageTextEx", Napi::Function::New(env, BindImageTextEx));
  exports.Set("BindImageFormat", Napi::Function::New(env, BindImageFormat));
  exports.Set("BindImageToPOT", Napi::Function::New(env, BindImageToPOT));
  exports.Set("BindImageCrop", Napi::Function::New(env, BindImageCrop));
  exports.Set("BindImageAlphaCrop", Napi::Function::New(env, BindImageAlphaCrop));
  exports.Set("BindImageAlphaClear", Napi::Function::New(env, BindImageAlphaClear));
  exports.Set("BindImageAlphaMask", Napi::Function::New(env, BindImageAlphaMask));
  exports.Set("BindImageAlphaPremultiply", Napi::Function::New(env, BindImageAlphaPremultiply));
  exports.Set("BindImageResize", Napi::Function::New(env, BindImageResize));
  exports.Set("BindImageResizeNN", Napi::Function::New(env, BindImageResizeNN));
  exports.Set("BindImageResizeCanvas", Napi::Function::New(env, BindImageResizeCanvas));
  exports.Set("BindImageMipmaps", Napi::Function::New(env, BindImageMipmaps));
  exports.Set("BindImageDither", Napi::Function::New(env, BindImageDither));
  exports.Set("BindImageFlipVertical", Napi::Function::New(env, BindImageFlipVertical));
  exports.Set("BindImageFlipHorizontal", Napi::Function::New(env, BindImageFlipHorizontal));
  exports.Set("BindImageRotateCW", Napi::Function::New(env, BindImageRotateCW));
  exports.Set("BindImageRotateCCW", Napi::Function::New(env, BindImageRotateCCW));
  exports.Set("BindImageColorTint", Napi::Function::New(env, BindImageColorTint));
  exports.Set("BindImageColorInvert", Napi::Function::New(env, BindImageColorInvert));
  exports.Set("BindImageColorGrayscale", Napi::Function::New(env, BindImageColorGrayscale));
  exports.Set("BindImageColorContrast", Napi::Function::New(env, BindImageColorContrast));
  exports.Set("BindImageColorBrightness", Napi::Function::New(env, BindImageColorBrightness));
  exports.Set("BindImageColorReplace", Napi::Function::New(env, BindImageColorReplace));
  exports.Set("BindLoadImageColors", Napi::Function::New(env, BindLoadImageColors));
  exports.Set("BindLoadImagePalette", Napi::Function::New(env, BindLoadImagePalette));
  exports.Set("BindUnloadImageColors", Napi::Function::New(env, BindUnloadImageColors));
  exports.Set("BindUnloadImagePalette", Napi::Function::New(env, BindUnloadImagePalette));
  exports.Set("BindGetImageAlphaBorder", Napi::Function::New(env, BindGetImageAlphaBorder));
  exports.Set("BindGetImageColor", Napi::Function::New(env, BindGetImageColor));
  exports.Set("BindImageClearBackground", Napi::Function::New(env, BindImageClearBackground));
  exports.Set("BindImageDrawPixel", Napi::Function::New(env, BindImageDrawPixel));
  exports.Set("BindImageDrawPixelV", Napi::Function::New(env, BindImageDrawPixelV));
  exports.Set("BindImageDrawLine", Napi::Function::New(env, BindImageDrawLine));
  exports.Set("BindImageDrawLineV", Napi::Function::New(env, BindImageDrawLineV));
  exports.Set("BindImageDrawCircle", Napi::Function::New(env, BindImageDrawCircle));
  exports.Set("BindImageDrawCircleV", Napi::Function::New(env, BindImageDrawCircleV));
  exports.Set("BindImageDrawRectangle", Napi::Function::New(env, BindImageDrawRectangle));
  exports.Set("BindImageDrawRectangleV", Napi::Function::New(env, BindImageDrawRectangleV));
  exports.Set("BindImageDrawRectangleRec", Napi::Function::New(env, BindImageDrawRectangleRec));
  exports.Set("BindImageDrawRectangleLines", Napi::Function::New(env, BindImageDrawRectangleLines));
  exports.Set("BindImageDraw", Napi::Function::New(env, BindImageDraw));
  exports.Set("BindImageDrawText", Napi::Function::New(env, BindImageDrawText));
  exports.Set("BindImageDrawTextEx", Napi::Function::New(env, BindImageDrawTextEx));
  exports.Set("BindLoadTexture", Napi::Function::New(env, BindLoadTexture));
  exports.Set("BindLoadTextureFromImage", Napi::Function::New(env, BindLoadTextureFromImage));
  exports.Set("BindLoadTextureCubemap", Napi::Function::New(env, BindLoadTextureCubemap));
  exports.Set("BindLoadRenderTexture", Napi::Function::New(env, BindLoadRenderTexture));
  exports.Set("BindUnloadTexture", Napi::Function::New(env, BindUnloadTexture));
  exports.Set("BindUnloadRenderTexture", Napi::Function::New(env, BindUnloadRenderTexture));
  exports.Set("BindUpdateTexture", Napi::Function::New(env, BindUpdateTexture));
  exports.Set("BindUpdateTextureRec", Napi::Function::New(env, BindUpdateTextureRec));
  exports.Set("BindGenTextureMipmaps", Napi::Function::New(env, BindGenTextureMipmaps));
  exports.Set("BindSetTextureFilter", Napi::Function::New(env, BindSetTextureFilter));
  exports.Set("BindSetTextureWrap", Napi::Function::New(env, BindSetTextureWrap));
  exports.Set("BindDrawTexture", Napi::Function::New(env, BindDrawTexture));
  exports.Set("BindDrawTextureV", Napi::Function::New(env, BindDrawTextureV));
  exports.Set("BindDrawTextureEx", Napi::Function::New(env, BindDrawTextureEx));
  exports.Set("BindDrawTextureRec", Napi::Function::New(env, BindDrawTextureRec));
  exports.Set("BindDrawTextureQuad", Napi::Function::New(env, BindDrawTextureQuad));
  exports.Set("BindDrawTextureTiled", Napi::Function::New(env, BindDrawTextureTiled));
  exports.Set("BindDrawTexturePro", Napi::Function::New(env, BindDrawTexturePro));
  exports.Set("BindDrawTextureNPatch", Napi::Function::New(env, BindDrawTextureNPatch));
  exports.Set("BindDrawTexturePoly", Napi::Function::New(env, BindDrawTexturePoly));
  exports.Set("BindFade", Napi::Function::New(env, BindFade));
  exports.Set("BindColorToInt", Napi::Function::New(env, BindColorToInt));
  exports.Set("BindColorNormalize", Napi::Function::New(env, BindColorNormalize));
  exports.Set("BindColorFromNormalized", Napi::Function::New(env, BindColorFromNormalized));
  exports.Set("BindColorToHSV", Napi::Function::New(env, BindColorToHSV));
  exports.Set("BindColorFromHSV", Napi::Function::New(env, BindColorFromHSV));
  exports.Set("BindColorAlpha", Napi::Function::New(env, BindColorAlpha));
  exports.Set("BindColorAlphaBlend", Napi::Function::New(env, BindColorAlphaBlend));
  exports.Set("BindGetColor", Napi::Function::New(env, BindGetColor));
  exports.Set("BindGetPixelColor", Napi::Function::New(env, BindGetPixelColor));
  exports.Set("BindSetPixelColor", Napi::Function::New(env, BindSetPixelColor));
  exports.Set("BindGetPixelDataSize", Napi::Function::New(env, BindGetPixelDataSize));
  exports.Set("BindGetFontDefault", Napi::Function::New(env, BindGetFontDefault));
  exports.Set("BindLoadFont", Napi::Function::New(env, BindLoadFont));
  exports.Set("BindLoadFontEx", Napi::Function::New(env, BindLoadFontEx));
  exports.Set("BindLoadFontFromImage", Napi::Function::New(env, BindLoadFontFromImage));
  exports.Set("BindLoadFontFromMemory", Napi::Function::New(env, BindLoadFontFromMemory));
  exports.Set("BindLoadFontData", Napi::Function::New(env, BindLoadFontData));
  exports.Set("BindGenImageFontAtlas", Napi::Function::New(env, BindGenImageFontAtlas));
  exports.Set("BindUnloadFontData", Napi::Function::New(env, BindUnloadFontData));
  exports.Set("BindUnloadFont", Napi::Function::New(env, BindUnloadFont));
  exports.Set("BindDrawFPS", Napi::Function::New(env, BindDrawFPS));
  exports.Set("BindDrawText", Napi::Function::New(env, BindDrawText));
  exports.Set("BindDrawTextEx", Napi::Function::New(env, BindDrawTextEx));
  exports.Set("BindDrawTextPro", Napi::Function::New(env, BindDrawTextPro));
  exports.Set("BindDrawTextCodepoint", Napi::Function::New(env, BindDrawTextCodepoint));
  exports.Set("BindMeasureText", Napi::Function::New(env, BindMeasureText));
  exports.Set("BindMeasureTextEx", Napi::Function::New(env, BindMeasureTextEx));
  exports.Set("BindGetGlyphIndex", Napi::Function::New(env, BindGetGlyphIndex));
  exports.Set("BindGetGlyphInfo", Napi::Function::New(env, BindGetGlyphInfo));
  exports.Set("BindGetGlyphAtlasRec", Napi::Function::New(env, BindGetGlyphAtlasRec));
  exports.Set("BindLoadCodepoints", Napi::Function::New(env, BindLoadCodepoints));
  exports.Set("BindUnloadCodepoints", Napi::Function::New(env, BindUnloadCodepoints));
  exports.Set("BindGetCodepointCount", Napi::Function::New(env, BindGetCodepointCount));
  exports.Set("BindGetCodepoint", Napi::Function::New(env, BindGetCodepoint));
  exports.Set("BindCodepointToUTF8", Napi::Function::New(env, BindCodepointToUTF8));
  exports.Set("BindTextCodepointsToUTF8", Napi::Function::New(env, BindTextCodepointsToUTF8));
  exports.Set("BindTextCopy", Napi::Function::New(env, BindTextCopy));
  exports.Set("BindTextIsEqual", Napi::Function::New(env, BindTextIsEqual));
  exports.Set("BindTextLength", Napi::Function::New(env, BindTextLength));
  exports.Set("BindTextSubtext", Napi::Function::New(env, BindTextSubtext));
  exports.Set("BindTextReplace", Napi::Function::New(env, BindTextReplace));
  exports.Set("BindTextInsert", Napi::Function::New(env, BindTextInsert));
  exports.Set("BindTextJoin", Napi::Function::New(env, BindTextJoin));
  exports.Set("BindTextSplit", Napi::Function::New(env, BindTextSplit));
  exports.Set("BindTextAppend", Napi::Function::New(env, BindTextAppend));
  exports.Set("BindTextFindIndex", Napi::Function::New(env, BindTextFindIndex));
  exports.Set("BindTextToUpper", Napi::Function::New(env, BindTextToUpper));
  exports.Set("BindTextToLower", Napi::Function::New(env, BindTextToLower));
  exports.Set("BindTextToPascal", Napi::Function::New(env, BindTextToPascal));
  exports.Set("BindTextToInteger", Napi::Function::New(env, BindTextToInteger));
  exports.Set("BindDrawLine3D", Napi::Function::New(env, BindDrawLine3D));
  exports.Set("BindDrawPoint3D", Napi::Function::New(env, BindDrawPoint3D));
  exports.Set("BindDrawCircle3D", Napi::Function::New(env, BindDrawCircle3D));
  exports.Set("BindDrawTriangle3D", Napi::Function::New(env, BindDrawTriangle3D));
  exports.Set("BindDrawTriangleStrip3D", Napi::Function::New(env, BindDrawTriangleStrip3D));
  exports.Set("BindDrawCube", Napi::Function::New(env, BindDrawCube));
  exports.Set("BindDrawCubeV", Napi::Function::New(env, BindDrawCubeV));
  exports.Set("BindDrawCubeWires", Napi::Function::New(env, BindDrawCubeWires));
  exports.Set("BindDrawCubeWiresV", Napi::Function::New(env, BindDrawCubeWiresV));
  exports.Set("BindDrawCubeTexture", Napi::Function::New(env, BindDrawCubeTexture));
  exports.Set("BindDrawCubeTextureRec", Napi::Function::New(env, BindDrawCubeTextureRec));
  exports.Set("BindDrawSphere", Napi::Function::New(env, BindDrawSphere));
  exports.Set("BindDrawSphereEx", Napi::Function::New(env, BindDrawSphereEx));
  exports.Set("BindDrawSphereWires", Napi::Function::New(env, BindDrawSphereWires));
  exports.Set("BindDrawCylinder", Napi::Function::New(env, BindDrawCylinder));
  exports.Set("BindDrawCylinderEx", Napi::Function::New(env, BindDrawCylinderEx));
  exports.Set("BindDrawCylinderWires", Napi::Function::New(env, BindDrawCylinderWires));
  exports.Set("BindDrawCylinderWiresEx", Napi::Function::New(env, BindDrawCylinderWiresEx));
  exports.Set("BindDrawPlane", Napi::Function::New(env, BindDrawPlane));
  exports.Set("BindDrawRay", Napi::Function::New(env, BindDrawRay));
  exports.Set("BindDrawGrid", Napi::Function::New(env, BindDrawGrid));
  exports.Set("BindLoadModel", Napi::Function::New(env, BindLoadModel));
  exports.Set("BindLoadModelFromMesh", Napi::Function::New(env, BindLoadModelFromMesh));
  exports.Set("BindUnloadModel", Napi::Function::New(env, BindUnloadModel));
  exports.Set("BindUnloadModelKeepMeshes", Napi::Function::New(env, BindUnloadModelKeepMeshes));
  exports.Set("BindGetModelBoundingBox", Napi::Function::New(env, BindGetModelBoundingBox));
  exports.Set("BindDrawModel", Napi::Function::New(env, BindDrawModel));
  exports.Set("BindDrawModelEx", Napi::Function::New(env, BindDrawModelEx));
  exports.Set("BindDrawModelWires", Napi::Function::New(env, BindDrawModelWires));
  exports.Set("BindDrawModelWiresEx", Napi::Function::New(env, BindDrawModelWiresEx));
  exports.Set("BindDrawBoundingBox", Napi::Function::New(env, BindDrawBoundingBox));
  exports.Set("BindDrawBillboard", Napi::Function::New(env, BindDrawBillboard));
  exports.Set("BindDrawBillboardRec", Napi::Function::New(env, BindDrawBillboardRec));
  exports.Set("BindDrawBillboardPro", Napi::Function::New(env, BindDrawBillboardPro));
  exports.Set("BindUploadMesh", Napi::Function::New(env, BindUploadMesh));
  exports.Set("BindUpdateMeshBuffer", Napi::Function::New(env, BindUpdateMeshBuffer));
  exports.Set("BindUnloadMesh", Napi::Function::New(env, BindUnloadMesh));
  exports.Set("BindExportMesh", Napi::Function::New(env, BindExportMesh));
  exports.Set("BindGetMeshBoundingBox", Napi::Function::New(env, BindGetMeshBoundingBox));
  exports.Set("BindGenMeshTangents", Napi::Function::New(env, BindGenMeshTangents));
  exports.Set("BindGenMeshBinormals", Napi::Function::New(env, BindGenMeshBinormals));
  exports.Set("BindGenMeshPoly", Napi::Function::New(env, BindGenMeshPoly));
  exports.Set("BindGenMeshPlane", Napi::Function::New(env, BindGenMeshPlane));
  exports.Set("BindGenMeshCube", Napi::Function::New(env, BindGenMeshCube));
  exports.Set("BindGenMeshSphere", Napi::Function::New(env, BindGenMeshSphere));
  exports.Set("BindGenMeshHemiSphere", Napi::Function::New(env, BindGenMeshHemiSphere));
  exports.Set("BindGenMeshCylinder", Napi::Function::New(env, BindGenMeshCylinder));
  exports.Set("BindGenMeshCone", Napi::Function::New(env, BindGenMeshCone));
  exports.Set("BindGenMeshTorus", Napi::Function::New(env, BindGenMeshTorus));
  exports.Set("BindGenMeshKnot", Napi::Function::New(env, BindGenMeshKnot));
  exports.Set("BindGenMeshHeightmap", Napi::Function::New(env, BindGenMeshHeightmap));
  exports.Set("BindGenMeshCubicmap", Napi::Function::New(env, BindGenMeshCubicmap));
  exports.Set("BindSetModelMeshMaterial", Napi::Function::New(env, BindSetModelMeshMaterial));
  exports.Set("BindLoadModelAnimations", Napi::Function::New(env, BindLoadModelAnimations));
  exports.Set("BindUpdateModelAnimation", Napi::Function::New(env, BindUpdateModelAnimation));
  exports.Set("BindUnloadModelAnimation", Napi::Function::New(env, BindUnloadModelAnimation));
  exports.Set("BindUnloadModelAnimations", Napi::Function::New(env, BindUnloadModelAnimations));
  exports.Set("BindIsModelAnimationValid", Napi::Function::New(env, BindIsModelAnimationValid));
  exports.Set("BindCheckCollisionSpheres", Napi::Function::New(env, BindCheckCollisionSpheres));
  exports.Set("BindCheckCollisionBoxes", Napi::Function::New(env, BindCheckCollisionBoxes));
  exports.Set("BindCheckCollisionBoxSphere", Napi::Function::New(env, BindCheckCollisionBoxSphere));
  exports.Set("BindGetRayCollisionSphere", Napi::Function::New(env, BindGetRayCollisionSphere));
  exports.Set("BindGetRayCollisionBox", Napi::Function::New(env, BindGetRayCollisionBox));
  exports.Set("BindGetRayCollisionModel", Napi::Function::New(env, BindGetRayCollisionModel));
  exports.Set("BindGetRayCollisionMesh", Napi::Function::New(env, BindGetRayCollisionMesh));
  exports.Set("BindGetRayCollisionTriangle", Napi::Function::New(env, BindGetRayCollisionTriangle));
  exports.Set("BindGetRayCollisionQuad", Napi::Function::New(env, BindGetRayCollisionQuad));
  exports.Set("BindInitAudioDevice", Napi::Function::New(env, BindInitAudioDevice));
  exports.Set("BindCloseAudioDevice", Napi::Function::New(env, BindCloseAudioDevice));
  exports.Set("BindIsAudioDeviceReady", Napi::Function::New(env, BindIsAudioDeviceReady));
  exports.Set("BindSetMasterVolume", Napi::Function::New(env, BindSetMasterVolume));
  exports.Set("BindLoadWave", Napi::Function::New(env, BindLoadWave));
  exports.Set("BindLoadWaveFromMemory", Napi::Function::New(env, BindLoadWaveFromMemory));
  exports.Set("BindLoadSound", Napi::Function::New(env, BindLoadSound));
  exports.Set("BindLoadSoundFromWave", Napi::Function::New(env, BindLoadSoundFromWave));
  exports.Set("BindUpdateSound", Napi::Function::New(env, BindUpdateSound));
  exports.Set("BindUnloadWave", Napi::Function::New(env, BindUnloadWave));
  exports.Set("BindUnloadSound", Napi::Function::New(env, BindUnloadSound));
  exports.Set("BindExportWave", Napi::Function::New(env, BindExportWave));
  exports.Set("BindExportWaveAsCode", Napi::Function::New(env, BindExportWaveAsCode));
  exports.Set("BindPlaySound", Napi::Function::New(env, BindPlaySound));
  exports.Set("BindStopSound", Napi::Function::New(env, BindStopSound));
  exports.Set("BindPauseSound", Napi::Function::New(env, BindPauseSound));
  exports.Set("BindResumeSound", Napi::Function::New(env, BindResumeSound));
  exports.Set("BindPlaySoundMulti", Napi::Function::New(env, BindPlaySoundMulti));
  exports.Set("BindStopSoundMulti", Napi::Function::New(env, BindStopSoundMulti));
  exports.Set("BindGetSoundsPlaying", Napi::Function::New(env, BindGetSoundsPlaying));
  exports.Set("BindIsSoundPlaying", Napi::Function::New(env, BindIsSoundPlaying));
  exports.Set("BindSetSoundVolume", Napi::Function::New(env, BindSetSoundVolume));
  exports.Set("BindSetSoundPitch", Napi::Function::New(env, BindSetSoundPitch));
  exports.Set("BindWaveFormat", Napi::Function::New(env, BindWaveFormat));
  exports.Set("BindWaveCopy", Napi::Function::New(env, BindWaveCopy));
  exports.Set("BindWaveCrop", Napi::Function::New(env, BindWaveCrop));
  exports.Set("BindLoadWaveSamples", Napi::Function::New(env, BindLoadWaveSamples));
  exports.Set("BindUnloadWaveSamples", Napi::Function::New(env, BindUnloadWaveSamples));
  exports.Set("BindLoadMusicStream", Napi::Function::New(env, BindLoadMusicStream));
  exports.Set("BindLoadMusicStreamFromMemory", Napi::Function::New(env, BindLoadMusicStreamFromMemory));
  exports.Set("BindUnloadMusicStream", Napi::Function::New(env, BindUnloadMusicStream));
  exports.Set("BindPlayMusicStream", Napi::Function::New(env, BindPlayMusicStream));
  exports.Set("BindIsMusicStreamPlaying", Napi::Function::New(env, BindIsMusicStreamPlaying));
  exports.Set("BindUpdateMusicStream", Napi::Function::New(env, BindUpdateMusicStream));
  exports.Set("BindStopMusicStream", Napi::Function::New(env, BindStopMusicStream));
  exports.Set("BindPauseMusicStream", Napi::Function::New(env, BindPauseMusicStream));
  exports.Set("BindResumeMusicStream", Napi::Function::New(env, BindResumeMusicStream));
  exports.Set("BindSeekMusicStream", Napi::Function::New(env, BindSeekMusicStream));
  exports.Set("BindSetMusicVolume", Napi::Function::New(env, BindSetMusicVolume));
  exports.Set("BindSetMusicPitch", Napi::Function::New(env, BindSetMusicPitch));
  exports.Set("BindGetMusicTimeLength", Napi::Function::New(env, BindGetMusicTimeLength));
  exports.Set("BindGetMusicTimePlayed", Napi::Function::New(env, BindGetMusicTimePlayed));
  exports.Set("BindLoadAudioStream", Napi::Function::New(env, BindLoadAudioStream));
  exports.Set("BindUnloadAudioStream", Napi::Function::New(env, BindUnloadAudioStream));
  exports.Set("BindUpdateAudioStream", Napi::Function::New(env, BindUpdateAudioStream));
  exports.Set("BindIsAudioStreamProcessed", Napi::Function::New(env, BindIsAudioStreamProcessed));
  exports.Set("BindPlayAudioStream", Napi::Function::New(env, BindPlayAudioStream));
  exports.Set("BindPauseAudioStream", Napi::Function::New(env, BindPauseAudioStream));
  exports.Set("BindResumeAudioStream", Napi::Function::New(env, BindResumeAudioStream));
  exports.Set("BindIsAudioStreamPlaying", Napi::Function::New(env, BindIsAudioStreamPlaying));
  exports.Set("BindStopAudioStream", Napi::Function::New(env, BindStopAudioStream));
  exports.Set("BindSetAudioStreamVolume", Napi::Function::New(env, BindSetAudioStreamVolume));
  exports.Set("BindSetAudioStreamPitch", Napi::Function::New(env, BindSetAudioStreamPitch));
  exports.Set("BindSetAudioStreamBufferSizeDefault", Napi::Function::New(env, BindSetAudioStreamBufferSizeDefault));
  exports.Set("BindEaseLinearNone", Napi::Function::New(env, BindEaseLinearNone));
  exports.Set("BindEaseLinearIn", Napi::Function::New(env, BindEaseLinearIn));
  exports.Set("BindEaseLinearOut", Napi::Function::New(env, BindEaseLinearOut));
  exports.Set("BindEaseLinearInOut", Napi::Function::New(env, BindEaseLinearInOut));
  exports.Set("BindEaseSineIn", Napi::Function::New(env, BindEaseSineIn));
  exports.Set("BindEaseSineOut", Napi::Function::New(env, BindEaseSineOut));
  exports.Set("BindEaseSineInOut", Napi::Function::New(env, BindEaseSineInOut));
  exports.Set("BindEaseCircIn", Napi::Function::New(env, BindEaseCircIn));
  exports.Set("BindEaseCircOut", Napi::Function::New(env, BindEaseCircOut));
  exports.Set("BindEaseCircInOut", Napi::Function::New(env, BindEaseCircInOut));
  exports.Set("BindEaseCubicIn", Napi::Function::New(env, BindEaseCubicIn));
  exports.Set("BindEaseCubicOut", Napi::Function::New(env, BindEaseCubicOut));
  exports.Set("BindEaseCubicInOut", Napi::Function::New(env, BindEaseCubicInOut));
  exports.Set("BindEaseQuadIn", Napi::Function::New(env, BindEaseQuadIn));
  exports.Set("BindEaseQuadOut", Napi::Function::New(env, BindEaseQuadOut));
  exports.Set("BindEaseQuadInOut", Napi::Function::New(env, BindEaseQuadInOut));
  exports.Set("BindEaseExpoIn", Napi::Function::New(env, BindEaseExpoIn));
  exports.Set("BindEaseExpoOut", Napi::Function::New(env, BindEaseExpoOut));
  exports.Set("BindEaseExpoInOut", Napi::Function::New(env, BindEaseExpoInOut));
  exports.Set("BindEaseBackIn", Napi::Function::New(env, BindEaseBackIn));
  exports.Set("BindEaseBackOut", Napi::Function::New(env, BindEaseBackOut));
  exports.Set("BindEaseBackInOut", Napi::Function::New(env, BindEaseBackInOut));
  exports.Set("BindEaseBounceOut", Napi::Function::New(env, BindEaseBounceOut));
  exports.Set("BindEaseBounceIn", Napi::Function::New(env, BindEaseBounceIn));
  exports.Set("BindEaseBounceInOut", Napi::Function::New(env, BindEaseBounceInOut));
  exports.Set("BindEaseElasticIn", Napi::Function::New(env, BindEaseElasticIn));
  exports.Set("BindEaseElasticOut", Napi::Function::New(env, BindEaseElasticOut));
  exports.Set("BindEaseElasticInOut", Napi::Function::New(env, BindEaseElasticInOut));

  exports.Set("BindSetShaderFloat", Napi::Function::New(env, BindSetShaderFloat));
  exports.Set("BindSetShaderInt", Napi::Function::New(env, BindSetShaderInt));
  exports.Set("BindSetShaderVec2", Napi::Function::New(env, BindSetShaderVec2));
  exports.Set("BindSetShaderVec3", Napi::Function::New(env, BindSetShaderVec3));
  exports.Set("BindSetShaderVec4", Napi::Function::New(env, BindSetShaderVec4));

  return exports;
}

NODE_API_MODULE(addon, Init);

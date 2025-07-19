
// GENERATED CODE: DO NOT MODIFY
#include <string>
#include <napi.h>
#include <iostream>
#include <cstring>
#include "raylib.h"
#include "raymath.h"

#include "../extras/reasings.h"
#include "../extras/rlgl.h"

// Suppress MSVC security warnings for raygui.h
#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#pragma warning(push)
#pragma warning(disable: 4996) // Disable deprecated function warnings
#endif

#define RAYGUI_IMPLEMENTATION
#include "../extras/raygui.h"

#ifdef _MSC_VER
#pragma warning(pop)
#endif

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
inline Napi::Value ToValue(Napi::Env env, unsigned long long value) {
  return Napi::BigInt::New(env, (uint64_t) value);
}

inline float floatFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().FloatValue();
}
inline int intFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().Int32Value();
}
inline double doubleFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().DoubleValue();
}
uintptr_t pointerFromValue(const Napi::CallbackInfo& info, int index) {
  return (uintptr_t) info[index].As<Napi::Number>().Int64Value();
}
inline unsigned char unsignedcharFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().Uint32Value();
}
inline unsigned int unsignedintFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().Uint32Value();
}
inline unsigned long long unsignedlonglongFromValue(const Napi::CallbackInfo& info, int index) {
  return (unsigned long long) info[index].As<Napi::BigInt>().Uint64Value(0);
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

// exception for this constructor, which has different input depending on platform
inline rlVertexBuffer rlVertexBufferFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     intFromValue(info, index + 0),                              // elementCount
     (float *) pointerFromValue(info, index + 1),               // vertices
     (float *) pointerFromValue(info, index + 2),               // texcoords
     (float *) pointerFromValue(info, index + 3),               // normals
     (unsigned char*) pointerFromValue(info, index + 4),        // colors
      #if defined(GRAPHICS_API_OPENGL_11) || defined(GRAPHICS_API_OPENGL_33)
        (unsigned int*) pointerFromValue(info, index + 5),      // indices
      #endif
      #if defined(GRAPHICS_API_OPENGL_ES2)
        (unsigned short *) pointerFromValue(info, index + 5),   // indices
      #endif 
     unsignedintFromValue(info, index + 6),                             // vaoId
     {unsignedintFromValue(info, index + 7), unsignedintFromValue(info, index + 8), unsignedintFromValue(info, index + 9), unsignedintFromValue(info, index + 10), unsignedintFromValue(info, index + 11)} // vboId[5]
  };
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
     (Matrix *) pointerFromValue(info, index + 13),
     intFromValue(info, index + 14),
     unsignedintFromValue(info, index + 15),
     (unsigned int *) pointerFromValue(info, index + 16)
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

inline Transform TransformFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     Vector3FromValue(info, index + 0),
     Vector4FromValue(info, index + 3),
     Vector3FromValue(info, index + 7)
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
     (rAudioProcessor *) pointerFromValue(info, index + 1),
     unsignedintFromValue(info, index + 2),
     unsignedintFromValue(info, index + 3),
     unsignedintFromValue(info, index + 4)
  };
}

inline Sound SoundFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     AudioStreamFromValue(info, index + 0),
     unsignedintFromValue(info, index + 5)
  };
}

inline Music MusicFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     AudioStreamFromValue(info, index + 0),
     unsignedintFromValue(info, index + 5),
     boolFromValue(info, index + 6),
     intFromValue(info, index + 7),
     (void *) pointerFromValue(info, index + 8)
  };
}

inline FilePathList FilePathListFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     unsignedintFromValue(info, index + 0),
     unsignedintFromValue(info, index + 1),
     (char **) pointerFromValue(info, index + 2)
  };
}

inline AutomationEventList AutomationEventListFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     unsignedintFromValue(info, index + 0),
     unsignedintFromValue(info, index + 1),
     (AutomationEvent *) pointerFromValue(info, index + 2)
  };
}

inline rlDrawCall rlDrawCallFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     intFromValue(info, index + 0),
     intFromValue(info, index + 1),
     intFromValue(info, index + 2),
     unsignedintFromValue(info, index + 3)
  };
}

inline rlRenderBatch rlRenderBatchFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     intFromValue(info, index + 0),
     intFromValue(info, index + 1),
     (rlVertexBuffer *) pointerFromValue(info, index + 2),
     (rlDrawCall *) pointerFromValue(info, index + 3),
     intFromValue(info, index + 4),
     floatFromValue(info, index + 5)
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
  out.Set("m4", ToValue(env, obj.m4));
  out.Set("m8", ToValue(env, obj.m8));
  out.Set("m12", ToValue(env, obj.m12));
  out.Set("m1", ToValue(env, obj.m1));
  out.Set("m5", ToValue(env, obj.m5));
  out.Set("m9", ToValue(env, obj.m9));
  out.Set("m13", ToValue(env, obj.m13));
  out.Set("m2", ToValue(env, obj.m2));
  out.Set("m6", ToValue(env, obj.m6));
  out.Set("m10", ToValue(env, obj.m10));
  out.Set("m14", ToValue(env, obj.m14));
  out.Set("m3", ToValue(env, obj.m3));
  out.Set("m7", ToValue(env, obj.m7));
  out.Set("m11", ToValue(env, obj.m11));
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
  out.Set("boneMatrices", ToValue(env, obj.boneMatrices));
  out.Set("boneCount", ToValue(env, obj.boneCount));
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

inline Napi::Value ToValue(Napi::Env env, Transform obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("translation", ToValue(env, obj.translation));
  out.Set("rotation", ToValue(env, obj.rotation));
  out.Set("scale", ToValue(env, obj.scale));
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
  out.Set("processor", ToValue(env, obj.processor));
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

inline Napi::Value ToValue(Napi::Env env, FilePathList obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("capacity", ToValue(env, obj.capacity));
  out.Set("count", ToValue(env, obj.count));
  out.Set("paths", ToValue(env, obj.paths));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, AutomationEventList obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("capacity", ToValue(env, obj.capacity));
  out.Set("count", ToValue(env, obj.count));
  out.Set("events", ToValue(env, obj.events));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, rlVertexBuffer obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("elementCount", ToValue(env, obj.elementCount));
  out.Set("vertices", ToValue(env, obj.vertices));
  out.Set("texcoords", ToValue(env, obj.texcoords));
  out.Set("normals", ToValue(env, obj.normals));
  out.Set("indices", ToValue(env, obj.indices));
  out.Set("vaoId", ToValue(env, obj.vaoId));
  out.Set("vaoId", ToValue(env, obj.vaoId));
  out.Set("vboId", ToValue(env, obj.vboId));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, rlDrawCall obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("mode", ToValue(env, obj.mode));
  out.Set("vertexCount", ToValue(env, obj.vertexCount));
  out.Set("vertexAlignment", ToValue(env, obj.vertexAlignment));
  out.Set("textureId", ToValue(env, obj.textureId));
  return out;
}

inline Napi::Value ToValue(Napi::Env env, rlRenderBatch obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("bufferCount", ToValue(env, obj.bufferCount));
  out.Set("currentBuffer", ToValue(env, obj.currentBuffer));
  out.Set("vertexBuffer", ToValue(env, obj.vertexBuffer));
  out.Set("draws", ToValue(env, obj.draws));
  out.Set("drawCounter", ToValue(env, obj.drawCounter));
  out.Set("currentDepth", ToValue(env, obj.currentDepth));
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

inline AutomationEvent AutomationEventFromValue(const Napi::CallbackInfo &info, int index)
{
  return {
      unsignedintFromValue(info, index + 0),
      unsignedintFromValue(info, index + 1),
      {intFromValue(info, index + 2), intFromValue(info, index + 3), intFromValue(info, index + 4), intFromValue(info, index + 5)},
  };
}

inline ModelAnimation ModelAnimationFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     intFromValue(info, index + 0),
     intFromValue(info, index + 1),
     (BoneInfo *) pointerFromValue(info, index + 2),
     (Transform **) pointerFromValue(info, index + 3),
     charFromValue(info ,index+4)
  };
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

Napi::Value BindGetRenderWidth(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetRenderWidth(
      
    )
  );
}

Napi::Value BindGetRenderHeight(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetRenderHeight(
      
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

Napi::Value BindGetClipboardImage(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetClipboardImage(
      
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

Napi::Value BindIsShaderValid(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsShaderValid(
       ShaderFromValue(info, 0)
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

Napi::Value BindGetScreenToWorldRay(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetScreenToWorldRay(
       Vector2FromValue(info, 0),
       Camera3DFromValue(info, 2)
    )
  );
}

Napi::Value BindGetScreenToWorldRayEx(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetScreenToWorldRayEx(
       Vector2FromValue(info, 0),
       Camera3DFromValue(info, 2),
       intFromValue(info, 13),
       intFromValue(info, 14)
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

Napi::Value BindGetFPS(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetFPS(
      
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

Napi::Value BindLoadRandomSequence(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadRandomSequence(
       unsignedintFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindMemAlloc(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MemAlloc(
       unsignedintFromValue(info, 0)
    )
  );
}

Napi::Value BindMemRealloc(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MemRealloc(
       (void *) pointerFromValue(info, 0),
       unsignedintFromValue(info, 1)
    )
  );
}

Napi::Value BindLoadFileData(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadFileData(
       (const char *) stringFromValue(info, 0),
       (int *) pointerFromValue(info, 1)
    )
  );
}

Napi::Value BindSaveFileData(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    SaveFileData(
       (const char *) stringFromValue(info, 0),
       (void *) pointerFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindExportDataAsCode(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ExportDataAsCode(
       (const unsigned char *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       (const char *) stringFromValue(info, 2)
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

Napi::Value BindGetFileLength(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetFileLength(
       (const char *) stringFromValue(info, 0)
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

Napi::Value BindGetApplicationDirectory(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetApplicationDirectory(
      
    )
  );
}

Napi::Value BindMakeDirectory(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MakeDirectory(
       (const char *) stringFromValue(info, 0)
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

Napi::Value BindIsPathFile(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsPathFile(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindIsFileNameValid(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsFileNameValid(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadDirectoryFiles(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadDirectoryFiles(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindLoadDirectoryFilesEx(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadDirectoryFilesEx(
       (const char *) stringFromValue(info, 0),
       (const char *) stringFromValue(info, 1),
       boolFromValue(info, 2)
    )
  );
}

Napi::Value BindIsFileDropped(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsFileDropped(
      
    )
  );
}

Napi::Value BindLoadDroppedFiles(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadDroppedFiles(
      
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
       (const unsigned char *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       (int *) pointerFromValue(info, 2)
    )
  );
}

Napi::Value BindDecompressData(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    DecompressData(
       (const unsigned char *) pointerFromValue(info, 0),
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
       (const unsigned char *) pointerFromValue(info, 0),
       (int *) pointerFromValue(info, 1)
    )
  );
}

Napi::Value BindComputeCRC32(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ComputeCRC32(
       (unsigned char *) pointerFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindComputeMD5(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ComputeMD5(
       (unsigned char *) pointerFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindComputeSHA1(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ComputeSHA1(
       (unsigned char *) pointerFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindLoadAutomationEventList(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadAutomationEventList(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindExportAutomationEventList(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ExportAutomationEventList(
       AutomationEventListFromValue(info, 0),
       (const char *) stringFromValue(info, 3)
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

Napi::Value BindIsKeyPressedRepeat(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsKeyPressedRepeat(
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

Napi::Value BindGetMouseWheelMoveV(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMouseWheelMoveV(
      
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
       unsignedintFromValue(info, 0)
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

Napi::Value BindGetShapesTexture(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetShapesTexture(
      
    )
  );
}

Napi::Value BindGetShapesTextureRectangle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetShapesTextureRectangle(
      
    )
  );
}

Napi::Value BindGetSplinePointLinear(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetSplinePointLinear(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindGetSplinePointBasis(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetSplinePointBasis(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       Vector2FromValue(info, 6),
       floatFromValue(info, 8)
    )
  );
}

Napi::Value BindGetSplinePointCatmullRom(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetSplinePointCatmullRom(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       Vector2FromValue(info, 6),
       floatFromValue(info, 8)
    )
  );
}

Napi::Value BindGetSplinePointBezierQuad(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetSplinePointBezierQuad(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       floatFromValue(info, 6)
    )
  );
}

Napi::Value BindGetSplinePointBezierCubic(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetSplinePointBezierCubic(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       Vector2FromValue(info, 6),
       floatFromValue(info, 8)
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

Napi::Value BindCheckCollisionCircleLine(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CheckCollisionCircleLine(
       Vector2FromValue(info, 0),
       floatFromValue(info, 2),
       Vector2FromValue(info, 3),
       Vector2FromValue(info, 5)
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

Napi::Value BindCheckCollisionPointPoly(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    CheckCollisionPointPoly(
       Vector2FromValue(info, 0),
       (const Vector2 *) pointerFromValue(info, 2),
       intFromValue(info, 3)
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

Napi::Value BindLoadImageAnimFromMemory(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadImageAnimFromMemory(
       (const char *) stringFromValue(info, 0),
       (const unsigned char *) pointerFromValue(info, 1),
       intFromValue(info, 2),
       (int *) pointerFromValue(info, 3)
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

Napi::Value BindIsImageValid(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsImageValid(
       ImageFromValue(info, 0)
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

Napi::Value BindExportImageToMemory(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ExportImageToMemory(
       ImageFromValue(info, 0),
       (const char *) stringFromValue(info, 5),
       (int *) pointerFromValue(info, 6)
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

Napi::Value BindGenImageGradientLinear(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenImageGradientLinear(
       intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       ColorFromValue(info, 3),
       ColorFromValue(info, 7)
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

Napi::Value BindGenImageGradientSquare(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenImageGradientSquare(
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

Napi::Value BindGenImagePerlinNoise(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenImagePerlinNoise(
       intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       floatFromValue(info, 4)
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

Napi::Value BindGenImageText(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GenImageText(
       intFromValue(info, 0),
       intFromValue(info, 1),
       (const char *) stringFromValue(info, 2)
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

Napi::Value BindImageFromChannel(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ImageFromChannel(
       ImageFromValue(info, 0),
       intFromValue(info, 5)
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

Napi::Value BindIsTextureValid(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsTextureValid(
       TextureFromValue(info, 0)
    )
  );
}

Napi::Value BindIsRenderTextureValid(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsRenderTextureValid(
       RenderTextureFromValue(info, 0)
    )
  );
}

Napi::Value BindColorIsEqual(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ColorIsEqual(
       ColorFromValue(info, 0),
       ColorFromValue(info, 4)
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

Napi::Value BindColorTint(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ColorTint(
       ColorFromValue(info, 0),
       ColorFromValue(info, 4)
    )
  );
}

Napi::Value BindColorBrightness(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ColorBrightness(
       ColorFromValue(info, 0),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindColorContrast(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ColorContrast(
       ColorFromValue(info, 0),
       floatFromValue(info, 4)
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

Napi::Value BindColorLerp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ColorLerp(
       ColorFromValue(info, 0),
       ColorFromValue(info, 4),
       floatFromValue(info, 8)
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

Napi::Value BindIsFontValid(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsFontValid(
       FontFromValue(info, 0)
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

Napi::Value BindExportFontAsCode(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ExportFontAsCode(
       FontFromValue(info, 0),
       (const char *) stringFromValue(info, 10)
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

Napi::Value BindLoadUTF8(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadUTF8(
       (const int *) pointerFromValue(info, 0),
       intFromValue(info, 1)
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

Napi::Value BindGetCodepointNext(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetCodepointNext(
       (const char *) stringFromValue(info, 0),
       (int *) pointerFromValue(info, 1)
    )
  );
}

Napi::Value BindGetCodepointPrevious(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetCodepointPrevious(
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
       (const char *) stringFromValue(info, 0),
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

Napi::Value BindTextToSnake(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextToSnake(
       (const char *) stringFromValue(info, 0)
    )
  );
}

Napi::Value BindTextToCamel(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextToCamel(
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

Napi::Value BindTextToFloat(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    TextToFloat(
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

Napi::Value BindIsModelValid(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsModelValid(
       ModelFromValue(info, 0)
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

Napi::Value BindGetMeshBoundingBox(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMeshBoundingBox(
       MeshFromValue(info, 0)
    )
  );
}

Napi::Value BindExportMesh(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ExportMesh(
       MeshFromValue(info, 0),
       (const char *) stringFromValue(info, 17)
    )
  );
}

Napi::Value BindExportMeshAsCode(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ExportMeshAsCode(
       MeshFromValue(info, 0),
       (const char *) stringFromValue(info, 17)
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

Napi::Value BindGetRayCollisionMesh(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetRayCollisionMesh(
       RayFromValue(info, 0),
       MeshFromValue(info, 6),
       MatrixFromValue(info, 23)
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

Napi::Value BindGetMasterVolume(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GetMasterVolume(
      
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

Napi::Value BindIsWaveValid(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsWaveValid(
       WaveFromValue(info, 0)
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

Napi::Value BindLoadSoundAlias(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    LoadSoundAlias(
       SoundFromValue(info, 0)
    )
  );
}

Napi::Value BindIsSoundValid(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsSoundValid(
       SoundFromValue(info, 0)
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
       (const unsigned char *) pointerFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindIsMusicValid(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsMusicValid(
       MusicFromValue(info, 0)
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

Napi::Value BindIsAudioStreamValid(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    IsAudioStreamValid(
       AudioStreamFromValue(info, 0)
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

Napi::Value BindClamp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Clamp(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindLerp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Lerp(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindNormalize(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Normalize(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindRemap(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Remap(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindWrap(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Wrap(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindFloatEquals(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    FloatEquals(
       floatFromValue(info, 0),
       floatFromValue(info, 1)
    )
  );
}

Napi::Value BindVector2Zero(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Zero(
      
    )
  );
}

Napi::Value BindVector2One(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2One(
      
    )
  );
}

Napi::Value BindVector2Add(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Add(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2)
    )
  );
}

Napi::Value BindVector2AddValue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2AddValue(
       Vector2FromValue(info, 0),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindVector2Subtract(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Subtract(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2)
    )
  );
}

Napi::Value BindVector2SubtractValue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2SubtractValue(
       Vector2FromValue(info, 0),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindVector2Length(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Length(
       Vector2FromValue(info, 0)
    )
  );
}

Napi::Value BindVector2LengthSqr(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2LengthSqr(
       Vector2FromValue(info, 0)
    )
  );
}

Napi::Value BindVector2DotProduct(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2DotProduct(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2)
    )
  );
}

Napi::Value BindVector2Distance(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Distance(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2)
    )
  );
}

Napi::Value BindVector2DistanceSqr(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2DistanceSqr(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2)
    )
  );
}

Napi::Value BindVector2Angle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Angle(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2)
    )
  );
}

Napi::Value BindVector2LineAngle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2LineAngle(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2)
    )
  );
}

Napi::Value BindVector2Scale(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Scale(
       Vector2FromValue(info, 0),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindVector2Multiply(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Multiply(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2)
    )
  );
}

Napi::Value BindVector2Negate(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Negate(
       Vector2FromValue(info, 0)
    )
  );
}

Napi::Value BindVector2Divide(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Divide(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2)
    )
  );
}

Napi::Value BindVector2Normalize(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Normalize(
       Vector2FromValue(info, 0)
    )
  );
}

Napi::Value BindVector2Transform(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Transform(
       Vector2FromValue(info, 0),
       MatrixFromValue(info, 2)
    )
  );
}

Napi::Value BindVector2Lerp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Lerp(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindVector2Reflect(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Reflect(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2)
    )
  );
}

Napi::Value BindVector2Min(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Min(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2)
    )
  );
}

Napi::Value BindVector2Max(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Max(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2)
    )
  );
}

Napi::Value BindVector2Rotate(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Rotate(
       Vector2FromValue(info, 0),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindVector2MoveTowards(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2MoveTowards(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindVector2Invert(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Invert(
       Vector2FromValue(info, 0)
    )
  );
}

Napi::Value BindVector2Clamp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Clamp(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4)
    )
  );
}

Napi::Value BindVector2ClampValue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2ClampValue(
       Vector2FromValue(info, 0),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindVector2Equals(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Equals(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2)
    )
  );
}

Napi::Value BindVector2Refract(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector2Refract(
       Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindVector3Zero(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Zero(
      
    )
  );
}

Napi::Value BindVector3One(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3One(
      
    )
  );
}

Napi::Value BindVector3Add(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Add(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3AddValue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3AddValue(
       Vector3FromValue(info, 0),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Subtract(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Subtract(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3SubtractValue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3SubtractValue(
       Vector3FromValue(info, 0),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Scale(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Scale(
       Vector3FromValue(info, 0),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Multiply(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Multiply(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3CrossProduct(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3CrossProduct(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Perpendicular(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Perpendicular(
       Vector3FromValue(info, 0)
    )
  );
}

Napi::Value BindVector3Length(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Length(
       Vector3FromValue(info, 0)
    )
  );
}

Napi::Value BindVector3LengthSqr(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3LengthSqr(
       Vector3FromValue(info, 0)
    )
  );
}

Napi::Value BindVector3DotProduct(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3DotProduct(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Distance(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Distance(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3DistanceSqr(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3DistanceSqr(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Angle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Angle(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Negate(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Negate(
       Vector3FromValue(info, 0)
    )
  );
}

Napi::Value BindVector3Divide(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Divide(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Normalize(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Normalize(
       Vector3FromValue(info, 0)
    )
  );
}

Napi::Value BindVector3Project(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Project(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Reject(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Reject(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Transform(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Transform(
       Vector3FromValue(info, 0),
       MatrixFromValue(info, 3)
    )
  );
}

Napi::Value BindVector3RotateByQuaternion(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3RotateByQuaternion(
       Vector3FromValue(info, 0),
       Vector4FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3RotateByAxisAngle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3RotateByAxisAngle(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       floatFromValue(info, 6)
    )
  );
}

Napi::Value BindVector3MoveTowards(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3MoveTowards(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       floatFromValue(info, 6)
    )
  );
}

Napi::Value BindVector3Lerp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Lerp(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       floatFromValue(info, 6)
    )
  );
}

Napi::Value BindVector3CubicHermite(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3CubicHermite(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       Vector3FromValue(info, 6),
       Vector3FromValue(info, 9),
       floatFromValue(info, 12)
    )
  );
}

Napi::Value BindVector3Reflect(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Reflect(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Min(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Min(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Max(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Max(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Barycenter(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Barycenter(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       Vector3FromValue(info, 6),
       Vector3FromValue(info, 9)
    )
  );
}

Napi::Value BindVector3Unproject(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Unproject(
       Vector3FromValue(info, 0),
       MatrixFromValue(info, 3),
       MatrixFromValue(info, 19)
    )
  );
}

Napi::Value BindVector3Invert(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Invert(
       Vector3FromValue(info, 0)
    )
  );
}

Napi::Value BindVector3Clamp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Clamp(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       Vector3FromValue(info, 6)
    )
  );
}

Napi::Value BindVector3ClampValue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3ClampValue(
       Vector3FromValue(info, 0),
       floatFromValue(info, 3),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindVector3Equals(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Equals(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindVector3Refract(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector3Refract(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       floatFromValue(info, 6)
    )
  );
}

Napi::Value BindVector4Zero(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Zero(
      
    )
  );
}

Napi::Value BindVector4One(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4One(
      
    )
  );
}

Napi::Value BindVector4Add(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Add(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 4)
    )
  );
}

Napi::Value BindVector4AddValue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4AddValue(
       Vector4FromValue(info, 0),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindVector4Subtract(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Subtract(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 4)
    )
  );
}

Napi::Value BindVector4SubtractValue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4SubtractValue(
       Vector4FromValue(info, 0),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindVector4Length(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Length(
       Vector4FromValue(info, 0)
    )
  );
}

Napi::Value BindVector4LengthSqr(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4LengthSqr(
       Vector4FromValue(info, 0)
    )
  );
}

Napi::Value BindVector4DotProduct(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4DotProduct(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 4)
    )
  );
}

Napi::Value BindVector4Distance(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Distance(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 4)
    )
  );
}

Napi::Value BindVector4DistanceSqr(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4DistanceSqr(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 4)
    )
  );
}

Napi::Value BindVector4Scale(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Scale(
       Vector4FromValue(info, 0),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindVector4Multiply(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Multiply(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 4)
    )
  );
}

Napi::Value BindVector4Negate(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Negate(
       Vector4FromValue(info, 0)
    )
  );
}

Napi::Value BindVector4Divide(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Divide(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 4)
    )
  );
}

Napi::Value BindVector4Normalize(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Normalize(
       Vector4FromValue(info, 0)
    )
  );
}

Napi::Value BindVector4Min(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Min(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 4)
    )
  );
}

Napi::Value BindVector4Max(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Max(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 4)
    )
  );
}

Napi::Value BindVector4Lerp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Lerp(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 4),
       floatFromValue(info, 8)
    )
  );
}

Napi::Value BindVector4MoveTowards(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4MoveTowards(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 4),
       floatFromValue(info, 8)
    )
  );
}

Napi::Value BindVector4Invert(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Invert(
       Vector4FromValue(info, 0)
    )
  );
}

Napi::Value BindVector4Equals(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    Vector4Equals(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 4)
    )
  );
}

Napi::Value BindMatrixDeterminant(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixDeterminant(
       MatrixFromValue(info, 0)
    )
  );
}

Napi::Value BindMatrixTrace(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixTrace(
       MatrixFromValue(info, 0)
    )
  );
}

Napi::Value BindMatrixTranspose(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixTranspose(
       MatrixFromValue(info, 0)
    )
  );
}

Napi::Value BindMatrixInvert(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixInvert(
       MatrixFromValue(info, 0)
    )
  );
}

Napi::Value BindMatrixIdentity(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixIdentity(
      
    )
  );
}

Napi::Value BindMatrixAdd(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixAdd(
       MatrixFromValue(info, 0),
       MatrixFromValue(info, 16)
    )
  );
}

Napi::Value BindMatrixSubtract(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixSubtract(
       MatrixFromValue(info, 0),
       MatrixFromValue(info, 16)
    )
  );
}

Napi::Value BindMatrixMultiply(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixMultiply(
       MatrixFromValue(info, 0),
       MatrixFromValue(info, 16)
    )
  );
}

Napi::Value BindMatrixTranslate(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixTranslate(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindMatrixRotate(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixRotate(
       Vector3FromValue(info, 0),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindMatrixRotateX(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixRotateX(
       floatFromValue(info, 0)
    )
  );
}

Napi::Value BindMatrixRotateY(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixRotateY(
       floatFromValue(info, 0)
    )
  );
}

Napi::Value BindMatrixRotateZ(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixRotateZ(
       floatFromValue(info, 0)
    )
  );
}

Napi::Value BindMatrixRotateXYZ(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixRotateXYZ(
       Vector3FromValue(info, 0)
    )
  );
}

Napi::Value BindMatrixRotateZYX(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixRotateZYX(
       Vector3FromValue(info, 0)
    )
  );
}

Napi::Value BindMatrixScale(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixScale(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindMatrixFrustum(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixFrustum(
       doubleFromValue(info, 0),
       doubleFromValue(info, 1),
       doubleFromValue(info, 2),
       doubleFromValue(info, 3),
       doubleFromValue(info, 4),
       doubleFromValue(info, 5)
    )
  );
}

Napi::Value BindMatrixPerspective(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixPerspective(
       doubleFromValue(info, 0),
       doubleFromValue(info, 1),
       doubleFromValue(info, 2),
       doubleFromValue(info, 3)
    )
  );
}

Napi::Value BindMatrixOrtho(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixOrtho(
       doubleFromValue(info, 0),
       doubleFromValue(info, 1),
       doubleFromValue(info, 2),
       doubleFromValue(info, 3),
       doubleFromValue(info, 4),
       doubleFromValue(info, 5)
    )
  );
}

Napi::Value BindMatrixLookAt(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    MatrixLookAt(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       Vector3FromValue(info, 6)
    )
  );
}

Napi::Value BindQuaternionAdd(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionAdd(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 1)
    )
  );
}

Napi::Value BindQuaternionAddValue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionAddValue(
       Vector4FromValue(info, 0),
       floatFromValue(info, 1)
    )
  );
}

Napi::Value BindQuaternionSubtract(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionSubtract(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 1)
    )
  );
}

Napi::Value BindQuaternionSubtractValue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionSubtractValue(
       Vector4FromValue(info, 0),
       floatFromValue(info, 1)
    )
  );
}

Napi::Value BindQuaternionIdentity(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionIdentity(
      
    )
  );
}

Napi::Value BindQuaternionLength(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionLength(
       Vector4FromValue(info, 0)
    )
  );
}

Napi::Value BindQuaternionNormalize(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionNormalize(
       Vector4FromValue(info, 0)
    )
  );
}

Napi::Value BindQuaternionInvert(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionInvert(
       Vector4FromValue(info, 0)
    )
  );
}

Napi::Value BindQuaternionMultiply(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionMultiply(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 1)
    )
  );
}

Napi::Value BindQuaternionScale(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionScale(
       Vector4FromValue(info, 0),
       floatFromValue(info, 1)
    )
  );
}

Napi::Value BindQuaternionDivide(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionDivide(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 1)
    )
  );
}

Napi::Value BindQuaternionLerp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionLerp(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 1),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindQuaternionNlerp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionNlerp(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 1),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindQuaternionSlerp(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionSlerp(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 1),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindQuaternionCubicHermiteSpline(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionCubicHermiteSpline(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 1),
       Vector4FromValue(info, 2),
       Vector4FromValue(info, 3),
       floatFromValue(info, 4)
    )
  );
}

Napi::Value BindQuaternionFromVector3ToVector3(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionFromVector3ToVector3(
       Vector3FromValue(info, 0),
       Vector3FromValue(info, 3)
    )
  );
}

Napi::Value BindQuaternionFromMatrix(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionFromMatrix(
       MatrixFromValue(info, 0)
    )
  );
}

Napi::Value BindQuaternionToMatrix(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionToMatrix(
       Vector4FromValue(info, 0)
    )
  );
}

Napi::Value BindQuaternionFromAxisAngle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionFromAxisAngle(
       Vector3FromValue(info, 0),
       floatFromValue(info, 3)
    )
  );
}

Napi::Value BindQuaternionFromEuler(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionFromEuler(
       floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
    )
  );
}

Napi::Value BindQuaternionToEuler(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionToEuler(
       Vector4FromValue(info, 0)
    )
  );
}

Napi::Value BindQuaternionTransform(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionTransform(
       Vector4FromValue(info, 0),
       MatrixFromValue(info, 1)
    )
  );
}

Napi::Value BindQuaternionEquals(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    QuaternionEquals(
       Vector4FromValue(info, 0),
       Vector4FromValue(info, 1)
    )
  );
}

Napi::Value BindGuiIsLocked(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiIsLocked(
      
    )
  );
}

Napi::Value BindGuiGetState(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiGetState(
      
    )
  );
}

Napi::Value BindGuiGetFont(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiGetFont(
      
    )
  );
}

Napi::Value BindGuiGetStyle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiGetStyle(
       intFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindGuiIconText(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiIconText(
       intFromValue(info, 0),
       (const char *) stringFromValue(info, 1)
    )
  );
}

Napi::Value BindGuiGetIcons(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiGetIcons(
      
    )
  );
}

Napi::Value BindGuiLoadIcons(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiLoadIcons(
       (const char *) stringFromValue(info, 0),
       boolFromValue(info, 1)
    )
  );
}

Napi::Value BindGuiWindowBox(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiWindowBox(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4)
    )
  );
}

Napi::Value BindGuiGroupBox(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiGroupBox(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4)
    )
  );
}

Napi::Value BindGuiLine(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiLine(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4)
    )
  );
}

Napi::Value BindGuiPanel(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiPanel(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4)
    )
  );
}

Napi::Value BindGuiTabBar(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiTabBar(
       RectangleFromValue(info, 0),
       (const char **) pointerFromValue(info, 4),
       intFromValue(info, 5),
       (int *) pointerFromValue(info, 6)
    )
  );
}

Napi::Value BindGuiScrollPanel(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiScrollPanel(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       RectangleFromValue(info, 5),
       (Vector2 *) pointerFromValue(info, 9),
       (Rectangle *) pointerFromValue(info, 10)
    )
  );
}

Napi::Value BindGuiLabel(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiLabel(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4)
    )
  );
}

Napi::Value BindGuiButton(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiButton(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4)
    )
  );
}

Napi::Value BindGuiLabelButton(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiLabelButton(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4)
    )
  );
}

Napi::Value BindGuiToggle(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiToggle(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (bool *) pointerFromValue(info, 5)
    )
  );
}

Napi::Value BindGuiToggleGroup(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiToggleGroup(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (int *) pointerFromValue(info, 5)
    )
  );
}

Napi::Value BindGuiToggleSlider(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiToggleSlider(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (int *) pointerFromValue(info, 5)
    )
  );
}

Napi::Value BindGuiCheckBox(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiCheckBox(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (bool *) pointerFromValue(info, 5)
    )
  );
}

Napi::Value BindGuiComboBox(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiComboBox(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (int *) pointerFromValue(info, 5)
    )
  );
}

Napi::Value BindGuiDropdownBox(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiDropdownBox(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (int *) pointerFromValue(info, 5),
       boolFromValue(info, 6)
    )
  );
}

Napi::Value BindGuiSpinner(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiSpinner(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (int *) pointerFromValue(info, 5),
       intFromValue(info, 6),
       intFromValue(info, 7),
       boolFromValue(info, 8)
    )
  );
}

Napi::Value BindGuiValueBox(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiValueBox(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (int *) pointerFromValue(info, 5),
       intFromValue(info, 6),
       intFromValue(info, 7),
       boolFromValue(info, 8)
    )
  );
}

Napi::Value BindGuiValueBoxFloat(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiValueBoxFloat(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (char *) pointerFromValue(info, 5),
       (float *) pointerFromValue(info, 6),
       boolFromValue(info, 7)
    )
  );
}

Napi::Value BindGuiTextBox(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiTextBox(
       RectangleFromValue(info, 0),
       (char *) pointerFromValue(info, 4),
       intFromValue(info, 5),
       boolFromValue(info, 6)
    )
  );
}

Napi::Value BindGuiSlider(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiSlider(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (const char *) stringFromValue(info, 5),
       (float *) pointerFromValue(info, 6),
       floatFromValue(info, 7),
       floatFromValue(info, 8)
    )
  );
}

Napi::Value BindGuiSliderBar(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiSliderBar(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (const char *) stringFromValue(info, 5),
       (float *) pointerFromValue(info, 6),
       floatFromValue(info, 7),
       floatFromValue(info, 8)
    )
  );
}

Napi::Value BindGuiProgressBar(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiProgressBar(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (const char *) stringFromValue(info, 5),
       (float *) pointerFromValue(info, 6),
       floatFromValue(info, 7),
       floatFromValue(info, 8)
    )
  );
}

Napi::Value BindGuiStatusBar(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiStatusBar(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4)
    )
  );
}

Napi::Value BindGuiDummyRec(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiDummyRec(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4)
    )
  );
}

Napi::Value BindGuiGrid(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiGrid(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       floatFromValue(info, 5),
       intFromValue(info, 6),
       (Vector2 *) pointerFromValue(info, 7)
    )
  );
}

Napi::Value BindGuiListView(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiListView(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (int *) pointerFromValue(info, 5),
       (int *) pointerFromValue(info, 6)
    )
  );
}

Napi::Value BindGuiListViewEx(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiListViewEx(
       RectangleFromValue(info, 0),
       (const char **) pointerFromValue(info, 4),
       intFromValue(info, 5),
       (int *) pointerFromValue(info, 6),
       (int *) pointerFromValue(info, 7),
       (int *) pointerFromValue(info, 8)
    )
  );
}

Napi::Value BindGuiMessageBox(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiMessageBox(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (const char *) stringFromValue(info, 5),
       (const char *) stringFromValue(info, 6)
    )
  );
}

Napi::Value BindGuiTextInputBox(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiTextInputBox(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (const char *) stringFromValue(info, 5),
       (const char *) stringFromValue(info, 6),
       (char *) pointerFromValue(info, 7),
       intFromValue(info, 8),
       (bool *) pointerFromValue(info, 9)
    )
  );
}

Napi::Value BindGuiColorPicker(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiColorPicker(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (Color *) pointerFromValue(info, 5)
    )
  );
}

Napi::Value BindGuiColorPanel(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiColorPanel(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (Color *) pointerFromValue(info, 5)
    )
  );
}

Napi::Value BindGuiColorBarAlpha(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiColorBarAlpha(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (float *) pointerFromValue(info, 5)
    )
  );
}

Napi::Value BindGuiColorBarHue(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiColorBarHue(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (float *) pointerFromValue(info, 5)
    )
  );
}

Napi::Value BindGuiColorPickerHSV(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiColorPickerHSV(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (Vector3 *) pointerFromValue(info, 5)
    )
  );
}

Napi::Value BindGuiColorPanelHSV(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    GuiColorPanelHSV(
       RectangleFromValue(info, 0),
       (const char *) stringFromValue(info, 4),
       (Vector3 *) pointerFromValue(info, 5)
    )
  );
}

Napi::Value BindrlGetCullDistanceNear(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetCullDistanceNear(
      
    )
  );
}

Napi::Value BindrlGetCullDistanceFar(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetCullDistanceFar(
      
    )
  );
}

Napi::Value BindrlEnableVertexArray(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlEnableVertexArray(
       unsignedintFromValue(info, 0)
    )
  );
}

Napi::Value BindrlGetActiveFramebuffer(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetActiveFramebuffer(
      
    )
  );
}

Napi::Value BindrlGetLineWidth(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetLineWidth(
      
    )
  );
}

Napi::Value BindrlIsStereoRenderEnabled(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlIsStereoRenderEnabled(
      
    )
  );
}

Napi::Value BindrlGetVersion(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetVersion(
      
    )
  );
}

Napi::Value BindrlGetFramebufferWidth(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetFramebufferWidth(
      
    )
  );
}

Napi::Value BindrlGetFramebufferHeight(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetFramebufferHeight(
      
    )
  );
}

Napi::Value BindrlGetTextureIdDefault(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetTextureIdDefault(
      
    )
  );
}

Napi::Value BindrlGetShaderIdDefault(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetShaderIdDefault(
      
    )
  );
}

Napi::Value BindrlGetShaderLocsDefault(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetShaderLocsDefault(
      
    )
  );
}

Napi::Value BindrlLoadRenderBatch(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlLoadRenderBatch(
       intFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindrlCheckRenderBatchLimit(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlCheckRenderBatchLimit(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindrlLoadVertexArray(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlLoadVertexArray(
      
    )
  );
}

Napi::Value BindrlLoadVertexBuffer(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlLoadVertexBuffer(
       (const void *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       boolFromValue(info, 2)
    )
  );
}

Napi::Value BindrlLoadVertexBufferElement(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlLoadVertexBufferElement(
       (const void *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       boolFromValue(info, 2)
    )
  );
}

Napi::Value BindrlLoadTexture(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlLoadTexture(
       (const void *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       intFromValue(info, 4)
    )
  );
}

Napi::Value BindrlLoadTextureDepth(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlLoadTextureDepth(
       intFromValue(info, 0),
       intFromValue(info, 1),
       boolFromValue(info, 2)
    )
  );
}

Napi::Value BindrlLoadTextureCubemap(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlLoadTextureCubemap(
       (const void *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3)
    )
  );
}

Napi::Value BindrlGetPixelFormatName(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetPixelFormatName(
       unsignedintFromValue(info, 0)
    )
  );
}

Napi::Value BindrlReadTexturePixels(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlReadTexturePixels(
       unsignedintFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3)
    )
  );
}

Napi::Value BindrlReadScreenPixels(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlReadScreenPixels(
       intFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindrlLoadFramebuffer(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlLoadFramebuffer(
      
    )
  );
}

Napi::Value BindrlFramebufferComplete(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlFramebufferComplete(
       unsignedintFromValue(info, 0)
    )
  );
}

Napi::Value BindrlLoadShaderCode(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlLoadShaderCode(
       (const char *) stringFromValue(info, 0),
       (const char *) stringFromValue(info, 1)
    )
  );
}

Napi::Value BindrlCompileShader(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlCompileShader(
       (const char *) stringFromValue(info, 0),
       intFromValue(info, 1)
    )
  );
}

Napi::Value BindrlLoadShaderProgram(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlLoadShaderProgram(
       unsignedintFromValue(info, 0),
       unsignedintFromValue(info, 1)
    )
  );
}

Napi::Value BindrlGetLocationUniform(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetLocationUniform(
       unsignedintFromValue(info, 0),
       (const char *) stringFromValue(info, 1)
    )
  );
}

Napi::Value BindrlGetLocationAttrib(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetLocationAttrib(
       unsignedintFromValue(info, 0),
       (const char *) stringFromValue(info, 1)
    )
  );
}

Napi::Value BindrlLoadComputeShaderProgram(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlLoadComputeShaderProgram(
       unsignedintFromValue(info, 0)
    )
  );
}

Napi::Value BindrlLoadShaderBuffer(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlLoadShaderBuffer(
       unsignedintFromValue(info, 0),
       (const void *) pointerFromValue(info, 1),
       intFromValue(info, 2)
    )
  );
}

Napi::Value BindrlGetShaderBufferSize(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetShaderBufferSize(
       unsignedintFromValue(info, 0)
    )
  );
}

Napi::Value BindrlGetMatrixModelview(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetMatrixModelview(
      
    )
  );
}

Napi::Value BindrlGetMatrixProjection(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetMatrixProjection(
      
    )
  );
}

Napi::Value BindrlGetMatrixTransform(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetMatrixTransform(
      
    )
  );
}

Napi::Value BindrlGetMatrixProjectionStereo(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetMatrixProjectionStereo(
       intFromValue(info, 0)
    )
  );
}

Napi::Value BindrlGetMatrixViewOffsetStereo(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    rlGetMatrixViewOffsetStereo(
       intFromValue(info, 0)
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

void BindToggleBorderlessWindowed(const Napi::CallbackInfo& info) {
  ToggleBorderlessWindowed(
    
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

void BindSetWindowIcons(const Napi::CallbackInfo& info) {
  SetWindowIcons(
     (Image *) pointerFromValue(info, 0),
       intFromValue(info, 1)
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

void BindSetWindowMaxSize(const Napi::CallbackInfo& info) {
  SetWindowMaxSize(
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

void BindSetWindowOpacity(const Napi::CallbackInfo& info) {
  SetWindowOpacity(
     floatFromValue(info, 0)
  );
}

void BindSetWindowFocused(const Napi::CallbackInfo& info) {
  SetWindowFocused(
    
  );
}

void BindSetClipboardText(const Napi::CallbackInfo& info) {
  SetClipboardText(
     (const char *) stringFromValue(info, 0)
  );
}

void BindEnableEventWaiting(const Napi::CallbackInfo& info) {
  EnableEventWaiting(
    
  );
}

void BindDisableEventWaiting(const Napi::CallbackInfo& info) {
  DisableEventWaiting(
    
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
     RenderTextureFromValue(info, 0)
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
     doubleFromValue(info, 0)
  );
}

void BindSetRandomSeed(const Napi::CallbackInfo& info) {
  SetRandomSeed(
     unsignedintFromValue(info, 0)
  );
}

void BindUnloadRandomSequence(const Napi::CallbackInfo& info) {
  UnloadRandomSequence(
     (int *) pointerFromValue(info, 0)
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

void BindOpenURL(const Napi::CallbackInfo& info) {
  OpenURL(
     (const char *) stringFromValue(info, 0)
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

void BindUnloadDirectoryFiles(const Napi::CallbackInfo& info) {
  UnloadDirectoryFiles(
     FilePathListFromValue(info, 0)
  );
}

void BindUnloadDroppedFiles(const Napi::CallbackInfo& info) {
  UnloadDroppedFiles(
     FilePathListFromValue(info, 0)
  );
}

void BindUnloadAutomationEventList(const Napi::CallbackInfo& info) {
  UnloadAutomationEventList(
     AutomationEventListFromValue(info, 0)
  );
}

void BindSetAutomationEventList(const Napi::CallbackInfo& info) {
  SetAutomationEventList(
     (AutomationEventList *) pointerFromValue(info, 0)
  );
}

void BindSetAutomationEventBaseFrame(const Napi::CallbackInfo& info) {
  SetAutomationEventBaseFrame(
     intFromValue(info, 0)
  );
}

void BindStartAutomationEventRecording(const Napi::CallbackInfo& info) {
  StartAutomationEventRecording(
    
  );
}

void BindStopAutomationEventRecording(const Napi::CallbackInfo& info) {
  StopAutomationEventRecording(
    
  );
}

void BindSetExitKey(const Napi::CallbackInfo& info) {
  SetExitKey(
     intFromValue(info, 0)
  );
}

void BindSetGamepadVibration(const Napi::CallbackInfo& info) {
  SetGamepadVibration(
     intFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
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

void BindUpdateCameraPro(const Napi::CallbackInfo& info) {
  UpdateCameraPro(
     (Camera *) pointerFromValue(info, 0),
       Vector3FromValue(info, 1),
       Vector3FromValue(info, 4),
       floatFromValue(info, 7)
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

void BindDrawLineStrip(const Napi::CallbackInfo& info) {
  DrawLineStrip(
     (const Vector2 *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       ColorFromValue(info, 2)
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

void BindDrawCircleLinesV(const Napi::CallbackInfo& info) {
  DrawCircleLinesV(
     Vector2FromValue(info, 0),
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
       ColorFromValue(info, 6)
  );
}

void BindDrawRectangleRoundedLinesEx(const Napi::CallbackInfo& info) {
  DrawRectangleRoundedLinesEx(
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
     (const Vector2 *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       ColorFromValue(info, 2)
  );
}

void BindDrawTriangleStrip(const Napi::CallbackInfo& info) {
  DrawTriangleStrip(
     (const Vector2 *) pointerFromValue(info, 0),
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

void BindDrawSplineLinear(const Napi::CallbackInfo& info) {
  DrawSplineLinear(
     (const Vector2 *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       floatFromValue(info, 2),
       ColorFromValue(info, 3)
  );
}

void BindDrawSplineBasis(const Napi::CallbackInfo& info) {
  DrawSplineBasis(
     (const Vector2 *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       floatFromValue(info, 2),
       ColorFromValue(info, 3)
  );
}

void BindDrawSplineCatmullRom(const Napi::CallbackInfo& info) {
  DrawSplineCatmullRom(
     (const Vector2 *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       floatFromValue(info, 2),
       ColorFromValue(info, 3)
  );
}

void BindDrawSplineBezierQuadratic(const Napi::CallbackInfo& info) {
  DrawSplineBezierQuadratic(
     (const Vector2 *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       floatFromValue(info, 2),
       ColorFromValue(info, 3)
  );
}

void BindDrawSplineBezierCubic(const Napi::CallbackInfo& info) {
  DrawSplineBezierCubic(
     (const Vector2 *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       floatFromValue(info, 2),
       ColorFromValue(info, 3)
  );
}

void BindDrawSplineSegmentLinear(const Napi::CallbackInfo& info) {
  DrawSplineSegmentLinear(
     Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       floatFromValue(info, 4),
       ColorFromValue(info, 5)
  );
}

void BindDrawSplineSegmentBasis(const Napi::CallbackInfo& info) {
  DrawSplineSegmentBasis(
     Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       Vector2FromValue(info, 6),
       floatFromValue(info, 8),
       ColorFromValue(info, 9)
  );
}

void BindDrawSplineSegmentCatmullRom(const Napi::CallbackInfo& info) {
  DrawSplineSegmentCatmullRom(
     Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       Vector2FromValue(info, 6),
       floatFromValue(info, 8),
       ColorFromValue(info, 9)
  );
}

void BindDrawSplineSegmentBezierQuadratic(const Napi::CallbackInfo& info) {
  DrawSplineSegmentBezierQuadratic(
     Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       floatFromValue(info, 6),
       ColorFromValue(info, 7)
  );
}

void BindDrawSplineSegmentBezierCubic(const Napi::CallbackInfo& info) {
  DrawSplineSegmentBezierCubic(
     Vector2FromValue(info, 0),
       Vector2FromValue(info, 2),
       Vector2FromValue(info, 4),
       Vector2FromValue(info, 6),
       floatFromValue(info, 8),
       ColorFromValue(info, 9)
  );
}

void BindUnloadImage(const Napi::CallbackInfo& info) {
  UnloadImage(
     ImageFromValue(info, 0)
  );
}

void BindImageBlurGaussian(const Napi::CallbackInfo& info) {
  ImageBlurGaussian(
     (Image *) pointerFromValue(info, 0),
       intFromValue(info, 1)
  );
}

void BindImageKernelConvolution(const Napi::CallbackInfo& info) {
  ImageKernelConvolution(
     (Image *) pointerFromValue(info, 0),
       (const float *) pointerFromValue(info, 1),
       intFromValue(info, 2)
  );
}

void BindImageRotate(const Napi::CallbackInfo& info) {
  ImageRotate(
     (Image *) pointerFromValue(info, 0),
       intFromValue(info, 1)
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

void BindImageDrawLineEx(const Napi::CallbackInfo& info) {
  ImageDrawLineEx(
     (Image *) pointerFromValue(info, 0),
       Vector2FromValue(info, 1),
       Vector2FromValue(info, 3),
       intFromValue(info, 5),
       ColorFromValue(info, 6)
  );
}

void BindImageDrawCircleLines(const Napi::CallbackInfo& info) {
  ImageDrawCircleLines(
     (Image *) pointerFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       ColorFromValue(info, 4)
  );
}

void BindImageDrawCircleLinesV(const Napi::CallbackInfo& info) {
  ImageDrawCircleLinesV(
     (Image *) pointerFromValue(info, 0),
       Vector2FromValue(info, 1),
       intFromValue(info, 3),
       ColorFromValue(info, 4)
  );
}

void BindImageDrawTriangle(const Napi::CallbackInfo& info) {
  ImageDrawTriangle(
     (Image *) pointerFromValue(info, 0),
       Vector2FromValue(info, 1),
       Vector2FromValue(info, 3),
       Vector2FromValue(info, 5),
       ColorFromValue(info, 7)
  );
}

void BindImageDrawTriangleEx(const Napi::CallbackInfo& info) {
  ImageDrawTriangleEx(
     (Image *) pointerFromValue(info, 0),
       Vector2FromValue(info, 1),
       Vector2FromValue(info, 3),
       Vector2FromValue(info, 5),
       ColorFromValue(info, 7),
       ColorFromValue(info, 11),
       ColorFromValue(info, 15)
  );
}

void BindImageDrawTriangleLines(const Napi::CallbackInfo& info) {
  ImageDrawTriangleLines(
     (Image *) pointerFromValue(info, 0),
       Vector2FromValue(info, 1),
       Vector2FromValue(info, 3),
       Vector2FromValue(info, 5),
       ColorFromValue(info, 7)
  );
}

void BindImageDrawTriangleFan(const Napi::CallbackInfo& info) {
  ImageDrawTriangleFan(
     (Image *) pointerFromValue(info, 0),
       (Vector2 *) pointerFromValue(info, 1),
       intFromValue(info, 2),
       ColorFromValue(info, 3)
  );
}

void BindImageDrawTriangleStrip(const Napi::CallbackInfo& info) {
  ImageDrawTriangleStrip(
     (Image *) pointerFromValue(info, 0),
       (Vector2 *) pointerFromValue(info, 1),
       intFromValue(info, 2),
       ColorFromValue(info, 3)
  );
}

void BindUnloadTexture(const Napi::CallbackInfo& info) {
  UnloadTexture(
     TextureFromValue(info, 0)
  );
}

void BindUnloadRenderTexture(const Napi::CallbackInfo& info) {
  UnloadRenderTexture(
     RenderTextureFromValue(info, 0)
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

void BindDrawTextCodepoints(const Napi::CallbackInfo& info) {
  DrawTextCodepoints(
     FontFromValue(info, 0),
       (const int *) pointerFromValue(info, 10),
       intFromValue(info, 11),
       Vector2FromValue(info, 12),
       floatFromValue(info, 14),
       floatFromValue(info, 15),
       ColorFromValue(info, 16)
  );
}

void BindSetTextLineSpacing(const Napi::CallbackInfo& info) {
  SetTextLineSpacing(
     intFromValue(info, 0)
  );
}

void BindUnloadUTF8(const Napi::CallbackInfo& info) {
  UnloadUTF8(
     (char *) pointerFromValue(info, 0)
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
     (const Vector3 *) pointerFromValue(info, 0),
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

void BindDrawCapsule(const Napi::CallbackInfo& info) {
  DrawCapsule(
     Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       floatFromValue(info, 6),
       intFromValue(info, 7),
       intFromValue(info, 8),
       ColorFromValue(info, 9)
  );
}

void BindDrawCapsuleWires(const Napi::CallbackInfo& info) {
  DrawCapsuleWires(
     Vector3FromValue(info, 0),
       Vector3FromValue(info, 3),
       floatFromValue(info, 6),
       intFromValue(info, 7),
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

void BindDrawModelPoints(const Napi::CallbackInfo& info) {
  DrawModelPoints(
     ModelFromValue(info, 0),
       Vector3FromValue(info, 24),
       floatFromValue(info, 27),
       ColorFromValue(info, 28)
  );
}

void BindDrawModelPointsEx(const Napi::CallbackInfo& info) {
  DrawModelPointsEx(
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
       intFromValue(info, 17),
       (const void *) pointerFromValue(info, 18),
       intFromValue(info, 19),
       intFromValue(info, 20)
  );
}

void BindUnloadMesh(const Napi::CallbackInfo& info) {
  UnloadMesh(
     MeshFromValue(info, 0)
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
       (const void *) pointerFromValue(info, 6),
       intFromValue(info, 7)
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

void BindUnloadSoundAlias(const Napi::CallbackInfo& info) {
  UnloadSoundAlias(
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

void BindSetSoundVolume(const Napi::CallbackInfo& info) {
  SetSoundVolume(
     SoundFromValue(info, 0),
       floatFromValue(info, 6)
  );
}

void BindSetSoundPitch(const Napi::CallbackInfo& info) {
  SetSoundPitch(
     SoundFromValue(info, 0),
       floatFromValue(info, 6)
  );
}

void BindSetSoundPan(const Napi::CallbackInfo& info) {
  SetSoundPan(
     SoundFromValue(info, 0),
       floatFromValue(info, 6)
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
       floatFromValue(info, 9)
  );
}

void BindSetMusicVolume(const Napi::CallbackInfo& info) {
  SetMusicVolume(
     MusicFromValue(info, 0),
       floatFromValue(info, 9)
  );
}

void BindSetMusicPitch(const Napi::CallbackInfo& info) {
  SetMusicPitch(
     MusicFromValue(info, 0),
       floatFromValue(info, 9)
  );
}

void BindSetMusicPan(const Napi::CallbackInfo& info) {
  SetMusicPan(
     MusicFromValue(info, 0),
       floatFromValue(info, 9)
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
       (const void *) pointerFromValue(info, 5),
       intFromValue(info, 6)
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
       floatFromValue(info, 5)
  );
}

void BindSetAudioStreamPitch(const Napi::CallbackInfo& info) {
  SetAudioStreamPitch(
     AudioStreamFromValue(info, 0),
       floatFromValue(info, 5)
  );
}

void BindSetAudioStreamPan(const Napi::CallbackInfo& info) {
  SetAudioStreamPan(
     AudioStreamFromValue(info, 0),
       floatFromValue(info, 5)
  );
}

void BindSetAudioStreamBufferSizeDefault(const Napi::CallbackInfo& info) {
  SetAudioStreamBufferSizeDefault(
     intFromValue(info, 0)
  );
}

void BindVector3OrthoNormalize(const Napi::CallbackInfo& info) {
  Vector3OrthoNormalize(
     (Vector3 *) pointerFromValue(info, 0),
       (Vector3 *) pointerFromValue(info, 1)
  );
}

void BindQuaternionToAxisAngle(const Napi::CallbackInfo& info) {
  QuaternionToAxisAngle(
     Vector4FromValue(info, 0),
       (Vector3 *) pointerFromValue(info, 1),
       (float *) pointerFromValue(info, 2)
  );
}

void BindMatrixDecompose(const Napi::CallbackInfo& info) {
  MatrixDecompose(
     MatrixFromValue(info, 0),
       (Vector3 *) pointerFromValue(info, 16),
       (Quaternion *) pointerFromValue(info, 17),
       (Vector3 *) pointerFromValue(info, 18)
  );
}

void BindGuiEnable(const Napi::CallbackInfo& info) {
  GuiEnable(
    
  );
}

void BindGuiDisable(const Napi::CallbackInfo& info) {
  GuiDisable(
    
  );
}

void BindGuiLock(const Napi::CallbackInfo& info) {
  GuiLock(
    
  );
}

void BindGuiUnlock(const Napi::CallbackInfo& info) {
  GuiUnlock(
    
  );
}

void BindGuiSetAlpha(const Napi::CallbackInfo& info) {
  GuiSetAlpha(
     floatFromValue(info, 0)
  );
}

void BindGuiSetState(const Napi::CallbackInfo& info) {
  GuiSetState(
     intFromValue(info, 0)
  );
}

void BindGuiSetFont(const Napi::CallbackInfo& info) {
  GuiSetFont(
     FontFromValue(info, 0)
  );
}

void BindGuiSetStyle(const Napi::CallbackInfo& info) {
  GuiSetStyle(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2)
  );
}

void BindGuiLoadStyle(const Napi::CallbackInfo& info) {
  GuiLoadStyle(
     (const char *) stringFromValue(info, 0)
  );
}

void BindGuiLoadStyleDefault(const Napi::CallbackInfo& info) {
  GuiLoadStyleDefault(
    
  );
}

void BindGuiEnableTooltip(const Napi::CallbackInfo& info) {
  GuiEnableTooltip(
    
  );
}

void BindGuiDisableTooltip(const Napi::CallbackInfo& info) {
  GuiDisableTooltip(
    
  );
}

void BindGuiSetTooltip(const Napi::CallbackInfo& info) {
  GuiSetTooltip(
     (const char *) stringFromValue(info, 0)
  );
}

void BindGuiSetIconScale(const Napi::CallbackInfo& info) {
  GuiSetIconScale(
     intFromValue(info, 0)
  );
}

void BindGuiDrawIcon(const Napi::CallbackInfo& info) {
  GuiDrawIcon(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       ColorFromValue(info, 4)
  );
}

void BindrlMatrixMode(const Napi::CallbackInfo& info) {
  rlMatrixMode(
     intFromValue(info, 0)
  );
}

void BindrlPushMatrix(const Napi::CallbackInfo& info) {
  rlPushMatrix(
    
  );
}

void BindrlPopMatrix(const Napi::CallbackInfo& info) {
  rlPopMatrix(
    
  );
}

void BindrlLoadIdentity(const Napi::CallbackInfo& info) {
  rlLoadIdentity(
    
  );
}

void BindrlTranslatef(const Napi::CallbackInfo& info) {
  rlTranslatef(
     floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
  );
}

void BindrlRotatef(const Napi::CallbackInfo& info) {
  rlRotatef(
     floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
  );
}

void BindrlScalef(const Napi::CallbackInfo& info) {
  rlScalef(
     floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
  );
}

void BindrlMultMatrixf(const Napi::CallbackInfo& info) {
  rlMultMatrixf(
     (const float *) pointerFromValue(info, 0)
  );
}

void BindrlFrustum(const Napi::CallbackInfo& info) {
  rlFrustum(
     doubleFromValue(info, 0),
       doubleFromValue(info, 1),
       doubleFromValue(info, 2),
       doubleFromValue(info, 3),
       doubleFromValue(info, 4),
       doubleFromValue(info, 5)
  );
}

void BindrlOrtho(const Napi::CallbackInfo& info) {
  rlOrtho(
     doubleFromValue(info, 0),
       doubleFromValue(info, 1),
       doubleFromValue(info, 2),
       doubleFromValue(info, 3),
       doubleFromValue(info, 4),
       doubleFromValue(info, 5)
  );
}

void BindrlViewport(const Napi::CallbackInfo& info) {
  rlViewport(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3)
  );
}

void BindrlSetClipPlanes(const Napi::CallbackInfo& info) {
  rlSetClipPlanes(
     doubleFromValue(info, 0),
       doubleFromValue(info, 1)
  );
}

void BindrlBegin(const Napi::CallbackInfo& info) {
  rlBegin(
     intFromValue(info, 0)
  );
}

void BindrlEnd(const Napi::CallbackInfo& info) {
  rlEnd(
    
  );
}

void BindrlVertex2i(const Napi::CallbackInfo& info) {
  rlVertex2i(
     intFromValue(info, 0),
       intFromValue(info, 1)
  );
}

void BindrlVertex2f(const Napi::CallbackInfo& info) {
  rlVertex2f(
     floatFromValue(info, 0),
       floatFromValue(info, 1)
  );
}

void BindrlVertex3f(const Napi::CallbackInfo& info) {
  rlVertex3f(
     floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
  );
}

void BindrlTexCoord2f(const Napi::CallbackInfo& info) {
  rlTexCoord2f(
     floatFromValue(info, 0),
       floatFromValue(info, 1)
  );
}

void BindrlNormal3f(const Napi::CallbackInfo& info) {
  rlNormal3f(
     floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
  );
}

void BindrlColor4ub(const Napi::CallbackInfo& info) {
  rlColor4ub(
     unsignedcharFromValue(info, 0),
       unsignedcharFromValue(info, 1),
       unsignedcharFromValue(info, 2),
       unsignedcharFromValue(info, 3)
  );
}

void BindrlColor3f(const Napi::CallbackInfo& info) {
  rlColor3f(
     floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2)
  );
}

void BindrlColor4f(const Napi::CallbackInfo& info) {
  rlColor4f(
     floatFromValue(info, 0),
       floatFromValue(info, 1),
       floatFromValue(info, 2),
       floatFromValue(info, 3)
  );
}

void BindrlDisableVertexArray(const Napi::CallbackInfo& info) {
  rlDisableVertexArray(
    
  );
}

void BindrlEnableVertexBuffer(const Napi::CallbackInfo& info) {
  rlEnableVertexBuffer(
     unsignedintFromValue(info, 0)
  );
}

void BindrlDisableVertexBuffer(const Napi::CallbackInfo& info) {
  rlDisableVertexBuffer(
    
  );
}

void BindrlEnableVertexBufferElement(const Napi::CallbackInfo& info) {
  rlEnableVertexBufferElement(
     unsignedintFromValue(info, 0)
  );
}

void BindrlDisableVertexBufferElement(const Napi::CallbackInfo& info) {
  rlDisableVertexBufferElement(
    
  );
}

void BindrlEnableVertexAttribute(const Napi::CallbackInfo& info) {
  rlEnableVertexAttribute(
     unsignedintFromValue(info, 0)
  );
}

void BindrlDisableVertexAttribute(const Napi::CallbackInfo& info) {
  rlDisableVertexAttribute(
     unsignedintFromValue(info, 0)
  );
}

void BindrlActiveTextureSlot(const Napi::CallbackInfo& info) {
  rlActiveTextureSlot(
     intFromValue(info, 0)
  );
}

void BindrlEnableTexture(const Napi::CallbackInfo& info) {
  rlEnableTexture(
     unsignedintFromValue(info, 0)
  );
}

void BindrlDisableTexture(const Napi::CallbackInfo& info) {
  rlDisableTexture(
    
  );
}

void BindrlEnableTextureCubemap(const Napi::CallbackInfo& info) {
  rlEnableTextureCubemap(
     unsignedintFromValue(info, 0)
  );
}

void BindrlDisableTextureCubemap(const Napi::CallbackInfo& info) {
  rlDisableTextureCubemap(
    
  );
}

void BindrlTextureParameters(const Napi::CallbackInfo& info) {
  rlTextureParameters(
     unsignedintFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2)
  );
}

void BindrlCubemapParameters(const Napi::CallbackInfo& info) {
  rlCubemapParameters(
     unsignedintFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2)
  );
}

void BindrlEnableShader(const Napi::CallbackInfo& info) {
  rlEnableShader(
     unsignedintFromValue(info, 0)
  );
}

void BindrlDisableShader(const Napi::CallbackInfo& info) {
  rlDisableShader(
    
  );
}

void BindrlEnableFramebuffer(const Napi::CallbackInfo& info) {
  rlEnableFramebuffer(
     unsignedintFromValue(info, 0)
  );
}

void BindrlDisableFramebuffer(const Napi::CallbackInfo& info) {
  rlDisableFramebuffer(
    
  );
}

void BindrlActiveDrawBuffers(const Napi::CallbackInfo& info) {
  rlActiveDrawBuffers(
     intFromValue(info, 0)
  );
}

void BindrlBlitFramebuffer(const Napi::CallbackInfo& info) {
  rlBlitFramebuffer(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       intFromValue(info, 4),
       intFromValue(info, 5),
       intFromValue(info, 6),
       intFromValue(info, 7),
       intFromValue(info, 8)
  );
}

void BindrlBindFramebuffer(const Napi::CallbackInfo& info) {
  rlBindFramebuffer(
     unsignedintFromValue(info, 0),
       unsignedintFromValue(info, 1)
  );
}

void BindrlEnableColorBlend(const Napi::CallbackInfo& info) {
  rlEnableColorBlend(
    
  );
}

void BindrlDisableColorBlend(const Napi::CallbackInfo& info) {
  rlDisableColorBlend(
    
  );
}

void BindrlEnableDepthTest(const Napi::CallbackInfo& info) {
  rlEnableDepthTest(
    
  );
}

void BindrlDisableDepthTest(const Napi::CallbackInfo& info) {
  rlDisableDepthTest(
    
  );
}

void BindrlEnableDepthMask(const Napi::CallbackInfo& info) {
  rlEnableDepthMask(
    
  );
}

void BindrlDisableDepthMask(const Napi::CallbackInfo& info) {
  rlDisableDepthMask(
    
  );
}

void BindrlEnableBackfaceCulling(const Napi::CallbackInfo& info) {
  rlEnableBackfaceCulling(
    
  );
}

void BindrlDisableBackfaceCulling(const Napi::CallbackInfo& info) {
  rlDisableBackfaceCulling(
    
  );
}

void BindrlColorMask(const Napi::CallbackInfo& info) {
  rlColorMask(
     boolFromValue(info, 0),
       boolFromValue(info, 1),
       boolFromValue(info, 2),
       boolFromValue(info, 3)
  );
}

void BindrlSetCullFace(const Napi::CallbackInfo& info) {
  rlSetCullFace(
     intFromValue(info, 0)
  );
}

void BindrlEnableScissorTest(const Napi::CallbackInfo& info) {
  rlEnableScissorTest(
    
  );
}

void BindrlDisableScissorTest(const Napi::CallbackInfo& info) {
  rlDisableScissorTest(
    
  );
}

void BindrlScissor(const Napi::CallbackInfo& info) {
  rlScissor(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3)
  );
}

void BindrlEnableWireMode(const Napi::CallbackInfo& info) {
  rlEnableWireMode(
    
  );
}

void BindrlEnablePointMode(const Napi::CallbackInfo& info) {
  rlEnablePointMode(
    
  );
}

void BindrlDisableWireMode(const Napi::CallbackInfo& info) {
  rlDisableWireMode(
    
  );
}

void BindrlSetLineWidth(const Napi::CallbackInfo& info) {
  rlSetLineWidth(
     floatFromValue(info, 0)
  );
}

void BindrlEnableSmoothLines(const Napi::CallbackInfo& info) {
  rlEnableSmoothLines(
    
  );
}

void BindrlDisableSmoothLines(const Napi::CallbackInfo& info) {
  rlDisableSmoothLines(
    
  );
}

void BindrlEnableStereoRender(const Napi::CallbackInfo& info) {
  rlEnableStereoRender(
    
  );
}

void BindrlDisableStereoRender(const Napi::CallbackInfo& info) {
  rlDisableStereoRender(
    
  );
}

void BindrlClearColor(const Napi::CallbackInfo& info) {
  rlClearColor(
     unsignedcharFromValue(info, 0),
       unsignedcharFromValue(info, 1),
       unsignedcharFromValue(info, 2),
       unsignedcharFromValue(info, 3)
  );
}

void BindrlClearScreenBuffers(const Napi::CallbackInfo& info) {
  rlClearScreenBuffers(
    
  );
}

void BindrlCheckErrors(const Napi::CallbackInfo& info) {
  rlCheckErrors(
    
  );
}

void BindrlSetBlendMode(const Napi::CallbackInfo& info) {
  rlSetBlendMode(
     intFromValue(info, 0)
  );
}

void BindrlSetBlendFactors(const Napi::CallbackInfo& info) {
  rlSetBlendFactors(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2)
  );
}

void BindrlSetBlendFactorsSeparate(const Napi::CallbackInfo& info) {
  rlSetBlendFactorsSeparate(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       intFromValue(info, 4),
       intFromValue(info, 5)
  );
}

void BindrlglInit(const Napi::CallbackInfo& info) {
  rlglInit(
     intFromValue(info, 0),
       intFromValue(info, 1)
  );
}

void BindrlglClose(const Napi::CallbackInfo& info) {
  rlglClose(
    
  );
}

void BindrlLoadExtensions(const Napi::CallbackInfo& info) {
  rlLoadExtensions(
     (void *) pointerFromValue(info, 0)
  );
}

void BindrlSetFramebufferWidth(const Napi::CallbackInfo& info) {
  rlSetFramebufferWidth(
     intFromValue(info, 0)
  );
}

void BindrlSetFramebufferHeight(const Napi::CallbackInfo& info) {
  rlSetFramebufferHeight(
     intFromValue(info, 0)
  );
}

void BindrlUnloadRenderBatch(const Napi::CallbackInfo& info) {
  rlUnloadRenderBatch(
     rlRenderBatchFromValue(info, 0)
  );
}

void BindrlDrawRenderBatch(const Napi::CallbackInfo& info) {
  rlDrawRenderBatch(
     (rlRenderBatch *) pointerFromValue(info, 0)
  );
}

void BindrlSetRenderBatchActive(const Napi::CallbackInfo& info) {
  rlSetRenderBatchActive(
     (rlRenderBatch *) pointerFromValue(info, 0)
  );
}

void BindrlDrawRenderBatchActive(const Napi::CallbackInfo& info) {
  rlDrawRenderBatchActive(
    
  );
}

void BindrlSetTexture(const Napi::CallbackInfo& info) {
  rlSetTexture(
     unsignedintFromValue(info, 0)
  );
}

void BindrlUpdateVertexBuffer(const Napi::CallbackInfo& info) {
  rlUpdateVertexBuffer(
     unsignedintFromValue(info, 0),
       (const void *) pointerFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3)
  );
}

void BindrlUpdateVertexBufferElements(const Napi::CallbackInfo& info) {
  rlUpdateVertexBufferElements(
     unsignedintFromValue(info, 0),
       (const void *) pointerFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3)
  );
}

void BindrlUnloadVertexArray(const Napi::CallbackInfo& info) {
  rlUnloadVertexArray(
     unsignedintFromValue(info, 0)
  );
}

void BindrlUnloadVertexBuffer(const Napi::CallbackInfo& info) {
  rlUnloadVertexBuffer(
     unsignedintFromValue(info, 0)
  );
}

void BindrlSetVertexAttribute(const Napi::CallbackInfo& info) {
  rlSetVertexAttribute(
     unsignedintFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       boolFromValue(info, 3),
       intFromValue(info, 4),
       intFromValue(info, 5)
  );
}

void BindrlSetVertexAttributeDivisor(const Napi::CallbackInfo& info) {
  rlSetVertexAttributeDivisor(
     unsignedintFromValue(info, 0),
       intFromValue(info, 1)
  );
}

void BindrlSetVertexAttributeDefault(const Napi::CallbackInfo& info) {
  rlSetVertexAttributeDefault(
     intFromValue(info, 0),
       (const void *) pointerFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3)
  );
}

void BindrlDrawVertexArray(const Napi::CallbackInfo& info) {
  rlDrawVertexArray(
     intFromValue(info, 0),
       intFromValue(info, 1)
  );
}

void BindrlDrawVertexArrayElements(const Napi::CallbackInfo& info) {
  rlDrawVertexArrayElements(
     intFromValue(info, 0),
       intFromValue(info, 1),
       (const void *) pointerFromValue(info, 2)
  );
}

void BindrlDrawVertexArrayInstanced(const Napi::CallbackInfo& info) {
  rlDrawVertexArrayInstanced(
     intFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2)
  );
}

void BindrlDrawVertexArrayElementsInstanced(const Napi::CallbackInfo& info) {
  rlDrawVertexArrayElementsInstanced(
     intFromValue(info, 0),
       intFromValue(info, 1),
       (const void *) pointerFromValue(info, 2),
       intFromValue(info, 3)
  );
}

void BindrlUpdateTexture(const Napi::CallbackInfo& info) {
  rlUpdateTexture(
     unsignedintFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       intFromValue(info, 4),
       intFromValue(info, 5),
       (const void *) pointerFromValue(info, 6)
  );
}

void BindrlGetGlTextureFormats(const Napi::CallbackInfo& info) {
  rlGetGlTextureFormats(
     intFromValue(info, 0),
       (unsigned int *) pointerFromValue(info, 1),
       (unsigned int *) pointerFromValue(info, 2),
       (unsigned int *) pointerFromValue(info, 3)
  );
}

void BindrlUnloadTexture(const Napi::CallbackInfo& info) {
  rlUnloadTexture(
     unsignedintFromValue(info, 0)
  );
}

void BindrlGenTextureMipmaps(const Napi::CallbackInfo& info) {
  rlGenTextureMipmaps(
     unsignedintFromValue(info, 0),
       intFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       (int *) pointerFromValue(info, 4)
  );
}

void BindrlFramebufferAttach(const Napi::CallbackInfo& info) {
  rlFramebufferAttach(
     unsignedintFromValue(info, 0),
       unsignedintFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3),
       intFromValue(info, 4)
  );
}

void BindrlUnloadFramebuffer(const Napi::CallbackInfo& info) {
  rlUnloadFramebuffer(
     unsignedintFromValue(info, 0)
  );
}

void BindrlUnloadShaderProgram(const Napi::CallbackInfo& info) {
  rlUnloadShaderProgram(
     unsignedintFromValue(info, 0)
  );
}

void BindrlSetUniform(const Napi::CallbackInfo& info) {
  rlSetUniform(
     intFromValue(info, 0),
       (const void *) pointerFromValue(info, 1),
       intFromValue(info, 2),
       intFromValue(info, 3)
  );
}

void BindrlSetUniformMatrix(const Napi::CallbackInfo& info) {
  rlSetUniformMatrix(
     intFromValue(info, 0),
       MatrixFromValue(info, 1)
  );
}

void BindrlSetUniformMatrices(const Napi::CallbackInfo& info) {
  rlSetUniformMatrices(
     intFromValue(info, 0),
       (const Matrix *) pointerFromValue(info, 1),
       intFromValue(info, 2)
  );
}

void BindrlSetUniformSampler(const Napi::CallbackInfo& info) {
  rlSetUniformSampler(
     intFromValue(info, 0),
       unsignedintFromValue(info, 1)
  );
}

void BindrlSetShader(const Napi::CallbackInfo& info) {
  rlSetShader(
     unsignedintFromValue(info, 0),
       (int *) pointerFromValue(info, 1)
  );
}

void BindrlComputeShaderDispatch(const Napi::CallbackInfo& info) {
  rlComputeShaderDispatch(
     unsignedintFromValue(info, 0),
       unsignedintFromValue(info, 1),
       unsignedintFromValue(info, 2)
  );
}

void BindrlUnloadShaderBuffer(const Napi::CallbackInfo& info) {
  rlUnloadShaderBuffer(
     unsignedintFromValue(info, 0)
  );
}

void BindrlUpdateShaderBuffer(const Napi::CallbackInfo& info) {
  rlUpdateShaderBuffer(
     unsignedintFromValue(info, 0),
       (const void *) pointerFromValue(info, 1),
       unsignedintFromValue(info, 2),
       unsignedintFromValue(info, 3)
  );
}

void BindrlBindShaderBuffer(const Napi::CallbackInfo& info) {
  rlBindShaderBuffer(
     unsignedintFromValue(info, 0),
       unsignedintFromValue(info, 1)
  );
}

void BindrlReadShaderBuffer(const Napi::CallbackInfo& info) {
  rlReadShaderBuffer(
     unsignedintFromValue(info, 0),
       (void *) pointerFromValue(info, 1),
       unsignedintFromValue(info, 2),
       unsignedintFromValue(info, 3)
  );
}

void BindrlCopyShaderBuffer(const Napi::CallbackInfo& info) {
  rlCopyShaderBuffer(
     unsignedintFromValue(info, 0),
       unsignedintFromValue(info, 1),
       unsignedintFromValue(info, 2),
       unsignedintFromValue(info, 3),
       unsignedintFromValue(info, 4)
  );
}

void BindrlBindImageTexture(const Napi::CallbackInfo& info) {
  rlBindImageTexture(
     unsignedintFromValue(info, 0),
       unsignedintFromValue(info, 1),
       intFromValue(info, 2),
       boolFromValue(info, 3)
  );
}

void BindrlSetMatrixProjection(const Napi::CallbackInfo& info) {
  rlSetMatrixProjection(
     MatrixFromValue(info, 0)
  );
}

void BindrlSetMatrixModelview(const Napi::CallbackInfo& info) {
  rlSetMatrixModelview(
     MatrixFromValue(info, 0)
  );
}

void BindrlSetMatrixProjectionStereo(const Napi::CallbackInfo& info) {
  rlSetMatrixProjectionStereo(
     MatrixFromValue(info, 0),
       MatrixFromValue(info, 16)
  );
}

void BindrlSetMatrixViewOffsetStereo(const Napi::CallbackInfo& info) {
  rlSetMatrixViewOffsetStereo(
     MatrixFromValue(info, 0),
       MatrixFromValue(info, 16)
  );
}

void BindrlLoadDrawCube(const Napi::CallbackInfo& info) {
  rlLoadDrawCube(
    
  );
}

void BindrlLoadDrawQuad(const Napi::CallbackInfo& info) {
  rlLoadDrawQuad(
    
  );
}
// By-Reference function bindings

Napi::Value BindUpdateCamera(const Napi::CallbackInfo& info) {
  Camera3D obj = Camera3DFromValue(info, 0);
  UpdateCamera(
    &obj, intFromValue(info, 11)
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
  Texture obj = TextureFromValue(info, 0);
  GenTextureMipmaps(
    &obj

  );
  return ToValue(info.Env(), obj);
}

Napi::Value BindUploadMesh(const Napi::CallbackInfo& info) {
  Mesh obj = MeshFromValue(info, 0);
  UploadMesh(
    &obj, boolFromValue(info, 17)
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

Napi::Value BindSetModelMeshMaterial(const Napi::CallbackInfo& info) {
  Model obj = ModelFromValue(info, 0);
  SetModelMeshMaterial(
    &obj, intFromValue(info, 24),
       intFromValue(info, 25)
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

Napi::Value BindWaveFormat(const Napi::CallbackInfo& info) {
  Wave obj = WaveFromValue(info, 0);
  WaveFormat(
    &obj, intFromValue(info, 5),
       intFromValue(info, 6),
       intFromValue(info, 7)
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
  exports.Set("BindCloseWindow", Napi::Function::New(env, BindCloseWindow));
  exports.Set("BindWindowShouldClose", Napi::Function::New(env, BindWindowShouldClose));
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
  exports.Set("BindToggleBorderlessWindowed", Napi::Function::New(env, BindToggleBorderlessWindowed));
  exports.Set("BindMaximizeWindow", Napi::Function::New(env, BindMaximizeWindow));
  exports.Set("BindMinimizeWindow", Napi::Function::New(env, BindMinimizeWindow));
  exports.Set("BindRestoreWindow", Napi::Function::New(env, BindRestoreWindow));
  exports.Set("BindSetWindowIcon", Napi::Function::New(env, BindSetWindowIcon));
  exports.Set("BindSetWindowIcons", Napi::Function::New(env, BindSetWindowIcons));
  exports.Set("BindSetWindowTitle", Napi::Function::New(env, BindSetWindowTitle));
  exports.Set("BindSetWindowPosition", Napi::Function::New(env, BindSetWindowPosition));
  exports.Set("BindSetWindowMonitor", Napi::Function::New(env, BindSetWindowMonitor));
  exports.Set("BindSetWindowMinSize", Napi::Function::New(env, BindSetWindowMinSize));
  exports.Set("BindSetWindowMaxSize", Napi::Function::New(env, BindSetWindowMaxSize));
  exports.Set("BindSetWindowSize", Napi::Function::New(env, BindSetWindowSize));
  exports.Set("BindSetWindowOpacity", Napi::Function::New(env, BindSetWindowOpacity));
  exports.Set("BindSetWindowFocused", Napi::Function::New(env, BindSetWindowFocused));
  exports.Set("BindGetWindowHandle", Napi::Function::New(env, BindGetWindowHandle));
  exports.Set("BindGetScreenWidth", Napi::Function::New(env, BindGetScreenWidth));
  exports.Set("BindGetScreenHeight", Napi::Function::New(env, BindGetScreenHeight));
  exports.Set("BindGetRenderWidth", Napi::Function::New(env, BindGetRenderWidth));
  exports.Set("BindGetRenderHeight", Napi::Function::New(env, BindGetRenderHeight));
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
  exports.Set("BindGetClipboardImage", Napi::Function::New(env, BindGetClipboardImage));
  exports.Set("BindEnableEventWaiting", Napi::Function::New(env, BindEnableEventWaiting));
  exports.Set("BindDisableEventWaiting", Napi::Function::New(env, BindDisableEventWaiting));
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
  exports.Set("BindIsShaderValid", Napi::Function::New(env, BindIsShaderValid));
  exports.Set("BindGetShaderLocation", Napi::Function::New(env, BindGetShaderLocation));
  exports.Set("BindGetShaderLocationAttrib", Napi::Function::New(env, BindGetShaderLocationAttrib));
  exports.Set("BindSetShaderValueMatrix", Napi::Function::New(env, BindSetShaderValueMatrix));
  exports.Set("BindSetShaderValueTexture", Napi::Function::New(env, BindSetShaderValueTexture));
  exports.Set("BindUnloadShader", Napi::Function::New(env, BindUnloadShader));
  exports.Set("BindGetScreenToWorldRay", Napi::Function::New(env, BindGetScreenToWorldRay));
  exports.Set("BindGetScreenToWorldRayEx", Napi::Function::New(env, BindGetScreenToWorldRayEx));
  exports.Set("BindGetWorldToScreen", Napi::Function::New(env, BindGetWorldToScreen));
  exports.Set("BindGetWorldToScreenEx", Napi::Function::New(env, BindGetWorldToScreenEx));
  exports.Set("BindGetWorldToScreen2D", Napi::Function::New(env, BindGetWorldToScreen2D));
  exports.Set("BindGetScreenToWorld2D", Napi::Function::New(env, BindGetScreenToWorld2D));
  exports.Set("BindGetCameraMatrix", Napi::Function::New(env, BindGetCameraMatrix));
  exports.Set("BindGetCameraMatrix2D", Napi::Function::New(env, BindGetCameraMatrix2D));
  exports.Set("BindSetTargetFPS", Napi::Function::New(env, BindSetTargetFPS));
  exports.Set("BindGetFrameTime", Napi::Function::New(env, BindGetFrameTime));
  exports.Set("BindGetTime", Napi::Function::New(env, BindGetTime));
  exports.Set("BindGetFPS", Napi::Function::New(env, BindGetFPS));
  exports.Set("BindSwapScreenBuffer", Napi::Function::New(env, BindSwapScreenBuffer));
  exports.Set("BindPollInputEvents", Napi::Function::New(env, BindPollInputEvents));
  exports.Set("BindWaitTime", Napi::Function::New(env, BindWaitTime));
  exports.Set("BindSetRandomSeed", Napi::Function::New(env, BindSetRandomSeed));
  exports.Set("BindGetRandomValue", Napi::Function::New(env, BindGetRandomValue));
  exports.Set("BindLoadRandomSequence", Napi::Function::New(env, BindLoadRandomSequence));
  exports.Set("BindUnloadRandomSequence", Napi::Function::New(env, BindUnloadRandomSequence));
  exports.Set("BindTakeScreenshot", Napi::Function::New(env, BindTakeScreenshot));
  exports.Set("BindSetConfigFlags", Napi::Function::New(env, BindSetConfigFlags));
  exports.Set("BindOpenURL", Napi::Function::New(env, BindOpenURL));
  exports.Set("BindSetTraceLogLevel", Napi::Function::New(env, BindSetTraceLogLevel));
  exports.Set("BindMemAlloc", Napi::Function::New(env, BindMemAlloc));
  exports.Set("BindMemRealloc", Napi::Function::New(env, BindMemRealloc));
  exports.Set("BindMemFree", Napi::Function::New(env, BindMemFree));
  exports.Set("BindLoadFileData", Napi::Function::New(env, BindLoadFileData));
  exports.Set("BindUnloadFileData", Napi::Function::New(env, BindUnloadFileData));
  exports.Set("BindSaveFileData", Napi::Function::New(env, BindSaveFileData));
  exports.Set("BindExportDataAsCode", Napi::Function::New(env, BindExportDataAsCode));
  exports.Set("BindLoadFileText", Napi::Function::New(env, BindLoadFileText));
  exports.Set("BindUnloadFileText", Napi::Function::New(env, BindUnloadFileText));
  exports.Set("BindSaveFileText", Napi::Function::New(env, BindSaveFileText));
  exports.Set("BindFileExists", Napi::Function::New(env, BindFileExists));
  exports.Set("BindDirectoryExists", Napi::Function::New(env, BindDirectoryExists));
  exports.Set("BindIsFileExtension", Napi::Function::New(env, BindIsFileExtension));
  exports.Set("BindGetFileLength", Napi::Function::New(env, BindGetFileLength));
  exports.Set("BindGetFileExtension", Napi::Function::New(env, BindGetFileExtension));
  exports.Set("BindGetFileName", Napi::Function::New(env, BindGetFileName));
  exports.Set("BindGetFileNameWithoutExt", Napi::Function::New(env, BindGetFileNameWithoutExt));
  exports.Set("BindGetDirectoryPath", Napi::Function::New(env, BindGetDirectoryPath));
  exports.Set("BindGetPrevDirectoryPath", Napi::Function::New(env, BindGetPrevDirectoryPath));
  exports.Set("BindGetWorkingDirectory", Napi::Function::New(env, BindGetWorkingDirectory));
  exports.Set("BindGetApplicationDirectory", Napi::Function::New(env, BindGetApplicationDirectory));
  exports.Set("BindMakeDirectory", Napi::Function::New(env, BindMakeDirectory));
  exports.Set("BindChangeDirectory", Napi::Function::New(env, BindChangeDirectory));
  exports.Set("BindIsPathFile", Napi::Function::New(env, BindIsPathFile));
  exports.Set("BindIsFileNameValid", Napi::Function::New(env, BindIsFileNameValid));
  exports.Set("BindLoadDirectoryFiles", Napi::Function::New(env, BindLoadDirectoryFiles));
  exports.Set("BindLoadDirectoryFilesEx", Napi::Function::New(env, BindLoadDirectoryFilesEx));
  exports.Set("BindUnloadDirectoryFiles", Napi::Function::New(env, BindUnloadDirectoryFiles));
  exports.Set("BindIsFileDropped", Napi::Function::New(env, BindIsFileDropped));
  exports.Set("BindLoadDroppedFiles", Napi::Function::New(env, BindLoadDroppedFiles));
  exports.Set("BindUnloadDroppedFiles", Napi::Function::New(env, BindUnloadDroppedFiles));
  exports.Set("BindGetFileModTime", Napi::Function::New(env, BindGetFileModTime));
  exports.Set("BindCompressData", Napi::Function::New(env, BindCompressData));
  exports.Set("BindDecompressData", Napi::Function::New(env, BindDecompressData));
  exports.Set("BindEncodeDataBase64", Napi::Function::New(env, BindEncodeDataBase64));
  exports.Set("BindDecodeDataBase64", Napi::Function::New(env, BindDecodeDataBase64));
  exports.Set("BindComputeCRC32", Napi::Function::New(env, BindComputeCRC32));
  exports.Set("BindComputeMD5", Napi::Function::New(env, BindComputeMD5));
  exports.Set("BindComputeSHA1", Napi::Function::New(env, BindComputeSHA1));
  exports.Set("BindLoadAutomationEventList", Napi::Function::New(env, BindLoadAutomationEventList));
  exports.Set("BindUnloadAutomationEventList", Napi::Function::New(env, BindUnloadAutomationEventList));
  exports.Set("BindExportAutomationEventList", Napi::Function::New(env, BindExportAutomationEventList));
  exports.Set("BindSetAutomationEventList", Napi::Function::New(env, BindSetAutomationEventList));
  exports.Set("BindSetAutomationEventBaseFrame", Napi::Function::New(env, BindSetAutomationEventBaseFrame));
  exports.Set("BindStartAutomationEventRecording", Napi::Function::New(env, BindStartAutomationEventRecording));
  exports.Set("BindStopAutomationEventRecording", Napi::Function::New(env, BindStopAutomationEventRecording));
  exports.Set("BindIsKeyPressed", Napi::Function::New(env, BindIsKeyPressed));
  exports.Set("BindIsKeyPressedRepeat", Napi::Function::New(env, BindIsKeyPressedRepeat));
  exports.Set("BindIsKeyDown", Napi::Function::New(env, BindIsKeyDown));
  exports.Set("BindIsKeyReleased", Napi::Function::New(env, BindIsKeyReleased));
  exports.Set("BindIsKeyUp", Napi::Function::New(env, BindIsKeyUp));
  exports.Set("BindGetKeyPressed", Napi::Function::New(env, BindGetKeyPressed));
  exports.Set("BindGetCharPressed", Napi::Function::New(env, BindGetCharPressed));
  exports.Set("BindSetExitKey", Napi::Function::New(env, BindSetExitKey));
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
  exports.Set("BindSetGamepadVibration", Napi::Function::New(env, BindSetGamepadVibration));
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
  exports.Set("BindGetMouseWheelMoveV", Napi::Function::New(env, BindGetMouseWheelMoveV));
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
  exports.Set("BindUpdateCamera", Napi::Function::New(env, BindUpdateCamera));
  exports.Set("BindUpdateCameraPro", Napi::Function::New(env, BindUpdateCameraPro));
  exports.Set("BindSetShapesTexture", Napi::Function::New(env, BindSetShapesTexture));
  exports.Set("BindGetShapesTexture", Napi::Function::New(env, BindGetShapesTexture));
  exports.Set("BindGetShapesTextureRectangle", Napi::Function::New(env, BindGetShapesTextureRectangle));
  exports.Set("BindDrawPixel", Napi::Function::New(env, BindDrawPixel));
  exports.Set("BindDrawPixelV", Napi::Function::New(env, BindDrawPixelV));
  exports.Set("BindDrawLine", Napi::Function::New(env, BindDrawLine));
  exports.Set("BindDrawLineV", Napi::Function::New(env, BindDrawLineV));
  exports.Set("BindDrawLineEx", Napi::Function::New(env, BindDrawLineEx));
  exports.Set("BindDrawLineStrip", Napi::Function::New(env, BindDrawLineStrip));
  exports.Set("BindDrawLineBezier", Napi::Function::New(env, BindDrawLineBezier));
  exports.Set("BindDrawCircle", Napi::Function::New(env, BindDrawCircle));
  exports.Set("BindDrawCircleSector", Napi::Function::New(env, BindDrawCircleSector));
  exports.Set("BindDrawCircleSectorLines", Napi::Function::New(env, BindDrawCircleSectorLines));
  exports.Set("BindDrawCircleGradient", Napi::Function::New(env, BindDrawCircleGradient));
  exports.Set("BindDrawCircleV", Napi::Function::New(env, BindDrawCircleV));
  exports.Set("BindDrawCircleLines", Napi::Function::New(env, BindDrawCircleLines));
  exports.Set("BindDrawCircleLinesV", Napi::Function::New(env, BindDrawCircleLinesV));
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
  exports.Set("BindDrawRectangleRoundedLinesEx", Napi::Function::New(env, BindDrawRectangleRoundedLinesEx));
  exports.Set("BindDrawTriangle", Napi::Function::New(env, BindDrawTriangle));
  exports.Set("BindDrawTriangleLines", Napi::Function::New(env, BindDrawTriangleLines));
  exports.Set("BindDrawTriangleFan", Napi::Function::New(env, BindDrawTriangleFan));
  exports.Set("BindDrawTriangleStrip", Napi::Function::New(env, BindDrawTriangleStrip));
  exports.Set("BindDrawPoly", Napi::Function::New(env, BindDrawPoly));
  exports.Set("BindDrawPolyLines", Napi::Function::New(env, BindDrawPolyLines));
  exports.Set("BindDrawPolyLinesEx", Napi::Function::New(env, BindDrawPolyLinesEx));
  exports.Set("BindDrawSplineLinear", Napi::Function::New(env, BindDrawSplineLinear));
  exports.Set("BindDrawSplineBasis", Napi::Function::New(env, BindDrawSplineBasis));
  exports.Set("BindDrawSplineCatmullRom", Napi::Function::New(env, BindDrawSplineCatmullRom));
  exports.Set("BindDrawSplineBezierQuadratic", Napi::Function::New(env, BindDrawSplineBezierQuadratic));
  exports.Set("BindDrawSplineBezierCubic", Napi::Function::New(env, BindDrawSplineBezierCubic));
  exports.Set("BindDrawSplineSegmentLinear", Napi::Function::New(env, BindDrawSplineSegmentLinear));
  exports.Set("BindDrawSplineSegmentBasis", Napi::Function::New(env, BindDrawSplineSegmentBasis));
  exports.Set("BindDrawSplineSegmentCatmullRom", Napi::Function::New(env, BindDrawSplineSegmentCatmullRom));
  exports.Set("BindDrawSplineSegmentBezierQuadratic", Napi::Function::New(env, BindDrawSplineSegmentBezierQuadratic));
  exports.Set("BindDrawSplineSegmentBezierCubic", Napi::Function::New(env, BindDrawSplineSegmentBezierCubic));
  exports.Set("BindGetSplinePointLinear", Napi::Function::New(env, BindGetSplinePointLinear));
  exports.Set("BindGetSplinePointBasis", Napi::Function::New(env, BindGetSplinePointBasis));
  exports.Set("BindGetSplinePointCatmullRom", Napi::Function::New(env, BindGetSplinePointCatmullRom));
  exports.Set("BindGetSplinePointBezierQuad", Napi::Function::New(env, BindGetSplinePointBezierQuad));
  exports.Set("BindGetSplinePointBezierCubic", Napi::Function::New(env, BindGetSplinePointBezierCubic));
  exports.Set("BindCheckCollisionRecs", Napi::Function::New(env, BindCheckCollisionRecs));
  exports.Set("BindCheckCollisionCircles", Napi::Function::New(env, BindCheckCollisionCircles));
  exports.Set("BindCheckCollisionCircleRec", Napi::Function::New(env, BindCheckCollisionCircleRec));
  exports.Set("BindCheckCollisionCircleLine", Napi::Function::New(env, BindCheckCollisionCircleLine));
  exports.Set("BindCheckCollisionPointRec", Napi::Function::New(env, BindCheckCollisionPointRec));
  exports.Set("BindCheckCollisionPointCircle", Napi::Function::New(env, BindCheckCollisionPointCircle));
  exports.Set("BindCheckCollisionPointTriangle", Napi::Function::New(env, BindCheckCollisionPointTriangle));
  exports.Set("BindCheckCollisionPointLine", Napi::Function::New(env, BindCheckCollisionPointLine));
  exports.Set("BindCheckCollisionPointPoly", Napi::Function::New(env, BindCheckCollisionPointPoly));
  exports.Set("BindCheckCollisionLines", Napi::Function::New(env, BindCheckCollisionLines));
  exports.Set("BindGetCollisionRec", Napi::Function::New(env, BindGetCollisionRec));
  exports.Set("BindLoadImage", Napi::Function::New(env, BindLoadImage));
  exports.Set("BindLoadImageRaw", Napi::Function::New(env, BindLoadImageRaw));
  exports.Set("BindLoadImageAnim", Napi::Function::New(env, BindLoadImageAnim));
  exports.Set("BindLoadImageAnimFromMemory", Napi::Function::New(env, BindLoadImageAnimFromMemory));
  exports.Set("BindLoadImageFromMemory", Napi::Function::New(env, BindLoadImageFromMemory));
  exports.Set("BindLoadImageFromTexture", Napi::Function::New(env, BindLoadImageFromTexture));
  exports.Set("BindLoadImageFromScreen", Napi::Function::New(env, BindLoadImageFromScreen));
  exports.Set("BindIsImageValid", Napi::Function::New(env, BindIsImageValid));
  exports.Set("BindUnloadImage", Napi::Function::New(env, BindUnloadImage));
  exports.Set("BindExportImage", Napi::Function::New(env, BindExportImage));
  exports.Set("BindExportImageToMemory", Napi::Function::New(env, BindExportImageToMemory));
  exports.Set("BindExportImageAsCode", Napi::Function::New(env, BindExportImageAsCode));
  exports.Set("BindGenImageColor", Napi::Function::New(env, BindGenImageColor));
  exports.Set("BindGenImageGradientLinear", Napi::Function::New(env, BindGenImageGradientLinear));
  exports.Set("BindGenImageGradientRadial", Napi::Function::New(env, BindGenImageGradientRadial));
  exports.Set("BindGenImageGradientSquare", Napi::Function::New(env, BindGenImageGradientSquare));
  exports.Set("BindGenImageChecked", Napi::Function::New(env, BindGenImageChecked));
  exports.Set("BindGenImageWhiteNoise", Napi::Function::New(env, BindGenImageWhiteNoise));
  exports.Set("BindGenImagePerlinNoise", Napi::Function::New(env, BindGenImagePerlinNoise));
  exports.Set("BindGenImageCellular", Napi::Function::New(env, BindGenImageCellular));
  exports.Set("BindGenImageText", Napi::Function::New(env, BindGenImageText));
  exports.Set("BindImageCopy", Napi::Function::New(env, BindImageCopy));
  exports.Set("BindImageFromImage", Napi::Function::New(env, BindImageFromImage));
  exports.Set("BindImageFromChannel", Napi::Function::New(env, BindImageFromChannel));
  exports.Set("BindImageText", Napi::Function::New(env, BindImageText));
  exports.Set("BindImageTextEx", Napi::Function::New(env, BindImageTextEx));
  exports.Set("BindImageFormat", Napi::Function::New(env, BindImageFormat));
  exports.Set("BindImageToPOT", Napi::Function::New(env, BindImageToPOT));
  exports.Set("BindImageCrop", Napi::Function::New(env, BindImageCrop));
  exports.Set("BindImageAlphaCrop", Napi::Function::New(env, BindImageAlphaCrop));
  exports.Set("BindImageAlphaClear", Napi::Function::New(env, BindImageAlphaClear));
  exports.Set("BindImageAlphaMask", Napi::Function::New(env, BindImageAlphaMask));
  exports.Set("BindImageAlphaPremultiply", Napi::Function::New(env, BindImageAlphaPremultiply));
  exports.Set("BindImageBlurGaussian", Napi::Function::New(env, BindImageBlurGaussian));
  exports.Set("BindImageKernelConvolution", Napi::Function::New(env, BindImageKernelConvolution));
  exports.Set("BindImageResize", Napi::Function::New(env, BindImageResize));
  exports.Set("BindImageResizeNN", Napi::Function::New(env, BindImageResizeNN));
  exports.Set("BindImageResizeCanvas", Napi::Function::New(env, BindImageResizeCanvas));
  exports.Set("BindImageMipmaps", Napi::Function::New(env, BindImageMipmaps));
  exports.Set("BindImageDither", Napi::Function::New(env, BindImageDither));
  exports.Set("BindImageFlipVertical", Napi::Function::New(env, BindImageFlipVertical));
  exports.Set("BindImageFlipHorizontal", Napi::Function::New(env, BindImageFlipHorizontal));
  exports.Set("BindImageRotate", Napi::Function::New(env, BindImageRotate));
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
  exports.Set("BindImageDrawLineEx", Napi::Function::New(env, BindImageDrawLineEx));
  exports.Set("BindImageDrawCircle", Napi::Function::New(env, BindImageDrawCircle));
  exports.Set("BindImageDrawCircleV", Napi::Function::New(env, BindImageDrawCircleV));
  exports.Set("BindImageDrawCircleLines", Napi::Function::New(env, BindImageDrawCircleLines));
  exports.Set("BindImageDrawCircleLinesV", Napi::Function::New(env, BindImageDrawCircleLinesV));
  exports.Set("BindImageDrawRectangle", Napi::Function::New(env, BindImageDrawRectangle));
  exports.Set("BindImageDrawRectangleV", Napi::Function::New(env, BindImageDrawRectangleV));
  exports.Set("BindImageDrawRectangleRec", Napi::Function::New(env, BindImageDrawRectangleRec));
  exports.Set("BindImageDrawRectangleLines", Napi::Function::New(env, BindImageDrawRectangleLines));
  exports.Set("BindImageDrawTriangle", Napi::Function::New(env, BindImageDrawTriangle));
  exports.Set("BindImageDrawTriangleEx", Napi::Function::New(env, BindImageDrawTriangleEx));
  exports.Set("BindImageDrawTriangleLines", Napi::Function::New(env, BindImageDrawTriangleLines));
  exports.Set("BindImageDrawTriangleFan", Napi::Function::New(env, BindImageDrawTriangleFan));
  exports.Set("BindImageDrawTriangleStrip", Napi::Function::New(env, BindImageDrawTriangleStrip));
  exports.Set("BindImageDraw", Napi::Function::New(env, BindImageDraw));
  exports.Set("BindImageDrawText", Napi::Function::New(env, BindImageDrawText));
  exports.Set("BindImageDrawTextEx", Napi::Function::New(env, BindImageDrawTextEx));
  exports.Set("BindLoadTexture", Napi::Function::New(env, BindLoadTexture));
  exports.Set("BindLoadTextureFromImage", Napi::Function::New(env, BindLoadTextureFromImage));
  exports.Set("BindLoadTextureCubemap", Napi::Function::New(env, BindLoadTextureCubemap));
  exports.Set("BindLoadRenderTexture", Napi::Function::New(env, BindLoadRenderTexture));
  exports.Set("BindIsTextureValid", Napi::Function::New(env, BindIsTextureValid));
  exports.Set("BindUnloadTexture", Napi::Function::New(env, BindUnloadTexture));
  exports.Set("BindIsRenderTextureValid", Napi::Function::New(env, BindIsRenderTextureValid));
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
  exports.Set("BindDrawTexturePro", Napi::Function::New(env, BindDrawTexturePro));
  exports.Set("BindDrawTextureNPatch", Napi::Function::New(env, BindDrawTextureNPatch));
  exports.Set("BindColorIsEqual", Napi::Function::New(env, BindColorIsEqual));
  exports.Set("BindFade", Napi::Function::New(env, BindFade));
  exports.Set("BindColorToInt", Napi::Function::New(env, BindColorToInt));
  exports.Set("BindColorNormalize", Napi::Function::New(env, BindColorNormalize));
  exports.Set("BindColorFromNormalized", Napi::Function::New(env, BindColorFromNormalized));
  exports.Set("BindColorToHSV", Napi::Function::New(env, BindColorToHSV));
  exports.Set("BindColorFromHSV", Napi::Function::New(env, BindColorFromHSV));
  exports.Set("BindColorTint", Napi::Function::New(env, BindColorTint));
  exports.Set("BindColorBrightness", Napi::Function::New(env, BindColorBrightness));
  exports.Set("BindColorContrast", Napi::Function::New(env, BindColorContrast));
  exports.Set("BindColorAlpha", Napi::Function::New(env, BindColorAlpha));
  exports.Set("BindColorAlphaBlend", Napi::Function::New(env, BindColorAlphaBlend));
  exports.Set("BindColorLerp", Napi::Function::New(env, BindColorLerp));
  exports.Set("BindGetColor", Napi::Function::New(env, BindGetColor));
  exports.Set("BindGetPixelColor", Napi::Function::New(env, BindGetPixelColor));
  exports.Set("BindSetPixelColor", Napi::Function::New(env, BindSetPixelColor));
  exports.Set("BindGetPixelDataSize", Napi::Function::New(env, BindGetPixelDataSize));
  exports.Set("BindGetFontDefault", Napi::Function::New(env, BindGetFontDefault));
  exports.Set("BindLoadFont", Napi::Function::New(env, BindLoadFont));
  exports.Set("BindLoadFontEx", Napi::Function::New(env, BindLoadFontEx));
  exports.Set("BindLoadFontFromImage", Napi::Function::New(env, BindLoadFontFromImage));
  exports.Set("BindLoadFontFromMemory", Napi::Function::New(env, BindLoadFontFromMemory));
  exports.Set("BindIsFontValid", Napi::Function::New(env, BindIsFontValid));
  exports.Set("BindLoadFontData", Napi::Function::New(env, BindLoadFontData));
  exports.Set("BindGenImageFontAtlas", Napi::Function::New(env, BindGenImageFontAtlas));
  exports.Set("BindUnloadFontData", Napi::Function::New(env, BindUnloadFontData));
  exports.Set("BindUnloadFont", Napi::Function::New(env, BindUnloadFont));
  exports.Set("BindExportFontAsCode", Napi::Function::New(env, BindExportFontAsCode));
  exports.Set("BindDrawFPS", Napi::Function::New(env, BindDrawFPS));
  exports.Set("BindDrawText", Napi::Function::New(env, BindDrawText));
  exports.Set("BindDrawTextEx", Napi::Function::New(env, BindDrawTextEx));
  exports.Set("BindDrawTextPro", Napi::Function::New(env, BindDrawTextPro));
  exports.Set("BindDrawTextCodepoint", Napi::Function::New(env, BindDrawTextCodepoint));
  exports.Set("BindDrawTextCodepoints", Napi::Function::New(env, BindDrawTextCodepoints));
  exports.Set("BindSetTextLineSpacing", Napi::Function::New(env, BindSetTextLineSpacing));
  exports.Set("BindMeasureText", Napi::Function::New(env, BindMeasureText));
  exports.Set("BindMeasureTextEx", Napi::Function::New(env, BindMeasureTextEx));
  exports.Set("BindGetGlyphIndex", Napi::Function::New(env, BindGetGlyphIndex));
  exports.Set("BindGetGlyphInfo", Napi::Function::New(env, BindGetGlyphInfo));
  exports.Set("BindGetGlyphAtlasRec", Napi::Function::New(env, BindGetGlyphAtlasRec));
  exports.Set("BindLoadUTF8", Napi::Function::New(env, BindLoadUTF8));
  exports.Set("BindUnloadUTF8", Napi::Function::New(env, BindUnloadUTF8));
  exports.Set("BindLoadCodepoints", Napi::Function::New(env, BindLoadCodepoints));
  exports.Set("BindUnloadCodepoints", Napi::Function::New(env, BindUnloadCodepoints));
  exports.Set("BindGetCodepointCount", Napi::Function::New(env, BindGetCodepointCount));
  exports.Set("BindGetCodepoint", Napi::Function::New(env, BindGetCodepoint));
  exports.Set("BindGetCodepointNext", Napi::Function::New(env, BindGetCodepointNext));
  exports.Set("BindGetCodepointPrevious", Napi::Function::New(env, BindGetCodepointPrevious));
  exports.Set("BindCodepointToUTF8", Napi::Function::New(env, BindCodepointToUTF8));
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
  exports.Set("BindTextToSnake", Napi::Function::New(env, BindTextToSnake));
  exports.Set("BindTextToCamel", Napi::Function::New(env, BindTextToCamel));
  exports.Set("BindTextToInteger", Napi::Function::New(env, BindTextToInteger));
  exports.Set("BindTextToFloat", Napi::Function::New(env, BindTextToFloat));
  exports.Set("BindDrawLine3D", Napi::Function::New(env, BindDrawLine3D));
  exports.Set("BindDrawPoint3D", Napi::Function::New(env, BindDrawPoint3D));
  exports.Set("BindDrawCircle3D", Napi::Function::New(env, BindDrawCircle3D));
  exports.Set("BindDrawTriangle3D", Napi::Function::New(env, BindDrawTriangle3D));
  exports.Set("BindDrawTriangleStrip3D", Napi::Function::New(env, BindDrawTriangleStrip3D));
  exports.Set("BindDrawCube", Napi::Function::New(env, BindDrawCube));
  exports.Set("BindDrawCubeV", Napi::Function::New(env, BindDrawCubeV));
  exports.Set("BindDrawCubeWires", Napi::Function::New(env, BindDrawCubeWires));
  exports.Set("BindDrawCubeWiresV", Napi::Function::New(env, BindDrawCubeWiresV));
  exports.Set("BindDrawSphere", Napi::Function::New(env, BindDrawSphere));
  exports.Set("BindDrawSphereEx", Napi::Function::New(env, BindDrawSphereEx));
  exports.Set("BindDrawSphereWires", Napi::Function::New(env, BindDrawSphereWires));
  exports.Set("BindDrawCylinder", Napi::Function::New(env, BindDrawCylinder));
  exports.Set("BindDrawCylinderEx", Napi::Function::New(env, BindDrawCylinderEx));
  exports.Set("BindDrawCylinderWires", Napi::Function::New(env, BindDrawCylinderWires));
  exports.Set("BindDrawCylinderWiresEx", Napi::Function::New(env, BindDrawCylinderWiresEx));
  exports.Set("BindDrawCapsule", Napi::Function::New(env, BindDrawCapsule));
  exports.Set("BindDrawCapsuleWires", Napi::Function::New(env, BindDrawCapsuleWires));
  exports.Set("BindDrawPlane", Napi::Function::New(env, BindDrawPlane));
  exports.Set("BindDrawRay", Napi::Function::New(env, BindDrawRay));
  exports.Set("BindDrawGrid", Napi::Function::New(env, BindDrawGrid));
  exports.Set("BindLoadModel", Napi::Function::New(env, BindLoadModel));
  exports.Set("BindLoadModelFromMesh", Napi::Function::New(env, BindLoadModelFromMesh));
  exports.Set("BindIsModelValid", Napi::Function::New(env, BindIsModelValid));
  exports.Set("BindUnloadModel", Napi::Function::New(env, BindUnloadModel));
  exports.Set("BindGetModelBoundingBox", Napi::Function::New(env, BindGetModelBoundingBox));
  exports.Set("BindDrawModel", Napi::Function::New(env, BindDrawModel));
  exports.Set("BindDrawModelEx", Napi::Function::New(env, BindDrawModelEx));
  exports.Set("BindDrawModelWires", Napi::Function::New(env, BindDrawModelWires));
  exports.Set("BindDrawModelWiresEx", Napi::Function::New(env, BindDrawModelWiresEx));
  exports.Set("BindDrawModelPoints", Napi::Function::New(env, BindDrawModelPoints));
  exports.Set("BindDrawModelPointsEx", Napi::Function::New(env, BindDrawModelPointsEx));
  exports.Set("BindDrawBoundingBox", Napi::Function::New(env, BindDrawBoundingBox));
  exports.Set("BindDrawBillboard", Napi::Function::New(env, BindDrawBillboard));
  exports.Set("BindDrawBillboardRec", Napi::Function::New(env, BindDrawBillboardRec));
  exports.Set("BindDrawBillboardPro", Napi::Function::New(env, BindDrawBillboardPro));
  exports.Set("BindUploadMesh", Napi::Function::New(env, BindUploadMesh));
  exports.Set("BindUpdateMeshBuffer", Napi::Function::New(env, BindUpdateMeshBuffer));
  exports.Set("BindUnloadMesh", Napi::Function::New(env, BindUnloadMesh));
  exports.Set("BindGetMeshBoundingBox", Napi::Function::New(env, BindGetMeshBoundingBox));
  exports.Set("BindGenMeshTangents", Napi::Function::New(env, BindGenMeshTangents));
  exports.Set("BindExportMesh", Napi::Function::New(env, BindExportMesh));
  exports.Set("BindExportMeshAsCode", Napi::Function::New(env, BindExportMeshAsCode));
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
  exports.Set("BindCheckCollisionSpheres", Napi::Function::New(env, BindCheckCollisionSpheres));
  exports.Set("BindCheckCollisionBoxes", Napi::Function::New(env, BindCheckCollisionBoxes));
  exports.Set("BindCheckCollisionBoxSphere", Napi::Function::New(env, BindCheckCollisionBoxSphere));
  exports.Set("BindGetRayCollisionSphere", Napi::Function::New(env, BindGetRayCollisionSphere));
  exports.Set("BindGetRayCollisionBox", Napi::Function::New(env, BindGetRayCollisionBox));
  exports.Set("BindGetRayCollisionMesh", Napi::Function::New(env, BindGetRayCollisionMesh));
  exports.Set("BindGetRayCollisionTriangle", Napi::Function::New(env, BindGetRayCollisionTriangle));
  exports.Set("BindGetRayCollisionQuad", Napi::Function::New(env, BindGetRayCollisionQuad));
  exports.Set("BindInitAudioDevice", Napi::Function::New(env, BindInitAudioDevice));
  exports.Set("BindCloseAudioDevice", Napi::Function::New(env, BindCloseAudioDevice));
  exports.Set("BindIsAudioDeviceReady", Napi::Function::New(env, BindIsAudioDeviceReady));
  exports.Set("BindSetMasterVolume", Napi::Function::New(env, BindSetMasterVolume));
  exports.Set("BindGetMasterVolume", Napi::Function::New(env, BindGetMasterVolume));
  exports.Set("BindLoadWave", Napi::Function::New(env, BindLoadWave));
  exports.Set("BindLoadWaveFromMemory", Napi::Function::New(env, BindLoadWaveFromMemory));
  exports.Set("BindIsWaveValid", Napi::Function::New(env, BindIsWaveValid));
  exports.Set("BindLoadSound", Napi::Function::New(env, BindLoadSound));
  exports.Set("BindLoadSoundFromWave", Napi::Function::New(env, BindLoadSoundFromWave));
  exports.Set("BindLoadSoundAlias", Napi::Function::New(env, BindLoadSoundAlias));
  exports.Set("BindIsSoundValid", Napi::Function::New(env, BindIsSoundValid));
  exports.Set("BindUpdateSound", Napi::Function::New(env, BindUpdateSound));
  exports.Set("BindUnloadWave", Napi::Function::New(env, BindUnloadWave));
  exports.Set("BindUnloadSound", Napi::Function::New(env, BindUnloadSound));
  exports.Set("BindUnloadSoundAlias", Napi::Function::New(env, BindUnloadSoundAlias));
  exports.Set("BindExportWave", Napi::Function::New(env, BindExportWave));
  exports.Set("BindExportWaveAsCode", Napi::Function::New(env, BindExportWaveAsCode));
  exports.Set("BindPlaySound", Napi::Function::New(env, BindPlaySound));
  exports.Set("BindStopSound", Napi::Function::New(env, BindStopSound));
  exports.Set("BindPauseSound", Napi::Function::New(env, BindPauseSound));
  exports.Set("BindResumeSound", Napi::Function::New(env, BindResumeSound));
  exports.Set("BindIsSoundPlaying", Napi::Function::New(env, BindIsSoundPlaying));
  exports.Set("BindSetSoundVolume", Napi::Function::New(env, BindSetSoundVolume));
  exports.Set("BindSetSoundPitch", Napi::Function::New(env, BindSetSoundPitch));
  exports.Set("BindSetSoundPan", Napi::Function::New(env, BindSetSoundPan));
  exports.Set("BindWaveCopy", Napi::Function::New(env, BindWaveCopy));
  exports.Set("BindWaveCrop", Napi::Function::New(env, BindWaveCrop));
  exports.Set("BindWaveFormat", Napi::Function::New(env, BindWaveFormat));
  exports.Set("BindLoadWaveSamples", Napi::Function::New(env, BindLoadWaveSamples));
  exports.Set("BindUnloadWaveSamples", Napi::Function::New(env, BindUnloadWaveSamples));
  exports.Set("BindLoadMusicStream", Napi::Function::New(env, BindLoadMusicStream));
  exports.Set("BindLoadMusicStreamFromMemory", Napi::Function::New(env, BindLoadMusicStreamFromMemory));
  exports.Set("BindIsMusicValid", Napi::Function::New(env, BindIsMusicValid));
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
  exports.Set("BindSetMusicPan", Napi::Function::New(env, BindSetMusicPan));
  exports.Set("BindGetMusicTimeLength", Napi::Function::New(env, BindGetMusicTimeLength));
  exports.Set("BindGetMusicTimePlayed", Napi::Function::New(env, BindGetMusicTimePlayed));
  exports.Set("BindLoadAudioStream", Napi::Function::New(env, BindLoadAudioStream));
  exports.Set("BindIsAudioStreamValid", Napi::Function::New(env, BindIsAudioStreamValid));
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
  exports.Set("BindSetAudioStreamPan", Napi::Function::New(env, BindSetAudioStreamPan));
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
  exports.Set("BindClamp", Napi::Function::New(env, BindClamp));
  exports.Set("BindLerp", Napi::Function::New(env, BindLerp));
  exports.Set("BindNormalize", Napi::Function::New(env, BindNormalize));
  exports.Set("BindRemap", Napi::Function::New(env, BindRemap));
  exports.Set("BindWrap", Napi::Function::New(env, BindWrap));
  exports.Set("BindFloatEquals", Napi::Function::New(env, BindFloatEquals));
  exports.Set("BindVector2Zero", Napi::Function::New(env, BindVector2Zero));
  exports.Set("BindVector2One", Napi::Function::New(env, BindVector2One));
  exports.Set("BindVector2Add", Napi::Function::New(env, BindVector2Add));
  exports.Set("BindVector2AddValue", Napi::Function::New(env, BindVector2AddValue));
  exports.Set("BindVector2Subtract", Napi::Function::New(env, BindVector2Subtract));
  exports.Set("BindVector2SubtractValue", Napi::Function::New(env, BindVector2SubtractValue));
  exports.Set("BindVector2Length", Napi::Function::New(env, BindVector2Length));
  exports.Set("BindVector2LengthSqr", Napi::Function::New(env, BindVector2LengthSqr));
  exports.Set("BindVector2DotProduct", Napi::Function::New(env, BindVector2DotProduct));
  exports.Set("BindVector2Distance", Napi::Function::New(env, BindVector2Distance));
  exports.Set("BindVector2DistanceSqr", Napi::Function::New(env, BindVector2DistanceSqr));
  exports.Set("BindVector2Angle", Napi::Function::New(env, BindVector2Angle));
  exports.Set("BindVector2LineAngle", Napi::Function::New(env, BindVector2LineAngle));
  exports.Set("BindVector2Scale", Napi::Function::New(env, BindVector2Scale));
  exports.Set("BindVector2Multiply", Napi::Function::New(env, BindVector2Multiply));
  exports.Set("BindVector2Negate", Napi::Function::New(env, BindVector2Negate));
  exports.Set("BindVector2Divide", Napi::Function::New(env, BindVector2Divide));
  exports.Set("BindVector2Normalize", Napi::Function::New(env, BindVector2Normalize));
  exports.Set("BindVector2Transform", Napi::Function::New(env, BindVector2Transform));
  exports.Set("BindVector2Lerp", Napi::Function::New(env, BindVector2Lerp));
  exports.Set("BindVector2Reflect", Napi::Function::New(env, BindVector2Reflect));
  exports.Set("BindVector2Min", Napi::Function::New(env, BindVector2Min));
  exports.Set("BindVector2Max", Napi::Function::New(env, BindVector2Max));
  exports.Set("BindVector2Rotate", Napi::Function::New(env, BindVector2Rotate));
  exports.Set("BindVector2MoveTowards", Napi::Function::New(env, BindVector2MoveTowards));
  exports.Set("BindVector2Invert", Napi::Function::New(env, BindVector2Invert));
  exports.Set("BindVector2Clamp", Napi::Function::New(env, BindVector2Clamp));
  exports.Set("BindVector2ClampValue", Napi::Function::New(env, BindVector2ClampValue));
  exports.Set("BindVector2Equals", Napi::Function::New(env, BindVector2Equals));
  exports.Set("BindVector2Refract", Napi::Function::New(env, BindVector2Refract));
  exports.Set("BindVector3Zero", Napi::Function::New(env, BindVector3Zero));
  exports.Set("BindVector3One", Napi::Function::New(env, BindVector3One));
  exports.Set("BindVector3Add", Napi::Function::New(env, BindVector3Add));
  exports.Set("BindVector3AddValue", Napi::Function::New(env, BindVector3AddValue));
  exports.Set("BindVector3Subtract", Napi::Function::New(env, BindVector3Subtract));
  exports.Set("BindVector3SubtractValue", Napi::Function::New(env, BindVector3SubtractValue));
  exports.Set("BindVector3Scale", Napi::Function::New(env, BindVector3Scale));
  exports.Set("BindVector3Multiply", Napi::Function::New(env, BindVector3Multiply));
  exports.Set("BindVector3CrossProduct", Napi::Function::New(env, BindVector3CrossProduct));
  exports.Set("BindVector3Perpendicular", Napi::Function::New(env, BindVector3Perpendicular));
  exports.Set("BindVector3Length", Napi::Function::New(env, BindVector3Length));
  exports.Set("BindVector3LengthSqr", Napi::Function::New(env, BindVector3LengthSqr));
  exports.Set("BindVector3DotProduct", Napi::Function::New(env, BindVector3DotProduct));
  exports.Set("BindVector3Distance", Napi::Function::New(env, BindVector3Distance));
  exports.Set("BindVector3DistanceSqr", Napi::Function::New(env, BindVector3DistanceSqr));
  exports.Set("BindVector3Angle", Napi::Function::New(env, BindVector3Angle));
  exports.Set("BindVector3Negate", Napi::Function::New(env, BindVector3Negate));
  exports.Set("BindVector3Divide", Napi::Function::New(env, BindVector3Divide));
  exports.Set("BindVector3Normalize", Napi::Function::New(env, BindVector3Normalize));
  exports.Set("BindVector3Project", Napi::Function::New(env, BindVector3Project));
  exports.Set("BindVector3Reject", Napi::Function::New(env, BindVector3Reject));
  exports.Set("BindVector3OrthoNormalize", Napi::Function::New(env, BindVector3OrthoNormalize));
  exports.Set("BindVector3Transform", Napi::Function::New(env, BindVector3Transform));
  exports.Set("BindVector3RotateByQuaternion", Napi::Function::New(env, BindVector3RotateByQuaternion));
  exports.Set("BindVector3RotateByAxisAngle", Napi::Function::New(env, BindVector3RotateByAxisAngle));
  exports.Set("BindVector3MoveTowards", Napi::Function::New(env, BindVector3MoveTowards));
  exports.Set("BindVector3Lerp", Napi::Function::New(env, BindVector3Lerp));
  exports.Set("BindVector3CubicHermite", Napi::Function::New(env, BindVector3CubicHermite));
  exports.Set("BindVector3Reflect", Napi::Function::New(env, BindVector3Reflect));
  exports.Set("BindVector3Min", Napi::Function::New(env, BindVector3Min));
  exports.Set("BindVector3Max", Napi::Function::New(env, BindVector3Max));
  exports.Set("BindVector3Barycenter", Napi::Function::New(env, BindVector3Barycenter));
  exports.Set("BindVector3Unproject", Napi::Function::New(env, BindVector3Unproject));
  exports.Set("BindVector3Invert", Napi::Function::New(env, BindVector3Invert));
  exports.Set("BindVector3Clamp", Napi::Function::New(env, BindVector3Clamp));
  exports.Set("BindVector3ClampValue", Napi::Function::New(env, BindVector3ClampValue));
  exports.Set("BindVector3Equals", Napi::Function::New(env, BindVector3Equals));
  exports.Set("BindVector3Refract", Napi::Function::New(env, BindVector3Refract));
  exports.Set("BindVector4Zero", Napi::Function::New(env, BindVector4Zero));
  exports.Set("BindVector4One", Napi::Function::New(env, BindVector4One));
  exports.Set("BindVector4Add", Napi::Function::New(env, BindVector4Add));
  exports.Set("BindVector4AddValue", Napi::Function::New(env, BindVector4AddValue));
  exports.Set("BindVector4Subtract", Napi::Function::New(env, BindVector4Subtract));
  exports.Set("BindVector4SubtractValue", Napi::Function::New(env, BindVector4SubtractValue));
  exports.Set("BindVector4Length", Napi::Function::New(env, BindVector4Length));
  exports.Set("BindVector4LengthSqr", Napi::Function::New(env, BindVector4LengthSqr));
  exports.Set("BindVector4DotProduct", Napi::Function::New(env, BindVector4DotProduct));
  exports.Set("BindVector4Distance", Napi::Function::New(env, BindVector4Distance));
  exports.Set("BindVector4DistanceSqr", Napi::Function::New(env, BindVector4DistanceSqr));
  exports.Set("BindVector4Scale", Napi::Function::New(env, BindVector4Scale));
  exports.Set("BindVector4Multiply", Napi::Function::New(env, BindVector4Multiply));
  exports.Set("BindVector4Negate", Napi::Function::New(env, BindVector4Negate));
  exports.Set("BindVector4Divide", Napi::Function::New(env, BindVector4Divide));
  exports.Set("BindVector4Normalize", Napi::Function::New(env, BindVector4Normalize));
  exports.Set("BindVector4Min", Napi::Function::New(env, BindVector4Min));
  exports.Set("BindVector4Max", Napi::Function::New(env, BindVector4Max));
  exports.Set("BindVector4Lerp", Napi::Function::New(env, BindVector4Lerp));
  exports.Set("BindVector4MoveTowards", Napi::Function::New(env, BindVector4MoveTowards));
  exports.Set("BindVector4Invert", Napi::Function::New(env, BindVector4Invert));
  exports.Set("BindVector4Equals", Napi::Function::New(env, BindVector4Equals));
  exports.Set("BindMatrixDeterminant", Napi::Function::New(env, BindMatrixDeterminant));
  exports.Set("BindMatrixTrace", Napi::Function::New(env, BindMatrixTrace));
  exports.Set("BindMatrixTranspose", Napi::Function::New(env, BindMatrixTranspose));
  exports.Set("BindMatrixInvert", Napi::Function::New(env, BindMatrixInvert));
  exports.Set("BindMatrixIdentity", Napi::Function::New(env, BindMatrixIdentity));
  exports.Set("BindMatrixAdd", Napi::Function::New(env, BindMatrixAdd));
  exports.Set("BindMatrixSubtract", Napi::Function::New(env, BindMatrixSubtract));
  exports.Set("BindMatrixMultiply", Napi::Function::New(env, BindMatrixMultiply));
  exports.Set("BindMatrixTranslate", Napi::Function::New(env, BindMatrixTranslate));
  exports.Set("BindMatrixRotate", Napi::Function::New(env, BindMatrixRotate));
  exports.Set("BindMatrixRotateX", Napi::Function::New(env, BindMatrixRotateX));
  exports.Set("BindMatrixRotateY", Napi::Function::New(env, BindMatrixRotateY));
  exports.Set("BindMatrixRotateZ", Napi::Function::New(env, BindMatrixRotateZ));
  exports.Set("BindMatrixRotateXYZ", Napi::Function::New(env, BindMatrixRotateXYZ));
  exports.Set("BindMatrixRotateZYX", Napi::Function::New(env, BindMatrixRotateZYX));
  exports.Set("BindMatrixScale", Napi::Function::New(env, BindMatrixScale));
  exports.Set("BindMatrixFrustum", Napi::Function::New(env, BindMatrixFrustum));
  exports.Set("BindMatrixPerspective", Napi::Function::New(env, BindMatrixPerspective));
  exports.Set("BindMatrixOrtho", Napi::Function::New(env, BindMatrixOrtho));
  exports.Set("BindMatrixLookAt", Napi::Function::New(env, BindMatrixLookAt));
  exports.Set("BindQuaternionAdd", Napi::Function::New(env, BindQuaternionAdd));
  exports.Set("BindQuaternionAddValue", Napi::Function::New(env, BindQuaternionAddValue));
  exports.Set("BindQuaternionSubtract", Napi::Function::New(env, BindQuaternionSubtract));
  exports.Set("BindQuaternionSubtractValue", Napi::Function::New(env, BindQuaternionSubtractValue));
  exports.Set("BindQuaternionIdentity", Napi::Function::New(env, BindQuaternionIdentity));
  exports.Set("BindQuaternionLength", Napi::Function::New(env, BindQuaternionLength));
  exports.Set("BindQuaternionNormalize", Napi::Function::New(env, BindQuaternionNormalize));
  exports.Set("BindQuaternionInvert", Napi::Function::New(env, BindQuaternionInvert));
  exports.Set("BindQuaternionMultiply", Napi::Function::New(env, BindQuaternionMultiply));
  exports.Set("BindQuaternionScale", Napi::Function::New(env, BindQuaternionScale));
  exports.Set("BindQuaternionDivide", Napi::Function::New(env, BindQuaternionDivide));
  exports.Set("BindQuaternionLerp", Napi::Function::New(env, BindQuaternionLerp));
  exports.Set("BindQuaternionNlerp", Napi::Function::New(env, BindQuaternionNlerp));
  exports.Set("BindQuaternionSlerp", Napi::Function::New(env, BindQuaternionSlerp));
  exports.Set("BindQuaternionCubicHermiteSpline", Napi::Function::New(env, BindQuaternionCubicHermiteSpline));
  exports.Set("BindQuaternionFromVector3ToVector3", Napi::Function::New(env, BindQuaternionFromVector3ToVector3));
  exports.Set("BindQuaternionFromMatrix", Napi::Function::New(env, BindQuaternionFromMatrix));
  exports.Set("BindQuaternionToMatrix", Napi::Function::New(env, BindQuaternionToMatrix));
  exports.Set("BindQuaternionFromAxisAngle", Napi::Function::New(env, BindQuaternionFromAxisAngle));
  exports.Set("BindQuaternionToAxisAngle", Napi::Function::New(env, BindQuaternionToAxisAngle));
  exports.Set("BindQuaternionFromEuler", Napi::Function::New(env, BindQuaternionFromEuler));
  exports.Set("BindQuaternionToEuler", Napi::Function::New(env, BindQuaternionToEuler));
  exports.Set("BindQuaternionTransform", Napi::Function::New(env, BindQuaternionTransform));
  exports.Set("BindQuaternionEquals", Napi::Function::New(env, BindQuaternionEquals));
  exports.Set("BindMatrixDecompose", Napi::Function::New(env, BindMatrixDecompose));
  exports.Set("BindGuiEnable", Napi::Function::New(env, BindGuiEnable));
  exports.Set("BindGuiDisable", Napi::Function::New(env, BindGuiDisable));
  exports.Set("BindGuiLock", Napi::Function::New(env, BindGuiLock));
  exports.Set("BindGuiUnlock", Napi::Function::New(env, BindGuiUnlock));
  exports.Set("BindGuiIsLocked", Napi::Function::New(env, BindGuiIsLocked));
  exports.Set("BindGuiSetAlpha", Napi::Function::New(env, BindGuiSetAlpha));
  exports.Set("BindGuiSetState", Napi::Function::New(env, BindGuiSetState));
  exports.Set("BindGuiGetState", Napi::Function::New(env, BindGuiGetState));
  exports.Set("BindGuiSetFont", Napi::Function::New(env, BindGuiSetFont));
  exports.Set("BindGuiGetFont", Napi::Function::New(env, BindGuiGetFont));
  exports.Set("BindGuiSetStyle", Napi::Function::New(env, BindGuiSetStyle));
  exports.Set("BindGuiGetStyle", Napi::Function::New(env, BindGuiGetStyle));
  exports.Set("BindGuiLoadStyle", Napi::Function::New(env, BindGuiLoadStyle));
  exports.Set("BindGuiLoadStyleDefault", Napi::Function::New(env, BindGuiLoadStyleDefault));
  exports.Set("BindGuiEnableTooltip", Napi::Function::New(env, BindGuiEnableTooltip));
  exports.Set("BindGuiDisableTooltip", Napi::Function::New(env, BindGuiDisableTooltip));
  exports.Set("BindGuiSetTooltip", Napi::Function::New(env, BindGuiSetTooltip));
  exports.Set("BindGuiIconText", Napi::Function::New(env, BindGuiIconText));
  exports.Set("BindGuiSetIconScale", Napi::Function::New(env, BindGuiSetIconScale));
  exports.Set("BindGuiGetIcons", Napi::Function::New(env, BindGuiGetIcons));
  exports.Set("BindGuiLoadIcons", Napi::Function::New(env, BindGuiLoadIcons));
  exports.Set("BindGuiDrawIcon", Napi::Function::New(env, BindGuiDrawIcon));
  exports.Set("BindGuiWindowBox", Napi::Function::New(env, BindGuiWindowBox));
  exports.Set("BindGuiGroupBox", Napi::Function::New(env, BindGuiGroupBox));
  exports.Set("BindGuiLine", Napi::Function::New(env, BindGuiLine));
  exports.Set("BindGuiPanel", Napi::Function::New(env, BindGuiPanel));
  exports.Set("BindGuiTabBar", Napi::Function::New(env, BindGuiTabBar));
  exports.Set("BindGuiScrollPanel", Napi::Function::New(env, BindGuiScrollPanel));
  exports.Set("BindGuiLabel", Napi::Function::New(env, BindGuiLabel));
  exports.Set("BindGuiButton", Napi::Function::New(env, BindGuiButton));
  exports.Set("BindGuiLabelButton", Napi::Function::New(env, BindGuiLabelButton));
  exports.Set("BindGuiToggle", Napi::Function::New(env, BindGuiToggle));
  exports.Set("BindGuiToggleGroup", Napi::Function::New(env, BindGuiToggleGroup));
  exports.Set("BindGuiToggleSlider", Napi::Function::New(env, BindGuiToggleSlider));
  exports.Set("BindGuiCheckBox", Napi::Function::New(env, BindGuiCheckBox));
  exports.Set("BindGuiComboBox", Napi::Function::New(env, BindGuiComboBox));
  exports.Set("BindGuiDropdownBox", Napi::Function::New(env, BindGuiDropdownBox));
  exports.Set("BindGuiSpinner", Napi::Function::New(env, BindGuiSpinner));
  exports.Set("BindGuiValueBox", Napi::Function::New(env, BindGuiValueBox));
  exports.Set("BindGuiValueBoxFloat", Napi::Function::New(env, BindGuiValueBoxFloat));
  exports.Set("BindGuiTextBox", Napi::Function::New(env, BindGuiTextBox));
  exports.Set("BindGuiSlider", Napi::Function::New(env, BindGuiSlider));
  exports.Set("BindGuiSliderBar", Napi::Function::New(env, BindGuiSliderBar));
  exports.Set("BindGuiProgressBar", Napi::Function::New(env, BindGuiProgressBar));
  exports.Set("BindGuiStatusBar", Napi::Function::New(env, BindGuiStatusBar));
  exports.Set("BindGuiDummyRec", Napi::Function::New(env, BindGuiDummyRec));
  exports.Set("BindGuiGrid", Napi::Function::New(env, BindGuiGrid));
  exports.Set("BindGuiListView", Napi::Function::New(env, BindGuiListView));
  exports.Set("BindGuiListViewEx", Napi::Function::New(env, BindGuiListViewEx));
  exports.Set("BindGuiMessageBox", Napi::Function::New(env, BindGuiMessageBox));
  exports.Set("BindGuiTextInputBox", Napi::Function::New(env, BindGuiTextInputBox));
  exports.Set("BindGuiColorPicker", Napi::Function::New(env, BindGuiColorPicker));
  exports.Set("BindGuiColorPanel", Napi::Function::New(env, BindGuiColorPanel));
  exports.Set("BindGuiColorBarAlpha", Napi::Function::New(env, BindGuiColorBarAlpha));
  exports.Set("BindGuiColorBarHue", Napi::Function::New(env, BindGuiColorBarHue));
  exports.Set("BindGuiColorPickerHSV", Napi::Function::New(env, BindGuiColorPickerHSV));
  exports.Set("BindGuiColorPanelHSV", Napi::Function::New(env, BindGuiColorPanelHSV));
  exports.Set("BindrlMatrixMode", Napi::Function::New(env, BindrlMatrixMode));
  exports.Set("BindrlPushMatrix", Napi::Function::New(env, BindrlPushMatrix));
  exports.Set("BindrlPopMatrix", Napi::Function::New(env, BindrlPopMatrix));
  exports.Set("BindrlLoadIdentity", Napi::Function::New(env, BindrlLoadIdentity));
  exports.Set("BindrlTranslatef", Napi::Function::New(env, BindrlTranslatef));
  exports.Set("BindrlRotatef", Napi::Function::New(env, BindrlRotatef));
  exports.Set("BindrlScalef", Napi::Function::New(env, BindrlScalef));
  exports.Set("BindrlMultMatrixf", Napi::Function::New(env, BindrlMultMatrixf));
  exports.Set("BindrlFrustum", Napi::Function::New(env, BindrlFrustum));
  exports.Set("BindrlOrtho", Napi::Function::New(env, BindrlOrtho));
  exports.Set("BindrlViewport", Napi::Function::New(env, BindrlViewport));
  exports.Set("BindrlSetClipPlanes", Napi::Function::New(env, BindrlSetClipPlanes));
  exports.Set("BindrlGetCullDistanceNear", Napi::Function::New(env, BindrlGetCullDistanceNear));
  exports.Set("BindrlGetCullDistanceFar", Napi::Function::New(env, BindrlGetCullDistanceFar));
  exports.Set("BindrlBegin", Napi::Function::New(env, BindrlBegin));
  exports.Set("BindrlEnd", Napi::Function::New(env, BindrlEnd));
  exports.Set("BindrlVertex2i", Napi::Function::New(env, BindrlVertex2i));
  exports.Set("BindrlVertex2f", Napi::Function::New(env, BindrlVertex2f));
  exports.Set("BindrlVertex3f", Napi::Function::New(env, BindrlVertex3f));
  exports.Set("BindrlTexCoord2f", Napi::Function::New(env, BindrlTexCoord2f));
  exports.Set("BindrlNormal3f", Napi::Function::New(env, BindrlNormal3f));
  exports.Set("BindrlColor4ub", Napi::Function::New(env, BindrlColor4ub));
  exports.Set("BindrlColor3f", Napi::Function::New(env, BindrlColor3f));
  exports.Set("BindrlColor4f", Napi::Function::New(env, BindrlColor4f));
  exports.Set("BindrlEnableVertexArray", Napi::Function::New(env, BindrlEnableVertexArray));
  exports.Set("BindrlDisableVertexArray", Napi::Function::New(env, BindrlDisableVertexArray));
  exports.Set("BindrlEnableVertexBuffer", Napi::Function::New(env, BindrlEnableVertexBuffer));
  exports.Set("BindrlDisableVertexBuffer", Napi::Function::New(env, BindrlDisableVertexBuffer));
  exports.Set("BindrlEnableVertexBufferElement", Napi::Function::New(env, BindrlEnableVertexBufferElement));
  exports.Set("BindrlDisableVertexBufferElement", Napi::Function::New(env, BindrlDisableVertexBufferElement));
  exports.Set("BindrlEnableVertexAttribute", Napi::Function::New(env, BindrlEnableVertexAttribute));
  exports.Set("BindrlDisableVertexAttribute", Napi::Function::New(env, BindrlDisableVertexAttribute));
  exports.Set("BindrlActiveTextureSlot", Napi::Function::New(env, BindrlActiveTextureSlot));
  exports.Set("BindrlEnableTexture", Napi::Function::New(env, BindrlEnableTexture));
  exports.Set("BindrlDisableTexture", Napi::Function::New(env, BindrlDisableTexture));
  exports.Set("BindrlEnableTextureCubemap", Napi::Function::New(env, BindrlEnableTextureCubemap));
  exports.Set("BindrlDisableTextureCubemap", Napi::Function::New(env, BindrlDisableTextureCubemap));
  exports.Set("BindrlTextureParameters", Napi::Function::New(env, BindrlTextureParameters));
  exports.Set("BindrlCubemapParameters", Napi::Function::New(env, BindrlCubemapParameters));
  exports.Set("BindrlEnableShader", Napi::Function::New(env, BindrlEnableShader));
  exports.Set("BindrlDisableShader", Napi::Function::New(env, BindrlDisableShader));
  exports.Set("BindrlEnableFramebuffer", Napi::Function::New(env, BindrlEnableFramebuffer));
  exports.Set("BindrlDisableFramebuffer", Napi::Function::New(env, BindrlDisableFramebuffer));
  exports.Set("BindrlGetActiveFramebuffer", Napi::Function::New(env, BindrlGetActiveFramebuffer));
  exports.Set("BindrlActiveDrawBuffers", Napi::Function::New(env, BindrlActiveDrawBuffers));
  exports.Set("BindrlBlitFramebuffer", Napi::Function::New(env, BindrlBlitFramebuffer));
  exports.Set("BindrlBindFramebuffer", Napi::Function::New(env, BindrlBindFramebuffer));
  exports.Set("BindrlEnableColorBlend", Napi::Function::New(env, BindrlEnableColorBlend));
  exports.Set("BindrlDisableColorBlend", Napi::Function::New(env, BindrlDisableColorBlend));
  exports.Set("BindrlEnableDepthTest", Napi::Function::New(env, BindrlEnableDepthTest));
  exports.Set("BindrlDisableDepthTest", Napi::Function::New(env, BindrlDisableDepthTest));
  exports.Set("BindrlEnableDepthMask", Napi::Function::New(env, BindrlEnableDepthMask));
  exports.Set("BindrlDisableDepthMask", Napi::Function::New(env, BindrlDisableDepthMask));
  exports.Set("BindrlEnableBackfaceCulling", Napi::Function::New(env, BindrlEnableBackfaceCulling));
  exports.Set("BindrlDisableBackfaceCulling", Napi::Function::New(env, BindrlDisableBackfaceCulling));
  exports.Set("BindrlColorMask", Napi::Function::New(env, BindrlColorMask));
  exports.Set("BindrlSetCullFace", Napi::Function::New(env, BindrlSetCullFace));
  exports.Set("BindrlEnableScissorTest", Napi::Function::New(env, BindrlEnableScissorTest));
  exports.Set("BindrlDisableScissorTest", Napi::Function::New(env, BindrlDisableScissorTest));
  exports.Set("BindrlScissor", Napi::Function::New(env, BindrlScissor));
  exports.Set("BindrlEnableWireMode", Napi::Function::New(env, BindrlEnableWireMode));
  exports.Set("BindrlEnablePointMode", Napi::Function::New(env, BindrlEnablePointMode));
  exports.Set("BindrlDisableWireMode", Napi::Function::New(env, BindrlDisableWireMode));
  exports.Set("BindrlSetLineWidth", Napi::Function::New(env, BindrlSetLineWidth));
  exports.Set("BindrlGetLineWidth", Napi::Function::New(env, BindrlGetLineWidth));
  exports.Set("BindrlEnableSmoothLines", Napi::Function::New(env, BindrlEnableSmoothLines));
  exports.Set("BindrlDisableSmoothLines", Napi::Function::New(env, BindrlDisableSmoothLines));
  exports.Set("BindrlEnableStereoRender", Napi::Function::New(env, BindrlEnableStereoRender));
  exports.Set("BindrlDisableStereoRender", Napi::Function::New(env, BindrlDisableStereoRender));
  exports.Set("BindrlIsStereoRenderEnabled", Napi::Function::New(env, BindrlIsStereoRenderEnabled));
  exports.Set("BindrlClearColor", Napi::Function::New(env, BindrlClearColor));
  exports.Set("BindrlClearScreenBuffers", Napi::Function::New(env, BindrlClearScreenBuffers));
  exports.Set("BindrlCheckErrors", Napi::Function::New(env, BindrlCheckErrors));
  exports.Set("BindrlSetBlendMode", Napi::Function::New(env, BindrlSetBlendMode));
  exports.Set("BindrlSetBlendFactors", Napi::Function::New(env, BindrlSetBlendFactors));
  exports.Set("BindrlSetBlendFactorsSeparate", Napi::Function::New(env, BindrlSetBlendFactorsSeparate));
  exports.Set("BindrlglInit", Napi::Function::New(env, BindrlglInit));
  exports.Set("BindrlglClose", Napi::Function::New(env, BindrlglClose));
  exports.Set("BindrlLoadExtensions", Napi::Function::New(env, BindrlLoadExtensions));
  exports.Set("BindrlGetVersion", Napi::Function::New(env, BindrlGetVersion));
  exports.Set("BindrlSetFramebufferWidth", Napi::Function::New(env, BindrlSetFramebufferWidth));
  exports.Set("BindrlGetFramebufferWidth", Napi::Function::New(env, BindrlGetFramebufferWidth));
  exports.Set("BindrlSetFramebufferHeight", Napi::Function::New(env, BindrlSetFramebufferHeight));
  exports.Set("BindrlGetFramebufferHeight", Napi::Function::New(env, BindrlGetFramebufferHeight));
  exports.Set("BindrlGetTextureIdDefault", Napi::Function::New(env, BindrlGetTextureIdDefault));
  exports.Set("BindrlGetShaderIdDefault", Napi::Function::New(env, BindrlGetShaderIdDefault));
  exports.Set("BindrlGetShaderLocsDefault", Napi::Function::New(env, BindrlGetShaderLocsDefault));
  exports.Set("BindrlLoadRenderBatch", Napi::Function::New(env, BindrlLoadRenderBatch));
  exports.Set("BindrlUnloadRenderBatch", Napi::Function::New(env, BindrlUnloadRenderBatch));
  exports.Set("BindrlDrawRenderBatch", Napi::Function::New(env, BindrlDrawRenderBatch));
  exports.Set("BindrlSetRenderBatchActive", Napi::Function::New(env, BindrlSetRenderBatchActive));
  exports.Set("BindrlDrawRenderBatchActive", Napi::Function::New(env, BindrlDrawRenderBatchActive));
  exports.Set("BindrlCheckRenderBatchLimit", Napi::Function::New(env, BindrlCheckRenderBatchLimit));
  exports.Set("BindrlSetTexture", Napi::Function::New(env, BindrlSetTexture));
  exports.Set("BindrlLoadVertexArray", Napi::Function::New(env, BindrlLoadVertexArray));
  exports.Set("BindrlLoadVertexBuffer", Napi::Function::New(env, BindrlLoadVertexBuffer));
  exports.Set("BindrlLoadVertexBufferElement", Napi::Function::New(env, BindrlLoadVertexBufferElement));
  exports.Set("BindrlUpdateVertexBuffer", Napi::Function::New(env, BindrlUpdateVertexBuffer));
  exports.Set("BindrlUpdateVertexBufferElements", Napi::Function::New(env, BindrlUpdateVertexBufferElements));
  exports.Set("BindrlUnloadVertexArray", Napi::Function::New(env, BindrlUnloadVertexArray));
  exports.Set("BindrlUnloadVertexBuffer", Napi::Function::New(env, BindrlUnloadVertexBuffer));
  exports.Set("BindrlSetVertexAttribute", Napi::Function::New(env, BindrlSetVertexAttribute));
  exports.Set("BindrlSetVertexAttributeDivisor", Napi::Function::New(env, BindrlSetVertexAttributeDivisor));
  exports.Set("BindrlSetVertexAttributeDefault", Napi::Function::New(env, BindrlSetVertexAttributeDefault));
  exports.Set("BindrlDrawVertexArray", Napi::Function::New(env, BindrlDrawVertexArray));
  exports.Set("BindrlDrawVertexArrayElements", Napi::Function::New(env, BindrlDrawVertexArrayElements));
  exports.Set("BindrlDrawVertexArrayInstanced", Napi::Function::New(env, BindrlDrawVertexArrayInstanced));
  exports.Set("BindrlDrawVertexArrayElementsInstanced", Napi::Function::New(env, BindrlDrawVertexArrayElementsInstanced));
  exports.Set("BindrlLoadTexture", Napi::Function::New(env, BindrlLoadTexture));
  exports.Set("BindrlLoadTextureDepth", Napi::Function::New(env, BindrlLoadTextureDepth));
  exports.Set("BindrlLoadTextureCubemap", Napi::Function::New(env, BindrlLoadTextureCubemap));
  exports.Set("BindrlUpdateTexture", Napi::Function::New(env, BindrlUpdateTexture));
  exports.Set("BindrlGetGlTextureFormats", Napi::Function::New(env, BindrlGetGlTextureFormats));
  exports.Set("BindrlGetPixelFormatName", Napi::Function::New(env, BindrlGetPixelFormatName));
  exports.Set("BindrlUnloadTexture", Napi::Function::New(env, BindrlUnloadTexture));
  exports.Set("BindrlGenTextureMipmaps", Napi::Function::New(env, BindrlGenTextureMipmaps));
  exports.Set("BindrlReadTexturePixels", Napi::Function::New(env, BindrlReadTexturePixels));
  exports.Set("BindrlReadScreenPixels", Napi::Function::New(env, BindrlReadScreenPixels));
  exports.Set("BindrlLoadFramebuffer", Napi::Function::New(env, BindrlLoadFramebuffer));
  exports.Set("BindrlFramebufferAttach", Napi::Function::New(env, BindrlFramebufferAttach));
  exports.Set("BindrlFramebufferComplete", Napi::Function::New(env, BindrlFramebufferComplete));
  exports.Set("BindrlUnloadFramebuffer", Napi::Function::New(env, BindrlUnloadFramebuffer));
  exports.Set("BindrlLoadShaderCode", Napi::Function::New(env, BindrlLoadShaderCode));
  exports.Set("BindrlCompileShader", Napi::Function::New(env, BindrlCompileShader));
  exports.Set("BindrlLoadShaderProgram", Napi::Function::New(env, BindrlLoadShaderProgram));
  exports.Set("BindrlUnloadShaderProgram", Napi::Function::New(env, BindrlUnloadShaderProgram));
  exports.Set("BindrlGetLocationUniform", Napi::Function::New(env, BindrlGetLocationUniform));
  exports.Set("BindrlGetLocationAttrib", Napi::Function::New(env, BindrlGetLocationAttrib));
  exports.Set("BindrlSetUniform", Napi::Function::New(env, BindrlSetUniform));
  exports.Set("BindrlSetUniformMatrix", Napi::Function::New(env, BindrlSetUniformMatrix));
  exports.Set("BindrlSetUniformMatrices", Napi::Function::New(env, BindrlSetUniformMatrices));
  exports.Set("BindrlSetUniformSampler", Napi::Function::New(env, BindrlSetUniformSampler));
  exports.Set("BindrlSetShader", Napi::Function::New(env, BindrlSetShader));
  exports.Set("BindrlLoadComputeShaderProgram", Napi::Function::New(env, BindrlLoadComputeShaderProgram));
  exports.Set("BindrlComputeShaderDispatch", Napi::Function::New(env, BindrlComputeShaderDispatch));
  exports.Set("BindrlLoadShaderBuffer", Napi::Function::New(env, BindrlLoadShaderBuffer));
  exports.Set("BindrlUnloadShaderBuffer", Napi::Function::New(env, BindrlUnloadShaderBuffer));
  exports.Set("BindrlUpdateShaderBuffer", Napi::Function::New(env, BindrlUpdateShaderBuffer));
  exports.Set("BindrlBindShaderBuffer", Napi::Function::New(env, BindrlBindShaderBuffer));
  exports.Set("BindrlReadShaderBuffer", Napi::Function::New(env, BindrlReadShaderBuffer));
  exports.Set("BindrlCopyShaderBuffer", Napi::Function::New(env, BindrlCopyShaderBuffer));
  exports.Set("BindrlGetShaderBufferSize", Napi::Function::New(env, BindrlGetShaderBufferSize));
  exports.Set("BindrlBindImageTexture", Napi::Function::New(env, BindrlBindImageTexture));
  exports.Set("BindrlGetMatrixModelview", Napi::Function::New(env, BindrlGetMatrixModelview));
  exports.Set("BindrlGetMatrixProjection", Napi::Function::New(env, BindrlGetMatrixProjection));
  exports.Set("BindrlGetMatrixTransform", Napi::Function::New(env, BindrlGetMatrixTransform));
  exports.Set("BindrlGetMatrixProjectionStereo", Napi::Function::New(env, BindrlGetMatrixProjectionStereo));
  exports.Set("BindrlGetMatrixViewOffsetStereo", Napi::Function::New(env, BindrlGetMatrixViewOffsetStereo));
  exports.Set("BindrlSetMatrixProjection", Napi::Function::New(env, BindrlSetMatrixProjection));
  exports.Set("BindrlSetMatrixModelview", Napi::Function::New(env, BindrlSetMatrixModelview));
  exports.Set("BindrlSetMatrixProjectionStereo", Napi::Function::New(env, BindrlSetMatrixProjectionStereo));
  exports.Set("BindrlSetMatrixViewOffsetStereo", Napi::Function::New(env, BindrlSetMatrixViewOffsetStereo));
  exports.Set("BindrlLoadDrawCube", Napi::Function::New(env, BindrlLoadDrawCube));
  exports.Set("BindrlLoadDrawQuad", Napi::Function::New(env, BindrlLoadDrawQuad));

  exports.Set("BindSetShaderFloat", Napi::Function::New(env, BindSetShaderFloat));
  exports.Set("BindSetShaderInt", Napi::Function::New(env, BindSetShaderInt));
  exports.Set("BindSetShaderVec2", Napi::Function::New(env, BindSetShaderVec2));
  exports.Set("BindSetShaderVec3", Napi::Function::New(env, BindSetShaderVec3));
  exports.Set("BindSetShaderVec4", Napi::Function::New(env, BindSetShaderVec4));

  return exports;
}

NODE_API_MODULE(addon, Init);


// GENERATED CODE: DO NOT MODIFY
#include <string>
#include <napi.h>
#include <iostream>
#include "raylib.h"
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

float floatFromValue(const Napi::CallbackInfo& info, int* index) {
  return info[(*index) += 1].As<Napi::Number>();
}
int intFromValue(const Napi::CallbackInfo& info, int* index) {
  std::cout<< *index << std::endl;
  return info[(*index) += 1].As<Napi::Number>();
}
void * pointerFromValue(const Napi::CallbackInfo& info, int* index) {
  return (void *) info[(*index) += 1].As<Napi::Number>().Int64Value();
}
unsigned char unsignedcharFromValue(const Napi::CallbackInfo& info, int* index) {
  return info[(*index) += 1].As<Napi::Number>().Uint32Value();
}
unsigned int unsignedintFromValue(const Napi::CallbackInfo& info, int* index) {
  return info[(*index) += 1].As<Napi::Number>();
}
bool boolFromValue(const Napi::CallbackInfo& info, int* index) {
  return info[(*index) += 1].As<Napi::Boolean>();
}
const char * stringFromValue(const Napi::CallbackInfo& info, int* index) {
  std::cout<< *index << std::endl;
  return info[(*index) += 1].As<Napi::String>().Utf8Value().c_str();
}
char charFromValue(const Napi::CallbackInfo& info, int* index) {
  return info[(*index) += 1].As<Napi::Number>().Uint32Value();
}

// Convert structs from Napi::Values in info[] arguments

Vector2 Vector2FromValue(const Napi::CallbackInfo& info, int* index) {
  return (Vector2) {
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1)
  };
}

Vector3 Vector3FromValue(const Napi::CallbackInfo& info, int* index) {
  return (Vector3) {
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1)
  };
}

Vector4 Vector4FromValue(const Napi::CallbackInfo& info, int* index) {
  return (Vector4) {
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1)
  };
}

Matrix MatrixFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Matrix) {
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1)
  };
}

Color ColorFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Color) {
     unsignedcharFromValue(info, index += 1),
     unsignedcharFromValue(info, index += 1),
     unsignedcharFromValue(info, index += 1),
     unsignedcharFromValue(info, index += 1)
  };
}

Rectangle RectangleFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Rectangle) {
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1)
  };
}

Image ImageFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Image) {
     (void *) pointerFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1)
  };
}

Texture TextureFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Texture) {
     unsignedintFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1)
  };
}

RenderTexture RenderTextureFromValue(const Napi::CallbackInfo& info, int* index) {
  return (RenderTexture) {
     unsignedintFromValue(info, index += 1),
     TextureFromValue(info, index += 1),
     TextureFromValue(info, index += 1)
  };
}

NPatchInfo NPatchInfoFromValue(const Napi::CallbackInfo& info, int* index) {
  return (NPatchInfo) {
     RectangleFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1)
  };
}

GlyphInfo GlyphInfoFromValue(const Napi::CallbackInfo& info, int* index) {
  return (GlyphInfo) {
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     ImageFromValue(info, index += 1)
  };
}

Font FontFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Font) {
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     TextureFromValue(info, index += 1),
     (Rectangle *) pointerFromValue(info, index += 1),
     (GlyphInfo *) pointerFromValue(info, index += 1)
  };
}

Camera3D Camera3DFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Camera3D) {
     Vector3FromValue(info, index += 1),
     Vector3FromValue(info, index += 1),
     Vector3FromValue(info, index += 1),
     floatFromValue(info, index += 1),
     intFromValue(info, index += 1)
  };
}

Camera2D Camera2DFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Camera2D) {
     Vector2FromValue(info, index += 1),
     Vector2FromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1)
  };
}

Mesh MeshFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Mesh) {
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     (float *) pointerFromValue(info, index += 1),
     (float *) pointerFromValue(info, index += 1),
     (float *) pointerFromValue(info, index += 1),
     (float *) pointerFromValue(info, index += 1),
     (float *) pointerFromValue(info, index += 1),
     (unsigned char *) pointerFromValue(info, index += 1),
     (unsigned short *) pointerFromValue(info, index += 1),
     (float *) pointerFromValue(info, index += 1),
     (float *) pointerFromValue(info, index += 1),
     (unsigned char *) pointerFromValue(info, index += 1),
     (float *) pointerFromValue(info, index += 1),
     unsignedintFromValue(info, index += 1),
     (unsigned int *) pointerFromValue(info, index += 1)
  };
}

Shader ShaderFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Shader) {
     unsignedintFromValue(info, index += 1),
     (int *) pointerFromValue(info, index += 1)
  };
}

MaterialMap MaterialMapFromValue(const Napi::CallbackInfo& info, int* index) {
  return (MaterialMap) {
     TextureFromValue(info, index += 1),
     ColorFromValue(info, index += 1),
     floatFromValue(info, index += 1)
  };
}

Material MaterialFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Material) {
     ShaderFromValue(info, index += 1),
     (MaterialMap *) pointerFromValue(info, index += 1),
     floatFromValue(info, index += 1)
  };
}

Transform TransformFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Transform) {
     Vector3FromValue(info, index += 1),
     Vector4FromValue(info, index += 1),
     Vector3FromValue(info, index += 1)
  };
}

BoneInfo BoneInfoFromValue(const Napi::CallbackInfo& info, int* index) {
  return (BoneInfo) {
     charFromValue(info, index += 1),
     intFromValue(info, index += 1)
  };
}

Model ModelFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Model) {
     MatrixFromValue(info, index += 1),
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     (Mesh *) pointerFromValue(info, index += 1),
     (Material *) pointerFromValue(info, index += 1),
     (int *) pointerFromValue(info, index += 1),
     intFromValue(info, index += 1),
     (BoneInfo *) pointerFromValue(info, index += 1),
     (Transform *) pointerFromValue(info, index += 1)
  };
}

ModelAnimation ModelAnimationFromValue(const Napi::CallbackInfo& info, int* index) {
  return (ModelAnimation) {
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     (BoneInfo *) pointerFromValue(info, index += 1),
     (Transform **) pointerFromValue(info, index += 1)
  };
}

Ray RayFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Ray) {
     Vector3FromValue(info, index += 1),
     Vector3FromValue(info, index += 1)
  };
}

RayCollision RayCollisionFromValue(const Napi::CallbackInfo& info, int* index) {
  return (RayCollision) {
     boolFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     Vector3FromValue(info, index += 1),
     Vector3FromValue(info, index += 1)
  };
}

BoundingBox BoundingBoxFromValue(const Napi::CallbackInfo& info, int* index) {
  return (BoundingBox) {
     Vector3FromValue(info, index += 1),
     Vector3FromValue(info, index += 1)
  };
}

Wave WaveFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Wave) {
     unsignedintFromValue(info, index += 1),
     unsignedintFromValue(info, index += 1),
     unsignedintFromValue(info, index += 1),
     unsignedintFromValue(info, index += 1),
     (void *) pointerFromValue(info, index += 1)
  };
}

AudioStream AudioStreamFromValue(const Napi::CallbackInfo& info, int* index) {
  return (AudioStream) {
     (rAudioBuffer *) pointerFromValue(info, index += 1),
     unsignedintFromValue(info, index += 1),
     unsignedintFromValue(info, index += 1),
     unsignedintFromValue(info, index += 1)
  };
}

Sound SoundFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Sound) {
     AudioStreamFromValue(info, index += 1),
     unsignedintFromValue(info, index += 1)
  };
}

Music MusicFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Music) {
     AudioStreamFromValue(info, index += 1),
     unsignedintFromValue(info, index += 1),
     boolFromValue(info, index += 1),
     intFromValue(info, index += 1),
     (void *) pointerFromValue(info, index += 1)
  };
}

VrDeviceInfo VrDeviceInfoFromValue(const Napi::CallbackInfo& info, int* index) {
  return (VrDeviceInfo) {
     intFromValue(info, index += 1),
     intFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1)
  };
}

VrStereoConfig VrStereoConfigFromValue(const Napi::CallbackInfo& info, int* index) {
  return (VrStereoConfig) {
     MatrixFromValue(info, index += 1),
     MatrixFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1),
     floatFromValue(info, index += 1)
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

Texture2D Texture2DFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Texture2D) TextureFromValue(info, index);
}
RenderTexture2D RenderTexture2DFromValue(const Napi::CallbackInfo& info, int* index) {
  return (RenderTexture2D) RenderTextureFromValue(info, index);
}
Camera CameraFromValue(const Napi::CallbackInfo& info, int* index) {
  return Camera3DFromValue(info, index);
}

// Raylib API function bindings

Napi::Value BindWindowShouldClose(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		WindowShouldClose(
			
		)
	);
}

Napi::Value BindIsWindowReady(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsWindowReady(
			
		)
	);
}

Napi::Value BindIsWindowFullscreen(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsWindowFullscreen(
			
		)
	);
}

Napi::Value BindIsWindowHidden(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsWindowHidden(
			
		)
	);
}

Napi::Value BindIsWindowMinimized(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsWindowMinimized(
			
		)
	);
}

Napi::Value BindIsWindowMaximized(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsWindowMaximized(
			
		)
	);
}

Napi::Value BindIsWindowFocused(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsWindowFocused(
			
		)
	);
}

Napi::Value BindIsWindowResized(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsWindowResized(
			
		)
	);
}

Napi::Value BindIsWindowState(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsWindowState(
			 unsignedintFromValue(info, &index)
		)
	);
}

Napi::Value BindGetWindowHandle(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetWindowHandle(
			
		)
	);
}

Napi::Value BindGetScreenWidth(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetScreenWidth(
			
		)
	);
}

Napi::Value BindGetScreenHeight(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetScreenHeight(
			
		)
	);
}

Napi::Value BindGetMonitorCount(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMonitorCount(
			
		)
	);
}

Napi::Value BindGetCurrentMonitor(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetCurrentMonitor(
			
		)
	);
}

Napi::Value BindGetMonitorPosition(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMonitorPosition(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetMonitorWidth(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMonitorWidth(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetMonitorHeight(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMonitorHeight(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetMonitorPhysicalWidth(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMonitorPhysicalWidth(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetMonitorPhysicalHeight(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMonitorPhysicalHeight(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetMonitorRefreshRate(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMonitorRefreshRate(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetWindowPosition(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetWindowPosition(
			
		)
	);
}

Napi::Value BindGetWindowScaleDPI(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetWindowScaleDPI(
			
		)
	);
}

Napi::Value BindGetMonitorName(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMonitorName(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetClipboardText(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetClipboardText(
			
		)
	);
}

Napi::Value BindIsCursorHidden(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsCursorHidden(
			
		)
	);
}

Napi::Value BindIsCursorOnScreen(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsCursorOnScreen(
			
		)
	);
}

Napi::Value BindLoadShader(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadShader(
			 (const char *) stringFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadShaderFromMemory(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadShaderFromMemory(
			 (const char *) stringFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindGetShaderLocation(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetShaderLocation(
			 ShaderFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindGetShaderLocationAttrib(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetShaderLocationAttrib(
			 ShaderFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindGetMouseRay(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMouseRay(
			 Vector2FromValue(info, &index),
       Camera3DFromValue(info, &index)
		)
	);
}

Napi::Value BindGetCameraMatrix(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetCameraMatrix(
			 Camera3DFromValue(info, &index)
		)
	);
}

Napi::Value BindGetCameraMatrix2D(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetCameraMatrix2D(
			 Camera2DFromValue(info, &index)
		)
	);
}

Napi::Value BindGetWorldToScreen(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetWorldToScreen(
			 Vector3FromValue(info, &index),
       Camera3DFromValue(info, &index)
		)
	);
}

Napi::Value BindGetWorldToScreenEx(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetWorldToScreenEx(
			 Vector3FromValue(info, &index),
       Camera3DFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetWorldToScreen2D(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetWorldToScreen2D(
			 Vector2FromValue(info, &index),
       Camera2DFromValue(info, &index)
		)
	);
}

Napi::Value BindGetScreenToWorld2D(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetScreenToWorld2D(
			 Vector2FromValue(info, &index),
       Camera2DFromValue(info, &index)
		)
	);
}

Napi::Value BindGetFPS(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetFPS(
			
		)
	);
}

Napi::Value BindGetFrameTime(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetFrameTime(
			
		)
	);
}

Napi::Value BindGetTime(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetTime(
			
		)
	);
}

Napi::Value BindGetRandomValue(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetRandomValue(
			 intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindMemAlloc(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		MemAlloc(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindMemRealloc(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		MemRealloc(
			 (void *) pointerFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadFileData(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadFileData(
			 (const char *) stringFromValue(info, &index),
       (unsigned int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindSaveFileData(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		SaveFileData(
			 (const char *) stringFromValue(info, &index),
       (void *) pointerFromValue(info, &index),
       unsignedintFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadFileText(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadFileText(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindSaveFileText(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		SaveFileText(
			 (const char *) stringFromValue(info, &index),
       (char *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindFileExists(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		FileExists(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindDirectoryExists(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		DirectoryExists(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindIsFileExtension(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsFileExtension(
			 (const char *) stringFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindGetFileExtension(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetFileExtension(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindGetFileName(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetFileName(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindGetFileNameWithoutExt(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetFileNameWithoutExt(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindGetDirectoryPath(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetDirectoryPath(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindGetPrevDirectoryPath(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetPrevDirectoryPath(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindGetWorkingDirectory(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetWorkingDirectory(
			
		)
	);
}

Napi::Value BindGetDirectoryFiles(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetDirectoryFiles(
			 (const char *) stringFromValue(info, &index),
       (int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindChangeDirectory(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ChangeDirectory(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindIsFileDropped(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsFileDropped(
			
		)
	);
}

Napi::Value BindGetDroppedFiles(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetDroppedFiles(
			 (int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindGetFileModTime(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetFileModTime(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindCompressData(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		CompressData(
			 (unsigned char *) pointerFromValue(info, &index),
       intFromValue(info, &index),
       (int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindDecompressData(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		DecompressData(
			 (unsigned char *) pointerFromValue(info, &index),
       intFromValue(info, &index),
       (int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindEncodeDataBase64(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		EncodeDataBase64(
			 (const unsigned char *) pointerFromValue(info, &index),
       intFromValue(info, &index),
       (int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindDecodeDataBase64(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		DecodeDataBase64(
			 (unsigned char *) pointerFromValue(info, &index),
       (int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindSaveStorageValue(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		SaveStorageValue(
			 unsignedintFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadStorageValue(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadStorageValue(
			 unsignedintFromValue(info, &index)
		)
	);
}

Napi::Value BindIsKeyPressed(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsKeyPressed(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindIsKeyDown(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsKeyDown(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindIsKeyReleased(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsKeyReleased(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindIsKeyUp(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsKeyUp(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetKeyPressed(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetKeyPressed(
			
		)
	);
}

Napi::Value BindGetCharPressed(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetCharPressed(
			
		)
	);
}

Napi::Value BindIsGamepadAvailable(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsGamepadAvailable(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetGamepadName(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetGamepadName(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindIsGamepadButtonPressed(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsGamepadButtonPressed(
			 intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindIsGamepadButtonDown(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsGamepadButtonDown(
			 intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindIsGamepadButtonReleased(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsGamepadButtonReleased(
			 intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindIsGamepadButtonUp(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsGamepadButtonUp(
			 intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetGamepadButtonPressed(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetGamepadButtonPressed(
			
		)
	);
}

Napi::Value BindGetGamepadAxisCount(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetGamepadAxisCount(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetGamepadAxisMovement(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetGamepadAxisMovement(
			 intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindSetGamepadMappings(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		SetGamepadMappings(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindIsMouseButtonPressed(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsMouseButtonPressed(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindIsMouseButtonDown(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsMouseButtonDown(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindIsMouseButtonReleased(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsMouseButtonReleased(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindIsMouseButtonUp(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsMouseButtonUp(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetMouseX(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMouseX(
			
		)
	);
}

Napi::Value BindGetMouseY(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMouseY(
			
		)
	);
}

Napi::Value BindGetMousePosition(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMousePosition(
			
		)
	);
}

Napi::Value BindGetMouseDelta(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMouseDelta(
			
		)
	);
}

Napi::Value BindGetMouseWheelMove(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMouseWheelMove(
			
		)
	);
}

Napi::Value BindGetTouchX(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetTouchX(
			
		)
	);
}

Napi::Value BindGetTouchY(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetTouchY(
			
		)
	);
}

Napi::Value BindGetTouchPosition(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetTouchPosition(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetTouchPointId(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetTouchPointId(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetTouchPointCount(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetTouchPointCount(
			
		)
	);
}

Napi::Value BindIsGestureDetected(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsGestureDetected(
			 intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetGestureDetected(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetGestureDetected(
			
		)
	);
}

Napi::Value BindGetGestureHoldDuration(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetGestureHoldDuration(
			
		)
	);
}

Napi::Value BindGetGestureDragVector(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetGestureDragVector(
			
		)
	);
}

Napi::Value BindGetGestureDragAngle(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetGestureDragAngle(
			
		)
	);
}

Napi::Value BindGetGesturePinchVector(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetGesturePinchVector(
			
		)
	);
}

Napi::Value BindGetGesturePinchAngle(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetGesturePinchAngle(
			
		)
	);
}

Napi::Value BindCheckCollisionRecs(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		CheckCollisionRecs(
			 RectangleFromValue(info, &index),
       RectangleFromValue(info, &index)
		)
	);
}

Napi::Value BindCheckCollisionCircles(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		CheckCollisionCircles(
			 Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index)
		)
	);
}

Napi::Value BindCheckCollisionCircleRec(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		CheckCollisionCircleRec(
			 Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       RectangleFromValue(info, &index)
		)
	);
}

Napi::Value BindCheckCollisionPointRec(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		CheckCollisionPointRec(
			 Vector2FromValue(info, &index),
       RectangleFromValue(info, &index)
		)
	);
}

Napi::Value BindCheckCollisionPointCircle(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		CheckCollisionPointCircle(
			 Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index)
		)
	);
}

Napi::Value BindCheckCollisionPointTriangle(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		CheckCollisionPointTriangle(
			 Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       Vector2FromValue(info, &index)
		)
	);
}

Napi::Value BindCheckCollisionLines(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		CheckCollisionLines(
			 Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       (Vector2 *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindCheckCollisionPointLine(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		CheckCollisionPointLine(
			 Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetCollisionRec(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetCollisionRec(
			 RectangleFromValue(info, &index),
       RectangleFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadImage(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadImage(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadImageRaw(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadImageRaw(
			 (const char *) stringFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadImageAnim(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadImageAnim(
			 (const char *) stringFromValue(info, &index),
       (int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadImageFromMemory(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadImageFromMemory(
			 (const char *) stringFromValue(info, &index),
       (const unsigned char *) pointerFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadImageFromTexture(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadImageFromTexture(
			 TextureFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadImageFromScreen(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadImageFromScreen(
			
		)
	);
}

Napi::Value BindExportImage(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ExportImage(
			 ImageFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindExportImageAsCode(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ExportImageAsCode(
			 ImageFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindGenImageColor(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenImageColor(
			 intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
		)
	);
}

Napi::Value BindGenImageGradientV(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenImageGradientV(
			 intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index),
       ColorFromValue(info, &index)
		)
	);
}

Napi::Value BindGenImageGradientH(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenImageGradientH(
			 intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index),
       ColorFromValue(info, &index)
		)
	);
}

Napi::Value BindGenImageGradientRadial(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenImageGradientRadial(
			 intFromValue(info, &index),
       intFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index),
       ColorFromValue(info, &index)
		)
	);
}

Napi::Value BindGenImageChecked(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenImageChecked(
			 intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index),
       ColorFromValue(info, &index)
		)
	);
}

Napi::Value BindGenImageWhiteNoise(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenImageWhiteNoise(
			 intFromValue(info, &index),
       intFromValue(info, &index),
       floatFromValue(info, &index)
		)
	);
}

Napi::Value BindGenImageCellular(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenImageCellular(
			 intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindImageCopy(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ImageCopy(
			 ImageFromValue(info, &index)
		)
	);
}

Napi::Value BindImageFromImage(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ImageFromImage(
			 ImageFromValue(info, &index),
       RectangleFromValue(info, &index)
		)
	);
}

Napi::Value BindImageText(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ImageText(
			 (const char *) stringFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
		)
	);
}

Napi::Value BindImageTextEx(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ImageTextEx(
			 FontFromValue(info, &index),
       (const char *) stringFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadImageColors(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadImageColors(
			 ImageFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadImagePalette(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadImagePalette(
			 ImageFromValue(info, &index),
       intFromValue(info, &index),
       (int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindGetImageAlphaBorder(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetImageAlphaBorder(
			 ImageFromValue(info, &index),
       floatFromValue(info, &index)
		)
	);
}

Napi::Value BindGetImageColor(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetImageColor(
			 ImageFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadTexture(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadTexture(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadTextureFromImage(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadTextureFromImage(
			 ImageFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadTextureCubemap(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadTextureCubemap(
			 ImageFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadRenderTexture(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadRenderTexture(
			 intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindFade(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		Fade(
			 ColorFromValue(info, &index),
       floatFromValue(info, &index)
		)
	);
}

Napi::Value BindColorToInt(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ColorToInt(
			 ColorFromValue(info, &index)
		)
	);
}

Napi::Value BindColorNormalize(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ColorNormalize(
			 ColorFromValue(info, &index)
		)
	);
}

Napi::Value BindColorFromNormalized(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ColorFromNormalized(
			 Vector4FromValue(info, &index)
		)
	);
}

Napi::Value BindColorToHSV(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ColorToHSV(
			 ColorFromValue(info, &index)
		)
	);
}

Napi::Value BindColorFromHSV(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ColorFromHSV(
			 floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index)
		)
	);
}

Napi::Value BindColorAlpha(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ColorAlpha(
			 ColorFromValue(info, &index),
       floatFromValue(info, &index)
		)
	);
}

Napi::Value BindColorAlphaBlend(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ColorAlphaBlend(
			 ColorFromValue(info, &index),
       ColorFromValue(info, &index),
       ColorFromValue(info, &index)
		)
	);
}

Napi::Value BindGetColor(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetColor(
			 unsignedintFromValue(info, &index)
		)
	);
}

Napi::Value BindGetPixelColor(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetPixelColor(
			 (void *) pointerFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetPixelDataSize(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetPixelDataSize(
			 intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetFontDefault(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetFontDefault(
			
		)
	);
}

Napi::Value BindLoadFont(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadFont(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadFontEx(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadFontEx(
			 (const char *) stringFromValue(info, &index),
       intFromValue(info, &index),
       (int *) pointerFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadFontFromImage(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadFontFromImage(
			 ImageFromValue(info, &index),
       ColorFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadFontFromMemory(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadFontFromMemory(
			 (const char *) stringFromValue(info, &index),
       (const unsigned char *) pointerFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       (int *) pointerFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadFontData(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadFontData(
			 (const unsigned char *) pointerFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       (int *) pointerFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGenImageFontAtlas(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenImageFontAtlas(
			 (const GlyphInfo *) pointerFromValue(info, &index),
       (Rectangle **) pointerFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindMeasureText(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		MeasureText(
			 (const char *) stringFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindMeasureTextEx(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		MeasureTextEx(
			 FontFromValue(info, &index),
       (const char *) stringFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index)
		)
	);
}

Napi::Value BindGetGlyphIndex(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetGlyphIndex(
			 FontFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetGlyphInfo(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetGlyphInfo(
			 FontFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGetGlyphAtlasRec(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetGlyphAtlasRec(
			 FontFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadCodepoints(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadCodepoints(
			 (const char *) stringFromValue(info, &index),
       (int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindGetCodepointCount(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetCodepointCount(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindGetCodepoint(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetCodepoint(
			 (const char *) stringFromValue(info, &index),
       (int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindCodepointToUTF8(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		CodepointToUTF8(
			 intFromValue(info, &index),
       (int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindTextCodepointsToUTF8(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextCodepointsToUTF8(
			 (int *) pointerFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindTextCopy(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextCopy(
			 (char *) pointerFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindTextIsEqual(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextIsEqual(
			 (const char *) stringFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindTextLength(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextLength(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindTextSubtext(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextSubtext(
			 (const char *) stringFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindTextReplace(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextReplace(
			 (char *) pointerFromValue(info, &index),
       (const char *) stringFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindTextInsert(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextInsert(
			 (const char *) stringFromValue(info, &index),
       (const char *) stringFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindTextJoin(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextJoin(
			 (const char **) pointerFromValue(info, &index),
       intFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindTextSplit(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextSplit(
			 (const char *) stringFromValue(info, &index),
       charFromValue(info, &index),
       (int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindTextFindIndex(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextFindIndex(
			 (const char *) stringFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindTextToUpper(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextToUpper(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindTextToLower(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextToLower(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindTextToPascal(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextToPascal(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindTextToInteger(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		TextToInteger(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadModel(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadModel(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadModelFromMesh(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadModelFromMesh(
			 MeshFromValue(info, &index)
		)
	);
}

Napi::Value BindGetModelBoundingBox(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetModelBoundingBox(
			 ModelFromValue(info, &index)
		)
	);
}

Napi::Value BindExportMesh(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ExportMesh(
			 MeshFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindGetMeshBoundingBox(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMeshBoundingBox(
			 MeshFromValue(info, &index)
		)
	);
}

Napi::Value BindGenMeshPoly(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenMeshPoly(
			 intFromValue(info, &index),
       floatFromValue(info, &index)
		)
	);
}

Napi::Value BindGenMeshPlane(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenMeshPlane(
			 floatFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGenMeshCube(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenMeshCube(
			 floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index)
		)
	);
}

Napi::Value BindGenMeshSphere(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenMeshSphere(
			 floatFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGenMeshHemiSphere(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenMeshHemiSphere(
			 floatFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGenMeshCylinder(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenMeshCylinder(
			 floatFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGenMeshCone(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenMeshCone(
			 floatFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGenMeshTorus(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenMeshTorus(
			 floatFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGenMeshKnot(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenMeshKnot(
			 floatFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindGenMeshHeightmap(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenMeshHeightmap(
			 ImageFromValue(info, &index),
       Vector3FromValue(info, &index)
		)
	);
}

Napi::Value BindGenMeshCubicmap(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GenMeshCubicmap(
			 ImageFromValue(info, &index),
       Vector3FromValue(info, &index)
		)
	);
}

Napi::Value BindLoadModelAnimations(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadModelAnimations(
			 (const char *) stringFromValue(info, &index),
       (unsigned int *) pointerFromValue(info, &index)
		)
	);
}

Napi::Value BindIsModelAnimationValid(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsModelAnimationValid(
			 ModelFromValue(info, &index),
       ModelAnimationFromValue(info, &index)
		)
	);
}

Napi::Value BindCheckCollisionSpheres(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		CheckCollisionSpheres(
			 Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       Vector3FromValue(info, &index),
       floatFromValue(info, &index)
		)
	);
}

Napi::Value BindCheckCollisionBoxes(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		CheckCollisionBoxes(
			 BoundingBoxFromValue(info, &index),
       BoundingBoxFromValue(info, &index)
		)
	);
}

Napi::Value BindCheckCollisionBoxSphere(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		CheckCollisionBoxSphere(
			 BoundingBoxFromValue(info, &index),
       Vector3FromValue(info, &index),
       floatFromValue(info, &index)
		)
	);
}

Napi::Value BindGetRayCollisionSphere(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetRayCollisionSphere(
			 RayFromValue(info, &index),
       Vector3FromValue(info, &index),
       floatFromValue(info, &index)
		)
	);
}

Napi::Value BindGetRayCollisionBox(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetRayCollisionBox(
			 RayFromValue(info, &index),
       BoundingBoxFromValue(info, &index)
		)
	);
}

Napi::Value BindGetRayCollisionModel(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetRayCollisionModel(
			 RayFromValue(info, &index),
       ModelFromValue(info, &index)
		)
	);
}

Napi::Value BindGetRayCollisionMesh(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetRayCollisionMesh(
			 RayFromValue(info, &index),
       MeshFromValue(info, &index),
       MatrixFromValue(info, &index)
		)
	);
}

Napi::Value BindGetRayCollisionTriangle(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetRayCollisionTriangle(
			 RayFromValue(info, &index),
       Vector3FromValue(info, &index),
       Vector3FromValue(info, &index),
       Vector3FromValue(info, &index)
		)
	);
}

Napi::Value BindGetRayCollisionQuad(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetRayCollisionQuad(
			 RayFromValue(info, &index),
       Vector3FromValue(info, &index),
       Vector3FromValue(info, &index),
       Vector3FromValue(info, &index),
       Vector3FromValue(info, &index)
		)
	);
}

Napi::Value BindIsAudioDeviceReady(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsAudioDeviceReady(
			
		)
	);
}

Napi::Value BindLoadWave(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadWave(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadWaveFromMemory(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadWaveFromMemory(
			 (const char *) stringFromValue(info, &index),
       (const unsigned char *) pointerFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadSound(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadSound(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadSoundFromWave(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadSoundFromWave(
			 WaveFromValue(info, &index)
		)
	);
}

Napi::Value BindExportWave(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ExportWave(
			 WaveFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindExportWaveAsCode(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		ExportWaveAsCode(
			 WaveFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindGetSoundsPlaying(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetSoundsPlaying(
			
		)
	);
}

Napi::Value BindIsSoundPlaying(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsSoundPlaying(
			 SoundFromValue(info, &index)
		)
	);
}

Napi::Value BindWaveCopy(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		WaveCopy(
			 WaveFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadWaveSamples(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadWaveSamples(
			 WaveFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadMusicStream(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadMusicStream(
			 (const char *) stringFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadMusicStreamFromMemory(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadMusicStreamFromMemory(
			 (const char *) stringFromValue(info, &index),
       (unsigned char *) pointerFromValue(info, &index),
       intFromValue(info, &index)
		)
	);
}

Napi::Value BindIsMusicStreamPlaying(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsMusicStreamPlaying(
			 MusicFromValue(info, &index)
		)
	);
}

Napi::Value BindGetMusicTimeLength(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMusicTimeLength(
			 MusicFromValue(info, &index)
		)
	);
}

Napi::Value BindGetMusicTimePlayed(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		GetMusicTimePlayed(
			 MusicFromValue(info, &index)
		)
	);
}

Napi::Value BindLoadAudioStream(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		LoadAudioStream(
			 unsignedintFromValue(info, &index),
       unsignedintFromValue(info, &index),
       unsignedintFromValue(info, &index)
		)
	);
}

Napi::Value BindIsAudioStreamProcessed(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsAudioStreamProcessed(
			 AudioStreamFromValue(info, &index)
		)
	);
}

Napi::Value BindIsAudioStreamPlaying(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		IsAudioStreamPlaying(
			 AudioStreamFromValue(info, &index)
		)
	);
}

void BindInitWindow(const Napi::CallbackInfo& info) {
  int index = -1;
  InitWindow(
     intFromValue(info, &index),
       intFromValue(info, &index),
       (const char *) stringFromValue(info, &index)
  );
}

void BindCloseWindow(const Napi::CallbackInfo& info) {
  int index = -1;
  CloseWindow(
    
  );
}

void BindSetWindowState(const Napi::CallbackInfo& info) {
  int index = -1;
  SetWindowState(
     unsignedintFromValue(info, &index)
  );
}

void BindClearWindowState(const Napi::CallbackInfo& info) {
  int index = -1;
  ClearWindowState(
     unsignedintFromValue(info, &index)
  );
}

void BindToggleFullscreen(const Napi::CallbackInfo& info) {
  int index = -1;
  ToggleFullscreen(
    
  );
}

void BindMaximizeWindow(const Napi::CallbackInfo& info) {
  int index = -1;
  MaximizeWindow(
    
  );
}

void BindMinimizeWindow(const Napi::CallbackInfo& info) {
  int index = -1;
  MinimizeWindow(
    
  );
}

void BindRestoreWindow(const Napi::CallbackInfo& info) {
  int index = -1;
  RestoreWindow(
    
  );
}

void BindSetWindowIcon(const Napi::CallbackInfo& info) {
  int index = -1;
  SetWindowIcon(
     ImageFromValue(info, &index)
  );
}

void BindSetWindowTitle(const Napi::CallbackInfo& info) {
  int index = -1;
  SetWindowTitle(
     (const char *) stringFromValue(info, &index)
  );
}

void BindSetWindowPosition(const Napi::CallbackInfo& info) {
  int index = -1;
  SetWindowPosition(
     intFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindSetWindowMonitor(const Napi::CallbackInfo& info) {
  int index = -1;
  SetWindowMonitor(
     intFromValue(info, &index)
  );
}

void BindSetWindowMinSize(const Napi::CallbackInfo& info) {
  int index = -1;
  SetWindowMinSize(
     intFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindSetWindowSize(const Napi::CallbackInfo& info) {
  int index = -1;
  SetWindowSize(
     intFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindSetClipboardText(const Napi::CallbackInfo& info) {
  int index = -1;
  SetClipboardText(
     (const char *) stringFromValue(info, &index)
  );
}

void BindSwapScreenBuffer(const Napi::CallbackInfo& info) {
  int index = -1;
  SwapScreenBuffer(
    
  );
}

void BindPollInputEvents(const Napi::CallbackInfo& info) {
  int index = -1;
  PollInputEvents(
    
  );
}

void BindWaitTime(const Napi::CallbackInfo& info) {
  int index = -1;
  WaitTime(
     floatFromValue(info, &index)
  );
}

void BindShowCursor(const Napi::CallbackInfo& info) {
  int index = -1;
  ShowCursor(
    
  );
}

void BindHideCursor(const Napi::CallbackInfo& info) {
  int index = -1;
  HideCursor(
    
  );
}

void BindEnableCursor(const Napi::CallbackInfo& info) {
  int index = -1;
  EnableCursor(
    
  );
}

void BindDisableCursor(const Napi::CallbackInfo& info) {
  int index = -1;
  DisableCursor(
    
  );
}

void BindClearBackground(const Napi::CallbackInfo& info) {
  int index = -1;
  ClearBackground(
     ColorFromValue(info, &index)
  );
}

void BindBeginDrawing(const Napi::CallbackInfo& info) {
  int index = -1;
  BeginDrawing(
    
  );
}

void BindEndDrawing(const Napi::CallbackInfo& info) {
  int index = -1;
  EndDrawing(
    
  );
}

void BindBeginMode2D(const Napi::CallbackInfo& info) {
  int index = -1;
  BeginMode2D(
     Camera2DFromValue(info, &index)
  );
}

void BindEndMode2D(const Napi::CallbackInfo& info) {
  int index = -1;
  EndMode2D(
    
  );
}

void BindBeginMode3D(const Napi::CallbackInfo& info) {
  int index = -1;
  BeginMode3D(
     Camera3DFromValue(info, &index)
  );
}

void BindEndMode3D(const Napi::CallbackInfo& info) {
  int index = -1;
  EndMode3D(
    
  );
}

void BindBeginTextureMode(const Napi::CallbackInfo& info) {
  int index = -1;
  BeginTextureMode(
     RenderTexture2DFromValue(info, &index)
  );
}

void BindEndTextureMode(const Napi::CallbackInfo& info) {
  int index = -1;
  EndTextureMode(
    
  );
}

void BindBeginShaderMode(const Napi::CallbackInfo& info) {
  int index = -1;
  BeginShaderMode(
     ShaderFromValue(info, &index)
  );
}

void BindEndShaderMode(const Napi::CallbackInfo& info) {
  int index = -1;
  EndShaderMode(
    
  );
}

void BindBeginBlendMode(const Napi::CallbackInfo& info) {
  int index = -1;
  BeginBlendMode(
     intFromValue(info, &index)
  );
}

void BindEndBlendMode(const Napi::CallbackInfo& info) {
  int index = -1;
  EndBlendMode(
    
  );
}

void BindBeginScissorMode(const Napi::CallbackInfo& info) {
  int index = -1;
  BeginScissorMode(
     intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindEndScissorMode(const Napi::CallbackInfo& info) {
  int index = -1;
  EndScissorMode(
    
  );
}

void BindEndVrStereoMode(const Napi::CallbackInfo& info) {
  int index = -1;
  EndVrStereoMode(
    
  );
}

void BindSetShaderValue(const Napi::CallbackInfo& info) {
  int index = -1;
  SetShaderValue(
     ShaderFromValue(info, &index),
       intFromValue(info, &index),
       (const void *) pointerFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindSetShaderValueV(const Napi::CallbackInfo& info) {
  int index = -1;
  SetShaderValueV(
     ShaderFromValue(info, &index),
       intFromValue(info, &index),
       (const void *) pointerFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindSetShaderValueMatrix(const Napi::CallbackInfo& info) {
  int index = -1;
  SetShaderValueMatrix(
     ShaderFromValue(info, &index),
       intFromValue(info, &index),
       MatrixFromValue(info, &index)
  );
}

void BindSetShaderValueTexture(const Napi::CallbackInfo& info) {
  int index = -1;
  SetShaderValueTexture(
     ShaderFromValue(info, &index),
       intFromValue(info, &index),
       TextureFromValue(info, &index)
  );
}

void BindUnloadShader(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadShader(
     ShaderFromValue(info, &index)
  );
}

void BindSetTargetFPS(const Napi::CallbackInfo& info) {
  int index = -1;
  SetTargetFPS(
     intFromValue(info, &index)
  );
}

void BindSetRandomSeed(const Napi::CallbackInfo& info) {
  int index = -1;
  SetRandomSeed(
     unsignedintFromValue(info, &index)
  );
}

void BindTakeScreenshot(const Napi::CallbackInfo& info) {
  int index = -1;
  TakeScreenshot(
     (const char *) stringFromValue(info, &index)
  );
}

void BindSetConfigFlags(const Napi::CallbackInfo& info) {
  int index = -1;
  SetConfigFlags(
     unsignedintFromValue(info, &index)
  );
}

void BindSetTraceLogLevel(const Napi::CallbackInfo& info) {
  int index = -1;
  SetTraceLogLevel(
     intFromValue(info, &index)
  );
}

void BindMemFree(const Napi::CallbackInfo& info) {
  int index = -1;
  MemFree(
     (void *) pointerFromValue(info, &index)
  );
}

void BindUnloadFileData(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadFileData(
     (unsigned char *) pointerFromValue(info, &index)
  );
}

void BindUnloadFileText(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadFileText(
     (char *) pointerFromValue(info, &index)
  );
}

void BindClearDirectoryFiles(const Napi::CallbackInfo& info) {
  int index = -1;
  ClearDirectoryFiles(
    
  );
}

void BindClearDroppedFiles(const Napi::CallbackInfo& info) {
  int index = -1;
  ClearDroppedFiles(
    
  );
}

void BindOpenURL(const Napi::CallbackInfo& info) {
  int index = -1;
  OpenURL(
     (const char *) stringFromValue(info, &index)
  );
}

void BindSetExitKey(const Napi::CallbackInfo& info) {
  int index = -1;
  SetExitKey(
     intFromValue(info, &index)
  );
}

void BindSetMousePosition(const Napi::CallbackInfo& info) {
  int index = -1;
  SetMousePosition(
     intFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindSetMouseOffset(const Napi::CallbackInfo& info) {
  int index = -1;
  SetMouseOffset(
     intFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindSetMouseScale(const Napi::CallbackInfo& info) {
  int index = -1;
  SetMouseScale(
     floatFromValue(info, &index),
       floatFromValue(info, &index)
  );
}

void BindSetMouseCursor(const Napi::CallbackInfo& info) {
  int index = -1;
  SetMouseCursor(
     intFromValue(info, &index)
  );
}

void BindSetGesturesEnabled(const Napi::CallbackInfo& info) {
  int index = -1;
  SetGesturesEnabled(
     unsignedintFromValue(info, &index)
  );
}

void BindSetCameraMode(const Napi::CallbackInfo& info) {
  int index = -1;
  SetCameraMode(
     Camera3DFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindSetCameraPanControl(const Napi::CallbackInfo& info) {
  int index = -1;
  SetCameraPanControl(
     intFromValue(info, &index)
  );
}

void BindSetCameraAltControl(const Napi::CallbackInfo& info) {
  int index = -1;
  SetCameraAltControl(
     intFromValue(info, &index)
  );
}

void BindSetCameraSmoothZoomControl(const Napi::CallbackInfo& info) {
  int index = -1;
  SetCameraSmoothZoomControl(
     intFromValue(info, &index)
  );
}

void BindSetCameraMoveControls(const Napi::CallbackInfo& info) {
  int index = -1;
  SetCameraMoveControls(
     intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindSetShapesTexture(const Napi::CallbackInfo& info) {
  int index = -1;
  SetShapesTexture(
     TextureFromValue(info, &index),
       RectangleFromValue(info, &index)
  );
}

void BindDrawPixel(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawPixel(
     intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawPixelV(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawPixelV(
     Vector2FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawLine(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawLine(
     intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawLineV(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawLineV(
     Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawLineEx(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawLineEx(
     Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawLineBezier(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawLineBezier(
     Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawLineBezierQuad(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawLineBezierQuad(
     Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawLineBezierCubic(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawLineBezierCubic(
     Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawLineStrip(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawLineStrip(
     (Vector2 *) pointerFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCircle(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCircle(
     intFromValue(info, &index),
       intFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCircleSector(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCircleSector(
     Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCircleSectorLines(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCircleSectorLines(
     Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCircleGradient(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCircleGradient(
     intFromValue(info, &index),
       intFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCircleV(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCircleV(
     Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCircleLines(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCircleLines(
     intFromValue(info, &index),
       intFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawEllipse(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawEllipse(
     intFromValue(info, &index),
       intFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawEllipseLines(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawEllipseLines(
     intFromValue(info, &index),
       intFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRing(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRing(
     Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRingLines(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRingLines(
     Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRectangle(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRectangle(
     intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRectangleV(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRectangleV(
     Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRectangleRec(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRectangleRec(
     RectangleFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRectanglePro(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRectanglePro(
     RectangleFromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRectangleGradientV(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRectangleGradientV(
     intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRectangleGradientH(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRectangleGradientH(
     intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRectangleGradientEx(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRectangleGradientEx(
     RectangleFromValue(info, &index),
       ColorFromValue(info, &index),
       ColorFromValue(info, &index),
       ColorFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRectangleLines(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRectangleLines(
     intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRectangleLinesEx(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRectangleLinesEx(
     RectangleFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRectangleRounded(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRectangleRounded(
     RectangleFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRectangleRoundedLines(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRectangleRoundedLines(
     RectangleFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTriangle(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTriangle(
     Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTriangleLines(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTriangleLines(
     Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTriangleFan(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTriangleFan(
     (Vector2 *) pointerFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTriangleStrip(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTriangleStrip(
     (Vector2 *) pointerFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawPoly(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawPoly(
     Vector2FromValue(info, &index),
       intFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawPolyLines(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawPolyLines(
     Vector2FromValue(info, &index),
       intFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawPolyLinesEx(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawPolyLinesEx(
     Vector2FromValue(info, &index),
       intFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindUnloadImage(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadImage(
     ImageFromValue(info, &index)
  );
}

void BindUnloadImageColors(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadImageColors(
     (Color *) pointerFromValue(info, &index)
  );
}

void BindUnloadImagePalette(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadImagePalette(
     (Color *) pointerFromValue(info, &index)
  );
}

void BindUnloadTexture(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadTexture(
     TextureFromValue(info, &index)
  );
}

void BindUnloadRenderTexture(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadRenderTexture(
     RenderTexture2DFromValue(info, &index)
  );
}

void BindUpdateTexture(const Napi::CallbackInfo& info) {
  int index = -1;
  UpdateTexture(
     TextureFromValue(info, &index),
       (const void *) pointerFromValue(info, &index)
  );
}

void BindUpdateTextureRec(const Napi::CallbackInfo& info) {
  int index = -1;
  UpdateTextureRec(
     TextureFromValue(info, &index),
       RectangleFromValue(info, &index),
       (const void *) pointerFromValue(info, &index)
  );
}

void BindSetTextureFilter(const Napi::CallbackInfo& info) {
  int index = -1;
  SetTextureFilter(
     TextureFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindSetTextureWrap(const Napi::CallbackInfo& info) {
  int index = -1;
  SetTextureWrap(
     TextureFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindDrawTexture(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTexture(
     TextureFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTextureV(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTextureV(
     TextureFromValue(info, &index),
       Vector2FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTextureEx(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTextureEx(
     TextureFromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTextureRec(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTextureRec(
     TextureFromValue(info, &index),
       RectangleFromValue(info, &index),
       Vector2FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTextureQuad(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTextureQuad(
     TextureFromValue(info, &index),
       Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       RectangleFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTextureTiled(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTextureTiled(
     TextureFromValue(info, &index),
       RectangleFromValue(info, &index),
       RectangleFromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTexturePro(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTexturePro(
     TextureFromValue(info, &index),
       RectangleFromValue(info, &index),
       RectangleFromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTextureNPatch(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTextureNPatch(
     TextureFromValue(info, &index),
       NPatchInfoFromValue(info, &index),
       RectangleFromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTexturePoly(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTexturePoly(
     TextureFromValue(info, &index),
       Vector2FromValue(info, &index),
       (Vector2 *) pointerFromValue(info, &index),
       (Vector2 *) pointerFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindSetPixelColor(const Napi::CallbackInfo& info) {
  int index = -1;
  SetPixelColor(
     (void *) pointerFromValue(info, &index),
       ColorFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindUnloadFontData(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadFontData(
     (GlyphInfo *) pointerFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindUnloadFont(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadFont(
     FontFromValue(info, &index)
  );
}

void BindDrawFPS(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawFPS(
     intFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindDrawText(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawText(
     (const char *) stringFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTextEx(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTextEx(
     FontFromValue(info, &index),
       (const char *) stringFromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTextPro(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTextPro(
     FontFromValue(info, &index),
       (const char *) stringFromValue(info, &index),
       Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTextCodepoint(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTextCodepoint(
     FontFromValue(info, &index),
       intFromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindUnloadCodepoints(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadCodepoints(
     (int *) pointerFromValue(info, &index)
  );
}

void BindTextAppend(const Napi::CallbackInfo& info) {
  int index = -1;
  TextAppend(
     (char *) pointerFromValue(info, &index),
       (const char *) stringFromValue(info, &index),
       (int *) pointerFromValue(info, &index)
  );
}

void BindDrawLine3D(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawLine3D(
     Vector3FromValue(info, &index),
       Vector3FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawPoint3D(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawPoint3D(
     Vector3FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCircle3D(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCircle3D(
     Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTriangle3D(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTriangle3D(
     Vector3FromValue(info, &index),
       Vector3FromValue(info, &index),
       Vector3FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawTriangleStrip3D(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawTriangleStrip3D(
     (Vector3 *) pointerFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCube(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCube(
     Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCubeV(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCubeV(
     Vector3FromValue(info, &index),
       Vector3FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCubeWires(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCubeWires(
     Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCubeWiresV(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCubeWiresV(
     Vector3FromValue(info, &index),
       Vector3FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCubeTexture(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCubeTexture(
     TextureFromValue(info, &index),
       Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCubeTextureRec(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCubeTextureRec(
     TextureFromValue(info, &index),
       RectangleFromValue(info, &index),
       Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawSphere(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawSphere(
     Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawSphereEx(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawSphereEx(
     Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawSphereWires(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawSphereWires(
     Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCylinder(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCylinder(
     Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCylinderEx(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCylinderEx(
     Vector3FromValue(info, &index),
       Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCylinderWires(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCylinderWires(
     Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawCylinderWiresEx(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawCylinderWiresEx(
     Vector3FromValue(info, &index),
       Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawPlane(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawPlane(
     Vector3FromValue(info, &index),
       Vector2FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawRay(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawRay(
     RayFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawGrid(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawGrid(
     intFromValue(info, &index),
       floatFromValue(info, &index)
  );
}

void BindUnloadModel(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadModel(
     ModelFromValue(info, &index)
  );
}

void BindUnloadModelKeepMeshes(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadModelKeepMeshes(
     ModelFromValue(info, &index)
  );
}

void BindDrawModel(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawModel(
     ModelFromValue(info, &index),
       Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawModelEx(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawModelEx(
     ModelFromValue(info, &index),
       Vector3FromValue(info, &index),
       Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       Vector3FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawModelWires(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawModelWires(
     ModelFromValue(info, &index),
       Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawModelWiresEx(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawModelWiresEx(
     ModelFromValue(info, &index),
       Vector3FromValue(info, &index),
       Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       Vector3FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawBoundingBox(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawBoundingBox(
     BoundingBoxFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawBillboard(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawBillboard(
     Camera3DFromValue(info, &index),
       TextureFromValue(info, &index),
       Vector3FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawBillboardRec(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawBillboardRec(
     Camera3DFromValue(info, &index),
       TextureFromValue(info, &index),
       RectangleFromValue(info, &index),
       Vector3FromValue(info, &index),
       Vector2FromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindDrawBillboardPro(const Napi::CallbackInfo& info) {
  int index = -1;
  DrawBillboardPro(
     Camera3DFromValue(info, &index),
       TextureFromValue(info, &index),
       RectangleFromValue(info, &index),
       Vector3FromValue(info, &index),
       Vector3FromValue(info, &index),
       Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
  );
}

void BindUpdateMeshBuffer(const Napi::CallbackInfo& info) {
  int index = -1;
  UpdateMeshBuffer(
     MeshFromValue(info, &index),
       intFromValue(info, &index),
       (void *) pointerFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindUnloadMesh(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadMesh(
     MeshFromValue(info, &index)
  );
}

void BindUpdateModelAnimation(const Napi::CallbackInfo& info) {
  int index = -1;
  UpdateModelAnimation(
     ModelFromValue(info, &index),
       ModelAnimationFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindUnloadModelAnimation(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadModelAnimation(
     ModelAnimationFromValue(info, &index)
  );
}

void BindUnloadModelAnimations(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadModelAnimations(
     (ModelAnimation*) pointerFromValue(info, &index),
       unsignedintFromValue(info, &index)
  );
}

void BindInitAudioDevice(const Napi::CallbackInfo& info) {
  int index = -1;
  InitAudioDevice(
    
  );
}

void BindCloseAudioDevice(const Napi::CallbackInfo& info) {
  int index = -1;
  CloseAudioDevice(
    
  );
}

void BindSetMasterVolume(const Napi::CallbackInfo& info) {
  int index = -1;
  SetMasterVolume(
     floatFromValue(info, &index)
  );
}

void BindUpdateSound(const Napi::CallbackInfo& info) {
  int index = -1;
  UpdateSound(
     SoundFromValue(info, &index),
       (const void *) pointerFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindUnloadWave(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadWave(
     WaveFromValue(info, &index)
  );
}

void BindUnloadSound(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadSound(
     SoundFromValue(info, &index)
  );
}

void BindPlaySound(const Napi::CallbackInfo& info) {
  int index = -1;
  PlaySound(
     SoundFromValue(info, &index)
  );
}

void BindStopSound(const Napi::CallbackInfo& info) {
  int index = -1;
  StopSound(
     SoundFromValue(info, &index)
  );
}

void BindPauseSound(const Napi::CallbackInfo& info) {
  int index = -1;
  PauseSound(
     SoundFromValue(info, &index)
  );
}

void BindResumeSound(const Napi::CallbackInfo& info) {
  int index = -1;
  ResumeSound(
     SoundFromValue(info, &index)
  );
}

void BindPlaySoundMulti(const Napi::CallbackInfo& info) {
  int index = -1;
  PlaySoundMulti(
     SoundFromValue(info, &index)
  );
}

void BindStopSoundMulti(const Napi::CallbackInfo& info) {
  int index = -1;
  StopSoundMulti(
    
  );
}

void BindSetSoundVolume(const Napi::CallbackInfo& info) {
  int index = -1;
  SetSoundVolume(
     SoundFromValue(info, &index),
       floatFromValue(info, &index)
  );
}

void BindSetSoundPitch(const Napi::CallbackInfo& info) {
  int index = -1;
  SetSoundPitch(
     SoundFromValue(info, &index),
       floatFromValue(info, &index)
  );
}

void BindUnloadWaveSamples(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadWaveSamples(
     (float *) pointerFromValue(info, &index)
  );
}

void BindUnloadMusicStream(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadMusicStream(
     MusicFromValue(info, &index)
  );
}

void BindPlayMusicStream(const Napi::CallbackInfo& info) {
  int index = -1;
  PlayMusicStream(
     MusicFromValue(info, &index)
  );
}

void BindUpdateMusicStream(const Napi::CallbackInfo& info) {
  int index = -1;
  UpdateMusicStream(
     MusicFromValue(info, &index)
  );
}

void BindStopMusicStream(const Napi::CallbackInfo& info) {
  int index = -1;
  StopMusicStream(
     MusicFromValue(info, &index)
  );
}

void BindPauseMusicStream(const Napi::CallbackInfo& info) {
  int index = -1;
  PauseMusicStream(
     MusicFromValue(info, &index)
  );
}

void BindResumeMusicStream(const Napi::CallbackInfo& info) {
  int index = -1;
  ResumeMusicStream(
     MusicFromValue(info, &index)
  );
}

void BindSeekMusicStream(const Napi::CallbackInfo& info) {
  int index = -1;
  SeekMusicStream(
     MusicFromValue(info, &index),
       floatFromValue(info, &index)
  );
}

void BindSetMusicVolume(const Napi::CallbackInfo& info) {
  int index = -1;
  SetMusicVolume(
     MusicFromValue(info, &index),
       floatFromValue(info, &index)
  );
}

void BindSetMusicPitch(const Napi::CallbackInfo& info) {
  int index = -1;
  SetMusicPitch(
     MusicFromValue(info, &index),
       floatFromValue(info, &index)
  );
}

void BindUnloadAudioStream(const Napi::CallbackInfo& info) {
  int index = -1;
  UnloadAudioStream(
     AudioStreamFromValue(info, &index)
  );
}

void BindUpdateAudioStream(const Napi::CallbackInfo& info) {
  int index = -1;
  UpdateAudioStream(
     AudioStreamFromValue(info, &index),
       (const void *) pointerFromValue(info, &index),
       intFromValue(info, &index)
  );
}

void BindPlayAudioStream(const Napi::CallbackInfo& info) {
  int index = -1;
  PlayAudioStream(
     AudioStreamFromValue(info, &index)
  );
}

void BindPauseAudioStream(const Napi::CallbackInfo& info) {
  int index = -1;
  PauseAudioStream(
     AudioStreamFromValue(info, &index)
  );
}

void BindResumeAudioStream(const Napi::CallbackInfo& info) {
  int index = -1;
  ResumeAudioStream(
     AudioStreamFromValue(info, &index)
  );
}

void BindStopAudioStream(const Napi::CallbackInfo& info) {
  int index = -1;
  StopAudioStream(
     AudioStreamFromValue(info, &index)
  );
}

void BindSetAudioStreamVolume(const Napi::CallbackInfo& info) {
  int index = -1;
  SetAudioStreamVolume(
     AudioStreamFromValue(info, &index),
       floatFromValue(info, &index)
  );
}

void BindSetAudioStreamPitch(const Napi::CallbackInfo& info) {
  int index = -1;
  SetAudioStreamPitch(
     AudioStreamFromValue(info, &index),
       floatFromValue(info, &index)
  );
}

void BindSetAudioStreamBufferSizeDefault(const Napi::CallbackInfo& info) {
  int index = -1;
  SetAudioStreamBufferSizeDefault(
     intFromValue(info, &index)
  );
}
// By-Reference function bindings

Napi::Value BindUpdateCamera(const Napi::CallbackInfo& info) {
	int index = -1;
	Camera obj = CameraFromValue(info, &index);
	UpdateCamera(
		&obj

	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageFormat(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageFormat(
		&obj, intFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageToPOT(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageToPOT(
		&obj, ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageCrop(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageCrop(
		&obj, RectangleFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageAlphaCrop(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageAlphaCrop(
		&obj, floatFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageAlphaClear(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageAlphaClear(
		&obj, ColorFromValue(info, &index),
       floatFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageAlphaMask(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageAlphaMask(
		&obj, ImageFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageAlphaPremultiply(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageAlphaPremultiply(
		&obj

	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageResize(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageResize(
		&obj, intFromValue(info, &index),
       intFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageResizeNN(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageResizeNN(
		&obj, intFromValue(info, &index),
       intFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageResizeCanvas(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageResizeCanvas(
		&obj, intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageMipmaps(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageMipmaps(
		&obj

	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDither(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDither(
		&obj, intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageFlipVertical(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageFlipVertical(
		&obj

	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageFlipHorizontal(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageFlipHorizontal(
		&obj

	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageRotateCW(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageRotateCW(
		&obj

	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageRotateCCW(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageRotateCCW(
		&obj

	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageColorTint(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageColorTint(
		&obj, ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageColorInvert(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageColorInvert(
		&obj

	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageColorGrayscale(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageColorGrayscale(
		&obj

	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageColorContrast(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageColorContrast(
		&obj, floatFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageColorBrightness(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageColorBrightness(
		&obj, intFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageColorReplace(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageColorReplace(
		&obj, ColorFromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageClearBackground(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageClearBackground(
		&obj, ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawPixel(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDrawPixel(
		&obj, intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawPixelV(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDrawPixelV(
		&obj, Vector2FromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawLine(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDrawLine(
		&obj, intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawLineV(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDrawLineV(
		&obj, Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawCircle(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDrawCircle(
		&obj, intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawCircleV(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDrawCircleV(
		&obj, Vector2FromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawRectangle(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDrawRectangle(
		&obj, intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawRectangleV(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDrawRectangleV(
		&obj, Vector2FromValue(info, &index),
       Vector2FromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawRectangleRec(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDrawRectangleRec(
		&obj, RectangleFromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawRectangleLines(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDrawRectangleLines(
		&obj, RectangleFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDraw(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDraw(
		&obj, ImageFromValue(info, &index),
       RectangleFromValue(info, &index),
       RectangleFromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawText(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDrawText(
		&obj, (const char *) stringFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindImageDrawTextEx(const Napi::CallbackInfo& info) {
	int index = -1;
	Image obj = ImageFromValue(info, &index);
	ImageDrawTextEx(
		&obj, FontFromValue(info, &index),
       (const char *) stringFromValue(info, &index),
       Vector2FromValue(info, &index),
       floatFromValue(info, &index),
       floatFromValue(info, &index),
       ColorFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindGenTextureMipmaps(const Napi::CallbackInfo& info) {
	int index = -1;
	Texture2D obj = Texture2DFromValue(info, &index);
	GenTextureMipmaps(
		&obj

	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindUploadMesh(const Napi::CallbackInfo& info) {
	int index = -1;
	Mesh obj = MeshFromValue(info, &index);
	UploadMesh(
		&obj, boolFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindGenMeshTangents(const Napi::CallbackInfo& info) {
	int index = -1;
	Mesh obj = MeshFromValue(info, &index);
	GenMeshTangents(
		&obj

	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindGenMeshBinormals(const Napi::CallbackInfo& info) {
	int index = -1;
	Mesh obj = MeshFromValue(info, &index);
	GenMeshBinormals(
		&obj

	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindSetModelMeshMaterial(const Napi::CallbackInfo& info) {
	int index = -1;
	Model obj = ModelFromValue(info, &index);
	SetModelMeshMaterial(
		&obj, intFromValue(info, &index),
       intFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindWaveFormat(const Napi::CallbackInfo& info) {
	int index = -1;
	Wave obj = WaveFromValue(info, &index);
	WaveFormat(
		&obj, intFromValue(info, &index),
       intFromValue(info, &index),
       intFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
}

Napi::Value BindWaveCrop(const Napi::CallbackInfo& info) {
	int index = -1;
	Wave obj = WaveFromValue(info, &index);
	WaveCrop(
		&obj, intFromValue(info, &index),
       intFromValue(info, &index)
	);
	return ToValue(info.Env(), obj);
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
  exports.Set("BindSetShaderValue", Napi::Function::New(env, BindSetShaderValue));
  exports.Set("BindSetShaderValueV", Napi::Function::New(env, BindSetShaderValueV));
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

  return exports;
}

NODE_API_MODULE(addon, Init);

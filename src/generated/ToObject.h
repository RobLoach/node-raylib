
#ifndef NODE_RAYLIB_TOOBJECT_H_
#define NODE_RAYLIB_TOOBJECT_H_

#include <napi.h>

// TODO: these need soem more stuff to output correct values

void Tovoid(Napi::Env& env, Napi::Value value) {
}

float Tofloat(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>();
}

unsigned char Tounsignedchar(Napi::Env& env, Napi::Value value) {
  return value.As<Napi::Number>().Uint32Value();
}

int Toint(Napi::Env& env, Napi::Value) {
  return value.As<Napi::Number>();
}

unsigned int Tounsignedint(Napi::Env& env, Napi::Value) {
  return value.As<Napi::Number>();
}

unsigned short Tounsignedshort(Napi::Env& env, Napi::Value) {
  return value.As<Napi::Number>();
}

char Tochar(Napi::Env& env, Napi::Value) {
  return value.As<Napi::Number>().Uint32Value();
}

bool Tobool(Napi::Env& env, Napi::Value) {
  return value.As<Napi::Boolean>();
}


Matrix ToMatrix(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Matrix out;
  if (argObject.Has("m0")) {
    out.m0 = argObject.Get("m0").ToNumber().FloatValue();
  }
  if (argObject.Has("m1")) {
    out.m1 = argObject.Get("m1").ToNumber().FloatValue();
  }
  if (argObject.Has("m2")) {
    out.m2 = argObject.Get("m2").ToNumber().FloatValue();
  }
  if (argObject.Has("m3")) {
    out.m3 = argObject.Get("m3").ToNumber().FloatValue();
  }
  if (argObject.Has("m4")) {
    out.m4 = argObject.Get("m4").ToNumber().FloatValue();
  }
  if (argObject.Has("m5")) {
    out.m5 = argObject.Get("m5").ToNumber().FloatValue();
  }
  if (argObject.Has("m6")) {
    out.m6 = argObject.Get("m6").ToNumber().FloatValue();
  }
  if (argObject.Has("m7")) {
    out.m7 = argObject.Get("m7").ToNumber().FloatValue();
  }
  if (argObject.Has("m8")) {
    out.m8 = argObject.Get("m8").ToNumber().FloatValue();
  }
  if (argObject.Has("m9")) {
    out.m9 = argObject.Get("m9").ToNumber().FloatValue();
  }
  if (argObject.Has("m10")) {
    out.m10 = argObject.Get("m10").ToNumber().FloatValue();
  }
  if (argObject.Has("m11")) {
    out.m11 = argObject.Get("m11").ToNumber().FloatValue();
  }
  if (argObject.Has("m12")) {
    out.m12 = argObject.Get("m12").ToNumber().FloatValue();
  }
  if (argObject.Has("m13")) {
    out.m13 = argObject.Get("m13").ToNumber().FloatValue();
  }
  if (argObject.Has("m14")) {
    out.m14 = argObject.Get("m14").ToNumber().FloatValue();
  }
  if (argObject.Has("m15")) {
    out.m15 = argObject.Get("m15").ToNumber().FloatValue();
  }
  return out;
}

Napi::Object ToObject(Napi::Env& env, const Matrix& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("m0", input.m0);
  out.Set("m1", input.m1);
  out.Set("m2", input.m2);
  out.Set("m3", input.m3);
  out.Set("m4", input.m4);
  out.Set("m5", input.m5);
  out.Set("m6", input.m6);
  out.Set("m7", input.m7);
  out.Set("m8", input.m8);
  out.Set("m9", input.m9);
  out.Set("m10", input.m10);
  out.Set("m11", input.m11);
  out.Set("m12", input.m12);
  out.Set("m13", input.m13);
  out.Set("m14", input.m14);
  out.Set("m15", input.m15);
  return out;
}


Napi::Object ToObject(Napi::Env& env, const Vector2& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", input.x);
  out.Set("y", input.y);
  return out;
}

Vector2 ToVector2(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Vector2 out;
  
  if (argObject.Has("x")) {
    out.x = Tofloat(env, argObject.Get("x"));
  }


  if (argObject.Has("y")) {
    out.y = Tofloat(env, argObject.Get("y"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Vector3& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", input.x);
  out.Set("y", input.y);
  out.Set("z", input.z);
  return out;
}

Vector3 ToVector3(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Vector3 out;
  
  if (argObject.Has("x")) {
    out.x = Tofloat(env, argObject.Get("x"));
  }


  if (argObject.Has("y")) {
    out.y = Tofloat(env, argObject.Get("y"));
  }


  if (argObject.Has("z")) {
    out.z = Tofloat(env, argObject.Get("z"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Vector4& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", input.x);
  out.Set("y", input.y);
  out.Set("z", input.z);
  out.Set("w", input.w);
  return out;
}

Vector4 ToVector4(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Vector4 out;
  
  if (argObject.Has("x")) {
    out.x = Tofloat(env, argObject.Get("x"));
  }


  if (argObject.Has("y")) {
    out.y = Tofloat(env, argObject.Get("y"));
  }


  if (argObject.Has("z")) {
    out.z = Tofloat(env, argObject.Get("z"));
  }


  if (argObject.Has("w")) {
    out.w = Tofloat(env, argObject.Get("w"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Color& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("r", input.r);
  out.Set("g", input.g);
  out.Set("b", input.b);
  out.Set("a", input.a);
  return out;
}

Color ToColor(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Color out;
  
  if (argObject.Has("r")) {
    out.r = Tounsignedchar(env, argObject.Get("r"));
  }


  if (argObject.Has("g")) {
    out.g = Tounsignedchar(env, argObject.Get("g"));
  }


  if (argObject.Has("b")) {
    out.b = Tounsignedchar(env, argObject.Get("b"));
  }


  if (argObject.Has("a")) {
    out.a = Tounsignedchar(env, argObject.Get("a"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Rectangle& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", input.x);
  out.Set("y", input.y);
  out.Set("width", input.width);
  out.Set("height", input.height);
  return out;
}

Rectangle ToRectangle(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Rectangle out;
  
  if (argObject.Has("x")) {
    out.x = Tofloat(env, argObject.Get("x"));
  }


  if (argObject.Has("y")) {
    out.y = Tofloat(env, argObject.Get("y"));
  }


  if (argObject.Has("width")) {
    out.width = Tofloat(env, argObject.Get("width"));
  }


  if (argObject.Has("height")) {
    out.height = Tofloat(env, argObject.Get("height"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Image& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("data", (int64_t)input.data);
  out.Set("width", input.width);
  out.Set("height", input.height);
  out.Set("mipmaps", input.mipmaps);
  out.Set("format", input.format);
  return out;
}

Image ToImage(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Image out;
  
  if (argObject.Has("data")) {
    out.data = (void *)obj.Get("data").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("width")) {
    out.width = Toint(env, argObject.Get("width"));
  }


  if (argObject.Has("height")) {
    out.height = Toint(env, argObject.Get("height"));
  }


  if (argObject.Has("mipmaps")) {
    out.mipmaps = Toint(env, argObject.Get("mipmaps"));
  }


  if (argObject.Has("format")) {
    out.format = Toint(env, argObject.Get("format"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Texture& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("id", input.id);
  out.Set("width", input.width);
  out.Set("height", input.height);
  out.Set("mipmaps", input.mipmaps);
  out.Set("format", input.format);
  return out;
}

Texture ToTexture(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Texture out;
  
  if (argObject.Has("id")) {
    out.id = Tounsignedint(env, argObject.Get("id"));
  }


  if (argObject.Has("width")) {
    out.width = Toint(env, argObject.Get("width"));
  }


  if (argObject.Has("height")) {
    out.height = Toint(env, argObject.Get("height"));
  }


  if (argObject.Has("mipmaps")) {
    out.mipmaps = Toint(env, argObject.Get("mipmaps"));
  }


  if (argObject.Has("format")) {
    out.format = Toint(env, argObject.Get("format"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const RenderTexture& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("id", input.id);
  out.Set("texture", ToObject(env, input.texture));
  out.Set("depth", ToObject(env, input.depth));
  return out;
}

RenderTexture ToRenderTexture(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  RenderTexture out;
  
  if (argObject.Has("id")) {
    out.id = Tounsignedint(env, argObject.Get("id"));
  }


  if (argObject.Has("texture")) {
    out.texture = ToTexture(env, argObject.Get("texture"));
  }


  if (argObject.Has("depth")) {
    out.depth = ToTexture(env, argObject.Get("depth"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const NPatchInfo& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("source", ToObject(env, input.source));
  out.Set("left", input.left);
  out.Set("top", input.top);
  out.Set("right", input.right);
  out.Set("bottom", input.bottom);
  out.Set("layout", input.layout);
  return out;
}

NPatchInfo ToNPatchInfo(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  NPatchInfo out;
  
  if (argObject.Has("source")) {
    out.source = ToRectangle(env, argObject.Get("source"));
  }


  if (argObject.Has("left")) {
    out.left = Toint(env, argObject.Get("left"));
  }


  if (argObject.Has("top")) {
    out.top = Toint(env, argObject.Get("top"));
  }


  if (argObject.Has("right")) {
    out.right = Toint(env, argObject.Get("right"));
  }


  if (argObject.Has("bottom")) {
    out.bottom = Toint(env, argObject.Get("bottom"));
  }


  if (argObject.Has("layout")) {
    out.layout = Toint(env, argObject.Get("layout"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const GlyphInfo& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("value", input.value);
  out.Set("offsetX", input.offsetX);
  out.Set("offsetY", input.offsetY);
  out.Set("advanceX", input.advanceX);
  out.Set("image", ToObject(env, input.image));
  return out;
}

GlyphInfo ToGlyphInfo(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  GlyphInfo out;
  
  if (argObject.Has("value")) {
    out.value = Toint(env, argObject.Get("value"));
  }


  if (argObject.Has("offsetX")) {
    out.offsetX = Toint(env, argObject.Get("offsetX"));
  }


  if (argObject.Has("offsetY")) {
    out.offsetY = Toint(env, argObject.Get("offsetY"));
  }


  if (argObject.Has("advanceX")) {
    out.advanceX = Toint(env, argObject.Get("advanceX"));
  }


  if (argObject.Has("image")) {
    out.image = ToImage(env, argObject.Get("image"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Font& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("baseSize", input.baseSize);
  out.Set("glyphCount", input.glyphCount);
  out.Set("glyphPadding", input.glyphPadding);
  out.Set("texture", ToObject(env, input.texture));
  out.Set("recs", (int64_t)input.recs);
  out.Set("glyphs", (int64_t)input.glyphs);
  return out;
}

Font ToFont(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Font out;
  
  if (argObject.Has("baseSize")) {
    out.baseSize = Toint(env, argObject.Get("baseSize"));
  }


  if (argObject.Has("glyphCount")) {
    out.glyphCount = Toint(env, argObject.Get("glyphCount"));
  }


  if (argObject.Has("glyphPadding")) {
    out.glyphPadding = Toint(env, argObject.Get("glyphPadding"));
  }


  if (argObject.Has("texture")) {
    out.texture = ToTexture(env, argObject.Get("texture"));
  }


  if (argObject.Has("recs")) {
    out.recs = (Rectangle *)obj.Get("recs").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("glyphs")) {
    out.glyphs = (GlyphInfo *)obj.Get("glyphs").As<Napi::Number>().Int64Value();
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Camera3D& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("position", ToObject(env, input.position));
  out.Set("target", ToObject(env, input.target));
  out.Set("up", ToObject(env, input.up));
  out.Set("fovy", input.fovy);
  out.Set("projection", input.projection);
  return out;
}

Camera3D ToCamera3D(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Camera3D out;
  
  if (argObject.Has("position")) {
    out.position = ToVector3(env, argObject.Get("position"));
  }


  if (argObject.Has("target")) {
    out.target = ToVector3(env, argObject.Get("target"));
  }


  if (argObject.Has("up")) {
    out.up = ToVector3(env, argObject.Get("up"));
  }


  if (argObject.Has("fovy")) {
    out.fovy = Tofloat(env, argObject.Get("fovy"));
  }


  if (argObject.Has("projection")) {
    out.projection = Toint(env, argObject.Get("projection"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Camera2D& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("offset", ToObject(env, input.offset));
  out.Set("target", ToObject(env, input.target));
  out.Set("rotation", input.rotation);
  out.Set("zoom", input.zoom);
  return out;
}

Camera2D ToCamera2D(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Camera2D out;
  
  if (argObject.Has("offset")) {
    out.offset = ToVector2(env, argObject.Get("offset"));
  }


  if (argObject.Has("target")) {
    out.target = ToVector2(env, argObject.Get("target"));
  }


  if (argObject.Has("rotation")) {
    out.rotation = Tofloat(env, argObject.Get("rotation"));
  }


  if (argObject.Has("zoom")) {
    out.zoom = Tofloat(env, argObject.Get("zoom"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Mesh& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("vertexCount", input.vertexCount);
  out.Set("triangleCount", input.triangleCount);
  out.Set("vertices", (int64_t)input.vertices);
  out.Set("texcoords", (int64_t)input.texcoords);
  out.Set("texcoords", (int64_t)input.texcoords);
  out.Set("normals", (int64_t)input.normals);
  out.Set("tangents", (int64_t)input.tangents);
  out.Set("colors", (int64_t)input.colors);
  out.Set("indices", (int64_t)input.indices);
  out.Set("animVertices", (int64_t)input.animVertices);
  out.Set("animNormals", (int64_t)input.animNormals);
  out.Set("boneIds", (int64_t)input.boneIds);
  out.Set("boneWeights", (int64_t)input.boneWeights);
  out.Set("vaoId", input.vaoId);
  out.Set("vboId", (int64_t)input.vboId);
  return out;
}

Mesh ToMesh(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Mesh out;
  
  if (argObject.Has("vertexCount")) {
    out.vertexCount = Toint(env, argObject.Get("vertexCount"));
  }


  if (argObject.Has("triangleCount")) {
    out.triangleCount = Toint(env, argObject.Get("triangleCount"));
  }


  if (argObject.Has("vertices")) {
    out.vertices = (float *)obj.Get("vertices").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("texcoords")) {
    out.texcoords = (float *)obj.Get("texcoords").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("texcoords")) {
    out.texcoords = (float *)obj.Get("texcoords").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("normals")) {
    out.normals = (float *)obj.Get("normals").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("tangents")) {
    out.tangents = (float *)obj.Get("tangents").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("colors")) {
    out.colors = (unsigned char *)obj.Get("colors").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("indices")) {
    out.indices = (unsigned short *)obj.Get("indices").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("animVertices")) {
    out.animVertices = (float *)obj.Get("animVertices").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("animNormals")) {
    out.animNormals = (float *)obj.Get("animNormals").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("boneIds")) {
    out.boneIds = (unsigned char *)obj.Get("boneIds").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("boneWeights")) {
    out.boneWeights = (float *)obj.Get("boneWeights").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("vaoId")) {
    out.vaoId = Tounsignedint(env, argObject.Get("vaoId"));
  }


  if (argObject.Has("vboId")) {
    out.vboId = (unsigned int *)obj.Get("vboId").As<Napi::Number>().Int64Value();
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Shader& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("id", input.id);
  out.Set("locs", (int64_t)input.locs);
  return out;
}

Shader ToShader(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Shader out;
  
  if (argObject.Has("id")) {
    out.id = Tounsignedint(env, argObject.Get("id"));
  }


  if (argObject.Has("locs")) {
    out.locs = (int *)obj.Get("locs").As<Napi::Number>().Int64Value();
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const MaterialMap& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("texture", ToObject(env, input.texture));
  out.Set("color", ToObject(env, input.color));
  out.Set("value", input.value);
  return out;
}

MaterialMap ToMaterialMap(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  MaterialMap out;
  
  if (argObject.Has("texture")) {
    out.texture = ToTexture(env, argObject.Get("texture"));
  }


  if (argObject.Has("color")) {
    out.color = ToColor(env, argObject.Get("color"));
  }


  if (argObject.Has("value")) {
    out.value = Tofloat(env, argObject.Get("value"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Material& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("shader", ToObject(env, input.shader));
  out.Set("maps", (int64_t)input.maps);
  out.Set("params", input.params);
  return out;
}

Material ToMaterial(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Material out;
  
  if (argObject.Has("shader")) {
    out.shader = ToShader(env, argObject.Get("shader"));
  }


  if (argObject.Has("maps")) {
    out.maps = (MaterialMap *)obj.Get("maps").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("params")) {
    out.params = Tofloat(env, argObject.Get("params"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Transform& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("translation", ToObject(env, input.translation));
  out.Set("rotation", ToObject(env, input.rotation));
  out.Set("scale", ToObject(env, input.scale));
  return out;
}

Transform ToTransform(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Transform out;
  
  if (argObject.Has("translation")) {
    out.translation = ToVector3(env, argObject.Get("translation"));
  }


  if (argObject.Has("rotation")) {
    out.rotation = ToQuaternion(env, argObject.Get("rotation"));
  }


  if (argObject.Has("scale")) {
    out.scale = ToVector3(env, argObject.Get("scale"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const BoneInfo& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("name", input.name);
  out.Set("parent", input.parent);
  return out;
}

BoneInfo ToBoneInfo(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  BoneInfo out;
  
  if (argObject.Has("name")) {
    out.name = Tochar(env, argObject.Get("name"));
  }


  if (argObject.Has("parent")) {
    out.parent = Toint(env, argObject.Get("parent"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Model& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("transform", ToObject(env, input.transform));
  out.Set("meshCount", input.meshCount);
  out.Set("materialCount", input.materialCount);
  out.Set("meshes", (int64_t)input.meshes);
  out.Set("materials", (int64_t)input.materials);
  out.Set("meshMaterial", (int64_t)input.meshMaterial);
  out.Set("boneCount", input.boneCount);
  out.Set("bones", (int64_t)input.bones);
  out.Set("bindPose", (int64_t)input.bindPose);
  return out;
}

Model ToModel(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Model out;
  
  if (argObject.Has("transform")) {
    out.transform = ToMatrix(env, argObject.Get("transform"));
  }


  if (argObject.Has("meshCount")) {
    out.meshCount = Toint(env, argObject.Get("meshCount"));
  }


  if (argObject.Has("materialCount")) {
    out.materialCount = Toint(env, argObject.Get("materialCount"));
  }


  if (argObject.Has("meshes")) {
    out.meshes = (Mesh *)obj.Get("meshes").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("materials")) {
    out.materials = (Material *)obj.Get("materials").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("meshMaterial")) {
    out.meshMaterial = (int *)obj.Get("meshMaterial").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("boneCount")) {
    out.boneCount = Toint(env, argObject.Get("boneCount"));
  }


  if (argObject.Has("bones")) {
    out.bones = (BoneInfo *)obj.Get("bones").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("bindPose")) {
    out.bindPose = (Transform *)obj.Get("bindPose").As<Napi::Number>().Int64Value();
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const ModelAnimation& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("boneCount", input.boneCount);
  out.Set("frameCount", input.frameCount);
  out.Set("bones", (int64_t)input.bones);
  out.Set("framePoses", (int64_t)input.framePoses);
  return out;
}

ModelAnimation ToModelAnimation(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  ModelAnimation out;
  
  if (argObject.Has("boneCount")) {
    out.boneCount = Toint(env, argObject.Get("boneCount"));
  }


  if (argObject.Has("frameCount")) {
    out.frameCount = Toint(env, argObject.Get("frameCount"));
  }


  if (argObject.Has("bones")) {
    out.bones = (BoneInfo *)obj.Get("bones").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("framePoses")) {
    out.framePoses = (Transform **)obj.Get("framePoses").As<Napi::Number>().Int64Value();
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Ray& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("position", ToObject(env, input.position));
  out.Set("direction", ToObject(env, input.direction));
  return out;
}

Ray ToRay(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Ray out;
  
  if (argObject.Has("position")) {
    out.position = ToVector3(env, argObject.Get("position"));
  }


  if (argObject.Has("direction")) {
    out.direction = ToVector3(env, argObject.Get("direction"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const RayCollision& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("hit", input.hit);
  out.Set("distance", input.distance);
  out.Set("point", ToObject(env, input.point));
  out.Set("normal", ToObject(env, input.normal));
  return out;
}

RayCollision ToRayCollision(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  RayCollision out;
  
  if (argObject.Has("hit")) {
    out.hit = Tobool(env, argObject.Get("hit"));
  }


  if (argObject.Has("distance")) {
    out.distance = Tofloat(env, argObject.Get("distance"));
  }


  if (argObject.Has("point")) {
    out.point = ToVector3(env, argObject.Get("point"));
  }


  if (argObject.Has("normal")) {
    out.normal = ToVector3(env, argObject.Get("normal"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const BoundingBox& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("min", ToObject(env, input.min));
  out.Set("max", ToObject(env, input.max));
  return out;
}

BoundingBox ToBoundingBox(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  BoundingBox out;
  
  if (argObject.Has("min")) {
    out.min = ToVector3(env, argObject.Get("min"));
  }


  if (argObject.Has("max")) {
    out.max = ToVector3(env, argObject.Get("max"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Wave& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("frameCount", input.frameCount);
  out.Set("sampleRate", input.sampleRate);
  out.Set("sampleSize", input.sampleSize);
  out.Set("channels", input.channels);
  out.Set("data", (int64_t)input.data);
  return out;
}

Wave ToWave(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Wave out;
  
  if (argObject.Has("frameCount")) {
    out.frameCount = Tounsignedint(env, argObject.Get("frameCount"));
  }


  if (argObject.Has("sampleRate")) {
    out.sampleRate = Tounsignedint(env, argObject.Get("sampleRate"));
  }


  if (argObject.Has("sampleSize")) {
    out.sampleSize = Tounsignedint(env, argObject.Get("sampleSize"));
  }


  if (argObject.Has("channels")) {
    out.channels = Tounsignedint(env, argObject.Get("channels"));
  }


  if (argObject.Has("data")) {
    out.data = (void *)obj.Get("data").As<Napi::Number>().Int64Value();
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const AudioStream& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("buffer", (int64_t)input.buffer);
  out.Set("sampleRate", input.sampleRate);
  out.Set("sampleSize", input.sampleSize);
  out.Set("channels", input.channels);
  return out;
}

AudioStream ToAudioStream(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  AudioStream out;
  
  if (argObject.Has("buffer")) {
    out.buffer = (rAudioBuffer *)obj.Get("buffer").As<Napi::Number>().Int64Value();
  }


  if (argObject.Has("sampleRate")) {
    out.sampleRate = Tounsignedint(env, argObject.Get("sampleRate"));
  }


  if (argObject.Has("sampleSize")) {
    out.sampleSize = Tounsignedint(env, argObject.Get("sampleSize"));
  }


  if (argObject.Has("channels")) {
    out.channels = Tounsignedint(env, argObject.Get("channels"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Sound& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("stream", ToObject(env, input.stream));
  out.Set("frameCount", input.frameCount);
  return out;
}

Sound ToSound(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Sound out;
  
  if (argObject.Has("stream")) {
    out.stream = ToAudioStream(env, argObject.Get("stream"));
  }


  if (argObject.Has("frameCount")) {
    out.frameCount = Tounsignedint(env, argObject.Get("frameCount"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const Music& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("stream", ToObject(env, input.stream));
  out.Set("frameCount", input.frameCount);
  out.Set("looping", input.looping);
  out.Set("ctxType", input.ctxType);
  out.Set("ctxData", (int64_t)input.ctxData);
  return out;
}

Music ToMusic(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Music out;
  
  if (argObject.Has("stream")) {
    out.stream = ToAudioStream(env, argObject.Get("stream"));
  }


  if (argObject.Has("frameCount")) {
    out.frameCount = Tounsignedint(env, argObject.Get("frameCount"));
  }


  if (argObject.Has("looping")) {
    out.looping = Tobool(env, argObject.Get("looping"));
  }


  if (argObject.Has("ctxType")) {
    out.ctxType = Toint(env, argObject.Get("ctxType"));
  }


  if (argObject.Has("ctxData")) {
    out.ctxData = (void *)obj.Get("ctxData").As<Napi::Number>().Int64Value();
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const VrDeviceInfo& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("hResolution", input.hResolution);
  out.Set("vResolution", input.vResolution);
  out.Set("hScreenSize", input.hScreenSize);
  out.Set("vScreenSize", input.vScreenSize);
  out.Set("vScreenCenter", input.vScreenCenter);
  out.Set("eyeToScreenDistance", input.eyeToScreenDistance);
  out.Set("lensSeparationDistance", input.lensSeparationDistance);
  out.Set("interpupillaryDistance", input.interpupillaryDistance);
  out.Set("lensDistortionValues", input.lensDistortionValues);
  out.Set("chromaAbCorrection", input.chromaAbCorrection);
  return out;
}

VrDeviceInfo ToVrDeviceInfo(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  VrDeviceInfo out;
  
  if (argObject.Has("hResolution")) {
    out.hResolution = Toint(env, argObject.Get("hResolution"));
  }


  if (argObject.Has("vResolution")) {
    out.vResolution = Toint(env, argObject.Get("vResolution"));
  }


  if (argObject.Has("hScreenSize")) {
    out.hScreenSize = Tofloat(env, argObject.Get("hScreenSize"));
  }


  if (argObject.Has("vScreenSize")) {
    out.vScreenSize = Tofloat(env, argObject.Get("vScreenSize"));
  }


  if (argObject.Has("vScreenCenter")) {
    out.vScreenCenter = Tofloat(env, argObject.Get("vScreenCenter"));
  }


  if (argObject.Has("eyeToScreenDistance")) {
    out.eyeToScreenDistance = Tofloat(env, argObject.Get("eyeToScreenDistance"));
  }


  if (argObject.Has("lensSeparationDistance")) {
    out.lensSeparationDistance = Tofloat(env, argObject.Get("lensSeparationDistance"));
  }


  if (argObject.Has("interpupillaryDistance")) {
    out.interpupillaryDistance = Tofloat(env, argObject.Get("interpupillaryDistance"));
  }


  if (argObject.Has("lensDistortionValues")) {
    out.lensDistortionValues = Tofloat(env, argObject.Get("lensDistortionValues"));
  }


  if (argObject.Has("chromaAbCorrection")) {
    out.chromaAbCorrection = Tofloat(env, argObject.Get("chromaAbCorrection"));
  }

  return out;
}

  
Napi::Object ToObject(Napi::Env& env, const VrStereoConfig& input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("projection", ToObject(env, input.projection));
  out.Set("viewOffset", ToObject(env, input.viewOffset));
  out.Set("leftLensCenter", input.leftLensCenter);
  out.Set("rightLensCenter", input.rightLensCenter);
  out.Set("leftScreenCenter", input.leftScreenCenter);
  out.Set("rightScreenCenter", input.rightScreenCenter);
  out.Set("scale", input.scale);
  out.Set("scaleIn", input.scaleIn);
  return out;
}

VrStereoConfig ToVrStereoConfig(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  VrStereoConfig out;
  
  if (argObject.Has("projection")) {
    out.projection = ToMatrix(env, argObject.Get("projection"));
  }


  if (argObject.Has("viewOffset")) {
    out.viewOffset = ToMatrix(env, argObject.Get("viewOffset"));
  }


  if (argObject.Has("leftLensCenter")) {
    out.leftLensCenter = Tofloat(env, argObject.Get("leftLensCenter"));
  }


  if (argObject.Has("rightLensCenter")) {
    out.rightLensCenter = Tofloat(env, argObject.Get("rightLensCenter"));
  }


  if (argObject.Has("leftScreenCenter")) {
    out.leftScreenCenter = Tofloat(env, argObject.Get("leftScreenCenter"));
  }


  if (argObject.Has("rightScreenCenter")) {
    out.rightScreenCenter = Tofloat(env, argObject.Get("rightScreenCenter"));
  }


  if (argObject.Has("scale")) {
    out.scale = Tofloat(env, argObject.Get("scale"));
  }


  if (argObject.Has("scaleIn")) {
    out.scaleIn = Tofloat(env, argObject.Get("scaleIn"));
  }

  return out;
}


#endif

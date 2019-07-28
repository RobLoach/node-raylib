#ifndef NODE_RAYLIB_TOOBJECT_H_
#define NODE_RAYLIB_TOOBJECT_H_

#include <napi.h>

/**
 * Convert the given argument value to a Color.
 */
Color ToColor(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());

  Color output{0, 0, 0, 255};
  if (argObject.Has("r")) {
    output.r = argObject.Get("r").ToNumber().Int32Value();
  }
  if (argObject.Has("g")) {
    output.g = argObject.Get("g").ToNumber().Int32Value();
  }
  if (argObject.Has("b")) {
    output.b = argObject.Get("b").ToNumber().Int32Value();
  }
  if (argObject.Has("a")) {
    output.a = argObject.Get("a").ToNumber().Int32Value();
  }

  return output;
}

Napi::Object ToObject(Napi::Env& env, Color color) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("r", color.r);
  out.Set("g", color.g);
  out.Set("b", color.b);
  out.Set("a", color.a);
  return out;
}

Vector2 ToVector2(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Vector2 out{0, 0};
  if (argObject.Has("x")) {
    out.x = argObject.Get("x").ToNumber().FloatValue();
  }
  if (argObject.Has("y")) {
    out.y = argObject.Get("y").ToNumber().FloatValue();
  }
  return out;
}

Napi::Object ToObject(Napi::Env& env, Vector2 input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", input.x);
  out.Set("y", input.y);
  return out;
}

Vector3 ToVector3(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Vector3 out;
  if (argObject.Has("x")) {
    out.x = argObject.Get("x").ToNumber().FloatValue();
  }
  if (argObject.Has("y")) {
    out.y = argObject.Get("y").ToNumber().FloatValue();
  }
  if (argObject.Has("z")) {
    out.z = argObject.Get("z").ToNumber().FloatValue();
  }
  return out;
}

Napi::Object ToObject(Napi::Env& env, Vector3 input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", input.x);
  out.Set("y", input.y);
  out.Set("z", input.z);
  return out;
}

Vector4 ToVector4(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Vector4 out;
  if (argObject.Has("x")) {
    out.x = argObject.Get("x").ToNumber().FloatValue();
  }
  if (argObject.Has("y")) {
    out.y = argObject.Get("y").ToNumber().FloatValue();
  }
  if (argObject.Has("z")) {
    out.z = argObject.Get("z").ToNumber().FloatValue();
  }
  if (argObject.Has("w")) {
    out.w = argObject.Get("w").ToNumber().FloatValue();
  }
  return out;
}

Napi::Object ToObject(Napi::Env& env, Vector4 input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", input.x);
  out.Set("y", input.y);
  out.Set("z", input.z);
  out.Set("w", input.w);
  return out;
}

Rectangle ToRectangle(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Rectangle out;
  if (argObject.Has("x")) {
    out.x = argObject.Get("x").ToNumber().FloatValue();
  }
  if (argObject.Has("y")) {
    out.y = argObject.Get("y").ToNumber().FloatValue();
  }
  if (argObject.Has("width")) {
    out.width = argObject.Get("width").ToNumber().FloatValue();
  }
  if (argObject.Has("height")) {
    out.height = argObject.Get("height").ToNumber().FloatValue();
  }
  return out;
}

Napi::Object ToObject(Napi::Env& env, Rectangle input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", input.x);
  out.Set("y", input.y);
  out.Set("width", input.width);
  out.Set("height", input.height);
  return out;
}

Image ToImage(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Image out;
  if (argObject.Has("data")) {
    out.data = (void*)argObject.Get("data").ToNumber().Int64Value();
  }
  if (argObject.Has("width")) {
    out.width = argObject.Get("width").ToNumber().Int32Value();
  }
  if (argObject.Has("height")) {
    out.height = argObject.Get("height").ToNumber().Int32Value();
  }
  if (argObject.Has("mipmaps")) {
    out.mipmaps = argObject.Get("mipmaps").ToNumber().Int32Value();
  }
  if (argObject.Has("format")) {
    out.format = argObject.Get("format").ToNumber().Int32Value();
  }
  return out;
}

Napi::Object ToObject(Napi::Env& env, Image input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("data", (int64_t)input.data);
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
    out.id = argObject.Get("id").ToNumber().Uint32Value();
  }
  if (argObject.Has("width")) {
    out.width = argObject.Get("width").ToNumber().Int32Value();
  }
  if (argObject.Has("height")) {
    out.height = argObject.Get("height").ToNumber().Int32Value();
  }
  if (argObject.Has("mipmaps")) {
    out.mipmaps = argObject.Get("mipmaps").ToNumber().Int32Value();
  }
  if (argObject.Has("format")) {
    out.format = argObject.Get("format").ToNumber().Int32Value();
  }
  return out;
}

Napi::Object ToObject(Napi::Env& env, Texture input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("id", input.id);
  out.Set("width", input.width);
  out.Set("height", input.height);
  out.Set("mipmaps", input.mipmaps);
  out.Set("format", input.format);
  return out;
}

RenderTexture2D ToRenderTexture2D(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  RenderTexture2D out;
  if (argObject.Has("id")) {
    out.id = argObject.Get("id").ToNumber().Uint32Value();
  }
  if (argObject.Has("texture")) {
    out.texture = ToTexture(env, argObject.Get("texture"));
  }
  if (argObject.Has("depth")) {
    out.depth = ToTexture(env, argObject.Get("depth"));
  }
  if (argObject.Has("depthTexture")) {
    out.depthTexture = argObject.Get("depthTexture").ToBoolean();
  }
  return out;
}

Napi::Object ToObject(Napi::Env& env, RenderTexture2D input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("id", input.id);
  out.Set("texture", ToObject(env, input.texture));
  out.Set("depth", ToObject(env, input.depth));
  out.Set("depthTexture", input.depthTexture);
  return out;
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

Napi::Object ToObject(Napi::Env& env, Matrix input) {
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

/**
 * Convert the given argument value to a Ray.
 */
Ray ToRay(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());

  Ray output;
  if (argObject.Has("position")) {
    output.position = ToVector3(env, argObject.Get("position"));
  }
  if (argObject.Has("direction")) {
    output.direction = ToVector3(env, argObject.Get("direction"));
  }

  return output;
}

Napi::Object ToObject(Napi::Env& env, Ray input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("position", ToObject(env, input.position));
  out.Set("direction", ToObject(env, input.direction));
  return out;
}

/**
 * Convert the given argument value to a BoundingBox.
 */
BoundingBox ToBoundingBox(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());

  BoundingBox output;
  if (argObject.Has("min")) {
    output.min = ToVector3(env, argObject.Get("min"));
  }
  if (argObject.Has("max")) {
    output.max = ToVector3(env, argObject.Get("max"));
  }

  return output;
}

Napi::Object ToObject(Napi::Env& env, BoundingBox input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("min", ToObject(env, input.min));
  out.Set("max", ToObject(env, input.max));
  return out;
}

/**
 * Convert the given argument value to a Camera.
 */
Camera ToCamera(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());

  Camera output;
  if (argObject.Has("position")) {
    output.position = ToVector3(env, argObject.Get("position"));
  }
  if (argObject.Has("target")) {
    output.target = ToVector3(env, argObject.Get("target"));
  }
  if (argObject.Has("up")) {
    output.up = ToVector3(env, argObject.Get("up"));
  }
  if (argObject.Has("fovy")) {
    output.fovy = argObject.Get("fovy").ToNumber().FloatValue();
  }
  if (argObject.Has("type")) {
    output.type = argObject.Get("type").ToNumber().Int32Value();
  }

  return output;
}

/**
 * Convert the given Camera to a Napi object.
 */
Napi::Object ToObject(Napi::Env& env, Camera input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("position", ToObject(env, input.position));
  out.Set("target", ToObject(env, input.target));
  out.Set("up", ToObject(env, input.up));
  out.Set("fovy", input.fovy);
  out.Set("type", input.type);
  return out;
}

/**
 * Convert the given argument value to a Camera.
 */
Camera2D ToCamera2D(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());

  Camera2D output;
  if (argObject.Has("offset")) {
    output.offset = ToVector2(env, argObject.Get("offset"));
  }
  if (argObject.Has("target")) {
    output.target = ToVector2(env, argObject.Get("target"));
  }
  if (argObject.Has("rotation")) {
    output.rotation = argObject.Get("rotation").ToNumber().FloatValue();
  }
  if (argObject.Has("zoom")) {
    output.zoom = argObject.Get("zoom").ToNumber().FloatValue();
  }

  return output;
}

/**
 * Convert the given Camera2D to a Napi object.
 */
Napi::Object ToObject(Napi::Env& env, Camera2D input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("offset", ToObject(env, input.offset));
  out.Set("target", ToObject(env, input.target));
  out.Set("rotation", input.rotation);
  out.Set("zoom", input.zoom);
  return out;
}

/**
 * Convert the given argument value to a NPatchInfo.
 */
NPatchInfo ToNPatchInfo(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());

  NPatchInfo output;
  if (argObject.Has("sourceRec")) {
    output.sourceRec = ToRectangle(env, argObject.Get("sourceRec"));
  }
  if (argObject.Has("left")) {
    output.left = argObject.Get("left").ToNumber().Int32Value();
  }
  if (argObject.Has("top")) {
    output.top = argObject.Get("top").ToNumber().Int32Value();
  }
  if (argObject.Has("right")) {
    output.right = argObject.Get("right").ToNumber().Int32Value();
  }
  if (argObject.Has("bottom")) {
    output.bottom = argObject.Get("bottom").ToNumber().Int32Value();
  }
  if (argObject.Has("type")) {
    output.type = argObject.Get("type").ToNumber().Int32Value();
  }

  return output;
}

/**
 * Convert the given NPatchInfo to a Napi object.
 */
Napi::Object ToObject(Napi::Env& env, NPatchInfo input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("sourceRec", ToObject(env, input.sourceRec));
  out.Set("left", input.left);
  out.Set("top", input.top);
  out.Set("right", input.right);
  out.Set("bottom", input.bottom);
  out.Set("type", input.type);
  return out;
}

Wave ToWave(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Wave out;
  if (argObject.Has("sampleCount")) {
    out.sampleCount = argObject.Get("sampleCount").ToNumber().Uint32Value();
  }
  if (argObject.Has("sampleRate")) {
    out.sampleRate = argObject.Get("sampleRate").ToNumber().Uint32Value();
  }
  if (argObject.Has("sampleSize")) {
    out.sampleSize = argObject.Get("sampleSize").ToNumber().Uint32Value();
  }
  if (argObject.Has("channels")) {
    out.channels = argObject.Get("channels").ToNumber().Uint32Value();
  }
  if (argObject.Has("data")) {
    out.data = (void*)argObject.Get("data").ToNumber().Int64Value();
  }
  return out;
}

Napi::Object ToObject(Napi::Env& env, Wave input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("sampleCount", input.sampleCount);
  out.Set("sampleRate", input.sampleRate);
  out.Set("sampleSize", input.sampleSize);
  out.Set("channels", input.channels);
  out.Set("data", (int64_t)input.data);
  return out;
}

AudioStream ToAudioStream(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  AudioStream out;
  if (argObject.Has("sampleRate")) {
    out.sampleRate = argObject.Get("sampleRate").ToNumber().Uint32Value();
  }
  if (argObject.Has("sampleSize")) {
    out.sampleSize = argObject.Get("sampleSize").ToNumber().Uint32Value();
  }
  if (argObject.Has("channels")) {
    out.channels = argObject.Get("channels").ToNumber().Uint32Value();
  }
  if (argObject.Has("buffer")) {
    out.buffer = (rAudioBuffer*)argObject.Get("buffer").ToNumber().Int64Value();
  }
  return out;
}

Napi::Object ToObject(Napi::Env& env, AudioStream input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("sampleRate", input.sampleRate);
  out.Set("sampleSize", input.sampleSize);
  out.Set("channels", input.channels);
  out.Set("buffer", (int64_t)input.buffer);
  return out;
}

Sound ToSound(Napi::Env& env, const Napi::Value& arg) {
  Napi::Object argObject(env, arg.As<Napi::Object>());
  Sound out;
  if (argObject.Has("sampleCount")) {
    out.sampleCount = argObject.Get("sampleCount").ToNumber().Uint32Value();
  }
  if (argObject.Has("stream")) {
    out.stream = ToAudioStream(env, argObject.Get("stream"));
  }
  return out;
}

Napi::Object ToObject(Napi::Env& env, Sound input) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("sampleCount", input.sampleCount);
  out.Set("stream", ToObject(env, input.stream));
  return out;
}

#endif

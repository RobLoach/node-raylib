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
    out.id = argObject.Get("id").ToNumber().Int32Value();
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

#endif

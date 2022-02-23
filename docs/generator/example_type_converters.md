
```cpp
Napi::Value ToValue(napi_env env, float obj) {
  return Napi::Number::New(env, obj);
}

Napi::Value ToValue(napi_env env, int obj) {
  return Napi::Number::New(env, obj);
}

Napi::Value ToValue(napi_env env, Vector2 obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", ToValue(env, obj.x)); // float
  out.Set("y", ToValue(env, obj.y)); // float
  return out;
}

Napi::Value ToValue(napi_env env, Texture2D obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("id", ToValue(env, obj.x)); // int
  out.Set("width", ToValue(env, obj.y)); // int
  out.Set("height", ToValue(env, obj.x)); // int
  out.Set("mipmaps", ToValue(env, obj.y)); // int
  out.Set("format", ToValue(env, obj.x)); // int
  // future: texture.pointer 
  return out;
}

float FloatFromValue(const Napi::CallbackInfo& info, int& index) {
  return info[index += 1].As<Napi::Number>();
}

Vector2 Vector2FromValue(const Napi::CallbackInfo& info, int& index) {
  return (Vector2) {
    FloatFromValue(info, index += 1),
    FloatFromValue(info, index += 1)
  };
}
```
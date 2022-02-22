
```cpp
Napi::Value ToValue(napi_env env, float obj) {
  return Napi::Number::New(env, obj);
}

Napi::Value ToValue(napi_env env, Vector2 obj) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("x", ToValue(env, obj.x));
  out.Set("y", ToValue(env, obj.y));
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

Then in a function binding:
```cpp

void BindDrawPixelV(const Napi::CallbackInfo& info, int& index) {
  int index = -1;
  DrawPixelV(
    Vector2FromValue(info, index),
    ColorFromValue(info, index)
  );
}

```

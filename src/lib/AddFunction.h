#ifndef NODE_RAYLIB_ADDFUNCTION_H_
#define NODE_RAYLIB_ADDFUNCTION_H_

#include <napi.h>
#include <iostream>
#include "./ValidArgs.h"
#include "./ToObject.h"

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)()) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 0)) {
      return env.Null();
    }
    (*f)();
    return env.Null();
  }));
}

template <typename P1>
inline void CleanUp(P1 val) {
  // Do nothing.
}

inline void CleanUp(const char* val) {
    free((char*)val);
}

template <typename ReturnType>
inline ReturnType GetArgFromParam(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  throw "GetArgFromParam not defined for this type!";
}

template <>
unsigned char GetArgFromParam<unsigned char>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return info[paramNum].As<Napi::Number>().Int32Value();
}
template <>
unsigned int GetArgFromParam<unsigned int>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return info[paramNum].As<Napi::Number>().Uint32Value();
}

template <>
const char* GetArgFromParam<const char*>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  std::string val = info[paramNum].As<Napi::String>().Utf8Value();
  const std::string::size_type size = val.size();
  char *buffer = new char[size + 1];   //we need extra char for NUL
  memcpy(buffer, val.c_str(), size + 1);
  return buffer;
}

template <>
int GetArgFromParam<int>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return info[paramNum].As<Napi::Number>().Int32Value();
}
template <>
long GetArgFromParam<long>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return info[paramNum].As<Napi::Number>().Int64Value();
}
template <>
Color GetArgFromParam<Color>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToColor(env, info[paramNum]);
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
Rectangle GetArgFromParam<Rectangle>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToRectangle(env, info[paramNum]);
}
template <>
float GetArgFromParam<float>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return info[paramNum].As<Napi::Number>().FloatValue();
}
template <>
Camera GetArgFromParam<Camera>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToCamera(env, info[paramNum]);
}
template <>
Camera2D GetArgFromParam<Camera2D>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToCamera2D(env, info[paramNum]);
}
template <>
Matrix GetArgFromParam<Matrix>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToMatrix(env, info[paramNum]);
}
template <>
Ray GetArgFromParam<Ray>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
  return ToRay(env, info[paramNum]);
}

template <>
Vector2 GetArgFromParam<Vector2>(Napi::Env& env, const Napi::CallbackInfo& info, int paramNum) {
    Vector2 arg0 = ToVector2(env, info[paramNum]);
}

template <typename P1>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    (*f)(arg0);
    CleanUp(arg0);
    return env.Null();
  }));
}

template <typename P1, typename P2>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    (*f)(arg0, arg1);
    CleanUp(arg0);
    CleanUp(arg1);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 3)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    (*f)(arg0, arg1, arg2);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 4)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    (*f)(arg0, arg1, arg2, arg3);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4, typename P5>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4, P5)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 5)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    (*f)(arg0, arg1, arg2, arg3, arg4);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4, typename P5, typename P6>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4, P5, P6)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 6)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4, P5, P6, P7)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 7)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4, P5, P6, P7, P8)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 8)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    return env.Null();
  }));
}

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
inline Napi::Value ToValue(Napi::Env& env, Vector2 value) {
  return ToObject(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, Vector3 value) {
  return ToObject(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, Vector4 value) {
  return ToObject(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, Color value) {
  return ToObject(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, Image value) {
  return ToObject(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, Rectangle value) {
  return ToObject(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, Texture value) {
  return ToObject(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, Matrix value) {
  return ToObject(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, Camera value) {
  return ToObject(env, value);
}
inline Napi::Value ToValue(Napi::Env& env, Ray value) {
  return ToObject(env, value);
}

template <typename ReturnType>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)()) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 0)) {
      return env.Null();
    }
    ReturnType output = (*f)();
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    ReturnType output = (*f)(arg0);
    CleanUp(arg0);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    ReturnType output = (*f)(arg0, arg1);
    CleanUp(arg0);
    CleanUp(arg1);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 3)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    ReturnType output = (*f)(arg0, arg1, arg2);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 4)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 5)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5, typename P6>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5, P6)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 6)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4, arg5);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5, P6, P7)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 7)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5, P6, P7, P8)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 8)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    return ToValue(env, output);
  }));
}

#endif

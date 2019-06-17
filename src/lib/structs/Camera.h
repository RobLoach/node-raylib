#ifndef NODE_RAYLIB_STRUCT_CAMERA_H_
#define NODE_RAYLIB_STRUCT_CAMERA_H_

#include <napi.h>
#include "../ToValue.h"

class CameraWrap : public Napi::ObjectWrap<Camera> {
  public:

    static Napi::Object Initialize(Napi::Env, Napi::Object exports) {
      Napi::Function constructor = DefineClass(env, "Camera", {
        InstanceAccessor("position", &CameraWrap::SetPosition, &CameraWrap::GetPosition),
        InstanceAccessor("target", &CameraWrap::GetTarget, &CameraWrap::SetTarget),
        InstanceAccessor("up", &CameraWrap::GetUp, &CameraWrap::SetUp),
        InstanceAccessor("fovy", &CameraWrap::GetFovy, &CameraWrap::SetFovy),
        InstanceAccessor("type", &CameraWrap::GetType, &CameraWrap::SetType),
      });
      exports.Set("Camera", constructor);
    }

    CameraWrap(const Napi::CallbackInfo &info) {
      if (info.Length() > 0) {
        SetPosition(info, info[0]);
      }
      if (info.Length() > 1) {
        SetTarget(info, info[1]);
      }
      if (info.Length() > 2) {
        SetUp(info, info[2]);
      }
      if (info.Length() > 3) {
        SetFovy(info, info[3]);
      }
      if (info.Length() > 4) {
        SetType(info, info[4]);
      }
    }

  private:
    Camera m_camera;
    Napi::Value GetPosition(const Napi::CallbackInfo &info);
    Napi::Value SetPosition(const Napi::CallbackInfo &info, const Napi::Value& value);
    Napi::Value GetTarget(const Napi::CallbackInfo &info);
    Napi::Value SetTarget(const Napi::CallbackInfo &info, const Napi::Value& value);
    Napi::Value GetUp(const Napi::CallbackInfo &info);
    Napi::Value SetUp(const Napi::CallbackInfo &info, const Napi::Value& value);
    Napi::Value GetFovy(const Napi::CallbackInfo &info);
    Napi::Value SetFovy(const Napi::CallbackInfo &info, const Napi::Value& value);
    Napi::Value GetType(const Napi::CallbackInfo &info);
    Napi::Value SetType(const Napi::CallbackInfo &info, const Napi::Value& value);
};

Napi::Value CameraWrap::GetPosition(const Napi::CallbackInfo &info){
    Napi::Env env = info.Env();
    return ToValue(env, this->m_camera.position);
}

Napi::Value CameraWrap::SetPosition(const Napi::CallbackInfo &info, const Napi::Value& input){
    Napi::Env env = info.Env();

    this->m_camera.position = ToVector3(env, input);
    return this->GetPosition(info);
}

Napi::Value CameraWrap::GetTarget(const Napi::CallbackInfo &info){
    Napi::Env env = info.Env();
    return ToValue(env, this->m_camera.target);
}

Napi::Value CameraWrap::SetTarget(const Napi::CallbackInfo &info, const Napi::Value& input){
    Napi::Env env = info.Env();

    this->m_camera.target = ToVector3(env, input);
    return this->GetTarget(info);
}

Napi::Value CameraWrap::GetUp(const Napi::CallbackInfo &info){
    Napi::Env env = info.Env();
    return ToValue(env, this->m_camera.up);
}

Napi::Value CameraWrap::SetUp(const Napi::CallbackInfo &info, const Napi::Value& input){
    Napi::Env env = info.Env();

    this->m_camera.up = ToVector3(env, input);
    return this->GetTarget(info);
}

Napi::Value CameraWrap::GetFovy(const Napi::CallbackInfo &info){
    Napi::Env env = info.Env();
    return ToValue(env, this->m_camera.fovy);
}

Napi::Value CameraWrap::SetFovy(const Napi::CallbackInfo &info, const Napi::Value& input){
    Napi::Env env = info.Env();

    this->m_camera.fovy = input.ToNumber().FloatValue();
    return this->GetFovy(info);
}

Napi::Value CameraWrap::GetType(const Napi::CallbackInfo &info){
    Napi::Env env = info.Env();
    return ToValue(env, this->m_camera.type);
}

Napi::Value CameraWrap::SetType(const Napi::CallbackInfo &info, const Napi::Value& input){
    Napi::Env env = info.Env();

    this->m_camera.fovy = input.ToNumber().Int32Value();
    return this->GetType(info);
}

#endif

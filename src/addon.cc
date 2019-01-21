#include <napi.h>
#include <raylib.h>

Napi::Value IsWindowReady_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  //int number = info[0].ToNumber().Int32Value();
  bool res = IsWindowReady();
  return Napi::Boolean::New(env, res);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "IsWindowReady"), Napi::Function::New(env, IsWindowReady_binding));
  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)


/*
NAN_METHOD(InitWindow) {
  string title(*Utf8String(info[2]));
  InitWindow(info[0]->IntegerValue(), info[1]->IntegerValue(), title.c_str());
}

NAN_METHOD(CloseWindow) {
  CloseWindow();
}

NAN_METHOD(WindowShouldClose) {
  bool output = WindowShouldClose();
  info.GetReturnValue().Set(output);
}

NAN_METHOD(IsWindowMinimized) {
  info.GetReturnValue().Set(IsWindowMinimized());
}
NAN_METHOD(FileExists) {
  string fileName(*Utf8String(info[0]));
  info.GetReturnValue().Set(FileExists(fileName.c_str()));
}

NAN_METHOD(ToggleFullscreen) {
  ToggleFullscreen();
}

NAN_METHOD(SetWindowTitle) {
  string title(*Utf8String(info[0]));
  SetWindowTitle(title.c_str());
}

NAN_METHOD(SetWindowPosition) {
  SetWindowPosition(info[0]->IntegerValue(), info[1]->IntegerValue());
}

NAN_METHOD(SetWindowMonitor) {
  SetWindowMonitor(info[0]->IntegerValue());
}

NAN_METHOD(SetWindowMinSize) {
  SetWindowMinSize(info[0]->IntegerValue(), info[1]->IntegerValue());
}

NAN_METHOD(SetWindowSize) {
  SetWindowSize(info[0]->IntegerValue(), info[1]->IntegerValue());
}

NAN_METHOD(GetScreenWidth) {
  info.GetReturnValue().Set(GetScreenWidth());
}

NAN_METHOD(GetScreenHeight) {
  info.GetReturnValue().Set(GetScreenHeight());
}

NAN_METHOD(SetTargetFPS) {
  SetTargetFPS(info[0]->IntegerValue());
}

NAN_METHOD(BeginDrawing) {
  BeginDrawing();
}

NAN_METHOD(EndDrawing) {
  EndDrawing();
}

NAN_METHOD(ClearBackground) {
  // Get the color
  Local<Object> input = info[0]->ToObject();

  Local<Number> r_prop = Nan::New<Number>("r").;
  Local<Number> g_prop = Nan::New<Number>("g");
  Local<Number> b_prop = Nan::New<Number>("b");
  Local<Number> a_prop = Nan::New<Number>("a");

  unsigned char r = Nan::Get(input, r_prop).ToLocalChecked()->NumberValue();
  unsigned char g = Nan::Get(input, g_prop).ToLocalChecked()->NumberValue();
  unsigned char b = Nan::Get(input, b_prop).ToLocalChecked()->NumberValue();
  unsigned char a = Nan::Get(input, a_prop).ToLocalChecked()->NumberValue();

  Color col{r, g, b, a};

  ClearBackground(col);
}

NAN_METHOD(DrawText) {
  std::string title = std::string(*Nan::Utf8String(info[0]));
  DrawText(title.c_str(), info[1]->IntegerValue(), info[2]->IntegerValue(), info[3]->IntegerValue(), LIGHTGRAY);
}

NAN_MODULE_INIT(Init) {
  NAN_EXPORT(target, InitWindow);
  NAN_EXPORT(target, CloseWindow);
  NAN_EXPORT(target, IsWindowReady);
  NAN_EXPORT(target, WindowShouldClose);
  NAN_EXPORT(target, IsWindowMinimized);
  NAN_EXPORT(target, ToggleFullscreen);
  NAN_EXPORT(target, SetWindowTitle);
  NAN_EXPORT(target, SetWindowPosition);
  NAN_EXPORT(target, SetWindowMonitor);
  NAN_EXPORT(target, FileExists);
  NAN_EXPORT(target, SetWindowMinSize);
  NAN_EXPORT(target, SetWindowSize);
  NAN_EXPORT(target, GetScreenWidth);
  NAN_EXPORT(target, GetScreenHeight);
  NAN_EXPORT(target, SetTargetFPS);
  NAN_EXPORT(target, BeginDrawing);
  NAN_EXPORT(target, EndDrawing);
  NAN_EXPORT(target, ClearBackground);
  NAN_EXPORT(target, DrawText);
}

NODE_MODULE(addon, Init)
*/

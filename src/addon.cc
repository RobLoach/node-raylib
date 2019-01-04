#include <node.h>
#include <nan.h>
#include <raylib.h>

using v8::FunctionTemplate;
using v8::Handle;
using v8::Object;
using v8::String;
using Nan::Utf8String;
using Nan::GetFunction;
using Nan::New;
using Nan::Set;
using std::string;

NAN_METHOD(InitWindow) {
  string title(*Utf8String(info[2]));
  InitWindow(info[0]->IntegerValue(), info[1]->IntegerValue(), title.c_str());
}

NAN_METHOD(CloseWindow) {
  CloseWindow();
}

NAN_METHOD(IsWindowReady) {
  info.GetReturnValue().Set(IsWindowReady());
}

NAN_METHOD(WindowShouldClose) {
  bool output = WindowShouldClose();
  info.GetReturnValue().Set(output);
}

NAN_METHOD(IsWindowMinimized) {
  info.GetReturnValue().Set(IsWindowMinimized());
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

// --------------------------------------------------

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
  ClearBackground(RAYWHITE);
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
  NAN_EXPORT(target, SetWindowMinSize);
  NAN_EXPORT(target, SetWindowSize);
  NAN_EXPORT(target, GetScreenWidth);
  NAN_EXPORT(target, GetScreenHeight);

  // ----------------------
  NAN_EXPORT(target, SetTargetFPS);
  NAN_EXPORT(target, BeginDrawing);
  NAN_EXPORT(target, EndDrawing);
  NAN_EXPORT(target, ClearBackground);
  NAN_EXPORT(target, DrawText);
}

NODE_MODULE(addon, Init)

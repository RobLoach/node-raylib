#include <node.h>
#include <nan.h>
#include <raylib.h>

using v8::FunctionTemplate;
using v8::Handle;
using v8::Object;
using v8::String;
using Nan::GetFunction;
using Nan::New;
using Nan::Set;

NAN_METHOD(IsWindowReady) {
	info.GetReturnValue().Set(IsWindowReady());
}

NAN_METHOD(WindowShouldClose) {
	bool ret = WindowShouldClose();
	info.GetReturnValue().Set(ret);
}

NAN_METHOD(IsWindowMinimized) {
	info.GetReturnValue().Set(IsWindowMinimized());
}

NAN_METHOD(SetTargetFPS) {
	SetTargetFPS(info[0]->IntegerValue());
}

NAN_METHOD(InitWindow) {
	std::string title = std::string(*Nan::Utf8String(info[2]));
	InitWindow(info[0]->IntegerValue(), info[1]->IntegerValue(), title.c_str());
}

NAN_METHOD(BeginDrawing) {
	BeginDrawing();
}

NAN_METHOD(EndDrawing) {
	EndDrawing();
}

NAN_METHOD(CloseWindow) {
	CloseWindow();
}

NAN_METHOD(ClearBackground) {
	ClearBackground(RAYWHITE);
}

NAN_METHOD(DrawText) {
	std::string title = std::string(*Nan::Utf8String(info[0]));
	DrawText(title.c_str(), info[1]->IntegerValue(), info[2]->IntegerValue(), info[3]->IntegerValue(), LIGHTGRAY);
}

NAN_MODULE_INIT(Init) {
	Set(target,
		New("IsWindowReady").ToLocalChecked(),
		GetFunction(New<FunctionTemplate>(IsWindowReady)).ToLocalChecked()
	);
	Set(target,
		New("WindowShouldClose").ToLocalChecked(),
		GetFunction(New<FunctionTemplate>(WindowShouldClose)).ToLocalChecked()
	);
	Set(target,
		New("IsWindowMinimized").ToLocalChecked(),
		GetFunction(New<FunctionTemplate>(IsWindowMinimized)).ToLocalChecked()
	);
	Set(target,
		New("SetTargetFPS").ToLocalChecked(),
		GetFunction(New<FunctionTemplate>(SetTargetFPS)).ToLocalChecked()
	);
	Set(target,
		New("InitWindow").ToLocalChecked(),
		GetFunction(New<FunctionTemplate>(InitWindow)).ToLocalChecked()
	);
	Set(target,
		New("BeginDrawing").ToLocalChecked(),
		GetFunction(New<FunctionTemplate>(BeginDrawing)).ToLocalChecked()
	);
	Set(target,
		New("EndDrawing").ToLocalChecked(),
		GetFunction(New<FunctionTemplate>(EndDrawing)).ToLocalChecked()
	);
	Set(target,
		New("CloseWindow").ToLocalChecked(),
		GetFunction(New<FunctionTemplate>(CloseWindow)).ToLocalChecked()
	);
	Set(target,
		New("ClearBackground").ToLocalChecked(),
		GetFunction(New<FunctionTemplate>(ClearBackground)).ToLocalChecked()
	);
	Set(target,
		New("DrawText").ToLocalChecked(),
		GetFunction(New<FunctionTemplate>(DrawText)).ToLocalChecked()
	);
}

NODE_MODULE(addon, Init)
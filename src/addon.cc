#include <node.h>
#include <nan.h>

using v8::FunctionTemplate;
using v8::Handle;
using v8::Object;
using v8::String;
using Nan::GetFunction;
using Nan::New;
using Nan::Set;

NAN_METHOD(Add) {
  double value = info[0]->NumberValue() + info[1]->NumberValue();
  info.GetReturnValue().Set(New(value));
}

NAN_MODULE_INIT(Init) {
  Set(target, New("add").ToLocalChecked(), GetFunction(New<FunctionTemplate>(Add)).ToLocalChecked());
}

NODE_MODULE(addon, Init)
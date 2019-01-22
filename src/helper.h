#ifndef NODE_RAYLIB_HELPER_H
#define NODE_RAYLIB_HELPER_H

#include <napi.h>

/**
 * Convert the given argument value to a Color.
 */
Color node_raylib_helper_value_to_color(Napi::Env& env, const Napi::Value& arg) {
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

Napi::Object node_raylib_helper_color_to_object(Napi::Env& env, Color color) {
  Napi::Object out = Napi::Object::New(env);
  out.Set("r", color.r);
  out.Set("g", color.g);
  out.Set("b", color.b);
  out.Set("a", color.a);
  return out;
}

/**
 * Ensures the number of arguments matches what's expected.
 */
bool checkNumberOfArguments(const Napi::Env& env, const Napi::CallbackInfo& info, int numberOfArgs) {
  if (info.Length() != numberOfArgs) {
    std::string output("Invalid number of arguments. Expected ");
    output.append(std::to_string(numberOfArgs));
    output.append(".");
    Napi::TypeError::New(env, output).ThrowAsJavaScriptException();
    return false;
  }
  return true;
}

#endif

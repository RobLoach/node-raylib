#ifndef NODE_RAYLIB_VALIDARGS_H_
#define NODE_RAYLIB_VALIDARGS_H_

#include <napi.h>

/**
 * Ensures the number of arguments matches what's expected.
 */
bool ValidArgs(const Napi::Env& env, const Napi::CallbackInfo& info, int numberOfArgs) {
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

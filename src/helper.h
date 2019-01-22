#ifndef NODE_RAYLIB_HELPER_H
#define NODE_RAYLIB_HELPER_H

#include <napi.h>

/**
 * Ensures the number of arguments matches what's expected.
 */
bool checkNumberOfArguments(const Napi::Env& env, const Napi::CallbackInfo& info, int numberOfArgs) {
  if (info.Length() != numberOfArgs) {
    Napi::TypeError::New(env, "Wrong number of arguments").ThrowAsJavaScriptException();
    return false;
  }
  return true;
}

#endif

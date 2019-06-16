#ifndef NODE_RAYLIB_AUDIO_H
#define NODE_RAYLIB_AUDIO_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

void node_raylib_init_audio(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "InitAudioDevice", InitAudioDevice);
  AddFunction(env, exports, "CloseAudioDevice", CloseAudioDevice);
  AddFunction(env, exports, "IsAudioDeviceReady", IsAudioDeviceReady);
  AddFunction(env, exports, "SetMasterVolume", SetMasterVolume);
  // TODO: Add remaining audio functions.
}

#endif

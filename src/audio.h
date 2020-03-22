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
  AddFunction(env, exports, "LoadWave", LoadWave);
  AddFunction(env, exports, "LoadSound", LoadSound);
  AddFunction(env, exports, "LoadSoundFromWave", LoadSoundFromWave);
  AddFunction(env, exports, "UpdateSound", UpdateSound);
  AddFunction(env, exports, "UnloadWave", UnloadWave);
  AddFunction(env, exports, "UnloadSound", UnloadSound);
  AddFunction(env, exports, "ExportWave", ExportWave);
  AddFunction(env, exports, "ExportWaveAsCode", ExportWaveAsCode);
  AddFunction(env, exports, "PlaySound", PlaySound);
  AddFunction(env, exports, "StopSound", StopSound);
  AddFunction(env, exports, "PauseSound", PauseSound);
  AddFunction(env, exports, "ResumeSound", ResumeSound);
  AddFunction(env, exports, "PlaySoundMulti", PlaySoundMulti);
  AddFunction(env, exports, "StopSoundMulti", StopSoundMulti);
  AddFunction(env, exports, "GetSoundsPlaying", GetSoundsPlaying);
  AddFunction(env, exports, "IsSoundPlaying", IsSoundPlaying);
  AddFunction(env, exports, "SetSoundVolume", SetSoundVolume);
  AddFunction(env, exports, "SetSoundPitch", SetSoundPitch);
  AddFunction(env, exports, "WaveFormat", WaveFormat);
  AddFunction(env, exports, "WaveCopy", WaveCopy);
  AddFunction(env, exports, "WaveCrop", WaveCrop);
  AddFunction(env, exports, "GetWaveData", GetWaveData);
  AddFunction(env, exports, "LoadMusicStream", LoadMusicStream);
  AddFunction(env, exports, "UnloadMusicStream", UnloadMusicStream);
  AddFunction(env, exports, "PlayMusicStream", PlayMusicStream);
  AddFunction(env, exports, "UpdateMusicStream", UpdateMusicStream);
  AddFunction(env, exports, "StopMusicStream", StopMusicStream);
  AddFunction(env, exports, "PauseMusicStream", PauseMusicStream);
  AddFunction(env, exports, "ResumeMusicStream", ResumeMusicStream);
  AddFunction(env, exports, "IsMusicPlaying", IsMusicPlaying);
  AddFunction(env, exports, "SetMusicVolume", SetMusicVolume);
  AddFunction(env, exports, "SetMusicPitch", SetMusicPitch);
  AddFunction(env, exports, "SetMusicLoopCount", SetMusicLoopCount);
  AddFunction(env, exports, "GetMusicTimeLength", GetMusicTimeLength);
  AddFunction(env, exports, "GetMusicTimePlayed", GetMusicTimePlayed);
  AddFunction(env, exports, "InitAudioStream", InitAudioStream);
  AddFunction(env, exports, "UpdateAudioStream", UpdateAudioStream);
  AddFunction(env, exports, "CloseAudioStream", CloseAudioStream);
  AddFunction(env, exports, "IsAudioStreamProcessed", IsAudioStreamProcessed);
  AddFunction(env, exports, "PlayAudioStream", PlayAudioStream);
  AddFunction(env, exports, "PauseAudioStream", PauseAudioStream);
  AddFunction(env, exports, "ResumeAudioStream", ResumeAudioStream);
  AddFunction(env, exports, "IsAudioStreamPlaying", IsAudioStreamPlaying);
  AddFunction(env, exports, "StopAudioStream", StopAudioStream);
  AddFunction(env, exports, "SetAudioStreamVolume", SetAudioStreamVolume);
  AddFunction(env, exports, "SetAudioStreamPitch", SetAudioStreamPitch);
  AddFunction(env, exports, "SetAudioStreamBufferSizeDefault", SetAudioStreamBufferSizeDefault);
}

#endif

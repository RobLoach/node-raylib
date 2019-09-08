#ifndef NODE_RAYLIB_RLGL_H
#define NODE_RAYLIB_RLGL_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

/**
 * Wrapper function around UpdateVrTracking().
 *
 * @see raylib.UpdateVrTracking
 */
Camera UpdateVrTrackingWrap(Camera camera) {
  UpdateVrTracking(&camera);
  return camera;
}

void node_raylib_init_rlgl(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "LoadText", LoadText);
  //AddFunction(env, exports, "LoadShader", LoadShader);                LoadShader(const char *vsFileName, const char *fsFileName);  // Load shader from files and bind default locations
  //AddFunction(env, exports, "LoadShaderCode", LoadShaderCode);                LoadShaderCode(char *vsCode, char *fsCode);                  // Load shader from code strings and bind default locations
  //AddFunction(env, exports, "UnloadShader", UnloadShader);                UnloadShader(Shader shader);                                   // Unload shader from GPU memory (VRAM)
  //AddFunction(env, exports, "GetShaderDefault", GetShaderDefault);                GetShaderDefault(void);                                      // Get default shader
  AddFunction(env, exports, "GetTextureDefault", GetTextureDefault);
  //AddFunction(env, exports, "GetShaderLocation", GetShaderLocation);                GetShaderLocation(Shader shader, const char *uniformName);      // Get shader uniform location
  //AddFunction(env, exports, "SetShaderValue", SetShaderValue);                SetShaderValue(Shader shader, int uniformLoc, const void *value, int uniformType);               // Set shader uniform value
  //AddFunction(env, exports, "SetShaderValueV", SetShaderValueV);                SetShaderValueV(Shader shader, int uniformLoc, const void *value, int uniformType, int count);   // Set shader uniform value vector
  //AddFunction(env, exports, "SetShaderValueMatrix", SetShaderValueMatrix);                SetShaderValueMatrix(Shader shader, int uniformLoc, Matrix mat);         // Set shader uniform value (matrix 4x4)
  //AddFunction(env, exports, "SetShaderValueTexture", SetShaderValueTexture);                SetShaderValueTexture(Shader shader, int uniformLoc, Texture2D texture); // Set shader uniform value for texture
  AddFunction(env, exports, "SetMatrixProjection", SetMatrixProjection);
  //AddFunction(env, exports, "SetMatrixModelview", SetMatrixModelview);                SetMatrixModelview(Matrix view);                               // Set a custom modelview matrix (replaces internal modelview matrix)
  AddFunction(env, exports, "GetMatrixModelview", GetMatrixModelview);
  //AddFunction(env, exports, "GenTextureCubemap", GenTextureCubemap);                GenTextureCubemap(Shader shader, Texture2D skyHDR, int size);       // Generate cubemap texture from HDR texture
  //AddFunction(env, exports, "GenTextureIrradiance", GenTextureIrradiance);                GenTextureIrradiance(Shader shader, Texture2D cubemap, int size);   // Generate irradiance texture using cubemap data
  //AddFunction(env, exports, "GenTexturePrefilter", GenTexturePrefilter);                GenTexturePrefilter(Shader shader, Texture2D cubemap, int size);    // Generate prefilter texture using cubemap data
  //AddFunction(env, exports, "GenTextureBRDF", GenTextureBRDF);                GenTextureBRDF(Shader shader, int size);                  // Generate BRDF texture
  //AddFunction(env, exports, "BeginShaderMode", BeginShaderMode);                BeginShaderMode(Shader shader);                                // Begin custom shader drawing
  AddFunction(env, exports, "EndShaderMode", EndShaderMode);
  AddFunction(env, exports, "BeginBlendMode", BeginBlendMode);
  AddFunction(env, exports, "EndBlendMode", EndBlendMode);
  AddFunction(env, exports, "InitVrSimulator", InitVrSimulator);
  AddFunction(env, exports, "CloseVrSimulator", CloseVrSimulator);
  AddFunction(env, exports, "SetVrConfiguration", SetVrConfiguration);
  AddFunction(env, exports, "IsVrSimulatorReady", IsVrSimulatorReady);
  AddFunction(env, exports, "ToggleVrMode", ToggleVrMode);
  AddFunction(env, exports, "BeginVrDrawing", BeginVrDrawing);
  AddFunction(env, exports, "EndVrDrawing", EndVrDrawing);

  // Wrapped functions
  AddFunction(env, exports, "UpdateVrTrackingWrap", UpdateVrTrackingWrap);
}

#endif

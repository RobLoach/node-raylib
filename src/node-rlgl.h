#ifndef NODE_RAYLIB_NODE_RLGL_H
#define NODE_RAYLIB_NODE_RLGL_H

#include <string>
#include <napi.h>

#include "raylib.h"
#include "rlgl.h"
#include "./lib/AddFunction.h"
#include "./lib/AddDefine.h"

void node_raylib_rlgl_defines(Napi::Env& env, Napi::Object& exports) {
#if defined(GRAPHICS_API_OPENGL_11)
  AddDefineBoolean(env, exports, "GRAPHICS_API_OPENGL_11", true);
#else
  AddDefineBoolean(env, exports, "GRAPHICS_API_OPENGL_11", false);
#endif
#if defined(GRAPHICS_API_OPENGL_21)
  AddDefineBoolean(env, exports, "GRAPHICS_API_OPENGL_21", true);
#else
  AddDefineBoolean(env, exports, "GRAPHICS_API_OPENGL_21", false);
#endif
#if defined(GRAPHICS_API_OPENGL_33)
  AddDefineBoolean(env, exports, "GRAPHICS_API_OPENGL_33", true);
#else
  AddDefineBoolean(env, exports, "GRAPHICS_API_OPENGL_33", false);
#endif
#if defined(GRAPHICS_API_OPENGL_ES2)
  AddDefineBoolean(env, exports, "GRAPHICS_API_OPENGL_ES2", true);
#else
  AddDefineBoolean(env, exports, "GRAPHICS_API_OPENGL_ES2", false);
#endif
#if defined(GRAPHICS_API_OPENGL_33)
  AddDefineBoolean(env, exports, "GRAPHICS_API_OPENGL_33", true);
#else
  AddDefineBoolean(env, exports, "GRAPHICS_API_OPENGL_33", false);
#endif
  AddDefine(env, exports, "DEFAULT_BATCH_BUFFER_ELEMENTS", DEFAULT_BATCH_BUFFER_ELEMENTS);
  AddDefine(env, exports, "DEFAULT_BATCH_BUFFERS", DEFAULT_BATCH_BUFFERS);
  AddDefine(env, exports, "DEFAULT_BATCH_DRAWCALLS", DEFAULT_BATCH_DRAWCALLS);
  AddDefine(env, exports, "MAX_MATRIX_STACK_SIZE", MAX_MATRIX_STACK_SIZE);
  AddDefine(env, exports, "MAX_SHADER_LOCATIONS", MAX_SHADER_LOCATIONS);
  AddDefine(env, exports, "MAX_MATERIAL_MAPS", MAX_MATERIAL_MAPS);
  AddDefine(env, exports, "RL_CULL_DISTANCE_NEAR", RL_CULL_DISTANCE_NEAR);
  AddDefine(env, exports, "RL_CULL_DISTANCE_FAR", RL_CULL_DISTANCE_FAR);
  AddDefine(env, exports, "RL_TEXTURE_WRAP_S", RL_TEXTURE_WRAP_S);
  AddDefine(env, exports, "RL_TEXTURE_WRAP_T", RL_TEXTURE_WRAP_T);
  AddDefine(env, exports, "RL_TEXTURE_MAG_FILTER", RL_TEXTURE_MAG_FILTER);
  AddDefine(env, exports, "RL_TEXTURE_MIN_FILTER", RL_TEXTURE_MIN_FILTER);
  AddDefine(env, exports, "RL_TEXTURE_ANISOTROPIC_FILTER", RL_TEXTURE_ANISOTROPIC_FILTER);
  AddDefine(env, exports, "RL_FILTER_NEAREST", RL_FILTER_NEAREST);
  AddDefine(env, exports, "RL_FILTER_LINEAR", RL_FILTER_LINEAR);
  AddDefine(env, exports, "RL_FILTER_MIP_NEAREST", RL_FILTER_MIP_NEAREST);
  AddDefine(env, exports, "RL_FILTER_NEAREST_MIP_LINEAR", RL_FILTER_NEAREST_MIP_LINEAR);
  AddDefine(env, exports, "RL_FILTER_LINEAR_MIP_NEAREST", RL_FILTER_LINEAR_MIP_NEAREST);
  AddDefine(env, exports, "RL_FILTER_MIP_LINEAR", RL_FILTER_MIP_LINEAR);
  AddDefine(env, exports, "RL_WRAP_REPEAT", RL_WRAP_REPEAT);
  AddDefine(env, exports, "RL_WRAP_CLAMP", RL_WRAP_CLAMP);
  AddDefine(env, exports, "RL_WRAP_MIRROR_REPEAT", RL_WRAP_MIRROR_REPEAT);
  AddDefine(env, exports, "RL_WRAP_MIRROR_CLAMP", RL_WRAP_MIRROR_CLAMP);
  AddDefine(env, exports, "RL_MODELVIEW", RL_MODELVIEW);
  AddDefine(env, exports, "RL_PROJECTION", RL_PROJECTION);
  AddDefine(env, exports, "RL_TEXTURE", RL_TEXTURE);
  AddDefine(env, exports, "RL_LINES", RL_LINES);
  AddDefine(env, exports, "RL_TRIANGLES", RL_TRIANGLES);
  AddDefine(env, exports, "RL_QUADS", RL_QUADS);
}

void node_raylib_rlgl_functions(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "rlMatrixMode", &rlMatrixMode);
  AddFunction(env, exports, "rlPushMatrix", &rlPushMatrix);
  AddFunction(env, exports, "rlPopMatrix", &rlPopMatrix);
  AddFunction(env, exports, "rlLoadIdentity", &rlLoadIdentity);
  AddFunction(env, exports, "rlTranslatef", &rlTranslatef);
  AddFunction(env, exports, "rlRotatef", &rlRotatef);
  AddFunction(env, exports, "rlScalef", &rlScalef);
  AddFunction(env, exports, "rlMultMatrixf", &rlMultMatrixf);
  AddFunction(env, exports, "rlFrustum", &rlFrustum);
  AddFunction(env, exports, "rlOrtho", &rlOrtho);
  AddFunction(env, exports, "rlViewport", &rlViewport);
  AddFunction(env, exports, "rlBegin", &rlBegin);
  AddFunction(env, exports, "rlEnd", &rlEnd);
  AddFunction(env, exports, "rlVertex2i", &rlVertex2i);
  AddFunction(env, exports, "rlVertex2f", &rlVertex2f);
  AddFunction(env, exports, "rlVertex3f", &rlVertex3f);
  AddFunction(env, exports, "rlTexCoord2f", &rlTexCoord2f);
  AddFunction(env, exports, "rlNormal3f", &rlNormal3f);
  AddFunction(env, exports, "rlColor4ub", &rlColor4ub);
  AddFunction(env, exports, "rlColor3f", &rlColor3f);
  AddFunction(env, exports, "rlColor4f", &rlColor4f);
  AddFunction(env, exports, "rlEnableTexture", &rlEnableTexture);
  AddFunction(env, exports, "rlDisableTexture", &rlDisableTexture);
  AddFunction(env, exports, "rlTextureParameters", &rlTextureParameters);
  AddFunction(env, exports, "rlEnableShader", &rlEnableShader);
  AddFunction(env, exports, "rlDisableShader", &rlDisableShader);
  AddFunction(env, exports, "rlEnableFramebuffer", &rlEnableFramebuffer);
  AddFunction(env, exports, "rlDisableFramebuffer", &rlDisableFramebuffer);
  AddFunction(env, exports, "rlEnableDepthTest", &rlEnableDepthTest);
  AddFunction(env, exports, "rlDisableDepthTest", &rlDisableDepthTest);
  AddFunction(env, exports, "rlEnableDepthMask", &rlEnableDepthMask);
  AddFunction(env, exports, "rlDisableDepthMask", &rlDisableDepthMask);
  AddFunction(env, exports, "rlEnableBackfaceCulling", &rlEnableBackfaceCulling);
  AddFunction(env, exports, "rlDisableBackfaceCulling", &rlDisableBackfaceCulling);
  AddFunction(env, exports, "rlEnableScissorTest", &rlEnableScissorTest);
  AddFunction(env, exports, "rlDisableScissorTest", &rlDisableScissorTest);
  AddFunction(env, exports, "rlScissor", &rlScissor);
  AddFunction(env, exports, "rlEnableWireMode", &rlEnableWireMode);
  AddFunction(env, exports, "rlDisableWireMode", &rlDisableWireMode);
  AddFunction(env, exports, "rlSetLineWidth", &rlSetLineWidth);
  AddFunction(env, exports, "rlGetLineWidth", &rlGetLineWidth);
  AddFunction(env, exports, "rlEnableSmoothLines", &rlEnableSmoothLines);
  AddFunction(env, exports, "rlDisableSmoothLines", &rlDisableSmoothLines);
  AddFunction(env, exports, "rlClearColor", &rlClearColor);
  AddFunction(env, exports, "rlClearScreenBuffers", &rlClearScreenBuffers);
  AddFunction(env, exports, "rlUpdateBuffer", &rlUpdateBuffer);
  AddFunction(env, exports, "rlLoadAttribBuffer", &rlLoadAttribBuffer);
  AddFunction(env, exports, "rlglInit", &rlglInit);
  AddFunction(env, exports, "rlglClose", &rlglClose);
  AddFunction(env, exports, "rlglDraw", &rlglDraw);
  AddFunction(env, exports, "rlCheckErrors", &rlCheckErrors);
  AddFunction(env, exports, "rlGetVersion", &rlGetVersion);
  AddFunction(env, exports, "rlCheckBufferLimit", &rlCheckBufferLimit);
  AddFunction(env, exports, "rlSetDebugMarker", &rlSetDebugMarker);
  AddFunction(env, exports, "rlSetBlendMode", &rlSetBlendMode);
  AddFunction(env, exports, "rlLoadExtensions", &rlLoadExtensions);
  AddFunction(env, exports, "rlLoadTexture", &rlLoadTexture);
  AddFunction(env, exports, "rlLoadTextureDepth", &rlLoadTextureDepth);
  AddFunction(env, exports, "rlLoadTextureCubemap", &rlLoadTextureCubemap);
  AddFunction(env, exports, "rlUpdateTexture", &rlUpdateTexture);
  AddFunction(env, exports, "rlGetGlTextureFormats", &rlGetGlTextureFormats);
  AddFunction(env, exports, "rlUnloadTexture", &rlUnloadTexture);
  AddFunction(env, exports, "rlGenerateMipmaps", &rlGenerateMipmaps);
  AddFunction(env, exports, "rlReadTexturePixels", &rlReadTexturePixels);
  AddFunction(env, exports, "rlReadScreenPixels", &rlReadScreenPixels);
  AddFunction(env, exports, "rlLoadFramebuffer", &rlLoadFramebuffer);
  AddFunction(env, exports, "rlFramebufferAttach", &rlFramebufferAttach);
  AddFunction(env, exports, "rlFramebufferComplete", &rlFramebufferComplete);
  AddFunction(env, exports, "rlUnloadFramebuffer", &rlUnloadFramebuffer);
  AddFunction(env, exports, "rlLoadMesh", &rlLoadMesh);
  AddFunction(env, exports, "rlUpdateMesh", &rlUpdateMesh);
  AddFunction(env, exports, "rlUpdateMeshAt", &rlUpdateMeshAt);
  AddFunction(env, exports, "rlDrawMesh", &rlDrawMesh);
  AddFunction(env, exports, "rlDrawMeshInstanced", &rlDrawMeshInstanced);
  AddFunction(env, exports, "rlUnloadMesh", &rlUnloadMesh);
}

void node_raylib_rlgl(Napi::Env& env, Napi::Object& exports) {
  node_raylib_rlgl_defines(env, exports);
  node_raylib_rlgl_functions(env, exports);
}

#endif

#ifndef NODE_RAYLIB_WRAPPEDFUNCTIONS_H
#define NODE_RAYLIB_WRAPPEDFUNCTIONS_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

/**
 * RLAPI#SetShaderValue & SetShaderValueV uses a void pointer and some internal
 * logic based on the `uniformType` param for casting, which is tricky with N-API.
 * So let's use type-explicit methods instead...
 */ 
void SetShaderValueFloat(Shader shader, int loc, float value) {
  SetShaderValueV(shader, loc, &value, UNIFORM_FLOAT, 1);
}

void SetShaderValueVector2(Shader shader, int loc, Vector2 value) {
  const float fvalue[2] = { value.x, value.y };
  SetShaderValueV(shader, loc, &fvalue, UNIFORM_VEC2, 1);
}

void SetShaderValueVector3(Shader shader, int loc, Vector3 value) {
  const float fvalue[3] = { value.x, value.y, value.z };
  SetShaderValueV(shader, loc, &fvalue, UNIFORM_VEC3, 1);
}

void SetShaderValueVector4(Shader shader, int loc, Vector4 value) {
  const float fvalue[4] = { value.x, value.y, value.z, value.w };
  SetShaderValueV(shader, loc, &fvalue, UNIFORM_VEC4, 1);
}

void TraceLogWrap(int logType, const char* message) {
  TraceLog(logType, message);
}

Camera UpdateCameraWrap(Camera camera) {
  UpdateCamera(&camera);
  return camera;
}

Camera UpdateVrTrackingWrap(Camera camera) {
  UpdateVrTracking(&camera);
  return camera;
}

Image ImageFormatWrap(Image image, int newFormat) {
  ImageFormat(&image, newFormat);
  return image;
}

Image ImageToPOTWrap(Image image, Color fill) {
  ImageToPOT(&image, fill);
  return image;
}

Image ImageCropWrap(Image image, Rectangle crop) {
  ImageCrop(&image, crop);
  return image;
}

Image ImageAlphaCropWrap(Image image, float threshold) {
  ImageAlphaCrop(&image, threshold);
  return image;
}

Image ImageAlphaClearWrap(Image image, Color color, float threshold) {
  ImageAlphaClear(&image, color, threshold);
  return image;
}

Image ImageAlphaMaskWrap(Image image, Image alphaMask) {
  ImageAlphaMask(&image, alphaMask);
  return image;
}

Image ImageAlphaPremultiplyWrap(Image image) {
  ImageAlphaPremultiply(&image);
  return image;
}

Image ImageResizeWrap(Image image, int newWidth, int newHeight) {
  ImageResize(&image, newWidth, newHeight);
  return image;
}

Image ImageResizeNNWrap(Image image, int newWidth, int newHeight) {
  ImageResizeNN(&image, newWidth, newHeight);
  return image;
}

Image ImageResizeCanvasWrap(Image image, int newWidth, int newHeight, int offsetX, int offsetY, Color fill) {
  ImageResizeCanvas(&image, newWidth, newHeight, offsetX, offsetY, fill);
  return image;
}

Image ImageMipmapsWrap(Image image) {
  ImageMipmaps(&image);
  return image;
}

Image ImageDitherWrap(Image image, int rBpp, int gBpp, int bBpp, int aBpp) {
  ImageDither(&image, rBpp, gBpp, bBpp, aBpp);
  return image;
}

Image ImageFlipVerticalWrap(Image image) {
  ImageFlipVertical(&image);
  return image;
}

Image ImageFlipHorizontalWrap(Image image) {
  ImageFlipHorizontal(&image);
  return image;
}

Image ImageRotateCWWrap(Image image) {
  ImageRotateCW(&image);
  return image;
}

Image ImageRotateCCWWrap(Image image) {
  ImageRotateCCW(&image);
  return image;
}

Image ImageColorTintWrap(Image image, Color color) {
  ImageColorTint(&image, color);
  return image;
}

Image ImageColorInvertWrap(Image image) {
  ImageColorInvert(&image);
  return image;
}

Image ImageColorGrayscaleWrap(Image image) {
  ImageColorGrayscale(&image);
  return image;
}

Image ImageColorContrastWrap(Image image, float contrast) {
  ImageColorContrast(&image, contrast);
  return image;
}

Image ImageColorBrightnessWrap(Image image, int brightness) {
  ImageColorBrightness(&image, brightness);
  return image;
}

Image ImageColorReplaceWrap(Image image, Color color, Color replace) {
  ImageColorReplace(&image, color, replace);
  return image;
}

Image ImageClearBackgroundWrap(Image dst, Color color) {
  ImageClearBackground(&dst, color);
  return dst;
}

Image ImageDrawPixelWrap(Image dst, int posX, int posY, Color color) {
  ImageDrawPixel(&dst, posX, posY, color);
  return dst;
}

Image ImageDrawPixelVWrap(Image dst, Vector2 position, Color color) {
  ImageDrawPixelV(&dst, position, color);
  return dst;
}

Image ImageDrawLineWrap(Image dst, int startPosX, int startPosY, int endPosX, int endPosY, Color color) {
  ImageDrawLine(&dst, startPosX, startPosY, endPosX, endPosY, color);
  return dst;
}

Image ImageDrawLineVWrap(Image dst, Vector2 start, Vector2 end, Color color) {
  ImageDrawLineV(&dst, start, end, color);
  return dst;
}

Image ImageDrawCircleWrap(Image dst, int centerX, int centerY, int radius, Color color) {
  ImageDrawCircle(&dst, centerX, centerY, radius, color);
  return dst;
}

Image ImageDrawCircleVWrap(Image dst, Vector2 center, int radius, Color color) {
  ImageDrawCircleV(&dst, center, radius, color);
  return dst;
}

Image ImageDrawRectangleWrap(Image dst, int posX, int posY, int width, int height, Color color) {
  ImageDrawRectangle(&dst, posX, posY, width, height, color);
  return dst;
}

Image ImageDrawRectangleVWrap(Image dst, Vector2 position, Vector2 size, Color color) {
  ImageDrawRectangleV(&dst, position, size, color);
  return dst;
}

Image ImageDrawRectangleRecWrap(Image dst, Rectangle rec, Color color) {
  ImageDrawRectangleRec(&dst, rec, color);
  return dst;
}

Image ImageDrawRectangleLinesWrap(Image dst, Rectangle rec, int thick, Color color) {
  ImageDrawRectangleLines(&dst, rec, thick, color);
  return dst;
}

Image ImageDrawWrap(Image dst, Image src, Rectangle srcRec, Rectangle dstRec, Color tint) {
  ImageDraw(&dst, src, srcRec, dstRec, tint);
  return dst;
}

Image ImageDrawTextWrap(Image dst, const char *text, int posX, int posY, int fontSize, Color color) {
  ImageDrawText(&dst, text, posX, posY, fontSize, color);
  return dst;
}

Image ImageDrawTextExWrap(Image dst, Font font, const char *text, Vector2 position, float fontSize, float spacing, Color tint) {
  ImageDrawTextEx(&dst, font, text, position, fontSize, spacing, tint);
  return dst;
}

void node_raylib_wrappedfunctions(Napi::Env &env, Napi::Object &exports) {
  AddFunction(env, exports, "SetShaderValueFloat", &SetShaderValueFloat);
  AddFunction(env, exports, "SetShaderValueVector2", &SetShaderValueVector2);
  AddFunction(env, exports, "SetShaderValueVector3", &SetShaderValueVector3);
  AddFunction(env, exports, "SetShaderValueVector4", &SetShaderValueVector4);
  AddFunction(env, exports, "TraceLogWrap", &TraceLogWrap);
  AddFunction(env, exports, "UpdateVrTrackingWrap", &UpdateVrTrackingWrap);
  AddFunction(env, exports, "UpdateCameraWrap", &UpdateCameraWrap);
  AddFunction(env, exports, "ImageFormatWrap", &ImageFormatWrap);
  AddFunction(env, exports, "ImageToPOTWrap", &ImageToPOTWrap);
  AddFunction(env, exports, "ImageCropWrap", &ImageCropWrap);
  AddFunction(env, exports, "ImageAlphaCropWrap", &ImageAlphaCropWrap);
  AddFunction(env, exports, "ImageAlphaClearWrap", &ImageAlphaClearWrap);
  AddFunction(env, exports, "ImageAlphaMaskWrap", &ImageAlphaMaskWrap);
  AddFunction(env, exports, "ImageAlphaPremultiplyWrap", &ImageAlphaPremultiplyWrap);
  AddFunction(env, exports, "ImageResizeWrap", &ImageResizeWrap);
  AddFunction(env, exports, "ImageResizeNNWrap", &ImageResizeNNWrap);
  AddFunction(env, exports, "ImageResizeCanvasWrap", &ImageResizeCanvasWrap);
  AddFunction(env, exports, "ImageMipmapsWrap", &ImageMipmapsWrap);
  AddFunction(env, exports, "ImageDitherWrap", &ImageDitherWrap);
  AddFunction(env, exports, "ImageFlipVerticalWrap", &ImageFlipVerticalWrap);
  AddFunction(env, exports, "ImageFlipHorizontalWrap", &ImageFlipHorizontalWrap);
  AddFunction(env, exports, "ImageRotateCWWrap", &ImageRotateCWWrap);
  AddFunction(env, exports, "ImageRotateCCWWrap", &ImageRotateCCWWrap);
  AddFunction(env, exports, "ImageColorTintWrap", &ImageColorTintWrap);
  AddFunction(env, exports, "ImageColorInvertWrap", &ImageColorInvertWrap);
  AddFunction(env, exports, "ImageColorGrayscaleWrap", &ImageColorGrayscaleWrap);
  AddFunction(env, exports, "ImageColorContrastWrap", &ImageColorContrastWrap);
  AddFunction(env, exports, "ImageColorBrightnessWrap", &ImageColorBrightnessWrap);
  AddFunction(env, exports, "ImageColorReplaceWrap", &ImageColorReplaceWrap);
  AddFunction(env, exports, "ImageClearBackgroundWrap", &ImageClearBackgroundWrap);
  AddFunction(env, exports, "ImageDrawPixelWrap", &ImageDrawPixelWrap);
  AddFunction(env, exports, "ImageDrawPixelVWrap", &ImageDrawPixelVWrap);
  AddFunction(env, exports, "ImageDrawLineWrap", &ImageDrawLineWrap);
  AddFunction(env, exports, "ImageDrawLineVWrap", &ImageDrawLineVWrap);
  AddFunction(env, exports, "ImageDrawCircleWrap", &ImageDrawCircleWrap);
  AddFunction(env, exports, "ImageDrawCircleVWrap", &ImageDrawCircleVWrap);
  AddFunction(env, exports, "ImageDrawRectangleWrap", &ImageDrawRectangleWrap);
  AddFunction(env, exports, "ImageDrawRectangleVWrap", &ImageDrawRectangleVWrap);
  AddFunction(env, exports, "ImageDrawRectangleRecWrap", &ImageDrawRectangleRecWrap);
  AddFunction(env, exports, "ImageDrawRectangleLinesWrap", &ImageDrawRectangleLinesWrap);
  AddFunction(env, exports, "ImageDrawWrap", &ImageDrawWrap);
  AddFunction(env, exports, "ImageDrawTextWrap", &ImageDrawTextWrap);
  AddFunction(env, exports, "ImageDrawTextExWrap", &ImageFlipVerticalWrap);
}

#endif

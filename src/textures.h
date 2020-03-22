#ifndef NODE_RAYLIB_TEXTURES_H
#define NODE_RAYLIB_TEXTURES_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/AddFunction.h"

void node_raylib_init_textures(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "LoadImage", LoadImage);
  AddFunction(env, exports, "LoadImageEx", LoadImageEx);
  AddFunction(env, exports, "LoadImagePro", LoadImagePro);
  AddFunction(env, exports, "LoadImageRaw", LoadImageRaw);
  AddFunction(env, exports, "ExportImage", ExportImage);
  AddFunction(env, exports, "ExportImageAsCode", ExportImageAsCode);
  AddFunction(env, exports, "LoadTexture", LoadTexture);
  AddFunction(env, exports, "LoadTextureFromImage", LoadTextureFromImage);
  AddFunction(env, exports, "LoadTextureCubemap", LoadTextureCubemap);
  AddFunction(env, exports, "LoadRenderTexture", LoadRenderTexture);
  AddFunction(env, exports, "UnloadImage", UnloadImage);
  AddFunction(env, exports, "UnloadTexture", UnloadTexture);
  AddFunction(env, exports, "UnloadRenderTexture", UnloadRenderTexture);
  AddFunction(env, exports, "GetImageData", GetImageData);
  AddFunction(env, exports, "GetImageDataNormalized", GetImageDataNormalized);
  AddFunction(env, exports, "GetImageAlphaBorder", GetImageAlphaBorder);
  AddFunction(env, exports, "GetPixelDataSize", GetPixelDataSize);
  AddFunction(env, exports, "GetTextureData", GetTextureData);
  AddFunction(env, exports, "GetScreenData", GetScreenData);
  AddFunction(env, exports, "UpdateTexture", UpdateTexture);
  AddFunction(env, exports, "ImageCopy", ImageCopy);
  AddFunction(env, exports, "ImageFromImage", ImageFromImage);
  AddFunction(env, exports, "ImageToPOT", ImageToPOT);
  AddFunction(env, exports, "ImageFormat", ImageFormat);
  AddFunction(env, exports, "ImageAlphaMask", ImageAlphaMask);
  AddFunction(env, exports, "ImageAlphaClear", ImageAlphaClear);
  AddFunction(env, exports, "ImageAlphaCrop", ImageAlphaCrop);
  AddFunction(env, exports, "ImageAlphaPremultiply", ImageAlphaPremultiply);
  AddFunction(env, exports, "ImageCrop", ImageCrop);
  AddFunction(env, exports, "ImageResize", ImageResize);
  AddFunction(env, exports, "ImageResizeNN", ImageResizeNN);
  AddFunction(env, exports, "ImageResizeCanvas", ImageResizeCanvas);
  AddFunction(env, exports, "ImageMipmaps", ImageMipmaps);
  AddFunction(env, exports, "ImageDither", ImageDither);
  AddFunction(env, exports, "ImageExtractPalette", ImageExtractPalette);
  AddFunction(env, exports, "ImageText", ImageText);
  AddFunction(env, exports, "ImageTextEx", ImageTextEx);
  AddFunction(env, exports, "ImageDraw", ImageDraw);
  AddFunction(env, exports, "ImageDrawRectangle", ImageDrawRectangle);
  AddFunction(env, exports, "ImageDrawRectangleLines", ImageDrawRectangleLines);
  AddFunction(env, exports, "ImageClearBackground", ImageClearBackground);
  AddFunction(env, exports, "ImageDrawPixel", ImageDrawPixel);
  AddFunction(env, exports, "ImageDrawCircle", ImageDrawCircle);
  AddFunction(env, exports, "ImageDrawLineEx", ImageDrawLineEx);
  AddFunction(env, exports, "ImageDrawText", ImageDrawText);
  AddFunction(env, exports, "ImageDrawTextEx", ImageDrawTextEx);
  AddFunction(env, exports, "ImageFlipVertical", ImageFlipVertical);
  AddFunction(env, exports, "ImageFlipHorizontal", ImageFlipHorizontal);
  AddFunction(env, exports, "ImageRotateCW", ImageRotateCW);
  AddFunction(env, exports, "ImageRotateCCW", ImageRotateCCW);
  AddFunction(env, exports, "ImageColorTint", ImageColorTint);
  AddFunction(env, exports, "ImageColorInvert", ImageColorInvert);
  AddFunction(env, exports, "ImageColorGrayscale", ImageColorGrayscale);
  AddFunction(env, exports, "ImageColorContrast", ImageColorContrast);
  AddFunction(env, exports, "ImageColorBrightness", ImageColorBrightness);
  AddFunction(env, exports, "ImageColorReplace", ImageColorReplace);
  AddFunction(env, exports, "GenImageColor", GenImageColor);
  AddFunction(env, exports, "GenImageGradientV", GenImageGradientV);
  AddFunction(env, exports, "GenImageGradientH", GenImageGradientH);
  AddFunction(env, exports, "GenImageGradientRadial", GenImageGradientRadial);
  AddFunction(env, exports, "GenImageChecked", GenImageChecked);
  AddFunction(env, exports, "GenImageWhiteNoise", GenImageWhiteNoise);
  AddFunction(env, exports, "GenImagePerlinNoise", GenImagePerlinNoise);
  AddFunction(env, exports, "GenImageCellular", GenImageCellular);
  AddFunction(env, exports, "GenTextureMipmaps", GenTextureMipmaps);
  AddFunction(env, exports, "SetTextureFilter", SetTextureFilter);
  AddFunction(env, exports, "SetTextureWrap", SetTextureWrap);
  AddFunction(env, exports, "DrawTexture", DrawTexture);
  AddFunction(env, exports, "DrawTextureV", DrawTextureV);
  AddFunction(env, exports, "DrawTextureEx", DrawTextureEx);
  AddFunction(env, exports, "DrawTextureRec", DrawTextureRec);
  AddFunction(env, exports, "DrawTextureQuad", DrawTextureQuad);
  AddFunction(env, exports, "DrawTexturePro", DrawTexturePro);
  AddFunction(env, exports, "DrawTextureNPatch", DrawTextureNPatch);


}

#endif

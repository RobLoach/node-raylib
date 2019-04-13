#ifndef NODE_RAYLIB_TEXTURES_H
#define NODE_RAYLIB_TEXTURES_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_textures(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "LoadImage", LoadImage);
  // RLAPI Image LoadImageEx(Color *pixels, int width, int height);                                           // Load image from Color array data (RGBA - 32bit)
  // RLAPI Image LoadImagePro(void *data, int width, int height, int format);                                 // Load image from raw data with parameters
  // RLAPI Image LoadImageRaw(const char *fileName, int width, int height, int format, int headerSize);       // Load image from RAW file data
  // RLAPI void ExportImage(Image image, const char *fileName);                                               // Export image data to file
  // RLAPI void ExportImageAsCode(Image image, const char *fileName);                                         // Export image as code file defining an array of bytes
  AddFunction(env, exports, "LoadTexture", LoadTexture);
  AddFunction(env, exports, "LoadTextureFromImage", LoadTextureFromImage);
  // RLAPI RenderTexture2D LoadRenderTexture(int width, int height);                                          // Load texture for rendering (framebuffer)
  AddFunction(env, exports, "UnloadImage", UnloadImage);
  AddFunction(env, exports, "UnloadTexture", UnloadTexture);
  // RLAPI void UnloadRenderTexture(RenderTexture2D target);                                                  // Unload render texture from GPU memory (VRAM)
  // RLAPI Color *GetImageData(Image image);                                                                  // Get pixel data from image as a Color struct array
  // RLAPI Vector4 *GetImageDataNormalized(Image image);                                                      // Get pixel data from image as Vector4 array (float normalized)
  AddFunction(env, exports, "GetPixelDataSize", GetPixelDataSize);
  // RLAPI Image GetTextureData(Texture2D texture);                                                           // Get pixel data from GPU texture and return an Image
  // RLAPI void UpdateTexture(Texture2D texture, const void *pixels);                                         // Update GPU texture with new data

  // // Image manipulation functions
  AddFunction(env, exports, "ImageCopy", ImageCopy);
  // RLAPI void ImageToPOT(Image *image, Color fillColor);                                                    // Convert image to POT (power-of-two)
  // RLAPI void ImageFormat(Image *image, int newFormat);                                                     // Convert image data to desired format
  // RLAPI void ImageAlphaMask(Image *image, Image alphaMask);                                                // Apply alpha mask to image
  // RLAPI void ImageAlphaClear(Image *image, Color color, float threshold);                                  // Clear alpha channel to desired color
  // RLAPI void ImageAlphaCrop(Image *image, float threshold);                                                // Crop image depending on alpha value
  // RLAPI void ImageAlphaPremultiply(Image *image);                                                          // Premultiply alpha channel
  // RLAPI void ImageCrop(Image *image, Rectangle crop);                                                      // Crop an image to a defined rectangle
  // RLAPI void ImageResize(Image *image, int newWidth, int newHeight);                                       // Resize image (Bicubic scaling algorithm)
  // RLAPI void ImageResizeNN(Image *image, int newWidth,int newHeight);                                      // Resize image (Nearest-Neighbor scaling algorithm)
  // RLAPI void ImageResizeCanvas(Image *image, int newWidth, int newHeight, int offsetX, int offsetY, Color color);  // Resize canvas and fill with color
  // RLAPI void ImageMipmaps(Image *image);                                                                   // Generate all mipmap levels for a provided image
  // RLAPI void ImageDither(Image *image, int rBpp, int gBpp, int bBpp, int aBpp);                            // Dither image data to 16bpp or lower (Floyd-Steinberg dithering)
  // RLAPI Color *ImageExtractPalette(Image image, int maxPaletteSize, int *extractCount);                    // Extract color palette from image to maximum size (memory should be freed)
  // RLAPI Image ImageText(const char *text, int fontSize, Color color);                                      // Create an image from text (default font)
  // RLAPI Image ImageTextEx(Font font, const char *text, float fontSize, float spacing, Color tint);         // Create an image from text (custom sprite font)
  // RLAPI void ImageDraw(Image *dst, Image src, Rectangle srcRec, Rectangle dstRec);                         // Draw a source image within a destination image
  // RLAPI void ImageDrawRectangle(Image *dst, Rectangle rec, Color color);                                   // Draw rectangle within an image
  // RLAPI void ImageDrawRectangleLines(Image *dst, Rectangle rec, int thick, Color color);                   // Draw rectangle lines within an image
  // RLAPI void ImageDrawText(Image *dst, Vector2 position, const char *text, int fontSize, Color color);     // Draw text (default font) within an image (destination)
  // RLAPI void ImageDrawTextEx(Image *dst, Vector2 position, Font font, const char *text, float fontSize, float spacing, Color color); // Draw text (custom sprite font) within an image (destination)
  // RLAPI void ImageFlipVertical(Image *image);                                                              // Flip image vertically
  // RLAPI void ImageFlipHorizontal(Image *image);                                                            // Flip image horizontally
  // RLAPI void ImageRotateCW(Image *image);                                                                  // Rotate image clockwise 90deg
  // RLAPI void ImageRotateCCW(Image *image);                                                                 // Rotate image counter-clockwise 90deg
  // RLAPI void ImageColorTint(Image *image, Color color);                                                    // Modify image color: tint
  // RLAPI void ImageColorInvert(Image *image);                                                               // Modify image color: invert
  // RLAPI void ImageColorGrayscale(Image *image);                                                            // Modify image color: grayscale
  // RLAPI void ImageColorContrast(Image *image, float contrast);                                             // Modify image color: contrast (-100 to 100)
  // RLAPI void ImageColorBrightness(Image *image, int brightness);                                           // Modify image color: brightness (-255 to 255)
  // RLAPI void ImageColorReplace(Image *image, Color color, Color replace);                                  // Modify image color: replace color

  // // Image generation functions
  // RLAPI Image GenImageColor(int width, int height, Color color);                                           // Generate image: plain color
  // RLAPI Image GenImageGradientV(int width, int height, Color top, Color bottom);                           // Generate image: vertical gradient
  // RLAPI Image GenImageGradientH(int width, int height, Color left, Color right);                           // Generate image: horizontal gradient
  // RLAPI Image GenImageGradientRadial(int width, int height, float density, Color inner, Color outer);      // Generate image: radial gradient
  // RLAPI Image GenImageChecked(int width, int height, int checksX, int checksY, Color col1, Color col2);    // Generate image: checked
  // RLAPI Image GenImageWhiteNoise(int width, int height, float factor);                                     // Generate image: white noise
  // RLAPI Image GenImagePerlinNoise(int width, int height, int offsetX, int offsetY, float scale);           // Generate image: perlin noise
  // RLAPI Image GenImageCellular(int width, int height, int tileSize);                                       // Generate image: cellular algorithm. Bigger tileSize means bigger cells

  // // Texture2D configuration functions
  // AddFunction(env, exports, "GenTextureMipmaps", GenTextureMipmaps);
  // RLAPI void SetTextureFilter(Texture2D texture, int filterMode);                                          // Set texture scaling filter mode
  // RLAPI void SetTextureWrap(Texture2D texture, int wrapMode);                                              // Set texture wrapping mode

  // // Texture2D drawing functions
  AddFunction(env, exports, "DrawTexture", DrawTexture);
  AddFunction(env, exports, "DrawTextureV", DrawTextureV);
  AddFunction(env, exports, "DrawTextureEx", DrawTextureEx);
  // RLAPI void DrawTextureRec(Texture2D texture, Rectangle sourceRec, Vector2 position, Color tint);         // Draw a part of a texture defined by a rectangle
  // RLAPI void DrawTextureQuad(Texture2D texture, Vector2 tiling, Vector2 offset, Rectangle quad, Color tint);  // Draw texture quad with tiling and offset parameters
  // RLAPI void DrawTexturePro(Texture2D texture, Rectangle sourceRec, Rectangle destRec, Vector2 origin, float rotation, Color tint);       // Draw a part of a texture defined by a rectangle with 'pro' parameters
  // RLAPI void DrawTextureNPatch(Texture2D texture, NPatchInfo nPatchInfo, Rectangle destRec, Vector2 origin, float rotation, Color tint);  // Draws a texture (or part of it) that stretches or shrinks nicely

}

#endif

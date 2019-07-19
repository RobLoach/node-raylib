import r from "./bindings/raylib"
import { Color } from "./types/colors"
import { Vector2, Rectangle } from "./types/maths"

export const LoadImage: (fileName: string) => Image = r.LoadImage //Load image from file into CPU memory (RAM) 
export const LoadImageEx: (pixels: Color, width: number, height: number) => Image = r.LoadImageEx //Load image from Color array data (RGBA - 32bit) 
export const LoadImagePro: (data: void, width: number, height: number, format: number) => Image = r.LoadImagePro //Load image from raw data with parameters 
export const LoadImageRaw: (fileName: string, width: number, height: number, format: number, headerSize: number) => Image = r.LoadImageRaw //Load image from RAW file data 
export const ExportImage: (image: Image, fileName: string) => void = r.ExportImage //Export image data to file 
export const ExportImageAsCode: (image: Image, fileName: string) => void = r.ExportImageAsCode //Export image as code file defining an array of bytes 
export const LoadTexture: (fileName: string) => Texture2D = r.LoadTexture //Load texture from file into GPU memory (VRAM) 
export const LoadTextureFromImage: (image: Image) => Texture2D = r.LoadTextureFromImage //Load texture from image data 
export const LoadTextureCubemap: (image: Image, layoutType: number) => TextureCubemap = r.LoadTextureCubemap //Load cubemap from image, multiple image cubemap layouts supported 
export const LoadRenderTexture: (width: number, height: number) => RenderTexture2D = r.LoadRenderTexture //Load texture for rendering (framebuffer) 
export const UnloadImage: (image: Image) => void = r.UnloadImage //Unload image from CPU memory (RAM) 
export const UnloadTexture: (texture: Texture2D) => void = r.UnloadTexture //Unload texture from GPU memory (VRAM) 
export const UnloadRenderTexture: (target: RenderTexture2D) => void = r.UnloadRenderTexture //Unload render texture from GPU memory (VRAM) 
export const GetImageData: (image: Image) => Color = r.GetImageData //Get pixel data from image as a Color struct array 
export const GetImageDataNormalized: (image: Image) => Vector4 = r.GetImageDataNormalized //Get pixel data from image as Vector4 array (float normalized) 
export const GetPixelDataSize: (width: number, height: number, format: number) => number = r.GetPixelDataSize //Get pixel data size in bytes (image or texture) 
export const GetTextureData: (texture: Texture2D) => Image = r.GetTextureData //Get pixel data from GPU texture and return an Image 
export const GetScreenData: () => Image = r.GetScreenData //Get pixel data from screen buffer and return an Image (screenshot) 
export const UpdateTexture: (texture: Texture2D, pixels: const void) => void = r.UpdateTexture //Update GPU texture with new data 
export const ImageCopy: (image: Image) => Image = r.ImageCopy //Create an image duplicate (useful for transformations) 
export const ImageToPOT: (image: Image, fillColor: Color) => void = r.ImageToPOT //Convert image to POT (power-of-two) 
export const ImageFormat: (image: Image, newFormat: number) => void = r.ImageFormat //Convert image data to desired format 
export const ImageAlphaMask: (image: Image, alphaMask: Image) => void = r.ImageAlphaMask //Apply alpha mask to image 
export const ImageAlphaClear: (image: Image, color: Color, threshold: number) => void = r.ImageAlphaClear //Clear alpha channel to desired color 
export const ImageAlphaCrop: (image: Image, threshold: number) => void = r.ImageAlphaCrop //Crop image depending on alpha value 
export const ImageAlphaPremultiply: (image: Image) => void = r.ImageAlphaPremultiply //Premultiply alpha channel 
export const ImageCrop: (image: Image, crop: Rectangle) => void = r.ImageCrop //Crop an image to a defined rectangle 
export const ImageResize: (image: Image, newWidth: number, newHeight: number) => void = r.ImageResize //Resize image (Bicubic scaling algorithm) 
export const ImageResizeNN: (image: Image, newHeight: int newWidth,int) => void = r.ImageResizeNN //Resize image (Nearest-Neighbor scaling algorithm) 
export const ImageResizeCanvas: (image: Image, newWidth: number, newHeight: number, offsetX: number, offsetY: number, color: Color) => void = r.ImageResizeCanvas //Resize canvas and fill with color 
export const ImageMipmaps: (image: Image) => void = r.ImageMipmaps //Generate all mipmap levels for a provided image 
export const ImageDither: (image: Image, rBpp: number, gBpp: number, bBpp: number, aBpp: number) => void = r.ImageDither //Dither image data to 16bpp or lower (Floyd-Steinberg dithering) 
export const ImageExtractPalette: (image: Image, maxPaletteSize: number, extractCount: number) => Color = r.ImageExtractPalette //Extract color palette from image to maximum size (memory should be freed) 
export const ImageText: (text: string, fontSize: number, color: Color) => Image = r.ImageText //Create an image from text (default font) 
export const ImageTextEx: (font: Font, text: string, fontSize: number, spacing: number, tint: Color) => Image = r.ImageTextEx //Create an image from text (custom sprite font) 
export const ImageDraw: (dst: Image, src: Image, srcRec: Rectangle, dstRec: Rectangle) => void = r.ImageDraw //Draw a source image within a destination image 
export const ImageDrawRectangle: (dst: Image, rec: Rectangle, color: Color) => void = r.ImageDrawRectangle //Draw rectangle within an image 
export const ImageDrawRectangleLines: (dst: Image, rec: Rectangle, thick: number, color: Color) => void = r.ImageDrawRectangleLines //Draw rectangle lines within an image 
export const ImageDrawText: (dst: Image, position: Vector2, text: string, fontSize: number, color: Color) => void = r.ImageDrawText //Draw text (default font) within an image (destination) 
export const ImageDrawTextEx: (dst: Image, position: Vector2, font: Font, text: string, fontSize: number, spacing: number, color: Color) => void = r.ImageDrawTextEx //Draw text (custom sprite font) within an image (destination) 
export const ImageFlipVertical: (image: Image) => void = r.ImageFlipVertical //Flip image vertically 
export const ImageFlipHorizontal: (image: Image) => void = r.ImageFlipHorizontal //Flip image horizontally 
export const ImageRotateCW: (image: Image) => void = r.ImageRotateCW //Rotate image clockwise 90deg 
export const ImageRotateCCW: (image: Image) => void = r.ImageRotateCCW //Rotate image counter-clockwise 90deg 
export const ImageColorTint: (image: Image, color: Color) => void = r.ImageColorTint //Modify image color: tint 
export const ImageColorInvert: (image: Image) => void = r.ImageColorInvert //Modify image color: invert 
export const ImageColorGrayscale: (image: Image) => void = r.ImageColorGrayscale //Modify image color: grayscale 
export const ImageColorContrast: (image: Image, contrast: number) => void = r.ImageColorContrast //Modify image color: contrast (-100 to 100) 
export const ImageColorBrightness: (image: Image, brightness: number) => void = r.ImageColorBrightness //Modify image color: brightness (-255 to 255) 
export const ImageColorReplace: (image: Image, color: Color, replace: Color) => void = r.ImageColorReplace //Modify image color: replace color 
export const GenImageColor: (width: number, height: number, color: Color) => Image = r.GenImageColor //Generate image: plain color 
export const GenImageGradientV: (width: number, height: number, top: Color, bottom: Color) => Image = r.GenImageGradientV //Generate image: vertical gradient 
export const GenImageGradientH: (width: number, height: number, left: Color, right: Color) => Image = r.GenImageGradientH //Generate image: horizontal gradient 
export const GenImageGradientRadial: (width: number, height: number, density: number, inner: Color, outer: Color) => Image = r.GenImageGradientRadial //Generate image: radial gradient 
export const GenImageChecked: (width: number, height: number, checksX: number, checksY: number, col1: Color, col2: Color) => Image = r.GenImageChecked //Generate image: checked 
export const GenImageWhiteNoise: (width: number, height: number, factor: number) => Image = r.GenImageWhiteNoise //Generate image: white noise 
export const GenImagePerlinNoise: (width: number, height: number, offsetX: number, offsetY: number, scale: number) => Image = r.GenImagePerlinNoise //Generate image: perlin noise 
export const GenImageCellular: (width: number, height: number, tileSize: number) => Image = r.GenImageCellular //Generate image: cellular algorithm. Bigger tileSize means bigger cells 
export const GenTextureMipmaps: (texture: Texture2D) => void = r.GenTextureMipmaps //Generate GPU mipmaps for a texture 
export const SetTextureFilter: (texture: Texture2D, filterMode: number) => void = r.SetTextureFilter //Set texture scaling filter mode 
export const SetTextureWrap: (texture: Texture2D, wrapMode: number) => void = r.SetTextureWrap //Set texture wrapping mode 
export const DrawTexture: (texture: Texture2D, posX: number, posY: number, tint: Color) => void = r.DrawTexture //Draw a Texture2D 
export const DrawTextureV: (texture: Texture2D, position: Vector2, tint: Color) => void = r.DrawTextureV //Draw a Texture2D with position defined as Vector2 
export const DrawTextureEx: (texture: Texture2D, position: Vector2, rotation: number, scale: number, tint: Color) => void = r.DrawTextureEx //Draw a Texture2D with extended parameters 
export const DrawTextureRec: (texture: Texture2D, sourceRec: Rectangle, position: Vector2, tint: Color) => void = r.DrawTextureRec //Draw a part of a texture defined by a rectangle 
export const DrawTextureQuad: (texture: Texture2D, tiling: Vector2, offset: Vector2, quad: Rectangle, tint: Color) => void = r.DrawTextureQuad //Draw texture quad with tiling and offset parameters 
export const DrawTexturePro: (texture: Texture2D, sourceRec: Rectangle, destRec: Rectangle, origin: Vector2, rotation: number, tint: Color) => void = r.DrawTexturePro //Draw a part of a texture defined by a rectangle with 'pro' parameters 
export const DrawTextureNPatch: (texture: Texture2D, nPatchInfo: NPatchInfo, destRec: Rectangle, origin: Vector2, rotation: number, tint: Color) => void = r.DrawTextureNPatch //Draws a texture (or part of it) that stretches or shrinks nicely 

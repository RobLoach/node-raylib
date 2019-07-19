import r from "./bindings/raylib"
import { Color } from "./types/colors"


export const LoadImage: (fileName: string) => Image = r.LoadImage //Load image from file into CPU memory (RAM) 
export const LoadImageEx: (height: number) => Image = r.LoadImageEx //Load image from Color array data (RGBA - 32bit) 
export const LoadImagePro: (format: number) => Image = r.LoadImagePro //Load image from raw data with parameters 
export const LoadImageRaw: (headerSize: number) => Image = r.LoadImageRaw //Load image from RAW file data 
export const ExportImage: (fileName: string) => void = r.ExportImage //Export image data to file 
export const ExportImageAsCode: (fileName: string) => void = r.ExportImageAsCode //Export image as code file defining an array of bytes 
export const LoadTexture: (fileName: string) => Texture2D = r.LoadTexture //Load texture from file into GPU memory (VRAM) 
export const LoadTextureFromImage: (image: Image) => Texture2D = r.LoadTextureFromImage //Load texture from image data 
export const LoadTextureCubemap: (layoutType: number) => TextureCubemap = r.LoadTextureCubemap //Load cubemap from image, multiple image cubemap layouts supported 
export const LoadRenderTexture: (height: number) => RenderTexture2D = r.LoadRenderTexture //Load texture for rendering (framebuffer) 
export const UnloadImage: (image: Image) => void = r.UnloadImage //Unload image from CPU memory (RAM) 
export const UnloadTexture: (texture: Texture2D) => void = r.UnloadTexture //Unload texture from GPU memory (VRAM) 
export const UnloadRenderTexture: (target: RenderTexture2D) => void = r.UnloadRenderTexture //Unload render texture from GPU memory (VRAM) 
export const GetImageData: (image: Image) => Color = r.GetImageData //Get pixel data from image as a Color struct array 
export const GetImageDataNormalized: (image: Image) => Vector4 = r.GetImageDataNormalized //Get pixel data from image as Vector4 array (float normalized) 
export const GetPixelDataSize: (format: number) => number = r.GetPixelDataSize //Get pixel data size in bytes (image or texture) 
export const GetTextureData: (texture: Texture2D) => Image = r.GetTextureData //Get pixel data from GPU texture and return an Image 
export const GetScreenData: () => Image = r.GetScreenData //Get pixel data from screen buffer and return an Image (screenshot) 
export const UpdateTexture: (pixels: const void) => void = r.UpdateTexture //Update GPU texture with new data 
export const ImageCopy: (image: Image) => Image = r.ImageCopy //Create an image duplicate (useful for transformations) 
export const ImageToPOT: (fillColor: Color) => void = r.ImageToPOT //Convert image to POT (power-of-two) 
export const ImageFormat: (newFormat: number) => void = r.ImageFormat //Convert image data to desired format 
export const ImageAlphaMask: (alphaMask: Image) => void = r.ImageAlphaMask //Apply alpha mask to image 
export const ImageAlphaClear: (threshold: number) => void = r.ImageAlphaClear //Clear alpha channel to desired color 
export const ImageAlphaCrop: (threshold: number) => void = r.ImageAlphaCrop //Crop image depending on alpha value 
export const ImageAlphaPremultiply: (image: Image) => void = r.ImageAlphaPremultiply //Premultiply alpha channel 
export const ImageCrop: (crop: Rectangle) => void = r.ImageCrop //Crop an image to a defined rectangle 
export const ImageResize: (newHeight: number) => void = r.ImageResize //Resize image (Bicubic scaling algorithm) 
export const ImageResizeNN: (newHeight: int newWidth,int) => void = r.ImageResizeNN //Resize image (Nearest-Neighbor scaling algorithm) 
export const ImageResizeCanvas: (color: Color) => void = r.ImageResizeCanvas //Resize canvas and fill with color 
export const ImageMipmaps: (image: Image) => void = r.ImageMipmaps //Generate all mipmap levels for a provided image 
export const ImageDither: (aBpp: number) => void = r.ImageDither //Dither image data to 16bpp or lower (Floyd-Steinberg dithering) 
export const ImageExtractPalette: (extractCount: number) => Color = r.ImageExtractPalette //Extract color palette from image to maximum size (memory should be freed) 
export const ImageText: (color: Color) => Image = r.ImageText //Create an image from text (default font) 
export const ImageTextEx: (tint: Color) => Image = r.ImageTextEx //Create an image from text (custom sprite font) 
export const ImageDraw: (dstRec: Rectangle) => void = r.ImageDraw //Draw a source image within a destination image 
export const ImageDrawRectangle: (color: Color) => void = r.ImageDrawRectangle //Draw rectangle within an image 
export const ImageDrawRectangleLines: (color: Color) => void = r.ImageDrawRectangleLines //Draw rectangle lines within an image 
export const ImageDrawText: (color: Color) => void = r.ImageDrawText //Draw text (default font) within an image (destination) 
export const ImageDrawTextEx: (color: Color) => void = r.ImageDrawTextEx //Draw text (custom sprite font) within an image (destination) 
export const ImageFlipVertical: (image: Image) => void = r.ImageFlipVertical //Flip image vertically 
export const ImageFlipHorizontal: (image: Image) => void = r.ImageFlipHorizontal //Flip image horizontally 
export const ImageRotateCW: (image: Image) => void = r.ImageRotateCW //Rotate image clockwise 90deg 
export const ImageRotateCCW: (image: Image) => void = r.ImageRotateCCW //Rotate image counter-clockwise 90deg 
export const ImageColorTint: (color: Color) => void = r.ImageColorTint //Modify image color: tint 
export const ImageColorInvert: (image: Image) => void = r.ImageColorInvert //Modify image color: invert 
export const ImageColorGrayscale: (image: Image) => void = r.ImageColorGrayscale //Modify image color: grayscale 
export const ImageColorContrast: (contrast: number) => void = r.ImageColorContrast //Modify image color: contrast (-100 to 100) 
export const ImageColorBrightness: (brightness: number) => void = r.ImageColorBrightness //Modify image color: brightness (-255 to 255) 
export const ImageColorReplace: (replace: Color) => void = r.ImageColorReplace //Modify image color: replace color 
export const GenImageColor: (color: Color) => Image = r.GenImageColor //Generate image: plain color 
export const GenImageGradientV: (bottom: Color) => Image = r.GenImageGradientV //Generate image: vertical gradient 
export const GenImageGradientH: (right: Color) => Image = r.GenImageGradientH //Generate image: horizontal gradient 
export const GenImageGradientRadial: (outer: Color) => Image = r.GenImageGradientRadial //Generate image: radial gradient 
export const GenImageChecked: (col2: Color) => Image = r.GenImageChecked //Generate image: checked 
export const GenImageWhiteNoise: (factor: number) => Image = r.GenImageWhiteNoise //Generate image: white noise 
export const GenImagePerlinNoise: (scale: number) => Image = r.GenImagePerlinNoise //Generate image: perlin noise 
export const GenImageCellular: (tileSize: number) => Image = r.GenImageCellular //Generate image: cellular algorithm. Bigger tileSize means bigger cells 
export const GenTextureMipmaps: (texture: Texture2D) => void = r.GenTextureMipmaps //Generate GPU mipmaps for a texture 
export const SetTextureFilter: (filterMode: number) => void = r.SetTextureFilter //Set texture scaling filter mode 
export const SetTextureWrap: (wrapMode: number) => void = r.SetTextureWrap //Set texture wrapping mode 
export const DrawTexture: (tint: Color) => void = r.DrawTexture //Draw a Texture2D 
export const DrawTextureV: (tint: Color) => void = r.DrawTextureV //Draw a Texture2D with position defined as Vector2 
export const DrawTextureEx: (tint: Color) => void = r.DrawTextureEx //Draw a Texture2D with extended parameters 
export const DrawTextureRec: (tint: Color) => void = r.DrawTextureRec //Draw a part of a texture defined by a rectangle 
export const DrawTextureQuad: (tint: Color) => void = r.DrawTextureQuad //Draw texture quad with tiling and offset parameters 
export const DrawTexturePro: (tint: Color) => void = r.DrawTexturePro //Draw a part of a texture defined by a rectangle with 'pro' parameters 
export const DrawTextureNPatch: (tint: Color) => void = r.DrawTextureNPatch //Draws a texture (or part of it) that stretches or shrinks nicely 

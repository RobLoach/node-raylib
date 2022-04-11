# Pass By Reference functions
Some functions in raylib expect one (or more) of their arguments, instead of being an instance of a variable - to be a _pointer_ to that variable. That way, it can _modify_ that variable and not have to return it. This is effectively passing the variable as a reference.

A good example of this in the raylib API are functions that manipulate `Image` structs. When you call `ImageDrawPixel()` - the actual data property of the Image gets updated!

This causes problems when trying to use these functions from JS. When you make a call to a native addon function - all of your arguments to that function are _copied_ over to C++. So when C++ modifies those variables, it's modifying the copy, and not the version you have in JS. 

We can get around this by writing our function binding to _return_ the modified copy back to JS. This means we need to _change_ the return type of `BindImageDrawPixel` from `void` (which is what the raylib API specifies for it) to an `Napi::Object` that represents the now updated Image.

```cpp
Napi::Value BindImageDrawPixel(const Napi::CallbackInfo& info) {

	Image obj = //convert from info[0] to Image

	// this function is void because it is pass-by-reference
	ImageDrawPixel(obj/* <- Image reference */, ...);

	// now we must reference the updated values,
	// and build a new Napi::Object to return to the user
	return ToValue(info.Env(), obj); // assume there is some function Napi::Value ToValue(napi_env env, Image obj) {}
}
```
Now when the user calls the bound function from JS - the function _returns_ a new `Image` object that they need to replace their existing one with. To make that easier, the NodeJS `ImageDrawPixel()` should wrap the native addon function:
```ts
export function ImageDrawPixel(image: Image, posX: number, posY: number, color: Color) {
  // store updated copy
  let new_image = raylib.ImageDrawPixel(image, posX, posY, color)
  for (let key in image) {
    // copy each value over to the original
    image[key] = new_image[key]
  }
}
```

## Code Generation
Fortunately, the functions where this applies all follow a similar format. It's always the first argument that is the object being passed by reference. This makes it easy to determine which struct type needs to be returned by the modified function binding.

For quick reference, here are the functions in rayliib 4.0 this concept applies to:
```js
let by_reference_functions = [
'UpdateCamera',
'ImageFormat',
'ImageToPOT',
'ImageCrop',
'ImageAlphaCrop',
'ImageAlphaClear',
'ImageAlphaMask',
'ImageAlphaPremultiply',
'ImageResize',
'ImageResizeNN',
'ImageResizeCanvas',
'ImageMipmaps',
'ImageDither',
'ImageFlipVertical',
'ImageFlipHorizontal',
'ImageRotateCW',
'ImageRotateCCW',
'ImageColorTint',
'ImageColorInvert',
'ImageColorGrayscale',
'ImageColorContrast',
'ImageColorBrightness',
'ImageColorReplace',
'ImageClearBackground',
'ImageDrawPixel',
'ImageDrawPixelV',
'ImageDrawLine',
'ImageDrawLineV',
'ImageDrawCircle',
'ImageDrawCircleV',
'ImageDrawRectangle',
'ImageDrawRectangleV',
'ImageDrawRectangleRec',
'ImageDrawRectangleLines',
'ImageDraw',
'ImageDrawText',
'ImageDrawTextEx',
'GenTextureMipmaps',
'GenTextureMipmaps',
'UploadMesh',
'GenMeshTangents',
'GenMeshBinormals',
'SetMaterialTexture',
'SetModelMeshMaterial',
'WaveFormat',
'WaveCrop'
]
```
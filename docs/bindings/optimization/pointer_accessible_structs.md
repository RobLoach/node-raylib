# Pointer-Accessed Structs
To improve performance of the bindings, some certain structs will be cached by the C++ binding, and when using them from the NodeJS API, only a number representing their pointer in C++ memory will be used.
## Requirements
Not all structs would make sense to be cached in C++ memory. Some structs, like colors or Rectangles, are only instantiated and used once, then immediately cleared by the JS garbage collector. Data in JS and C++ is only ever _copied_ when passed in and out of functions, never referenced. So even if a variable in JavaScript is cleared by garbage collection, it would not be cleared in C++ memory, leading to memory leaks. So only structs that have clear Load() and Unload() functions in the raylib API can make use of a cache in C++ memory.
A good example of this is a raylib `Texture`.

## Loading

When a texture is loaded - the C++ Binding will additionally allocate space in memory for that texture, and return a pointer to that space with the rest of the texture data to the user.
```cpp
// LoadTexture function binding
Napi::Object BindLoadTexture(const Napi::CallbackInfo& info) {
  // call raylib function and store result
  Texture texture = LoadTexture(info[0].As<Napi::String>().Utf8Value().c_str());
  // assign memory in the raylib memory pool for the texture
  void* ptr = MemAlloc(sizeof(Texture2D));
  // copy the texture data to that memory location
  *(Texture2D*)ptr = tex;
  // return a JS object to NodeJS containing the texture, with the pointer included
  Napi::Object out = Napi::Object::New(env);
  out.Set("id", texture.id);
  out.Set("width", texture.width);
  out.Set("height", texture.height);
  out.Set("mipmaps", texture.mipmaps);
  out.Set("format", texture.format);
  // a void* needs to be cast as an integer to convert to a Javascript number
  out.Set("pointer", (int64_t) ptr);
  return out;
}
```
Since raylib's API does not define `pointer` as a property of a `Texture`, the property will be hidden from the object when recieved in NodeJS:
```js
export function LoadTexture(path) {
  let texture = raylib.LoadTexture(path)
  return processTextureOutput(texture)
}

function processTextureOutput(texture) {
  const ob = {
      id: texture.id,
      width: texture.width,
      height: texture.height,
      mipmaps: texture.mipmaps,
      format: texture.format
  }
  // pointer property will not appear in console.log()
  // or when iterating values of the texture
  Object.defineProperty(obj, 'pointer', {
      enumerable: false,
      writable: false,
      value: texture.pointer
  })
  // make all properties of the texture readonly (immutable)
  Object.freeze(ob)
  return ob
}
```

## Usage in NodeJS

Consequently, when calling a C++ binding function that uses a pointer-accessible struct, only a single integer needs to be passed from NodeJS to the binding, which dramatically speeds up execution time of the bound function.
```cpp
void BindDrawTexturePointer(const Napi::CallbackInfo& info) {
  DrawTexture(
    // convert the JS Number to a pointer.
    // Then cast that pointer as a Texture pointer and access the texture
    *(Texture2D*)info[0].As<Napi::Number>().Int64Value(), 
    info[1].As<Napi::Number>(),
    info[2].As<Napi::Number>(),
    GetColor(info[3].As<Napi::Number>())
  );
}
```
Users of node-raylib should not have to concern themselves with working with pointers in order to use the library, however. The Raylib API expects DrawTexture to use a Texture as an argument, not a Javascript number that represents a pointer. So to avoid confusion, the NodeJS API will wrap functions that require a Texture as input, and make use of the hidden pointer for the user:
```ts
export function DrawTexture(texture: Texture, x: number, y: number, color: Color) {
  raylib.DrawTexture(texture.pointer, x, y, color)
}
```

## Unloading

Additionally, when a pointer accessible struct is deleted or unloaded, that struct needs to be freed from the raylib memory pool to prevent memory leaking.

We free the struct in C-space:
```cpp
void BindUnloadTexture(const Napi::CallbackInfo& info) {
  UnloadTexture(*(Texture2D*)info[0].As<Napi::Number>().Int64Value());
  MemFree((void*)info[0].As<Napi::Number>().Int64Value());
}
```

And pull out the pointer from the object, in JS-space:
```ts
export function UnloadTexture(texture: Texture) {
  raylib.UnloadTexture(texture.pointer)
}
```
Note: Currently this does not delete the Javascript object representing the tetxure, or change the value of the pointer. Maybe the wrapper function for unloading should `unfreeze` the object, and set its pointer/properties to `undefined` then `freeze` again?

Note: There should be some sort of guide or warning to users about instances where they want to 'reload' the same texture:
```js
let texture = r.LoadTexture('sprite.png')
// expect user to make some change to sprite.png on disk
// ... then later
texture = r.LoadTexture('sprite.png')
// C++ memory leak!! user should call r.UnloadTexture(texture) first
```
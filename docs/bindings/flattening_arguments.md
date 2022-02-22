# Flattening Arguments
When you call a native addon function, converting data from JS into C++ data is _very expensive_ work. That work gets increasingly more expensive if you want to convert a Javascript object _into_ a C++ struct. 

Of course, it IS possible to do this with node-addon-api: you can call `Napi::Object obj = info[index].As<Napi::Object>();` to get a Javascript object in C++. Then you can call `obj.Get("property_name");` to access a property of that object. You then need to again use `.As<>()` to convert that property to the C++ type you want to use. `.As<Napi::Object>()` is _VERY_ expensive - an order of _magnitude_ slower than converting a primitive type like `Napi::Number` or `Napi::Boolean`. If you are interested in writing a fast C++ binding - avoid `.As<Napi::Object>()` or `.Get()` _wherever possible_.

Node-raylib gets around this by generating function bindings that _flatten_ any struct / object arguments into a longer list of individual arguments.

That means binding `DrawTexture()` would look like this:
```cpp
void BindDrawTexture(const Napi::CallbackInfo& info) {
  DrawTexture(
    (Texture2D) {
      info[0].As<Napi::Number>(),
      info[1].As<Napi::Number>(),
      info[2].As<Napi::Number>(),
      info[3].As<Napi::Number>(),
      info[4].As<Napi::Number>(),
    },
    info[5].As<Napi::Number>(),
    info[6].As<Napi::Number>(),
    (Color){
      (int)info[7].As<Napi::Number>(),
      (int)info[8].As<Napi::Number>(),
      (int)info[9].As<Napi::Number>(),
      (int)info[10].As<Napi::Number>()
    }
  );
}
```
Notice how with this binding, it has to _build_ a `Texture2D` and a `Color` out of arguments passed in via the `info` array.
This means that the way the function is used from JS changes as well. You would normally call `DrawTexture()` with four arguments like so:
```js
let myTexture = {
	id: 0,
	width: 128,
	height: 128,
	mipmaps: 1,
	format: 7 // default format for PNGs
}
let myTextureColor =  {
	r: 255,
	g: 255,
	b: 255,
	a: 255
}
raylib.DrawTexture(myTexture, 10, 10, myTextureColor)
```

But by flattening the arguments - It needs to be called with 11 elements, like this:
```js
raylib.DrawTexture(
	// texture
	myTexture.id, myTexture.width, myTexture.height, myTexture.mipmaps, myTexture.format,
	// position
	10, 10,
	myTextureColor.r, myTextureColor.g, myTextureColor.b, myTextureColor.a // color
)
```
This sounds a little tedious to have to write each time. So the code generator will also generate wrapper functions that handle flattening the arguments for the user, so they can use the function with four arguments like they expect (and the API usage does not deviate from the original raylib API).
```js
export function DrawTexture(texture: Texture, posX: Number, posY: Number, tint: Color) {
  raylib.DrawTexture(...processTextureInput(texture), posX, posY, ...processColorInput(color))
}

// initial process just flattens 
function processColorInput(color: Color) {
  return [color.r, color.g, color.b, color.a]
}

// initial process just flattens 
function processTextureInput(texture: Texture) {
  return [texture.id, texture.width, texture.height, texture.mipmaps, texture.format]
}
```
This may seem like a lot of effort to implement. But when benchmarking this change, compared to using `Napi::Object`s as input for Texture and Color, I was able to _multiply_ the framerate of the benchmark by _6_, so flattening the structs in JS before calling the native function _far outweighs_ the cost of using C++ to parse the JS objects.
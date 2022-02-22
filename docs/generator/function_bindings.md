# Function Bindings

Writing C++ function bindings that use the node-addon-api is the main goal of the generator. Node-addon-api works by compiling C++ code into a `.node` file that can be required like any other javascript module. The functions declared in a `.node` file, however, map to C++ functions. In this case, those functions expose the API of raylib to NodeJS.

Node-addon-api bindings are not quite as simple as simply calling the C++ function you want to use. The binding first needs to convert Javascript objects and data passed in from Node into equivalent C++ types. For some types like `int` or `float` that is easy: Javascript typically works with `number` - which is implemented in C++ using node-addon-api's `Napi::Number` class.
Once all the function's arguments have been converted from JS to C++ types, you can then pass them into the function you mean to bind to.

If the C++ function returns a value, that value also needs to be converted _back into_ a subsequent Javascript object.

## Example 1: Void Functions
Let's start with a simple binding to a function that does not return any value to the user: `InitWindow`.
In C++, `InitWindow` expects 3 arguments: 

`void InitWindow(int width, int height, const char *title) {}`.

So in Javascript, the user should expect to pass in two numbers, and a string for the title of the window. Note that in Javascript, all numbers are actually floats - So we already know that somewhere (in the C++ code), we will need to do a float -> int conversion. Let's start writing a C++ function that binds our raylib function to Javascript.
```cpp
void BindInitWindow(const Napi::CallbackInfo& info) {

}
```
The first thing you should notice is that our binding function doesn't take the three arguments described above. It has a single argument - `info`. There is a little more than this going on with it, but a simple understanding is that `info` is an array of _whatever_ arguments were passed into the function in Javascript. That means our binding function should expect `info[0]` and `info[1]` to be Javascript numbers, and `info[2]` to be the string. This still isn't quite the case.

Everying in `info[]` starts out as an `Napi::Value` object. You could think about this as being of `any` type, in Typescript. `Napi::Value`s have a few helpers that allow you to quickly convert in to the type that you need. You can call `.As()` on your `Napi::Value` to cast to the type that you need. So lets do that:
```cpp
void BindInitWindow(const Napi::CallbackInfo& info) {
	int width = info[0].As<Napi::Number>();
	int height = info[1].As<Napi::Number>();
	const char * title = info[2].As<Napi::String>().Utf8Value().c_str();
	// now we can call our raylib function!
	InitWindow(width, height, title);
}
```
Converting width and height are pretty straightforward. `Napi::Number` objects inherently know how to cast themselves into ints. And no, unfortunately, you cannot simply do `.As<int>()` - it needs to be some sort of `Napi::` type or it won't compile. Converting the string is a bit trickier - you have to call some additional functions to further coerce it into the type you actually need. Reference the generator code if you want a quick cheatsheet on how to convert between common Javascript and C++ types.

This is all you need to write the binding for the `InitWindow` function! Of course, you don't need to store each argument to a variable, you can convert everything inline as you call the function.

## Function with a simple return type
Let's look at another function - this time, it's one that needs to return a value to the user. `GetFPS()` is simple as it doesn't require any arguments, and simply returns a C++ `int`. You may have already guessed that we need to create a `Napi::Number` to send back to NodeJS. So rather than creating a `void` function for our binding, let's create a function that returns a `Napi::Number`:
```cpp
Napi::Number BindGetFPS(const Napi::CallbackInfo& info) {
	int fps = GetFPS();
	return Napi::Number::New(info.Env(), fps);
}
```
Since this function takes no arguments, we have no need to index info as an array. We do, however, still need `info` to be able to create an `Napi::Number`. Notice how we call `Napi::Number::New` instead of something like `new Napi::Number`. There is also the `info.Env()` call. A basic way of understanding that, is that in order to create a Javascript number, we also need to tell node-addon-api _which_ NodeJS environment to create the variable in. Here we want to create it in the same environment that called the function, so we get the `Env` from our info argument.

## Function with a complex (class/struct) return type
Some functions need to return instances of a C++ class or struct. In order to do that, we can use node-addon-api to create a Javascript object that represents the struct. Raylib is a pure-C library, so it does not have any classes. Let's look at raylib's `LoadTexture(const char * filename)` - which returns a `Texture` struct.

In raylib, a `Texture` is a struct with 5 integer properties: `id, width, height, mipmaps, format`.

In node-addon-api, a Javascript Object, is somewhat predictably called `Napi::Object`. Like above, you need an `Env` to create one. Once you instantiate an `Napi::Object` - you can call `.Set()` on it to add properties. `Set()` inherently knows how to convert a lot of primitive types, so in the case of a `Texture` there is no need to convert everything into `Napi::Number` instances.

Our binding will look like this: 
```cpp
Napi::Object BindLoadTexture(const Napi::CallbackInfo& info) {
	Texture texture = LoadTexture(
		// convert our function argument to a string!
		info[0].As<Napi::String>().Utf8Value().c_str()
	);
	Napi::Object out = Napi::Object::New(info.Env());
	out.Set("id", texture.id);
	out.Set("width", texture.width);
	out.Set("height", texture.height);
	out.Set("mipmaps", texture.mipmaps);
	out.Set("format", texture.format);
	return out;
}
```
### Caveat: Nested structs
Some structs in raylib have properties that are instances of other structs! Unfortunately, you can't pass a struct instance into `.Set()` - it doesn't know how to convert them. To assign a struct using `.Set()` - you have to convert _that_ struct into an `Napi::Object` first!
```cpp
Vector2 vec2 = {0.0, 0.0}; // instantiate c++ vector2 (maybe some function returns this)
Napi::Object out = Napi::Object::New(info.Env());
out.Set("position", vec2); // ERROR! can't convert vec2 to Napi::Value
// instead lets convert the vec2 into a JS object:
Napi::Object napi_vec2 = Napi::Object::New(info.Env());
napi_vec2.Set("x", vec2.x);
napi_vec2.Set("y", vec2.y);
// NOW we can set it onto our output object:
out.Set("position", napi_vec2);
return out;
```
## Exporting the bound functions to NodeJS
There is one extra step after writing the function bindings that actually allows you to use them from your NodeJS code. You need to use the node-addon-api to construct an object that your native addon "exports" as a module.
To do this, create a function that returns a `Napi::Object` at the end of your binding file like so:
```cpp
// note that `exports` is one of the arguments to this function:
Napi::Object Init(Napi::Env env, Napi::Object exports) {
	return exports;
}
```
You then need to populate `exports` with your function bindings.
```cpp
Napi::Object Init(Napi::Env env, Napi::Object exports) {

  exports.Set(
		// this is what the name of the function will be in Javascript
    Napi::String::New(env, "InitWindow"),
		// create an Napi::Function out of the function binding you wrote somewhere
    Napi::Function::New(env, BindInitWindow)
  );

  return exports;
}
```
The pattern for this is very straightforward - you can pretty much copy and paste for each function binding, and just change the names to match each function of your API. Think of `exports` as a Javascript object that you can assign any properties you want to with `Set()`. In this case, we want to create an object with all the functions of our API. You can also set properties that aren't functions, like `Napi::Number` if you want to export some constants!

One more line of code is needed, right at the bottom of the file, to _actually_ tell node-addon-api that this is the object you want your addon to export:
```cpp
Napi::Object Init(Napi::Env env, Napi::Object exports) {
	// exports.Set(xyz)
  return exports;
}
// you don't need to declare `addon` anywhere - it comes from the node-addon-api namespace
NODE_API_MODULE(addon, Init);
```

Let's put everything together for this small example API:

```cpp
#include <napi.h>
#include <raylib.h>

using namespace Napi;

void BindInitWindow(const Napi::CallbackInfo& info) {
  return InitWindow(
    info[0].As<Napi::Number>(),
    info[1].As<Napi::Number>(),
    info[2].As<Napi::String>().Utf8Value().c_str()
  );
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {

  exports.Set(
    Napi::String::New(env, "InitWindow"),
    Napi::Function::New(env, BindInitWindow)
  );

  return exports;
}

NODE_API_MODULE(addon, Init);
```
That's a full node-addon-api C++ binding!
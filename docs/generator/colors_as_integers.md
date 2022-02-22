# Colors as integers
It's a well known concept in graphics programming that a color can be 'encoded' into a 32 bit integer. Most graphics libraries expect colors to be represented by four 8-bit integers ranging from 0-255 that represent the red, green, blue, and alpha channels of the color. In node-addon-api bindings, using a smaller amount of arguments for function can drastically improve the speed the function can be completed, as less data needs to be copied between JS and C++. So by converting colors to integers in the API, a significant performance gain can be had.

In JS you can use bitwise operators to combine the color channels into a single number:
```js
let c = {r: 255, g: 128, b: 0, a: 255}
var cr = c.r & 0xFF;
var cg = c.g & 0xFF;
var cb = c.b & 0xFF;
var ca = c.a & 0xFF;
var rgba = (cr << 24) + (cg << 16) + (cb << 8) + (ca)
```
Raylib comes with a function to decode an unsigned integer into an instance of a Color. So using the number with the node-addon-api becomes trivial:
```cpp
Napi::Number num = info[0].As<Napi::Number>();
Color color = GetColor(num);
```
```cpp
void BindDrawTexture(const Napi::CallbackInfo& info) {
  DrawTexture(
    *(Texture2D*)info[0].As<Napi::Number>().Int64Value(),
    info[1].As<Napi::Number>(),
    info[2].As<Napi::Number>(),
    // convert a color inline
    GetColor(info[3].As<Napi::Number>())
  );
}
```
In order to preserve compatibility for end-users of the API, JS wrappers need to convert instances of color objects to integers whenever an API function that requires a color is called:
```ts
function process_color(color: Color) {
  var cr = color.r & 0xFF;
  var cg = color.g & 0xFF;
  var cb = color.b & 0xFF;
  var ca = color.a & 0xFF;
  return  (cr << 24) + (cg << 16) + (cb << 8) + (ca)
}

export function DrawTexture(texture: Texture, x: number, y: number, color: Color) {
	raylib.DrawTexture(texture.pointer, x, y, process_color(color))
}
```
# Raylib API JSON

Raylib's API JSON contains three types of definitions:

## Structs
Structs map out the native types used by raylib to represent complex data.
```json
{
  "name": "Vector2",
  "description": "Vector2, 2 components",
  "fields": [
    {
      "type": "float",
      "name": "x",
      "description": "Vector x component"
    },
    {
      "type": "float",
      "name": "y",
      "description": "Vector y component"
    }
  ]
},

{
  "name": "Camera2D",
  "description": "Camera2D, defines position/orientation in 2d space",
  "fields": [
    {
      "type": "Vector2",
      "name": "offset",
      "description": "Camera offset (displacement from target)"
    },
    {
      "type": "Vector2",
      "name": "target",
      "description": "Camera target (rotation and zoom origin)"
    },
    {
      "type": "float",
      "name": "rotation",
      "description": "Camera rotation in degrees"
    },
    {
      "type": "float",
      "name": "zoom",
      "description": "Camera zoom (scaling), should be 1.0f by default"
    }
  ]
}
```
In NodeJS, raylib structs are accessed and can be created as plain javascript objects.
```js
let myCamera = {
  offset: {x: 0, y: 0},
  target: {x: 50, y: 50},
  rotation: 0,
  zoom: 1
}
```
Some structs may have optional constructor functions. This acts the same as instantiating an object with the same parameters.
```js
let color_a = r.Color(128, 128, 128, 255)
let color_b = {r: 128, g: 128, b: 128, a: 255}
console.log(color_a) // => {r: 128, g: 128, b: 128, a: 255}
```
### Pointer Accessible structs
To improve performance of the bindings, some structs in JS will also contain a "hidden" property defining the pointer location of the struct in C++ memory. When making API calls, only the pointer is needed to reference the struct. Read more in [pointer_accessible_structs.md](./pointer_accessible_structs.md)
### Colors
Another improvement to performance is converting a JS color object to an integer number to pass to the C++ addon. This reduces the cost of converting a color from JS to C++ by ~75%. Read more in [colors_as_integers.md](./colors_as_integers.md)
## Enums

## Functions
Functions make up the bulk of the api, and the primary job of the binding generator is to properly handle converting types between C++ and JS to pass as arguments and return values from raylib.
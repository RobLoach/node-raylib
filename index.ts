/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */

// Find the bindings.
const r = require('bindings')('node-raylib')
// const enums = require('./src/enums')

// Inject the enums.
// for (var enumName in enums) {
//   raylib[enumName] = enums[enumName]
// }

namespace raylib {
  export const PI = 3.14159265358979323846
  export const MAX_TOUCH_POINTS = 10
  export const MAX_SHADER_LOCATIONS = 32
  export const MAX_MATERIAL_MAPS = 12
  export const DEG2RAD = (raylib.PI / 180.0)
  export const RAD2DEG = (180.0 / raylib.PI)

  export class Color {
    r: number
    g: number
    b: number
    a: number

    constructor(red: number, green: number, blue: number, alpha: number) {
      this.r = red,
      this.g = green,
      this.b = blue,
      this.a = alpha
    }
  }

  export const LIGHTGRAY  = new raylib.Color(200, 200, 200, 255 )   // Light Gray
  export const GRAY       = new raylib.Color(130, 130, 130, 255 )   // Gray
  export const DARKGRAY   = new raylib.Color(80, 80, 80, 255 )      // Dark Gray
  export const YELLOW     = new raylib.Color(253, 249, 0, 255 )     // Yellow
  export const GOLD       = new raylib.Color(255, 203, 0, 255 )     // Gold
  export const ORANGE     = new raylib.Color(255, 161, 0, 255 )     // Orange
  export const PINK       = new raylib.Color(255, 109, 194, 255 )   // Pink
  export const RED        = new raylib.Color(230, 41, 55, 255 )     // Red
  export const MAROON     = new raylib.Color(190, 33, 55, 255 )     // Maroon
  export const GREEN      = new raylib.Color(0, 228, 48, 255 )      // Green
  export const LIME       = new raylib.Color(0, 158, 47, 255 )      // Lime
  export const DARKGREEN  = new raylib.Color(0, 117, 44, 255 )      // Dark Green
  export const SKYBLUE    = new raylib.Color(102, 191, 255, 255 )   // Sky Blue
  export const BLUE       = new raylib.Color(0, 121, 241, 255 )     // Blue
  export const DARKBLUE   = new raylib.Color(0, 82, 172, 255 )      // Dark Blue
  export const PURPLE     = new raylib.Color(200, 122, 255, 255 )   // Purple
  export const VIOLET     = new raylib.Color(135, 60, 190, 255 )    // Violet
  export const DARKPURPLE = new raylib.Color(112, 31, 126, 255 )    // Dark Purple
  export const BEIGE      = new raylib.Color(211, 176, 131, 255 )   // Beige
  export const BROWN      = new raylib.Color(127, 106, 79, 255 )    // Brown
  export const DARKBROWN  = new raylib.Color(76, 63, 47, 255 )      // Dark Brown
  export const WHITE      = new raylib.Color(255, 255, 255, 255 )   // White
  export const BLACK      = new raylib.Color(0, 0, 0, 255 )         // Black
  export const BLANK      = new raylib.Color(0, 0, 0, 0 )           // Blank (Transparent)
  export const MAGENTA    = new raylib.Color(255, 0, 255, 255 )     // Magenta
  export const RAYWHITE   = new raylib.Color(245, 245, 245, 255 )   // My own White (raylib logo)

  // functions
  export const BeginDrawing:() => void = r.BeginDrawing
  export const EndDrawing:() => void = r.EndDrawing
  export const ClearBackground:(color: Color) => void = r.ClearBackground
  export const DrawText:(msg: string, x: number, y: number, fontsize: number, color: Color) => void = r.DrawText
}



// Structs
// raylib.Vector2 = function (x = 0, y = 0) {
//   return {
//     x: x,
//     y: y
//   }
// }
// raylib.Vector3 = function (x = 0, y = 0, z = 0) {
//   return {
//     x: x,
//     y: y,
//     z: z
//   }
// }
// raylib.Vector4 = function (x = 0, y = 0, z = 0, w = 0) {
//   return {
//     x: x,
//     y: y,
//     z: z,
//     w: w
//   }
// }
// raylib.Rectangle = function (x = 0, y = 0, width = 0, height = 0) {
//   return {
//     x: x,
//     y: y,
//     width: width,
//     height: height
//   }
// }
// raylib.Camera2D = function (offset, target, rotation, zoom) {
//   return {
//     offset: offset,
//     target: target,
//     rotation: rotation,
//     zoom: zoom
//   }
// }
// raylib.Camera = raylib.Camera3D = function (position, target, up, fovy, type) {
//   return {
//     position: position,
//     target: target,
//     up: up,
//     fovy: fovy,
//     type: type
//   }
// }

// raylib.Ray = function (position, direction) {
//   return {
//     position: position,
//     direction: direction
//   }
// }

// raylib.RayHitInfo = function (hit, distance, position, normal) {
//   return {
//     hit: hit,
//     distance,
//     position: position,
//     normal: normal
//   }
// }

// raylib.Shader = function (id, locs) {
//   return {
//     id: id,
//     locs: locs
//   }
// }

export default raylib
export { r }
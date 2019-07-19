/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */

// const enums = require('./src/enums')

// Inject the enums.
// for (var enumName in enums) {
//   raylib[enumName] = enums[enumName]
// }

import r from "./src/bindings/raylib"

import * as colors from "./src/colors"
import * as core from "./src/core"

const PI = 3.14159265358979323846

const raylib = {
  PI,
  MAX_TOUCH_POINTS: 10,
  MAX_SHADER_LOCATIONS: 32,
  MAX_MATERIAL_MAPS: 12,
  DEG2RAD: (PI / 180.0),
  RAD2DEG: (180.0 / PI),

  ...colors,
  ...core,
  // functions  
  DrawText: r.DrawText as (msg: string, x: number, y: number, fontsize: number, color: colors.Color) => void ,
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
"use strict";
/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Find the bindings.
var r = require('bindings')('node-raylib');
exports.r = r;
// const enums = require('./src/enums')
// Inject the enums.
// for (var enumName in enums) {
//   raylib[enumName] = enums[enumName]
// }
var raylib;
(function (raylib) {
    raylib.PI = 3.14159265358979323846;
    raylib.MAX_TOUCH_POINTS = 10;
    raylib.MAX_SHADER_LOCATIONS = 32;
    raylib.MAX_MATERIAL_MAPS = 12;
    raylib.DEG2RAD = (raylib.PI / 180.0);
    raylib.RAD2DEG = (180.0 / raylib.PI);
    var Color = /** @class */ (function () {
        function Color(red, green, blue, alpha) {
            this.r = red,
                this.g = green,
                this.b = blue,
                this.a = alpha;
        }
        return Color;
    }());
    raylib.Color = Color;
    raylib.LIGHTGRAY = new raylib.Color(200, 200, 200, 255); // Light Gray
    raylib.GRAY = new raylib.Color(130, 130, 130, 255); // Gray
    raylib.DARKGRAY = new raylib.Color(80, 80, 80, 255); // Dark Gray
    raylib.YELLOW = new raylib.Color(253, 249, 0, 255); // Yellow
    raylib.GOLD = new raylib.Color(255, 203, 0, 255); // Gold
    raylib.ORANGE = new raylib.Color(255, 161, 0, 255); // Orange
    raylib.PINK = new raylib.Color(255, 109, 194, 255); // Pink
    raylib.RED = new raylib.Color(230, 41, 55, 255); // Red
    raylib.MAROON = new raylib.Color(190, 33, 55, 255); // Maroon
    raylib.GREEN = new raylib.Color(0, 228, 48, 255); // Green
    raylib.LIME = new raylib.Color(0, 158, 47, 255); // Lime
    raylib.DARKGREEN = new raylib.Color(0, 117, 44, 255); // Dark Green
    raylib.SKYBLUE = new raylib.Color(102, 191, 255, 255); // Sky Blue
    raylib.BLUE = new raylib.Color(0, 121, 241, 255); // Blue
    raylib.DARKBLUE = new raylib.Color(0, 82, 172, 255); // Dark Blue
    raylib.PURPLE = new raylib.Color(200, 122, 255, 255); // Purple
    raylib.VIOLET = new raylib.Color(135, 60, 190, 255); // Violet
    raylib.DARKPURPLE = new raylib.Color(112, 31, 126, 255); // Dark Purple
    raylib.BEIGE = new raylib.Color(211, 176, 131, 255); // Beige
    raylib.BROWN = new raylib.Color(127, 106, 79, 255); // Brown
    raylib.DARKBROWN = new raylib.Color(76, 63, 47, 255); // Dark Brown
    raylib.WHITE = new raylib.Color(255, 255, 255, 255); // White
    raylib.BLACK = new raylib.Color(0, 0, 0, 255); // Black
    raylib.BLANK = new raylib.Color(0, 0, 0, 0); // Blank (Transparent)
    raylib.MAGENTA = new raylib.Color(255, 0, 255, 255); // Magenta
    raylib.RAYWHITE = new raylib.Color(245, 245, 245, 255); // My own White (raylib logo)
    // functions
    raylib.BeginDrawing = r.BeginDrawing;
    raylib.EndDrawing = r.EndDrawing;
    raylib.ClearBackground = r.ClearBackground;
    raylib.DrawText = r.DrawText;
})(raylib || (raylib = {}));
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
exports.default = raylib;

"use strict";
/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const enums = require('./src/enums')
// Inject the enums.
// for (var enumName in enums) {
//   raylib[enumName] = enums[enumName]
// }
var raylib_1 = __importDefault(require("./src/bindings/raylib"));
exports.r = raylib_1.default;
var colors = __importStar(require("./src/colors"));
var core = __importStar(require("./src/core"));
var PI = 3.14159265358979323846;
var raylib = __assign({ PI: PI, MAX_TOUCH_POINTS: 10, MAX_SHADER_LOCATIONS: 32, MAX_MATERIAL_MAPS: 12, DEG2RAD: (PI / 180.0), RAD2DEG: (180.0 / PI) }, colors, core, { 
    // functions  
    DrawText: raylib_1.default.DrawText });
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

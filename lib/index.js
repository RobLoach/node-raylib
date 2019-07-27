"use strict";
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
var raylib_1 = require("./src/bindings/raylib");
//   ...colors,
//   ...camera,
//   ...maths,
//   ...misc,
//   ...texture,
//   ...enums,
//   ...core,
//   ...shapes,
//   ...textures,
//   ...text,
//   ...models,
//   ...shaders,
//   ...audio,
//   // aliases
//   Camera: camera.Camera3D
// }
var raylib = raylib_1.default;
module.exports = raylib;

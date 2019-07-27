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

import * as colors from "./src/types/colors"
import * as camera from "./src/types/camera"
import * as maths from "./src/types/maths"
import * as enums from "./src/types/enums"
import * as misc from "./src/types/misc"
import * as texture from "./src/types/texture"


import Core from "./src/core"
import Audio from "./src/audio"
import Shapes from "./src/shapes"
import Textures from "./src/textures"
import Text from "./src/text"
import Models from "./src/models"
import Shaders from "./src/shaders"

interface Raylib extends Core, Audio, Shapes, Textures, Text, Models, Shaders {
  PI: number
  MAX_TOUCH_POINTS: number
  MAX_SHADER_LOCATIONS: number
  MAX_MATERIAL_MAPS: number
  DEG2RAD: number
  RAD2DEG: number
}



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

const raylib: Raylib = r

export = raylib
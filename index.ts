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

import * as core from "./src/core"
import * as shapes from "./src/shapes"
import * as textures from "./src/textures"
import * as text from "./src/text"
import * as models from "./src/models"
import * as shaders from "./src/shaders"
import * as audio from "./src/audio"

const PI = 3.14159265358979323846

const raylib = {
  PI,
  MAX_TOUCH_POINTS: 10,
  MAX_SHADER_LOCATIONS: 32,
  MAX_MATERIAL_MAPS: 12,
  DEG2RAD: (PI / 180.0),
  RAD2DEG: (180.0 / PI),

  ...colors,
  ...camera,
  ...maths,
  ...misc,
  ...texture,
  ...enums,
  
  ...core,
  ...shapes,
  ...textures,
  ...text,
  ...models,
  ...shaders,
  ...audio,
}

export default raylib
export { r }
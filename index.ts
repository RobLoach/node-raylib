/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */

import r from "./src/bindings/raylib"

import * as colors from "./src/types/colors"
import * as camera from "./src/types/camera"
import * as maths from "./src/types/maths"
import * as models from "./src/types/models"
import * as audio from "./src/types/audio"
import * as shaders from "./src/types/shaders"
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
import Misc from "./src/misc"
import * as wrappers from "./src/wrappers"


interface Raylib extends Core, Audio, Shapes, Textures, Text, Models, Shaders, Misc {
  // constants
  readonly PI: number
  readonly MAX_TOUCH_POINTS: number
  readonly MAX_SHADER_LOCATIONS: number
  readonly MAX_MATERIAL_MAPS: number
  readonly DEG2RAD: number
  readonly RAD2DEG: number

  //TODO: find a better way of getting these. Right now they are only here to make the library readonly
  // and allow for some linters to understand
  readonly Vector2: typeof maths.Vector2
  readonly Vector3: typeof maths.Vector3
  readonly Vector4: typeof maths.Vector4
  readonly Rectangle: typeof maths.Rectangle
  readonly Ray: typeof maths.Ray
  readonly RayHitInfo: typeof maths.RayHitInfo
  readonly Quaternion: typeof maths.Vector4

  readonly Color: typeof colors.Color
  readonly Camera2D: typeof camera.Camera2D
  readonly Camera3D: typeof camera.Camera3D
  readonly Camera: typeof camera.Camera3D
  readonly Shader: typeof shaders.Shader

  // enums: same as above  
  readonly KeyboardKey: { [key: string]: enums.KeyboardKey }
  readonly ConfigFlag: { [key: string]: enums.ConfigFlag }
  readonly TraceLogType: { [key: string]: enums.TraceLogType }
  readonly AndroidButton: { [key: string]: enums.AndroidButton }
  readonly MouseButton: { [key: string]: enums.MouseButton }
  readonly GamepadNumber: { [key: string]: enums.GamepadNumber }
  readonly GamepadButton: { [key: string]: enums.GamepadButton }
  readonly GamepadAxis: { [key: string]: enums.GamepadAxis }
  readonly ShaderLocationIndex: { [key: string]: enums.ShaderLocationIndex }
  readonly ShaderUniformDataType: { [key: string]: enums.ShaderUniformDataType }
  readonly MaterialMapType: { [key: string]: enums.MaterialMapType }
  readonly PixelFormat: { [key: string]: enums.PixelFormat }
  readonly TextureFilterMode: { [key: string]: enums.TextureFilterMode }
  readonly CubemapLayoutType: { [key: string]: enums.CubemapLayoutType }
  readonly TextureWrapMode: { [key: string]: enums.TextureWrapMode }
  readonly FontType: { [key: string]: enums.FontType }
  readonly BlendMode: { [key: string]: enums.BlendMode }
  readonly GestureType: { [key: string]: enums.GestureType }
  readonly CameraMode: { [key: string]: enums.CameraMode }
  readonly CameraType: { [key: string]: enums.CameraType }

  // colors: same as above
  readonly LIGHTGRAY : colors.Color
  readonly GRAY      : colors.Color
  readonly DARKGRAY  : colors.Color
  readonly YELLOW    : colors.Color
  readonly GOLD      : colors.Color
  readonly ORANGE    : colors.Color
  readonly PINK      : colors.Color
  readonly RED       : colors.Color
  readonly MAROON    : colors.Color
  readonly GREEN     : colors.Color
  readonly LIME      : colors.Color
  readonly DARKGREEN : colors.Color
  readonly SKYBLUE   : colors.Color
  readonly BLUE      : colors.Color
  readonly DARKBLUE  : colors.Color
  readonly PURPLE    : colors.Color
  readonly VIOLET    : colors.Color
  readonly DARKPURPLE: colors.Color
  readonly BEIGE     : colors.Color
  readonly BROWN     : colors.Color
  readonly DARKBROWN : colors.Color
  readonly WHITE     : colors.Color
  readonly BLACK     : colors.Color
  readonly BLANK     : colors.Color
  readonly MAGENTA   : colors.Color
  readonly RAYWHITE  : colors.Color
}

const raylib: Raylib = {
  // raylib bindings
  ...r,
  // wrapper fixes
  ...wrappers,
  // types
  ...colors,
  ...camera,
  ...audio,
  ...enums,
  ...maths,
  ...misc,
  ...texture,
  ...models,
  ...shaders,
  Camera: camera.Camera3D
}

export = raylib
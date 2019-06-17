/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */

// Find the bindings.
const raylib = require('bindings')('node-raylib');
const enums = require('./src/enums')

// Inject the enums.
for (var enumName in enums) {
  raylib[enumName] = enums[enumName]
}

raylib.PI = 3.14159265358979323846
raylib.DEG2RAD = (raylib.PI / 180.0)
raylib.RAD2DEG = (180.0 / raylib.PI)
raylib.MAX_TOUCH_POINTS = 10
raylib.MAX_SHADER_LOCATIONS = 32
raylib.MAX_MATERIAL_MAPS = 12

// Colors
raylib.Color = function (red, green, blue, alpha) {
  return {
    r: red,
    g: green,
    b: blue,
    a: alpha
  }
}

raylib.LIGHTGRAY  = raylib.Color(200, 200, 200, 255 )   // Light Gray
raylib.GRAY       = raylib.Color(130, 130, 130, 255 )   // Gray
raylib.DARKGRAY   = raylib.Color(80, 80, 80, 255 )      // Dark Gray
raylib.YELLOW     = raylib.Color(253, 249, 0, 255 )     // Yellow
raylib.GOLD       = raylib.Color(255, 203, 0, 255 )     // Gold
raylib.ORANGE     = raylib.Color(255, 161, 0, 255 )     // Orange
raylib.PINK       = raylib.Color(255, 109, 194, 255 )   // Pink
raylib.RED        = raylib.Color(230, 41, 55, 255 )     // Red
raylib.MAROON     = raylib.Color(190, 33, 55, 255 )     // Maroon
raylib.GREEN      = raylib.Color(0, 228, 48, 255 )      // Green
raylib.LIME       = raylib.Color(0, 158, 47, 255 )      // Lime
raylib.DARKGREEN  = raylib.Color(0, 117, 44, 255 )      // Dark Green
raylib.SKYBLUE    = raylib.Color(102, 191, 255, 255 )   // Sky Blue
raylib.BLUE       = raylib.Color(0, 121, 241, 255 )     // Blue
raylib.DARKBLUE   = raylib.Color(0, 82, 172, 255 )      // Dark Blue
raylib.PURPLE     = raylib.Color(200, 122, 255, 255 )   // Purple
raylib.VIOLET     = raylib.Color(135, 60, 190, 255 )    // Violet
raylib.DARKPURPLE = raylib.Color(112, 31, 126, 255 )    // Dark Purple
raylib.BEIGE      = raylib.Color(211, 176, 131, 255 )   // Beige
raylib.BROWN      = raylib.Color(127, 106, 79, 255 )    // Brown
raylib.DARKBROWN  = raylib.Color(76, 63, 47, 255 )      // Dark Brown
raylib.WHITE      = raylib.Color(255, 255, 255, 255 )   // White
raylib.BLACK      = raylib.Color(0, 0, 0, 255 )         // Black
raylib.BLANK      = raylib.Color(0, 0, 0, 0 )           // Blank (Transparent)
raylib.MAGENTA    = raylib.Color(255, 0, 255, 255 )     // Magenta
raylib.RAYWHITE   = raylib.Color(245, 245, 245, 255 )   // My own White (raylib logo)

// Structs
raylib.Vector2 = function (x, y) {
  return {x: x, y: y}
}
raylib.Vector3 = function (x, y, z) {
  return {x: x, y: y, z: z}
}
raylib.Vector4 = function (x, y, z, w) {
  return {x: x, y: y, z: z, w: w}
}
raylib.Rectangle = function (x, y, width, height) {
  return {x: x, y: y, width: width, height: height}
}
raylib.Camera2D = function (offset, target, rotation, zoom) {
  return {
    offset: offset,
    target: target,
    rotation: rotation,
    zoom: zoom
  }
}

//raylib.Camera3D = raylib.Camera
/*
const ref = require('ref')
const StructType = require('ref-struct')
raylib.Vector3 = StructType({
  x: ref.types.float,
  y: ref.types.float,
  z: ref.types.float
})

raylib.Camera = raylib.Camera3D = Struct({
  position: raylib.Vector3,
  target: raylib.Vector3,
  up: raylib.Vector3,
  fovy: ref.types.float,
  type: ref.types.int
})*/


raylib.Ray = function (position, direction) {
  return {
    position: position,
    direction: direction
  }
}

raylib.RayHitInfo = function (hit, distance, position, normal) {
  return {
    hit: hit,
    distance,
    position: position,
    normal: normal
  }
}

raylib.Shader = function (id, locs) {
  return {
    id: id,
    locs: locs
  }
}

// Export the bindings for the module.
module.exports = raylib;

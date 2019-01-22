/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */

// Find the bindings.
const raylib = require('bindings')('node-raylib');

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

// Export the bindings for the module.
module.exports = raylib;

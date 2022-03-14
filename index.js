/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */

const raylib = require('./src/generated/node-raylib.js')
const { format } = require('util')
const easings = require('./src/easings.js')

raylib.MAX_GAMEPADS = 4
raylib.MAX_GAMEPAD_AXIS = 8
raylib.MAX_GAMEPAD_BUTTONS = 32
raylib.MAX_TOUCH_POINTS = 10
raylib.MAX_KEY_PRESSED_QUEUE = 16

// Wrapped Functions

/**
 * Text formatting with variables (sprintf style)
 */
raylib.TextFormat = format

raylib.Color = function (red, green, blue, alpha = 255) {
  return { r: red, g: green, b: blue, a: alpha }
}

raylib.Vector2 = function (x, y) {
  return { x, y }
}

raylib.Easings = easings

// Export the bindings for the module.
module.exports = raylib

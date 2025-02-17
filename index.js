/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */

const raylib = require("./src/generated/node-raylib");
const { format } = require("node:util");

// Constants
raylib.MAX_GAMEPADS = 4;
raylib.MAX_GAMEPAD_AXIS = 8;
raylib.MAX_GAMEPAD_BUTTONS = 32;
raylib.MAX_TOUCH_POINTS = 10;
raylib.MAX_KEY_PRESSED_QUEUE = 16;
raylib.DEG2RAD = Math.PI / 180;

// Wrapped Functions

/**
 * Text formatting with variables (sprintf style)
 */
raylib.TextFormat = format;

/**
 * Define one vertex (color) - 4 byte
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 */
raylib.rlColor4ub = (r, g, b, a) => {
  // workaround as the C addon version isn't compiling?
  raylib.rlColor4f(r / 255, g / 255, b / 255, a / 255);
};

// Export the bindings for the module.
module.exports = raylib;

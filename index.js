/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */

// Find the bindings.
const raylib = require('bindings')('node-raylib');

// Export the bindings for the module.
module.exports = raylib;

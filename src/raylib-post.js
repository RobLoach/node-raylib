// Ready callback.
Module['ready'] = function() {
  return new Promise(function (resolve, reject) {
    delete Module['then'];
    Module['onAbort'] = reject;
    addOnPostRun(function () {
      resolve(Module);
    });
  });
};

/**
 * Ensure colors have been set.
 */
function raylibColors(mod) {
  if (typeof mod.LIGHTGRAY === 'undefined' && typeof mod.Color == 'function') {
    mod.LIGHTGRAY  = mod.Color(200, 200, 200, 255);
    mod.GRAY       = mod.Color(130, 130, 130, 255);
    mod.DARKGRAY   = mod.Color(80, 80, 80, 255);
    mod.YELLOW     = mod.Color(253, 249, 0, 255);
    mod.GOLD       = mod.Color(255, 203, 0, 255);
    mod.ORANGE     = mod.Color(255, 161, 0, 255);
    mod.PINK       = mod.Color(255, 109, 194, 255);
    mod.RED        = mod.Color(230, 41, 55, 255);
    mod.MAROON     = mod.Color(190, 33, 55, 255);
    mod.GREEN      = mod.Color(0, 228, 48, 255);
    mod.LIME       = mod.Color(0, 158, 47, 255);
    mod.DARKGREEN  = mod.Color(0, 117, 44, 255);
    mod.SKYBLUE    = mod.Color(102, 191, 255, 255);
    mod.BLUE       = mod.Color(0, 121, 241, 255);
    mod.DARKBLUE   = mod.Color(0, 82, 172, 255);
    mod.PURPLE     = mod.Color(200, 122, 255, 255);
    mod.VIOLET     = mod.Color(135, 60, 190, 255);
    mod.DARKPURPLE = mod.Color(112, 31, 126, 255);
    mod.BEIGE      = mod.Color(211, 176, 131, 255);
    mod.BROWN      = mod.Color(127, 106, 79, 255);
    mod.DARKBROWN  = mod.Color(76, 63, 47, 255);
    mod.WHITE      = mod.Color(255, 255, 255, 255);
    mod.BLACK      = mod.Color(0, 0, 0, 255);
    mod.BLANK      = mod.Color(0, 0, 0, 0);
    mod.MAGENTA    = mod.Color(255, 0, 255, 255);
    mod.RAYWHITE   = mod.Color(245, 245, 245, 255);
  }
}
Module['ready']().then(raylibColors);

// Export the module for CommonJS support.
if (typeof module !== 'undefined') {
  module.exports = Module
}
// Otherwise, export the module as a global.
else if (typeof this !== 'undefined') {
  this.raylib = Module
}

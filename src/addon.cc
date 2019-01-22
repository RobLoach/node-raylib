#include <napi.h>
#include "color.h"
#include "drawing.h"
#include "files.h"
#include "keyboard.h"
#include "misc.h"
#include "mouse.h"
#include "shapes.h"
#include "text.h"
#include "textures.h"
#include "timing.h"
#include "window.h"

/**
 * Initialize all the node-raylib modules.
 */
Napi::Object Init(Napi::Env env, Napi::Object exports) {
  node_raylib_init_color(env, exports);
  node_raylib_init_drawing(env, exports);
  node_raylib_init_files(env, exports);
  node_raylib_init_keyboard(env, exports);
  node_raylib_init_misc(env, exports);
  node_raylib_init_mouse(env, exports);
  node_raylib_init_shapes(env, exports);
  node_raylib_init_text(env, exports);
  node_raylib_init_textures(env, exports);
  node_raylib_init_timing(env, exports);
  node_raylib_init_window(env, exports);

  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)

#include <napi.h>
#include "audio.h"
#include "camera.h"
#include "color.h"
#include "cursor.h"
#include "drawing.h"
#include "files.h"
#include "gamepads.h"
#include "keyboard.h"
#include "gestures.h"
#include "misc.h"
#include "models.h"
#include "mouse.h"
#include "rlgl.h"
#include "shapes.h"
#include "storage.h"
#include "text.h"
#include "textures.h"
#include "timing.h"
#include "touch.h"
#include "window.h"

/**
 * Initialize all the node-raylib modules.
 */
Napi::Object Init(Napi::Env env, Napi::Object exports) {
  node_raylib_init_audio(env, exports);
  node_raylib_init_camera(env, exports);
  node_raylib_init_color(env, exports);
  node_raylib_init_cursor(env, exports);
  node_raylib_init_drawing(env, exports);
  node_raylib_init_files(env, exports);
  node_raylib_init_gamepads(env, exports);
  node_raylib_init_gestures(env, exports);
  node_raylib_init_keyboard(env, exports);
  node_raylib_init_misc(env, exports);
  node_raylib_init_models(env, exports);
  node_raylib_init_mouse(env, exports);
  node_raylib_init_rlgl(env, exports);
  node_raylib_init_shapes(env, exports);
  node_raylib_init_storage(env, exports);
  node_raylib_init_text(env, exports);
  node_raylib_init_textures(env, exports);
  node_raylib_init_timing(env, exports);
  node_raylib_init_touch(env, exports);
  node_raylib_init_window(env, exports);

  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)

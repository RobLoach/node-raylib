#include <napi.h>
#include "bindings/audio.h"
#include "bindings/camera.h"
#include "bindings/color.h"
#include "bindings/cursor.h"
#include "bindings/drawing.h"
#include "bindings/files.h"
#include "bindings/gamepads.h"
#include "bindings/keyboard.h"
#include "bindings/gestures.h"
#include "bindings/misc.h"
#include "bindings/models.h"
#include "bindings/mouse.h"
#include "bindings/rlgl.h"
#include "bindings/shapes.h"
#include "bindings/storage.h"
#include "bindings/text.h"
#include "bindings/textures.h"
#include "bindings/timing.h"
#include "bindings/touch.h"
#include "bindings/window.h"

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

#include <string>

// Raylib
extern "C" {
  #include "raylib-config.h"
  #include "raylib.h"
}

// Emscripten
#include <emscripten/val.h>
#include <emscripten/bind.h>
#include <emscripten.h>
using namespace emscripten;

#ifdef NODERAWFS
#define CWD ""
#else
#define CWD "/working/"
#endif

// Structs
Color newColorRGBA(unsigned char r, unsigned char g, unsigned char b, unsigned char a) {
  return Color{r,g,b,a};
}
Color newColorRGB(unsigned char r, unsigned char g, unsigned char b) {
  return Color{r,g,b,255};
}
Color newColor() {
  return Color{0,0,0,255};
}

bool IsFileExtension_binding(const std::string& arg0, const std::string& arg1) {
  return IsFileExtension(arg0.c_str(), arg1.c_str());
}

bool FileExists_binding(const std::string& arg0) {
  return FileExists(arg0.c_str());
}

void InitWindow_binding(int w, int h, const std::string& title) {
  InitWindow(w, h, title.c_str());
}

void DrawText_binding(const std::string& text, int a1, int a2, int a3, Color c) {
  DrawText(text.c_str(), a1, a2, a3, c);
}

/**
 * Functions.
 */
EMSCRIPTEN_BINDINGS(raylib) {
  function("Color", &newColorRGBA);
  function("Color", &newColorRGB);
  function("Color", &newColor);

  value_object<Color>("Color")
    .field("r", &Color::r)
    .field("g", &Color::g)
    .field("b", &Color::b)
    .field("a", &Color::a);

  function("IsWindowReady", &IsWindowReady);
  function("IsFileExtension", &IsFileExtension_binding);
  function("FileExists", &FileExists_binding);
  function("GetColor", &GetColor);
  function("SetTargetFPS", &SetTargetFPS);
  function("ColorToInt", &ColorToInt);
  function("InitWindow", &InitWindow_binding);
  function("WindowShouldClose", &WindowShouldClose);
  function("BeginDrawing", &BeginDrawing);
  function("EndDrawing", &EndDrawing);
  function("CloseWindow", &CloseWindow);
  function("ClearBackground", &ClearBackground);
  function("DrawText", &DrawText_binding);
}

/**
 * Constants and Enums
 */
EMSCRIPTEN_BINDINGS(constants) {
  constant("FLAG_SHOW_LOGO", (int)FLAG_SHOW_LOGO);
  constant("FLAG_FULLSCREEN_MODE", (int)FLAG_FULLSCREEN_MODE);
  constant("FLAG_WINDOW_RESIZABLE", (int)FLAG_WINDOW_RESIZABLE);
  constant("FLAG_WINDOW_UNDECORATED", (int)FLAG_WINDOW_UNDECORATED);
  constant("FLAG_WINDOW_TRANSPARENT", (int)FLAG_WINDOW_TRANSPARENT);
  constant("FLAG_MSAA_4X_HINT", (int)FLAG_MSAA_4X_HINT);
  constant("FLAG_VSYNC_HINT", (int)FLAG_VSYNC_HINT);

  constant("LOG_ALL", (int)LOG_ALL);
  constant("LOG_TRACE", (int)LOG_TRACE);
  constant("LOG_DEBUG", (int)LOG_DEBUG);
  constant("LOG_INFO", (int)LOG_INFO);
  constant("LOG_WARNING", (int)LOG_WARNING);
  constant("LOG_ERROR", (int)LOG_ERROR);
  constant("LOG_FATAL", (int)LOG_FATAL);
  constant("LOG_NONE", (int)LOG_NONE);

  constant("KEY_APOSTROPHE", (int)KEY_APOSTROPHE);
  constant("KEY_COMMA", (int)KEY_COMMA);
  constant("KEY_MINUS", (int)KEY_MINUS);
  constant("KEY_PERIOD", (int)KEY_PERIOD);
  constant("KEY_SLASH", (int)KEY_SLASH);
  constant("KEY_ZERO", (int)KEY_ZERO);
  constant("KEY_ONE", (int)KEY_ONE);
  constant("KEY_TWO", (int)KEY_TWO);
  constant("KEY_THREE", (int)KEY_THREE);
  constant("KEY_FOUR", (int)KEY_FOUR);
  constant("KEY_FIVE", (int)KEY_FIVE);
  constant("KEY_SIX", (int)KEY_SIX);
  constant("KEY_SEVEN", (int)KEY_SEVEN);
  constant("KEY_EIGHT", (int)KEY_EIGHT);
  constant("KEY_NINE", (int)KEY_NINE);
  constant("KEY_SEMICOLON", (int)KEY_SEMICOLON);
  constant("KEY_EQUAL", (int)KEY_EQUAL);
  constant("KEY_A", (int)KEY_A);
  constant("KEY_B", (int)KEY_B);
  constant("KEY_C", (int)KEY_C);
  constant("KEY_D", (int)KEY_D);
  constant("KEY_E", (int)KEY_E);
  constant("KEY_F", (int)KEY_F);
  constant("KEY_G", (int)KEY_G);
  constant("KEY_H", (int)KEY_H);
  constant("KEY_I", (int)KEY_I);
  constant("KEY_J", (int)KEY_J);
  constant("KEY_K", (int)KEY_K);
  constant("KEY_L", (int)KEY_L);
  constant("KEY_M", (int)KEY_M);
  constant("KEY_N", (int)KEY_N);
  constant("KEY_O", (int)KEY_O);
  constant("KEY_P", (int)KEY_P);
  constant("KEY_Q", (int)KEY_Q);
  constant("KEY_R", (int)KEY_R);
  constant("KEY_S", (int)KEY_S);
  constant("KEY_T", (int)KEY_T);
  constant("KEY_U", (int)KEY_U);
  constant("KEY_V", (int)KEY_V);
  constant("KEY_W", (int)KEY_W);
  constant("KEY_X", (int)KEY_X);
  constant("KEY_Y", (int)KEY_Y);
  constant("KEY_Z", (int)KEY_Z);
  constant("KEY_SPACE", (int)KEY_SPACE);
  constant("KEY_ESCAPE", (int)KEY_ESCAPE);
  constant("KEY_ENTER", (int)KEY_ENTER);
  constant("KEY_TAB", (int)KEY_TAB);
  constant("KEY_BACKSPACE", (int)KEY_BACKSPACE);
  constant("KEY_INSERT", (int)KEY_INSERT);
  constant("KEY_DELETE", (int)KEY_DELETE);
  constant("KEY_RIGHT", (int)KEY_RIGHT);
  constant("KEY_LEFT", (int)KEY_LEFT);
  constant("KEY_DOWN", (int)KEY_DOWN);
  constant("KEY_UP", (int)KEY_UP);
  constant("KEY_PAGE_UP", (int)KEY_PAGE_UP);
  constant("KEY_PAGE_DOWN", (int)KEY_PAGE_DOWN);
  constant("KEY_HOME", (int)KEY_HOME);
  constant("KEY_END", (int)KEY_END);
  constant("KEY_CAPS_LOCK", (int)KEY_CAPS_LOCK);
  constant("KEY_SCROLL_LOCK", (int)KEY_SCROLL_LOCK);
  constant("KEY_NUM_LOCK", (int)KEY_NUM_LOCK);
  constant("KEY_PRINT_SCREEN", (int)KEY_PRINT_SCREEN);
  constant("KEY_PAUSE", (int)KEY_PAUSE);
  constant("KEY_F1", (int)KEY_F1);
  constant("KEY_F2", (int)KEY_F2);
  constant("KEY_F3", (int)KEY_F3);
  constant("KEY_F4", (int)KEY_F4);
  constant("KEY_F5", (int)KEY_F5);
  constant("KEY_F6", (int)KEY_F6);
  constant("KEY_F7", (int)KEY_F7);
  constant("KEY_F8", (int)KEY_F8);
  constant("KEY_F9", (int)KEY_F9);
  constant("KEY_F10", (int)KEY_F10);
  constant("KEY_F11", (int)KEY_F11);
  constant("KEY_F12", (int)KEY_F12);
  constant("KEY_LEFT_SHIFT", (int)KEY_LEFT_SHIFT);
  constant("KEY_LEFT_CONTROL", (int)KEY_LEFT_CONTROL);
  constant("KEY_LEFT_ALT", (int)KEY_LEFT_ALT);
  constant("KEY_LEFT_SUPER", (int)KEY_LEFT_SUPER);
  constant("KEY_RIGHT_SHIFT", (int)KEY_RIGHT_SHIFT);
  constant("KEY_RIGHT_CONTROL", (int)KEY_RIGHT_CONTROL);
  constant("KEY_RIGHT_ALT", (int)KEY_RIGHT_ALT);
  constant("KEY_RIGHT_SUPER", (int)KEY_RIGHT_SUPER);
  constant("KEY_KB_MENU", (int)KEY_KB_MENU);
  constant("KEY_LEFT_BRACKET", (int)KEY_LEFT_BRACKET);
  constant("KEY_BACKSLASH", (int)KEY_BACKSLASH);
  constant("KEY_RIGHT_BRACKET", (int)KEY_RIGHT_BRACKET);
  constant("KEY_GRAVE", (int)KEY_GRAVE);
  constant("KEY_KP_0", (int)KEY_KP_0);
  constant("KEY_KP_1", (int)KEY_KP_1);
  constant("KEY_KP_2", (int)KEY_KP_2);
  constant("KEY_KP_3", (int)KEY_KP_3);
  constant("KEY_KP_4", (int)KEY_KP_4);
  constant("KEY_KP_5", (int)KEY_KP_5);
  constant("KEY_KP_6", (int)KEY_KP_6);
  constant("KEY_KP_7", (int)KEY_KP_7);
  constant("KEY_KP_8", (int)KEY_KP_8);
  constant("KEY_KP_9", (int)KEY_KP_9);
  constant("KEY_KP_DECIMAL", (int)KEY_KP_DECIMAL);
  constant("KEY_KP_DIVIDE", (int)KEY_KP_DIVIDE);
  constant("KEY_KP_MULTIPLY", (int)KEY_KP_MULTIPLY);
  constant("KEY_KP_SUBTRACT", (int)KEY_KP_SUBTRACT);
  constant("KEY_KP_ADD", (int)KEY_KP_ADD);
  constant("KEY_KP_ENTER", (int)KEY_KP_ENTER);
  constant("KEY_KP_EQUAL", (int)KEY_KP_EQUAL);

  constant("KEY_BACK", (int)KEY_BACK);
  constant("KEY_MENU", (int)KEY_MENU);
  constant("KEY_VOLUME_UP", (int)KEY_VOLUME_UP);
  constant("KEY_VOLUME_DOWN", (int)KEY_VOLUME_DOWN);

  constant("MOUSE_LEFT_BUTTON", (int)MOUSE_LEFT_BUTTON);
  constant("MOUSE_RIGHT_BUTTON", (int)MOUSE_RIGHT_BUTTON);
  constant("MOUSE_MIDDLE_BUTTON", (int)MOUSE_MIDDLE_BUTTON);

  constant("GAMEPAD_PLAYER1", (int)GAMEPAD_PLAYER1);
  constant("GAMEPAD_PLAYER2", (int)GAMEPAD_PLAYER2);
  constant("GAMEPAD_PLAYER3", (int)GAMEPAD_PLAYER3);
  constant("GAMEPAD_PLAYER4", (int)GAMEPAD_PLAYER4);

  // TODO: Add PS3 USB Controller Buttons and Axis buttons

  constant("GAMEPAD_XBOX_BUTTON_A", (int)GAMEPAD_XBOX_BUTTON_A);
  constant("GAMEPAD_XBOX_BUTTON_B", (int)GAMEPAD_XBOX_BUTTON_B);
  constant("GAMEPAD_XBOX_BUTTON_X", (int)GAMEPAD_XBOX_BUTTON_X);
  constant("GAMEPAD_XBOX_BUTTON_Y", (int)GAMEPAD_XBOX_BUTTON_Y);
  constant("GAMEPAD_XBOX_BUTTON_LB", (int)GAMEPAD_XBOX_BUTTON_LB);
  constant("GAMEPAD_XBOX_BUTTON_RB", (int)GAMEPAD_XBOX_BUTTON_RB);
  constant("GAMEPAD_XBOX_BUTTON_SELECT", (int)GAMEPAD_XBOX_BUTTON_SELECT);
  constant("GAMEPAD_XBOX_BUTTON_START", (int)GAMEPAD_XBOX_BUTTON_START);
  constant("GAMEPAD_XBOX_BUTTON_HOME", (int)GAMEPAD_XBOX_BUTTON_HOME);
  constant("GAMEPAD_XBOX_BUTTON_UP", (int)GAMEPAD_XBOX_BUTTON_UP);
  constant("GAMEPAD_XBOX_BUTTON_RIGHT", (int)GAMEPAD_XBOX_BUTTON_RIGHT);
  constant("GAMEPAD_XBOX_BUTTON_DOWN", (int)GAMEPAD_XBOX_BUTTON_DOWN);
  constant("GAMEPAD_XBOX_BUTTON_LEFT", (int)GAMEPAD_XBOX_BUTTON_LEFT);

  constant("GAMEPAD_XBOX_AXIS_LEFT_X", (int)GAMEPAD_XBOX_AXIS_LEFT_X);
  constant("GAMEPAD_XBOX_AXIS_LEFT_Y", (int)GAMEPAD_XBOX_AXIS_LEFT_Y);
  constant("GAMEPAD_XBOX_AXIS_RIGHT_X", (int)GAMEPAD_XBOX_AXIS_RIGHT_X);
  constant("GAMEPAD_XBOX_AXIS_RIGHT_Y", (int)GAMEPAD_XBOX_AXIS_RIGHT_Y);
  constant("GAMEPAD_XBOX_AXIS_LT", (int)GAMEPAD_XBOX_AXIS_LT);
  constant("GAMEPAD_XBOX_AXIS_RT", (int)GAMEPAD_XBOX_AXIS_RT);

  constant("GAMEPAD_ANDROID_DPAD_UP", (int)GAMEPAD_ANDROID_DPAD_UP);
  constant("GAMEPAD_ANDROID_DPAD_DOWN", (int)GAMEPAD_ANDROID_DPAD_DOWN);
  constant("GAMEPAD_ANDROID_DPAD_LEFT", (int)GAMEPAD_ANDROID_DPAD_LEFT);
  constant("GAMEPAD_ANDROID_DPAD_RIGHT", (int)GAMEPAD_ANDROID_DPAD_RIGHT);
  constant("GAMEPAD_ANDROID_DPAD_CENTER", (int)GAMEPAD_ANDROID_DPAD_CENTER);
  constant("GAMEPAD_ANDROID_BUTTON_A", (int)GAMEPAD_ANDROID_BUTTON_A);
  constant("GAMEPAD_ANDROID_BUTTON_B", (int)GAMEPAD_ANDROID_BUTTON_B);
  constant("GAMEPAD_ANDROID_BUTTON_C", (int)GAMEPAD_ANDROID_BUTTON_C);
  constant("GAMEPAD_ANDROID_BUTTON_X", (int)GAMEPAD_ANDROID_BUTTON_X);
  constant("GAMEPAD_ANDROID_BUTTON_Y", (int)GAMEPAD_ANDROID_BUTTON_Y);
  constant("GAMEPAD_ANDROID_BUTTON_Z", (int)GAMEPAD_ANDROID_BUTTON_Z);
  constant("GAMEPAD_ANDROID_BUTTON_L1", (int)GAMEPAD_ANDROID_BUTTON_L1);
  constant("GAMEPAD_ANDROID_BUTTON_R1", (int)GAMEPAD_ANDROID_BUTTON_R1);
  constant("GAMEPAD_ANDROID_BUTTON_L2", (int)GAMEPAD_ANDROID_BUTTON_L2);
  constant("GAMEPAD_ANDROID_BUTTON_R2", (int)GAMEPAD_ANDROID_BUTTON_R2);
}

#include <iostream>

int main(int argc, char ** argv) {
  // Colors.
  #ifndef NODERAWFS
    // Colors.
    EM_ASM(
      raylibColors(Module);
    );

    // Node.js File System.
    EM_ASM({
      if (Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]') {
        var directory = '/' + UTF8ToString($0);
        FS.mkdir(directory);
        FS.mount(NODEFS, {root : '.'}, directory);
        FS.currentPath = '/fs';
      }
    }, "fs");
  #endif

}

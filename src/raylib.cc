#include <string>

// Raylib
extern "C" {
  #include "../node_modules/raylib-src/src/raylib.h"
}

// Emscripten
#include <emscripten/val.h>
#include <emscripten/bind.h>
using namespace emscripten;

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

// Function bindings.
EMSCRIPTEN_BINDINGS(raylib) {
  function("Color", &newColorRGBA);
  function("Color", &newColorRGB);
  function("Color", &newColor);

  value_object<Color>("Color")
    .field("r", &Color::r)
    .field("g", &Color::g)
    .field("b", &Color::b)
    .field("a", &Color::a)
  ;

  function("IsWindowReady", &IsWindowReady);
  function("IsFileExtension", &IsFileExtension_binding);
  function("GetColor", &GetColor);
  function("ColorToInt", &ColorToInt);
}

/*
int main(int argc, char ** argv) {
  std::cout << "raylib.js initialized." << std::endl;
}
*/

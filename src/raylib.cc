#include <iostream>

#include <emscripten/bind.h>

using namespace emscripten;

struct Color {
  unsigned char r, g, b, a;
};


Color newColorRGBA(unsigned char r, unsigned char g, unsigned char b, unsigned char a) {
  return Color{r,g,b,a};
}
Color newColorRGB(unsigned char r, unsigned char g, unsigned char b) {
  return Color{r,g,b,255};
}
Color newColor() {
  return Color{0,0,0,255};
}


void sayHi() {
  std::cout << "OUTOTULTIN!" << std::endl;
}

Color printColor(Color col) {
  std::cout << "The color" << std::endl;
  std::cout << "    R:" << (int)col.r << std::endl;
  std::cout << "    G:" << (int)col.g << std::endl;
  std::cout << "    B:" << (int)col.b << std::endl;
  std::cout << "    A:" << (int)col.a << std::endl;

  Color newColor = col;
  newColor.r = 100;
  return newColor;
}


EMSCRIPTEN_BINDINGS(raylib) {
  function("sayHi", &sayHi);
  function("Color", &newColorRGBA);
  function("Color", &newColorRGB);
  function("Color", &newColor);

  value_object<Color>("Color")
        .field("r", &Color::r)
        .field("g", &Color::g)
        .field("b", &Color::b)
        .field("a", &Color::a)
        ;


  function("printColor", &printColor);
}


int main(int argc, char ** argv) {
  std::cout << "Hello World" << std::endl;
}


/*
EMSCRIPTEN_KEEPALIVE
void sayHi() {
  printf("Hi!\n");
}

EMSCRIPTEN_KEEPALIVE
int daysInWeek() {
  return 7;
}

int main(int argc, char ** argv) {
  printf("Hello World\n");
}

*/

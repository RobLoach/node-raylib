#include <emscripten/bind.h>

using namespace emscripten;

EMSCRIPTEN_BINDINGS(raylib) {
    function("lerp", &lerp);
}
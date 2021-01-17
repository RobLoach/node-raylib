#ifndef RAYLIB_STRUCTS
#define RAYLIB_STRUCTS

#include <emscripten/bind.h>
#include <raylib-cpp.hpp>

using namespace emscripten;

void raylib_structs() {
    value_object<Vector2>("Vector2")
        .field("x", &Vector2::x)
        .field("y", &Vector2::y);
    value_object<Vector3>("Vector3")
        .field("x", &Vector3::x)
        .field("y", &Vector3::y)
        .field("z", &Vector3::z);
    value_object<Vector4>("Vector4")
        .field("x", &Vector4::x)
        .field("y", &Vector4::y)
        .field("z", &Vector4::z)
        .field("w", &Vector4::w);
    value_object<Matrix>("Matrix")
        .field("m0", &Matrix::m0)
        .field("m1", &Matrix::m1)
        .field("m2", &Matrix::m2)
        .field("m3", &Matrix::m3)
        .field("m4", &Matrix::m4)
        .field("m5", &Matrix::m5)
        .field("m6", &Matrix::m6)
        .field("m7", &Matrix::m7)
        .field("m8", &Matrix::m8)
        .field("m9", &Matrix::m9)
        .field("m10", &Matrix::m10)
        .field("m11", &Matrix::m11)
        .field("m12", &Matrix::m12)
        .field("m13", &Matrix::m13)
        .field("m14", &Matrix::m14)
        .field("m15", &Matrix::m15);
    value_object<Color>("Color")
        .field("r", &Color::r)
        .field("g", &Color::g)
        .field("b", &Color::b)
        .field("a", &Color::a);
    value_object<Rectangle>("Rectangle")
        .field("x", &Rectangle::x)
        .field("y", &Rectangle::y)
        .field("width", &Rectangle::width)
        .field("height", &Rectangle::height);
}

#endif

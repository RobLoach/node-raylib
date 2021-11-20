cmake_minimum_required(VERSION 3.16.3)

project(raylib-wasm VERSION 0.0.1 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(PLATFORM Web)

add_subdirectory(vendor/raylib)
add_subdirectory(vendor/raylib-cpp/include)

add_executable(raylib-wasm
    src/raylib.cpp
)

target_link_libraries(raylib-wasm PUBLIC raylib raylib-cpp)

set_target_properties(raylib-wasm PROPERTIES
    OUTPUT_NAME "raylib"
    LINK_FLAGS "\
        -s ENVIRONMENT=web,webview,node \
        -s ASYNCIFY \
        -s EXPORT_NAME=raylib \
        -s MODULARIZE=1 \
        -s USE_GLFW=3 \
        -s DEMANGLE_SUPPORT=1 \
        --bind" \
)

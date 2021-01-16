cmake_minimum_required(VERSION 3.16.3)

project(raylib-wasm VERSION 0.0.1 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(PLATFORM Web)

add_subdirectory(vendor/raylib)
add_subdirectory(vendor/raylib-cpp/include)
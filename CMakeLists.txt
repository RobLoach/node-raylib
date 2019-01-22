cmake_minimum_required(VERSION 3.11)
project (node-raylib)

set(CMAKE_C_FLAGS "-fPIC ${CMAKE_C_FLAGS}")

# TODO: Move this to cmake/FindRaylib.cmake?
find_package(raylib 2.0 QUIET)
if (NOT raylib_FOUND)
  include(FetchContent)
  FetchContent_Declare(
    raylib
    GIT_REPOSITORY https://github.com/raysan5/raylib.git
    GIT_TAG 214aa0c1b0d5c766d22bbb1069ecfb3a78373577
  )
  FetchContent_GetProperties(raylib)
  if (NOT raylib_POPULATED) # Have we downloaded raylib yet?
    set(FETCHCONTENT_QUIET NO)
    FetchContent_Populate(raylib)
    set(BUILD_EXAMPLES OFF CACHE BOOL "" FORCE) # don't build the supplied examples
    set(BUILD_GAMES    OFF CACHE BOOL "" FORCE) # or games
    add_subdirectory(${raylib_SOURCE_DIR} ${raylib_BINARY_DIR})
  endif()
endif()

# Add all the include directories.
include_directories(${PROJECT_NAME}
  "${CMAKE_JS_INC}"
  "${CMAKE_SOURCE_DIR}/node_modules/node-addon-api"
  "${CMAKE_CURRENT_SOURCE_DIR}/node_modules/node-addon-api"
  "${CMAKE_SOURCE_DIR}/node_modules/node-addon-api/src"
  "${CMAKE_CURRENT_SOURCE_DIR}/node_modules/node-addon-api/src"
)

# This is hardcoded so that updates force a re-compile.
add_library(${PROJECT_NAME} SHARED
  src/addon.cc
  src/color.h
  src/drawing.h
  src/files.h
  src/helper.h
  src/keyboard.h
  src/misc.h
  src/mouse.h
  src/shapes.h
  src/text.h
  src/textures.h
  src/timing.h
  src/window.h
)

## Suffix the node module with .node.
set_target_properties(${PROJECT_NAME} PROPERTIES
  PREFIX ""
  SUFFIX ".node"
)

# Link raylib.
target_link_libraries(${PROJECT_NAME}
  ${CMAKE_JS_LIB}
  raylib
)

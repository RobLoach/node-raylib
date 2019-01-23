cmake_minimum_required(VERSION 3.11)
project (node-raylib)

set(CMAKE_C_FLAGS "-fPIC ${CMAKE_C_FLAGS}")

add_definitions(-DBUILDING_NODE_EXTENSION)
add_definitions(-DUSING_V8_SHARED)
add_definitions(-DUSING_UV_SHARED)
add_definitions(-DV8_DEPRECATION_WARNINGS)
#add_definitions(-DPLATFORM_WEB)


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
include_directories(
  "${CMAKE_JS_INC}"
  "${CMAKE_SOURCE_DIR}/node_modules/nbind/include"
  "${CMAKE_SOURCE_DIR}/node_modules/nan"
)

file(GLOB NBIND_SOURCE_FILES
  "${CMAKE_SOURCE_DIR}/node_modules/nbind/src/*.cc"
  "${CMAKE_SOURCE_DIR}/node_modules/nbind/src/v8/*.cc"
)

list(APPEND SOURCE src/raylib.cc)

# This is hardcoded so that updates force a re-compile.
add_library(${PROJECT_NAME} SHARED
  ${SOURCE}
  ${NBIND_SOURCE_FILES}
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

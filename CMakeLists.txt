include(FetchContent)

# 2025-02-15: based on https://github.com/raysan5/raylib/blob/master/src/external/glfw/CMakeLists.txt, make sure the CMake version are between 3.4 and 3.28 or the whole raylib lib will face fatal errors
cmake_minimum_required(VERSION 3.4...3.28 FATAL_ERROR)
project (node-raylib
  VERSION 0.10.0
  DESCRIPTION "Node.js bindings for raylib"
  HOMEPAGE_URL "https://github.com/RobLoach/node-raylib"
  LANGUAGES C CXX)

if ( CMAKE_COMPILER_IS_GNUCC )
    set(CMAKE_C_FLAGS "-fPIC ${CMAKE_C_FLAGS} -Wno-unused-result")
    set(CMAKE_CXX_FLAGS "-Wall -Wextra")
endif()
# 2025-02-15: based on @link: https://learn.microsoft.com/en-us/cpp/build/reference/o-options-optimize-code?view=msvc-170. MSVC only accept O2 and don't have O3 optimization flag
if ( MSVC )
    set(CMAKE_CXX_FLAGS  "${CMAKE_CXX_FLAGS} /w")
    set(CMAKE_CXX_FLAGS_RELEASE "-O2")
else()
    set(CMAKE_CXX_FLAGS_RELEASE "-O3")
endif()

if(NOT CMAKE_BUILD_TYPE)
  set(CMAKE_BUILD_TYPE Release)
endif()

set(CMAKE_CXX_FLAGS_DEBUG "-g")

# single build for both Mac arches
set(CMAKE_OSX_ARCHITECTURES arm64 x86_64)

# version doesn't seem to pick correct version
#find_package(raylib 5.5 QUIET EXACT)
if (NOT raylib_FOUND)
  include(FetchContent)
  FetchContent_Declare(
    raylib
    GIT_REPOSITORY https://github.com/raysan5/raylib.git
    GIT_TAG 5.5
    GIT_SHALLOW TRUE
  )
  FetchContent_GetProperties(raylib)
  if (NOT raylib_POPULATED)
    set(FETCHCONTENT_QUIET NO)
    FetchContent_MakeAvailable(raylib)
    set(BUILD_EXAMPLES OFF CACHE BOOL "" FORCE)
  endif()
endif()

set(BUILD_EXAMPLES OFF CACHE BOOL "" FORCE)
set(BUILD_GAMES    OFF CACHE BOOL "" FORCE)

# Add all the include directories.
include_directories(${PROJECT_NAME}
  "${CMAKE_JS_INC}"
  "${CMAKE_SOURCE_DIR}/node_modules/node-addon-api"
  "${CMAKE_CURRENT_SOURCE_DIR}/node_modules/node-addon-api"
  "${CMAKE_SOURCE_DIR}/node_modules/node-addon-api/src"
  "${CMAKE_CURRENT_SOURCE_DIR}/node_modules/node-addon-api/src"
  "${CMAKE_CURRENT_SOURCE_DIR}/../node-addon-api"
  "${CMAKE_CURRENT_SOURCE_DIR}/../node-addon-api/src"
)

# This is hardcoded so that updates force a re-compile.
add_library(${PROJECT_NAME} SHARED
  # src/lib/AddDefine.h
  # src/lib/AddFunction.h
  # src/lib/CleanUp.h
  # src/lib/GetArgFromParam.h
  # src/lib/ValidArgs.h
  # src/addon.cc
  # src/node-raymath.h
  # src/node-rlgl.h
  # src/lib/WrappedFunctions.h
  src/generated/node-raylib.cc
)

## Suffix the node module with .node.
set_target_properties(${PROJECT_NAME} PROPERTIES
  PREFIX ""
  SUFFIX ".node"
)

target_compile_features(${PROJECT_NAME} PUBLIC cxx_std_20)

target_include_directories(${PROJECT_NAME} PUBLIC
  "${CMAKE_JS_INC}"
  "${CMAKE_SOURCE_DIR}/node_modules/node-addon-api"
  "${CMAKE_CURRENT_SOURCE_DIR}/node_modules/node-addon-api"
  "${CMAKE_SOURCE_DIR}/node_modules/node-addon-api/src"
  "${CMAKE_CURRENT_SOURCE_DIR}/node_modules/node-addon-api/src"
  "${CMAKE_CURRENT_SOURCE_DIR}/../node-addon-api"
  "${CMAKE_CURRENT_SOURCE_DIR}/../node-addon-api/src"
)

# Link raylib.
target_link_libraries(${PROJECT_NAME}
  ${CMAKE_JS_LIB}
  raylib
)

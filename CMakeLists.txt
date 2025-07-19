include(FetchContent)

# 2025-02-15: based on https://github.com/raysan5/raylib/blob/master/src/external/glfw/CMakeLists.txt, make sure the CMake version are between 3.4 and 3.28 or the whole raylib lib will face fatal errors
cmake_minimum_required(VERSION 3.4...3.28 FATAL_ERROR)
project (node-raylib
  VERSION 0.20.0
  DESCRIPTION "Node.js bindings for raylib"
  HOMEPAGE_URL "https://github.com/RobLoach/node-raylib"
  LANGUAGES C CXX)

# Compiler-specific flags
if ( CMAKE_COMPILER_IS_GNUCC OR CMAKE_CXX_COMPILER_ID MATCHES "Clang" )
    set(CMAKE_C_FLAGS "-fPIC ${CMAKE_C_FLAGS} -Wno-unused-result")
    set(CMAKE_CXX_FLAGS "-Wall -Wextra -Wno-unused-parameter -Wno-missing-field-initializers")
    # Enable additional security flags
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fstack-protector-strong")
endif()

# MSVC-specific flags
if ( MSVC )
    set(CMAKE_CXX_FLAGS  "${CMAKE_CXX_FLAGS} /w")
    set(CMAKE_CXX_FLAGS_RELEASE "/O2")
    # Enable security features but suppress CRT warnings
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /GS")
    # Define _CRT_SECURE_NO_WARNINGS to suppress deprecated function warnings
    add_definitions(-D_CRT_SECURE_NO_WARNINGS)
else()
    set(CMAKE_CXX_FLAGS_RELEASE "-O3")
endif()

if(NOT CMAKE_BUILD_TYPE)
  set(CMAKE_BUILD_TYPE Release)
endif()

set(CMAKE_CXX_FLAGS_DEBUG "-g")

# Configure raylib platform settings
if(DEFINED PLATFORM AND PLATFORM STREQUAL "DRM")
  set(PLATFORM_DRM ON CACHE BOOL "" FORCE)
  set(GRAPHICS_API_OPENGL_ES2 ON CACHE BOOL "" FORCE)
  message(STATUS "Building for DRM platform with OpenGL ES 2.0")
endif()

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

# Add DRM-specific libraries if building for DRM platform
if(DEFINED PLATFORM AND PLATFORM STREQUAL "DRM")
  # Find required DRM libraries using pkg-config
  find_package(PkgConfig REQUIRED)
  pkg_check_modules(DRM REQUIRED libdrm)
  pkg_check_modules(GBM REQUIRED gbm)
  pkg_check_modules(EGL REQUIRED egl)
  pkg_check_modules(GLESV2 REQUIRED glesv2)
  
  # Debug: Print all available variables
  message(STATUS "DRM_LIBRARIES: ${DRM_LIBRARIES}")
  message(STATUS "DRM_LINK_LIBRARIES: ${DRM_LINK_LIBRARIES}")
  message(STATUS "DRM_LDFLAGS: ${DRM_LDFLAGS}")
  message(STATUS "DRM_LDFLAGS_OTHER: ${DRM_LDFLAGS_OTHER}")
  message(STATUS "GBM_LIBRARIES: ${GBM_LIBRARIES}")
  message(STATUS "GBM_LINK_LIBRARIES: ${GBM_LINK_LIBRARIES}")
  message(STATUS "EGL_LIBRARIES: ${EGL_LIBRARIES}")
  message(STATUS "EGL_LINK_LIBRARIES: ${EGL_LINK_LIBRARIES}")
  message(STATUS "GLESV2_LIBRARIES: ${GLESV2_LIBRARIES}")
  message(STATUS "GLESV2_LINK_LIBRARIES: ${GLESV2_LINK_LIBRARIES}")
  
  # Try using LDFLAGS instead of LINK_LIBRARIES
  target_link_libraries(${PROJECT_NAME} ${DRM_LDFLAGS} ${GBM_LDFLAGS} ${EGL_LDFLAGS} ${GLESV2_LDFLAGS})
  
  message(STATUS "Added DRM libraries: ${DRM_LIBRARIES} ${GBM_LIBRARIES} ${EGL_LIBRARIES} ${GLESV2_LIBRARIES}")
endif()

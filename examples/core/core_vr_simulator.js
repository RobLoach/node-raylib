/*******************************************************************************************
*
*   raylib [core] example - VR Simulator (Oculus Rift CV1 parameters)
*
*   This example has been created using raylib 1.7 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2017 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('raylib')
const { join } = require('path')

// #if defined(PLATFORM_DESKTOP)
const GLSL_VERSION = 330
// #else   // PLATFORM_RPI, PLATFORM_ANDROID, PLATFORM_WEB
// #define GLSL_VERSION            100
// #endif

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

// NOTE: screenWidth/screenHeight should match VR device aspect ratio

r.SetConfigFlags(r.FLAG_MSAA_4X_HINT)
r.InitWindow(screenWidth, screenHeight, 'raylib [core] example - vr simulator')

// Init VR simulator (Oculus Rift CV1 parameters)
r.InitVrSimulator()

const hmd = r.VrDeviceInfo() // VR device parameters (head-mounted-device)

// Oculus Rift CV1 parameters for simulator
hmd.hResolution = 2160 // HMD horizontal resolution in pixels
hmd.vResolution = 1200 // HMD vertical resolution in pixels
hmd.hScreenSize = 0.133793 // HMD horizontal size in meters
hmd.vScreenSize = 0.0669 // HMD vertical size in meters
hmd.vScreenCenter = 0.04678 // HMD screen center in meters
hmd.eyeToScreenDistance = 0.041 // HMD distance between eye and display in meters
hmd.lensSeparationDistance = 0.07 // HMD lens separation distance in meters
hmd.interpupillaryDistance = 0.07 // HMD IPD (distance between pupils) in meters

// NOTE: CV1 uses a Fresnel-hybrid-asymmetric lenses with specific distortion compute shaders.
// Following parameters are an approximation to distortion stereo rendering but results differ from actual device.
hmd.lensDistortionValues[0] = 1.0 // HMD lens distortion constant parameter 0
hmd.lensDistortionValues[1] = 0.22 // HMD lens distortion constant parameter 1
hmd.lensDistortionValues[2] = 0.24 // HMD lens distortion constant parameter 2
hmd.lensDistortionValues[3] = 0.0 // HMD lens distortion constant parameter 3
hmd.chromaAbCorrection[0] = 0.996 // HMD chromatic aberration correction parameter 0
hmd.chromaAbCorrection[1] = -0.004 // HMD chromatic aberration correction parameter 1
hmd.chromaAbCorrection[2] = 1.014 // HMD chromatic aberration correction parameter 2
hmd.chromaAbCorrection[3] = 0.0 // HMD chromatic aberration correction parameter 3

// Distortion shader (uses device lens distortion and chroma)
const distortion = r.LoadShader(0, r.FormatText(join(__dirname, 'resources', 'distortion%i.fs'), GLSL_VERSION))

r.SetVrConfiguration(hmd, distortion) // Set Vr device parameters for stereo rendering

// Define the camera to look into our 3d world
const camera = r.Camera()
camera.position = r.Vector3(5.0, 2.0, 5.0) // Camera position
camera.target = r.Vector3(0.0, 2.0, 0.0) // Camera looking at point
camera.up = r.Vector3(0.0, 1.0, 0.0) // Camera up vector (rotation towards target)
camera.fovy = 60.0 // Camera field-of-view Y
camera.type = r.CAMERA_PERSPECTIVE // Camera type

const cubePosition = r.Vector3()

r.SetTargetFPS(90) // Set our game to run at 90 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) { // Detect window close button or ESC key
  // Update
  // ----------------------------------------------------------------------------------
  r.UpdateCamera(camera, r.CAMERA_FIRST_PERSON) // Update camera (simulator mode)

  if (r.IsKeyPressed(r.KEY_SPACE)) r.ToggleVrMode() // Toggle VR mode
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(r.RAYWHITE)

  r.BeginVrDrawing()

  r.BeginMode3D(camera)

  r.DrawCube(cubePosition, 2.0, 2.0, 2.0, r.RED)
  r.DrawCubeWires(cubePosition, 2.0, 2.0, 2.0, r.MAROON)

  r.DrawGrid(40, 1.0)

  r.EndMode3D()

  r.EndVrDrawing()

  r.DrawFPS(10, 10)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.UnloadShader(distortion) // Unload distortion shader

r.CloseVrSimulator() // Close VR simulator

r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

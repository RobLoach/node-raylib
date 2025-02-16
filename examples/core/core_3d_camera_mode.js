/*******************************************************************************************
*
*   raylib [core] example - Initialize 3d camera mode
*
*   This example has been created using raylib 1.0 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2014 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('../../index.js')

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [core] example - 3d camera mode')

// Define the camera to look into our 3d world
const camera = r.Camera3D(
  r.Vector3(0, 10, 10), // Camera position
  r.Vector3(), // Camera looking at point
  r.Vector3(0, 1, 0), // Camera up vector (rotation towards target)
  45, // Camera field-of-view Y
  r.CAMERA_PERSPECTIVE // Camera mode type
)

const cubePosition = r.Vector3()

r.SetTargetFPS(60) // Set our game to run at 60 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) { // Detect window close button or ESC key
  // Update
  // ----------------------------------------------------------------------------------
  // TODO: Update your variables here
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(r.RAYWHITE)

  r.BeginMode3D(camera)

  r.DrawCube(cubePosition, 2, 2, 2, r.RED)
  r.DrawCubeWires(cubePosition, 2, 2, 2, r.MAROON)

  r.DrawGrid(10, 1)

  r.EndMode3D()

  r.DrawText('Welcome to the third dimension!', 10, 40, 20, r.DARKGRAY)

  r.DrawFPS(10, 10)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

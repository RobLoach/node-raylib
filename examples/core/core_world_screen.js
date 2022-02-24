/*******************************************************************************************
*
*   raylib [core] example - World to screen
*
*   This example has been created using raylib 1.3 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2015 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('raylib')

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [core] example - 3d camera free')

// Define the camera to look into our 3d world
const camera = r.Camera(
  r.Vector3(10, 10, 10),
  r.Vector3(0, 0, 0),
  r.Vector3(0, 1, 0),
  45,
  r.CAMERA_PERSPECTIVE
)

const cubePosition = r.Vector3()
let cubeScreenPosition = r.Vector2()

r.SetCameraMode(camera, r.CAMERA_FREE) // Set a free camera mode

r.SetTargetFPS(60) // Set our game to run at 60 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) // Detect window close button or ESC key
{
  // Update
  // ----------------------------------------------------------------------------------
  r.UpdateCamera(camera) // Update camera

  // Calculate cube screen space position (with a little offset to be in top)
  const cubePositionVector = r.Vector3(cubePosition.x, cubePosition.y + 2.5, cubePosition.z)
  cubeScreenPosition = r.GetWorldToScreen(cubePositionVector, camera)
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

  r.DrawText('Enemy: 100 / 100', cubeScreenPosition.x - r.MeasureText('Enemy: 100 / 100', 20) / 2, cubeScreenPosition.y, 20, r.BLACK)
  r.DrawText('Text is always on top of the cube', (screenWidth - r.MeasureText('Text is always on top of the cube', 20)) / 2, 25, 20, r.GRAY)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

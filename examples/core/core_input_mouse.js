/*******************************************************************************************
*
*   raylib [core] example - Mouse input
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

r.InitWindow(screenWidth, screenHeight, 'raylib [core] example - mouse input')

let ballPosition = r.Vector2(-100, -100)
let ballColor = r.DARKBLUE

r.SetTargetFPS(60)
// ---------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) { // Detect window close button or ESC key
  // Update
  // ----------------------------------------------------------------------------------
  ballPosition = r.GetMousePosition()

  if (r.IsMouseButtonPressed(r.MOUSE_BUTTON_LEFT)) {
    ballColor = r.MAROON
  } else if (r.IsMouseButtonPressed(r.MOUSE_BUTTON_MIDDLE)) {
    ballColor = r.LIME
  } else if (r.IsMouseButtonPressed(r.MOUSE_BUTTON_RIGHT)) {
    ballColor = r.DARKBLUE
  }
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(r.RAYWHITE)

  r.DrawCircleV(ballPosition, 40, ballColor)

  r.DrawText('move ball with mouse and click mouse button to change color', 10, 10, 20, r.DARKGRAY)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

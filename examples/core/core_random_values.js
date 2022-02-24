/*******************************************************************************************
*
*   raylib [core] example - Generate random values
*
*   This example has been created using raylib 1.1 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2014 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('raylib')

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [core] example - generate random values')

let framesCounter = 0 // Variable used to count frames

let randValue = r.GetRandomValue(-8, 5) // Get a random integer number between -8 and 5 (both included)

r.SetTargetFPS(60) // Set our game to run at 60 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) // Detect window close button or ESC key
{
  // Update
  // ----------------------------------------------------------------------------------
  framesCounter++

  // Every two seconds (120 frames) a new random value is generated
  if (((framesCounter / 120) % 2) == 1) {
    randValue = r.GetRandomValue(-8, 5)
    framesCounter = 0
  }
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(r.RAYWHITE)

  r.DrawText('Every 2 seconds a new random value is generated:', 130, 100, 20, r.MAROON)

  r.DrawText(r.FormatText('%i', randValue), 360, 180, 80, r.LIGHTGRAY)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

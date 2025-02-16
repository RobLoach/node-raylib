/*******************************************************************************************
*
*   raylib [shapes] example - Draw raylib logo using basic shapes
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

r.InitWindow(screenWidth, screenHeight, 'raylib [shapes] example - raylib logo using shapes')

r.SetTargetFPS(60) // Set our game to run at 60 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) { // Detect window close button or ESC key
  // Update
  // ----------------------------------------------------------------------------------
  // TODO: Update your variables here
  // ----------------------------------------------------------------------------------
  const background = r.RAYWHITE
  const foreground = r.Color(64, 65, 55)
  const nodeGreen = r.Color(131, 205, 41)

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(background)

  r.DrawRectangle(screenWidth / 2 - 128, screenHeight / 2 - 128, 256, 256, foreground)
  r.DrawRectangle(screenWidth / 2 - 112, screenHeight / 2 - 112, 224, 224, background)
  r.DrawText('raylib', screenWidth / 2 - 44, screenHeight / 2 + 48, 50, foreground)
  r.DrawText('node', screenWidth / 2 - 74, screenHeight / 2 + 18, 50, nodeGreen)

  r.DrawText('this is NOT a texture!', 350, 370, 10, foreground)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

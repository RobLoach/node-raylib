/*******************************************************************************************
*
*   raylib [raygui] example - Basic window
*
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2022 Rob Loach (@RobLoach)
*
********************************************************************************************/

const r = require('raylib')

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450
let showMessageBox = false
let backgroundColor = r.RAYWHITE

r.InitWindow(screenWidth, screenHeight, 'raylib [core] example - basic window')

r.SetTargetFPS(60)

// r.GuiLoadStyleDefault()
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

  r.ClearBackground(backgroundColor)

  if (r.GuiButton(r.Rectangle(30, 100, 200, 30), 'Change Background Color')) {
    showMessageBox = true
  }

  if (showMessageBox) {
    switch (r.GuiMessageBox(r.Rectangle(r.GetScreenWidth() / 2 - 200, r.GetScreenHeight() / 2 - 50, 400, 100), 'Change Background Color', 'Do you really want to change the background?', 'Yes;No')) {
      case 0:
      case 2:
        showMessageBox = false
        break
      case 1: // Yes
        backgroundColor = r.Color(
          r.GetRandomValue(0, 255),
          r.GetRandomValue(0, 255),
          r.GetRandomValue(0, 255),
          255
        )
        showMessageBox = false
    }
  }

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

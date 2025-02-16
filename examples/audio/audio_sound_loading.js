/*******************************************************************************************
*
*   raylib [audio] example - Sound loading and playing
*
*   This example has been created using raylib 1.0 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2014 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('../../index.js')
const { join } = require('node:path')

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [audio] example - sound loading and playing')

r.InitAudioDevice() // Initialize audio device

const fxWav = r.LoadSound(join(__dirname, 'resources', 'sound.wav')) // Load WAV audio file
const fxOgg = r.LoadSound(join(__dirname, 'resources', 'tanatana.ogg')) // Load OGG audio file

r.SetTargetFPS(60) // Set our game to run at 60 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) { // Detect window close button or ESC key
  // Update
  // ----------------------------------------------------------------------------------
  if (r.IsKeyPressed(r.KEY_SPACE)) r.PlaySound(fxWav) // Play WAV sound
  if (r.IsKeyPressed(r.KEY_ENTER)) r.PlaySound(fxOgg) // Play OGG sound
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(r.RAYWHITE)

  r.DrawText('Press SPACE to PLAY the WAV sound!', 200, 180, 20, r.LIGHTGRAY)
  r.DrawText('Press ENTER to PLAY the OGG sound!', 200, 220, 20, r.LIGHTGRAY)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.UnloadSound(fxWav) // Unload sound data
r.UnloadSound(fxOgg) // Unload sound data

r.CloseAudioDevice() // Close audio device

r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

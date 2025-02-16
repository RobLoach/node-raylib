/*******************************************************************************************
*
*   raylib [audio] example - Music playing (streaming)
*
*   This example has been created using raylib 1.3 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2015 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('../../index.js')
const { join } = require('node:path')

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [audio] example - music playing (streaming)')

r.InitAudioDevice() // Initialize audio device

const music = r.LoadMusicStream(join(__dirname, 'resources', 'guitar_noodling.ogg'))
if (!music) {
  console.error('Error loading guitar_noodling.ogg')
}

r.PlayMusicStream(music)

let timePlayed = 0
let pause = false

r.SetTargetFPS(60) // Set our game to run at 60 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) { // Detect window close button or ESC key
  // Update
  // ----------------------------------------------------------------------------------
  r.UpdateMusicStream(music) // Update music buffer with new stream data

  // Restart music playing (stop and play)
  if (r.IsKeyPressed(r.KEY_SPACE)) {
    r.StopMusicStream(music)
    r.PlayMusicStream(music)
  }

  // Pause/Resume music playing
  if (r.IsKeyPressed(r.KEY_P)) {
    pause = !pause

    if (pause) r.PauseMusicStream(music)
    else r.ResumeMusicStream(music)
  }

  // Get timePlayed scaled to bar dimensions (400 pixels)
  timePlayed = r.GetMusicTimePlayed(music) / r.GetMusicTimeLength(music) * 400

  if (timePlayed > 400) r.StopMusicStream(music)
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(r.RAYWHITE)

  r.DrawText('MUSIC SHOULD BE PLAYING!', 255, 150, 20, r.LIGHTGRAY)

  r.DrawRectangle(200, 200, 400, 12, r.LIGHTGRAY)
  r.DrawRectangle(200, 200, timePlayed, 12, r.MAROON)
  r.DrawRectangleLines(200, 200, 400, 12, r.GRAY)

  r.DrawText('PRESS SPACE TO RESTART MUSIC', 215, 250, 20, r.LIGHTGRAY)
  r.DrawText('PRESS P TO PAUSE/RESUME MUSIC', 208, 280, 20, r.LIGHTGRAY)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.UnloadMusicStream(music) // Unload music stream buffers from RAM

r.CloseAudioDevice() // Close audio device (music streaming is automatically stopped)

r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

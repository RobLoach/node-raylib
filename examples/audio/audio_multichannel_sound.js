/*******************************************************************************************
*
*   raylib [audio] example - Multichannel sound playing
*
*   This example has been created using raylib 2.6 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Example contributed by Chris Camacho (@codifies) and reviewed by Ramon Santamaria (@raysan5)
*
*   Copyright (c) 2019 Chris Camacho (@codifies) and Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('../../index.js')

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [audio] example - Multichannel sound playing')

r.InitAudioDevice() // Initialize audio device

const fxWav = r.LoadSound(__dirname + '/resources/sound.wav') // Load WAV audio file
const fxOgg = r.LoadSound(__dirname + '/resources/tanatana.ogg') // Load OGG audio file

let frame = 0

r.SetSoundVolume(fxWav, 0.2)
r.PlaySound(fxOgg)

let inhibitWav = false
let inhibitOgg = false
let maxFrame = 60

let soundsCounter = 0

r.SetTargetFPS(60) // Set our game to run at 60 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) // Detect window close button or ESC key
{
  // Update
  // ----------------------------------------------------------------------------------
  frame++

  if (r.IsKeyDown(r.KEY_ENTER)) inhibitWav = !inhibitWav
  if (r.IsKeyDown(r.KEY_SPACE)) inhibitOgg = !inhibitOgg

  // Deliberatly hammer the play pool to see what dropping old pool entries sounds like....
  if ((frame % 5) == 0) {
    if (!inhibitWav) r.PlaySoundMulti(fxWav)
  }

  if (frame == maxFrame) {
    if (!inhibitOgg) r.PlaySoundMulti(fxOgg)

    frame = 0
    maxFrame = r.GetRandomValue(6, 12)
  }

  soundsCounter = r.GetSoundsPlaying()
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(r.RAYWHITE)

  r.DrawText('Multichannel sound abuse!', 200, 180, 20, r.LIGHTGRAY)
  r.DrawText('Space to inhibit new ogg triggering', 200, 200, 20, r.LIGHTGRAY)
  r.DrawText('Enter to inhibit new wav triggering', 200, 220, 20, r.LIGHTGRAY)

  r.DrawText(r.FormatText('Number of concurrentsounds: %i', soundsCounter), 200, 280, 20, r.LIGHTGRAY)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.StopSoundMulti() // We must stop the buffer pool before unloading

r.UnloadSound(fxWav) // Unload sound data
r.UnloadSound(fxOgg) // Unload sound data

r.CloseAudioDevice() // Close audio device

r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

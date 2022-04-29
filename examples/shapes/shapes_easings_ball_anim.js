/*******************************************************************************************
*
*   raylib [shapes] example - easings ball anim
*
*   This example has been created using raylib 2.5 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2014-2019 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('raylib')

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [shapes] example - easings ball anim')

// Ball variable value to be animated with easings
let ballPositionX = -100
let ballRadius = 20
let ballAlpha = 0

let state = 0
let framesCounter = 0

r.SetTargetFPS(60) // Set our game to run at 60 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) { // Detect window close button or ESC key
  // Update
  // ----------------------------------------------------------------------------------
  if (state === 0) { // Move ball position X with easing
    framesCounter++
    ballPositionX = r.EaseElasticOut(framesCounter, -100, screenWidth / 2.0 + 100, 120)

    if (framesCounter >= 120) {
      framesCounter = 0
      state = 1
    }
  } else if (state === 1) { // Increase ball radius with easing
    framesCounter++
    ballRadius = r.EaseElasticIn(framesCounter, 20, 500, 200)

    if (framesCounter >= 200) {
      framesCounter = 0
      state = 2
    }
  } else if (state === 2) { // Change ball alpha with easing (background color blending)
    framesCounter++
    ballAlpha = r.EaseCubicOut(framesCounter, 0.0, 1.0, 200)

    if (framesCounter >= 200) {
      framesCounter = 0
      state = 3
    }
  } else if (state === 3) { // Reset state to play again
    if (r.IsKeyPressed(r.KEY_ENTER)) {
      // Reset required variables to play again
      ballPositionX = -100
      ballRadius = 20
      ballAlpha = 0.0
      state = 0
    }
  }

  if (r.IsKeyPressed(r.KEY_R)) {
    framesCounter = 0
  }
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()
  r.ClearBackground(r.RAYWHITE)

  if (state >= 2) {
    r.DrawRectangle(0, 0, screenWidth, screenHeight, r.GREEN)
  }

  r.DrawCircle(ballPositionX, 200, ballRadius, r.Fade(r.RED, 1.0 - ballAlpha))

  if (state === 3) {
    r.DrawText('PRESS [ENTER] TO PLAY AGAIN!', 240, 200, 20, r.BLACK)
  }
  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

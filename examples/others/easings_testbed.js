/*******************************************************************************************
*
*   raylib [easings] example - Easings Testbed
*
*   This example has been created using raylib 2.5 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Example contributed by Juan Miguel López (@flashback-fx) and reviewed by Ramon Santamaria (@raysan5)
*
*   Copyright (c) 2019 Juan Miguel López (@flashback-fx ) and Ramon Santamaria (@raysan5)
*   Ported to javascript 2022 by David Konsumer (@konsumer)
*
********************************************************************************************/

const r = require('raylib')
const easing = require('raylib/easings')

const FONT_SIZE = 20

const D_STEP = 20.0
const D_STEP_FINE = 2.0
const D_MIN = 1.0
const D_MAX = 10000.0

const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [easings] example - easings testbed')

const ballPosition = { x: 100.0, y: 200.0 }

let t = 0.0 // Current time (in any unit measure, but same unit as duration)
let d = 300.0 // Total time it should take to complete (duration)
let paused = true
let boundedT = true // If true, t will stop when d >= td, otherwise t will keep adding td to its value every loop

let easingX = 0 // Easing selected for x axis
let easingY = 0 // Easing selected for y axis

r.SetTargetFPS(60)

const easingTypes = Object.values(easing)

// NoEase function, used when "no easing" is selected for any axis. It just ignores all parameters besides b.
easingTypes.shift((t, b, c, d) => b)

while (!r.WindowShouldClose()) {
  // Update
  // ----------------------------------------------------------------------------------
  if (r.IsKeyPressed(r.KEY_T)) boundedT = !boundedT

  // Choose easing for the X axis
  if (r.IsKeyPressed(r.KEY_RIGHT)) {
    easingX++
    easingX %= easingTypes.length
  } else if (r.IsKeyPressed(r.KEY_LEFT)) {
    easingX--
    easingX = easingX > 0 ? easingX : easingTypes.length - 1
  }

  // Choose easing for the Y axis
  if (r.IsKeyPressed(r.KEY_DOWN)) {
    easingY++
    easingY %= easingTypes.length
  } else if (r.IsKeyPressed(r.KEY_UP)) {
    easingY--
    easingY = easingY > 0 ? easingY : easingTypes.length - 1
  }

  // Change d (duration) value
  if (r.IsKeyPressed(r.KEY_W) && d < D_MAX - D_STEP) d += D_STEP
  else if (r.IsKeyPressed(r.KEY_Q) && d > D_MIN + D_STEP) d -= D_STEP

  if (r.IsKeyDown(r.KEY_S) && d < D_MAX - D_STEP_FINE) d += D_STEP_FINE
  else if (r.IsKeyDown(r.KEY_A) && d > D_MIN + D_STEP_FINE) d -= D_STEP_FINE

  // Play, pause and restart controls
  if (r.IsKeyPressed(r.KEY_SPACE) || r.IsKeyPressed(r.KEY_T) ||
            r.IsKeyPressed(r.KEY_RIGHT) || r.IsKeyPressed(r.KEY_LEFT) ||
            r.IsKeyPressed(r.KEY_DOWN) || r.IsKeyPressed(r.KEY_UP) ||
            r.IsKeyPressed(r.KEY_W) || r.IsKeyPressed(r.KEY_Q) ||
            r.IsKeyDown(r.KEY_S) || r.IsKeyDown(r.KEY_A) ||
            (r.IsKeyPressed(r.KEY_ENTER) && (boundedT === true) && (t >= d))) {
    t = 0.0
    ballPosition.x = 100.0
    ballPosition.y = 100.0
    paused = true
  }

  if (r.IsKeyPressed(r.KEY_ENTER)) paused = !paused

  // Movement computation
  if (!paused && ((boundedT && t < d) || !boundedT)) {
    ballPosition.x = easingTypes[easingX](t, 100.0, 700.0 - 100.0, d)
    ballPosition.y = easingTypes[easingY](t, 100.0, 400.0 - 100.0, d)
    t += 1.0
  }
  r.BeginDrawing()
  r.ClearBackground(r.RAYWHITE)

  // Draw information text
  r.DrawText(`Easing x: ${easingTypes[easingX].name}`, 0, FONT_SIZE * 2, FONT_SIZE, r.LIGHTGRAY)
  r.DrawText(`Easing y: ${easingTypes[easingY].name}`, 0, FONT_SIZE * 3, FONT_SIZE, r.LIGHTGRAY)
  r.DrawText(`t (${boundedT ? 'b' : 'u'}) = ${t} d = ${d}`, 0, FONT_SIZE * 4, FONT_SIZE, r.LIGHTGRAY)

  // Draw instructions text
  r.DrawText('Use ENTER to play or pause movement, use SPACE to restart', 0, r.GetScreenHeight() - FONT_SIZE * 2, FONT_SIZE, r.LIGHTGRAY)
  r.DrawText('Use D and W or A and S keys to change duration', 0, r.GetScreenHeight() - FONT_SIZE * 3, FONT_SIZE, r.LIGHTGRAY)
  r.DrawText('Use LEFT or RIGHT keys to choose easing for the x axis', 0, r.GetScreenHeight() - FONT_SIZE * 4, FONT_SIZE, r.LIGHTGRAY)
  r.DrawText('Use UP or DOWN keys to choose easing for the y axis', 0, r.GetScreenHeight() - FONT_SIZE * 5, FONT_SIZE, r.LIGHTGRAY)

  // Draw ball
  r.DrawCircleV(ballPosition, 16.0, r.MAROON)

  r.EndDrawing()
}

r.CloseWindow()

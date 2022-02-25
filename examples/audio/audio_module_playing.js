/*******************************************************************************************
*
*   raylib [audio] example - Module playing (streaming)
*
*   This example has been created using raylib 1.5 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2016 Ramon Santamaria (@raysan5)
*   Ported to javascript 2022 by David Konsumer (@konsumer)
*
********************************************************************************************/

const r = require('raylib')

const MAX_CIRCLES = 64

const screenWidth = 800
const screenHeight = 450

r.SetConfigFlags(r.FLAG_MSAA_4X_HINT) // NOTE: Try to enable MSAA 4X
r.InitWindow(screenWidth, screenHeight, 'raylib [audio] example - module playing (streaming)')
r.InitAudioDevice() // Initialize audio device

const colors = [r.ORANGE, r.RED, r.GOLD, r.LIME, r.BLUE, r.VIOLET, r.BROWN, r.LIGHTGRAY, r.PINK, r.YELLOW, r.GREEN, r.SKYBLUE, r.PURPLE, r.BEIGE]

const music = r.LoadMusicStream('resources/mini1111.xm')
r.PlayMusicStream(music)
music.looping = false

let pitch = 1
let pause = false
let timePlayed = 0

const circles = [...Array(MAX_CIRCLES)].map(() => {
  const radius = r.GetRandomValue(10, 40)
  return {
    alpha: 0,
    radius,
    position: {
      x: r.GetRandomValue(radius, screenWidth - radius),
      y: r.GetRandomValue(radius, screenHeight - radius)
    },
    speed: r.GetRandomValue(1, 100) / 2000,
    color: colors[r.GetRandomValue(0, colors.length - 1)]
  }
})

r.SetTargetFPS(60)
while (!r.WindowShouldClose()) {
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

  if (r.IsKeyDown(r.KEY_DOWN)) pitch -= 0.01
  else if (r.IsKeyDown(r.KEY_UP)) pitch += 0.01

  r.SetMusicPitch(music, pitch)

  // Get timePlayed scaled to bar dimensions
  timePlayed = r.GetMusicTimePlayed(music) / r.GetMusicTimeLength(music) * (screenWidth - 40)

  // Color circles animation
  if (!pause) {
    for (const circle of circles) {
      circle.alpha += circle.speed
      circle.radius += circle.speed * 10.0
      if (circle.alpha > 1) circle.speed *= -1
      if (circle.alpha <= 0) {
        circle.alpha = 0
        circle.radius = r.GetRandomValue(10, 40)
        circle.position.x = r.GetRandomValue(circle.radius, (screenWidth - circle.radius))
        circle.position.y = r.GetRandomValue(circle.radius, (screenHeight - circle.radius))
        circle.color = colors[r.GetRandomValue(0, colors.length - 1)]
        circle.speed = r.GetRandomValue(1, 100) / 2000.0
      }
    }
  }

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()
  r.ClearBackground(r.RAYWHITE)
  for (const circle of circles) {
    r.DrawCircleV(circle.position, circle.radius, r.Fade(circle.color, circle.alpha))
  }

  // Draw time bar
  r.DrawRectangle(20, screenHeight - 20 - 12, screenWidth - 40, 12, r.LIGHTGRAY)
  r.DrawRectangle(20, screenHeight - 20 - 12, timePlayed, 12, r.MAROON)
  r.DrawRectangleLines(20, screenHeight - 20 - 12, screenWidth - 40, 12, r.GRAY)

  r.EndDrawing()
}

r.UnloadMusicStream(music)
r.CloseAudioDevice()
r.CloseWindow()

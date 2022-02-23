// performance test of drawing a bunch of bunnies with current code

const r = require('../../index.js')
const { join } = require('path')

const MAX_BUNNIES = 1000000

const MAX_BATCH_ELEMENTS = 8192

function Bunny () {
  const col = r.Color(r.GetRandomValue(50, 240), r.GetRandomValue(80, 240), r.GetRandomValue(100, 240), 255)
  return {
    position: r.GetMousePosition(),
    speed: r.Vector2(r.GetRandomValue(-250, 250) / 60, r.GetRandomValue(-250, 250) / 60),
    color: col
  }
}

const bunnies = []

const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [textures] example - bunnymark')

const texBunny = r.LoadTexture(join(__dirname, '..', 'textures', 'resources', 'wabbit_alpha.png'))

while (!r.WindowShouldClose()) {
  if (r.GetFPS() > 60) {
    for (let i = 0; i < 100; i++) {
      if (bunnies.length < MAX_BUNNIES) {
        bunnies.push(Bunny())
      }
    }
  }

  for (const i in bunnies) {
    bunnies[i].position.x += bunnies[i].speed.x
    bunnies[i].position.y += bunnies[i].speed.y

    if (((bunnies[i].position.x + texBunny.width / 2) > r.GetScreenWidth()) ||
            ((bunnies[i].position.x + texBunny.width / 2) < 0)) bunnies[i].speed.x *= -1
    if (((bunnies[i].position.y + texBunny.height / 2) > r.GetScreenHeight()) ||
            ((bunnies[i].position.y + texBunny.height / 2 - 40) < 0)) bunnies[i].speed.y *= -1
  }

  r.BeginDrawing()
  r.ClearBackground(r.RAYWHITE)
  for (const bunny of bunnies) {
    r.DrawTexture(texBunny, bunny.position.x, bunny.position.y, bunny.color)
  }
  r.DrawRectangle(0, 0, screenWidth, 40, r.BLACK)
  r.DrawText('bunnies: ' + bunnies.length, 120, 10, 20, r.GREEN)
  r.DrawText('batched draw calls: ' + (1 + bunnies.length / MAX_BATCH_ELEMENTS), 320, 10, 20, r.MAROON)
  r.DrawFPS(10, 10)
  r.EndDrawing()
}

r.UnloadTexture(texBunny)

r.CloseWindow()

// performance test of drawing a bunch of bunnies with current code

const r = require('../../index.js')
const { join } = require('path')

const MAX_BUNNIES = 1000000

const MAX_BATCH_ELEMENTS = 8192

class Bunny {
  constructor () {
    this.pos = {
      x: Math.random() * screenWidth,
      y: Math.random() * screenHeight
    }

    this.speed = {
      x: (-250 + Math.random() * 500) / 60,
      y: (-250 + Math.random() * 500) / 60
    }

    this.color = r.Color(
      80 + Math.random() * 170,
      80 + Math.random() * 170,
      80 + Math.random() * 170,
      255
    )
  }

  update () {
    this.pos.x += this.speed.x
    this.pos.y += this.speed.y

    if (this.pos.x > screenWidth || this.pos.x < 0) { this.speed.x = -this.speed.x }

    if (this.pos.y > screenHeight || this.pos.y < 0) { this.speed.y = -this.speed.y }
  }
}

const bunnies = []

const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [textures] example - bunnymark')

console.log('LOAD ', join(__dirname, 'wabbit_alpha.png'))
const texBunny = r.LoadTexture(join(__dirname, 'wabbit_alpha.png').toString())

while (!r.WindowShouldClose()) {
  if (r.GetFPS() > 60) {
    for (let i = 0; i < 25; i++) {
      if (bunnies.length < MAX_BUNNIES) {
        bunnies.push(new Bunny())
      }
    }
  }

  r.BeginDrawing()
  r.ClearBackground(r.RAYWHITE)
  for (const bunny of bunnies) {
    bunny.update()
    r.DrawTexture(texBunny, bunny.pos.x, bunny.pos.y, bunny.color)
  }
  r.DrawRectangle(0, 0, screenWidth, 40, r.BLACK)
  r.DrawText('bunnies: ' + bunnies.length, 120, 10, 20, r.GREEN)
  r.DrawText('batched draw calls: ' + (1 + bunnies.length / MAX_BATCH_ELEMENTS), 320, 10, 20, r.MAROON)
  r.DrawFPS(10, 10)
  r.EndDrawing()
}

r.UnloadTexture(texBunny)

r.CloseWindow()

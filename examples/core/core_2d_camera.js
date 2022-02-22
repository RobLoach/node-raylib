/*******************************************************************************************
*
*   raylib [core] example - 2d camera
*
*   This example has been created using raylib 1.5 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2016 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('../../index.js')

const MAX_BUILDINGS = 100

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [core] example - 2d camera')

const player = r.Rectangle(400, 280, 40, 40)
const buildings = []
const buildColors = []

let spacing = 0

for (let i = 0; i < MAX_BUILDINGS; i++) {
  const height = r.GetRandomValue(100, 800)
  const newBuilding = r.Rectangle(
    -6000 + spacing,
    screenHeight - 130 - height,
    r.GetRandomValue(50, 200),
    height
  )
  spacing += newBuilding.width
  buildings.push(newBuilding)
  buildColors.push(r.Color(r.GetRandomValue(200, 240), r.GetRandomValue(200, 240), r.GetRandomValue(200, 250), 255))
}

const camera = r.Camera2D(
  r.Vector2(),
  r.Vector2(player.x + 20, player.y + 20),
  0, 1)

r.SetTargetFPS(60) // Set our game to run at 60 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) // Detect window close button or ESC key
{
  // Update
  // ----------------------------------------------------------------------------------
  if (r.IsKeyDown(r.KEY_RIGHT)) {
    player.x += 2 // Player movement
    camera.offset.x -= 2 // Camera displacement with player movement
  } else if (r.IsKeyDown(r.KEY_LEFT)) {
    player.x -= 2 // Player movement
    camera.offset.x += 2 // Camera displacement with player movement
  }

  // Camera target follows player
  camera.target = r.Vector2(player.x + 20, player.y + 20)

  // Camera rotation controls
  if (r.IsKeyDown(r.KEY_A)) {
    camera.rotation--
  } else if (r.IsKeyDown(r.KEY_S)) {
    camera.rotation++
  }

  // Limit camera rotation to 80 degrees (-40 to 40)
  if (camera.rotation > 40) {
    camera.rotation = 40
  } else if (camera.rotation < -40) {
    camera.rotation = -40
  }

  // Camera zoom controls
  camera.zoom += r.GetMouseWheelMove() * 0.05

  if (camera.zoom > 3) camera.zoom = 3
  else if (camera.zoom < 0.1) camera.zoom = 0.1

  // Camera reset (zoom and rotation)
  if (r.IsKeyPressed(r.KEY_R)) {
    camera.zoom = 1.0
    camera.rotation = 0
  }
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(r.RAYWHITE)

  r.BeginMode2D(camera)

  r.DrawRectangle(-6000, 320, 13000, 8000, r.DARKGRAY)

  for (let i = 0; i < MAX_BUILDINGS; i++) {
    r.DrawRectangleRec(buildings[i], buildColors[i])
  }

  r.DrawRectangleRec(player, r.RED)

  r.DrawLine(camera.target.x, -screenHeight * 10, camera.target.x, screenHeight * 10, r.GREEN)
  r.DrawLine(-screenWidth * 10, camera.target.y, screenWidth * 10, camera.target.y, r.GREEN)

  r.EndMode2D()

  r.DrawText('SCREEN AREA', 640, 10, 20, r.RED)

  r.DrawRectangle(0, 0, screenWidth, 5, r.RED)
  r.DrawRectangle(0, 5, 5, screenHeight - 10, r.RED)
  r.DrawRectangle(screenWidth - 5, 5, 5, screenHeight - 10, r.RED)
  r.DrawRectangle(0, screenHeight - 5, screenWidth, 5, r.RED)

  r.DrawRectangle(10, 10, 250, 113, r.Fade(r.SKYBLUE, 0.5))
  r.DrawRectangleLines(10, 10, 250, 113, r.BLUE)

  r.DrawText('Free 2d camera controls:', 20, 20, 10, r.BLACK)
  r.DrawText('- Right/Left to move Offset', 40, 40, 10, r.DARKGRAY)
  r.DrawText('- Mouse Wheel to Zoom in-out', 40, 60, 10, r.DARKGRAY)
  r.DrawText('- A / S to Rotate', 40, 80, 10, r.DARKGRAY)
  r.DrawText('- R to reset Zoom and Rotation', 40, 100, 10, r.DARKGRAY)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

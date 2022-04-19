/*******************************************************************************************
*
*   raylib [core] example - split screen
*
*   This example has been created using raylib 3.7 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Example contributed by Jeffery Myers (@JeffM2501) and reviewed by Ramon Santamaria (@raysan5)
*
*   Copyright (c) 2021 Jeffery Myers (@JeffM2501)
*
********************************************************************************************/

const r = require('raylib')

function InitCamera () {
  return {
    position: r.Vector3(0, 0, 0),
    target: r.Vector3(0, 0, 0),
    up: r.Vector3(0, 0, 0),
    fovy: 0,
    projection: 0
  }
}

let textureGrid
const cameraPlayer1 = InitCamera()
const cameraPlayer2 = InitCamera()

// Scene drawing
function DrawScene () {
  const count = 5
  const spacing = 4

  // Grid of cube trees on a plane to make a "world"
  r.DrawPlane(r.Vector3(0, 0, 0), r.Vector2(50, 50), r.BEIGE) // Simple world plane

  for (let x = -count * spacing; x <= count * spacing; x += spacing) {
    for (let z = -count * spacing; z <= count * spacing; z += spacing) {
      r.DrawCubeTexture(textureGrid, r.Vector3(x, 1.5, z), 1, 1, 1, r.GREEN)
      r.DrawCubeTexture(textureGrid, r.Vector3(x, 0.5, z), 0.25, 1, 0.25, r.BROWN)
    }
  }

  // Draw a cube at each player's position
  r.DrawCube(cameraPlayer1.position, 1, 1, 1, r.RED)
  r.DrawCube(cameraPlayer2.position, 1, 1, 1, r.BLUE)
}

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [core] example - split screen')

// Generate a simple texture to use for trees
const img = r.GenImageChecked(256, 256, 32, 32, r.DARKGRAY, r.WHITE)
textureGrid = r.LoadTextureFromImage(img)
r.UnloadImage(img)
r.SetTextureFilter(textureGrid, r.TEXTURE_FILTER_ANISOTROPIC_16X)
r.SetTextureWrap(textureGrid, r.TEXTURE_WRAP_CLAMP)
console.log(cameraPlayer1)

// Setup player 1 camera and screen
cameraPlayer1.fovy = 45
cameraPlayer1.up.y = 1
cameraPlayer1.target.y = 1
cameraPlayer1.position.z = -3
cameraPlayer1.position.y = 1

const screenPlayer1 = r.LoadRenderTexture(screenWidth / 2, screenHeight)

// Setup player two camera and screen
cameraPlayer2.fovy = 45
cameraPlayer2.up.y = 1
cameraPlayer2.target.y = 3
cameraPlayer2.position.x = -3
cameraPlayer2.position.y = 3

const screenPlayer2 = r.LoadRenderTexture(screenWidth / 2, screenHeight)

// Build a flipped rectangle the size of the split view to use for drawing later
const splitScreenRect = r.Rectangle(0, 0, screenPlayer1.texture.width, -screenPlayer1.texture.height)

r.SetTargetFPS(60) // Set our game to run at 60 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) // Detect window close button or ESC key
{
  // Update
  // ----------------------------------------------------------------------------------
  // If anyone moves this frame, how far will they move based on the time since the last frame
  // this moves thigns at 10 world units per second, regardless of the actual FPS
  const offsetThisFrame = 10 * r.GetFrameTime()

  // Move Player1 forward and backwards (no turning)
  if (r.IsKeyDown(r.KEY_W)) {
    cameraPlayer1.position.z += offsetThisFrame
    cameraPlayer1.target.z += offsetThisFrame
  } else if (r.IsKeyDown(r.KEY_S)) {
    cameraPlayer1.position.z -= offsetThisFrame
    cameraPlayer1.target.z -= offsetThisFrame
  }

  // Move Player2 forward and backwards (no turning)
  if (r.IsKeyDown(r.KEY_UP)) {
    cameraPlayer2.position.x += offsetThisFrame
    cameraPlayer2.target.x += offsetThisFrame
  } else if (r.IsKeyDown(r.KEY_DOWN)) {
    cameraPlayer2.position.x -= offsetThisFrame
    cameraPlayer2.target.x -= offsetThisFrame
  }
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  // Draw Player1 view to the render texture
  r.BeginTextureMode(screenPlayer1)
  r.ClearBackground(r.SKYBLUE)
  r.BeginMode3D(cameraPlayer1)
  DrawScene()
  r.EndMode3D()
  r.DrawText('PLAYER1 W/S to move', 10, 10, 20, r.RED)
  r.EndTextureMode()

  // Draw Player2 view to the render texture
  r.BeginTextureMode(screenPlayer2)
  r.ClearBackground(r.SKYBLUE)
  r.BeginMode3D(cameraPlayer2)
  DrawScene()
  r.EndMode3D()
  r.DrawText('PLAYER2 UP/DOWN to move', 10, 10, 20, r.BLUE)
  r.EndTextureMode()

  // Draw both views render textures to the screen side by side
  r.BeginDrawing()
  r.ClearBackground(r.BLACK)
  r.DrawTextureRec(screenPlayer1.texture, splitScreenRect, r.Vector2(0, 0), r.WHITE)
  r.DrawTextureRec(screenPlayer2.texture, splitScreenRect, r.Vector2(screenWidth / 2.0, 0), r.WHITE)
  r.EndDrawing()
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.UnloadRenderTexture(screenPlayer1) // Unload render texture
r.UnloadRenderTexture(screenPlayer2) // Unload render texture
r.UnloadTexture(textureGrid) // Unload texture

r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

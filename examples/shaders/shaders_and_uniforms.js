/*******************************************************************************************
*
*   raylib [shaders] example - Drawing textures with an effective shader
*
********************************************************************************************/
const { readFileSync } = require('fs')
const { resolve, join } = require('path')
const r = require('raylib')

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [textures] example - texture loading and drawing')

// NOTE: Textures MUST be loaded after Window initialization (OpenGL context is required)
const texture = r.LoadTexture(join(__dirname, 'resources', 'raylib_logo.png')) // Texture loading
// ---------------------------------------------------------------------------------------

const glGrayscaler = {
  vert: readFileSync(resolve(__dirname, 'resources', 'generic.vert.glsl'), 'utf-8'),
  frag: readFileSync(resolve(__dirname, 'resources', 'grayscaler.frag.glsl'), 'utf-8')
}

const shGrayscaler = r.LoadShaderCode(glGrayscaler.vert, glGrayscaler.frag)
const ntscWeights = r.Vector3(0.299, 0.587, 0.114)

if (!shGrayscaler) {
  console.error('[!] Failed to load shader!')
  process.exit(1)
} else {
  shGrayscaler.dt = r.GetShaderLocation(shGrayscaler, 'dt')
  const uWeights = r.GetShaderLocation(shGrayscaler, 'weights')

  if (!shGrayscaler.dt || !uWeights) {
    console.error('[!] Failed to find ID for uniforms!')
    process.exit(1)
  }

  // this won't change during rendering
  r.SetShaderValueVector3(shGrayscaler, uWeights, ntscWeights)
}

// Main game loop
let dt = 0.0
while (!r.WindowShouldClose()) { // Detect window close button or ESC key
  // Update
  // ----------------------------------------------------------------------------------
  // TODO: Update your variables here
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  // calculate a new uniform value using a basic sine wave over time
  dt += r.GetFrameTime()
  const newUv = (Math.sin(dt) + 1) / 2
  r.SetShaderValueFloat(shGrayscaler, shGrayscaler.dt, newUv)

  r.ClearBackground(r.RAYWHITE)

  r.BeginShaderMode(shGrayscaler)
  r.DrawTexture(texture, screenWidth / 2 - texture.width / 2, screenHeight / 2 - texture.height / 2, r.WHITE)
  r.EndShaderMode()

  r.DrawText('this IS a texture!', 360, 370, 10, r.GRAY)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.UnloadTexture(texture) // Texture unloading
r.UnloadShader(shGrayscaler)

r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

/*******************************************************************************************
*
*   raylib [textures] example - Image loading and texture creation
*
*   NOTE: Images are loaded in CPU memory (RAM); textures are loaded in GPU memory (VRAM)
*
*   This example has been created using raylib 1.3 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2015 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('raylib')

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [textures] example - image loading')

// NOTE: Textures MUST be loaded after Window initialization (OpenGL context is required)
const image = r.LoadImage(__dirname + '/resources/raylib_logo.png') // Loaded in CPU memory (RAM)

// TODO: Fix thrown exception
// INFO: [/home/rob/Documents/node-raylib/examples/textures/resources/raylib_logo.png] Image loaded successfully (256x256)
// terminate called after throwing an instance of 'char const*'
// [1]    26364 abort (core dumped)  bin/node-raylib examples/textures/textures_image_loading.js

const texture = r.LoadTextureFromImage(image) // Image converted to texture, GPU memory (VRAM)

r.UnloadImage(image) // Once image has been converted to texture and uploaded to VRAM, it can be unloaded from RAM
// ---------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) // Detect window close button or ESC key
{
  // Update
  // ----------------------------------------------------------------------------------
  // TODO: Update your variables here
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(r.RAYWHITE)

  r.DrawTexture(texture, screenWidth / 2 - texture.width / 2, screenHeight / 2 - texture.height / 2, r.WHITE)

  r.DrawText('this IS a texture loaded from an image!', 300, 370, 10, r.GRAY)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.UnloadTexture(texture) // Texture unloading

r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

/*******************************************************************************************
*
*   raylib [text] example - Font loading
*
*   raylib can load fonts from multiple file formats:
*
*     - TTF/OTF > Sprite font atlas is generated on loading, user can configure
*                 some of the generation parameters (size, characters to include)
*     - BMFonts > Angel code font fileformat, sprite font image must be provided
*                 together with the .fnt file, font generation cna not be configured
*     - XNA Spritefont > Sprite font image, following XNA Spritefont conventions,
*                 Characters in image must follow some spacing and order rules
*
*   This example has been created using raylib 2.6 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2016-2019 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('../../index.js')
const { join } = require('node:path')

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [text] example - font loading')

// Define characters to draw
// NOTE: raylib supports UTF-8 encoding, following list is actually codified as UTF8 internally
const msg = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHI\nJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmn\nopqrstuvwxyz{|}~¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓ\nÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷\nøùúûüýþÿ"

// NOTE: Textures/Fonts MUST be loaded after Window initialization (OpenGL context is required)

// BMFont (AngelCode) : Font data and image atlas have been generated using external program
const fontBm = r.LoadFont(join(__dirname, 'resources', 'pixantiqua.fnt'))

// TTF font : Font data and atlas are generated directly from TTF
// NOTE: We define a font base size of 32 pixels tall and up-to 250 characters
// TODO: Fix LoadFontEx
// const fontTtf = r.LoadFontEx(__dirname + "/resources/pixantiqua.ttf", 32, 0, 250);

let useTtf = false

r.SetTargetFPS(60) // Set our game to run at 60 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) { // Detect window close button or ESC key
  // Update
  // ----------------------------------------------------------------------------------
  useTtf = r.IsKeyDown(r.KEY_SPACE)
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(r.RAYWHITE)

  r.DrawText('Hold SPACE to use TTF generated font', 20, 20, 20, r.LIGHTGRAY)

  if (!useTtf) {
    r.DrawTextEx(fontBm, msg, r.Vector2(20, 100), fontBm.baseSize, 2, r.MAROON)
    r.DrawText('Using BMFont (Angelcode) imported', 20, r.GetScreenHeight() - 30, 20, r.GRAY)
  } else {
    // r.DrawTextEx(fontTtf, msg, r.Vector2(20, 100), fontTtf.baseSize, 2, r.LIME);
    r.DrawText('Using TTF font generated', 20, r.GetScreenHeight() - 30, 20, r.GRAY)
  }

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.UnloadFont(fontBm) // AngelCode Font unloading
// r.UnloadFont(fontTtf);    // TTF Font unloading

r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

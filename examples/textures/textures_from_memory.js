/*******************************************************************************************
*
*   raylib [textures] example - Image loading and texture creation from memory
*
*   NOTE: Images are loaded in CPU memory (RAM); textures are loaded in GPU memory (VRAM)
*
*   This example has been created using raylib 3.5 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
********************************************************************************************/

const r = require('raylib')
const { resolve } = require('path')
const { readFileSync } = require('fs')

// Initialization
//--------------------------------------------------------------------------------------
const screenWidth = 800;
const screenHeight = 450;

// Load the image using fs module into a `Buffer` instance.
// NOTE: this `Buffer` could come from *anywhere* (statically encoded in your source code, as a
// partial read from a custom resource packer file, etc.)
const raw = readFileSync(resolve(__dirname, 'resources', 'wabbit_alpha.png'));

r.InitWindow(screenWidth, screenHeight, "raylib [textures] example - image loading from memory");

// NOTE: Textures MUST be loaded after Window initialization (OpenGL context is required)
const image = r.LoadImageFromMemory('png', raw, raw.length);     // Loaded in CPU memory (RAM)
if (!image) {
	console.error('image failed to load!');
	process.exit(1);
}

// TODO: Fix thrown exception
// INFO: [/home/rob/Documents/node-raylib/examples/textures/resources/raylib_logo.png] Image loaded successfully (256x256)
// terminate called after throwing an instance of 'char const*'
// [1]    26364 abort (core dumped)  bin/node-raylib examples/textures/textures_image_loading.js

const texture = r.LoadTextureFromImage(image);          // Image converted to texture, GPU memory (VRAM)

r.UnloadImage(image);   // Once image has been converted to texture and uploaded to VRAM, it can be unloaded from RAM
//---------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose())    // Detect window close button or ESC key
{
    // Update

    // Draw
    //----------------------------------------------------------------------------------
    r.BeginDrawing();

        r.ClearBackground(r.RAYWHITE);

        r.DrawTexture(texture, screenWidth/2 - texture.width/2, screenHeight/2 - texture.height/2, r.WHITE);

        r.DrawText("this IS a texture loaded from memory!", 300, 370, 10, r.GRAY);

    r.EndDrawing();
    //----------------------------------------------------------------------------------
}

// De-Initialization
//--------------------------------------------------------------------------------------
r.UnloadTexture(texture);       // Texture unloading

r.CloseWindow();                // Close window and OpenGL context
//--------------------------------------------------------------------------------------

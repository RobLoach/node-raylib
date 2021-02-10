/*******************************************************************************************
*
*   raylib [shaders] example - Drawing textures with an effective shader
*
********************************************************************************************/
const { readFileSync } = require('fs')
const { resolve } = require('path')
const r = require('raylib')

// Initialization
//--------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, "raylib [textures] example - texture loading and drawing")

// NOTE: Textures MUST be loaded after Window initialization (OpenGL context is required)
const texture = r.LoadTexture(__dirname + "/resources/raylib_logo.png")        // Texture loading
//---------------------------------------------------------------------------------------

const GLSL_Grayscaler = {
    vert: readFileSync(resolve(__dirname, 'resources', 'generic.vert.glsl'), 'utf-8'),
    frag: readFileSync(resolve(__dirname, 'resources', `grayscaler.frag.glsl`), 'utf-8'),
}

const SH_Grayscaler = r.LoadShaderCode(GLSL_Grayscaler.vert, GLSL_Grayscaler.frag)
if (! SH_Grayscaler) {
    console.error('[!] Failed to load shader!')
    process.exit(1)
} else {
    SH_Grayscaler.dt = r.GetShaderLocation(SH_Grayscaler, "dt")
    if (! SH_Grayscaler.dt) { 
        console.error('[!] Failed to find ID for uniform')
        process.exit(1)
    }
}

// Main game loop
let dt = 0.0
while (!r.WindowShouldClose())    // Detect window close button or ESC key
{
    // Update
    //----------------------------------------------------------------------------------
    // TODO: Update your variables here
    //----------------------------------------------------------------------------------

    // Draw
    //----------------------------------------------------------------------------------
    r.BeginDrawing()

        // calculate a new uniform value using a basic sine wave over time
        dt += r.GetFrameTime();
        const new_uv = (Math.sin(dt) + 1) / 2;
        r.SetShaderValueFloat(SH_Grayscaler, SH_Grayscaler.dt, new_uv);

        r.ClearBackground(r.RAYWHITE)

        r.BeginShaderMode(SH_Grayscaler)
        r.DrawTexture(texture, screenWidth / 2 - texture.width / 2, screenHeight / 2 - texture.height / 2, r.WHITE)
        r.EndShaderMode();

        r.DrawText("this IS a texture!", 360, 370, 10, r.GRAY)

    r.EndDrawing()
    //----------------------------------------------------------------------------------
}

// De-Initialization
//--------------------------------------------------------------------------------------
r.UnloadTexture(texture)       // Texture unloading
r.UnloadShader(SH_Grayscaler);

r.CloseWindow()                // Close window and OpenGL context
//--------------------------------------------------------------------------------------


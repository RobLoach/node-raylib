/*******************************************************************************************
*
*   raylib [textures] example - Bunnymark
*
*   This example has been created using raylib 1.6 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2014-2019 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('raylib')

const MAX_BUNNIES = 100000    // 100K bunnies limit

// This is the maximum amount of elements (quads) per batch
// NOTE: This value is defined in [rlgl] module and can be changed there
const MAX_BATCH_ELEMENTS = 8192

function Bunny() {
  var col = r.Color(r.GetRandomValue(50, 240), r.GetRandomValue(80, 240), r.GetRandomValue(100, 240), 255)
  return {
    position: r.GetMousePosition(),
    speed: r.Vector2(r.GetRandomValue(-250, 250)/60, r.GetRandomValue(-250, 250)/60),
    color: col
  }
}

bunnies = []

// Initialization
//--------------------------------------------------------------------------------------
const screenWidth = 800;
const screenHeight = 450;

r.InitWindow(screenWidth, screenHeight, "raylib [textures] example - bunnymark");

// Load bunny texture
texBunny = r.LoadTexture(__dirname + '/resources/wabbit_alpha.png');

r.SetTargetFPS(60);               // Set our game to run at 60 frames-per-second
//--------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose())    // Detect window close button or ESC key
{
    // Update
    //----------------------------------------------------------------------------------
    if (r.IsMouseButtonDown(r.MOUSE_LEFT_BUTTON))
    {
        // Create more bunnies
        for (i = 0; i < 100; i++)
        {
            if (bunnies.length < MAX_BUNNIES)
            {
              bunnies.push(Bunny())
            }
        }
    }

    // Update bunnies
    for (var i in bunnies) {
        bunnies[i].position.x += bunnies[i].speed.x;
        bunnies[i].position.y += bunnies[i].speed.y;

        if (((bunnies[i].position.x + texBunny.width/2) > r.GetScreenWidth()) ||
            ((bunnies[i].position.x + texBunny.width/2) < 0)) bunnies[i].speed.x *= -1;
        if (((bunnies[i].position.y + texBunny.height/2) > r.GetScreenHeight()) ||
            ((bunnies[i].position.y + texBunny.height/2 - 40) < 0)) bunnies[i].speed.y *= -1;
    }
    //----------------------------------------------------------------------------------

    // Draw
    //----------------------------------------------------------------------------------
    r.BeginDrawing();

        r.ClearBackground(r.RAYWHITE);

      for (var bunny of bunnies) {
            // NOTE: When internal batch buffer limit is reached (MAX_BATCH_ELEMENTS),
            // a draw call is launched and buffer starts being filled again;
            // before issuing a draw call, updated vertex data from internal CPU buffer is send to GPU...
            // Process of sending data is costly and it could happen that GPU data has not been completely
            // processed for drawing while new data is tried to be sent (updating current in-use buffers)
            // it could generates a stall and consequently a frame drop, limiting the number of drawn bunnies
            r.DrawTexture(texBunny, bunny.position.x, bunny.position.y, bunny.color);
        }

        r.DrawRectangle(0, 0, screenWidth, 40, r.BLACK);

        r.DrawText("bunnies: " + bunnies.length, 120, 10, 20, r.GREEN);
        r.DrawText("batched draw calls: " + (1 + bunnies.length/MAX_BATCH_ELEMENTS), 320, 10, 20, r.MAROON);
        //DrawText(FormatText("bunnies: %i", bunnies.length), 120, 10, 20, GREEN);
        //DrawText(FormatText("batched draw calls: %i", 1 + bunnies.length/MAX_BATCH_ELEMENTS), 320, 10, 20, MAROON);

        r.DrawFPS(10, 10);

    r.EndDrawing();
    //----------------------------------------------------------------------------------
}

// De-Initialization
//--------------------------------------------------------------------------------------
r.UnloadTexture(texBunny);    // Unload bunny texture

r.CloseWindow();              // Close window and OpenGL context
//--------------------------------------------------------------------------------------

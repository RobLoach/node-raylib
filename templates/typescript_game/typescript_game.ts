/*******************************************************************************************
*
*   raylib [core] example - Basic window
*
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2018 Rob Loach (@RobLoach)
*
********************************************************************************************/

import * as r from "raylib"

// Initialization
//--------------------------------------------------------------------------------------
const screenWidth: number = 800
const screenHeight: number = 450

r.InitWindow(screenWidth, screenHeight, "raylib [core] example - typescript game")

r.SetTargetFPS(60)
//--------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose())    // Detect window close button or ESC key
{
    // Update
    //----------------------------------------------------------------------------------
    // TODO: Update your variables here
    //----------------------------------------------------------------------------------

    // Draw
    //----------------------------------------------------------------------------------
    r.BeginDrawing()

        r.ClearBackground(r.RAYWHITE)

        r.DrawText("Congrats! You created your first window!", 190, 200, 20, r.LIGHTGRAY)

    r.EndDrawing()
    //----------------------------------------------------------------------------------
}

// De-Initialization
//--------------------------------------------------------------------------------------
r.CloseWindow()        // Close window and OpenGL context
//--------------------------------------------------------------------------------------

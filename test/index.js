/*******************************************************************************************
*
*   raylib [core] example - Basic window
*
*   Welcome to raylib!
*
*   To test examples, just press F6 and execute raylib_compile_execute script
*   Note that compiled executable is placed in the same folder as .c file
*
*   You can find all basic examples on C:\raylib\raylib\examples folder or
*   raylib official webpage: www.raylib.com
*
*   Enjoy using raylib. :)
*
*   This example has been created using raylib 1.0 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2018 Rob Loach (@RobLoach)
*
********************************************************************************************/

// Initialization
//--------------------------------------------------------------------------------------
var raylib = require('..')
var screenWidth = 800
var screenHeight = 450

raylib.InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window")

raylib.SetTargetFPS(60)  // Set target frames-per-second
//--------------------------------------------------------------------------------------

// Main game loop
while (!raylib.WindowShouldClose())    // Detect window close button or ESC key
{
    // Update
    //----------------------------------------------------------------------------------
    // TODO: Update your variables here
    //----------------------------------------------------------------------------------

    // Draw
    //----------------------------------------------------------------------------------
    raylib.BeginDrawing()

        raylib.ClearBackground(/*RAYWHITE*/)

        raylib.DrawText("Congrats! You created your first window!", 190, 200, 20/*, LIGHTGRAY*/)

    raylib.EndDrawing()
    //----------------------------------------------------------------------------------
}

// De-Initialization
//--------------------------------------------------------------------------------------
raylib.CloseWindow()        // Close window and OpenGL context
//--------------------------------------------------------------------------------------
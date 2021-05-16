/*******************************************************************************************
*
*   raylib [text] font - DrawTextRec example
*
*   This example has been created using raylib 3.0 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2021 - Rob Loach (@RobLoach), originally written by @gtrxAC
*   https://github.com/RobLoach/node-raylib/issues/85
*
********************************************************************************************/

// Initialization
//--------------------------------------------------------------------------------------
const r = require('raylib');
const rec = r.Rectangle(100, 100, 500, 500);

r.InitWindow(1024, 768, "test");
//--------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) {

    // Draw
    //----------------------------------------------------------------------------------
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangleLinesEx(rec, 1, r.RED);
    r.DrawTextRec(r.GetFontDefault(), "hello world", rec, 10, 1, true, r.WHITE);
    r.EndDrawing();
    //----------------------------------------------------------------------------------
}

r.CloseWindow();          // Close window and OpenGL context

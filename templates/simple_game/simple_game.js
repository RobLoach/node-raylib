/*******************************************************************************************
*
*   raylib - Simple Game template
*
*   <Game title>
*   <Game description>
*
*   This game has been created using raylib (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2014-2018 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('raylib')

// Initialization (Note windowTitle is unused on Android)
//--------------------------------------------------------------------------------------
const screenWidth = 800;
const screenHeight = 450;

r.InitWindow(screenWidth, screenHeight, "raylib template - simple game");
var currentScreen = 'LOGO';

// TODO: Initialize all required variables and load all required data here!

var framesCounter = 0;          // Useful to count frames

r.SetTargetFPS(60);               // Set desired framerate (frames-per-second)
//--------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose())    // Detect window close button or ESC key
{
    // Update
    //----------------------------------------------------------------------------------
    switch(currentScreen)
    {
        case 'LOGO':
        {
            // TODO: Update LOGO screen variables here!

            framesCounter++;    // Count frames

            // Wait for 2 seconds (120 frames) before jumping to TITLE screen
            if (framesCounter > 120)
            {
                currentScreen = 'TITLE';
            }
        } break;
        case 'TITLE':
        {
            // TODO: Update TITLE screen variables here!

            // Press enter to change to GAMEPLAY screen
            if (r.IsKeyPressed(r.KEY_ENTER) || r.IsGestureDetected(r.GESTURE_TAP))
            {
                currentScreen = 'GAMEPLAY';
            }
        } break;
        case 'GAMEPLAY':
        {
            // TODO: Update GAMEPLAY screen variables here!

            // Press enter to change to ENDING screen
            if (r.IsKeyPressed(r.KEY_ENTER) || r.IsGestureDetected(r.GESTURE_TAP))
            {
                currentScreen = 'ENDING';
            }
        } break;
        case 'ENDING':
        {
            // TODO: Update ENDING screen variables here!

            // Press enter to return to TITLE screen
            if (r.IsKeyPressed(r.KEY_ENTER) || r.IsGestureDetected(r.GESTURE_TAP))
            {
                currentScreen = 'TITLE';
            }
        } break;
        default: break;
    }
    //----------------------------------------------------------------------------------

    // Draw
    //----------------------------------------------------------------------------------
    r.BeginDrawing();

        r.ClearBackground(r.RAYWHITE);

        switch(currentScreen)
        {
            case 'LOGO':
            {
                // TODO: Draw LOGO screen here!
                r.DrawText("LOGO SCREEN", 20, 20, 40, r.LIGHTGRAY);
                r.DrawText("WAIT for 2 SECONDS...", 290, 220, 20, r.GRAY);

            } break;
            case 'TITLE':
            {
                // TODO: Draw TITLE screen here!
                r.DrawRectangle(0, 0, screenWidth, screenHeight, r.GREEN);
                r.DrawText("TITLE SCREEN", 20, 20, 40, r.DARKGREEN);
                r.DrawText("PRESS ENTER or TAP to JUMP to GAMEPLAY SCREEN", 120, 220, 20, r.DARKGREEN);

            } break;
            case 'GAMEPLAY':
            {
                // TODO: Draw GAMEPLAY screen here!
                r.DrawRectangle(0, 0, screenWidth, screenHeight, r.PURPLE);
                r.DrawText("GAMEPLAY SCREEN", 20, 20, 40, r.MAROON);
                r.DrawText("PRESS ENTER or TAP to JUMP to ENDING SCREEN", 130, 220, 20, r.MAROON);

            } break;
            case 'ENDING':
            {
                // TODO: Draw ENDING screen here!
                r.DrawRectangle(0, 0, screenWidth, screenHeight, r.BLUE);
                r.DrawText("ENDING SCREEN", 20, 20, 40, r.DARKBLUE);
                r.DrawText("PRESS ENTER or TAP to RETURN to TITLE SCREEN", 120, 220, 20, r.DARKBLUE);

            } break;
            default: break;
        }

    r.EndDrawing();
    //----------------------------------------------------------------------------------
}

// De-Initialization
//--------------------------------------------------------------------------------------

// TODO: Unload all loaded data (textures, fonts, audio) here!

r.CloseWindow();        // Close window and OpenGL context
//--------------------------------------------------------------------------------------

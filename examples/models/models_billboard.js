/*******************************************************************************************
*
*   raylib [models] example - Drawing billboards
*
*   This example has been created using raylib 1.3 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2015 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('raylib')

// Initialization
//--------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, "raylib [models] example - drawing billboards")

// Define the camera to look into our 3d world
const camera = r.Camera()
camera.position = r.Vector3(5.0, 4.0, 5.0)
camera.target = r.Vector3(0.0, 2.0, 0.0)
camera.up = r.Vector3(0.0, 1.0, 0.0)
camera.fovy = 45.0
camera.type = r.CAMERA_PERSPECTIVE

const bill = r.LoadTexture(__dirname + "/resources/billboard.png")     // Our texture billboard
const billPosition = r.Vector3(0.0, 2.0, 0.0)                 // Position where draw billboard

r.SetCameraMode(camera, r.CAMERA_ORBITAL)  // Set an orbital camera mode

r.SetTargetFPS(60)                       // Set our game to run at 60 frames-per-second
//--------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose())            // Detect window close button or ESC key
{
    // Update
    //----------------------------------------------------------------------------------
    //r.UpdateCamera(camera);              // Update camera
    //----------------------------------------------------------------------------------

    // Draw
    //----------------------------------------------------------------------------------
    r.BeginDrawing()

        r.ClearBackground(r.RAYWHITE)

        r.BeginMode3D(camera)

            r.DrawGrid(10, 1.0)        // Draw a grid

            r.DrawBillboard(camera, bill, billPosition, 2.0, r.WHITE)

        r.EndMode3D()

        r.DrawFPS(10, 10)

    r.EndDrawing()
    //----------------------------------------------------------------------------------
}

// De-Initialization
//--------------------------------------------------------------------------------------
r.UnloadTexture(bill)        // Unload texture

r.CloseWindow()              // Close window and OpenGL context
//--------------------------------------------------------------------------------------

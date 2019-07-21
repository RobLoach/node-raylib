/*******************************************************************************************
*
*   raylib [core] example - 3d camera first person
*
*   This example has been created using raylib 1.3 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2015 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('raylib')

const MAX_COLUMNS = 20

// Initialization
//--------------------------------------------------------------------------------------
const screenWidth = 800;
const screenHeight = 450;

r.InitWindow(screenWidth, screenHeight, "raylib [core] example - 3d camera first person");

// Define the camera to look into our 3d world (position, target, up vector)
const camera = new r.Camera(
  new r.Vector3(4, 2, 4),
  new r.Vector3(0, 1.8, 0),
  new r.Vector3(0, 1, 0),
  60,
  r.CameraType.CAMERA_PERSPECTIVE
);

// Generates some random columns
const heights = []
const positions = []
const colors = []

for (let i = 0; i < MAX_COLUMNS; i++)
{
  let newHeight = r.GetRandomValue(1, 12)
  heights.push(newHeight)
  positions.push(new r.Vector3(r.GetRandomValue(-15, 15), newHeight / 2, r.GetRandomValue(-15, 15)))
  colors.push(new r.Color(r.GetRandomValue(20, 255), r.GetRandomValue(10, 55), 30, 25))
}

r.SetCameraMode(camera, r.CameraMode.CAMERA_FIRST_PERSON); // Set a first person camera mode

r.SetTargetFPS(60);                           // Set our game to run at 60 frames-per-second
//--------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose())                // Detect window close button or ESC key
{
    // Update
    //----------------------------------------------------------------------------------
    r.UpdateCamera(camera);                  // Update camera
    //----------------------------------------------------------------------------------

    // Draw
    //----------------------------------------------------------------------------------
    r.BeginDrawing();

        r.ClearBackground(r.RAYWHITE);

        r.BeginMode3D(camera);

            r.DrawPlane(new r.Vector3(), new r.Vector2(32, 32), r.LIGHTGRAY); // Draw ground
            r.DrawCube(new r.Vector3(-16, 2.5, 0), 1, 5, 32, r.BLUE);     // Draw a blue wall
            r.DrawCube(new r.Vector3(16, 2.5, 0), 1, 5, 32, r.LIME);      // Draw a green wall
            r.DrawCube(new r.Vector3(0, 2.5, 16), 32, 5, 1, r.GOLD);      // Draw a yellow wall

            // Draw some cubes around
            for (let i = 0; i < MAX_COLUMNS; i++)
            {
                r.DrawCube(positions[i], 2, heights[i], 2, colors[i]);
                r.DrawCubeWires(positions[i], 2, heights[i], 2, r.MAROON);
            }

        r.EndMode3D();

        r.DrawRectangle( 10, 10, 220, 70, r.Fade(r.SKYBLUE, 0.5));
        r.DrawRectangleLines( 10, 10, 220, 70, r.BLUE);

        r.DrawText("First person camera default controls:", 20, 20, 10, r.BLACK);
        r.DrawText("- Move with keys: W, A, S, D", 40, 40, 10, r.DARKGRAY);
        r.DrawText("- Mouse move to look around", 40, 60, 10, r.DARKGRAY);

    r.EndDrawing();
    //----------------------------------------------------------------------------------
}

// De-Initialization
//--------------------------------------------------------------------------------------
r.CloseWindow();        // Close window and OpenGL context
//--------------------------------------------------------------------------------------

/*******************************************************************************************
*
*   raylib [models] example - rlgl module usage with push/pop matrix transformations
*
*   This example uses [rlgl] module funtionality (pseudo-OpenGL 1.1 style coding)
*
*   This example has been created using raylib 2.5 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Copyright (c) 2018 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('raylib')

//------------------------------------------------------------------------------------
// Module Functions Declaration
//------------------------------------------------------------------------------------
function DrawSphereBasic(color)
{
    let rings = 16;
    let slices = 16;

    r.rlBegin(r.RL_TRIANGLES);
    r.rlColor4ub(color.r, color.g, color.b, color.a);

    for (let i = 0; i < (rings + 2); i++)
    {
        for (let j = 0; j < slices; j++)
        {
            r.rlVertex3f(Math.cos(r.DEG2RAD*(270+(180/(rings + 1))*i))*Math.sin(r.DEG2RAD*(j*360/slices)),
                       Math.sin(r.DEG2RAD*(270+(180/(rings + 1))*i)),
                       Math.cos(r.DEG2RAD*(270+(180/(rings + 1))*i))*Math.cos(r.DEG2RAD*(j*360/slices)));
            r.rlVertex3f(Math.cos(r.DEG2RAD*(270+(180/(rings + 1))*(i+1)))*Math.sin(r.DEG2RAD*((j+1)*360/slices)),
                       Math.sin(r.DEG2RAD*(270+(180/(rings + 1))*(i+1))),
                       Math.cos(r.DEG2RAD*(270+(180/(rings + 1))*(i+1)))*Math.cos(r.DEG2RAD*((j+1)*360/slices)));
            r.rlVertex3f(Math.cos(r.DEG2RAD*(270+(180/(rings + 1))*(i+1)))*Math.sin(r.DEG2RAD*(j*360/slices)),
                       Math.sin(r.DEG2RAD*(270+(180/(rings + 1))*(i+1))),
                       Math.cos(r.DEG2RAD*(270+(180/(rings + 1))*(i+1)))*Math.cos(r.DEG2RAD*(j*360/slices)));

            r.rlVertex3f(Math.cos(r.DEG2RAD*(270+(180/(rings + 1))*i))*Math.sin(r.DEG2RAD*(j*360/slices)),
                       Math.sin(r.DEG2RAD*(270+(180/(rings + 1))*i)),
                       Math.cos(r.DEG2RAD*(270+(180/(rings + 1))*i))*Math.cos(r.DEG2RAD*(j*360/slices)));
            r.rlVertex3f(Math.cos(r.DEG2RAD*(270+(180/(rings + 1))*(i)))*Math.sin(r.DEG2RAD*((j+1)*360/slices)),
                       Math.sin(r.DEG2RAD*(270+(180/(rings + 1))*(i))),
                       Math.cos(r.DEG2RAD*(270+(180/(rings + 1))*(i)))*Math.cos(r.DEG2RAD*((j+1)*360/slices)));
            r.rlVertex3f(Math.cos(r.DEG2RAD*(270+(180/(rings + 1))*(i+1)))*Math.sin(r.DEG2RAD*((j+1)*360/slices)),
                       Math.sin(r.DEG2RAD*(270+(180/(rings + 1))*(i+1))),
                       Math.cos(r.DEG2RAD*(270+(180/(rings + 1))*(i+1)))*Math.cos(r.DEG2RAD*((j+1)*360/slices)));
        }
    }
    r.rlEnd();
}

//------------------------------------------------------------------------------------
// Program main entry point
//------------------------------------------------------------------------------------

// Initialization
//--------------------------------------------------------------------------------------
const screenWidth = 800;
const screenHeight = 450;

const sunRadius = 4.0;
const earthRadius = 0.6;
const earthOrbitRadius = 8.0;
const moonRadius = 0.16;
const moonOrbitRadius = 1.5;

r.InitWindow(screenWidth, screenHeight, "raylib [models] example - rlgl module usage with push/pop matrix transformations");

// Define the camera to look into our 3d world
let camera = r.Camera();
camera.position = r.Vector3( 16, 16, 16 );
camera.target = r.Vector3( 0, 0, 0 );
camera.up = r.Vector3( 0, 1, 0 );
camera.fovy = 45;
camera.type = r.CAMERA_PERSPECTIVE;

r.SetCameraMode(camera, r.CAMERA_FREE);

let rotationSpeed = 0.2;         // General system rotation speed

let earthRotation = 0;         // Rotation of earth around itself (days) in degrees
let earthOrbitRotation = 0;    // Rotation of earth around the Sun (years) in degrees
let moonRotation = 0.0;          // Rotation of moon around itself
let moonOrbitRotation = 0;     // Rotation of moon around earth in degrees

r.SetTargetFPS(60);                   // Set our game to run at 60 frames-per-second
//--------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose())        // Detect window close button or ESC key
{
    // Update
    //----------------------------------------------------------------------------------
    r.UpdateCamera(camera);

    earthRotation += (5*rotationSpeed);
    earthOrbitRotation += (365/360*(5*rotationSpeed)*rotationSpeed);
    moonRotation += (2*rotationSpeed);
    moonOrbitRotation += (8*rotationSpeed);
    //----------------------------------------------------------------------------------

    // Draw
    //----------------------------------------------------------------------------------
    r.BeginDrawing();

        r.ClearBackground(r.RAYWHITE);

        r.BeginMode3D(camera);

            r.rlPushMatrix();
                r.rlScalef(sunRadius, sunRadius, sunRadius);          // Scale Sun
                DrawSphereBasic(r.GOLD);                              // Draw the Sun
            r.rlPopMatrix();

            r.rlPushMatrix();
                r.rlRotatef(earthOrbitRotation, 0.0, 1.0, 0.0);    // Rotation for Earth orbit around Sun
                r.rlTranslatef(earthOrbitRadius, 0.0, 0.0);         // Translation for Earth orbit
                r.rlRotatef(-earthOrbitRotation, 0.0, 1.0, 0.0);   // Rotation for Earth orbit around Sun inverted

                r.rlPushMatrix();
                    r.rlRotatef(earthRotation, 0.25, 1.0, 0.0);       // Rotation for Earth itself
                    r.rlScalef(earthRadius, earthRadius, earthRadius);// Scale Earth

                    DrawSphereBasic(r.BLUE);                          // Draw the Earth
                r.rlPopMatrix();

                r.rlRotatef(moonOrbitRotation, 0.0, 1.0, 0.0);     // Rotation for Moon orbit around Earth
                r.rlTranslatef(moonOrbitRadius, 0.0, 0.0);          // Translation for Moon orbit
                r.rlRotatef(-moonOrbitRotation, 0.0, 1.0, 0.0);    // Rotation for Moon orbit around Earth inverted
                r.rlRotatef(moonRotation, 0.0, 1.0, 0.0);          // Rotation for Moon itself
                r.rlScalef(moonRadius, moonRadius, moonRadius);       // Scale Moon

                DrawSphereBasic(r.LIGHTGRAY);                         // Draw the Moon
            r.rlPopMatrix();

            // Some reference elements (not affected by previous matrix transformations)
            r.DrawCircle3D(r.Vector3( 0.0, 0.0, 0.0 ), earthOrbitRadius, r.Vector3( 1, 0, 0 ), 90.0, r.Fade(r.RED, 0.5));
            r.DrawGrid(20, 1.0);

        r.EndMode3D();

        r.DrawText("EARTH ORBITING AROUND THE SUN!", 400, 10, 20, r.MAROON);
        r.DrawFPS(10, 10);

    r.EndDrawing();
    //----------------------------------------------------------------------------------
}

// De-Initialization
//--------------------------------------------------------------------------------------
r.CloseWindow();        // Close window and OpenGL context
//--------------------------------------------------------------------------------------

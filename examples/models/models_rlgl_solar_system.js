/*******************************************************************************************
*
*   raylib [models] example - rlgl module usage with push/pop matrix transformations
*
*   NOTE: This example uses [rlgl] module functionality (pseudo-OpenGL 1.1 style coding)
*
*   Example originally created with raylib 2.5, last time updated with raylib 4.0
*
*   Example licensed under an unmodified zlib/libpng license, which is an OSI-certified,
*   BSD-like license that allows static linking with closed source software
*
*   Copyright (c) 2018-2022 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

const r = require('raylib')
// ------------------------------------------------------------------------------------
// Module Functions Declaration
// ------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// Program main entry point
// ------------------------------------------------------------------------------------

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

const sunRadius = 4.0
const earthRadius = 0.6
const earthOrbitRadius = 8.0
const moonRadius = 0.16
const moonOrbitRadius = 1.5

r.InitWindow(screenWidth, screenHeight, 'node raylib [models] example - rlgl module usage with push/pop matrix transformations')

const camera = {
  position: { x: 16, y: 16, z: 16 },
  target: { x: 0, y: 0, z: 0 },
  up: { x: 0, y: 1, z: 0 },
  fovy: 45,
  projection: r.CAMERA_PERSPECTIVE
}

r.SetCameraMode(camera, r.CAMERA_FREE)

const rotationSpeed = 0.2 // General system rotation speed

let earthRotation = 0.0 // Rotation of earth around itself (days) in degrees
let earthOrbitRotation = 0.0 // Rotation of earth around the Sun (years) in degrees
let moonRotation = 0.0 // Rotation of moon around itself
let moonOrbitRotation = 0.0 // Rotation of moon around earth in degrees

r.SetTargetFPS(60) // Set our game to run at 60 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) {
  // Update
  // ----------------------------------------------------------------------------------
  r.UpdateCamera(camera)

  earthRotation += (5.0 * rotationSpeed)
  earthOrbitRotation += (365 / 360.0 * (5.0 * rotationSpeed) * rotationSpeed)
  moonRotation += (2.0 * rotationSpeed)
  moonOrbitRotation += (8.0 * rotationSpeed)
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(r.RAYWHITE)

  r.BeginMode3D(camera)

  r.rlPushMatrix()
  r.rlScalef(sunRadius, sunRadius, sunRadius) // Scale Sun
  DrawSphereBasic(r.GOLD) // Draw the Sun
  r.rlPopMatrix()

  r.rlPushMatrix()
  r.rlRotatef(earthOrbitRotation, 0.0, 1.0, 0.0) // Rotation for Earth orbit around Sun
  r.rlTranslatef(earthOrbitRadius, 0.0, 0.0) // Translation for Earth orbit

  r.rlPushMatrix()
  r.rlRotatef(earthRotation, 0.25, 1.0, 0.0) // Rotation for Earth itself
  r.rlScalef(earthRadius, earthRadius, earthRadius)// Scale Earth

  DrawSphereBasic(r.BLUE) // Draw the Earth
  r.rlPopMatrix()

  r.rlRotatef(moonOrbitRotation, 0.0, 1.0, 0.0) // Rotation for Moon orbit around Earth
  r.rlTranslatef(moonOrbitRadius, 0.0, 0.0) // Translation for Moon orbit
  r.rlRotatef(moonRotation, 0.0, 1.0, 0.0) // Rotation for Moon itself
  r.rlScalef(moonRadius, moonRadius, moonRadius) // Scale Moon

  DrawSphereBasic(r.LIGHTGRAY) // Draw the Moon
  r.rlPopMatrix()

  // Some reference elements (not affected by previous matrix transformations)
  r.DrawCircle3D({ x: 0, y: 0, z: 0 }, earthOrbitRadius, { x: 1, y: 0, z: 0 }, 90.0, r.Fade(r.RED, 0.5))
  r.DrawGrid(20, 1.0)

  r.EndMode3D()

  r.DrawText('EARTH ORBITING AROUND THE SUN!', 400, 10, 20, r.MAROON)
  r.DrawFPS(10, 10)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------
// Module Functions Definitions (local)
// --------------------------------------------------------------------------------------------

// Draw sphere without any matrix transformation
// NOTE: Sphere is drawn in world position ( 0, 0, 0 ) with radius 1.0f
function DrawSphereBasic (color) {
  const rings = 16
  const slices = 16

  // Make sure there is enough space in the internal render batch
  // buffer to store all required vertex, batch is reseted if required
  r.rlCheckRenderBatchLimit((rings + 2) * slices * 6)

  r.rlBegin(r.RL_TRIANGLES)
  r.rlColor4ub(color.r, color.g, color.b, color.a)
  const cosf = Math.cos
  const sinf = Math.sin
  r.DEG2RAD = Math.PI / 180
  for (let i = 0; i < (rings + 2); i++) {
    for (let j = 0; j < slices; j++) {
      r.rlVertex3f(cosf(r.DEG2RAD * (270 + (180 / (rings + 1)) * i)) * sinf(r.DEG2RAD * (j * 360 / slices)),
        sinf(r.DEG2RAD * (270 + (180 / (rings + 1)) * i)),
        cosf(r.DEG2RAD * (270 + (180 / (rings + 1)) * i)) * cosf(r.DEG2RAD * (j * 360 / slices)))
      r.rlVertex3f(cosf(r.DEG2RAD * (270 + (180 / (rings + 1)) * (i + 1))) * sinf(r.DEG2RAD * ((j + 1) * 360 / slices)),
        sinf(r.DEG2RAD * (270 + (180 / (rings + 1)) * (i + 1))),
        cosf(r.DEG2RAD * (270 + (180 / (rings + 1)) * (i + 1))) * cosf(r.DEG2RAD * ((j + 1) * 360 / slices)))
      r.rlVertex3f(cosf(r.DEG2RAD * (270 + (180 / (rings + 1)) * (i + 1))) * sinf(r.DEG2RAD * (j * 360 / slices)),
        sinf(r.DEG2RAD * (270 + (180 / (rings + 1)) * (i + 1))),
        cosf(r.DEG2RAD * (270 + (180 / (rings + 1)) * (i + 1))) * cosf(r.DEG2RAD * (j * 360 / slices)))

      r.rlVertex3f(cosf(r.DEG2RAD * (270 + (180 / (rings + 1)) * i)) * sinf(r.DEG2RAD * (j * 360 / slices)),
        sinf(r.DEG2RAD * (270 + (180 / (rings + 1)) * i)),
        cosf(r.DEG2RAD * (270 + (180 / (rings + 1)) * i)) * cosf(r.DEG2RAD * (j * 360 / slices)))
      r.rlVertex3f(cosf(r.DEG2RAD * (270 + (180 / (rings + 1)) * (i))) * sinf(r.DEG2RAD * ((j + 1) * 360 / slices)),
        sinf(r.DEG2RAD * (270 + (180 / (rings + 1)) * (i))),
        cosf(r.DEG2RAD * (270 + (180 / (rings + 1)) * (i))) * cosf(r.DEG2RAD * ((j + 1) * 360 / slices)))
      r.rlVertex3f(cosf(r.DEG2RAD * (270 + (180 / (rings + 1)) * (i + 1))) * sinf(r.DEG2RAD * ((j + 1) * 360 / slices)),
        sinf(r.DEG2RAD * (270 + (180 / (rings + 1)) * (i + 1))),
        cosf(r.DEG2RAD * (270 + (180 / (rings + 1)) * (i + 1))) * cosf(r.DEG2RAD * ((j + 1) * 360 / slices)))
    }
  }
  r.rlEnd()
}

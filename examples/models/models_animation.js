/*******************************************************************************************
*
*   raylib [models] example - Load 3d model with animations and play them
*
*   Example originally created with raylib 2.5, last time updated with raylib 3.5
*
*   Example contributed by Culacant (@culacant) and reviewed by Ramon Santamaria (@raysan5)
*
*   Example licensed under an unmodified zlib/libpng license, which is an OSI-certified,
*   BSD-like license that allows static linking with closed source software
*
*   Copyright (c) 2019-2023 Culacant (@culacant) and Ramon Santamaria (@raysan5)
*
********************************************************************************************
*
*   NOTE: To export a model from blender, make sure it is not posed, the vertices need to be
*         in the same position as they would be in edit mode and the scale of your models is
*         set to 0. Scaling can be done from the export menu.
*
********************************************************************************************/

const r = require('raylib')
const { join } = require('path')

// Initialization
// --------------------------------------------------------------------------------------
const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [models] example - model animation')

// Define the camera to look into our 3d world
const camera = {
  position: { x: 10, y: 10, z: 10 }, // Camera position
  target: { x: 0, y: 0, z: 0 }, // Camera looking at point
  up: { x: 0, y: 1, z: 0 }, // Camera up vector (rotation towards target)
  fovy: 45, // Camera field-of-view Y
  projection: r.CAMERA_PERSPECTIVE // Camera mode type
}

const model = r.LoadModel(join(__dirname, 'resources', 'guy', 'guy.iqm')) // Load the animated model mesh and basic data
const texture = r.LoadTexture(join(__dirname, 'resources', 'guy', 'guytex.png')) // Load model texture and set material

// this will fail as it can't return an array of materials
const materials = r.LoadMaterials(join(__dirname, 'resources', 'guy', 'guy.iqm'), 1)
console.log('materials: ', materials)

r.SetMaterialTexture(model.materials[0], r.MATERIAL_MAP_DIFFUSE, texture) // Set model material map texture

const position = { x: 0, y: 0, z: 0 } // Set model position

// Load animation data
let animsCount = 0
const anims = r.LoadModelAnimations('resources/models/iqm/guyanim.iqm', animsCount)
animsCount = anims.length
let animFrameCounter = 0

r.DisableCursor() // Catch cursor
r.SetTargetFPS(60) // Set our game to run at 60 frames-per-second
// --------------------------------------------------------------------------------------

// Main game loop
while (!r.WindowShouldClose()) { // Detect window close button or ESC key
  // Update
  // ----------------------------------------------------------------------------------
  r.UpdateCamera(camera, r.CAMERA_FIRST_PERSON)

  // Play animation when spacebar is held down
  if (r.IsKeyDown(r.KEY_SPACE)) {
    animFrameCounter++
    r.UpdateModelAnimation(model, anims[0], animFrameCounter)
    if (animFrameCounter >= anims[0].frameCount) animFrameCounter = 0
  }
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(r.RAYWHITE)

  r.BeginMode3D(camera)

  r.DrawModelEx(model, position, { x: 0, y: 0, z: 0 }, -90, { x: 1, y: 1, z: 1 }, r.WHITE)

  for (let i = 0; i < model.boneCount; i++) {
    r.DrawCube(anims[0].framePoses[animFrameCounter][i].translation, 0.2, 0.2, 0.2, r.RED)
  }

  r.DrawGrid(10, 1) // Draw a grid

  r.EndMode3D()

  r.DrawText('PRESS SPACE to PLAY MODEL ANIMATION', 10, 10, 20, r.MAROON)
  r.DrawText('(c) Guy IQM 3D model by @culacant', screenWidth - 200, screenHeight - 20, 10, r.GRAY)

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

// De-Initialization
// --------------------------------------------------------------------------------------
r.UnloadTexture(texture) // Unload texture
r.UnloadModelAnimations(anims, animsCount) // Unload model animations data
r.UnloadModel(model) // Unload model

r.CloseWindow() // Close window and OpenGL context
// --------------------------------------------------------------------------------------

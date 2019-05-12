#ifndef NODE_RAYLIB_MODELS_H
#define NODE_RAYLIB_MODELS_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_models(Napi::Env& env, Napi::Object& exports) {
  // Basic geometric 3D shapes drawing functions
  AddFunction(env, exports, "DrawLine3D", DrawLine3D);
  AddFunction(env, exports, "DrawCircle3D", DrawCircle3D);
  AddFunction(env, exports, "DrawCube", DrawCube);
  AddFunction(env, exports, "DrawCubeV", DrawCubeV);
  AddFunction(env, exports, "DrawCubeWires", DrawCubeWires);
  AddFunction(env, exports, "DrawCubeWiresV", DrawCubeWiresV);
  AddFunction(env, exports, "DrawCubeTexture", DrawCubeTexture);
  AddFunction(env, exports, "DrawSphere", DrawSphere);
  AddFunction(env, exports, "DrawSphereEx", DrawSphereEx);
  AddFunction(env, exports, "DrawSphereWires", DrawSphereWires);
  AddFunction(env, exports, "DrawCylinder", DrawCylinder);
  AddFunction(env, exports, "DrawCylinderWires", DrawCylinderWires);
  AddFunction(env, exports, "DrawPlane", DrawPlane);
  //AddFunction(env, exports, DrawRay(Ray ray, Color color);                                                                // Draw a ray line
  AddFunction(env, exports, "DrawGrid", DrawGrid);
  AddFunction(env, exports, "DrawGizmo", DrawGizmo);
  //DrawTorus(), DrawTeapot() could be useful?

  // TODO: Add remaining models.
  // // Model loading/unloading functions
  // RLAPI Model LoadModel(const char *fileName);                                                            // Load model from files (meshes and materials)
  // RLAPI Model LoadModelFromMesh(Mesh mesh);                                                               // Load model from generated mesh (default material)
  // RLAPI void UnloadModel(Model model);                                                                    // Unload model from memory (RAM and/or VRAM)

  // // Mesh loading/unloading functions
  // RLAPI Mesh *LoadMeshes(const char *fileName, int *meshCount);                                           // Load meshes from model file
  // RLAPI void ExportMesh(Mesh mesh, const char *fileName);                                                 // Export mesh data to file
  // RLAPI void UnloadMesh(Mesh *mesh);                                                                      // Unload mesh from memory (RAM and/or VRAM)

  // // Material loading/unloading functions
  // RLAPI Material *LoadMaterials(const char *fileName, int *materialCount);                                // Load materials from model file
  // RLAPI Material LoadMaterialDefault(void);                                                               // Load default material (Supports: DIFFUSE, SPECULAR, NORMAL maps)
  // RLAPI void UnloadMaterial(Material material);                                                           // Unload material from GPU memory (VRAM)
  // RLAPI void SetMaterialTexture(Material *material, int mapType, Texture2D texture);                      // Set texture for a material map type (MAP_DIFFUSE, MAP_SPECULAR...)
  // RLAPI void SetModelMeshMaterial(Model *model, int meshId, int materialId);                              // Set material for a mesh

  // // Model animations loading/unloading functions
  // RLAPI ModelAnimation *LoadModelAnimations(const char *fileName, int *animsCount);                       // Load model animations from file
  // RLAPI void UpdateModelAnimation(Model model, ModelAnimation anim, int frame);                           // Update model animation pose
  // RLAPI void UnloadModelAnimation(ModelAnimation anim);                                                   // Unload animation data
  // RLAPI bool IsModelAnimationValid(Model model, ModelAnimation anim);                                     // Check model animation skeleton match

  // // Mesh generation functions
  // RLAPI Mesh GenMeshPoly(int sides, float radius);                                                        // Generate polygonal mesh
  // RLAPI Mesh GenMeshPlane(float width, float length, int resX, int resZ);                                 // Generate plane mesh (with subdivisions)
  // RLAPI Mesh GenMeshCube(float width, float height, float length);                                        // Generate cuboid mesh
  // RLAPI Mesh GenMeshSphere(float radius, int rings, int slices);                                          // Generate sphere mesh (standard sphere)
  // RLAPI Mesh GenMeshHemiSphere(float radius, int rings, int slices);                                      // Generate half-sphere mesh (no bottom cap)
  // RLAPI Mesh GenMeshCylinder(float radius, float height, int slices);                                     // Generate cylinder mesh
  // RLAPI Mesh GenMeshTorus(float radius, float size, int radSeg, int sides);                               // Generate torus mesh
  // RLAPI Mesh GenMeshKnot(float radius, float size, int radSeg, int sides);                                // Generate trefoil knot mesh
  // RLAPI Mesh GenMeshHeightmap(Image heightmap, Vector3 size);                                             // Generate heightmap mesh from image data
  // RLAPI Mesh GenMeshCubicmap(Image cubicmap, Vector3 cubeSize);                                           // Generate cubes-based map mesh from image data

  // // Mesh manipulation functions
  // RLAPI BoundingBox MeshBoundingBox(Mesh mesh);                                                           // Compute mesh bounding box limits
  // RLAPI void MeshTangents(Mesh *mesh);                                                                    // Compute mesh tangents
  // RLAPI void MeshBinormals(Mesh *mesh);                                                                   // Compute mesh binormals

  // // Model drawing functions
  // RLAPI void DrawModel(Model model, Vector3 position, float scale, Color tint);                           // Draw a model (with texture if set)
  // RLAPI void DrawModelEx(Model model, Vector3 position, Vector3 rotationAxis, float rotationAngle, Vector3 scale, Color tint); // Draw a model with extended parameters
  // RLAPI void DrawModelWires(Model model, Vector3 position, float scale, Color tint);                      // Draw a model wires (with texture if set)
  // RLAPI void DrawModelWiresEx(Model model, Vector3 position, Vector3 rotationAxis, float rotationAngle, Vector3 scale, Color tint); // Draw a model wires (with texture if set) with extended parameters
  // RLAPI void DrawBoundingBox(BoundingBox box, Color color);                                               // Draw bounding box (wires)
  AddFunction(env, exports, "DrawBillboard", DrawBillboard);
  // RLAPI void DrawBillboardRec(Camera camera, Texture2D texture, Rectangle sourceRec, Vector3 center, float size, Color tint); // Draw a billboard texture defined by sourceRec

  // // Collision detection functions
  // RLAPI bool CheckCollisionSpheres(Vector3 centerA, float radiusA, Vector3 centerB, float radiusB);       // Detect collision between two spheres
  // RLAPI bool CheckCollisionBoxes(BoundingBox box1, BoundingBox box2);                                     // Detect collision between two bounding boxes
  // RLAPI bool CheckCollisionBoxSphere(BoundingBox box, Vector3 centerSphere, float radiusSphere);          // Detect collision between box and sphere
  // RLAPI bool CheckCollisionRaySphere(Ray ray, Vector3 spherePosition, float sphereRadius);                // Detect collision between ray and sphere
  // RLAPI bool CheckCollisionRaySphereEx(Ray ray, Vector3 spherePosition, float sphereRadius, Vector3 *collisionPoint); // Detect collision between ray and sphere, returns collision point
  // RLAPI bool CheckCollisionRayBox(Ray ray, BoundingBox box);                                              // Detect collision between ray and box
  // RLAPI RayHitInfo GetCollisionRayModel(Ray ray, Model *model);                                           // Get collision info between ray and model
  // RLAPI RayHitInfo GetCollisionRayTriangle(Ray ray, Vector3 p1, Vector3 p2, Vector3 p3);                  // Get collision info between ray and triangle
  // RLAPI RayHitInfo GetCollisionRayGround(Ray ray, float groundHeight);                                    // Get collision info between ray and ground plane (Y-normal plane)

}

#endif

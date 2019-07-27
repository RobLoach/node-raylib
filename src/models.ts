import { Color } from "./types/colors"
import { Vector2, Vector3, Ray, RayHitInfo, Rectangle } from "./types/maths"
import { Texture2D, Image } from "./types/texture"
import { Camera } from "./types/camera"
import { Model, Mesh, Material, ModelAnimation, BoundingBox,  } from "./types/models"


export default interface Models {
  DrawLine3D: (startPos: Vector3, endPos: Vector3, color: Color) => void //Draw a line in 3D world space 
  DrawCircle3D: (center: Vector3, radius: number, rotationAxis: Vector3, rotationAngle: number, color: Color) => void //Draw a circle in 3D world space 
  DrawCube: (position: Vector3, width: number, height: number, length: number, color: Color) => void //Draw cube 
  DrawCubeV: (position: Vector3, size: Vector3, color: Color) => void //Draw cube (Vector version) 
  DrawCubeWires: (position: Vector3, width: number, height: number, length: number, color: Color) => void //Draw cube wires 
  DrawCubeWiresV: (position: Vector3, size: Vector3, color: Color) => void //Draw cube wires (Vector version) 
  DrawCubeTexture: (texture: Texture2D, position: Vector3, width: number, height: number, length: number, color: Color) => void //Draw cube textured 
  DrawSphere: (centerPos: Vector3, radius: number, color: Color) => void //Draw sphere 
  DrawSphereEx: (centerPos: Vector3, radius: number, rings: number, slices: number, color: Color) => void //Draw sphere with extended parameters 
  DrawSphereWires: (centerPos: Vector3, radius: number, rings: number, slices: number, color: Color) => void //Draw sphere wires 
  DrawCylinder: (position: Vector3, radiusTop: number, radiusBottom: number, height: number, slices: number, color: Color) => void //Draw a cylinder/cone 
  DrawCylinderWires: (position: Vector3, radiusTop: number, radiusBottom: number, height: number, slices: number, color: Color) => void //Draw a cylinder/cone wires 
  DrawPlane: (centerPos: Vector3, size: Vector2, color: Color) => void //Draw a plane XZ 
  DrawRay: (ray: Ray, color: Color) => void //Draw a ray line 
  DrawGrid: (slices: number, spacing: number) => void //Draw a grid (centered at (0, 0, 0)) 
  DrawGizmo: (position: Vector3) => void //Draw simple gizmo 
  LoadModel: (fileName: string) => Model //Load model from files (meshes and materials) 
  LoadModelFromMesh: (mesh: Mesh) => Model //Load model from generated mesh (default material) 
  UnloadModel: (model: Model) => void //Unload model from memory (RAM and/or VRAM) 
  LoadMeshes: (fileName: string, meshCount: number) => Mesh //Load meshes from model file 
  ExportMesh: (mesh: Mesh, fileName: string) => void //Export mesh data to file 
  UnloadMesh: (mesh: Mesh) => void //Unload mesh from memory (RAM and/or VRAM) 
  LoadMaterials: (fileName: string, materialCount: number) => Material //Load materials from model file 
  LoadMaterialDefault: () => Material //Load default material (Supports: DIFFUSE, SPECULAR, NORMAL maps) 
  UnloadMaterial: (material: Material) => void //Unload material from GPU memory (VRAM) 
  SetMaterialTexture: (material: Material, mapType: number, texture: Texture2D) => void //Set texture for a material map type (MAP_DIFFUSE, MAP_SPECULAR...) 
  SetModelMeshMaterial: (model: Model, meshId: number, materialId: number) => void //Set material for a mesh 
  LoadModelAnimations: (fileName: string, animsCount: number) => ModelAnimation //Load model animations from file 
  UpdateModelAnimation: (model: Model, anim: ModelAnimation, frame: number) => void //Update model animation pose 
  UnloadModelAnimation: (anim: ModelAnimation) => void //Unload animation data 
  IsModelAnimationValid: (model: Model, anim: ModelAnimation) => boolean //Check model animation skeleton match 
  GenMeshPoly: (sides: number, radius: number) => Mesh //Generate polygonal mesh 
  GenMeshPlane: (width: number, length: number, resX: number, resZ: number) => Mesh //Generate plane mesh (with subdivisions) 
  GenMeshCube: (width: number, height: number, length: number) => Mesh //Generate cuboid mesh 
  GenMeshSphere: (radius: number, rings: number, slices: number) => Mesh //Generate sphere mesh (standard sphere) 
  GenMeshHemiSphere: (radius: number, rings: number, slices: number) => Mesh //Generate half-sphere mesh (no bottom cap) 
  GenMeshCylinder: (radius: number, height: number, slices: number) => Mesh //Generate cylinder mesh 
  GenMeshTorus: (radius: number, size: number, radSeg: number, sides: number) => Mesh //Generate torus mesh 
  GenMeshKnot: (radius: number, size: number, radSeg: number, sides: number) => Mesh //Generate trefoil knot mesh 
  GenMeshHeightmap: (heightmap: Image, size: Vector3) => Mesh //Generate heightmap mesh from image data 
  GenMeshCubicmap: (cubicmap: Image, cubeSize: Vector3) => Mesh //Generate cubes-based map mesh from image data 
  MeshBoundingBox: (mesh: Mesh) => BoundingBox //Compute mesh bounding box limits 
  MeshTangents: (mesh: Mesh) => void //Compute mesh tangents 
  MeshBinormals: (mesh: Mesh) => void //Compute mesh binormals 
  DrawModel: (model: Model, position: Vector3, scale: number, tint: Color) => void //Draw a model (with texture if set) 
  DrawModelEx: (model: Model, position: Vector3, rotationAxis: Vector3, rotationAngle: number, scale: Vector3, tint: Color) => void //Draw a model with extended parameters 
  DrawModelWires: (model: Model, position: Vector3, scale: number, tint: Color) => void //Draw a model wires (with texture if set) 
  DrawModelWiresEx: (model: Model, position: Vector3, rotationAxis: Vector3, rotationAngle: number, scale: Vector3, tint: Color) => void //Draw a model wires (with texture if set) with extended parameters 
  DrawBoundingBox: (box: BoundingBox, color: Color) => void //Draw bounding box (wires) 
  DrawBillboard: (camera: Camera, texture: Texture2D, center: Vector3, size: number, tint: Color) => void //Draw a billboard texture 
  DrawBillboardRec: (camera: Camera, texture: Texture2D, sourceRec: Rectangle, center: Vector3, size: number, tint: Color) => void //Draw a billboard texture defined by sourceRec 
  CheckCollisionSpheres: (centerA: Vector3, radiusA: number, centerB: Vector3, radiusB: number) => boolean //Detect collision between two spheres 
  CheckCollisionBoxes: (box1: BoundingBox, box2: BoundingBox) => boolean //Detect collision between two bounding boxes 
  CheckCollisionBoxSphere: (box: BoundingBox, centerSphere: Vector3, radiusSphere: number) => boolean //Detect collision between box and sphere 
  CheckCollisionRaySphere: (ray: Ray, spherePosition: Vector3, sphereRadius: number) => boolean //Detect collision between ray and sphere 
  CheckCollisionRaySphereEx: (ray: Ray, spherePosition: Vector3, sphereRadius: number, collisionPoint: Vector3) => boolean //Detect collision between ray and sphere, returns collision point 
  CheckCollisionRayBox: (ray: Ray, box: BoundingBox) => boolean //Detect collision between ray and box 
  GetCollisionRayModel: (ray: Ray, model: Model) => RayHitInfo //Get collision info between ray and model 
  GetCollisionRayTriangle: (ray: Ray, p1: Vector3, p2: Vector3, p3: Vector3) => RayHitInfo //Get collision info between ray and triangle 
  GetCollisionRayGround: (ray: Ray, groundHeight: number) => RayHitInfo //Get collision info between ray and ground plane (Y-normal plane) 
}


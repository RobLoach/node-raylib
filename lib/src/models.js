"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var raylib_1 = __importDefault(require("./bindings/raylib"));
//TODO: add model types
exports.DrawLine3D = raylib_1.default.DrawLine3D; //Draw a line in 3D world space 
exports.DrawCircle3D = raylib_1.default.DrawCircle3D; //Draw a circle in 3D world space 
exports.DrawCube = raylib_1.default.DrawCube; //Draw cube 
exports.DrawCubeV = raylib_1.default.DrawCubeV; //Draw cube (Vector version) 
exports.DrawCubeWires = raylib_1.default.DrawCubeWires; //Draw cube wires 
exports.DrawCubeWiresV = raylib_1.default.DrawCubeWiresV; //Draw cube wires (Vector version) 
exports.DrawCubeTexture = raylib_1.default.DrawCubeTexture; //Draw cube textured 
exports.DrawSphere = raylib_1.default.DrawSphere; //Draw sphere 
exports.DrawSphereEx = raylib_1.default.DrawSphereEx; //Draw sphere with extended parameters 
exports.DrawSphereWires = raylib_1.default.DrawSphereWires; //Draw sphere wires 
exports.DrawCylinder = raylib_1.default.DrawCylinder; //Draw a cylinder/cone 
exports.DrawCylinderWires = raylib_1.default.DrawCylinderWires; //Draw a cylinder/cone wires 
exports.DrawPlane = raylib_1.default.DrawPlane; //Draw a plane XZ 
exports.DrawRay = raylib_1.default.DrawRay; //Draw a ray line 
exports.DrawGrid = raylib_1.default.DrawGrid; //Draw a grid (centered at (0, 0, 0)) 
exports.DrawGizmo = raylib_1.default.DrawGizmo; //Draw simple gizmo 
// export const LoadModel: (fileName: string) => Model = r.LoadModel //Load model from files (meshes and materials) 
// export const LoadModelFromMesh: (mesh: Mesh) => Model = r.LoadModelFromMesh //Load model from generated mesh (default material) 
// export const UnloadModel: (model: Model) => void = r.UnloadModel //Unload model from memory (RAM and/or VRAM) 
// export const LoadMeshes: (fileName: string, meshCount: number) => Mesh = r.LoadMeshes //Load meshes from model file 
// export const ExportMesh: (mesh: Mesh, fileName: string) => void = r.ExportMesh //Export mesh data to file 
// export const UnloadMesh: (mesh: Mesh) => void = r.UnloadMesh //Unload mesh from memory (RAM and/or VRAM) 
// export const LoadMaterials: (fileName: string, materialCount: number) => Material = r.LoadMaterials //Load materials from model file 
// export const LoadMaterialDefault: () => Material = r.LoadMaterialDefault //Load default material (Supports: DIFFUSE, SPECULAR, NORMAL maps) 
// export const UnloadMaterial: (material: Material) => void = r.UnloadMaterial //Unload material from GPU memory (VRAM) 
// export const SetMaterialTexture: (material: Material, mapType: number, texture: Texture2D) => void = r.SetMaterialTexture //Set texture for a material map type (MAP_DIFFUSE, MAP_SPECULAR...) 
// export const SetModelMeshMaterial: (model: Model, meshId: number, materialId: number) => void = r.SetModelMeshMaterial //Set material for a mesh 
// export const LoadModelAnimations: (fileName: string, animsCount: number) => ModelAnimation = r.LoadModelAnimations //Load model animations from file 
// export const UpdateModelAnimation: (model: Model, anim: ModelAnimation, frame: number) => void = r.UpdateModelAnimation //Update model animation pose 
// export const UnloadModelAnimation: (anim: ModelAnimation) => void = r.UnloadModelAnimation //Unload animation data 
// export const IsModelAnimationValid: (model: Model, anim: ModelAnimation) => boolean = r.IsModelAnimationValid //Check model animation skeleton match 
// export const GenMeshPoly: (sides: number, radius: number) => Mesh = r.GenMeshPoly //Generate polygonal mesh 
// export const GenMeshPlane: (width: number, length: number, resX: number, resZ: number) => Mesh = r.GenMeshPlane //Generate plane mesh (with subdivisions) 
// export const GenMeshCube: (width: number, height: number, length: number) => Mesh = r.GenMeshCube //Generate cuboid mesh 
// export const GenMeshSphere: (radius: number, rings: number, slices: number) => Mesh = r.GenMeshSphere //Generate sphere mesh (standard sphere) 
// export const GenMeshHemiSphere: (radius: number, rings: number, slices: number) => Mesh = r.GenMeshHemiSphere //Generate half-sphere mesh (no bottom cap) 
// export const GenMeshCylinder: (radius: number, height: number, slices: number) => Mesh = r.GenMeshCylinder //Generate cylinder mesh 
// export const GenMeshTorus: (radius: number, size: number, radSeg: number, sides: number) => Mesh = r.GenMeshTorus //Generate torus mesh 
// export const GenMeshKnot: (radius: number, size: number, radSeg: number, sides: number) => Mesh = r.GenMeshKnot //Generate trefoil knot mesh 
// export const GenMeshHeightmap: (heightmap: Image, size: Vector3) => Mesh = r.GenMeshHeightmap //Generate heightmap mesh from image data 
// export const GenMeshCubicmap: (cubicmap: Image, cubeSize: Vector3) => Mesh = r.GenMeshCubicmap //Generate cubes-based map mesh from image data 
// export const MeshBoundingBox: (mesh: Mesh) => BoundingBox = r.MeshBoundingBox //Compute mesh bounding box limits 
// export const MeshTangents: (mesh: Mesh) => void = r.MeshTangents //Compute mesh tangents 
// export const MeshBinormals: (mesh: Mesh) => void = r.MeshBinormals //Compute mesh binormals 
// export const DrawModel: (model: Model, position: Vector3, scale: number, tint: Color) => void = r.DrawModel //Draw a model (with texture if set) 
// export const DrawModelEx: (model: Model, position: Vector3, rotationAxis: Vector3, rotationAngle: number, scale: Vector3, tint: Color) => void = r.DrawModelEx //Draw a model with extended parameters 
// export const DrawModelWires: (model: Model, position: Vector3, scale: number, tint: Color) => void = r.DrawModelWires //Draw a model wires (with texture if set) 
// export const DrawModelWiresEx: (model: Model, position: Vector3, rotationAxis: Vector3, rotationAngle: number, scale: Vector3, tint: Color) => void = r.DrawModelWiresEx //Draw a model wires (with texture if set) with extended parameters 
// export const DrawBoundingBox: (box: BoundingBox, color: Color) => void = r.DrawBoundingBox //Draw bounding box (wires) 
// export const DrawBillboard: (camera: Camera, texture: Texture2D, center: Vector3, size: number, tint: Color) => void = r.DrawBillboard //Draw a billboard texture 
// export const DrawBillboardRec: (camera: Camera, texture: Texture2D, sourceRec: Rectangle, center: Vector3, size: number, tint: Color) => void = r.DrawBillboardRec //Draw a billboard texture defined by sourceRec 
// export const CheckCollisionSpheres: (centerA: Vector3, radiusA: number, centerB: Vector3, radiusB: number) => boolean = r.CheckCollisionSpheres //Detect collision between two spheres 
// export const CheckCollisionBoxes: (box1: BoundingBox, box2: BoundingBox) => boolean = r.CheckCollisionBoxes //Detect collision between two bounding boxes 
// export const CheckCollisionBoxSphere: (box: BoundingBox, centerSphere: Vector3, radiusSphere: number) => boolean = r.CheckCollisionBoxSphere //Detect collision between box and sphere 
// export const CheckCollisionRaySphere: (ray: Ray, spherePosition: Vector3, sphereRadius: number) => boolean = r.CheckCollisionRaySphere //Detect collision between ray and sphere 
// export const CheckCollisionRaySphereEx: (ray: Ray, spherePosition: Vector3, sphereRadius: number, collisionPoint: Vector3) => boolean = r.CheckCollisionRaySphereEx //Detect collision between ray and sphere, returns collision point 
// export const CheckCollisionRayBox: (ray: Ray, box: BoundingBox) => boolean = r.CheckCollisionRayBox //Detect collision between ray and box 
// export const GetCollisionRayModel: (ray: Ray, model: Model) => RayHitInfo = r.GetCollisionRayModel //Get collision info between ray and model 
// export const GetCollisionRayTriangle: (ray: Ray, p1: Vector3, p2: Vector3, p3: Vector3) => RayHitInfo = r.GetCollisionRayTriangle //Get collision info between ray and triangle 
// export const GetCollisionRayGround: (ray: Ray, groundHeight: number) => RayHitInfo = r.GetCollisionRayGround //Get collision info between ray and ground plane (Y-normal plane) 

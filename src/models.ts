import r from "./bindings/raylib"
import { Color } from "./types/colors"
import { Vector3 } from "./types/maths"


export const DrawLine3D: (color: Color) => void = r.DrawLine3D //Draw a line in 3D world space 
export const DrawCircle3D: (color: Color) => void = r.DrawCircle3D //Draw a circle in 3D world space 
export const DrawCube: (color: Color) => void = r.DrawCube //Draw cube 
export const DrawCubeV: (color: Color) => void = r.DrawCubeV //Draw cube (Vector version) 
export const DrawCubeWires: (color: Color) => void = r.DrawCubeWires //Draw cube wires 
export const DrawCubeWiresV: (color: Color) => void = r.DrawCubeWiresV //Draw cube wires (Vector version) 
export const DrawCubeTexture: (color: Color) => void = r.DrawCubeTexture //Draw cube textured 
export const DrawSphere: (color: Color) => void = r.DrawSphere //Draw sphere 
export const DrawSphereEx: (color: Color) => void = r.DrawSphereEx //Draw sphere with extended parameters 
export const DrawSphereWires: (color: Color) => void = r.DrawSphereWires //Draw sphere wires 
export const DrawCylinder: (color: Color) => void = r.DrawCylinder //Draw a cylinder/cone 
export const DrawCylinderWires: (color: Color) => void = r.DrawCylinderWires //Draw a cylinder/cone wires 
export const DrawPlane: (color: Color) => void = r.DrawPlane //Draw a plane XZ 
export const DrawRay: (color: Color) => void = r.DrawRay //Draw a ray line 
export const DrawGrid: (spacing: number) => void = r.DrawGrid //Draw a grid (centered at (0, 0, 0)) 
export const DrawGizmo: (position: Vector3) => void = r.DrawGizmo //Draw simple gizmo 
export const LoadModel: (fileName: string) => Model = r.LoadModel //Load model from files (meshes and materials) 
export const LoadModelFromMesh: (mesh: Mesh) => Model = r.LoadModelFromMesh //Load model from generated mesh (default material) 
export const UnloadModel: (model: Model) => void = r.UnloadModel //Unload model from memory (RAM and/or VRAM) 
export const LoadMeshes: (meshCount: number) => Mesh = r.LoadMeshes //Load meshes from model file 
export const ExportMesh: (fileName: string) => void = r.ExportMesh //Export mesh data to file 
export const UnloadMesh: (mesh: Mesh) => void = r.UnloadMesh //Unload mesh from memory (RAM and/or VRAM) 
export const LoadMaterials: (materialCount: number) => Material = r.LoadMaterials //Load materials from model file 
export const LoadMaterialDefault: () => Material = r.LoadMaterialDefault //Load default material (Supports: DIFFUSE, SPECULAR, NORMAL maps) 
export const UnloadMaterial: (material: Material) => void = r.UnloadMaterial //Unload material from GPU memory (VRAM) 
export const SetMaterialTexture: (texture: Texture2D) => void = r.SetMaterialTexture //Set texture for a material map type (MAP_DIFFUSE, MAP_SPECULAR...) 
export const SetModelMeshMaterial: (materialId: number) => void = r.SetModelMeshMaterial //Set material for a mesh 
export const LoadModelAnimations: (animsCount: number) => ModelAnimation = r.LoadModelAnimations //Load model animations from file 
export const UpdateModelAnimation: (frame: number) => void = r.UpdateModelAnimation //Update model animation pose 
export const UnloadModelAnimation: (anim: ModelAnimation) => void = r.UnloadModelAnimation //Unload animation data 
export const IsModelAnimationValid: (anim: ModelAnimation) => boolean = r.IsModelAnimationValid //Check model animation skeleton match 
export const GenMeshPoly: (radius: number) => Mesh = r.GenMeshPoly //Generate polygonal mesh 
export const GenMeshPlane: (resZ: number) => Mesh = r.GenMeshPlane //Generate plane mesh (with subdivisions) 
export const GenMeshCube: (length: number) => Mesh = r.GenMeshCube //Generate cuboid mesh 
export const GenMeshSphere: (slices: number) => Mesh = r.GenMeshSphere //Generate sphere mesh (standard sphere) 
export const GenMeshHemiSphere: (slices: number) => Mesh = r.GenMeshHemiSphere //Generate half-sphere mesh (no bottom cap) 
export const GenMeshCylinder: (slices: number) => Mesh = r.GenMeshCylinder //Generate cylinder mesh 
export const GenMeshTorus: (sides: number) => Mesh = r.GenMeshTorus //Generate torus mesh 
export const GenMeshKnot: (sides: number) => Mesh = r.GenMeshKnot //Generate trefoil knot mesh 
export const GenMeshHeightmap: (size: Vector3) => Mesh = r.GenMeshHeightmap //Generate heightmap mesh from image data 
export const GenMeshCubicmap: (cubeSize: Vector3) => Mesh = r.GenMeshCubicmap //Generate cubes-based map mesh from image data 
export const MeshBoundingBox: (mesh: Mesh) => BoundingBox = r.MeshBoundingBox //Compute mesh bounding box limits 
export const MeshTangents: (mesh: Mesh) => void = r.MeshTangents //Compute mesh tangents 
export const MeshBinormals: (mesh: Mesh) => void = r.MeshBinormals //Compute mesh binormals 
export const DrawModel: (tint: Color) => void = r.DrawModel //Draw a model (with texture if set) 
export const DrawModelEx: (tint: Color) => void = r.DrawModelEx //Draw a model with extended parameters 
export const DrawModelWires: (tint: Color) => void = r.DrawModelWires //Draw a model wires (with texture if set) 
export const DrawModelWiresEx: (tint: Color) => void = r.DrawModelWiresEx //Draw a model wires (with texture if set) with extended parameters 
export const DrawBoundingBox: (color: Color) => void = r.DrawBoundingBox //Draw bounding box (wires) 
export const DrawBillboard: (tint: Color) => void = r.DrawBillboard //Draw a billboard texture 
export const DrawBillboardRec: (tint: Color) => void = r.DrawBillboardRec //Draw a billboard texture defined by sourceRec 
export const CheckCollisionSpheres: (radiusB: number) => boolean = r.CheckCollisionSpheres //Detect collision between two spheres 
export const CheckCollisionBoxes: (box2: BoundingBox) => boolean = r.CheckCollisionBoxes //Detect collision between two bounding boxes 
export const CheckCollisionBoxSphere: (radiusSphere: number) => boolean = r.CheckCollisionBoxSphere //Detect collision between box and sphere 
export const CheckCollisionRaySphere: (sphereRadius: number) => boolean = r.CheckCollisionRaySphere //Detect collision between ray and sphere 
export const CheckCollisionRaySphereEx: (collisionPoint: Vector3) => boolean = r.CheckCollisionRaySphereEx //Detect collision between ray and sphere, returns collision point 
export const CheckCollisionRayBox: (box: BoundingBox) => boolean = r.CheckCollisionRayBox //Detect collision between ray and box 
export const GetCollisionRayModel: (model: Model) => RayHitInfo = r.GetCollisionRayModel //Get collision info between ray and model 
export const GetCollisionRayTriangle: (p3: Vector3) => RayHitInfo = r.GetCollisionRayTriangle //Get collision info between ray and triangle 
export const GetCollisionRayGround: (groundHeight: number) => RayHitInfo = r.GetCollisionRayGround //Get collision info between ray and ground plane (Y-normal plane) 

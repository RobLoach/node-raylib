import { Color } from "./types/colors";
import { Vector2, Vector3, Ray, RayHitInfo, Rectangle, Matrix, Quaternion } from "./types/maths";
import { Texture2D, Image } from "./types/texture";
import { Shader } from "./shaders";
import { Camera } from "./types/camera";
export interface Mesh {
    vertexCount: number;
    triangleCount: number;
    vertices: number[];
    texcoords: number[];
    texcoords2: number[];
    normals: number[];
    tangents: number[];
    colors: number[];
    indices: number[];
    animVertices: number[];
    animNormals: number[];
    boneIds: number[];
    boneWeights: number[];
    vaoId: number;
    vboId: number[];
}
export interface BoneInfo {
    name: string;
    parent: number;
}
export interface Transform {
    translation: Vector3;
    roation: Quaternion;
    scale: Vector3;
}
export interface Model {
    transform: Matrix;
    meshCount: number;
    meshes: number[];
    materialCount: number;
    materials: Material;
    meshMaterial: number;
    boneCount: number;
    bones: BoneInfo;
    bindPose: Transform;
}
export interface MaterialMaps {
    texture: Texture2D;
    color: Color;
    value: number;
}
export interface Material {
    shader: Shader;
    maps: MaterialMaps[];
    params: number[];
}
export interface ModelAnimation {
    boneCount: number;
    bones: BoneInfo;
    frameCount: number;
    framePoses: Transform;
}
export interface BoundingBox {
    min: Vector3;
    max: Vector3;
}
export default interface Models {
    DrawLine3D: (startPos: Vector3, endPos: Vector3, color: Color) => void;
    DrawCircle3D: (center: Vector3, radius: number, rotationAxis: Vector3, rotationAngle: number, color: Color) => void;
    DrawCube: (position: Vector3, width: number, height: number, length: number, color: Color) => void;
    DrawCubeV: (position: Vector3, size: Vector3, color: Color) => void;
    DrawCubeWires: (position: Vector3, width: number, height: number, length: number, color: Color) => void;
    DrawCubeWiresV: (position: Vector3, size: Vector3, color: Color) => void;
    DrawCubeTexture: (texture: Texture2D, position: Vector3, width: number, height: number, length: number, color: Color) => void;
    DrawSphere: (centerPos: Vector3, radius: number, color: Color) => void;
    DrawSphereEx: (centerPos: Vector3, radius: number, rings: number, slices: number, color: Color) => void;
    DrawSphereWires: (centerPos: Vector3, radius: number, rings: number, slices: number, color: Color) => void;
    DrawCylinder: (position: Vector3, radiusTop: number, radiusBottom: number, height: number, slices: number, color: Color) => void;
    DrawCylinderWires: (position: Vector3, radiusTop: number, radiusBottom: number, height: number, slices: number, color: Color) => void;
    DrawPlane: (centerPos: Vector3, size: Vector2, color: Color) => void;
    DrawRay: (ray: Ray, color: Color) => void;
    DrawGrid: (slices: number, spacing: number) => void;
    DrawGizmo: (position: Vector3) => void;
    LoadModel: (fileName: string) => Model;
    LoadModelFromMesh: (mesh: Mesh) => Model;
    UnloadModel: (model: Model) => void;
    LoadMeshes: (fileName: string, meshCount: number) => Mesh;
    ExportMesh: (mesh: Mesh, fileName: string) => void;
    UnloadMesh: (mesh: Mesh) => void;
    LoadMaterials: (fileName: string, materialCount: number) => Material;
    LoadMaterialDefault: () => Material;
    UnloadMaterial: (material: Material) => void;
    SetMaterialTexture: (material: Material, mapType: number, texture: Texture2D) => void;
    SetModelMeshMaterial: (model: Model, meshId: number, materialId: number) => void;
    LoadModelAnimations: (fileName: string, animsCount: number) => ModelAnimation;
    UpdateModelAnimation: (model: Model, anim: ModelAnimation, frame: number) => void;
    UnloadModelAnimation: (anim: ModelAnimation) => void;
    IsModelAnimationValid: (model: Model, anim: ModelAnimation) => boolean;
    GenMeshPoly: (sides: number, radius: number) => Mesh;
    GenMeshPlane: (width: number, length: number, resX: number, resZ: number) => Mesh;
    GenMeshCube: (width: number, height: number, length: number) => Mesh;
    GenMeshSphere: (radius: number, rings: number, slices: number) => Mesh;
    GenMeshHemiSphere: (radius: number, rings: number, slices: number) => Mesh;
    GenMeshCylinder: (radius: number, height: number, slices: number) => Mesh;
    GenMeshTorus: (radius: number, size: number, radSeg: number, sides: number) => Mesh;
    GenMeshKnot: (radius: number, size: number, radSeg: number, sides: number) => Mesh;
    GenMeshHeightmap: (heightmap: Image, size: Vector3) => Mesh;
    GenMeshCubicmap: (cubicmap: Image, cubeSize: Vector3) => Mesh;
    MeshBoundingBox: (mesh: Mesh) => BoundingBox;
    MeshTangents: (mesh: Mesh) => void;
    MeshBinormals: (mesh: Mesh) => void;
    DrawModel: (model: Model, position: Vector3, scale: number, tint: Color) => void;
    DrawModelEx: (model: Model, position: Vector3, rotationAxis: Vector3, rotationAngle: number, scale: Vector3, tint: Color) => void;
    DrawModelWires: (model: Model, position: Vector3, scale: number, tint: Color) => void;
    DrawModelWiresEx: (model: Model, position: Vector3, rotationAxis: Vector3, rotationAngle: number, scale: Vector3, tint: Color) => void;
    DrawBoundingBox: (box: BoundingBox, color: Color) => void;
    DrawBillboard: (camera: Camera, texture: Texture2D, center: Vector3, size: number, tint: Color) => void;
    DrawBillboardRec: (camera: Camera, texture: Texture2D, sourceRec: Rectangle, center: Vector3, size: number, tint: Color) => void;
    CheckCollisionSpheres: (centerA: Vector3, radiusA: number, centerB: Vector3, radiusB: number) => boolean;
    CheckCollisionBoxes: (box1: BoundingBox, box2: BoundingBox) => boolean;
    CheckCollisionBoxSphere: (box: BoundingBox, centerSphere: Vector3, radiusSphere: number) => boolean;
    CheckCollisionRaySphere: (ray: Ray, spherePosition: Vector3, sphereRadius: number) => boolean;
    CheckCollisionRaySphereEx: (ray: Ray, spherePosition: Vector3, sphereRadius: number, collisionPoint: Vector3) => boolean;
    CheckCollisionRayBox: (ray: Ray, box: BoundingBox) => boolean;
    GetCollisionRayModel: (ray: Ray, model: Model) => RayHitInfo;
    GetCollisionRayTriangle: (ray: Ray, p1: Vector3, p2: Vector3, p3: Vector3) => RayHitInfo;
    GetCollisionRayGround: (ray: Ray, groundHeight: number) => RayHitInfo;
}

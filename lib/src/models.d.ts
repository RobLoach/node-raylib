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
export declare const DrawLine3D: (startPos: Vector3, endPos: Vector3, color: Color) => void;
export declare const DrawCircle3D: (center: Vector3, radius: number, rotationAxis: Vector3, rotationAngle: number, color: Color) => void;
export declare const DrawCube: (position: Vector3, width: number, height: number, length: number, color: Color) => void;
export declare const DrawCubeV: (position: Vector3, size: Vector3, color: Color) => void;
export declare const DrawCubeWires: (position: Vector3, width: number, height: number, length: number, color: Color) => void;
export declare const DrawCubeWiresV: (position: Vector3, size: Vector3, color: Color) => void;
export declare const DrawCubeTexture: (texture: Texture2D, position: Vector3, width: number, height: number, length: number, color: Color) => void;
export declare const DrawSphere: (centerPos: Vector3, radius: number, color: Color) => void;
export declare const DrawSphereEx: (centerPos: Vector3, radius: number, rings: number, slices: number, color: Color) => void;
export declare const DrawSphereWires: (centerPos: Vector3, radius: number, rings: number, slices: number, color: Color) => void;
export declare const DrawCylinder: (position: Vector3, radiusTop: number, radiusBottom: number, height: number, slices: number, color: Color) => void;
export declare const DrawCylinderWires: (position: Vector3, radiusTop: number, radiusBottom: number, height: number, slices: number, color: Color) => void;
export declare const DrawPlane: (centerPos: Vector3, size: Vector2, color: Color) => void;
export declare const DrawRay: (ray: Ray, color: Color) => void;
export declare const DrawGrid: (slices: number, spacing: number) => void;
export declare const DrawGizmo: (position: Vector3) => void;
export declare const LoadModel: (fileName: string) => Model;
export declare const LoadModelFromMesh: (mesh: Mesh) => Model;
export declare const UnloadModel: (model: Model) => void;
export declare const LoadMeshes: (fileName: string, meshCount: number) => Mesh;
export declare const ExportMesh: (mesh: Mesh, fileName: string) => void;
export declare const UnloadMesh: (mesh: Mesh) => void;
export declare const LoadMaterials: (fileName: string, materialCount: number) => Material;
export declare const LoadMaterialDefault: () => Material;
export declare const UnloadMaterial: (material: Material) => void;
export declare const SetMaterialTexture: (material: Material, mapType: number, texture: Texture2D) => void;
export declare const SetModelMeshMaterial: (model: Model, meshId: number, materialId: number) => void;
export declare const LoadModelAnimations: (fileName: string, animsCount: number) => ModelAnimation;
export declare const UpdateModelAnimation: (model: Model, anim: ModelAnimation, frame: number) => void;
export declare const UnloadModelAnimation: (anim: ModelAnimation) => void;
export declare const IsModelAnimationValid: (model: Model, anim: ModelAnimation) => boolean;
export declare const GenMeshPoly: (sides: number, radius: number) => Mesh;
export declare const GenMeshPlane: (width: number, length: number, resX: number, resZ: number) => Mesh;
export declare const GenMeshCube: (width: number, height: number, length: number) => Mesh;
export declare const GenMeshSphere: (radius: number, rings: number, slices: number) => Mesh;
export declare const GenMeshHemiSphere: (radius: number, rings: number, slices: number) => Mesh;
export declare const GenMeshCylinder: (radius: number, height: number, slices: number) => Mesh;
export declare const GenMeshTorus: (radius: number, size: number, radSeg: number, sides: number) => Mesh;
export declare const GenMeshKnot: (radius: number, size: number, radSeg: number, sides: number) => Mesh;
export declare const GenMeshHeightmap: (heightmap: Image, size: Vector3) => Mesh;
export declare const GenMeshCubicmap: (cubicmap: Image, cubeSize: Vector3) => Mesh;
export declare const MeshBoundingBox: (mesh: Mesh) => BoundingBox;
export declare const MeshTangents: (mesh: Mesh) => void;
export declare const MeshBinormals: (mesh: Mesh) => void;
export declare const DrawModel: (model: Model, position: Vector3, scale: number, tint: Color) => void;
export declare const DrawModelEx: (model: Model, position: Vector3, rotationAxis: Vector3, rotationAngle: number, scale: Vector3, tint: Color) => void;
export declare const DrawModelWires: (model: Model, position: Vector3, scale: number, tint: Color) => void;
export declare const DrawModelWiresEx: (model: Model, position: Vector3, rotationAxis: Vector3, rotationAngle: number, scale: Vector3, tint: Color) => void;
export declare const DrawBoundingBox: (box: BoundingBox, color: Color) => void;
export declare const DrawBillboard: (camera: Camera, texture: Texture2D, center: Vector3, size: number, tint: Color) => void;
export declare const DrawBillboardRec: (camera: Camera, texture: Texture2D, sourceRec: Rectangle, center: Vector3, size: number, tint: Color) => void;
export declare const CheckCollisionSpheres: (centerA: Vector3, radiusA: number, centerB: Vector3, radiusB: number) => boolean;
export declare const CheckCollisionBoxes: (box1: BoundingBox, box2: BoundingBox) => boolean;
export declare const CheckCollisionBoxSphere: (box: BoundingBox, centerSphere: Vector3, radiusSphere: number) => boolean;
export declare const CheckCollisionRaySphere: (ray: Ray, spherePosition: Vector3, sphereRadius: number) => boolean;
export declare const CheckCollisionRaySphereEx: (ray: Ray, spherePosition: Vector3, sphereRadius: number, collisionPoint: Vector3) => boolean;
export declare const CheckCollisionRayBox: (ray: Ray, box: BoundingBox) => boolean;
export declare const GetCollisionRayModel: (ray: Ray, model: Model) => RayHitInfo;
export declare const GetCollisionRayTriangle: (ray: Ray, p1: Vector3, p2: Vector3, p3: Vector3) => RayHitInfo;
export declare const GetCollisionRayGround: (ray: Ray, groundHeight: number) => RayHitInfo;

import { Shader } from "./shaders"
import { Vector3, Matrix, Quaternion } from "./maths"
import { Color } from "./colors"
import { Texture2D } from "./texture"

export interface Mesh {
    vertexCount: number
    triangleCount: number

    vertices: number[]
    texcoords: number[]
    texcoords2: number[]
    normals: number[]
    tangents: number[]
    colors: number[]
    indices: number[]

    animVertices: number[]
    animNormals: number[]
    boneIds: number[]
    boneWeights: number[]
    vaoId: number
    vboId: number[]
}

export interface BoneInfo {
  name: string
  parent: number
}

export interface Transform {
  translation: Vector3
  roation: Quaternion
  scale: Vector3
}

export interface Model {
  transform: Matrix       
  meshCount: number          
  meshes: number[]
  materialCount: number      
  materials: Material
  meshMaterial: number      

  boneCount: number
  bones: BoneInfo
  bindPose: Transform
}

export interface MaterialMaps {
  texture: Texture2D
  color: Color
  value: number
}

export interface Material {
  shader: Shader
  maps: MaterialMaps[]
  params: number[]
}

export interface ModelAnimation {
  boneCount: number
  bones: BoneInfo
  frameCount: number
  framePoses: Transform
}

export interface BoundingBox {
  min: Vector3
  max: Vector3
}
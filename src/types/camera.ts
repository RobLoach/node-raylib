import r from "../bindings/raylib"
import { Vector2, Vector3 } from "./maths"
import { CameraType } from "./enums"

export class Camera3D {
  position: Vector3
  target: Vector3
  up: Vector3
  fovy: number
  type: CameraType

  constructor(pos?: Vector3, trg?: Vector3, up?:Vector3, fovy?: number, type?: CameraType) {
    this.position = pos || new Vector3(0, 0, 0)
    this.target = trg || new Vector3(0, 0, 0)
    this.up = up || new Vector3(0, 0, 0)
    this.fovy = fovy || 0
    this.type = type || CameraType.CAMERA_PERSPECTIVE
  }
}

export class Camera2D {
  offset: Vector2
  target: Vector2
  rotation: number
  zoom: number

  constructor(offset?: Vector3, trg?: Vector3, rotation?: number, zoom?: number) {
    this.offset = offset || new Vector3(0, 0, 0)
    this.target = trg || new Vector3(0, 0, 0)
    this.rotation = rotation || 0
    this.zoom = zoom || 0
  }
}

export type Camera = Camera3D

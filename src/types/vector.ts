import r from "../bindings/raylib"

export class Vector2 {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x || 0
    this.y = y || 0
  }
}

export class Vector3 {
  x: number
  y: number
  z: number

  constructor(x?: number, y?: number, z?: number) {
    this.x = x || 0
    this.y = y || 0
    this.z = z || 0
  }
}

export class Vector4 {
  x: number
  y: number
  z: number
  w: number

  constructor(x?: number, y?: number, z?: number, w?: number) {
    this.x = x || 0
    this.y = y || 0
    this.z = z || 0
    this.w = w || 0
  }
}

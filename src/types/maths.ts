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

export class Rectangle {
  x: number
  y: number
  width: number
  height: number

  constructor(x?: number, y?: number, width?: number, height?: number) {
    this.x = x || 0
    this.y = y || 0
    this.width = width || 0
    this.height = height || 0
  }
}

export class NPatchInfo {
  sourceRect: Rectangle
  left: number
  top: number
  right: number
  bottom: number
  type: number // once again this should prob be an enum

  constructor(rect: Rectangle, type: number, l?: number, t?: number, r?: number, b?: number) {
    this.sourceRect = rect
    this.type = type
    this.left = l
    this.top = t
    this.right = r
    this.bottom = b
  }
}

export class Ray {
  position: Vector3
  direction: Vector3

  constructor(pos?: Vector3, dir?: Vector3) {
    this.position = pos || new Vector3(0, 0, 0)
    this.direction = dir || new Vector3(0, 0, 0)
  }
}

export class RayHitInfo {
  hit: boolean
  distance: number
  position: Vector3
  normal: Vector3

  constructor(hit?: boolean, distance?: number, position?: Vector3, normal?: Vector3) {
    this.hit = hit
    this.distance = distance
    this.position = position
    this.normal = normal
  }
}

export interface Matrix {
  m0: number, m4: number, m8: number,  m12: number, 
  m1: number, m5: number, m9: number,  m13: number, 
  m2: number, m6: number, m10: number, m14: number, 
  m3: number, m7: number, m11: number, m15: number
}

export type Quaternion = Vector4
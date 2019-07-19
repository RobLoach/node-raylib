export declare class Vector2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
export declare class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
}
export declare class Vector4 {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(x?: number, y?: number, z?: number, w?: number);
}
export declare class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
}
export declare class NPatchInfo {
    sourceRect: Rectangle;
    left: number;
    top: number;
    right: number;
    bottom: number;
    type: number;
    constructor(rect: Rectangle, type: number, l?: number, t?: number, r?: number, b?: number);
}
export declare class Ray {
    position: Vector3;
    direction: Vector3;
    constructor(pos?: Vector3, dir?: Vector3);
}
export declare class RayHitInfo {
    hit: boolean;
    distance: number;
    position: Vector3;
    normal: Vector3;
    constructor(hit?: boolean, distance?: number, position?: Vector3, normal?: Vector3);
}
export interface Matrix {
    m0: number;
    m4: number;
    m8: number;
    m12: number;
    m1: number;
    m5: number;
    m9: number;
    m13: number;
    m2: number;
    m6: number;
    m10: number;
    m14: number;
    m3: number;
    m7: number;
    m11: number;
    m15: number;
}

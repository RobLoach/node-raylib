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

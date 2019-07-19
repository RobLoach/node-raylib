import { Vector2, Vector3 } from "./maths";
export declare class Camera3D {
    position: Vector3;
    target: Vector3;
    up: Vector3;
    fovy: number;
    type: number;
    constructor(pos?: Vector3, trg?: Vector3, up?: Vector3, fovy?: number, type?: number);
}
export declare type Camera = Camera3D;
export declare class Camera2D {
    offset: Vector2;
    target: Vector2;
    rotation: number;
    zoom: number;
    constructor(offset?: Vector3, trg?: Vector3, rotation?: number, zoom?: number);
}

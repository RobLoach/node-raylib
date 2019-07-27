import { Vector2, Vector3 } from "./maths";
import { CameraType } from "./enums";
export declare class Camera3D {
    position: Vector3;
    target: Vector3;
    up: Vector3;
    fovy: number;
    type: CameraType;
    constructor(pos?: Vector3, trg?: Vector3, up?: Vector3, fovy?: number, type?: CameraType);
}
export declare class Camera2D {
    offset: Vector2;
    target: Vector2;
    rotation: number;
    zoom: number;
    constructor(offset?: Vector3, trg?: Vector3, rotation?: number, zoom?: number);
}

import { Camera } from "./types/camera";
export default interface Misc {
    UpdateCameraWrap: (camera: Camera) => void;
}
/**
 * UpdateCamera is wrapped to allow object reference.
 *
 * @see UpdateCameraWrap()
 */
export declare function UpdateCamera(camera: Camera): void;

import r from "./bindings/raylib"
import { Camera } from "./types/camera"

/**
 * UpdateCamera is wrapped to allow object reference.
 *
 * @see UpdateCameraWrap()
 */
export function UpdateCamera(camera: Camera): void {
  const newCamera = r.UpdateCameraWrap(camera)
  if (newCamera) {
    camera.position = newCamera.position
    camera.target = newCamera.target
    camera.up = newCamera.up
    camera.fovy = newCamera.fovy
    camera.type = newCamera.type
  }
}
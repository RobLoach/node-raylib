"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var raylib_1 = require("./bindings/raylib");
/**
 * UpdateCamera is wrapped to allow object reference.
 *
 * @see UpdateCameraWrap()
 */
function UpdateCamera(camera) {
    var newCamera = raylib_1.default.UpdateCameraWrap(camera);
    if (newCamera) {
        camera.position = newCamera.position;
        camera.target = newCamera.target;
        camera.up = newCamera.up;
        camera.fovy = newCamera.fovy;
        camera.type = newCamera.type;
    }
}
exports.UpdateCamera = UpdateCamera;

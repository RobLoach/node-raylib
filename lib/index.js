"use strict";
/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var raylib_1 = require("./src/bindings/raylib");
var colors = require("./src/types/colors");
var camera = require("./src/types/camera");
var maths = require("./src/types/maths");
var enums = require("./src/types/enums");
var misc = require("./src/types/misc");
var texture = require("./src/types/texture");
var raylib = __assign({}, raylib_1.default, { 
    // wrapper fixes
    /**
     * UpdateCamera is wrapped to allow object reference.
     *
     * @see UpdateCameraWrap()
     */
    UpdateCamera: function (camera) {
        var newCamera = raylib_1.default.UpdateCameraWrap(camera);
        if (newCamera) {
            camera.position = newCamera.position;
            camera.target = newCamera.target;
            camera.up = newCamera.up;
            camera.fovy = newCamera.fovy;
            camera.type = newCamera.type;
        }
    } }, colors, camera, enums, maths, misc, texture, { 
    // aliases
    Camera: camera.Camera3D });
module.exports = raylib;

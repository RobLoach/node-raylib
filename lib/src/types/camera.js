"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maths_1 = require("./maths");
var Camera3D = /** @class */ (function () {
    function Camera3D(pos, trg, up, fovy, type) {
        this.position = pos || new maths_1.Vector3(0, 0, 0);
        this.target = trg || new maths_1.Vector3(0, 0, 0);
        this.up = up || new maths_1.Vector3(0, 0, 0);
        this.fovy = fovy || 0;
        this.type = type || 0;
    }
    return Camera3D;
}());
exports.Camera3D = Camera3D;
var Camera2D = /** @class */ (function () {
    function Camera2D(offset, trg, rotation, zoom) {
        this.offset = offset || new maths_1.Vector3(0, 0, 0);
        this.target = trg || new maths_1.Vector3(0, 0, 0);
        this.rotation = rotation || 0;
        this.zoom = zoom || 0;
    }
    return Camera2D;
}());
exports.Camera2D = Camera2D;

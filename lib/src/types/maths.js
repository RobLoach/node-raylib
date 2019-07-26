"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    return Vector2;
}());
exports.Vector2 = Vector2;
var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }
    return Vector3;
}());
exports.Vector3 = Vector3;
var Vector4 = /** @class */ (function () {
    function Vector4(x, y, z, w) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = w || 0;
    }
    return Vector4;
}());
exports.Vector4 = Vector4;
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, width, height) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 0;
        this.height = height || 0;
    }
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var NPatchInfo = /** @class */ (function () {
    function NPatchInfo(rect, type, l, t, r, b) {
        this.sourceRect = rect;
        this.type = type;
        this.left = l;
        this.top = t;
        this.right = r;
        this.bottom = b;
    }
    return NPatchInfo;
}());
exports.NPatchInfo = NPatchInfo;
var Ray = /** @class */ (function () {
    function Ray(pos, dir) {
        this.position = pos || new Vector3(0, 0, 0);
        this.direction = dir || new Vector3(0, 0, 0);
    }
    return Ray;
}());
exports.Ray = Ray;
var RayHitInfo = /** @class */ (function () {
    function RayHitInfo(hit, distance, position, normal) {
        this.hit = hit;
        this.distance = distance;
        this.position = position;
        this.normal = normal;
    }
    return RayHitInfo;
}());
exports.RayHitInfo = RayHitInfo;

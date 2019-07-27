"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Find the bindings.
// put in this single file for instancing glitches
var r = require('bindings')('node-raylib');
var PI = 3.14159265358979323846;
r.PI = PI;
r.MAX_TOUCH_POINTS = 10;
r.MAX_SHADER_LOCATIONS = 32;
r.MAX_MATERIAL_MAPS = 12;
r.DEG2RAD = (PI / 180.0);
r.RAD2DEG = (180.0 / PI);
exports.default = r;

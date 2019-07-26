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
var colors = require("./src/types/colors");
var camera = require("./src/types/camera");
var maths = require("./src/types/maths");
var enums = require("./src/types/enums");
var misc = require("./src/types/misc");
var texture = require("./src/types/texture");
var core = require("./src/core");
var shapes = require("./src/shapes");
var textures = require("./src/textures");
var text = require("./src/text");
var models = require("./src/models");
var shaders = require("./src/shaders");
var audio = require("./src/audio");
var PI = 3.14159265358979323846;
var raylib = __assign({ PI: PI, MAX_TOUCH_POINTS: 10, MAX_SHADER_LOCATIONS: 32, MAX_MATERIAL_MAPS: 12, DEG2RAD: (PI / 180.0), RAD2DEG: (180.0 / PI) }, colors, camera, maths, misc, texture, enums, core, shapes, textures, text, models, shaders, audio, { 
    // aliases
    Camera: camera.Camera3D });
module.exports = raylib;

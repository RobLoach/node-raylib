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
var models = require("./src/types/models");
var audio = require("./src/types/audio");
var shaders = require("./src/types/shaders");
var enums = require("./src/types/enums");
var misc = require("./src/types/misc");
var texture = require("./src/types/texture");
var wrappers = require("./src/wrappers");
var raylib = __assign({}, raylib_1.default, wrappers, colors, camera, audio, enums, maths, misc, texture, models, shaders);
module.exports = raylib;

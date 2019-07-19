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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const enums = require('./src/enums')
// Inject the enums.
// for (var enumName in enums) {
//   raylib[enumName] = enums[enumName]
// }
var raylib_1 = __importDefault(require("./src/bindings/raylib"));
exports.r = raylib_1.default;
var colors = __importStar(require("./src/types/colors"));
var camera = __importStar(require("./src/types/camera"));
var maths = __importStar(require("./src/types/maths"));
var enums = __importStar(require("./src/types/enums"));
var misc = __importStar(require("./src/types/misc"));
var texture = __importStar(require("./src/types/texture"));
var core = __importStar(require("./src/core"));
var shapes = __importStar(require("./src/shapes"));
var textures = __importStar(require("./src/textures"));
var text = __importStar(require("./src/text"));
var models = __importStar(require("./src/models"));
var shaders = __importStar(require("./src/shaders"));
var audio = __importStar(require("./src/audio"));
var PI = 3.14159265358979323846;
var raylib = __assign({ PI: PI, MAX_TOUCH_POINTS: 10, MAX_SHADER_LOCATIONS: 32, MAX_MATERIAL_MAPS: 12, DEG2RAD: (PI / 180.0), RAD2DEG: (180.0 / PI) }, colors, camera, maths, misc, texture, enums, core, shapes, textures, text, models, shaders, audio);
exports.default = raylib;

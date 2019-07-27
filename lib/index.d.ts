/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */
import Core from "./src/core";
import Audio from "./src/audio";
import Shapes from "./src/shapes";
import Textures from "./src/textures";
import Text from "./src/text";
import Models from "./src/models";
import Shaders from "./src/shaders";
interface Raylib extends Core, Audio, Shapes, Textures, Text, Models, Shaders {
    PI: number;
    MAX_TOUCH_POINTS: number;
    MAX_SHADER_LOCATIONS: number;
    MAX_MATERIAL_MAPS: number;
    DEG2RAD: number;
    RAD2DEG: number;
    UpdateCameraWrap: string;
}
declare const raylib: Raylib;
export = raylib;

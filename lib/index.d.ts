/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */
interface Raylib {
    Core: any;
    Audio: any;
    PI: number;
    MAX_TOUCH_POINTS: number;
    MAX_SHADER_LOCATIONS: number;
    MAX_MATERIAL_MAPS: number;
    DEG2RAD: number;
    RAD2DEG: number;
}
declare const raylib: Raylib;
export = raylib;

/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */
import r from "./src/bindings/raylib";
import * as colors from "./src/colors";
declare const raylib: {
    DrawText: (msg: string, x: number, y: number, fontsize: number, color: colors.Color) => void;
    InitWindow: (width: number, height: number, title: string) => void;
    WindowShouldClose: () => boolean;
    SetTargetFPS: (fps: number) => void;
    BeginDrawing: () => void;
    EndDrawing: () => void;
    ClearBackground: (color: colors.Color) => void;
    Color: typeof colors.Color;
    LIGHTGRAY: colors.Color;
    GRAY: colors.Color;
    DARKGRAY: colors.Color;
    YELLOW: colors.Color;
    GOLD: colors.Color;
    ORANGE: colors.Color;
    PINK: colors.Color;
    RED: colors.Color;
    MAROON: colors.Color;
    GREEN: colors.Color;
    LIME: colors.Color;
    DARKGREEN: colors.Color;
    SKYBLUE: colors.Color;
    BLUE: colors.Color;
    DARKBLUE: colors.Color;
    PURPLE: colors.Color;
    VIOLET: colors.Color;
    DARKPURPLE: colors.Color;
    BEIGE: colors.Color;
    BROWN: colors.Color;
    DARKBROWN: colors.Color;
    WHITE: colors.Color;
    BLACK: colors.Color;
    BLANK: colors.Color;
    MAGENTA: colors.Color;
    RAYWHITE: colors.Color;
    PI: number;
    MAX_TOUCH_POINTS: number;
    MAX_SHADER_LOCATIONS: number;
    MAX_MATERIAL_MAPS: number;
    DEG2RAD: number;
    RAD2DEG: number;
};
export default raylib;
export { r };

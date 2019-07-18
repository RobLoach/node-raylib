/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */
declare const r: any;
declare namespace raylib {
    const PI = 3.141592653589793;
    const MAX_TOUCH_POINTS = 10;
    const MAX_SHADER_LOCATIONS = 32;
    const MAX_MATERIAL_MAPS = 12;
    const DEG2RAD: number;
    const RAD2DEG: number;
    class Color {
        r: number;
        g: number;
        b: number;
        a: number;
        constructor(red: number, green: number, blue: number, alpha: number);
    }
    const LIGHTGRAY: Color;
    const GRAY: Color;
    const DARKGRAY: Color;
    const YELLOW: Color;
    const GOLD: Color;
    const ORANGE: Color;
    const PINK: Color;
    const RED: Color;
    const MAROON: Color;
    const GREEN: Color;
    const LIME: Color;
    const DARKGREEN: Color;
    const SKYBLUE: Color;
    const BLUE: Color;
    const DARKBLUE: Color;
    const PURPLE: Color;
    const VIOLET: Color;
    const DARKPURPLE: Color;
    const BEIGE: Color;
    const BROWN: Color;
    const DARKBROWN: Color;
    const WHITE: Color;
    const BLACK: Color;
    const BLANK: Color;
    const MAGENTA: Color;
    const RAYWHITE: Color;
    const BeginDrawing: () => void;
    const EndDrawing: () => void;
    const ClearBackground: (color: Color) => void;
    const DrawText: (msg: string, x: number, y: number, fontsize: number, color: Color) => void;
}
export default raylib;
export { r };

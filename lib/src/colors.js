"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color = /** @class */ (function () {
    function Color(red, green, blue, alpha) {
        this.r = red,
            this.g = green,
            this.b = blue,
            this.a = alpha;
    }
    return Color;
}());
exports.Color = Color;
exports.LIGHTGRAY = new Color(200, 200, 200, 255); // Light Gray
exports.GRAY = new Color(130, 130, 130, 255); // Gray
exports.DARKGRAY = new Color(80, 80, 80, 255); // Dark Gray
exports.YELLOW = new Color(253, 249, 0, 255); // Yellow
exports.GOLD = new Color(255, 203, 0, 255); // Gold
exports.ORANGE = new Color(255, 161, 0, 255); // Orange
exports.PINK = new Color(255, 109, 194, 255); // Pink
exports.RED = new Color(230, 41, 55, 255); // Red
exports.MAROON = new Color(190, 33, 55, 255); // Maroon
exports.GREEN = new Color(0, 228, 48, 255); // Green
exports.LIME = new Color(0, 158, 47, 255); // Lime
exports.DARKGREEN = new Color(0, 117, 44, 255); // Dark Green
exports.SKYBLUE = new Color(102, 191, 255, 255); // Sky Blue
exports.BLUE = new Color(0, 121, 241, 255); // Blue
exports.DARKBLUE = new Color(0, 82, 172, 255); // Dark Blue
exports.PURPLE = new Color(200, 122, 255, 255); // Purple
exports.VIOLET = new Color(135, 60, 190, 255); // Violet
exports.DARKPURPLE = new Color(112, 31, 126, 255); // Dark Purple
exports.BEIGE = new Color(211, 176, 131, 255); // Beige
exports.BROWN = new Color(127, 106, 79, 255); // Brown
exports.DARKBROWN = new Color(76, 63, 47, 255); // Dark Brown
exports.WHITE = new Color(255, 255, 255, 255); // White
exports.BLACK = new Color(0, 0, 0, 255); // Black
exports.BLANK = new Color(0, 0, 0, 0); // Blank (Transparent)
exports.MAGENTA = new Color(255, 0, 255, 255); // Magenta
exports.RAYWHITE = new Color(245, 245, 245, 255); // My own White (raylib logo)

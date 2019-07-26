export class Color {
  r: number
  g: number
  b: number
  a: number

  constructor(red: number, green: number, blue: number, alpha: number) {
    this.r = red,
    this.g = green,
    this.b = blue,
    this.a = alpha
  }
}

export const LIGHTGRAY  = new Color(200, 200, 200, 255 )   // Light Gray
export const GRAY       = new Color(130, 130, 130, 255 )   // Gray
export const DARKGRAY   = new Color(80, 80, 80, 255 )      // Dark Gray
export const YELLOW     = new Color(253, 249, 0, 255 )     // Yellow
export const GOLD       = new Color(255, 203, 0, 255 )     // Gold
export const ORANGE     = new Color(255, 161, 0, 255 )     // Orange
export const PINK       = new Color(255, 109, 194, 255 )   // Pink
export const RED        = new Color(230, 41, 55, 255 )     // Red
export const MAROON     = new Color(190, 33, 55, 255 )     // Maroon
export const GREEN      = new Color(0, 228, 48, 255 )      // Green
export const LIME       = new Color(0, 158, 47, 255 )      // Lime
export const DARKGREEN  = new Color(0, 117, 44, 255 )      // Dark Green
export const SKYBLUE    = new Color(102, 191, 255, 255 )   // Sky Blue
export const BLUE       = new Color(0, 121, 241, 255 )     // Blue
export const DARKBLUE   = new Color(0, 82, 172, 255 )      // Dark Blue
export const PURPLE     = new Color(200, 122, 255, 255 )   // Purple
export const VIOLET     = new Color(135, 60, 190, 255 )    // Violet
export const DARKPURPLE = new Color(112, 31, 126, 255 )    // Dark Purple
export const BEIGE      = new Color(211, 176, 131, 255 )   // Beige
export const BROWN      = new Color(127, 106, 79, 255 )    // Brown
export const DARKBROWN  = new Color(76, 63, 47, 255 )      // Dark Brown
export const WHITE      = new Color(255, 255, 255, 255 )   // White
export const BLACK      = new Color(0, 0, 0, 255 )         // Black
export const BLANK      = new Color(0, 0, 0, 0 )           // Blank (Transparent)
export const MAGENTA    = new Color(255, 0, 255, 255 )     // Magenta
export const RAYWHITE   = new Color(245, 245, 245, 255 )   // My own White (raylib logo)

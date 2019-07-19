import r from "./bindings/raylib"
import { Color } from "./colors"


export const DrawPixel: (color: Color) => void = r.DrawPixel //Draw a pixel 
export const DrawPixelV: (color: Color) => void = r.DrawPixelV //Draw a pixel (Vector version) 
export const DrawLine: (color: Color) => void = r.DrawLine //Draw a line 
export const DrawLineV: (color: Color) => void = r.DrawLineV //Draw a line (Vector version) 
export const DrawLineEx: (color: Color) => void = r.DrawLineEx //Draw a line defining thickness 
export const DrawLineBezier: (color: Color) => void = r.DrawLineBezier //Draw a line using cubic-bezier curves in-out 
export const DrawLineStrip: (color: Color) => void = r.DrawLineStrip //Draw lines sequence 
export const DrawCircle: (color: Color) => void = r.DrawCircle //Draw a color-filled circle 
export const DrawCircleSector: (color: Color) => void = r.DrawCircleSector //Draw a piece of a circle 
export const DrawCircleSectorLines: (color: Color) => void = r.DrawCircleSectorLines //Draw circle sector outline 
export const DrawCircleGradient: (color2: Color) => void = r.DrawCircleGradient //Draw a gradient-filled circle 
export const DrawCircleV: (color: Color) => void = r.DrawCircleV //Draw a color-filled circle (Vector version) 
export const DrawCircleLines: (color: Color) => void = r.DrawCircleLines //Draw circle outline 
export const DrawRing: (color: Color) => void = r.DrawRing //Draw ring 
export const DrawRingLines: (color: Color) => void = r.DrawRingLines //Draw ring outline 
export const DrawRectangle: (color: Color) => void = r.DrawRectangle //Draw a color-filled rectangle 
export const DrawRectangleV: (color: Color) => void = r.DrawRectangleV //Draw a color-filled rectangle (Vector version) 
export const DrawRectangleRec: (color: Color) => void = r.DrawRectangleRec //Draw a color-filled rectangle 
export const DrawRectanglePro: (color: Color) => void = r.DrawRectanglePro //Draw a color-filled rectangle with pro parameters 
export const DrawRectangleGradientV: (color2: Color) => void = r.DrawRectangleGradientV //Draw a vertical-gradient-filled rectangle 
export const DrawRectangleGradientH: (color2: Color) => void = r.DrawRectangleGradientH //Draw a horizontal-gradient-filled rectangle 
export const DrawRectangleGradientEx: (col4: Color) => void = r.DrawRectangleGradientEx //Draw a gradient-filled rectangle with custom vertex colors 
export const DrawRectangleLines: (color: Color) => void = r.DrawRectangleLines //Draw rectangle outline 
export const DrawRectangleLinesEx: (color: Color) => void = r.DrawRectangleLinesEx //Draw rectangle outline with extended parameters 
export const DrawRectangleRounded: (color: Color) => void = r.DrawRectangleRounded //Draw rectangle with rounded edges 
export const DrawRectangleRoundedLines: (color: Color) => void = r.DrawRectangleRoundedLines //Draw rectangle with rounded edges outline 
export const DrawTriangle: (color: Color) => void = r.DrawTriangle //Draw a color-filled triangle 
export const DrawTriangleLines: (color: Color) => void = r.DrawTriangleLines //Draw triangle outline 
export const DrawTriangleFan: (color: Color) => void = r.DrawTriangleFan //Draw a triangle fan defined by points 
export const DrawPoly: (color: Color) => void = r.DrawPoly //Draw a regular polygon (Vector version) 
export const SetShapesTexture: (source: Rectangle) => void = r.SetShapesTexture //Define default texture used to draw shapes 
export const CheckCollisionRecs: (rec2: Rectangle) => boolean = r.CheckCollisionRecs //Check collision between two rectangles 
export const CheckCollisionCircles: (radius2: number) => boolean = r.CheckCollisionCircles //Check collision between two circles 
export const CheckCollisionCircleRec: (rec: Rectangle) => boolean = r.CheckCollisionCircleRec //Check collision between circle and rectangle 
export const GetCollisionRec: (rec2: Rectangle) => Rectangle = r.GetCollisionRec //Get collision rectangle for two rectangles collision 
export const CheckCollisionPointRec: (rec: Rectangle) => boolean = r.CheckCollisionPointRec //Check if point is inside rectangle 
export const CheckCollisionPointCircle: (radius: number) => boolean = r.CheckCollisionPointCircle //Check if point is inside circle 
export const CheckCollisionPointTriangle: (p3: Vector2) => boolean = r.CheckCollisionPointTriangle //Check if point is inside a triangle 

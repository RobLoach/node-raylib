import r from "./bindings/raylib"
import { Color } from "./types/colors"
import { Vector2 } from "./types/maths"


export const DrawPixel: (posX: number, posY: number, color: Color) => void = r.DrawPixel //Draw a pixel 
export const DrawPixelV: (position: Vector2, color: Color) => void = r.DrawPixelV //Draw a pixel (Vector version) 
export const DrawLine: (startPosX: number, startPosY: number, endPosX: number, endPosY: number, color: Color) => void = r.DrawLine //Draw a line 
export const DrawLineV: (startPos: Vector2, endPos: Vector2, color: Color) => void = r.DrawLineV //Draw a line (Vector version) 
export const DrawLineEx: (startPos: Vector2, endPos: Vector2, thick: number, color: Color) => void = r.DrawLineEx //Draw a line defining thickness 
export const DrawLineBezier: (startPos: Vector2, endPos: Vector2, thick: number, color: Color) => void = r.DrawLineBezier //Draw a line using cubic-bezier curves in-out 
export const DrawLineStrip: (points: Vector2, numPoints: number, color: Color) => void = r.DrawLineStrip //Draw lines sequence 
export const DrawCircle: (centerX: number, centerY: number, radius: number, color: Color) => void = r.DrawCircle //Draw a color-filled circle 
export const DrawCircleSector: (center: Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: Color) => void = r.DrawCircleSector //Draw a piece of a circle 
export const DrawCircleSectorLines: (center: Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: Color) => void = r.DrawCircleSectorLines //Draw circle sector outline 
export const DrawCircleGradient: (centerX: number, centerY: number, radius: number, color1: Color, color2: Color) => void = r.DrawCircleGradient //Draw a gradient-filled circle 
export const DrawCircleV: (center: Vector2, radius: number, color: Color) => void = r.DrawCircleV //Draw a color-filled circle (Vector version) 
export const DrawCircleLines: (centerX: number, centerY: number, radius: number, color: Color) => void = r.DrawCircleLines //Draw circle outline 
export const DrawRing: (center: Vector2, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: Color) => void = r.DrawRing //Draw ring 
export const DrawRingLines: (center: Vector2, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: Color) => void = r.DrawRingLines //Draw ring outline 
export const DrawRectangle: (posX: number, posY: number, width: number, height: number, color: Color) => void = r.DrawRectangle //Draw a color-filled rectangle 
export const DrawRectangleV: (position: Vector2, size: Vector2, color: Color) => void = r.DrawRectangleV //Draw a color-filled rectangle (Vector version) 
export const DrawRectangleRec: (rec: Rectangle, color: Color) => void = r.DrawRectangleRec //Draw a color-filled rectangle 
export const DrawRectanglePro: (rec: Rectangle, origin: Vector2, rotation: number, color: Color) => void = r.DrawRectanglePro //Draw a color-filled rectangle with pro parameters 
export const DrawRectangleGradientV: (posX: number, posY: number, width: number, height: number, color1: Color, color2: Color) => void = r.DrawRectangleGradientV //Draw a vertical-gradient-filled rectangle 
export const DrawRectangleGradientH: (posX: number, posY: number, width: number, height: number, color1: Color, color2: Color) => void = r.DrawRectangleGradientH //Draw a horizontal-gradient-filled rectangle 
export const DrawRectangleGradientEx: (rec: Rectangle, col1: Color, col2: Color, col3: Color, col4: Color) => void = r.DrawRectangleGradientEx //Draw a gradient-filled rectangle with custom vertex colors 
export const DrawRectangleLines: (posX: number, posY: number, width: number, height: number, color: Color) => void = r.DrawRectangleLines //Draw rectangle outline 
export const DrawRectangleLinesEx: (rec: Rectangle, lineThick: number, color: Color) => void = r.DrawRectangleLinesEx //Draw rectangle outline with extended parameters 
export const DrawRectangleRounded: (rec: Rectangle, roundness: number, segments: number, color: Color) => void = r.DrawRectangleRounded //Draw rectangle with rounded edges 
export const DrawRectangleRoundedLines: (rec: Rectangle, roundness: number, segments: number, lineThick: number, color: Color) => void = r.DrawRectangleRoundedLines //Draw rectangle with rounded edges outline 
export const DrawTriangle: (v1: Vector2, v2: Vector2, v3: Vector2, color: Color) => void = r.DrawTriangle //Draw a color-filled triangle 
export const DrawTriangleLines: (v1: Vector2, v2: Vector2, v3: Vector2, color: Color) => void = r.DrawTriangleLines //Draw triangle outline 
export const DrawTriangleFan: (points: Vector2, numPoints: number, color: Color) => void = r.DrawTriangleFan //Draw a triangle fan defined by points 
export const DrawPoly: (center: Vector2, sides: number, radius: number, rotation: number, color: Color) => void = r.DrawPoly //Draw a regular polygon (Vector version) 
export const SetShapesTexture: (texture: Texture2D, source: Rectangle) => void = r.SetShapesTexture //Define default texture used to draw shapes 
export const CheckCollisionRecs: (rec1: Rectangle, rec2: Rectangle) => boolean = r.CheckCollisionRecs //Check collision between two rectangles 
export const CheckCollisionCircles: (center1: Vector2, radius1: number, center2: Vector2, radius2: number) => boolean = r.CheckCollisionCircles //Check collision between two circles 
export const CheckCollisionCircleRec: (center: Vector2, radius: number, rec: Rectangle) => boolean = r.CheckCollisionCircleRec //Check collision between circle and rectangle 
export const GetCollisionRec: (rec1: Rectangle, rec2: Rectangle) => Rectangle = r.GetCollisionRec //Get collision rectangle for two rectangles collision 
export const CheckCollisionPointRec: (point: Vector2, rec: Rectangle) => boolean = r.CheckCollisionPointRec //Check if point is inside rectangle 
export const CheckCollisionPointCircle: (point: Vector2, center: Vector2, radius: number) => boolean = r.CheckCollisionPointCircle //Check if point is inside circle 
export const CheckCollisionPointTriangle: (point: Vector2, p1: Vector2, p2: Vector2, p3: Vector2) => boolean = r.CheckCollisionPointTriangle //Check if point is inside a triangle 

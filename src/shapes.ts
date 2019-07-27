import { Color } from "./types/colors"
import { Vector2, Rectangle } from "./types/maths"
import { Texture2D } from "./types/texture"


export default interface Shapes {
  DrawPixel: (posX: number, posY: number, color: Color) => void //Draw a pixel 
  DrawPixelV: (position: Vector2, color: Color) => void //Draw a pixel (Vector version) 
  DrawLine: (startPosX: number, startPosY: number, endPosX: number, endPosY: number, color: Color) => void //Draw a line 
  DrawLineV: (startPos: Vector2, endPos: Vector2, color: Color) => void //Draw a line (Vector version) 
  DrawLineEx: (startPos: Vector2, endPos: Vector2, thick: number, color: Color) => void //Draw a line defining thickness 
  DrawLineBezier: (startPos: Vector2, endPos: Vector2, thick: number, color: Color) => void //Draw a line using cubic-bezier curves in-out 
  DrawLineStrip: (points: Vector2, numPoints: number, color: Color) => void //Draw lines sequence 
  DrawCircle: (centerX: number, centerY: number, radius: number, color: Color) => void //Draw a color-filled circle 
  DrawCircleSector: (center: Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: Color) => void //Draw a piece of a circle 
  DrawCircleSectorLines: (center: Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: Color) => void //Draw circle sector outline 
  DrawCircleGradient: (centerX: number, centerY: number, radius: number, color1: Color, color2: Color) => void //Draw a gradient-filled circle 
  DrawCircleV: (center: Vector2, radius: number, color: Color) => void //Draw a color-filled circle (Vector version) 
  DrawCircleLines: (centerX: number, centerY: number, radius: number, color: Color) => void //Draw circle outline 
  DrawRing: (center: Vector2, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: Color) => void //Draw ring 
  DrawRingLines: (center: Vector2, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: Color) => void //Draw ring outline 
  DrawRectangle: (posX: number, posY: number, width: number, height: number, color: Color) => void //Draw a color-filled rectangle 
  DrawRectangleV: (position: Vector2, size: Vector2, color: Color) => void //Draw a color-filled rectangle (Vector version) 
  DrawRectangleRec: (rec: Rectangle, color: Color) => void //Draw a color-filled rectangle 
  DrawRectanglePro: (rec: Rectangle, origin: Vector2, rotation: number, color: Color) => void //Draw a color-filled rectangle with pro parameters 
  DrawRectangleGradientV: (posX: number, posY: number, width: number, height: number, color1: Color, color2: Color) => void //Draw a vertical-gradient-filled rectangle 
  DrawRectangleGradientH: (posX: number, posY: number, width: number, height: number, color1: Color, color2: Color) => void //Draw a horizontal-gradient-filled rectangle 
  DrawRectangleGradientEx: (rec: Rectangle, col1: Color, col2: Color, col3: Color, col4: Color) => void //Draw a gradient-filled rectangle with custom vertex colors 
  DrawRectangleLines: (posX: number, posY: number, width: number, height: number, color: Color) => void //Draw rectangle outline 
  DrawRectangleLinesEx: (rec: Rectangle, lineThick: number, color: Color) => void //Draw rectangle outline with extended parameters 
  DrawRectangleRounded: (rec: Rectangle, roundness: number, segments: number, color: Color) => void //Draw rectangle with rounded edges 
  DrawRectangleRoundedLines: (rec: Rectangle, roundness: number, segments: number, lineThick: number, color: Color) => void //Draw rectangle with rounded edges outline 
  DrawTriangle: (v1: Vector2, v2: Vector2, v3: Vector2, color: Color) => void //Draw a color-filled triangle 
  DrawTriangleLines: (v1: Vector2, v2: Vector2, v3: Vector2, color: Color) => void //Draw triangle outline 
  DrawTriangleFan: (points: Vector2, numPoints: number, color: Color) => void //Draw a triangle fan defined by points 
  DrawPoly: (center: Vector2, sides: number, radius: number, rotation: number, color: Color) => void //Draw a regular polygon (Vector version) 
  SetShapesTexture: (texture: Texture2D, source: Rectangle) => void //Define default texture used to draw shapes 
  CheckCollisionRecs: (rec1: Rectangle, rec2: Rectangle) => boolean //Check collision between two rectangles 
  CheckCollisionCircles: (center1: Vector2, radius1: number, center2: Vector2, radius2: number) => boolean //Check collision between two circles 
  CheckCollisionCircleRec: (center: Vector2, radius: number, rec: Rectangle) => boolean //Check collision between circle and rectangle 
  GetCollisionRec: (rec1: Rectangle, rec2: Rectangle) => Rectangle //Get collision rectangle for two rectangles collision 
  CheckCollisionPointRec: (point: Vector2, rec: Rectangle) => boolean //Check if point is inside rectangle 
  CheckCollisionPointCircle: (point: Vector2, center: Vector2, radius: number) => boolean //Check if point is inside circle 
  CheckCollisionPointTriangle: (point: Vector2, p1: Vector2, p2: Vector2, p3: Vector2) => boolean //Check if point is inside a triangle 
}


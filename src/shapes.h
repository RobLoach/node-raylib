#ifndef NODE_RAYLIB_SHAPES_H
#define NODE_RAYLIB_SHAPES_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

void node_raylib_init_shapes(Napi::Env& env, Napi::Object& exports) {
  AddFunction(env, exports, "DrawPixel", DrawPixel);
  AddFunction(env, exports, "DrawPixelV", DrawPixelV);
  AddFunction(env, exports, "DrawLine", DrawLine);
  AddFunction(env, exports, "DrawLineV", DrawLineV);
  //RLAPI void DrawLineEx(Vector2 startPos, Vector2 endPos, float thick, Color color);                       // Draw a line defining thickness
  //RLAPI void DrawLineBezier(Vector2 startPos, Vector2 endPos, float thick, Color color);                   // Draw a line using cubic-bezier curves in-out
  AddFunction(env, exports, "DrawCircle", DrawCircle);
  AddFunction(env, exports, "DrawCircleSector", DrawCircleSector);
  AddFunction(env, exports, "DrawCircleSectorLines", DrawCircleSector);
  AddFunction(env, exports, "DrawCircleGradient", DrawCircleGradient);
  AddFunction(env, exports, "DrawCircleV", DrawCircleV);
  AddFunction(env, exports, "DrawCircleLines", DrawCircleLines);
  AddFunction(env, exports, "DrawRing", DrawRectangle);
  AddFunction(env, exports, "DrawRingLines", DrawRingLines);
  AddFunction(env, exports, "DrawRectangle", DrawRectangle);
  AddFunction(env, exports, "DrawRectangleV", DrawRectangleV);
  AddFunction(env, exports, "DrawRectangleRec", DrawRectangleRec);
  //RLAPI void DrawRectanglePro(Rectangle rec, Vector2 origin, float rotation, Color color);                 // Draw a color-filled rectangle with pro parameters
  //RLAPI void DrawRectangleGradientV(int posX, int posY, int width, int height, Color color1, Color color2);// Draw a vertical-gradient-filled rectangle
  //RLAPI void DrawRectangleGradientH(int posX, int posY, int width, int height, Color color1, Color color2);// Draw a horizontal-gradient-filled rectangle
  //RLAPI void DrawRectangleGradientEx(Rectangle rec, Color col1, Color col2, Color col3, Color col4);       // Draw a gradient-filled rectangle with custom vertex colors
  AddFunction(env, exports, "DrawRectangleLines", DrawRectangleLines);
  AddFunction(env, exports, "DrawRectangleLinesEx", DrawRectangleLinesEx);
  AddFunction(env, exports, "DrawTriangle", DrawTriangle);
  AddFunction(env, exports, "DrawTriangleLines", DrawTriangleLines);
  AddFunction(env, exports, "DrawPoly", DrawPoly);
  //RLAPI void DrawPolyEx(Vector2 *points, int numPoints, Color color);                                      // Draw a closed polygon defined by points
  //RLAPI void DrawPolyExLines(Vector2 *points, int numPoints, Color color);                                 // Draw polygon lines

  AddFunction(env, exports, "SetShapesTexture", SetShapesTexture);                                       // Define default texture used to draw shapes

  // Basic shapes collision detection functions
  AddFunction(env, exports, "CheckCollisionRecs", CheckCollisionRecs);
  AddFunction(env, exports, "CheckCollisionCircles", CheckCollisionCircles);
  AddFunction(env, exports, "CheckCollisionCircleRec", CheckCollisionCircleRec);
  AddFunction(env, exports, "GetCollisionRec", GetCollisionRec);
  AddFunction(env, exports, "CheckCollisionPointRec", CheckCollisionPointRec);
  AddFunction(env, exports, "CheckCollisionPointCircle", CheckCollisionPointCircle);
  AddFunction(env, exports, "CheckCollisionPointTriangle", CheckCollisionPointTriangle);
}

#endif

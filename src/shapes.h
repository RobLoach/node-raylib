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
  //RLAPI void DrawRectangleLinesEx(Rectangle rec, int lineThick, Color color);                              // Draw rectangle outline with extended parameters
  AddFunction(env, exports, "DrawTriangle", DrawTriangle);
  AddFunction(env, exports, "DrawTriangleLines", DrawTriangleLines);
  //RLAPI void DrawPoly(Vector2 center, int sides, float radius, float rotation, Color color);               // Draw a regular polygon (Vector version)
  //RLAPI void DrawPolyEx(Vector2 *points, int numPoints, Color color);                                      // Draw a closed polygon defined by points
  //RLAPI void DrawPolyExLines(Vector2 *points, int numPoints, Color color);                                 // Draw polygon lines

  //RLAPI void SetShapesTexture(Texture2D texture, Rectangle source);                                        // Define default texture used to draw shapes

  // Basic shapes collision detection functions
  AddFunction(env, exports, "CheckCollisionRecs", CheckCollisionRecs);
  //RLAPI bool CheckCollisionCircles(Vector2 center1, float radius1, Vector2 center2, float radius2);        // Check collision between two circles
  //RLAPI bool CheckCollisionCircleRec(Vector2 center, float radius, Rectangle rec);                         // Check collision between circle and rectangle
  //RLAPI Rectangle GetCollisionRec(Rectangle rec1, Rectangle rec2);                                         // Get collision rectangle for two rectangles collision
  //RLAPI bool CheckCollisionPointRec(Vector2 point, Rectangle rec);                                         // Check if point is inside rectangle
  //RLAPI bool CheckCollisionPointCircle(Vector2 point, Vector2 center, float radius);                       // Check if point is inside circle
  //RLAPI bool CheckCollisionPointTriangle(Vector2 point, Vector2 p1, Vector2 p2, Vector2 p3);               // Check if point is inside a triangle
}

#endif

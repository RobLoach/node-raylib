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
  AddFunction(env, exports, "DrawLineEx", DrawLineEx);
  AddFunction(env, exports, "DrawLineBezier", DrawLineBezier);
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
  AddFunction(env, exports, "DrawRectanglePro", DrawRectanglePro);
  AddFunction(env, exports, "DrawRectangleGradientV", DrawRectangleGradientV);
  AddFunction(env, exports, "DrawRectangleGradientH", DrawRectangleGradientH);
  AddFunction(env, exports, "DrawRectangleGradientEx", DrawRectangleGradientEx);
  AddFunction(env, exports, "DrawRectangleLines", DrawRectangleLines);
  AddFunction(env, exports, "DrawRectangleLinesEx", DrawRectangleLinesEx);
  AddFunction(env, exports, "DrawRectangleRounded", DrawRectangleRounded);
  AddFunction(env, exports, "DrawRectangleRoundedLines", DrawRectangleRoundedLines);
  AddFunction(env, exports, "DrawTriangle", DrawTriangle);
  AddFunction(env, exports, "DrawTriangleLines", DrawTriangleLines);
  AddFunction(env, exports, "DrawPoly", DrawPoly);

  AddFunction(env, exports, "SetShapesTexture", SetShapesTexture);

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

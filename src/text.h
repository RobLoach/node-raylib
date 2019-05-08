#ifndef NODE_RAYLIB_TEXT_H
#define NODE_RAYLIB_TEXT_H

#include <string>
#include <napi.h>
#include <raylib.h>
#include "lib/index.h"

Napi::Value TextFormat_binding(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (info.Length() < 2) {
    std::string output("Invalid number of arguments. Expected >= 2");
    Napi::TypeError::New(env, output).ThrowAsJavaScriptException();
    return env.Null();
  }

  std::string out;

  // TODO: Make the parameter detection dynamic.
  std::string arg0 = info[0].As<Napi::String>().Utf8Value();
  if (info.Length() == 2) {
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    out = TextFormat(arg0.c_str(), arg1);
  }
  if (info.Length() == 3) {
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    int arg2 = info[2].As<Napi::Number>().Int32Value();
    out = TextFormat(arg0.c_str(), arg1, arg2);
  }
  if (info.Length() == 4) {
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    int arg2 = info[2].As<Napi::Number>().Int32Value();
    int arg3 = info[3].As<Napi::Number>().Int32Value();
    out = TextFormat(arg0.c_str(), arg1, arg2, arg3);
  }
  if (info.Length() == 5) {
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    int arg2 = info[2].As<Napi::Number>().Int32Value();
    int arg3 = info[3].As<Napi::Number>().Int32Value();
    int arg4 = info[2].As<Napi::Number>().Int32Value();
    out = TextFormat(arg0.c_str(), arg1, arg2, arg3, arg4);
  }
  return Napi::String::New(env, out);
}

void node_raylib_init_text(Napi::Env& env, Napi::Object& exports) {
  exports.Set(Napi::String::New(env, "TextFormat"), Napi::Function::New(env, TextFormat_binding));
  exports.Set(Napi::String::New(env, "FormatText"), Napi::Function::New(env, TextFormat_binding));
  AddFunction(env, exports, "DrawText", DrawText);
  AddFunction(env, exports, "DrawFPS", DrawFPS);

  AddFunction(env, exports, "MeasureText", MeasureText);

  // // Text strings management functions
  AddFunction(env, exports, "TextIsEqual", TextIsEqual);
  AddFunction(env, exports, "TextLength", TextLength);
  AddFunction(env, exports, "TextToUpper", TextToUpper);
  AddFunction(env, exports, "TextToLower", TextToLower);
  AddFunction(env, exports, "TextToPascal", TextToPascal);
  AddFunction(env, exports, "TextToInteger", TextToInteger);

  // NOTE: Some strings allocate memory internally for returned strings, just be careful!
  // RLAPI const char *TextFormat(const char *text, ...);                                        // Text formatting with variables (sprintf style)
  // RLAPI const char *TextSubtext(const char *text, int position, int length);                  // Get a piece of a text string
  // RLAPI const char *TextReplace(char *text, const char *replace, const char *by);             // Replace text string (memory should be freed!)
  // RLAPI const char *TextInsert(const char *text, const char *insert, int position);           // Insert text in a position (memory should be freed!)
  // RLAPI const char *TextJoin(const char **textList, int count, const char *delimiter);        // Join text strings with delimiter
  // RLAPI const char **TextSplit(const char *text, char delimiter, int *count);                 // Split text into multiple strings
  // RLAPI void TextAppend(char *text, const char *append, int *position);                       // Append text at specific position and move cursor!
  // RLAPI int TextFindIndex(const char *text, const char *find);                                // Find first text occurrence within a string

  // TODO: Add remaining text functions.

  // RLAPI Font GetFontDefault(void);                                                            // Get the default Font
  // RLAPI Font LoadFont(const char *fileName);                                                  // Load font from file into GPU memory (VRAM)
  // RLAPI Font LoadFontEx(const char *fileName, int fontSize, int *fontChars, int charsCount);  // Load font from file with extended parameters
  // RLAPI Font LoadFontFromImage(Image image, Color key, int firstChar);                        // Load font from Image (XNA style)
  // RLAPI CharInfo *LoadFontData(const char *fileName, int fontSize, int *fontChars, int charsCount, int type); // Load font data for further use
  // RLAPI Image GenImageFontAtlas(CharInfo *chars, int charsCount, int fontSize, int padding, int packMethod);  // Generate image font atlas using chars info
  // RLAPI void UnloadFont(Font font);                                                           // Unload Font from GPU memory (VRAM)

  // // Text drawing functions
  // RLAPI void DrawTextEx(Font font, const char *text, Vector2 position, float fontSize, float spacing, Color tint);                // Draw text using font and additional parameters
  // RLAPI void DrawTextRec(Font font, const char *text, Rectangle rec, float fontSize, float spacing, bool wordWrap, Color tint);   // Draw text using font inside rectangle limits
  // RLAPI void DrawTextRecEx(Font font, const char *text, Rectangle rec, float fontSize, float spacing, bool wordWrap, Color tint,
  //                          int selectStart, int selectLength, Color selectText, Color selectBack);    // Draw text using font inside rectangle limits with support for text selection

  // // Text misc. functions
  // RLAPI Vector2 MeasureTextEx(Font font, const char *text, float fontSize, float spacing);    // Measure string size for Font
  // RLAPI int GetGlyphIndex(Font font, int character);                                          // Get index position for a unicode character on font

}

#endif

import { Color } from "./types/colors"
import { Vector2, Rectangle } from "./types/maths"
import { Font, Image, CharInfo } from "./types/texture"

export default interface Text {
  GetFontDefault: () => Font //Get the default Font 
  LoadFont: (fileName: string) => Font //Load font from file into GPU memory (VRAM) 
  LoadFontEx: (fileName: string, fontSize: number, fontChars: number, charsCount: number) => Font //Load font from file with extended parameters 
  LoadFontFromImage: (image: Image, key: Color, firstChar: number) => Font //Load font from Image (XNA style) 
  LoadFontData: (fileName: string, fontSize: number, fontChars: number, charsCount: number, type: number) => CharInfo //Load font data for further use 
  GenImageFontAtlas: (chars: CharInfo, charsCount: number, fontSize: number, padding: number, packMethod: number) => Image //Generate image font atlas using chars info 
  UnloadFont: (font: Font) => void //Unload Font from GPU memory (VRAM) 
  DrawFPS: (posX: number, posY: number) => void //Shows current FPS 
  DrawText: (text: string, posX: number, posY: number, fontSize: number, color: Color) => void //Draw text (using default font) 
  DrawTextEx: (font: Font, text: string, position: Vector2, fontSize: number, spacing: number, tint: Color) => void //Draw text using font and additional parameters 
  DrawTextRec: (font: Font, text: string, rec: Rectangle, fontSize: number, spacing: number, wordWrap: boolean, tint: Color) => void //Draw text using font inside rectangle limits 
  DrawTextRecEx: (font: Font, text: string, rec: Rectangle, fontSize: number, spacing: number, wordWrap: boolean, tint: Color, selectStart: number, selectLength: number, selectText: Color, selectBack: Color) => void //Draw text using font inside rectangle limits with support for text selection 
  MeasureText: (text: string, fontSize: number) => number //Measure string width for default font 
  MeasureTextEx: (font: Font, text: string, fontSize: number, spacing: number) => Vector2 //Measure string size for Font 
  GetGlyphIndex: (font: Font, character: number) => number //Get index position for a unicode character on font 
  TextIsEqual: (text1: string, text2: string) => boolean //Check if two text string are equal 
  TextLength: (text: string) => number //Get text length, checks for '\0' ending 
  TextFormat: (text: string, ...args: any) => string //Text formatting with variables (sprintf style) 
  TextSubtext: (text: string, position: number, length: number) => string //Get a piece of a text string 
  TextReplace: (text: string, replace: string, by: string) => string //Replace text string (memory should be freed!) 
  TextInsert: (text: string, insert: string, position: number) => string //Insert text in a position (memory should be freed!) 
  TextJoin: (textList: string, count: number, delimiter: string) => string //Join text strings with delimiter 
  TextSplit: (text: string, delimiter: string, count: number) => string //Split text into multiple strings 
  TextAppend: (text: string, append: string, position: number) => void //Append text at specific position and move cursor! 
  TextFindIndex: (text: string, find: string) => number //Find first text occurrence within a string 
  TextToUpper: (text: string) => string //Get upper case version of provided string 
  TextToLower: (text: string) => string //Get lower case version of provided string 
  TextToPascal: (text: string) => string //Get Pascal case notation version of provided string 
  TextToInteger: (text: string) => number //Get integer value from text (negative values not supported) 
}

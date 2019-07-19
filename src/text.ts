import r from "./bindings/raylib"
import { Color } from "./types/colors"
import { Vector2 } from "./types/maths"

export const GetFontDefault: () => Font = r.GetFontDefault //Get the default Font 
export const LoadFont: (fileName: string) => Font = r.LoadFont //Load font from file into GPU memory (VRAM) 
export const LoadFontEx: (fileName: string, fontSize: number, fontChars: number, charsCount: number) => Font = r.LoadFontEx //Load font from file with extended parameters 
export const LoadFontFromImage: (image: Image, key: Color, firstChar: number) => Font = r.LoadFontFromImage //Load font from Image (XNA style) 
export const LoadFontData: (fileName: string, fontSize: number, fontChars: number, charsCount: number, type: number) => CharInfo = r.LoadFontData //Load font data for further use 
export const GenImageFontAtlas: (chars: CharInfo, charsCount: number, fontSize: number, padding: number, packMethod: number) => Image = r.GenImageFontAtlas //Generate image font atlas using chars info 
export const UnloadFont: (font: Font) => void = r.UnloadFont //Unload Font from GPU memory (VRAM) 
export const DrawFPS: (posX: number, posY: number) => void = r.DrawFPS //Shows current FPS 
export const DrawText: (text: string, posX: number, posY: number, fontSize: number, color: Color) => void = r.DrawText //Draw text (using default font) 
export const DrawTextEx: (font: Font, text: string, position: Vector2, fontSize: number, spacing: number, tint: Color) => void = r.DrawTextEx //Draw text using font and additional parameters 
export const DrawTextRec: (font: Font, text: string, rec: Rectangle, fontSize: number, spacing: number, wordWrap: boolean, tint: Color) => void = r.DrawTextRec //Draw text using font inside rectangle limits 
export const DrawTextRecEx: (font: Font, text: string, rec: Rectangle, fontSize: number, spacing: number, wordWrap: boolean, tint: Color, selectStart: number, selectLength: number, selectText: Color, selectBack: Color) => void = r.DrawTextRecEx //Draw text using font inside rectangle limits with support for text selection 
export const MeasureText: (text: string, fontSize: number) => number = r.MeasureText //Measure string width for default font 
export const MeasureTextEx: (font: Font, text: string, fontSize: number, spacing: number) => Vector2 = r.MeasureTextEx //Measure string size for Font 
export const GetGlyphIndex: (font: Font, character: number) => number = r.GetGlyphIndex //Get index position for a unicode character on font 
export const TextIsEqual: (text1: string, text2: string) => boolean = r.TextIsEqual //Check if two text string are equal 
export const TextLength: (text: string) => number = r.TextLength //Get text length, checks for '\0' ending 
export const TextFormat: (text: string, ...: any) => string = r.TextFormat //Text formatting with variables (sprintf style) 
export const TextSubtext: (text: string, position: number, length: number) => string = r.TextSubtext //Get a piece of a text string 
export const TextReplace: (text: string, replace: string, by: string) => string = r.TextReplace //Replace text string (memory should be freed!) 
export const TextInsert: (text: string, insert: string, position: number) => string = r.TextInsert //Insert text in a position (memory should be freed!) 
export const TextJoin: (textList: const char *, count: number, delimiter: string) => string = r.TextJoin //Join text strings with delimiter 
export const TextSplit: (text: string, delimiter: string, count: number) => const char * = r.TextSplit //Split text into multiple strings 
export const TextAppend: (text: string, append: string, position: number) => void = r.TextAppend //Append text at specific position and move cursor! 
export const TextFindIndex: (text: string, find: string) => number = r.TextFindIndex //Find first text occurrence within a string 
export const TextToUpper: (text: string) => string = r.TextToUpper //Get upper case version of provided string 
export const TextToLower: (text: string) => string = r.TextToLower //Get lower case version of provided string 
export const TextToPascal: (text: string) => string = r.TextToPascal //Get Pascal case notation version of provided string 
export const TextToInteger: (text: string) => number = r.TextToInteger //Get integer value from text (negative values not supported) 

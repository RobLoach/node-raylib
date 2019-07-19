import r from "./bindings/raylib"


export const GetFontDefault: () => Font = r.GetFontDefault //Get the default Font 
export const LoadFont: (fileName: string) => Font = r.LoadFont //Load font from file into GPU memory (VRAM) 
export const LoadFontEx: (charsCount: number) => Font = r.LoadFontEx //Load font from file with extended parameters 
export const LoadFontFromImage: (firstChar: number) => Font = r.LoadFontFromImage //Load font from Image (XNA style) 
export const LoadFontData: (type: number) => CharInfo = r.LoadFontData //Load font data for further use 
export const GenImageFontAtlas: (packMethod: number) => Image = r.GenImageFontAtlas //Generate image font atlas using chars info 
export const UnloadFont: (font: Font) => void = r.UnloadFont //Unload Font from GPU memory (VRAM) 
export const DrawFPS: (posY: number) => void = r.DrawFPS //Shows current FPS 
export const DrawText: (color: Color) => void = r.DrawText //Draw text (using default font) 
export const DrawTextEx: (tint: Color) => void = r.DrawTextEx //Draw text using font and additional parameters 
export const DrawTextRec: (tint: Color) => void = r.DrawTextRec //Draw text using font inside rectangle limits 
export const DrawTextRecEx: (selectBack: Color) => void = r.DrawTextRecEx //Draw text using font inside rectangle limits with support for text selection 
export const MeasureText: (fontSize: number) => number = r.MeasureText //Measure string width for default font 
export const MeasureTextEx: (spacing: number) => Vector2 = r.MeasureTextEx //Measure string size for Font 
export const GetGlyphIndex: (character: number) => number = r.GetGlyphIndex //Get index position for a unicode character on font 
export const TextIsEqual: (text2: string) => boolean = r.TextIsEqual //Check if two text string are equal 
export const TextLength: (text: string) => number = r.TextLength //Get text length, checks for '\0' ending 
export const TextFormat: (...: any) => string = r.TextFormat //Text formatting with variables (sprintf style) 
export const TextSubtext: (length: number) => string = r.TextSubtext //Get a piece of a text string 
export const TextReplace: (by: string) => string = r.TextReplace //Replace text string (memory should be freed!) 
export const TextInsert: (position: number) => string = r.TextInsert //Insert text in a position (memory should be freed!) 
export const TextJoin: (delimiter: string) => string = r.TextJoin //Join text strings with delimiter 
export const TextSplit: (count: number) => string = r.TextSplit //Split text into multiple strings 
export const TextAppend: (position: number) => void = r.TextAppend //Append text at specific position and move cursor! 
export const TextFindIndex: (find: string) => number = r.TextFindIndex //Find first text occurrence within a string 
export const TextToUpper: (text: string) => string = r.TextToUpper //Get upper case version of provided string 
export const TextToLower: (text: string) => string = r.TextToLower //Get lower case version of provided string 
export const TextToPascal: (text: string) => string = r.TextToPascal //Get Pascal case notation version of provided string 
export const TextToInteger: (text: string) => number = r.TextToInteger //Get integer value from text (negative values not supported) 

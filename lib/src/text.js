"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var raylib_1 = __importDefault(require("./bindings/raylib"));
//TODO: most of the type declarations here are wrong idk why just fix them
exports.GetFontDefault = raylib_1.default.GetFontDefault; //Get the default Font 
exports.LoadFont = raylib_1.default.LoadFont; //Load font from file into GPU memory (VRAM) 
exports.LoadFontEx = raylib_1.default.LoadFontEx; //Load font from file with extended parameters 
exports.LoadFontFromImage = raylib_1.default.LoadFontFromImage; //Load font from Image (XNA style) 
exports.LoadFontData = raylib_1.default.LoadFontData; //Load font data for further use 
exports.GenImageFontAtlas = raylib_1.default.GenImageFontAtlas; //Generate image font atlas using chars info 
exports.UnloadFont = raylib_1.default.UnloadFont; //Unload Font from GPU memory (VRAM) 
exports.DrawFPS = raylib_1.default.DrawFPS; //Shows current FPS 
exports.DrawText = raylib_1.default.DrawText; //Draw text (using default font) 
exports.DrawTextEx = raylib_1.default.DrawTextEx; //Draw text using font and additional parameters 
exports.DrawTextRec = raylib_1.default.DrawTextRec; //Draw text using font inside rectangle limits 
exports.DrawTextRecEx = raylib_1.default.DrawTextRecEx; //Draw text using font inside rectangle limits with support for text selection 
exports.MeasureText = raylib_1.default.MeasureText; //Measure string width for default font 
exports.MeasureTextEx = raylib_1.default.MeasureTextEx; //Measure string size for Font 
exports.GetGlyphIndex = raylib_1.default.GetGlyphIndex; //Get index position for a unicode character on font 
exports.TextIsEqual = raylib_1.default.TextIsEqual; //Check if two text string are equal 
exports.TextLength = raylib_1.default.TextLength; //Get text length, checks for '\0' ending 
exports.TextFormat = raylib_1.default.TextFormat; //Text formatting with variables (sprintf style) 
exports.TextSubtext = raylib_1.default.TextSubtext; //Get a piece of a text string 
exports.TextReplace = raylib_1.default.TextReplace; //Replace text string (memory should be freed!) 
exports.TextInsert = raylib_1.default.TextInsert; //Insert text in a position (memory should be freed!) 
exports.TextJoin = raylib_1.default.TextJoin; //Join text strings with delimiter 
exports.TextSplit = raylib_1.default.TextSplit; //Split text into multiple strings 
exports.TextAppend = raylib_1.default.TextAppend; //Append text at specific position and move cursor! 
exports.TextFindIndex = raylib_1.default.TextFindIndex; //Find first text occurrence within a string 
exports.TextToUpper = raylib_1.default.TextToUpper; //Get upper case version of provided string 
exports.TextToLower = raylib_1.default.TextToLower; //Get lower case version of provided string 
exports.TextToPascal = raylib_1.default.TextToPascal; //Get Pascal case notation version of provided string 
exports.TextToInteger = raylib_1.default.TextToInteger; //Get integer value from text (negative values not supported) 

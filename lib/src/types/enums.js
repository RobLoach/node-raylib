"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigFlag;
(function (ConfigFlag) {
    ConfigFlag[ConfigFlag["FLAG_SHOW_LOGO"] = 1] = "FLAG_SHOW_LOGO";
    ConfigFlag[ConfigFlag["FLAG_FULLSCREEN_MODE"] = 2] = "FLAG_FULLSCREEN_MODE";
    ConfigFlag[ConfigFlag["FLAG_WINDOW_RESIZABLE"] = 4] = "FLAG_WINDOW_RESIZABLE";
    ConfigFlag[ConfigFlag["FLAG_WINDOW_UNDECORATED"] = 8] = "FLAG_WINDOW_UNDECORATED";
    ConfigFlag[ConfigFlag["FLAG_WINDOW_TRANSPARENT"] = 16] = "FLAG_WINDOW_TRANSPARENT";
    ConfigFlag[ConfigFlag["FLAG_WINDOW_HIDDEN"] = 128] = "FLAG_WINDOW_HIDDEN";
    ConfigFlag[ConfigFlag["FLAG_MSAA_4X_HINT"] = 32] = "FLAG_MSAA_4X_HINT";
    ConfigFlag[ConfigFlag["FLAG_VSYNC_HINT"] = 64] = "FLAG_VSYNC_HINT";
})(ConfigFlag = exports.ConfigFlag || (exports.ConfigFlag = {}));
var TraceLogType;
(function (TraceLogType) {
    TraceLogType[TraceLogType["LOG_ALL"] = 0] = "LOG_ALL";
    TraceLogType[TraceLogType["LOG_TRACE"] = 1] = "LOG_TRACE";
    TraceLogType[TraceLogType["LOG_DEBUG"] = 2] = "LOG_DEBUG";
    TraceLogType[TraceLogType["LOG_INFO"] = 3] = "LOG_INFO";
    TraceLogType[TraceLogType["LOG_WARNING"] = 4] = "LOG_WARNING";
    TraceLogType[TraceLogType["LOG_ERROR"] = 5] = "LOG_ERROR";
    TraceLogType[TraceLogType["LOG_FATAL"] = 6] = "LOG_FATAL";
    TraceLogType[TraceLogType["LOG_NONE"] = 7] = "LOG_NONE";
})(TraceLogType = exports.TraceLogType || (exports.TraceLogType = {}));
var KeyboardKey;
(function (KeyboardKey) {
    KeyboardKey[KeyboardKey["KEY_APOSTROPHE"] = 39] = "KEY_APOSTROPHE";
    KeyboardKey[KeyboardKey["KEY_COMMA"] = 44] = "KEY_COMMA";
    KeyboardKey[KeyboardKey["KEY_MINUS"] = 45] = "KEY_MINUS";
    KeyboardKey[KeyboardKey["KEY_PERIOD"] = 46] = "KEY_PERIOD";
    KeyboardKey[KeyboardKey["KEY_SLASH"] = 47] = "KEY_SLASH";
    KeyboardKey[KeyboardKey["KEY_ZERO"] = 48] = "KEY_ZERO";
    KeyboardKey[KeyboardKey["KEY_ONE"] = 49] = "KEY_ONE";
    KeyboardKey[KeyboardKey["KEY_TWO"] = 50] = "KEY_TWO";
    KeyboardKey[KeyboardKey["KEY_THREE"] = 51] = "KEY_THREE";
    KeyboardKey[KeyboardKey["KEY_FOUR"] = 52] = "KEY_FOUR";
    KeyboardKey[KeyboardKey["KEY_FIVE"] = 53] = "KEY_FIVE";
    KeyboardKey[KeyboardKey["KEY_SIX"] = 54] = "KEY_SIX";
    KeyboardKey[KeyboardKey["KEY_SEVEN"] = 55] = "KEY_SEVEN";
    KeyboardKey[KeyboardKey["KEY_EIGHT"] = 56] = "KEY_EIGHT";
    KeyboardKey[KeyboardKey["KEY_NINE"] = 57] = "KEY_NINE";
    KeyboardKey[KeyboardKey["KEY_SEMICOLON"] = 59] = "KEY_SEMICOLON";
    KeyboardKey[KeyboardKey["KEY_EQUAL"] = 61] = "KEY_EQUAL";
    KeyboardKey[KeyboardKey["KEY_A"] = 65] = "KEY_A";
    KeyboardKey[KeyboardKey["KEY_B"] = 66] = "KEY_B";
    KeyboardKey[KeyboardKey["KEY_C"] = 67] = "KEY_C";
    KeyboardKey[KeyboardKey["KEY_D"] = 68] = "KEY_D";
    KeyboardKey[KeyboardKey["KEY_E"] = 69] = "KEY_E";
    KeyboardKey[KeyboardKey["KEY_F"] = 70] = "KEY_F";
    KeyboardKey[KeyboardKey["KEY_G"] = 71] = "KEY_G";
    KeyboardKey[KeyboardKey["KEY_H"] = 72] = "KEY_H";
    KeyboardKey[KeyboardKey["KEY_I"] = 73] = "KEY_I";
    KeyboardKey[KeyboardKey["KEY_J"] = 74] = "KEY_J";
    KeyboardKey[KeyboardKey["KEY_K"] = 75] = "KEY_K";
    KeyboardKey[KeyboardKey["KEY_L"] = 76] = "KEY_L";
    KeyboardKey[KeyboardKey["KEY_M"] = 77] = "KEY_M";
    KeyboardKey[KeyboardKey["KEY_N"] = 78] = "KEY_N";
    KeyboardKey[KeyboardKey["KEY_O"] = 79] = "KEY_O";
    KeyboardKey[KeyboardKey["KEY_P"] = 80] = "KEY_P";
    KeyboardKey[KeyboardKey["KEY_Q"] = 81] = "KEY_Q";
    KeyboardKey[KeyboardKey["KEY_R"] = 82] = "KEY_R";
    KeyboardKey[KeyboardKey["KEY_S"] = 83] = "KEY_S";
    KeyboardKey[KeyboardKey["KEY_T"] = 84] = "KEY_T";
    KeyboardKey[KeyboardKey["KEY_U"] = 85] = "KEY_U";
    KeyboardKey[KeyboardKey["KEY_V"] = 86] = "KEY_V";
    KeyboardKey[KeyboardKey["KEY_W"] = 87] = "KEY_W";
    KeyboardKey[KeyboardKey["KEY_X"] = 88] = "KEY_X";
    KeyboardKey[KeyboardKey["KEY_Y"] = 89] = "KEY_Y";
    KeyboardKey[KeyboardKey["KEY_Z"] = 90] = "KEY_Z";
    KeyboardKey[KeyboardKey["KEY_SPACE"] = 32] = "KEY_SPACE";
    KeyboardKey[KeyboardKey["KEY_ESCAPE"] = 256] = "KEY_ESCAPE";
    KeyboardKey[KeyboardKey["KEY_ENTER"] = 257] = "KEY_ENTER";
    KeyboardKey[KeyboardKey["KEY_TAB"] = 258] = "KEY_TAB";
    KeyboardKey[KeyboardKey["KEY_BACKSPACE"] = 259] = "KEY_BACKSPACE";
    KeyboardKey[KeyboardKey["KEY_INSERT"] = 260] = "KEY_INSERT";
    KeyboardKey[KeyboardKey["KEY_DELETE"] = 261] = "KEY_DELETE";
    KeyboardKey[KeyboardKey["KEY_RIGHT"] = 262] = "KEY_RIGHT";
    KeyboardKey[KeyboardKey["KEY_LEFT"] = 263] = "KEY_LEFT";
    KeyboardKey[KeyboardKey["KEY_DOWN"] = 264] = "KEY_DOWN";
    KeyboardKey[KeyboardKey["KEY_UP"] = 265] = "KEY_UP";
    KeyboardKey[KeyboardKey["KEY_PAGE_UP"] = 266] = "KEY_PAGE_UP";
    KeyboardKey[KeyboardKey["KEY_PAGE_DOWN"] = 267] = "KEY_PAGE_DOWN";
    KeyboardKey[KeyboardKey["KEY_HOME"] = 268] = "KEY_HOME";
    KeyboardKey[KeyboardKey["KEY_END"] = 269] = "KEY_END";
    KeyboardKey[KeyboardKey["KEY_CAPS_LOCK"] = 280] = "KEY_CAPS_LOCK";
    KeyboardKey[KeyboardKey["KEY_SCROLL_LOCK"] = 281] = "KEY_SCROLL_LOCK";
    KeyboardKey[KeyboardKey["KEY_NUM_LOCK"] = 282] = "KEY_NUM_LOCK";
    KeyboardKey[KeyboardKey["KEY_PRINT_SCREEN"] = 283] = "KEY_PRINT_SCREEN";
    KeyboardKey[KeyboardKey["KEY_PAUSE"] = 284] = "KEY_PAUSE";
    KeyboardKey[KeyboardKey["KEY_F1"] = 290] = "KEY_F1";
    KeyboardKey[KeyboardKey["KEY_F2"] = 291] = "KEY_F2";
    KeyboardKey[KeyboardKey["KEY_F3"] = 292] = "KEY_F3";
    KeyboardKey[KeyboardKey["KEY_F4"] = 293] = "KEY_F4";
    KeyboardKey[KeyboardKey["KEY_F5"] = 294] = "KEY_F5";
    KeyboardKey[KeyboardKey["KEY_F6"] = 295] = "KEY_F6";
    KeyboardKey[KeyboardKey["KEY_F7"] = 296] = "KEY_F7";
    KeyboardKey[KeyboardKey["KEY_F8"] = 297] = "KEY_F8";
    KeyboardKey[KeyboardKey["KEY_F9"] = 298] = "KEY_F9";
    KeyboardKey[KeyboardKey["KEY_F10"] = 299] = "KEY_F10";
    KeyboardKey[KeyboardKey["KEY_F11"] = 300] = "KEY_F11";
    KeyboardKey[KeyboardKey["KEY_F12"] = 301] = "KEY_F12";
    KeyboardKey[KeyboardKey["KEY_LEFT_SHIFT"] = 340] = "KEY_LEFT_SHIFT";
    KeyboardKey[KeyboardKey["KEY_LEFT_CONTROL"] = 341] = "KEY_LEFT_CONTROL";
    KeyboardKey[KeyboardKey["KEY_LEFT_ALT"] = 342] = "KEY_LEFT_ALT";
    KeyboardKey[KeyboardKey["KEY_LEFT_SUPER"] = 343] = "KEY_LEFT_SUPER";
    KeyboardKey[KeyboardKey["KEY_RIGHT_SHIFT"] = 344] = "KEY_RIGHT_SHIFT";
    KeyboardKey[KeyboardKey["KEY_RIGHT_CONTROL"] = 345] = "KEY_RIGHT_CONTROL";
    KeyboardKey[KeyboardKey["KEY_RIGHT_ALT"] = 346] = "KEY_RIGHT_ALT";
    KeyboardKey[KeyboardKey["KEY_RIGHT_SUPER"] = 347] = "KEY_RIGHT_SUPER";
    KeyboardKey[KeyboardKey["KEY_KB_MENU"] = 348] = "KEY_KB_MENU";
    KeyboardKey[KeyboardKey["KEY_LEFT_BRACKET"] = 91] = "KEY_LEFT_BRACKET";
    KeyboardKey[KeyboardKey["KEY_BACKSLASH"] = 92] = "KEY_BACKSLASH";
    KeyboardKey[KeyboardKey["KEY_RIGHT_BRACKET"] = 93] = "KEY_RIGHT_BRACKET";
    KeyboardKey[KeyboardKey["KEY_GRAVE"] = 96] = "KEY_GRAVE";
    KeyboardKey[KeyboardKey["KEY_KP_0"] = 320] = "KEY_KP_0";
    KeyboardKey[KeyboardKey["KEY_KP_1"] = 321] = "KEY_KP_1";
    KeyboardKey[KeyboardKey["KEY_KP_2"] = 322] = "KEY_KP_2";
    KeyboardKey[KeyboardKey["KEY_KP_3"] = 323] = "KEY_KP_3";
    KeyboardKey[KeyboardKey["KEY_KP_4"] = 324] = "KEY_KP_4";
    KeyboardKey[KeyboardKey["KEY_KP_5"] = 325] = "KEY_KP_5";
    KeyboardKey[KeyboardKey["KEY_KP_6"] = 326] = "KEY_KP_6";
    KeyboardKey[KeyboardKey["KEY_KP_7"] = 327] = "KEY_KP_7";
    KeyboardKey[KeyboardKey["KEY_KP_8"] = 328] = "KEY_KP_8";
    KeyboardKey[KeyboardKey["KEY_KP_9"] = 329] = "KEY_KP_9";
    KeyboardKey[KeyboardKey["KEY_KP_DECIMAL"] = 330] = "KEY_KP_DECIMAL";
    KeyboardKey[KeyboardKey["KEY_KP_DIVIDE"] = 331] = "KEY_KP_DIVIDE";
    KeyboardKey[KeyboardKey["KEY_KP_MULTIPLY"] = 332] = "KEY_KP_MULTIPLY";
    KeyboardKey[KeyboardKey["KEY_KP_SUBTRACT"] = 333] = "KEY_KP_SUBTRACT";
    KeyboardKey[KeyboardKey["KEY_KP_ADD"] = 334] = "KEY_KP_ADD";
    KeyboardKey[KeyboardKey["KEY_KP_ENTER"] = 335] = "KEY_KP_ENTER";
    KeyboardKey[KeyboardKey["KEY_KP_EQUAL"] = 336] = "KEY_KP_EQUAL";
})(KeyboardKey = exports.KeyboardKey || (exports.KeyboardKey = {}));
var AndroidButton;
(function (AndroidButton) {
    AndroidButton[AndroidButton["KEY_BACK"] = 4] = "KEY_BACK";
    AndroidButton[AndroidButton["KEY_MENU"] = 82] = "KEY_MENU";
    AndroidButton[AndroidButton["KEY_VOLUME_UP"] = 24] = "KEY_VOLUME_UP";
    AndroidButton[AndroidButton["KEY_VOLUME_DOWN"] = 25] = "KEY_VOLUME_DOWN";
})(AndroidButton = exports.AndroidButton || (exports.AndroidButton = {}));
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["MOUSE_LEFT_BUTTON"] = 0] = "MOUSE_LEFT_BUTTON";
    MouseButton[MouseButton["MOUSE_RIGHT_BUTTON"] = 1] = "MOUSE_RIGHT_BUTTON";
    MouseButton[MouseButton["MOUSE_MIDDLE_BUTTON"] = 2] = "MOUSE_MIDDLE_BUTTON";
})(MouseButton = exports.MouseButton || (exports.MouseButton = {}));
var GamepadNumber;
(function (GamepadNumber) {
    GamepadNumber[GamepadNumber["GAMEPAD_PLAYER1"] = 0] = "GAMEPAD_PLAYER1";
    GamepadNumber[GamepadNumber["GAMEPAD_PLAYER2"] = 1] = "GAMEPAD_PLAYER2";
    GamepadNumber[GamepadNumber["GAMEPAD_PLAYER3"] = 2] = "GAMEPAD_PLAYER3";
    GamepadNumber[GamepadNumber["GAMEPAD_PLAYER4"] = 3] = "GAMEPAD_PLAYER4";
})(GamepadNumber = exports.GamepadNumber || (exports.GamepadNumber = {}));
var GamepadButton;
(function (GamepadButton) {
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_UNKNOWN"] = 0] = "GAMEPAD_BUTTON_UNKNOWN";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_LEFT_FACE_UP"] = 1] = "GAMEPAD_BUTTON_LEFT_FACE_UP";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_LEFT_FACE_RIGHT"] = 2] = "GAMEPAD_BUTTON_LEFT_FACE_RIGHT";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_LEFT_FACE_DOWN"] = 3] = "GAMEPAD_BUTTON_LEFT_FACE_DOWN";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_LEFT_FACE_LEFT"] = 4] = "GAMEPAD_BUTTON_LEFT_FACE_LEFT";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_RIGHT_FACE_UP"] = 5] = "GAMEPAD_BUTTON_RIGHT_FACE_UP";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_RIGHT_FACE_RIGHT"] = 6] = "GAMEPAD_BUTTON_RIGHT_FACE_RIGHT";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_RIGHT_FACE_DOWN"] = 7] = "GAMEPAD_BUTTON_RIGHT_FACE_DOWN";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_RIGHT_FACE_LEFT"] = 8] = "GAMEPAD_BUTTON_RIGHT_FACE_LEFT";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_LEFT_TRIGGER_1"] = 9] = "GAMEPAD_BUTTON_LEFT_TRIGGER_1";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_LEFT_TRIGGER_2"] = 10] = "GAMEPAD_BUTTON_LEFT_TRIGGER_2";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_RIGHT_TRIGGER_1"] = 11] = "GAMEPAD_BUTTON_RIGHT_TRIGGER_1";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_RIGHT_TRIGGER_2"] = 12] = "GAMEPAD_BUTTON_RIGHT_TRIGGER_2";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_MIDDLE_LEFT"] = 13] = "GAMEPAD_BUTTON_MIDDLE_LEFT";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_MIDDLE"] = 14] = "GAMEPAD_BUTTON_MIDDLE";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_MIDDLE_RIGHT"] = 15] = "GAMEPAD_BUTTON_MIDDLE_RIGHT";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_LEFT_THUMB"] = 16] = "GAMEPAD_BUTTON_LEFT_THUMB";
    GamepadButton[GamepadButton["GAMEPAD_BUTTON_RIGHT_THUMB"] = 17] = "GAMEPAD_BUTTON_RIGHT_THUMB";
})(GamepadButton = exports.GamepadButton || (exports.GamepadButton = {}));
var GamepadAxis;
(function (GamepadAxis) {
    GamepadAxis[GamepadAxis["GAMEPAD_AXIS_UNKNOWN"] = 0] = "GAMEPAD_AXIS_UNKNOWN";
    GamepadAxis[GamepadAxis["GAMEPAD_AXIS_LEFT_X"] = 1] = "GAMEPAD_AXIS_LEFT_X";
    GamepadAxis[GamepadAxis["GAMEPAD_AXIS_LEFT_Y"] = 2] = "GAMEPAD_AXIS_LEFT_Y";
    GamepadAxis[GamepadAxis["GAMEPAD_AXIS_RIGHT_X"] = 3] = "GAMEPAD_AXIS_RIGHT_X";
    GamepadAxis[GamepadAxis["GAMEPAD_AXIS_RIGHT_Y"] = 4] = "GAMEPAD_AXIS_RIGHT_Y";
    GamepadAxis[GamepadAxis["GAMEPAD_AXIS_LEFT_TRIGGER"] = 5] = "GAMEPAD_AXIS_LEFT_TRIGGER";
    GamepadAxis[GamepadAxis["GAMEPAD_AXIS_RIGHT_TRIGGER"] = 6] = "GAMEPAD_AXIS_RIGHT_TRIGGER";
})(GamepadAxis = exports.GamepadAxis || (exports.GamepadAxis = {}));
var ShaderLocationIndex;
(function (ShaderLocationIndex) {
    ShaderLocationIndex[ShaderLocationIndex["LOC_VERTEX_POSITION"] = 0] = "LOC_VERTEX_POSITION";
    ShaderLocationIndex[ShaderLocationIndex["LOC_VERTEX_TEXCOORD01"] = 1] = "LOC_VERTEX_TEXCOORD01";
    ShaderLocationIndex[ShaderLocationIndex["LOC_VERTEX_TEXCOORD02"] = 2] = "LOC_VERTEX_TEXCOORD02";
    ShaderLocationIndex[ShaderLocationIndex["LOC_VERTEX_NORMAL"] = 3] = "LOC_VERTEX_NORMAL";
    ShaderLocationIndex[ShaderLocationIndex["LOC_VERTEX_TANGENT"] = 4] = "LOC_VERTEX_TANGENT";
    ShaderLocationIndex[ShaderLocationIndex["LOC_VERTEX_COLOR"] = 5] = "LOC_VERTEX_COLOR";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MATRIX_MVP"] = 6] = "LOC_MATRIX_MVP";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MATRIX_MODEL"] = 7] = "LOC_MATRIX_MODEL";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MATRIX_VIEW"] = 8] = "LOC_MATRIX_VIEW";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MATRIX_PROJECTION"] = 9] = "LOC_MATRIX_PROJECTION";
    ShaderLocationIndex[ShaderLocationIndex["LOC_VECTOR_VIEW"] = 10] = "LOC_VECTOR_VIEW";
    ShaderLocationIndex[ShaderLocationIndex["LOC_COLOR_DIFFUSE"] = 11] = "LOC_COLOR_DIFFUSE";
    ShaderLocationIndex[ShaderLocationIndex["LOC_COLOR_SPECULAR"] = 12] = "LOC_COLOR_SPECULAR";
    ShaderLocationIndex[ShaderLocationIndex["LOC_COLOR_AMBIENT"] = 13] = "LOC_COLOR_AMBIENT";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MAP_ALBEDO"] = 14] = "LOC_MAP_ALBEDO";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MAP_METALNESS"] = 15] = "LOC_MAP_METALNESS";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MAP_NORMAL"] = 16] = "LOC_MAP_NORMAL";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MAP_ROUGHNESS"] = 17] = "LOC_MAP_ROUGHNESS";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MAP_OCCLUSION"] = 18] = "LOC_MAP_OCCLUSION";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MAP_EMISSION"] = 19] = "LOC_MAP_EMISSION";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MAP_HEIGHT"] = 20] = "LOC_MAP_HEIGHT";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MAP_CUBEMAP"] = 21] = "LOC_MAP_CUBEMAP";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MAP_IRRADIANCE"] = 22] = "LOC_MAP_IRRADIANCE";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MAP_PREFILTER"] = 23] = "LOC_MAP_PREFILTER";
    ShaderLocationIndex[ShaderLocationIndex["LOC_MAP_BRDF"] = 24] = "LOC_MAP_BRDF";
})(ShaderLocationIndex = exports.ShaderLocationIndex || (exports.ShaderLocationIndex = {}));
var ShaderUniformDataType;
(function (ShaderUniformDataType) {
    ShaderUniformDataType[ShaderUniformDataType["UNIFORM_FLOAT"] = 0] = "UNIFORM_FLOAT";
    ShaderUniformDataType[ShaderUniformDataType["UNIFORM_VEC2"] = 1] = "UNIFORM_VEC2";
    ShaderUniformDataType[ShaderUniformDataType["UNIFORM_VEC3"] = 2] = "UNIFORM_VEC3";
    ShaderUniformDataType[ShaderUniformDataType["UNIFORM_VEC4"] = 3] = "UNIFORM_VEC4";
    ShaderUniformDataType[ShaderUniformDataType["UNIFORM_INT"] = 4] = "UNIFORM_INT";
    ShaderUniformDataType[ShaderUniformDataType["UNIFORM_IVEC2"] = 5] = "UNIFORM_IVEC2";
    ShaderUniformDataType[ShaderUniformDataType["UNIFORM_IVEC3"] = 6] = "UNIFORM_IVEC3";
    ShaderUniformDataType[ShaderUniformDataType["UNIFORM_IVEC4"] = 7] = "UNIFORM_IVEC4";
    ShaderUniformDataType[ShaderUniformDataType["UNIFORM_SAMPLER2D"] = 8] = "UNIFORM_SAMPLER2D";
})(ShaderUniformDataType = exports.ShaderUniformDataType || (exports.ShaderUniformDataType = {}));
var MaterialMapType;
(function (MaterialMapType) {
    MaterialMapType[MaterialMapType["MAP_ALBEDO"] = 0] = "MAP_ALBEDO";
    MaterialMapType[MaterialMapType["MAP_METALNESS"] = 1] = "MAP_METALNESS";
    MaterialMapType[MaterialMapType["MAP_NORMAL"] = 2] = "MAP_NORMAL";
    MaterialMapType[MaterialMapType["MAP_ROUGHNESS"] = 3] = "MAP_ROUGHNESS";
    MaterialMapType[MaterialMapType["MAP_OCCLUSION"] = 4] = "MAP_OCCLUSION";
    MaterialMapType[MaterialMapType["MAP_EMISSION"] = 5] = "MAP_EMISSION";
    MaterialMapType[MaterialMapType["MAP_HEIGHT"] = 6] = "MAP_HEIGHT";
    MaterialMapType[MaterialMapType["MAP_CUBEMAP"] = 7] = "MAP_CUBEMAP";
    MaterialMapType[MaterialMapType["MAP_IRRADIANCE"] = 8] = "MAP_IRRADIANCE";
    MaterialMapType[MaterialMapType["MAP_PREFILTER"] = 9] = "MAP_PREFILTER";
    MaterialMapType[MaterialMapType["MAP_BRDF"] = 10] = "MAP_BRDF";
})(MaterialMapType = exports.MaterialMapType || (exports.MaterialMapType = {}));
var PixelFormat;
(function (PixelFormat) {
    PixelFormat[PixelFormat["MAP_DIFFUSE"] = 0] = "MAP_DIFFUSE";
    PixelFormat[PixelFormat["MAP_SPECULAR"] = 1] = "MAP_SPECULAR";
    PixelFormat[PixelFormat["UNCOMPRESSED_GRAYSCALE"] = 1] = "UNCOMPRESSED_GRAYSCALE";
    PixelFormat[PixelFormat["UNCOMPRESSED_GRAY_ALPHA"] = 2] = "UNCOMPRESSED_GRAY_ALPHA";
    PixelFormat[PixelFormat["UNCOMPRESSED_R5G6B5"] = 3] = "UNCOMPRESSED_R5G6B5";
    PixelFormat[PixelFormat["UNCOMPRESSED_R8G8B8"] = 4] = "UNCOMPRESSED_R8G8B8";
    PixelFormat[PixelFormat["UNCOMPRESSED_R5G5B5A1"] = 5] = "UNCOMPRESSED_R5G5B5A1";
    PixelFormat[PixelFormat["UNCOMPRESSED_R4G4B4A4"] = 6] = "UNCOMPRESSED_R4G4B4A4";
    PixelFormat[PixelFormat["UNCOMPRESSED_R8G8B8A8"] = 7] = "UNCOMPRESSED_R8G8B8A8";
    PixelFormat[PixelFormat["UNCOMPRESSED_R32"] = 8] = "UNCOMPRESSED_R32";
    PixelFormat[PixelFormat["UNCOMPRESSED_R32G32B32"] = 9] = "UNCOMPRESSED_R32G32B32";
    PixelFormat[PixelFormat["UNCOMPRESSED_R32G32B32A32"] = 10] = "UNCOMPRESSED_R32G32B32A32";
    PixelFormat[PixelFormat["COMPRESSED_DXT1_RGB"] = 11] = "COMPRESSED_DXT1_RGB";
    PixelFormat[PixelFormat["COMPRESSED_DXT1_RGBA"] = 12] = "COMPRESSED_DXT1_RGBA";
    PixelFormat[PixelFormat["COMPRESSED_DXT3_RGBA"] = 13] = "COMPRESSED_DXT3_RGBA";
    PixelFormat[PixelFormat["COMPRESSED_DXT5_RGBA"] = 14] = "COMPRESSED_DXT5_RGBA";
    PixelFormat[PixelFormat["COMPRESSED_ETC1_RGB"] = 15] = "COMPRESSED_ETC1_RGB";
    PixelFormat[PixelFormat["COMPRESSED_ETC2_RGB"] = 16] = "COMPRESSED_ETC2_RGB";
    PixelFormat[PixelFormat["COMPRESSED_ETC2_EAC_RGBA"] = 17] = "COMPRESSED_ETC2_EAC_RGBA";
    PixelFormat[PixelFormat["COMPRESSED_PVRT_RGB"] = 18] = "COMPRESSED_PVRT_RGB";
    PixelFormat[PixelFormat["COMPRESSED_PVRT_RGBA"] = 19] = "COMPRESSED_PVRT_RGBA";
    PixelFormat[PixelFormat["COMPRESSED_ASTC_4x4_RGBA"] = 20] = "COMPRESSED_ASTC_4x4_RGBA";
    PixelFormat[PixelFormat["COMPRESSED_ASTC_8x8_RGBA"] = 21] = "COMPRESSED_ASTC_8x8_RGBA";
})(PixelFormat = exports.PixelFormat || (exports.PixelFormat = {}));
var TextureFilterMode;
(function (TextureFilterMode) {
    TextureFilterMode[TextureFilterMode["FILTER_POINT"] = 0] = "FILTER_POINT";
    TextureFilterMode[TextureFilterMode["FILTER_BILINEAR"] = 1] = "FILTER_BILINEAR";
    TextureFilterMode[TextureFilterMode["FILTER_TRILINEAR"] = 2] = "FILTER_TRILINEAR";
    TextureFilterMode[TextureFilterMode["FILTER_ANISOTROPIC_4X"] = 3] = "FILTER_ANISOTROPIC_4X";
    TextureFilterMode[TextureFilterMode["FILTER_ANISOTROPIC_8X"] = 4] = "FILTER_ANISOTROPIC_8X";
    TextureFilterMode[TextureFilterMode["FILTER_ANISOTROPIC_16X"] = 5] = "FILTER_ANISOTROPIC_16X";
})(TextureFilterMode = exports.TextureFilterMode || (exports.TextureFilterMode = {}));
var CubemapLayoutType;
(function (CubemapLayoutType) {
    CubemapLayoutType[CubemapLayoutType["CUBEMAP_AUTO_DETECT"] = 0] = "CUBEMAP_AUTO_DETECT";
    CubemapLayoutType[CubemapLayoutType["CUBEMAP_LINE_VERTICAL"] = 1] = "CUBEMAP_LINE_VERTICAL";
    CubemapLayoutType[CubemapLayoutType["CUBEMAP_LINE_HORIZONTAL"] = 2] = "CUBEMAP_LINE_HORIZONTAL";
    CubemapLayoutType[CubemapLayoutType["CUBEMAP_CROSS_THREE_BY_FOUR"] = 3] = "CUBEMAP_CROSS_THREE_BY_FOUR";
    CubemapLayoutType[CubemapLayoutType["CUBEMAP_CROSS_FOUR_BY_THREE"] = 4] = "CUBEMAP_CROSS_FOUR_BY_THREE";
    CubemapLayoutType[CubemapLayoutType["CUBEMAP_PANORAMA"] = 5] = "CUBEMAP_PANORAMA";
})(CubemapLayoutType = exports.CubemapLayoutType || (exports.CubemapLayoutType = {}));
var TextureWrapMode;
(function (TextureWrapMode) {
    TextureWrapMode[TextureWrapMode["WRAP_REPEAT"] = 0] = "WRAP_REPEAT";
    TextureWrapMode[TextureWrapMode["WRAP_CLAMP"] = 1] = "WRAP_CLAMP";
    TextureWrapMode[TextureWrapMode["WRAP_MIRROR_REPEAT"] = 2] = "WRAP_MIRROR_REPEAT";
    TextureWrapMode[TextureWrapMode["WRAP_MIRROR_CLAMP"] = 3] = "WRAP_MIRROR_CLAMP";
})(TextureWrapMode = exports.TextureWrapMode || (exports.TextureWrapMode = {}));
var FontType;
(function (FontType) {
    FontType[FontType["FONT_DEFAULT"] = 0] = "FONT_DEFAULT";
    FontType[FontType["FONT_BITMAP"] = 1] = "FONT_BITMAP";
    FontType[FontType["FONT_SDF"] = 2] = "FONT_SDF";
})(FontType = exports.FontType || (exports.FontType = {}));
var BlendMode;
(function (BlendMode) {
    BlendMode[BlendMode["BLEND_ALPHA"] = 0] = "BLEND_ALPHA";
    BlendMode[BlendMode["BLEND_ADDITIVE"] = 1] = "BLEND_ADDITIVE";
    BlendMode[BlendMode["BLEND_MULTIPLIED"] = 2] = "BLEND_MULTIPLIED";
})(BlendMode = exports.BlendMode || (exports.BlendMode = {}));
var GestureType;
(function (GestureType) {
    GestureType[GestureType["GESTURE_NONE"] = 0] = "GESTURE_NONE";
    GestureType[GestureType["GESTURE_TAP"] = 1] = "GESTURE_TAP";
    GestureType[GestureType["GESTURE_DOUBLETAP"] = 2] = "GESTURE_DOUBLETAP";
    GestureType[GestureType["GESTURE_HOLD"] = 4] = "GESTURE_HOLD";
    GestureType[GestureType["GESTURE_DRAG"] = 8] = "GESTURE_DRAG";
    GestureType[GestureType["GESTURE_SWIPE_RIGHT"] = 16] = "GESTURE_SWIPE_RIGHT";
    GestureType[GestureType["GESTURE_SWIPE_LEFT"] = 32] = "GESTURE_SWIPE_LEFT";
    GestureType[GestureType["GESTURE_SWIPE_UP"] = 64] = "GESTURE_SWIPE_UP";
    GestureType[GestureType["GESTURE_SWIPE_DOWN"] = 128] = "GESTURE_SWIPE_DOWN";
    GestureType[GestureType["GESTURE_PINCH_IN"] = 256] = "GESTURE_PINCH_IN";
    GestureType[GestureType["GESTURE_PINCH_OUT"] = 512] = "GESTURE_PINCH_OUT";
})(GestureType = exports.GestureType || (exports.GestureType = {}));
var CameraMode;
(function (CameraMode) {
    CameraMode[CameraMode["CAMERA_CUSTOM"] = 0] = "CAMERA_CUSTOM";
    CameraMode[CameraMode["CAMERA_FREE"] = 1] = "CAMERA_FREE";
    CameraMode[CameraMode["CAMERA_ORBITAL"] = 2] = "CAMERA_ORBITAL";
    CameraMode[CameraMode["CAMERA_FIRST_PERSON"] = 3] = "CAMERA_FIRST_PERSON";
    CameraMode[CameraMode["CAMERA_THIRD_PERSON"] = 4] = "CAMERA_THIRD_PERSON";
})(CameraMode = exports.CameraMode || (exports.CameraMode = {}));
var CameraType;
(function (CameraType) {
    CameraType[CameraType["CAMERA_PERSPECTIVE"] = 0] = "CAMERA_PERSPECTIVE";
    CameraType[CameraType["CAMERA_ORTHOGRAPHIC"] = 1] = "CAMERA_ORTHOGRAPHIC";
})(CameraType = exports.CameraType || (exports.CameraType = {}));
// module.exports = { // unknown types
//   GAMEPAD_PS3_BUTTON_TRIANGLE = 0,
//   GAMEPAD_PS3_BUTTON_CIRCLE = 1,
//   GAMEPAD_PS3_BUTTON_CROSS = 2,
//   GAMEPAD_PS3_BUTTON_SQUARE = 3,
//   GAMEPAD_PS3_BUTTON_L1 = 6,
//   GAMEPAD_PS3_BUTTON_R1 = 7,
//   GAMEPAD_PS3_BUTTON_L2 = 4,
//   GAMEPAD_PS3_BUTTON_R2 = 5,
//   GAMEPAD_PS3_BUTTON_START = 8,
//   GAMEPAD_PS3_BUTTON_SELECT = 9,
//   GAMEPAD_PS3_BUTTON_PS = 12,
//   GAMEPAD_PS3_BUTTON_UP = 24,
//   GAMEPAD_PS3_BUTTON_RIGHT = 25,
//   GAMEPAD_PS3_BUTTON_DOWN = 26,
//   GAMEPAD_PS3_BUTTON_LEFT = 27,
//   GAMEPAD_PS3_AXIS_LEFT_X = 0,
//   GAMEPAD_PS3_AXIS_LEFT_Y = 1,
//   GAMEPAD_PS3_AXIS_RIGHT_X = 2,
//   GAMEPAD_PS3_AXIS_RIGHT_Y = 5,
//   GAMEPAD_PS3_AXIS_L2 = 3,
//   GAMEPAD_PS3_AXIS_R2 = 4,
//   GAMEPAD_XBOX_BUTTON_A = 0,
//   GAMEPAD_XBOX_BUTTON_B = 1,
//   GAMEPAD_XBOX_BUTTON_X = 2,
//   GAMEPAD_XBOX_BUTTON_Y = 3,
//   GAMEPAD_XBOX_BUTTON_LB = 4,
//   GAMEPAD_XBOX_BUTTON_RB = 5,
//   GAMEPAD_XBOX_BUTTON_SELECT = 6,
//   GAMEPAD_XBOX_BUTTON_START = 7,
//   GAMEPAD_XBOX_BUTTON_HOME = 8,
//   GAMEPAD_XBOX_BUTTON_UP = 10,
//   GAMEPAD_XBOX_BUTTON_RIGHT = 11,
//   GAMEPAD_XBOX_BUTTON_DOWN = 12,
//   GAMEPAD_XBOX_BUTTON_LEFT = 13,
//   GAMEPAD_XBOX_AXIS_LEFT_X = 0,
//   GAMEPAD_XBOX_AXIS_LEFT_Y = 1,
//   GAMEPAD_XBOX_AXIS_RIGHT_X = 2,
//   GAMEPAD_XBOX_AXIS_RIGHT_Y = 3,
//   GAMEPAD_XBOX_AXIS_LT = 4,
//   GAMEPAD_XBOX_AXIS_RT = 5,
//   HMD_DEFAULT_DEVICE = 0,
//   HMD_OCULUS_RIFT_DK2 = 1,
//   HMD_OCULUS_RIFT_CV1 = 2,
//   HMD_OCULUS_GO = 3,
//   HMD_VALVE_HTC_VIVE = 4,
//   HMD_SONY_PSVR = 5,
//   NPT_9PATCH = 0,
//   NPT_3PATCH_VERTICAL = 1,
//   NPT_3PATCH_HORIZONTAL = 2
// }

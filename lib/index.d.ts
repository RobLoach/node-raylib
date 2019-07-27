/**
 * node-raylib
 *
 * https://github.com/robloach/node-raylib
 */
import * as colors from "./src/types/colors";
import * as camera from "./src/types/camera";
import * as maths from "./src/types/maths";
import * as shaders from "./src/types/shaders";
import * as enums from "./src/types/enums";
import Core from "./src/core";
import Audio from "./src/audio";
import Shapes from "./src/shapes";
import Textures from "./src/textures";
import Text from "./src/text";
import Models from "./src/models";
import Shaders from "./src/shaders";
import Misc from "./src/misc";
interface Raylib extends Core, Audio, Shapes, Textures, Text, Models, Shaders, Misc {
    PI: number;
    MAX_TOUCH_POINTS: number;
    MAX_SHADER_LOCATIONS: number;
    MAX_MATERIAL_MAPS: number;
    DEG2RAD: number;
    RAD2DEG: number;
    Vector2: typeof maths.Vector2;
    Vector3: typeof maths.Vector3;
    Vector4: typeof maths.Vector4;
    Rectangle: typeof maths.Rectangle;
    Ray: typeof maths.Ray;
    RayHitInfo: typeof maths.RayHitInfo;
    Quaternion: typeof maths.Vector4;
    Color: typeof colors.Color;
    Camera2D: typeof camera.Camera2D;
    Camera3D: typeof camera.Camera3D;
    Camera: typeof camera.Camera3D;
    Shader: typeof shaders.Shader;
    KeyboardKey: {
        [key: string]: enums.KeyboardKey;
    };
    ConfigFlag: {
        [key: string]: enums.ConfigFlag;
    };
    TraceLogType: {
        [key: string]: enums.TraceLogType;
    };
    AndroidButton: {
        [key: string]: enums.AndroidButton;
    };
    MouseButton: {
        [key: string]: enums.MouseButton;
    };
    GamepadNumber: {
        [key: string]: enums.GamepadNumber;
    };
    GamepadButton: {
        [key: string]: enums.GamepadButton;
    };
    GamepadAxis: {
        [key: string]: enums.GamepadAxis;
    };
    ShaderLocationIndex: {
        [key: string]: enums.ShaderLocationIndex;
    };
    ShaderUniformDataType: {
        [key: string]: enums.ShaderUniformDataType;
    };
    MaterialMapType: {
        [key: string]: enums.MaterialMapType;
    };
    PixelFormat: {
        [key: string]: enums.PixelFormat;
    };
    TextureFilterMode: {
        [key: string]: enums.TextureFilterMode;
    };
    CubemapLayoutType: {
        [key: string]: enums.CubemapLayoutType;
    };
    TextureWrapMode: {
        [key: string]: enums.TextureWrapMode;
    };
    FontType: {
        [key: string]: enums.FontType;
    };
    BlendMode: {
        [key: string]: enums.BlendMode;
    };
    GestureType: {
        [key: string]: enums.GestureType;
    };
    CameraMode: {
        [key: string]: enums.CameraMode;
    };
    CameraType: {
        [key: string]: enums.CameraType;
    };
    LIGHTGRAY: colors.Color;
    GRAY: colors.Color;
    DARKGRAY: colors.Color;
    YELLOW: colors.Color;
    GOLD: colors.Color;
    ORANGE: colors.Color;
    PINK: colors.Color;
    RED: colors.Color;
    MAROON: colors.Color;
    GREEN: colors.Color;
    LIME: colors.Color;
    DARKGREEN: colors.Color;
    SKYBLUE: colors.Color;
    BLUE: colors.Color;
    DARKBLUE: colors.Color;
    PURPLE: colors.Color;
    VIOLET: colors.Color;
    DARKPURPLE: colors.Color;
    BEIGE: colors.Color;
    BROWN: colors.Color;
    DARKBROWN: colors.Color;
    WHITE: colors.Color;
    BLACK: colors.Color;
    BLANK: colors.Color;
    MAGENTA: colors.Color;
    RAYWHITE: colors.Color;
}
declare const raylib: Raylib;
export = raylib;

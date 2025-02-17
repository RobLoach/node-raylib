const ArgumentTypeConversion = require("./argument-type-conversion");

const FunctionDefinition = (func) => {
  return `/** ${func.description} */
  export function ${func.name}(${
    !func.params
      ? ""
      : func.params
          .map(
            (param) => `${param.name}: ${ArgumentTypeConversion(param.type)}`,
          )
          .join(", ")
  }): ${ArgumentTypeConversion(func.returnType)}
  `;
};

const StructInterface = (struct) => {
  return `/** ${struct.description} */
  export interface ${struct.name} {
    ${struct.fields
      .filter((field) => !field.type.trim().startsWith("#"))
      .map(
        (field) =>
          `/** ${field.description}. (${field.type}) */\n    ${
            field.name
          }: ${ArgumentTypeConversion(field.type)}`,
      )
      .join("\n    ")}
  }`;
};

module.exports = ({ functions, structs, enums, blocklist }) => {
  return `// GENERATED CODE: DO NOT MODIFY
declare module "raylib" {
  ${structs.map(StructInterface).join("\n  ")}

  /** RenderTexture, fbo for texture rendering */
  export type RenderTexture2D = RenderTexture

  /** Texture, tex data stored in GPU memory (VRAM) */
  export type Texture2D = Texture

  /** Texture, tex data stored in GPU memory (VRAM) */
  export type TextureCubemap = Texture

  /** Camera, defines position/orientation in 3d space */
  export type Camera = Camera3D | Camera2D

  /** Quaternion, same as Vector4 */
  export type Quaternion = Vector4
  ${functions
    .filter(({ name }) => !blocklist.includes(name))
    .map(FunctionDefinition)
    .join("\n  ")}

  /** Set shader uniform float */
  export function SetShaderFloat(shader: Shader, locIndex: number, value: number): void
  /** Set shader uniform int */
  export function SetShaderInt(shader: Shader, locIndex: number, value: number): void
  /** Set shader uniform Vec2 */
  export function SetShaderVec2(shader: Shader, locIndex: number, value: Vector2): void
  /** Set shader uniform Vec3 */
  export function SetShaderVec3(shader: Shader, locIndex: number, value: Vector3): void
  /** Set shader uniform Vec4 */
  export function SetShaderVec4(shader: Shader, locIndex: number, value: Vector4): void

  export function Camera3D(
  /** Camera position. (Vector3) */
  position: Vector3,
  /** Camera target it looks-at. (Vector3) */
  target: Vector3,
  /** Camera up vector (rotation over its axis). (Vector3) */
  up: Vector3,
  /** Camera field-of-view aperture in Y (degrees) in perspective, used as near plane width in orthographic. (float) */
  fovy: number,
  /** Camera projection: CAMERA_PERSPECTIVE or CAMERA_ORTHOGRAPHIC. (int) */
  projection: number,
  ): Camera3D

  export function Vector3(
    /** Vector x component. (float) */
    x: number,
    /** Vector y component. (float) */
    y: number,
    /** Vector z component. (float) */
    z: number,
  ): Vector3

  export function Vector2(
    /** Vector x component. (float) */
    x: number,
    /** Vector y component. (float) */
    y: number,
  ): Vector2

  ${enums
    .map((e) => {
      return e.values
        .map(
          (v) =>
            `  /** ${v.description} */\n  export const ${v.name} = ${v.value}`,
        )
        .join("\n");
    })
    .join("\n")}

  export const LIGHTGRAY: { r: 200, g: 200, b: 200, a: 255 }
  export const GRAY: { r: 130, g: 130, b: 130, a: 255 }
  export const DARKGRAY: { r: 80, g: 80, b: 80, a: 255 }
  export const YELLOW: { r: 253, g: 249, b: 0, a: 255 }
  export const GOLD: { r: 255, g: 203, b: 0, a: 255 }
  export const ORANGE: { r: 255, g: 161, b: 0, a: 255 }
  export const PINK: { r: 255, g: 109, b: 194, a: 255 }
  export const RED: { r: 230, g: 41, b: 55, a: 255 }
  export const MAROON: { r: 190, g: 33, b: 55, a: 255 }
  export const GREEN: { r: 0, g: 228, b: 48, a: 255 }
  export const LIME: { r: 0, g: 158, b: 47, a: 255 }
  export const DARKGREEN: { r: 0, g: 117, b: 44, a: 255 }
  export const SKYBLUE: { r: 102, g: 191, b: 255, a: 255 }
  export const BLUE: { r: 0, g: 121, b: 241, a: 255 }
  export const DARKBLUE: { r: 0, g: 82, b: 172, a: 255 }
  export const PURPLE: { r: 200, g: 122, b: 255, a: 255 }
  export const VIOLET: { r: 135, g: 60, b: 190, a: 255 }
  export const DARKPURPLE: { r: 112, g: 31, b: 126, a: 255 }
  export const BEIGE: { r: 211, g: 176, b: 131, a: 255 }
  export const BROWN: { r: 127, g: 106, b: 79, a: 255 }
  export const DARKBROWN: { r: 76, g: 63, b: 47, a: 255 }
  export const WHITE: { r: 255, g: 255, b: 255, a: 255 }
  export const BLACK: { r: 0, g: 0, b: 0, a: 255 }
  export const BLANK: { r: 0, g: 0, b: 0, a: 0 }
  export const MAGENTA: { r: 255, g: 0, b: 255, a: 255 }
  export const RAYWHITE: { r: 245, g: 245, b: 245, a: 255 }


}
`;
};

function ArgumentTypeConversion (arg) {
  if (arg === 'const unsigned char *') { return 'Buffer' }
  if (arg === 'unsigned char *') { return 'Buffer' }

  if (arg === 'char') { return 'string' }
  if (arg === 'char *') { return 'string' }
  if (arg === 'const char *') { return 'string' }

  if (arg === 'int') { return 'number' }
  if (arg === 'float') { return 'number' }
  if (arg === 'unsigned int') { return 'number' }
  if (arg === 'unsigned char') { return 'number' }
  if (arg === 'long') { return 'number' }
  if (arg === 'double') { return 'number' }

  if (arg === 'bool') { return 'boolean' }

  // Camera2D arguments are already in JSON
  if (arg === 'Camera') { return 'Camera3D' }

  // pointers
  arg = arg.replace('const ', '')
  if (arg.includes('*')) {
    return 'number'
  }

  return arg
}

const FunctionDefinition = (func) => {
  return `/** ${func.description} */
  export function ${func.name}(${!func.params
      ? ''
      : func.params
        .map(param => `${param.name}: ${ArgumentTypeConversion(param.type)}`)
        .join(', ')
    }): ${ArgumentTypeConversion(func.returnType)}
  `
}

const StructInterface = (struct) => {
  return `/** ${struct.description} */
  export interface ${struct.name} {
    ${struct.fields
      .map(field => `/** ${field.description} */\n    ${field.name}: ${ArgumentTypeConversion(field.type)}`)
      .join('\n    ')
    }
  }`
}

module.exports = ({ functions, structs, enums, blocklist }) => {
  return `// GENERATED CODE: DO NOT MODIFY
declare module "raylib" {
  ${structs
      .map(StructInterface)
      .join('\n  ')
    }

  ${functions
      .filter(({ name }) => !blocklist.includes(name))
      .map(FunctionDefinition)
      .join('\n  ')
    }

  /** Set shader uniform float */
  export function SetShaderFloat(shader: Shader, locIndex: number, value: number): void
  /** Set shader uniform int */
  export function SetShaderInt(shader: Shader, locIndex: number, value: number): void
  /** Set shader uniform Vector2 */
  export function SetShaderVector2(shader: Shader, locIndex: number, value: Vector2): void
  /** Set shader uniform Vector3 */
  export function SetShaderVector3(shader: Shader, locIndex: number, value: Vector3): void
  /** Set shader uniform Vector4 */
  export function SetShaderVector4(shader: Shader, locIndex: number, value: Vector4): void

  ${enums
      .map((e) => { return e.values.map(v => `  /** ${v.description} */\n  export const ${v.name} = ${v.value}`).join('\n') })
      .join('\n')
    }

  export const LIGHTGRAY: Color = { r: 200, g: 200, b: 200, a: 255 }
  export const GRAY: Color = { r: 130, g: 130, b: 130, a: 255 }
  export const DARKGRAY: Color = { r: 80, g: 80, b: 80, a: 255 }
  export const YELLOW: Color = { r: 253, g: 249, b: 0, a: 255 }
  export const GOLD: Color = { r: 255, g: 203, b: 0, a: 255 }
  export const ORANGE: Color = { r: 255, g: 161, b: 0, a: 255 }
  export const PINK: Color = { r: 255, g: 109, b: 194, a: 255 }
  export const RED: Color = { r: 230, g: 41, b: 55, a: 255 }
  export const MAROON: Color = { r: 190, g: 33, b: 55, a: 255 }
  export const GREEN: Color = { r: 0, g: 228, b: 48, a: 255 }
  export const LIME: Color = { r: 0, g: 158, b: 47, a: 255 }
  export const DARKGREEN: Color = { r: 0, g: 117, b: 44, a: 255 }
  export const SKYBLUE: Color = { r: 102, g: 191, b: 255, a: 255 }
  export const BLUE: Color = { r: 0, g: 121, b: 241, a: 255 }
  export const DARKBLUE: Color = { r: 0, g: 82, b: 172, a: 255 }
  export const PURPLE: Color = { r: 200, g: 122, b: 255, a: 255 }
  export const VIOLET: Color = { r: 135, g: 60, b: 190, a: 255 }
  export const DARKPURPLE: Color = { r: 112, g: 31, b: 126, a: 255 }
  export const BEIGE: Color = { r: 211, g: 176, b: 131, a: 255 }
  export const BROWN: Color = { r: 127, g: 106, b: 79, a: 255 }
  export const DARKBROWN: Color = { r: 76, g: 63, b: 47, a: 255 }
  export const WHITE: Color = { r: 255, g: 255, b: 255, a: 255 }
  export const BLACK: Color = { r: 0, g: 0, b: 0, a: 255 }
  export const BLANK: Color = { r: 0, g: 0, b: 0, a: 0 }
  export const MAGENTA: Color = { r: 255, g: 0, b: 255, a: 255 }
  export const RAYWHITE: Color = { r: 245, g: 245, b: 245, a: 255 }
}
`
}

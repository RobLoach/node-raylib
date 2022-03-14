function ArgumentTypeConversion(arg) {

	if (arg === 'const unsigned char *') {return 'Buffer'}
	if (arg === 'unsigned char *') {return 'Buffer'}

	if (arg === 'char') {return 'string'}
	if (arg === 'char *') {return 'string'}
	if (arg === 'const char *') {return 'string'}

	if (arg === 'int') {return 'number'}
	if (arg === 'float') {return 'number'}
	if (arg === 'unsigned int') {return 'number'}
	if (arg === 'unsigned char') {return 'number'}
	if (arg === 'long') {return 'number'}
	if (arg === 'double') {return 'number'}

	if (arg === 'bool') {return 'boolean'}

	// Camera2D arguments are already in JSON 
	if (arg === 'Camera') {return 'Camera3D'}

	// pointers
	arg = arg.replace('const ', '')
	if (arg.includes('*')) {
		return 'number'
	}

	return arg
}

const FunctionDefinition = (func) => {
	return `/** ${func.description} */
	export function ${func.name}(${
		!func.params? '' :
			func.params
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

module.exports = ({ functions, structs, enums, blocklist, by_ref_list }) => {
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

	${enums
		.map((e) => { return e.values.map(v => `  /** ${v.description} */\n  export const ${v.name} = ${v.value}`).join('\n')})
		.join('\n')
	}

	export const LIGHTGRAY = { r: 200, g: 200, b: 200, a: 255 }
	export const GRAY = { r: 130, g: 130, b: 130, a: 255 }
	export const DARKGRAY = { r: 80, g: 80, b: 80, a: 255 }
	export const YELLOW = { r: 253, g: 249, b: 0, a: 255 }
	export const GOLD = { r: 255, g: 203, b: 0, a: 255 }
	export const ORANGE = { r: 255, g: 161, b: 0, a: 255 }
	export const PINK = { r: 255, g: 109, b: 194, a: 255 }
	export const RED = { r: 230, g: 41, b: 55, a: 255 }
	export const MAROON = { r: 190, g: 33, b: 55, a: 255 }
	export const GREEN = { r: 0, g: 228, b: 48, a: 255 }
	export const LIME = { r: 0, g: 158, b: 47, a: 255 }
	export const DARKGREEN = { r: 0, g: 117, b: 44, a: 255 }
	export const SKYBLUE = { r: 102, g: 191, b: 255, a: 255 }
	export const BLUE = { r: 0, g: 121, b: 241, a: 255 }
	export const DARKBLUE = { r: 0, g: 82, b: 172, a: 255 }
	export const PURPLE = { r: 200, g: 122, b: 255, a: 255 }
	export const VIOLET = { r: 135, g: 60, b: 190, a: 255 }
	export const DARKPURPLE = { r: 112, g: 31, b: 126, a: 255 }
	export const BEIGE = { r: 211, g: 176, b: 131, a: 255 }
	export const BROWN = { r: 127, g: 106, b: 79, a: 255 }
	export const DARKBROWN = { r: 76, g: 63, b: 47, a: 255 }
	export const WHITE = { r: 255, g: 255, b: 255, a: 255 }
	export const BLACK = { r: 0, g: 0, b: 0, a: 255 }
	export const BLANK = { r: 0, g: 0, b: 0, a: 0 }
	export const MAGENTA = { r: 255, g: 0, b: 255, a: 255 }
	export const RAYWHITE = { r: 245, g: 245, b: 245, a: 255 }
}
`
}

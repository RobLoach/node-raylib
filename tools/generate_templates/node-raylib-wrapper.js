const ArgumentTypeConversion = require("./argument-type-conversion");

// These are struct types that the JS wrapper will create simple functions to generate objects for.
const constructors = [
  "Color",
  "Vector2",
  "Vector3",
  "Vector4",
  "Rectangle",
  "Camera2D",
  "Camera3D",
];

const FlattenArgument = (structs, param) => {
  if (param.type === "Camera") {
    param.type = "Camera3D";
  }
  if (param.type === "Texture2D") {
    param.type = "Texture";
  }
  if (param.type === "RenderTexture2D") {
    param.type = "RenderTexture";
  }
  let out = "";
  let isStruct = false;
  for (const struct of structs) {
    if (struct.name === param.type) {
      isStruct = true;
      for (const field of struct.fields) {
        out += `${FlattenArgument(structs, {
          type: field.type,
          name: `${param.name}.${field.name}`,
        })},\n    `;
      }
      out = out.slice(0, out.length - 6); // remove final comma
    }
  }

  if (!isStruct) {
    out += param.name;
  }
  return out;
};

/**
 * Generates the JSDocs for the given function.
 */
const JSDocsForFunction = (structs, func) => {
  // Determine the function description.
  const description = func.description ?? func.name;

  // Define the parameters.
  let params = "";
  if (func.params) {
    params = "\n *";
    for (const param of func.params) {
      params += `\n * @param {${ArgumentTypeConversion(param.type)}} ${param.name}`;
    }
  }

  // Find the return type.
  let returnType = "";
  if (func.returnType && func.returnType !== "void") {
    returnType = `\n *\n * @return {${ArgumentTypeConversion(func.returnType)}} The resulting ${func.returnType}.`;
  } else {
    returnType = "\n *\n * @return {undefined}";
  }

  if (description) {
    return `
/**
 * ${description}${params}${returnType}
 */`;
  }
  return "";
};

const WrapFunction = (structs, func) => {
  return `${JSDocsForFunction(structs, func)}
function ${func.name}(${!func.params ? "" : func.params.map((param) => param.name).join(", ")}) {
  return r.Bind${func.name}(${
    !func.params
      ? ""
      : `\n    ${func.params
          .map((param) => {
            return FlattenArgument(structs, param);
          })
          .join(",\n    ")}\n  `
  })
}
raylib.${func.name} = ${func.name}`;
};

const WrapByRefFunction = (structs, func) => {
  // copy params array to make edits nondestructively
  const params = [];
  for (const param of func.params) {
    params.push(param);
  }
  // no longer a pointer function - instead pass a copy - C++ creates the pointer at execution time
  if (params[0]) {
    params[0].type = params[0].type.replace("*", "");
    params[0].type = params[0].type.replace(" ", "");
  }

  return `${JSDocsForFunction(structs, func)}
function ${func.name}(${!params ? "" : params.map((param) => param.name).join(", ")}) {
  const obj = r.Bind${func.name}(${
    !params
      ? ""
      : `\n    ${params
          .map((param) => {
            return FlattenArgument(structs, param);
          })
          .join(",\n    ")}\n  `
  })
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      ${params[0].name}[key] = obj[key]
    }
  }
}
raylib.${func.name} = ${func.name}`;
};

const WrapConstructor = (structs, compareConstructor) => {
  let info;
  for (const struct of structs) {
    if (struct.name === compareConstructor) info = struct;
  }
  if (info) {
    // Grab the description for the object.
    const description = info.description ?? info.name;

    // Construct the field parameters
    let params = "";
    if (info.fields) {
      params = "\n *";
      for (const field of info.fields) {
        params += `\n * @param {${ArgumentTypeConversion(field.type)}} ${field.name} - ${field.description}`;
      }
    }
    return `/**
 * ${description}${params}
 *
 * @return {${info.name}} The new ${info.name}.
 */
function ${info.name}(${info.fields.map((field) => `${field.name}`).join(",")}) {
  return {${info.fields.map((field) => `${field.name}`).join(",")}}
}
raylib.${info.name} = ${info.name}
`;
  }
  return "";
};

module.exports = ({ functions, structs, enums, blocklist, byreflist }) => {
  return `/**
 * node-raylib
 *
 * @module raylib
 * @file Definitions file for node-raylib.
 *
 * GENERATED CODE: DO NOT MODIFY
 */

const r = require('../../build/Release/node-raylib.node')

const raylib = {}
${functions
  .filter(({ name }) => !blocklist.includes(name))
  .filter(({ name }) => !byreflist.includes(name))
  .map((func) => {
    return WrapFunction(structs, func);
  })
  .join("\n")}
${functions
  .filter(({ name }) => !blocklist.includes(name))
  .filter(({ name }) => byreflist.includes(name))
  .map((func) => {
    return WrapByRefFunction(structs, func);
  })
  .join("\n")}

${constructors
  .map((ctor) => WrapConstructor(structs, ctor))
  .join("\n")}raylib.Camera = raylib.Camera3D

// WRAPPED TYPED SHADER FUNCTIONS

/**
 * Set shader uniform value float
 *
 * @param {Shader} shader
 * @param {number} locIndex
 * @param {number} value
 *
 * @returns {undefined}
 */
function SetShaderFloat(shader, locIndex, value) {
  return r.BindSetShaderFloat(
    shader.id,
    shader.locs,
    locIndex,
    value
  )
}
raylib.SetShaderFloat = SetShaderFloat

/**
 * Set shader uniform value float
 *
 * @param {Shader} shader
 * @param {number} locIndex
 * @param {number} value
 *
 * @returns {undefined}
 */
function SetShaderInt(shader, locIndex, value) {
  return r.BindSetShaderInt(
    shader.id,
    shader.locs,
    locIndex,
    value
  )
}
raylib.SetShaderInt = SetShaderInt

/**
 * Set shader uniform value vector2
 *
 * @param {Shader} shader
 * @param {number} locIndex
 * @param {Vector2} value
 *
 * @returns {undefined}
 */
function SetShaderVec2(shader, locIndex, value) {
  return r.BindSetShaderVec2(
    shader.id,
    shader.locs,
    locIndex,
    value.x,
    value.y
  )
}
raylib.SetShaderVec2 = SetShaderVec2

/**
 * Set shader uniform value vector3
 *
 * @param {Shader} shader
 * @param {number} locIndex
 * @param {Vector3} value
 *
 * @returns {undefined}
 */
function SetShaderVec3(shader, locIndex, value) {
  return r.BindSetShaderVec3(
    shader.id,
    shader.locs,
    locIndex,
    value.x,
    value.y,
    value.z
  )
}
raylib.SetShaderVec3 = SetShaderVec3

/**
 * Set shader uniform value vector4
 *
 * @param {Shader} shader
 * @param {number} locIndex
 * @param {Vector4} value
 *
 * @returns {undefined}
 */
function SetShaderVec4(shader, locIndex, value) {
  return r.BindSetShaderVec4(
    shader.id,
    shader.locs,
    locIndex,
    value.x,
    value.y,
    value.z,
    value.w
  )
}
raylib.SetShaderVec4 = SetShaderVec4
${enums
  .map((e) => {
    return e.values
      .map(
        (v) => `
/**
 * ${v.description}
 *
 * @type {number}
 * @constant
 */
raylib.${v.name} = ${v.value}`,
      )
      .join("\n");
  })
  .join("\n")}

raylib.LIGHTGRAY = { r: 200, g: 200, b: 200, a: 255 }
raylib.GRAY = { r: 130, g: 130, b: 130, a: 255 }
raylib.DARKGRAY = { r: 80, g: 80, b: 80, a: 255 }
raylib.YELLOW = { r: 253, g: 249, b: 0, a: 255 }
raylib.GOLD = { r: 255, g: 203, b: 0, a: 255 }
raylib.ORANGE = { r: 255, g: 161, b: 0, a: 255 }
raylib.PINK = { r: 255, g: 109, b: 194, a: 255 }
raylib.RED = { r: 230, g: 41, b: 55, a: 255 }
raylib.MAROON = { r: 190, g: 33, b: 55, a: 255 }
raylib.GREEN = { r: 0, g: 228, b: 48, a: 255 }
raylib.LIME = { r: 0, g: 158, b: 47, a: 255 }
raylib.DARKGREEN = { r: 0, g: 117, b: 44, a: 255 }
raylib.SKYBLUE = { r: 102, g: 191, b: 255, a: 255 }
raylib.BLUE = { r: 0, g: 121, b: 241, a: 255 }
raylib.DARKBLUE = { r: 0, g: 82, b: 172, a: 255 }
raylib.PURPLE = { r: 200, g: 122, b: 255, a: 255 }
raylib.VIOLET = { r: 135, g: 60, b: 190, a: 255 }
raylib.DARKPURPLE = { r: 112, g: 31, b: 126, a: 255 }
raylib.BEIGE = { r: 211, g: 176, b: 131, a: 255 }
raylib.BROWN = { r: 127, g: 106, b: 79, a: 255 }
raylib.DARKBROWN = { r: 76, g: 63, b: 47, a: 255 }
raylib.WHITE = { r: 255, g: 255, b: 255, a: 255 }
raylib.BLACK = { r: 0, g: 0, b: 0, a: 255 }
raylib.BLANK = { r: 0, g: 0, b: 0, a: 0 }
raylib.MAGENTA = { r: 255, g: 0, b: 255, a: 255 }
raylib.RAYWHITE = { r: 245, g: 245, b: 245, a: 255 }

module.exports = raylib
`;
};

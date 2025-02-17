/**
 * ConvertCppTypeToNodeJs
 *
 * Converts a C++ type to a type that can be used in a NodeJS Buffer.from() call.
 *
 * @param {string} cppType - The C++ type to be converted.
 * @returns {string} The converted NodeJS type.
 */
function convertCppTypeToNodeJs(cppType) {
  switch (cppType) {
    case "const unsigned char *":
    case "unsigned char *":
      return "Buffer";
    case "char":
    case "char *":
    case "const char *":
    case "char[32]":
      return "string";
    case "int":
    case "float":
    case "unsigned int":
    case "unsigned char":
    case "long":
    case "double":
      return "number";
    case "unsigned long long":
      return "BigInt";
    case "bool":
      return "boolean";
    // For default case, there will be some custom logic before returning the desired type
    default: {
      const cppTypeTransformed = cppType.replace("const ", "");
      if (
        cppTypeTransformed.includes("*") || // pointers
        cppTypeTransformed.includes("]") // float[2], float[4] etc. should be converted to pointers as well
      ) {
        return "number";
      }
      return cppType;
    }
  }
}

module.exports = convertCppTypeToNodeJs;

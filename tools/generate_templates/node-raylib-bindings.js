/**
 * Sanitizes a type (primitive or struct) into a string that can be used as part of a function name.
 * Converts anything ending with '*' to 'pointer'
 * @param {*} name
 * @returns
 */
const SanitizeTypeName = (name) => {
  if (name === "const Vector3") {
    return "Vector3";
  }
  if (name === "float[2]") {
    return "pointer";
  }
  if (name === "char[32]") {
    return "pointer";
  }
  if (name === "float[4]") {
    return "pointer";
  }
  if (name === "unsigned int[4]") {
    return "(unsigned int) pointer";
  }
  if (name === "Matrix[2]") {
    return "pointer";
  }
  if (name === "const char *") {
    return "string";
  }
  if (name.endsWith("*")) {
    return "pointer";
  }
  if (name.endsWith("Callback")) {
    return "function";
  }
  if (name === "Camera") {
    return "Camera3D";
  }
  if (name === "Quaternion") {
    return "Vector4";
  }
  if (name === "Texture2D") {
    return "Texture";
  }
  return name.replace(/ /g, "");
};

const TypeUnwrappedLength = (structs, type) => {
  if (type === "Camera") {
    type = "Camera3D";
  }
  if (type === "Texture2D") {
    type = "Texture";
  }
  let properties = 0;
  for (const struct of structs) {
    if (struct.name === type) {
      for (const field of struct.fields) {
        properties += TypeUnwrappedLength(structs, field.type);
      }
    }
  }
  if (properties === 0) {
    // primitive, not struct. return length 1
    return 1;
  }
  return properties;
};

const UnwrappedStructProperties = (structs, struct) => {
  let length = 0;
  return struct.fields
    .map((field) => {
      const out = `${
        field.type.endsWith("*") ? ` (${field.type})` : ""
      } ${SanitizeTypeName(field.type)}FromValue(info, index + ${length})`;
      length += TypeUnwrappedLength(structs, field.type);
      return out;
    })
    .join(",\n    ");
};

const UnwrappedFuncArguments = (structs, func) => {
  if (!func.params) {
    return "";
  }
  let length = 0;

  return func.params
    .map((param) => {
      const out = `${
        param.type.endsWith("*") ? ` (${param.type})` : ""
      } ${SanitizeTypeName(param.type)}FromValue(info, ${length})`;
      length += TypeUnwrappedLength(structs, param.type);
      return out;
    })
    .join(",\n      ");
};

/**
 *
 * @param {*} struct
 * @returns
 */
const FromValue = (structs, struct) => `
inline ${struct.name} ${SanitizeTypeName(
  struct.name
)}FromValue(const Napi::CallbackInfo& info, int index) {
  return {
    ${UnwrappedStructProperties(structs, struct)}
  };
}`;

/**
 *
 * @param {*} struct
 * @returns
 */
const ToValue = (struct) => `
inline Napi::Value ToValue(Napi::Env env, ${struct.name} obj) {
  Napi::Object out = Napi::Object::New(env);
  ${struct.fields
    .map(
      (field) => `out.Set("${field.name}", ToValue(env, obj.${field.name}));`
    )
    .join("\n  ")}
  return out;
}`;

/**
 *
 * @param {*} func
 * @returns
 */
const BindFunction = (structs, func) => `
Napi::Value Bind${func.name}(const Napi::CallbackInfo& info) {
  return ToValue(info.Env(),
    ${func.name}(
      ${UnwrappedFuncArguments(structs, func)}
    )
  );
}`;

/**
 *
 * @param {*} func
 * @returns
 */
const BindVoidFunction = (structs, func) => `
void Bind${func.name}(const Napi::CallbackInfo& info) {
  ${func.name}(
    ${UnwrappedFuncArguments(structs, func)}
  );
}`;

/**
 *
 * @param {*} func
 * @returns
 */
const BindFunctionPassByRef = (structs, func) => {
  let returnType = func.params[0].type;
  returnType = returnType.replace(" *", "");
  let length = TypeUnwrappedLength(structs, returnType);
  return `
Napi::Value Bind${func.name}(const Napi::CallbackInfo& info) {
  ${returnType} obj = ${returnType}FromValue(info, 0);
  ${func.name}(
    ${
      func.params.length === 1
        ? "&obj\n"
        : ["&obj"].concat(
            func.params
              ?.filter((param, index) => index !== 0)
              .map((param) => {
                const out = `${
                  param.type.endsWith("*") ? ` (${param.type})` : ""
                } ${SanitizeTypeName(param.type)}FromValue(info, ${length})`;
                length += TypeUnwrappedLength(structs, param.type);
                return out;
              })
              .join(",\n      ")
          )
    }
  );
  return ToValue(info.Env(), obj);
}`;
};

/**
 *
 * @param {*} func
 * @returns
 */
const ExportFunctionBinding = (func) =>
  `exports.Set("Bind${func.name}", Napi::Function::New(env, Bind${func.name}));`;

module.exports = ({ functions, structs, enums, blocklist, byreflist }) => `
// GENERATED CODE: DO NOT MODIFY
#include <string>
#include <napi.h>
#include <iostream>
#include <cstring>
#include "raylib.h"
#include "raymath.h"

#include "../extras/reasings.h"
#include "../extras/rlgl.h"

// Suppress MSVC security warnings for raygui.h
#ifdef _MSC_VER
#define _CRT_SECURE_NO_WARNINGS
#pragma warning(push)
#pragma warning(disable: 4996) // Disable deprecated function warnings
#endif

#define RAYGUI_IMPLEMENTATION
#include "../extras/raygui.h"

#ifdef _MSC_VER
#pragma warning(pop)
#endif

using namespace Napi;

inline Napi::Value ToValue(Napi::Env env, bool value) {
  return Napi::Boolean::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, const char* value) {
  return Napi::String::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, const std::string& value) {
  return Napi::String::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, char* value) {
  return Napi::String::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, int value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, unsigned int value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, long value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, double value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, float value) {
  return Napi::Number::New(env, value);
}
inline Napi::Value ToValue(Napi::Env env, void * value) {
  return Napi::Number::New(env, (int64_t) value);
}
inline Napi::Value ToValue(Napi::Env env, unsigned long long value) {
  return Napi::BigInt::New(env, (uint64_t) value);
}

inline float floatFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().FloatValue();
}
inline int intFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().Int32Value();
}
inline double doubleFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().DoubleValue();
}
uintptr_t pointerFromValue(const Napi::CallbackInfo& info, int index) {
  return (uintptr_t) info[index].As<Napi::Number>().Int64Value();
}
inline unsigned char unsignedcharFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().Uint32Value();
}
inline unsigned int unsignedintFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().Uint32Value();
}
inline unsigned long long unsignedlonglongFromValue(const Napi::CallbackInfo& info, int index) {
  return (unsigned long long) info[index].As<Napi::BigInt>().Uint64Value(0);
}
inline bool boolFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Boolean>();
}
inline const char * stringFromValue(const Napi::CallbackInfo& info, int index) {
  std::string val = info[index].As<Napi::String>().Utf8Value();
  const std::string::size_type size = val.size();
  char *buffer = new char[size + 1];   //we need extra char for NUL
  memcpy(buffer, val.c_str(), size + 1);
  return buffer;
}
inline char charFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().Uint32Value();
}

// exception for this constructor, which has different input depending on platform
inline rlVertexBuffer rlVertexBufferFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     intFromValue(info, index + 0),                              // elementCount
     (float *) pointerFromValue(info, index + 1),               // vertices
     (float *) pointerFromValue(info, index + 2),               // texcoords
     (float *) pointerFromValue(info, index + 3),               // normals
     (unsigned char*) pointerFromValue(info, index + 4),        // colors
      #if defined(GRAPHICS_API_OPENGL_11) || defined(GRAPHICS_API_OPENGL_33)
        (unsigned int*) pointerFromValue(info, index + 5),      // indices
      #endif
      #if defined(GRAPHICS_API_OPENGL_ES2)
        (unsigned short *) pointerFromValue(info, index + 5),   // indices
      #endif 
     unsignedintFromValue(info, index + 6),                             // vaoId
     {unsignedintFromValue(info, index + 7), unsignedintFromValue(info, index + 8), unsignedintFromValue(info, index + 9), unsignedintFromValue(info, index + 10), unsignedintFromValue(info, index + 11)} // vboId[5]
  };
}

// Convert structs from Napi::Values in info[] arguments
${structs
  .filter(
    ({ name }) =>
      !blocklist.includes(name) &&
      name !== "rlVertexBuffer" &&
      name !== "AutomationEvent" &&
      name !== "ModelAnimation"
  )
  .map((struct) => {
    return FromValue(structs, struct);
  })
  .join("\n")}
// Convert structs to Napi::Objects for output to JS
${structs
  .filter(({ name }) => !blocklist.includes(name))
  .map(ToValue)
  .join("\n")}

inline Texture2D Texture2DFromValue(const Napi::CallbackInfo& info, int index) {
  return (Texture2D) TextureFromValue(info, index);
}
inline RenderTexture2D RenderTexture2DFromValue(const Napi::CallbackInfo& info, int index) {
  return (RenderTexture2D) RenderTextureFromValue(info, index);
}
inline Camera CameraFromValue(const Napi::CallbackInfo& info, int index) {
  return Camera3DFromValue(info, index);
}

inline AutomationEvent AutomationEventFromValue(const Napi::CallbackInfo &info, int index)
{
  return {
      unsignedintFromValue(info, index + 0),
      unsignedintFromValue(info, index + 1),
      {intFromValue(info, index + 2), intFromValue(info, index + 3), intFromValue(info, index + 4), intFromValue(info, index + 5)},
  };
}

inline ModelAnimation ModelAnimationFromValue(const Napi::CallbackInfo& info, int index) {
  return {
     intFromValue(info, index + 0),
     intFromValue(info, index + 1),
     (BoneInfo *) pointerFromValue(info, index + 2),
     (Transform **) pointerFromValue(info, index + 3),
     charFromValue(info ,index+4)
  };
}

// Raylib API function bindings
${functions
  .filter(({ name }) => !blocklist.includes(name))
  .filter(({ name }) => !byreflist.includes(name))
  .filter((func) => func.returnType !== "void")
  .map((func) => {
    return BindFunction(structs, func);
  })
  .join("\n")}
${functions
  .filter(({ name }) => !blocklist.includes(name))
  .filter(({ name }) => !byreflist.includes(name))
  .filter((func) => func.returnType === "void")
  .map((func) => {
    return BindVoidFunction(structs, func);
  })
  .join("\n")}
// By-Reference function bindings
${functions
  .filter(({ name }) => !blocklist.includes(name))
  .filter(({ name }) => byreflist.includes(name))
  .map((func) => {
    return BindFunctionPassByRef(structs, func);
  })
  .join("\n")}

// Shader Functions
void BindSetShaderFloat(const Napi::CallbackInfo& info) {
  float value = floatFromValue(info, 3);
  SetShaderValueV(
     ShaderFromValue(info, 0),
       intFromValue(info, 2),
       &value,
       SHADER_UNIFORM_FLOAT,
       1
  );
}

void BindSetShaderInt(const Napi::CallbackInfo& info) {
  int value = intFromValue(info, 3);
  SetShaderValueV(
     ShaderFromValue(info, 0),
       intFromValue(info, 2),
       &value,
       SHADER_UNIFORM_INT,
       1
  );
}

void BindSetShaderVec2(const Napi::CallbackInfo& info) {
  Vector2 value = Vector2FromValue(info, 3);
  SetShaderValueV(
     ShaderFromValue(info, 0),
       intFromValue(info, 2),
       &value,
       SHADER_UNIFORM_VEC2,
       1
  );
}

void BindSetShaderVec3(const Napi::CallbackInfo& info) {
  Vector3 value = Vector3FromValue(info, 3);
  SetShaderValueV(
     ShaderFromValue(info, 0),
       intFromValue(info, 2),
       &value,
       SHADER_UNIFORM_VEC3,
       1
  );
}

void BindSetShaderVec4(const Napi::CallbackInfo& info) {
  Vector4 value = Vector4FromValue(info, 3);
  SetShaderValueV(
     ShaderFromValue(info, 0),
       intFromValue(info, 2),
       &value,
       SHADER_UNIFORM_VEC4,
       1
  );
}

// Exported JS Module object
Napi::Object Init(Napi::Env env, Napi::Object exports) {

  ${functions
    .filter(({ name }) => !blocklist.includes(name))
    .map(ExportFunctionBinding)
    .join("\n  ")}

  exports.Set("BindSetShaderFloat", Napi::Function::New(env, BindSetShaderFloat));
  exports.Set("BindSetShaderInt", Napi::Function::New(env, BindSetShaderInt));
  exports.Set("BindSetShaderVec2", Napi::Function::New(env, BindSetShaderVec2));
  exports.Set("BindSetShaderVec3", Napi::Function::New(env, BindSetShaderVec3));
  exports.Set("BindSetShaderVec4", Napi::Function::New(env, BindSetShaderVec4));

  return exports;
}

NODE_API_MODULE(addon, Init);
`;

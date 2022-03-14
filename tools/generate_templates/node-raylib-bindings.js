/**
 * Sanitizes a type (primitive or struct) into a string that can be used as part of a function name.
 * Converts anything ending with '*' to 'pointer'
 * @param {*} name
 * @returns
 */
const SanitizeTypeName = name => {
  if (name == 'const char *') {
    return 'string'
  }
  if (name.endsWith('*')) {
    return 'pointer'
  }
  if (name.endsWith('Callback')) {
    return 'function'
  }
  if (name == 'Camera') {
    return 'Camera3D'
  }
  if (name == 'Texture2D') {
    return 'Texture'
  }
  return name.replace(/ /g, '')
}

const TypeUnwrappedLength = (structs, type) => {
  if (type == 'Camera') {
    type = 'Camera3D'
  }
  if (type == 'Texture2D') {
    type = 'Texture'
  }
  let unwrapped_properties = 0
  for (const struct of structs) {
    if (struct.name == type) {
      for (const field of struct.fields) {
        unwrapped_properties += TypeUnwrappedLength(structs, field.type)
      }
    }
  }
  if (unwrapped_properties == 0) { // primitive, not struct. return length 1
    return 1
  }
  return unwrapped_properties
}

const UnwrappedStructProperties = (structs, struct) => {
  let length = 0
  return struct.fields
    .map(field => {
      const out = `${field.type.endsWith('*') ? ` (${field.type})` : ''} ${SanitizeTypeName(field.type)}FromValue(info, index + ${length})`
      length += TypeUnwrappedLength(structs, field.type)
      return out
    })
    .join(',\n    ')
}

const UnwrappedFuncArguments = (structs, func) => {
  if (!func.params) { return '' }
  let length = 0

  return func.params
    .map(param => {
      const out = `${param.type.endsWith('*') ? ` (${param.type})` : ''} ${SanitizeTypeName(param.type)}FromValue(info, ${length})`
      length += TypeUnwrappedLength(structs, param.type)
      return out
    })
    .join(',\n      ')
}

/**
 *
 * @param {*} struct
 * @returns
 */
const FromValue = (structs, struct) => `
inline ${struct.name} ${SanitizeTypeName(struct.name)}FromValue(const Napi::CallbackInfo& info, int index) {
  return (${struct.name}) {
    ${UnwrappedStructProperties(structs, struct)}
  };
}`

/**
 *
 * @param {*} struct
 * @returns
 */
const ToValue = (struct) => `
inline Napi::Value ToValue(Napi::Env env, ${struct.name} obj) {
  Napi::Object out = Napi::Object::New(env);
  ${struct.fields
    .map(field => `out.Set("${field.name}", ToValue(env, obj.${field.name}));`)
    .join('\n  ')
  }
  return out;
}`

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
}`

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
}`

/**
 *
 * @param {*} func
 * @returns
 */
const BindFunctionPassByRef = (structs, func) => {
  let returnType = func.params[0].type
  let length = 1
  returnType = returnType.replace(' *', '')
  return `
Napi::Value Bind${func.name}(const Napi::CallbackInfo& info) {
	${returnType} obj = ${returnType}FromValue(info, 0);
	${func.name}(
		${func.params.length == 1
? '&obj\n'
      : ['&obj'].concat(func.params
			?.filter((param, index) => index != 0)
			.map(param => {
        const out = `${param.type.endsWith('*') ? ` (${param.type})` : ''} ${SanitizeTypeName(param.type)}FromValue(info, ${length})`
        length += TypeUnwrappedLength(structs, param.type)
        return out
      })
			.join(',\n      '))
		}
	);
	return ToValue(info.Env(), obj);
}`
}

/**
 *
 * @param {*} func
 * @returns
 */
const ExportFunctionBinding = func => `exports.Set("Bind${func.name}", Napi::Function::New(env, Bind${func.name}));`

module.exports = ({ functions, structs, enums, blocklist, by_ref_list }) => `
// GENERATED CODE: DO NOT MODIFY
#include <string>
#include <napi.h>
#include <iostream>
#include <cstring>
#include "raylib.h"
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

inline float floatFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>();
}
inline int intFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>();
}
inline void * pointerFromValue(const Napi::CallbackInfo& info, int index) {
  return (void *) info[index].As<Napi::Number>().Int64Value();
}
inline unsigned char unsignedcharFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>().Uint32Value();
}
inline unsigned int unsignedintFromValue(const Napi::CallbackInfo& info, int index) {
  return info[index].As<Napi::Number>();
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

// Convert structs from Napi::Values in info[] arguments
${structs
  .map(struct => { return FromValue(structs, struct) })
  .join('\n')
}
// Convert structs to Napi::Objects for output to JS
${structs
  .map(ToValue)
  .join('\n')
}

inline Texture2D Texture2DFromValue(const Napi::CallbackInfo& info, int index) {
  return (Texture2D) TextureFromValue(info, index);
}
inline RenderTexture2D RenderTexture2DFromValue(const Napi::CallbackInfo& info, int index) {
  return (RenderTexture2D) RenderTextureFromValue(info, index);
}
inline Camera CameraFromValue(const Napi::CallbackInfo& info, int index) {
  return Camera3DFromValue(info, index);
}

// Raylib API function bindings
${functions
	.filter(({ name }) => !blocklist.includes(name))
	.filter(({ name }) => !by_ref_list.includes(name))
  .filter((func) => func.returnType != 'void')
	.map((func) => { return BindFunction(structs, func) })
	.join('\n')
}
${functions
	.filter(({ name }) => !blocklist.includes(name))
	.filter(({ name }) => !by_ref_list.includes(name))
  .filter((func) => func.returnType == 'void')
	.map((func) => { return BindVoidFunction(structs, func) })
	.join('\n')
}
// By-Reference function bindings
${functions
	.filter(({ name }) => !blocklist.includes(name))
	.filter(({ name }) => by_ref_list.includes(name))
	.map((func) => { return BindFunctionPassByRef(structs, func) })
	.join('\n')
}

// Exported JS Module object
Napi::Object Init(Napi::Env env, Napi::Object exports) {

  ${functions
    .filter(({ name }) => !blocklist.includes(name))
    .map(ExportFunctionBinding)
    .join('\n  ')
  }

  return exports;
}

NODE_API_MODULE(addon, Init);
`

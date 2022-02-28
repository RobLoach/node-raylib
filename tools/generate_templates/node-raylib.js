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
  return name.replace(/ /g,'')
}

/**
 * 
 * @param {*} struct 
 * @returns 
 */
const FromValue = (struct) => `
${struct.name} ${SanitizeTypeName(struct.name)}FromValue(const Napi::CallbackInfo& info, int* index) {
  return (${struct.name}) {
    ${struct.fields
      .map(field => `${field.type.endsWith('*')? ` (${field.type})`: ``} ${SanitizeTypeName(field.type)}FromValue(info, index += 1)`)
      .join(',\n    ')
    }
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
const BindFunction = (func) => `
Napi::Value Bind${func.name}(const Napi::CallbackInfo& info) {
  int index = -1;
	return ToValue(info.Env(), 
		${func.name}(
			${!func.params? '' :
        func.params
				?.map(param => `${param.type.endsWith('*')? ` (${param.type})`: ``} ${SanitizeTypeName(param.type)}FromValue(info, &index)`)
				.join(',\n      ')
			}
		)
	);
}`

 /**
 * 
 * @param {*} func 
 * @returns 
 */
  const BindVoidFunction = (func) => `
void Bind${func.name}(const Napi::CallbackInfo& info) {
  int index = -1;
  ${func.name}(
    ${!func.params? '' :
      func.params
      ?.map(param => `${param.type.endsWith('*')? ` (${param.type})`: ``} ${SanitizeTypeName(param.type)}FromValue(info, &index)`)
      .join(',\n      ')
    }
  );
}`

/**
 * 
 * @param {*} func 
 * @returns 
 */
const BindFunctionPassByRef = (func) => {
	let returnType = func.params[0].type
  returnType = returnType.replace(' *', '')
	return `
Napi::Value Bind${func.name}(const Napi::CallbackInfo& info) {
	int index = -1;
	${returnType} obj = ${returnType}FromValue(info, &index);
	${func.name}(
		${func.params.length == 1 ? '&obj\n' :
      ['&obj'].concat(func.params
			?.filter((param, index) => index != 0)
			.map(param => `${param.type.endsWith('*')? ` (${param.type})`: ``} ${SanitizeTypeName(param.type)}FromValue(info, &index)`)
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

float floatFromValue(const Napi::CallbackInfo& info, int* index) {
  return info[(*index) += 1].As<Napi::Number>();
}
int intFromValue(const Napi::CallbackInfo& info, int* index) {
  std::cout<< *index << std::endl;
  return info[(*index) += 1].As<Napi::Number>();
}
void * pointerFromValue(const Napi::CallbackInfo& info, int* index) {
  return (void *) info[(*index) += 1].As<Napi::Number>().Int64Value();
}
unsigned char unsignedcharFromValue(const Napi::CallbackInfo& info, int* index) {
  return info[(*index) += 1].As<Napi::Number>().Uint32Value();
}
unsigned int unsignedintFromValue(const Napi::CallbackInfo& info, int* index) {
  return info[(*index) += 1].As<Napi::Number>();
}
bool boolFromValue(const Napi::CallbackInfo& info, int* index) {
  return info[(*index) += 1].As<Napi::Boolean>();
}
const char * stringFromValue(const Napi::CallbackInfo& info, int* index) {
  std::cout<< *index << std::endl;
  return info[(*index) += 1].As<Napi::String>().Utf8Value().c_str();
}
char charFromValue(const Napi::CallbackInfo& info, int* index) {
  return info[(*index) += 1].As<Napi::Number>().Uint32Value();
}

// Convert structs from Napi::Values in info[] arguments
${structs
  .map(FromValue)
  .join('\n')
}
// Convert structs to Napi::Objects for output to JS
${structs
  .map(ToValue)
  .join('\n')
}

Texture2D Texture2DFromValue(const Napi::CallbackInfo& info, int* index) {
  return (Texture2D) TextureFromValue(info, index);
}
RenderTexture2D RenderTexture2DFromValue(const Napi::CallbackInfo& info, int* index) {
  return (RenderTexture2D) RenderTextureFromValue(info, index);
}
Camera CameraFromValue(const Napi::CallbackInfo& info, int* index) {
  return Camera3DFromValue(info, index);
}

// Raylib API function bindings
${functions
	.filter(({ name }) => !blocklist.includes(name))
	.filter(({ name }) => !by_ref_list.includes(name))
  .filter((func) => func.returnType != 'void')
	.map(BindFunction)
	.join('\n')
}
${functions
	.filter(({ name }) => !blocklist.includes(name))
	.filter(({ name }) => !by_ref_list.includes(name))
  .filter((func) => func.returnType == 'void')
	.map(BindVoidFunction)
	.join('\n')
}
// By-Reference function bindings
${functions
	.filter(({ name }) => !blocklist.includes(name))
	.filter(({ name }) => by_ref_list.includes(name))
	.map(BindFunctionPassByRef)
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

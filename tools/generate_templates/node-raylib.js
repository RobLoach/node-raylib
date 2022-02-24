const addDefine = ({ name }) => `AddDefineInteger(env, exports, "${name}", ${name});`

const addFunction = ({ name }) => `AddFunction(env, exports, "${name}", &${name});`

module.exports = ({ enums, blocklist, functions }) => `
// GENERATED CODE: DO NOT MODIFY

#ifndef NODE_RAYLIB_NODE_RAYLIB_H
#define NODE_RAYLIB_NODE_RAYLIB_H
#include <string>
#include <napi.h>
#include "raylib.h"
#include "../lib/AddDefine.h"
#include "../lib/AddFunction.h"
void node_raylib_bindings_defines(Napi::Env& env, Napi::Object& exports) {
  ${enums
    .filter(({ name }) => !blocklist.includes(name))
    .map(({ values }) => values.map(addDefine).join('\n  '))
    .join('\n  ')
  }
}
void node_raylib_bindings_functions(Napi::Env& env, Napi::Object& exports) {
  ${functions
    .filter(({ name }) => !blocklist.includes(name))
    .map(addFunction)
    .join('\n  ')
  }
}
void node_raylib_bindings(Napi::Env& env, Napi::Object& exports) {
  node_raylib_bindings_defines(env, exports);
  node_raylib_bindings_functions(env, exports);
}
#endif
`

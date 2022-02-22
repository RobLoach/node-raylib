# Code Generator Template

start with:
```cpp
// GENERATED CODE - DO NOT MODIFY
#include <napi.h>
#include "./raylib/include/raylib.h"
using namespace Napi;
```
## Struct / Type converters
Thinking on it - it seems like these should be fine to handle all type conversions with operator overloading. 

It's more likely that the performance difference was coming from avoiding [this code?](https://github.com/RobLoach/node-raylib/blob/master/src/lib/ValidArgs.h). Another difference that may be impacting performance in the current bindings is that they enforce validating the number of arguments, and also validate the type of each argument (by using the generics?). It is somewhat debatable if that is necessary - the JS/TS wrapper functions should be able to handle that, which would be faster? 

Two points on this (from my perspective):
- If an argument of the func is an invalid type (unable to be converted from Napi::Value to the intended type) the program will crash already. So checking from C++ and throwing an exception duplicates node-addon-api logic?
- By inlining each function argument - cases where _more_ arguments than necessary are supplied, those extra arguments will be ignored entirely. If too few are supplied, node-addon-api will encounter an `undefined` and throw an exception when trying to access it from `info[]`. This seems like it somewhat improves functionality in the case that the user makes a mistake that wouldn't 'break' the function?

Anyways, the code templates. We may already have these working:
```cpp
// for each type in api.json
${type.name} FromValue(const Napi::CallbackInfo& info, int& index) {
  // if it's a pointer
  // note: some type.name that end in "*" arent - they are strings, or buffers
    return (int64_t) &FromValue(&info, &index);
  // else if primitive type:
    return info[index]${convertFromValue(type.name)}; // returns .As<Napi::ABC>().XYZ()
  // else if struct:
    index--;
    return (${type.name}) {
      // for each property of struct:
      FromValue(&info, &index++);
    };
}
```

```cpp
Napi::Value ToValue(napi_env env, ${type.name} obj) {
  // if it's a pointer
    return Napi::Number::New(env, (int64_t) obj);
  // if it's a primitive
    return ${convertToValue(type.name)}(env, obj); // returns Napi::ABC::New
  // if it's a struct
    Napi::Object out = Napi::Object::New(env);
    // for each struct property
      out.Set("${struct.property[i]}", ToValue(env, obj.${struct.property[i]}));
    return out;
}
```
## Function Bindings

```cpp
${func.returnType} Bind${func.name}(const Napi::CallbackInfo& info) {
  int index = -1;
  return ToValue(info.Env(),
    ${func.name}(
      // for each function argument
        FromValue(&info, &index++);
    )
  );
}
```

## Export Bindings
```cpp
Napi::Object Init(Napi::Env env, Napi::Object exports) {

  // for each function
  exports.Set(
    Napi::String::New(env, "${function.name}"),
    Napi::Function::New(env, Bind${function.name})
  );

  return exports;
}

NODE_API_MODULE(addon, Init);
//EOF
```
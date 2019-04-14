#ifndef NODE_RAYLIB_ADDFUNCTION_H_
#define NODE_RAYLIB_ADDFUNCTION_H_

#include <napi.h>
#include "./ValidArgs.h"
#include "./ToObject.h"


#include <type_traits>
#include <typeinfo>
#include <iostream>
#include <tuple>

#include <initializer_list>

/**
 * Returns the amount of arguments in the given function.
 */
template <typename R, typename ... Types>
constexpr std::integral_constant<unsigned, sizeof ...(Types)> getArgumentCount( R(*f)(Types ...))
{
   return std::integral_constant<unsigned, sizeof ...(Types)>{};
}

Napi::Value ToObject(Napi::Env& env, int val) {
  return Napi::Number::New(env, val);
}
Napi::Value ToObject(Napi::Env& env, double val) {
  return Napi::Number::New(env, val);
}
Napi::Value ToObject(Napi::Env& env, long val) {
  return Napi::Number::New(env, val);
}
Napi::Value ToObject(Napi::Env& env, float val) {
  return Napi::Number::New(env, val);
}
Napi::Value ToObject(Napi::Env& env, const char* val) {
  return Napi::String::New(env, val);
}
Napi::Value ToObject(Napi::Env& env, bool val) {
  return Napi::Boolean::New(env, val);
}

// template <typename ... Types>
// std::vector getArgs(Napi::Env& env, Napi::Object& exports, int count) {
//   std::vector output = std::vector();
//   for (int argNumber = 0; argNumber < count; argNumber++) {
//     auto argument = info[argNumber];
//   }

//   return output;
// }


void SetArgument(Napi::Value v, int& result) {
  result = v.ToNumber().Int32Value();
}

void SetArgument(Napi::Value v, long& result) {
  result = v.ToNumber().Int64Value();
}

void SetArgument(Napi::Value v, double& result) {
  result = v.ToNumber().DoubleValue();
}

void SetArgument(Napi::Value v, float& result) {
  result = v.ToNumber().FloatValue();
}

void SetArgument(Napi::Value v, bool& result) {
  result = v.ToBoolean().Value();
}



// template <class... Args>
// struct type_list
// {
//    template <std::size_t N>
//    using type = typename std::tuple_element<N, std::tuple<Args...>>::type;
// };


template<int N, typename... Ts>
using NthTypeOf = typename std::tuple_element<N, std::tuple<Ts...>>::type;

/**
 * Adds a function with void return to Node.js.
 */
template <typename ... Types>
void AddMethod(Napi::Env& env, Napi::Object& exports, std::string name, void(*f)(Types ... types)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();

    // Check argument list.
    size_t count = decltype(getArgumentCount(f))::value;
    if (!ValidArgs(env, info, count)) {
      return env.Null();
    }

    // Invoke.

    if (count == 0) {
      (*f)();
      return env.Null();
    }



    std::tuple<Types...> args;
    if (count > 0) {
      NthTypeOf<0, Types...> arg0;
      SetArgument(info[0], arg0);
      std::tuple_cat(args, std::make_tuple(arg0));
    }
    // if (count > 1) {
    //   type_list<Types...>::type<1> arg1;
    //   SetArgument(info[1], arg1);
    //   std::tuple_cat(args, std::make_tuple(arg1));
    // }
    // if (count > 2) {
    //   type_list<Types...>::type<2> arg2;
    //   SetArgument(info[2], arg2);
    //   std::tuple_cat(args, std::make_tuple(arg2));
    // }
    // if (count > 3) {
    //   type_list<Types...>::type<3> arg3;
    //   SetArgument(info[3], arg3);
    //   std::tuple_cat(args, std::make_tuple(arg3));
    // }
    // if (count > 4) {
    //   type_list<Types...>::type<4> arg4;
    //   SetArgument(info[4], arg4);
    //   std::tuple_cat(args, std::make_tuple(arg4));
    // }
    std::apply(*f, args);

    return env.Null();
  }));
}

/**
 * Adds a function with a return to Node.js.
 */
template <typename R, typename ... Types>
void AddMethod(Napi::Env& env, Napi::Object& exports, std::string name, R(*f)(Types ...)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();

    // Check argument list.
    size_t count = decltype(getArgumentCount(f))::value;
    if (!ValidArgs(env, info, count)) {
      return env.Null();
    }

    // Invoke.
    R output = (*f)();

    return ToObject(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)()) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 0)) {
      return env.Null();
    }
    (*f)();
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(int)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    int arg0 = info[0].As<Napi::Number>().Int32Value();
    (*f)(arg0);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(float)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    float arg0 = info[0].As<Napi::Number>().FloatValue();
    (*f)(arg0);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(float, float)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    float arg0 = info[0].As<Napi::Number>().FloatValue();
    float arg1 = info[1].As<Napi::Number>().FloatValue();
    (*f)(arg0, arg1);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Vector2, float, float, int, int, int, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 7)) {
      return env.Null();
    }
    Vector2 arg0 = ToVector2(env, info[0]);
    float arg1 = info[1].As<Napi::Number>().FloatValue();
    float arg2 = info[2].As<Napi::Number>().FloatValue();
    int arg3 = info[3].As<Napi::Number>().Int32Value();
    int arg4 = info[4].As<Napi::Number>().Int32Value();
    int arg5 = info[5].As<Napi::Number>().Int32Value();
    Color arg6 = ToColor(env, info[6]);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Vector2, float, int, int, int, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 6)) {
      return env.Null();
    }
    Vector2 arg0 = ToVector2(env, info[0]);
    float arg1 = info[1].As<Napi::Number>().FloatValue();
    int arg2 = info[2].As<Napi::Number>().Int32Value();
    int arg3 = info[3].As<Napi::Number>().Int32Value();
    int arg4 = info[4].As<Napi::Number>().Int32Value();
    Color arg5 = ToColor(env, info[5]);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(int, int, float, Color, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 5)) {
      return env.Null();
    }
    int arg0 = info[0].As<Napi::Number>().Int32Value();
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    float arg2 = info[2].As<Napi::Number>().FloatValue();
    Color arg3 = ToColor(env, info[3]);
    Color arg4 = ToColor(env, info[4]);
    (*f)(arg0, arg1, arg2, arg3, arg4);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(unsigned char)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    unsigned char arg0 = info[0].As<Napi::Number>().Int32Value();
    (*f)(arg0);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(unsigned int)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    unsigned int arg0 = info[0].As<Napi::Number>().Uint32Value();
    (*f)(arg0);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(int, int)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    int arg0 = info[0].As<Napi::Number>().Int32Value();
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    (*f)(arg0, arg1);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(int, int, const char*)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 3)) {
      return env.Null();
    }
    int arg0 = info[0].As<Napi::Number>().Int32Value();
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    std::string arg2 = info[2].As<Napi::String>().Utf8Value();
    (*f)(arg0, arg1, arg2.c_str());
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(const char*, int)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    std::string arg0 = info[0].As<Napi::String>().Utf8Value();
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    (*f)(arg0.c_str(), arg1);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(const char*, int, int, int, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 5)) {
      return env.Null();
    }
    std::string arg0 = info[0].As<Napi::String>().Utf8Value();
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    int arg2 = info[2].As<Napi::Number>().Int32Value();
    int arg3 = info[3].As<Napi::Number>().Int32Value();
    Color arg4 = ToColor(env, info[4]);

    (*f)(arg0.c_str(), arg1, arg2, arg3, arg4);

    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(int, int, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 3)) {
      return env.Null();
    }
    int arg0 = info[0].As<Napi::Number>().Int32Value();
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    Color arg2 = ToColor(env, info[2]);
    (*f)(arg0, arg1, arg2);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(int, int, int, int, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 5)) {
      return env.Null();
    }
    int arg0 = info[0].As<Napi::Number>().Int32Value();
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    int arg2 = info[2].As<Napi::Number>().Int32Value();
    int arg3 = info[3].As<Napi::Number>().Int32Value();
    Color arg4 = ToColor(env, info[4]);
    (*f)(arg0, arg1, arg2, arg3, arg4);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(int, int, int, int, Color, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 6)) {
      return env.Null();
    }
    int arg0 = info[0].As<Napi::Number>().Int32Value();
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    int arg2 = info[2].As<Napi::Number>().Int32Value();
    int arg3 = info[3].As<Napi::Number>().Int32Value();
    Color arg4 = ToColor(env, info[4]);
    Color arg5 = ToColor(env, info[5]);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(const char*)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    std::string arg0 = info[0].As<Napi::String>().Utf8Value();
    (*f)(arg0.c_str());
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Vector2, float, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 3)) {
      return env.Null();
    }
    Vector2 arg0 = ToVector2(env, info[0]);
    float arg1 = info[1].As<Napi::Number>().FloatValue();
    Color arg2 = ToColor(env, info[2]);
    (*f)(arg0, arg1, arg2);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Vector2, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    Vector2 arg0 = ToVector2(env, info[0]);
    Color arg1 = ToColor(env, info[1]);
    (*f)(arg0, arg1);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Vector2, Vector2, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 3)) {
      return env.Null();
    }
    Vector2 arg0 = ToVector2(env, info[0]);
    Vector2 arg1 = ToVector2(env, info[1]);
    Color arg2 = ToColor(env, info[2]);
    (*f)(arg0, arg1, arg2);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Vector2, Vector2, Vector2, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 4)) {
      return env.Null();
    }
    Vector2 arg0 = ToVector2(env, info[0]);
    Vector2 arg1 = ToVector2(env, info[1]);
    Vector2 arg2 = ToVector2(env, info[2]);
    Color arg3 = ToColor(env, info[3]);
    (*f)(arg0, arg1, arg2, arg3);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, const char* (*f)()) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    const char* output = (*f)();
    return Napi::String::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, char* (*f)(const char*)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    std::string arg0 = info[0].As<Napi::String>().Utf8Value();
    char* output = (*f)(arg0.c_str());
    return Napi::String::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, const char* (*f)(const char*)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    std::string arg0 = info[0].As<Napi::String>().Utf8Value();
    const char* output = (*f)(arg0.c_str());
    return Napi::String::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, bool (*f)()) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 0)) {
      return env.Null();
    }
    bool output = (*f)();
    return Napi::Boolean::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, float (*f)()) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 0)) {
      return env.Null();
    }
    float output = (*f)();
    return Napi::Boolean::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, double (*f)()) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 0)) {
      return env.Null();
    }
    double output = (*f)();
    return Napi::Boolean::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, bool (*f)(int)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    int arg0 = info[0].As<Napi::Number>().Int32Value();
    bool output = (*f)(arg0);
    return Napi::Boolean::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, Vector2 (*f)()) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 0)) {
      return env.Null();
    }
    Vector2 output = (*f)();
    return ToObject(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, Vector2 (*f)(int)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    int arg0 = info[0].As<Napi::Number>().Int32Value();
    Vector2 output = (*f)(arg0);
    return ToObject(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    Color arg0 = ToColor(env, info[0]);
    (*f)(arg0);

    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Rectangle, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    Rectangle arg0 = ToRectangle(env, info[0]);
    Color arg1 = ToColor(env, info[1]);
    (*f)(arg0, arg1);

    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Rectangle, Rectangle)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    Rectangle arg0 = ToRectangle(env, info[0]);
    Rectangle arg1 = ToRectangle(env, info[1]);
    (*f)(arg0, arg1);

    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, bool (*f)(Rectangle, Rectangle)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    Rectangle arg0 = ToRectangle(env, info[0]);
    Rectangle arg1 = ToRectangle(env, info[1]);
    bool output = (*f)(arg0, arg1);

    return Napi::Boolean::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, int (*f)(Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    Color arg0 = ToColor(env, info[0]);
    int output = (*f)(arg0);

    return Napi::Number::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, unsigned int (*f)(const char *)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    std::string arg0 = info[0].As<Napi::String>().Utf8Value();
    unsigned int output = (*f)(arg0.c_str());

    return Napi::Number::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, int (*f)(const char *)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    std::string arg0 = info[0].As<Napi::String>().Utf8Value();
    int output = (*f)(arg0.c_str());

    return Napi::Number::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, int (*f)(const char *, int)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    std::string arg0 = info[0].As<Napi::String>().Utf8Value();
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    int output = (*f)(arg0.c_str(), arg1);

    return Napi::Number::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, int (*f)()) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 0)) {
      return env.Null();
    }
    int output = (*f)();

    return Napi::Number::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, Vector4 (*f)(Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    Color arg0 = ToColor(env, info[0]);
    Vector4 output = (*f)(arg0);
    return ToObject(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, Vector3 (*f)(Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    Color arg0 = ToColor(env, info[0]);
    Vector3 output = (*f)(arg0);
    return ToObject(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, Color (*f)(int)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    int arg0 = info[0].As<Napi::Number>().Int32Value();
    Color output = (*f)(arg0);
    return ToObject(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, Color (*f)(Color, float)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    Color arg0 = ToColor(env, info[0]);
    float arg1 = info[1].As<Napi::Number>().FloatValue();
    Color output = (*f)(arg0, arg1);
    return ToObject(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, bool (*f)(const char*)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    std::string arg0 = info[0].As<Napi::String>().Utf8Value();
    bool output = (*f)(arg0.c_str());
    return Napi::Boolean::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, bool (*f)(const char*, const char*)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    std::string arg0 = info[0].As<Napi::String>().Utf8Value();
    std::string arg1 = info[1].As<Napi::String>().Utf8Value();
    bool output = (*f)(arg0.c_str(), arg1.c_str());
    return Napi::Boolean::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, int (*f)(int, int)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    int arg0 = info[0].As<Napi::Number>().Int32Value();
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    int output = (*f)(arg0, arg1);
    return Napi::Number::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, int (*f)(int, int, int)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 3)) {
      return env.Null();
    }
    int arg0 = info[0].As<Napi::Number>().Int32Value();
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    int arg2 = info[2].As<Napi::Number>().Int32Value();
    int output = (*f)(arg0, arg1, arg2);
    return Napi::Number::New(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(int, int, float, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 4)) {
      return env.Null();
    }
    int arg0 = info[0].As<Napi::Number>().Int32Value();
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    float arg2 = info[2].As<Napi::Number>().FloatValue();
    Color arg3 = ToColor(env, info[3]);
    (*f)(arg0, arg1, arg2, arg3);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, Image (*f)(const char*)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    std::string arg0 = info[0].As<Napi::String>().Utf8Value();
    Image output = (*f)(arg0.c_str());
    return ToObject(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, Image (*f)(Texture)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    Texture arg0 = ToTexture(env, info[0]);
    Image output = (*f)(arg0);
    return ToObject(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, Image (*f)(Image)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    Image arg0 = ToImage(env, info[0]);
    Image output = (*f)(arg0);
    return ToObject(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, Texture (*f)(Image)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    Image arg0 = ToImage(env, info[0]);
    Texture output = (*f)(arg0);
    return ToObject(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, Texture (*f)(const char*)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    std::string arg0 = info[0].As<Napi::String>().Utf8Value();
    Texture output = (*f)(arg0.c_str());
    return ToObject(env, output);
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Image)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    Image arg0 = ToImage(env, info[0]);
    (*f)(arg0);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Texture)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    Texture arg0 = ToTexture(env, info[0]);
    (*f)(arg0);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Texture, int, int, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 4)) {
      return env.Null();
    }
    Texture arg0 = ToTexture(env, info[0]);
    int arg1 = info[1].As<Napi::Number>().Int32Value();
    int arg2 = info[2].As<Napi::Number>().Int32Value();
    Color arg3 = ToColor(env, info[3]);
    (*f)(arg0, arg1, arg2, arg3);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Texture, Vector2, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 3)) {
      return env.Null();
    }
    Texture arg0 = ToTexture(env, info[0]);
    Vector2 arg1 = ToVector2(env, info[1]);
    Color arg2 = ToColor(env, info[2]);
    (*f)(arg0, arg1, arg2);
    return env.Null();
  }));
}

void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(Texture, Vector2, float, float, Color)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 5)) {
      return env.Null();
    }
    Texture arg0 = ToTexture(env, info[0]);
    Vector2 arg1 = ToVector2(env, info[1]);
    float arg2 = info[2].As<Napi::Number>().FloatValue();
    float arg3 = info[3].As<Napi::Number>().FloatValue();
    Color arg4 = ToColor(env, info[4]);
    (*f)(arg0, arg1, arg2, arg3, arg4);
    return env.Null();
  }));
}

#endif

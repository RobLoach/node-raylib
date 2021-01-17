#ifndef NODE_RAYLIB_ADDFUNCTION_H_
#define NODE_RAYLIB_ADDFUNCTION_H_

#include <napi.h>
#include "ValidArgs.h"
#include "ToObject.h"
#include "ToValue.h"
#include "GetArgFromParam.h"
#include "CleanUp.h"

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

template <typename P1>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    (*f)(arg0);
    CleanUp(arg0);
    return env.Null();
  }));
}

template <typename P1, typename P2>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    (*f)(arg0, arg1);
    CleanUp(arg0);
    CleanUp(arg1);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 3)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    (*f)(arg0, arg1, arg2);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 4)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    (*f)(arg0, arg1, arg2, arg3);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4, typename P5>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4, P5)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 5)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    (*f)(arg0, arg1, arg2, arg3, arg4);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4, typename P5, typename P6>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4, P5, P6)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 6)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4, P5, P6, P7)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 7)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4, P5, P6, P7, P8)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 8)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8, typename P9>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4, P5, P6, P7, P8, P9)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 9)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    auto arg8 = GetArgFromParam<P9>(env, info, 8);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    CleanUp(arg8);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8, typename P9, typename P10>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4, P5, P6, P7, P8, P9, P10)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 10)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    auto arg8 = GetArgFromParam<P9>(env, info, 8);
    auto arg9 = GetArgFromParam<P10>(env, info, 9);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    CleanUp(arg8);
    CleanUp(arg9);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8, typename P9, typename P10, typename P11>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 11)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    auto arg8 = GetArgFromParam<P9>(env, info, 8);
    auto arg9 = GetArgFromParam<P10>(env, info, 9);
    auto arg10 = GetArgFromParam<P11>(env, info, 10);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    CleanUp(arg8);
    CleanUp(arg9);
    CleanUp(arg10);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8, typename P9, typename P10, typename P11, typename P12>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 12)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    auto arg8 = GetArgFromParam<P9>(env, info, 8);
    auto arg9 = GetArgFromParam<P10>(env, info, 9);
    auto arg10 = GetArgFromParam<P11>(env, info, 10);
    auto arg11 = GetArgFromParam<P12>(env, info, 11);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    CleanUp(arg8);
    CleanUp(arg9);
    CleanUp(arg10);
    CleanUp(arg11);
    return env.Null();
  }));
}

template <typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8, typename P9, typename P10, typename P11, typename P12, typename P13>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, void (*f)(P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 13)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    auto arg8 = GetArgFromParam<P9>(env, info, 8);
    auto arg9 = GetArgFromParam<P10>(env, info, 9);
    auto arg10 = GetArgFromParam<P11>(env, info, 10);
    auto arg11 = GetArgFromParam<P12>(env, info, 11);
    auto arg12 = GetArgFromParam<P13>(env, info, 12);
    (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    CleanUp(arg8);
    CleanUp(arg9);
    CleanUp(arg10);
    CleanUp(arg11);
    CleanUp(arg12);
    return env.Null();
  }));
}

template <typename ReturnType>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)()) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 0)) {
      return env.Null();
    }
    ReturnType output = (*f)();
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 1)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    ReturnType output = (*f)(arg0);
    CleanUp(arg0);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 2)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    ReturnType output = (*f)(arg0, arg1);
    CleanUp(arg0);
    CleanUp(arg1);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 3)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    ReturnType output = (*f)(arg0, arg1, arg2);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 4)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 5)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5, typename P6>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5, P6)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 6)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4, arg5);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5, P6, P7)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 7)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5, P6, P7, P8)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 8)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8, typename P9>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5, P6, P7, P8, P9)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 9)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    auto arg8 = GetArgFromParam<P9>(env, info, 8);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    CleanUp(arg8);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8, typename P9, typename P10>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5, P6, P7, P8, P9, P10)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 10)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    auto arg8 = GetArgFromParam<P9>(env, info, 8);
    auto arg9 = GetArgFromParam<P10>(env, info, 9);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    CleanUp(arg8);
    CleanUp(arg9);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8, typename P9, typename P10, typename P11>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 11)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    auto arg8 = GetArgFromParam<P9>(env, info, 8);
    auto arg9 = GetArgFromParam<P10>(env, info, 9);
    auto arg10 = GetArgFromParam<P11>(env, info, 10);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    CleanUp(arg8);
    CleanUp(arg9);
    CleanUp(arg10);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8, typename P9, typename P10, typename P11, typename P12>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 12)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    auto arg8 = GetArgFromParam<P9>(env, info, 8);
    auto arg9 = GetArgFromParam<P10>(env, info, 9);
    auto arg10 = GetArgFromParam<P11>(env, info, 10);
    auto arg11 = GetArgFromParam<P12>(env, info, 11);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    CleanUp(arg8);
    CleanUp(arg9);
    CleanUp(arg10);
    CleanUp(arg11);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8, typename P9, typename P10, typename P11, typename P12, typename P13>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 13)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    auto arg8 = GetArgFromParam<P9>(env, info, 8);
    auto arg9 = GetArgFromParam<P10>(env, info, 9);
    auto arg10 = GetArgFromParam<P11>(env, info, 10);
    auto arg11 = GetArgFromParam<P12>(env, info, 11);
    auto arg12 = GetArgFromParam<P13>(env, info, 12);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    CleanUp(arg8);
    CleanUp(arg9);
    CleanUp(arg10);
    CleanUp(arg11);
    CleanUp(arg12);
    return ToValue(env, output);
  }));
}

template <typename ReturnType, typename P1, typename P2, typename P3, typename P4, typename P5, typename P6, typename P7, typename P8, typename P9, typename P10, typename P11, typename P12, typename P13, typename P14>
void AddFunction(Napi::Env& env, Napi::Object& exports, const std::string& name, ReturnType (*f)(P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14)) {
  exports.Set(Napi::String::New(env, name), Napi::Function::New(env, [f] (const Napi::CallbackInfo& info) -> Napi::Value {
    Napi::Env env = info.Env();
    if (!ValidArgs(env, info, 14)) {
      return env.Null();
    }
    auto arg0 = GetArgFromParam<P1>(env, info, 0);
    auto arg1 = GetArgFromParam<P2>(env, info, 1);
    auto arg2 = GetArgFromParam<P3>(env, info, 2);
    auto arg3 = GetArgFromParam<P4>(env, info, 3);
    auto arg4 = GetArgFromParam<P5>(env, info, 4);
    auto arg5 = GetArgFromParam<P6>(env, info, 5);
    auto arg6 = GetArgFromParam<P7>(env, info, 6);
    auto arg7 = GetArgFromParam<P8>(env, info, 7);
    auto arg8 = GetArgFromParam<P9>(env, info, 8);
    auto arg9 = GetArgFromParam<P10>(env, info, 9);
    auto arg10 = GetArgFromParam<P11>(env, info, 10);
    auto arg11 = GetArgFromParam<P12>(env, info, 11);
    auto arg12 = GetArgFromParam<P13>(env, info, 12);
    auto arg13 = GetArgFromParam<P14>(env, info, 13);
    ReturnType output = (*f)(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13);
    CleanUp(arg0);
    CleanUp(arg1);
    CleanUp(arg2);
    CleanUp(arg3);
    CleanUp(arg4);
    CleanUp(arg5);
    CleanUp(arg6);
    CleanUp(arg7);
    CleanUp(arg8);
    CleanUp(arg9);
    CleanUp(arg10);
    CleanUp(arg11);
    CleanUp(arg12);
    CleanUp(arg13);
    return ToValue(env, output);
  }));
}

#endif

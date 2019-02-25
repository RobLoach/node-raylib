#ifndef NODE_RAYLIB_ADDFUNCTION_H_
#define NODE_RAYLIB_ADDFUNCTION_H_

#include <napi.h>
#include "./ValidArgs.h"
#include "./ToObject.h"

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
    if (!ValidArgs(env, info, 3)) {
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
    if (!ValidArgs(env, info, 3)) {
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

#endif

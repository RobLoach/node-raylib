# notes on code-gen

With raylib 4, we started to generate more code, to ease future updates & simplify the binding process. This documents the current system. You can find the upstream definitions [here](https://github.com/raysan5/raylib/blob/master/parser/raylib_api.json).

## struct-input example

### DrawTexture

function/structs (in api JSON) look like this:

```json
[
{
  "name": "DrawTexture",
  "description": "Draw a Texture2D",
  "returnType": "void",
  "params": {
    "texture": "Texture2D",
    "posX": "int",
    "posY": "int",
    "tint": "Color"
  }
},
{
  "name": "Texture",
  "description": "",
  "fields": [
    {
      "name": "id",
      "type": "unsigned int",
      "description": "OpenGL texture id"
    },
    {
      "name": "width",
      "type": "int",
      "description": "Texture base width"
    },
    {
      "name": "height",
      "type": "int",
      "description": "Texture base height"
    },
    {
      "name": "mipmaps",
      "type": "int",
      "description": "Mipmap levels, 1 by default"
    },
    {
      "name": "format",
      "type": "int",
      "description": "Data format (PixelFormat type)"
    }
  ]
},
{
  "name": "Color",
  "description": "",
  "fields": [
    {
      "name": "r",
      "type": "unsigned char",
      "description": "Color red value"
    },
    {
      "name": "g",
      "type": "unsigned char",
      "description": "Color green value"
    },
    {
      "name": "b",
      "type": "unsigned char",
      "description": "Color blue value"
    },
    {
      "name": "a",
      "type": "unsigned char",
      "description": "Color alpha value"
    }
  ]
}
]
```

so we generate a wrapper for `DrawTexture` that flattens the structs

```cpp
void BindDrawTexture(const Napi::CallbackInfo& info) {
  DrawTexture(
    (Texture2D) {
      info[0].As<Napi::Number>(),
      info[1].As<Napi::Number>(),
      info[2].As<Napi::Number>(),
      info[3].As<Napi::Number>(),
      info[4].As<Napi::Number>(),
    },
    info[5].As<Napi::Number>(),
    info[6].As<Napi::Number>(),
    (Color){
      (int)info[7].As<Napi::Number>(),
      (int)info[8].As<Napi::Number>(),
      (int)info[9].As<Napi::Number>(),
      (int)info[10].As<Napi::Number>()
    }
  );
}
```

and the JS-wrapper looks like this (flattening the structs and calling them):

```ts
export function DrawTexture(texture: Texture, posX: Number, posY: Number, tint: Color) {
  r.BindDrawTexture(...processTextureInput(texture), posX, posY, ...processColorInput(color))
}

// initial process just flattens 
function processColorInput(color) {
  return [color.r, color.g, color.b, color.a]
}

// initial process just flattens 
function processTextureInput(texture) {
  return [texture.id, texture.width, texture.height, texture.mipmaps, texture.format]
}
```

Later, we may change the best way to pass structs over NAPI boundary, so put the code in `BindDrawTextureFlat` (C) and `process*` (JS).

## struct output example

### LoadTexture

function/structs (in api JSON) look like this:

```json
[
  {
    "name": "LoadTexture",
    "description": "Load texture from file into GPU memory (VRAM)",
    "returnType": "Texture2D",
    "params": {
      "fileName": "const char *"
    }
  },
  {
    "name": "Texture",
    "description": "",
    "fields": [
      {
        "name": "id",
        "type": "unsigned int",
        "description": "OpenGL texture id"
      },
      {
        "name": "width",
        "type": "int",
        "description": "Texture base width"
      },
      {
        "name": "height",
        "type": "int",
        "description": "Texture base height"
      },
      {
        "name": "mipmaps",
        "type": "int",
        "description": "Mipmap levels, 1 by default"
      },
      {
        "name": "format",
        "type": "int",
        "description": "Data format (PixelFormat type)"
      }
    ]
  }
]
```

so we generate a wrapper for `BindLoadTexture` that un-flattens the structs for output

```cpp
Napi::Object BindLoadTexture(const Napi::CallbackInfo& info) {
    Texture obj = LoadTexture(
        info[0].As<Napi::String>().Utf8Value().c_str()
    );
    Napi::Object out = Napi::Object::New(info.Env());
    out.Set("id", obj.id);
    out.Set("width", obj.width);
    out.Set("height", obj.height);
    out.Set("mipmaps", obj.mipmaps);
    out.Set("format", obj.format);
    out.Set("pointer", BindGetTexturePointer(obj))
    return out;
}

Napi::Number BindGetTexturePointer(const Napi::CallbackInfo& info) {
  Texture2D tex = TextureFromNAPIObject(info[0].As<Napi::Object>());
  void* ptr = MemAlloc(sizeof(Texture2D));
  *(Texture2D*)ptr = tex;
  return Napi::Number::New(info.Env(), (int64_t) ptr);
}
```

and the JS looks like this:

```ts
export function DrawTexture(fileName: String) {
  return processTextureOutput(r.BindLoadTexture(fileName))
}

// immutable texture, with hidden pointer inside it
function processTextureOutput(texture) {
  const ob = {
      id: texture.id,
      width: texture.width,
      height: texture.height,
      mipmaps: texture.mipmaps,
      format: texture.format
  }
  Object.defineProperty(obj, 'pointer', {
      enumerable: false,
      writable: false,
      value: texture.pointer
  })
  Object.freeze(ob)

  return ob
}
```

## free struct example

### UnloadTexture

We free the struct in C-space:

```cpp
void BindUnloadTexture(const Napi::CallbackInfo& info) {
  UnloadTexture(*(Texture2D*)info[0].As<Napi::Number>().Int64Value());
  MemFree((void*)info[0].As<Napi::Number>().Int64Value());
}
```

And pull out the pointer from the object, in JS-space:

```ts
export function UnloadTexture(texture: Texture) {
  r.BindUnloadTexture(texture.pointer)
}
```


## array input

### DrawLineStrip

> **WRANING**: we are still working on this, and it's not the best way to do this, for sure

function/structs (in api JSON) look like this:

```json
[
{
  "name": "DrawLineStrip",
  "description": "Draw lines sequence",
  "returnType": "void",
  "params": [
    {
      "type": "Vector2 *",
      "name": "points"
    },
    {
      "type": "int",
      "name": "pointCount"
    },
    {
      "type": "Color",
      "name": "color"
    }
  ]
},
{
  "name": "Vector2",
  "description": "Vector2, 2 components",
  "fields": [
    {
      "type": "float",
      "name": "x",
      "description": "Vector x component"
    },
    {
      "type": "float",
      "name": "y",
      "description": "Vector y component"
    }
  ]
},
{
  "name": "Color",
  "description": "Color, 4 components, R8G8B8A8 (32bit)",
  "fields": [
    {
      "type": "unsigned char",
      "name": "r",
      "description": "Color red value"
    },
    {
      "type": "unsigned char",
      "name": "g",
      "description": "Color green value"
    },
    {
      "type": "unsigned char",
      "name": "b",
      "description": "Color blue value"
    },
    {
      "type": "unsigned char",
      "name": "a",
      "description": "Color alpha value"
    }
  ]
}
]
```

```cpp
void BindDrawLineStrip(const Napi::CallbackInfo& info) {
    // TODO
}
```

and the JS looks like this:

```ts
export function DrawLineStrip(points: PointList, color: Color) {
 // TODO
}

// allocate an array with a epcific length
function getArray(type: String, length: Number) {
  return r[`CreateArray${type}`](length)
}

// initial process just flattens 
function processColorInput(color) {
  return [color.r, color.g, color.b, color.a]
}

// initial process just flattens 
function processVector2Input(vector) {
  return [vector.y, vector.x]
}
```
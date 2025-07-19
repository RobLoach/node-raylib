// this will generate the wrappers & type-adapters in src/generated

const { writeFileSync } = require("node:fs");
const raylibApi = require("@raylib/api");
const path = require("node:path");

// use this to keep from wrapping things
const blocklist = [
  // Error: invalid conversion from ‘void (*)(int, const char*, ...)’ to ‘void (*)()’ [-fpermissive]
  "TraceLog",
  "TextFormat",

  // Edge case: need additional wrapping to function
  "SetShaderValue",
  "SetShaderValueV",

  // Callbacks: Not supported yet
  "SetTraceLogCallback",
  "SetLoadFileDataCallback",
  "SetSaveFileDataCallback",
  "SetLoadFileTextCallback",
  "SetSaveFileTextCallback",

  "AudioCallback",
  "AttachAudioMixedProcessor",
  "DetachAudioMixedProcessor",

  // Callbacks: AudioStream
  "SetAudioStreamCallback",
  "AttachAudioStreamProcessor",
  "DetachAudioStreamProcessor",

  // Structs
  // @todo Verify Structs that have array properties
  "VrStereoConfig", // Matrix[2], float[2]
  "VrDeviceInfo", // float[4]
  "Material", // float[4]

  // raymath
  // @todo Fix helper structs for float arrays
  "Vector3ToFloatV", // float3
  "MatrixToFloatV", // float16

  // raygui
  "UnloadGuiStyle", // Commented out
  "LoadGuiStyle", // Commented out

  // rlgl
  "rlEnableStatePointer", // undefined
  "rlDisableStatePointer", // undefined
];

// these functions expect the first argument to be passed as a reference in C++
// so some extra wrapping needs to be done to return updated values from C++ to JS
const byreflist = [
  "UpdateCamera",
  "ImageFormat",
  "ImageToPOT",
  "ImageCrop",
  "ImageAlphaCrop",
  "ImageAlphaClear",
  "ImageAlphaMask",
  "ImageAlphaPremultiply",
  "ImageResize",
  "ImageResizeNN",
  "ImageResizeCanvas",
  "ImageMipmaps",
  "ImageDither",
  "ImageFlipVertical",
  "ImageFlipHorizontal",
  "ImageRotateCW",
  "ImageRotateCCW",
  "ImageColorTint",
  "ImageColorInvert",
  "ImageColorGrayscale",
  "ImageColorContrast",
  "ImageColorBrightness",
  "ImageColorReplace",
  "ImageClearBackground",
  "ImageDrawPixel",
  "ImageDrawPixelV",
  "ImageDrawLine",
  "ImageDrawLineV",
  "ImageDrawCircle",
  "ImageDrawCircleV",
  "ImageDrawRectangle",
  "ImageDrawRectangleV",
  "ImageDrawRectangleRec",
  "ImageDrawRectangleLines",
  "ImageDraw",
  "ImageDrawText",
  "ImageDrawTextEx",
  "GenTextureMipmaps",
  "GenTextureMipmaps",
  "UploadMesh",
  "GenMeshTangents",
  "GenMeshBinormals",
  "SetMaterialTexture",
  "SetModelMeshMaterial",
  "WaveFormat",
  "WaveCrop",
];

// these are aliased types, so you use the resolved-type
const typeAliases = {
  Quaternion: "Vector4",
  RenderTexture2D: "Texture",
  Texture2D: "Texture",
  Camera: "Camera3D",
};

// used to find array-size in defs
const rSize = /\[([0-9]+)\]/g;

// pre-process the data for later analysis
function getDefs() {
  const { structs, enums, functions } = raylibApi.raylib;
  for (const struct of structs) {
    // take multi-fields (like in Matrix) and make them all distinct fields

    let newfields = [];
    for (const i in struct.fields) {
      const field = struct.fields[i];

      if (field.name.includes(",")) {
        newfields = [
          ...newfields,
          ...field.name.split(",").map((n) => {
            return {
              ...field,
              name: n.trim(),
            };
          }),
        ].sort((a, b) => a.name.match(/\d+/)[0] - b.name.match(/\d+/)[0]);
      } else {
        newfields.push(field);
      }
    }
    struct.fields = newfields;

    // find all arrays in structs, and give all fields a size and stripped name for later
    for (const field of struct.fields) {
      const nameArrays = [...field.name.matchAll(rSize)];
      const typeArrays = [...field.type.matchAll(rSize)];
      
      if (nameArrays.length) {
        field.size = Number.parseInt(nameArrays[0][1]);
        field.name = field.name.replace(rSize, "");
      } else if (typeArrays.length) {
        field.size = Number.parseInt(typeArrays[0][1]);
        field.type = field.type.replace(rSize, "");
      } else {
        field.size = 1;
      }
      const type = field.type.replace(/[* ]+/g, "");
      if (typeAliases[type]) {
        field.type = typeAliases[type];
      }
    }

    // TODO: should I also process *-refs to seperate name & the fact it's a ref?
  }

  // aliases
  // structs.push({ ...structs.find(s => s.name === 'Vector4'), name: 'Quaternion' })

  // XXX: Since array support isn't complete, just filter out all structs & functions that use them,
  // so we get an (incomplete) wrapper that will build.

  for (const struct of structs) {
    const usesArray = struct.fields.find((f) => f.size !== 1);
    if (usesArray) {
      blocklist.push(struct.name);
    }
  }

  // filter out all functions that use blocked types
  for (const f of functions) {
    if (blocklist.includes(f.returnType.replace(/[* ]/g, ""))) {
      blocklist.push(f.name);
    } else {
      for (const param of f.params || []) {
        if (blocklist.includes(param.type.replace(/[* ]/g, ""))) {
          blocklist.push(f.name);
          break;
        }
      }
    }
  }

  // Add the Easings API
  const reasings = raylibApi.reasings;
  functions.push(...reasings.functions);

  // Add Raymath
  const raymath = raylibApi.raymath;
  functions.push(...raymath.functions);

  // Add Raygui
  const raygui = raylibApi.raygui;
  functions.push(...raygui.functions);
  enums.push(...raygui.enums);

  const rlgl = raylibApi.rlgl;
  functions.push(...rlgl.functions);
  enums.push(...rlgl.enums);
  const tmp = {
    name: "RLGL Defines",
    description: "",
    values: [],
  };
  for (const define of rlgl.defines) {
    if (define.type === "INT") {
      tmp.values.push({
        name: define.name,
        description: define.description,
        value: define.value,
      });
    }
  }
  enums.push(tmp);
  for (const struct of rlgl.structs) {
    if (struct.name === "rlVertexBuffer") {
      struct.fields.splice(4, 6);
      struct.fields.splice(4, 0, {
        description:
          "Vertex indices (in case vertex data comes indexed) (6 indices per quad)",
        name: "indices",
        type: "unsigned int *",
      });
    }
  }
  structs.push(
    ...rlgl.structs.filter((s) => {
      return s.name !== "Matrix";
    })
  );

  return { structs, enums, functions };
}

const { structs, enums, functions } = getDefs();
const GenBindings = require("./generate_templates/node-raylib-bindings.js");
const GenWrapper = require("./generate_templates/node-raylib-wrapper.js");
const GenTSDefs = require("./generate_templates/node-raylib-definitions.js");
const GenDRMWrapper = GenWrapper({
  enums,
  blocklist,
  functions,
  structs,
  byreflist,
}).replace("node-raylib.node", "node-raylib-drm.node");
writeFileSync(
  path.join(__dirname, "..", "src", "generated", "node-raylib.cc"),
  GenBindings({ enums, blocklist, functions, structs, byreflist })
);
writeFileSync(
  path.join(__dirname, "..", "src", "generated", "node-raylib.js"),
  GenWrapper({ enums, blocklist, functions, structs, byreflist })
);
writeFileSync(
  path.join(__dirname, "..", "src", "generated", "node-raylib.d.ts"),
  GenTSDefs({ enums, blocklist, functions, structs, byreflist })
);
writeFileSync(
  path.join(__dirname, "..", "src", "generated", "node-raylib-drm.js"),
  GenDRMWrapper
);

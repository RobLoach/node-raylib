// this will generate the wrappers & type-adapters in src/generated

const { writeFileSync } = require('fs')
const path = require('path')
const fetch = require('cross-fetch')

// use this to keep from wrapping things
const blocklist = [
  // error: invalid conversion from ‘void (*)(int, const char*, ...)’ to ‘void (*)()’ [-fpermissive]
  'TraceLog',
  'TextFormat',

  // DataCallback types not implemented in JSON?
  'SetTraceLogCallback',
  'SetLoadFileDataCallback',
  'SetSaveFileDataCallback',
  'SetLoadFileTextCallback',
  'SetSaveFileTextCallback',

  // these appear to not be defined, even though they are in JSON
  'SetWindowOpacity',
  'GetRenderWidth',
  'GetRenderHeight',
  'ExportFontAsCode'

]

// these functions expect the first argument to be passed as a reference in C++
// so some extra wrapping needs to be done to return updated values from C++ to JS
const by_ref_list = [
  'UpdateCamera',
  'ImageFormat',
  'ImageToPOT',
  'ImageCrop',
  'ImageAlphaCrop',
  'ImageAlphaClear',
  'ImageAlphaMask',
  'ImageAlphaPremultiply',
  'ImageResize',
  'ImageResizeNN',
  'ImageResizeCanvas',
  'ImageMipmaps',
  'ImageDither',
  'ImageFlipVertical',
  'ImageFlipHorizontal',
  'ImageRotateCW',
  'ImageRotateCCW',
  'ImageColorTint',
  'ImageColorInvert',
  'ImageColorGrayscale',
  'ImageColorContrast',
  'ImageColorBrightness',
  'ImageColorReplace',
  'ImageClearBackground',
  'ImageDrawPixel',
  'ImageDrawPixelV',
  'ImageDrawLine',
  'ImageDrawLineV',
  'ImageDrawCircle',
  'ImageDrawCircleV',
  'ImageDrawRectangle',
  'ImageDrawRectangleV',
  'ImageDrawRectangleRec',
  'ImageDrawRectangleLines',
  'ImageDraw',
  'ImageDrawText',
  'ImageDrawTextEx',
  'GenTextureMipmaps',
  'GenTextureMipmaps',
  'UploadMesh',
  'GenMeshTangents',
  'GenMeshBinormals',
  'SetMaterialTexture',
  'SetModelMeshMaterial',
  'WaveFormat',
  'WaveCrop'
]

// these are aliased types, so you use the resolved-type
const typeAliases = {
  Quaternion: 'Vector4',
  RenderTexture2D: 'Texture',
  Texture2D: 'Texture',
  Camera: 'Camera3D'
}

// used to find array-size in defs
const rSize = /\[([0-9]+)\]/g

// pre-process the data for later analysis
function getDefs () {
  console.log('Downloading definitions')

  return fetch('https://raw.githubusercontent.com/raysan5/raylib/2e3cfdcc2f5c70e82536caa57d4aa72e3f00fd40/parser/raylib_api.json')
    .then(r => r.json())
    .then(defs => {
      const { structs, enums, functions } = defs
      for (const struct of structs) {
        // take multi-fields (like in Matrix) and make them all distinct fields
        let newfields = []
        for (const i in struct.fields) {
          const field = struct.fields[i]

          if (field.name.includes(',')) {
            newfields = [...newfields, ...field.name.split(',').map(n => {
              return {
                ...field,
                name: n.trim()
              }
            })].sort((a, b) => a.name.match(/\d+/)[0] - b.name.match(/\d+/)[0])
          } else {
            newfields.push(field)
          }
        }
        struct.fields = newfields

        // find all arrays in structs, and give all fields a size and stripped name for later
        for (const field of struct.fields) {
          const n = [...field.name.matchAll(rSize)]
          if (n.length) {
            field.size = parseInt(n[0][1])
            field.name = field.name.replace(rSize, '')
          } else {
            field.size = 1
          }
          const type = field.type.replace(/[* ]+/g, '')
          if (typeAliases[type]) {
            field.type = typeAliases[type]
          }
        }

        // TODO: should I also process *-refs to seperate name & the fact it's a ref?
      }

      // aliases
      // structs.push({ ...structs.find(s => s.name === 'Vector4'), name: 'Quaternion' })

      // XXX: Since array support isn't complete, just filter out all structs & functions that use them,
      // so we get an (incomplete) wrapper that will build.

      for (const struct of structs) {
        const usesArray = struct.fields.find(f => f.size !== 1)
        if (usesArray) {
          blocklist.push(struct.name)
        }
      }

      // filter out all functions that use blocked types
      for (const f of functions) {
        if (blocklist.includes(f.returnType.replace(/[* ]/g, ''))) {
          blocklist.push(f.name)
        } else {
          for (const param of (f.params || [])) {
            if (blocklist.includes(param.type.replace(/[* ]/g, ''))) {
              blocklist.push(f.name)
              break
            }
          }
        }
      }
      return { structs, enums, functions }
    })
}

getDefs().then(({ structs, enums, functions }) => {
  const GenBindings = require('./generate_templates/node-raylib-bindings.js')
  const GenWrapper = require('./generate_templates/node-raylib-wrapper.js')
  const GenTSDefs = require('./generate_templates/node-raylib-definitions.js')
  writeFileSync(path.join(__dirname, '..', 'src', 'generated', 'node-raylib.cc'), GenBindings({ enums, blocklist, functions, structs, by_ref_list }))
  writeFileSync(path.join(__dirname, '..', 'src', 'generated', 'node-raylib.js'), GenWrapper({ enums, blocklist, functions, structs, by_ref_list }))
  writeFileSync(path.join(__dirname, '..', 'src', 'generated', 'node-raylib.d.ts'), GenTSDefs({ enums, blocklist, functions, structs, by_ref_list }))
})

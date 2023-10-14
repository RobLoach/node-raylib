
// Some raylib functions expect the last argument to be a pointer
// to a number that it will update after completing an operation, usually
// when its reading a large chunk of data. for example LoadImagePalette or CompressData
const ints = [
  'bytesRead', // LoadFileData
  'compDataSize', // CompressData
  'dataSize', // DecompressData
  'outputSize', // En/De codeDataBase64
  'frames', // LoadImageAnim
  'colorCount', // LoadImagePalette
  'count', // LoadCodepoints, TextSplit
  'codepointSize', // GetCodepoint, GetCodepointNext, GetCodepointPrevious
  'position', // TextAppend
  'materialCount', // LoadMaterials
  'animCount' // LoadModelAnimations
]

function ArgumentTypeConversion (arg, name = '') {
  if (arg === 'float *') { return 'Float32Array' }
  if (arg === 'const float *') { return 'Float32Array' }

  // we check for when int and unsigned int * are meant to only reference one int, not an array
  // so far it's based on name but I'm not sure if theres another way
  if (arg === 'int *') {
    if (ints.includes(name)) { return 'number' }
    return 'Int32Array'
  }
  if (arg === 'const int *') { return 'Int32Array' }

  if (arg === 'unsigned int *') {
    if (ints.includes(name)) { return 'number' }
    return 'UInt32Array'
  }
  if (arg === 'const unsigned int *') { return 'UInt32Array' }

  if (arg === 'short *') { return 'Int16Array' }
  if (arg === 'const short *') { return 'Int16Array' }

  if (arg === 'unsigned short *') { return 'UInt16Array' }
  if (arg === 'const unsigned short *') { return 'UInt16Array' }

  if (arg === 'unsigned char *') { return 'UInt8Array' }
  if (arg === 'const unsigned char *') { return 'UInt8Array' }

  if (arg === 'char') { return 'string' }
  if (arg === 'char *') { return 'string' }
  if (arg === 'const char *') { return 'string' }
  if (arg === 'char[32]') { return 'string' }

  if (arg === 'int') { return 'number' }
  if (arg === 'float') { return 'number' }
  if (arg === 'unsigned int') { return 'number' }
  if (arg === 'unsigned char') { return 'number' }
  if (arg === 'long') { return 'number' }
  if (arg === 'double') { return 'number' }
  if (arg === 'unsigned long long') { return 'BigInt' }

  if (arg === 'bool') { return 'boolean' }

  // pointers
  arg = arg.replace('const ', '')
  if (arg.includes('*')) {
    return 'number'
  }
  // float[2], float[4] etc. should be converted to pointers as well
  if (arg.includes(']')) {
    return 'number'
  }

  return arg
}

module.exports = ArgumentTypeConversion

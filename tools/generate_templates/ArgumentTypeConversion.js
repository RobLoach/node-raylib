function ArgumentTypeConversion (arg) {
  if (arg === 'const unsigned char *') { return 'UInt8Array' }
  if (arg === 'unsigned char *') { return 'UInt8Array' }

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

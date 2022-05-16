function ArgumentTypeConversion (arg) {
  if (arg === 'const unsigned char *') { return 'Buffer' }
  if (arg === 'unsigned char *') { return 'Buffer' }

  if (arg === 'char') { return 'string' }
  if (arg === 'char *') { return 'string' }
  if (arg === 'const char *') { return 'string' }

  if (arg === 'int') { return 'number' }
  if (arg === 'float') { return 'number' }
  if (arg === 'unsigned int') { return 'number' }
  if (arg === 'unsigned char') { return 'number' }
  if (arg === 'long') { return 'number' }
  if (arg === 'double') { return 'number' }

  if (arg === 'bool') { return 'boolean' }

  // pointers
  arg = arg.replace('const ', '')
  if (arg.includes('*')) {
    return 'number'
  }

  return arg
}

module.exports = ArgumentTypeConversion

/**
 * Generates the function definitions for easings.h
 *
 * @see https://github.com/raysan5/raylib/blob/master/src/extras/easings.h
 */
function getDefEasings () {
  const functions = []
  const easingsDefaults = {
    name: 'FunctionName',
    description: 'FuntionName',
    returnType: 'float',
    params: [
      { type: 'float', name: 't' },
      { type: 'float', name: 'b' },
      { type: 'float', name: 'c' },
      { type: 'float', name: 'd' }
    ]
  }
  const functionNames = [
    'EaseLinearNone',
    'EaseLinearIn',
    'EaseLinearOut',
    'EaseLinearInOut',
    'EaseSineIn',
    'EaseSineOut',
    'EaseSineInOut',
    'EaseCircIn',
    'EaseCircOut',
    'EaseCircInOut',
    'EaseCubicIn',
    'EaseCubicOut',
    'EaseCubicInOut',
    'EaseQuadIn',
    'EaseQuadOut',
    'EaseQuadInOut',
    'EaseExpoIn',
    'EaseExpoOut',
    'EaseExpoInOut',
    'EaseBackIn',
    'EaseBackOut',
    'EaseBackInOut',
    'EaseBounceOut',
    'EaseBounceIn',
    'EaseBounceInOut',
    'EaseElasticIn',
    'EaseElasticOut',
    'EaseElasticInOut'
  ]
  for (const funcName of functionNames) {
    const func = Object.assign({}, easingsDefaults)
    func.name = funcName
    func.description = `Easing: ${funcName}.`
    functions.push(func)
  }
  return functions
}

module.exports = {
  functions: getDefEasings()
}

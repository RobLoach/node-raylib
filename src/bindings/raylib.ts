// Find the bindings.
const r = require('bindings')('node-raylib')

const PI = 3.14159265358979323846

r.PI = PI
r.MAX_TOUCH_POINTS = 10
r.MAX_SHADER_LOCATIONS = 32
r.MAX_MATERIAL_MAPS = 12
r.DEG2RAD = (PI / 180.0)
r.RAD2DEG = (180.0 / PI)

export default r
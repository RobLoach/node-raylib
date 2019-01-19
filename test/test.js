const assert = require('assert')
const child_process = require('child_process')
const path = require('path')
const raylib = require('..')

describe('raylib', function() {
  describe('.IsWindowReady()', function() {
    it('should be able to call the function', function() {
      assert(!raylib.IsWindowReady())
    })
  })

  describe('node-raylib', () => {
    const nodeRaylib = path.join(__dirname, '..', 'bin', 'node-raylib')

    it('should execute on a script', () => {
      child_process.execFileSync(nodeRaylib, [
        path.join(__dirname, '.resources', 'node-raylib-test.js')
      ])
    })

    it('should display the help', () => {
      var output = child_process.execFileSync(nodeRaylib)
      assert(output.includes('raylib bindings for Node.js'))
    })
  })
})

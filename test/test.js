const child_process = require('child_process')
const path = require('path')
const raylib = require('..')
const package = require('../package.json')
const {expect, assert} = require('chai')

describe('raylib', function() {
  describe('window', function() {
    it('should be able to call functions', function() {
      assert.isFalse(raylib.IsWindowReady())
    })

    it('should throw on incorrect argument number', function() {
      const shouldThrowOnIncorrectArgs = function() {
        raylib.IsWindowReady('incorrect', 'number', 'of', 'args')
      }
      expect(shouldThrowOnIncorrectArgs).to.throw()
    })
  })

  describe('color', function() {
    it('should be able to use colors', function () {
      const colorInt = raylib.ColorToInt(raylib.DARKPURPLE)
      expect(colorInt).to.be.a('number')
      const colorPurple = raylib.GetColor(colorInt)
      assert.containsAllKeys(colorPurple, ['r', 'g', 'b', 'a'])
      assert.equal(colorPurple.g, raylib.DARKPURPLE.g)
    })
  })

  describe('cli', () => {
    const cliPath = path.join(__dirname, '..', 'bin', 'node-raylib')

    it('should execute on a script', () => {
      const out = child_process.execFileSync(cliPath, [
        path.join(__dirname, '.resources', 'node-raylib-test.js')
      ])

      assert.include(out.toString(), 'Test runner')
    })

    it('should display the help', () => {
      var output = child_process.execFileSync(cliPath)
      assert(output.includes(package.description))
    })
  })
})

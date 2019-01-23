const child_process = require('child_process')
const path = require('path')
const raylib = require('..')
const package = require('../package.json')
const {expect, assert} = require('chai')

describe('raylib', function() {
  describe('window', function() {
    it('IsWindowReady()', function() {
      assert.isFalse(raylib.IsWindowReady())
    })

    it('IsWindowReady("incorrect", "number", "of", "args")', function() {
      const shouldThrowOnIncorrectArgs = function() {
        raylib.IsWindowReady('incorrect', 'number', 'of', 'args')
      }
      expect(shouldThrowOnIncorrectArgs).to.throw()
    })
  })

  describe('file', function() {
    it('IsFileExtension("something.txt", ".txt")', function() {
      assert(raylib.IsFileExtension("something.txt", ".txt"))
    })

    it('IsFileExtension("something.txt", ".md")', function() {
      assert.isFalse(raylib.IsFileExtension("something.txt", ".md"))
    })

  })

  describe('enums', function() {
    it('KEY_A', function() {
      assert.equal(raylib.KEY_A, 65)
    })
    it ('COMPRESSED_ASTC_4x4_RGBA', function() {
      assert.equal(raylib.COMPRESSED_ASTC_4x4_RGBA, 20)
    })
  })

  describe('color', function() {
    it('GetColor()', function () {
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
        path.join(__dirname, '.resources', 'cli-test.js')
      ])
      assert.include(out.toString(), 'Test runner')
    })

    it('should display the help', () => {
      var output = child_process.execFileSync(cliPath)
      assert(output.includes(package.description))
    })

  })
})

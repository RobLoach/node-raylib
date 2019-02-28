const child_process = require('child_process')
const path = require('path')
const r = require('..')
const package = require('../package.json')
const {expect, assert} = require('chai')

describe('raylib', function() {
  describe('window', function() {
    it('IsWindowReady()', function() {
      assert.isFalse(r.IsWindowReady())
    })

    it('IsWindowReady("incorrect", "number", "of", "args")', function() {
      const shouldThrowOnIncorrectArgs = function() {
        r.IsWindowReady('incorrect', 'number', 'of', 'args')
      }
      expect(shouldThrowOnIncorrectArgs).to.throw()
    })
  })

  describe('audio', function() {
    it('IsAudioDeviceReady()', function() {
      assert.isNotOk(r.IsAudioDeviceReady(), 'IsAudioDeviceReady')
    })
  })

  describe('file', function() {
    it('IsFileExtension("something.txt", ".txt")', function() {
      assert(r.IsFileExtension("something.txt", ".txt"))
    })

    it('IsFileExtension("something.txt", ".md")', function() {
      assert.isFalse(r.IsFileExtension("something.txt", ".md"))
    })
  })

  describe('rlgl', function() {
    it('LoadText()', function() {
      var output = r.LoadText('package.json')
      assert.isNotEmpty(output)
      assert.include(output, '"raylib"', 'package.json contains "raylib"')
    })
  })

  describe('enums', function() {
    it('KEY_A', function() {
      assert.equal(r.KEY_A, 65)
    })
    it ('COMPRESSED_ASTC_4x4_RGBA', function() {
      assert.equal(r.COMPRESSED_ASTC_4x4_RGBA, 20)
    })
  })

  describe('color', function() {
    it('GetColor()', function () {
      const colorInt = r.ColorToInt(r.DARKPURPLE)
      expect(colorInt).to.be.a('number')
      const colorPurple = r.GetColor(colorInt)
      assert.containsAllKeys(colorPurple, ['r', 'g', 'b', 'a'])
      assert.equal(colorPurple.g, r.DARKPURPLE.g)
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

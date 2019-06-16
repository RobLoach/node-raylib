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
      assert.isFalse(r.IsAudioDeviceReady(), 'IsAudioDeviceReady')
    })
  })

  describe('file', function() {
    it('FileExists()', function() {
      assert(r.FileExists(path.join(__dirname, '..', 'package.json')))
    })

    it('IsFileExtension()', function() {
      assert(r.IsFileExtension("something.txt", ".txt"))
      assert.isFalse(r.IsFileExtension("something.txt", ".md"))
    })
  })

  describe('rlgl', function() {
    it('LoadText()', function() {
      var filename = path.join(__dirname, '..', 'package.json')
      var output = r.LoadText(filename)
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

  describe('camera', function() {
    it('Camera()', function () {
      const camera = r.Camera(
        r.Vector3(5, 4, 5),
        r.Vector3(0, 2, 0),
        r.Vector3(0, 1, 0),
        45,
        r.CAMERA_PERSPECTIVE)
      expect(camera.position.x).to.equal(5)

      const matrix = r.GetCameraMatrix(camera)
      expect(matrix.m2).to.greaterThan(0.6)
      expect(matrix.m2).to.lessThan(0.8)
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

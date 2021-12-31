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

  describe('TextFormat', function() {
    it('TextFormat()', function() {
      const str = 'Hello, %s! Number %i'
      const num = 5
      assert.equal(r.TextFormat(str, 'Ray', num), 'Hello, Ray! Number 5');
      assert.equal(r.FormatText(str, 'Ray', num), 'Hello, Ray! Number 5');
    })
  })

  describe('TraceLog', function () {
    it('TraceLog(r.LOG_INFO)', function() {
      r.TraceLog(r.LOG_INFO, 'Hello, %s', 'Ray')
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

    it ('RL_QUADS', function() {
      assert.equal(r.RL_QUADS, 0x0007)
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

  describe('image', () => {
    it('should load images correctly', () => {
      const rabbit = path.join(__dirname, 'resources', 'rabbit.png')
      const image = r.LoadImage(rabbit)
      assert.isNotNull(image)
      r.UnloadImage(image)
    })
    it('should correctly use wrapped image manipulation functions', () => {
      const rabbit = path.join(__dirname, 'resources', 'rabbit.png')
      let image = r.LoadImage(rabbit)
      let initialWidth = image.width
      assert.equal(initialWidth, 32)

      // Rotate the image
      r.ImageRotateCW(image)
      let modifiedWidth = image.width
      assert.equal(modifiedWidth, 42)
      r.UnloadImage(image)
    })
    it('should return null when failing to load', () => {
      const missingImage = 'missingImage.png'
      const image = r.LoadImage(missingImage)
      assert.isNull(image)
    })
  })

  describe('raymath', function() {
    it('Vector2Add()', function() {
      const first = r.Vector2(10, 20)
      const second = r.Vector2(30, 40)
      const third = r.Vector2Add(first, second)
      expect(third.x).to.equal(40)
      expect(third.y).to.equal(60)
    })
  })

  describe('cli', () => {
    const cliPath = path.join(__dirname, '..', 'bin', 'node-raylib')

    it('should execute on a script', () => {
      const out = child_process.execFileSync(cliPath, [
        path.join(__dirname, 'resources', 'node-raylib-test.js')
      ])
      assert.include(out.toString(), 'Test runner')
    })

    it('should display the help', () => {
      var output = child_process.execFileSync(cliPath)
      assert(output.includes(package.description))
    })

  })
})

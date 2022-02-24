/* global describe, it, expect */

const { execFileSync } = require('child_process')
const path = require('path')
const r = require('..')
const pkg = require('../package.json')

r.SetTraceLogLevel(r.LOG_WARNING)

describe('raylib', () => {
  describe('window', () => {
    it('IsWindowReady()', () => {
      expect(r.IsWindowReady()).toBeFalsy()
    })

    it('IsWindowReady("incorrect", "number", "of", "args")', () => {
      const shouldThrowOnIncorrectArgs = () => {
        r.IsWindowReady('incorrect', 'number', 'of', 'args')
      }
      expect(shouldThrowOnIncorrectArgs).toThrow()
    })
  })

  describe('audio', () => {
    it('IsAudioDeviceReady()', () => {
      expect(r.IsAudioDeviceReady()).toBeFalsy()
    })
  })

  describe('TextFormat', () => {
    it('TextFormat()', () => {
      const str = 'Hello, %s! Number %i'
      const num = 5
      expect(r.TextFormat(str, 'Ray', num)).toEqual('Hello, Ray! Number 5')
      expect(r.FormatText(str, 'Ray', num)).toEqual('Hello, Ray! Number 5')
    })
  })

  describe('TraceLog', () => {
    it('TraceLog(r.LOG_INFO)', () => {
      r.TraceLog(r.LOG_INFO, 'Hello, %s', 'Ray')
    })
  })

  describe('file', () => {
    it('FileExists()', () => {
      expect(r.FileExists(path.join(__dirname, '..', 'package.json'))).toBeTruthy()
    })

    it('IsFileExtension()', () => {
      expect(r.IsFileExtension('something.txt', '.txt')).toBeTruthy()
      expect(r.IsFileExtension('something.txt', '.md')).toBeFalsy()
    })
  })

  describe('rlgl', () => {
    it('LoadText()', () => {
      const filename = path.join(__dirname, '..', 'package.json')
      const output = r.LoadText(filename)
      expect(output).toBeDefined()
      expect(output).toContain('"raylib"')
    })
  })

  describe('enums', () => {
    it('KEY_A', () => {
      expect(r.KEY_A).toBe(65)
    })
    it('PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA', () => {
      expect(r.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA).toBe(20)
    })
  })

  describe('color', () => {
    it('GetColor()', () => {
      const colorInt = r.ColorToInt(r.DARKPURPLE)
      expect(typeof colorInt).toBe('number')
      const colorPurple = r.GetColor(colorInt)
      expect(colorPurple).toHaveProperty('r')
      expect(colorPurple).toHaveProperty('g')
      expect(colorPurple).toHaveProperty('b')
      expect(colorPurple).toHaveProperty('a')
      expect(colorPurple.g).toBe(r.DARKPURPLE.g)
    })
  })

  describe('camera', () => {
    it('Camera()', () => {
      const camera = r.Camera(
        r.Vector3(5, 4, 5),
        r.Vector3(0, 2, 0),
        r.Vector3(0, 1, 0),
        45,
        r.CAMERA_PERSPECTIVE)
      expect(camera.position.x).toEqual(5)

      const matrix = r.GetCameraMatrix(camera)
      expect(matrix.m2).toBeGreaterThan(0.6)
      expect(matrix.m2).toBeLessThan(0.8)
    })
  })

  describe('image', () => {
    it('should load images correctly', () => {
      const rabbit = path.join(__dirname, 'resources', 'rabbit.png')
      const image = r.LoadImage(rabbit)
      expect(image).not.toBeNull()
      r.UnloadImage(image)
    })
    it('should correctly use wrapped image manipulation functions', () => {
      const rabbit = path.join(__dirname, 'resources', 'rabbit.png')
      const image = r.LoadImage(rabbit)
      const initialWidth = image.width
      expect(initialWidth).toBe(32)

      // Rotate the image
      r.ImageRotateCW(image)
      const modifiedWidth = image.width
      expect(modifiedWidth).toBe(42)
      r.UnloadImage(image)
    })
    it('should return empty object when failing to load', () => {
      const missingImage = 'missingImage.png'
      const image = r.LoadImage(missingImage)
      expect(image.data).toBe(0)
    })
  })

  describe('raymath', () => {
    // no math
    it.skip('Vector2Add()', () => {
      const first = r.Vector2(10, 20)
      const second = r.Vector2(30, 40)
      const third = r.Vector2Add(first, second)
      expect(third.x).to.equal(40)
      expect(third.y).to.equal(60)
    })
  })

  // these are not correct tests on windows
  describe.skip('cli', () => {
    const cliPath = path.join(__dirname, '..', 'bin', 'node-raylib')

    it('should execute on a script', () => {
      const out = execFileSync(cliPath, [
        path.join(__dirname, 'resources', 'node-raylib-test.js')
      ])
      expect(out.toString()).toContain('Test runner')
    })

    it('should display the help', () => {
      const output = execFileSync(cliPath + ' --help')
      console.log(output, pkg.description)

      expect(output).toCOntain(pkg.description)
    })
  })
})

/* global describe, it, expect */

const { execFileSync } = require('child_process')
const path = require('path')
const r = require('..')
const pkg = require('../package.json')

r.SetTraceLogLevel(r.LOG_WARNING)

describe('raylib', () => {
  describe('window', () => {
    it('IsWindowReady() false before initializing window', () => {
      expect(r.IsWindowReady()).toBeFalsy()
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

  describe('enums', () => {
    it('KEY_A', () => {
      expect(r.KEY_A).toBe(65)
    })
    it('PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA', () => {
      // This value changed from 20 to 23 in raylib 5.5
      expect(r.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA).toBe(23)
      expect(typeof r.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA).toBe('number')
    })
    it('should have basic color constants', () => {
      expect(r.RAYWHITE).toBeDefined()
      expect(r.LIGHTGRAY).toBeDefined()
      expect(r.DARKGRAY).toBeDefined()
      expect(typeof r.RAYWHITE.r).toBe('number')
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
      const imageWidth = image.width
      expect(imageWidth).toBe(32)
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

  describe('easings', () => {
    it('EaseLinearOut()', () => {
      const t = 10
      const b = 20
      const c = 30
      const d = 40
      const out = r.EaseLinearOut(t, b, c, d)
      expect(out).toBe(c * t / d + b)
    })
  })
})

// these are not correct tests on windows
if (process.platform !== 'win32') {
  describe('cli', () => {
    const cliPath = path.join(__dirname, '..', 'bin', 'node-raylib')

    it('should execute on a script', () => {
      const out = execFileSync(cliPath, [
        path.join(__dirname, 'resources', 'node-raylib-test.js')
      ])
      expect(out.toString()).toContain('Test runner')
    })

    it('should display the help', () => {
      let output = ''
      try { // we expect an error here - the CLI exits with code 1 for help
        execFileSync(cliPath, ['--help']).toString()
      } catch (e) {
        // Help text goes to stderr, which is captured in e.stderr
        output = e.stderr ? e.stderr.toString() : e.toString()
      }

      expect(output).toContain(pkg.description)
    })
  })
}

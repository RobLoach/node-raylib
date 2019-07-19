//TODO: update these to imports
var child_process = require('child_process');
var path = require('path');
var r = require('../lib/index.js')["default"]; // this is not an es5 module so in order to use it here we have to do this for now
var package = require('../package.json');
var _a = require('chai'), expect = _a.expect, assert = _a.assert;
describe('raylib', function () {
    describe('window', function () {
        it('IsWindowReady()', function () {
            assert.isFalse(r.IsWindowReady());
        });
        it('IsWindowReady("incorrect", "number", "of", "args")', function () {
            var shouldThrowOnIncorrectArgs = function () {
                r.IsWindowReady('incorrect', 'number', 'of', 'args');
            };
            expect(shouldThrowOnIncorrectArgs).to["throw"]();
        });
    });
    describe('audio', function () {
        it('IsAudioDeviceReady()', function () {
            assert.isFalse(r.IsAudioDeviceReady(), 'IsAudioDeviceReady');
        });
    });
    describe('file', function () {
        it('FileExists()', function () {
            assert(r.FileExists(path.join(__dirname, '..', 'package.json')));
        });
        it('IsFileExtension()', function () {
            assert(r.IsFileExtension("something.txt", ".txt"));
            assert.isFalse(r.IsFileExtension("something.txt", ".md"));
        });
    });
    describe('rlgl', function () {
        it('LoadText()', function () {
            var filename = path.join(__dirname, '..', 'package.json');
            var output = r.LoadText(filename);
            assert.isNotEmpty(output);
            assert.include(output, '"raylib"', 'package.json contains "raylib"');
        });
    });
    describe('enums', function () {
        it('KEY_A', function () {
            assert.equal(r.KeyboardKey.KEY_A, 65);
        });
        it('COMPRESSED_ASTC_4x4_RGBA', function () {
            assert.equal(r.PixelFormat.COMPRESSED_ASTC_4x4_RGBA, 20);
        });
    });
    describe('color', function () {
        it('GetColor()', function () {
            var colorInt = r.ColorToInt(r.DARKPURPLE);
            expect(colorInt).to.be.a('number');
            var colorPurple = r.GetColor(colorInt);
            assert.containsAllKeys(colorPurple, ['r', 'g', 'b', 'a']);
            assert.equal(colorPurple.g, r.DARKPURPLE.g);
        });
    });
    describe('camera', function () {
        it('Camera()', function () {
            var camera = new r.Camera(// change these to be constructors
            new r.Vector3(5, 4, 5), new r.Vector3(0, 2, 0), new r.Vector3(0, 1, 0), 45, r.CameraType.CAMERA_PERSPECTIVE);
            expect(camera.position.x).to.equal(5);
            var matrix = r.GetCameraMatrix(camera);
            expect(matrix.m2).to.greaterThan(0.6);
            expect(matrix.m2).to.lessThan(0.8);
        });
    });
    describe('cli', function () {
        var cliPath = path.join(__dirname, '..', 'bin', 'node-raylib');
        it('should execute on a script', function () {
            var out = child_process.execFileSync(cliPath, [
                path.join(__dirname, '.resources', 'node-raylib-test.js')
            ]);
            assert.include(out.toString(), 'Test runner');
        });
        it('should display the help', function () {
            var output = child_process.execFileSync(cliPath);
            assert(output.includes(package.description));
        });
    });
});

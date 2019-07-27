"use strict";
exports.__esModule = true;
var child_process = require("child_process");
var path = require("path");
var r = require("../lib/index");
var pkg = require('../package.json');
var chai_1 = require("chai");
describe('raylib', function () {
    describe('window', function () {
        it('IsWindowReady()', function () {
            chai_1.assert.isFalse(r.IsWindowReady());
        });
        // this is unneeded because typescript
        // it('IsWindowReady("incorrect", "number", "of", "args")', function() {
        //   const shouldThrowOnIncorrectArgs = function() {
        //     r.IsWindowReady('incorrect', 'number', 'of', 'args')
        //   }
        //   expect(shouldThrowOnIncorrectArgs).to.throw()
        // })
    });
    describe('audio', function () {
        it('IsAudioDeviceReady()', function () {
            chai_1.assert.isFalse(r.IsAudioDeviceReady(), 'IsAudioDeviceReady');
        });
    });
    describe('file', function () {
        it('FileExists()', function () {
            chai_1.assert(r.FileExists(path.join(__dirname, '..', 'package.json')));
        });
        it('IsFileExtension()', function () {
            chai_1.assert(r.IsFileExtension("something.txt", ".txt"));
            chai_1.assert.isFalse(r.IsFileExtension("something.txt", ".md"));
        });
    });
    describe('rlgl', function () {
        it('LoadText()', function () {
            var filename = path.join(__dirname, '..', 'package.json');
            var output = r.LoadText(filename);
            chai_1.assert.isNotEmpty(output);
            chai_1.assert.include(output, '"raylib"', 'package.json contains "raylib"');
        });
    });
    describe('enums', function () {
        it('KEY_A', function () {
            chai_1.assert.equal(r.KeyboardKey.KEY_A, 65);
        });
        it('COMPRESSED_ASTC_4x4_RGBA', function () {
            chai_1.assert.equal(r.PixelFormat.COMPRESSED_ASTC_4x4_RGBA, 20);
        });
    });
    describe('color', function () {
        it('GetColor()', function () {
            var colorInt = r.ColorToInt(r.DARKPURPLE);
            chai_1.expect(colorInt).to.be.a('number');
            var colorPurple = r.GetColor(colorInt);
            chai_1.assert.containsAllKeys(colorPurple, ['r', 'g', 'b', 'a']);
            chai_1.assert.equal(colorPurple.g, r.DARKPURPLE.g);
        });
    });
    describe('camera', function () {
        it('Camera()', function () {
            var camera = new r.Camera(new r.Vector3(5, 4, 5), new r.Vector3(0, 2, 0), new r.Vector3(0, 1, 0), 45, r.CameraType.CAMERA_PERSPECTIVE);
            chai_1.expect(camera.position.x).to.equal(5);
            var matrix = r.GetCameraMatrix(camera);
            chai_1.expect(matrix.m2).to.greaterThan(0.6);
            chai_1.expect(matrix.m2).to.lessThan(0.8);
        });
    });
    describe('cli', function () {
        var cliPath = path.join(__dirname, '..', 'bin', 'node-raylib');
        it('should execute on a script', function () {
            var out = child_process.execSync("node " + cliPath + " " + path.join(__dirname, ".resources", "node-raylib-test.js"));
            chai_1.assert.include(out.toString(), 'Test runner');
        });
        it('should display the help', function () {
            var output = child_process.execSync("node " + cliPath);
            chai_1.assert(output.includes(pkg.description));
        });
    });
});

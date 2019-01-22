/**
 * Tests for the node-raylib CLI tool.
 */

const raylib = require('node-raylib')
const assert = require('assert')

console.log('node-raylib-test: Test runner for node-raylib CLI')

// Tests
assert(!raylib.IsWindowReady(), 'raylib.IsWindowReady')

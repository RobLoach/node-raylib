/**
 * Tests for the CLI tool.
 */

const raylib = require('raylib')
const assert = require('assert')

console.log('cli-test: Test runner for node-raylib CLI')

// Tests
assert(!raylib.IsWindowReady(), 'raylib.IsWindowReady')

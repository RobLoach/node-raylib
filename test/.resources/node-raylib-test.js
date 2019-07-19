/**
 * Tests for the node-raylib CLI tool.
 */

const r = require('raylib').default // not es5 module so default, this file is intentionally left in vanilla js for testing purposes
const assert = require('assert')

console.log('node-raylib-test: Test runner for node-raylib CLI')

// Tests
assert(!r.IsWindowReady(), 'r.IsWindowReady')

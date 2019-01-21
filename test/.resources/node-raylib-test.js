/**
 * Tests for the node-raylib CLI tool.
 */

const raylib = require('node-raylib')

// Assertions
const assert = require('assert')

// Tests
assert(!raylib.IsWindowReady(), 'raylib.IsWindowReady')

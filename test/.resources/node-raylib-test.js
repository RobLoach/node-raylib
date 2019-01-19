/**
 * Tests for the node-raylib CLI tool.
 */

// Load raylib if needed.
const raylib = require('../..')

// Assertions
const assert = require('assert')

// Tests
assert(!raylib.IsWindowReady(), 'raylib.IsWindowReady')

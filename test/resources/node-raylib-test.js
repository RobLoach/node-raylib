/**
 * Tests for the node-raylib CLI tool.
 */

const r = require("raylib");
const assert = require("node:assert");

console.log("node-raylib-test: Test runner for node-raylib CLI");

// Tests
assert(!r.IsWindowReady(), "r.IsWindowReady");

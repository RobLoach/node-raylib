const child_process = require('child_process')
const path = require('path')
const assert = require('assert')

const rnodelauncher = path.join(__dirname, '..', 'bin', 'rnodelauncher')
const args = [path.join(__dirname, 'tester.js')]

var output = child_process.execFileSync(rnodelauncher, args)
var outputString = output.toString()
assert(outputString.includes('Window closed successfully'), 'Window failed to close successfully')

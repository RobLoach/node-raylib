// this is an example RPG game-engine.
// edit assets/demo.md to control dialogs and game-flow

import { promises as fs } from 'node:fs'
import { basename, dirname, resolve } from 'node:path'
import { runDialog, getASTInfo } from 'mdif'
import tiled from 'tiled-load'

import r from 'raylib'

const [, program, fname] = process.argv

if (!fname) {
  console.error(`Usage: ${basename(program)} <FNAME>`)
  console.error('Where <FNAME> is the name of your markdown entry-point.')
  process.exit(1)
}

const md = await fs.readFile(fname)
const { info } = getASTInfo(md)

if (!info.map) {
  throw new Error('map not set in frontmatter of game.')
}

const map = await tiled(basename(info.map), dirname(resolve(dirname(fname), info.map)) + '/')
console.log(map)

r.InitWindow(320, 240, 'node-raylib rpg')
r.SetTargetFPS(60)

while (!r.WindowShouldClose()) {
  r.BeginDrawing()
  r.ClearBackground(r.BLACK)
  r.EndDrawing()
}

r.CloseWindow()

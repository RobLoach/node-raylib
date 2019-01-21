const { exec } = require('pkg')
const tar = require('tar')
const fs = require('fs')

const assets = ['README.md', 'LICENSE']
const outFileName = 'node-raylib'
if (process.platform == 'win32') {
  outFileName += '.exe'
}

async function pkg() {
  for (const asset of assets) {
    fs.copyFileSync(asset, `build/Release/${asset}`)
  }
  await exec(['.', '--target', 'host', '--out-path', 'build/Release'])

  const opts = {
    gzip: true,
    file: `node-raylib-${process.platform}-${process.arch}.tar.gz`,
    cwd: 'build/Release',
  }
  const files = [
    outFileName,
    'node-raylib.node'
  ].concat(assets)
  await tar.c(opts, files)
}

pkg()

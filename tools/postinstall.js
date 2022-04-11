// this is run after npm install
// download pre-made module, if possible & exit 1, or exit 0 to tell system if it needs to build

const { promises: fs } = require('fs')
const path = require('path')
const fetch = require('cross-fetch')

const targetPath = path.join(__dirname, '..', 'build', 'Release', 'node-raylib.node')

async function exists (path) {
  try {
    await fs.access(path)
    return true
  } catch {
    return false
  }
}

async function main () {
  if (await exists(targetPath)) {
    console.log('Found node-raylib.node.')
    process.exit(0)
  }

  let p
  if (process.platform === 'linux') {
    p = 'ubuntu'
  }
  if (process.platform === 'darwin') {
    p = 'macos'
  }
  if (process.platform === 'win32') {
    p = 'windows'
  }
  const url = `https://github.com/RobLoach/node-raylib/releases/download/v${process.env.npm_package_version}/node-raylib-4.0-${p}-${process.arch}.node`

  console.log(`Checking for ${url}`)

  try {
    const data = await fetch(url).then(r => r.arrayBuffer())
    await fs.writeFile(targetPath, data)
    console.log('Found on releases.')
    process.exit(0)
  } catch (e) {}

  // couldn't find it, so tell postinstall to compile it
  console.log('Not found. Building.')
  process.exit(1)
}
main()

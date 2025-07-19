// this is run after npm install
// download pre-made module, if possible & exit 0, or exit 1 to tell system it needs to build

const fs = require('node:fs/promises')
const path = require('node:path')
const fetch = require('cross-fetch')

const { version } = require('../package.json')

const BUILD_DIR = path.join(__dirname, '..', 'build', 'Release')
const MAIN_TARGET = path.join(BUILD_DIR, 'node-raylib.node')
const DRM_TARGET = path.join(BUILD_DIR, 'node-raylib-drm.node')

// Platform-specific binary mappings
const PLATFORM_BINARIES = {
  'linux-x64': 'node-raylib-linux-x64.node',
  'linux-arm': 'node-raylib-linux-arm.node',
  'linux-arm64': 'node-raylib-linux-arm64.node',
  'win32-x64': 'node-raylib-win32-x64.node',
  'darwin-x64': 'node-raylib-darwin-x64.node',
  'darwin-arm64': 'node-raylib-darwin-arm64.node'
}

const DRM_BINARIES = {
  'linux-arm': 'node-raylib-linux-arm-drm.node',
  'linux-arm64': 'node-raylib-linux-arm64-drm.node'
}

function toBuffer (ab) {
  const buf = Buffer.alloc(ab.byteLength)
  const view = new Uint8Array(ab)
  for (let i = 0; i < buf.length; ++i) {
    buf[i] = view[i]
  }
  return buf
}

async function exists (filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function ensureDir (dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true })
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error
    }
  }
}

async function downloadBinary (url, targetPath, description = '') {
  console.log(`Downloading ${description}: ${url}`)

  try {
    const response = await fetch(url, {
      timeout: 30000, // 30 second timeout
      headers: {
        'User-Agent': `node-raylib/${version} (${process.platform}; ${process.arch})`
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const contentLength = response.headers.get('content-length')
    if (contentLength) {
      console.log(`Binary size: ${Math.round(parseInt(contentLength) / 1024)}KB`)
    }

    const arrayBuffer = await response.arrayBuffer()
    const buffer = toBuffer(arrayBuffer)

    await fs.writeFile(targetPath, buffer)

    // Verify the file was written correctly
    const stats = await fs.stat(targetPath)
    console.log(`Successfully downloaded ${description} (${stats.size} bytes)`)

    return true
  } catch (error) {
    console.warn(`Failed to download ${description}: ${error.message}`)
    return false
  }
}

async function main () {
  console.log(`node-raylib v${version} postinstall`)
  console.log(`Platform: ${process.platform}-${process.arch}`)

  // Check if binary already exists
  if (await exists(MAIN_TARGET)) {
    console.log('✓ Binary already exists, skipping download')
    process.exit(0)
  }

  // Ensure build directory exists
  await ensureDir(BUILD_DIR)

  const platformKey = `${process.platform}-${process.arch}`
  const binaryName = PLATFORM_BINARIES[platformKey]

  if (!binaryName) {
    console.log(`No prebuilt binary available for ${platformKey}`)
    console.log('Supported platforms:', Object.keys(PLATFORM_BINARIES).join(', '))
    console.log('Will build from source...')
    process.exit(1)
  }

  const baseUrl = `https://github.com/RobLoach/node-raylib/releases/download/v${version}`
  const mainUrl = `${baseUrl}/${binaryName}`

  // Try to download main binary
  const mainSuccess = await downloadBinary(mainUrl, MAIN_TARGET, 'main binary')

  // For ARM Linux, also try to download DRM binary
  if (process.platform === 'linux' && (process.arch === 'arm' || process.arch === 'arm64')) {
    const drmBinaryName = DRM_BINARIES[platformKey]
    if (drmBinaryName) {
      const drmUrl = `${baseUrl}/${drmBinaryName}`
      await downloadBinary(drmUrl, DRM_TARGET, 'DRM binary')
    }
  }

  if (mainSuccess) {
    console.log('✓ Successfully installed prebuilt binary')
    process.exit(0)
  } else {
    console.log('✗ Failed to download prebuilt binary')
    console.log('Will build from source...')
    process.exit(1)
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error)
  console.log('Will build from source...')
  process.exit(1)
})

main().catch((error) => {
  console.error('Postinstall script failed:', error)
  console.log('Will build from source...')
  process.exit(1)
})

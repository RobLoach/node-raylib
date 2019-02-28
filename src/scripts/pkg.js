const { exec } = require('pkg')
const archiver = require('archiver')
const fs = require('fs')
const package = require('../../package.json')

// Options
var binaryFilename = 'node-raylib'
var packageName = `${binaryFilename}-${process.platform}-${process.arch}`
var compression = 'tar'
var compressOptions = {}

// Platform overrides
if (process.platform == 'win32') {
  binaryFilename += '.exe'
  packageName += '.zip'
  compression = 'zip'
}
else {
  packageName += '.tar.gz'
  compressOptions = {
    store: true,
    gzip: true
  }
}

// Create the package.
pkg()

/**
 * Build the binary with pkg.
 */
async function pkg() {
  await exec(['.', '--target', 'host', '--out-path', 'build/Release'])
  await compress()
}

/**
 * Compress the files into the archive.
 */
async function compress() {
  var output = fs.createWriteStream(packageName);
  var archive = archiver(compression, compressOptions);
  archive.on('error', err =>{
      throw err;
  });
  archive.pipe(output);
  archive.directory('build/Release', false)
  archive.directory('examples')
  archive.file('README.md')
  archive.file('LICENSE.md')
  archive.finalize();
}

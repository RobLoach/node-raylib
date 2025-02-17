const { exec } = require("pkg");
const archiver = require("archiver");
const fs = require("node:fs");
const path = require("node:path");

// Options
let binaryFilename = "node-raylib";
let packageName = `${binaryFilename}-${process.platform}-${process.arch}`;
let compression = "tar";
let compressOptions = {};

// Platform overrides
if (process.platform === "win32") {
  binaryFilename += ".exe";
  packageName += ".zip";
  compression = "zip";
} else {
  packageName += ".tar.gz";
  compressOptions = {
    store: true,
    gzip: true,
  };
}

// Create the package.
pkg();

/**
 * Build the binary with pkg.
 */
async function pkg() {
  await exec([
    ".",
    "--target",
    "host",
    "--output",
    path.join("build", "Release", binaryFilename),
  ]);
  await compress();
}

/**
 * Compress the files into the archive.
 */
async function compress() {
  const output = fs.createWriteStream(packageName);
  const archive = archiver(compression, compressOptions);
  archive.on("error", (err) => {
    throw err;
  });
  archive.pipe(output);
  archive.directory("build/Release", false);
  archive.directory("examples");
  archive.file("README.md");
  archive.file("LICENSE.md");
  archive.finalize();
}

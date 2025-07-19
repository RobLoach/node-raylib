#!/bin/bash

# Cross-compilation script for ARM platforms
# This is used inside a Docker container (running with qemu binfmt) to easily crossbuild project
# Usage: docker run --platform linux/arm/v7 --rm -v "${PWD}:/work" -w /work node:20-bullseye ./tools/crossbuild.sh

set -e  # Exit on any error

echo "🔧 Starting cross-compilation for $(uname -m) architecture..."

# Update package lists
echo "📦 Updating package lists..."
apt-get update

# Install required system dependencies
echo "📦 Installing system dependencies..."
apt-get install -y \
  xorg-dev \
  libglu1-mesa-dev \
  cmake \
  build-essential \
  python3 \
  make \
  g++

# Show environment info
echo "🔍 Environment information:"
echo "  Node.js version: $(node --version)"
echo "  npm version: $(npm --version)"
echo "  Architecture: $(uname -m)"
echo "  Platform: $(uname -s)"

# Configure Git for Docker container
echo "🔧 Configuring Git for Docker container..."
git config --global --add safe.directory '*'

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
npm ci --ignore-scripts

# Compile the native addon
echo "🔨 Compiling native addon..."
npm run compile

echo "✅ Cross-compilation completed successfully!"

# Show build output info
if [ -f "build/Release/node-raylib.node" ]; then
  echo "📄 Build artifact created:"
  ls -la build/Release/node-raylib.node
else
  echo "❌ Build artifact not found!"
  exit 1
fi
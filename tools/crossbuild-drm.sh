#!/bin/bash

# Cross-compilation script for ARM platforms with DRM support
# This is used inside a Docker container (running with qemu binfmt) to easily crossbuild project
# Usage: docker run --platform linux/arm/v7 --rm -v "${PWD}:/work" -w /work node:20-bullseye ./tools/crossbuild-drm.sh

set -e  # Exit on any error

echo "🔧 Starting DRM cross-compilation for $(uname -m) architecture..."

# Update package lists
echo "📦 Updating package lists..."
apt-get update

# Install required system dependencies including DRM libraries
echo "📦 Installing system dependencies (including DRM)..."
apt-get install -y \
  xorg-dev \
  libglu1-mesa-dev \
  cmake \
  build-essential \
  python3 \
  make \
  g++ \
  pkg-config \
  libdrm-dev \
  libegl1-mesa-dev \
  libgles2-mesa-dev \
  libgbm-dev \
  mesa-common-dev

# Show environment info
echo "🔍 Environment information:"
echo "  Node.js version: $(node --version)"
echo "  npm version: $(npm --version)"
echo "  Architecture: $(uname -m)"
echo "  Platform: $(uname -s)"

# Verify pkg-config can find DRM libraries
echo "🔍 Verifying DRM libraries are available..."
pkg-config --exists libdrm && echo "✅ libdrm found" || echo "❌ libdrm not found"
pkg-config --exists gbm && echo "✅ gbm found" || echo "❌ gbm not found"
pkg-config --exists egl && echo "✅ egl found" || echo "❌ egl not found"
pkg-config --exists glesv2 && echo "✅ glesv2 found" || echo "❌ glesv2 not found"



# Configure Git for Docker container
echo "🔧 Configuring Git for Docker container..."
git config --global --add safe.directory '*'

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
npm ci --ignore-scripts

# Clean previous build if it exists
if [ -d "build" ]; then
  echo "🧹 Cleaning previous build..."
  rm -rf build
fi

# Compile the native addon with DRM support
echo "🔨 Compiling native addon with DRM support..."
npm run compile-drm

echo "✅ DRM cross-compilation completed successfully!"

# Show build output info
if [ -f "build/Release/node-raylib.node" ]; then
  echo "📄 Build artifact created:"
  ls -la build/Release/node-raylib.node
else
  echo "❌ Build artifact not found!"
  exit 1
fi
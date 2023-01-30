#!/bin/bash

# this is used inside a docker (running with qemu binfmt) to easily crossbuild project
# run with docker run --platform linux/arm64 -it --rm -v "${PWD}:/work" -w /work node ./tools/crossbuild.sh

apt-get update
apt-get install -y xorg-dev libglu1-mesa-dev cmake libdrm-dev libegl1-mesa-dev libgles2-mesa-dev libgbm-dev
# npm ci
# rm -r build
npm run compile-drm
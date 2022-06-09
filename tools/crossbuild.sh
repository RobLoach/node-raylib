#!/bin/bash

# this is used inside a docker (running with qemu binfmt) to easily crossbuild project
# run with docker run --platform linux/arm64 -it --rm -v "${PWD}:/work" -w /work node ./tools/crossbuild.sh

apt update
apt install -y xorg-dev libglu1-mesa-dev
npm i
npm run compile
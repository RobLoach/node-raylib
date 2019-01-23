default: emscripten test

emscripten: native wasm

docker:
  docker-compose run emscripten
  docker-compose run node

docker-start: docker
  docker-compose run node npm start

native: build/native
  em++ src/raylib.cc --bind -s WASM=0 -o build/native/raylib.js --post-js src/post-module.js

wasm: build/wasm
  em++ src/raylib.cc --bind -s WASM=1 -o build/wasm/index.html --post-js src/post-module.js

build/native:
  mkdir -p build/native

build/wasm:
  mkdir -p build/wasm

node_modules:
  npm i

test: node_modules
  npm test

start: test
  npm start

clean:
  rm -rf build node_modules

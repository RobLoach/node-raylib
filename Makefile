RAYLIB_DIR := node_modules/raylib-src/src
SOURCES = $(wildcard \
	src/*.cc \
	$(RAYLIB_DIR)/core.c \
)

NATIVE_DEFINES = -DPLATFORM_DESKTOP \
	-s USE_GLFW=3 \
	-s LEGACY_GL_EMULATION=1
NATIVE_SOURCES += \
	$(RAYLIB_DIR)/rglfw.c

WASM_DEFINES = -DPLATFORM_WEB \
	-s USE_GLFW=3 \
	-s FULL_ES2=1

default: emscripten test

emscripten: native wasm

docker:
	docker-compose run emscripten
	docker-compose run node

docker-start: docker
	docker-compose run node npm start

native: build/native
	em++ $(SOURCES) $(NATIVE_DEFINES) --bind -s WASM=0 -o build/native/raylib.js --pre-js src/raylib-pre.js --post-js src/raylib-post.js

wasm: build/wasm
	em++ $(SOURCES) $(WASM_DEFINES) --bind -s WASM=1 -o build/wasm/index.html --pre-js src/raylib-pre.js --post-js src/raylib-post.js

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

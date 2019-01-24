RAYLIB_DIR := node_modules/raylib-src/src
SOURCES = $(wildcard \
	src/*.cc \
	$(RAYLIB_DIR)/core.c \
	$(RAYLIB_DIR)/raymath.c \
	$(RAYLIB_DIR)/camera.c \
	$(RAYLIB_DIR)/gestures.c \
	$(RAYLIB_DIR)/shapes.c \
	$(RAYLIB_DIR)/text.c \
	$(RAYLIB_DIR)/models.c \
	$(RAYLIB_DIR)/external/mini_al.c \
	$(RAYLIB_DIR)/textures.c \
	$(RAYLIB_DIR)/utils.c \
)

DEFINES = -s GL_UNSAFE_OPTS=0 \
	-Wno-c++11-narrowing \
	-Ivendor/raylib/src \
	-s "EXTRA_EXPORTED_RUNTIME_METHODS=['ALLOC_NORMAL','addOnPostRun']"

NATIVE_DEFINES = -DPLATFORM_DESKTOP \
	-DGRAPHICS_API_OPENGL_21 \
	-D_GLFW_X11
NATIVE_LIBRARIES = \
	-s LEGACY_GL_EMULATION=1 \
	-s DEMANGLE_SUPPORT=1 \
	-s FORCE_FILESYSTEM=1
#NATIVE_SOURCES = \
#	$(RAYLIB_DIR)/rglfw.c

WASM_DEFINES = -DPLATFORM_WEB \
	-DGRAPHICS_API_OPENGL_ES2 \
	-s USE_GLFW=3 \
	-DUSE_EXTERNAL_GLFW \
	-s FULL_ES2=1

default: emscripten test

emscripten: native wasm

docker:
	docker-compose run node npm i
	docker-compose run emscripten
	docker-compose run node

docker-start: docker
	docker-compose run node npm start

native: build/native
	em++ $(SOURCES) $(NATIVE_SOURCES) $(DEFINES) $(NATIVE_DEFINES) $(NATIVE_LIBRARIES) --bind -s WASM=0 -o build/native/raylib.js --pre-js src/raylib-pre.js --post-js src/raylib-post.js

wasm: build/wasm
	em++ $(SOURCES) $(WASM_SOURCES) $(DEFINES) $(WASM_DEFINES) --bind -s WASM=1 -o build/wasm/index.html --pre-js src/raylib-pre.js --post-js src/raylib-post.js

build/native:
	mkdir -p build/native

build/wasm:
	mkdir -p build/wasm

node_modules:
	npm i

vendor/raylib/HISTORY.md:
	git submodule update --init

test: node_modules
	npm test

start: test
	npm start

clean:
	rm -rf build node_modules

![node-raylib Logo](logo/raylib-node_256x256.png)

# node-raylib [![npm version](http://img.shields.io/npm/v/raylib.svg)](https://npmjs.org/package/raylib "View this project on npm") [![Tests](https://github.com/RobLoach/node-raylib/workflows/Tests/badge.svg)](https://github.com/RobLoach/node-raylib/actions?query=workflow%3ATests+branch%3Amaster "See automated test status on GitHub Actions")

[Node.js](https://nodejs.org) bindings for [raylib](https://www.raylib.com/), a simple and easy-to-use library to enjoy videogames programming (www.raylib.com).

## Sample Applications

- [Flappy](https://github.com/arthurmassanes/flappy) - Flappy Bird clone by [@arthurmassanes](https://github.com/arthurmassanes)
- Check out the [examples folder](examples)

## Dependencies

- [Node.js](https://nodejs.org) >= 10

## Usage

1. Create a new Node.js project:
    ``` bash
    mkdir myexample
    cd myexample
    npm init
    ```

2. Use the runtime by adding this to the `scripts` section of your package.json.

```json
{
    "scripts": {
        "start": "npx -y raylib"
    }
}
```

3. Create a `index.js` JavaScript file, like [`core_basic_window.js`](examples/core/core_basic_window.js):
    ``` javascript
    const r = require('raylib')

    const screenWidth = 800
    const screenHeight = 450
    r.InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window")
    r.SetTargetFPS(60)

    while (!r.WindowShouldClose()) {
        r.BeginDrawing();
        r.ClearBackground(r.RAYWHITE)
        r.DrawText("Congrats! You created your first window!", 190, 200, 20, r.LIGHTGRAY)
        r.EndDrawing()
    }
    r.CloseWindow()        // Close window and OpenGL context
    ```

4. Run `index.js` through Node.js:
    ``` bash
    npm start
    ```

Check for more [examples](examples) organized by raylib modules.

## Installation
Raylib is implemented as bindings with the node-addon-api. Bindings are prebuilt for many platforms in [Releases](https://github.com/RobLoach/node-raylib/releases). If your platform is not supported by a prebuilt binary, you will need CMake to build the native addon. Windows users building manually will also require MSVC Build Tools 2019, or Visual Studio 2019 with build tools for C/C++.
## CLI

The project comes with a [`node-raylib`](https://github.com/RobLoach/node-raylib/blob/master/bin/node-raylib) command-line tool to run `node-raylib` files directly:

``` bash
# Unix
./bin/node-raylib core_basic_window.js

# Windows
node bin/node-raylib core_basic_window.js
```

The CLI can be installed globally through `npm` or `npx` for no-install:

``` bash
npm install raylib --global
node-raylib --version

npx -y raylib --version
```

## Projects

- [Retro RPG Template](https://github.com/notnullgames/raylib-example-retro_rpg)

## Development

The following are a few notes and resources when developing `node-raylib`...

[node-addon-api](https://github.com/nodejs/node-addon-api) is used to construct the bindings. Raylib provides a header parser that generates a JSON file containing information on the API. The code binding raylib to NodeJS is automatically generated based on this file. For information on how bindings are written for raylib read the [docs here](https://github.com/RobLoach/node-raylib/tree/raylib4/docs). Code generators for the C++ bindings, TS Definitions, and JS wrapper functions are located [here](https://github.com/RobLoach/node-raylib/tree/raylib4/tools/generate_templates).

### Testing 
Run the following to run tests...

```
git clone https://github.com/RobLoach/node-raylib.git
cd node-raylib
npm i
npm t
```


### TypeScript Definitions

Typescript definitions are provided by a generator based on raylib's header parser. See [here](https://github.com/RobLoach/node-raylib/blob/raylib4/tools/generate_templates/node-raylib-definitions.js) for information on how to generate them.

### Package

To build the packaged releases, use the following command:

```
npm run pkg
```

## License

*node-raylib* is licensed under an unmodified zlib/libpng license, which is an OSI-certified,
BSD-like license that allows static linking with closed source software. Check [LICENSE](LICENSE) for further details.

*Copyright (c) 2022 Rob Loach ([@RobLoach](https://twitter.com/RobLoach))*

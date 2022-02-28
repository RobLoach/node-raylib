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

## CLI

The project comes with a [`node-raylib`](https://github.com/RobLoach/node-raylib/blob/master/bin/node-raylib) command-line tool to run `node-raylib` files directly:

``` bash
# Unix
./node-raylib core_basic_window.js

# Windows
node-raylib.exe core_basic_window.js
```

The CLI can be installed with the [packaged releases](https://github.com/RobLoach/node-raylib/releases), or globally through `npm` or `npx` for no-install:

``` bash
npm install raylib --global
node-raylib --version

npx -y raylib --version
```

## Development

The following are a few notes and resources when developing `node-raylib`...

### Testing

[node-addon-api](https://github.com/nodejs/node-addon-api) is used to construct the bindings. Feel free to read through [`src/addons.cc`](src/addons.cc) for an understanding on how methods are defined. A lot is missing from the project, so feel free to get involved in the issue queue and submit pull requests. Run the following to run tests...

```
git clone https://github.com/RobLoach/node-raylib.git
cd node-raylib
npm i
npm t
```

### TypeScript Definitions

To rebuild [`index.d.ts`](index.d.ts), run the following commands:

```
npm i -g dts-gen yargs RobLoach/node-raylib
dts-gen -m raylib -f index.d.ts -o
```

### Package

To build the packaged releases, use the following command:

```
npm run pkg
```

## License

*node-raylib* is licensed under an unmodified zlib/libpng license, which is an OSI-certified,
BSD-like license that allows static linking with closed source software. Check [LICENSE](LICENSE) for further details.

*Copyright (c) 2019 Rob Loach ([@RobLoach](https://twitter.com/RobLoach))*

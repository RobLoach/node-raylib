# raylib-js

JavaScript bindings to [raylib](https://www.raylib.com), a simple and easy-to-use library to enjoy videogames programming (www.raylib.com).

## Dependencies

The following are required in order to develop raylib-js...

- [Emscripten](https://kripken.github.io/emscripten-site/) (or [Docker-Compose](https://docs.docker.com/compose/))
- [Node.js](https://nodejs.org/en/)

## Usage

1. Add `robloach/raylib-js` to your [package.json dependencies](https://docs.npmjs.com/files/package.json#dependencies):
    ``` bash
    npm init
    npm install --save robloach/raylib-js
    ```

2. Create a JavaScript file, like [`core_basic_window.js`](examples/core/core_basic_window.js):
    ``` javascript
    const raylib = require('raylib')

    var screenWidth = 800
    var screenHeight = 450
    raylib.InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window")
    raylib.SetTargetFPS(60)

    while (!raylib.WindowShouldClose()) {
        raylib.BeginDrawing();
        raylib.ClearBackground(raylib.RAYWHITE)
        raylib.DrawText("Congrats! You created your first window!", 190, 200, 20, raylib.LIGHTGRAY)
        raylib.EndDrawing()
    }
    raylib.CloseWindow()        // Close window and OpenGL context
    ```

3. Run it through Node.js:
    ``` bash
    node core_basic_window.js
    ```

Check for more [examples](examples) organized by raylib modules.

### What's Missing?

- [Structs](https://github.com/RobLoach/node-raylib/issues/5)
- [Enums](https://github.com/RobLoach/node-raylib/issues/3)
- [Colors](https://github.com/RobLoach/node-raylib/issues/2)
- [Remaining Functions](https://github.com/RobLoach/node-raylib/issues/1)

## CLI

The project also comes with a [`node-raylib`](https://github.com/RobLoach/node-raylib/blob/master/bin/node-raylib) command-line tool to run `node-raylib` files directly:

``` bash
# Linux
./node-raylib core_basic_window.js

# Windows
node-raylib.exe core_basic_window.js
```

The CLI can be installed with the [packaged releases](https://github.com/RobLoach/node-raylib/releases), or globally through `npm`:

``` bash
npm install robloach/node-raylib --global
```

## Development

The following are a few notes and resources when developing `node-raylib`...

### Node.js Bindings

[node-addon-api](https://github.com/nodejs/node-addon-api) is used to construct the bindings. Feel free to read through [`src/addons.cc`](src/addons.cc) for an understanding on how methods are defined. A lot is missing from the project, so feel free to get involved in the issue queue and submit pull requests.

### Package

To build the packaged releases, use the following command:

```
npm run pkg
```

## License

*raylib-nodejs* is licensed under an unmodified zlib/libpng license, which is an OSI-certified,
BSD-like license that allows static linking with closed source software. Check [LICENSE](LICENSE) for further details.

*Copyright (c) 2018 Rob Loach ([@RobLoach](https://twitter.com/RobLoach))*

# node-raylib (Proof of Concept)

[Node.js](https://nodejs.org) bindings for [raylib](https://www.raylib.com/), a simple and easy-to-use library to enjoy videogames programming (www.raylib.com).

## Dependencies

- [Node.js](https://nodejs.org) >= 10
- [npm](https://www.npmjs.com)


## Usage

1. Add `robloach/node-raylib` to your [package.json dependencies](https://docs.npmjs.com/files/package.json#dependencies):
    ``` bash
    npm init
    npm install --save robloach/node-raylib
    ```

2. Create a JavaScript file, like [`core_basic_window.js`](examples/core/core_basic_window.js):
    ``` javascript
    const raylib = require('node-raylib')
    
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

## What's Missing?

- [Structs](https://github.com/RobLoach/node-raylib/issues/5)
- [Enums](https://github.com/RobLoach/node-raylib/issues/3)
- [Colors](https://github.com/RobLoach/node-raylib/issues/2)
- [Remaining Functions](https://github.com/RobLoach/node-raylib/issues/1)

## CLI

The project also comes with a [`node-raylib`](https://github.com/RobLoach/node-raylib/blob/master/bin/node-raylib) command-line tool to run `node-raylib` files directly.

``` bash
npm install robloach/node-raylib --save --global
node-raylib core_basic_window.js
```

## License

*raylib-nodejs* is licensed under an unmodified zlib/libpng license, which is an OSI-certified,
BSD-like license that allows static linking with closed source software. Check [LICENSE](LICENSE) for further details.

*Copyright (c) 2018 Rob Loach ([@RobLoach](https://twitter.com/RobLoach))*

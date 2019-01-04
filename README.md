# node-raylib

[Node.js](https://nodejs.org) bindings for [raylib](https://www.raylib.com/), a simple and easy-to-use library to enjoy videogames programming (www.raylib.com).

## Example

The following is an example of what raylib looks like through ChaiScript:

Check for more [examples](examples) organized by raylib modules.

## Usage

``` bash
npm i --save node-raylib
```

``` javascript
const raylib = require('node-raylib')

var screenWidth = 800
var screenHeight = 450
raylib.InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window")
raylib.SetTargetFPS(60)

while (!raylib.WindowShouldClose()) {
    raylib.BeginDrawing();
    raylib.ClearBackground(RAYWHITE)
    raylib.DrawText("Congrats! You created your first window!", 190, 200, 20, LIGHTGRAY)
    raylib.EndDrawing()
}
raylib.CloseWindow()        // Close window and OpenGL context
```

## License

*raylib-nodejs* is licensed under an unmodified zlib/libpng license, which is an OSI-certified,
BSD-like license that allows static linking with closed source software. Check [LICENSE](LICENSE) for further details.

*Copyright (c) 2018 Rob Loach ([@RobLoach](https://twitter.com/RobLoach))*

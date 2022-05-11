# Node Addon API bindings

[node-addon-api](https://github.com/nodejs/node-addon-api) is used to build bindings between NodeJS and raylib.

In order to automate creating bindings, raylib provides a JSON file with information about its API. [https://github.com/raysan5/raylib/tree/master/parser](https://github.com/raysan5/raylib/tree/master/parser)

Node-raylib parses this JSON file and automatically generates c++ node-addon-api code that binds each function in the raylib API.

- [Flattening Arguments](flattening_arguments.md)
- [Function Bindings](function_bindings.md)
- [Raylib API JSON](raylib_api_json.md)

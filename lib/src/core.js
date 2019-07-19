"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var raylib_1 = __importDefault(require("./bindings/raylib"));
exports.InitWindow = raylib_1.default.InitWindow;
exports.WindowShouldClose = raylib_1.default.WindowShouldClose;
exports.SetTargetFPS = raylib_1.default.SetTargetFPS;
exports.BeginDrawing = raylib_1.default.BeginDrawing;
exports.EndDrawing = raylib_1.default.EndDrawing;
exports.ClearBackground = raylib_1.default.ClearBackground;

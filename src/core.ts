import r from "./bindings/raylib"
import { Color } from "./colors"

export const InitWindow: (width: number, height: number, title: string) => void = r.InitWindow
export const WindowShouldClose: () => boolean = r.WindowShouldClose
export const SetTargetFPS: (fps: number) => void = r.SetTargetFPS
export const BeginDrawing: () => void = r.BeginDrawing
export const EndDrawing: () => void = r.EndDrawing
export const ClearBackground: (color: Color) => void = r.ClearBackground

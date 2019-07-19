import { Color } from "./colors";
export declare const InitWindow: (width: number, height: number, title: string) => void;
export declare const WindowShouldClose: () => boolean;
export declare const SetTargetFPS: (fps: number) => void;
export declare const BeginDrawing: () => void;
export declare const EndDrawing: () => void;
export declare const ClearBackground: (color: Color) => void;

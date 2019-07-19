import { Rectangle } from "./maths";
export interface Image {
    data: any;
    width: number;
    height: number;
    mipmaps: number;
    format: number;
}
export interface Texture2D {
    id: number;
    width: number;
    height: number;
    mipmaps: number;
    format: number;
}
export declare type Texture = Texture2D;
export declare type TextureCubemap = Texture2D;
export interface RenderTexture2D {
    id: number;
    texture: Texture2D;
    depth: Texture2D;
    depthTexture: boolean;
}
export interface CharInfo {
    value: number;
    rec: Rectangle;
    offsetX: number;
    offsetY: number;
    advanceX: number;
    data: any;
}
export interface Font {
    texture: Texture2D;
    baseSize: number;
    charsCount: number;
    chars: CharInfo;
}

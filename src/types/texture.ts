export interface Image {
  data: any
  width: number
  height: number
  mipmaps: number
  format: number
}

export interface Texture2D {
  id: number,
  width: number
  height: number
  mipmaps: number
  format: number
}

export type Texture = Texture2D
export type TextureCubemap = Texture2D


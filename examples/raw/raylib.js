const raylib = require('../../build/Release/node-raylib.node')

processColorInput = (color) => {
	return [color.r, color.g, color.b, color.a]
}

processTextureInput = (texture) => {
	return [texture.id, texture.width, texture.height, texture.mipmaps, texture.format]
}

raylib.InitWindow = (width, height, title) => {
	console.log(title)
	raylib.BindInitWindow(width, height, title)
}

raylib.LoadTexture = (path) => {
	raylib.BindLoadTexture(path)
}

raylib.WindowShouldClose = () => {
	raylib.BindWindowShouldClose()
}

raylib.GetFPS = () => {
	raylib.BindGetFPS()
}

raylib.BeginDrawing = () => {
	raylib.BeginDrawing()
}

raylib.ClearBackground = (color) => {
	raylib.BindClearBackground(...processColorInput(color))
}

raylib.DrawTexture = (texture, x, y, color) => {
	raylib.BindDrawTexture(...processTextureInput(texture), x, y, ...processColorInput(color))
}

raylib.DrawRectangle = (x, y, width, height, color) => {
	raylib.BindDrawRectangle(x, y, width, height, ...processColorInput(color))
}

raylib.DrawText = (string, x, y, size, color) => {
	raylib.BindDrawText(string, x, y, size, ...processColorInput(color))
}

raylib.DrawFPS = (x, y) => {
	raylib.BindDrawFPS(x, y)
}

raylib.EndDrawing = () => {
	raylib.BindEndDrawing()
}

raylib.UnloadTexture = (path) => {
	raylib.BindUnloadTexture(path)
}

raylib.CloseWindow = () => {
	raylib.BindCloseWindow()
}

raylib.LIGHTGRAY = { r: 200, g: 200, b: 200, a: 255 }
raylib.GRAY = { r: 130, g: 130, b: 130, a: 255 }
raylib.DARKGRAY = { r: 80, g: 80, b: 80, a: 255 }
raylib.YELLOW = { r: 253, g: 249, b: 0, a: 255 }
raylib.GOLD = { r: 255, g: 203, b: 0, a: 255 }
raylib.ORANGE = { r: 255, g: 161, b: 0, a: 255 }
raylib.PINK = { r: 255, g: 109, b: 194, a: 255 }
raylib.RED = { r: 230, g: 41, b: 55, a: 255 }
raylib.MAROON = { r: 190, g: 33, b: 55, a: 255 }
raylib.GREEN = { r: 0, g: 228, b: 48, a: 255 }
raylib.LIME = { r: 0, g: 158, b: 47, a: 255 }
raylib.DARKGREEN = { r: 0, g: 117, b: 44, a: 255 }
raylib.SKYBLUE = { r: 102, g: 191, b: 255, a: 255 }
raylib.BLUE = { r: 0, g: 121, b: 241, a: 255 }
raylib.DARKBLUE = { r: 0, g: 82, b: 172, a: 255 }
raylib.PURPLE = { r: 200, g: 122, b: 255, a: 255 }
raylib.VIOLET = { r: 135, g: 60, b: 190, a: 255 }
raylib.DARKPURPLE = { r: 112, g: 31, b: 126, a: 255 }
raylib.BEIGE = { r: 211, g: 176, b: 131, a: 255 }
raylib.BROWN = { r: 127, g: 106, b: 79, a: 255 }
raylib.DARKBROWN = { r: 76, g: 63, b: 47, a: 255 }
raylib.WHITE = { r: 255, g: 255, b: 255, a: 255 }
raylib.BLACK = { r: 0, g: 0, b: 0, a: 255 }
raylib.BLANK = { r: 0, g: 0, b: 0, a: 0 }
raylib.MAGENTA = { r: 255, g: 0, b: 255, a: 255 }
raylib.RAYWHITE = { r: 245, g: 245, b: 245, a: 255 }

module.exports = raylib
const r = require('raylib')
const {Worker} = require('worker_threads')

const screenWidth = 1280
const screenHeight = 720
r.InitWindow(screenWidth, screenHeight, "Hello World")

class Bunny {

	constructor() {
			this.pos = {
					x: Math.random() * screenWidth,
					y: Math.random() * screenHeight
			}

			this.speed = {
					x: (-250+Math.random() * 500)/60,
					y: (-250+Math.random() * 500)/60
			}

			this.color = Color(
					80 + Math.random() * 170,
					80 + Math.random() * 170,
					80 + Math.random() * 170,
					255
			)

			this.color_buffer = Buffer.from([this.color.r, this.color.g, this.color.b, this.color.a])
	}

	update() {
			this.pos.x += this.speed.x
			this.pos.y += this.speed.y

			if (this.pos.x > screenWidth || this.pos.x < 0)
					this.speed.x = -this.speed.x

			if (this.pos.y > screenHeight || this.pos.y < 0)
					this.speed.y = -this.speed.y
	}

}

function Color(r, g, b, a) {
	return {
		r: r,
		g: g,
		b: b,
		a: a
	}
}

let white = Color(255, 255, 255, 255)

let lightgray = Color(128, 128, 128, 255)

let black = Color(0, 0, 0, 255)

let green = Color(0, 255, 0, 255)


let bunny_texture = r.LoadTexture('sprite.png')
let bunnies = []

let method = 0
let quit = false
console.clear()
while (!r.WindowShouldClose() && !quit) {
	r.BeginDrawing()
	r.ClearBackground(white)

	if (r.GetFPS() > 60 || bunnies.length < 100) {
		bunnies.push(new Bunny())
	} else {
		console.log('max bunnies: ' + bunnies.length)
		break
	}
	
	for (let bunny of bunnies) {
		bunny.update()
		r.DrawTexture(bunny_texture, bunny.pos.x, bunny.pos.y, bunny.color)
	}
	
	r.DrawRectangle(0, 0, screenWidth, 40, black)
	r.DrawText(`method: ${draw_methods[method].name}		` + "bunnies: "+ bunnies.length, 10, 10, 20, green);
	r.DrawFPS(1200, 10)

	r.EndDrawing()
}
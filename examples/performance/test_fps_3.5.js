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
for (let i = 0; i < 20000; i++) {
	bunnies.push(new Bunny())
}

let quit = false
let timer = 0
console.clear()
console.log('TEST: Drawing 20,000 Textures')
while (!r.WindowShouldClose() && !quit) {
	r.BeginDrawing()
	r.ClearBackground(white)

	timer++
	if (timer == 1000) {
		timer = 0
		quit = true
		console.log(`method: raylib 3.5, fps: ${r.GetFPS()}`)
		break
	}
	
	for (let bunny of bunnies) {
		bunny.update()
		r.DrawTexture(bunny_texture, bunny.pos.x, bunny.pos.y, white)
	}
	
	r.DrawRectangle(0, 0, screenWidth, 40, black)
	r.DrawText("bunnies: "+ bunnies.length, 10, 10, 20, green);
	r.DrawFPS(1200, 10)

	r.EndDrawing()
}
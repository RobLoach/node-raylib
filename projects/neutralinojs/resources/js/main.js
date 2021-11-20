window.myApp = {
    run: (r) => {
        r.InitWindow(800, 450, "raylib")

        function loop(time) {
            r.ClearBackground(r.SKYBLUE)
            r.BeginDrawing()
            r.DrawRectangle(r.GetMouseX(), r.GetMouseY(), 50, 50, r.MAROON)
            r.EndDrawing()

            requestAnimationFrame(loop)
        }
        requestAnimationFrame(loop)
    },
    onWindowClose: () => {
        window.myApp.raylib.CloseWindow()
        Neutralino.app.exit()
    }
};

Neutralino.init();
Neutralino.events.on("windowClose", myApp.onWindowClose)
Neutralino.events.on("ready", () => {
    const options = {
        canvas: document.getElementById("canvas")
    }
    raylib(options).then((r) => {
        window.myApp.raylib = r
        window.myApp.run(r)
    })
})

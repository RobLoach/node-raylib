/**
 * node-raylib
 *
 * @module raylib
 * @file Definitions file for node-raylib.
 *
 * GENERATED CODE: DO NOT MODIFY
 */

const r = require('../../build/Release/node-raylib.node')

const raylib = {}

/**
 * Initialize window and OpenGL context
 *
 * @param {number} width
 * @param {number} height
 * @param {string} title
 *
 * @return {undefined}
 */
function InitWindow(width, height, title) {
  return r.BindInitWindow(
    width,
    height,
    title
  )
}
raylib.InitWindow = InitWindow

/**
 * Check if KEY_ESCAPE pressed or Close icon pressed
 *
 * @return {boolean} The resulting bool.
 */
function WindowShouldClose() {
  return r.BindWindowShouldClose()
}
raylib.WindowShouldClose = WindowShouldClose

/**
 * Close window and unload OpenGL context
 *
 * @return {undefined}
 */
function CloseWindow() {
  return r.BindCloseWindow()
}
raylib.CloseWindow = CloseWindow

/**
 * Check if window has been initialized successfully
 *
 * @return {boolean} The resulting bool.
 */
function IsWindowReady() {
  return r.BindIsWindowReady()
}
raylib.IsWindowReady = IsWindowReady

/**
 * Check if window is currently fullscreen
 *
 * @return {boolean} The resulting bool.
 */
function IsWindowFullscreen() {
  return r.BindIsWindowFullscreen()
}
raylib.IsWindowFullscreen = IsWindowFullscreen

/**
 * Check if window is currently hidden (only PLATFORM_DESKTOP)
 *
 * @return {boolean} The resulting bool.
 */
function IsWindowHidden() {
  return r.BindIsWindowHidden()
}
raylib.IsWindowHidden = IsWindowHidden

/**
 * Check if window is currently minimized (only PLATFORM_DESKTOP)
 *
 * @return {boolean} The resulting bool.
 */
function IsWindowMinimized() {
  return r.BindIsWindowMinimized()
}
raylib.IsWindowMinimized = IsWindowMinimized

/**
 * Check if window is currently maximized (only PLATFORM_DESKTOP)
 *
 * @return {boolean} The resulting bool.
 */
function IsWindowMaximized() {
  return r.BindIsWindowMaximized()
}
raylib.IsWindowMaximized = IsWindowMaximized

/**
 * Check if window is currently focused (only PLATFORM_DESKTOP)
 *
 * @return {boolean} The resulting bool.
 */
function IsWindowFocused() {
  return r.BindIsWindowFocused()
}
raylib.IsWindowFocused = IsWindowFocused

/**
 * Check if window has been resized last frame
 *
 * @return {boolean} The resulting bool.
 */
function IsWindowResized() {
  return r.BindIsWindowResized()
}
raylib.IsWindowResized = IsWindowResized

/**
 * Check if one specific window flag is enabled
 *
 * @param {number} flag
 *
 * @return {boolean} The resulting bool.
 */
function IsWindowState(flag) {
  return r.BindIsWindowState(
    flag
  )
}
raylib.IsWindowState = IsWindowState

/**
 * Set window configuration state using flags (only PLATFORM_DESKTOP)
 *
 * @param {number} flags
 *
 * @return {undefined}
 */
function SetWindowState(flags) {
  return r.BindSetWindowState(
    flags
  )
}
raylib.SetWindowState = SetWindowState

/**
 * Clear window configuration state flags
 *
 * @param {number} flags
 *
 * @return {undefined}
 */
function ClearWindowState(flags) {
  return r.BindClearWindowState(
    flags
  )
}
raylib.ClearWindowState = ClearWindowState

/**
 * Toggle window state: fullscreen/windowed (only PLATFORM_DESKTOP)
 *
 * @return {undefined}
 */
function ToggleFullscreen() {
  return r.BindToggleFullscreen()
}
raylib.ToggleFullscreen = ToggleFullscreen

/**
 * Set window state: maximized, if resizable (only PLATFORM_DESKTOP)
 *
 * @return {undefined}
 */
function MaximizeWindow() {
  return r.BindMaximizeWindow()
}
raylib.MaximizeWindow = MaximizeWindow

/**
 * Set window state: minimized, if resizable (only PLATFORM_DESKTOP)
 *
 * @return {undefined}
 */
function MinimizeWindow() {
  return r.BindMinimizeWindow()
}
raylib.MinimizeWindow = MinimizeWindow

/**
 * Set window state: not minimized/maximized (only PLATFORM_DESKTOP)
 *
 * @return {undefined}
 */
function RestoreWindow() {
  return r.BindRestoreWindow()
}
raylib.RestoreWindow = RestoreWindow

/**
 * Set icon for window (only PLATFORM_DESKTOP)
 *
 * @param {Image} image
 *
 * @return {undefined}
 */
function SetWindowIcon(image) {
  return r.BindSetWindowIcon(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
}
raylib.SetWindowIcon = SetWindowIcon

/**
 * Set title for window (only PLATFORM_DESKTOP)
 *
 * @param {string} title
 *
 * @return {undefined}
 */
function SetWindowTitle(title) {
  return r.BindSetWindowTitle(
    title
  )
}
raylib.SetWindowTitle = SetWindowTitle

/**
 * Set window position on screen (only PLATFORM_DESKTOP)
 *
 * @param {number} x
 * @param {number} y
 *
 * @return {undefined}
 */
function SetWindowPosition(x, y) {
  return r.BindSetWindowPosition(
    x,
    y
  )
}
raylib.SetWindowPosition = SetWindowPosition

/**
 * Set monitor for the current window (fullscreen mode)
 *
 * @param {number} monitor
 *
 * @return {undefined}
 */
function SetWindowMonitor(monitor) {
  return r.BindSetWindowMonitor(
    monitor
  )
}
raylib.SetWindowMonitor = SetWindowMonitor

/**
 * Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE)
 *
 * @param {number} width
 * @param {number} height
 *
 * @return {undefined}
 */
function SetWindowMinSize(width, height) {
  return r.BindSetWindowMinSize(
    width,
    height
  )
}
raylib.SetWindowMinSize = SetWindowMinSize

/**
 * Set window dimensions
 *
 * @param {number} width
 * @param {number} height
 *
 * @return {undefined}
 */
function SetWindowSize(width, height) {
  return r.BindSetWindowSize(
    width,
    height
  )
}
raylib.SetWindowSize = SetWindowSize

/**
 * Get native window handle
 *
 * @return {number} The resulting void *.
 */
function GetWindowHandle() {
  return r.BindGetWindowHandle()
}
raylib.GetWindowHandle = GetWindowHandle

/**
 * Get current screen width
 *
 * @return {number} The resulting int.
 */
function GetScreenWidth() {
  return r.BindGetScreenWidth()
}
raylib.GetScreenWidth = GetScreenWidth

/**
 * Get current screen height
 *
 * @return {number} The resulting int.
 */
function GetScreenHeight() {
  return r.BindGetScreenHeight()
}
raylib.GetScreenHeight = GetScreenHeight

/**
 * Get number of connected monitors
 *
 * @return {number} The resulting int.
 */
function GetMonitorCount() {
  return r.BindGetMonitorCount()
}
raylib.GetMonitorCount = GetMonitorCount

/**
 * Get current connected monitor
 *
 * @return {number} The resulting int.
 */
function GetCurrentMonitor() {
  return r.BindGetCurrentMonitor()
}
raylib.GetCurrentMonitor = GetCurrentMonitor

/**
 * Get specified monitor position
 *
 * @param {number} monitor
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetMonitorPosition(monitor) {
  return r.BindGetMonitorPosition(
    monitor
  )
}
raylib.GetMonitorPosition = GetMonitorPosition

/**
 * Get specified monitor width (max available by monitor)
 *
 * @param {number} monitor
 *
 * @return {number} The resulting int.
 */
function GetMonitorWidth(monitor) {
  return r.BindGetMonitorWidth(
    monitor
  )
}
raylib.GetMonitorWidth = GetMonitorWidth

/**
 * Get specified monitor height (max available by monitor)
 *
 * @param {number} monitor
 *
 * @return {number} The resulting int.
 */
function GetMonitorHeight(monitor) {
  return r.BindGetMonitorHeight(
    monitor
  )
}
raylib.GetMonitorHeight = GetMonitorHeight

/**
 * Get specified monitor physical width in millimetres
 *
 * @param {number} monitor
 *
 * @return {number} The resulting int.
 */
function GetMonitorPhysicalWidth(monitor) {
  return r.BindGetMonitorPhysicalWidth(
    monitor
  )
}
raylib.GetMonitorPhysicalWidth = GetMonitorPhysicalWidth

/**
 * Get specified monitor physical height in millimetres
 *
 * @param {number} monitor
 *
 * @return {number} The resulting int.
 */
function GetMonitorPhysicalHeight(monitor) {
  return r.BindGetMonitorPhysicalHeight(
    monitor
  )
}
raylib.GetMonitorPhysicalHeight = GetMonitorPhysicalHeight

/**
 * Get specified monitor refresh rate
 *
 * @param {number} monitor
 *
 * @return {number} The resulting int.
 */
function GetMonitorRefreshRate(monitor) {
  return r.BindGetMonitorRefreshRate(
    monitor
  )
}
raylib.GetMonitorRefreshRate = GetMonitorRefreshRate

/**
 * Get window position XY on monitor
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetWindowPosition() {
  return r.BindGetWindowPosition()
}
raylib.GetWindowPosition = GetWindowPosition

/**
 * Get window scale DPI factor
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetWindowScaleDPI() {
  return r.BindGetWindowScaleDPI()
}
raylib.GetWindowScaleDPI = GetWindowScaleDPI

/**
 * Get the human-readable, UTF-8 encoded name of the primary monitor
 *
 * @param {number} monitor
 *
 * @return {string} The resulting const char *.
 */
function GetMonitorName(monitor) {
  return r.BindGetMonitorName(
    monitor
  )
}
raylib.GetMonitorName = GetMonitorName

/**
 * Set clipboard text content
 *
 * @param {string} text
 *
 * @return {undefined}
 */
function SetClipboardText(text) {
  return r.BindSetClipboardText(
    text
  )
}
raylib.SetClipboardText = SetClipboardText

/**
 * Get clipboard text content
 *
 * @return {string} The resulting const char *.
 */
function GetClipboardText() {
  return r.BindGetClipboardText()
}
raylib.GetClipboardText = GetClipboardText

/**
 * Swap back buffer with front buffer (screen drawing)
 *
 * @return {undefined}
 */
function SwapScreenBuffer() {
  return r.BindSwapScreenBuffer()
}
raylib.SwapScreenBuffer = SwapScreenBuffer

/**
 * Register all input events
 *
 * @return {undefined}
 */
function PollInputEvents() {
  return r.BindPollInputEvents()
}
raylib.PollInputEvents = PollInputEvents

/**
 * Wait for some milliseconds (halt program execution)
 *
 * @param {number} ms
 *
 * @return {undefined}
 */
function WaitTime(ms) {
  return r.BindWaitTime(
    ms
  )
}
raylib.WaitTime = WaitTime

/**
 * Shows cursor
 *
 * @return {undefined}
 */
function ShowCursor() {
  return r.BindShowCursor()
}
raylib.ShowCursor = ShowCursor

/**
 * Hides cursor
 *
 * @return {undefined}
 */
function HideCursor() {
  return r.BindHideCursor()
}
raylib.HideCursor = HideCursor

/**
 * Check if cursor is not visible
 *
 * @return {boolean} The resulting bool.
 */
function IsCursorHidden() {
  return r.BindIsCursorHidden()
}
raylib.IsCursorHidden = IsCursorHidden

/**
 * Enables cursor (unlock cursor)
 *
 * @return {undefined}
 */
function EnableCursor() {
  return r.BindEnableCursor()
}
raylib.EnableCursor = EnableCursor

/**
 * Disables cursor (lock cursor)
 *
 * @return {undefined}
 */
function DisableCursor() {
  return r.BindDisableCursor()
}
raylib.DisableCursor = DisableCursor

/**
 * Check if cursor is on the screen
 *
 * @return {boolean} The resulting bool.
 */
function IsCursorOnScreen() {
  return r.BindIsCursorOnScreen()
}
raylib.IsCursorOnScreen = IsCursorOnScreen

/**
 * Set background color (framebuffer clear color)
 *
 * @param {Color} color
 *
 * @return {undefined}
 */
function ClearBackground(color) {
  return r.BindClearBackground(
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.ClearBackground = ClearBackground

/**
 * Setup canvas (framebuffer) to start drawing
 *
 * @return {undefined}
 */
function BeginDrawing() {
  return r.BindBeginDrawing()
}
raylib.BeginDrawing = BeginDrawing

/**
 * End canvas drawing and swap buffers (double buffering)
 *
 * @return {undefined}
 */
function EndDrawing() {
  return r.BindEndDrawing()
}
raylib.EndDrawing = EndDrawing

/**
 * Begin 2D mode with custom camera (2D)
 *
 * @param {Camera2D} camera
 *
 * @return {undefined}
 */
function BeginMode2D(camera) {
  return r.BindBeginMode2D(
    camera.offset.x,
    camera.offset.y,
    camera.target.x,
    camera.target.y,
    camera.rotation,
    camera.zoom
  )
}
raylib.BeginMode2D = BeginMode2D

/**
 * Ends 2D mode with custom camera
 *
 * @return {undefined}
 */
function EndMode2D() {
  return r.BindEndMode2D()
}
raylib.EndMode2D = EndMode2D

/**
 * Begin 3D mode with custom camera (3D)
 *
 * @param {Camera3D} camera
 *
 * @return {undefined}
 */
function BeginMode3D(camera) {
  return r.BindBeginMode3D(
    camera.position.x,
    camera.position.y,
    camera.position.z,
    camera.target.x,
    camera.target.y,
    camera.target.z,
    camera.up.x,
    camera.up.y,
    camera.up.z,
    camera.fovy,
    camera.projection
  )
}
raylib.BeginMode3D = BeginMode3D

/**
 * Ends 3D mode and returns to default 2D orthographic mode
 *
 * @return {undefined}
 */
function EndMode3D() {
  return r.BindEndMode3D()
}
raylib.EndMode3D = EndMode3D

/**
 * Begin drawing to render texture
 *
 * @param {RenderTexture2D} target
 *
 * @return {undefined}
 */
function BeginTextureMode(target) {
  return r.BindBeginTextureMode(
    target.id,
    target.texture.id,
    target.texture.width,
    target.texture.height,
    target.texture.mipmaps,
    target.texture.format,
    target.depth.id,
    target.depth.width,
    target.depth.height,
    target.depth.mipmaps,
    target.depth.format
  )
}
raylib.BeginTextureMode = BeginTextureMode

/**
 * Ends drawing to render texture
 *
 * @return {undefined}
 */
function EndTextureMode() {
  return r.BindEndTextureMode()
}
raylib.EndTextureMode = EndTextureMode

/**
 * Begin custom shader drawing
 *
 * @param {Shader} shader
 *
 * @return {undefined}
 */
function BeginShaderMode(shader) {
  return r.BindBeginShaderMode(
    shader.id,
    shader.locs
  )
}
raylib.BeginShaderMode = BeginShaderMode

/**
 * End custom shader drawing (use default shader)
 *
 * @return {undefined}
 */
function EndShaderMode() {
  return r.BindEndShaderMode()
}
raylib.EndShaderMode = EndShaderMode

/**
 * Begin blending mode (alpha, additive, multiplied, subtract, custom)
 *
 * @param {number} mode
 *
 * @return {undefined}
 */
function BeginBlendMode(mode) {
  return r.BindBeginBlendMode(
    mode
  )
}
raylib.BeginBlendMode = BeginBlendMode

/**
 * End blending mode (reset to default: alpha blending)
 *
 * @return {undefined}
 */
function EndBlendMode() {
  return r.BindEndBlendMode()
}
raylib.EndBlendMode = EndBlendMode

/**
 * Begin scissor mode (define screen area for following drawing)
 *
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 *
 * @return {undefined}
 */
function BeginScissorMode(x, y, width, height) {
  return r.BindBeginScissorMode(
    x,
    y,
    width,
    height
  )
}
raylib.BeginScissorMode = BeginScissorMode

/**
 * End scissor mode
 *
 * @return {undefined}
 */
function EndScissorMode() {
  return r.BindEndScissorMode()
}
raylib.EndScissorMode = EndScissorMode

/**
 * End stereo rendering (requires VR simulator)
 *
 * @return {undefined}
 */
function EndVrStereoMode() {
  return r.BindEndVrStereoMode()
}
raylib.EndVrStereoMode = EndVrStereoMode

/**
 * Load shader from files and bind default locations
 *
 * @param {string} vsFileName
 * @param {string} fsFileName
 *
 * @return {Shader} The resulting Shader.
 */
function LoadShader(vsFileName, fsFileName) {
  return r.BindLoadShader(
    vsFileName,
    fsFileName
  )
}
raylib.LoadShader = LoadShader

/**
 * Load shader from code strings and bind default locations
 *
 * @param {string} vsCode
 * @param {string} fsCode
 *
 * @return {Shader} The resulting Shader.
 */
function LoadShaderFromMemory(vsCode, fsCode) {
  return r.BindLoadShaderFromMemory(
    vsCode,
    fsCode
  )
}
raylib.LoadShaderFromMemory = LoadShaderFromMemory

/**
 * Get shader uniform location
 *
 * @param {Shader} shader
 * @param {string} uniformName
 *
 * @return {number} The resulting int.
 */
function GetShaderLocation(shader, uniformName) {
  return r.BindGetShaderLocation(
    shader.id,
    shader.locs,
    uniformName
  )
}
raylib.GetShaderLocation = GetShaderLocation

/**
 * Get shader attribute location
 *
 * @param {Shader} shader
 * @param {string} attribName
 *
 * @return {number} The resulting int.
 */
function GetShaderLocationAttrib(shader, attribName) {
  return r.BindGetShaderLocationAttrib(
    shader.id,
    shader.locs,
    attribName
  )
}
raylib.GetShaderLocationAttrib = GetShaderLocationAttrib

/**
 * Set shader uniform value (matrix 4x4)
 *
 * @param {Shader} shader
 * @param {number} locIndex
 * @param {Matrix} mat
 *
 * @return {undefined}
 */
function SetShaderValueMatrix(shader, locIndex, mat) {
  return r.BindSetShaderValueMatrix(
    shader.id,
    shader.locs,
    locIndex,
    mat.m0,
    mat.m1,
    mat.m2,
    mat.m3,
    mat.m4,
    mat.m5,
    mat.m6,
    mat.m7,
    mat.m8,
    mat.m9,
    mat.m10,
    mat.m11,
    mat.m12,
    mat.m13,
    mat.m14,
    mat.m15
  )
}
raylib.SetShaderValueMatrix = SetShaderValueMatrix

/**
 * Set shader uniform value for texture (sampler2d)
 *
 * @param {Shader} shader
 * @param {number} locIndex
 * @param {Texture2D} texture
 *
 * @return {undefined}
 */
function SetShaderValueTexture(shader, locIndex, texture) {
  return r.BindSetShaderValueTexture(
    shader.id,
    shader.locs,
    locIndex,
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format
  )
}
raylib.SetShaderValueTexture = SetShaderValueTexture

/**
 * Unload shader from GPU memory (VRAM)
 *
 * @param {Shader} shader
 *
 * @return {undefined}
 */
function UnloadShader(shader) {
  return r.BindUnloadShader(
    shader.id,
    shader.locs
  )
}
raylib.UnloadShader = UnloadShader

/**
 * Get a ray trace from mouse position
 *
 * @param {Vector2} mousePosition
 * @param {Camera} camera
 *
 * @return {Ray} The resulting Ray.
 */
function GetMouseRay(mousePosition, camera) {
  return r.BindGetMouseRay(
    mousePosition.x,
    mousePosition.y,
    camera.position.x,
    camera.position.y,
    camera.position.z,
    camera.target.x,
    camera.target.y,
    camera.target.z,
    camera.up.x,
    camera.up.y,
    camera.up.z,
    camera.fovy,
    camera.projection
  )
}
raylib.GetMouseRay = GetMouseRay

/**
 * Get camera transform matrix (view matrix)
 *
 * @param {Camera} camera
 *
 * @return {Matrix} The resulting Matrix.
 */
function GetCameraMatrix(camera) {
  return r.BindGetCameraMatrix(
    camera.position.x,
    camera.position.y,
    camera.position.z,
    camera.target.x,
    camera.target.y,
    camera.target.z,
    camera.up.x,
    camera.up.y,
    camera.up.z,
    camera.fovy,
    camera.projection
  )
}
raylib.GetCameraMatrix = GetCameraMatrix

/**
 * Get camera 2d transform matrix
 *
 * @param {Camera2D} camera
 *
 * @return {Matrix} The resulting Matrix.
 */
function GetCameraMatrix2D(camera) {
  return r.BindGetCameraMatrix2D(
    camera.offset.x,
    camera.offset.y,
    camera.target.x,
    camera.target.y,
    camera.rotation,
    camera.zoom
  )
}
raylib.GetCameraMatrix2D = GetCameraMatrix2D

/**
 * Get the screen space position for a 3d world space position
 *
 * @param {Vector3} position
 * @param {Camera} camera
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetWorldToScreen(position, camera) {
  return r.BindGetWorldToScreen(
    position.x,
    position.y,
    position.z,
    camera.position.x,
    camera.position.y,
    camera.position.z,
    camera.target.x,
    camera.target.y,
    camera.target.z,
    camera.up.x,
    camera.up.y,
    camera.up.z,
    camera.fovy,
    camera.projection
  )
}
raylib.GetWorldToScreen = GetWorldToScreen

/**
 * Get size position for a 3d world space position
 *
 * @param {Vector3} position
 * @param {Camera} camera
 * @param {number} width
 * @param {number} height
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetWorldToScreenEx(position, camera, width, height) {
  return r.BindGetWorldToScreenEx(
    position.x,
    position.y,
    position.z,
    camera.position.x,
    camera.position.y,
    camera.position.z,
    camera.target.x,
    camera.target.y,
    camera.target.z,
    camera.up.x,
    camera.up.y,
    camera.up.z,
    camera.fovy,
    camera.projection,
    width,
    height
  )
}
raylib.GetWorldToScreenEx = GetWorldToScreenEx

/**
 * Get the screen space position for a 2d camera world space position
 *
 * @param {Vector2} position
 * @param {Camera2D} camera
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetWorldToScreen2D(position, camera) {
  return r.BindGetWorldToScreen2D(
    position.x,
    position.y,
    camera.offset.x,
    camera.offset.y,
    camera.target.x,
    camera.target.y,
    camera.rotation,
    camera.zoom
  )
}
raylib.GetWorldToScreen2D = GetWorldToScreen2D

/**
 * Get the world space position for a 2d camera screen space position
 *
 * @param {Vector2} position
 * @param {Camera2D} camera
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetScreenToWorld2D(position, camera) {
  return r.BindGetScreenToWorld2D(
    position.x,
    position.y,
    camera.offset.x,
    camera.offset.y,
    camera.target.x,
    camera.target.y,
    camera.rotation,
    camera.zoom
  )
}
raylib.GetScreenToWorld2D = GetScreenToWorld2D

/**
 * Set target FPS (maximum)
 *
 * @param {number} fps
 *
 * @return {undefined}
 */
function SetTargetFPS(fps) {
  return r.BindSetTargetFPS(
    fps
  )
}
raylib.SetTargetFPS = SetTargetFPS

/**
 * Get current FPS
 *
 * @return {number} The resulting int.
 */
function GetFPS() {
  return r.BindGetFPS()
}
raylib.GetFPS = GetFPS

/**
 * Get time in seconds for last frame drawn (delta time)
 *
 * @return {number} The resulting float.
 */
function GetFrameTime() {
  return r.BindGetFrameTime()
}
raylib.GetFrameTime = GetFrameTime

/**
 * Get elapsed time in seconds since InitWindow()
 *
 * @return {number} The resulting double.
 */
function GetTime() {
  return r.BindGetTime()
}
raylib.GetTime = GetTime

/**
 * Get a random value between min and max (both included)
 *
 * @param {number} min
 * @param {number} max
 *
 * @return {number} The resulting int.
 */
function GetRandomValue(min, max) {
  return r.BindGetRandomValue(
    min,
    max
  )
}
raylib.GetRandomValue = GetRandomValue

/**
 * Set the seed for the random number generator
 *
 * @param {number} seed
 *
 * @return {undefined}
 */
function SetRandomSeed(seed) {
  return r.BindSetRandomSeed(
    seed
  )
}
raylib.SetRandomSeed = SetRandomSeed

/**
 * Takes a screenshot of current screen (filename extension defines format)
 *
 * @param {string} fileName
 *
 * @return {undefined}
 */
function TakeScreenshot(fileName) {
  return r.BindTakeScreenshot(
    fileName
  )
}
raylib.TakeScreenshot = TakeScreenshot

/**
 * Setup init configuration flags (view FLAGS)
 *
 * @param {number} flags
 *
 * @return {undefined}
 */
function SetConfigFlags(flags) {
  return r.BindSetConfigFlags(
    flags
  )
}
raylib.SetConfigFlags = SetConfigFlags

/**
 * Set the current threshold (minimum) log level
 *
 * @param {number} logLevel
 *
 * @return {undefined}
 */
function SetTraceLogLevel(logLevel) {
  return r.BindSetTraceLogLevel(
    logLevel
  )
}
raylib.SetTraceLogLevel = SetTraceLogLevel

/**
 * Internal memory allocator
 *
 * @param {number} size
 *
 * @return {number} The resulting void *.
 */
function MemAlloc(size) {
  return r.BindMemAlloc(
    size
  )
}
raylib.MemAlloc = MemAlloc

/**
 * Internal memory reallocator
 *
 * @param {number} ptr
 * @param {number} size
 *
 * @return {number} The resulting void *.
 */
function MemRealloc(ptr, size) {
  return r.BindMemRealloc(
    ptr,
    size
  )
}
raylib.MemRealloc = MemRealloc

/**
 * Internal memory free
 *
 * @param {number} ptr
 *
 * @return {undefined}
 */
function MemFree(ptr) {
  return r.BindMemFree(
    ptr
  )
}
raylib.MemFree = MemFree

/**
 * Load file data as byte array (read)
 *
 * @param {string} fileName
 * @param {number} bytesRead
 *
 * @return {Buffer} The resulting unsigned char *.
 */
function LoadFileData(fileName, bytesRead) {
  return r.BindLoadFileData(
    fileName,
    bytesRead
  )
}
raylib.LoadFileData = LoadFileData

/**
 * Unload file data allocated by LoadFileData()
 *
 * @param {Buffer} data
 *
 * @return {undefined}
 */
function UnloadFileData(data) {
  return r.BindUnloadFileData(
    data
  )
}
raylib.UnloadFileData = UnloadFileData

/**
 * Save data to file from byte array (write), returns true on success
 *
 * @param {string} fileName
 * @param {number} data
 * @param {number} bytesToWrite
 *
 * @return {boolean} The resulting bool.
 */
function SaveFileData(fileName, data, bytesToWrite) {
  return r.BindSaveFileData(
    fileName,
    data,
    bytesToWrite
  )
}
raylib.SaveFileData = SaveFileData

/**
 * Load text data from file (read), returns a '\0' terminated string
 *
 * @param {string} fileName
 *
 * @return {string} The resulting char *.
 */
function LoadFileText(fileName) {
  return r.BindLoadFileText(
    fileName
  )
}
raylib.LoadFileText = LoadFileText

/**
 * Unload file text data allocated by LoadFileText()
 *
 * @param {string} text
 *
 * @return {undefined}
 */
function UnloadFileText(text) {
  return r.BindUnloadFileText(
    text
  )
}
raylib.UnloadFileText = UnloadFileText

/**
 * Save text data to file (write), string must be '\0' terminated, returns true on success
 *
 * @param {string} fileName
 * @param {string} text
 *
 * @return {boolean} The resulting bool.
 */
function SaveFileText(fileName, text) {
  return r.BindSaveFileText(
    fileName,
    text
  )
}
raylib.SaveFileText = SaveFileText

/**
 * Check if file exists
 *
 * @param {string} fileName
 *
 * @return {boolean} The resulting bool.
 */
function FileExists(fileName) {
  return r.BindFileExists(
    fileName
  )
}
raylib.FileExists = FileExists

/**
 * Check if a directory path exists
 *
 * @param {string} dirPath
 *
 * @return {boolean} The resulting bool.
 */
function DirectoryExists(dirPath) {
  return r.BindDirectoryExists(
    dirPath
  )
}
raylib.DirectoryExists = DirectoryExists

/**
 * Check file extension (including point: .png, .wav)
 *
 * @param {string} fileName
 * @param {string} ext
 *
 * @return {boolean} The resulting bool.
 */
function IsFileExtension(fileName, ext) {
  return r.BindIsFileExtension(
    fileName,
    ext
  )
}
raylib.IsFileExtension = IsFileExtension

/**
 * Get pointer to extension for a filename string (includes dot: '.png')
 *
 * @param {string} fileName
 *
 * @return {string} The resulting const char *.
 */
function GetFileExtension(fileName) {
  return r.BindGetFileExtension(
    fileName
  )
}
raylib.GetFileExtension = GetFileExtension

/**
 * Get pointer to filename for a path string
 *
 * @param {string} filePath
 *
 * @return {string} The resulting const char *.
 */
function GetFileName(filePath) {
  return r.BindGetFileName(
    filePath
  )
}
raylib.GetFileName = GetFileName

/**
 * Get filename string without extension (uses static string)
 *
 * @param {string} filePath
 *
 * @return {string} The resulting const char *.
 */
function GetFileNameWithoutExt(filePath) {
  return r.BindGetFileNameWithoutExt(
    filePath
  )
}
raylib.GetFileNameWithoutExt = GetFileNameWithoutExt

/**
 * Get full path for a given fileName with path (uses static string)
 *
 * @param {string} filePath
 *
 * @return {string} The resulting const char *.
 */
function GetDirectoryPath(filePath) {
  return r.BindGetDirectoryPath(
    filePath
  )
}
raylib.GetDirectoryPath = GetDirectoryPath

/**
 * Get previous directory path for a given path (uses static string)
 *
 * @param {string} dirPath
 *
 * @return {string} The resulting const char *.
 */
function GetPrevDirectoryPath(dirPath) {
  return r.BindGetPrevDirectoryPath(
    dirPath
  )
}
raylib.GetPrevDirectoryPath = GetPrevDirectoryPath

/**
 * Get current working directory (uses static string)
 *
 * @return {string} The resulting const char *.
 */
function GetWorkingDirectory() {
  return r.BindGetWorkingDirectory()
}
raylib.GetWorkingDirectory = GetWorkingDirectory

/**
 * Get filenames in a directory path (memory should be freed)
 *
 * @param {string} dirPath
 * @param {number} count
 *
 * @return {number} The resulting char **.
 */
function GetDirectoryFiles(dirPath, count) {
  return r.BindGetDirectoryFiles(
    dirPath,
    count
  )
}
raylib.GetDirectoryFiles = GetDirectoryFiles

/**
 * Clear directory files paths buffers (free memory)
 *
 * @return {undefined}
 */
function ClearDirectoryFiles() {
  return r.BindClearDirectoryFiles()
}
raylib.ClearDirectoryFiles = ClearDirectoryFiles

/**
 * Change working directory, return true on success
 *
 * @param {string} dir
 *
 * @return {boolean} The resulting bool.
 */
function ChangeDirectory(dir) {
  return r.BindChangeDirectory(
    dir
  )
}
raylib.ChangeDirectory = ChangeDirectory

/**
 * Check if a file has been dropped into window
 *
 * @return {boolean} The resulting bool.
 */
function IsFileDropped() {
  return r.BindIsFileDropped()
}
raylib.IsFileDropped = IsFileDropped

/**
 * Get dropped files names (memory should be freed)
 *
 * @param {number} count
 *
 * @return {number} The resulting char **.
 */
function GetDroppedFiles(count) {
  return r.BindGetDroppedFiles(
    count
  )
}
raylib.GetDroppedFiles = GetDroppedFiles

/**
 * Clear dropped files paths buffer (free memory)
 *
 * @return {undefined}
 */
function ClearDroppedFiles() {
  return r.BindClearDroppedFiles()
}
raylib.ClearDroppedFiles = ClearDroppedFiles

/**
 * Get file modification time (last write time)
 *
 * @param {string} fileName
 *
 * @return {number} The resulting long.
 */
function GetFileModTime(fileName) {
  return r.BindGetFileModTime(
    fileName
  )
}
raylib.GetFileModTime = GetFileModTime

/**
 * Compress data (DEFLATE algorithm)
 *
 * @param {Buffer} data
 * @param {number} dataLength
 * @param {number} compDataLength
 *
 * @return {Buffer} The resulting unsigned char *.
 */
function CompressData(data, dataLength, compDataLength) {
  return r.BindCompressData(
    data,
    dataLength,
    compDataLength
  )
}
raylib.CompressData = CompressData

/**
 * Decompress data (DEFLATE algorithm)
 *
 * @param {Buffer} compData
 * @param {number} compDataLength
 * @param {number} dataLength
 *
 * @return {Buffer} The resulting unsigned char *.
 */
function DecompressData(compData, compDataLength, dataLength) {
  return r.BindDecompressData(
    compData,
    compDataLength,
    dataLength
  )
}
raylib.DecompressData = DecompressData

/**
 * Encode data to Base64 string
 *
 * @param {Buffer} data
 * @param {number} dataLength
 * @param {number} outputLength
 *
 * @return {string} The resulting char *.
 */
function EncodeDataBase64(data, dataLength, outputLength) {
  return r.BindEncodeDataBase64(
    data,
    dataLength,
    outputLength
  )
}
raylib.EncodeDataBase64 = EncodeDataBase64

/**
 * Decode Base64 string data
 *
 * @param {Buffer} data
 * @param {number} outputLength
 *
 * @return {Buffer} The resulting unsigned char *.
 */
function DecodeDataBase64(data, outputLength) {
  return r.BindDecodeDataBase64(
    data,
    outputLength
  )
}
raylib.DecodeDataBase64 = DecodeDataBase64

/**
 * Save integer value to storage file (to defined position), returns true on success
 *
 * @param {number} position
 * @param {number} value
 *
 * @return {boolean} The resulting bool.
 */
function SaveStorageValue(position, value) {
  return r.BindSaveStorageValue(
    position,
    value
  )
}
raylib.SaveStorageValue = SaveStorageValue

/**
 * Load integer value from storage file (from defined position)
 *
 * @param {number} position
 *
 * @return {number} The resulting int.
 */
function LoadStorageValue(position) {
  return r.BindLoadStorageValue(
    position
  )
}
raylib.LoadStorageValue = LoadStorageValue

/**
 * Open URL with default system browser (if available)
 *
 * @param {string} url
 *
 * @return {undefined}
 */
function OpenURL(url) {
  return r.BindOpenURL(
    url
  )
}
raylib.OpenURL = OpenURL

/**
 * Check if a key has been pressed once
 *
 * @param {number} key
 *
 * @return {boolean} The resulting bool.
 */
function IsKeyPressed(key) {
  return r.BindIsKeyPressed(
    key
  )
}
raylib.IsKeyPressed = IsKeyPressed

/**
 * Check if a key is being pressed
 *
 * @param {number} key
 *
 * @return {boolean} The resulting bool.
 */
function IsKeyDown(key) {
  return r.BindIsKeyDown(
    key
  )
}
raylib.IsKeyDown = IsKeyDown

/**
 * Check if a key has been released once
 *
 * @param {number} key
 *
 * @return {boolean} The resulting bool.
 */
function IsKeyReleased(key) {
  return r.BindIsKeyReleased(
    key
  )
}
raylib.IsKeyReleased = IsKeyReleased

/**
 * Check if a key is NOT being pressed
 *
 * @param {number} key
 *
 * @return {boolean} The resulting bool.
 */
function IsKeyUp(key) {
  return r.BindIsKeyUp(
    key
  )
}
raylib.IsKeyUp = IsKeyUp

/**
 * Set a custom key to exit program (default is ESC)
 *
 * @param {number} key
 *
 * @return {undefined}
 */
function SetExitKey(key) {
  return r.BindSetExitKey(
    key
  )
}
raylib.SetExitKey = SetExitKey

/**
 * Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty
 *
 * @return {number} The resulting int.
 */
function GetKeyPressed() {
  return r.BindGetKeyPressed()
}
raylib.GetKeyPressed = GetKeyPressed

/**
 * Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty
 *
 * @return {number} The resulting int.
 */
function GetCharPressed() {
  return r.BindGetCharPressed()
}
raylib.GetCharPressed = GetCharPressed

/**
 * Check if a gamepad is available
 *
 * @param {number} gamepad
 *
 * @return {boolean} The resulting bool.
 */
function IsGamepadAvailable(gamepad) {
  return r.BindIsGamepadAvailable(
    gamepad
  )
}
raylib.IsGamepadAvailable = IsGamepadAvailable

/**
 * Get gamepad internal name id
 *
 * @param {number} gamepad
 *
 * @return {string} The resulting const char *.
 */
function GetGamepadName(gamepad) {
  return r.BindGetGamepadName(
    gamepad
  )
}
raylib.GetGamepadName = GetGamepadName

/**
 * Check if a gamepad button has been pressed once
 *
 * @param {number} gamepad
 * @param {number} button
 *
 * @return {boolean} The resulting bool.
 */
function IsGamepadButtonPressed(gamepad, button) {
  return r.BindIsGamepadButtonPressed(
    gamepad,
    button
  )
}
raylib.IsGamepadButtonPressed = IsGamepadButtonPressed

/**
 * Check if a gamepad button is being pressed
 *
 * @param {number} gamepad
 * @param {number} button
 *
 * @return {boolean} The resulting bool.
 */
function IsGamepadButtonDown(gamepad, button) {
  return r.BindIsGamepadButtonDown(
    gamepad,
    button
  )
}
raylib.IsGamepadButtonDown = IsGamepadButtonDown

/**
 * Check if a gamepad button has been released once
 *
 * @param {number} gamepad
 * @param {number} button
 *
 * @return {boolean} The resulting bool.
 */
function IsGamepadButtonReleased(gamepad, button) {
  return r.BindIsGamepadButtonReleased(
    gamepad,
    button
  )
}
raylib.IsGamepadButtonReleased = IsGamepadButtonReleased

/**
 * Check if a gamepad button is NOT being pressed
 *
 * @param {number} gamepad
 * @param {number} button
 *
 * @return {boolean} The resulting bool.
 */
function IsGamepadButtonUp(gamepad, button) {
  return r.BindIsGamepadButtonUp(
    gamepad,
    button
  )
}
raylib.IsGamepadButtonUp = IsGamepadButtonUp

/**
 * Get the last gamepad button pressed
 *
 * @return {number} The resulting int.
 */
function GetGamepadButtonPressed() {
  return r.BindGetGamepadButtonPressed()
}
raylib.GetGamepadButtonPressed = GetGamepadButtonPressed

/**
 * Get gamepad axis count for a gamepad
 *
 * @param {number} gamepad
 *
 * @return {number} The resulting int.
 */
function GetGamepadAxisCount(gamepad) {
  return r.BindGetGamepadAxisCount(
    gamepad
  )
}
raylib.GetGamepadAxisCount = GetGamepadAxisCount

/**
 * Get axis movement value for a gamepad axis
 *
 * @param {number} gamepad
 * @param {number} axis
 *
 * @return {number} The resulting float.
 */
function GetGamepadAxisMovement(gamepad, axis) {
  return r.BindGetGamepadAxisMovement(
    gamepad,
    axis
  )
}
raylib.GetGamepadAxisMovement = GetGamepadAxisMovement

/**
 * Set internal gamepad mappings (SDL_GameControllerDB)
 *
 * @param {string} mappings
 *
 * @return {number} The resulting int.
 */
function SetGamepadMappings(mappings) {
  return r.BindSetGamepadMappings(
    mappings
  )
}
raylib.SetGamepadMappings = SetGamepadMappings

/**
 * Check if a mouse button has been pressed once
 *
 * @param {number} button
 *
 * @return {boolean} The resulting bool.
 */
function IsMouseButtonPressed(button) {
  return r.BindIsMouseButtonPressed(
    button
  )
}
raylib.IsMouseButtonPressed = IsMouseButtonPressed

/**
 * Check if a mouse button is being pressed
 *
 * @param {number} button
 *
 * @return {boolean} The resulting bool.
 */
function IsMouseButtonDown(button) {
  return r.BindIsMouseButtonDown(
    button
  )
}
raylib.IsMouseButtonDown = IsMouseButtonDown

/**
 * Check if a mouse button has been released once
 *
 * @param {number} button
 *
 * @return {boolean} The resulting bool.
 */
function IsMouseButtonReleased(button) {
  return r.BindIsMouseButtonReleased(
    button
  )
}
raylib.IsMouseButtonReleased = IsMouseButtonReleased

/**
 * Check if a mouse button is NOT being pressed
 *
 * @param {number} button
 *
 * @return {boolean} The resulting bool.
 */
function IsMouseButtonUp(button) {
  return r.BindIsMouseButtonUp(
    button
  )
}
raylib.IsMouseButtonUp = IsMouseButtonUp

/**
 * Get mouse position X
 *
 * @return {number} The resulting int.
 */
function GetMouseX() {
  return r.BindGetMouseX()
}
raylib.GetMouseX = GetMouseX

/**
 * Get mouse position Y
 *
 * @return {number} The resulting int.
 */
function GetMouseY() {
  return r.BindGetMouseY()
}
raylib.GetMouseY = GetMouseY

/**
 * Get mouse position XY
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetMousePosition() {
  return r.BindGetMousePosition()
}
raylib.GetMousePosition = GetMousePosition

/**
 * Get mouse delta between frames
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetMouseDelta() {
  return r.BindGetMouseDelta()
}
raylib.GetMouseDelta = GetMouseDelta

/**
 * Set mouse position XY
 *
 * @param {number} x
 * @param {number} y
 *
 * @return {undefined}
 */
function SetMousePosition(x, y) {
  return r.BindSetMousePosition(
    x,
    y
  )
}
raylib.SetMousePosition = SetMousePosition

/**
 * Set mouse offset
 *
 * @param {number} offsetX
 * @param {number} offsetY
 *
 * @return {undefined}
 */
function SetMouseOffset(offsetX, offsetY) {
  return r.BindSetMouseOffset(
    offsetX,
    offsetY
  )
}
raylib.SetMouseOffset = SetMouseOffset

/**
 * Set mouse scaling
 *
 * @param {number} scaleX
 * @param {number} scaleY
 *
 * @return {undefined}
 */
function SetMouseScale(scaleX, scaleY) {
  return r.BindSetMouseScale(
    scaleX,
    scaleY
  )
}
raylib.SetMouseScale = SetMouseScale

/**
 * Get mouse wheel movement Y
 *
 * @return {number} The resulting float.
 */
function GetMouseWheelMove() {
  return r.BindGetMouseWheelMove()
}
raylib.GetMouseWheelMove = GetMouseWheelMove

/**
 * Set mouse cursor
 *
 * @param {number} cursor
 *
 * @return {undefined}
 */
function SetMouseCursor(cursor) {
  return r.BindSetMouseCursor(
    cursor
  )
}
raylib.SetMouseCursor = SetMouseCursor

/**
 * Get touch position X for touch point 0 (relative to screen size)
 *
 * @return {number} The resulting int.
 */
function GetTouchX() {
  return r.BindGetTouchX()
}
raylib.GetTouchX = GetTouchX

/**
 * Get touch position Y for touch point 0 (relative to screen size)
 *
 * @return {number} The resulting int.
 */
function GetTouchY() {
  return r.BindGetTouchY()
}
raylib.GetTouchY = GetTouchY

/**
 * Get touch position XY for a touch point index (relative to screen size)
 *
 * @param {number} index
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetTouchPosition(index) {
  return r.BindGetTouchPosition(
    index
  )
}
raylib.GetTouchPosition = GetTouchPosition

/**
 * Get touch point identifier for given index
 *
 * @param {number} index
 *
 * @return {number} The resulting int.
 */
function GetTouchPointId(index) {
  return r.BindGetTouchPointId(
    index
  )
}
raylib.GetTouchPointId = GetTouchPointId

/**
 * Get number of touch points
 *
 * @return {number} The resulting int.
 */
function GetTouchPointCount() {
  return r.BindGetTouchPointCount()
}
raylib.GetTouchPointCount = GetTouchPointCount

/**
 * Enable a set of gestures using flags
 *
 * @param {number} flags
 *
 * @return {undefined}
 */
function SetGesturesEnabled(flags) {
  return r.BindSetGesturesEnabled(
    flags
  )
}
raylib.SetGesturesEnabled = SetGesturesEnabled

/**
 * Check if a gesture have been detected
 *
 * @param {number} gesture
 *
 * @return {boolean} The resulting bool.
 */
function IsGestureDetected(gesture) {
  return r.BindIsGestureDetected(
    gesture
  )
}
raylib.IsGestureDetected = IsGestureDetected

/**
 * Get latest detected gesture
 *
 * @return {number} The resulting int.
 */
function GetGestureDetected() {
  return r.BindGetGestureDetected()
}
raylib.GetGestureDetected = GetGestureDetected

/**
 * Get gesture hold time in milliseconds
 *
 * @return {number} The resulting float.
 */
function GetGestureHoldDuration() {
  return r.BindGetGestureHoldDuration()
}
raylib.GetGestureHoldDuration = GetGestureHoldDuration

/**
 * Get gesture drag vector
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetGestureDragVector() {
  return r.BindGetGestureDragVector()
}
raylib.GetGestureDragVector = GetGestureDragVector

/**
 * Get gesture drag angle
 *
 * @return {number} The resulting float.
 */
function GetGestureDragAngle() {
  return r.BindGetGestureDragAngle()
}
raylib.GetGestureDragAngle = GetGestureDragAngle

/**
 * Get gesture pinch delta
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetGesturePinchVector() {
  return r.BindGetGesturePinchVector()
}
raylib.GetGesturePinchVector = GetGesturePinchVector

/**
 * Get gesture pinch angle
 *
 * @return {number} The resulting float.
 */
function GetGesturePinchAngle() {
  return r.BindGetGesturePinchAngle()
}
raylib.GetGesturePinchAngle = GetGesturePinchAngle

/**
 * Set camera mode (multiple camera modes available)
 *
 * @param {Camera} camera
 * @param {number} mode
 *
 * @return {undefined}
 */
function SetCameraMode(camera, mode) {
  return r.BindSetCameraMode(
    camera.position.x,
    camera.position.y,
    camera.position.z,
    camera.target.x,
    camera.target.y,
    camera.target.z,
    camera.up.x,
    camera.up.y,
    camera.up.z,
    camera.fovy,
    camera.projection,
    mode
  )
}
raylib.SetCameraMode = SetCameraMode

/**
 * Set camera pan key to combine with mouse movement (free camera)
 *
 * @param {number} keyPan
 *
 * @return {undefined}
 */
function SetCameraPanControl(keyPan) {
  return r.BindSetCameraPanControl(
    keyPan
  )
}
raylib.SetCameraPanControl = SetCameraPanControl

/**
 * Set camera alt key to combine with mouse movement (free camera)
 *
 * @param {number} keyAlt
 *
 * @return {undefined}
 */
function SetCameraAltControl(keyAlt) {
  return r.BindSetCameraAltControl(
    keyAlt
  )
}
raylib.SetCameraAltControl = SetCameraAltControl

/**
 * Set camera smooth zoom key to combine with mouse (free camera)
 *
 * @param {number} keySmoothZoom
 *
 * @return {undefined}
 */
function SetCameraSmoothZoomControl(keySmoothZoom) {
  return r.BindSetCameraSmoothZoomControl(
    keySmoothZoom
  )
}
raylib.SetCameraSmoothZoomControl = SetCameraSmoothZoomControl

/**
 * Set camera move controls (1st person and 3rd person cameras)
 *
 * @param {number} keyFront
 * @param {number} keyBack
 * @param {number} keyRight
 * @param {number} keyLeft
 * @param {number} keyUp
 * @param {number} keyDown
 *
 * @return {undefined}
 */
function SetCameraMoveControls(keyFront, keyBack, keyRight, keyLeft, keyUp, keyDown) {
  return r.BindSetCameraMoveControls(
    keyFront,
    keyBack,
    keyRight,
    keyLeft,
    keyUp,
    keyDown
  )
}
raylib.SetCameraMoveControls = SetCameraMoveControls

/**
 * Set texture and rectangle to be used on shapes drawing
 *
 * @param {Texture2D} texture
 * @param {Rectangle} source
 *
 * @return {undefined}
 */
function SetShapesTexture(texture, source) {
  return r.BindSetShapesTexture(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    source.x,
    source.y,
    source.width,
    source.height
  )
}
raylib.SetShapesTexture = SetShapesTexture

/**
 * Draw a pixel
 *
 * @param {number} posX
 * @param {number} posY
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawPixel(posX, posY, color) {
  return r.BindDrawPixel(
    posX,
    posY,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawPixel = DrawPixel

/**
 * Draw a pixel (Vector version)
 *
 * @param {Vector2} position
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawPixelV(position, color) {
  return r.BindDrawPixelV(
    position.x,
    position.y,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawPixelV = DrawPixelV

/**
 * Draw a line
 *
 * @param {number} startPosX
 * @param {number} startPosY
 * @param {number} endPosX
 * @param {number} endPosY
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawLine(startPosX, startPosY, endPosX, endPosY, color) {
  return r.BindDrawLine(
    startPosX,
    startPosY,
    endPosX,
    endPosY,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawLine = DrawLine

/**
 * Draw a line (Vector version)
 *
 * @param {Vector2} startPos
 * @param {Vector2} endPos
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawLineV(startPos, endPos, color) {
  return r.BindDrawLineV(
    startPos.x,
    startPos.y,
    endPos.x,
    endPos.y,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawLineV = DrawLineV

/**
 * Draw a line defining thickness
 *
 * @param {Vector2} startPos
 * @param {Vector2} endPos
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawLineEx(startPos, endPos, thick, color) {
  return r.BindDrawLineEx(
    startPos.x,
    startPos.y,
    endPos.x,
    endPos.y,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawLineEx = DrawLineEx

/**
 * Draw a line using cubic-bezier curves in-out
 *
 * @param {Vector2} startPos
 * @param {Vector2} endPos
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawLineBezier(startPos, endPos, thick, color) {
  return r.BindDrawLineBezier(
    startPos.x,
    startPos.y,
    endPos.x,
    endPos.y,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawLineBezier = DrawLineBezier

/**
 * Draw line using quadratic bezier curves with a control point
 *
 * @param {Vector2} startPos
 * @param {Vector2} endPos
 * @param {Vector2} controlPos
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawLineBezierQuad(startPos, endPos, controlPos, thick, color) {
  return r.BindDrawLineBezierQuad(
    startPos.x,
    startPos.y,
    endPos.x,
    endPos.y,
    controlPos.x,
    controlPos.y,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawLineBezierQuad = DrawLineBezierQuad

/**
 * Draw line using cubic bezier curves with 2 control points
 *
 * @param {Vector2} startPos
 * @param {Vector2} endPos
 * @param {Vector2} startControlPos
 * @param {Vector2} endControlPos
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawLineBezierCubic(startPos, endPos, startControlPos, endControlPos, thick, color) {
  return r.BindDrawLineBezierCubic(
    startPos.x,
    startPos.y,
    endPos.x,
    endPos.y,
    startControlPos.x,
    startControlPos.y,
    endControlPos.x,
    endControlPos.y,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawLineBezierCubic = DrawLineBezierCubic

/**
 * Draw lines sequence
 *
 * @param {number} points
 * @param {number} pointCount
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawLineStrip(points, pointCount, color) {
  return r.BindDrawLineStrip(
    points,
    pointCount,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawLineStrip = DrawLineStrip

/**
 * Draw a color-filled circle
 *
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} radius
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCircle(centerX, centerY, radius, color) {
  return r.BindDrawCircle(
    centerX,
    centerY,
    radius,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCircle = DrawCircle

/**
 * Draw a piece of a circle
 *
 * @param {Vector2} center
 * @param {number} radius
 * @param {number} startAngle
 * @param {number} endAngle
 * @param {number} segments
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCircleSector(center, radius, startAngle, endAngle, segments, color) {
  return r.BindDrawCircleSector(
    center.x,
    center.y,
    radius,
    startAngle,
    endAngle,
    segments,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCircleSector = DrawCircleSector

/**
 * Draw circle sector outline
 *
 * @param {Vector2} center
 * @param {number} radius
 * @param {number} startAngle
 * @param {number} endAngle
 * @param {number} segments
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCircleSectorLines(center, radius, startAngle, endAngle, segments, color) {
  return r.BindDrawCircleSectorLines(
    center.x,
    center.y,
    radius,
    startAngle,
    endAngle,
    segments,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCircleSectorLines = DrawCircleSectorLines

/**
 * Draw a gradient-filled circle
 *
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} radius
 * @param {Color} color1
 * @param {Color} color2
 *
 * @return {undefined}
 */
function DrawCircleGradient(centerX, centerY, radius, color1, color2) {
  return r.BindDrawCircleGradient(
    centerX,
    centerY,
    radius,
    color1.r,
    color1.g,
    color1.b,
    color1.a,
    color2.r,
    color2.g,
    color2.b,
    color2.a
  )
}
raylib.DrawCircleGradient = DrawCircleGradient

/**
 * Draw a color-filled circle (Vector version)
 *
 * @param {Vector2} center
 * @param {number} radius
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCircleV(center, radius, color) {
  return r.BindDrawCircleV(
    center.x,
    center.y,
    radius,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCircleV = DrawCircleV

/**
 * Draw circle outline
 *
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} radius
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCircleLines(centerX, centerY, radius, color) {
  return r.BindDrawCircleLines(
    centerX,
    centerY,
    radius,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCircleLines = DrawCircleLines

/**
 * Draw ellipse
 *
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} radiusH
 * @param {number} radiusV
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawEllipse(centerX, centerY, radiusH, radiusV, color) {
  return r.BindDrawEllipse(
    centerX,
    centerY,
    radiusH,
    radiusV,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawEllipse = DrawEllipse

/**
 * Draw ellipse outline
 *
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} radiusH
 * @param {number} radiusV
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawEllipseLines(centerX, centerY, radiusH, radiusV, color) {
  return r.BindDrawEllipseLines(
    centerX,
    centerY,
    radiusH,
    radiusV,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawEllipseLines = DrawEllipseLines

/**
 * Draw ring
 *
 * @param {Vector2} center
 * @param {number} innerRadius
 * @param {number} outerRadius
 * @param {number} startAngle
 * @param {number} endAngle
 * @param {number} segments
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawRing(center, innerRadius, outerRadius, startAngle, endAngle, segments, color) {
  return r.BindDrawRing(
    center.x,
    center.y,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    segments,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawRing = DrawRing

/**
 * Draw ring outline
 *
 * @param {Vector2} center
 * @param {number} innerRadius
 * @param {number} outerRadius
 * @param {number} startAngle
 * @param {number} endAngle
 * @param {number} segments
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawRingLines(center, innerRadius, outerRadius, startAngle, endAngle, segments, color) {
  return r.BindDrawRingLines(
    center.x,
    center.y,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    segments,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawRingLines = DrawRingLines

/**
 * Draw a color-filled rectangle
 *
 * @param {number} posX
 * @param {number} posY
 * @param {number} width
 * @param {number} height
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawRectangle(posX, posY, width, height, color) {
  return r.BindDrawRectangle(
    posX,
    posY,
    width,
    height,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawRectangle = DrawRectangle

/**
 * Draw a color-filled rectangle (Vector version)
 *
 * @param {Vector2} position
 * @param {Vector2} size
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawRectangleV(position, size, color) {
  return r.BindDrawRectangleV(
    position.x,
    position.y,
    size.x,
    size.y,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawRectangleV = DrawRectangleV

/**
 * Draw a color-filled rectangle
 *
 * @param {Rectangle} rec
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawRectangleRec(rec, color) {
  return r.BindDrawRectangleRec(
    rec.x,
    rec.y,
    rec.width,
    rec.height,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawRectangleRec = DrawRectangleRec

/**
 * Draw a color-filled rectangle with pro parameters
 *
 * @param {Rectangle} rec
 * @param {Vector2} origin
 * @param {number} rotation
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawRectanglePro(rec, origin, rotation, color) {
  return r.BindDrawRectanglePro(
    rec.x,
    rec.y,
    rec.width,
    rec.height,
    origin.x,
    origin.y,
    rotation,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawRectanglePro = DrawRectanglePro

/**
 * Draw a vertical-gradient-filled rectangle
 *
 * @param {number} posX
 * @param {number} posY
 * @param {number} width
 * @param {number} height
 * @param {Color} color1
 * @param {Color} color2
 *
 * @return {undefined}
 */
function DrawRectangleGradientV(posX, posY, width, height, color1, color2) {
  return r.BindDrawRectangleGradientV(
    posX,
    posY,
    width,
    height,
    color1.r,
    color1.g,
    color1.b,
    color1.a,
    color2.r,
    color2.g,
    color2.b,
    color2.a
  )
}
raylib.DrawRectangleGradientV = DrawRectangleGradientV

/**
 * Draw a horizontal-gradient-filled rectangle
 *
 * @param {number} posX
 * @param {number} posY
 * @param {number} width
 * @param {number} height
 * @param {Color} color1
 * @param {Color} color2
 *
 * @return {undefined}
 */
function DrawRectangleGradientH(posX, posY, width, height, color1, color2) {
  return r.BindDrawRectangleGradientH(
    posX,
    posY,
    width,
    height,
    color1.r,
    color1.g,
    color1.b,
    color1.a,
    color2.r,
    color2.g,
    color2.b,
    color2.a
  )
}
raylib.DrawRectangleGradientH = DrawRectangleGradientH

/**
 * Draw a gradient-filled rectangle with custom vertex colors
 *
 * @param {Rectangle} rec
 * @param {Color} col1
 * @param {Color} col2
 * @param {Color} col3
 * @param {Color} col4
 *
 * @return {undefined}
 */
function DrawRectangleGradientEx(rec, col1, col2, col3, col4) {
  return r.BindDrawRectangleGradientEx(
    rec.x,
    rec.y,
    rec.width,
    rec.height,
    col1.r,
    col1.g,
    col1.b,
    col1.a,
    col2.r,
    col2.g,
    col2.b,
    col2.a,
    col3.r,
    col3.g,
    col3.b,
    col3.a,
    col4.r,
    col4.g,
    col4.b,
    col4.a
  )
}
raylib.DrawRectangleGradientEx = DrawRectangleGradientEx

/**
 * Draw rectangle outline
 *
 * @param {number} posX
 * @param {number} posY
 * @param {number} width
 * @param {number} height
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawRectangleLines(posX, posY, width, height, color) {
  return r.BindDrawRectangleLines(
    posX,
    posY,
    width,
    height,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawRectangleLines = DrawRectangleLines

/**
 * Draw rectangle outline with extended parameters
 *
 * @param {Rectangle} rec
 * @param {number} lineThick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawRectangleLinesEx(rec, lineThick, color) {
  return r.BindDrawRectangleLinesEx(
    rec.x,
    rec.y,
    rec.width,
    rec.height,
    lineThick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawRectangleLinesEx = DrawRectangleLinesEx

/**
 * Draw rectangle with rounded edges
 *
 * @param {Rectangle} rec
 * @param {number} roundness
 * @param {number} segments
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawRectangleRounded(rec, roundness, segments, color) {
  return r.BindDrawRectangleRounded(
    rec.x,
    rec.y,
    rec.width,
    rec.height,
    roundness,
    segments,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawRectangleRounded = DrawRectangleRounded

/**
 * Draw rectangle with rounded edges outline
 *
 * @param {Rectangle} rec
 * @param {number} roundness
 * @param {number} segments
 * @param {number} lineThick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawRectangleRoundedLines(rec, roundness, segments, lineThick, color) {
  return r.BindDrawRectangleRoundedLines(
    rec.x,
    rec.y,
    rec.width,
    rec.height,
    roundness,
    segments,
    lineThick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawRectangleRoundedLines = DrawRectangleRoundedLines

/**
 * Draw a color-filled triangle (vertex in counter-clockwise order!)
 *
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @param {Vector2} v3
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawTriangle(v1, v2, v3, color) {
  return r.BindDrawTriangle(
    v1.x,
    v1.y,
    v2.x,
    v2.y,
    v3.x,
    v3.y,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawTriangle = DrawTriangle

/**
 * Draw triangle outline (vertex in counter-clockwise order!)
 *
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @param {Vector2} v3
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawTriangleLines(v1, v2, v3, color) {
  return r.BindDrawTriangleLines(
    v1.x,
    v1.y,
    v2.x,
    v2.y,
    v3.x,
    v3.y,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawTriangleLines = DrawTriangleLines

/**
 * Draw a triangle fan defined by points (first vertex is the center)
 *
 * @param {number} points
 * @param {number} pointCount
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawTriangleFan(points, pointCount, color) {
  return r.BindDrawTriangleFan(
    points,
    pointCount,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawTriangleFan = DrawTriangleFan

/**
 * Draw a triangle strip defined by points
 *
 * @param {number} points
 * @param {number} pointCount
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawTriangleStrip(points, pointCount, color) {
  return r.BindDrawTriangleStrip(
    points,
    pointCount,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawTriangleStrip = DrawTriangleStrip

/**
 * Draw a regular polygon (Vector version)
 *
 * @param {Vector2} center
 * @param {number} sides
 * @param {number} radius
 * @param {number} rotation
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawPoly(center, sides, radius, rotation, color) {
  return r.BindDrawPoly(
    center.x,
    center.y,
    sides,
    radius,
    rotation,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawPoly = DrawPoly

/**
 * Draw a polygon outline of n sides
 *
 * @param {Vector2} center
 * @param {number} sides
 * @param {number} radius
 * @param {number} rotation
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawPolyLines(center, sides, radius, rotation, color) {
  return r.BindDrawPolyLines(
    center.x,
    center.y,
    sides,
    radius,
    rotation,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawPolyLines = DrawPolyLines

/**
 * Draw a polygon outline of n sides with extended parameters
 *
 * @param {Vector2} center
 * @param {number} sides
 * @param {number} radius
 * @param {number} rotation
 * @param {number} lineThick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawPolyLinesEx(center, sides, radius, rotation, lineThick, color) {
  return r.BindDrawPolyLinesEx(
    center.x,
    center.y,
    sides,
    radius,
    rotation,
    lineThick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawPolyLinesEx = DrawPolyLinesEx

/**
 * Check collision between two rectangles
 *
 * @param {Rectangle} rec1
 * @param {Rectangle} rec2
 *
 * @return {boolean} The resulting bool.
 */
function CheckCollisionRecs(rec1, rec2) {
  return r.BindCheckCollisionRecs(
    rec1.x,
    rec1.y,
    rec1.width,
    rec1.height,
    rec2.x,
    rec2.y,
    rec2.width,
    rec2.height
  )
}
raylib.CheckCollisionRecs = CheckCollisionRecs

/**
 * Check collision between two circles
 *
 * @param {Vector2} center1
 * @param {number} radius1
 * @param {Vector2} center2
 * @param {number} radius2
 *
 * @return {boolean} The resulting bool.
 */
function CheckCollisionCircles(center1, radius1, center2, radius2) {
  return r.BindCheckCollisionCircles(
    center1.x,
    center1.y,
    radius1,
    center2.x,
    center2.y,
    radius2
  )
}
raylib.CheckCollisionCircles = CheckCollisionCircles

/**
 * Check collision between circle and rectangle
 *
 * @param {Vector2} center
 * @param {number} radius
 * @param {Rectangle} rec
 *
 * @return {boolean} The resulting bool.
 */
function CheckCollisionCircleRec(center, radius, rec) {
  return r.BindCheckCollisionCircleRec(
    center.x,
    center.y,
    radius,
    rec.x,
    rec.y,
    rec.width,
    rec.height
  )
}
raylib.CheckCollisionCircleRec = CheckCollisionCircleRec

/**
 * Check if point is inside rectangle
 *
 * @param {Vector2} point
 * @param {Rectangle} rec
 *
 * @return {boolean} The resulting bool.
 */
function CheckCollisionPointRec(point, rec) {
  return r.BindCheckCollisionPointRec(
    point.x,
    point.y,
    rec.x,
    rec.y,
    rec.width,
    rec.height
  )
}
raylib.CheckCollisionPointRec = CheckCollisionPointRec

/**
 * Check if point is inside circle
 *
 * @param {Vector2} point
 * @param {Vector2} center
 * @param {number} radius
 *
 * @return {boolean} The resulting bool.
 */
function CheckCollisionPointCircle(point, center, radius) {
  return r.BindCheckCollisionPointCircle(
    point.x,
    point.y,
    center.x,
    center.y,
    radius
  )
}
raylib.CheckCollisionPointCircle = CheckCollisionPointCircle

/**
 * Check if point is inside a triangle
 *
 * @param {Vector2} point
 * @param {Vector2} p1
 * @param {Vector2} p2
 * @param {Vector2} p3
 *
 * @return {boolean} The resulting bool.
 */
function CheckCollisionPointTriangle(point, p1, p2, p3) {
  return r.BindCheckCollisionPointTriangle(
    point.x,
    point.y,
    p1.x,
    p1.y,
    p2.x,
    p2.y,
    p3.x,
    p3.y
  )
}
raylib.CheckCollisionPointTriangle = CheckCollisionPointTriangle

/**
 * Check the collision between two lines defined by two points each, returns collision point by reference
 *
 * @param {Vector2} startPos1
 * @param {Vector2} endPos1
 * @param {Vector2} startPos2
 * @param {Vector2} endPos2
 * @param {number} collisionPoint
 *
 * @return {boolean} The resulting bool.
 */
function CheckCollisionLines(startPos1, endPos1, startPos2, endPos2, collisionPoint) {
  return r.BindCheckCollisionLines(
    startPos1.x,
    startPos1.y,
    endPos1.x,
    endPos1.y,
    startPos2.x,
    startPos2.y,
    endPos2.x,
    endPos2.y,
    collisionPoint
  )
}
raylib.CheckCollisionLines = CheckCollisionLines

/**
 * Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold]
 *
 * @param {Vector2} point
 * @param {Vector2} p1
 * @param {Vector2} p2
 * @param {number} threshold
 *
 * @return {boolean} The resulting bool.
 */
function CheckCollisionPointLine(point, p1, p2, threshold) {
  return r.BindCheckCollisionPointLine(
    point.x,
    point.y,
    p1.x,
    p1.y,
    p2.x,
    p2.y,
    threshold
  )
}
raylib.CheckCollisionPointLine = CheckCollisionPointLine

/**
 * Get collision rectangle for two rectangles collision
 *
 * @param {Rectangle} rec1
 * @param {Rectangle} rec2
 *
 * @return {Rectangle} The resulting Rectangle.
 */
function GetCollisionRec(rec1, rec2) {
  return r.BindGetCollisionRec(
    rec1.x,
    rec1.y,
    rec1.width,
    rec1.height,
    rec2.x,
    rec2.y,
    rec2.width,
    rec2.height
  )
}
raylib.GetCollisionRec = GetCollisionRec

/**
 * Load image from file into CPU memory (RAM)
 *
 * @param {string} fileName
 *
 * @return {Image} The resulting Image.
 */
function LoadImage(fileName) {
  return r.BindLoadImage(
    fileName
  )
}
raylib.LoadImage = LoadImage

/**
 * Load image from RAW file data
 *
 * @param {string} fileName
 * @param {number} width
 * @param {number} height
 * @param {number} format
 * @param {number} headerSize
 *
 * @return {Image} The resulting Image.
 */
function LoadImageRaw(fileName, width, height, format, headerSize) {
  return r.BindLoadImageRaw(
    fileName,
    width,
    height,
    format,
    headerSize
  )
}
raylib.LoadImageRaw = LoadImageRaw

/**
 * Load image sequence from file (frames appended to image.data)
 *
 * @param {string} fileName
 * @param {number} frames
 *
 * @return {Image} The resulting Image.
 */
function LoadImageAnim(fileName, frames) {
  return r.BindLoadImageAnim(
    fileName,
    frames
  )
}
raylib.LoadImageAnim = LoadImageAnim

/**
 * Load image from memory buffer, fileType refers to extension: i.e. '.png'
 *
 * @param {string} fileType
 * @param {Buffer} fileData
 * @param {number} dataSize
 *
 * @return {Image} The resulting Image.
 */
function LoadImageFromMemory(fileType, fileData, dataSize) {
  return r.BindLoadImageFromMemory(
    fileType,
    fileData,
    dataSize
  )
}
raylib.LoadImageFromMemory = LoadImageFromMemory

/**
 * Load image from GPU texture data
 *
 * @param {Texture2D} texture
 *
 * @return {Image} The resulting Image.
 */
function LoadImageFromTexture(texture) {
  return r.BindLoadImageFromTexture(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format
  )
}
raylib.LoadImageFromTexture = LoadImageFromTexture

/**
 * Load image from screen buffer and (screenshot)
 *
 * @return {Image} The resulting Image.
 */
function LoadImageFromScreen() {
  return r.BindLoadImageFromScreen()
}
raylib.LoadImageFromScreen = LoadImageFromScreen

/**
 * Unload image from CPU memory (RAM)
 *
 * @param {Image} image
 *
 * @return {undefined}
 */
function UnloadImage(image) {
  return r.BindUnloadImage(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
}
raylib.UnloadImage = UnloadImage

/**
 * Export image data to file, returns true on success
 *
 * @param {Image} image
 * @param {string} fileName
 *
 * @return {boolean} The resulting bool.
 */
function ExportImage(image, fileName) {
  return r.BindExportImage(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    fileName
  )
}
raylib.ExportImage = ExportImage

/**
 * Export image as code file defining an array of bytes, returns true on success
 *
 * @param {Image} image
 * @param {string} fileName
 *
 * @return {boolean} The resulting bool.
 */
function ExportImageAsCode(image, fileName) {
  return r.BindExportImageAsCode(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    fileName
  )
}
raylib.ExportImageAsCode = ExportImageAsCode

/**
 * Generate image: plain color
 *
 * @param {number} width
 * @param {number} height
 * @param {Color} color
 *
 * @return {Image} The resulting Image.
 */
function GenImageColor(width, height, color) {
  return r.BindGenImageColor(
    width,
    height,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.GenImageColor = GenImageColor

/**
 * Generate image: vertical gradient
 *
 * @param {number} width
 * @param {number} height
 * @param {Color} top
 * @param {Color} bottom
 *
 * @return {Image} The resulting Image.
 */
function GenImageGradientV(width, height, top, bottom) {
  return r.BindGenImageGradientV(
    width,
    height,
    top.r,
    top.g,
    top.b,
    top.a,
    bottom.r,
    bottom.g,
    bottom.b,
    bottom.a
  )
}
raylib.GenImageGradientV = GenImageGradientV

/**
 * Generate image: horizontal gradient
 *
 * @param {number} width
 * @param {number} height
 * @param {Color} left
 * @param {Color} right
 *
 * @return {Image} The resulting Image.
 */
function GenImageGradientH(width, height, left, right) {
  return r.BindGenImageGradientH(
    width,
    height,
    left.r,
    left.g,
    left.b,
    left.a,
    right.r,
    right.g,
    right.b,
    right.a
  )
}
raylib.GenImageGradientH = GenImageGradientH

/**
 * Generate image: radial gradient
 *
 * @param {number} width
 * @param {number} height
 * @param {number} density
 * @param {Color} inner
 * @param {Color} outer
 *
 * @return {Image} The resulting Image.
 */
function GenImageGradientRadial(width, height, density, inner, outer) {
  return r.BindGenImageGradientRadial(
    width,
    height,
    density,
    inner.r,
    inner.g,
    inner.b,
    inner.a,
    outer.r,
    outer.g,
    outer.b,
    outer.a
  )
}
raylib.GenImageGradientRadial = GenImageGradientRadial

/**
 * Generate image: checked
 *
 * @param {number} width
 * @param {number} height
 * @param {number} checksX
 * @param {number} checksY
 * @param {Color} col1
 * @param {Color} col2
 *
 * @return {Image} The resulting Image.
 */
function GenImageChecked(width, height, checksX, checksY, col1, col2) {
  return r.BindGenImageChecked(
    width,
    height,
    checksX,
    checksY,
    col1.r,
    col1.g,
    col1.b,
    col1.a,
    col2.r,
    col2.g,
    col2.b,
    col2.a
  )
}
raylib.GenImageChecked = GenImageChecked

/**
 * Generate image: white noise
 *
 * @param {number} width
 * @param {number} height
 * @param {number} factor
 *
 * @return {Image} The resulting Image.
 */
function GenImageWhiteNoise(width, height, factor) {
  return r.BindGenImageWhiteNoise(
    width,
    height,
    factor
  )
}
raylib.GenImageWhiteNoise = GenImageWhiteNoise

/**
 * Generate image: cellular algorithm, bigger tileSize means bigger cells
 *
 * @param {number} width
 * @param {number} height
 * @param {number} tileSize
 *
 * @return {Image} The resulting Image.
 */
function GenImageCellular(width, height, tileSize) {
  return r.BindGenImageCellular(
    width,
    height,
    tileSize
  )
}
raylib.GenImageCellular = GenImageCellular

/**
 * Create an image duplicate (useful for transformations)
 *
 * @param {Image} image
 *
 * @return {Image} The resulting Image.
 */
function ImageCopy(image) {
  return r.BindImageCopy(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
}
raylib.ImageCopy = ImageCopy

/**
 * Create an image from another image piece
 *
 * @param {Image} image
 * @param {Rectangle} rec
 *
 * @return {Image} The resulting Image.
 */
function ImageFromImage(image, rec) {
  return r.BindImageFromImage(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    rec.x,
    rec.y,
    rec.width,
    rec.height
  )
}
raylib.ImageFromImage = ImageFromImage

/**
 * Create an image from text (default font)
 *
 * @param {string} text
 * @param {number} fontSize
 * @param {Color} color
 *
 * @return {Image} The resulting Image.
 */
function ImageText(text, fontSize, color) {
  return r.BindImageText(
    text,
    fontSize,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.ImageText = ImageText

/**
 * Create an image from text (custom sprite font)
 *
 * @param {Font} font
 * @param {string} text
 * @param {number} fontSize
 * @param {number} spacing
 * @param {Color} tint
 *
 * @return {Image} The resulting Image.
 */
function ImageTextEx(font, text, fontSize, spacing, tint) {
  return r.BindImageTextEx(
    font.baseSize,
    font.glyphCount,
    font.glyphPadding,
    font.texture.id,
    font.texture.width,
    font.texture.height,
    font.texture.mipmaps,
    font.texture.format,
    font.recs,
    font.glyphs,
    text,
    fontSize,
    spacing,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.ImageTextEx = ImageTextEx

/**
 * Load color data from image as a Color array (RGBA - 32bit)
 *
 * @param {Image} image
 *
 * @return {number} The resulting Color *.
 */
function LoadImageColors(image) {
  return r.BindLoadImageColors(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
}
raylib.LoadImageColors = LoadImageColors

/**
 * Load colors palette from image as a Color array (RGBA - 32bit)
 *
 * @param {Image} image
 * @param {number} maxPaletteSize
 * @param {number} colorCount
 *
 * @return {number} The resulting Color *.
 */
function LoadImagePalette(image, maxPaletteSize, colorCount) {
  return r.BindLoadImagePalette(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    maxPaletteSize,
    colorCount
  )
}
raylib.LoadImagePalette = LoadImagePalette

/**
 * Unload color data loaded with LoadImageColors()
 *
 * @param {number} colors
 *
 * @return {undefined}
 */
function UnloadImageColors(colors) {
  return r.BindUnloadImageColors(
    colors
  )
}
raylib.UnloadImageColors = UnloadImageColors

/**
 * Unload colors palette loaded with LoadImagePalette()
 *
 * @param {number} colors
 *
 * @return {undefined}
 */
function UnloadImagePalette(colors) {
  return r.BindUnloadImagePalette(
    colors
  )
}
raylib.UnloadImagePalette = UnloadImagePalette

/**
 * Get image alpha border rectangle
 *
 * @param {Image} image
 * @param {number} threshold
 *
 * @return {Rectangle} The resulting Rectangle.
 */
function GetImageAlphaBorder(image, threshold) {
  return r.BindGetImageAlphaBorder(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    threshold
  )
}
raylib.GetImageAlphaBorder = GetImageAlphaBorder

/**
 * Get image pixel color at (x, y) position
 *
 * @param {Image} image
 * @param {number} x
 * @param {number} y
 *
 * @return {Color} The resulting Color.
 */
function GetImageColor(image, x, y) {
  return r.BindGetImageColor(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    x,
    y
  )
}
raylib.GetImageColor = GetImageColor

/**
 * Load texture from file into GPU memory (VRAM)
 *
 * @param {string} fileName
 *
 * @return {Texture2D} The resulting Texture2D.
 */
function LoadTexture(fileName) {
  return r.BindLoadTexture(
    fileName
  )
}
raylib.LoadTexture = LoadTexture

/**
 * Load texture from image data
 *
 * @param {Image} image
 *
 * @return {Texture2D} The resulting Texture2D.
 */
function LoadTextureFromImage(image) {
  return r.BindLoadTextureFromImage(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
}
raylib.LoadTextureFromImage = LoadTextureFromImage

/**
 * Load cubemap from image, multiple image cubemap layouts supported
 *
 * @param {Image} image
 * @param {number} layout
 *
 * @return {TextureCubemap} The resulting TextureCubemap.
 */
function LoadTextureCubemap(image, layout) {
  return r.BindLoadTextureCubemap(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    layout
  )
}
raylib.LoadTextureCubemap = LoadTextureCubemap

/**
 * Load texture for rendering (framebuffer)
 *
 * @param {number} width
 * @param {number} height
 *
 * @return {RenderTexture2D} The resulting RenderTexture2D.
 */
function LoadRenderTexture(width, height) {
  return r.BindLoadRenderTexture(
    width,
    height
  )
}
raylib.LoadRenderTexture = LoadRenderTexture

/**
 * Unload texture from GPU memory (VRAM)
 *
 * @param {Texture2D} texture
 *
 * @return {undefined}
 */
function UnloadTexture(texture) {
  return r.BindUnloadTexture(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format
  )
}
raylib.UnloadTexture = UnloadTexture

/**
 * Unload render texture from GPU memory (VRAM)
 *
 * @param {RenderTexture2D} target
 *
 * @return {undefined}
 */
function UnloadRenderTexture(target) {
  return r.BindUnloadRenderTexture(
    target.id,
    target.texture.id,
    target.texture.width,
    target.texture.height,
    target.texture.mipmaps,
    target.texture.format,
    target.depth.id,
    target.depth.width,
    target.depth.height,
    target.depth.mipmaps,
    target.depth.format
  )
}
raylib.UnloadRenderTexture = UnloadRenderTexture

/**
 * Update GPU texture with new data
 *
 * @param {Texture2D} texture
 * @param {number} pixels
 *
 * @return {undefined}
 */
function UpdateTexture(texture, pixels) {
  return r.BindUpdateTexture(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    pixels
  )
}
raylib.UpdateTexture = UpdateTexture

/**
 * Update GPU texture rectangle with new data
 *
 * @param {Texture2D} texture
 * @param {Rectangle} rec
 * @param {number} pixels
 *
 * @return {undefined}
 */
function UpdateTextureRec(texture, rec, pixels) {
  return r.BindUpdateTextureRec(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    rec.x,
    rec.y,
    rec.width,
    rec.height,
    pixels
  )
}
raylib.UpdateTextureRec = UpdateTextureRec

/**
 * Set texture scaling filter mode
 *
 * @param {Texture2D} texture
 * @param {number} filter
 *
 * @return {undefined}
 */
function SetTextureFilter(texture, filter) {
  return r.BindSetTextureFilter(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    filter
  )
}
raylib.SetTextureFilter = SetTextureFilter

/**
 * Set texture wrapping mode
 *
 * @param {Texture2D} texture
 * @param {number} wrap
 *
 * @return {undefined}
 */
function SetTextureWrap(texture, wrap) {
  return r.BindSetTextureWrap(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    wrap
  )
}
raylib.SetTextureWrap = SetTextureWrap

/**
 * Draw a Texture2D
 *
 * @param {Texture2D} texture
 * @param {number} posX
 * @param {number} posY
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawTexture(texture, posX, posY, tint) {
  return r.BindDrawTexture(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    posX,
    posY,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawTexture = DrawTexture

/**
 * Draw a Texture2D with position defined as Vector2
 *
 * @param {Texture2D} texture
 * @param {Vector2} position
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawTextureV(texture, position, tint) {
  return r.BindDrawTextureV(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    position.x,
    position.y,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawTextureV = DrawTextureV

/**
 * Draw a Texture2D with extended parameters
 *
 * @param {Texture2D} texture
 * @param {Vector2} position
 * @param {number} rotation
 * @param {number} scale
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawTextureEx(texture, position, rotation, scale, tint) {
  return r.BindDrawTextureEx(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    position.x,
    position.y,
    rotation,
    scale,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawTextureEx = DrawTextureEx

/**
 * Draw a part of a texture defined by a rectangle
 *
 * @param {Texture2D} texture
 * @param {Rectangle} source
 * @param {Vector2} position
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawTextureRec(texture, source, position, tint) {
  return r.BindDrawTextureRec(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    source.x,
    source.y,
    source.width,
    source.height,
    position.x,
    position.y,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawTextureRec = DrawTextureRec

/**
 * Draw texture quad with tiling and offset parameters
 *
 * @param {Texture2D} texture
 * @param {Vector2} tiling
 * @param {Vector2} offset
 * @param {Rectangle} quad
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawTextureQuad(texture, tiling, offset, quad, tint) {
  return r.BindDrawTextureQuad(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    tiling.x,
    tiling.y,
    offset.x,
    offset.y,
    quad.x,
    quad.y,
    quad.width,
    quad.height,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawTextureQuad = DrawTextureQuad

/**
 * Draw part of a texture (defined by a rectangle) with rotation and scale tiled into dest.
 *
 * @param {Texture2D} texture
 * @param {Rectangle} source
 * @param {Rectangle} dest
 * @param {Vector2} origin
 * @param {number} rotation
 * @param {number} scale
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawTextureTiled(texture, source, dest, origin, rotation, scale, tint) {
  return r.BindDrawTextureTiled(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    source.x,
    source.y,
    source.width,
    source.height,
    dest.x,
    dest.y,
    dest.width,
    dest.height,
    origin.x,
    origin.y,
    rotation,
    scale,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawTextureTiled = DrawTextureTiled

/**
 * Draw a part of a texture defined by a rectangle with 'pro' parameters
 *
 * @param {Texture2D} texture
 * @param {Rectangle} source
 * @param {Rectangle} dest
 * @param {Vector2} origin
 * @param {number} rotation
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawTexturePro(texture, source, dest, origin, rotation, tint) {
  return r.BindDrawTexturePro(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    source.x,
    source.y,
    source.width,
    source.height,
    dest.x,
    dest.y,
    dest.width,
    dest.height,
    origin.x,
    origin.y,
    rotation,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawTexturePro = DrawTexturePro

/**
 * Draws a texture (or part of it) that stretches or shrinks nicely
 *
 * @param {Texture2D} texture
 * @param {NPatchInfo} nPatchInfo
 * @param {Rectangle} dest
 * @param {Vector2} origin
 * @param {number} rotation
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawTextureNPatch(texture, nPatchInfo, dest, origin, rotation, tint) {
  return r.BindDrawTextureNPatch(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    nPatchInfo.source.x,
    nPatchInfo.source.y,
    nPatchInfo.source.width,
    nPatchInfo.source.height,
    nPatchInfo.left,
    nPatchInfo.top,
    nPatchInfo.right,
    nPatchInfo.bottom,
    nPatchInfo.layout,
    dest.x,
    dest.y,
    dest.width,
    dest.height,
    origin.x,
    origin.y,
    rotation,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawTextureNPatch = DrawTextureNPatch

/**
 * Draw a textured polygon
 *
 * @param {Texture2D} texture
 * @param {Vector2} center
 * @param {number} points
 * @param {number} texcoords
 * @param {number} pointCount
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawTexturePoly(texture, center, points, texcoords, pointCount, tint) {
  return r.BindDrawTexturePoly(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    center.x,
    center.y,
    points,
    texcoords,
    pointCount,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawTexturePoly = DrawTexturePoly

/**
 * Get color with alpha applied, alpha goes from 0.0f to 1.0f
 *
 * @param {Color} color
 * @param {number} alpha
 *
 * @return {Color} The resulting Color.
 */
function Fade(color, alpha) {
  return r.BindFade(
    color.r,
    color.g,
    color.b,
    color.a,
    alpha
  )
}
raylib.Fade = Fade

/**
 * Get hexadecimal value for a Color
 *
 * @param {Color} color
 *
 * @return {number} The resulting int.
 */
function ColorToInt(color) {
  return r.BindColorToInt(
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.ColorToInt = ColorToInt

/**
 * Get Color normalized as float [0..1]
 *
 * @param {Color} color
 *
 * @return {Vector4} The resulting Vector4.
 */
function ColorNormalize(color) {
  return r.BindColorNormalize(
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.ColorNormalize = ColorNormalize

/**
 * Get Color from normalized values [0..1]
 *
 * @param {Vector4} normalized
 *
 * @return {Color} The resulting Color.
 */
function ColorFromNormalized(normalized) {
  return r.BindColorFromNormalized(
    normalized.x,
    normalized.y,
    normalized.z,
    normalized.w
  )
}
raylib.ColorFromNormalized = ColorFromNormalized

/**
 * Get HSV values for a Color, hue [0..360], saturation/value [0..1]
 *
 * @param {Color} color
 *
 * @return {Vector3} The resulting Vector3.
 */
function ColorToHSV(color) {
  return r.BindColorToHSV(
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.ColorToHSV = ColorToHSV

/**
 * Get a Color from HSV values, hue [0..360], saturation/value [0..1]
 *
 * @param {number} hue
 * @param {number} saturation
 * @param {number} value
 *
 * @return {Color} The resulting Color.
 */
function ColorFromHSV(hue, saturation, value) {
  return r.BindColorFromHSV(
    hue,
    saturation,
    value
  )
}
raylib.ColorFromHSV = ColorFromHSV

/**
 * Get color with alpha applied, alpha goes from 0.0f to 1.0f
 *
 * @param {Color} color
 * @param {number} alpha
 *
 * @return {Color} The resulting Color.
 */
function ColorAlpha(color, alpha) {
  return r.BindColorAlpha(
    color.r,
    color.g,
    color.b,
    color.a,
    alpha
  )
}
raylib.ColorAlpha = ColorAlpha

/**
 * Get src alpha-blended into dst color with tint
 *
 * @param {Color} dst
 * @param {Color} src
 * @param {Color} tint
 *
 * @return {Color} The resulting Color.
 */
function ColorAlphaBlend(dst, src, tint) {
  return r.BindColorAlphaBlend(
    dst.r,
    dst.g,
    dst.b,
    dst.a,
    src.r,
    src.g,
    src.b,
    src.a,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.ColorAlphaBlend = ColorAlphaBlend

/**
 * Get Color structure from hexadecimal value
 *
 * @param {number} hexValue
 *
 * @return {Color} The resulting Color.
 */
function GetColor(hexValue) {
  return r.BindGetColor(
    hexValue
  )
}
raylib.GetColor = GetColor

/**
 * Get Color from a source pixel pointer of certain format
 *
 * @param {number} srcPtr
 * @param {number} format
 *
 * @return {Color} The resulting Color.
 */
function GetPixelColor(srcPtr, format) {
  return r.BindGetPixelColor(
    srcPtr,
    format
  )
}
raylib.GetPixelColor = GetPixelColor

/**
 * Set color formatted into destination pixel pointer
 *
 * @param {number} dstPtr
 * @param {Color} color
 * @param {number} format
 *
 * @return {undefined}
 */
function SetPixelColor(dstPtr, color, format) {
  return r.BindSetPixelColor(
    dstPtr,
    color.r,
    color.g,
    color.b,
    color.a,
    format
  )
}
raylib.SetPixelColor = SetPixelColor

/**
 * Get pixel data size in bytes for certain format
 *
 * @param {number} width
 * @param {number} height
 * @param {number} format
 *
 * @return {number} The resulting int.
 */
function GetPixelDataSize(width, height, format) {
  return r.BindGetPixelDataSize(
    width,
    height,
    format
  )
}
raylib.GetPixelDataSize = GetPixelDataSize

/**
 * Get the default Font
 *
 * @return {Font} The resulting Font.
 */
function GetFontDefault() {
  return r.BindGetFontDefault()
}
raylib.GetFontDefault = GetFontDefault

/**
 * Load font from file into GPU memory (VRAM)
 *
 * @param {string} fileName
 *
 * @return {Font} The resulting Font.
 */
function LoadFont(fileName) {
  return r.BindLoadFont(
    fileName
  )
}
raylib.LoadFont = LoadFont

/**
 * Load font from file with extended parameters, use NULL for fontChars and 0 for glyphCount to load the default character set
 *
 * @param {string} fileName
 * @param {number} fontSize
 * @param {number} fontChars
 * @param {number} glyphCount
 *
 * @return {Font} The resulting Font.
 */
function LoadFontEx(fileName, fontSize, fontChars, glyphCount) {
  return r.BindLoadFontEx(
    fileName,
    fontSize,
    fontChars,
    glyphCount
  )
}
raylib.LoadFontEx = LoadFontEx

/**
 * Load font from Image (XNA style)
 *
 * @param {Image} image
 * @param {Color} key
 * @param {number} firstChar
 *
 * @return {Font} The resulting Font.
 */
function LoadFontFromImage(image, key, firstChar) {
  return r.BindLoadFontFromImage(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    key.r,
    key.g,
    key.b,
    key.a,
    firstChar
  )
}
raylib.LoadFontFromImage = LoadFontFromImage

/**
 * Load font from memory buffer, fileType refers to extension: i.e. '.ttf'
 *
 * @param {string} fileType
 * @param {Buffer} fileData
 * @param {number} dataSize
 * @param {number} fontSize
 * @param {number} fontChars
 * @param {number} glyphCount
 *
 * @return {Font} The resulting Font.
 */
function LoadFontFromMemory(fileType, fileData, dataSize, fontSize, fontChars, glyphCount) {
  return r.BindLoadFontFromMemory(
    fileType,
    fileData,
    dataSize,
    fontSize,
    fontChars,
    glyphCount
  )
}
raylib.LoadFontFromMemory = LoadFontFromMemory

/**
 * Load font data for further use
 *
 * @param {Buffer} fileData
 * @param {number} dataSize
 * @param {number} fontSize
 * @param {number} fontChars
 * @param {number} glyphCount
 * @param {number} type
 *
 * @return {number} The resulting GlyphInfo *.
 */
function LoadFontData(fileData, dataSize, fontSize, fontChars, glyphCount, type) {
  return r.BindLoadFontData(
    fileData,
    dataSize,
    fontSize,
    fontChars,
    glyphCount,
    type
  )
}
raylib.LoadFontData = LoadFontData

/**
 * Generate image font atlas using chars info
 *
 * @param {number} chars
 * @param {number} recs
 * @param {number} glyphCount
 * @param {number} fontSize
 * @param {number} padding
 * @param {number} packMethod
 *
 * @return {Image} The resulting Image.
 */
function GenImageFontAtlas(chars, recs, glyphCount, fontSize, padding, packMethod) {
  return r.BindGenImageFontAtlas(
    chars,
    recs,
    glyphCount,
    fontSize,
    padding,
    packMethod
  )
}
raylib.GenImageFontAtlas = GenImageFontAtlas

/**
 * Unload font chars info data (RAM)
 *
 * @param {number} chars
 * @param {number} glyphCount
 *
 * @return {undefined}
 */
function UnloadFontData(chars, glyphCount) {
  return r.BindUnloadFontData(
    chars,
    glyphCount
  )
}
raylib.UnloadFontData = UnloadFontData

/**
 * Unload font from GPU memory (VRAM)
 *
 * @param {Font} font
 *
 * @return {undefined}
 */
function UnloadFont(font) {
  return r.BindUnloadFont(
    font.baseSize,
    font.glyphCount,
    font.glyphPadding,
    font.texture.id,
    font.texture.width,
    font.texture.height,
    font.texture.mipmaps,
    font.texture.format,
    font.recs,
    font.glyphs
  )
}
raylib.UnloadFont = UnloadFont

/**
 * Draw current FPS
 *
 * @param {number} posX
 * @param {number} posY
 *
 * @return {undefined}
 */
function DrawFPS(posX, posY) {
  return r.BindDrawFPS(
    posX,
    posY
  )
}
raylib.DrawFPS = DrawFPS

/**
 * Draw text (using default font)
 *
 * @param {string} text
 * @param {number} posX
 * @param {number} posY
 * @param {number} fontSize
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawText(text, posX, posY, fontSize, color) {
  return r.BindDrawText(
    text,
    posX,
    posY,
    fontSize,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawText = DrawText

/**
 * Draw text using font and additional parameters
 *
 * @param {Font} font
 * @param {string} text
 * @param {Vector2} position
 * @param {number} fontSize
 * @param {number} spacing
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawTextEx(font, text, position, fontSize, spacing, tint) {
  return r.BindDrawTextEx(
    font.baseSize,
    font.glyphCount,
    font.glyphPadding,
    font.texture.id,
    font.texture.width,
    font.texture.height,
    font.texture.mipmaps,
    font.texture.format,
    font.recs,
    font.glyphs,
    text,
    position.x,
    position.y,
    fontSize,
    spacing,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawTextEx = DrawTextEx

/**
 * Draw text using Font and pro parameters (rotation)
 *
 * @param {Font} font
 * @param {string} text
 * @param {Vector2} position
 * @param {Vector2} origin
 * @param {number} rotation
 * @param {number} fontSize
 * @param {number} spacing
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawTextPro(font, text, position, origin, rotation, fontSize, spacing, tint) {
  return r.BindDrawTextPro(
    font.baseSize,
    font.glyphCount,
    font.glyphPadding,
    font.texture.id,
    font.texture.width,
    font.texture.height,
    font.texture.mipmaps,
    font.texture.format,
    font.recs,
    font.glyphs,
    text,
    position.x,
    position.y,
    origin.x,
    origin.y,
    rotation,
    fontSize,
    spacing,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawTextPro = DrawTextPro

/**
 * Draw one character (codepoint)
 *
 * @param {Font} font
 * @param {number} codepoint
 * @param {Vector2} position
 * @param {number} fontSize
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawTextCodepoint(font, codepoint, position, fontSize, tint) {
  return r.BindDrawTextCodepoint(
    font.baseSize,
    font.glyphCount,
    font.glyphPadding,
    font.texture.id,
    font.texture.width,
    font.texture.height,
    font.texture.mipmaps,
    font.texture.format,
    font.recs,
    font.glyphs,
    codepoint,
    position.x,
    position.y,
    fontSize,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawTextCodepoint = DrawTextCodepoint

/**
 * Measure string width for default font
 *
 * @param {string} text
 * @param {number} fontSize
 *
 * @return {number} The resulting int.
 */
function MeasureText(text, fontSize) {
  return r.BindMeasureText(
    text,
    fontSize
  )
}
raylib.MeasureText = MeasureText

/**
 * Measure string size for Font
 *
 * @param {Font} font
 * @param {string} text
 * @param {number} fontSize
 * @param {number} spacing
 *
 * @return {Vector2} The resulting Vector2.
 */
function MeasureTextEx(font, text, fontSize, spacing) {
  return r.BindMeasureTextEx(
    font.baseSize,
    font.glyphCount,
    font.glyphPadding,
    font.texture.id,
    font.texture.width,
    font.texture.height,
    font.texture.mipmaps,
    font.texture.format,
    font.recs,
    font.glyphs,
    text,
    fontSize,
    spacing
  )
}
raylib.MeasureTextEx = MeasureTextEx

/**
 * Get glyph index position in font for a codepoint (unicode character), fallback to '?' if not found
 *
 * @param {Font} font
 * @param {number} codepoint
 *
 * @return {number} The resulting int.
 */
function GetGlyphIndex(font, codepoint) {
  return r.BindGetGlyphIndex(
    font.baseSize,
    font.glyphCount,
    font.glyphPadding,
    font.texture.id,
    font.texture.width,
    font.texture.height,
    font.texture.mipmaps,
    font.texture.format,
    font.recs,
    font.glyphs,
    codepoint
  )
}
raylib.GetGlyphIndex = GetGlyphIndex

/**
 * Get glyph font info data for a codepoint (unicode character), fallback to '?' if not found
 *
 * @param {Font} font
 * @param {number} codepoint
 *
 * @return {GlyphInfo} The resulting GlyphInfo.
 */
function GetGlyphInfo(font, codepoint) {
  return r.BindGetGlyphInfo(
    font.baseSize,
    font.glyphCount,
    font.glyphPadding,
    font.texture.id,
    font.texture.width,
    font.texture.height,
    font.texture.mipmaps,
    font.texture.format,
    font.recs,
    font.glyphs,
    codepoint
  )
}
raylib.GetGlyphInfo = GetGlyphInfo

/**
 * Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to '?' if not found
 *
 * @param {Font} font
 * @param {number} codepoint
 *
 * @return {Rectangle} The resulting Rectangle.
 */
function GetGlyphAtlasRec(font, codepoint) {
  return r.BindGetGlyphAtlasRec(
    font.baseSize,
    font.glyphCount,
    font.glyphPadding,
    font.texture.id,
    font.texture.width,
    font.texture.height,
    font.texture.mipmaps,
    font.texture.format,
    font.recs,
    font.glyphs,
    codepoint
  )
}
raylib.GetGlyphAtlasRec = GetGlyphAtlasRec

/**
 * Load all codepoints from a UTF-8 text string, codepoints count returned by parameter
 *
 * @param {string} text
 * @param {number} count
 *
 * @return {number} The resulting int *.
 */
function LoadCodepoints(text, count) {
  return r.BindLoadCodepoints(
    text,
    count
  )
}
raylib.LoadCodepoints = LoadCodepoints

/**
 * Unload codepoints data from memory
 *
 * @param {number} codepoints
 *
 * @return {undefined}
 */
function UnloadCodepoints(codepoints) {
  return r.BindUnloadCodepoints(
    codepoints
  )
}
raylib.UnloadCodepoints = UnloadCodepoints

/**
 * Get total number of codepoints in a UTF-8 encoded string
 *
 * @param {string} text
 *
 * @return {number} The resulting int.
 */
function GetCodepointCount(text) {
  return r.BindGetCodepointCount(
    text
  )
}
raylib.GetCodepointCount = GetCodepointCount

/**
 * Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure
 *
 * @param {string} text
 * @param {number} bytesProcessed
 *
 * @return {number} The resulting int.
 */
function GetCodepoint(text, bytesProcessed) {
  return r.BindGetCodepoint(
    text,
    bytesProcessed
  )
}
raylib.GetCodepoint = GetCodepoint

/**
 * Encode one codepoint into UTF-8 byte array (array length returned as parameter)
 *
 * @param {number} codepoint
 * @param {number} byteSize
 *
 * @return {string} The resulting const char *.
 */
function CodepointToUTF8(codepoint, byteSize) {
  return r.BindCodepointToUTF8(
    codepoint,
    byteSize
  )
}
raylib.CodepointToUTF8 = CodepointToUTF8

/**
 * Encode text as codepoints array into UTF-8 text string (WARNING: memory must be freed!)
 *
 * @param {number} codepoints
 * @param {number} length
 *
 * @return {string} The resulting char *.
 */
function TextCodepointsToUTF8(codepoints, length) {
  return r.BindTextCodepointsToUTF8(
    codepoints,
    length
  )
}
raylib.TextCodepointsToUTF8 = TextCodepointsToUTF8

/**
 * Copy one string to another, returns bytes copied
 *
 * @param {string} dst
 * @param {string} src
 *
 * @return {number} The resulting int.
 */
function TextCopy(dst, src) {
  return r.BindTextCopy(
    dst,
    src
  )
}
raylib.TextCopy = TextCopy

/**
 * Check if two text string are equal
 *
 * @param {string} text1
 * @param {string} text2
 *
 * @return {boolean} The resulting bool.
 */
function TextIsEqual(text1, text2) {
  return r.BindTextIsEqual(
    text1,
    text2
  )
}
raylib.TextIsEqual = TextIsEqual

/**
 * Get text length, checks for '\0' ending
 *
 * @param {string} text
 *
 * @return {number} The resulting unsigned int.
 */
function TextLength(text) {
  return r.BindTextLength(
    text
  )
}
raylib.TextLength = TextLength

/**
 * Get a piece of a text string
 *
 * @param {string} text
 * @param {number} position
 * @param {number} length
 *
 * @return {string} The resulting const char *.
 */
function TextSubtext(text, position, length) {
  return r.BindTextSubtext(
    text,
    position,
    length
  )
}
raylib.TextSubtext = TextSubtext

/**
 * Replace text string (WARNING: memory must be freed!)
 *
 * @param {string} text
 * @param {string} replace
 * @param {string} by
 *
 * @return {string} The resulting char *.
 */
function TextReplace(text, replace, by) {
  return r.BindTextReplace(
    text,
    replace,
    by
  )
}
raylib.TextReplace = TextReplace

/**
 * Insert text in a position (WARNING: memory must be freed!)
 *
 * @param {string} text
 * @param {string} insert
 * @param {number} position
 *
 * @return {string} The resulting char *.
 */
function TextInsert(text, insert, position) {
  return r.BindTextInsert(
    text,
    insert,
    position
  )
}
raylib.TextInsert = TextInsert

/**
 * Join text strings with delimiter
 *
 * @param {number} textList
 * @param {number} count
 * @param {string} delimiter
 *
 * @return {string} The resulting const char *.
 */
function TextJoin(textList, count, delimiter) {
  return r.BindTextJoin(
    textList,
    count,
    delimiter
  )
}
raylib.TextJoin = TextJoin

/**
 * Split text into multiple strings
 *
 * @param {string} text
 * @param {string} delimiter
 * @param {number} count
 *
 * @return {number} The resulting const char **.
 */
function TextSplit(text, delimiter, count) {
  return r.BindTextSplit(
    text,
    delimiter,
    count
  )
}
raylib.TextSplit = TextSplit

/**
 * Append text at specific position and move cursor!
 *
 * @param {string} text
 * @param {string} append
 * @param {number} position
 *
 * @return {undefined}
 */
function TextAppend(text, append, position) {
  return r.BindTextAppend(
    text,
    append,
    position
  )
}
raylib.TextAppend = TextAppend

/**
 * Find first text occurrence within a string
 *
 * @param {string} text
 * @param {string} find
 *
 * @return {number} The resulting int.
 */
function TextFindIndex(text, find) {
  return r.BindTextFindIndex(
    text,
    find
  )
}
raylib.TextFindIndex = TextFindIndex

/**
 * Get upper case version of provided string
 *
 * @param {string} text
 *
 * @return {string} The resulting const char *.
 */
function TextToUpper(text) {
  return r.BindTextToUpper(
    text
  )
}
raylib.TextToUpper = TextToUpper

/**
 * Get lower case version of provided string
 *
 * @param {string} text
 *
 * @return {string} The resulting const char *.
 */
function TextToLower(text) {
  return r.BindTextToLower(
    text
  )
}
raylib.TextToLower = TextToLower

/**
 * Get Pascal case notation version of provided string
 *
 * @param {string} text
 *
 * @return {string} The resulting const char *.
 */
function TextToPascal(text) {
  return r.BindTextToPascal(
    text
  )
}
raylib.TextToPascal = TextToPascal

/**
 * Get integer value from text (negative values not supported)
 *
 * @param {string} text
 *
 * @return {number} The resulting int.
 */
function TextToInteger(text) {
  return r.BindTextToInteger(
    text
  )
}
raylib.TextToInteger = TextToInteger

/**
 * Draw a line in 3D world space
 *
 * @param {Vector3} startPos
 * @param {Vector3} endPos
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawLine3D(startPos, endPos, color) {
  return r.BindDrawLine3D(
    startPos.x,
    startPos.y,
    startPos.z,
    endPos.x,
    endPos.y,
    endPos.z,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawLine3D = DrawLine3D

/**
 * Draw a point in 3D space, actually a small line
 *
 * @param {Vector3} position
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawPoint3D(position, color) {
  return r.BindDrawPoint3D(
    position.x,
    position.y,
    position.z,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawPoint3D = DrawPoint3D

/**
 * Draw a circle in 3D world space
 *
 * @param {Vector3} center
 * @param {number} radius
 * @param {Vector3} rotationAxis
 * @param {number} rotationAngle
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCircle3D(center, radius, rotationAxis, rotationAngle, color) {
  return r.BindDrawCircle3D(
    center.x,
    center.y,
    center.z,
    radius,
    rotationAxis.x,
    rotationAxis.y,
    rotationAxis.z,
    rotationAngle,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCircle3D = DrawCircle3D

/**
 * Draw a color-filled triangle (vertex in counter-clockwise order!)
 *
 * @param {Vector3} v1
 * @param {Vector3} v2
 * @param {Vector3} v3
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawTriangle3D(v1, v2, v3, color) {
  return r.BindDrawTriangle3D(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z,
    v3.x,
    v3.y,
    v3.z,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawTriangle3D = DrawTriangle3D

/**
 * Draw a triangle strip defined by points
 *
 * @param {number} points
 * @param {number} pointCount
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawTriangleStrip3D(points, pointCount, color) {
  return r.BindDrawTriangleStrip3D(
    points,
    pointCount,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawTriangleStrip3D = DrawTriangleStrip3D

/**
 * Draw cube
 *
 * @param {Vector3} position
 * @param {number} width
 * @param {number} height
 * @param {number} length
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCube(position, width, height, length, color) {
  return r.BindDrawCube(
    position.x,
    position.y,
    position.z,
    width,
    height,
    length,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCube = DrawCube

/**
 * Draw cube (Vector version)
 *
 * @param {Vector3} position
 * @param {Vector3} size
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCubeV(position, size, color) {
  return r.BindDrawCubeV(
    position.x,
    position.y,
    position.z,
    size.x,
    size.y,
    size.z,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCubeV = DrawCubeV

/**
 * Draw cube wires
 *
 * @param {Vector3} position
 * @param {number} width
 * @param {number} height
 * @param {number} length
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCubeWires(position, width, height, length, color) {
  return r.BindDrawCubeWires(
    position.x,
    position.y,
    position.z,
    width,
    height,
    length,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCubeWires = DrawCubeWires

/**
 * Draw cube wires (Vector version)
 *
 * @param {Vector3} position
 * @param {Vector3} size
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCubeWiresV(position, size, color) {
  return r.BindDrawCubeWiresV(
    position.x,
    position.y,
    position.z,
    size.x,
    size.y,
    size.z,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCubeWiresV = DrawCubeWiresV

/**
 * Draw cube textured
 *
 * @param {Texture2D} texture
 * @param {Vector3} position
 * @param {number} width
 * @param {number} height
 * @param {number} length
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCubeTexture(texture, position, width, height, length, color) {
  return r.BindDrawCubeTexture(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    position.x,
    position.y,
    position.z,
    width,
    height,
    length,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCubeTexture = DrawCubeTexture

/**
 * Draw cube with a region of a texture
 *
 * @param {Texture2D} texture
 * @param {Rectangle} source
 * @param {Vector3} position
 * @param {number} width
 * @param {number} height
 * @param {number} length
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCubeTextureRec(texture, source, position, width, height, length, color) {
  return r.BindDrawCubeTextureRec(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    source.x,
    source.y,
    source.width,
    source.height,
    position.x,
    position.y,
    position.z,
    width,
    height,
    length,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCubeTextureRec = DrawCubeTextureRec

/**
 * Draw sphere
 *
 * @param {Vector3} centerPos
 * @param {number} radius
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawSphere(centerPos, radius, color) {
  return r.BindDrawSphere(
    centerPos.x,
    centerPos.y,
    centerPos.z,
    radius,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawSphere = DrawSphere

/**
 * Draw sphere with extended parameters
 *
 * @param {Vector3} centerPos
 * @param {number} radius
 * @param {number} rings
 * @param {number} slices
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawSphereEx(centerPos, radius, rings, slices, color) {
  return r.BindDrawSphereEx(
    centerPos.x,
    centerPos.y,
    centerPos.z,
    radius,
    rings,
    slices,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawSphereEx = DrawSphereEx

/**
 * Draw sphere wires
 *
 * @param {Vector3} centerPos
 * @param {number} radius
 * @param {number} rings
 * @param {number} slices
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawSphereWires(centerPos, radius, rings, slices, color) {
  return r.BindDrawSphereWires(
    centerPos.x,
    centerPos.y,
    centerPos.z,
    radius,
    rings,
    slices,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawSphereWires = DrawSphereWires

/**
 * Draw a cylinder/cone
 *
 * @param {Vector3} position
 * @param {number} radiusTop
 * @param {number} radiusBottom
 * @param {number} height
 * @param {number} slices
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCylinder(position, radiusTop, radiusBottom, height, slices, color) {
  return r.BindDrawCylinder(
    position.x,
    position.y,
    position.z,
    radiusTop,
    radiusBottom,
    height,
    slices,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCylinder = DrawCylinder

/**
 * Draw a cylinder with base at startPos and top at endPos
 *
 * @param {Vector3} startPos
 * @param {Vector3} endPos
 * @param {number} startRadius
 * @param {number} endRadius
 * @param {number} sides
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCylinderEx(startPos, endPos, startRadius, endRadius, sides, color) {
  return r.BindDrawCylinderEx(
    startPos.x,
    startPos.y,
    startPos.z,
    endPos.x,
    endPos.y,
    endPos.z,
    startRadius,
    endRadius,
    sides,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCylinderEx = DrawCylinderEx

/**
 * Draw a cylinder/cone wires
 *
 * @param {Vector3} position
 * @param {number} radiusTop
 * @param {number} radiusBottom
 * @param {number} height
 * @param {number} slices
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCylinderWires(position, radiusTop, radiusBottom, height, slices, color) {
  return r.BindDrawCylinderWires(
    position.x,
    position.y,
    position.z,
    radiusTop,
    radiusBottom,
    height,
    slices,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCylinderWires = DrawCylinderWires

/**
 * Draw a cylinder wires with base at startPos and top at endPos
 *
 * @param {Vector3} startPos
 * @param {Vector3} endPos
 * @param {number} startRadius
 * @param {number} endRadius
 * @param {number} sides
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCylinderWiresEx(startPos, endPos, startRadius, endRadius, sides, color) {
  return r.BindDrawCylinderWiresEx(
    startPos.x,
    startPos.y,
    startPos.z,
    endPos.x,
    endPos.y,
    endPos.z,
    startRadius,
    endRadius,
    sides,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCylinderWiresEx = DrawCylinderWiresEx

/**
 * Draw a plane XZ
 *
 * @param {Vector3} centerPos
 * @param {Vector2} size
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawPlane(centerPos, size, color) {
  return r.BindDrawPlane(
    centerPos.x,
    centerPos.y,
    centerPos.z,
    size.x,
    size.y,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawPlane = DrawPlane

/**
 * Draw a ray line
 *
 * @param {Ray} ray
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawRay(ray, color) {
  return r.BindDrawRay(
    ray.position.x,
    ray.position.y,
    ray.position.z,
    ray.direction.x,
    ray.direction.y,
    ray.direction.z,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawRay = DrawRay

/**
 * Draw a grid (centered at (0, 0, 0))
 *
 * @param {number} slices
 * @param {number} spacing
 *
 * @return {undefined}
 */
function DrawGrid(slices, spacing) {
  return r.BindDrawGrid(
    slices,
    spacing
  )
}
raylib.DrawGrid = DrawGrid

/**
 * Load model from files (meshes and materials)
 *
 * @param {string} fileName
 *
 * @return {Model} The resulting Model.
 */
function LoadModel(fileName) {
  return r.BindLoadModel(
    fileName
  )
}
raylib.LoadModel = LoadModel

/**
 * Load model from generated mesh (default material)
 *
 * @param {Mesh} mesh
 *
 * @return {Model} The resulting Model.
 */
function LoadModelFromMesh(mesh) {
  return r.BindLoadModelFromMesh(
    mesh.vertexCount,
    mesh.triangleCount,
    mesh.vertices,
    mesh.texcoords,
    mesh.texcoords2,
    mesh.normals,
    mesh.tangents,
    mesh.colors,
    mesh.indices,
    mesh.animVertices,
    mesh.animNormals,
    mesh.boneIds,
    mesh.boneWeights,
    mesh.vaoId,
    mesh.vboId
  )
}
raylib.LoadModelFromMesh = LoadModelFromMesh

/**
 * Unload model (including meshes) from memory (RAM and/or VRAM)
 *
 * @param {Model} model
 *
 * @return {undefined}
 */
function UnloadModel(model) {
  return r.BindUnloadModel(
    model.transform.m0,
    model.transform.m1,
    model.transform.m2,
    model.transform.m3,
    model.transform.m4,
    model.transform.m5,
    model.transform.m6,
    model.transform.m7,
    model.transform.m8,
    model.transform.m9,
    model.transform.m10,
    model.transform.m11,
    model.transform.m12,
    model.transform.m13,
    model.transform.m14,
    model.transform.m15,
    model.meshCount,
    model.materialCount,
    model.meshes,
    model.materials,
    model.meshMaterial,
    model.boneCount,
    model.bones,
    model.bindPose
  )
}
raylib.UnloadModel = UnloadModel

/**
 * Unload model (but not meshes) from memory (RAM and/or VRAM)
 *
 * @param {Model} model
 *
 * @return {undefined}
 */
function UnloadModelKeepMeshes(model) {
  return r.BindUnloadModelKeepMeshes(
    model.transform.m0,
    model.transform.m1,
    model.transform.m2,
    model.transform.m3,
    model.transform.m4,
    model.transform.m5,
    model.transform.m6,
    model.transform.m7,
    model.transform.m8,
    model.transform.m9,
    model.transform.m10,
    model.transform.m11,
    model.transform.m12,
    model.transform.m13,
    model.transform.m14,
    model.transform.m15,
    model.meshCount,
    model.materialCount,
    model.meshes,
    model.materials,
    model.meshMaterial,
    model.boneCount,
    model.bones,
    model.bindPose
  )
}
raylib.UnloadModelKeepMeshes = UnloadModelKeepMeshes

/**
 * Compute model bounding box limits (considers all meshes)
 *
 * @param {Model} model
 *
 * @return {BoundingBox} The resulting BoundingBox.
 */
function GetModelBoundingBox(model) {
  return r.BindGetModelBoundingBox(
    model.transform.m0,
    model.transform.m1,
    model.transform.m2,
    model.transform.m3,
    model.transform.m4,
    model.transform.m5,
    model.transform.m6,
    model.transform.m7,
    model.transform.m8,
    model.transform.m9,
    model.transform.m10,
    model.transform.m11,
    model.transform.m12,
    model.transform.m13,
    model.transform.m14,
    model.transform.m15,
    model.meshCount,
    model.materialCount,
    model.meshes,
    model.materials,
    model.meshMaterial,
    model.boneCount,
    model.bones,
    model.bindPose
  )
}
raylib.GetModelBoundingBox = GetModelBoundingBox

/**
 * Draw a model (with texture if set)
 *
 * @param {Model} model
 * @param {Vector3} position
 * @param {number} scale
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawModel(model, position, scale, tint) {
  return r.BindDrawModel(
    model.transform.m0,
    model.transform.m1,
    model.transform.m2,
    model.transform.m3,
    model.transform.m4,
    model.transform.m5,
    model.transform.m6,
    model.transform.m7,
    model.transform.m8,
    model.transform.m9,
    model.transform.m10,
    model.transform.m11,
    model.transform.m12,
    model.transform.m13,
    model.transform.m14,
    model.transform.m15,
    model.meshCount,
    model.materialCount,
    model.meshes,
    model.materials,
    model.meshMaterial,
    model.boneCount,
    model.bones,
    model.bindPose,
    position.x,
    position.y,
    position.z,
    scale,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawModel = DrawModel

/**
 * Draw a model with extended parameters
 *
 * @param {Model} model
 * @param {Vector3} position
 * @param {Vector3} rotationAxis
 * @param {number} rotationAngle
 * @param {Vector3} scale
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawModelEx(model, position, rotationAxis, rotationAngle, scale, tint) {
  return r.BindDrawModelEx(
    model.transform.m0,
    model.transform.m1,
    model.transform.m2,
    model.transform.m3,
    model.transform.m4,
    model.transform.m5,
    model.transform.m6,
    model.transform.m7,
    model.transform.m8,
    model.transform.m9,
    model.transform.m10,
    model.transform.m11,
    model.transform.m12,
    model.transform.m13,
    model.transform.m14,
    model.transform.m15,
    model.meshCount,
    model.materialCount,
    model.meshes,
    model.materials,
    model.meshMaterial,
    model.boneCount,
    model.bones,
    model.bindPose,
    position.x,
    position.y,
    position.z,
    rotationAxis.x,
    rotationAxis.y,
    rotationAxis.z,
    rotationAngle,
    scale.x,
    scale.y,
    scale.z,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawModelEx = DrawModelEx

/**
 * Draw a model wires (with texture if set)
 *
 * @param {Model} model
 * @param {Vector3} position
 * @param {number} scale
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawModelWires(model, position, scale, tint) {
  return r.BindDrawModelWires(
    model.transform.m0,
    model.transform.m1,
    model.transform.m2,
    model.transform.m3,
    model.transform.m4,
    model.transform.m5,
    model.transform.m6,
    model.transform.m7,
    model.transform.m8,
    model.transform.m9,
    model.transform.m10,
    model.transform.m11,
    model.transform.m12,
    model.transform.m13,
    model.transform.m14,
    model.transform.m15,
    model.meshCount,
    model.materialCount,
    model.meshes,
    model.materials,
    model.meshMaterial,
    model.boneCount,
    model.bones,
    model.bindPose,
    position.x,
    position.y,
    position.z,
    scale,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawModelWires = DrawModelWires

/**
 * Draw a model wires (with texture if set) with extended parameters
 *
 * @param {Model} model
 * @param {Vector3} position
 * @param {Vector3} rotationAxis
 * @param {number} rotationAngle
 * @param {Vector3} scale
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawModelWiresEx(model, position, rotationAxis, rotationAngle, scale, tint) {
  return r.BindDrawModelWiresEx(
    model.transform.m0,
    model.transform.m1,
    model.transform.m2,
    model.transform.m3,
    model.transform.m4,
    model.transform.m5,
    model.transform.m6,
    model.transform.m7,
    model.transform.m8,
    model.transform.m9,
    model.transform.m10,
    model.transform.m11,
    model.transform.m12,
    model.transform.m13,
    model.transform.m14,
    model.transform.m15,
    model.meshCount,
    model.materialCount,
    model.meshes,
    model.materials,
    model.meshMaterial,
    model.boneCount,
    model.bones,
    model.bindPose,
    position.x,
    position.y,
    position.z,
    rotationAxis.x,
    rotationAxis.y,
    rotationAxis.z,
    rotationAngle,
    scale.x,
    scale.y,
    scale.z,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawModelWiresEx = DrawModelWiresEx

/**
 * Draw bounding box (wires)
 *
 * @param {BoundingBox} box
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawBoundingBox(box, color) {
  return r.BindDrawBoundingBox(
    box.min.x,
    box.min.y,
    box.min.z,
    box.max.x,
    box.max.y,
    box.max.z,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawBoundingBox = DrawBoundingBox

/**
 * Draw a billboard texture
 *
 * @param {Camera} camera
 * @param {Texture2D} texture
 * @param {Vector3} position
 * @param {number} size
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawBillboard(camera, texture, position, size, tint) {
  return r.BindDrawBillboard(
    camera.position.x,
    camera.position.y,
    camera.position.z,
    camera.target.x,
    camera.target.y,
    camera.target.z,
    camera.up.x,
    camera.up.y,
    camera.up.z,
    camera.fovy,
    camera.projection,
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    position.x,
    position.y,
    position.z,
    size,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawBillboard = DrawBillboard

/**
 * Draw a billboard texture defined by source
 *
 * @param {Camera} camera
 * @param {Texture2D} texture
 * @param {Rectangle} source
 * @param {Vector3} position
 * @param {Vector2} size
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawBillboardRec(camera, texture, source, position, size, tint) {
  return r.BindDrawBillboardRec(
    camera.position.x,
    camera.position.y,
    camera.position.z,
    camera.target.x,
    camera.target.y,
    camera.target.z,
    camera.up.x,
    camera.up.y,
    camera.up.z,
    camera.fovy,
    camera.projection,
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    source.x,
    source.y,
    source.width,
    source.height,
    position.x,
    position.y,
    position.z,
    size.x,
    size.y,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawBillboardRec = DrawBillboardRec

/**
 * Draw a billboard texture defined by source and rotation
 *
 * @param {Camera} camera
 * @param {Texture2D} texture
 * @param {Rectangle} source
 * @param {Vector3} position
 * @param {Vector3} up
 * @param {Vector2} size
 * @param {Vector2} origin
 * @param {number} rotation
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawBillboardPro(camera, texture, source, position, up, size, origin, rotation, tint) {
  return r.BindDrawBillboardPro(
    camera.position.x,
    camera.position.y,
    camera.position.z,
    camera.target.x,
    camera.target.y,
    camera.target.z,
    camera.up.x,
    camera.up.y,
    camera.up.z,
    camera.fovy,
    camera.projection,
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    source.x,
    source.y,
    source.width,
    source.height,
    position.x,
    position.y,
    position.z,
    up.x,
    up.y,
    up.z,
    size.x,
    size.y,
    origin.x,
    origin.y,
    rotation,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.DrawBillboardPro = DrawBillboardPro

/**
 * Update mesh vertex data in GPU for a specific buffer index
 *
 * @param {Mesh} mesh
 * @param {number} index
 * @param {number} data
 * @param {number} dataSize
 * @param {number} offset
 *
 * @return {undefined}
 */
function UpdateMeshBuffer(mesh, index, data, dataSize, offset) {
  return r.BindUpdateMeshBuffer(
    mesh.vertexCount,
    mesh.triangleCount,
    mesh.vertices,
    mesh.texcoords,
    mesh.texcoords2,
    mesh.normals,
    mesh.tangents,
    mesh.colors,
    mesh.indices,
    mesh.animVertices,
    mesh.animNormals,
    mesh.boneIds,
    mesh.boneWeights,
    mesh.vaoId,
    mesh.vboId,
    index,
    data,
    dataSize,
    offset
  )
}
raylib.UpdateMeshBuffer = UpdateMeshBuffer

/**
 * Unload mesh data from CPU and GPU
 *
 * @param {Mesh} mesh
 *
 * @return {undefined}
 */
function UnloadMesh(mesh) {
  return r.BindUnloadMesh(
    mesh.vertexCount,
    mesh.triangleCount,
    mesh.vertices,
    mesh.texcoords,
    mesh.texcoords2,
    mesh.normals,
    mesh.tangents,
    mesh.colors,
    mesh.indices,
    mesh.animVertices,
    mesh.animNormals,
    mesh.boneIds,
    mesh.boneWeights,
    mesh.vaoId,
    mesh.vboId
  )
}
raylib.UnloadMesh = UnloadMesh

/**
 * Export mesh data to file, returns true on success
 *
 * @param {Mesh} mesh
 * @param {string} fileName
 *
 * @return {boolean} The resulting bool.
 */
function ExportMesh(mesh, fileName) {
  return r.BindExportMesh(
    mesh.vertexCount,
    mesh.triangleCount,
    mesh.vertices,
    mesh.texcoords,
    mesh.texcoords2,
    mesh.normals,
    mesh.tangents,
    mesh.colors,
    mesh.indices,
    mesh.animVertices,
    mesh.animNormals,
    mesh.boneIds,
    mesh.boneWeights,
    mesh.vaoId,
    mesh.vboId,
    fileName
  )
}
raylib.ExportMesh = ExportMesh

/**
 * Compute mesh bounding box limits
 *
 * @param {Mesh} mesh
 *
 * @return {BoundingBox} The resulting BoundingBox.
 */
function GetMeshBoundingBox(mesh) {
  return r.BindGetMeshBoundingBox(
    mesh.vertexCount,
    mesh.triangleCount,
    mesh.vertices,
    mesh.texcoords,
    mesh.texcoords2,
    mesh.normals,
    mesh.tangents,
    mesh.colors,
    mesh.indices,
    mesh.animVertices,
    mesh.animNormals,
    mesh.boneIds,
    mesh.boneWeights,
    mesh.vaoId,
    mesh.vboId
  )
}
raylib.GetMeshBoundingBox = GetMeshBoundingBox

/**
 * Generate polygonal mesh
 *
 * @param {number} sides
 * @param {number} radius
 *
 * @return {Mesh} The resulting Mesh.
 */
function GenMeshPoly(sides, radius) {
  return r.BindGenMeshPoly(
    sides,
    radius
  )
}
raylib.GenMeshPoly = GenMeshPoly

/**
 * Generate plane mesh (with subdivisions)
 *
 * @param {number} width
 * @param {number} length
 * @param {number} resX
 * @param {number} resZ
 *
 * @return {Mesh} The resulting Mesh.
 */
function GenMeshPlane(width, length, resX, resZ) {
  return r.BindGenMeshPlane(
    width,
    length,
    resX,
    resZ
  )
}
raylib.GenMeshPlane = GenMeshPlane

/**
 * Generate cuboid mesh
 *
 * @param {number} width
 * @param {number} height
 * @param {number} length
 *
 * @return {Mesh} The resulting Mesh.
 */
function GenMeshCube(width, height, length) {
  return r.BindGenMeshCube(
    width,
    height,
    length
  )
}
raylib.GenMeshCube = GenMeshCube

/**
 * Generate sphere mesh (standard sphere)
 *
 * @param {number} radius
 * @param {number} rings
 * @param {number} slices
 *
 * @return {Mesh} The resulting Mesh.
 */
function GenMeshSphere(radius, rings, slices) {
  return r.BindGenMeshSphere(
    radius,
    rings,
    slices
  )
}
raylib.GenMeshSphere = GenMeshSphere

/**
 * Generate half-sphere mesh (no bottom cap)
 *
 * @param {number} radius
 * @param {number} rings
 * @param {number} slices
 *
 * @return {Mesh} The resulting Mesh.
 */
function GenMeshHemiSphere(radius, rings, slices) {
  return r.BindGenMeshHemiSphere(
    radius,
    rings,
    slices
  )
}
raylib.GenMeshHemiSphere = GenMeshHemiSphere

/**
 * Generate cylinder mesh
 *
 * @param {number} radius
 * @param {number} height
 * @param {number} slices
 *
 * @return {Mesh} The resulting Mesh.
 */
function GenMeshCylinder(radius, height, slices) {
  return r.BindGenMeshCylinder(
    radius,
    height,
    slices
  )
}
raylib.GenMeshCylinder = GenMeshCylinder

/**
 * Generate cone/pyramid mesh
 *
 * @param {number} radius
 * @param {number} height
 * @param {number} slices
 *
 * @return {Mesh} The resulting Mesh.
 */
function GenMeshCone(radius, height, slices) {
  return r.BindGenMeshCone(
    radius,
    height,
    slices
  )
}
raylib.GenMeshCone = GenMeshCone

/**
 * Generate torus mesh
 *
 * @param {number} radius
 * @param {number} size
 * @param {number} radSeg
 * @param {number} sides
 *
 * @return {Mesh} The resulting Mesh.
 */
function GenMeshTorus(radius, size, radSeg, sides) {
  return r.BindGenMeshTorus(
    radius,
    size,
    radSeg,
    sides
  )
}
raylib.GenMeshTorus = GenMeshTorus

/**
 * Generate trefoil knot mesh
 *
 * @param {number} radius
 * @param {number} size
 * @param {number} radSeg
 * @param {number} sides
 *
 * @return {Mesh} The resulting Mesh.
 */
function GenMeshKnot(radius, size, radSeg, sides) {
  return r.BindGenMeshKnot(
    radius,
    size,
    radSeg,
    sides
  )
}
raylib.GenMeshKnot = GenMeshKnot

/**
 * Generate heightmap mesh from image data
 *
 * @param {Image} heightmap
 * @param {Vector3} size
 *
 * @return {Mesh} The resulting Mesh.
 */
function GenMeshHeightmap(heightmap, size) {
  return r.BindGenMeshHeightmap(
    heightmap.data,
    heightmap.width,
    heightmap.height,
    heightmap.mipmaps,
    heightmap.format,
    size.x,
    size.y,
    size.z
  )
}
raylib.GenMeshHeightmap = GenMeshHeightmap

/**
 * Generate cubes-based map mesh from image data
 *
 * @param {Image} cubicmap
 * @param {Vector3} cubeSize
 *
 * @return {Mesh} The resulting Mesh.
 */
function GenMeshCubicmap(cubicmap, cubeSize) {
  return r.BindGenMeshCubicmap(
    cubicmap.data,
    cubicmap.width,
    cubicmap.height,
    cubicmap.mipmaps,
    cubicmap.format,
    cubeSize.x,
    cubeSize.y,
    cubeSize.z
  )
}
raylib.GenMeshCubicmap = GenMeshCubicmap

/**
 * Load model animations from file
 *
 * @param {string} fileName
 * @param {number} animCount
 *
 * @return {number} The resulting ModelAnimation *.
 */
function LoadModelAnimations(fileName, animCount) {
  return r.BindLoadModelAnimations(
    fileName,
    animCount
  )
}
raylib.LoadModelAnimations = LoadModelAnimations

/**
 * Update model animation pose
 *
 * @param {Model} model
 * @param {ModelAnimation} anim
 * @param {number} frame
 *
 * @return {undefined}
 */
function UpdateModelAnimation(model, anim, frame) {
  return r.BindUpdateModelAnimation(
    model.transform.m0,
    model.transform.m1,
    model.transform.m2,
    model.transform.m3,
    model.transform.m4,
    model.transform.m5,
    model.transform.m6,
    model.transform.m7,
    model.transform.m8,
    model.transform.m9,
    model.transform.m10,
    model.transform.m11,
    model.transform.m12,
    model.transform.m13,
    model.transform.m14,
    model.transform.m15,
    model.meshCount,
    model.materialCount,
    model.meshes,
    model.materials,
    model.meshMaterial,
    model.boneCount,
    model.bones,
    model.bindPose,
    anim.boneCount,
    anim.frameCount,
    anim.bones,
    anim.framePoses,
    frame
  )
}
raylib.UpdateModelAnimation = UpdateModelAnimation

/**
 * Unload animation data
 *
 * @param {ModelAnimation} anim
 *
 * @return {undefined}
 */
function UnloadModelAnimation(anim) {
  return r.BindUnloadModelAnimation(
    anim.boneCount,
    anim.frameCount,
    anim.bones,
    anim.framePoses
  )
}
raylib.UnloadModelAnimation = UnloadModelAnimation

/**
 * Unload animation array data
 *
 * @param {number} animations
 * @param {number} count
 *
 * @return {undefined}
 */
function UnloadModelAnimations(animations, count) {
  return r.BindUnloadModelAnimations(
    animations,
    count
  )
}
raylib.UnloadModelAnimations = UnloadModelAnimations

/**
 * Check model animation skeleton match
 *
 * @param {Model} model
 * @param {ModelAnimation} anim
 *
 * @return {boolean} The resulting bool.
 */
function IsModelAnimationValid(model, anim) {
  return r.BindIsModelAnimationValid(
    model.transform.m0,
    model.transform.m1,
    model.transform.m2,
    model.transform.m3,
    model.transform.m4,
    model.transform.m5,
    model.transform.m6,
    model.transform.m7,
    model.transform.m8,
    model.transform.m9,
    model.transform.m10,
    model.transform.m11,
    model.transform.m12,
    model.transform.m13,
    model.transform.m14,
    model.transform.m15,
    model.meshCount,
    model.materialCount,
    model.meshes,
    model.materials,
    model.meshMaterial,
    model.boneCount,
    model.bones,
    model.bindPose,
    anim.boneCount,
    anim.frameCount,
    anim.bones,
    anim.framePoses
  )
}
raylib.IsModelAnimationValid = IsModelAnimationValid

/**
 * Check collision between two spheres
 *
 * @param {Vector3} center1
 * @param {number} radius1
 * @param {Vector3} center2
 * @param {number} radius2
 *
 * @return {boolean} The resulting bool.
 */
function CheckCollisionSpheres(center1, radius1, center2, radius2) {
  return r.BindCheckCollisionSpheres(
    center1.x,
    center1.y,
    center1.z,
    radius1,
    center2.x,
    center2.y,
    center2.z,
    radius2
  )
}
raylib.CheckCollisionSpheres = CheckCollisionSpheres

/**
 * Check collision between two bounding boxes
 *
 * @param {BoundingBox} box1
 * @param {BoundingBox} box2
 *
 * @return {boolean} The resulting bool.
 */
function CheckCollisionBoxes(box1, box2) {
  return r.BindCheckCollisionBoxes(
    box1.min.x,
    box1.min.y,
    box1.min.z,
    box1.max.x,
    box1.max.y,
    box1.max.z,
    box2.min.x,
    box2.min.y,
    box2.min.z,
    box2.max.x,
    box2.max.y,
    box2.max.z
  )
}
raylib.CheckCollisionBoxes = CheckCollisionBoxes

/**
 * Check collision between box and sphere
 *
 * @param {BoundingBox} box
 * @param {Vector3} center
 * @param {number} radius
 *
 * @return {boolean} The resulting bool.
 */
function CheckCollisionBoxSphere(box, center, radius) {
  return r.BindCheckCollisionBoxSphere(
    box.min.x,
    box.min.y,
    box.min.z,
    box.max.x,
    box.max.y,
    box.max.z,
    center.x,
    center.y,
    center.z,
    radius
  )
}
raylib.CheckCollisionBoxSphere = CheckCollisionBoxSphere

/**
 * Get collision info between ray and sphere
 *
 * @param {Ray} ray
 * @param {Vector3} center
 * @param {number} radius
 *
 * @return {RayCollision} The resulting RayCollision.
 */
function GetRayCollisionSphere(ray, center, radius) {
  return r.BindGetRayCollisionSphere(
    ray.position.x,
    ray.position.y,
    ray.position.z,
    ray.direction.x,
    ray.direction.y,
    ray.direction.z,
    center.x,
    center.y,
    center.z,
    radius
  )
}
raylib.GetRayCollisionSphere = GetRayCollisionSphere

/**
 * Get collision info between ray and box
 *
 * @param {Ray} ray
 * @param {BoundingBox} box
 *
 * @return {RayCollision} The resulting RayCollision.
 */
function GetRayCollisionBox(ray, box) {
  return r.BindGetRayCollisionBox(
    ray.position.x,
    ray.position.y,
    ray.position.z,
    ray.direction.x,
    ray.direction.y,
    ray.direction.z,
    box.min.x,
    box.min.y,
    box.min.z,
    box.max.x,
    box.max.y,
    box.max.z
  )
}
raylib.GetRayCollisionBox = GetRayCollisionBox

/**
 * Get collision info between ray and model
 *
 * @param {Ray} ray
 * @param {Model} model
 *
 * @return {RayCollision} The resulting RayCollision.
 */
function GetRayCollisionModel(ray, model) {
  return r.BindGetRayCollisionModel(
    ray.position.x,
    ray.position.y,
    ray.position.z,
    ray.direction.x,
    ray.direction.y,
    ray.direction.z,
    model.transform.m0,
    model.transform.m1,
    model.transform.m2,
    model.transform.m3,
    model.transform.m4,
    model.transform.m5,
    model.transform.m6,
    model.transform.m7,
    model.transform.m8,
    model.transform.m9,
    model.transform.m10,
    model.transform.m11,
    model.transform.m12,
    model.transform.m13,
    model.transform.m14,
    model.transform.m15,
    model.meshCount,
    model.materialCount,
    model.meshes,
    model.materials,
    model.meshMaterial,
    model.boneCount,
    model.bones,
    model.bindPose
  )
}
raylib.GetRayCollisionModel = GetRayCollisionModel

/**
 * Get collision info between ray and mesh
 *
 * @param {Ray} ray
 * @param {Mesh} mesh
 * @param {Matrix} transform
 *
 * @return {RayCollision} The resulting RayCollision.
 */
function GetRayCollisionMesh(ray, mesh, transform) {
  return r.BindGetRayCollisionMesh(
    ray.position.x,
    ray.position.y,
    ray.position.z,
    ray.direction.x,
    ray.direction.y,
    ray.direction.z,
    mesh.vertexCount,
    mesh.triangleCount,
    mesh.vertices,
    mesh.texcoords,
    mesh.texcoords2,
    mesh.normals,
    mesh.tangents,
    mesh.colors,
    mesh.indices,
    mesh.animVertices,
    mesh.animNormals,
    mesh.boneIds,
    mesh.boneWeights,
    mesh.vaoId,
    mesh.vboId,
    transform.m0,
    transform.m1,
    transform.m2,
    transform.m3,
    transform.m4,
    transform.m5,
    transform.m6,
    transform.m7,
    transform.m8,
    transform.m9,
    transform.m10,
    transform.m11,
    transform.m12,
    transform.m13,
    transform.m14,
    transform.m15
  )
}
raylib.GetRayCollisionMesh = GetRayCollisionMesh

/**
 * Get collision info between ray and triangle
 *
 * @param {Ray} ray
 * @param {Vector3} p1
 * @param {Vector3} p2
 * @param {Vector3} p3
 *
 * @return {RayCollision} The resulting RayCollision.
 */
function GetRayCollisionTriangle(ray, p1, p2, p3) {
  return r.BindGetRayCollisionTriangle(
    ray.position.x,
    ray.position.y,
    ray.position.z,
    ray.direction.x,
    ray.direction.y,
    ray.direction.z,
    p1.x,
    p1.y,
    p1.z,
    p2.x,
    p2.y,
    p2.z,
    p3.x,
    p3.y,
    p3.z
  )
}
raylib.GetRayCollisionTriangle = GetRayCollisionTriangle

/**
 * Get collision info between ray and quad
 *
 * @param {Ray} ray
 * @param {Vector3} p1
 * @param {Vector3} p2
 * @param {Vector3} p3
 * @param {Vector3} p4
 *
 * @return {RayCollision} The resulting RayCollision.
 */
function GetRayCollisionQuad(ray, p1, p2, p3, p4) {
  return r.BindGetRayCollisionQuad(
    ray.position.x,
    ray.position.y,
    ray.position.z,
    ray.direction.x,
    ray.direction.y,
    ray.direction.z,
    p1.x,
    p1.y,
    p1.z,
    p2.x,
    p2.y,
    p2.z,
    p3.x,
    p3.y,
    p3.z,
    p4.x,
    p4.y,
    p4.z
  )
}
raylib.GetRayCollisionQuad = GetRayCollisionQuad

/**
 * Initialize audio device and context
 *
 * @return {undefined}
 */
function InitAudioDevice() {
  return r.BindInitAudioDevice()
}
raylib.InitAudioDevice = InitAudioDevice

/**
 * Close the audio device and context
 *
 * @return {undefined}
 */
function CloseAudioDevice() {
  return r.BindCloseAudioDevice()
}
raylib.CloseAudioDevice = CloseAudioDevice

/**
 * Check if audio device has been initialized successfully
 *
 * @return {boolean} The resulting bool.
 */
function IsAudioDeviceReady() {
  return r.BindIsAudioDeviceReady()
}
raylib.IsAudioDeviceReady = IsAudioDeviceReady

/**
 * Set master volume (listener)
 *
 * @param {number} volume
 *
 * @return {undefined}
 */
function SetMasterVolume(volume) {
  return r.BindSetMasterVolume(
    volume
  )
}
raylib.SetMasterVolume = SetMasterVolume

/**
 * Load wave data from file
 *
 * @param {string} fileName
 *
 * @return {Wave} The resulting Wave.
 */
function LoadWave(fileName) {
  return r.BindLoadWave(
    fileName
  )
}
raylib.LoadWave = LoadWave

/**
 * Load wave from memory buffer, fileType refers to extension: i.e. '.wav'
 *
 * @param {string} fileType
 * @param {Buffer} fileData
 * @param {number} dataSize
 *
 * @return {Wave} The resulting Wave.
 */
function LoadWaveFromMemory(fileType, fileData, dataSize) {
  return r.BindLoadWaveFromMemory(
    fileType,
    fileData,
    dataSize
  )
}
raylib.LoadWaveFromMemory = LoadWaveFromMemory

/**
 * Load sound from file
 *
 * @param {string} fileName
 *
 * @return {Sound} The resulting Sound.
 */
function LoadSound(fileName) {
  return r.BindLoadSound(
    fileName
  )
}
raylib.LoadSound = LoadSound

/**
 * Load sound from wave data
 *
 * @param {Wave} wave
 *
 * @return {Sound} The resulting Sound.
 */
function LoadSoundFromWave(wave) {
  return r.BindLoadSoundFromWave(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data
  )
}
raylib.LoadSoundFromWave = LoadSoundFromWave

/**
 * Update sound buffer with new data
 *
 * @param {Sound} sound
 * @param {number} data
 * @param {number} sampleCount
 *
 * @return {undefined}
 */
function UpdateSound(sound, data, sampleCount) {
  return r.BindUpdateSound(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount,
    data,
    sampleCount
  )
}
raylib.UpdateSound = UpdateSound

/**
 * Unload wave data
 *
 * @param {Wave} wave
 *
 * @return {undefined}
 */
function UnloadWave(wave) {
  return r.BindUnloadWave(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data
  )
}
raylib.UnloadWave = UnloadWave

/**
 * Unload sound
 *
 * @param {Sound} sound
 *
 * @return {undefined}
 */
function UnloadSound(sound) {
  return r.BindUnloadSound(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}
raylib.UnloadSound = UnloadSound

/**
 * Export wave data to file, returns true on success
 *
 * @param {Wave} wave
 * @param {string} fileName
 *
 * @return {boolean} The resulting bool.
 */
function ExportWave(wave, fileName) {
  return r.BindExportWave(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data,
    fileName
  )
}
raylib.ExportWave = ExportWave

/**
 * Export wave sample data to code (.h), returns true on success
 *
 * @param {Wave} wave
 * @param {string} fileName
 *
 * @return {boolean} The resulting bool.
 */
function ExportWaveAsCode(wave, fileName) {
  return r.BindExportWaveAsCode(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data,
    fileName
  )
}
raylib.ExportWaveAsCode = ExportWaveAsCode

/**
 * Play a sound
 *
 * @param {Sound} sound
 *
 * @return {undefined}
 */
function PlaySound(sound) {
  return r.BindPlaySound(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}
raylib.PlaySound = PlaySound

/**
 * Stop playing a sound
 *
 * @param {Sound} sound
 *
 * @return {undefined}
 */
function StopSound(sound) {
  return r.BindStopSound(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}
raylib.StopSound = StopSound

/**
 * Pause a sound
 *
 * @param {Sound} sound
 *
 * @return {undefined}
 */
function PauseSound(sound) {
  return r.BindPauseSound(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}
raylib.PauseSound = PauseSound

/**
 * Resume a paused sound
 *
 * @param {Sound} sound
 *
 * @return {undefined}
 */
function ResumeSound(sound) {
  return r.BindResumeSound(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}
raylib.ResumeSound = ResumeSound

/**
 * Play a sound (using multichannel buffer pool)
 *
 * @param {Sound} sound
 *
 * @return {undefined}
 */
function PlaySoundMulti(sound) {
  return r.BindPlaySoundMulti(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}
raylib.PlaySoundMulti = PlaySoundMulti

/**
 * Stop any sound playing (using multichannel buffer pool)
 *
 * @return {undefined}
 */
function StopSoundMulti() {
  return r.BindStopSoundMulti()
}
raylib.StopSoundMulti = StopSoundMulti

/**
 * Get number of sounds playing in the multichannel
 *
 * @return {number} The resulting int.
 */
function GetSoundsPlaying() {
  return r.BindGetSoundsPlaying()
}
raylib.GetSoundsPlaying = GetSoundsPlaying

/**
 * Check if a sound is currently playing
 *
 * @param {Sound} sound
 *
 * @return {boolean} The resulting bool.
 */
function IsSoundPlaying(sound) {
  return r.BindIsSoundPlaying(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}
raylib.IsSoundPlaying = IsSoundPlaying

/**
 * Set volume for a sound (1.0 is max level)
 *
 * @param {Sound} sound
 * @param {number} volume
 *
 * @return {undefined}
 */
function SetSoundVolume(sound, volume) {
  return r.BindSetSoundVolume(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount,
    volume
  )
}
raylib.SetSoundVolume = SetSoundVolume

/**
 * Set pitch for a sound (1.0 is base level)
 *
 * @param {Sound} sound
 * @param {number} pitch
 *
 * @return {undefined}
 */
function SetSoundPitch(sound, pitch) {
  return r.BindSetSoundPitch(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount,
    pitch
  )
}
raylib.SetSoundPitch = SetSoundPitch

/**
 * Copy a wave to a new wave
 *
 * @param {Wave} wave
 *
 * @return {Wave} The resulting Wave.
 */
function WaveCopy(wave) {
  return r.BindWaveCopy(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data
  )
}
raylib.WaveCopy = WaveCopy

/**
 * Load samples data from wave as a floats array
 *
 * @param {Wave} wave
 *
 * @return {number} The resulting float *.
 */
function LoadWaveSamples(wave) {
  return r.BindLoadWaveSamples(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data
  )
}
raylib.LoadWaveSamples = LoadWaveSamples

/**
 * Unload samples data loaded with LoadWaveSamples()
 *
 * @param {number} samples
 *
 * @return {undefined}
 */
function UnloadWaveSamples(samples) {
  return r.BindUnloadWaveSamples(
    samples
  )
}
raylib.UnloadWaveSamples = UnloadWaveSamples

/**
 * Load music stream from file
 *
 * @param {string} fileName
 *
 * @return {Music} The resulting Music.
 */
function LoadMusicStream(fileName) {
  return r.BindLoadMusicStream(
    fileName
  )
}
raylib.LoadMusicStream = LoadMusicStream

/**
 * Load music stream from data
 *
 * @param {string} fileType
 * @param {Buffer} data
 * @param {number} dataSize
 *
 * @return {Music} The resulting Music.
 */
function LoadMusicStreamFromMemory(fileType, data, dataSize) {
  return r.BindLoadMusicStreamFromMemory(
    fileType,
    data,
    dataSize
  )
}
raylib.LoadMusicStreamFromMemory = LoadMusicStreamFromMemory

/**
 * Unload music stream
 *
 * @param {Music} music
 *
 * @return {undefined}
 */
function UnloadMusicStream(music) {
  return r.BindUnloadMusicStream(
    music.stream.buffer,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData
  )
}
raylib.UnloadMusicStream = UnloadMusicStream

/**
 * Start music playing
 *
 * @param {Music} music
 *
 * @return {undefined}
 */
function PlayMusicStream(music) {
  return r.BindPlayMusicStream(
    music.stream.buffer,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData
  )
}
raylib.PlayMusicStream = PlayMusicStream

/**
 * Check if music is playing
 *
 * @param {Music} music
 *
 * @return {boolean} The resulting bool.
 */
function IsMusicStreamPlaying(music) {
  return r.BindIsMusicStreamPlaying(
    music.stream.buffer,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData
  )
}
raylib.IsMusicStreamPlaying = IsMusicStreamPlaying

/**
 * Updates buffers for music streaming
 *
 * @param {Music} music
 *
 * @return {undefined}
 */
function UpdateMusicStream(music) {
  return r.BindUpdateMusicStream(
    music.stream.buffer,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData
  )
}
raylib.UpdateMusicStream = UpdateMusicStream

/**
 * Stop music playing
 *
 * @param {Music} music
 *
 * @return {undefined}
 */
function StopMusicStream(music) {
  return r.BindStopMusicStream(
    music.stream.buffer,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData
  )
}
raylib.StopMusicStream = StopMusicStream

/**
 * Pause music playing
 *
 * @param {Music} music
 *
 * @return {undefined}
 */
function PauseMusicStream(music) {
  return r.BindPauseMusicStream(
    music.stream.buffer,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData
  )
}
raylib.PauseMusicStream = PauseMusicStream

/**
 * Resume playing paused music
 *
 * @param {Music} music
 *
 * @return {undefined}
 */
function ResumeMusicStream(music) {
  return r.BindResumeMusicStream(
    music.stream.buffer,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData
  )
}
raylib.ResumeMusicStream = ResumeMusicStream

/**
 * Seek music to a position (in seconds)
 *
 * @param {Music} music
 * @param {number} position
 *
 * @return {undefined}
 */
function SeekMusicStream(music, position) {
  return r.BindSeekMusicStream(
    music.stream.buffer,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData,
    position
  )
}
raylib.SeekMusicStream = SeekMusicStream

/**
 * Set volume for music (1.0 is max level)
 *
 * @param {Music} music
 * @param {number} volume
 *
 * @return {undefined}
 */
function SetMusicVolume(music, volume) {
  return r.BindSetMusicVolume(
    music.stream.buffer,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData,
    volume
  )
}
raylib.SetMusicVolume = SetMusicVolume

/**
 * Set pitch for a music (1.0 is base level)
 *
 * @param {Music} music
 * @param {number} pitch
 *
 * @return {undefined}
 */
function SetMusicPitch(music, pitch) {
  return r.BindSetMusicPitch(
    music.stream.buffer,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData,
    pitch
  )
}
raylib.SetMusicPitch = SetMusicPitch

/**
 * Get music time length (in seconds)
 *
 * @param {Music} music
 *
 * @return {number} The resulting float.
 */
function GetMusicTimeLength(music) {
  return r.BindGetMusicTimeLength(
    music.stream.buffer,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData
  )
}
raylib.GetMusicTimeLength = GetMusicTimeLength

/**
 * Get current music time played (in seconds)
 *
 * @param {Music} music
 *
 * @return {number} The resulting float.
 */
function GetMusicTimePlayed(music) {
  return r.BindGetMusicTimePlayed(
    music.stream.buffer,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData
  )
}
raylib.GetMusicTimePlayed = GetMusicTimePlayed

/**
 * Load audio stream (to stream raw audio pcm data)
 *
 * @param {number} sampleRate
 * @param {number} sampleSize
 * @param {number} channels
 *
 * @return {AudioStream} The resulting AudioStream.
 */
function LoadAudioStream(sampleRate, sampleSize, channels) {
  return r.BindLoadAudioStream(
    sampleRate,
    sampleSize,
    channels
  )
}
raylib.LoadAudioStream = LoadAudioStream

/**
 * Unload audio stream and free memory
 *
 * @param {AudioStream} stream
 *
 * @return {undefined}
 */
function UnloadAudioStream(stream) {
  return r.BindUnloadAudioStream(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}
raylib.UnloadAudioStream = UnloadAudioStream

/**
 * Update audio stream buffers with data
 *
 * @param {AudioStream} stream
 * @param {number} data
 * @param {number} frameCount
 *
 * @return {undefined}
 */
function UpdateAudioStream(stream, data, frameCount) {
  return r.BindUpdateAudioStream(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels,
    data,
    frameCount
  )
}
raylib.UpdateAudioStream = UpdateAudioStream

/**
 * Check if any audio stream buffers requires refill
 *
 * @param {AudioStream} stream
 *
 * @return {boolean} The resulting bool.
 */
function IsAudioStreamProcessed(stream) {
  return r.BindIsAudioStreamProcessed(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}
raylib.IsAudioStreamProcessed = IsAudioStreamProcessed

/**
 * Play audio stream
 *
 * @param {AudioStream} stream
 *
 * @return {undefined}
 */
function PlayAudioStream(stream) {
  return r.BindPlayAudioStream(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}
raylib.PlayAudioStream = PlayAudioStream

/**
 * Pause audio stream
 *
 * @param {AudioStream} stream
 *
 * @return {undefined}
 */
function PauseAudioStream(stream) {
  return r.BindPauseAudioStream(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}
raylib.PauseAudioStream = PauseAudioStream

/**
 * Resume audio stream
 *
 * @param {AudioStream} stream
 *
 * @return {undefined}
 */
function ResumeAudioStream(stream) {
  return r.BindResumeAudioStream(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}
raylib.ResumeAudioStream = ResumeAudioStream

/**
 * Check if audio stream is playing
 *
 * @param {AudioStream} stream
 *
 * @return {boolean} The resulting bool.
 */
function IsAudioStreamPlaying(stream) {
  return r.BindIsAudioStreamPlaying(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}
raylib.IsAudioStreamPlaying = IsAudioStreamPlaying

/**
 * Stop audio stream
 *
 * @param {AudioStream} stream
 *
 * @return {undefined}
 */
function StopAudioStream(stream) {
  return r.BindStopAudioStream(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}
raylib.StopAudioStream = StopAudioStream

/**
 * Set volume for audio stream (1.0 is max level)
 *
 * @param {AudioStream} stream
 * @param {number} volume
 *
 * @return {undefined}
 */
function SetAudioStreamVolume(stream, volume) {
  return r.BindSetAudioStreamVolume(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels,
    volume
  )
}
raylib.SetAudioStreamVolume = SetAudioStreamVolume

/**
 * Set pitch for audio stream (1.0 is base level)
 *
 * @param {AudioStream} stream
 * @param {number} pitch
 *
 * @return {undefined}
 */
function SetAudioStreamPitch(stream, pitch) {
  return r.BindSetAudioStreamPitch(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels,
    pitch
  )
}
raylib.SetAudioStreamPitch = SetAudioStreamPitch

/**
 * Default size for new audio streams
 *
 * @param {number} size
 *
 * @return {undefined}
 */
function SetAudioStreamBufferSizeDefault(size) {
  return r.BindSetAudioStreamBufferSizeDefault(
    size
  )
}
raylib.SetAudioStreamBufferSizeDefault = SetAudioStreamBufferSizeDefault

/**
 * Easing: EaseLinearNone.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseLinearNone(t, b, c, d) {
  return r.BindEaseLinearNone(
    t,
    b,
    c,
    d
  )
}
raylib.EaseLinearNone = EaseLinearNone

/**
 * Easing: EaseLinearIn.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseLinearIn(t, b, c, d) {
  return r.BindEaseLinearIn(
    t,
    b,
    c,
    d
  )
}
raylib.EaseLinearIn = EaseLinearIn

/**
 * Easing: EaseLinearOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseLinearOut(t, b, c, d) {
  return r.BindEaseLinearOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseLinearOut = EaseLinearOut

/**
 * Easing: EaseLinearInOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseLinearInOut(t, b, c, d) {
  return r.BindEaseLinearInOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseLinearInOut = EaseLinearInOut

/**
 * Easing: EaseSineIn.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseSineIn(t, b, c, d) {
  return r.BindEaseSineIn(
    t,
    b,
    c,
    d
  )
}
raylib.EaseSineIn = EaseSineIn

/**
 * Easing: EaseSineOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseSineOut(t, b, c, d) {
  return r.BindEaseSineOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseSineOut = EaseSineOut

/**
 * Easing: EaseSineInOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseSineInOut(t, b, c, d) {
  return r.BindEaseSineInOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseSineInOut = EaseSineInOut

/**
 * Easing: EaseCircIn.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseCircIn(t, b, c, d) {
  return r.BindEaseCircIn(
    t,
    b,
    c,
    d
  )
}
raylib.EaseCircIn = EaseCircIn

/**
 * Easing: EaseCircOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseCircOut(t, b, c, d) {
  return r.BindEaseCircOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseCircOut = EaseCircOut

/**
 * Easing: EaseCircInOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseCircInOut(t, b, c, d) {
  return r.BindEaseCircInOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseCircInOut = EaseCircInOut

/**
 * Easing: EaseCubicIn.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseCubicIn(t, b, c, d) {
  return r.BindEaseCubicIn(
    t,
    b,
    c,
    d
  )
}
raylib.EaseCubicIn = EaseCubicIn

/**
 * Easing: EaseCubicOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseCubicOut(t, b, c, d) {
  return r.BindEaseCubicOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseCubicOut = EaseCubicOut

/**
 * Easing: EaseCubicInOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseCubicInOut(t, b, c, d) {
  return r.BindEaseCubicInOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseCubicInOut = EaseCubicInOut

/**
 * Easing: EaseQuadIn.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseQuadIn(t, b, c, d) {
  return r.BindEaseQuadIn(
    t,
    b,
    c,
    d
  )
}
raylib.EaseQuadIn = EaseQuadIn

/**
 * Easing: EaseQuadOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseQuadOut(t, b, c, d) {
  return r.BindEaseQuadOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseQuadOut = EaseQuadOut

/**
 * Easing: EaseQuadInOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseQuadInOut(t, b, c, d) {
  return r.BindEaseQuadInOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseQuadInOut = EaseQuadInOut

/**
 * Easing: EaseExpoIn.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseExpoIn(t, b, c, d) {
  return r.BindEaseExpoIn(
    t,
    b,
    c,
    d
  )
}
raylib.EaseExpoIn = EaseExpoIn

/**
 * Easing: EaseExpoOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseExpoOut(t, b, c, d) {
  return r.BindEaseExpoOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseExpoOut = EaseExpoOut

/**
 * Easing: EaseExpoInOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseExpoInOut(t, b, c, d) {
  return r.BindEaseExpoInOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseExpoInOut = EaseExpoInOut

/**
 * Easing: EaseBackIn.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseBackIn(t, b, c, d) {
  return r.BindEaseBackIn(
    t,
    b,
    c,
    d
  )
}
raylib.EaseBackIn = EaseBackIn

/**
 * Easing: EaseBackOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseBackOut(t, b, c, d) {
  return r.BindEaseBackOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseBackOut = EaseBackOut

/**
 * Easing: EaseBackInOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseBackInOut(t, b, c, d) {
  return r.BindEaseBackInOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseBackInOut = EaseBackInOut

/**
 * Easing: EaseBounceOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseBounceOut(t, b, c, d) {
  return r.BindEaseBounceOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseBounceOut = EaseBounceOut

/**
 * Easing: EaseBounceIn.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseBounceIn(t, b, c, d) {
  return r.BindEaseBounceIn(
    t,
    b,
    c,
    d
  )
}
raylib.EaseBounceIn = EaseBounceIn

/**
 * Easing: EaseBounceInOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseBounceInOut(t, b, c, d) {
  return r.BindEaseBounceInOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseBounceInOut = EaseBounceInOut

/**
 * Easing: EaseElasticIn.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseElasticIn(t, b, c, d) {
  return r.BindEaseElasticIn(
    t,
    b,
    c,
    d
  )
}
raylib.EaseElasticIn = EaseElasticIn

/**
 * Easing: EaseElasticOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseElasticOut(t, b, c, d) {
  return r.BindEaseElasticOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseElasticOut = EaseElasticOut

/**
 * Easing: EaseElasticInOut.
 *
 * @param {number} t
 * @param {number} b
 * @param {number} c
 * @param {number} d
 *
 * @return {number} The resulting float.
 */
function EaseElasticInOut(t, b, c, d) {
  return r.BindEaseElasticInOut(
    t,
    b,
    c,
    d
  )
}
raylib.EaseElasticInOut = EaseElasticInOut

/**
 * Update camera position for selected mode
 *
 * @param {Camera} camera
 *
 * @return {undefined}
 */
function UpdateCamera(camera) {
  const obj = r.BindUpdateCamera(
    camera.position.x,
    camera.position.y,
    camera.position.z,
    camera.target.x,
    camera.target.y,
    camera.target.z,
    camera.up.x,
    camera.up.y,
    camera.up.z,
    camera.fovy,
    camera.projection
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      camera[key] = obj[key]
    }
  }
}
raylib.UpdateCamera = UpdateCamera

/**
 * Convert image data to desired format
 *
 * @param {Image} image
 * @param {number} newFormat
 *
 * @return {undefined}
 */
function ImageFormat(image, newFormat) {
  const obj = r.BindImageFormat(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    newFormat
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageFormat = ImageFormat

/**
 * Convert image to POT (power-of-two)
 *
 * @param {Image} image
 * @param {Color} fill
 *
 * @return {undefined}
 */
function ImageToPOT(image, fill) {
  const obj = r.BindImageToPOT(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    fill.r,
    fill.g,
    fill.b,
    fill.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageToPOT = ImageToPOT

/**
 * Crop an image to a defined rectangle
 *
 * @param {Image} image
 * @param {Rectangle} crop
 *
 * @return {undefined}
 */
function ImageCrop(image, crop) {
  const obj = r.BindImageCrop(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    crop.x,
    crop.y,
    crop.width,
    crop.height
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageCrop = ImageCrop

/**
 * Crop image depending on alpha value
 *
 * @param {Image} image
 * @param {number} threshold
 *
 * @return {undefined}
 */
function ImageAlphaCrop(image, threshold) {
  const obj = r.BindImageAlphaCrop(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    threshold
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageAlphaCrop = ImageAlphaCrop

/**
 * Clear alpha channel to desired color
 *
 * @param {Image} image
 * @param {Color} color
 * @param {number} threshold
 *
 * @return {undefined}
 */
function ImageAlphaClear(image, color, threshold) {
  const obj = r.BindImageAlphaClear(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    color.r,
    color.g,
    color.b,
    color.a,
    threshold
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageAlphaClear = ImageAlphaClear

/**
 * Apply alpha mask to image
 *
 * @param {Image} image
 * @param {Image} alphaMask
 *
 * @return {undefined}
 */
function ImageAlphaMask(image, alphaMask) {
  const obj = r.BindImageAlphaMask(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    alphaMask.data,
    alphaMask.width,
    alphaMask.height,
    alphaMask.mipmaps,
    alphaMask.format
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageAlphaMask = ImageAlphaMask

/**
 * Premultiply alpha channel
 *
 * @param {Image} image
 *
 * @return {undefined}
 */
function ImageAlphaPremultiply(image) {
  const obj = r.BindImageAlphaPremultiply(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageAlphaPremultiply = ImageAlphaPremultiply

/**
 * Resize image (Bicubic scaling algorithm)
 *
 * @param {Image} image
 * @param {number} newWidth
 * @param {number} newHeight
 *
 * @return {undefined}
 */
function ImageResize(image, newWidth, newHeight) {
  const obj = r.BindImageResize(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    newWidth,
    newHeight
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageResize = ImageResize

/**
 * Resize image (Nearest-Neighbor scaling algorithm)
 *
 * @param {Image} image
 * @param {number} newWidth
 * @param {number} newHeight
 *
 * @return {undefined}
 */
function ImageResizeNN(image, newWidth, newHeight) {
  const obj = r.BindImageResizeNN(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    newWidth,
    newHeight
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageResizeNN = ImageResizeNN

/**
 * Resize canvas and fill with color
 *
 * @param {Image} image
 * @param {number} newWidth
 * @param {number} newHeight
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {Color} fill
 *
 * @return {undefined}
 */
function ImageResizeCanvas(image, newWidth, newHeight, offsetX, offsetY, fill) {
  const obj = r.BindImageResizeCanvas(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    newWidth,
    newHeight,
    offsetX,
    offsetY,
    fill.r,
    fill.g,
    fill.b,
    fill.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageResizeCanvas = ImageResizeCanvas

/**
 * Compute all mipmap levels for a provided image
 *
 * @param {Image} image
 *
 * @return {undefined}
 */
function ImageMipmaps(image) {
  const obj = r.BindImageMipmaps(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageMipmaps = ImageMipmaps

/**
 * Dither image data to 16bpp or lower (Floyd-Steinberg dithering)
 *
 * @param {Image} image
 * @param {number} rBpp
 * @param {number} gBpp
 * @param {number} bBpp
 * @param {number} aBpp
 *
 * @return {undefined}
 */
function ImageDither(image, rBpp, gBpp, bBpp, aBpp) {
  const obj = r.BindImageDither(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    rBpp,
    gBpp,
    bBpp,
    aBpp
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageDither = ImageDither

/**
 * Flip image vertically
 *
 * @param {Image} image
 *
 * @return {undefined}
 */
function ImageFlipVertical(image) {
  const obj = r.BindImageFlipVertical(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageFlipVertical = ImageFlipVertical

/**
 * Flip image horizontally
 *
 * @param {Image} image
 *
 * @return {undefined}
 */
function ImageFlipHorizontal(image) {
  const obj = r.BindImageFlipHorizontal(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageFlipHorizontal = ImageFlipHorizontal

/**
 * Rotate image clockwise 90deg
 *
 * @param {Image} image
 *
 * @return {undefined}
 */
function ImageRotateCW(image) {
  const obj = r.BindImageRotateCW(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageRotateCW = ImageRotateCW

/**
 * Rotate image counter-clockwise 90deg
 *
 * @param {Image} image
 *
 * @return {undefined}
 */
function ImageRotateCCW(image) {
  const obj = r.BindImageRotateCCW(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageRotateCCW = ImageRotateCCW

/**
 * Modify image color: tint
 *
 * @param {Image} image
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageColorTint(image, color) {
  const obj = r.BindImageColorTint(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    color.r,
    color.g,
    color.b,
    color.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageColorTint = ImageColorTint

/**
 * Modify image color: invert
 *
 * @param {Image} image
 *
 * @return {undefined}
 */
function ImageColorInvert(image) {
  const obj = r.BindImageColorInvert(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageColorInvert = ImageColorInvert

/**
 * Modify image color: grayscale
 *
 * @param {Image} image
 *
 * @return {undefined}
 */
function ImageColorGrayscale(image) {
  const obj = r.BindImageColorGrayscale(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageColorGrayscale = ImageColorGrayscale

/**
 * Modify image color: contrast (-100 to 100)
 *
 * @param {Image} image
 * @param {number} contrast
 *
 * @return {undefined}
 */
function ImageColorContrast(image, contrast) {
  const obj = r.BindImageColorContrast(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    contrast
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageColorContrast = ImageColorContrast

/**
 * Modify image color: brightness (-255 to 255)
 *
 * @param {Image} image
 * @param {number} brightness
 *
 * @return {undefined}
 */
function ImageColorBrightness(image, brightness) {
  const obj = r.BindImageColorBrightness(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    brightness
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageColorBrightness = ImageColorBrightness

/**
 * Modify image color: replace color
 *
 * @param {Image} image
 * @param {Color} color
 * @param {Color} replace
 *
 * @return {undefined}
 */
function ImageColorReplace(image, color, replace) {
  const obj = r.BindImageColorReplace(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    color.r,
    color.g,
    color.b,
    color.a,
    replace.r,
    replace.g,
    replace.b,
    replace.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      image[key] = obj[key]
    }
  }
}
raylib.ImageColorReplace = ImageColorReplace

/**
 * Clear image background with given color
 *
 * @param {Image} dst
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageClearBackground(dst, color) {
  const obj = r.BindImageClearBackground(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    color.r,
    color.g,
    color.b,
    color.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageClearBackground = ImageClearBackground

/**
 * Draw pixel within an image
 *
 * @param {Image} dst
 * @param {number} posX
 * @param {number} posY
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawPixel(dst, posX, posY, color) {
  const obj = r.BindImageDrawPixel(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    posX,
    posY,
    color.r,
    color.g,
    color.b,
    color.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageDrawPixel = ImageDrawPixel

/**
 * Draw pixel within an image (Vector version)
 *
 * @param {Image} dst
 * @param {Vector2} position
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawPixelV(dst, position, color) {
  const obj = r.BindImageDrawPixelV(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    position.x,
    position.y,
    color.r,
    color.g,
    color.b,
    color.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageDrawPixelV = ImageDrawPixelV

/**
 * Draw line within an image
 *
 * @param {Image} dst
 * @param {number} startPosX
 * @param {number} startPosY
 * @param {number} endPosX
 * @param {number} endPosY
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawLine(dst, startPosX, startPosY, endPosX, endPosY, color) {
  const obj = r.BindImageDrawLine(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    startPosX,
    startPosY,
    endPosX,
    endPosY,
    color.r,
    color.g,
    color.b,
    color.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageDrawLine = ImageDrawLine

/**
 * Draw line within an image (Vector version)
 *
 * @param {Image} dst
 * @param {Vector2} start
 * @param {Vector2} end
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawLineV(dst, start, end, color) {
  const obj = r.BindImageDrawLineV(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    start.x,
    start.y,
    end.x,
    end.y,
    color.r,
    color.g,
    color.b,
    color.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageDrawLineV = ImageDrawLineV

/**
 * Draw circle within an image
 *
 * @param {Image} dst
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} radius
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawCircle(dst, centerX, centerY, radius, color) {
  const obj = r.BindImageDrawCircle(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    centerX,
    centerY,
    radius,
    color.r,
    color.g,
    color.b,
    color.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageDrawCircle = ImageDrawCircle

/**
 * Draw circle within an image (Vector version)
 *
 * @param {Image} dst
 * @param {Vector2} center
 * @param {number} radius
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawCircleV(dst, center, radius, color) {
  const obj = r.BindImageDrawCircleV(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    center.x,
    center.y,
    radius,
    color.r,
    color.g,
    color.b,
    color.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageDrawCircleV = ImageDrawCircleV

/**
 * Draw rectangle within an image
 *
 * @param {Image} dst
 * @param {number} posX
 * @param {number} posY
 * @param {number} width
 * @param {number} height
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawRectangle(dst, posX, posY, width, height, color) {
  const obj = r.BindImageDrawRectangle(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    posX,
    posY,
    width,
    height,
    color.r,
    color.g,
    color.b,
    color.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageDrawRectangle = ImageDrawRectangle

/**
 * Draw rectangle within an image (Vector version)
 *
 * @param {Image} dst
 * @param {Vector2} position
 * @param {Vector2} size
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawRectangleV(dst, position, size, color) {
  const obj = r.BindImageDrawRectangleV(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    position.x,
    position.y,
    size.x,
    size.y,
    color.r,
    color.g,
    color.b,
    color.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageDrawRectangleV = ImageDrawRectangleV

/**
 * Draw rectangle within an image
 *
 * @param {Image} dst
 * @param {Rectangle} rec
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawRectangleRec(dst, rec, color) {
  const obj = r.BindImageDrawRectangleRec(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    rec.x,
    rec.y,
    rec.width,
    rec.height,
    color.r,
    color.g,
    color.b,
    color.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageDrawRectangleRec = ImageDrawRectangleRec

/**
 * Draw rectangle lines within an image
 *
 * @param {Image} dst
 * @param {Rectangle} rec
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawRectangleLines(dst, rec, thick, color) {
  const obj = r.BindImageDrawRectangleLines(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    rec.x,
    rec.y,
    rec.width,
    rec.height,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageDrawRectangleLines = ImageDrawRectangleLines

/**
 * Draw a source image within a destination image (tint applied to source)
 *
 * @param {Image} dst
 * @param {Image} src
 * @param {Rectangle} srcRec
 * @param {Rectangle} dstRec
 * @param {Color} tint
 *
 * @return {undefined}
 */
function ImageDraw(dst, src, srcRec, dstRec, tint) {
  const obj = r.BindImageDraw(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    src.data,
    src.width,
    src.height,
    src.mipmaps,
    src.format,
    srcRec.x,
    srcRec.y,
    srcRec.width,
    srcRec.height,
    dstRec.x,
    dstRec.y,
    dstRec.width,
    dstRec.height,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageDraw = ImageDraw

/**
 * Draw text (using default font) within an image (destination)
 *
 * @param {Image} dst
 * @param {string} text
 * @param {number} posX
 * @param {number} posY
 * @param {number} fontSize
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawText(dst, text, posX, posY, fontSize, color) {
  const obj = r.BindImageDrawText(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    text,
    posX,
    posY,
    fontSize,
    color.r,
    color.g,
    color.b,
    color.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageDrawText = ImageDrawText

/**
 * Draw text (custom sprite font) within an image (destination)
 *
 * @param {Image} dst
 * @param {Font} font
 * @param {string} text
 * @param {Vector2} position
 * @param {number} fontSize
 * @param {number} spacing
 * @param {Color} tint
 *
 * @return {undefined}
 */
function ImageDrawTextEx(dst, font, text, position, fontSize, spacing, tint) {
  const obj = r.BindImageDrawTextEx(
    dst.data,
    dst.width,
    dst.height,
    dst.mipmaps,
    dst.format,
    font.baseSize,
    font.glyphCount,
    font.glyphPadding,
    font.texture.id,
    font.texture.width,
    font.texture.height,
    font.texture.mipmaps,
    font.texture.format,
    font.recs,
    font.glyphs,
    text,
    position.x,
    position.y,
    fontSize,
    spacing,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      dst[key] = obj[key]
    }
  }
}
raylib.ImageDrawTextEx = ImageDrawTextEx

/**
 * Generate GPU mipmaps for a texture
 *
 * @param {Texture2D} texture
 *
 * @return {undefined}
 */
function GenTextureMipmaps(texture) {
  const obj = r.BindGenTextureMipmaps(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      texture[key] = obj[key]
    }
  }
}
raylib.GenTextureMipmaps = GenTextureMipmaps

/**
 * Upload mesh vertex data in GPU and provide VAO/VBO ids
 *
 * @param {Mesh} mesh
 * @param {boolean} dynamic
 *
 * @return {undefined}
 */
function UploadMesh(mesh, dynamic) {
  const obj = r.BindUploadMesh(
    mesh.vertexCount,
    mesh.triangleCount,
    mesh.vertices,
    mesh.texcoords,
    mesh.texcoords2,
    mesh.normals,
    mesh.tangents,
    mesh.colors,
    mesh.indices,
    mesh.animVertices,
    mesh.animNormals,
    mesh.boneIds,
    mesh.boneWeights,
    mesh.vaoId,
    mesh.vboId,
    dynamic
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      mesh[key] = obj[key]
    }
  }
}
raylib.UploadMesh = UploadMesh

/**
 * Compute mesh tangents
 *
 * @param {Mesh} mesh
 *
 * @return {undefined}
 */
function GenMeshTangents(mesh) {
  const obj = r.BindGenMeshTangents(
    mesh.vertexCount,
    mesh.triangleCount,
    mesh.vertices,
    mesh.texcoords,
    mesh.texcoords2,
    mesh.normals,
    mesh.tangents,
    mesh.colors,
    mesh.indices,
    mesh.animVertices,
    mesh.animNormals,
    mesh.boneIds,
    mesh.boneWeights,
    mesh.vaoId,
    mesh.vboId
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      mesh[key] = obj[key]
    }
  }
}
raylib.GenMeshTangents = GenMeshTangents

/**
 * Compute mesh binormals
 *
 * @param {Mesh} mesh
 *
 * @return {undefined}
 */
function GenMeshBinormals(mesh) {
  const obj = r.BindGenMeshBinormals(
    mesh.vertexCount,
    mesh.triangleCount,
    mesh.vertices,
    mesh.texcoords,
    mesh.texcoords2,
    mesh.normals,
    mesh.tangents,
    mesh.colors,
    mesh.indices,
    mesh.animVertices,
    mesh.animNormals,
    mesh.boneIds,
    mesh.boneWeights,
    mesh.vaoId,
    mesh.vboId
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      mesh[key] = obj[key]
    }
  }
}
raylib.GenMeshBinormals = GenMeshBinormals

/**
 * Set material for a mesh
 *
 * @param {Model} model
 * @param {number} meshId
 * @param {number} materialId
 *
 * @return {undefined}
 */
function SetModelMeshMaterial(model, meshId, materialId) {
  const obj = r.BindSetModelMeshMaterial(
    model.transform.m0,
    model.transform.m1,
    model.transform.m2,
    model.transform.m3,
    model.transform.m4,
    model.transform.m5,
    model.transform.m6,
    model.transform.m7,
    model.transform.m8,
    model.transform.m9,
    model.transform.m10,
    model.transform.m11,
    model.transform.m12,
    model.transform.m13,
    model.transform.m14,
    model.transform.m15,
    model.meshCount,
    model.materialCount,
    model.meshes,
    model.materials,
    model.meshMaterial,
    model.boneCount,
    model.bones,
    model.bindPose,
    meshId,
    materialId
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      model[key] = obj[key]
    }
  }
}
raylib.SetModelMeshMaterial = SetModelMeshMaterial

/**
 * Convert wave data to desired format
 *
 * @param {Wave} wave
 * @param {number} sampleRate
 * @param {number} sampleSize
 * @param {number} channels
 *
 * @return {undefined}
 */
function WaveFormat(wave, sampleRate, sampleSize, channels) {
  const obj = r.BindWaveFormat(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data,
    sampleRate,
    sampleSize,
    channels
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      wave[key] = obj[key]
    }
  }
}
raylib.WaveFormat = WaveFormat

/**
 * Crop a wave to defined samples range
 *
 * @param {Wave} wave
 * @param {number} initSample
 * @param {number} finalSample
 *
 * @return {undefined}
 */
function WaveCrop(wave, initSample, finalSample) {
  const obj = r.BindWaveCrop(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data,
    initSample,
    finalSample
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      wave[key] = obj[key]
    }
  }
}
raylib.WaveCrop = WaveCrop

/**
 * Color, 4 components, R8G8B8A8 (32bit)
 *
 * @param {number} r - Color red value
 * @param {number} g - Color green value
 * @param {number} b - Color blue value
 * @param {number} a - Color alpha value
 *
 * @return {Color} The new Color.
 */
function Color(r,g,b,a) {
  return {r,g,b,a}
}
raylib.Color = Color

/**
 * Vector2, 2 components
 *
 * @param {number} x - Vector x component
 * @param {number} y - Vector y component
 *
 * @return {Vector2} The new Vector2.
 */
function Vector2(x,y) {
  return {x,y}
}
raylib.Vector2 = Vector2

/**
 * Vector3, 3 components
 *
 * @param {number} x - Vector x component
 * @param {number} y - Vector y component
 * @param {number} z - Vector z component
 *
 * @return {Vector3} The new Vector3.
 */
function Vector3(x,y,z) {
  return {x,y,z}
}
raylib.Vector3 = Vector3

/**
 * Vector4, 4 components
 *
 * @param {number} x - Vector x component
 * @param {number} y - Vector y component
 * @param {number} z - Vector z component
 * @param {number} w - Vector w component
 *
 * @return {Vector4} The new Vector4.
 */
function Vector4(x,y,z,w) {
  return {x,y,z,w}
}
raylib.Vector4 = Vector4

/**
 * Rectangle, 4 components
 *
 * @param {number} x - Rectangle top-left corner position x
 * @param {number} y - Rectangle top-left corner position y
 * @param {number} width - Rectangle width
 * @param {number} height - Rectangle height
 *
 * @return {Rectangle} The new Rectangle.
 */
function Rectangle(x,y,width,height) {
  return {x,y,width,height}
}
raylib.Rectangle = Rectangle

/**
 * Camera2D, defines position/orientation in 2d space
 *
 * @param {Vector2} offset - Camera offset (displacement from target)
 * @param {Vector2} target - Camera target (rotation and zoom origin)
 * @param {number} rotation - Camera rotation in degrees
 * @param {number} zoom - Camera zoom (scaling), should be 1.0f by default
 *
 * @return {Camera2D} The new Camera2D.
 */
function Camera2D(offset,target,rotation,zoom) {
  return {offset,target,rotation,zoom}
}
raylib.Camera2D = Camera2D

/**
 * Camera, defines position/orientation in 3d space
 *
 * @param {Vector3} position - Camera position
 * @param {Vector3} target - Camera target it looks-at
 * @param {Vector3} up - Camera up vector (rotation over its axis)
 * @param {number} fovy - Camera field-of-view apperture in Y (degrees) in perspective, used as near plane width in orthographic
 * @param {number} projection - Camera projection: CAMERA_PERSPECTIVE or CAMERA_ORTHOGRAPHIC
 *
 * @return {Camera3D} The new Camera3D.
 */
function Camera3D(position,target,up,fovy,projection) {
  return {position,target,up,fovy,projection}
}
raylib.Camera3D = Camera3D
raylib.Camera = raylib.Camera3D

// WRAPPED TYPED SHADER FUNCTIONS

/**
 * Set shader uniform value float
 * 
 * @param {Shader} shader
 * @param {number} locIndex
 * @param {number} value
 * 
 * @returns {undefined}
 */
function SetShaderFloat(shader, locIndex, value) {
  return r.BindSetShaderFloat(
    shader.id,
    shader.locs,
    locIndex,
    value
  )
}
raylib.SetShaderFloat = SetShaderFloat

/**
 * Set shader uniform value float
 * 
 * @param {Shader} shader
 * @param {number} locIndex
 * @param {number} value
 * 
 * @returns {undefined}
 */
function SetShaderInt(shader, locIndex, value) {
  return r.BindSetShaderInt(
    shader.id,
    shader.locs,
    locIndex,
    value
  )
}
raylib.SetShaderInt = SetShaderInt

/**
 * Set shader uniform value vector2
 * 
 * @param {Shader} shader
 * @param {number} locIndex
 * @param {Vector2} value
 * 
 * @returns {undefined}
 */
function SetShaderVec2(shader, locIndex, value) {
  return r.BindSetShaderVec2(
    shader.id,
    shader.locs,
    locIndex,
    value.x,
    value.y
  )
}
raylib.SetShaderVec2 = SetShaderVec2

/**
 * Set shader uniform value vector3
 * 
 * @param {Shader} shader
 * @param {number} locIndex
 * @param {Vector3} value
 * 
 * @returns {undefined}
 */
function SetShaderVec3(shader, locIndex, value) {
  return r.BindSetShaderVec3(
    shader.id,
    shader.locs,
    locIndex,
    value.x,
    value.y,
    value.z
  )
}
raylib.SetShaderVec3 = SetShaderVec3

/**
 * Set shader uniform value vector4
 * 
 * @param {Shader} shader
 * @param {number} locIndex
 * @param {Vector4} value
 * 
 * @returns {undefined}
 */
function SetShaderVec4(shader, locIndex, value) {
  return r.BindSetShaderVec4(
    shader.id,
    shader.locs,
    locIndex,
    value.x,
    value.y,
    value.z,
    value.w
  )
}
raylib.SetShaderVec4 = SetShaderVec4

/**
 * Set to try enabling V-Sync on GPU
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_VSYNC_HINT = 64

/**
 * Set to run program in fullscreen
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_FULLSCREEN_MODE = 2

/**
 * Set to allow resizable window
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_WINDOW_RESIZABLE = 4

/**
 * Set to disable window decoration (frame and buttons)
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_WINDOW_UNDECORATED = 8

/**
 * Set to hide window
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_WINDOW_HIDDEN = 128

/**
 * Set to minimize window (iconify)
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_WINDOW_MINIMIZED = 512

/**
 * Set to maximize window (expanded to monitor)
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_WINDOW_MAXIMIZED = 1024

/**
 * Set to window non focused
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_WINDOW_UNFOCUSED = 2048

/**
 * Set to window always on top
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_WINDOW_TOPMOST = 4096

/**
 * Set to allow windows running while minimized
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_WINDOW_ALWAYS_RUN = 256

/**
 * Set to allow transparent framebuffer
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_WINDOW_TRANSPARENT = 16

/**
 * Set to support HighDPI
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_WINDOW_HIGHDPI = 8192

/**
 * Set to try enabling MSAA 4X
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_MSAA_4X_HINT = 32

/**
 * Set to try enabling interlaced video format (for V3D)
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_INTERLACED_HINT = 65536

/**
 * Display all logs
 *
 * @type {number}
 * @constant
 */
raylib.LOG_ALL = 0

/**
 * Trace logging, intended for internal use only
 *
 * @type {number}
 * @constant
 */
raylib.LOG_TRACE = 1

/**
 * Debug logging, used for internal debugging, it should be disabled on release builds
 *
 * @type {number}
 * @constant
 */
raylib.LOG_DEBUG = 2

/**
 * Info logging, used for program execution info
 *
 * @type {number}
 * @constant
 */
raylib.LOG_INFO = 3

/**
 * Warning logging, used on recoverable failures
 *
 * @type {number}
 * @constant
 */
raylib.LOG_WARNING = 4

/**
 * Error logging, used on unrecoverable failures
 *
 * @type {number}
 * @constant
 */
raylib.LOG_ERROR = 5

/**
 * Fatal logging, used to abort program: exit(EXIT_FAILURE)
 *
 * @type {number}
 * @constant
 */
raylib.LOG_FATAL = 6

/**
 * Disable logging
 *
 * @type {number}
 * @constant
 */
raylib.LOG_NONE = 7

/**
 * Key: NULL, used for no key pressed
 *
 * @type {number}
 * @constant
 */
raylib.KEY_NULL = 0

/**
 * Key: '
 *
 * @type {number}
 * @constant
 */
raylib.KEY_APOSTROPHE = 39

/**
 * Key: ,
 *
 * @type {number}
 * @constant
 */
raylib.KEY_COMMA = 44

/**
 * Key: -
 *
 * @type {number}
 * @constant
 */
raylib.KEY_MINUS = 45

/**
 * Key: .
 *
 * @type {number}
 * @constant
 */
raylib.KEY_PERIOD = 46

/**
 * Key: /
 *
 * @type {number}
 * @constant
 */
raylib.KEY_SLASH = 47

/**
 * Key: 0
 *
 * @type {number}
 * @constant
 */
raylib.KEY_ZERO = 48

/**
 * Key: 1
 *
 * @type {number}
 * @constant
 */
raylib.KEY_ONE = 49

/**
 * Key: 2
 *
 * @type {number}
 * @constant
 */
raylib.KEY_TWO = 50

/**
 * Key: 3
 *
 * @type {number}
 * @constant
 */
raylib.KEY_THREE = 51

/**
 * Key: 4
 *
 * @type {number}
 * @constant
 */
raylib.KEY_FOUR = 52

/**
 * Key: 5
 *
 * @type {number}
 * @constant
 */
raylib.KEY_FIVE = 53

/**
 * Key: 6
 *
 * @type {number}
 * @constant
 */
raylib.KEY_SIX = 54

/**
 * Key: 7
 *
 * @type {number}
 * @constant
 */
raylib.KEY_SEVEN = 55

/**
 * Key: 8
 *
 * @type {number}
 * @constant
 */
raylib.KEY_EIGHT = 56

/**
 * Key: 9
 *
 * @type {number}
 * @constant
 */
raylib.KEY_NINE = 57

/**
 * Key: ;
 *
 * @type {number}
 * @constant
 */
raylib.KEY_SEMICOLON = 59

/**
 * Key: =
 *
 * @type {number}
 * @constant
 */
raylib.KEY_EQUAL = 61

/**
 * Key: A | a
 *
 * @type {number}
 * @constant
 */
raylib.KEY_A = 65

/**
 * Key: B | b
 *
 * @type {number}
 * @constant
 */
raylib.KEY_B = 66

/**
 * Key: C | c
 *
 * @type {number}
 * @constant
 */
raylib.KEY_C = 67

/**
 * Key: D | d
 *
 * @type {number}
 * @constant
 */
raylib.KEY_D = 68

/**
 * Key: E | e
 *
 * @type {number}
 * @constant
 */
raylib.KEY_E = 69

/**
 * Key: F | f
 *
 * @type {number}
 * @constant
 */
raylib.KEY_F = 70

/**
 * Key: G | g
 *
 * @type {number}
 * @constant
 */
raylib.KEY_G = 71

/**
 * Key: H | h
 *
 * @type {number}
 * @constant
 */
raylib.KEY_H = 72

/**
 * Key: I | i
 *
 * @type {number}
 * @constant
 */
raylib.KEY_I = 73

/**
 * Key: J | j
 *
 * @type {number}
 * @constant
 */
raylib.KEY_J = 74

/**
 * Key: K | k
 *
 * @type {number}
 * @constant
 */
raylib.KEY_K = 75

/**
 * Key: L | l
 *
 * @type {number}
 * @constant
 */
raylib.KEY_L = 76

/**
 * Key: M | m
 *
 * @type {number}
 * @constant
 */
raylib.KEY_M = 77

/**
 * Key: N | n
 *
 * @type {number}
 * @constant
 */
raylib.KEY_N = 78

/**
 * Key: O | o
 *
 * @type {number}
 * @constant
 */
raylib.KEY_O = 79

/**
 * Key: P | p
 *
 * @type {number}
 * @constant
 */
raylib.KEY_P = 80

/**
 * Key: Q | q
 *
 * @type {number}
 * @constant
 */
raylib.KEY_Q = 81

/**
 * Key: R | r
 *
 * @type {number}
 * @constant
 */
raylib.KEY_R = 82

/**
 * Key: S | s
 *
 * @type {number}
 * @constant
 */
raylib.KEY_S = 83

/**
 * Key: T | t
 *
 * @type {number}
 * @constant
 */
raylib.KEY_T = 84

/**
 * Key: U | u
 *
 * @type {number}
 * @constant
 */
raylib.KEY_U = 85

/**
 * Key: V | v
 *
 * @type {number}
 * @constant
 */
raylib.KEY_V = 86

/**
 * Key: W | w
 *
 * @type {number}
 * @constant
 */
raylib.KEY_W = 87

/**
 * Key: X | x
 *
 * @type {number}
 * @constant
 */
raylib.KEY_X = 88

/**
 * Key: Y | y
 *
 * @type {number}
 * @constant
 */
raylib.KEY_Y = 89

/**
 * Key: Z | z
 *
 * @type {number}
 * @constant
 */
raylib.KEY_Z = 90

/**
 * Key: [
 *
 * @type {number}
 * @constant
 */
raylib.KEY_LEFT_BRACKET = 91

/**
 * Key: '\'
 *
 * @type {number}
 * @constant
 */
raylib.KEY_BACKSLASH = 92

/**
 * Key: ]
 *
 * @type {number}
 * @constant
 */
raylib.KEY_RIGHT_BRACKET = 93

/**
 * Key: `
 *
 * @type {number}
 * @constant
 */
raylib.KEY_GRAVE = 96

/**
 * Key: Space
 *
 * @type {number}
 * @constant
 */
raylib.KEY_SPACE = 32

/**
 * Key: Esc
 *
 * @type {number}
 * @constant
 */
raylib.KEY_ESCAPE = 256

/**
 * Key: Enter
 *
 * @type {number}
 * @constant
 */
raylib.KEY_ENTER = 257

/**
 * Key: Tab
 *
 * @type {number}
 * @constant
 */
raylib.KEY_TAB = 258

/**
 * Key: Backspace
 *
 * @type {number}
 * @constant
 */
raylib.KEY_BACKSPACE = 259

/**
 * Key: Ins
 *
 * @type {number}
 * @constant
 */
raylib.KEY_INSERT = 260

/**
 * Key: Del
 *
 * @type {number}
 * @constant
 */
raylib.KEY_DELETE = 261

/**
 * Key: Cursor right
 *
 * @type {number}
 * @constant
 */
raylib.KEY_RIGHT = 262

/**
 * Key: Cursor left
 *
 * @type {number}
 * @constant
 */
raylib.KEY_LEFT = 263

/**
 * Key: Cursor down
 *
 * @type {number}
 * @constant
 */
raylib.KEY_DOWN = 264

/**
 * Key: Cursor up
 *
 * @type {number}
 * @constant
 */
raylib.KEY_UP = 265

/**
 * Key: Page up
 *
 * @type {number}
 * @constant
 */
raylib.KEY_PAGE_UP = 266

/**
 * Key: Page down
 *
 * @type {number}
 * @constant
 */
raylib.KEY_PAGE_DOWN = 267

/**
 * Key: Home
 *
 * @type {number}
 * @constant
 */
raylib.KEY_HOME = 268

/**
 * Key: End
 *
 * @type {number}
 * @constant
 */
raylib.KEY_END = 269

/**
 * Key: Caps lock
 *
 * @type {number}
 * @constant
 */
raylib.KEY_CAPS_LOCK = 280

/**
 * Key: Scroll down
 *
 * @type {number}
 * @constant
 */
raylib.KEY_SCROLL_LOCK = 281

/**
 * Key: Num lock
 *
 * @type {number}
 * @constant
 */
raylib.KEY_NUM_LOCK = 282

/**
 * Key: Print screen
 *
 * @type {number}
 * @constant
 */
raylib.KEY_PRINT_SCREEN = 283

/**
 * Key: Pause
 *
 * @type {number}
 * @constant
 */
raylib.KEY_PAUSE = 284

/**
 * Key: F1
 *
 * @type {number}
 * @constant
 */
raylib.KEY_F1 = 290

/**
 * Key: F2
 *
 * @type {number}
 * @constant
 */
raylib.KEY_F2 = 291

/**
 * Key: F3
 *
 * @type {number}
 * @constant
 */
raylib.KEY_F3 = 292

/**
 * Key: F4
 *
 * @type {number}
 * @constant
 */
raylib.KEY_F4 = 293

/**
 * Key: F5
 *
 * @type {number}
 * @constant
 */
raylib.KEY_F5 = 294

/**
 * Key: F6
 *
 * @type {number}
 * @constant
 */
raylib.KEY_F6 = 295

/**
 * Key: F7
 *
 * @type {number}
 * @constant
 */
raylib.KEY_F7 = 296

/**
 * Key: F8
 *
 * @type {number}
 * @constant
 */
raylib.KEY_F8 = 297

/**
 * Key: F9
 *
 * @type {number}
 * @constant
 */
raylib.KEY_F9 = 298

/**
 * Key: F10
 *
 * @type {number}
 * @constant
 */
raylib.KEY_F10 = 299

/**
 * Key: F11
 *
 * @type {number}
 * @constant
 */
raylib.KEY_F11 = 300

/**
 * Key: F12
 *
 * @type {number}
 * @constant
 */
raylib.KEY_F12 = 301

/**
 * Key: Shift left
 *
 * @type {number}
 * @constant
 */
raylib.KEY_LEFT_SHIFT = 340

/**
 * Key: Control left
 *
 * @type {number}
 * @constant
 */
raylib.KEY_LEFT_CONTROL = 341

/**
 * Key: Alt left
 *
 * @type {number}
 * @constant
 */
raylib.KEY_LEFT_ALT = 342

/**
 * Key: Super left
 *
 * @type {number}
 * @constant
 */
raylib.KEY_LEFT_SUPER = 343

/**
 * Key: Shift right
 *
 * @type {number}
 * @constant
 */
raylib.KEY_RIGHT_SHIFT = 344

/**
 * Key: Control right
 *
 * @type {number}
 * @constant
 */
raylib.KEY_RIGHT_CONTROL = 345

/**
 * Key: Alt right
 *
 * @type {number}
 * @constant
 */
raylib.KEY_RIGHT_ALT = 346

/**
 * Key: Super right
 *
 * @type {number}
 * @constant
 */
raylib.KEY_RIGHT_SUPER = 347

/**
 * Key: KB menu
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KB_MENU = 348

/**
 * Key: Keypad 0
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_0 = 320

/**
 * Key: Keypad 1
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_1 = 321

/**
 * Key: Keypad 2
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_2 = 322

/**
 * Key: Keypad 3
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_3 = 323

/**
 * Key: Keypad 4
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_4 = 324

/**
 * Key: Keypad 5
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_5 = 325

/**
 * Key: Keypad 6
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_6 = 326

/**
 * Key: Keypad 7
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_7 = 327

/**
 * Key: Keypad 8
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_8 = 328

/**
 * Key: Keypad 9
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_9 = 329

/**
 * Key: Keypad .
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_DECIMAL = 330

/**
 * Key: Keypad /
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_DIVIDE = 331

/**
 * Key: Keypad *
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_MULTIPLY = 332

/**
 * Key: Keypad -
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_SUBTRACT = 333

/**
 * Key: Keypad +
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_ADD = 334

/**
 * Key: Keypad Enter
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_ENTER = 335

/**
 * Key: Keypad =
 *
 * @type {number}
 * @constant
 */
raylib.KEY_KP_EQUAL = 336

/**
 * Key: Android back button
 *
 * @type {number}
 * @constant
 */
raylib.KEY_BACK = 4

/**
 * Key: Android menu button
 *
 * @type {number}
 * @constant
 */
raylib.KEY_MENU = 82

/**
 * Key: Android volume up button
 *
 * @type {number}
 * @constant
 */
raylib.KEY_VOLUME_UP = 24

/**
 * Key: Android volume down button
 *
 * @type {number}
 * @constant
 */
raylib.KEY_VOLUME_DOWN = 25

/**
 * Mouse button left
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_BUTTON_LEFT = 0

/**
 * Mouse button right
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_BUTTON_RIGHT = 1

/**
 * Mouse button middle (pressed wheel)
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_BUTTON_MIDDLE = 2

/**
 * Mouse button side (advanced mouse device)
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_BUTTON_SIDE = 3

/**
 * Mouse button extra (advanced mouse device)
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_BUTTON_EXTRA = 4

/**
 * Mouse button fordward (advanced mouse device)
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_BUTTON_FORWARD = 5

/**
 * Mouse button back (advanced mouse device)
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_BUTTON_BACK = 6

/**
 * Default pointer shape
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_CURSOR_DEFAULT = 0

/**
 * Arrow shape
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_CURSOR_ARROW = 1

/**
 * Text writing cursor shape
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_CURSOR_IBEAM = 2

/**
 * Cross shape
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_CURSOR_CROSSHAIR = 3

/**
 * Pointing hand cursor
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_CURSOR_POINTING_HAND = 4

/**
 * Horizontal resize/move arrow shape
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_CURSOR_RESIZE_EW = 5

/**
 * Vertical resize/move arrow shape
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_CURSOR_RESIZE_NS = 6

/**
 * Top-left to bottom-right diagonal resize/move arrow shape
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_CURSOR_RESIZE_NWSE = 7

/**
 * The top-right to bottom-left diagonal resize/move arrow shape
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_CURSOR_RESIZE_NESW = 8

/**
 * The omni-directional resize/move cursor shape
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_CURSOR_RESIZE_ALL = 9

/**
 * The operation-not-allowed shape
 *
 * @type {number}
 * @constant
 */
raylib.MOUSE_CURSOR_NOT_ALLOWED = 10

/**
 * Unknown button, just for error checking
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_UNKNOWN = 0

/**
 * Gamepad left DPAD up button
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_LEFT_FACE_UP = 1

/**
 * Gamepad left DPAD right button
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_LEFT_FACE_RIGHT = 2

/**
 * Gamepad left DPAD down button
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_LEFT_FACE_DOWN = 3

/**
 * Gamepad left DPAD left button
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_LEFT_FACE_LEFT = 4

/**
 * Gamepad right button up (i.e. PS3: Triangle, Xbox: Y)
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_RIGHT_FACE_UP = 5

/**
 * Gamepad right button right (i.e. PS3: Square, Xbox: X)
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_RIGHT_FACE_RIGHT = 6

/**
 * Gamepad right button down (i.e. PS3: Cross, Xbox: A)
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_RIGHT_FACE_DOWN = 7

/**
 * Gamepad right button left (i.e. PS3: Circle, Xbox: B)
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_RIGHT_FACE_LEFT = 8

/**
 * Gamepad top/back trigger left (first), it could be a trailing button
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_1 = 9

/**
 * Gamepad top/back trigger left (second), it could be a trailing button
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_2 = 10

/**
 * Gamepad top/back trigger right (one), it could be a trailing button
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_1 = 11

/**
 * Gamepad top/back trigger right (second), it could be a trailing button
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_2 = 12

/**
 * Gamepad center buttons, left one (i.e. PS3: Select)
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_MIDDLE_LEFT = 13

/**
 * Gamepad center buttons, middle one (i.e. PS3: PS, Xbox: XBOX)
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_MIDDLE = 14

/**
 * Gamepad center buttons, right one (i.e. PS3: Start)
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_MIDDLE_RIGHT = 15

/**
 * Gamepad joystick pressed button left
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_LEFT_THUMB = 16

/**
 * Gamepad joystick pressed button right
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_BUTTON_RIGHT_THUMB = 17

/**
 * Gamepad left stick X axis
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_AXIS_LEFT_X = 0

/**
 * Gamepad left stick Y axis
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_AXIS_LEFT_Y = 1

/**
 * Gamepad right stick X axis
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_AXIS_RIGHT_X = 2

/**
 * Gamepad right stick Y axis
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_AXIS_RIGHT_Y = 3

/**
 * Gamepad back trigger left, pressure level: [1..-1]
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_AXIS_LEFT_TRIGGER = 4

/**
 * Gamepad back trigger right, pressure level: [1..-1]
 *
 * @type {number}
 * @constant
 */
raylib.GAMEPAD_AXIS_RIGHT_TRIGGER = 5

/**
 * Albedo material (same as: MATERIAL_MAP_DIFFUSE)
 *
 * @type {number}
 * @constant
 */
raylib.MATERIAL_MAP_ALBEDO = 0

/**
 * Metalness material (same as: MATERIAL_MAP_SPECULAR)
 *
 * @type {number}
 * @constant
 */
raylib.MATERIAL_MAP_METALNESS = 1

/**
 * Normal material
 *
 * @type {number}
 * @constant
 */
raylib.MATERIAL_MAP_NORMAL = 2

/**
 * Roughness material
 *
 * @type {number}
 * @constant
 */
raylib.MATERIAL_MAP_ROUGHNESS = 3

/**
 * Ambient occlusion material
 *
 * @type {number}
 * @constant
 */
raylib.MATERIAL_MAP_OCCLUSION = 4

/**
 * Emission material
 *
 * @type {number}
 * @constant
 */
raylib.MATERIAL_MAP_EMISSION = 5

/**
 * Heightmap material
 *
 * @type {number}
 * @constant
 */
raylib.MATERIAL_MAP_HEIGHT = 6

/**
 * Cubemap material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
 *
 * @type {number}
 * @constant
 */
raylib.MATERIAL_MAP_CUBEMAP = 7

/**
 * Irradiance material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
 *
 * @type {number}
 * @constant
 */
raylib.MATERIAL_MAP_IRRADIANCE = 8

/**
 * Prefilter material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
 *
 * @type {number}
 * @constant
 */
raylib.MATERIAL_MAP_PREFILTER = 9

/**
 * Brdf material
 *
 * @type {number}
 * @constant
 */
raylib.MATERIAL_MAP_BRDF = 10

/**
 * Shader location: vertex attribute: position
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_VERTEX_POSITION = 0

/**
 * Shader location: vertex attribute: texcoord01
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_VERTEX_TEXCOORD01 = 1

/**
 * Shader location: vertex attribute: texcoord02
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_VERTEX_TEXCOORD02 = 2

/**
 * Shader location: vertex attribute: normal
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_VERTEX_NORMAL = 3

/**
 * Shader location: vertex attribute: tangent
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_VERTEX_TANGENT = 4

/**
 * Shader location: vertex attribute: color
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_VERTEX_COLOR = 5

/**
 * Shader location: matrix uniform: model-view-projection
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MATRIX_MVP = 6

/**
 * Shader location: matrix uniform: view (camera transform)
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MATRIX_VIEW = 7

/**
 * Shader location: matrix uniform: projection
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MATRIX_PROJECTION = 8

/**
 * Shader location: matrix uniform: model (transform)
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MATRIX_MODEL = 9

/**
 * Shader location: matrix uniform: normal
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MATRIX_NORMAL = 10

/**
 * Shader location: vector uniform: view
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_VECTOR_VIEW = 11

/**
 * Shader location: vector uniform: diffuse color
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_COLOR_DIFFUSE = 12

/**
 * Shader location: vector uniform: specular color
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_COLOR_SPECULAR = 13

/**
 * Shader location: vector uniform: ambient color
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_COLOR_AMBIENT = 14

/**
 * Shader location: sampler2d texture: albedo (same as: SHADER_LOC_MAP_DIFFUSE)
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MAP_ALBEDO = 15

/**
 * Shader location: sampler2d texture: metalness (same as: SHADER_LOC_MAP_SPECULAR)
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MAP_METALNESS = 16

/**
 * Shader location: sampler2d texture: normal
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MAP_NORMAL = 17

/**
 * Shader location: sampler2d texture: roughness
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MAP_ROUGHNESS = 18

/**
 * Shader location: sampler2d texture: occlusion
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MAP_OCCLUSION = 19

/**
 * Shader location: sampler2d texture: emission
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MAP_EMISSION = 20

/**
 * Shader location: sampler2d texture: height
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MAP_HEIGHT = 21

/**
 * Shader location: samplerCube texture: cubemap
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MAP_CUBEMAP = 22

/**
 * Shader location: samplerCube texture: irradiance
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MAP_IRRADIANCE = 23

/**
 * Shader location: samplerCube texture: prefilter
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MAP_PREFILTER = 24

/**
 * Shader location: sampler2d texture: brdf
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_MAP_BRDF = 25

/**
 * Shader uniform type: float
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_UNIFORM_FLOAT = 0

/**
 * Shader uniform type: vec2 (2 float)
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_UNIFORM_VEC2 = 1

/**
 * Shader uniform type: vec3 (3 float)
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_UNIFORM_VEC3 = 2

/**
 * Shader uniform type: vec4 (4 float)
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_UNIFORM_VEC4 = 3

/**
 * Shader uniform type: int
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_UNIFORM_INT = 4

/**
 * Shader uniform type: ivec2 (2 int)
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_UNIFORM_IVEC2 = 5

/**
 * Shader uniform type: ivec3 (3 int)
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_UNIFORM_IVEC3 = 6

/**
 * Shader uniform type: ivec4 (4 int)
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_UNIFORM_IVEC4 = 7

/**
 * Shader uniform type: sampler2d
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_UNIFORM_SAMPLER2D = 8

/**
 * Shader attribute type: float
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_ATTRIB_FLOAT = 0

/**
 * Shader attribute type: vec2 (2 float)
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_ATTRIB_VEC2 = 1

/**
 * Shader attribute type: vec3 (3 float)
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_ATTRIB_VEC3 = 2

/**
 * Shader attribute type: vec4 (4 float)
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_ATTRIB_VEC4 = 3

/**
 * 8 bit per pixel (no alpha)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = 1

/**
 * 8*2 bpp (2 channels)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = 2

/**
 * 16 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_UNCOMPRESSED_R5G6B5 = 3

/**
 * 24 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8 = 4

/**
 * 16 bpp (1 bit alpha)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = 5

/**
 * 16 bpp (4 bit alpha)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = 6

/**
 * 32 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = 7

/**
 * 32 bpp (1 channel - float)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_UNCOMPRESSED_R32 = 8

/**
 * 32*3 bpp (3 channels - float)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32 = 9

/**
 * 32*4 bpp (4 channels - float)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = 10

/**
 * 4 bpp (no alpha)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_DXT1_RGB = 11

/**
 * 4 bpp (1 bit alpha)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_DXT1_RGBA = 12

/**
 * 8 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_DXT3_RGBA = 13

/**
 * 8 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_DXT5_RGBA = 14

/**
 * 4 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_ETC1_RGB = 15

/**
 * 4 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_ETC2_RGB = 16

/**
 * 8 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 17

/**
 * 4 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_PVRT_RGB = 18

/**
 * 4 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_PVRT_RGBA = 19

/**
 * 8 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 20

/**
 * 2 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 21

/**
 * No filter, just pixel approximation
 *
 * @type {number}
 * @constant
 */
raylib.TEXTURE_FILTER_POINT = 0

/**
 * Linear filtering
 *
 * @type {number}
 * @constant
 */
raylib.TEXTURE_FILTER_BILINEAR = 1

/**
 * Trilinear filtering (linear with mipmaps)
 *
 * @type {number}
 * @constant
 */
raylib.TEXTURE_FILTER_TRILINEAR = 2

/**
 * Anisotropic filtering 4x
 *
 * @type {number}
 * @constant
 */
raylib.TEXTURE_FILTER_ANISOTROPIC_4X = 3

/**
 * Anisotropic filtering 8x
 *
 * @type {number}
 * @constant
 */
raylib.TEXTURE_FILTER_ANISOTROPIC_8X = 4

/**
 * Anisotropic filtering 16x
 *
 * @type {number}
 * @constant
 */
raylib.TEXTURE_FILTER_ANISOTROPIC_16X = 5

/**
 * Repeats texture in tiled mode
 *
 * @type {number}
 * @constant
 */
raylib.TEXTURE_WRAP_REPEAT = 0

/**
 * Clamps texture to edge pixel in tiled mode
 *
 * @type {number}
 * @constant
 */
raylib.TEXTURE_WRAP_CLAMP = 1

/**
 * Mirrors and repeats the texture in tiled mode
 *
 * @type {number}
 * @constant
 */
raylib.TEXTURE_WRAP_MIRROR_REPEAT = 2

/**
 * Mirrors and clamps to border the texture in tiled mode
 *
 * @type {number}
 * @constant
 */
raylib.TEXTURE_WRAP_MIRROR_CLAMP = 3

/**
 * Automatically detect layout type
 *
 * @type {number}
 * @constant
 */
raylib.CUBEMAP_LAYOUT_AUTO_DETECT = 0

/**
 * Layout is defined by a vertical line with faces
 *
 * @type {number}
 * @constant
 */
raylib.CUBEMAP_LAYOUT_LINE_VERTICAL = 1

/**
 * Layout is defined by an horizontal line with faces
 *
 * @type {number}
 * @constant
 */
raylib.CUBEMAP_LAYOUT_LINE_HORIZONTAL = 2

/**
 * Layout is defined by a 3x4 cross with cubemap faces
 *
 * @type {number}
 * @constant
 */
raylib.CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR = 3

/**
 * Layout is defined by a 4x3 cross with cubemap faces
 *
 * @type {number}
 * @constant
 */
raylib.CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE = 4

/**
 * Layout is defined by a panorama image (equirectangular map)
 *
 * @type {number}
 * @constant
 */
raylib.CUBEMAP_LAYOUT_PANORAMA = 5

/**
 * Default font generation, anti-aliased
 *
 * @type {number}
 * @constant
 */
raylib.FONT_DEFAULT = 0

/**
 * Bitmap font generation, no anti-aliasing
 *
 * @type {number}
 * @constant
 */
raylib.FONT_BITMAP = 1

/**
 * SDF font generation, requires external shader
 *
 * @type {number}
 * @constant
 */
raylib.FONT_SDF = 2

/**
 * Blend textures considering alpha (default)
 *
 * @type {number}
 * @constant
 */
raylib.BLEND_ALPHA = 0

/**
 * Blend textures adding colors
 *
 * @type {number}
 * @constant
 */
raylib.BLEND_ADDITIVE = 1

/**
 * Blend textures multiplying colors
 *
 * @type {number}
 * @constant
 */
raylib.BLEND_MULTIPLIED = 2

/**
 * Blend textures adding colors (alternative)
 *
 * @type {number}
 * @constant
 */
raylib.BLEND_ADD_COLORS = 3

/**
 * Blend textures subtracting colors (alternative)
 *
 * @type {number}
 * @constant
 */
raylib.BLEND_SUBTRACT_COLORS = 4

/**
 * Belnd textures using custom src/dst factors (use rlSetBlendMode())
 *
 * @type {number}
 * @constant
 */
raylib.BLEND_CUSTOM = 5

/**
 * No gesture
 *
 * @type {number}
 * @constant
 */
raylib.GESTURE_NONE = 0

/**
 * Tap gesture
 *
 * @type {number}
 * @constant
 */
raylib.GESTURE_TAP = 1

/**
 * Double tap gesture
 *
 * @type {number}
 * @constant
 */
raylib.GESTURE_DOUBLETAP = 2

/**
 * Hold gesture
 *
 * @type {number}
 * @constant
 */
raylib.GESTURE_HOLD = 4

/**
 * Drag gesture
 *
 * @type {number}
 * @constant
 */
raylib.GESTURE_DRAG = 8

/**
 * Swipe right gesture
 *
 * @type {number}
 * @constant
 */
raylib.GESTURE_SWIPE_RIGHT = 16

/**
 * Swipe left gesture
 *
 * @type {number}
 * @constant
 */
raylib.GESTURE_SWIPE_LEFT = 32

/**
 * Swipe up gesture
 *
 * @type {number}
 * @constant
 */
raylib.GESTURE_SWIPE_UP = 64

/**
 * Swipe down gesture
 *
 * @type {number}
 * @constant
 */
raylib.GESTURE_SWIPE_DOWN = 128

/**
 * Pinch in gesture
 *
 * @type {number}
 * @constant
 */
raylib.GESTURE_PINCH_IN = 256

/**
 * Pinch out gesture
 *
 * @type {number}
 * @constant
 */
raylib.GESTURE_PINCH_OUT = 512

/**
 * Custom camera
 *
 * @type {number}
 * @constant
 */
raylib.CAMERA_CUSTOM = 0

/**
 * Free camera
 *
 * @type {number}
 * @constant
 */
raylib.CAMERA_FREE = 1

/**
 * Orbital camera
 *
 * @type {number}
 * @constant
 */
raylib.CAMERA_ORBITAL = 2

/**
 * First person camera
 *
 * @type {number}
 * @constant
 */
raylib.CAMERA_FIRST_PERSON = 3

/**
 * Third person camera
 *
 * @type {number}
 * @constant
 */
raylib.CAMERA_THIRD_PERSON = 4

/**
 * Perspective projection
 *
 * @type {number}
 * @constant
 */
raylib.CAMERA_PERSPECTIVE = 0

/**
 * Orthographic projection
 *
 * @type {number}
 * @constant
 */
raylib.CAMERA_ORTHOGRAPHIC = 1

/**
 * Npatch layout: 3x3 tiles
 *
 * @type {number}
 * @constant
 */
raylib.NPATCH_NINE_PATCH = 0

/**
 * Npatch layout: 1x3 tiles
 *
 * @type {number}
 * @constant
 */
raylib.NPATCH_THREE_PATCH_VERTICAL = 1

/**
 * Npatch layout: 3x1 tiles
 *
 * @type {number}
 * @constant
 */
raylib.NPATCH_THREE_PATCH_HORIZONTAL = 2

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

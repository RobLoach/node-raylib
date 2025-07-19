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
 * Close window and unload OpenGL context
 *
 * @return {undefined}
 */
function CloseWindow() {
  return r.BindCloseWindow()
}
raylib.CloseWindow = CloseWindow

/**
 * Check if application should close (KEY_ESCAPE pressed or windows close icon clicked)
 *
 * @return {boolean} The resulting bool.
 */
function WindowShouldClose() {
  return r.BindWindowShouldClose()
}
raylib.WindowShouldClose = WindowShouldClose

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
 * Check if window is currently hidden
 *
 * @return {boolean} The resulting bool.
 */
function IsWindowHidden() {
  return r.BindIsWindowHidden()
}
raylib.IsWindowHidden = IsWindowHidden

/**
 * Check if window is currently minimized
 *
 * @return {boolean} The resulting bool.
 */
function IsWindowMinimized() {
  return r.BindIsWindowMinimized()
}
raylib.IsWindowMinimized = IsWindowMinimized

/**
 * Check if window is currently maximized
 *
 * @return {boolean} The resulting bool.
 */
function IsWindowMaximized() {
  return r.BindIsWindowMaximized()
}
raylib.IsWindowMaximized = IsWindowMaximized

/**
 * Check if window is currently focused
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
 * Set window configuration state using flags
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
 * Toggle window state: fullscreen/windowed, resizes monitor to match window resolution
 *
 * @return {undefined}
 */
function ToggleFullscreen() {
  return r.BindToggleFullscreen()
}
raylib.ToggleFullscreen = ToggleFullscreen

/**
 * Toggle window state: borderless windowed, resizes window to match monitor resolution
 *
 * @return {undefined}
 */
function ToggleBorderlessWindowed() {
  return r.BindToggleBorderlessWindowed()
}
raylib.ToggleBorderlessWindowed = ToggleBorderlessWindowed

/**
 * Set window state: maximized, if resizable
 *
 * @return {undefined}
 */
function MaximizeWindow() {
  return r.BindMaximizeWindow()
}
raylib.MaximizeWindow = MaximizeWindow

/**
 * Set window state: minimized, if resizable
 *
 * @return {undefined}
 */
function MinimizeWindow() {
  return r.BindMinimizeWindow()
}
raylib.MinimizeWindow = MinimizeWindow

/**
 * Set window state: not minimized/maximized
 *
 * @return {undefined}
 */
function RestoreWindow() {
  return r.BindRestoreWindow()
}
raylib.RestoreWindow = RestoreWindow

/**
 * Set icon for window (single image, RGBA 32bit)
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
 * Set icon for window (multiple images, RGBA 32bit)
 *
 * @param {number} images
 * @param {number} count
 *
 * @return {undefined}
 */
function SetWindowIcons(images, count) {
  return r.BindSetWindowIcons(
    images,
    count
  )
}
raylib.SetWindowIcons = SetWindowIcons

/**
 * Set title for window
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
 * Set window position on screen
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
 * Set monitor for the current window
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
 * Set window maximum dimensions (for FLAG_WINDOW_RESIZABLE)
 *
 * @param {number} width
 * @param {number} height
 *
 * @return {undefined}
 */
function SetWindowMaxSize(width, height) {
  return r.BindSetWindowMaxSize(
    width,
    height
  )
}
raylib.SetWindowMaxSize = SetWindowMaxSize

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
 * Set window opacity [0.0f..1.0f]
 *
 * @param {number} opacity
 *
 * @return {undefined}
 */
function SetWindowOpacity(opacity) {
  return r.BindSetWindowOpacity(
    opacity
  )
}
raylib.SetWindowOpacity = SetWindowOpacity

/**
 * Set window focused
 *
 * @return {undefined}
 */
function SetWindowFocused() {
  return r.BindSetWindowFocused()
}
raylib.SetWindowFocused = SetWindowFocused

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
 * Get current render width (it considers HiDPI)
 *
 * @return {number} The resulting int.
 */
function GetRenderWidth() {
  return r.BindGetRenderWidth()
}
raylib.GetRenderWidth = GetRenderWidth

/**
 * Get current render height (it considers HiDPI)
 *
 * @return {number} The resulting int.
 */
function GetRenderHeight() {
  return r.BindGetRenderHeight()
}
raylib.GetRenderHeight = GetRenderHeight

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
 * Get current monitor where window is placed
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
 * Get specified monitor width (current video mode used by monitor)
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
 * Get specified monitor height (current video mode used by monitor)
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
 * Get the human-readable, UTF-8 encoded name of the specified monitor
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
 * Get clipboard image content
 *
 * @return {Image} The resulting Image.
 */
function GetClipboardImage() {
  return r.BindGetClipboardImage()
}
raylib.GetClipboardImage = GetClipboardImage

/**
 * Enable waiting for events on EndDrawing(), no automatic event polling
 *
 * @return {undefined}
 */
function EnableEventWaiting() {
  return r.BindEnableEventWaiting()
}
raylib.EnableEventWaiting = EnableEventWaiting

/**
 * Disable waiting for events on EndDrawing(), automatic events polling
 *
 * @return {undefined}
 */
function DisableEventWaiting() {
  return r.BindDisableEventWaiting()
}
raylib.DisableEventWaiting = DisableEventWaiting

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
 * @param {RenderTexture} target
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
 * Check if a shader is valid (loaded on GPU)
 *
 * @param {Shader} shader
 *
 * @return {boolean} The resulting bool.
 */
function IsShaderValid(shader) {
  return r.BindIsShaderValid(
    shader.id,
    shader.locs
  )
}
raylib.IsShaderValid = IsShaderValid

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
    mat.m4,
    mat.m8,
    mat.m12,
    mat.m1,
    mat.m5,
    mat.m9,
    mat.m13,
    mat.m2,
    mat.m6,
    mat.m10,
    mat.m14,
    mat.m3,
    mat.m7,
    mat.m11,
    mat.m15
  )
}
raylib.SetShaderValueMatrix = SetShaderValueMatrix

/**
 * Set shader uniform value for texture (sampler2d)
 *
 * @param {Shader} shader
 * @param {number} locIndex
 * @param {Texture} texture
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
 * Get a ray trace from screen position (i.e mouse)
 *
 * @param {Vector2} position
 * @param {Camera3D} camera
 *
 * @return {Ray} The resulting Ray.
 */
function GetScreenToWorldRay(position, camera) {
  return r.BindGetScreenToWorldRay(
    position.x,
    position.y,
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
raylib.GetScreenToWorldRay = GetScreenToWorldRay

/**
 * Get a ray trace from screen position (i.e mouse) in a viewport
 *
 * @param {Vector2} position
 * @param {Camera3D} camera
 * @param {number} width
 * @param {number} height
 *
 * @return {Ray} The resulting Ray.
 */
function GetScreenToWorldRayEx(position, camera, width, height) {
  return r.BindGetScreenToWorldRayEx(
    position.x,
    position.y,
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
raylib.GetScreenToWorldRayEx = GetScreenToWorldRayEx

/**
 * Get the screen space position for a 3d world space position
 *
 * @param {Vector3} position
 * @param {Camera3D} camera
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
 * @param {Camera3D} camera
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
 * Get camera transform matrix (view matrix)
 *
 * @param {Camera3D} camera
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
 * Get current FPS
 *
 * @return {number} The resulting int.
 */
function GetFPS() {
  return r.BindGetFPS()
}
raylib.GetFPS = GetFPS

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
 * Wait for some time (halt program execution)
 *
 * @param {number} seconds
 *
 * @return {undefined}
 */
function WaitTime(seconds) {
  return r.BindWaitTime(
    seconds
  )
}
raylib.WaitTime = WaitTime

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
 * Load random values sequence, no values repeated
 *
 * @param {number} count
 * @param {number} min
 * @param {number} max
 *
 * @return {number} The resulting int *.
 */
function LoadRandomSequence(count, min, max) {
  return r.BindLoadRandomSequence(
    count,
    min,
    max
  )
}
raylib.LoadRandomSequence = LoadRandomSequence

/**
 * Unload random values sequence
 *
 * @param {number} sequence
 *
 * @return {undefined}
 */
function UnloadRandomSequence(sequence) {
  return r.BindUnloadRandomSequence(
    sequence
  )
}
raylib.UnloadRandomSequence = UnloadRandomSequence

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
 * @param {number} dataSize
 *
 * @return {Buffer} The resulting unsigned char *.
 */
function LoadFileData(fileName, dataSize) {
  return r.BindLoadFileData(
    fileName,
    dataSize
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
 * @param {number} dataSize
 *
 * @return {boolean} The resulting bool.
 */
function SaveFileData(fileName, data, dataSize) {
  return r.BindSaveFileData(
    fileName,
    data,
    dataSize
  )
}
raylib.SaveFileData = SaveFileData

/**
 * Export data to code (.h), returns true on success
 *
 * @param {Buffer} data
 * @param {number} dataSize
 * @param {string} fileName
 *
 * @return {boolean} The resulting bool.
 */
function ExportDataAsCode(data, dataSize, fileName) {
  return r.BindExportDataAsCode(
    data,
    dataSize,
    fileName
  )
}
raylib.ExportDataAsCode = ExportDataAsCode

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
 * Get file length in bytes (NOTE: GetFileSize() conflicts with windows.h)
 *
 * @param {string} fileName
 *
 * @return {number} The resulting int.
 */
function GetFileLength(fileName) {
  return r.BindGetFileLength(
    fileName
  )
}
raylib.GetFileLength = GetFileLength

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
 * Get the directory of the running application (uses static string)
 *
 * @return {string} The resulting const char *.
 */
function GetApplicationDirectory() {
  return r.BindGetApplicationDirectory()
}
raylib.GetApplicationDirectory = GetApplicationDirectory

/**
 * Create directories (including full path requested), returns 0 on success
 *
 * @param {string} dirPath
 *
 * @return {number} The resulting int.
 */
function MakeDirectory(dirPath) {
  return r.BindMakeDirectory(
    dirPath
  )
}
raylib.MakeDirectory = MakeDirectory

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
 * Check if a given path is a file or a directory
 *
 * @param {string} path
 *
 * @return {boolean} The resulting bool.
 */
function IsPathFile(path) {
  return r.BindIsPathFile(
    path
  )
}
raylib.IsPathFile = IsPathFile

/**
 * Check if fileName is valid for the platform/OS
 *
 * @param {string} fileName
 *
 * @return {boolean} The resulting bool.
 */
function IsFileNameValid(fileName) {
  return r.BindIsFileNameValid(
    fileName
  )
}
raylib.IsFileNameValid = IsFileNameValid

/**
 * Load directory filepaths
 *
 * @param {string} dirPath
 *
 * @return {FilePathList} The resulting FilePathList.
 */
function LoadDirectoryFiles(dirPath) {
  return r.BindLoadDirectoryFiles(
    dirPath
  )
}
raylib.LoadDirectoryFiles = LoadDirectoryFiles

/**
 * Load directory filepaths with extension filtering and recursive directory scan. Use 'DIR' in the filter string to include directories in the result
 *
 * @param {string} basePath
 * @param {string} filter
 * @param {boolean} scanSubdirs
 *
 * @return {FilePathList} The resulting FilePathList.
 */
function LoadDirectoryFilesEx(basePath, filter, scanSubdirs) {
  return r.BindLoadDirectoryFilesEx(
    basePath,
    filter,
    scanSubdirs
  )
}
raylib.LoadDirectoryFilesEx = LoadDirectoryFilesEx

/**
 * Unload filepaths
 *
 * @param {FilePathList} files
 *
 * @return {undefined}
 */
function UnloadDirectoryFiles(files) {
  return r.BindUnloadDirectoryFiles(
    files.capacity,
    files.count,
    files.paths
  )
}
raylib.UnloadDirectoryFiles = UnloadDirectoryFiles

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
 * Load dropped filepaths
 *
 * @return {FilePathList} The resulting FilePathList.
 */
function LoadDroppedFiles() {
  return r.BindLoadDroppedFiles()
}
raylib.LoadDroppedFiles = LoadDroppedFiles

/**
 * Unload dropped filepaths
 *
 * @param {FilePathList} files
 *
 * @return {undefined}
 */
function UnloadDroppedFiles(files) {
  return r.BindUnloadDroppedFiles(
    files.capacity,
    files.count,
    files.paths
  )
}
raylib.UnloadDroppedFiles = UnloadDroppedFiles

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
 * Compress data (DEFLATE algorithm), memory must be MemFree()
 *
 * @param {Buffer} data
 * @param {number} dataSize
 * @param {number} compDataSize
 *
 * @return {Buffer} The resulting unsigned char *.
 */
function CompressData(data, dataSize, compDataSize) {
  return r.BindCompressData(
    data,
    dataSize,
    compDataSize
  )
}
raylib.CompressData = CompressData

/**
 * Decompress data (DEFLATE algorithm), memory must be MemFree()
 *
 * @param {Buffer} compData
 * @param {number} compDataSize
 * @param {number} dataSize
 *
 * @return {Buffer} The resulting unsigned char *.
 */
function DecompressData(compData, compDataSize, dataSize) {
  return r.BindDecompressData(
    compData,
    compDataSize,
    dataSize
  )
}
raylib.DecompressData = DecompressData

/**
 * Encode data to Base64 string, memory must be MemFree()
 *
 * @param {Buffer} data
 * @param {number} dataSize
 * @param {number} outputSize
 *
 * @return {string} The resulting char *.
 */
function EncodeDataBase64(data, dataSize, outputSize) {
  return r.BindEncodeDataBase64(
    data,
    dataSize,
    outputSize
  )
}
raylib.EncodeDataBase64 = EncodeDataBase64

/**
 * Decode Base64 string data, memory must be MemFree()
 *
 * @param {Buffer} data
 * @param {number} outputSize
 *
 * @return {Buffer} The resulting unsigned char *.
 */
function DecodeDataBase64(data, outputSize) {
  return r.BindDecodeDataBase64(
    data,
    outputSize
  )
}
raylib.DecodeDataBase64 = DecodeDataBase64

/**
 * Compute CRC32 hash code
 *
 * @param {Buffer} data
 * @param {number} dataSize
 *
 * @return {number} The resulting unsigned int.
 */
function ComputeCRC32(data, dataSize) {
  return r.BindComputeCRC32(
    data,
    dataSize
  )
}
raylib.ComputeCRC32 = ComputeCRC32

/**
 * Compute MD5 hash code, returns static int[4] (16 bytes)
 *
 * @param {Buffer} data
 * @param {number} dataSize
 *
 * @return {number} The resulting unsigned int *.
 */
function ComputeMD5(data, dataSize) {
  return r.BindComputeMD5(
    data,
    dataSize
  )
}
raylib.ComputeMD5 = ComputeMD5

/**
 * Compute SHA1 hash code, returns static int[5] (20 bytes)
 *
 * @param {Buffer} data
 * @param {number} dataSize
 *
 * @return {number} The resulting unsigned int *.
 */
function ComputeSHA1(data, dataSize) {
  return r.BindComputeSHA1(
    data,
    dataSize
  )
}
raylib.ComputeSHA1 = ComputeSHA1

/**
 * Load automation events list from file, NULL for empty list, capacity = MAX_AUTOMATION_EVENTS
 *
 * @param {string} fileName
 *
 * @return {AutomationEventList} The resulting AutomationEventList.
 */
function LoadAutomationEventList(fileName) {
  return r.BindLoadAutomationEventList(
    fileName
  )
}
raylib.LoadAutomationEventList = LoadAutomationEventList

/**
 * Unload automation events list from file
 *
 * @param {AutomationEventList} list
 *
 * @return {undefined}
 */
function UnloadAutomationEventList(list) {
  return r.BindUnloadAutomationEventList(
    list.capacity,
    list.count,
    list.events
  )
}
raylib.UnloadAutomationEventList = UnloadAutomationEventList

/**
 * Export automation events list as text file
 *
 * @param {AutomationEventList} list
 * @param {string} fileName
 *
 * @return {boolean} The resulting bool.
 */
function ExportAutomationEventList(list, fileName) {
  return r.BindExportAutomationEventList(
    list.capacity,
    list.count,
    list.events,
    fileName
  )
}
raylib.ExportAutomationEventList = ExportAutomationEventList

/**
 * Set automation event list to record to
 *
 * @param {number} list
 *
 * @return {undefined}
 */
function SetAutomationEventList(list) {
  return r.BindSetAutomationEventList(
    list
  )
}
raylib.SetAutomationEventList = SetAutomationEventList

/**
 * Set automation event internal base frame to start recording
 *
 * @param {number} frame
 *
 * @return {undefined}
 */
function SetAutomationEventBaseFrame(frame) {
  return r.BindSetAutomationEventBaseFrame(
    frame
  )
}
raylib.SetAutomationEventBaseFrame = SetAutomationEventBaseFrame

/**
 * Start recording automation events (AutomationEventList must be set)
 *
 * @return {undefined}
 */
function StartAutomationEventRecording() {
  return r.BindStartAutomationEventRecording()
}
raylib.StartAutomationEventRecording = StartAutomationEventRecording

/**
 * Stop recording automation events
 *
 * @return {undefined}
 */
function StopAutomationEventRecording() {
  return r.BindStopAutomationEventRecording()
}
raylib.StopAutomationEventRecording = StopAutomationEventRecording

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
 * Check if a key has been pressed again
 *
 * @param {number} key
 *
 * @return {boolean} The resulting bool.
 */
function IsKeyPressedRepeat(key) {
  return r.BindIsKeyPressedRepeat(
    key
  )
}
raylib.IsKeyPressedRepeat = IsKeyPressedRepeat

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
 * Set gamepad vibration for both motors (duration in seconds)
 *
 * @param {number} gamepad
 * @param {number} leftMotor
 * @param {number} rightMotor
 * @param {number} duration
 *
 * @return {undefined}
 */
function SetGamepadVibration(gamepad, leftMotor, rightMotor, duration) {
  return r.BindSetGamepadVibration(
    gamepad,
    leftMotor,
    rightMotor,
    duration
  )
}
raylib.SetGamepadVibration = SetGamepadVibration

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
 * Get mouse wheel movement for X or Y, whichever is larger
 *
 * @return {number} The resulting float.
 */
function GetMouseWheelMove() {
  return r.BindGetMouseWheelMove()
}
raylib.GetMouseWheelMove = GetMouseWheelMove

/**
 * Get mouse wheel movement for both X and Y
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetMouseWheelMoveV() {
  return r.BindGetMouseWheelMoveV()
}
raylib.GetMouseWheelMoveV = GetMouseWheelMoveV

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
 * Get gesture hold time in seconds
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
 * Update camera movement/rotation
 *
 * @param {number} camera
 * @param {Vector3} movement
 * @param {Vector3} rotation
 * @param {number} zoom
 *
 * @return {undefined}
 */
function UpdateCameraPro(camera, movement, rotation, zoom) {
  return r.BindUpdateCameraPro(
    camera,
    movement.x,
    movement.y,
    movement.z,
    rotation.x,
    rotation.y,
    rotation.z,
    zoom
  )
}
raylib.UpdateCameraPro = UpdateCameraPro

/**
 * Set texture and rectangle to be used on shapes drawing
 *
 * @param {Texture} texture
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
 * Get texture that is used for shapes drawing
 *
 * @return {Texture2D} The resulting Texture2D.
 */
function GetShapesTexture() {
  return r.BindGetShapesTexture()
}
raylib.GetShapesTexture = GetShapesTexture

/**
 * Get texture source rectangle that is used for shapes drawing
 *
 * @return {Rectangle} The resulting Rectangle.
 */
function GetShapesTextureRectangle() {
  return r.BindGetShapesTextureRectangle()
}
raylib.GetShapesTextureRectangle = GetShapesTextureRectangle

/**
 * Draw a pixel using geometry [Can be slow, use with care]
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
 * Draw a pixel using geometry (Vector version) [Can be slow, use with care]
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
 * Draw a line (using gl lines)
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
 * Draw a line (using triangles/quads)
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
 * Draw lines sequence (using gl lines)
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
 * Draw line segment cubic-bezier in-out interpolation
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
 * @param {Color} inner
 * @param {Color} outer
 *
 * @return {undefined}
 */
function DrawCircleGradient(centerX, centerY, radius, inner, outer) {
  return r.BindDrawCircleGradient(
    centerX,
    centerY,
    radius,
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
 * Draw circle outline (Vector version)
 *
 * @param {Vector2} center
 * @param {number} radius
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCircleLinesV(center, radius, color) {
  return r.BindDrawCircleLinesV(
    center.x,
    center.y,
    radius,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCircleLinesV = DrawCircleLinesV

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
 * @param {Color} top
 * @param {Color} bottom
 *
 * @return {undefined}
 */
function DrawRectangleGradientV(posX, posY, width, height, top, bottom) {
  return r.BindDrawRectangleGradientV(
    posX,
    posY,
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
raylib.DrawRectangleGradientV = DrawRectangleGradientV

/**
 * Draw a horizontal-gradient-filled rectangle
 *
 * @param {number} posX
 * @param {number} posY
 * @param {number} width
 * @param {number} height
 * @param {Color} left
 * @param {Color} right
 *
 * @return {undefined}
 */
function DrawRectangleGradientH(posX, posY, width, height, left, right) {
  return r.BindDrawRectangleGradientH(
    posX,
    posY,
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
raylib.DrawRectangleGradientH = DrawRectangleGradientH

/**
 * Draw a gradient-filled rectangle with custom vertex colors
 *
 * @param {Rectangle} rec
 * @param {Color} topLeft
 * @param {Color} bottomLeft
 * @param {Color} topRight
 * @param {Color} bottomRight
 *
 * @return {undefined}
 */
function DrawRectangleGradientEx(rec, topLeft, bottomLeft, topRight, bottomRight) {
  return r.BindDrawRectangleGradientEx(
    rec.x,
    rec.y,
    rec.width,
    rec.height,
    topLeft.r,
    topLeft.g,
    topLeft.b,
    topLeft.a,
    bottomLeft.r,
    bottomLeft.g,
    bottomLeft.b,
    bottomLeft.a,
    topRight.r,
    topRight.g,
    topRight.b,
    topRight.a,
    bottomRight.r,
    bottomRight.g,
    bottomRight.b,
    bottomRight.a
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
 * Draw rectangle lines with rounded edges
 *
 * @param {Rectangle} rec
 * @param {number} roundness
 * @param {number} segments
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawRectangleRoundedLines(rec, roundness, segments, color) {
  return r.BindDrawRectangleRoundedLines(
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
raylib.DrawRectangleRoundedLines = DrawRectangleRoundedLines

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
function DrawRectangleRoundedLinesEx(rec, roundness, segments, lineThick, color) {
  return r.BindDrawRectangleRoundedLinesEx(
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
raylib.DrawRectangleRoundedLinesEx = DrawRectangleRoundedLinesEx

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
 * Draw spline: Linear, minimum 2 points
 *
 * @param {number} points
 * @param {number} pointCount
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawSplineLinear(points, pointCount, thick, color) {
  return r.BindDrawSplineLinear(
    points,
    pointCount,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawSplineLinear = DrawSplineLinear

/**
 * Draw spline: B-Spline, minimum 4 points
 *
 * @param {number} points
 * @param {number} pointCount
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawSplineBasis(points, pointCount, thick, color) {
  return r.BindDrawSplineBasis(
    points,
    pointCount,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawSplineBasis = DrawSplineBasis

/**
 * Draw spline: Catmull-Rom, minimum 4 points
 *
 * @param {number} points
 * @param {number} pointCount
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawSplineCatmullRom(points, pointCount, thick, color) {
  return r.BindDrawSplineCatmullRom(
    points,
    pointCount,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawSplineCatmullRom = DrawSplineCatmullRom

/**
 * Draw spline: Quadratic Bezier, minimum 3 points (1 control point): [p1, c2, p3, c4...]
 *
 * @param {number} points
 * @param {number} pointCount
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawSplineBezierQuadratic(points, pointCount, thick, color) {
  return r.BindDrawSplineBezierQuadratic(
    points,
    pointCount,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawSplineBezierQuadratic = DrawSplineBezierQuadratic

/**
 * Draw spline: Cubic Bezier, minimum 4 points (2 control points): [p1, c2, c3, p4, c5, c6...]
 *
 * @param {number} points
 * @param {number} pointCount
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawSplineBezierCubic(points, pointCount, thick, color) {
  return r.BindDrawSplineBezierCubic(
    points,
    pointCount,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawSplineBezierCubic = DrawSplineBezierCubic

/**
 * Draw spline segment: Linear, 2 points
 *
 * @param {Vector2} p1
 * @param {Vector2} p2
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawSplineSegmentLinear(p1, p2, thick, color) {
  return r.BindDrawSplineSegmentLinear(
    p1.x,
    p1.y,
    p2.x,
    p2.y,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawSplineSegmentLinear = DrawSplineSegmentLinear

/**
 * Draw spline segment: B-Spline, 4 points
 *
 * @param {Vector2} p1
 * @param {Vector2} p2
 * @param {Vector2} p3
 * @param {Vector2} p4
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawSplineSegmentBasis(p1, p2, p3, p4, thick, color) {
  return r.BindDrawSplineSegmentBasis(
    p1.x,
    p1.y,
    p2.x,
    p2.y,
    p3.x,
    p3.y,
    p4.x,
    p4.y,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawSplineSegmentBasis = DrawSplineSegmentBasis

/**
 * Draw spline segment: Catmull-Rom, 4 points
 *
 * @param {Vector2} p1
 * @param {Vector2} p2
 * @param {Vector2} p3
 * @param {Vector2} p4
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawSplineSegmentCatmullRom(p1, p2, p3, p4, thick, color) {
  return r.BindDrawSplineSegmentCatmullRom(
    p1.x,
    p1.y,
    p2.x,
    p2.y,
    p3.x,
    p3.y,
    p4.x,
    p4.y,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawSplineSegmentCatmullRom = DrawSplineSegmentCatmullRom

/**
 * Draw spline segment: Quadratic Bezier, 2 points, 1 control point
 *
 * @param {Vector2} p1
 * @param {Vector2} c2
 * @param {Vector2} p3
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawSplineSegmentBezierQuadratic(p1, c2, p3, thick, color) {
  return r.BindDrawSplineSegmentBezierQuadratic(
    p1.x,
    p1.y,
    c2.x,
    c2.y,
    p3.x,
    p3.y,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawSplineSegmentBezierQuadratic = DrawSplineSegmentBezierQuadratic

/**
 * Draw spline segment: Cubic Bezier, 2 points, 2 control points
 *
 * @param {Vector2} p1
 * @param {Vector2} c2
 * @param {Vector2} c3
 * @param {Vector2} p4
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawSplineSegmentBezierCubic(p1, c2, c3, p4, thick, color) {
  return r.BindDrawSplineSegmentBezierCubic(
    p1.x,
    p1.y,
    c2.x,
    c2.y,
    c3.x,
    c3.y,
    p4.x,
    p4.y,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawSplineSegmentBezierCubic = DrawSplineSegmentBezierCubic

/**
 * Get (evaluate) spline point: Linear
 *
 * @param {Vector2} startPos
 * @param {Vector2} endPos
 * @param {number} t
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetSplinePointLinear(startPos, endPos, t) {
  return r.BindGetSplinePointLinear(
    startPos.x,
    startPos.y,
    endPos.x,
    endPos.y,
    t
  )
}
raylib.GetSplinePointLinear = GetSplinePointLinear

/**
 * Get (evaluate) spline point: B-Spline
 *
 * @param {Vector2} p1
 * @param {Vector2} p2
 * @param {Vector2} p3
 * @param {Vector2} p4
 * @param {number} t
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetSplinePointBasis(p1, p2, p3, p4, t) {
  return r.BindGetSplinePointBasis(
    p1.x,
    p1.y,
    p2.x,
    p2.y,
    p3.x,
    p3.y,
    p4.x,
    p4.y,
    t
  )
}
raylib.GetSplinePointBasis = GetSplinePointBasis

/**
 * Get (evaluate) spline point: Catmull-Rom
 *
 * @param {Vector2} p1
 * @param {Vector2} p2
 * @param {Vector2} p3
 * @param {Vector2} p4
 * @param {number} t
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetSplinePointCatmullRom(p1, p2, p3, p4, t) {
  return r.BindGetSplinePointCatmullRom(
    p1.x,
    p1.y,
    p2.x,
    p2.y,
    p3.x,
    p3.y,
    p4.x,
    p4.y,
    t
  )
}
raylib.GetSplinePointCatmullRom = GetSplinePointCatmullRom

/**
 * Get (evaluate) spline point: Quadratic Bezier
 *
 * @param {Vector2} p1
 * @param {Vector2} c2
 * @param {Vector2} p3
 * @param {number} t
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetSplinePointBezierQuad(p1, c2, p3, t) {
  return r.BindGetSplinePointBezierQuad(
    p1.x,
    p1.y,
    c2.x,
    c2.y,
    p3.x,
    p3.y,
    t
  )
}
raylib.GetSplinePointBezierQuad = GetSplinePointBezierQuad

/**
 * Get (evaluate) spline point: Cubic Bezier
 *
 * @param {Vector2} p1
 * @param {Vector2} c2
 * @param {Vector2} c3
 * @param {Vector2} p4
 * @param {number} t
 *
 * @return {Vector2} The resulting Vector2.
 */
function GetSplinePointBezierCubic(p1, c2, c3, p4, t) {
  return r.BindGetSplinePointBezierCubic(
    p1.x,
    p1.y,
    c2.x,
    c2.y,
    c3.x,
    c3.y,
    p4.x,
    p4.y,
    t
  )
}
raylib.GetSplinePointBezierCubic = GetSplinePointBezierCubic

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
 * Check if circle collides with a line created betweeen two points [p1] and [p2]
 *
 * @param {Vector2} center
 * @param {number} radius
 * @param {Vector2} p1
 * @param {Vector2} p2
 *
 * @return {boolean} The resulting bool.
 */
function CheckCollisionCircleLine(center, radius, p1, p2) {
  return r.BindCheckCollisionCircleLine(
    center.x,
    center.y,
    radius,
    p1.x,
    p1.y,
    p2.x,
    p2.y
  )
}
raylib.CheckCollisionCircleLine = CheckCollisionCircleLine

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
 * Check if point is within a polygon described by array of vertices
 *
 * @param {Vector2} point
 * @param {number} points
 * @param {number} pointCount
 *
 * @return {boolean} The resulting bool.
 */
function CheckCollisionPointPoly(point, points, pointCount) {
  return r.BindCheckCollisionPointPoly(
    point.x,
    point.y,
    points,
    pointCount
  )
}
raylib.CheckCollisionPointPoly = CheckCollisionPointPoly

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
 * Load image sequence from memory buffer
 *
 * @param {string} fileType
 * @param {Buffer} fileData
 * @param {number} dataSize
 * @param {number} frames
 *
 * @return {Image} The resulting Image.
 */
function LoadImageAnimFromMemory(fileType, fileData, dataSize, frames) {
  return r.BindLoadImageAnimFromMemory(
    fileType,
    fileData,
    dataSize,
    frames
  )
}
raylib.LoadImageAnimFromMemory = LoadImageAnimFromMemory

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
 * @param {Texture} texture
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
 * Check if an image is valid (data and parameters)
 *
 * @param {Image} image
 *
 * @return {boolean} The resulting bool.
 */
function IsImageValid(image) {
  return r.BindIsImageValid(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
}
raylib.IsImageValid = IsImageValid

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
 * Export image to memory buffer
 *
 * @param {Image} image
 * @param {string} fileType
 * @param {number} fileSize
 *
 * @return {Buffer} The resulting unsigned char *.
 */
function ExportImageToMemory(image, fileType, fileSize) {
  return r.BindExportImageToMemory(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    fileType,
    fileSize
  )
}
raylib.ExportImageToMemory = ExportImageToMemory

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
 * Generate image: linear gradient, direction in degrees [0..360], 0=Vertical gradient
 *
 * @param {number} width
 * @param {number} height
 * @param {number} direction
 * @param {Color} start
 * @param {Color} end
 *
 * @return {Image} The resulting Image.
 */
function GenImageGradientLinear(width, height, direction, start, end) {
  return r.BindGenImageGradientLinear(
    width,
    height,
    direction,
    start.r,
    start.g,
    start.b,
    start.a,
    end.r,
    end.g,
    end.b,
    end.a
  )
}
raylib.GenImageGradientLinear = GenImageGradientLinear

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
 * Generate image: square gradient
 *
 * @param {number} width
 * @param {number} height
 * @param {number} density
 * @param {Color} inner
 * @param {Color} outer
 *
 * @return {Image} The resulting Image.
 */
function GenImageGradientSquare(width, height, density, inner, outer) {
  return r.BindGenImageGradientSquare(
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
raylib.GenImageGradientSquare = GenImageGradientSquare

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
 * Generate image: perlin noise
 *
 * @param {number} width
 * @param {number} height
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} scale
 *
 * @return {Image} The resulting Image.
 */
function GenImagePerlinNoise(width, height, offsetX, offsetY, scale) {
  return r.BindGenImagePerlinNoise(
    width,
    height,
    offsetX,
    offsetY,
    scale
  )
}
raylib.GenImagePerlinNoise = GenImagePerlinNoise

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
 * Generate image: grayscale image from text data
 *
 * @param {number} width
 * @param {number} height
 * @param {string} text
 *
 * @return {Image} The resulting Image.
 */
function GenImageText(width, height, text) {
  return r.BindGenImageText(
    width,
    height,
    text
  )
}
raylib.GenImageText = GenImageText

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
 * Create an image from a selected channel of another image (GRAYSCALE)
 *
 * @param {Image} image
 * @param {number} selectedChannel
 *
 * @return {Image} The resulting Image.
 */
function ImageFromChannel(image, selectedChannel) {
  return r.BindImageFromChannel(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    selectedChannel
  )
}
raylib.ImageFromChannel = ImageFromChannel

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
 * Apply Gaussian blur using a box blur approximation
 *
 * @param {number} image
 * @param {number} blurSize
 *
 * @return {undefined}
 */
function ImageBlurGaussian(image, blurSize) {
  return r.BindImageBlurGaussian(
    image,
    blurSize
  )
}
raylib.ImageBlurGaussian = ImageBlurGaussian

/**
 * Apply custom square convolution kernel to image
 *
 * @param {number} image
 * @param {number} kernel
 * @param {number} kernelSize
 *
 * @return {undefined}
 */
function ImageKernelConvolution(image, kernel, kernelSize) {
  return r.BindImageKernelConvolution(
    image,
    kernel,
    kernelSize
  )
}
raylib.ImageKernelConvolution = ImageKernelConvolution

/**
 * Rotate image by input angle in degrees (-359 to 359)
 *
 * @param {number} image
 * @param {number} degrees
 *
 * @return {undefined}
 */
function ImageRotate(image, degrees) {
  return r.BindImageRotate(
    image,
    degrees
  )
}
raylib.ImageRotate = ImageRotate

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
 * Draw a line defining thickness within an image
 *
 * @param {number} dst
 * @param {Vector2} start
 * @param {Vector2} end
 * @param {number} thick
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawLineEx(dst, start, end, thick, color) {
  return r.BindImageDrawLineEx(
    dst,
    start.x,
    start.y,
    end.x,
    end.y,
    thick,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.ImageDrawLineEx = ImageDrawLineEx

/**
 * Draw circle outline within an image
 *
 * @param {number} dst
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} radius
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawCircleLines(dst, centerX, centerY, radius, color) {
  return r.BindImageDrawCircleLines(
    dst,
    centerX,
    centerY,
    radius,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.ImageDrawCircleLines = ImageDrawCircleLines

/**
 * Draw circle outline within an image (Vector version)
 *
 * @param {number} dst
 * @param {Vector2} center
 * @param {number} radius
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawCircleLinesV(dst, center, radius, color) {
  return r.BindImageDrawCircleLinesV(
    dst,
    center.x,
    center.y,
    radius,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.ImageDrawCircleLinesV = ImageDrawCircleLinesV

/**
 * Draw triangle within an image
 *
 * @param {number} dst
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @param {Vector2} v3
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawTriangle(dst, v1, v2, v3, color) {
  return r.BindImageDrawTriangle(
    dst,
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
raylib.ImageDrawTriangle = ImageDrawTriangle

/**
 * Draw triangle with interpolated colors within an image
 *
 * @param {number} dst
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @param {Vector2} v3
 * @param {Color} c1
 * @param {Color} c2
 * @param {Color} c3
 *
 * @return {undefined}
 */
function ImageDrawTriangleEx(dst, v1, v2, v3, c1, c2, c3) {
  return r.BindImageDrawTriangleEx(
    dst,
    v1.x,
    v1.y,
    v2.x,
    v2.y,
    v3.x,
    v3.y,
    c1.r,
    c1.g,
    c1.b,
    c1.a,
    c2.r,
    c2.g,
    c2.b,
    c2.a,
    c3.r,
    c3.g,
    c3.b,
    c3.a
  )
}
raylib.ImageDrawTriangleEx = ImageDrawTriangleEx

/**
 * Draw triangle outline within an image
 *
 * @param {number} dst
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @param {Vector2} v3
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawTriangleLines(dst, v1, v2, v3, color) {
  return r.BindImageDrawTriangleLines(
    dst,
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
raylib.ImageDrawTriangleLines = ImageDrawTriangleLines

/**
 * Draw a triangle fan defined by points within an image (first vertex is the center)
 *
 * @param {number} dst
 * @param {number} points
 * @param {number} pointCount
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawTriangleFan(dst, points, pointCount, color) {
  return r.BindImageDrawTriangleFan(
    dst,
    points,
    pointCount,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.ImageDrawTriangleFan = ImageDrawTriangleFan

/**
 * Draw a triangle strip defined by points within an image
 *
 * @param {number} dst
 * @param {number} points
 * @param {number} pointCount
 * @param {Color} color
 *
 * @return {undefined}
 */
function ImageDrawTriangleStrip(dst, points, pointCount, color) {
  return r.BindImageDrawTriangleStrip(
    dst,
    points,
    pointCount,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.ImageDrawTriangleStrip = ImageDrawTriangleStrip

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
 * Check if a texture is valid (loaded in GPU)
 *
 * @param {Texture} texture
 *
 * @return {boolean} The resulting bool.
 */
function IsTextureValid(texture) {
  return r.BindIsTextureValid(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format
  )
}
raylib.IsTextureValid = IsTextureValid

/**
 * Unload texture from GPU memory (VRAM)
 *
 * @param {Texture} texture
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
 * Check if a render texture is valid (loaded in GPU)
 *
 * @param {RenderTexture} target
 *
 * @return {boolean} The resulting bool.
 */
function IsRenderTextureValid(target) {
  return r.BindIsRenderTextureValid(
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
raylib.IsRenderTextureValid = IsRenderTextureValid

/**
 * Unload render texture from GPU memory (VRAM)
 *
 * @param {RenderTexture} target
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
 * @param {Texture} texture
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
 * @param {Texture} texture
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
 * @param {Texture} texture
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
 * @param {Texture} texture
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
 * @param {Texture} texture
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
 * @param {Texture} texture
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
 * @param {Texture} texture
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
 * @param {Texture} texture
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
 * Draw a part of a texture defined by a rectangle with 'pro' parameters
 *
 * @param {Texture} texture
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
 * @param {Texture} texture
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
 * Check if two colors are equal
 *
 * @param {Color} col1
 * @param {Color} col2
 *
 * @return {boolean} The resulting bool.
 */
function ColorIsEqual(col1, col2) {
  return r.BindColorIsEqual(
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
raylib.ColorIsEqual = ColorIsEqual

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
 * Get hexadecimal value for a Color (0xRRGGBBAA)
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
 * Get color multiplied with another color
 *
 * @param {Color} color
 * @param {Color} tint
 *
 * @return {Color} The resulting Color.
 */
function ColorTint(color, tint) {
  return r.BindColorTint(
    color.r,
    color.g,
    color.b,
    color.a,
    tint.r,
    tint.g,
    tint.b,
    tint.a
  )
}
raylib.ColorTint = ColorTint

/**
 * Get color with brightness correction, brightness factor goes from -1.0f to 1.0f
 *
 * @param {Color} color
 * @param {number} factor
 *
 * @return {Color} The resulting Color.
 */
function ColorBrightness(color, factor) {
  return r.BindColorBrightness(
    color.r,
    color.g,
    color.b,
    color.a,
    factor
  )
}
raylib.ColorBrightness = ColorBrightness

/**
 * Get color with contrast correction, contrast values between -1.0f and 1.0f
 *
 * @param {Color} color
 * @param {number} contrast
 *
 * @return {Color} The resulting Color.
 */
function ColorContrast(color, contrast) {
  return r.BindColorContrast(
    color.r,
    color.g,
    color.b,
    color.a,
    contrast
  )
}
raylib.ColorContrast = ColorContrast

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
 * Get color lerp interpolation between two colors, factor [0.0f..1.0f]
 *
 * @param {Color} color1
 * @param {Color} color2
 * @param {number} factor
 *
 * @return {Color} The resulting Color.
 */
function ColorLerp(color1, color2, factor) {
  return r.BindColorLerp(
    color1.r,
    color1.g,
    color1.b,
    color1.a,
    color2.r,
    color2.g,
    color2.b,
    color2.a,
    factor
  )
}
raylib.ColorLerp = ColorLerp

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
 * Load font from file with extended parameters, use NULL for codepoints and 0 for codepointCount to load the default character set, font size is provided in pixels height
 *
 * @param {string} fileName
 * @param {number} fontSize
 * @param {number} codepoints
 * @param {number} codepointCount
 *
 * @return {Font} The resulting Font.
 */
function LoadFontEx(fileName, fontSize, codepoints, codepointCount) {
  return r.BindLoadFontEx(
    fileName,
    fontSize,
    codepoints,
    codepointCount
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
 * @param {number} codepoints
 * @param {number} codepointCount
 *
 * @return {Font} The resulting Font.
 */
function LoadFontFromMemory(fileType, fileData, dataSize, fontSize, codepoints, codepointCount) {
  return r.BindLoadFontFromMemory(
    fileType,
    fileData,
    dataSize,
    fontSize,
    codepoints,
    codepointCount
  )
}
raylib.LoadFontFromMemory = LoadFontFromMemory

/**
 * Check if a font is valid (font data loaded, WARNING: GPU texture not checked)
 *
 * @param {Font} font
 *
 * @return {boolean} The resulting bool.
 */
function IsFontValid(font) {
  return r.BindIsFontValid(
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
raylib.IsFontValid = IsFontValid

/**
 * Load font data for further use
 *
 * @param {Buffer} fileData
 * @param {number} dataSize
 * @param {number} fontSize
 * @param {number} codepoints
 * @param {number} codepointCount
 * @param {number} type
 *
 * @return {number} The resulting GlyphInfo *.
 */
function LoadFontData(fileData, dataSize, fontSize, codepoints, codepointCount, type) {
  return r.BindLoadFontData(
    fileData,
    dataSize,
    fontSize,
    codepoints,
    codepointCount,
    type
  )
}
raylib.LoadFontData = LoadFontData

/**
 * Generate image font atlas using chars info
 *
 * @param {number} glyphs
 * @param {number} glyphRecs
 * @param {number} glyphCount
 * @param {number} fontSize
 * @param {number} padding
 * @param {number} packMethod
 *
 * @return {Image} The resulting Image.
 */
function GenImageFontAtlas(glyphs, glyphRecs, glyphCount, fontSize, padding, packMethod) {
  return r.BindGenImageFontAtlas(
    glyphs,
    glyphRecs,
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
 * @param {number} glyphs
 * @param {number} glyphCount
 *
 * @return {undefined}
 */
function UnloadFontData(glyphs, glyphCount) {
  return r.BindUnloadFontData(
    glyphs,
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
 * Export font as code file, returns true on success
 *
 * @param {Font} font
 * @param {string} fileName
 *
 * @return {boolean} The resulting bool.
 */
function ExportFontAsCode(font, fileName) {
  return r.BindExportFontAsCode(
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
    fileName
  )
}
raylib.ExportFontAsCode = ExportFontAsCode

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
 * Draw multiple character (codepoint)
 *
 * @param {Font} font
 * @param {number} codepoints
 * @param {number} codepointCount
 * @param {Vector2} position
 * @param {number} fontSize
 * @param {number} spacing
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawTextCodepoints(font, codepoints, codepointCount, position, fontSize, spacing, tint) {
  return r.BindDrawTextCodepoints(
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
    codepoints,
    codepointCount,
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
raylib.DrawTextCodepoints = DrawTextCodepoints

/**
 * Set vertical line spacing when drawing with line-breaks
 *
 * @param {number} spacing
 *
 * @return {undefined}
 */
function SetTextLineSpacing(spacing) {
  return r.BindSetTextLineSpacing(
    spacing
  )
}
raylib.SetTextLineSpacing = SetTextLineSpacing

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
 * Load UTF-8 text encoded from codepoints array
 *
 * @param {number} codepoints
 * @param {number} length
 *
 * @return {string} The resulting char *.
 */
function LoadUTF8(codepoints, length) {
  return r.BindLoadUTF8(
    codepoints,
    length
  )
}
raylib.LoadUTF8 = LoadUTF8

/**
 * Unload UTF-8 text encoded from codepoints array
 *
 * @param {string} text
 *
 * @return {undefined}
 */
function UnloadUTF8(text) {
  return r.BindUnloadUTF8(
    text
  )
}
raylib.UnloadUTF8 = UnloadUTF8

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
 * @param {number} codepointSize
 *
 * @return {number} The resulting int.
 */
function GetCodepoint(text, codepointSize) {
  return r.BindGetCodepoint(
    text,
    codepointSize
  )
}
raylib.GetCodepoint = GetCodepoint

/**
 * Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure
 *
 * @param {string} text
 * @param {number} codepointSize
 *
 * @return {number} The resulting int.
 */
function GetCodepointNext(text, codepointSize) {
  return r.BindGetCodepointNext(
    text,
    codepointSize
  )
}
raylib.GetCodepointNext = GetCodepointNext

/**
 * Get previous codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure
 *
 * @param {string} text
 * @param {number} codepointSize
 *
 * @return {number} The resulting int.
 */
function GetCodepointPrevious(text, codepointSize) {
  return r.BindGetCodepointPrevious(
    text,
    codepointSize
  )
}
raylib.GetCodepointPrevious = GetCodepointPrevious

/**
 * Encode one codepoint into UTF-8 byte array (array length returned as parameter)
 *
 * @param {number} codepoint
 * @param {number} utf8Size
 *
 * @return {string} The resulting const char *.
 */
function CodepointToUTF8(codepoint, utf8Size) {
  return r.BindCodepointToUTF8(
    codepoint,
    utf8Size
  )
}
raylib.CodepointToUTF8 = CodepointToUTF8

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
 * Get Snake case notation version of provided string
 *
 * @param {string} text
 *
 * @return {string} The resulting const char *.
 */
function TextToSnake(text) {
  return r.BindTextToSnake(
    text
  )
}
raylib.TextToSnake = TextToSnake

/**
 * Get Camel case notation version of provided string
 *
 * @param {string} text
 *
 * @return {string} The resulting const char *.
 */
function TextToCamel(text) {
  return r.BindTextToCamel(
    text
  )
}
raylib.TextToCamel = TextToCamel

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
 * Get float value from text (negative values not supported)
 *
 * @param {string} text
 *
 * @return {number} The resulting float.
 */
function TextToFloat(text) {
  return r.BindTextToFloat(
    text
  )
}
raylib.TextToFloat = TextToFloat

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
 * Draw a capsule with the center of its sphere caps at startPos and endPos
 *
 * @param {Vector3} startPos
 * @param {Vector3} endPos
 * @param {number} radius
 * @param {number} slices
 * @param {number} rings
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCapsule(startPos, endPos, radius, slices, rings, color) {
  return r.BindDrawCapsule(
    startPos.x,
    startPos.y,
    startPos.z,
    endPos.x,
    endPos.y,
    endPos.z,
    radius,
    slices,
    rings,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCapsule = DrawCapsule

/**
 * Draw capsule wireframe with the center of its sphere caps at startPos and endPos
 *
 * @param {Vector3} startPos
 * @param {Vector3} endPos
 * @param {number} radius
 * @param {number} slices
 * @param {number} rings
 * @param {Color} color
 *
 * @return {undefined}
 */
function DrawCapsuleWires(startPos, endPos, radius, slices, rings, color) {
  return r.BindDrawCapsuleWires(
    startPos.x,
    startPos.y,
    startPos.z,
    endPos.x,
    endPos.y,
    endPos.z,
    radius,
    slices,
    rings,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.DrawCapsuleWires = DrawCapsuleWires

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
    mesh.boneMatrices,
    mesh.boneCount,
    mesh.vaoId,
    mesh.vboId
  )
}
raylib.LoadModelFromMesh = LoadModelFromMesh

/**
 * Check if a model is valid (loaded in GPU, VAO/VBOs)
 *
 * @param {Model} model
 *
 * @return {boolean} The resulting bool.
 */
function IsModelValid(model) {
  return r.BindIsModelValid(
    model.transform.m0,
    model.transform.m4,
    model.transform.m8,
    model.transform.m12,
    model.transform.m1,
    model.transform.m5,
    model.transform.m9,
    model.transform.m13,
    model.transform.m2,
    model.transform.m6,
    model.transform.m10,
    model.transform.m14,
    model.transform.m3,
    model.transform.m7,
    model.transform.m11,
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
raylib.IsModelValid = IsModelValid

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
    model.transform.m4,
    model.transform.m8,
    model.transform.m12,
    model.transform.m1,
    model.transform.m5,
    model.transform.m9,
    model.transform.m13,
    model.transform.m2,
    model.transform.m6,
    model.transform.m10,
    model.transform.m14,
    model.transform.m3,
    model.transform.m7,
    model.transform.m11,
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
 * Compute model bounding box limits (considers all meshes)
 *
 * @param {Model} model
 *
 * @return {BoundingBox} The resulting BoundingBox.
 */
function GetModelBoundingBox(model) {
  return r.BindGetModelBoundingBox(
    model.transform.m0,
    model.transform.m4,
    model.transform.m8,
    model.transform.m12,
    model.transform.m1,
    model.transform.m5,
    model.transform.m9,
    model.transform.m13,
    model.transform.m2,
    model.transform.m6,
    model.transform.m10,
    model.transform.m14,
    model.transform.m3,
    model.transform.m7,
    model.transform.m11,
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
    model.transform.m4,
    model.transform.m8,
    model.transform.m12,
    model.transform.m1,
    model.transform.m5,
    model.transform.m9,
    model.transform.m13,
    model.transform.m2,
    model.transform.m6,
    model.transform.m10,
    model.transform.m14,
    model.transform.m3,
    model.transform.m7,
    model.transform.m11,
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
    model.transform.m4,
    model.transform.m8,
    model.transform.m12,
    model.transform.m1,
    model.transform.m5,
    model.transform.m9,
    model.transform.m13,
    model.transform.m2,
    model.transform.m6,
    model.transform.m10,
    model.transform.m14,
    model.transform.m3,
    model.transform.m7,
    model.transform.m11,
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
    model.transform.m4,
    model.transform.m8,
    model.transform.m12,
    model.transform.m1,
    model.transform.m5,
    model.transform.m9,
    model.transform.m13,
    model.transform.m2,
    model.transform.m6,
    model.transform.m10,
    model.transform.m14,
    model.transform.m3,
    model.transform.m7,
    model.transform.m11,
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
    model.transform.m4,
    model.transform.m8,
    model.transform.m12,
    model.transform.m1,
    model.transform.m5,
    model.transform.m9,
    model.transform.m13,
    model.transform.m2,
    model.transform.m6,
    model.transform.m10,
    model.transform.m14,
    model.transform.m3,
    model.transform.m7,
    model.transform.m11,
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
 * Draw a model as points
 *
 * @param {Model} model
 * @param {Vector3} position
 * @param {number} scale
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawModelPoints(model, position, scale, tint) {
  return r.BindDrawModelPoints(
    model.transform.m0,
    model.transform.m4,
    model.transform.m8,
    model.transform.m12,
    model.transform.m1,
    model.transform.m5,
    model.transform.m9,
    model.transform.m13,
    model.transform.m2,
    model.transform.m6,
    model.transform.m10,
    model.transform.m14,
    model.transform.m3,
    model.transform.m7,
    model.transform.m11,
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
raylib.DrawModelPoints = DrawModelPoints

/**
 * Draw a model as points with extended parameters
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
function DrawModelPointsEx(model, position, rotationAxis, rotationAngle, scale, tint) {
  return r.BindDrawModelPointsEx(
    model.transform.m0,
    model.transform.m4,
    model.transform.m8,
    model.transform.m12,
    model.transform.m1,
    model.transform.m5,
    model.transform.m9,
    model.transform.m13,
    model.transform.m2,
    model.transform.m6,
    model.transform.m10,
    model.transform.m14,
    model.transform.m3,
    model.transform.m7,
    model.transform.m11,
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
raylib.DrawModelPointsEx = DrawModelPointsEx

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
 * @param {Camera3D} camera
 * @param {Texture} texture
 * @param {Vector3} position
 * @param {number} scale
 * @param {Color} tint
 *
 * @return {undefined}
 */
function DrawBillboard(camera, texture, position, scale, tint) {
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
    scale,
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
 * @param {Camera3D} camera
 * @param {Texture} texture
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
 * @param {Camera3D} camera
 * @param {Texture} texture
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
    mesh.boneMatrices,
    mesh.boneCount,
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
    mesh.boneMatrices,
    mesh.boneCount,
    mesh.vaoId,
    mesh.vboId
  )
}
raylib.UnloadMesh = UnloadMesh

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
    mesh.boneMatrices,
    mesh.boneCount,
    mesh.vaoId,
    mesh.vboId
  )
}
raylib.GetMeshBoundingBox = GetMeshBoundingBox

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
    mesh.boneMatrices,
    mesh.boneCount,
    mesh.vaoId,
    mesh.vboId,
    fileName
  )
}
raylib.ExportMesh = ExportMesh

/**
 * Export mesh as code file (.h) defining multiple arrays of vertex attributes
 *
 * @param {Mesh} mesh
 * @param {string} fileName
 *
 * @return {boolean} The resulting bool.
 */
function ExportMeshAsCode(mesh, fileName) {
  return r.BindExportMeshAsCode(
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
    mesh.boneMatrices,
    mesh.boneCount,
    mesh.vaoId,
    mesh.vboId,
    fileName
  )
}
raylib.ExportMeshAsCode = ExportMeshAsCode

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
    mesh.boneMatrices,
    mesh.boneCount,
    mesh.vaoId,
    mesh.vboId,
    transform.m0,
    transform.m4,
    transform.m8,
    transform.m12,
    transform.m1,
    transform.m5,
    transform.m9,
    transform.m13,
    transform.m2,
    transform.m6,
    transform.m10,
    transform.m14,
    transform.m3,
    transform.m7,
    transform.m11,
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
 * Get master volume (listener)
 *
 * @return {number} The resulting float.
 */
function GetMasterVolume() {
  return r.BindGetMasterVolume()
}
raylib.GetMasterVolume = GetMasterVolume

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
 * Checks if wave data is valid (data loaded and parameters)
 *
 * @param {Wave} wave
 *
 * @return {boolean} The resulting bool.
 */
function IsWaveValid(wave) {
  return r.BindIsWaveValid(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data
  )
}
raylib.IsWaveValid = IsWaveValid

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
 * Create a new sound that shares the same sample data as the source sound, does not own the sound data
 *
 * @param {Sound} source
 *
 * @return {Sound} The resulting Sound.
 */
function LoadSoundAlias(source) {
  return r.BindLoadSoundAlias(
    source.stream.buffer,
    source.stream.processor,
    source.stream.sampleRate,
    source.stream.sampleSize,
    source.stream.channels,
    source.frameCount
  )
}
raylib.LoadSoundAlias = LoadSoundAlias

/**
 * Checks if a sound is valid (data loaded and buffers initialized)
 *
 * @param {Sound} sound
 *
 * @return {boolean} The resulting bool.
 */
function IsSoundValid(sound) {
  return r.BindIsSoundValid(
    sound.stream.buffer,
    sound.stream.processor,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}
raylib.IsSoundValid = IsSoundValid

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
    sound.stream.processor,
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
    sound.stream.processor,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}
raylib.UnloadSound = UnloadSound

/**
 * Unload a sound alias (does not deallocate sample data)
 *
 * @param {Sound} alias
 *
 * @return {undefined}
 */
function UnloadSoundAlias(alias) {
  return r.BindUnloadSoundAlias(
    alias.stream.buffer,
    alias.stream.processor,
    alias.stream.sampleRate,
    alias.stream.sampleSize,
    alias.stream.channels,
    alias.frameCount
  )
}
raylib.UnloadSoundAlias = UnloadSoundAlias

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
    sound.stream.processor,
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
    sound.stream.processor,
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
    sound.stream.processor,
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
    sound.stream.processor,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}
raylib.ResumeSound = ResumeSound

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
    sound.stream.processor,
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
    sound.stream.processor,
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
    sound.stream.processor,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount,
    pitch
  )
}
raylib.SetSoundPitch = SetSoundPitch

/**
 * Set pan for a sound (0.5 is center)
 *
 * @param {Sound} sound
 * @param {number} pan
 *
 * @return {undefined}
 */
function SetSoundPan(sound, pan) {
  return r.BindSetSoundPan(
    sound.stream.buffer,
    sound.stream.processor,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount,
    pan
  )
}
raylib.SetSoundPan = SetSoundPan

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
 * Load samples data from wave as a 32bit float data array
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
 * Checks if a music stream is valid (context and buffers initialized)
 *
 * @param {Music} music
 *
 * @return {boolean} The resulting bool.
 */
function IsMusicValid(music) {
  return r.BindIsMusicValid(
    music.stream.buffer,
    music.stream.processor,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData
  )
}
raylib.IsMusicValid = IsMusicValid

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
    music.stream.processor,
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
    music.stream.processor,
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
    music.stream.processor,
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
    music.stream.processor,
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
    music.stream.processor,
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
    music.stream.processor,
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
    music.stream.processor,
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
    music.stream.processor,
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
    music.stream.processor,
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
    music.stream.processor,
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
 * Set pan for a music (0.5 is center)
 *
 * @param {Music} music
 * @param {number} pan
 *
 * @return {undefined}
 */
function SetMusicPan(music, pan) {
  return r.BindSetMusicPan(
    music.stream.buffer,
    music.stream.processor,
    music.stream.sampleRate,
    music.stream.sampleSize,
    music.stream.channels,
    music.frameCount,
    music.looping,
    music.ctxType,
    music.ctxData,
    pan
  )
}
raylib.SetMusicPan = SetMusicPan

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
    music.stream.processor,
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
    music.stream.processor,
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
 * Checks if an audio stream is valid (buffers initialized)
 *
 * @param {AudioStream} stream
 *
 * @return {boolean} The resulting bool.
 */
function IsAudioStreamValid(stream) {
  return r.BindIsAudioStreamValid(
    stream.buffer,
    stream.processor,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}
raylib.IsAudioStreamValid = IsAudioStreamValid

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
    stream.processor,
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
    stream.processor,
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
    stream.processor,
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
    stream.processor,
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
    stream.processor,
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
    stream.processor,
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
    stream.processor,
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
    stream.processor,
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
    stream.processor,
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
    stream.processor,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels,
    pitch
  )
}
raylib.SetAudioStreamPitch = SetAudioStreamPitch

/**
 * Set pan for audio stream (0.5 is centered)
 *
 * @param {AudioStream} stream
 * @param {number} pan
 *
 * @return {undefined}
 */
function SetAudioStreamPan(stream, pan) {
  return r.BindSetAudioStreamPan(
    stream.buffer,
    stream.processor,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels,
    pan
  )
}
raylib.SetAudioStreamPan = SetAudioStreamPan

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
 * Ease: Linear
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
 * Ease: Linear In
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
 * Ease: Linear Out
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
 * Ease: Linear In Out
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
 * Ease: Sine In
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
 * Ease: Sine Out
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
 * Ease: Sine Out
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
 * Ease: Circular In
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
 * Ease: Circular Out
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
 * Ease: Circular In Out
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
 * Ease: Cubic In
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
 * Ease: Cubic Out
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
 * Ease: Cubic In Out
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
 * Ease: Quadratic In
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
 * Ease: Quadratic Out
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
 * Ease: Quadratic In Out
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
 * Ease: Exponential In
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
 * Ease: Exponential Out
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
 * Ease: Exponential In Out
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
 * Ease: Back In
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
 * Ease: Back Out
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
 * Ease: Back In Out
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
 * Ease: Bounce Out
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
 * Ease: Bounce In
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
 * Ease: Bounce In Out
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
 * Ease: Elastic In
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
 * Ease: Elastic Out
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
 * Ease: Elastic In Out
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

function Clamp(value, min, max) {
  return r.BindClamp(
    value,
    min,
    max
  )
}
raylib.Clamp = Clamp

function Lerp(start, end, amount) {
  return r.BindLerp(
    start,
    end,
    amount
  )
}
raylib.Lerp = Lerp

function Normalize(value, start, end) {
  return r.BindNormalize(
    value,
    start,
    end
  )
}
raylib.Normalize = Normalize

function Remap(value, inputStart, inputEnd, outputStart, outputEnd) {
  return r.BindRemap(
    value,
    inputStart,
    inputEnd,
    outputStart,
    outputEnd
  )
}
raylib.Remap = Remap

function Wrap(value, min, max) {
  return r.BindWrap(
    value,
    min,
    max
  )
}
raylib.Wrap = Wrap

function FloatEquals(x, y) {
  return r.BindFloatEquals(
    x,
    y
  )
}
raylib.FloatEquals = FloatEquals

function Vector2Zero() {
  return r.BindVector2Zero()
}
raylib.Vector2Zero = Vector2Zero

function Vector2One() {
  return r.BindVector2One()
}
raylib.Vector2One = Vector2One

function Vector2Add(v1, v2) {
  return r.BindVector2Add(
    v1.x,
    v1.y,
    v2.x,
    v2.y
  )
}
raylib.Vector2Add = Vector2Add

function Vector2AddValue(v, add) {
  return r.BindVector2AddValue(
    v.x,
    v.y,
    add
  )
}
raylib.Vector2AddValue = Vector2AddValue

function Vector2Subtract(v1, v2) {
  return r.BindVector2Subtract(
    v1.x,
    v1.y,
    v2.x,
    v2.y
  )
}
raylib.Vector2Subtract = Vector2Subtract

function Vector2SubtractValue(v, sub) {
  return r.BindVector2SubtractValue(
    v.x,
    v.y,
    sub
  )
}
raylib.Vector2SubtractValue = Vector2SubtractValue

function Vector2Length(v) {
  return r.BindVector2Length(
    v.x,
    v.y
  )
}
raylib.Vector2Length = Vector2Length

function Vector2LengthSqr(v) {
  return r.BindVector2LengthSqr(
    v.x,
    v.y
  )
}
raylib.Vector2LengthSqr = Vector2LengthSqr

function Vector2DotProduct(v1, v2) {
  return r.BindVector2DotProduct(
    v1.x,
    v1.y,
    v2.x,
    v2.y
  )
}
raylib.Vector2DotProduct = Vector2DotProduct

function Vector2Distance(v1, v2) {
  return r.BindVector2Distance(
    v1.x,
    v1.y,
    v2.x,
    v2.y
  )
}
raylib.Vector2Distance = Vector2Distance

function Vector2DistanceSqr(v1, v2) {
  return r.BindVector2DistanceSqr(
    v1.x,
    v1.y,
    v2.x,
    v2.y
  )
}
raylib.Vector2DistanceSqr = Vector2DistanceSqr

function Vector2Angle(v1, v2) {
  return r.BindVector2Angle(
    v1.x,
    v1.y,
    v2.x,
    v2.y
  )
}
raylib.Vector2Angle = Vector2Angle

function Vector2LineAngle(start, end) {
  return r.BindVector2LineAngle(
    start.x,
    start.y,
    end.x,
    end.y
  )
}
raylib.Vector2LineAngle = Vector2LineAngle

function Vector2Scale(v, scale) {
  return r.BindVector2Scale(
    v.x,
    v.y,
    scale
  )
}
raylib.Vector2Scale = Vector2Scale

function Vector2Multiply(v1, v2) {
  return r.BindVector2Multiply(
    v1.x,
    v1.y,
    v2.x,
    v2.y
  )
}
raylib.Vector2Multiply = Vector2Multiply

function Vector2Negate(v) {
  return r.BindVector2Negate(
    v.x,
    v.y
  )
}
raylib.Vector2Negate = Vector2Negate

function Vector2Divide(v1, v2) {
  return r.BindVector2Divide(
    v1.x,
    v1.y,
    v2.x,
    v2.y
  )
}
raylib.Vector2Divide = Vector2Divide

function Vector2Normalize(v) {
  return r.BindVector2Normalize(
    v.x,
    v.y
  )
}
raylib.Vector2Normalize = Vector2Normalize

function Vector2Transform(v, mat) {
  return r.BindVector2Transform(
    v.x,
    v.y,
    mat.m0,
    mat.m4,
    mat.m8,
    mat.m12,
    mat.m1,
    mat.m5,
    mat.m9,
    mat.m13,
    mat.m2,
    mat.m6,
    mat.m10,
    mat.m14,
    mat.m3,
    mat.m7,
    mat.m11,
    mat.m15
  )
}
raylib.Vector2Transform = Vector2Transform

function Vector2Lerp(v1, v2, amount) {
  return r.BindVector2Lerp(
    v1.x,
    v1.y,
    v2.x,
    v2.y,
    amount
  )
}
raylib.Vector2Lerp = Vector2Lerp

function Vector2Reflect(v, normal) {
  return r.BindVector2Reflect(
    v.x,
    v.y,
    normal.x,
    normal.y
  )
}
raylib.Vector2Reflect = Vector2Reflect

function Vector2Min(v1, v2) {
  return r.BindVector2Min(
    v1.x,
    v1.y,
    v2.x,
    v2.y
  )
}
raylib.Vector2Min = Vector2Min

function Vector2Max(v1, v2) {
  return r.BindVector2Max(
    v1.x,
    v1.y,
    v2.x,
    v2.y
  )
}
raylib.Vector2Max = Vector2Max

function Vector2Rotate(v, angle) {
  return r.BindVector2Rotate(
    v.x,
    v.y,
    angle
  )
}
raylib.Vector2Rotate = Vector2Rotate

function Vector2MoveTowards(v, target, maxDistance) {
  return r.BindVector2MoveTowards(
    v.x,
    v.y,
    target.x,
    target.y,
    maxDistance
  )
}
raylib.Vector2MoveTowards = Vector2MoveTowards

function Vector2Invert(v) {
  return r.BindVector2Invert(
    v.x,
    v.y
  )
}
raylib.Vector2Invert = Vector2Invert

function Vector2Clamp(v, min, max) {
  return r.BindVector2Clamp(
    v.x,
    v.y,
    min.x,
    min.y,
    max.x,
    max.y
  )
}
raylib.Vector2Clamp = Vector2Clamp

function Vector2ClampValue(v, min, max) {
  return r.BindVector2ClampValue(
    v.x,
    v.y,
    min,
    max
  )
}
raylib.Vector2ClampValue = Vector2ClampValue

function Vector2Equals(p, q) {
  return r.BindVector2Equals(
    p.x,
    p.y,
    q.x,
    q.y
  )
}
raylib.Vector2Equals = Vector2Equals

function Vector2Refract(v, n, r) {
  return r.BindVector2Refract(
    v.x,
    v.y,
    n.x,
    n.y,
    r
  )
}
raylib.Vector2Refract = Vector2Refract

function Vector3Zero() {
  return r.BindVector3Zero()
}
raylib.Vector3Zero = Vector3Zero

function Vector3One() {
  return r.BindVector3One()
}
raylib.Vector3One = Vector3One

function Vector3Add(v1, v2) {
  return r.BindVector3Add(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z
  )
}
raylib.Vector3Add = Vector3Add

function Vector3AddValue(v, add) {
  return r.BindVector3AddValue(
    v.x,
    v.y,
    v.z,
    add
  )
}
raylib.Vector3AddValue = Vector3AddValue

function Vector3Subtract(v1, v2) {
  return r.BindVector3Subtract(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z
  )
}
raylib.Vector3Subtract = Vector3Subtract

function Vector3SubtractValue(v, sub) {
  return r.BindVector3SubtractValue(
    v.x,
    v.y,
    v.z,
    sub
  )
}
raylib.Vector3SubtractValue = Vector3SubtractValue

function Vector3Scale(v, scalar) {
  return r.BindVector3Scale(
    v.x,
    v.y,
    v.z,
    scalar
  )
}
raylib.Vector3Scale = Vector3Scale

function Vector3Multiply(v1, v2) {
  return r.BindVector3Multiply(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z
  )
}
raylib.Vector3Multiply = Vector3Multiply

function Vector3CrossProduct(v1, v2) {
  return r.BindVector3CrossProduct(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z
  )
}
raylib.Vector3CrossProduct = Vector3CrossProduct

function Vector3Perpendicular(v) {
  return r.BindVector3Perpendicular(
    v.x,
    v.y,
    v.z
  )
}
raylib.Vector3Perpendicular = Vector3Perpendicular

function Vector3Length(v) {
  return r.BindVector3Length(
    v
  )
}
raylib.Vector3Length = Vector3Length

function Vector3LengthSqr(v) {
  return r.BindVector3LengthSqr(
    v
  )
}
raylib.Vector3LengthSqr = Vector3LengthSqr

function Vector3DotProduct(v1, v2) {
  return r.BindVector3DotProduct(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z
  )
}
raylib.Vector3DotProduct = Vector3DotProduct

function Vector3Distance(v1, v2) {
  return r.BindVector3Distance(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z
  )
}
raylib.Vector3Distance = Vector3Distance

function Vector3DistanceSqr(v1, v2) {
  return r.BindVector3DistanceSqr(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z
  )
}
raylib.Vector3DistanceSqr = Vector3DistanceSqr

function Vector3Angle(v1, v2) {
  return r.BindVector3Angle(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z
  )
}
raylib.Vector3Angle = Vector3Angle

function Vector3Negate(v) {
  return r.BindVector3Negate(
    v.x,
    v.y,
    v.z
  )
}
raylib.Vector3Negate = Vector3Negate

function Vector3Divide(v1, v2) {
  return r.BindVector3Divide(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z
  )
}
raylib.Vector3Divide = Vector3Divide

function Vector3Normalize(v) {
  return r.BindVector3Normalize(
    v.x,
    v.y,
    v.z
  )
}
raylib.Vector3Normalize = Vector3Normalize

function Vector3Project(v1, v2) {
  return r.BindVector3Project(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z
  )
}
raylib.Vector3Project = Vector3Project

function Vector3Reject(v1, v2) {
  return r.BindVector3Reject(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z
  )
}
raylib.Vector3Reject = Vector3Reject

function Vector3OrthoNormalize(v1, v2) {
  return r.BindVector3OrthoNormalize(
    v1,
    v2
  )
}
raylib.Vector3OrthoNormalize = Vector3OrthoNormalize

function Vector3Transform(v, mat) {
  return r.BindVector3Transform(
    v.x,
    v.y,
    v.z,
    mat.m0,
    mat.m4,
    mat.m8,
    mat.m12,
    mat.m1,
    mat.m5,
    mat.m9,
    mat.m13,
    mat.m2,
    mat.m6,
    mat.m10,
    mat.m14,
    mat.m3,
    mat.m7,
    mat.m11,
    mat.m15
  )
}
raylib.Vector3Transform = Vector3Transform

function Vector3RotateByQuaternion(v, q) {
  return r.BindVector3RotateByQuaternion(
    v.x,
    v.y,
    v.z,
    q
  )
}
raylib.Vector3RotateByQuaternion = Vector3RotateByQuaternion

function Vector3RotateByAxisAngle(v, axis, angle) {
  return r.BindVector3RotateByAxisAngle(
    v.x,
    v.y,
    v.z,
    axis.x,
    axis.y,
    axis.z,
    angle
  )
}
raylib.Vector3RotateByAxisAngle = Vector3RotateByAxisAngle

function Vector3MoveTowards(v, target, maxDistance) {
  return r.BindVector3MoveTowards(
    v.x,
    v.y,
    v.z,
    target.x,
    target.y,
    target.z,
    maxDistance
  )
}
raylib.Vector3MoveTowards = Vector3MoveTowards

function Vector3Lerp(v1, v2, amount) {
  return r.BindVector3Lerp(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z,
    amount
  )
}
raylib.Vector3Lerp = Vector3Lerp

function Vector3CubicHermite(v1, tangent1, v2, tangent2, amount) {
  return r.BindVector3CubicHermite(
    v1.x,
    v1.y,
    v1.z,
    tangent1.x,
    tangent1.y,
    tangent1.z,
    v2.x,
    v2.y,
    v2.z,
    tangent2.x,
    tangent2.y,
    tangent2.z,
    amount
  )
}
raylib.Vector3CubicHermite = Vector3CubicHermite

function Vector3Reflect(v, normal) {
  return r.BindVector3Reflect(
    v.x,
    v.y,
    v.z,
    normal.x,
    normal.y,
    normal.z
  )
}
raylib.Vector3Reflect = Vector3Reflect

function Vector3Min(v1, v2) {
  return r.BindVector3Min(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z
  )
}
raylib.Vector3Min = Vector3Min

function Vector3Max(v1, v2) {
  return r.BindVector3Max(
    v1.x,
    v1.y,
    v1.z,
    v2.x,
    v2.y,
    v2.z
  )
}
raylib.Vector3Max = Vector3Max

function Vector3Barycenter(p, a, b, c) {
  return r.BindVector3Barycenter(
    p.x,
    p.y,
    p.z,
    a.x,
    a.y,
    a.z,
    b.x,
    b.y,
    b.z,
    c.x,
    c.y,
    c.z
  )
}
raylib.Vector3Barycenter = Vector3Barycenter

function Vector3Unproject(source, projection, view) {
  return r.BindVector3Unproject(
    source.x,
    source.y,
    source.z,
    projection.m0,
    projection.m4,
    projection.m8,
    projection.m12,
    projection.m1,
    projection.m5,
    projection.m9,
    projection.m13,
    projection.m2,
    projection.m6,
    projection.m10,
    projection.m14,
    projection.m3,
    projection.m7,
    projection.m11,
    projection.m15,
    view.m0,
    view.m4,
    view.m8,
    view.m12,
    view.m1,
    view.m5,
    view.m9,
    view.m13,
    view.m2,
    view.m6,
    view.m10,
    view.m14,
    view.m3,
    view.m7,
    view.m11,
    view.m15
  )
}
raylib.Vector3Unproject = Vector3Unproject

function Vector3Invert(v) {
  return r.BindVector3Invert(
    v.x,
    v.y,
    v.z
  )
}
raylib.Vector3Invert = Vector3Invert

function Vector3Clamp(v, min, max) {
  return r.BindVector3Clamp(
    v.x,
    v.y,
    v.z,
    min.x,
    min.y,
    min.z,
    max.x,
    max.y,
    max.z
  )
}
raylib.Vector3Clamp = Vector3Clamp

function Vector3ClampValue(v, min, max) {
  return r.BindVector3ClampValue(
    v.x,
    v.y,
    v.z,
    min,
    max
  )
}
raylib.Vector3ClampValue = Vector3ClampValue

function Vector3Equals(p, q) {
  return r.BindVector3Equals(
    p.x,
    p.y,
    p.z,
    q.x,
    q.y,
    q.z
  )
}
raylib.Vector3Equals = Vector3Equals

function Vector3Refract(v, n, r) {
  return r.BindVector3Refract(
    v.x,
    v.y,
    v.z,
    n.x,
    n.y,
    n.z,
    r
  )
}
raylib.Vector3Refract = Vector3Refract

function Vector4Zero() {
  return r.BindVector4Zero()
}
raylib.Vector4Zero = Vector4Zero

function Vector4One() {
  return r.BindVector4One()
}
raylib.Vector4One = Vector4One

function Vector4Add(v1, v2) {
  return r.BindVector4Add(
    v1.x,
    v1.y,
    v1.z,
    v1.w,
    v2.x,
    v2.y,
    v2.z,
    v2.w
  )
}
raylib.Vector4Add = Vector4Add

function Vector4AddValue(v, add) {
  return r.BindVector4AddValue(
    v.x,
    v.y,
    v.z,
    v.w,
    add
  )
}
raylib.Vector4AddValue = Vector4AddValue

function Vector4Subtract(v1, v2) {
  return r.BindVector4Subtract(
    v1.x,
    v1.y,
    v1.z,
    v1.w,
    v2.x,
    v2.y,
    v2.z,
    v2.w
  )
}
raylib.Vector4Subtract = Vector4Subtract

function Vector4SubtractValue(v, add) {
  return r.BindVector4SubtractValue(
    v.x,
    v.y,
    v.z,
    v.w,
    add
  )
}
raylib.Vector4SubtractValue = Vector4SubtractValue

function Vector4Length(v) {
  return r.BindVector4Length(
    v.x,
    v.y,
    v.z,
    v.w
  )
}
raylib.Vector4Length = Vector4Length

function Vector4LengthSqr(v) {
  return r.BindVector4LengthSqr(
    v.x,
    v.y,
    v.z,
    v.w
  )
}
raylib.Vector4LengthSqr = Vector4LengthSqr

function Vector4DotProduct(v1, v2) {
  return r.BindVector4DotProduct(
    v1.x,
    v1.y,
    v1.z,
    v1.w,
    v2.x,
    v2.y,
    v2.z,
    v2.w
  )
}
raylib.Vector4DotProduct = Vector4DotProduct

function Vector4Distance(v1, v2) {
  return r.BindVector4Distance(
    v1.x,
    v1.y,
    v1.z,
    v1.w,
    v2.x,
    v2.y,
    v2.z,
    v2.w
  )
}
raylib.Vector4Distance = Vector4Distance

function Vector4DistanceSqr(v1, v2) {
  return r.BindVector4DistanceSqr(
    v1.x,
    v1.y,
    v1.z,
    v1.w,
    v2.x,
    v2.y,
    v2.z,
    v2.w
  )
}
raylib.Vector4DistanceSqr = Vector4DistanceSqr

function Vector4Scale(v, scale) {
  return r.BindVector4Scale(
    v.x,
    v.y,
    v.z,
    v.w,
    scale
  )
}
raylib.Vector4Scale = Vector4Scale

function Vector4Multiply(v1, v2) {
  return r.BindVector4Multiply(
    v1.x,
    v1.y,
    v1.z,
    v1.w,
    v2.x,
    v2.y,
    v2.z,
    v2.w
  )
}
raylib.Vector4Multiply = Vector4Multiply

function Vector4Negate(v) {
  return r.BindVector4Negate(
    v.x,
    v.y,
    v.z,
    v.w
  )
}
raylib.Vector4Negate = Vector4Negate

function Vector4Divide(v1, v2) {
  return r.BindVector4Divide(
    v1.x,
    v1.y,
    v1.z,
    v1.w,
    v2.x,
    v2.y,
    v2.z,
    v2.w
  )
}
raylib.Vector4Divide = Vector4Divide

function Vector4Normalize(v) {
  return r.BindVector4Normalize(
    v.x,
    v.y,
    v.z,
    v.w
  )
}
raylib.Vector4Normalize = Vector4Normalize

function Vector4Min(v1, v2) {
  return r.BindVector4Min(
    v1.x,
    v1.y,
    v1.z,
    v1.w,
    v2.x,
    v2.y,
    v2.z,
    v2.w
  )
}
raylib.Vector4Min = Vector4Min

function Vector4Max(v1, v2) {
  return r.BindVector4Max(
    v1.x,
    v1.y,
    v1.z,
    v1.w,
    v2.x,
    v2.y,
    v2.z,
    v2.w
  )
}
raylib.Vector4Max = Vector4Max

function Vector4Lerp(v1, v2, amount) {
  return r.BindVector4Lerp(
    v1.x,
    v1.y,
    v1.z,
    v1.w,
    v2.x,
    v2.y,
    v2.z,
    v2.w,
    amount
  )
}
raylib.Vector4Lerp = Vector4Lerp

function Vector4MoveTowards(v, target, maxDistance) {
  return r.BindVector4MoveTowards(
    v.x,
    v.y,
    v.z,
    v.w,
    target.x,
    target.y,
    target.z,
    target.w,
    maxDistance
  )
}
raylib.Vector4MoveTowards = Vector4MoveTowards

function Vector4Invert(v) {
  return r.BindVector4Invert(
    v.x,
    v.y,
    v.z,
    v.w
  )
}
raylib.Vector4Invert = Vector4Invert

function Vector4Equals(p, q) {
  return r.BindVector4Equals(
    p.x,
    p.y,
    p.z,
    p.w,
    q.x,
    q.y,
    q.z,
    q.w
  )
}
raylib.Vector4Equals = Vector4Equals

function MatrixDeterminant(mat) {
  return r.BindMatrixDeterminant(
    mat.m0,
    mat.m4,
    mat.m8,
    mat.m12,
    mat.m1,
    mat.m5,
    mat.m9,
    mat.m13,
    mat.m2,
    mat.m6,
    mat.m10,
    mat.m14,
    mat.m3,
    mat.m7,
    mat.m11,
    mat.m15
  )
}
raylib.MatrixDeterminant = MatrixDeterminant

function MatrixTrace(mat) {
  return r.BindMatrixTrace(
    mat.m0,
    mat.m4,
    mat.m8,
    mat.m12,
    mat.m1,
    mat.m5,
    mat.m9,
    mat.m13,
    mat.m2,
    mat.m6,
    mat.m10,
    mat.m14,
    mat.m3,
    mat.m7,
    mat.m11,
    mat.m15
  )
}
raylib.MatrixTrace = MatrixTrace

function MatrixTranspose(mat) {
  return r.BindMatrixTranspose(
    mat.m0,
    mat.m4,
    mat.m8,
    mat.m12,
    mat.m1,
    mat.m5,
    mat.m9,
    mat.m13,
    mat.m2,
    mat.m6,
    mat.m10,
    mat.m14,
    mat.m3,
    mat.m7,
    mat.m11,
    mat.m15
  )
}
raylib.MatrixTranspose = MatrixTranspose

function MatrixInvert(mat) {
  return r.BindMatrixInvert(
    mat.m0,
    mat.m4,
    mat.m8,
    mat.m12,
    mat.m1,
    mat.m5,
    mat.m9,
    mat.m13,
    mat.m2,
    mat.m6,
    mat.m10,
    mat.m14,
    mat.m3,
    mat.m7,
    mat.m11,
    mat.m15
  )
}
raylib.MatrixInvert = MatrixInvert

function MatrixIdentity() {
  return r.BindMatrixIdentity()
}
raylib.MatrixIdentity = MatrixIdentity

function MatrixAdd(left, right) {
  return r.BindMatrixAdd(
    left.m0,
    left.m4,
    left.m8,
    left.m12,
    left.m1,
    left.m5,
    left.m9,
    left.m13,
    left.m2,
    left.m6,
    left.m10,
    left.m14,
    left.m3,
    left.m7,
    left.m11,
    left.m15,
    right.m0,
    right.m4,
    right.m8,
    right.m12,
    right.m1,
    right.m5,
    right.m9,
    right.m13,
    right.m2,
    right.m6,
    right.m10,
    right.m14,
    right.m3,
    right.m7,
    right.m11,
    right.m15
  )
}
raylib.MatrixAdd = MatrixAdd

function MatrixSubtract(left, right) {
  return r.BindMatrixSubtract(
    left.m0,
    left.m4,
    left.m8,
    left.m12,
    left.m1,
    left.m5,
    left.m9,
    left.m13,
    left.m2,
    left.m6,
    left.m10,
    left.m14,
    left.m3,
    left.m7,
    left.m11,
    left.m15,
    right.m0,
    right.m4,
    right.m8,
    right.m12,
    right.m1,
    right.m5,
    right.m9,
    right.m13,
    right.m2,
    right.m6,
    right.m10,
    right.m14,
    right.m3,
    right.m7,
    right.m11,
    right.m15
  )
}
raylib.MatrixSubtract = MatrixSubtract

function MatrixMultiply(left, right) {
  return r.BindMatrixMultiply(
    left.m0,
    left.m4,
    left.m8,
    left.m12,
    left.m1,
    left.m5,
    left.m9,
    left.m13,
    left.m2,
    left.m6,
    left.m10,
    left.m14,
    left.m3,
    left.m7,
    left.m11,
    left.m15,
    right.m0,
    right.m4,
    right.m8,
    right.m12,
    right.m1,
    right.m5,
    right.m9,
    right.m13,
    right.m2,
    right.m6,
    right.m10,
    right.m14,
    right.m3,
    right.m7,
    right.m11,
    right.m15
  )
}
raylib.MatrixMultiply = MatrixMultiply

function MatrixTranslate(x, y, z) {
  return r.BindMatrixTranslate(
    x,
    y,
    z
  )
}
raylib.MatrixTranslate = MatrixTranslate

function MatrixRotate(axis, angle) {
  return r.BindMatrixRotate(
    axis.x,
    axis.y,
    axis.z,
    angle
  )
}
raylib.MatrixRotate = MatrixRotate

function MatrixRotateX(angle) {
  return r.BindMatrixRotateX(
    angle
  )
}
raylib.MatrixRotateX = MatrixRotateX

function MatrixRotateY(angle) {
  return r.BindMatrixRotateY(
    angle
  )
}
raylib.MatrixRotateY = MatrixRotateY

function MatrixRotateZ(angle) {
  return r.BindMatrixRotateZ(
    angle
  )
}
raylib.MatrixRotateZ = MatrixRotateZ

function MatrixRotateXYZ(angle) {
  return r.BindMatrixRotateXYZ(
    angle.x,
    angle.y,
    angle.z
  )
}
raylib.MatrixRotateXYZ = MatrixRotateXYZ

function MatrixRotateZYX(angle) {
  return r.BindMatrixRotateZYX(
    angle.x,
    angle.y,
    angle.z
  )
}
raylib.MatrixRotateZYX = MatrixRotateZYX

function MatrixScale(x, y, z) {
  return r.BindMatrixScale(
    x,
    y,
    z
  )
}
raylib.MatrixScale = MatrixScale

function MatrixFrustum(left, right, bottom, top, nearPlane, farPlane) {
  return r.BindMatrixFrustum(
    left,
    right,
    bottom,
    top,
    nearPlane,
    farPlane
  )
}
raylib.MatrixFrustum = MatrixFrustum

function MatrixPerspective(fovY, aspect, nearPlane, farPlane) {
  return r.BindMatrixPerspective(
    fovY,
    aspect,
    nearPlane,
    farPlane
  )
}
raylib.MatrixPerspective = MatrixPerspective

function MatrixOrtho(left, right, bottom, top, nearPlane, farPlane) {
  return r.BindMatrixOrtho(
    left,
    right,
    bottom,
    top,
    nearPlane,
    farPlane
  )
}
raylib.MatrixOrtho = MatrixOrtho

function MatrixLookAt(eye, target, up) {
  return r.BindMatrixLookAt(
    eye.x,
    eye.y,
    eye.z,
    target.x,
    target.y,
    target.z,
    up.x,
    up.y,
    up.z
  )
}
raylib.MatrixLookAt = MatrixLookAt

function QuaternionAdd(q1, q2) {
  return r.BindQuaternionAdd(
    q1,
    q2
  )
}
raylib.QuaternionAdd = QuaternionAdd

function QuaternionAddValue(q, add) {
  return r.BindQuaternionAddValue(
    q,
    add
  )
}
raylib.QuaternionAddValue = QuaternionAddValue

function QuaternionSubtract(q1, q2) {
  return r.BindQuaternionSubtract(
    q1,
    q2
  )
}
raylib.QuaternionSubtract = QuaternionSubtract

function QuaternionSubtractValue(q, sub) {
  return r.BindQuaternionSubtractValue(
    q,
    sub
  )
}
raylib.QuaternionSubtractValue = QuaternionSubtractValue

function QuaternionIdentity() {
  return r.BindQuaternionIdentity()
}
raylib.QuaternionIdentity = QuaternionIdentity

function QuaternionLength(q) {
  return r.BindQuaternionLength(
    q
  )
}
raylib.QuaternionLength = QuaternionLength

function QuaternionNormalize(q) {
  return r.BindQuaternionNormalize(
    q
  )
}
raylib.QuaternionNormalize = QuaternionNormalize

function QuaternionInvert(q) {
  return r.BindQuaternionInvert(
    q
  )
}
raylib.QuaternionInvert = QuaternionInvert

function QuaternionMultiply(q1, q2) {
  return r.BindQuaternionMultiply(
    q1,
    q2
  )
}
raylib.QuaternionMultiply = QuaternionMultiply

function QuaternionScale(q, mul) {
  return r.BindQuaternionScale(
    q,
    mul
  )
}
raylib.QuaternionScale = QuaternionScale

function QuaternionDivide(q1, q2) {
  return r.BindQuaternionDivide(
    q1,
    q2
  )
}
raylib.QuaternionDivide = QuaternionDivide

function QuaternionLerp(q1, q2, amount) {
  return r.BindQuaternionLerp(
    q1,
    q2,
    amount
  )
}
raylib.QuaternionLerp = QuaternionLerp

function QuaternionNlerp(q1, q2, amount) {
  return r.BindQuaternionNlerp(
    q1,
    q2,
    amount
  )
}
raylib.QuaternionNlerp = QuaternionNlerp

function QuaternionSlerp(q1, q2, amount) {
  return r.BindQuaternionSlerp(
    q1,
    q2,
    amount
  )
}
raylib.QuaternionSlerp = QuaternionSlerp

function QuaternionCubicHermiteSpline(q1, outTangent1, q2, inTangent2, t) {
  return r.BindQuaternionCubicHermiteSpline(
    q1,
    outTangent1,
    q2,
    inTangent2,
    t
  )
}
raylib.QuaternionCubicHermiteSpline = QuaternionCubicHermiteSpline

function QuaternionFromVector3ToVector3(from, to) {
  return r.BindQuaternionFromVector3ToVector3(
    from.x,
    from.y,
    from.z,
    to.x,
    to.y,
    to.z
  )
}
raylib.QuaternionFromVector3ToVector3 = QuaternionFromVector3ToVector3

function QuaternionFromMatrix(mat) {
  return r.BindQuaternionFromMatrix(
    mat.m0,
    mat.m4,
    mat.m8,
    mat.m12,
    mat.m1,
    mat.m5,
    mat.m9,
    mat.m13,
    mat.m2,
    mat.m6,
    mat.m10,
    mat.m14,
    mat.m3,
    mat.m7,
    mat.m11,
    mat.m15
  )
}
raylib.QuaternionFromMatrix = QuaternionFromMatrix

function QuaternionToMatrix(q) {
  return r.BindQuaternionToMatrix(
    q
  )
}
raylib.QuaternionToMatrix = QuaternionToMatrix

function QuaternionFromAxisAngle(axis, angle) {
  return r.BindQuaternionFromAxisAngle(
    axis.x,
    axis.y,
    axis.z,
    angle
  )
}
raylib.QuaternionFromAxisAngle = QuaternionFromAxisAngle

function QuaternionToAxisAngle(q, outAxis, outAngle) {
  return r.BindQuaternionToAxisAngle(
    q,
    outAxis,
    outAngle
  )
}
raylib.QuaternionToAxisAngle = QuaternionToAxisAngle

function QuaternionFromEuler(pitch, yaw, roll) {
  return r.BindQuaternionFromEuler(
    pitch,
    yaw,
    roll
  )
}
raylib.QuaternionFromEuler = QuaternionFromEuler

function QuaternionToEuler(q) {
  return r.BindQuaternionToEuler(
    q
  )
}
raylib.QuaternionToEuler = QuaternionToEuler

function QuaternionTransform(q, mat) {
  return r.BindQuaternionTransform(
    q,
    mat.m0,
    mat.m4,
    mat.m8,
    mat.m12,
    mat.m1,
    mat.m5,
    mat.m9,
    mat.m13,
    mat.m2,
    mat.m6,
    mat.m10,
    mat.m14,
    mat.m3,
    mat.m7,
    mat.m11,
    mat.m15
  )
}
raylib.QuaternionTransform = QuaternionTransform

function QuaternionEquals(p, q) {
  return r.BindQuaternionEquals(
    p,
    q
  )
}
raylib.QuaternionEquals = QuaternionEquals

function MatrixDecompose(mat, translation, rotation, scale) {
  return r.BindMatrixDecompose(
    mat.m0,
    mat.m4,
    mat.m8,
    mat.m12,
    mat.m1,
    mat.m5,
    mat.m9,
    mat.m13,
    mat.m2,
    mat.m6,
    mat.m10,
    mat.m14,
    mat.m3,
    mat.m7,
    mat.m11,
    mat.m15,
    translation,
    rotation,
    scale
  )
}
raylib.MatrixDecompose = MatrixDecompose

/**
 * Enable gui controls (global state)
 *
 * @return {undefined}
 */
function GuiEnable() {
  return r.BindGuiEnable()
}
raylib.GuiEnable = GuiEnable

/**
 * Disable gui controls (global state)
 *
 * @return {undefined}
 */
function GuiDisable() {
  return r.BindGuiDisable()
}
raylib.GuiDisable = GuiDisable

/**
 * Lock gui controls (global state)
 *
 * @return {undefined}
 */
function GuiLock() {
  return r.BindGuiLock()
}
raylib.GuiLock = GuiLock

/**
 * Unlock gui controls (global state)
 *
 * @return {undefined}
 */
function GuiUnlock() {
  return r.BindGuiUnlock()
}
raylib.GuiUnlock = GuiUnlock

/**
 * Check if gui is locked (global state)
 *
 * @return {boolean} The resulting bool.
 */
function GuiIsLocked() {
  return r.BindGuiIsLocked()
}
raylib.GuiIsLocked = GuiIsLocked

/**
 * Set gui controls alpha (global state), alpha goes from 0.0f to 1.0f
 *
 * @param {number} alpha
 *
 * @return {undefined}
 */
function GuiSetAlpha(alpha) {
  return r.BindGuiSetAlpha(
    alpha
  )
}
raylib.GuiSetAlpha = GuiSetAlpha

/**
 * Set gui state (global state)
 *
 * @param {number} state
 *
 * @return {undefined}
 */
function GuiSetState(state) {
  return r.BindGuiSetState(
    state
  )
}
raylib.GuiSetState = GuiSetState

/**
 * Get gui state (global state)
 *
 * @return {number} The resulting int.
 */
function GuiGetState() {
  return r.BindGuiGetState()
}
raylib.GuiGetState = GuiGetState

/**
 * Set gui custom font (global state)
 *
 * @param {Font} font
 *
 * @return {undefined}
 */
function GuiSetFont(font) {
  return r.BindGuiSetFont(
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
raylib.GuiSetFont = GuiSetFont

/**
 * Get gui custom font (global state)
 *
 * @return {Font} The resulting Font.
 */
function GuiGetFont() {
  return r.BindGuiGetFont()
}
raylib.GuiGetFont = GuiGetFont

/**
 * Set one style property
 *
 * @param {number} control
 * @param {number} property
 * @param {number} value
 *
 * @return {undefined}
 */
function GuiSetStyle(control, property, value) {
  return r.BindGuiSetStyle(
    control,
    property,
    value
  )
}
raylib.GuiSetStyle = GuiSetStyle

/**
 * Get one style property
 *
 * @param {number} control
 * @param {number} property
 *
 * @return {number} The resulting int.
 */
function GuiGetStyle(control, property) {
  return r.BindGuiGetStyle(
    control,
    property
  )
}
raylib.GuiGetStyle = GuiGetStyle

/**
 * Load style file over global style variable (.rgs)
 *
 * @param {string} fileName
 *
 * @return {undefined}
 */
function GuiLoadStyle(fileName) {
  return r.BindGuiLoadStyle(
    fileName
  )
}
raylib.GuiLoadStyle = GuiLoadStyle

/**
 * Load style default over global style
 *
 * @return {undefined}
 */
function GuiLoadStyleDefault() {
  return r.BindGuiLoadStyleDefault()
}
raylib.GuiLoadStyleDefault = GuiLoadStyleDefault

/**
 * Enable gui tooltips (global state)
 *
 * @return {undefined}
 */
function GuiEnableTooltip() {
  return r.BindGuiEnableTooltip()
}
raylib.GuiEnableTooltip = GuiEnableTooltip

/**
 * Disable gui tooltips (global state)
 *
 * @return {undefined}
 */
function GuiDisableTooltip() {
  return r.BindGuiDisableTooltip()
}
raylib.GuiDisableTooltip = GuiDisableTooltip

/**
 * Set tooltip string
 *
 * @param {string} tooltip
 *
 * @return {undefined}
 */
function GuiSetTooltip(tooltip) {
  return r.BindGuiSetTooltip(
    tooltip
  )
}
raylib.GuiSetTooltip = GuiSetTooltip

/**
 * Get text with icon id prepended (if supported)
 *
 * @param {number} iconId
 * @param {string} text
 *
 * @return {string} The resulting const char *.
 */
function GuiIconText(iconId, text) {
  return r.BindGuiIconText(
    iconId,
    text
  )
}
raylib.GuiIconText = GuiIconText

/**
 * Set default icon drawing size
 *
 * @param {number} scale
 *
 * @return {undefined}
 */
function GuiSetIconScale(scale) {
  return r.BindGuiSetIconScale(
    scale
  )
}
raylib.GuiSetIconScale = GuiSetIconScale

/**
 * Get raygui icons data pointer
 *
 * @return {number} The resulting unsigned int *.
 */
function GuiGetIcons() {
  return r.BindGuiGetIcons()
}
raylib.GuiGetIcons = GuiGetIcons

/**
 * Load raygui icons file (.rgi) into internal icons data
 *
 * @param {string} fileName
 * @param {boolean} loadIconsName
 *
 * @return {number} The resulting char **.
 */
function GuiLoadIcons(fileName, loadIconsName) {
  return r.BindGuiLoadIcons(
    fileName,
    loadIconsName
  )
}
raylib.GuiLoadIcons = GuiLoadIcons

/**
 * Draw icon using pixel size at specified position
 *
 * @param {number} iconId
 * @param {number} posX
 * @param {number} posY
 * @param {number} pixelSize
 * @param {Color} color
 *
 * @return {undefined}
 */
function GuiDrawIcon(iconId, posX, posY, pixelSize, color) {
  return r.BindGuiDrawIcon(
    iconId,
    posX,
    posY,
    pixelSize,
    color.r,
    color.g,
    color.b,
    color.a
  )
}
raylib.GuiDrawIcon = GuiDrawIcon

/**
 * Window Box control, shows a window that can be closed
 *
 * @param {Rectangle} bounds
 * @param {string} title
 *
 * @return {number} The resulting int.
 */
function GuiWindowBox(bounds, title) {
  return r.BindGuiWindowBox(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    title
  )
}
raylib.GuiWindowBox = GuiWindowBox

/**
 * Group Box control with text name
 *
 * @param {Rectangle} bounds
 * @param {string} text
 *
 * @return {number} The resulting int.
 */
function GuiGroupBox(bounds, text) {
  return r.BindGuiGroupBox(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text
  )
}
raylib.GuiGroupBox = GuiGroupBox

/**
 * Line separator control, could contain text
 *
 * @param {Rectangle} bounds
 * @param {string} text
 *
 * @return {number} The resulting int.
 */
function GuiLine(bounds, text) {
  return r.BindGuiLine(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text
  )
}
raylib.GuiLine = GuiLine

/**
 * Panel control, useful to group controls
 *
 * @param {Rectangle} bounds
 * @param {string} text
 *
 * @return {number} The resulting int.
 */
function GuiPanel(bounds, text) {
  return r.BindGuiPanel(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text
  )
}
raylib.GuiPanel = GuiPanel

/**
 * Tab Bar control, returns TAB to be closed or -1
 *
 * @param {Rectangle} bounds
 * @param {number} text
 * @param {number} count
 * @param {number} active
 *
 * @return {number} The resulting int.
 */
function GuiTabBar(bounds, text, count, active) {
  return r.BindGuiTabBar(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    count,
    active
  )
}
raylib.GuiTabBar = GuiTabBar

/**
 * Scroll Panel control
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {Rectangle} content
 * @param {number} scroll
 * @param {number} view
 *
 * @return {number} The resulting int.
 */
function GuiScrollPanel(bounds, text, content, scroll, view) {
  return r.BindGuiScrollPanel(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    content.x,
    content.y,
    content.width,
    content.height,
    scroll,
    view
  )
}
raylib.GuiScrollPanel = GuiScrollPanel

/**
 * Label control
 *
 * @param {Rectangle} bounds
 * @param {string} text
 *
 * @return {number} The resulting int.
 */
function GuiLabel(bounds, text) {
  return r.BindGuiLabel(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text
  )
}
raylib.GuiLabel = GuiLabel

/**
 * Button control, returns true when clicked
 *
 * @param {Rectangle} bounds
 * @param {string} text
 *
 * @return {number} The resulting int.
 */
function GuiButton(bounds, text) {
  return r.BindGuiButton(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text
  )
}
raylib.GuiButton = GuiButton

/**
 * Label button control, returns true when clicked
 *
 * @param {Rectangle} bounds
 * @param {string} text
 *
 * @return {number} The resulting int.
 */
function GuiLabelButton(bounds, text) {
  return r.BindGuiLabelButton(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text
  )
}
raylib.GuiLabelButton = GuiLabelButton

/**
 * Toggle Button control
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} active
 *
 * @return {number} The resulting int.
 */
function GuiToggle(bounds, text, active) {
  return r.BindGuiToggle(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    active
  )
}
raylib.GuiToggle = GuiToggle

/**
 * Toggle Group control
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} active
 *
 * @return {number} The resulting int.
 */
function GuiToggleGroup(bounds, text, active) {
  return r.BindGuiToggleGroup(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    active
  )
}
raylib.GuiToggleGroup = GuiToggleGroup

/**
 * Toggle Slider control
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} active
 *
 * @return {number} The resulting int.
 */
function GuiToggleSlider(bounds, text, active) {
  return r.BindGuiToggleSlider(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    active
  )
}
raylib.GuiToggleSlider = GuiToggleSlider

/**
 * Check Box control, returns true when active
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} checked
 *
 * @return {number} The resulting int.
 */
function GuiCheckBox(bounds, text, checked) {
  return r.BindGuiCheckBox(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    checked
  )
}
raylib.GuiCheckBox = GuiCheckBox

/**
 * Combo Box control
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} active
 *
 * @return {number} The resulting int.
 */
function GuiComboBox(bounds, text, active) {
  return r.BindGuiComboBox(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    active
  )
}
raylib.GuiComboBox = GuiComboBox

/**
 * Dropdown Box control
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} active
 * @param {boolean} editMode
 *
 * @return {number} The resulting int.
 */
function GuiDropdownBox(bounds, text, active, editMode) {
  return r.BindGuiDropdownBox(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    active,
    editMode
  )
}
raylib.GuiDropdownBox = GuiDropdownBox

/**
 * Spinner control
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 * @param {boolean} editMode
 *
 * @return {number} The resulting int.
 */
function GuiSpinner(bounds, text, value, minValue, maxValue, editMode) {
  return r.BindGuiSpinner(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    value,
    minValue,
    maxValue,
    editMode
  )
}
raylib.GuiSpinner = GuiSpinner

/**
 * Value Box control, updates input text with numbers
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 * @param {boolean} editMode
 *
 * @return {number} The resulting int.
 */
function GuiValueBox(bounds, text, value, minValue, maxValue, editMode) {
  return r.BindGuiValueBox(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    value,
    minValue,
    maxValue,
    editMode
  )
}
raylib.GuiValueBox = GuiValueBox

/**
 * Value box control for float values
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {string} textValue
 * @param {number} value
 * @param {boolean} editMode
 *
 * @return {number} The resulting int.
 */
function GuiValueBoxFloat(bounds, text, textValue, value, editMode) {
  return r.BindGuiValueBoxFloat(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    textValue,
    value,
    editMode
  )
}
raylib.GuiValueBoxFloat = GuiValueBoxFloat

/**
 * Text Box control, updates input text
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} textSize
 * @param {boolean} editMode
 *
 * @return {number} The resulting int.
 */
function GuiTextBox(bounds, text, textSize, editMode) {
  return r.BindGuiTextBox(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    textSize,
    editMode
  )
}
raylib.GuiTextBox = GuiTextBox

/**
 * Slider control
 *
 * @param {Rectangle} bounds
 * @param {string} textLeft
 * @param {string} textRight
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 *
 * @return {number} The resulting int.
 */
function GuiSlider(bounds, textLeft, textRight, value, minValue, maxValue) {
  return r.BindGuiSlider(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    textLeft,
    textRight,
    value,
    minValue,
    maxValue
  )
}
raylib.GuiSlider = GuiSlider

/**
 * Slider Bar control
 *
 * @param {Rectangle} bounds
 * @param {string} textLeft
 * @param {string} textRight
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 *
 * @return {number} The resulting int.
 */
function GuiSliderBar(bounds, textLeft, textRight, value, minValue, maxValue) {
  return r.BindGuiSliderBar(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    textLeft,
    textRight,
    value,
    minValue,
    maxValue
  )
}
raylib.GuiSliderBar = GuiSliderBar

/**
 * Progress Bar control
 *
 * @param {Rectangle} bounds
 * @param {string} textLeft
 * @param {string} textRight
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 *
 * @return {number} The resulting int.
 */
function GuiProgressBar(bounds, textLeft, textRight, value, minValue, maxValue) {
  return r.BindGuiProgressBar(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    textLeft,
    textRight,
    value,
    minValue,
    maxValue
  )
}
raylib.GuiProgressBar = GuiProgressBar

/**
 * Status Bar control, shows info text
 *
 * @param {Rectangle} bounds
 * @param {string} text
 *
 * @return {number} The resulting int.
 */
function GuiStatusBar(bounds, text) {
  return r.BindGuiStatusBar(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text
  )
}
raylib.GuiStatusBar = GuiStatusBar

/**
 * Dummy control for placeholders
 *
 * @param {Rectangle} bounds
 * @param {string} text
 *
 * @return {number} The resulting int.
 */
function GuiDummyRec(bounds, text) {
  return r.BindGuiDummyRec(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text
  )
}
raylib.GuiDummyRec = GuiDummyRec

/**
 * Grid control
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} spacing
 * @param {number} subdivs
 * @param {number} mouseCell
 *
 * @return {number} The resulting int.
 */
function GuiGrid(bounds, text, spacing, subdivs, mouseCell) {
  return r.BindGuiGrid(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    spacing,
    subdivs,
    mouseCell
  )
}
raylib.GuiGrid = GuiGrid

/**
 * List View control
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} scrollIndex
 * @param {number} active
 *
 * @return {number} The resulting int.
 */
function GuiListView(bounds, text, scrollIndex, active) {
  return r.BindGuiListView(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    scrollIndex,
    active
  )
}
raylib.GuiListView = GuiListView

/**
 * List View with extended parameters
 *
 * @param {Rectangle} bounds
 * @param {number} text
 * @param {number} count
 * @param {number} scrollIndex
 * @param {number} active
 * @param {number} focus
 *
 * @return {number} The resulting int.
 */
function GuiListViewEx(bounds, text, count, scrollIndex, active, focus) {
  return r.BindGuiListViewEx(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    count,
    scrollIndex,
    active,
    focus
  )
}
raylib.GuiListViewEx = GuiListViewEx

/**
 * Message Box control, displays a message
 *
 * @param {Rectangle} bounds
 * @param {string} title
 * @param {string} message
 * @param {string} buttons
 *
 * @return {number} The resulting int.
 */
function GuiMessageBox(bounds, title, message, buttons) {
  return r.BindGuiMessageBox(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    title,
    message,
    buttons
  )
}
raylib.GuiMessageBox = GuiMessageBox

/**
 * Text Input Box control, ask for text, supports secret
 *
 * @param {Rectangle} bounds
 * @param {string} title
 * @param {string} message
 * @param {string} buttons
 * @param {string} text
 * @param {number} textMaxSize
 * @param {number} secretViewActive
 *
 * @return {number} The resulting int.
 */
function GuiTextInputBox(bounds, title, message, buttons, text, textMaxSize, secretViewActive) {
  return r.BindGuiTextInputBox(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    title,
    message,
    buttons,
    text,
    textMaxSize,
    secretViewActive
  )
}
raylib.GuiTextInputBox = GuiTextInputBox

/**
 * Color Picker control (multiple color controls)
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} color
 *
 * @return {number} The resulting int.
 */
function GuiColorPicker(bounds, text, color) {
  return r.BindGuiColorPicker(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    color
  )
}
raylib.GuiColorPicker = GuiColorPicker

/**
 * Color Panel control
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} color
 *
 * @return {number} The resulting int.
 */
function GuiColorPanel(bounds, text, color) {
  return r.BindGuiColorPanel(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    color
  )
}
raylib.GuiColorPanel = GuiColorPanel

/**
 * Color Bar Alpha control
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} alpha
 *
 * @return {number} The resulting int.
 */
function GuiColorBarAlpha(bounds, text, alpha) {
  return r.BindGuiColorBarAlpha(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    alpha
  )
}
raylib.GuiColorBarAlpha = GuiColorBarAlpha

/**
 * Color Bar Hue control
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} value
 *
 * @return {number} The resulting int.
 */
function GuiColorBarHue(bounds, text, value) {
  return r.BindGuiColorBarHue(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    value
  )
}
raylib.GuiColorBarHue = GuiColorBarHue

/**
 * Color Picker control that avoids conversion to RGB on each call (multiple color controls)
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} colorHsv
 *
 * @return {number} The resulting int.
 */
function GuiColorPickerHSV(bounds, text, colorHsv) {
  return r.BindGuiColorPickerHSV(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    colorHsv
  )
}
raylib.GuiColorPickerHSV = GuiColorPickerHSV

/**
 * Color Panel control that updates Hue-Saturation-Value color value, used by GuiColorPickerHSV()
 *
 * @param {Rectangle} bounds
 * @param {string} text
 * @param {number} colorHsv
 *
 * @return {number} The resulting int.
 */
function GuiColorPanelHSV(bounds, text, colorHsv) {
  return r.BindGuiColorPanelHSV(
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    text,
    colorHsv
  )
}
raylib.GuiColorPanelHSV = GuiColorPanelHSV

/**
 * Choose the current matrix to be transformed
 *
 * @param {number} mode
 *
 * @return {undefined}
 */
function rlMatrixMode(mode) {
  return r.BindrlMatrixMode(
    mode
  )
}
raylib.rlMatrixMode = rlMatrixMode

/**
 * Push the current matrix to stack
 *
 * @return {undefined}
 */
function rlPushMatrix() {
  return r.BindrlPushMatrix()
}
raylib.rlPushMatrix = rlPushMatrix

/**
 * Pop latest inserted matrix from stack
 *
 * @return {undefined}
 */
function rlPopMatrix() {
  return r.BindrlPopMatrix()
}
raylib.rlPopMatrix = rlPopMatrix

/**
 * Reset current matrix to identity matrix
 *
 * @return {undefined}
 */
function rlLoadIdentity() {
  return r.BindrlLoadIdentity()
}
raylib.rlLoadIdentity = rlLoadIdentity

/**
 * Multiply the current matrix by a translation matrix
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 *
 * @return {undefined}
 */
function rlTranslatef(x, y, z) {
  return r.BindrlTranslatef(
    x,
    y,
    z
  )
}
raylib.rlTranslatef = rlTranslatef

/**
 * Multiply the current matrix by a rotation matrix
 *
 * @param {number} angle
 * @param {number} x
 * @param {number} y
 * @param {number} z
 *
 * @return {undefined}
 */
function rlRotatef(angle, x, y, z) {
  return r.BindrlRotatef(
    angle,
    x,
    y,
    z
  )
}
raylib.rlRotatef = rlRotatef

/**
 * Multiply the current matrix by a scaling matrix
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 *
 * @return {undefined}
 */
function rlScalef(x, y, z) {
  return r.BindrlScalef(
    x,
    y,
    z
  )
}
raylib.rlScalef = rlScalef

/**
 * Multiply the current matrix by another matrix
 *
 * @param {number} matf
 *
 * @return {undefined}
 */
function rlMultMatrixf(matf) {
  return r.BindrlMultMatrixf(
    matf
  )
}
raylib.rlMultMatrixf = rlMultMatrixf

function rlFrustum(left, right, bottom, top, znear, zfar) {
  return r.BindrlFrustum(
    left,
    right,
    bottom,
    top,
    znear,
    zfar
  )
}
raylib.rlFrustum = rlFrustum

function rlOrtho(left, right, bottom, top, znear, zfar) {
  return r.BindrlOrtho(
    left,
    right,
    bottom,
    top,
    znear,
    zfar
  )
}
raylib.rlOrtho = rlOrtho

/**
 * Set the viewport area
 *
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 *
 * @return {undefined}
 */
function rlViewport(x, y, width, height) {
  return r.BindrlViewport(
    x,
    y,
    width,
    height
  )
}
raylib.rlViewport = rlViewport

/**
 * Set clip planes distances
 *
 * @param {number} nearPlane
 * @param {number} farPlane
 *
 * @return {undefined}
 */
function rlSetClipPlanes(nearPlane, farPlane) {
  return r.BindrlSetClipPlanes(
    nearPlane,
    farPlane
  )
}
raylib.rlSetClipPlanes = rlSetClipPlanes

/**
 * Get cull plane distance near
 *
 * @return {number} The resulting double.
 */
function rlGetCullDistanceNear() {
  return r.BindrlGetCullDistanceNear()
}
raylib.rlGetCullDistanceNear = rlGetCullDistanceNear

/**
 * Get cull plane distance far
 *
 * @return {number} The resulting double.
 */
function rlGetCullDistanceFar() {
  return r.BindrlGetCullDistanceFar()
}
raylib.rlGetCullDistanceFar = rlGetCullDistanceFar

/**
 * Initialize drawing mode (how to organize vertex)
 *
 * @param {number} mode
 *
 * @return {undefined}
 */
function rlBegin(mode) {
  return r.BindrlBegin(
    mode
  )
}
raylib.rlBegin = rlBegin

/**
 * Finish vertex providing
 *
 * @return {undefined}
 */
function rlEnd() {
  return r.BindrlEnd()
}
raylib.rlEnd = rlEnd

/**
 * Define one vertex (position) - 2 int
 *
 * @param {number} x
 * @param {number} y
 *
 * @return {undefined}
 */
function rlVertex2i(x, y) {
  return r.BindrlVertex2i(
    x,
    y
  )
}
raylib.rlVertex2i = rlVertex2i

/**
 * Define one vertex (position) - 2 float
 *
 * @param {number} x
 * @param {number} y
 *
 * @return {undefined}
 */
function rlVertex2f(x, y) {
  return r.BindrlVertex2f(
    x,
    y
  )
}
raylib.rlVertex2f = rlVertex2f

/**
 * Define one vertex (position) - 3 float
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 *
 * @return {undefined}
 */
function rlVertex3f(x, y, z) {
  return r.BindrlVertex3f(
    x,
    y,
    z
  )
}
raylib.rlVertex3f = rlVertex3f

/**
 * Define one vertex (texture coordinate) - 2 float
 *
 * @param {number} x
 * @param {number} y
 *
 * @return {undefined}
 */
function rlTexCoord2f(x, y) {
  return r.BindrlTexCoord2f(
    x,
    y
  )
}
raylib.rlTexCoord2f = rlTexCoord2f

/**
 * Define one vertex (normal) - 3 float
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 *
 * @return {undefined}
 */
function rlNormal3f(x, y, z) {
  return r.BindrlNormal3f(
    x,
    y,
    z
  )
}
raylib.rlNormal3f = rlNormal3f

/**
 * Define one vertex (color) - 4 byte
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 *
 * @return {undefined}
 */
function rlColor4ub(r, g, b, a) {
  return r.BindrlColor4ub(
    r,
    g,
    b,
    a
  )
}
raylib.rlColor4ub = rlColor4ub

/**
 * Define one vertex (color) - 3 float
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 *
 * @return {undefined}
 */
function rlColor3f(x, y, z) {
  return r.BindrlColor3f(
    x,
    y,
    z
  )
}
raylib.rlColor3f = rlColor3f

/**
 * Define one vertex (color) - 4 float
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 *
 * @return {undefined}
 */
function rlColor4f(x, y, z, w) {
  return r.BindrlColor4f(
    x,
    y,
    z,
    w
  )
}
raylib.rlColor4f = rlColor4f

/**
 * Enable vertex array (VAO, if supported)
 *
 * @param {number} vaoId
 *
 * @return {boolean} The resulting bool.
 */
function rlEnableVertexArray(vaoId) {
  return r.BindrlEnableVertexArray(
    vaoId
  )
}
raylib.rlEnableVertexArray = rlEnableVertexArray

/**
 * Disable vertex array (VAO, if supported)
 *
 * @return {undefined}
 */
function rlDisableVertexArray() {
  return r.BindrlDisableVertexArray()
}
raylib.rlDisableVertexArray = rlDisableVertexArray

/**
 * Enable vertex buffer (VBO)
 *
 * @param {number} id
 *
 * @return {undefined}
 */
function rlEnableVertexBuffer(id) {
  return r.BindrlEnableVertexBuffer(
    id
  )
}
raylib.rlEnableVertexBuffer = rlEnableVertexBuffer

/**
 * Disable vertex buffer (VBO)
 *
 * @return {undefined}
 */
function rlDisableVertexBuffer() {
  return r.BindrlDisableVertexBuffer()
}
raylib.rlDisableVertexBuffer = rlDisableVertexBuffer

/**
 * Enable vertex buffer element (VBO element)
 *
 * @param {number} id
 *
 * @return {undefined}
 */
function rlEnableVertexBufferElement(id) {
  return r.BindrlEnableVertexBufferElement(
    id
  )
}
raylib.rlEnableVertexBufferElement = rlEnableVertexBufferElement

/**
 * Disable vertex buffer element (VBO element)
 *
 * @return {undefined}
 */
function rlDisableVertexBufferElement() {
  return r.BindrlDisableVertexBufferElement()
}
raylib.rlDisableVertexBufferElement = rlDisableVertexBufferElement

/**
 * Enable vertex attribute index
 *
 * @param {number} index
 *
 * @return {undefined}
 */
function rlEnableVertexAttribute(index) {
  return r.BindrlEnableVertexAttribute(
    index
  )
}
raylib.rlEnableVertexAttribute = rlEnableVertexAttribute

/**
 * Disable vertex attribute index
 *
 * @param {number} index
 *
 * @return {undefined}
 */
function rlDisableVertexAttribute(index) {
  return r.BindrlDisableVertexAttribute(
    index
  )
}
raylib.rlDisableVertexAttribute = rlDisableVertexAttribute

/**
 * Select and active a texture slot
 *
 * @param {number} slot
 *
 * @return {undefined}
 */
function rlActiveTextureSlot(slot) {
  return r.BindrlActiveTextureSlot(
    slot
  )
}
raylib.rlActiveTextureSlot = rlActiveTextureSlot

/**
 * Enable texture
 *
 * @param {number} id
 *
 * @return {undefined}
 */
function rlEnableTexture(id) {
  return r.BindrlEnableTexture(
    id
  )
}
raylib.rlEnableTexture = rlEnableTexture

/**
 * Disable texture
 *
 * @return {undefined}
 */
function rlDisableTexture() {
  return r.BindrlDisableTexture()
}
raylib.rlDisableTexture = rlDisableTexture

/**
 * Enable texture cubemap
 *
 * @param {number} id
 *
 * @return {undefined}
 */
function rlEnableTextureCubemap(id) {
  return r.BindrlEnableTextureCubemap(
    id
  )
}
raylib.rlEnableTextureCubemap = rlEnableTextureCubemap

/**
 * Disable texture cubemap
 *
 * @return {undefined}
 */
function rlDisableTextureCubemap() {
  return r.BindrlDisableTextureCubemap()
}
raylib.rlDisableTextureCubemap = rlDisableTextureCubemap

/**
 * Set texture parameters (filter, wrap)
 *
 * @param {number} id
 * @param {number} param
 * @param {number} value
 *
 * @return {undefined}
 */
function rlTextureParameters(id, param, value) {
  return r.BindrlTextureParameters(
    id,
    param,
    value
  )
}
raylib.rlTextureParameters = rlTextureParameters

/**
 * Set cubemap parameters (filter, wrap)
 *
 * @param {number} id
 * @param {number} param
 * @param {number} value
 *
 * @return {undefined}
 */
function rlCubemapParameters(id, param, value) {
  return r.BindrlCubemapParameters(
    id,
    param,
    value
  )
}
raylib.rlCubemapParameters = rlCubemapParameters

/**
 * Enable shader program
 *
 * @param {number} id
 *
 * @return {undefined}
 */
function rlEnableShader(id) {
  return r.BindrlEnableShader(
    id
  )
}
raylib.rlEnableShader = rlEnableShader

/**
 * Disable shader program
 *
 * @return {undefined}
 */
function rlDisableShader() {
  return r.BindrlDisableShader()
}
raylib.rlDisableShader = rlDisableShader

/**
 * Enable render texture (fbo)
 *
 * @param {number} id
 *
 * @return {undefined}
 */
function rlEnableFramebuffer(id) {
  return r.BindrlEnableFramebuffer(
    id
  )
}
raylib.rlEnableFramebuffer = rlEnableFramebuffer

/**
 * Disable render texture (fbo), return to default framebuffer
 *
 * @return {undefined}
 */
function rlDisableFramebuffer() {
  return r.BindrlDisableFramebuffer()
}
raylib.rlDisableFramebuffer = rlDisableFramebuffer

/**
 * Get the currently active render texture (fbo), 0 for default framebuffer
 *
 * @return {number} The resulting unsigned int.
 */
function rlGetActiveFramebuffer() {
  return r.BindrlGetActiveFramebuffer()
}
raylib.rlGetActiveFramebuffer = rlGetActiveFramebuffer

/**
 * Activate multiple draw color buffers
 *
 * @param {number} count
 *
 * @return {undefined}
 */
function rlActiveDrawBuffers(count) {
  return r.BindrlActiveDrawBuffers(
    count
  )
}
raylib.rlActiveDrawBuffers = rlActiveDrawBuffers

/**
 * Blit active framebuffer to main framebuffer
 *
 * @param {number} srcX
 * @param {number} srcY
 * @param {number} srcWidth
 * @param {number} srcHeight
 * @param {number} dstX
 * @param {number} dstY
 * @param {number} dstWidth
 * @param {number} dstHeight
 * @param {number} bufferMask
 *
 * @return {undefined}
 */
function rlBlitFramebuffer(srcX, srcY, srcWidth, srcHeight, dstX, dstY, dstWidth, dstHeight, bufferMask) {
  return r.BindrlBlitFramebuffer(
    srcX,
    srcY,
    srcWidth,
    srcHeight,
    dstX,
    dstY,
    dstWidth,
    dstHeight,
    bufferMask
  )
}
raylib.rlBlitFramebuffer = rlBlitFramebuffer

/**
 * Bind framebuffer (FBO)
 *
 * @param {number} target
 * @param {number} framebuffer
 *
 * @return {undefined}
 */
function rlBindFramebuffer(target, framebuffer) {
  return r.BindrlBindFramebuffer(
    target,
    framebuffer
  )
}
raylib.rlBindFramebuffer = rlBindFramebuffer

/**
 * Enable color blending
 *
 * @return {undefined}
 */
function rlEnableColorBlend() {
  return r.BindrlEnableColorBlend()
}
raylib.rlEnableColorBlend = rlEnableColorBlend

/**
 * Disable color blending
 *
 * @return {undefined}
 */
function rlDisableColorBlend() {
  return r.BindrlDisableColorBlend()
}
raylib.rlDisableColorBlend = rlDisableColorBlend

/**
 * Enable depth test
 *
 * @return {undefined}
 */
function rlEnableDepthTest() {
  return r.BindrlEnableDepthTest()
}
raylib.rlEnableDepthTest = rlEnableDepthTest

/**
 * Disable depth test
 *
 * @return {undefined}
 */
function rlDisableDepthTest() {
  return r.BindrlDisableDepthTest()
}
raylib.rlDisableDepthTest = rlDisableDepthTest

/**
 * Enable depth write
 *
 * @return {undefined}
 */
function rlEnableDepthMask() {
  return r.BindrlEnableDepthMask()
}
raylib.rlEnableDepthMask = rlEnableDepthMask

/**
 * Disable depth write
 *
 * @return {undefined}
 */
function rlDisableDepthMask() {
  return r.BindrlDisableDepthMask()
}
raylib.rlDisableDepthMask = rlDisableDepthMask

/**
 * Enable backface culling
 *
 * @return {undefined}
 */
function rlEnableBackfaceCulling() {
  return r.BindrlEnableBackfaceCulling()
}
raylib.rlEnableBackfaceCulling = rlEnableBackfaceCulling

/**
 * Disable backface culling
 *
 * @return {undefined}
 */
function rlDisableBackfaceCulling() {
  return r.BindrlDisableBackfaceCulling()
}
raylib.rlDisableBackfaceCulling = rlDisableBackfaceCulling

/**
 * Color mask control
 *
 * @param {boolean} r
 * @param {boolean} g
 * @param {boolean} b
 * @param {boolean} a
 *
 * @return {undefined}
 */
function rlColorMask(r, g, b, a) {
  return r.BindrlColorMask(
    r,
    g,
    b,
    a
  )
}
raylib.rlColorMask = rlColorMask

/**
 * Set face culling mode
 *
 * @param {number} mode
 *
 * @return {undefined}
 */
function rlSetCullFace(mode) {
  return r.BindrlSetCullFace(
    mode
  )
}
raylib.rlSetCullFace = rlSetCullFace

/**
 * Enable scissor test
 *
 * @return {undefined}
 */
function rlEnableScissorTest() {
  return r.BindrlEnableScissorTest()
}
raylib.rlEnableScissorTest = rlEnableScissorTest

/**
 * Disable scissor test
 *
 * @return {undefined}
 */
function rlDisableScissorTest() {
  return r.BindrlDisableScissorTest()
}
raylib.rlDisableScissorTest = rlDisableScissorTest

/**
 * Scissor test
 *
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 *
 * @return {undefined}
 */
function rlScissor(x, y, width, height) {
  return r.BindrlScissor(
    x,
    y,
    width,
    height
  )
}
raylib.rlScissor = rlScissor

/**
 * Enable wire mode
 *
 * @return {undefined}
 */
function rlEnableWireMode() {
  return r.BindrlEnableWireMode()
}
raylib.rlEnableWireMode = rlEnableWireMode

/**
 * Enable point mode
 *
 * @return {undefined}
 */
function rlEnablePointMode() {
  return r.BindrlEnablePointMode()
}
raylib.rlEnablePointMode = rlEnablePointMode

/**
 * Disable wire (and point) mode
 *
 * @return {undefined}
 */
function rlDisableWireMode() {
  return r.BindrlDisableWireMode()
}
raylib.rlDisableWireMode = rlDisableWireMode

/**
 * Set the line drawing width
 *
 * @param {number} width
 *
 * @return {undefined}
 */
function rlSetLineWidth(width) {
  return r.BindrlSetLineWidth(
    width
  )
}
raylib.rlSetLineWidth = rlSetLineWidth

/**
 * Get the line drawing width
 *
 * @return {number} The resulting float.
 */
function rlGetLineWidth() {
  return r.BindrlGetLineWidth()
}
raylib.rlGetLineWidth = rlGetLineWidth

/**
 * Enable line aliasing
 *
 * @return {undefined}
 */
function rlEnableSmoothLines() {
  return r.BindrlEnableSmoothLines()
}
raylib.rlEnableSmoothLines = rlEnableSmoothLines

/**
 * Disable line aliasing
 *
 * @return {undefined}
 */
function rlDisableSmoothLines() {
  return r.BindrlDisableSmoothLines()
}
raylib.rlDisableSmoothLines = rlDisableSmoothLines

/**
 * Enable stereo rendering
 *
 * @return {undefined}
 */
function rlEnableStereoRender() {
  return r.BindrlEnableStereoRender()
}
raylib.rlEnableStereoRender = rlEnableStereoRender

/**
 * Disable stereo rendering
 *
 * @return {undefined}
 */
function rlDisableStereoRender() {
  return r.BindrlDisableStereoRender()
}
raylib.rlDisableStereoRender = rlDisableStereoRender

/**
 * Check if stereo render is enabled
 *
 * @return {boolean} The resulting bool.
 */
function rlIsStereoRenderEnabled() {
  return r.BindrlIsStereoRenderEnabled()
}
raylib.rlIsStereoRenderEnabled = rlIsStereoRenderEnabled

/**
 * Clear color buffer with color
 *
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 *
 * @return {undefined}
 */
function rlClearColor(r, g, b, a) {
  return r.BindrlClearColor(
    r,
    g,
    b,
    a
  )
}
raylib.rlClearColor = rlClearColor

/**
 * Clear used screen buffers (color and depth)
 *
 * @return {undefined}
 */
function rlClearScreenBuffers() {
  return r.BindrlClearScreenBuffers()
}
raylib.rlClearScreenBuffers = rlClearScreenBuffers

/**
 * Check and log OpenGL error codes
 *
 * @return {undefined}
 */
function rlCheckErrors() {
  return r.BindrlCheckErrors()
}
raylib.rlCheckErrors = rlCheckErrors

/**
 * Set blending mode
 *
 * @param {number} mode
 *
 * @return {undefined}
 */
function rlSetBlendMode(mode) {
  return r.BindrlSetBlendMode(
    mode
  )
}
raylib.rlSetBlendMode = rlSetBlendMode

/**
 * Set blending mode factor and equation (using OpenGL factors)
 *
 * @param {number} glSrcFactor
 * @param {number} glDstFactor
 * @param {number} glEquation
 *
 * @return {undefined}
 */
function rlSetBlendFactors(glSrcFactor, glDstFactor, glEquation) {
  return r.BindrlSetBlendFactors(
    glSrcFactor,
    glDstFactor,
    glEquation
  )
}
raylib.rlSetBlendFactors = rlSetBlendFactors

/**
 * Set blending mode factors and equations separately (using OpenGL factors)
 *
 * @param {number} glSrcRGB
 * @param {number} glDstRGB
 * @param {number} glSrcAlpha
 * @param {number} glDstAlpha
 * @param {number} glEqRGB
 * @param {number} glEqAlpha
 *
 * @return {undefined}
 */
function rlSetBlendFactorsSeparate(glSrcRGB, glDstRGB, glSrcAlpha, glDstAlpha, glEqRGB, glEqAlpha) {
  return r.BindrlSetBlendFactorsSeparate(
    glSrcRGB,
    glDstRGB,
    glSrcAlpha,
    glDstAlpha,
    glEqRGB,
    glEqAlpha
  )
}
raylib.rlSetBlendFactorsSeparate = rlSetBlendFactorsSeparate

/**
 * Initialize rlgl (buffers, shaders, textures, states)
 *
 * @param {number} width
 * @param {number} height
 *
 * @return {undefined}
 */
function rlglInit(width, height) {
  return r.BindrlglInit(
    width,
    height
  )
}
raylib.rlglInit = rlglInit

/**
 * De-initialize rlgl (buffers, shaders, textures)
 *
 * @return {undefined}
 */
function rlglClose() {
  return r.BindrlglClose()
}
raylib.rlglClose = rlglClose

/**
 * Load OpenGL extensions (loader function required)
 *
 * @param {number} loader
 *
 * @return {undefined}
 */
function rlLoadExtensions(loader) {
  return r.BindrlLoadExtensions(
    loader
  )
}
raylib.rlLoadExtensions = rlLoadExtensions

/**
 * Get current OpenGL version
 *
 * @return {number} The resulting int.
 */
function rlGetVersion() {
  return r.BindrlGetVersion()
}
raylib.rlGetVersion = rlGetVersion

/**
 * Set current framebuffer width
 *
 * @param {number} width
 *
 * @return {undefined}
 */
function rlSetFramebufferWidth(width) {
  return r.BindrlSetFramebufferWidth(
    width
  )
}
raylib.rlSetFramebufferWidth = rlSetFramebufferWidth

/**
 * Get default framebuffer width
 *
 * @return {number} The resulting int.
 */
function rlGetFramebufferWidth() {
  return r.BindrlGetFramebufferWidth()
}
raylib.rlGetFramebufferWidth = rlGetFramebufferWidth

/**
 * Set current framebuffer height
 *
 * @param {number} height
 *
 * @return {undefined}
 */
function rlSetFramebufferHeight(height) {
  return r.BindrlSetFramebufferHeight(
    height
  )
}
raylib.rlSetFramebufferHeight = rlSetFramebufferHeight

/**
 * Get default framebuffer height
 *
 * @return {number} The resulting int.
 */
function rlGetFramebufferHeight() {
  return r.BindrlGetFramebufferHeight()
}
raylib.rlGetFramebufferHeight = rlGetFramebufferHeight

/**
 * Get default texture id
 *
 * @return {number} The resulting unsigned int.
 */
function rlGetTextureIdDefault() {
  return r.BindrlGetTextureIdDefault()
}
raylib.rlGetTextureIdDefault = rlGetTextureIdDefault

/**
 * Get default shader id
 *
 * @return {number} The resulting unsigned int.
 */
function rlGetShaderIdDefault() {
  return r.BindrlGetShaderIdDefault()
}
raylib.rlGetShaderIdDefault = rlGetShaderIdDefault

/**
 * Get default shader locations
 *
 * @return {number} The resulting int *.
 */
function rlGetShaderLocsDefault() {
  return r.BindrlGetShaderLocsDefault()
}
raylib.rlGetShaderLocsDefault = rlGetShaderLocsDefault

/**
 * Load a render batch system
 *
 * @param {number} numBuffers
 * @param {number} bufferElements
 *
 * @return {rlRenderBatch} The resulting rlRenderBatch.
 */
function rlLoadRenderBatch(numBuffers, bufferElements) {
  return r.BindrlLoadRenderBatch(
    numBuffers,
    bufferElements
  )
}
raylib.rlLoadRenderBatch = rlLoadRenderBatch

/**
 * Unload render batch system
 *
 * @param {rlRenderBatch} batch
 *
 * @return {undefined}
 */
function rlUnloadRenderBatch(batch) {
  return r.BindrlUnloadRenderBatch(
    batch.bufferCount,
    batch.currentBuffer,
    batch.vertexBuffer,
    batch.draws,
    batch.drawCounter,
    batch.currentDepth
  )
}
raylib.rlUnloadRenderBatch = rlUnloadRenderBatch

/**
 * Draw render batch data (Update->Draw->Reset)
 *
 * @param {number} batch
 *
 * @return {undefined}
 */
function rlDrawRenderBatch(batch) {
  return r.BindrlDrawRenderBatch(
    batch
  )
}
raylib.rlDrawRenderBatch = rlDrawRenderBatch

/**
 * Set the active render batch for rlgl (NULL for default internal)
 *
 * @param {number} batch
 *
 * @return {undefined}
 */
function rlSetRenderBatchActive(batch) {
  return r.BindrlSetRenderBatchActive(
    batch
  )
}
raylib.rlSetRenderBatchActive = rlSetRenderBatchActive

/**
 * Update and draw internal render batch
 *
 * @return {undefined}
 */
function rlDrawRenderBatchActive() {
  return r.BindrlDrawRenderBatchActive()
}
raylib.rlDrawRenderBatchActive = rlDrawRenderBatchActive

/**
 * Check internal buffer overflow for a given number of vertex
 *
 * @param {number} vCount
 *
 * @return {boolean} The resulting bool.
 */
function rlCheckRenderBatchLimit(vCount) {
  return r.BindrlCheckRenderBatchLimit(
    vCount
  )
}
raylib.rlCheckRenderBatchLimit = rlCheckRenderBatchLimit

/**
 * Set current texture for render batch and check buffers limits
 *
 * @param {number} id
 *
 * @return {undefined}
 */
function rlSetTexture(id) {
  return r.BindrlSetTexture(
    id
  )
}
raylib.rlSetTexture = rlSetTexture

/**
 * Load vertex array (vao) if supported
 *
 * @return {number} The resulting unsigned int.
 */
function rlLoadVertexArray() {
  return r.BindrlLoadVertexArray()
}
raylib.rlLoadVertexArray = rlLoadVertexArray

/**
 * Load a vertex buffer object
 *
 * @param {number} buffer
 * @param {number} size
 * @param {boolean} dynamic
 *
 * @return {number} The resulting unsigned int.
 */
function rlLoadVertexBuffer(buffer, size, dynamic) {
  return r.BindrlLoadVertexBuffer(
    buffer,
    size,
    dynamic
  )
}
raylib.rlLoadVertexBuffer = rlLoadVertexBuffer

/**
 * Load vertex buffer elements object
 *
 * @param {number} buffer
 * @param {number} size
 * @param {boolean} dynamic
 *
 * @return {number} The resulting unsigned int.
 */
function rlLoadVertexBufferElement(buffer, size, dynamic) {
  return r.BindrlLoadVertexBufferElement(
    buffer,
    size,
    dynamic
  )
}
raylib.rlLoadVertexBufferElement = rlLoadVertexBufferElement

/**
 * Update vertex buffer object data on GPU buffer
 *
 * @param {number} bufferId
 * @param {number} data
 * @param {number} dataSize
 * @param {number} offset
 *
 * @return {undefined}
 */
function rlUpdateVertexBuffer(bufferId, data, dataSize, offset) {
  return r.BindrlUpdateVertexBuffer(
    bufferId,
    data,
    dataSize,
    offset
  )
}
raylib.rlUpdateVertexBuffer = rlUpdateVertexBuffer

/**
 * Update vertex buffer elements data on GPU buffer
 *
 * @param {number} id
 * @param {number} data
 * @param {number} dataSize
 * @param {number} offset
 *
 * @return {undefined}
 */
function rlUpdateVertexBufferElements(id, data, dataSize, offset) {
  return r.BindrlUpdateVertexBufferElements(
    id,
    data,
    dataSize,
    offset
  )
}
raylib.rlUpdateVertexBufferElements = rlUpdateVertexBufferElements

/**
 * Unload vertex array (vao)
 *
 * @param {number} vaoId
 *
 * @return {undefined}
 */
function rlUnloadVertexArray(vaoId) {
  return r.BindrlUnloadVertexArray(
    vaoId
  )
}
raylib.rlUnloadVertexArray = rlUnloadVertexArray

/**
 * Unload vertex buffer object
 *
 * @param {number} vboId
 *
 * @return {undefined}
 */
function rlUnloadVertexBuffer(vboId) {
  return r.BindrlUnloadVertexBuffer(
    vboId
  )
}
raylib.rlUnloadVertexBuffer = rlUnloadVertexBuffer

/**
 * Set vertex attribute data configuration
 *
 * @param {number} index
 * @param {number} compSize
 * @param {number} type
 * @param {boolean} normalized
 * @param {number} stride
 * @param {number} offset
 *
 * @return {undefined}
 */
function rlSetVertexAttribute(index, compSize, type, normalized, stride, offset) {
  return r.BindrlSetVertexAttribute(
    index,
    compSize,
    type,
    normalized,
    stride,
    offset
  )
}
raylib.rlSetVertexAttribute = rlSetVertexAttribute

/**
 * Set vertex attribute data divisor
 *
 * @param {number} index
 * @param {number} divisor
 *
 * @return {undefined}
 */
function rlSetVertexAttributeDivisor(index, divisor) {
  return r.BindrlSetVertexAttributeDivisor(
    index,
    divisor
  )
}
raylib.rlSetVertexAttributeDivisor = rlSetVertexAttributeDivisor

/**
 * Set vertex attribute default value, when attribute to provided
 *
 * @param {number} locIndex
 * @param {number} value
 * @param {number} attribType
 * @param {number} count
 *
 * @return {undefined}
 */
function rlSetVertexAttributeDefault(locIndex, value, attribType, count) {
  return r.BindrlSetVertexAttributeDefault(
    locIndex,
    value,
    attribType,
    count
  )
}
raylib.rlSetVertexAttributeDefault = rlSetVertexAttributeDefault

/**
 * Draw vertex array (currently active vao)
 *
 * @param {number} offset
 * @param {number} count
 *
 * @return {undefined}
 */
function rlDrawVertexArray(offset, count) {
  return r.BindrlDrawVertexArray(
    offset,
    count
  )
}
raylib.rlDrawVertexArray = rlDrawVertexArray

/**
 * Draw vertex array elements
 *
 * @param {number} offset
 * @param {number} count
 * @param {number} buffer
 *
 * @return {undefined}
 */
function rlDrawVertexArrayElements(offset, count, buffer) {
  return r.BindrlDrawVertexArrayElements(
    offset,
    count,
    buffer
  )
}
raylib.rlDrawVertexArrayElements = rlDrawVertexArrayElements

/**
 * Draw vertex array (currently active vao) with instancing
 *
 * @param {number} offset
 * @param {number} count
 * @param {number} instances
 *
 * @return {undefined}
 */
function rlDrawVertexArrayInstanced(offset, count, instances) {
  return r.BindrlDrawVertexArrayInstanced(
    offset,
    count,
    instances
  )
}
raylib.rlDrawVertexArrayInstanced = rlDrawVertexArrayInstanced

/**
 * Draw vertex array elements with instancing
 *
 * @param {number} offset
 * @param {number} count
 * @param {number} buffer
 * @param {number} instances
 *
 * @return {undefined}
 */
function rlDrawVertexArrayElementsInstanced(offset, count, buffer, instances) {
  return r.BindrlDrawVertexArrayElementsInstanced(
    offset,
    count,
    buffer,
    instances
  )
}
raylib.rlDrawVertexArrayElementsInstanced = rlDrawVertexArrayElementsInstanced

/**
 * Load texture data
 *
 * @param {number} data
 * @param {number} width
 * @param {number} height
 * @param {number} format
 * @param {number} mipmapCount
 *
 * @return {number} The resulting unsigned int.
 */
function rlLoadTexture(data, width, height, format, mipmapCount) {
  return r.BindrlLoadTexture(
    data,
    width,
    height,
    format,
    mipmapCount
  )
}
raylib.rlLoadTexture = rlLoadTexture

/**
 * Load depth texture/renderbuffer (to be attached to fbo)
 *
 * @param {number} width
 * @param {number} height
 * @param {boolean} useRenderBuffer
 *
 * @return {number} The resulting unsigned int.
 */
function rlLoadTextureDepth(width, height, useRenderBuffer) {
  return r.BindrlLoadTextureDepth(
    width,
    height,
    useRenderBuffer
  )
}
raylib.rlLoadTextureDepth = rlLoadTextureDepth

/**
 * Load texture cubemap data
 *
 * @param {number} data
 * @param {number} size
 * @param {number} format
 * @param {number} mipmapCount
 *
 * @return {number} The resulting unsigned int.
 */
function rlLoadTextureCubemap(data, size, format, mipmapCount) {
  return r.BindrlLoadTextureCubemap(
    data,
    size,
    format,
    mipmapCount
  )
}
raylib.rlLoadTextureCubemap = rlLoadTextureCubemap

/**
 * Update texture with new data on GPU
 *
 * @param {number} id
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} width
 * @param {number} height
 * @param {number} format
 * @param {number} data
 *
 * @return {undefined}
 */
function rlUpdateTexture(id, offsetX, offsetY, width, height, format, data) {
  return r.BindrlUpdateTexture(
    id,
    offsetX,
    offsetY,
    width,
    height,
    format,
    data
  )
}
raylib.rlUpdateTexture = rlUpdateTexture

/**
 * Get OpenGL internal formats
 *
 * @param {number} format
 * @param {number} glInternalFormat
 * @param {number} glFormat
 * @param {number} glType
 *
 * @return {undefined}
 */
function rlGetGlTextureFormats(format, glInternalFormat, glFormat, glType) {
  return r.BindrlGetGlTextureFormats(
    format,
    glInternalFormat,
    glFormat,
    glType
  )
}
raylib.rlGetGlTextureFormats = rlGetGlTextureFormats

/**
 * Get name string for pixel format
 *
 * @param {number} format
 *
 * @return {string} The resulting const char *.
 */
function rlGetPixelFormatName(format) {
  return r.BindrlGetPixelFormatName(
    format
  )
}
raylib.rlGetPixelFormatName = rlGetPixelFormatName

/**
 * Unload texture from GPU memory
 *
 * @param {number} id
 *
 * @return {undefined}
 */
function rlUnloadTexture(id) {
  return r.BindrlUnloadTexture(
    id
  )
}
raylib.rlUnloadTexture = rlUnloadTexture

/**
 * Generate mipmap data for selected texture
 *
 * @param {number} id
 * @param {number} width
 * @param {number} height
 * @param {number} format
 * @param {number} mipmaps
 *
 * @return {undefined}
 */
function rlGenTextureMipmaps(id, width, height, format, mipmaps) {
  return r.BindrlGenTextureMipmaps(
    id,
    width,
    height,
    format,
    mipmaps
  )
}
raylib.rlGenTextureMipmaps = rlGenTextureMipmaps

/**
 * Read texture pixel data
 *
 * @param {number} id
 * @param {number} width
 * @param {number} height
 * @param {number} format
 *
 * @return {number} The resulting void *.
 */
function rlReadTexturePixels(id, width, height, format) {
  return r.BindrlReadTexturePixels(
    id,
    width,
    height,
    format
  )
}
raylib.rlReadTexturePixels = rlReadTexturePixels

/**
 * Read screen pixel data (color buffer)
 *
 * @param {number} width
 * @param {number} height
 *
 * @return {Buffer} The resulting unsigned char *.
 */
function rlReadScreenPixels(width, height) {
  return r.BindrlReadScreenPixels(
    width,
    height
  )
}
raylib.rlReadScreenPixels = rlReadScreenPixels

/**
 * Load an empty framebuffer
 *
 * @return {number} The resulting unsigned int.
 */
function rlLoadFramebuffer() {
  return r.BindrlLoadFramebuffer()
}
raylib.rlLoadFramebuffer = rlLoadFramebuffer

/**
 * Attach texture/renderbuffer to a framebuffer
 *
 * @param {number} fboId
 * @param {number} texId
 * @param {number} attachType
 * @param {number} texType
 * @param {number} mipLevel
 *
 * @return {undefined}
 */
function rlFramebufferAttach(fboId, texId, attachType, texType, mipLevel) {
  return r.BindrlFramebufferAttach(
    fboId,
    texId,
    attachType,
    texType,
    mipLevel
  )
}
raylib.rlFramebufferAttach = rlFramebufferAttach

/**
 * Verify framebuffer is complete
 *
 * @param {number} id
 *
 * @return {boolean} The resulting bool.
 */
function rlFramebufferComplete(id) {
  return r.BindrlFramebufferComplete(
    id
  )
}
raylib.rlFramebufferComplete = rlFramebufferComplete

/**
 * Delete framebuffer from GPU
 *
 * @param {number} id
 *
 * @return {undefined}
 */
function rlUnloadFramebuffer(id) {
  return r.BindrlUnloadFramebuffer(
    id
  )
}
raylib.rlUnloadFramebuffer = rlUnloadFramebuffer

/**
 * Load shader from code strings
 *
 * @param {string} vsCode
 * @param {string} fsCode
 *
 * @return {number} The resulting unsigned int.
 */
function rlLoadShaderCode(vsCode, fsCode) {
  return r.BindrlLoadShaderCode(
    vsCode,
    fsCode
  )
}
raylib.rlLoadShaderCode = rlLoadShaderCode

/**
 * Compile custom shader and return shader id (type: RL_VERTEX_SHADER, RL_FRAGMENT_SHADER, RL_COMPUTE_SHADER)
 *
 * @param {string} shaderCode
 * @param {number} type
 *
 * @return {number} The resulting unsigned int.
 */
function rlCompileShader(shaderCode, type) {
  return r.BindrlCompileShader(
    shaderCode,
    type
  )
}
raylib.rlCompileShader = rlCompileShader

/**
 * Load custom shader program
 *
 * @param {number} vShaderId
 * @param {number} fShaderId
 *
 * @return {number} The resulting unsigned int.
 */
function rlLoadShaderProgram(vShaderId, fShaderId) {
  return r.BindrlLoadShaderProgram(
    vShaderId,
    fShaderId
  )
}
raylib.rlLoadShaderProgram = rlLoadShaderProgram

/**
 * Unload shader program
 *
 * @param {number} id
 *
 * @return {undefined}
 */
function rlUnloadShaderProgram(id) {
  return r.BindrlUnloadShaderProgram(
    id
  )
}
raylib.rlUnloadShaderProgram = rlUnloadShaderProgram

/**
 * Get shader location uniform
 *
 * @param {number} shaderId
 * @param {string} uniformName
 *
 * @return {number} The resulting int.
 */
function rlGetLocationUniform(shaderId, uniformName) {
  return r.BindrlGetLocationUniform(
    shaderId,
    uniformName
  )
}
raylib.rlGetLocationUniform = rlGetLocationUniform

/**
 * Get shader location attribute
 *
 * @param {number} shaderId
 * @param {string} attribName
 *
 * @return {number} The resulting int.
 */
function rlGetLocationAttrib(shaderId, attribName) {
  return r.BindrlGetLocationAttrib(
    shaderId,
    attribName
  )
}
raylib.rlGetLocationAttrib = rlGetLocationAttrib

/**
 * Set shader value uniform
 *
 * @param {number} locIndex
 * @param {number} value
 * @param {number} uniformType
 * @param {number} count
 *
 * @return {undefined}
 */
function rlSetUniform(locIndex, value, uniformType, count) {
  return r.BindrlSetUniform(
    locIndex,
    value,
    uniformType,
    count
  )
}
raylib.rlSetUniform = rlSetUniform

/**
 * Set shader value matrix
 *
 * @param {number} locIndex
 * @param {Matrix} mat
 *
 * @return {undefined}
 */
function rlSetUniformMatrix(locIndex, mat) {
  return r.BindrlSetUniformMatrix(
    locIndex,
    mat.m0,
    mat.m4,
    mat.m8,
    mat.m12,
    mat.m1,
    mat.m5,
    mat.m9,
    mat.m13,
    mat.m2,
    mat.m6,
    mat.m10,
    mat.m14,
    mat.m3,
    mat.m7,
    mat.m11,
    mat.m15
  )
}
raylib.rlSetUniformMatrix = rlSetUniformMatrix

/**
 * Set shader value matrices
 *
 * @param {number} locIndex
 * @param {number} mat
 * @param {number} count
 *
 * @return {undefined}
 */
function rlSetUniformMatrices(locIndex, mat, count) {
  return r.BindrlSetUniformMatrices(
    locIndex,
    mat,
    count
  )
}
raylib.rlSetUniformMatrices = rlSetUniformMatrices

/**
 * Set shader value sampler
 *
 * @param {number} locIndex
 * @param {number} textureId
 *
 * @return {undefined}
 */
function rlSetUniformSampler(locIndex, textureId) {
  return r.BindrlSetUniformSampler(
    locIndex,
    textureId
  )
}
raylib.rlSetUniformSampler = rlSetUniformSampler

/**
 * Set shader currently active (id and locations)
 *
 * @param {number} id
 * @param {number} locs
 *
 * @return {undefined}
 */
function rlSetShader(id, locs) {
  return r.BindrlSetShader(
    id,
    locs
  )
}
raylib.rlSetShader = rlSetShader

/**
 * Load compute shader program
 *
 * @param {number} shaderId
 *
 * @return {number} The resulting unsigned int.
 */
function rlLoadComputeShaderProgram(shaderId) {
  return r.BindrlLoadComputeShaderProgram(
    shaderId
  )
}
raylib.rlLoadComputeShaderProgram = rlLoadComputeShaderProgram

/**
 * Dispatch compute shader (equivalent to *draw* for graphics pipeline)
 *
 * @param {number} groupX
 * @param {number} groupY
 * @param {number} groupZ
 *
 * @return {undefined}
 */
function rlComputeShaderDispatch(groupX, groupY, groupZ) {
  return r.BindrlComputeShaderDispatch(
    groupX,
    groupY,
    groupZ
  )
}
raylib.rlComputeShaderDispatch = rlComputeShaderDispatch

/**
 * Load shader storage buffer object (SSBO)
 *
 * @param {number} size
 * @param {number} data
 * @param {number} usageHint
 *
 * @return {number} The resulting unsigned int.
 */
function rlLoadShaderBuffer(size, data, usageHint) {
  return r.BindrlLoadShaderBuffer(
    size,
    data,
    usageHint
  )
}
raylib.rlLoadShaderBuffer = rlLoadShaderBuffer

/**
 * Unload shader storage buffer object (SSBO)
 *
 * @param {number} ssboId
 *
 * @return {undefined}
 */
function rlUnloadShaderBuffer(ssboId) {
  return r.BindrlUnloadShaderBuffer(
    ssboId
  )
}
raylib.rlUnloadShaderBuffer = rlUnloadShaderBuffer

/**
 * Update SSBO buffer data
 *
 * @param {number} id
 * @param {number} data
 * @param {number} dataSize
 * @param {number} offset
 *
 * @return {undefined}
 */
function rlUpdateShaderBuffer(id, data, dataSize, offset) {
  return r.BindrlUpdateShaderBuffer(
    id,
    data,
    dataSize,
    offset
  )
}
raylib.rlUpdateShaderBuffer = rlUpdateShaderBuffer

/**
 * Bind SSBO buffer
 *
 * @param {number} id
 * @param {number} index
 *
 * @return {undefined}
 */
function rlBindShaderBuffer(id, index) {
  return r.BindrlBindShaderBuffer(
    id,
    index
  )
}
raylib.rlBindShaderBuffer = rlBindShaderBuffer

/**
 * Read SSBO buffer data (GPU->CPU)
 *
 * @param {number} id
 * @param {number} dest
 * @param {number} count
 * @param {number} offset
 *
 * @return {undefined}
 */
function rlReadShaderBuffer(id, dest, count, offset) {
  return r.BindrlReadShaderBuffer(
    id,
    dest,
    count,
    offset
  )
}
raylib.rlReadShaderBuffer = rlReadShaderBuffer

/**
 * Copy SSBO data between buffers
 *
 * @param {number} destId
 * @param {number} srcId
 * @param {number} destOffset
 * @param {number} srcOffset
 * @param {number} count
 *
 * @return {undefined}
 */
function rlCopyShaderBuffer(destId, srcId, destOffset, srcOffset, count) {
  return r.BindrlCopyShaderBuffer(
    destId,
    srcId,
    destOffset,
    srcOffset,
    count
  )
}
raylib.rlCopyShaderBuffer = rlCopyShaderBuffer

/**
 * Get SSBO buffer size
 *
 * @param {number} id
 *
 * @return {number} The resulting unsigned int.
 */
function rlGetShaderBufferSize(id) {
  return r.BindrlGetShaderBufferSize(
    id
  )
}
raylib.rlGetShaderBufferSize = rlGetShaderBufferSize

/**
 * Bind image texture
 *
 * @param {number} id
 * @param {number} index
 * @param {number} format
 * @param {boolean} readonly
 *
 * @return {undefined}
 */
function rlBindImageTexture(id, index, format, readonly) {
  return r.BindrlBindImageTexture(
    id,
    index,
    format,
    readonly
  )
}
raylib.rlBindImageTexture = rlBindImageTexture

/**
 * Get internal modelview matrix
 *
 * @return {Matrix} The resulting Matrix.
 */
function rlGetMatrixModelview() {
  return r.BindrlGetMatrixModelview()
}
raylib.rlGetMatrixModelview = rlGetMatrixModelview

/**
 * Get internal projection matrix
 *
 * @return {Matrix} The resulting Matrix.
 */
function rlGetMatrixProjection() {
  return r.BindrlGetMatrixProjection()
}
raylib.rlGetMatrixProjection = rlGetMatrixProjection

/**
 * Get internal accumulated transform matrix
 *
 * @return {Matrix} The resulting Matrix.
 */
function rlGetMatrixTransform() {
  return r.BindrlGetMatrixTransform()
}
raylib.rlGetMatrixTransform = rlGetMatrixTransform

/**
 * Get internal projection matrix for stereo render (selected eye)
 *
 * @param {number} eye
 *
 * @return {Matrix} The resulting Matrix.
 */
function rlGetMatrixProjectionStereo(eye) {
  return r.BindrlGetMatrixProjectionStereo(
    eye
  )
}
raylib.rlGetMatrixProjectionStereo = rlGetMatrixProjectionStereo

/**
 * Get internal view offset matrix for stereo render (selected eye)
 *
 * @param {number} eye
 *
 * @return {Matrix} The resulting Matrix.
 */
function rlGetMatrixViewOffsetStereo(eye) {
  return r.BindrlGetMatrixViewOffsetStereo(
    eye
  )
}
raylib.rlGetMatrixViewOffsetStereo = rlGetMatrixViewOffsetStereo

/**
 * Set a custom projection matrix (replaces internal projection matrix)
 *
 * @param {Matrix} proj
 *
 * @return {undefined}
 */
function rlSetMatrixProjection(proj) {
  return r.BindrlSetMatrixProjection(
    proj.m0,
    proj.m4,
    proj.m8,
    proj.m12,
    proj.m1,
    proj.m5,
    proj.m9,
    proj.m13,
    proj.m2,
    proj.m6,
    proj.m10,
    proj.m14,
    proj.m3,
    proj.m7,
    proj.m11,
    proj.m15
  )
}
raylib.rlSetMatrixProjection = rlSetMatrixProjection

/**
 * Set a custom modelview matrix (replaces internal modelview matrix)
 *
 * @param {Matrix} view
 *
 * @return {undefined}
 */
function rlSetMatrixModelview(view) {
  return r.BindrlSetMatrixModelview(
    view.m0,
    view.m4,
    view.m8,
    view.m12,
    view.m1,
    view.m5,
    view.m9,
    view.m13,
    view.m2,
    view.m6,
    view.m10,
    view.m14,
    view.m3,
    view.m7,
    view.m11,
    view.m15
  )
}
raylib.rlSetMatrixModelview = rlSetMatrixModelview

/**
 * Set eyes projection matrices for stereo rendering
 *
 * @param {Matrix} right
 * @param {Matrix} left
 *
 * @return {undefined}
 */
function rlSetMatrixProjectionStereo(right, left) {
  return r.BindrlSetMatrixProjectionStereo(
    right.m0,
    right.m4,
    right.m8,
    right.m12,
    right.m1,
    right.m5,
    right.m9,
    right.m13,
    right.m2,
    right.m6,
    right.m10,
    right.m14,
    right.m3,
    right.m7,
    right.m11,
    right.m15,
    left.m0,
    left.m4,
    left.m8,
    left.m12,
    left.m1,
    left.m5,
    left.m9,
    left.m13,
    left.m2,
    left.m6,
    left.m10,
    left.m14,
    left.m3,
    left.m7,
    left.m11,
    left.m15
  )
}
raylib.rlSetMatrixProjectionStereo = rlSetMatrixProjectionStereo

/**
 * Set eyes view offsets matrices for stereo rendering
 *
 * @param {Matrix} right
 * @param {Matrix} left
 *
 * @return {undefined}
 */
function rlSetMatrixViewOffsetStereo(right, left) {
  return r.BindrlSetMatrixViewOffsetStereo(
    right.m0,
    right.m4,
    right.m8,
    right.m12,
    right.m1,
    right.m5,
    right.m9,
    right.m13,
    right.m2,
    right.m6,
    right.m10,
    right.m14,
    right.m3,
    right.m7,
    right.m11,
    right.m15,
    left.m0,
    left.m4,
    left.m8,
    left.m12,
    left.m1,
    left.m5,
    left.m9,
    left.m13,
    left.m2,
    left.m6,
    left.m10,
    left.m14,
    left.m3,
    left.m7,
    left.m11,
    left.m15
  )
}
raylib.rlSetMatrixViewOffsetStereo = rlSetMatrixViewOffsetStereo

/**
 * Load and draw a cube
 *
 * @return {undefined}
 */
function rlLoadDrawCube() {
  return r.BindrlLoadDrawCube()
}
raylib.rlLoadDrawCube = rlLoadDrawCube

/**
 * Load and draw a quad
 *
 * @return {undefined}
 */
function rlLoadDrawQuad() {
  return r.BindrlLoadDrawQuad()
}
raylib.rlLoadDrawQuad = rlLoadDrawQuad

/**
 * Update camera position for selected mode
 *
 * @param {Camera3D} camera
 * @param {number} mode
 *
 * @return {undefined}
 */
function UpdateCamera(camera, mode) {
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
    camera.projection,
    mode
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
 * Draw a filled circle within an image
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
 * Draw a filled circle within an image (Vector version)
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
 * @param {Texture} texture
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
    mesh.boneMatrices,
    mesh.boneCount,
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
    mesh.boneMatrices,
    mesh.boneCount,
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
    model.transform.m4,
    model.transform.m8,
    model.transform.m12,
    model.transform.m1,
    model.transform.m5,
    model.transform.m9,
    model.transform.m13,
    model.transform.m2,
    model.transform.m6,
    model.transform.m10,
    model.transform.m14,
    model.transform.m3,
    model.transform.m7,
    model.transform.m11,
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
 * Crop a wave to defined frames range
 *
 * @param {Wave} wave
 * @param {number} initFrame
 * @param {number} finalFrame
 *
 * @return {undefined}
 */
function WaveCrop(wave, initFrame, finalFrame) {
  const obj = r.BindWaveCrop(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data,
    initFrame,
    finalFrame
  )
  if (typeof obj !== 'undefined') {
    for (const key in obj) {
      wave[key] = obj[key]
    }
  }
}
raylib.WaveCrop = WaveCrop

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
 * @param {number} fovy - Camera field-of-view aperture in Y (degrees) in perspective, used as near plane width in orthographic
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
 * Set to support mouse passthrough, only supported when FLAG_WINDOW_UNDECORATED
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_WINDOW_MOUSE_PASSTHROUGH = 16384

/**
 * Set to run program in borderless windowed mode
 *
 * @type {number}
 * @constant
 */
raylib.FLAG_BORDERLESS_WINDOWED_MODE = 32768

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
raylib.KEY_MENU = 5

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
 * Mouse button forward (advanced mouse device)
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
 * The omnidirectional resize/move cursor shape
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
 * Gamepad right button right (i.e. PS3: Circle, Xbox: B)
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
 * Gamepad right button left (i.e. PS3: Square, Xbox: X)
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
 * Gamepad top/back trigger right (first), it could be a trailing button
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
 * Shader location: vertex attribute: boneIds
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_VERTEX_BONEIDS = 26

/**
 * Shader location: vertex attribute: boneWeights
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_VERTEX_BONEWEIGHTS = 27

/**
 * Shader location: array of matrices uniform: boneMatrices
 *
 * @type {number}
 * @constant
 */
raylib.SHADER_LOC_BONE_MATRICES = 28

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
 * 16 bpp (1 channel - half float)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_UNCOMPRESSED_R16 = 11

/**
 * 16*3 bpp (3 channels - half float)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_UNCOMPRESSED_R16G16B16 = 12

/**
 * 16*4 bpp (4 channels - half float)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_UNCOMPRESSED_R16G16B16A16 = 13

/**
 * 4 bpp (no alpha)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_DXT1_RGB = 14

/**
 * 4 bpp (1 bit alpha)
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_DXT1_RGBA = 15

/**
 * 8 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_DXT3_RGBA = 16

/**
 * 8 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_DXT5_RGBA = 17

/**
 * 4 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_ETC1_RGB = 18

/**
 * 4 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_ETC2_RGB = 19

/**
 * 8 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 20

/**
 * 4 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_PVRT_RGB = 21

/**
 * 4 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_PVRT_RGBA = 22

/**
 * 8 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 23

/**
 * 2 bpp
 *
 * @type {number}
 * @constant
 */
raylib.PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 24

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
 * Layout is defined by a horizontal line with faces
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
 * Blend premultiplied textures considering alpha
 *
 * @type {number}
 * @constant
 */
raylib.BLEND_ALPHA_PREMULTIPLY = 5

/**
 * Blend textures using custom src/dst factors (use rlSetBlendFactors())
 *
 * @type {number}
 * @constant
 */
raylib.BLEND_CUSTOM = 6

/**
 * Blend textures using custom rgb/alpha separate src/dst factors (use rlSetBlendFactorsSeparate())
 *
 * @type {number}
 * @constant
 */
raylib.BLEND_CUSTOM_SEPARATE = 7

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
 * Camera custom, controlled by user (UpdateCamera() does nothing)
 *
 * @type {number}
 * @constant
 */
raylib.CAMERA_CUSTOM = 0

/**
 * Camera free mode
 *
 * @type {number}
 * @constant
 */
raylib.CAMERA_FREE = 1

/**
 * Camera orbital, around target, zoom supported
 *
 * @type {number}
 * @constant
 */
raylib.CAMERA_ORBITAL = 2

/**
 * Camera first person
 *
 * @type {number}
 * @constant
 */
raylib.CAMERA_FIRST_PERSON = 3

/**
 * Camera third person
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

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.STATE_NORMAL = 0

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.STATE_FOCUSED = 1

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.STATE_PRESSED = 2

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.STATE_DISABLED = 3

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_ALIGN_LEFT = 0

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_ALIGN_CENTER = 1

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_ALIGN_RIGHT = 2

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_ALIGN_TOP = 0

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_ALIGN_MIDDLE = 1

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_ALIGN_BOTTOM = 2

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_WRAP_NONE = 0

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_WRAP_CHAR = 1

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_WRAP_WORD = 2

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.DEFAULT = 0

/**
 * Used also for: LABELBUTTON
 *
 * @type {number}
 * @constant
 */
raylib.LABEL = 1

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.BUTTON = 2

/**
 * Used also for: TOGGLEGROUP
 *
 * @type {number}
 * @constant
 */
raylib.TOGGLE = 3

/**
 * Used also for: SLIDERBAR, TOGGLESLIDER
 *
 * @type {number}
 * @constant
 */
raylib.SLIDER = 4

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.PROGRESSBAR = 5

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.CHECKBOX = 6

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.COMBOBOX = 7

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.DROPDOWNBOX = 8

/**
 * Used also for: TEXTBOXMULTI
 *
 * @type {number}
 * @constant
 */
raylib.TEXTBOX = 9

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.VALUEBOX = 10

/**
 * Uses: BUTTON, VALUEBOX
 *
 * @type {number}
 * @constant
 */
raylib.SPINNER = 11

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.LISTVIEW = 12

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.COLORPICKER = 13

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.SCROLLBAR = 14

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.STATUSBAR = 15

/**
 * Control border color in STATE_NORMAL
 *
 * @type {number}
 * @constant
 */
raylib.BORDER_COLOR_NORMAL = 0

/**
 * Control base color in STATE_NORMAL
 *
 * @type {number}
 * @constant
 */
raylib.BASE_COLOR_NORMAL = 1

/**
 * Control text color in STATE_NORMAL
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_COLOR_NORMAL = 2

/**
 * Control border color in STATE_FOCUSED
 *
 * @type {number}
 * @constant
 */
raylib.BORDER_COLOR_FOCUSED = 3

/**
 * Control base color in STATE_FOCUSED
 *
 * @type {number}
 * @constant
 */
raylib.BASE_COLOR_FOCUSED = 4

/**
 * Control text color in STATE_FOCUSED
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_COLOR_FOCUSED = 5

/**
 * Control border color in STATE_PRESSED
 *
 * @type {number}
 * @constant
 */
raylib.BORDER_COLOR_PRESSED = 6

/**
 * Control base color in STATE_PRESSED
 *
 * @type {number}
 * @constant
 */
raylib.BASE_COLOR_PRESSED = 7

/**
 * Control text color in STATE_PRESSED
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_COLOR_PRESSED = 8

/**
 * Control border color in STATE_DISABLED
 *
 * @type {number}
 * @constant
 */
raylib.BORDER_COLOR_DISABLED = 9

/**
 * Control base color in STATE_DISABLED
 *
 * @type {number}
 * @constant
 */
raylib.BASE_COLOR_DISABLED = 10

/**
 * Control text color in STATE_DISABLED
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_COLOR_DISABLED = 11

/**
 * Control border size, 0 for no border
 *
 * @type {number}
 * @constant
 */
raylib.BORDER_WIDTH = 12

/**
 * Control text padding, not considering border
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_PADDING = 13

/**
 * Control text horizontal alignment inside control text bound (after border and padding)
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_ALIGNMENT = 14

/**
 * Text size (glyphs max height)
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_SIZE = 16

/**
 * Text spacing between glyphs
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_SPACING = 17

/**
 * Line control color
 *
 * @type {number}
 * @constant
 */
raylib.LINE_COLOR = 18

/**
 * Background color
 *
 * @type {number}
 * @constant
 */
raylib.BACKGROUND_COLOR = 19

/**
 * Text spacing between lines
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_LINE_SPACING = 20

/**
 * Text vertical alignment inside text bounds (after border and padding)
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_ALIGNMENT_VERTICAL = 21

/**
 * Text wrap-mode inside text bounds
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_WRAP_MODE = 22

/**
 * ToggleGroup separation between toggles
 *
 * @type {number}
 * @constant
 */
raylib.GROUP_PADDING = 16

/**
 * Slider size of internal bar
 *
 * @type {number}
 * @constant
 */
raylib.SLIDER_WIDTH = 16

/**
 * Slider/SliderBar internal bar padding
 *
 * @type {number}
 * @constant
 */
raylib.SLIDER_PADDING = 17

/**
 * ProgressBar internal padding
 *
 * @type {number}
 * @constant
 */
raylib.PROGRESS_PADDING = 16

/**
 * ScrollBar arrows size
 *
 * @type {number}
 * @constant
 */
raylib.ARROWS_SIZE = 16

/**
 * ScrollBar arrows visible
 *
 * @type {number}
 * @constant
 */
raylib.ARROWS_VISIBLE = 17

/**
 * ScrollBar slider internal padding
 *
 * @type {number}
 * @constant
 */
raylib.SCROLL_SLIDER_PADDING = 18

/**
 * ScrollBar slider size
 *
 * @type {number}
 * @constant
 */
raylib.SCROLL_SLIDER_SIZE = 19

/**
 * ScrollBar scroll padding from arrows
 *
 * @type {number}
 * @constant
 */
raylib.SCROLL_PADDING = 20

/**
 * ScrollBar scrolling speed
 *
 * @type {number}
 * @constant
 */
raylib.SCROLL_SPEED = 21

/**
 * CheckBox internal check padding
 *
 * @type {number}
 * @constant
 */
raylib.CHECK_PADDING = 16

/**
 * ComboBox right button width
 *
 * @type {number}
 * @constant
 */
raylib.COMBO_BUTTON_WIDTH = 16

/**
 * ComboBox button separation
 *
 * @type {number}
 * @constant
 */
raylib.COMBO_BUTTON_SPACING = 17

/**
 * DropdownBox arrow separation from border and items
 *
 * @type {number}
 * @constant
 */
raylib.ARROW_PADDING = 16

/**
 * DropdownBox items separation
 *
 * @type {number}
 * @constant
 */
raylib.DROPDOWN_ITEMS_SPACING = 17

/**
 * DropdownBox arrow hidden
 *
 * @type {number}
 * @constant
 */
raylib.DROPDOWN_ARROW_HIDDEN = 18

/**
 * DropdownBox roll up flag (default rolls down)
 *
 * @type {number}
 * @constant
 */
raylib.DROPDOWN_ROLL_UP = 19

/**
 * TextBox in read-only mode: 0-text editable, 1-text no-editable
 *
 * @type {number}
 * @constant
 */
raylib.TEXT_READONLY = 16

/**
 * Spinner left/right buttons width
 *
 * @type {number}
 * @constant
 */
raylib.SPIN_BUTTON_WIDTH = 16

/**
 * Spinner buttons separation
 *
 * @type {number}
 * @constant
 */
raylib.SPIN_BUTTON_SPACING = 17

/**
 * ListView items height
 *
 * @type {number}
 * @constant
 */
raylib.LIST_ITEMS_HEIGHT = 16

/**
 * ListView items separation
 *
 * @type {number}
 * @constant
 */
raylib.LIST_ITEMS_SPACING = 17

/**
 * ListView scrollbar size (usually width)
 *
 * @type {number}
 * @constant
 */
raylib.SCROLLBAR_WIDTH = 18

/**
 * ListView scrollbar side (0-SCROLLBAR_LEFT_SIDE, 1-SCROLLBAR_RIGHT_SIDE)
 *
 * @type {number}
 * @constant
 */
raylib.SCROLLBAR_SIDE = 19

/**
 * ListView items border width
 *
 * @type {number}
 * @constant
 */
raylib.LIST_ITEMS_BORDER_WIDTH = 20

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.COLOR_SELECTOR_SIZE = 16

/**
 * ColorPicker right hue bar width
 *
 * @type {number}
 * @constant
 */
raylib.HUEBAR_WIDTH = 17

/**
 * ColorPicker right hue bar separation from panel
 *
 * @type {number}
 * @constant
 */
raylib.HUEBAR_PADDING = 18

/**
 * ColorPicker right hue bar selector height
 *
 * @type {number}
 * @constant
 */
raylib.HUEBAR_SELECTOR_HEIGHT = 19

/**
 * ColorPicker right hue bar selector overflow
 *
 * @type {number}
 * @constant
 */
raylib.HUEBAR_SELECTOR_OVERFLOW = 20

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_NONE = 0

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FOLDER_FILE_OPEN = 1

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILE_SAVE_CLASSIC = 2

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FOLDER_OPEN = 3

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FOLDER_SAVE = 4

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILE_OPEN = 5

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILE_SAVE = 6

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILE_EXPORT = 7

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILE_ADD = 8

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILE_DELETE = 9

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILETYPE_TEXT = 10

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILETYPE_AUDIO = 11

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILETYPE_IMAGE = 12

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILETYPE_PLAY = 13

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILETYPE_VIDEO = 14

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILETYPE_INFO = 15

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILE_COPY = 16

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILE_CUT = 17

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILE_PASTE = 18

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CURSOR_HAND = 19

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CURSOR_POINTER = 20

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CURSOR_CLASSIC = 21

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PENCIL = 22

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PENCIL_BIG = 23

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BRUSH_CLASSIC = 24

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BRUSH_PAINTER = 25

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_WATER_DROP = 26

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_COLOR_PICKER = 27

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_RUBBER = 28

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_COLOR_BUCKET = 29

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_TEXT_T = 30

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_TEXT_A = 31

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_SCALE = 32

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_RESIZE = 33

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILTER_POINT = 34

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILTER_BILINEAR = 35

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CROP = 36

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CROP_ALPHA = 37

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_SQUARE_TOGGLE = 38

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_SYMMETRY = 39

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_SYMMETRY_HORIZONTAL = 40

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_SYMMETRY_VERTICAL = 41

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LENS = 42

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LENS_BIG = 43

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_EYE_ON = 44

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_EYE_OFF = 45

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILTER_TOP = 46

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILTER = 47

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_TARGET_POINT = 48

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_TARGET_SMALL = 49

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_TARGET_BIG = 50

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_TARGET_MOVE = 51

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CURSOR_MOVE = 52

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CURSOR_SCALE = 53

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CURSOR_SCALE_RIGHT = 54

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CURSOR_SCALE_LEFT = 55

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_UNDO = 56

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_REDO = 57

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_REREDO = 58

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_MUTATE = 59

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ROTATE = 60

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_REPEAT = 61

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_SHUFFLE = 62

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_EMPTYBOX = 63

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_TARGET = 64

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_TARGET_SMALL_FILL = 65

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_TARGET_BIG_FILL = 66

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_TARGET_MOVE_FILL = 67

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CURSOR_MOVE_FILL = 68

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CURSOR_SCALE_FILL = 69

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CURSOR_SCALE_RIGHT_FILL = 70

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CURSOR_SCALE_LEFT_FILL = 71

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_UNDO_FILL = 72

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_REDO_FILL = 73

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_REREDO_FILL = 74

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_MUTATE_FILL = 75

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ROTATE_FILL = 76

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_REPEAT_FILL = 77

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_SHUFFLE_FILL = 78

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_EMPTYBOX_SMALL = 79

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX = 80

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_TOP = 81

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_TOP_RIGHT = 82

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_RIGHT = 83

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_BOTTOM_RIGHT = 84

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_BOTTOM = 85

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_BOTTOM_LEFT = 86

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_LEFT = 87

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_TOP_LEFT = 88

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_CENTER = 89

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_CIRCLE_MASK = 90

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_POT = 91

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ALPHA_MULTIPLY = 92

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ALPHA_CLEAR = 93

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_DITHERING = 94

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_MIPMAPS = 95

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_GRID = 96

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_GRID = 97

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_CORNERS_SMALL = 98

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_CORNERS_BIG = 99

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FOUR_BOXES = 100

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_GRID_FILL = 101

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_MULTISIZE = 102

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ZOOM_SMALL = 103

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ZOOM_MEDIUM = 104

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ZOOM_BIG = 105

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ZOOM_ALL = 106

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ZOOM_CENTER = 107

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_DOTS_SMALL = 108

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_DOTS_BIG = 109

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_CONCENTRIC = 110

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BOX_GRID_BIG = 111

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_OK_TICK = 112

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CROSS = 113

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ARROW_LEFT = 114

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ARROW_RIGHT = 115

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ARROW_DOWN = 116

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ARROW_UP = 117

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ARROW_LEFT_FILL = 118

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ARROW_RIGHT_FILL = 119

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ARROW_DOWN_FILL = 120

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ARROW_UP_FILL = 121

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_AUDIO = 122

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FX = 123

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_WAVE = 124

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_WAVE_SINUS = 125

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_WAVE_SQUARE = 126

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_WAVE_TRIANGULAR = 127

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CROSS_SMALL = 128

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PLAYER_PREVIOUS = 129

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PLAYER_PLAY_BACK = 130

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PLAYER_PLAY = 131

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PLAYER_PAUSE = 132

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PLAYER_STOP = 133

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PLAYER_NEXT = 134

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PLAYER_RECORD = 135

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_MAGNET = 136

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LOCK_CLOSE = 137

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LOCK_OPEN = 138

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CLOCK = 139

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_TOOLS = 140

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_GEAR = 141

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_GEAR_BIG = 142

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BIN = 143

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_HAND_POINTER = 144

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LASER = 145

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_COIN = 146

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_EXPLOSION = 147

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_1UP = 148

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PLAYER = 149

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PLAYER_JUMP = 150

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_KEY = 151

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_DEMON = 152

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_TEXT_POPUP = 153

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_GEAR_EX = 154

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CRACK = 155

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CRACK_POINTS = 156

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_STAR = 157

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_DOOR = 158

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_EXIT = 159

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_MODE_2D = 160

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_MODE_3D = 161

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CUBE = 162

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CUBE_FACE_TOP = 163

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CUBE_FACE_LEFT = 164

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CUBE_FACE_FRONT = 165

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CUBE_FACE_BOTTOM = 166

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CUBE_FACE_RIGHT = 167

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CUBE_FACE_BACK = 168

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CAMERA = 169

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_SPECIAL = 170

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LINK_NET = 171

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LINK_BOXES = 172

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LINK_MULTI = 173

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LINK = 174

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LINK_BROKE = 175

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_TEXT_NOTES = 176

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_NOTEBOOK = 177

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_SUITCASE = 178

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_SUITCASE_ZIP = 179

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_MAILBOX = 180

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_MONITOR = 181

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PRINTER = 182

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PHOTO_CAMERA = 183

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PHOTO_CAMERA_FLASH = 184

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_HOUSE = 185

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_HEART = 186

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CORNER = 187

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_VERTICAL_BARS = 188

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_VERTICAL_BARS_FILL = 189

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LIFE_BARS = 190

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_INFO = 191

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CROSSLINE = 192

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_HELP = 193

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILETYPE_ALPHA = 194

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILETYPE_HOME = 195

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LAYERS_VISIBLE = 196

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LAYERS = 197

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_WINDOW = 198

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_HIDPI = 199

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILETYPE_BINARY = 200

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_HEX = 201

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_SHIELD = 202

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILE_NEW = 203

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FOLDER_ADD = 204

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ALARM = 205

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CPU = 206

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_ROM = 207

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_STEP_OVER = 208

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_STEP_INTO = 209

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_STEP_OUT = 210

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_RESTART = 211

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BREAKPOINT_ON = 212

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BREAKPOINT_OFF = 213

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_BURGER_MENU = 214

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_CASE_SENSITIVE = 215

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_REG_EXP = 216

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FOLDER = 217

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_FILE = 218

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_SAND_TIMER = 219

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_WARNING = 220

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_HELP_BOX = 221

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_INFO_BOX = 222

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_PRIORITY = 223

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LAYERS_ISO = 224

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_LAYERS2 = 225

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_MLAYERS = 226

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_MAPS = 227

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_HOT = 228

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_229 = 229

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_230 = 230

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_231 = 231

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_232 = 232

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_233 = 233

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_234 = 234

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_235 = 235

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_236 = 236

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_237 = 237

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_238 = 238

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_239 = 239

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_240 = 240

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_241 = 241

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_242 = 242

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_243 = 243

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_244 = 244

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_245 = 245

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_246 = 246

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_247 = 247

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_248 = 248

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_249 = 249

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_250 = 250

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_251 = 251

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_252 = 252

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_253 = 253

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_254 = 254

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.ICON_255 = 255

/**
 * OpenGL 1.1
 *
 * @type {number}
 * @constant
 */
raylib.RL_OPENGL_11 = 1

/**
 * OpenGL 2.1 (GLSL 120)
 *
 * @type {number}
 * @constant
 */
raylib.RL_OPENGL_21 = 2

/**
 * OpenGL 3.3 (GLSL 330)
 *
 * @type {number}
 * @constant
 */
raylib.RL_OPENGL_33 = 3

/**
 * OpenGL 4.3 (using GLSL 330)
 *
 * @type {number}
 * @constant
 */
raylib.RL_OPENGL_43 = 4

/**
 * OpenGL ES 2.0 (GLSL 100)
 *
 * @type {number}
 * @constant
 */
raylib.RL_OPENGL_ES_20 = 5

/**
 * OpenGL ES 3.0 (GLSL 300 es)
 *
 * @type {number}
 * @constant
 */
raylib.RL_OPENGL_ES_30 = 6

/**
 * Display all logs
 *
 * @type {number}
 * @constant
 */
raylib.RL_LOG_ALL = 0

/**
 * Trace logging, intended for internal use only
 *
 * @type {number}
 * @constant
 */
raylib.RL_LOG_TRACE = 1

/**
 * Debug logging, used for internal debugging, it should be disabled on release builds
 *
 * @type {number}
 * @constant
 */
raylib.RL_LOG_DEBUG = 2

/**
 * Info logging, used for program execution info
 *
 * @type {number}
 * @constant
 */
raylib.RL_LOG_INFO = 3

/**
 * Warning logging, used on recoverable failures
 *
 * @type {number}
 * @constant
 */
raylib.RL_LOG_WARNING = 4

/**
 * Error logging, used on unrecoverable failures
 *
 * @type {number}
 * @constant
 */
raylib.RL_LOG_ERROR = 5

/**
 * Fatal logging, used to abort program: exit(EXIT_FAILURE)
 *
 * @type {number}
 * @constant
 */
raylib.RL_LOG_FATAL = 6

/**
 * Disable logging
 *
 * @type {number}
 * @constant
 */
raylib.RL_LOG_NONE = 7

/**
 * 8 bit per pixel (no alpha)
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = 1

/**
 * 8*2 bpp (2 channels)
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = 2

/**
 * 16 bpp
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_UNCOMPRESSED_R5G6B5 = 3

/**
 * 24 bpp
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8 = 4

/**
 * 16 bpp (1 bit alpha)
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = 5

/**
 * 16 bpp (4 bit alpha)
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = 6

/**
 * 32 bpp
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = 7

/**
 * 32 bpp (1 channel - float)
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_UNCOMPRESSED_R32 = 8

/**
 * 32*3 bpp (3 channels - float)
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32 = 9

/**
 * 32*4 bpp (4 channels - float)
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = 10

/**
 * 16 bpp (1 channel - half float)
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_UNCOMPRESSED_R16 = 11

/**
 * 16*3 bpp (3 channels - half float)
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_UNCOMPRESSED_R16G16B16 = 12

/**
 * 16*4 bpp (4 channels - half float)
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_UNCOMPRESSED_R16G16B16A16 = 13

/**
 * 4 bpp (no alpha)
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_COMPRESSED_DXT1_RGB = 14

/**
 * 4 bpp (1 bit alpha)
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_COMPRESSED_DXT1_RGBA = 15

/**
 * 8 bpp
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_COMPRESSED_DXT3_RGBA = 16

/**
 * 8 bpp
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_COMPRESSED_DXT5_RGBA = 17

/**
 * 4 bpp
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_COMPRESSED_ETC1_RGB = 18

/**
 * 4 bpp
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_COMPRESSED_ETC2_RGB = 19

/**
 * 8 bpp
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 20

/**
 * 4 bpp
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_COMPRESSED_PVRT_RGB = 21

/**
 * 4 bpp
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_COMPRESSED_PVRT_RGBA = 22

/**
 * 8 bpp
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 23

/**
 * 2 bpp
 *
 * @type {number}
 * @constant
 */
raylib.RL_PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 24

/**
 * No filter, just pixel approximation
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_FILTER_POINT = 0

/**
 * Linear filtering
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_FILTER_BILINEAR = 1

/**
 * Trilinear filtering (linear with mipmaps)
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_FILTER_TRILINEAR = 2

/**
 * Anisotropic filtering 4x
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_FILTER_ANISOTROPIC_4X = 3

/**
 * Anisotropic filtering 8x
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_FILTER_ANISOTROPIC_8X = 4

/**
 * Anisotropic filtering 16x
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_FILTER_ANISOTROPIC_16X = 5

/**
 * Blend textures considering alpha (default)
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_ALPHA = 0

/**
 * Blend textures adding colors
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_ADDITIVE = 1

/**
 * Blend textures multiplying colors
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_MULTIPLIED = 2

/**
 * Blend textures adding colors (alternative)
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_ADD_COLORS = 3

/**
 * Blend textures subtracting colors (alternative)
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_SUBTRACT_COLORS = 4

/**
 * Blend premultiplied textures considering alpha
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_ALPHA_PREMULTIPLY = 5

/**
 * Blend textures using custom src/dst factors (use rlSetBlendFactors())
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_CUSTOM = 6

/**
 * Blend textures using custom src/dst factors (use rlSetBlendFactorsSeparate())
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_CUSTOM_SEPARATE = 7

/**
 * Shader location: vertex attribute: position
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_VERTEX_POSITION = 0

/**
 * Shader location: vertex attribute: texcoord01
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_VERTEX_TEXCOORD01 = 1

/**
 * Shader location: vertex attribute: texcoord02
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_VERTEX_TEXCOORD02 = 2

/**
 * Shader location: vertex attribute: normal
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_VERTEX_NORMAL = 3

/**
 * Shader location: vertex attribute: tangent
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_VERTEX_TANGENT = 4

/**
 * Shader location: vertex attribute: color
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_VERTEX_COLOR = 5

/**
 * Shader location: matrix uniform: model-view-projection
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MATRIX_MVP = 6

/**
 * Shader location: matrix uniform: view (camera transform)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MATRIX_VIEW = 7

/**
 * Shader location: matrix uniform: projection
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MATRIX_PROJECTION = 8

/**
 * Shader location: matrix uniform: model (transform)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MATRIX_MODEL = 9

/**
 * Shader location: matrix uniform: normal
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MATRIX_NORMAL = 10

/**
 * Shader location: vector uniform: view
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_VECTOR_VIEW = 11

/**
 * Shader location: vector uniform: diffuse color
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_COLOR_DIFFUSE = 12

/**
 * Shader location: vector uniform: specular color
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_COLOR_SPECULAR = 13

/**
 * Shader location: vector uniform: ambient color
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_COLOR_AMBIENT = 14

/**
 * Shader location: sampler2d texture: albedo (same as: RL_SHADER_LOC_MAP_DIFFUSE)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MAP_ALBEDO = 15

/**
 * Shader location: sampler2d texture: metalness (same as: RL_SHADER_LOC_MAP_SPECULAR)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MAP_METALNESS = 16

/**
 * Shader location: sampler2d texture: normal
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MAP_NORMAL = 17

/**
 * Shader location: sampler2d texture: roughness
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MAP_ROUGHNESS = 18

/**
 * Shader location: sampler2d texture: occlusion
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MAP_OCCLUSION = 19

/**
 * Shader location: sampler2d texture: emission
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MAP_EMISSION = 20

/**
 * Shader location: sampler2d texture: height
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MAP_HEIGHT = 21

/**
 * Shader location: samplerCube texture: cubemap
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MAP_CUBEMAP = 22

/**
 * Shader location: samplerCube texture: irradiance
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MAP_IRRADIANCE = 23

/**
 * Shader location: samplerCube texture: prefilter
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MAP_PREFILTER = 24

/**
 * Shader location: sampler2d texture: brdf
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_LOC_MAP_BRDF = 25

/**
 * Shader uniform type: float
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_UNIFORM_FLOAT = 0

/**
 * Shader uniform type: vec2 (2 float)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_UNIFORM_VEC2 = 1

/**
 * Shader uniform type: vec3 (3 float)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_UNIFORM_VEC3 = 2

/**
 * Shader uniform type: vec4 (4 float)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_UNIFORM_VEC4 = 3

/**
 * Shader uniform type: int
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_UNIFORM_INT = 4

/**
 * Shader uniform type: ivec2 (2 int)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_UNIFORM_IVEC2 = 5

/**
 * Shader uniform type: ivec3 (3 int)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_UNIFORM_IVEC3 = 6

/**
 * Shader uniform type: ivec4 (4 int)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_UNIFORM_IVEC4 = 7

/**
 * Shader uniform type: unsigned int
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_UNIFORM_UINT = 8

/**
 * Shader uniform type: uivec2 (2 unsigned int)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_UNIFORM_UIVEC2 = 9

/**
 * Shader uniform type: uivec3 (3 unsigned int)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_UNIFORM_UIVEC3 = 10

/**
 * Shader uniform type: uivec4 (4 unsigned int)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_UNIFORM_UIVEC4 = 11

/**
 * Shader uniform type: sampler2d
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_UNIFORM_SAMPLER2D = 12

/**
 * Shader attribute type: float
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_ATTRIB_FLOAT = 0

/**
 * Shader attribute type: vec2 (2 float)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_ATTRIB_VEC2 = 1

/**
 * Shader attribute type: vec3 (3 float)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_ATTRIB_VEC3 = 2

/**
 * Shader attribute type: vec4 (4 float)
 *
 * @type {number}
 * @constant
 */
raylib.RL_SHADER_ATTRIB_VEC4 = 3

/**
 * Framebuffer attachment type: color 0
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_COLOR_CHANNEL0 = 0

/**
 * Framebuffer attachment type: color 1
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_COLOR_CHANNEL1 = 1

/**
 * Framebuffer attachment type: color 2
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_COLOR_CHANNEL2 = 2

/**
 * Framebuffer attachment type: color 3
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_COLOR_CHANNEL3 = 3

/**
 * Framebuffer attachment type: color 4
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_COLOR_CHANNEL4 = 4

/**
 * Framebuffer attachment type: color 5
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_COLOR_CHANNEL5 = 5

/**
 * Framebuffer attachment type: color 6
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_COLOR_CHANNEL6 = 6

/**
 * Framebuffer attachment type: color 7
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_COLOR_CHANNEL7 = 7

/**
 * Framebuffer attachment type: depth
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_DEPTH = 100

/**
 * Framebuffer attachment type: stencil
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_STENCIL = 200

/**
 * Framebuffer texture attachment type: cubemap, +X side
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_CUBEMAP_POSITIVE_X = 0

/**
 * Framebuffer texture attachment type: cubemap, -X side
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_CUBEMAP_NEGATIVE_X = 1

/**
 * Framebuffer texture attachment type: cubemap, +Y side
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_CUBEMAP_POSITIVE_Y = 2

/**
 * Framebuffer texture attachment type: cubemap, -Y side
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_CUBEMAP_NEGATIVE_Y = 3

/**
 * Framebuffer texture attachment type: cubemap, +Z side
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_CUBEMAP_POSITIVE_Z = 4

/**
 * Framebuffer texture attachment type: cubemap, -Z side
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_CUBEMAP_NEGATIVE_Z = 5

/**
 * Framebuffer texture attachment type: texture2d
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_TEXTURE2D = 100

/**
 * Framebuffer texture attachment type: renderbuffer
 *
 * @type {number}
 * @constant
 */
raylib.RL_ATTACHMENT_RENDERBUFFER = 200

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.RL_CULL_FACE_FRONT = 0

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.RL_CULL_FACE_BACK = 1

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.RL_DEFAULT_BATCH_BUFFER_ELEMENTS = 8192

/**
 * Default number of batch buffers (multi-buffering)
 *
 * @type {number}
 * @constant
 */
raylib.RL_DEFAULT_BATCH_BUFFERS = 1

/**
 * Default number of batch draw calls (by state changes: mode, texture)
 *
 * @type {number}
 * @constant
 */
raylib.RL_DEFAULT_BATCH_DRAWCALLS = 256

/**
 * Maximum number of textures units that can be activated on batch drawing (SetShaderValueTexture())
 *
 * @type {number}
 * @constant
 */
raylib.RL_DEFAULT_BATCH_MAX_TEXTURE_UNITS = 4

/**
 * Maximum size of Matrix stack
 *
 * @type {number}
 * @constant
 */
raylib.RL_MAX_MATRIX_STACK_SIZE = 32

/**
 * Maximum number of shader locations supported
 *
 * @type {number}
 * @constant
 */
raylib.RL_MAX_SHADER_LOCATIONS = 32

/**
 * GL_TEXTURE_WRAP_S
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_WRAP_S = 10242

/**
 * GL_TEXTURE_WRAP_T
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_WRAP_T = 10243

/**
 * GL_TEXTURE_MAG_FILTER
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_MAG_FILTER = 10240

/**
 * GL_TEXTURE_MIN_FILTER
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_MIN_FILTER = 10241

/**
 * GL_NEAREST
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_FILTER_NEAREST = 9728

/**
 * GL_LINEAR
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_FILTER_LINEAR = 9729

/**
 * GL_NEAREST_MIPMAP_NEAREST
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_FILTER_MIP_NEAREST = 9984

/**
 * GL_NEAREST_MIPMAP_LINEAR
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_FILTER_NEAREST_MIP_LINEAR = 9986

/**
 * GL_LINEAR_MIPMAP_NEAREST
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_FILTER_LINEAR_MIP_NEAREST = 9985

/**
 * GL_LINEAR_MIPMAP_LINEAR
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_FILTER_MIP_LINEAR = 9987

/**
 * Anisotropic filter (custom identifier)
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_FILTER_ANISOTROPIC = 12288

/**
 * Texture mipmap bias, percentage ratio (custom identifier)
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_MIPMAP_BIAS_RATIO = 16384

/**
 * GL_REPEAT
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_WRAP_REPEAT = 10497

/**
 * GL_CLAMP_TO_EDGE
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_WRAP_CLAMP = 33071

/**
 * GL_MIRRORED_REPEAT
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_WRAP_MIRROR_REPEAT = 33648

/**
 * GL_MIRROR_CLAMP_EXT
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE_WRAP_MIRROR_CLAMP = 34626

/**
 * GL_MODELVIEW
 *
 * @type {number}
 * @constant
 */
raylib.RL_MODELVIEW = 5888

/**
 * GL_PROJECTION
 *
 * @type {number}
 * @constant
 */
raylib.RL_PROJECTION = 5889

/**
 * GL_TEXTURE
 *
 * @type {number}
 * @constant
 */
raylib.RL_TEXTURE = 5890

/**
 * GL_LINES
 *
 * @type {number}
 * @constant
 */
raylib.RL_LINES = 1

/**
 * GL_TRIANGLES
 *
 * @type {number}
 * @constant
 */
raylib.RL_TRIANGLES = 4

/**
 * GL_QUADS
 *
 * @type {number}
 * @constant
 */
raylib.RL_QUADS = 7

/**
 * GL_UNSIGNED_BYTE
 *
 * @type {number}
 * @constant
 */
raylib.RL_UNSIGNED_BYTE = 5121

/**
 * GL_FLOAT
 *
 * @type {number}
 * @constant
 */
raylib.RL_FLOAT = 5126

/**
 * GL_STREAM_DRAW
 *
 * @type {number}
 * @constant
 */
raylib.RL_STREAM_DRAW = 35040

/**
 * GL_STREAM_READ
 *
 * @type {number}
 * @constant
 */
raylib.RL_STREAM_READ = 35041

/**
 * GL_STREAM_COPY
 *
 * @type {number}
 * @constant
 */
raylib.RL_STREAM_COPY = 35042

/**
 * GL_STATIC_DRAW
 *
 * @type {number}
 * @constant
 */
raylib.RL_STATIC_DRAW = 35044

/**
 * GL_STATIC_READ
 *
 * @type {number}
 * @constant
 */
raylib.RL_STATIC_READ = 35045

/**
 * GL_STATIC_COPY
 *
 * @type {number}
 * @constant
 */
raylib.RL_STATIC_COPY = 35046

/**
 * GL_DYNAMIC_DRAW
 *
 * @type {number}
 * @constant
 */
raylib.RL_DYNAMIC_DRAW = 35048

/**
 * GL_DYNAMIC_READ
 *
 * @type {number}
 * @constant
 */
raylib.RL_DYNAMIC_READ = 35049

/**
 * GL_DYNAMIC_COPY
 *
 * @type {number}
 * @constant
 */
raylib.RL_DYNAMIC_COPY = 35050

/**
 * GL_FRAGMENT_SHADER
 *
 * @type {number}
 * @constant
 */
raylib.RL_FRAGMENT_SHADER = 35632

/**
 * GL_VERTEX_SHADER
 *
 * @type {number}
 * @constant
 */
raylib.RL_VERTEX_SHADER = 35633

/**
 * GL_COMPUTE_SHADER
 *
 * @type {number}
 * @constant
 */
raylib.RL_COMPUTE_SHADER = 37305

/**
 * GL_ZERO
 *
 * @type {number}
 * @constant
 */
raylib.RL_ZERO = 0

/**
 * GL_ONE
 *
 * @type {number}
 * @constant
 */
raylib.RL_ONE = 1

/**
 * GL_SRC_COLOR
 *
 * @type {number}
 * @constant
 */
raylib.RL_SRC_COLOR = 768

/**
 * GL_ONE_MINUS_SRC_COLOR
 *
 * @type {number}
 * @constant
 */
raylib.RL_ONE_MINUS_SRC_COLOR = 769

/**
 * GL_SRC_ALPHA
 *
 * @type {number}
 * @constant
 */
raylib.RL_SRC_ALPHA = 770

/**
 * GL_ONE_MINUS_SRC_ALPHA
 *
 * @type {number}
 * @constant
 */
raylib.RL_ONE_MINUS_SRC_ALPHA = 771

/**
 * GL_DST_ALPHA
 *
 * @type {number}
 * @constant
 */
raylib.RL_DST_ALPHA = 772

/**
 * GL_ONE_MINUS_DST_ALPHA
 *
 * @type {number}
 * @constant
 */
raylib.RL_ONE_MINUS_DST_ALPHA = 773

/**
 * GL_DST_COLOR
 *
 * @type {number}
 * @constant
 */
raylib.RL_DST_COLOR = 774

/**
 * GL_ONE_MINUS_DST_COLOR
 *
 * @type {number}
 * @constant
 */
raylib.RL_ONE_MINUS_DST_COLOR = 775

/**
 * GL_SRC_ALPHA_SATURATE
 *
 * @type {number}
 * @constant
 */
raylib.RL_SRC_ALPHA_SATURATE = 776

/**
 * GL_CONSTANT_COLOR
 *
 * @type {number}
 * @constant
 */
raylib.RL_CONSTANT_COLOR = 32769

/**
 * GL_ONE_MINUS_CONSTANT_COLOR
 *
 * @type {number}
 * @constant
 */
raylib.RL_ONE_MINUS_CONSTANT_COLOR = 32770

/**
 * GL_CONSTANT_ALPHA
 *
 * @type {number}
 * @constant
 */
raylib.RL_CONSTANT_ALPHA = 32771

/**
 * GL_ONE_MINUS_CONSTANT_ALPHA
 *
 * @type {number}
 * @constant
 */
raylib.RL_ONE_MINUS_CONSTANT_ALPHA = 32772

/**
 * GL_FUNC_ADD
 *
 * @type {number}
 * @constant
 */
raylib.RL_FUNC_ADD = 32774

/**
 * GL_MIN
 *
 * @type {number}
 * @constant
 */
raylib.RL_MIN = 32775

/**
 * GL_MAX
 *
 * @type {number}
 * @constant
 */
raylib.RL_MAX = 32776

/**
 * GL_FUNC_SUBTRACT
 *
 * @type {number}
 * @constant
 */
raylib.RL_FUNC_SUBTRACT = 32778

/**
 * GL_FUNC_REVERSE_SUBTRACT
 *
 * @type {number}
 * @constant
 */
raylib.RL_FUNC_REVERSE_SUBTRACT = 32779

/**
 * GL_BLEND_EQUATION
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_EQUATION = 32777

/**
 * GL_BLEND_EQUATION_RGB   // (Same as BLEND_EQUATION)
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_EQUATION_RGB = 32777

/**
 * GL_BLEND_EQUATION_ALPHA
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_EQUATION_ALPHA = 34877

/**
 * GL_BLEND_DST_RGB
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_DST_RGB = 32968

/**
 * GL_BLEND_SRC_RGB
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_SRC_RGB = 32969

/**
 * GL_BLEND_DST_ALPHA
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_DST_ALPHA = 32970

/**
 * GL_BLEND_SRC_ALPHA
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_SRC_ALPHA = 32971

/**
 * GL_BLEND_COLOR
 *
 * @type {number}
 * @constant
 */
raylib.RL_BLEND_COLOR = 32773

/**
 * GL_READ_FRAMEBUFFER
 *
 * @type {number}
 * @constant
 */
raylib.RL_READ_FRAMEBUFFER = 36008

/**
 * GL_DRAW_FRAMEBUFFER
 *
 * @type {number}
 * @constant
 */
raylib.RL_DRAW_FRAMEBUFFER = 36009

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.RL_DEFAULT_SHADER_ATTRIB_LOCATION_POSITION = 0

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.RL_DEFAULT_SHADER_ATTRIB_LOCATION_TEXCOORD = 1

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.RL_DEFAULT_SHADER_ATTRIB_LOCATION_NORMAL = 2

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.RL_DEFAULT_SHADER_ATTRIB_LOCATION_COLOR = 3

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.RL_DEFAULT_SHADER_ATTRIB_LOCATION_TANGENT = 4

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.RL_DEFAULT_SHADER_ATTRIB_LOCATION_TEXCOORD2 = 5

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.RL_DEFAULT_SHADER_ATTRIB_LOCATION_INDICES = 6

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.RL_DEFAULT_SHADER_ATTRIB_LOCATION_BONEIDS = 7

/**
 * 
 *
 * @type {number}
 * @constant
 */
raylib.RL_DEFAULT_SHADER_ATTRIB_LOCATION_BONEWEIGHTS = 8

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

// GENERATED CODE: DO NOT MODIFY
const r = require('../../build/Release/node-raylib.node')

const raylib = {}

/** Initialize window and OpenGL context */
raylib.InitWindow = function (width, height, title) {
  return r.BindInitWindow(
    width,
    height,
    title
  )
}

/** Check if KEY_ESCAPE pressed or Close icon pressed */
raylib.WindowShouldClose = function () {
  return r.BindWindowShouldClose()
}

/** Close window and unload OpenGL context */
raylib.CloseWindow = function () {
  return r.BindCloseWindow()
}

/** Check if window has been initialized successfully */
raylib.IsWindowReady = function () {
  return r.BindIsWindowReady()
}

/** Check if window is currently fullscreen */
raylib.IsWindowFullscreen = function () {
  return r.BindIsWindowFullscreen()
}

/** Check if window is currently hidden (only PLATFORM_DESKTOP) */
raylib.IsWindowHidden = function () {
  return r.BindIsWindowHidden()
}

/** Check if window is currently minimized (only PLATFORM_DESKTOP) */
raylib.IsWindowMinimized = function () {
  return r.BindIsWindowMinimized()
}

/** Check if window is currently maximized (only PLATFORM_DESKTOP) */
raylib.IsWindowMaximized = function () {
  return r.BindIsWindowMaximized()
}

/** Check if window is currently focused (only PLATFORM_DESKTOP) */
raylib.IsWindowFocused = function () {
  return r.BindIsWindowFocused()
}

/** Check if window has been resized last frame */
raylib.IsWindowResized = function () {
  return r.BindIsWindowResized()
}

/** Check if one specific window flag is enabled */
raylib.IsWindowState = function (flag) {
  return r.BindIsWindowState(
    flag
  )
}

/** Set window configuration state using flags (only PLATFORM_DESKTOP) */
raylib.SetWindowState = function (flags) {
  return r.BindSetWindowState(
    flags
  )
}

/** Clear window configuration state flags */
raylib.ClearWindowState = function (flags) {
  return r.BindClearWindowState(
    flags
  )
}

/** Toggle window state: fullscreen/windowed (only PLATFORM_DESKTOP) */
raylib.ToggleFullscreen = function () {
  return r.BindToggleFullscreen()
}

/** Set window state: maximized, if resizable (only PLATFORM_DESKTOP) */
raylib.MaximizeWindow = function () {
  return r.BindMaximizeWindow()
}

/** Set window state: minimized, if resizable (only PLATFORM_DESKTOP) */
raylib.MinimizeWindow = function () {
  return r.BindMinimizeWindow()
}

/** Set window state: not minimized/maximized (only PLATFORM_DESKTOP) */
raylib.RestoreWindow = function () {
  return r.BindRestoreWindow()
}

/** Set icon for window (only PLATFORM_DESKTOP) */
raylib.SetWindowIcon = function (image) {
  return r.BindSetWindowIcon(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
}

/** Set title for window (only PLATFORM_DESKTOP) */
raylib.SetWindowTitle = function (title) {
  return r.BindSetWindowTitle(
    title
  )
}

/** Set window position on screen (only PLATFORM_DESKTOP) */
raylib.SetWindowPosition = function (x, y) {
  return r.BindSetWindowPosition(
    x,
    y
  )
}

/** Set monitor for the current window (fullscreen mode) */
raylib.SetWindowMonitor = function (monitor) {
  return r.BindSetWindowMonitor(
    monitor
  )
}

/** Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE) */
raylib.SetWindowMinSize = function (width, height) {
  return r.BindSetWindowMinSize(
    width,
    height
  )
}

/** Set window dimensions */
raylib.SetWindowSize = function (width, height) {
  return r.BindSetWindowSize(
    width,
    height
  )
}

/** Get native window handle */
raylib.GetWindowHandle = function () {
  return r.BindGetWindowHandle()
}

/** Get current screen width */
raylib.GetScreenWidth = function () {
  return r.BindGetScreenWidth()
}

/** Get current screen height */
raylib.GetScreenHeight = function () {
  return r.BindGetScreenHeight()
}

/** Get number of connected monitors */
raylib.GetMonitorCount = function () {
  return r.BindGetMonitorCount()
}

/** Get current connected monitor */
raylib.GetCurrentMonitor = function () {
  return r.BindGetCurrentMonitor()
}

/** Get specified monitor position */
raylib.GetMonitorPosition = function (monitor) {
  return r.BindGetMonitorPosition(
    monitor
  )
}

/** Get specified monitor width (max available by monitor) */
raylib.GetMonitorWidth = function (monitor) {
  return r.BindGetMonitorWidth(
    monitor
  )
}

/** Get specified monitor height (max available by monitor) */
raylib.GetMonitorHeight = function (monitor) {
  return r.BindGetMonitorHeight(
    monitor
  )
}

/** Get specified monitor physical width in millimetres */
raylib.GetMonitorPhysicalWidth = function (monitor) {
  return r.BindGetMonitorPhysicalWidth(
    monitor
  )
}

/** Get specified monitor physical height in millimetres */
raylib.GetMonitorPhysicalHeight = function (monitor) {
  return r.BindGetMonitorPhysicalHeight(
    monitor
  )
}

/** Get specified monitor refresh rate */
raylib.GetMonitorRefreshRate = function (monitor) {
  return r.BindGetMonitorRefreshRate(
    monitor
  )
}

/** Get window position XY on monitor */
raylib.GetWindowPosition = function () {
  return r.BindGetWindowPosition()
}

/** Get window scale DPI factor */
raylib.GetWindowScaleDPI = function () {
  return r.BindGetWindowScaleDPI()
}

/** Get the human-readable, UTF-8 encoded name of the primary monitor */
raylib.GetMonitorName = function (monitor) {
  return r.BindGetMonitorName(
    monitor
  )
}

/** Set clipboard text content */
raylib.SetClipboardText = function (text) {
  return r.BindSetClipboardText(
    text
  )
}

/** Get clipboard text content */
raylib.GetClipboardText = function () {
  return r.BindGetClipboardText()
}

/** Swap back buffer with front buffer (screen drawing) */
raylib.SwapScreenBuffer = function () {
  return r.BindSwapScreenBuffer()
}

/** Register all input events */
raylib.PollInputEvents = function () {
  return r.BindPollInputEvents()
}

/** Wait for some milliseconds (halt program execution) */
raylib.WaitTime = function (ms) {
  return r.BindWaitTime(
    ms
  )
}

/** Shows cursor */
raylib.ShowCursor = function () {
  return r.BindShowCursor()
}

/** Hides cursor */
raylib.HideCursor = function () {
  return r.BindHideCursor()
}

/** Check if cursor is not visible */
raylib.IsCursorHidden = function () {
  return r.BindIsCursorHidden()
}

/** Enables cursor (unlock cursor) */
raylib.EnableCursor = function () {
  return r.BindEnableCursor()
}

/** Disables cursor (lock cursor) */
raylib.DisableCursor = function () {
  return r.BindDisableCursor()
}

/** Check if cursor is on the screen */
raylib.IsCursorOnScreen = function () {
  return r.BindIsCursorOnScreen()
}

/** Set background color (framebuffer clear color) */
raylib.ClearBackground = function (color) {
  return r.BindClearBackground(
    color.r,
    color.g,
    color.b,
    color.a
  )
}

/** Setup canvas (framebuffer) to start drawing */
raylib.BeginDrawing = function () {
  return r.BindBeginDrawing()
}

/** End canvas drawing and swap buffers (double buffering) */
raylib.EndDrawing = function () {
  return r.BindEndDrawing()
}

/** Begin 2D mode with custom camera (2D) */
raylib.BeginMode2D = function (camera) {
  return r.BindBeginMode2D(
    camera.offset.x,
    camera.offset.y,
    camera.target.x,
    camera.target.y,
    camera.rotation,
    camera.zoom
  )
}

/** Ends 2D mode with custom camera */
raylib.EndMode2D = function () {
  return r.BindEndMode2D()
}

/** Begin 3D mode with custom camera (3D) */
raylib.BeginMode3D = function (camera) {
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

/** Ends 3D mode and returns to default 2D orthographic mode */
raylib.EndMode3D = function () {
  return r.BindEndMode3D()
}

/** Begin drawing to render texture */
raylib.BeginTextureMode = function (target) {
  return r.BindBeginTextureMode(
    target
  )
}

/** Ends drawing to render texture */
raylib.EndTextureMode = function () {
  return r.BindEndTextureMode()
}

/** Begin custom shader drawing */
raylib.BeginShaderMode = function (shader) {
  return r.BindBeginShaderMode(
    shader.id,
    shader.locs
  )
}

/** End custom shader drawing (use default shader) */
raylib.EndShaderMode = function () {
  return r.BindEndShaderMode()
}

/** Begin blending mode (alpha, additive, multiplied, subtract, custom) */
raylib.BeginBlendMode = function (mode) {
  return r.BindBeginBlendMode(
    mode
  )
}

/** End blending mode (reset to default: alpha blending) */
raylib.EndBlendMode = function () {
  return r.BindEndBlendMode()
}

/** Begin scissor mode (define screen area for following drawing) */
raylib.BeginScissorMode = function (x, y, width, height) {
  return r.BindBeginScissorMode(
    x,
    y,
    width,
    height
  )
}

/** End scissor mode */
raylib.EndScissorMode = function () {
  return r.BindEndScissorMode()
}

/** End stereo rendering (requires VR simulator) */
raylib.EndVrStereoMode = function () {
  return r.BindEndVrStereoMode()
}

/** Load shader from files and bind default locations */
raylib.LoadShader = function (vsFileName, fsFileName) {
  return r.BindLoadShader(
    vsFileName,
    fsFileName
  )
}

/** Load shader from code strings and bind default locations */
raylib.LoadShaderFromMemory = function (vsCode, fsCode) {
  return r.BindLoadShaderFromMemory(
    vsCode,
    fsCode
  )
}

/** Get shader uniform location */
raylib.GetShaderLocation = function (shader, uniformName) {
  return r.BindGetShaderLocation(
    shader.id,
    shader.locs,
    uniformName
  )
}

/** Get shader attribute location */
raylib.GetShaderLocationAttrib = function (shader, attribName) {
  return r.BindGetShaderLocationAttrib(
    shader.id,
    shader.locs,
    attribName
  )
}

/** Set shader uniform value (matrix 4x4) */
raylib.SetShaderValueMatrix = function (shader, locIndex, mat) {
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

/** Set shader uniform value for texture (sampler2d) */
raylib.SetShaderValueTexture = function (shader, locIndex, texture) {
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

/** Unload shader from GPU memory (VRAM) */
raylib.UnloadShader = function (shader) {
  return r.BindUnloadShader(
    shader.id,
    shader.locs
  )
}

/** Get a ray trace from mouse position */
raylib.GetMouseRay = function (mousePosition, camera) {
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

/** Get camera transform matrix (view matrix) */
raylib.GetCameraMatrix = function (camera) {
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

/** Get camera 2d transform matrix */
raylib.GetCameraMatrix2D = function (camera) {
  return r.BindGetCameraMatrix2D(
    camera.offset.x,
    camera.offset.y,
    camera.target.x,
    camera.target.y,
    camera.rotation,
    camera.zoom
  )
}

/** Get the screen space position for a 3d world space position */
raylib.GetWorldToScreen = function (position, camera) {
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

/** Get size position for a 3d world space position */
raylib.GetWorldToScreenEx = function (position, camera, width, height) {
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

/** Get the screen space position for a 2d camera world space position */
raylib.GetWorldToScreen2D = function (position, camera) {
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

/** Get the world space position for a 2d camera screen space position */
raylib.GetScreenToWorld2D = function (position, camera) {
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

/** Set target FPS (maximum) */
raylib.SetTargetFPS = function (fps) {
  return r.BindSetTargetFPS(
    fps
  )
}

/** Get current FPS */
raylib.GetFPS = function () {
  return r.BindGetFPS()
}

/** Get time in seconds for last frame drawn (delta time) */
raylib.GetFrameTime = function () {
  return r.BindGetFrameTime()
}

/** Get elapsed time in seconds since InitWindow() */
raylib.GetTime = function () {
  return r.BindGetTime()
}

/** Get a random value between min and max (both included) */
raylib.GetRandomValue = function (min, max) {
  return r.BindGetRandomValue(
    min,
    max
  )
}

/** Set the seed for the random number generator */
raylib.SetRandomSeed = function (seed) {
  return r.BindSetRandomSeed(
    seed
  )
}

/** Takes a screenshot of current screen (filename extension defines format) */
raylib.TakeScreenshot = function (fileName) {
  return r.BindTakeScreenshot(
    fileName
  )
}

/** Setup init configuration flags (view FLAGS) */
raylib.SetConfigFlags = function (flags) {
  return r.BindSetConfigFlags(
    flags
  )
}

/** Set the current threshold (minimum) log level */
raylib.SetTraceLogLevel = function (logLevel) {
  return r.BindSetTraceLogLevel(
    logLevel
  )
}

/** Internal memory allocator */
raylib.MemAlloc = function (size) {
  return r.BindMemAlloc(
    size
  )
}

/** Internal memory reallocator */
raylib.MemRealloc = function (ptr, size) {
  return r.BindMemRealloc(
    ptr,
    size
  )
}

/** Internal memory free */
raylib.MemFree = function (ptr) {
  return r.BindMemFree(
    ptr
  )
}

/** Load file data as byte array (read) */
raylib.LoadFileData = function (fileName, bytesRead) {
  return r.BindLoadFileData(
    fileName,
    bytesRead
  )
}

/** Unload file data allocated by LoadFileData() */
raylib.UnloadFileData = function (data) {
  return r.BindUnloadFileData(
    data
  )
}

/** Save data to file from byte array (write), returns true on success */
raylib.SaveFileData = function (fileName, data, bytesToWrite) {
  return r.BindSaveFileData(
    fileName,
    data,
    bytesToWrite
  )
}

/** Load text data from file (read), returns a '\0' terminated string */
raylib.LoadFileText = function (fileName) {
  return r.BindLoadFileText(
    fileName
  )
}

/** Unload file text data allocated by LoadFileText() */
raylib.UnloadFileText = function (text) {
  return r.BindUnloadFileText(
    text
  )
}

/** Save text data to file (write), string must be '\0' terminated, returns true on success */
raylib.SaveFileText = function (fileName, text) {
  return r.BindSaveFileText(
    fileName,
    text
  )
}

/** Check if file exists */
raylib.FileExists = function (fileName) {
  return r.BindFileExists(
    fileName
  )
}

/** Check if a directory path exists */
raylib.DirectoryExists = function (dirPath) {
  return r.BindDirectoryExists(
    dirPath
  )
}

/** Check file extension (including point: .png, .wav) */
raylib.IsFileExtension = function (fileName, ext) {
  return r.BindIsFileExtension(
    fileName,
    ext
  )
}

/** Get pointer to extension for a filename string (includes dot: '.png') */
raylib.GetFileExtension = function (fileName) {
  return r.BindGetFileExtension(
    fileName
  )
}

/** Get pointer to filename for a path string */
raylib.GetFileName = function (filePath) {
  return r.BindGetFileName(
    filePath
  )
}

/** Get filename string without extension (uses static string) */
raylib.GetFileNameWithoutExt = function (filePath) {
  return r.BindGetFileNameWithoutExt(
    filePath
  )
}

/** Get full path for a given fileName with path (uses static string) */
raylib.GetDirectoryPath = function (filePath) {
  return r.BindGetDirectoryPath(
    filePath
  )
}

/** Get previous directory path for a given path (uses static string) */
raylib.GetPrevDirectoryPath = function (dirPath) {
  return r.BindGetPrevDirectoryPath(
    dirPath
  )
}

/** Get current working directory (uses static string) */
raylib.GetWorkingDirectory = function () {
  return r.BindGetWorkingDirectory()
}

/** Get filenames in a directory path (memory should be freed) */
raylib.GetDirectoryFiles = function (dirPath, count) {
  return r.BindGetDirectoryFiles(
    dirPath,
    count
  )
}

/** Clear directory files paths buffers (free memory) */
raylib.ClearDirectoryFiles = function () {
  return r.BindClearDirectoryFiles()
}

/** Change working directory, return true on success */
raylib.ChangeDirectory = function (dir) {
  return r.BindChangeDirectory(
    dir
  )
}

/** Check if a file has been dropped into window */
raylib.IsFileDropped = function () {
  return r.BindIsFileDropped()
}

/** Get dropped files names (memory should be freed) */
raylib.GetDroppedFiles = function (count) {
  return r.BindGetDroppedFiles(
    count
  )
}

/** Clear dropped files paths buffer (free memory) */
raylib.ClearDroppedFiles = function () {
  return r.BindClearDroppedFiles()
}

/** Get file modification time (last write time) */
raylib.GetFileModTime = function (fileName) {
  return r.BindGetFileModTime(
    fileName
  )
}

/** Compress data (DEFLATE algorithm) */
raylib.CompressData = function (data, dataLength, compDataLength) {
  return r.BindCompressData(
    data,
    dataLength,
    compDataLength
  )
}

/** Decompress data (DEFLATE algorithm) */
raylib.DecompressData = function (compData, compDataLength, dataLength) {
  return r.BindDecompressData(
    compData,
    compDataLength,
    dataLength
  )
}

/** Encode data to Base64 string */
raylib.EncodeDataBase64 = function (data, dataLength, outputLength) {
  return r.BindEncodeDataBase64(
    data,
    dataLength,
    outputLength
  )
}

/** Decode Base64 string data */
raylib.DecodeDataBase64 = function (data, outputLength) {
  return r.BindDecodeDataBase64(
    data,
    outputLength
  )
}

/** Save integer value to storage file (to defined position), returns true on success */
raylib.SaveStorageValue = function (position, value) {
  return r.BindSaveStorageValue(
    position,
    value
  )
}

/** Load integer value from storage file (from defined position) */
raylib.LoadStorageValue = function (position) {
  return r.BindLoadStorageValue(
    position
  )
}

/** Open URL with default system browser (if available) */
raylib.OpenURL = function (url) {
  return r.BindOpenURL(
    url
  )
}

/** Check if a key has been pressed once */
raylib.IsKeyPressed = function (key) {
  return r.BindIsKeyPressed(
    key
  )
}

/** Check if a key is being pressed */
raylib.IsKeyDown = function (key) {
  return r.BindIsKeyDown(
    key
  )
}

/** Check if a key has been released once */
raylib.IsKeyReleased = function (key) {
  return r.BindIsKeyReleased(
    key
  )
}

/** Check if a key is NOT being pressed */
raylib.IsKeyUp = function (key) {
  return r.BindIsKeyUp(
    key
  )
}

/** Set a custom key to exit program (default is ESC) */
raylib.SetExitKey = function (key) {
  return r.BindSetExitKey(
    key
  )
}

/** Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty */
raylib.GetKeyPressed = function () {
  return r.BindGetKeyPressed()
}

/** Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty */
raylib.GetCharPressed = function () {
  return r.BindGetCharPressed()
}

/** Check if a gamepad is available */
raylib.IsGamepadAvailable = function (gamepad) {
  return r.BindIsGamepadAvailable(
    gamepad
  )
}

/** Get gamepad internal name id */
raylib.GetGamepadName = function (gamepad) {
  return r.BindGetGamepadName(
    gamepad
  )
}

/** Check if a gamepad button has been pressed once */
raylib.IsGamepadButtonPressed = function (gamepad, button) {
  return r.BindIsGamepadButtonPressed(
    gamepad,
    button
  )
}

/** Check if a gamepad button is being pressed */
raylib.IsGamepadButtonDown = function (gamepad, button) {
  return r.BindIsGamepadButtonDown(
    gamepad,
    button
  )
}

/** Check if a gamepad button has been released once */
raylib.IsGamepadButtonReleased = function (gamepad, button) {
  return r.BindIsGamepadButtonReleased(
    gamepad,
    button
  )
}

/** Check if a gamepad button is NOT being pressed */
raylib.IsGamepadButtonUp = function (gamepad, button) {
  return r.BindIsGamepadButtonUp(
    gamepad,
    button
  )
}

/** Get the last gamepad button pressed */
raylib.GetGamepadButtonPressed = function () {
  return r.BindGetGamepadButtonPressed()
}

/** Get gamepad axis count for a gamepad */
raylib.GetGamepadAxisCount = function (gamepad) {
  return r.BindGetGamepadAxisCount(
    gamepad
  )
}

/** Get axis movement value for a gamepad axis */
raylib.GetGamepadAxisMovement = function (gamepad, axis) {
  return r.BindGetGamepadAxisMovement(
    gamepad,
    axis
  )
}

/** Set internal gamepad mappings (SDL_GameControllerDB) */
raylib.SetGamepadMappings = function (mappings) {
  return r.BindSetGamepadMappings(
    mappings
  )
}

/** Check if a mouse button has been pressed once */
raylib.IsMouseButtonPressed = function (button) {
  return r.BindIsMouseButtonPressed(
    button
  )
}

/** Check if a mouse button is being pressed */
raylib.IsMouseButtonDown = function (button) {
  return r.BindIsMouseButtonDown(
    button
  )
}

/** Check if a mouse button has been released once */
raylib.IsMouseButtonReleased = function (button) {
  return r.BindIsMouseButtonReleased(
    button
  )
}

/** Check if a mouse button is NOT being pressed */
raylib.IsMouseButtonUp = function (button) {
  return r.BindIsMouseButtonUp(
    button
  )
}

/** Get mouse position X */
raylib.GetMouseX = function () {
  return r.BindGetMouseX()
}

/** Get mouse position Y */
raylib.GetMouseY = function () {
  return r.BindGetMouseY()
}

/** Get mouse position XY */
raylib.GetMousePosition = function () {
  return r.BindGetMousePosition()
}

/** Get mouse delta between frames */
raylib.GetMouseDelta = function () {
  return r.BindGetMouseDelta()
}

/** Set mouse position XY */
raylib.SetMousePosition = function (x, y) {
  return r.BindSetMousePosition(
    x,
    y
  )
}

/** Set mouse offset */
raylib.SetMouseOffset = function (offsetX, offsetY) {
  return r.BindSetMouseOffset(
    offsetX,
    offsetY
  )
}

/** Set mouse scaling */
raylib.SetMouseScale = function (scaleX, scaleY) {
  return r.BindSetMouseScale(
    scaleX,
    scaleY
  )
}

/** Get mouse wheel movement Y */
raylib.GetMouseWheelMove = function () {
  return r.BindGetMouseWheelMove()
}

/** Set mouse cursor */
raylib.SetMouseCursor = function (cursor) {
  return r.BindSetMouseCursor(
    cursor
  )
}

/** Get touch position X for touch point 0 (relative to screen size) */
raylib.GetTouchX = function () {
  return r.BindGetTouchX()
}

/** Get touch position Y for touch point 0 (relative to screen size) */
raylib.GetTouchY = function () {
  return r.BindGetTouchY()
}

/** Get touch position XY for a touch point index (relative to screen size) */
raylib.GetTouchPosition = function (index) {
  return r.BindGetTouchPosition(
    index
  )
}

/** Get touch point identifier for given index */
raylib.GetTouchPointId = function (index) {
  return r.BindGetTouchPointId(
    index
  )
}

/** Get number of touch points */
raylib.GetTouchPointCount = function () {
  return r.BindGetTouchPointCount()
}

/** Enable a set of gestures using flags */
raylib.SetGesturesEnabled = function (flags) {
  return r.BindSetGesturesEnabled(
    flags
  )
}

/** Check if a gesture have been detected */
raylib.IsGestureDetected = function (gesture) {
  return r.BindIsGestureDetected(
    gesture
  )
}

/** Get latest detected gesture */
raylib.GetGestureDetected = function () {
  return r.BindGetGestureDetected()
}

/** Get gesture hold time in milliseconds */
raylib.GetGestureHoldDuration = function () {
  return r.BindGetGestureHoldDuration()
}

/** Get gesture drag vector */
raylib.GetGestureDragVector = function () {
  return r.BindGetGestureDragVector()
}

/** Get gesture drag angle */
raylib.GetGestureDragAngle = function () {
  return r.BindGetGestureDragAngle()
}

/** Get gesture pinch delta */
raylib.GetGesturePinchVector = function () {
  return r.BindGetGesturePinchVector()
}

/** Get gesture pinch angle */
raylib.GetGesturePinchAngle = function () {
  return r.BindGetGesturePinchAngle()
}

/** Set camera mode (multiple camera modes available) */
raylib.SetCameraMode = function (camera, mode) {
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

/** Set camera pan key to combine with mouse movement (free camera) */
raylib.SetCameraPanControl = function (keyPan) {
  return r.BindSetCameraPanControl(
    keyPan
  )
}

/** Set camera alt key to combine with mouse movement (free camera) */
raylib.SetCameraAltControl = function (keyAlt) {
  return r.BindSetCameraAltControl(
    keyAlt
  )
}

/** Set camera smooth zoom key to combine with mouse (free camera) */
raylib.SetCameraSmoothZoomControl = function (keySmoothZoom) {
  return r.BindSetCameraSmoothZoomControl(
    keySmoothZoom
  )
}

/** Set camera move controls (1st person and 3rd person cameras) */
raylib.SetCameraMoveControls = function (keyFront, keyBack, keyRight, keyLeft, keyUp, keyDown) {
  return r.BindSetCameraMoveControls(
    keyFront,
    keyBack,
    keyRight,
    keyLeft,
    keyUp,
    keyDown
  )
}

/** Set texture and rectangle to be used on shapes drawing */
raylib.SetShapesTexture = function (texture, source) {
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

/** Draw a pixel */
raylib.DrawPixel = function (posX, posY, color) {
  return r.BindDrawPixel(
    posX,
    posY,
    color.r,
    color.g,
    color.b,
    color.a
  )
}

/** Draw a pixel (Vector version) */
raylib.DrawPixelV = function (position, color) {
  return r.BindDrawPixelV(
    position.x,
    position.y,
    color.r,
    color.g,
    color.b,
    color.a
  )
}

/** Draw a line */
raylib.DrawLine = function (startPosX, startPosY, endPosX, endPosY, color) {
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

/** Draw a line (Vector version) */
raylib.DrawLineV = function (startPos, endPos, color) {
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

/** Draw a line defining thickness */
raylib.DrawLineEx = function (startPos, endPos, thick, color) {
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

/** Draw a line using cubic-bezier curves in-out */
raylib.DrawLineBezier = function (startPos, endPos, thick, color) {
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

/** Draw line using quadratic bezier curves with a control point */
raylib.DrawLineBezierQuad = function (startPos, endPos, controlPos, thick, color) {
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

/** Draw line using cubic bezier curves with 2 control points */
raylib.DrawLineBezierCubic = function (startPos, endPos, startControlPos, endControlPos, thick, color) {
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

/** Draw lines sequence */
raylib.DrawLineStrip = function (points, pointCount, color) {
  return r.BindDrawLineStrip(
    points,
    pointCount,
    color.r,
    color.g,
    color.b,
    color.a
  )
}

/** Draw a color-filled circle */
raylib.DrawCircle = function (centerX, centerY, radius, color) {
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

/** Draw a piece of a circle */
raylib.DrawCircleSector = function (center, radius, startAngle, endAngle, segments, color) {
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

/** Draw circle sector outline */
raylib.DrawCircleSectorLines = function (center, radius, startAngle, endAngle, segments, color) {
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

/** Draw a gradient-filled circle */
raylib.DrawCircleGradient = function (centerX, centerY, radius, color1, color2) {
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

/** Draw a color-filled circle (Vector version) */
raylib.DrawCircleV = function (center, radius, color) {
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

/** Draw circle outline */
raylib.DrawCircleLines = function (centerX, centerY, radius, color) {
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

/** Draw ellipse */
raylib.DrawEllipse = function (centerX, centerY, radiusH, radiusV, color) {
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

/** Draw ellipse outline */
raylib.DrawEllipseLines = function (centerX, centerY, radiusH, radiusV, color) {
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

/** Draw ring */
raylib.DrawRing = function (center, innerRadius, outerRadius, startAngle, endAngle, segments, color) {
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

/** Draw ring outline */
raylib.DrawRingLines = function (center, innerRadius, outerRadius, startAngle, endAngle, segments, color) {
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

/** Draw a color-filled rectangle */
raylib.DrawRectangle = function (posX, posY, width, height, color) {
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

/** Draw a color-filled rectangle (Vector version) */
raylib.DrawRectangleV = function (position, size, color) {
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

/** Draw a color-filled rectangle */
raylib.DrawRectangleRec = function (rec, color) {
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

/** Draw a color-filled rectangle with pro parameters */
raylib.DrawRectanglePro = function (rec, origin, rotation, color) {
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

/** Draw a vertical-gradient-filled rectangle */
raylib.DrawRectangleGradientV = function (posX, posY, width, height, color1, color2) {
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

/** Draw a horizontal-gradient-filled rectangle */
raylib.DrawRectangleGradientH = function (posX, posY, width, height, color1, color2) {
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

/** Draw a gradient-filled rectangle with custom vertex colors */
raylib.DrawRectangleGradientEx = function (rec, col1, col2, col3, col4) {
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

/** Draw rectangle outline */
raylib.DrawRectangleLines = function (posX, posY, width, height, color) {
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

/** Draw rectangle outline with extended parameters */
raylib.DrawRectangleLinesEx = function (rec, lineThick, color) {
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

/** Draw rectangle with rounded edges */
raylib.DrawRectangleRounded = function (rec, roundness, segments, color) {
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

/** Draw rectangle with rounded edges outline */
raylib.DrawRectangleRoundedLines = function (rec, roundness, segments, lineThick, color) {
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

/** Draw a color-filled triangle (vertex in counter-clockwise order!) */
raylib.DrawTriangle = function (v1, v2, v3, color) {
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

/** Draw triangle outline (vertex in counter-clockwise order!) */
raylib.DrawTriangleLines = function (v1, v2, v3, color) {
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

/** Draw a triangle fan defined by points (first vertex is the center) */
raylib.DrawTriangleFan = function (points, pointCount, color) {
  return r.BindDrawTriangleFan(
    points,
    pointCount,
    color.r,
    color.g,
    color.b,
    color.a
  )
}

/** Draw a triangle strip defined by points */
raylib.DrawTriangleStrip = function (points, pointCount, color) {
  return r.BindDrawTriangleStrip(
    points,
    pointCount,
    color.r,
    color.g,
    color.b,
    color.a
  )
}

/** Draw a regular polygon (Vector version) */
raylib.DrawPoly = function (center, sides, radius, rotation, color) {
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

/** Draw a polygon outline of n sides */
raylib.DrawPolyLines = function (center, sides, radius, rotation, color) {
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

/** Draw a polygon outline of n sides with extended parameters */
raylib.DrawPolyLinesEx = function (center, sides, radius, rotation, lineThick, color) {
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

/** Check collision between two rectangles */
raylib.CheckCollisionRecs = function (rec1, rec2) {
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

/** Check collision between two circles */
raylib.CheckCollisionCircles = function (center1, radius1, center2, radius2) {
  return r.BindCheckCollisionCircles(
    center1.x,
    center1.y,
    radius1,
    center2.x,
    center2.y,
    radius2
  )
}

/** Check collision between circle and rectangle */
raylib.CheckCollisionCircleRec = function (center, radius, rec) {
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

/** Check if point is inside rectangle */
raylib.CheckCollisionPointRec = function (point, rec) {
  return r.BindCheckCollisionPointRec(
    point.x,
    point.y,
    rec.x,
    rec.y,
    rec.width,
    rec.height
  )
}

/** Check if point is inside circle */
raylib.CheckCollisionPointCircle = function (point, center, radius) {
  return r.BindCheckCollisionPointCircle(
    point.x,
    point.y,
    center.x,
    center.y,
    radius
  )
}

/** Check if point is inside a triangle */
raylib.CheckCollisionPointTriangle = function (point, p1, p2, p3) {
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

/** Check the collision between two lines defined by two points each, returns collision point by reference */
raylib.CheckCollisionLines = function (startPos1, endPos1, startPos2, endPos2, collisionPoint) {
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

/** Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold] */
raylib.CheckCollisionPointLine = function (point, p1, p2, threshold) {
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

/** Get collision rectangle for two rectangles collision */
raylib.GetCollisionRec = function (rec1, rec2) {
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

/** Load image from file into CPU memory (RAM) */
raylib.LoadImage = function (fileName) {
  return r.BindLoadImage(
    fileName
  )
}

/** Load image from RAW file data */
raylib.LoadImageRaw = function (fileName, width, height, format, headerSize) {
  return r.BindLoadImageRaw(
    fileName,
    width,
    height,
    format,
    headerSize
  )
}

/** Load image sequence from file (frames appended to image.data) */
raylib.LoadImageAnim = function (fileName, frames) {
  return r.BindLoadImageAnim(
    fileName,
    frames
  )
}

/** Load image from memory buffer, fileType refers to extension: i.e. '.png' */
raylib.LoadImageFromMemory = function (fileType, fileData, dataSize) {
  return r.BindLoadImageFromMemory(
    fileType,
    fileData,
    dataSize
  )
}

/** Load image from GPU texture data */
raylib.LoadImageFromTexture = function (texture) {
  return r.BindLoadImageFromTexture(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format
  )
}

/** Load image from screen buffer and (screenshot) */
raylib.LoadImageFromScreen = function () {
  return r.BindLoadImageFromScreen()
}

/** Unload image from CPU memory (RAM) */
raylib.UnloadImage = function (image) {
  return r.BindUnloadImage(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
}

/** Export image data to file, returns true on success */
raylib.ExportImage = function (image, fileName) {
  return r.BindExportImage(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    fileName
  )
}

/** Export image as code file defining an array of bytes, returns true on success */
raylib.ExportImageAsCode = function (image, fileName) {
  return r.BindExportImageAsCode(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    fileName
  )
}

/** Generate image: plain color */
raylib.GenImageColor = function (width, height, color) {
  return r.BindGenImageColor(
    width,
    height,
    color.r,
    color.g,
    color.b,
    color.a
  )
}

/** Generate image: vertical gradient */
raylib.GenImageGradientV = function (width, height, top, bottom) {
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

/** Generate image: horizontal gradient */
raylib.GenImageGradientH = function (width, height, left, right) {
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

/** Generate image: radial gradient */
raylib.GenImageGradientRadial = function (width, height, density, inner, outer) {
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

/** Generate image: checked */
raylib.GenImageChecked = function (width, height, checksX, checksY, col1, col2) {
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

/** Generate image: white noise */
raylib.GenImageWhiteNoise = function (width, height, factor) {
  return r.BindGenImageWhiteNoise(
    width,
    height,
    factor
  )
}

/** Generate image: cellular algorithm, bigger tileSize means bigger cells */
raylib.GenImageCellular = function (width, height, tileSize) {
  return r.BindGenImageCellular(
    width,
    height,
    tileSize
  )
}

/** Create an image duplicate (useful for transformations) */
raylib.ImageCopy = function (image) {
  return r.BindImageCopy(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
}

/** Create an image from another image piece */
raylib.ImageFromImage = function (image, rec) {
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

/** Create an image from text (default font) */
raylib.ImageText = function (text, fontSize, color) {
  return r.BindImageText(
    text,
    fontSize,
    color.r,
    color.g,
    color.b,
    color.a
  )
}

/** Create an image from text (custom sprite font) */
raylib.ImageTextEx = function (font, text, fontSize, spacing, tint) {
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

/** Load color data from image as a Color array (RGBA - 32bit) */
raylib.LoadImageColors = function (image) {
  return r.BindLoadImageColors(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
}

/** Load colors palette from image as a Color array (RGBA - 32bit) */
raylib.LoadImagePalette = function (image, maxPaletteSize, colorCount) {
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

/** Unload color data loaded with LoadImageColors() */
raylib.UnloadImageColors = function (colors) {
  return r.BindUnloadImageColors(
    colors
  )
}

/** Unload colors palette loaded with LoadImagePalette() */
raylib.UnloadImagePalette = function (colors) {
  return r.BindUnloadImagePalette(
    colors
  )
}

/** Get image alpha border rectangle */
raylib.GetImageAlphaBorder = function (image, threshold) {
  return r.BindGetImageAlphaBorder(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    threshold
  )
}

/** Get image pixel color at (x, y) position */
raylib.GetImageColor = function (image, x, y) {
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

/** Load texture from file into GPU memory (VRAM) */
raylib.LoadTexture = function (fileName) {
  return r.BindLoadTexture(
    fileName
  )
}

/** Load texture from image data */
raylib.LoadTextureFromImage = function (image) {
  return r.BindLoadTextureFromImage(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
}

/** Load cubemap from image, multiple image cubemap layouts supported */
raylib.LoadTextureCubemap = function (image, layout) {
  return r.BindLoadTextureCubemap(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    layout
  )
}

/** Load texture for rendering (framebuffer) */
raylib.LoadRenderTexture = function (width, height) {
  return r.BindLoadRenderTexture(
    width,
    height
  )
}

/** Unload texture from GPU memory (VRAM) */
raylib.UnloadTexture = function (texture) {
  return r.BindUnloadTexture(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format
  )
}

/** Unload render texture from GPU memory (VRAM) */
raylib.UnloadRenderTexture = function (target) {
  return r.BindUnloadRenderTexture(
    target
  )
}

/** Update GPU texture with new data */
raylib.UpdateTexture = function (texture, pixels) {
  return r.BindUpdateTexture(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    pixels
  )
}

/** Update GPU texture rectangle with new data */
raylib.UpdateTextureRec = function (texture, rec, pixels) {
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

/** Set texture scaling filter mode */
raylib.SetTextureFilter = function (texture, filter) {
  return r.BindSetTextureFilter(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    filter
  )
}

/** Set texture wrapping mode */
raylib.SetTextureWrap = function (texture, wrap) {
  return r.BindSetTextureWrap(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format,
    wrap
  )
}

/** Draw a Texture2D */
raylib.DrawTexture = function (texture, posX, posY, tint) {
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

/** Draw a Texture2D with position defined as Vector2 */
raylib.DrawTextureV = function (texture, position, tint) {
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

/** Draw a Texture2D with extended parameters */
raylib.DrawTextureEx = function (texture, position, rotation, scale, tint) {
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

/** Draw a part of a texture defined by a rectangle */
raylib.DrawTextureRec = function (texture, source, position, tint) {
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

/** Draw texture quad with tiling and offset parameters */
raylib.DrawTextureQuad = function (texture, tiling, offset, quad, tint) {
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

/** Draw part of a texture (defined by a rectangle) with rotation and scale tiled into dest. */
raylib.DrawTextureTiled = function (texture, source, dest, origin, rotation, scale, tint) {
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

/** Draw a part of a texture defined by a rectangle with 'pro' parameters */
raylib.DrawTexturePro = function (texture, source, dest, origin, rotation, tint) {
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

/** Draws a texture (or part of it) that stretches or shrinks nicely */
raylib.DrawTextureNPatch = function (texture, nPatchInfo, dest, origin, rotation, tint) {
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

/** Draw a textured polygon */
raylib.DrawTexturePoly = function (texture, center, points, texcoords, pointCount, tint) {
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

/** Get color with alpha applied, alpha goes from 0.0f to 1.0f */
raylib.Fade = function (color, alpha) {
  return r.BindFade(
    color.r,
    color.g,
    color.b,
    color.a,
    alpha
  )
}

/** Get hexadecimal value for a Color */
raylib.ColorToInt = function (color) {
  return r.BindColorToInt(
    color.r,
    color.g,
    color.b,
    color.a
  )
}

/** Get Color normalized as float [0..1] */
raylib.ColorNormalize = function (color) {
  return r.BindColorNormalize(
    color.r,
    color.g,
    color.b,
    color.a
  )
}

/** Get Color from normalized values [0..1] */
raylib.ColorFromNormalized = function (normalized) {
  return r.BindColorFromNormalized(
    normalized.x,
    normalized.y,
    normalized.z,
    normalized.w
  )
}

/** Get HSV values for a Color, hue [0..360], saturation/value [0..1] */
raylib.ColorToHSV = function (color) {
  return r.BindColorToHSV(
    color.r,
    color.g,
    color.b,
    color.a
  )
}

/** Get a Color from HSV values, hue [0..360], saturation/value [0..1] */
raylib.ColorFromHSV = function (hue, saturation, value) {
  return r.BindColorFromHSV(
    hue,
    saturation,
    value
  )
}

/** Get color with alpha applied, alpha goes from 0.0f to 1.0f */
raylib.ColorAlpha = function (color, alpha) {
  return r.BindColorAlpha(
    color.r,
    color.g,
    color.b,
    color.a,
    alpha
  )
}

/** Get src alpha-blended into dst color with tint */
raylib.ColorAlphaBlend = function (dst, src, tint) {
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

/** Get Color structure from hexadecimal value */
raylib.GetColor = function (hexValue) {
  return r.BindGetColor(
    hexValue
  )
}

/** Get Color from a source pixel pointer of certain format */
raylib.GetPixelColor = function (srcPtr, format) {
  return r.BindGetPixelColor(
    srcPtr,
    format
  )
}

/** Set color formatted into destination pixel pointer */
raylib.SetPixelColor = function (dstPtr, color, format) {
  return r.BindSetPixelColor(
    dstPtr,
    color.r,
    color.g,
    color.b,
    color.a,
    format
  )
}

/** Get pixel data size in bytes for certain format */
raylib.GetPixelDataSize = function (width, height, format) {
  return r.BindGetPixelDataSize(
    width,
    height,
    format
  )
}

/** Get the default Font */
raylib.GetFontDefault = function () {
  return r.BindGetFontDefault()
}

/** Load font from file into GPU memory (VRAM) */
raylib.LoadFont = function (fileName) {
  return r.BindLoadFont(
    fileName
  )
}

/** Load font from file with extended parameters, use NULL for fontChars and 0 for glyphCount to load the default character set */
raylib.LoadFontEx = function (fileName, fontSize, fontChars, glyphCount) {
  return r.BindLoadFontEx(
    fileName,
    fontSize,
    fontChars,
    glyphCount
  )
}

/** Load font from Image (XNA style) */
raylib.LoadFontFromImage = function (image, key, firstChar) {
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

/** Load font from memory buffer, fileType refers to extension: i.e. '.ttf' */
raylib.LoadFontFromMemory = function (fileType, fileData, dataSize, fontSize, fontChars, glyphCount) {
  return r.BindLoadFontFromMemory(
    fileType,
    fileData,
    dataSize,
    fontSize,
    fontChars,
    glyphCount
  )
}

/** Load font data for further use */
raylib.LoadFontData = function (fileData, dataSize, fontSize, fontChars, glyphCount, type) {
  return r.BindLoadFontData(
    fileData,
    dataSize,
    fontSize,
    fontChars,
    glyphCount,
    type
  )
}

/** Generate image font atlas using chars info */
raylib.GenImageFontAtlas = function (chars, recs, glyphCount, fontSize, padding, packMethod) {
  return r.BindGenImageFontAtlas(
    chars,
    recs,
    glyphCount,
    fontSize,
    padding,
    packMethod
  )
}

/** Unload font chars info data (RAM) */
raylib.UnloadFontData = function (chars, glyphCount) {
  return r.BindUnloadFontData(
    chars,
    glyphCount
  )
}

/** Unload font from GPU memory (VRAM) */
raylib.UnloadFont = function (font) {
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

/** Draw current FPS */
raylib.DrawFPS = function (posX, posY) {
  return r.BindDrawFPS(
    posX,
    posY
  )
}

/** Draw text (using default font) */
raylib.DrawText = function (text, posX, posY, fontSize, color) {
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

/** Draw text using font and additional parameters */
raylib.DrawTextEx = function (font, text, position, fontSize, spacing, tint) {
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

/** Draw text using Font and pro parameters (rotation) */
raylib.DrawTextPro = function (font, text, position, origin, rotation, fontSize, spacing, tint) {
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

/** Draw one character (codepoint) */
raylib.DrawTextCodepoint = function (font, codepoint, position, fontSize, tint) {
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

/** Measure string width for default font */
raylib.MeasureText = function (text, fontSize) {
  return r.BindMeasureText(
    text,
    fontSize
  )
}

/** Measure string size for Font */
raylib.MeasureTextEx = function (font, text, fontSize, spacing) {
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

/** Get glyph index position in font for a codepoint (unicode character), fallback to '?' if not found */
raylib.GetGlyphIndex = function (font, codepoint) {
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

/** Get glyph font info data for a codepoint (unicode character), fallback to '?' if not found */
raylib.GetGlyphInfo = function (font, codepoint) {
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

/** Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to '?' if not found */
raylib.GetGlyphAtlasRec = function (font, codepoint) {
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

/** Load all codepoints from a UTF-8 text string, codepoints count returned by parameter */
raylib.LoadCodepoints = function (text, count) {
  return r.BindLoadCodepoints(
    text,
    count
  )
}

/** Unload codepoints data from memory */
raylib.UnloadCodepoints = function (codepoints) {
  return r.BindUnloadCodepoints(
    codepoints
  )
}

/** Get total number of codepoints in a UTF-8 encoded string */
raylib.GetCodepointCount = function (text) {
  return r.BindGetCodepointCount(
    text
  )
}

/** Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure */
raylib.GetCodepoint = function (text, bytesProcessed) {
  return r.BindGetCodepoint(
    text,
    bytesProcessed
  )
}

/** Encode one codepoint into UTF-8 byte array (array length returned as parameter) */
raylib.CodepointToUTF8 = function (codepoint, byteSize) {
  return r.BindCodepointToUTF8(
    codepoint,
    byteSize
  )
}

/** Encode text as codepoints array into UTF-8 text string (WARNING: memory must be freed!) */
raylib.TextCodepointsToUTF8 = function (codepoints, length) {
  return r.BindTextCodepointsToUTF8(
    codepoints,
    length
  )
}

/** Copy one string to another, returns bytes copied */
raylib.TextCopy = function (dst, src) {
  return r.BindTextCopy(
    dst,
    src
  )
}

/** Check if two text string are equal */
raylib.TextIsEqual = function (text1, text2) {
  return r.BindTextIsEqual(
    text1,
    text2
  )
}

/** Get text length, checks for '\0' ending */
raylib.TextLength = function (text) {
  return r.BindTextLength(
    text
  )
}

/** Get a piece of a text string */
raylib.TextSubtext = function (text, position, length) {
  return r.BindTextSubtext(
    text,
    position,
    length
  )
}

/** Replace text string (WARNING: memory must be freed!) */
raylib.TextReplace = function (text, replace, by) {
  return r.BindTextReplace(
    text,
    replace,
    by
  )
}

/** Insert text in a position (WARNING: memory must be freed!) */
raylib.TextInsert = function (text, insert, position) {
  return r.BindTextInsert(
    text,
    insert,
    position
  )
}

/** Join text strings with delimiter */
raylib.TextJoin = function (textList, count, delimiter) {
  return r.BindTextJoin(
    textList,
    count,
    delimiter
  )
}

/** Split text into multiple strings */
raylib.TextSplit = function (text, delimiter, count) {
  return r.BindTextSplit(
    text,
    delimiter,
    count
  )
}

/** Append text at specific position and move cursor! */
raylib.TextAppend = function (text, append, position) {
  return r.BindTextAppend(
    text,
    append,
    position
  )
}

/** Find first text occurrence within a string */
raylib.TextFindIndex = function (text, find) {
  return r.BindTextFindIndex(
    text,
    find
  )
}

/** Get upper case version of provided string */
raylib.TextToUpper = function (text) {
  return r.BindTextToUpper(
    text
  )
}

/** Get lower case version of provided string */
raylib.TextToLower = function (text) {
  return r.BindTextToLower(
    text
  )
}

/** Get Pascal case notation version of provided string */
raylib.TextToPascal = function (text) {
  return r.BindTextToPascal(
    text
  )
}

/** Get integer value from text (negative values not supported) */
raylib.TextToInteger = function (text) {
  return r.BindTextToInteger(
    text
  )
}

/** Draw a line in 3D world space */
raylib.DrawLine3D = function (startPos, endPos, color) {
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

/** Draw a point in 3D space, actually a small line */
raylib.DrawPoint3D = function (position, color) {
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

/** Draw a circle in 3D world space */
raylib.DrawCircle3D = function (center, radius, rotationAxis, rotationAngle, color) {
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

/** Draw a color-filled triangle (vertex in counter-clockwise order!) */
raylib.DrawTriangle3D = function (v1, v2, v3, color) {
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

/** Draw a triangle strip defined by points */
raylib.DrawTriangleStrip3D = function (points, pointCount, color) {
  return r.BindDrawTriangleStrip3D(
    points,
    pointCount,
    color.r,
    color.g,
    color.b,
    color.a
  )
}

/** Draw cube */
raylib.DrawCube = function (position, width, height, length, color) {
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

/** Draw cube (Vector version) */
raylib.DrawCubeV = function (position, size, color) {
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

/** Draw cube wires */
raylib.DrawCubeWires = function (position, width, height, length, color) {
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

/** Draw cube wires (Vector version) */
raylib.DrawCubeWiresV = function (position, size, color) {
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

/** Draw cube textured */
raylib.DrawCubeTexture = function (texture, position, width, height, length, color) {
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

/** Draw cube with a region of a texture */
raylib.DrawCubeTextureRec = function (texture, source, position, width, height, length, color) {
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

/** Draw sphere */
raylib.DrawSphere = function (centerPos, radius, color) {
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

/** Draw sphere with extended parameters */
raylib.DrawSphereEx = function (centerPos, radius, rings, slices, color) {
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

/** Draw sphere wires */
raylib.DrawSphereWires = function (centerPos, radius, rings, slices, color) {
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

/** Draw a cylinder/cone */
raylib.DrawCylinder = function (position, radiusTop, radiusBottom, height, slices, color) {
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

/** Draw a cylinder with base at startPos and top at endPos */
raylib.DrawCylinderEx = function (startPos, endPos, startRadius, endRadius, sides, color) {
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

/** Draw a cylinder/cone wires */
raylib.DrawCylinderWires = function (position, radiusTop, radiusBottom, height, slices, color) {
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

/** Draw a cylinder wires with base at startPos and top at endPos */
raylib.DrawCylinderWiresEx = function (startPos, endPos, startRadius, endRadius, sides, color) {
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

/** Draw a plane XZ */
raylib.DrawPlane = function (centerPos, size, color) {
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

/** Draw a ray line */
raylib.DrawRay = function (ray, color) {
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

/** Draw a grid (centered at (0, 0, 0)) */
raylib.DrawGrid = function (slices, spacing) {
  return r.BindDrawGrid(
    slices,
    spacing
  )
}

/** Load model from files (meshes and materials) */
raylib.LoadModel = function (fileName) {
  return r.BindLoadModel(
    fileName
  )
}

/** Load model from generated mesh (default material) */
raylib.LoadModelFromMesh = function (mesh) {
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

/** Unload model (including meshes) from memory (RAM and/or VRAM) */
raylib.UnloadModel = function (model) {
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

/** Unload model (but not meshes) from memory (RAM and/or VRAM) */
raylib.UnloadModelKeepMeshes = function (model) {
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

/** Compute model bounding box limits (considers all meshes) */
raylib.GetModelBoundingBox = function (model) {
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

/** Draw a model (with texture if set) */
raylib.DrawModel = function (model, position, scale, tint) {
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

/** Draw a model with extended parameters */
raylib.DrawModelEx = function (model, position, rotationAxis, rotationAngle, scale, tint) {
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

/** Draw a model wires (with texture if set) */
raylib.DrawModelWires = function (model, position, scale, tint) {
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

/** Draw a model wires (with texture if set) with extended parameters */
raylib.DrawModelWiresEx = function (model, position, rotationAxis, rotationAngle, scale, tint) {
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

/** Draw bounding box (wires) */
raylib.DrawBoundingBox = function (box, color) {
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

/** Draw a billboard texture */
raylib.DrawBillboard = function (camera, texture, position, size, tint) {
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

/** Draw a billboard texture defined by source */
raylib.DrawBillboardRec = function (camera, texture, source, position, size, tint) {
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

/** Draw a billboard texture defined by source and rotation */
raylib.DrawBillboardPro = function (camera, texture, source, position, up, size, origin, rotation, tint) {
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

/** Update mesh vertex data in GPU for a specific buffer index */
raylib.UpdateMeshBuffer = function (mesh, index, data, dataSize, offset) {
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

/** Unload mesh data from CPU and GPU */
raylib.UnloadMesh = function (mesh) {
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

/** Export mesh data to file, returns true on success */
raylib.ExportMesh = function (mesh, fileName) {
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

/** Compute mesh bounding box limits */
raylib.GetMeshBoundingBox = function (mesh) {
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

/** Generate polygonal mesh */
raylib.GenMeshPoly = function (sides, radius) {
  return r.BindGenMeshPoly(
    sides,
    radius
  )
}

/** Generate plane mesh (with subdivisions) */
raylib.GenMeshPlane = function (width, length, resX, resZ) {
  return r.BindGenMeshPlane(
    width,
    length,
    resX,
    resZ
  )
}

/** Generate cuboid mesh */
raylib.GenMeshCube = function (width, height, length) {
  return r.BindGenMeshCube(
    width,
    height,
    length
  )
}

/** Generate sphere mesh (standard sphere) */
raylib.GenMeshSphere = function (radius, rings, slices) {
  return r.BindGenMeshSphere(
    radius,
    rings,
    slices
  )
}

/** Generate half-sphere mesh (no bottom cap) */
raylib.GenMeshHemiSphere = function (radius, rings, slices) {
  return r.BindGenMeshHemiSphere(
    radius,
    rings,
    slices
  )
}

/** Generate cylinder mesh */
raylib.GenMeshCylinder = function (radius, height, slices) {
  return r.BindGenMeshCylinder(
    radius,
    height,
    slices
  )
}

/** Generate cone/pyramid mesh */
raylib.GenMeshCone = function (radius, height, slices) {
  return r.BindGenMeshCone(
    radius,
    height,
    slices
  )
}

/** Generate torus mesh */
raylib.GenMeshTorus = function (radius, size, radSeg, sides) {
  return r.BindGenMeshTorus(
    radius,
    size,
    radSeg,
    sides
  )
}

/** Generate trefoil knot mesh */
raylib.GenMeshKnot = function (radius, size, radSeg, sides) {
  return r.BindGenMeshKnot(
    radius,
    size,
    radSeg,
    sides
  )
}

/** Generate heightmap mesh from image data */
raylib.GenMeshHeightmap = function (heightmap, size) {
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

/** Generate cubes-based map mesh from image data */
raylib.GenMeshCubicmap = function (cubicmap, cubeSize) {
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

/** Load model animations from file */
raylib.LoadModelAnimations = function (fileName, animCount) {
  return r.BindLoadModelAnimations(
    fileName,
    animCount
  )
}

/** Update model animation pose */
raylib.UpdateModelAnimation = function (model, anim, frame) {
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

/** Unload animation data */
raylib.UnloadModelAnimation = function (anim) {
  return r.BindUnloadModelAnimation(
    anim.boneCount,
    anim.frameCount,
    anim.bones,
    anim.framePoses
  )
}

/** Unload animation array data */
raylib.UnloadModelAnimations = function (animations, count) {
  return r.BindUnloadModelAnimations(
    animations,
    count
  )
}

/** Check model animation skeleton match */
raylib.IsModelAnimationValid = function (model, anim) {
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

/** Check collision between two spheres */
raylib.CheckCollisionSpheres = function (center1, radius1, center2, radius2) {
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

/** Check collision between two bounding boxes */
raylib.CheckCollisionBoxes = function (box1, box2) {
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

/** Check collision between box and sphere */
raylib.CheckCollisionBoxSphere = function (box, center, radius) {
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

/** Get collision info between ray and sphere */
raylib.GetRayCollisionSphere = function (ray, center, radius) {
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

/** Get collision info between ray and box */
raylib.GetRayCollisionBox = function (ray, box) {
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

/** Get collision info between ray and model */
raylib.GetRayCollisionModel = function (ray, model) {
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

/** Get collision info between ray and mesh */
raylib.GetRayCollisionMesh = function (ray, mesh, transform) {
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

/** Get collision info between ray and triangle */
raylib.GetRayCollisionTriangle = function (ray, p1, p2, p3) {
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

/** Get collision info between ray and quad */
raylib.GetRayCollisionQuad = function (ray, p1, p2, p3, p4) {
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

/** Initialize audio device and context */
raylib.InitAudioDevice = function () {
  return r.BindInitAudioDevice()
}

/** Close the audio device and context */
raylib.CloseAudioDevice = function () {
  return r.BindCloseAudioDevice()
}

/** Check if audio device has been initialized successfully */
raylib.IsAudioDeviceReady = function () {
  return r.BindIsAudioDeviceReady()
}

/** Set master volume (listener) */
raylib.SetMasterVolume = function (volume) {
  return r.BindSetMasterVolume(
    volume
  )
}

/** Load wave data from file */
raylib.LoadWave = function (fileName) {
  return r.BindLoadWave(
    fileName
  )
}

/** Load wave from memory buffer, fileType refers to extension: i.e. '.wav' */
raylib.LoadWaveFromMemory = function (fileType, fileData, dataSize) {
  return r.BindLoadWaveFromMemory(
    fileType,
    fileData,
    dataSize
  )
}

/** Load sound from file */
raylib.LoadSound = function (fileName) {
  return r.BindLoadSound(
    fileName
  )
}

/** Load sound from wave data */
raylib.LoadSoundFromWave = function (wave) {
  return r.BindLoadSoundFromWave(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data
  )
}

/** Update sound buffer with new data */
raylib.UpdateSound = function (sound, data, sampleCount) {
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

/** Unload wave data */
raylib.UnloadWave = function (wave) {
  return r.BindUnloadWave(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data
  )
}

/** Unload sound */
raylib.UnloadSound = function (sound) {
  return r.BindUnloadSound(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}

/** Export wave data to file, returns true on success */
raylib.ExportWave = function (wave, fileName) {
  return r.BindExportWave(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data,
    fileName
  )
}

/** Export wave sample data to code (.h), returns true on success */
raylib.ExportWaveAsCode = function (wave, fileName) {
  return r.BindExportWaveAsCode(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data,
    fileName
  )
}

/** Play a sound */
raylib.PlaySound = function (sound) {
  return r.BindPlaySound(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}

/** Stop playing a sound */
raylib.StopSound = function (sound) {
  return r.BindStopSound(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}

/** Pause a sound */
raylib.PauseSound = function (sound) {
  return r.BindPauseSound(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}

/** Resume a paused sound */
raylib.ResumeSound = function (sound) {
  return r.BindResumeSound(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}

/** Play a sound (using multichannel buffer pool) */
raylib.PlaySoundMulti = function (sound) {
  return r.BindPlaySoundMulti(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}

/** Stop any sound playing (using multichannel buffer pool) */
raylib.StopSoundMulti = function () {
  return r.BindStopSoundMulti()
}

/** Get number of sounds playing in the multichannel */
raylib.GetSoundsPlaying = function () {
  return r.BindGetSoundsPlaying()
}

/** Check if a sound is currently playing */
raylib.IsSoundPlaying = function (sound) {
  return r.BindIsSoundPlaying(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount
  )
}

/** Set volume for a sound (1.0 is max level) */
raylib.SetSoundVolume = function (sound, volume) {
  return r.BindSetSoundVolume(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount,
    volume
  )
}

/** Set pitch for a sound (1.0 is base level) */
raylib.SetSoundPitch = function (sound, pitch) {
  return r.BindSetSoundPitch(
    sound.stream.buffer,
    sound.stream.sampleRate,
    sound.stream.sampleSize,
    sound.stream.channels,
    sound.frameCount,
    pitch
  )
}

/** Copy a wave to a new wave */
raylib.WaveCopy = function (wave) {
  return r.BindWaveCopy(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data
  )
}

/** Load samples data from wave as a floats array */
raylib.LoadWaveSamples = function (wave) {
  return r.BindLoadWaveSamples(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data
  )
}

/** Unload samples data loaded with LoadWaveSamples() */
raylib.UnloadWaveSamples = function (samples) {
  return r.BindUnloadWaveSamples(
    samples
  )
}

/** Load music stream from file */
raylib.LoadMusicStream = function (fileName) {
  return r.BindLoadMusicStream(
    fileName
  )
}

/** Load music stream from data */
raylib.LoadMusicStreamFromMemory = function (fileType, data, dataSize) {
  return r.BindLoadMusicStreamFromMemory(
    fileType,
    data,
    dataSize
  )
}

/** Unload music stream */
raylib.UnloadMusicStream = function (music) {
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

/** Start music playing */
raylib.PlayMusicStream = function (music) {
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

/** Check if music is playing */
raylib.IsMusicStreamPlaying = function (music) {
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

/** Updates buffers for music streaming */
raylib.UpdateMusicStream = function (music) {
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

/** Stop music playing */
raylib.StopMusicStream = function (music) {
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

/** Pause music playing */
raylib.PauseMusicStream = function (music) {
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

/** Resume playing paused music */
raylib.ResumeMusicStream = function (music) {
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

/** Seek music to a position (in seconds) */
raylib.SeekMusicStream = function (music, position) {
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

/** Set volume for music (1.0 is max level) */
raylib.SetMusicVolume = function (music, volume) {
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

/** Set pitch for a music (1.0 is base level) */
raylib.SetMusicPitch = function (music, pitch) {
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

/** Get music time length (in seconds) */
raylib.GetMusicTimeLength = function (music) {
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

/** Get current music time played (in seconds) */
raylib.GetMusicTimePlayed = function (music) {
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

/** Load audio stream (to stream raw audio pcm data) */
raylib.LoadAudioStream = function (sampleRate, sampleSize, channels) {
  return r.BindLoadAudioStream(
    sampleRate,
    sampleSize,
    channels
  )
}

/** Unload audio stream and free memory */
raylib.UnloadAudioStream = function (stream) {
  return r.BindUnloadAudioStream(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}

/** Update audio stream buffers with data */
raylib.UpdateAudioStream = function (stream, data, frameCount) {
  return r.BindUpdateAudioStream(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels,
    data,
    frameCount
  )
}

/** Check if any audio stream buffers requires refill */
raylib.IsAudioStreamProcessed = function (stream) {
  return r.BindIsAudioStreamProcessed(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}

/** Play audio stream */
raylib.PlayAudioStream = function (stream) {
  return r.BindPlayAudioStream(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}

/** Pause audio stream */
raylib.PauseAudioStream = function (stream) {
  return r.BindPauseAudioStream(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}

/** Resume audio stream */
raylib.ResumeAudioStream = function (stream) {
  return r.BindResumeAudioStream(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}

/** Check if audio stream is playing */
raylib.IsAudioStreamPlaying = function (stream) {
  return r.BindIsAudioStreamPlaying(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}

/** Stop audio stream */
raylib.StopAudioStream = function (stream) {
  return r.BindStopAudioStream(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels
  )
}

/** Set volume for audio stream (1.0 is max level) */
raylib.SetAudioStreamVolume = function (stream, volume) {
  return r.BindSetAudioStreamVolume(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels,
    volume
  )
}

/** Set pitch for audio stream (1.0 is base level) */
raylib.SetAudioStreamPitch = function (stream, pitch) {
  return r.BindSetAudioStreamPitch(
    stream.buffer,
    stream.sampleRate,
    stream.sampleSize,
    stream.channels,
    pitch
  )
}

/** Default size for new audio streams */
raylib.SetAudioStreamBufferSizeDefault = function (size) {
  return r.BindSetAudioStreamBufferSizeDefault(
    size
  )
}

/** Update camera position for selected mode */
raylib.UpdateCamera = function (camera) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(camera, key)) {
        camera[key] = obj[key]
      }
    }
  }
}

/** Convert image data to desired format */
raylib.ImageFormat = function (image, newFormat) {
  const obj = r.BindImageFormat(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    newFormat
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Convert image to POT (power-of-two) */
raylib.ImageToPOT = function (image, fill) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Crop an image to a defined rectangle */
raylib.ImageCrop = function (image, crop) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Crop image depending on alpha value */
raylib.ImageAlphaCrop = function (image, threshold) {
  const obj = r.BindImageAlphaCrop(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    threshold
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Clear alpha channel to desired color */
raylib.ImageAlphaClear = function (image, color, threshold) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Apply alpha mask to image */
raylib.ImageAlphaMask = function (image, alphaMask) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Premultiply alpha channel */
raylib.ImageAlphaPremultiply = function (image) {
  const obj = r.BindImageAlphaPremultiply(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Resize image (Bicubic scaling algorithm) */
raylib.ImageResize = function (image, newWidth, newHeight) {
  const obj = r.BindImageResize(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    newWidth,
    newHeight
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Resize image (Nearest-Neighbor scaling algorithm) */
raylib.ImageResizeNN = function (image, newWidth, newHeight) {
  const obj = r.BindImageResizeNN(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    newWidth,
    newHeight
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Resize canvas and fill with color */
raylib.ImageResizeCanvas = function (image, newWidth, newHeight, offsetX, offsetY, fill) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Compute all mipmap levels for a provided image */
raylib.ImageMipmaps = function (image) {
  const obj = r.BindImageMipmaps(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Dither image data to 16bpp or lower (Floyd-Steinberg dithering) */
raylib.ImageDither = function (image, rBpp, gBpp, bBpp, aBpp) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Flip image vertically */
raylib.ImageFlipVertical = function (image) {
  const obj = r.BindImageFlipVertical(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Flip image horizontally */
raylib.ImageFlipHorizontal = function (image) {
  const obj = r.BindImageFlipHorizontal(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Rotate image clockwise 90deg */
raylib.ImageRotateCW = function (image) {
  const obj = r.BindImageRotateCW(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Rotate image counter-clockwise 90deg */
raylib.ImageRotateCCW = function (image) {
  const obj = r.BindImageRotateCCW(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Modify image color: tint */
raylib.ImageColorTint = function (image, color) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Modify image color: invert */
raylib.ImageColorInvert = function (image) {
  const obj = r.BindImageColorInvert(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Modify image color: grayscale */
raylib.ImageColorGrayscale = function (image) {
  const obj = r.BindImageColorGrayscale(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Modify image color: contrast (-100 to 100) */
raylib.ImageColorContrast = function (image, contrast) {
  const obj = r.BindImageColorContrast(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    contrast
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Modify image color: brightness (-255 to 255) */
raylib.ImageColorBrightness = function (image, brightness) {
  const obj = r.BindImageColorBrightness(
    image.data,
    image.width,
    image.height,
    image.mipmaps,
    image.format,
    brightness
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Modify image color: replace color */
raylib.ImageColorReplace = function (image, color, replace) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(image, key)) {
        image[key] = obj[key]
      }
    }
  }
}

/** Clear image background with given color */
raylib.ImageClearBackground = function (dst, color) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Draw pixel within an image */
raylib.ImageDrawPixel = function (dst, posX, posY, color) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Draw pixel within an image (Vector version) */
raylib.ImageDrawPixelV = function (dst, position, color) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Draw line within an image */
raylib.ImageDrawLine = function (dst, startPosX, startPosY, endPosX, endPosY, color) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Draw line within an image (Vector version) */
raylib.ImageDrawLineV = function (dst, start, end, color) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Draw circle within an image */
raylib.ImageDrawCircle = function (dst, centerX, centerY, radius, color) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Draw circle within an image (Vector version) */
raylib.ImageDrawCircleV = function (dst, center, radius, color) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Draw rectangle within an image */
raylib.ImageDrawRectangle = function (dst, posX, posY, width, height, color) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Draw rectangle within an image (Vector version) */
raylib.ImageDrawRectangleV = function (dst, position, size, color) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Draw rectangle within an image */
raylib.ImageDrawRectangleRec = function (dst, rec, color) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Draw rectangle lines within an image */
raylib.ImageDrawRectangleLines = function (dst, rec, thick, color) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Draw a source image within a destination image (tint applied to source) */
raylib.ImageDraw = function (dst, src, srcRec, dstRec, tint) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Draw text (using default font) within an image (destination) */
raylib.ImageDrawText = function (dst, text, posX, posY, fontSize, color) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Draw text (custom sprite font) within an image (destination) */
raylib.ImageDrawTextEx = function (dst, font, text, position, fontSize, spacing, tint) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(dst, key)) {
        dst[key] = obj[key]
      }
    }
  }
}

/** Generate GPU mipmaps for a texture */
raylib.GenTextureMipmaps = function (texture) {
  const obj = r.BindGenTextureMipmaps(
    texture.id,
    texture.width,
    texture.height,
    texture.mipmaps,
    texture.format
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(texture, key)) {
        texture[key] = obj[key]
      }
    }
  }
}

/** Upload mesh vertex data in GPU and provide VAO/VBO ids */
raylib.UploadMesh = function (mesh, dynamic) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(mesh, key)) {
        mesh[key] = obj[key]
      }
    }
  }
}

/** Compute mesh tangents */
raylib.GenMeshTangents = function (mesh) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(mesh, key)) {
        mesh[key] = obj[key]
      }
    }
  }
}

/** Compute mesh binormals */
raylib.GenMeshBinormals = function (mesh) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(mesh, key)) {
        mesh[key] = obj[key]
      }
    }
  }
}

/** Set material for a mesh */
raylib.SetModelMeshMaterial = function (model, meshId, materialId) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(model, key)) {
        model[key] = obj[key]
      }
    }
  }
}

/** Convert wave data to desired format */
raylib.WaveFormat = function (wave, sampleRate, sampleSize, channels) {
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
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(wave, key)) {
        wave[key] = obj[key]
      }
    }
  }
}

/** Crop a wave to defined samples range */
raylib.WaveCrop = function (wave, initSample, finalSample) {
  const obj = r.BindWaveCrop(
    wave.frameCount,
    wave.sampleRate,
    wave.sampleSize,
    wave.channels,
    wave.data,
    initSample,
    finalSample
  )
  if (obj) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(wave, key)) {
        wave[key] = obj[key]
      }
    }
  }
}

raylib.Color = function (r, g, b, a) {
  return { r, g, b, a }
}

raylib.Vector2 = function (x, y) {
  return { x, y }
}

raylib.Vector3 = function (x, y, z) {
  return { x, y, z }
}

raylib.Vector4 = function (x, y, z, w) {
  return { x, y, z, w }
}

raylib.Rectangle = function (x, y, width, height) {
  return { x, y, width, height }
}

raylib.Camera2D = function (offset, target, rotation, zoom) {
  return { offset, target, rotation, zoom }
}

raylib.Camera3D = function (position, target, up, fovy, projection) {
  return { position, target, up, fovy, projection }
}
raylib.Camera = raylib.Camera3D

// Wrapped Typed Shader Functions
/** Set shader uniform value float */
raylib.SetShaderFloat = function (shader, locIndex, value) {
  return r.BindSetShaderFloat(
    shader.id,
    shader.locs,
    locIndex,
    value
  )
}

/** Set shader uniform value float */
raylib.SetShaderInt = function (shader, locIndex, value) {
  return r.BindSetShaderInt(
    shader.id,
    shader.locs,
    locIndex,
    value
  )
}

/** Set shader uniform value vector2 */
raylib.SetShaderVec2 = function (shader, locIndex, value) {
  return r.BindSetShaderVec2(
    shader.id,
    shader.locs,
    locIndex,
    value.x,
    value.y
  )
}

/** Set shader uniform value vector3 */
raylib.SetShaderVec2 = function (shader, locIndex, value) {
  return r.BindSetShaderVec3(
    shader.id,
    shader.locs,
    locIndex,
    value.x,
    value.y,
    value.z
  )
}

/** Set shader uniform value vector4 */
raylib.SetShaderVec4 = function (shader, locIndex, value) {
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

/** Set to try enabling V-Sync on GPU */
raylib.FLAG_VSYNC_HINT = 64
/** Set to run program in fullscreen */
raylib.FLAG_FULLSCREEN_MODE = 2
/** Set to allow resizable window */
raylib.FLAG_WINDOW_RESIZABLE = 4
/** Set to disable window decoration (frame and buttons) */
raylib.FLAG_WINDOW_UNDECORATED = 8
/** Set to hide window */
raylib.FLAG_WINDOW_HIDDEN = 128
/** Set to minimize window (iconify) */
raylib.FLAG_WINDOW_MINIMIZED = 512
/** Set to maximize window (expanded to monitor) */
raylib.FLAG_WINDOW_MAXIMIZED = 1024
/** Set to window non focused */
raylib.FLAG_WINDOW_UNFOCUSED = 2048
/** Set to window always on top */
raylib.FLAG_WINDOW_TOPMOST = 4096
/** Set to allow windows running while minimized */
raylib.FLAG_WINDOW_ALWAYS_RUN = 256
/** Set to allow transparent framebuffer */
raylib.FLAG_WINDOW_TRANSPARENT = 16
/** Set to support HighDPI */
raylib.FLAG_WINDOW_HIGHDPI = 8192
/** Set to try enabling MSAA 4X */
raylib.FLAG_MSAA_4X_HINT = 32
/** Set to try enabling interlaced video format (for V3D) */
raylib.FLAG_INTERLACED_HINT = 65536
/** Display all logs */
raylib.LOG_ALL = 0
/** Trace logging, intended for internal use only */
raylib.LOG_TRACE = 1
/** Debug logging, used for internal debugging, it should be disabled on release builds */
raylib.LOG_DEBUG = 2
/** Info logging, used for program execution info */
raylib.LOG_INFO = 3
/** Warning logging, used on recoverable failures */
raylib.LOG_WARNING = 4
/** Error logging, used on unrecoverable failures */
raylib.LOG_ERROR = 5
/** Fatal logging, used to abort program: exit(EXIT_FAILURE) */
raylib.LOG_FATAL = 6
/** Disable logging */
raylib.LOG_NONE = 7
/** Key: NULL, used for no key pressed */
raylib.KEY_NULL = 0
/** Key: ' */
raylib.KEY_APOSTROPHE = 39
/** Key: , */
raylib.KEY_COMMA = 44
/** Key: - */
raylib.KEY_MINUS = 45
/** Key: . */
raylib.KEY_PERIOD = 46
/** Key: / */
raylib.KEY_SLASH = 47
/** Key: 0 */
raylib.KEY_ZERO = 48
/** Key: 1 */
raylib.KEY_ONE = 49
/** Key: 2 */
raylib.KEY_TWO = 50
/** Key: 3 */
raylib.KEY_THREE = 51
/** Key: 4 */
raylib.KEY_FOUR = 52
/** Key: 5 */
raylib.KEY_FIVE = 53
/** Key: 6 */
raylib.KEY_SIX = 54
/** Key: 7 */
raylib.KEY_SEVEN = 55
/** Key: 8 */
raylib.KEY_EIGHT = 56
/** Key: 9 */
raylib.KEY_NINE = 57
/** Key: ; */
raylib.KEY_SEMICOLON = 59
/** Key: = */
raylib.KEY_EQUAL = 61
/** Key: A | a */
raylib.KEY_A = 65
/** Key: B | b */
raylib.KEY_B = 66
/** Key: C | c */
raylib.KEY_C = 67
/** Key: D | d */
raylib.KEY_D = 68
/** Key: E | e */
raylib.KEY_E = 69
/** Key: F | f */
raylib.KEY_F = 70
/** Key: G | g */
raylib.KEY_G = 71
/** Key: H | h */
raylib.KEY_H = 72
/** Key: I | i */
raylib.KEY_I = 73
/** Key: J | j */
raylib.KEY_J = 74
/** Key: K | k */
raylib.KEY_K = 75
/** Key: L | l */
raylib.KEY_L = 76
/** Key: M | m */
raylib.KEY_M = 77
/** Key: N | n */
raylib.KEY_N = 78
/** Key: O | o */
raylib.KEY_O = 79
/** Key: P | p */
raylib.KEY_P = 80
/** Key: Q | q */
raylib.KEY_Q = 81
/** Key: R | r */
raylib.KEY_R = 82
/** Key: S | s */
raylib.KEY_S = 83
/** Key: T | t */
raylib.KEY_T = 84
/** Key: U | u */
raylib.KEY_U = 85
/** Key: V | v */
raylib.KEY_V = 86
/** Key: W | w */
raylib.KEY_W = 87
/** Key: X | x */
raylib.KEY_X = 88
/** Key: Y | y */
raylib.KEY_Y = 89
/** Key: Z | z */
raylib.KEY_Z = 90
/** Key: [ */
raylib.KEY_LEFT_BRACKET = 91
/** Key: '\' */
raylib.KEY_BACKSLASH = 92
/** Key: ] */
raylib.KEY_RIGHT_BRACKET = 93
/** Key: ` */
raylib.KEY_GRAVE = 96
/** Key: Space */
raylib.KEY_SPACE = 32
/** Key: Esc */
raylib.KEY_ESCAPE = 256
/** Key: Enter */
raylib.KEY_ENTER = 257
/** Key: Tab */
raylib.KEY_TAB = 258
/** Key: Backspace */
raylib.KEY_BACKSPACE = 259
/** Key: Ins */
raylib.KEY_INSERT = 260
/** Key: Del */
raylib.KEY_DELETE = 261
/** Key: Cursor right */
raylib.KEY_RIGHT = 262
/** Key: Cursor left */
raylib.KEY_LEFT = 263
/** Key: Cursor down */
raylib.KEY_DOWN = 264
/** Key: Cursor up */
raylib.KEY_UP = 265
/** Key: Page up */
raylib.KEY_PAGE_UP = 266
/** Key: Page down */
raylib.KEY_PAGE_DOWN = 267
/** Key: Home */
raylib.KEY_HOME = 268
/** Key: End */
raylib.KEY_END = 269
/** Key: Caps lock */
raylib.KEY_CAPS_LOCK = 280
/** Key: Scroll down */
raylib.KEY_SCROLL_LOCK = 281
/** Key: Num lock */
raylib.KEY_NUM_LOCK = 282
/** Key: Print screen */
raylib.KEY_PRINT_SCREEN = 283
/** Key: Pause */
raylib.KEY_PAUSE = 284
/** Key: F1 */
raylib.KEY_F1 = 290
/** Key: F2 */
raylib.KEY_F2 = 291
/** Key: F3 */
raylib.KEY_F3 = 292
/** Key: F4 */
raylib.KEY_F4 = 293
/** Key: F5 */
raylib.KEY_F5 = 294
/** Key: F6 */
raylib.KEY_F6 = 295
/** Key: F7 */
raylib.KEY_F7 = 296
/** Key: F8 */
raylib.KEY_F8 = 297
/** Key: F9 */
raylib.KEY_F9 = 298
/** Key: F10 */
raylib.KEY_F10 = 299
/** Key: F11 */
raylib.KEY_F11 = 300
/** Key: F12 */
raylib.KEY_F12 = 301
/** Key: Shift left */
raylib.KEY_LEFT_SHIFT = 340
/** Key: Control left */
raylib.KEY_LEFT_CONTROL = 341
/** Key: Alt left */
raylib.KEY_LEFT_ALT = 342
/** Key: Super left */
raylib.KEY_LEFT_SUPER = 343
/** Key: Shift right */
raylib.KEY_RIGHT_SHIFT = 344
/** Key: Control right */
raylib.KEY_RIGHT_CONTROL = 345
/** Key: Alt right */
raylib.KEY_RIGHT_ALT = 346
/** Key: Super right */
raylib.KEY_RIGHT_SUPER = 347
/** Key: KB menu */
raylib.KEY_KB_MENU = 348
/** Key: Keypad 0 */
raylib.KEY_KP_0 = 320
/** Key: Keypad 1 */
raylib.KEY_KP_1 = 321
/** Key: Keypad 2 */
raylib.KEY_KP_2 = 322
/** Key: Keypad 3 */
raylib.KEY_KP_3 = 323
/** Key: Keypad 4 */
raylib.KEY_KP_4 = 324
/** Key: Keypad 5 */
raylib.KEY_KP_5 = 325
/** Key: Keypad 6 */
raylib.KEY_KP_6 = 326
/** Key: Keypad 7 */
raylib.KEY_KP_7 = 327
/** Key: Keypad 8 */
raylib.KEY_KP_8 = 328
/** Key: Keypad 9 */
raylib.KEY_KP_9 = 329
/** Key: Keypad . */
raylib.KEY_KP_DECIMAL = 330
/** Key: Keypad / */
raylib.KEY_KP_DIVIDE = 331
/** Key: Keypad * */
raylib.KEY_KP_MULTIPLY = 332
/** Key: Keypad - */
raylib.KEY_KP_SUBTRACT = 333
/** Key: Keypad + */
raylib.KEY_KP_ADD = 334
/** Key: Keypad Enter */
raylib.KEY_KP_ENTER = 335
/** Key: Keypad = */
raylib.KEY_KP_EQUAL = 336
/** Key: Android back button */
raylib.KEY_BACK = 4
/** Key: Android menu button */
raylib.KEY_MENU = 82
/** Key: Android volume up button */
raylib.KEY_VOLUME_UP = 24
/** Key: Android volume down button */
raylib.KEY_VOLUME_DOWN = 25
/** Mouse button left */
raylib.MOUSE_BUTTON_LEFT = 0
/** Mouse button right */
raylib.MOUSE_BUTTON_RIGHT = 1
/** Mouse button middle (pressed wheel) */
raylib.MOUSE_BUTTON_MIDDLE = 2
/** Mouse button side (advanced mouse device) */
raylib.MOUSE_BUTTON_SIDE = 3
/** Mouse button extra (advanced mouse device) */
raylib.MOUSE_BUTTON_EXTRA = 4
/** Mouse button fordward (advanced mouse device) */
raylib.MOUSE_BUTTON_FORWARD = 5
/** Mouse button back (advanced mouse device) */
raylib.MOUSE_BUTTON_BACK = 6
/** Default pointer shape */
raylib.MOUSE_CURSOR_DEFAULT = 0
/** Arrow shape */
raylib.MOUSE_CURSOR_ARROW = 1
/** Text writing cursor shape */
raylib.MOUSE_CURSOR_IBEAM = 2
/** Cross shape */
raylib.MOUSE_CURSOR_CROSSHAIR = 3
/** Pointing hand cursor */
raylib.MOUSE_CURSOR_POINTING_HAND = 4
/** Horizontal resize/move arrow shape */
raylib.MOUSE_CURSOR_RESIZE_EW = 5
/** Vertical resize/move arrow shape */
raylib.MOUSE_CURSOR_RESIZE_NS = 6
/** Top-left to bottom-right diagonal resize/move arrow shape */
raylib.MOUSE_CURSOR_RESIZE_NWSE = 7
/** The top-right to bottom-left diagonal resize/move arrow shape */
raylib.MOUSE_CURSOR_RESIZE_NESW = 8
/** The omni-directional resize/move cursor shape */
raylib.MOUSE_CURSOR_RESIZE_ALL = 9
/** The operation-not-allowed shape */
raylib.MOUSE_CURSOR_NOT_ALLOWED = 10
/** Unknown button, just for error checking */
raylib.GAMEPAD_BUTTON_UNKNOWN = 0
/** Gamepad left DPAD up button */
raylib.GAMEPAD_BUTTON_LEFT_FACE_UP = 1
/** Gamepad left DPAD right button */
raylib.GAMEPAD_BUTTON_LEFT_FACE_RIGHT = 2
/** Gamepad left DPAD down button */
raylib.GAMEPAD_BUTTON_LEFT_FACE_DOWN = 3
/** Gamepad left DPAD left button */
raylib.GAMEPAD_BUTTON_LEFT_FACE_LEFT = 4
/** Gamepad right button up (i.e. PS3: Triangle, Xbox: Y) */
raylib.GAMEPAD_BUTTON_RIGHT_FACE_UP = 5
/** Gamepad right button right (i.e. PS3: Square, Xbox: X) */
raylib.GAMEPAD_BUTTON_RIGHT_FACE_RIGHT = 6
/** Gamepad right button down (i.e. PS3: Cross, Xbox: A) */
raylib.GAMEPAD_BUTTON_RIGHT_FACE_DOWN = 7
/** Gamepad right button left (i.e. PS3: Circle, Xbox: B) */
raylib.GAMEPAD_BUTTON_RIGHT_FACE_LEFT = 8
/** Gamepad top/back trigger left (first), it could be a trailing button */
raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_1 = 9
/** Gamepad top/back trigger left (second), it could be a trailing button */
raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_2 = 10
/** Gamepad top/back trigger right (one), it could be a trailing button */
raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_1 = 11
/** Gamepad top/back trigger right (second), it could be a trailing button */
raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_2 = 12
/** Gamepad center buttons, left one (i.e. PS3: Select) */
raylib.GAMEPAD_BUTTON_MIDDLE_LEFT = 13
/** Gamepad center buttons, middle one (i.e. PS3: PS, Xbox: XBOX) */
raylib.GAMEPAD_BUTTON_MIDDLE = 14
/** Gamepad center buttons, right one (i.e. PS3: Start) */
raylib.GAMEPAD_BUTTON_MIDDLE_RIGHT = 15
/** Gamepad joystick pressed button left */
raylib.GAMEPAD_BUTTON_LEFT_THUMB = 16
/** Gamepad joystick pressed button right */
raylib.GAMEPAD_BUTTON_RIGHT_THUMB = 17
/** Gamepad left stick X axis */
raylib.GAMEPAD_AXIS_LEFT_X = 0
/** Gamepad left stick Y axis */
raylib.GAMEPAD_AXIS_LEFT_Y = 1
/** Gamepad right stick X axis */
raylib.GAMEPAD_AXIS_RIGHT_X = 2
/** Gamepad right stick Y axis */
raylib.GAMEPAD_AXIS_RIGHT_Y = 3
/** Gamepad back trigger left, pressure level: [1..-1] */
raylib.GAMEPAD_AXIS_LEFT_TRIGGER = 4
/** Gamepad back trigger right, pressure level: [1..-1] */
raylib.GAMEPAD_AXIS_RIGHT_TRIGGER = 5
/** Albedo material (same as: MATERIAL_MAP_DIFFUSE) */
raylib.MATERIAL_MAP_ALBEDO = 0
/** Metalness material (same as: MATERIAL_MAP_SPECULAR) */
raylib.MATERIAL_MAP_METALNESS = 1
/** Normal material */
raylib.MATERIAL_MAP_NORMAL = 2
/** Roughness material */
raylib.MATERIAL_MAP_ROUGHNESS = 3
/** Ambient occlusion material */
raylib.MATERIAL_MAP_OCCLUSION = 4
/** Emission material */
raylib.MATERIAL_MAP_EMISSION = 5
/** Heightmap material */
raylib.MATERIAL_MAP_HEIGHT = 6
/** Cubemap material (NOTE: Uses GL_TEXTURE_CUBE_MAP) */
raylib.MATERIAL_MAP_CUBEMAP = 7
/** Irradiance material (NOTE: Uses GL_TEXTURE_CUBE_MAP) */
raylib.MATERIAL_MAP_IRRADIANCE = 8
/** Prefilter material (NOTE: Uses GL_TEXTURE_CUBE_MAP) */
raylib.MATERIAL_MAP_PREFILTER = 9
/** Brdf material */
raylib.MATERIAL_MAP_BRDF = 10
/** Shader location: vertex attribute: position */
raylib.SHADER_LOC_VERTEX_POSITION = 0
/** Shader location: vertex attribute: texcoord01 */
raylib.SHADER_LOC_VERTEX_TEXCOORD01 = 1
/** Shader location: vertex attribute: texcoord02 */
raylib.SHADER_LOC_VERTEX_TEXCOORD02 = 2
/** Shader location: vertex attribute: normal */
raylib.SHADER_LOC_VERTEX_NORMAL = 3
/** Shader location: vertex attribute: tangent */
raylib.SHADER_LOC_VERTEX_TANGENT = 4
/** Shader location: vertex attribute: color */
raylib.SHADER_LOC_VERTEX_COLOR = 5
/** Shader location: matrix uniform: model-view-projection */
raylib.SHADER_LOC_MATRIX_MVP = 6
/** Shader location: matrix uniform: view (camera transform) */
raylib.SHADER_LOC_MATRIX_VIEW = 7
/** Shader location: matrix uniform: projection */
raylib.SHADER_LOC_MATRIX_PROJECTION = 8
/** Shader location: matrix uniform: model (transform) */
raylib.SHADER_LOC_MATRIX_MODEL = 9
/** Shader location: matrix uniform: normal */
raylib.SHADER_LOC_MATRIX_NORMAL = 10
/** Shader location: vector uniform: view */
raylib.SHADER_LOC_VECTOR_VIEW = 11
/** Shader location: vector uniform: diffuse color */
raylib.SHADER_LOC_COLOR_DIFFUSE = 12
/** Shader location: vector uniform: specular color */
raylib.SHADER_LOC_COLOR_SPECULAR = 13
/** Shader location: vector uniform: ambient color */
raylib.SHADER_LOC_COLOR_AMBIENT = 14
/** Shader location: sampler2d texture: albedo (same as: SHADER_LOC_MAP_DIFFUSE) */
raylib.SHADER_LOC_MAP_ALBEDO = 15
/** Shader location: sampler2d texture: metalness (same as: SHADER_LOC_MAP_SPECULAR) */
raylib.SHADER_LOC_MAP_METALNESS = 16
/** Shader location: sampler2d texture: normal */
raylib.SHADER_LOC_MAP_NORMAL = 17
/** Shader location: sampler2d texture: roughness */
raylib.SHADER_LOC_MAP_ROUGHNESS = 18
/** Shader location: sampler2d texture: occlusion */
raylib.SHADER_LOC_MAP_OCCLUSION = 19
/** Shader location: sampler2d texture: emission */
raylib.SHADER_LOC_MAP_EMISSION = 20
/** Shader location: sampler2d texture: height */
raylib.SHADER_LOC_MAP_HEIGHT = 21
/** Shader location: samplerCube texture: cubemap */
raylib.SHADER_LOC_MAP_CUBEMAP = 22
/** Shader location: samplerCube texture: irradiance */
raylib.SHADER_LOC_MAP_IRRADIANCE = 23
/** Shader location: samplerCube texture: prefilter */
raylib.SHADER_LOC_MAP_PREFILTER = 24
/** Shader location: sampler2d texture: brdf */
raylib.SHADER_LOC_MAP_BRDF = 25
/** Shader uniform type: float */
raylib.SHADER_UNIFORM_FLOAT = 0
/** Shader uniform type: vec2 (2 float) */
raylib.SHADER_UNIFORM_VEC2 = 1
/** Shader uniform type: vec3 (3 float) */
raylib.SHADER_UNIFORM_VEC3 = 2
/** Shader uniform type: vec4 (4 float) */
raylib.SHADER_UNIFORM_VEC4 = 3
/** Shader uniform type: int */
raylib.SHADER_UNIFORM_INT = 4
/** Shader uniform type: ivec2 (2 int) */
raylib.SHADER_UNIFORM_IVEC2 = 5
/** Shader uniform type: ivec3 (3 int) */
raylib.SHADER_UNIFORM_IVEC3 = 6
/** Shader uniform type: ivec4 (4 int) */
raylib.SHADER_UNIFORM_IVEC4 = 7
/** Shader uniform type: sampler2d */
raylib.SHADER_UNIFORM_SAMPLER2D = 8
/** Shader attribute type: float */
raylib.SHADER_ATTRIB_FLOAT = 0
/** Shader attribute type: vec2 (2 float) */
raylib.SHADER_ATTRIB_VEC2 = 1
/** Shader attribute type: vec3 (3 float) */
raylib.SHADER_ATTRIB_VEC3 = 2
/** Shader attribute type: vec4 (4 float) */
raylib.SHADER_ATTRIB_VEC4 = 3
/** 8 bit per pixel (no alpha) */
raylib.PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = 1
/** 8*2 bpp (2 channels) */
raylib.PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = 2
/** 16 bpp */
raylib.PIXELFORMAT_UNCOMPRESSED_R5G6B5 = 3
/** 24 bpp */
raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8 = 4
/** 16 bpp (1 bit alpha) */
raylib.PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = 5
/** 16 bpp (4 bit alpha) */
raylib.PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = 6
/** 32 bpp */
raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = 7
/** 32 bpp (1 channel - float) */
raylib.PIXELFORMAT_UNCOMPRESSED_R32 = 8
/** 32*3 bpp (3 channels - float) */
raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32 = 9
/** 32*4 bpp (4 channels - float) */
raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = 10
/** 4 bpp (no alpha) */
raylib.PIXELFORMAT_COMPRESSED_DXT1_RGB = 11
/** 4 bpp (1 bit alpha) */
raylib.PIXELFORMAT_COMPRESSED_DXT1_RGBA = 12
/** 8 bpp */
raylib.PIXELFORMAT_COMPRESSED_DXT3_RGBA = 13
/** 8 bpp */
raylib.PIXELFORMAT_COMPRESSED_DXT5_RGBA = 14
/** 4 bpp */
raylib.PIXELFORMAT_COMPRESSED_ETC1_RGB = 15
/** 4 bpp */
raylib.PIXELFORMAT_COMPRESSED_ETC2_RGB = 16
/** 8 bpp */
raylib.PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 17
/** 4 bpp */
raylib.PIXELFORMAT_COMPRESSED_PVRT_RGB = 18
/** 4 bpp */
raylib.PIXELFORMAT_COMPRESSED_PVRT_RGBA = 19
/** 8 bpp */
raylib.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 20
/** 2 bpp */
raylib.PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 21
/** No filter, just pixel approximation */
raylib.TEXTURE_FILTER_POINT = 0
/** Linear filtering */
raylib.TEXTURE_FILTER_BILINEAR = 1
/** Trilinear filtering (linear with mipmaps) */
raylib.TEXTURE_FILTER_TRILINEAR = 2
/** Anisotropic filtering 4x */
raylib.TEXTURE_FILTER_ANISOTROPIC_4X = 3
/** Anisotropic filtering 8x */
raylib.TEXTURE_FILTER_ANISOTROPIC_8X = 4
/** Anisotropic filtering 16x */
raylib.TEXTURE_FILTER_ANISOTROPIC_16X = 5
/** Repeats texture in tiled mode */
raylib.TEXTURE_WRAP_REPEAT = 0
/** Clamps texture to edge pixel in tiled mode */
raylib.TEXTURE_WRAP_CLAMP = 1
/** Mirrors and repeats the texture in tiled mode */
raylib.TEXTURE_WRAP_MIRROR_REPEAT = 2
/** Mirrors and clamps to border the texture in tiled mode */
raylib.TEXTURE_WRAP_MIRROR_CLAMP = 3
/** Automatically detect layout type */
raylib.CUBEMAP_LAYOUT_AUTO_DETECT = 0
/** Layout is defined by a vertical line with faces */
raylib.CUBEMAP_LAYOUT_LINE_VERTICAL = 1
/** Layout is defined by an horizontal line with faces */
raylib.CUBEMAP_LAYOUT_LINE_HORIZONTAL = 2
/** Layout is defined by a 3x4 cross with cubemap faces */
raylib.CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR = 3
/** Layout is defined by a 4x3 cross with cubemap faces */
raylib.CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE = 4
/** Layout is defined by a panorama image (equirectangular map) */
raylib.CUBEMAP_LAYOUT_PANORAMA = 5
/** Default font generation, anti-aliased */
raylib.FONT_DEFAULT = 0
/** Bitmap font generation, no anti-aliasing */
raylib.FONT_BITMAP = 1
/** SDF font generation, requires external shader */
raylib.FONT_SDF = 2
/** Blend textures considering alpha (default) */
raylib.BLEND_ALPHA = 0
/** Blend textures adding colors */
raylib.BLEND_ADDITIVE = 1
/** Blend textures multiplying colors */
raylib.BLEND_MULTIPLIED = 2
/** Blend textures adding colors (alternative) */
raylib.BLEND_ADD_COLORS = 3
/** Blend textures subtracting colors (alternative) */
raylib.BLEND_SUBTRACT_COLORS = 4
/** Belnd textures using custom src/dst factors (use rlSetBlendMode()) */
raylib.BLEND_CUSTOM = 5
/** No gesture */
raylib.GESTURE_NONE = 0
/** Tap gesture */
raylib.GESTURE_TAP = 1
/** Double tap gesture */
raylib.GESTURE_DOUBLETAP = 2
/** Hold gesture */
raylib.GESTURE_HOLD = 4
/** Drag gesture */
raylib.GESTURE_DRAG = 8
/** Swipe right gesture */
raylib.GESTURE_SWIPE_RIGHT = 16
/** Swipe left gesture */
raylib.GESTURE_SWIPE_LEFT = 32
/** Swipe up gesture */
raylib.GESTURE_SWIPE_UP = 64
/** Swipe down gesture */
raylib.GESTURE_SWIPE_DOWN = 128
/** Pinch in gesture */
raylib.GESTURE_PINCH_IN = 256
/** Pinch out gesture */
raylib.GESTURE_PINCH_OUT = 512
/** Custom camera */
raylib.CAMERA_CUSTOM = 0
/** Free camera */
raylib.CAMERA_FREE = 1
/** Orbital camera */
raylib.CAMERA_ORBITAL = 2
/** First person camera */
raylib.CAMERA_FIRST_PERSON = 3
/** Third person camera */
raylib.CAMERA_THIRD_PERSON = 4
/** Perspective projection */
raylib.CAMERA_PERSPECTIVE = 0
/** Orthographic projection */
raylib.CAMERA_ORTHOGRAPHIC = 1
/** Npatch layout: 3x3 tiles */
raylib.NPATCH_NINE_PATCH = 0
/** Npatch layout: 1x3 tiles */
raylib.NPATCH_THREE_PATCH_VERTICAL = 1
/** Npatch layout: 3x1 tiles */
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

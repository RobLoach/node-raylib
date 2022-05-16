## Functions

<dl>
<dt><a href="#InitWindow">InitWindow(width, height, title)</a> ⇒ <code>undefined</code></dt>
<dd><p>Initialize window and OpenGL context</p>
</dd>
<dt><a href="#WindowShouldClose">WindowShouldClose()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if KEY_ESCAPE pressed or Close icon pressed</p>
</dd>
<dt><a href="#CloseWindow">CloseWindow()</a> ⇒ <code>undefined</code></dt>
<dd><p>Close window and unload OpenGL context</p>
</dd>
<dt><a href="#IsWindowReady">IsWindowReady()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if window has been initialized successfully</p>
</dd>
<dt><a href="#IsWindowFullscreen">IsWindowFullscreen()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if window is currently fullscreen</p>
</dd>
<dt><a href="#IsWindowHidden">IsWindowHidden()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if window is currently hidden (only PLATFORM_DESKTOP)</p>
</dd>
<dt><a href="#IsWindowMinimized">IsWindowMinimized()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if window is currently minimized (only PLATFORM_DESKTOP)</p>
</dd>
<dt><a href="#IsWindowMaximized">IsWindowMaximized()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if window is currently maximized (only PLATFORM_DESKTOP)</p>
</dd>
<dt><a href="#IsWindowFocused">IsWindowFocused()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if window is currently focused (only PLATFORM_DESKTOP)</p>
</dd>
<dt><a href="#IsWindowResized">IsWindowResized()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if window has been resized last frame</p>
</dd>
<dt><a href="#IsWindowState">IsWindowState(flag)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if one specific window flag is enabled</p>
</dd>
<dt><a href="#SetWindowState">SetWindowState(flags)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set window configuration state using flags (only PLATFORM_DESKTOP)</p>
</dd>
<dt><a href="#ClearWindowState">ClearWindowState(flags)</a> ⇒ <code>undefined</code></dt>
<dd><p>Clear window configuration state flags</p>
</dd>
<dt><a href="#ToggleFullscreen">ToggleFullscreen()</a> ⇒ <code>undefined</code></dt>
<dd><p>Toggle window state: fullscreen/windowed (only PLATFORM_DESKTOP)</p>
</dd>
<dt><a href="#MaximizeWindow">MaximizeWindow()</a> ⇒ <code>undefined</code></dt>
<dd><p>Set window state: maximized, if resizable (only PLATFORM_DESKTOP)</p>
</dd>
<dt><a href="#MinimizeWindow">MinimizeWindow()</a> ⇒ <code>undefined</code></dt>
<dd><p>Set window state: minimized, if resizable (only PLATFORM_DESKTOP)</p>
</dd>
<dt><a href="#RestoreWindow">RestoreWindow()</a> ⇒ <code>undefined</code></dt>
<dd><p>Set window state: not minimized/maximized (only PLATFORM_DESKTOP)</p>
</dd>
<dt><a href="#SetWindowIcon">SetWindowIcon(image)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set icon for window (only PLATFORM_DESKTOP)</p>
</dd>
<dt><a href="#SetWindowTitle">SetWindowTitle(title)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set title for window (only PLATFORM_DESKTOP)</p>
</dd>
<dt><a href="#SetWindowPosition">SetWindowPosition(x, y)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set window position on screen (only PLATFORM_DESKTOP)</p>
</dd>
<dt><a href="#SetWindowMonitor">SetWindowMonitor(monitor)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set monitor for the current window (fullscreen mode)</p>
</dd>
<dt><a href="#SetWindowMinSize">SetWindowMinSize(width, height)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE)</p>
</dd>
<dt><a href="#SetWindowSize">SetWindowSize(width, height)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set window dimensions</p>
</dd>
<dt><a href="#GetWindowHandle">GetWindowHandle()</a> ⇒ <code>number</code></dt>
<dd><p>Get native window handle</p>
</dd>
<dt><a href="#GetScreenWidth">GetScreenWidth()</a> ⇒ <code>number</code></dt>
<dd><p>Get current screen width</p>
</dd>
<dt><a href="#GetScreenHeight">GetScreenHeight()</a> ⇒ <code>number</code></dt>
<dd><p>Get current screen height</p>
</dd>
<dt><a href="#GetMonitorCount">GetMonitorCount()</a> ⇒ <code>number</code></dt>
<dd><p>Get number of connected monitors</p>
</dd>
<dt><a href="#GetCurrentMonitor">GetCurrentMonitor()</a> ⇒ <code>number</code></dt>
<dd><p>Get current connected monitor</p>
</dd>
<dt><a href="#GetMonitorPosition">GetMonitorPosition(monitor)</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Get specified monitor position</p>
</dd>
<dt><a href="#GetMonitorWidth">GetMonitorWidth(monitor)</a> ⇒ <code>number</code></dt>
<dd><p>Get specified monitor width (max available by monitor)</p>
</dd>
<dt><a href="#GetMonitorHeight">GetMonitorHeight(monitor)</a> ⇒ <code>number</code></dt>
<dd><p>Get specified monitor height (max available by monitor)</p>
</dd>
<dt><a href="#GetMonitorPhysicalWidth">GetMonitorPhysicalWidth(monitor)</a> ⇒ <code>number</code></dt>
<dd><p>Get specified monitor physical width in millimetres</p>
</dd>
<dt><a href="#GetMonitorPhysicalHeight">GetMonitorPhysicalHeight(monitor)</a> ⇒ <code>number</code></dt>
<dd><p>Get specified monitor physical height in millimetres</p>
</dd>
<dt><a href="#GetMonitorRefreshRate">GetMonitorRefreshRate(monitor)</a> ⇒ <code>number</code></dt>
<dd><p>Get specified monitor refresh rate</p>
</dd>
<dt><a href="#GetWindowPosition">GetWindowPosition()</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Get window position XY on monitor</p>
</dd>
<dt><a href="#GetWindowScaleDPI">GetWindowScaleDPI()</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Get window scale DPI factor</p>
</dd>
<dt><a href="#GetMonitorName">GetMonitorName(monitor)</a> ⇒ <code>string</code></dt>
<dd><p>Get the human-readable, UTF-8 encoded name of the primary monitor</p>
</dd>
<dt><a href="#SetClipboardText">SetClipboardText(text)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set clipboard text content</p>
</dd>
<dt><a href="#GetClipboardText">GetClipboardText()</a> ⇒ <code>string</code></dt>
<dd><p>Get clipboard text content</p>
</dd>
<dt><a href="#SwapScreenBuffer">SwapScreenBuffer()</a> ⇒ <code>undefined</code></dt>
<dd><p>Swap back buffer with front buffer (screen drawing)</p>
</dd>
<dt><a href="#PollInputEvents">PollInputEvents()</a> ⇒ <code>undefined</code></dt>
<dd><p>Register all input events</p>
</dd>
<dt><a href="#WaitTime">WaitTime(ms)</a> ⇒ <code>undefined</code></dt>
<dd><p>Wait for some milliseconds (halt program execution)</p>
</dd>
<dt><a href="#ShowCursor">ShowCursor()</a> ⇒ <code>undefined</code></dt>
<dd><p>Shows cursor</p>
</dd>
<dt><a href="#HideCursor">HideCursor()</a> ⇒ <code>undefined</code></dt>
<dd><p>Hides cursor</p>
</dd>
<dt><a href="#IsCursorHidden">IsCursorHidden()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if cursor is not visible</p>
</dd>
<dt><a href="#EnableCursor">EnableCursor()</a> ⇒ <code>undefined</code></dt>
<dd><p>Enables cursor (unlock cursor)</p>
</dd>
<dt><a href="#DisableCursor">DisableCursor()</a> ⇒ <code>undefined</code></dt>
<dd><p>Disables cursor (lock cursor)</p>
</dd>
<dt><a href="#IsCursorOnScreen">IsCursorOnScreen()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if cursor is on the screen</p>
</dd>
<dt><a href="#ClearBackground">ClearBackground(color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set background color (framebuffer clear color)</p>
</dd>
<dt><a href="#BeginDrawing">BeginDrawing()</a> ⇒ <code>undefined</code></dt>
<dd><p>Setup canvas (framebuffer) to start drawing</p>
</dd>
<dt><a href="#EndDrawing">EndDrawing()</a> ⇒ <code>undefined</code></dt>
<dd><p>End canvas drawing and swap buffers (double buffering)</p>
</dd>
<dt><a href="#BeginMode2D">BeginMode2D(camera)</a> ⇒ <code>undefined</code></dt>
<dd><p>Begin 2D mode with custom camera (2D)</p>
</dd>
<dt><a href="#EndMode2D">EndMode2D()</a> ⇒ <code>undefined</code></dt>
<dd><p>Ends 2D mode with custom camera</p>
</dd>
<dt><a href="#BeginMode3D">BeginMode3D(camera)</a> ⇒ <code>undefined</code></dt>
<dd><p>Begin 3D mode with custom camera (3D)</p>
</dd>
<dt><a href="#EndMode3D">EndMode3D()</a> ⇒ <code>undefined</code></dt>
<dd><p>Ends 3D mode and returns to default 2D orthographic mode</p>
</dd>
<dt><a href="#BeginTextureMode">BeginTextureMode(target)</a> ⇒ <code>undefined</code></dt>
<dd><p>Begin drawing to render texture</p>
</dd>
<dt><a href="#EndTextureMode">EndTextureMode()</a> ⇒ <code>undefined</code></dt>
<dd><p>Ends drawing to render texture</p>
</dd>
<dt><a href="#BeginShaderMode">BeginShaderMode(shader)</a> ⇒ <code>undefined</code></dt>
<dd><p>Begin custom shader drawing</p>
</dd>
<dt><a href="#EndShaderMode">EndShaderMode()</a> ⇒ <code>undefined</code></dt>
<dd><p>End custom shader drawing (use default shader)</p>
</dd>
<dt><a href="#BeginBlendMode">BeginBlendMode(mode)</a> ⇒ <code>undefined</code></dt>
<dd><p>Begin blending mode (alpha, additive, multiplied, subtract, custom)</p>
</dd>
<dt><a href="#EndBlendMode">EndBlendMode()</a> ⇒ <code>undefined</code></dt>
<dd><p>End blending mode (reset to default: alpha blending)</p>
</dd>
<dt><a href="#BeginScissorMode">BeginScissorMode(x, y, width, height)</a> ⇒ <code>undefined</code></dt>
<dd><p>Begin scissor mode (define screen area for following drawing)</p>
</dd>
<dt><a href="#EndScissorMode">EndScissorMode()</a> ⇒ <code>undefined</code></dt>
<dd><p>End scissor mode</p>
</dd>
<dt><a href="#EndVrStereoMode">EndVrStereoMode()</a> ⇒ <code>undefined</code></dt>
<dd><p>End stereo rendering (requires VR simulator)</p>
</dd>
<dt><a href="#LoadShader">LoadShader(vsFileName, fsFileName)</a> ⇒ <code>Shader</code></dt>
<dd><p>Load shader from files and bind default locations</p>
</dd>
<dt><a href="#LoadShaderFromMemory">LoadShaderFromMemory(vsCode, fsCode)</a> ⇒ <code>Shader</code></dt>
<dd><p>Load shader from code strings and bind default locations</p>
</dd>
<dt><a href="#GetShaderLocation">GetShaderLocation(shader, uniformName)</a> ⇒ <code>number</code></dt>
<dd><p>Get shader uniform location</p>
</dd>
<dt><a href="#GetShaderLocationAttrib">GetShaderLocationAttrib(shader, attribName)</a> ⇒ <code>number</code></dt>
<dd><p>Get shader attribute location</p>
</dd>
<dt><a href="#SetShaderValueMatrix">SetShaderValueMatrix(shader, locIndex, mat)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set shader uniform value (matrix 4x4)</p>
</dd>
<dt><a href="#SetShaderValueTexture">SetShaderValueTexture(shader, locIndex, texture)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set shader uniform value for texture (sampler2d)</p>
</dd>
<dt><a href="#UnloadShader">UnloadShader(shader)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload shader from GPU memory (VRAM)</p>
</dd>
<dt><a href="#GetMouseRay">GetMouseRay(mousePosition, camera)</a> ⇒ <code>Ray</code></dt>
<dd><p>Get a ray trace from mouse position</p>
</dd>
<dt><a href="#GetCameraMatrix">GetCameraMatrix(camera)</a> ⇒ <code>Matrix</code></dt>
<dd><p>Get camera transform matrix (view matrix)</p>
</dd>
<dt><a href="#GetCameraMatrix2D">GetCameraMatrix2D(camera)</a> ⇒ <code>Matrix</code></dt>
<dd><p>Get camera 2d transform matrix</p>
</dd>
<dt><a href="#GetWorldToScreen">GetWorldToScreen(position, camera)</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Get the screen space position for a 3d world space position</p>
</dd>
<dt><a href="#GetWorldToScreenEx">GetWorldToScreenEx(position, camera, width, height)</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Get size position for a 3d world space position</p>
</dd>
<dt><a href="#GetWorldToScreen2D">GetWorldToScreen2D(position, camera)</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Get the screen space position for a 2d camera world space position</p>
</dd>
<dt><a href="#GetScreenToWorld2D">GetScreenToWorld2D(position, camera)</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Get the world space position for a 2d camera screen space position</p>
</dd>
<dt><a href="#SetTargetFPS">SetTargetFPS(fps)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set target FPS (maximum)</p>
</dd>
<dt><a href="#GetFPS">GetFPS()</a> ⇒ <code>number</code></dt>
<dd><p>Get current FPS</p>
</dd>
<dt><a href="#GetFrameTime">GetFrameTime()</a> ⇒ <code>number</code></dt>
<dd><p>Get time in seconds for last frame drawn (delta time)</p>
</dd>
<dt><a href="#GetTime">GetTime()</a> ⇒ <code>number</code></dt>
<dd><p>Get elapsed time in seconds since InitWindow()</p>
</dd>
<dt><a href="#GetRandomValue">GetRandomValue(min, max)</a> ⇒ <code>number</code></dt>
<dd><p>Get a random value between min and max (both included)</p>
</dd>
<dt><a href="#SetRandomSeed">SetRandomSeed(seed)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set the seed for the random number generator</p>
</dd>
<dt><a href="#TakeScreenshot">TakeScreenshot(fileName)</a> ⇒ <code>undefined</code></dt>
<dd><p>Takes a screenshot of current screen (filename extension defines format)</p>
</dd>
<dt><a href="#SetConfigFlags">SetConfigFlags(flags)</a> ⇒ <code>undefined</code></dt>
<dd><p>Setup init configuration flags (view FLAGS)</p>
</dd>
<dt><a href="#SetTraceLogLevel">SetTraceLogLevel(logLevel)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set the current threshold (minimum) log level</p>
</dd>
<dt><a href="#MemAlloc">MemAlloc(size)</a> ⇒ <code>number</code></dt>
<dd><p>Internal memory allocator</p>
</dd>
<dt><a href="#MemRealloc">MemRealloc(ptr, size)</a> ⇒ <code>number</code></dt>
<dd><p>Internal memory reallocator</p>
</dd>
<dt><a href="#MemFree">MemFree(ptr)</a> ⇒ <code>undefined</code></dt>
<dd><p>Internal memory free</p>
</dd>
<dt><a href="#LoadFileData">LoadFileData(fileName, bytesRead)</a> ⇒ <code>Buffer</code></dt>
<dd><p>Load file data as byte array (read)</p>
</dd>
<dt><a href="#UnloadFileData">UnloadFileData(data)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload file data allocated by LoadFileData()</p>
</dd>
<dt><a href="#SaveFileData">SaveFileData(fileName, data, bytesToWrite)</a> ⇒ <code>boolean</code></dt>
<dd><p>Save data to file from byte array (write), returns true on success</p>
</dd>
<dt><a href="#LoadFileText">LoadFileText(fileName)</a> ⇒ <code>string</code></dt>
<dd><p>Load text data from file (read), returns a &#39;\0&#39; terminated string</p>
</dd>
<dt><a href="#UnloadFileText">UnloadFileText(text)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload file text data allocated by LoadFileText()</p>
</dd>
<dt><a href="#SaveFileText">SaveFileText(fileName, text)</a> ⇒ <code>boolean</code></dt>
<dd><p>Save text data to file (write), string must be &#39;\0&#39; terminated, returns true on success</p>
</dd>
<dt><a href="#FileExists">FileExists(fileName)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if file exists</p>
</dd>
<dt><a href="#DirectoryExists">DirectoryExists(dirPath)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a directory path exists</p>
</dd>
<dt><a href="#IsFileExtension">IsFileExtension(fileName, ext)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check file extension (including point: .png, .wav)</p>
</dd>
<dt><a href="#GetFileExtension">GetFileExtension(fileName)</a> ⇒ <code>string</code></dt>
<dd><p>Get pointer to extension for a filename string (includes dot: &#39;.png&#39;)</p>
</dd>
<dt><a href="#GetFileName">GetFileName(filePath)</a> ⇒ <code>string</code></dt>
<dd><p>Get pointer to filename for a path string</p>
</dd>
<dt><a href="#GetFileNameWithoutExt">GetFileNameWithoutExt(filePath)</a> ⇒ <code>string</code></dt>
<dd><p>Get filename string without extension (uses static string)</p>
</dd>
<dt><a href="#GetDirectoryPath">GetDirectoryPath(filePath)</a> ⇒ <code>string</code></dt>
<dd><p>Get full path for a given fileName with path (uses static string)</p>
</dd>
<dt><a href="#GetPrevDirectoryPath">GetPrevDirectoryPath(dirPath)</a> ⇒ <code>string</code></dt>
<dd><p>Get previous directory path for a given path (uses static string)</p>
</dd>
<dt><a href="#GetWorkingDirectory">GetWorkingDirectory()</a> ⇒ <code>string</code></dt>
<dd><p>Get current working directory (uses static string)</p>
</dd>
<dt><a href="#GetDirectoryFiles">GetDirectoryFiles(dirPath, count)</a> ⇒ <code>number</code></dt>
<dd><p>Get filenames in a directory path (memory should be freed)</p>
</dd>
<dt><a href="#ClearDirectoryFiles">ClearDirectoryFiles()</a> ⇒ <code>undefined</code></dt>
<dd><p>Clear directory files paths buffers (free memory)</p>
</dd>
<dt><a href="#ChangeDirectory">ChangeDirectory(dir)</a> ⇒ <code>boolean</code></dt>
<dd><p>Change working directory, return true on success</p>
</dd>
<dt><a href="#IsFileDropped">IsFileDropped()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a file has been dropped into window</p>
</dd>
<dt><a href="#GetDroppedFiles">GetDroppedFiles(count)</a> ⇒ <code>number</code></dt>
<dd><p>Get dropped files names (memory should be freed)</p>
</dd>
<dt><a href="#ClearDroppedFiles">ClearDroppedFiles()</a> ⇒ <code>undefined</code></dt>
<dd><p>Clear dropped files paths buffer (free memory)</p>
</dd>
<dt><a href="#GetFileModTime">GetFileModTime(fileName)</a> ⇒ <code>number</code></dt>
<dd><p>Get file modification time (last write time)</p>
</dd>
<dt><a href="#CompressData">CompressData(data, dataLength, compDataLength)</a> ⇒ <code>Buffer</code></dt>
<dd><p>Compress data (DEFLATE algorithm)</p>
</dd>
<dt><a href="#DecompressData">DecompressData(compData, compDataLength, dataLength)</a> ⇒ <code>Buffer</code></dt>
<dd><p>Decompress data (DEFLATE algorithm)</p>
</dd>
<dt><a href="#EncodeDataBase64">EncodeDataBase64(data, dataLength, outputLength)</a> ⇒ <code>string</code></dt>
<dd><p>Encode data to Base64 string</p>
</dd>
<dt><a href="#DecodeDataBase64">DecodeDataBase64(data, outputLength)</a> ⇒ <code>Buffer</code></dt>
<dd><p>Decode Base64 string data</p>
</dd>
<dt><a href="#SaveStorageValue">SaveStorageValue(position, value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Save integer value to storage file (to defined position), returns true on success</p>
</dd>
<dt><a href="#LoadStorageValue">LoadStorageValue(position)</a> ⇒ <code>number</code></dt>
<dd><p>Load integer value from storage file (from defined position)</p>
</dd>
<dt><a href="#OpenURL">OpenURL(url)</a> ⇒ <code>undefined</code></dt>
<dd><p>Open URL with default system browser (if available)</p>
</dd>
<dt><a href="#IsKeyPressed">IsKeyPressed(key)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a key has been pressed once</p>
</dd>
<dt><a href="#IsKeyDown">IsKeyDown(key)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a key is being pressed</p>
</dd>
<dt><a href="#IsKeyReleased">IsKeyReleased(key)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a key has been released once</p>
</dd>
<dt><a href="#IsKeyUp">IsKeyUp(key)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a key is NOT being pressed</p>
</dd>
<dt><a href="#SetExitKey">SetExitKey(key)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set a custom key to exit program (default is ESC)</p>
</dd>
<dt><a href="#GetKeyPressed">GetKeyPressed()</a> ⇒ <code>number</code></dt>
<dd><p>Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty</p>
</dd>
<dt><a href="#GetCharPressed">GetCharPressed()</a> ⇒ <code>number</code></dt>
<dd><p>Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty</p>
</dd>
<dt><a href="#IsGamepadAvailable">IsGamepadAvailable(gamepad)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a gamepad is available</p>
</dd>
<dt><a href="#GetGamepadName">GetGamepadName(gamepad)</a> ⇒ <code>string</code></dt>
<dd><p>Get gamepad internal name id</p>
</dd>
<dt><a href="#IsGamepadButtonPressed">IsGamepadButtonPressed(gamepad, button)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a gamepad button has been pressed once</p>
</dd>
<dt><a href="#IsGamepadButtonDown">IsGamepadButtonDown(gamepad, button)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a gamepad button is being pressed</p>
</dd>
<dt><a href="#IsGamepadButtonReleased">IsGamepadButtonReleased(gamepad, button)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a gamepad button has been released once</p>
</dd>
<dt><a href="#IsGamepadButtonUp">IsGamepadButtonUp(gamepad, button)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a gamepad button is NOT being pressed</p>
</dd>
<dt><a href="#GetGamepadButtonPressed">GetGamepadButtonPressed()</a> ⇒ <code>number</code></dt>
<dd><p>Get the last gamepad button pressed</p>
</dd>
<dt><a href="#GetGamepadAxisCount">GetGamepadAxisCount(gamepad)</a> ⇒ <code>number</code></dt>
<dd><p>Get gamepad axis count for a gamepad</p>
</dd>
<dt><a href="#GetGamepadAxisMovement">GetGamepadAxisMovement(gamepad, axis)</a> ⇒ <code>number</code></dt>
<dd><p>Get axis movement value for a gamepad axis</p>
</dd>
<dt><a href="#SetGamepadMappings">SetGamepadMappings(mappings)</a> ⇒ <code>number</code></dt>
<dd><p>Set internal gamepad mappings (SDL_GameControllerDB)</p>
</dd>
<dt><a href="#IsMouseButtonPressed">IsMouseButtonPressed(button)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a mouse button has been pressed once</p>
</dd>
<dt><a href="#IsMouseButtonDown">IsMouseButtonDown(button)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a mouse button is being pressed</p>
</dd>
<dt><a href="#IsMouseButtonReleased">IsMouseButtonReleased(button)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a mouse button has been released once</p>
</dd>
<dt><a href="#IsMouseButtonUp">IsMouseButtonUp(button)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a mouse button is NOT being pressed</p>
</dd>
<dt><a href="#GetMouseX">GetMouseX()</a> ⇒ <code>number</code></dt>
<dd><p>Get mouse position X</p>
</dd>
<dt><a href="#GetMouseY">GetMouseY()</a> ⇒ <code>number</code></dt>
<dd><p>Get mouse position Y</p>
</dd>
<dt><a href="#GetMousePosition">GetMousePosition()</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Get mouse position XY</p>
</dd>
<dt><a href="#GetMouseDelta">GetMouseDelta()</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Get mouse delta between frames</p>
</dd>
<dt><a href="#SetMousePosition">SetMousePosition(x, y)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set mouse position XY</p>
</dd>
<dt><a href="#SetMouseOffset">SetMouseOffset(offsetX, offsetY)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set mouse offset</p>
</dd>
<dt><a href="#SetMouseScale">SetMouseScale(scaleX, scaleY)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set mouse scaling</p>
</dd>
<dt><a href="#GetMouseWheelMove">GetMouseWheelMove()</a> ⇒ <code>number</code></dt>
<dd><p>Get mouse wheel movement Y</p>
</dd>
<dt><a href="#SetMouseCursor">SetMouseCursor(cursor)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set mouse cursor</p>
</dd>
<dt><a href="#GetTouchX">GetTouchX()</a> ⇒ <code>number</code></dt>
<dd><p>Get touch position X for touch point 0 (relative to screen size)</p>
</dd>
<dt><a href="#GetTouchY">GetTouchY()</a> ⇒ <code>number</code></dt>
<dd><p>Get touch position Y for touch point 0 (relative to screen size)</p>
</dd>
<dt><a href="#GetTouchPosition">GetTouchPosition(index)</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Get touch position XY for a touch point index (relative to screen size)</p>
</dd>
<dt><a href="#GetTouchPointId">GetTouchPointId(index)</a> ⇒ <code>number</code></dt>
<dd><p>Get touch point identifier for given index</p>
</dd>
<dt><a href="#GetTouchPointCount">GetTouchPointCount()</a> ⇒ <code>number</code></dt>
<dd><p>Get number of touch points</p>
</dd>
<dt><a href="#SetGesturesEnabled">SetGesturesEnabled(flags)</a> ⇒ <code>undefined</code></dt>
<dd><p>Enable a set of gestures using flags</p>
</dd>
<dt><a href="#IsGestureDetected">IsGestureDetected(gesture)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a gesture have been detected</p>
</dd>
<dt><a href="#GetGestureDetected">GetGestureDetected()</a> ⇒ <code>number</code></dt>
<dd><p>Get latest detected gesture</p>
</dd>
<dt><a href="#GetGestureHoldDuration">GetGestureHoldDuration()</a> ⇒ <code>number</code></dt>
<dd><p>Get gesture hold time in milliseconds</p>
</dd>
<dt><a href="#GetGestureDragVector">GetGestureDragVector()</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Get gesture drag vector</p>
</dd>
<dt><a href="#GetGestureDragAngle">GetGestureDragAngle()</a> ⇒ <code>number</code></dt>
<dd><p>Get gesture drag angle</p>
</dd>
<dt><a href="#GetGesturePinchVector">GetGesturePinchVector()</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Get gesture pinch delta</p>
</dd>
<dt><a href="#GetGesturePinchAngle">GetGesturePinchAngle()</a> ⇒ <code>number</code></dt>
<dd><p>Get gesture pinch angle</p>
</dd>
<dt><a href="#SetCameraMode">SetCameraMode(camera, mode)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set camera mode (multiple camera modes available)</p>
</dd>
<dt><a href="#SetCameraPanControl">SetCameraPanControl(keyPan)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set camera pan key to combine with mouse movement (free camera)</p>
</dd>
<dt><a href="#SetCameraAltControl">SetCameraAltControl(keyAlt)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set camera alt key to combine with mouse movement (free camera)</p>
</dd>
<dt><a href="#SetCameraSmoothZoomControl">SetCameraSmoothZoomControl(keySmoothZoom)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set camera smooth zoom key to combine with mouse (free camera)</p>
</dd>
<dt><a href="#SetCameraMoveControls">SetCameraMoveControls(keyFront, keyBack, keyRight, keyLeft, keyUp, keyDown)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set camera move controls (1st person and 3rd person cameras)</p>
</dd>
<dt><a href="#SetShapesTexture">SetShapesTexture(texture, source)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set texture and rectangle to be used on shapes drawing</p>
</dd>
<dt><a href="#DrawPixel">DrawPixel(posX, posY, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a pixel</p>
</dd>
<dt><a href="#DrawPixelV">DrawPixelV(position, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a pixel (Vector version)</p>
</dd>
<dt><a href="#DrawLine">DrawLine(startPosX, startPosY, endPosX, endPosY, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a line</p>
</dd>
<dt><a href="#DrawLineV">DrawLineV(startPos, endPos, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a line (Vector version)</p>
</dd>
<dt><a href="#DrawLineEx">DrawLineEx(startPos, endPos, thick, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a line defining thickness</p>
</dd>
<dt><a href="#DrawLineBezier">DrawLineBezier(startPos, endPos, thick, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a line using cubic-bezier curves in-out</p>
</dd>
<dt><a href="#DrawLineBezierQuad">DrawLineBezierQuad(startPos, endPos, controlPos, thick, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw line using quadratic bezier curves with a control point</p>
</dd>
<dt><a href="#DrawLineBezierCubic">DrawLineBezierCubic(startPos, endPos, startControlPos, endControlPos, thick, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw line using cubic bezier curves with 2 control points</p>
</dd>
<dt><a href="#DrawLineStrip">DrawLineStrip(points, pointCount, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw lines sequence</p>
</dd>
<dt><a href="#DrawCircle">DrawCircle(centerX, centerY, radius, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a color-filled circle</p>
</dd>
<dt><a href="#DrawCircleSector">DrawCircleSector(center, radius, startAngle, endAngle, segments, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a piece of a circle</p>
</dd>
<dt><a href="#DrawCircleSectorLines">DrawCircleSectorLines(center, radius, startAngle, endAngle, segments, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw circle sector outline</p>
</dd>
<dt><a href="#DrawCircleGradient">DrawCircleGradient(centerX, centerY, radius, color1, color2)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a gradient-filled circle</p>
</dd>
<dt><a href="#DrawCircleV">DrawCircleV(center, radius, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a color-filled circle (Vector version)</p>
</dd>
<dt><a href="#DrawCircleLines">DrawCircleLines(centerX, centerY, radius, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw circle outline</p>
</dd>
<dt><a href="#DrawEllipse">DrawEllipse(centerX, centerY, radiusH, radiusV, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw ellipse</p>
</dd>
<dt><a href="#DrawEllipseLines">DrawEllipseLines(centerX, centerY, radiusH, radiusV, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw ellipse outline</p>
</dd>
<dt><a href="#DrawRing">DrawRing(center, innerRadius, outerRadius, startAngle, endAngle, segments, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw ring</p>
</dd>
<dt><a href="#DrawRingLines">DrawRingLines(center, innerRadius, outerRadius, startAngle, endAngle, segments, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw ring outline</p>
</dd>
<dt><a href="#DrawRectangle">DrawRectangle(posX, posY, width, height, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a color-filled rectangle</p>
</dd>
<dt><a href="#DrawRectangleV">DrawRectangleV(position, size, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a color-filled rectangle (Vector version)</p>
</dd>
<dt><a href="#DrawRectangleRec">DrawRectangleRec(rec, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a color-filled rectangle</p>
</dd>
<dt><a href="#DrawRectanglePro">DrawRectanglePro(rec, origin, rotation, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a color-filled rectangle with pro parameters</p>
</dd>
<dt><a href="#DrawRectangleGradientV">DrawRectangleGradientV(posX, posY, width, height, color1, color2)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a vertical-gradient-filled rectangle</p>
</dd>
<dt><a href="#DrawRectangleGradientH">DrawRectangleGradientH(posX, posY, width, height, color1, color2)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a horizontal-gradient-filled rectangle</p>
</dd>
<dt><a href="#DrawRectangleGradientEx">DrawRectangleGradientEx(rec, col1, col2, col3, col4)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a gradient-filled rectangle with custom vertex colors</p>
</dd>
<dt><a href="#DrawRectangleLines">DrawRectangleLines(posX, posY, width, height, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw rectangle outline</p>
</dd>
<dt><a href="#DrawRectangleLinesEx">DrawRectangleLinesEx(rec, lineThick, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw rectangle outline with extended parameters</p>
</dd>
<dt><a href="#DrawRectangleRounded">DrawRectangleRounded(rec, roundness, segments, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw rectangle with rounded edges</p>
</dd>
<dt><a href="#DrawRectangleRoundedLines">DrawRectangleRoundedLines(rec, roundness, segments, lineThick, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw rectangle with rounded edges outline</p>
</dd>
<dt><a href="#DrawTriangle">DrawTriangle(v1, v2, v3, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a color-filled triangle (vertex in counter-clockwise order!)</p>
</dd>
<dt><a href="#DrawTriangleLines">DrawTriangleLines(v1, v2, v3, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw triangle outline (vertex in counter-clockwise order!)</p>
</dd>
<dt><a href="#DrawTriangleFan">DrawTriangleFan(points, pointCount, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a triangle fan defined by points (first vertex is the center)</p>
</dd>
<dt><a href="#DrawTriangleStrip">DrawTriangleStrip(points, pointCount, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a triangle strip defined by points</p>
</dd>
<dt><a href="#DrawPoly">DrawPoly(center, sides, radius, rotation, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a regular polygon (Vector version)</p>
</dd>
<dt><a href="#DrawPolyLines">DrawPolyLines(center, sides, radius, rotation, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a polygon outline of n sides</p>
</dd>
<dt><a href="#DrawPolyLinesEx">DrawPolyLinesEx(center, sides, radius, rotation, lineThick, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a polygon outline of n sides with extended parameters</p>
</dd>
<dt><a href="#CheckCollisionRecs">CheckCollisionRecs(rec1, rec2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check collision between two rectangles</p>
</dd>
<dt><a href="#CheckCollisionCircles">CheckCollisionCircles(center1, radius1, center2, radius2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check collision between two circles</p>
</dd>
<dt><a href="#CheckCollisionCircleRec">CheckCollisionCircleRec(center, radius, rec)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check collision between circle and rectangle</p>
</dd>
<dt><a href="#CheckCollisionPointRec">CheckCollisionPointRec(point, rec)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if point is inside rectangle</p>
</dd>
<dt><a href="#CheckCollisionPointCircle">CheckCollisionPointCircle(point, center, radius)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if point is inside circle</p>
</dd>
<dt><a href="#CheckCollisionPointTriangle">CheckCollisionPointTriangle(point, p1, p2, p3)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if point is inside a triangle</p>
</dd>
<dt><a href="#CheckCollisionLines">CheckCollisionLines(startPos1, endPos1, startPos2, endPos2, collisionPoint)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check the collision between two lines defined by two points each, returns collision point by reference</p>
</dd>
<dt><a href="#CheckCollisionPointLine">CheckCollisionPointLine(point, p1, p2, threshold)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold]</p>
</dd>
<dt><a href="#GetCollisionRec">GetCollisionRec(rec1, rec2)</a> ⇒ <code><a href="#Rectangle">Rectangle</a></code></dt>
<dd><p>Get collision rectangle for two rectangles collision</p>
</dd>
<dt><a href="#LoadImage">LoadImage(fileName)</a> ⇒ <code>Image</code></dt>
<dd><p>Load image from file into CPU memory (RAM)</p>
</dd>
<dt><a href="#LoadImageRaw">LoadImageRaw(fileName, width, height, format, headerSize)</a> ⇒ <code>Image</code></dt>
<dd><p>Load image from RAW file data</p>
</dd>
<dt><a href="#LoadImageAnim">LoadImageAnim(fileName, frames)</a> ⇒ <code>Image</code></dt>
<dd><p>Load image sequence from file (frames appended to image.data)</p>
</dd>
<dt><a href="#LoadImageFromMemory">LoadImageFromMemory(fileType, fileData, dataSize)</a> ⇒ <code>Image</code></dt>
<dd><p>Load image from memory buffer, fileType refers to extension: i.e. &#39;.png&#39;</p>
</dd>
<dt><a href="#LoadImageFromTexture">LoadImageFromTexture(texture)</a> ⇒ <code>Image</code></dt>
<dd><p>Load image from GPU texture data</p>
</dd>
<dt><a href="#LoadImageFromScreen">LoadImageFromScreen()</a> ⇒ <code>Image</code></dt>
<dd><p>Load image from screen buffer and (screenshot)</p>
</dd>
<dt><a href="#UnloadImage">UnloadImage(image)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload image from CPU memory (RAM)</p>
</dd>
<dt><a href="#ExportImage">ExportImage(image, fileName)</a> ⇒ <code>boolean</code></dt>
<dd><p>Export image data to file, returns true on success</p>
</dd>
<dt><a href="#ExportImageAsCode">ExportImageAsCode(image, fileName)</a> ⇒ <code>boolean</code></dt>
<dd><p>Export image as code file defining an array of bytes, returns true on success</p>
</dd>
<dt><a href="#GenImageColor">GenImageColor(width, height, color)</a> ⇒ <code>Image</code></dt>
<dd><p>Generate image: plain color</p>
</dd>
<dt><a href="#GenImageGradientV">GenImageGradientV(width, height, top, bottom)</a> ⇒ <code>Image</code></dt>
<dd><p>Generate image: vertical gradient</p>
</dd>
<dt><a href="#GenImageGradientH">GenImageGradientH(width, height, left, right)</a> ⇒ <code>Image</code></dt>
<dd><p>Generate image: horizontal gradient</p>
</dd>
<dt><a href="#GenImageGradientRadial">GenImageGradientRadial(width, height, density, inner, outer)</a> ⇒ <code>Image</code></dt>
<dd><p>Generate image: radial gradient</p>
</dd>
<dt><a href="#GenImageChecked">GenImageChecked(width, height, checksX, checksY, col1, col2)</a> ⇒ <code>Image</code></dt>
<dd><p>Generate image: checked</p>
</dd>
<dt><a href="#GenImageWhiteNoise">GenImageWhiteNoise(width, height, factor)</a> ⇒ <code>Image</code></dt>
<dd><p>Generate image: white noise</p>
</dd>
<dt><a href="#GenImageCellular">GenImageCellular(width, height, tileSize)</a> ⇒ <code>Image</code></dt>
<dd><p>Generate image: cellular algorithm, bigger tileSize means bigger cells</p>
</dd>
<dt><a href="#ImageCopy">ImageCopy(image)</a> ⇒ <code>Image</code></dt>
<dd><p>Create an image duplicate (useful for transformations)</p>
</dd>
<dt><a href="#ImageFromImage">ImageFromImage(image, rec)</a> ⇒ <code>Image</code></dt>
<dd><p>Create an image from another image piece</p>
</dd>
<dt><a href="#ImageText">ImageText(text, fontSize, color)</a> ⇒ <code>Image</code></dt>
<dd><p>Create an image from text (default font)</p>
</dd>
<dt><a href="#ImageTextEx">ImageTextEx(font, text, fontSize, spacing, tint)</a> ⇒ <code>Image</code></dt>
<dd><p>Create an image from text (custom sprite font)</p>
</dd>
<dt><a href="#LoadImageColors">LoadImageColors(image)</a> ⇒ <code>number</code></dt>
<dd><p>Load color data from image as a Color array (RGBA - 32bit)</p>
</dd>
<dt><a href="#LoadImagePalette">LoadImagePalette(image, maxPaletteSize, colorCount)</a> ⇒ <code>number</code></dt>
<dd><p>Load colors palette from image as a Color array (RGBA - 32bit)</p>
</dd>
<dt><a href="#UnloadImageColors">UnloadImageColors(colors)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload color data loaded with LoadImageColors()</p>
</dd>
<dt><a href="#UnloadImagePalette">UnloadImagePalette(colors)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload colors palette loaded with LoadImagePalette()</p>
</dd>
<dt><a href="#GetImageAlphaBorder">GetImageAlphaBorder(image, threshold)</a> ⇒ <code><a href="#Rectangle">Rectangle</a></code></dt>
<dd><p>Get image alpha border rectangle</p>
</dd>
<dt><a href="#GetImageColor">GetImageColor(image, x, y)</a> ⇒ <code><a href="#Color">Color</a></code></dt>
<dd><p>Get image pixel color at (x, y) position</p>
</dd>
<dt><a href="#LoadTexture">LoadTexture(fileName)</a> ⇒ <code>Texture2D</code></dt>
<dd><p>Load texture from file into GPU memory (VRAM)</p>
</dd>
<dt><a href="#LoadTextureFromImage">LoadTextureFromImage(image)</a> ⇒ <code>Texture2D</code></dt>
<dd><p>Load texture from image data</p>
</dd>
<dt><a href="#LoadTextureCubemap">LoadTextureCubemap(image, layout)</a> ⇒ <code>TextureCubemap</code></dt>
<dd><p>Load cubemap from image, multiple image cubemap layouts supported</p>
</dd>
<dt><a href="#LoadRenderTexture">LoadRenderTexture(width, height)</a> ⇒ <code>RenderTexture2D</code></dt>
<dd><p>Load texture for rendering (framebuffer)</p>
</dd>
<dt><a href="#UnloadTexture">UnloadTexture(texture)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload texture from GPU memory (VRAM)</p>
</dd>
<dt><a href="#UnloadRenderTexture">UnloadRenderTexture(target)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload render texture from GPU memory (VRAM)</p>
</dd>
<dt><a href="#UpdateTexture">UpdateTexture(texture, pixels)</a> ⇒ <code>undefined</code></dt>
<dd><p>Update GPU texture with new data</p>
</dd>
<dt><a href="#UpdateTextureRec">UpdateTextureRec(texture, rec, pixels)</a> ⇒ <code>undefined</code></dt>
<dd><p>Update GPU texture rectangle with new data</p>
</dd>
<dt><a href="#SetTextureFilter">SetTextureFilter(texture, filter)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set texture scaling filter mode</p>
</dd>
<dt><a href="#SetTextureWrap">SetTextureWrap(texture, wrap)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set texture wrapping mode</p>
</dd>
<dt><a href="#DrawTexture">DrawTexture(texture, posX, posY, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a Texture2D</p>
</dd>
<dt><a href="#DrawTextureV">DrawTextureV(texture, position, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a Texture2D with position defined as Vector2</p>
</dd>
<dt><a href="#DrawTextureEx">DrawTextureEx(texture, position, rotation, scale, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a Texture2D with extended parameters</p>
</dd>
<dt><a href="#DrawTextureRec">DrawTextureRec(texture, source, position, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a part of a texture defined by a rectangle</p>
</dd>
<dt><a href="#DrawTextureQuad">DrawTextureQuad(texture, tiling, offset, quad, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw texture quad with tiling and offset parameters</p>
</dd>
<dt><a href="#DrawTextureTiled">DrawTextureTiled(texture, source, dest, origin, rotation, scale, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw part of a texture (defined by a rectangle) with rotation and scale tiled into dest.</p>
</dd>
<dt><a href="#DrawTexturePro">DrawTexturePro(texture, source, dest, origin, rotation, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a part of a texture defined by a rectangle with &#39;pro&#39; parameters</p>
</dd>
<dt><a href="#DrawTextureNPatch">DrawTextureNPatch(texture, nPatchInfo, dest, origin, rotation, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draws a texture (or part of it) that stretches or shrinks nicely</p>
</dd>
<dt><a href="#DrawTexturePoly">DrawTexturePoly(texture, center, points, texcoords, pointCount, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a textured polygon</p>
</dd>
<dt><a href="#Fade">Fade(color, alpha)</a> ⇒ <code><a href="#Color">Color</a></code></dt>
<dd><p>Get color with alpha applied, alpha goes from 0.0f to 1.0f</p>
</dd>
<dt><a href="#ColorToInt">ColorToInt(color)</a> ⇒ <code>number</code></dt>
<dd><p>Get hexadecimal value for a Color</p>
</dd>
<dt><a href="#ColorNormalize">ColorNormalize(color)</a> ⇒ <code><a href="#Vector4">Vector4</a></code></dt>
<dd><p>Get Color normalized as float [0..1]</p>
</dd>
<dt><a href="#ColorFromNormalized">ColorFromNormalized(normalized)</a> ⇒ <code><a href="#Color">Color</a></code></dt>
<dd><p>Get Color from normalized values [0..1]</p>
</dd>
<dt><a href="#ColorToHSV">ColorToHSV(color)</a> ⇒ <code><a href="#Vector3">Vector3</a></code></dt>
<dd><p>Get HSV values for a Color, hue [0..360], saturation/value [0..1]</p>
</dd>
<dt><a href="#ColorFromHSV">ColorFromHSV(hue, saturation, value)</a> ⇒ <code><a href="#Color">Color</a></code></dt>
<dd><p>Get a Color from HSV values, hue [0..360], saturation/value [0..1]</p>
</dd>
<dt><a href="#ColorAlpha">ColorAlpha(color, alpha)</a> ⇒ <code><a href="#Color">Color</a></code></dt>
<dd><p>Get color with alpha applied, alpha goes from 0.0f to 1.0f</p>
</dd>
<dt><a href="#ColorAlphaBlend">ColorAlphaBlend(dst, src, tint)</a> ⇒ <code><a href="#Color">Color</a></code></dt>
<dd><p>Get src alpha-blended into dst color with tint</p>
</dd>
<dt><a href="#GetColor">GetColor(hexValue)</a> ⇒ <code><a href="#Color">Color</a></code></dt>
<dd><p>Get Color structure from hexadecimal value</p>
</dd>
<dt><a href="#GetPixelColor">GetPixelColor(srcPtr, format)</a> ⇒ <code><a href="#Color">Color</a></code></dt>
<dd><p>Get Color from a source pixel pointer of certain format</p>
</dd>
<dt><a href="#SetPixelColor">SetPixelColor(dstPtr, color, format)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set color formatted into destination pixel pointer</p>
</dd>
<dt><a href="#GetPixelDataSize">GetPixelDataSize(width, height, format)</a> ⇒ <code>number</code></dt>
<dd><p>Get pixel data size in bytes for certain format</p>
</dd>
<dt><a href="#GetFontDefault">GetFontDefault()</a> ⇒ <code>Font</code></dt>
<dd><p>Get the default Font</p>
</dd>
<dt><a href="#LoadFont">LoadFont(fileName)</a> ⇒ <code>Font</code></dt>
<dd><p>Load font from file into GPU memory (VRAM)</p>
</dd>
<dt><a href="#LoadFontEx">LoadFontEx(fileName, fontSize, fontChars, glyphCount)</a> ⇒ <code>Font</code></dt>
<dd><p>Load font from file with extended parameters, use NULL for fontChars and 0 for glyphCount to load the default character set</p>
</dd>
<dt><a href="#LoadFontFromImage">LoadFontFromImage(image, key, firstChar)</a> ⇒ <code>Font</code></dt>
<dd><p>Load font from Image (XNA style)</p>
</dd>
<dt><a href="#LoadFontFromMemory">LoadFontFromMemory(fileType, fileData, dataSize, fontSize, fontChars, glyphCount)</a> ⇒ <code>Font</code></dt>
<dd><p>Load font from memory buffer, fileType refers to extension: i.e. &#39;.ttf&#39;</p>
</dd>
<dt><a href="#LoadFontData">LoadFontData(fileData, dataSize, fontSize, fontChars, glyphCount, type)</a> ⇒ <code>number</code></dt>
<dd><p>Load font data for further use</p>
</dd>
<dt><a href="#GenImageFontAtlas">GenImageFontAtlas(chars, recs, glyphCount, fontSize, padding, packMethod)</a> ⇒ <code>Image</code></dt>
<dd><p>Generate image font atlas using chars info</p>
</dd>
<dt><a href="#UnloadFontData">UnloadFontData(chars, glyphCount)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload font chars info data (RAM)</p>
</dd>
<dt><a href="#UnloadFont">UnloadFont(font)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload font from GPU memory (VRAM)</p>
</dd>
<dt><a href="#DrawFPS">DrawFPS(posX, posY)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw current FPS</p>
</dd>
<dt><a href="#DrawText">DrawText(text, posX, posY, fontSize, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw text (using default font)</p>
</dd>
<dt><a href="#DrawTextEx">DrawTextEx(font, text, position, fontSize, spacing, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw text using font and additional parameters</p>
</dd>
<dt><a href="#DrawTextPro">DrawTextPro(font, text, position, origin, rotation, fontSize, spacing, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw text using Font and pro parameters (rotation)</p>
</dd>
<dt><a href="#DrawTextCodepoint">DrawTextCodepoint(font, codepoint, position, fontSize, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw one character (codepoint)</p>
</dd>
<dt><a href="#MeasureText">MeasureText(text, fontSize)</a> ⇒ <code>number</code></dt>
<dd><p>Measure string width for default font</p>
</dd>
<dt><a href="#MeasureTextEx">MeasureTextEx(font, text, fontSize, spacing)</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Measure string size for Font</p>
</dd>
<dt><a href="#GetGlyphIndex">GetGlyphIndex(font, codepoint)</a> ⇒ <code>number</code></dt>
<dd><p>Get glyph index position in font for a codepoint (unicode character), fallback to &#39;?&#39; if not found</p>
</dd>
<dt><a href="#GetGlyphInfo">GetGlyphInfo(font, codepoint)</a> ⇒ <code>GlyphInfo</code></dt>
<dd><p>Get glyph font info data for a codepoint (unicode character), fallback to &#39;?&#39; if not found</p>
</dd>
<dt><a href="#GetGlyphAtlasRec">GetGlyphAtlasRec(font, codepoint)</a> ⇒ <code><a href="#Rectangle">Rectangle</a></code></dt>
<dd><p>Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to &#39;?&#39; if not found</p>
</dd>
<dt><a href="#LoadCodepoints">LoadCodepoints(text, count)</a> ⇒ <code>number</code></dt>
<dd><p>Load all codepoints from a UTF-8 text string, codepoints count returned by parameter</p>
</dd>
<dt><a href="#UnloadCodepoints">UnloadCodepoints(codepoints)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload codepoints data from memory</p>
</dd>
<dt><a href="#GetCodepointCount">GetCodepointCount(text)</a> ⇒ <code>number</code></dt>
<dd><p>Get total number of codepoints in a UTF-8 encoded string</p>
</dd>
<dt><a href="#GetCodepoint">GetCodepoint(text, bytesProcessed)</a> ⇒ <code>number</code></dt>
<dd><p>Get next codepoint in a UTF-8 encoded string, 0x3f(&#39;?&#39;) is returned on failure</p>
</dd>
<dt><a href="#CodepointToUTF8">CodepointToUTF8(codepoint, byteSize)</a> ⇒ <code>string</code></dt>
<dd><p>Encode one codepoint into UTF-8 byte array (array length returned as parameter)</p>
</dd>
<dt><a href="#TextCodepointsToUTF8">TextCodepointsToUTF8(codepoints, length)</a> ⇒ <code>string</code></dt>
<dd><p>Encode text as codepoints array into UTF-8 text string (WARNING: memory must be freed!)</p>
</dd>
<dt><a href="#TextCopy">TextCopy(dst, src)</a> ⇒ <code>number</code></dt>
<dd><p>Copy one string to another, returns bytes copied</p>
</dd>
<dt><a href="#TextIsEqual">TextIsEqual(text1, text2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if two text string are equal</p>
</dd>
<dt><a href="#TextLength">TextLength(text)</a> ⇒ <code>number</code></dt>
<dd><p>Get text length, checks for &#39;\0&#39; ending</p>
</dd>
<dt><a href="#TextSubtext">TextSubtext(text, position, length)</a> ⇒ <code>string</code></dt>
<dd><p>Get a piece of a text string</p>
</dd>
<dt><a href="#TextReplace">TextReplace(text, replace, by)</a> ⇒ <code>string</code></dt>
<dd><p>Replace text string (WARNING: memory must be freed!)</p>
</dd>
<dt><a href="#TextInsert">TextInsert(text, insert, position)</a> ⇒ <code>string</code></dt>
<dd><p>Insert text in a position (WARNING: memory must be freed!)</p>
</dd>
<dt><a href="#TextJoin">TextJoin(textList, count, delimiter)</a> ⇒ <code>string</code></dt>
<dd><p>Join text strings with delimiter</p>
</dd>
<dt><a href="#TextSplit">TextSplit(text, delimiter, count)</a> ⇒ <code>number</code></dt>
<dd><p>Split text into multiple strings</p>
</dd>
<dt><a href="#TextAppend">TextAppend(text, append, position)</a> ⇒ <code>undefined</code></dt>
<dd><p>Append text at specific position and move cursor!</p>
</dd>
<dt><a href="#TextFindIndex">TextFindIndex(text, find)</a> ⇒ <code>number</code></dt>
<dd><p>Find first text occurrence within a string</p>
</dd>
<dt><a href="#TextToUpper">TextToUpper(text)</a> ⇒ <code>string</code></dt>
<dd><p>Get upper case version of provided string</p>
</dd>
<dt><a href="#TextToLower">TextToLower(text)</a> ⇒ <code>string</code></dt>
<dd><p>Get lower case version of provided string</p>
</dd>
<dt><a href="#TextToPascal">TextToPascal(text)</a> ⇒ <code>string</code></dt>
<dd><p>Get Pascal case notation version of provided string</p>
</dd>
<dt><a href="#TextToInteger">TextToInteger(text)</a> ⇒ <code>number</code></dt>
<dd><p>Get integer value from text (negative values not supported)</p>
</dd>
<dt><a href="#DrawLine3D">DrawLine3D(startPos, endPos, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a line in 3D world space</p>
</dd>
<dt><a href="#DrawPoint3D">DrawPoint3D(position, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a point in 3D space, actually a small line</p>
</dd>
<dt><a href="#DrawCircle3D">DrawCircle3D(center, radius, rotationAxis, rotationAngle, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a circle in 3D world space</p>
</dd>
<dt><a href="#DrawTriangle3D">DrawTriangle3D(v1, v2, v3, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a color-filled triangle (vertex in counter-clockwise order!)</p>
</dd>
<dt><a href="#DrawTriangleStrip3D">DrawTriangleStrip3D(points, pointCount, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a triangle strip defined by points</p>
</dd>
<dt><a href="#DrawCube">DrawCube(position, width, height, length, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw cube</p>
</dd>
<dt><a href="#DrawCubeV">DrawCubeV(position, size, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw cube (Vector version)</p>
</dd>
<dt><a href="#DrawCubeWires">DrawCubeWires(position, width, height, length, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw cube wires</p>
</dd>
<dt><a href="#DrawCubeWiresV">DrawCubeWiresV(position, size, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw cube wires (Vector version)</p>
</dd>
<dt><a href="#DrawCubeTexture">DrawCubeTexture(texture, position, width, height, length, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw cube textured</p>
</dd>
<dt><a href="#DrawCubeTextureRec">DrawCubeTextureRec(texture, source, position, width, height, length, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw cube with a region of a texture</p>
</dd>
<dt><a href="#DrawSphere">DrawSphere(centerPos, radius, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw sphere</p>
</dd>
<dt><a href="#DrawSphereEx">DrawSphereEx(centerPos, radius, rings, slices, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw sphere with extended parameters</p>
</dd>
<dt><a href="#DrawSphereWires">DrawSphereWires(centerPos, radius, rings, slices, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw sphere wires</p>
</dd>
<dt><a href="#DrawCylinder">DrawCylinder(position, radiusTop, radiusBottom, height, slices, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a cylinder/cone</p>
</dd>
<dt><a href="#DrawCylinderEx">DrawCylinderEx(startPos, endPos, startRadius, endRadius, sides, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a cylinder with base at startPos and top at endPos</p>
</dd>
<dt><a href="#DrawCylinderWires">DrawCylinderWires(position, radiusTop, radiusBottom, height, slices, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a cylinder/cone wires</p>
</dd>
<dt><a href="#DrawCylinderWiresEx">DrawCylinderWiresEx(startPos, endPos, startRadius, endRadius, sides, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a cylinder wires with base at startPos and top at endPos</p>
</dd>
<dt><a href="#DrawPlane">DrawPlane(centerPos, size, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a plane XZ</p>
</dd>
<dt><a href="#DrawRay">DrawRay(ray, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a ray line</p>
</dd>
<dt><a href="#DrawGrid">DrawGrid(slices, spacing)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a grid (centered at (0, 0, 0))</p>
</dd>
<dt><a href="#LoadModel">LoadModel(fileName)</a> ⇒ <code>Model</code></dt>
<dd><p>Load model from files (meshes and materials)</p>
</dd>
<dt><a href="#LoadModelFromMesh">LoadModelFromMesh(mesh)</a> ⇒ <code>Model</code></dt>
<dd><p>Load model from generated mesh (default material)</p>
</dd>
<dt><a href="#UnloadModel">UnloadModel(model)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload model (including meshes) from memory (RAM and/or VRAM)</p>
</dd>
<dt><a href="#UnloadModelKeepMeshes">UnloadModelKeepMeshes(model)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload model (but not meshes) from memory (RAM and/or VRAM)</p>
</dd>
<dt><a href="#GetModelBoundingBox">GetModelBoundingBox(model)</a> ⇒ <code>BoundingBox</code></dt>
<dd><p>Compute model bounding box limits (considers all meshes)</p>
</dd>
<dt><a href="#DrawModel">DrawModel(model, position, scale, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a model (with texture if set)</p>
</dd>
<dt><a href="#DrawModelEx">DrawModelEx(model, position, rotationAxis, rotationAngle, scale, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a model with extended parameters</p>
</dd>
<dt><a href="#DrawModelWires">DrawModelWires(model, position, scale, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a model wires (with texture if set)</p>
</dd>
<dt><a href="#DrawModelWiresEx">DrawModelWiresEx(model, position, rotationAxis, rotationAngle, scale, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a model wires (with texture if set) with extended parameters</p>
</dd>
<dt><a href="#DrawBoundingBox">DrawBoundingBox(box, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw bounding box (wires)</p>
</dd>
<dt><a href="#DrawBillboard">DrawBillboard(camera, texture, position, size, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a billboard texture</p>
</dd>
<dt><a href="#DrawBillboardRec">DrawBillboardRec(camera, texture, source, position, size, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a billboard texture defined by source</p>
</dd>
<dt><a href="#DrawBillboardPro">DrawBillboardPro(camera, texture, source, position, up, size, origin, rotation, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a billboard texture defined by source and rotation</p>
</dd>
<dt><a href="#UpdateMeshBuffer">UpdateMeshBuffer(mesh, index, data, dataSize, offset)</a> ⇒ <code>undefined</code></dt>
<dd><p>Update mesh vertex data in GPU for a specific buffer index</p>
</dd>
<dt><a href="#UnloadMesh">UnloadMesh(mesh)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload mesh data from CPU and GPU</p>
</dd>
<dt><a href="#ExportMesh">ExportMesh(mesh, fileName)</a> ⇒ <code>boolean</code></dt>
<dd><p>Export mesh data to file, returns true on success</p>
</dd>
<dt><a href="#GetMeshBoundingBox">GetMeshBoundingBox(mesh)</a> ⇒ <code>BoundingBox</code></dt>
<dd><p>Compute mesh bounding box limits</p>
</dd>
<dt><a href="#GenMeshPoly">GenMeshPoly(sides, radius)</a> ⇒ <code>Mesh</code></dt>
<dd><p>Generate polygonal mesh</p>
</dd>
<dt><a href="#GenMeshPlane">GenMeshPlane(width, length, resX, resZ)</a> ⇒ <code>Mesh</code></dt>
<dd><p>Generate plane mesh (with subdivisions)</p>
</dd>
<dt><a href="#GenMeshCube">GenMeshCube(width, height, length)</a> ⇒ <code>Mesh</code></dt>
<dd><p>Generate cuboid mesh</p>
</dd>
<dt><a href="#GenMeshSphere">GenMeshSphere(radius, rings, slices)</a> ⇒ <code>Mesh</code></dt>
<dd><p>Generate sphere mesh (standard sphere)</p>
</dd>
<dt><a href="#GenMeshHemiSphere">GenMeshHemiSphere(radius, rings, slices)</a> ⇒ <code>Mesh</code></dt>
<dd><p>Generate half-sphere mesh (no bottom cap)</p>
</dd>
<dt><a href="#GenMeshCylinder">GenMeshCylinder(radius, height, slices)</a> ⇒ <code>Mesh</code></dt>
<dd><p>Generate cylinder mesh</p>
</dd>
<dt><a href="#GenMeshCone">GenMeshCone(radius, height, slices)</a> ⇒ <code>Mesh</code></dt>
<dd><p>Generate cone/pyramid mesh</p>
</dd>
<dt><a href="#GenMeshTorus">GenMeshTorus(radius, size, radSeg, sides)</a> ⇒ <code>Mesh</code></dt>
<dd><p>Generate torus mesh</p>
</dd>
<dt><a href="#GenMeshKnot">GenMeshKnot(radius, size, radSeg, sides)</a> ⇒ <code>Mesh</code></dt>
<dd><p>Generate trefoil knot mesh</p>
</dd>
<dt><a href="#GenMeshHeightmap">GenMeshHeightmap(heightmap, size)</a> ⇒ <code>Mesh</code></dt>
<dd><p>Generate heightmap mesh from image data</p>
</dd>
<dt><a href="#GenMeshCubicmap">GenMeshCubicmap(cubicmap, cubeSize)</a> ⇒ <code>Mesh</code></dt>
<dd><p>Generate cubes-based map mesh from image data</p>
</dd>
<dt><a href="#LoadModelAnimations">LoadModelAnimations(fileName, animCount)</a> ⇒ <code>number</code></dt>
<dd><p>Load model animations from file</p>
</dd>
<dt><a href="#UpdateModelAnimation">UpdateModelAnimation(model, anim, frame)</a> ⇒ <code>undefined</code></dt>
<dd><p>Update model animation pose</p>
</dd>
<dt><a href="#UnloadModelAnimation">UnloadModelAnimation(anim)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload animation data</p>
</dd>
<dt><a href="#UnloadModelAnimations">UnloadModelAnimations(animations, count)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload animation array data</p>
</dd>
<dt><a href="#IsModelAnimationValid">IsModelAnimationValid(model, anim)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check model animation skeleton match</p>
</dd>
<dt><a href="#CheckCollisionSpheres">CheckCollisionSpheres(center1, radius1, center2, radius2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check collision between two spheres</p>
</dd>
<dt><a href="#CheckCollisionBoxes">CheckCollisionBoxes(box1, box2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check collision between two bounding boxes</p>
</dd>
<dt><a href="#CheckCollisionBoxSphere">CheckCollisionBoxSphere(box, center, radius)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check collision between box and sphere</p>
</dd>
<dt><a href="#GetRayCollisionSphere">GetRayCollisionSphere(ray, center, radius)</a> ⇒ <code>RayCollision</code></dt>
<dd><p>Get collision info between ray and sphere</p>
</dd>
<dt><a href="#GetRayCollisionBox">GetRayCollisionBox(ray, box)</a> ⇒ <code>RayCollision</code></dt>
<dd><p>Get collision info between ray and box</p>
</dd>
<dt><a href="#GetRayCollisionModel">GetRayCollisionModel(ray, model)</a> ⇒ <code>RayCollision</code></dt>
<dd><p>Get collision info between ray and model</p>
</dd>
<dt><a href="#GetRayCollisionMesh">GetRayCollisionMesh(ray, mesh, transform)</a> ⇒ <code>RayCollision</code></dt>
<dd><p>Get collision info between ray and mesh</p>
</dd>
<dt><a href="#GetRayCollisionTriangle">GetRayCollisionTriangle(ray, p1, p2, p3)</a> ⇒ <code>RayCollision</code></dt>
<dd><p>Get collision info between ray and triangle</p>
</dd>
<dt><a href="#GetRayCollisionQuad">GetRayCollisionQuad(ray, p1, p2, p3, p4)</a> ⇒ <code>RayCollision</code></dt>
<dd><p>Get collision info between ray and quad</p>
</dd>
<dt><a href="#InitAudioDevice">InitAudioDevice()</a> ⇒ <code>undefined</code></dt>
<dd><p>Initialize audio device and context</p>
</dd>
<dt><a href="#CloseAudioDevice">CloseAudioDevice()</a> ⇒ <code>undefined</code></dt>
<dd><p>Close the audio device and context</p>
</dd>
<dt><a href="#IsAudioDeviceReady">IsAudioDeviceReady()</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if audio device has been initialized successfully</p>
</dd>
<dt><a href="#SetMasterVolume">SetMasterVolume(volume)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set master volume (listener)</p>
</dd>
<dt><a href="#LoadWave">LoadWave(fileName)</a> ⇒ <code>Wave</code></dt>
<dd><p>Load wave data from file</p>
</dd>
<dt><a href="#LoadWaveFromMemory">LoadWaveFromMemory(fileType, fileData, dataSize)</a> ⇒ <code>Wave</code></dt>
<dd><p>Load wave from memory buffer, fileType refers to extension: i.e. &#39;.wav&#39;</p>
</dd>
<dt><a href="#LoadSound">LoadSound(fileName)</a> ⇒ <code>Sound</code></dt>
<dd><p>Load sound from file</p>
</dd>
<dt><a href="#LoadSoundFromWave">LoadSoundFromWave(wave)</a> ⇒ <code>Sound</code></dt>
<dd><p>Load sound from wave data</p>
</dd>
<dt><a href="#UpdateSound">UpdateSound(sound, data, sampleCount)</a> ⇒ <code>undefined</code></dt>
<dd><p>Update sound buffer with new data</p>
</dd>
<dt><a href="#UnloadWave">UnloadWave(wave)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload wave data</p>
</dd>
<dt><a href="#UnloadSound">UnloadSound(sound)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload sound</p>
</dd>
<dt><a href="#ExportWave">ExportWave(wave, fileName)</a> ⇒ <code>boolean</code></dt>
<dd><p>Export wave data to file, returns true on success</p>
</dd>
<dt><a href="#ExportWaveAsCode">ExportWaveAsCode(wave, fileName)</a> ⇒ <code>boolean</code></dt>
<dd><p>Export wave sample data to code (.h), returns true on success</p>
</dd>
<dt><a href="#PlaySound">PlaySound(sound)</a> ⇒ <code>undefined</code></dt>
<dd><p>Play a sound</p>
</dd>
<dt><a href="#StopSound">StopSound(sound)</a> ⇒ <code>undefined</code></dt>
<dd><p>Stop playing a sound</p>
</dd>
<dt><a href="#PauseSound">PauseSound(sound)</a> ⇒ <code>undefined</code></dt>
<dd><p>Pause a sound</p>
</dd>
<dt><a href="#ResumeSound">ResumeSound(sound)</a> ⇒ <code>undefined</code></dt>
<dd><p>Resume a paused sound</p>
</dd>
<dt><a href="#PlaySoundMulti">PlaySoundMulti(sound)</a> ⇒ <code>undefined</code></dt>
<dd><p>Play a sound (using multichannel buffer pool)</p>
</dd>
<dt><a href="#StopSoundMulti">StopSoundMulti()</a> ⇒ <code>undefined</code></dt>
<dd><p>Stop any sound playing (using multichannel buffer pool)</p>
</dd>
<dt><a href="#GetSoundsPlaying">GetSoundsPlaying()</a> ⇒ <code>number</code></dt>
<dd><p>Get number of sounds playing in the multichannel</p>
</dd>
<dt><a href="#IsSoundPlaying">IsSoundPlaying(sound)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if a sound is currently playing</p>
</dd>
<dt><a href="#SetSoundVolume">SetSoundVolume(sound, volume)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set volume for a sound (1.0 is max level)</p>
</dd>
<dt><a href="#SetSoundPitch">SetSoundPitch(sound, pitch)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set pitch for a sound (1.0 is base level)</p>
</dd>
<dt><a href="#WaveCopy">WaveCopy(wave)</a> ⇒ <code>Wave</code></dt>
<dd><p>Copy a wave to a new wave</p>
</dd>
<dt><a href="#LoadWaveSamples">LoadWaveSamples(wave)</a> ⇒ <code>number</code></dt>
<dd><p>Load samples data from wave as a floats array</p>
</dd>
<dt><a href="#UnloadWaveSamples">UnloadWaveSamples(samples)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload samples data loaded with LoadWaveSamples()</p>
</dd>
<dt><a href="#LoadMusicStream">LoadMusicStream(fileName)</a> ⇒ <code>Music</code></dt>
<dd><p>Load music stream from file</p>
</dd>
<dt><a href="#LoadMusicStreamFromMemory">LoadMusicStreamFromMemory(fileType, data, dataSize)</a> ⇒ <code>Music</code></dt>
<dd><p>Load music stream from data</p>
</dd>
<dt><a href="#UnloadMusicStream">UnloadMusicStream(music)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload music stream</p>
</dd>
<dt><a href="#PlayMusicStream">PlayMusicStream(music)</a> ⇒ <code>undefined</code></dt>
<dd><p>Start music playing</p>
</dd>
<dt><a href="#IsMusicStreamPlaying">IsMusicStreamPlaying(music)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if music is playing</p>
</dd>
<dt><a href="#UpdateMusicStream">UpdateMusicStream(music)</a> ⇒ <code>undefined</code></dt>
<dd><p>Updates buffers for music streaming</p>
</dd>
<dt><a href="#StopMusicStream">StopMusicStream(music)</a> ⇒ <code>undefined</code></dt>
<dd><p>Stop music playing</p>
</dd>
<dt><a href="#PauseMusicStream">PauseMusicStream(music)</a> ⇒ <code>undefined</code></dt>
<dd><p>Pause music playing</p>
</dd>
<dt><a href="#ResumeMusicStream">ResumeMusicStream(music)</a> ⇒ <code>undefined</code></dt>
<dd><p>Resume playing paused music</p>
</dd>
<dt><a href="#SeekMusicStream">SeekMusicStream(music, position)</a> ⇒ <code>undefined</code></dt>
<dd><p>Seek music to a position (in seconds)</p>
</dd>
<dt><a href="#SetMusicVolume">SetMusicVolume(music, volume)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set volume for music (1.0 is max level)</p>
</dd>
<dt><a href="#SetMusicPitch">SetMusicPitch(music, pitch)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set pitch for a music (1.0 is base level)</p>
</dd>
<dt><a href="#GetMusicTimeLength">GetMusicTimeLength(music)</a> ⇒ <code>number</code></dt>
<dd><p>Get music time length (in seconds)</p>
</dd>
<dt><a href="#GetMusicTimePlayed">GetMusicTimePlayed(music)</a> ⇒ <code>number</code></dt>
<dd><p>Get current music time played (in seconds)</p>
</dd>
<dt><a href="#LoadAudioStream">LoadAudioStream(sampleRate, sampleSize, channels)</a> ⇒ <code>AudioStream</code></dt>
<dd><p>Load audio stream (to stream raw audio pcm data)</p>
</dd>
<dt><a href="#UnloadAudioStream">UnloadAudioStream(stream)</a> ⇒ <code>undefined</code></dt>
<dd><p>Unload audio stream and free memory</p>
</dd>
<dt><a href="#UpdateAudioStream">UpdateAudioStream(stream, data, frameCount)</a> ⇒ <code>undefined</code></dt>
<dd><p>Update audio stream buffers with data</p>
</dd>
<dt><a href="#IsAudioStreamProcessed">IsAudioStreamProcessed(stream)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if any audio stream buffers requires refill</p>
</dd>
<dt><a href="#PlayAudioStream">PlayAudioStream(stream)</a> ⇒ <code>undefined</code></dt>
<dd><p>Play audio stream</p>
</dd>
<dt><a href="#PauseAudioStream">PauseAudioStream(stream)</a> ⇒ <code>undefined</code></dt>
<dd><p>Pause audio stream</p>
</dd>
<dt><a href="#ResumeAudioStream">ResumeAudioStream(stream)</a> ⇒ <code>undefined</code></dt>
<dd><p>Resume audio stream</p>
</dd>
<dt><a href="#IsAudioStreamPlaying">IsAudioStreamPlaying(stream)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if audio stream is playing</p>
</dd>
<dt><a href="#StopAudioStream">StopAudioStream(stream)</a> ⇒ <code>undefined</code></dt>
<dd><p>Stop audio stream</p>
</dd>
<dt><a href="#SetAudioStreamVolume">SetAudioStreamVolume(stream, volume)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set volume for audio stream (1.0 is max level)</p>
</dd>
<dt><a href="#SetAudioStreamPitch">SetAudioStreamPitch(stream, pitch)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set pitch for audio stream (1.0 is base level)</p>
</dd>
<dt><a href="#SetAudioStreamBufferSizeDefault">SetAudioStreamBufferSizeDefault(size)</a> ⇒ <code>undefined</code></dt>
<dd><p>Default size for new audio streams</p>
</dd>
<dt><a href="#EaseLinearNone">EaseLinearNone(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseLinearNone.</p>
</dd>
<dt><a href="#EaseLinearIn">EaseLinearIn(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseLinearIn.</p>
</dd>
<dt><a href="#EaseLinearOut">EaseLinearOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseLinearOut.</p>
</dd>
<dt><a href="#EaseLinearInOut">EaseLinearInOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseLinearInOut.</p>
</dd>
<dt><a href="#EaseSineIn">EaseSineIn(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseSineIn.</p>
</dd>
<dt><a href="#EaseSineOut">EaseSineOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseSineOut.</p>
</dd>
<dt><a href="#EaseSineInOut">EaseSineInOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseSineInOut.</p>
</dd>
<dt><a href="#EaseCircIn">EaseCircIn(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseCircIn.</p>
</dd>
<dt><a href="#EaseCircOut">EaseCircOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseCircOut.</p>
</dd>
<dt><a href="#EaseCircInOut">EaseCircInOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseCircInOut.</p>
</dd>
<dt><a href="#EaseCubicIn">EaseCubicIn(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseCubicIn.</p>
</dd>
<dt><a href="#EaseCubicOut">EaseCubicOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseCubicOut.</p>
</dd>
<dt><a href="#EaseCubicInOut">EaseCubicInOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseCubicInOut.</p>
</dd>
<dt><a href="#EaseQuadIn">EaseQuadIn(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseQuadIn.</p>
</dd>
<dt><a href="#EaseQuadOut">EaseQuadOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseQuadOut.</p>
</dd>
<dt><a href="#EaseQuadInOut">EaseQuadInOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseQuadInOut.</p>
</dd>
<dt><a href="#EaseExpoIn">EaseExpoIn(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseExpoIn.</p>
</dd>
<dt><a href="#EaseExpoOut">EaseExpoOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseExpoOut.</p>
</dd>
<dt><a href="#EaseExpoInOut">EaseExpoInOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseExpoInOut.</p>
</dd>
<dt><a href="#EaseBackIn">EaseBackIn(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseBackIn.</p>
</dd>
<dt><a href="#EaseBackOut">EaseBackOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseBackOut.</p>
</dd>
<dt><a href="#EaseBackInOut">EaseBackInOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseBackInOut.</p>
</dd>
<dt><a href="#EaseBounceOut">EaseBounceOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseBounceOut.</p>
</dd>
<dt><a href="#EaseBounceIn">EaseBounceIn(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseBounceIn.</p>
</dd>
<dt><a href="#EaseBounceInOut">EaseBounceInOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseBounceInOut.</p>
</dd>
<dt><a href="#EaseElasticIn">EaseElasticIn(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseElasticIn.</p>
</dd>
<dt><a href="#EaseElasticOut">EaseElasticOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseElasticOut.</p>
</dd>
<dt><a href="#EaseElasticInOut">EaseElasticInOut(t, b, c, d)</a> ⇒ <code>number</code></dt>
<dd><p>Easing: EaseElasticInOut.</p>
</dd>
<dt><a href="#UpdateCamera">UpdateCamera(camera)</a> ⇒ <code>undefined</code></dt>
<dd><p>Update camera position for selected mode</p>
</dd>
<dt><a href="#ImageFormat">ImageFormat(image, newFormat)</a> ⇒ <code>undefined</code></dt>
<dd><p>Convert image data to desired format</p>
</dd>
<dt><a href="#ImageToPOT">ImageToPOT(image, fill)</a> ⇒ <code>undefined</code></dt>
<dd><p>Convert image to POT (power-of-two)</p>
</dd>
<dt><a href="#ImageCrop">ImageCrop(image, crop)</a> ⇒ <code>undefined</code></dt>
<dd><p>Crop an image to a defined rectangle</p>
</dd>
<dt><a href="#ImageAlphaCrop">ImageAlphaCrop(image, threshold)</a> ⇒ <code>undefined</code></dt>
<dd><p>Crop image depending on alpha value</p>
</dd>
<dt><a href="#ImageAlphaClear">ImageAlphaClear(image, color, threshold)</a> ⇒ <code>undefined</code></dt>
<dd><p>Clear alpha channel to desired color</p>
</dd>
<dt><a href="#ImageAlphaMask">ImageAlphaMask(image, alphaMask)</a> ⇒ <code>undefined</code></dt>
<dd><p>Apply alpha mask to image</p>
</dd>
<dt><a href="#ImageAlphaPremultiply">ImageAlphaPremultiply(image)</a> ⇒ <code>undefined</code></dt>
<dd><p>Premultiply alpha channel</p>
</dd>
<dt><a href="#ImageResize">ImageResize(image, newWidth, newHeight)</a> ⇒ <code>undefined</code></dt>
<dd><p>Resize image (Bicubic scaling algorithm)</p>
</dd>
<dt><a href="#ImageResizeNN">ImageResizeNN(image, newWidth, newHeight)</a> ⇒ <code>undefined</code></dt>
<dd><p>Resize image (Nearest-Neighbor scaling algorithm)</p>
</dd>
<dt><a href="#ImageResizeCanvas">ImageResizeCanvas(image, newWidth, newHeight, offsetX, offsetY, fill)</a> ⇒ <code>undefined</code></dt>
<dd><p>Resize canvas and fill with color</p>
</dd>
<dt><a href="#ImageMipmaps">ImageMipmaps(image)</a> ⇒ <code>undefined</code></dt>
<dd><p>Compute all mipmap levels for a provided image</p>
</dd>
<dt><a href="#ImageDither">ImageDither(image, rBpp, gBpp, bBpp, aBpp)</a> ⇒ <code>undefined</code></dt>
<dd><p>Dither image data to 16bpp or lower (Floyd-Steinberg dithering)</p>
</dd>
<dt><a href="#ImageFlipVertical">ImageFlipVertical(image)</a> ⇒ <code>undefined</code></dt>
<dd><p>Flip image vertically</p>
</dd>
<dt><a href="#ImageFlipHorizontal">ImageFlipHorizontal(image)</a> ⇒ <code>undefined</code></dt>
<dd><p>Flip image horizontally</p>
</dd>
<dt><a href="#ImageRotateCW">ImageRotateCW(image)</a> ⇒ <code>undefined</code></dt>
<dd><p>Rotate image clockwise 90deg</p>
</dd>
<dt><a href="#ImageRotateCCW">ImageRotateCCW(image)</a> ⇒ <code>undefined</code></dt>
<dd><p>Rotate image counter-clockwise 90deg</p>
</dd>
<dt><a href="#ImageColorTint">ImageColorTint(image, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Modify image color: tint</p>
</dd>
<dt><a href="#ImageColorInvert">ImageColorInvert(image)</a> ⇒ <code>undefined</code></dt>
<dd><p>Modify image color: invert</p>
</dd>
<dt><a href="#ImageColorGrayscale">ImageColorGrayscale(image)</a> ⇒ <code>undefined</code></dt>
<dd><p>Modify image color: grayscale</p>
</dd>
<dt><a href="#ImageColorContrast">ImageColorContrast(image, contrast)</a> ⇒ <code>undefined</code></dt>
<dd><p>Modify image color: contrast (-100 to 100)</p>
</dd>
<dt><a href="#ImageColorBrightness">ImageColorBrightness(image, brightness)</a> ⇒ <code>undefined</code></dt>
<dd><p>Modify image color: brightness (-255 to 255)</p>
</dd>
<dt><a href="#ImageColorReplace">ImageColorReplace(image, color, replace)</a> ⇒ <code>undefined</code></dt>
<dd><p>Modify image color: replace color</p>
</dd>
<dt><a href="#ImageClearBackground">ImageClearBackground(dst, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Clear image background with given color</p>
</dd>
<dt><a href="#ImageDrawPixel">ImageDrawPixel(dst, posX, posY, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw pixel within an image</p>
</dd>
<dt><a href="#ImageDrawPixelV">ImageDrawPixelV(dst, position, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw pixel within an image (Vector version)</p>
</dd>
<dt><a href="#ImageDrawLine">ImageDrawLine(dst, startPosX, startPosY, endPosX, endPosY, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw line within an image</p>
</dd>
<dt><a href="#ImageDrawLineV">ImageDrawLineV(dst, start, end, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw line within an image (Vector version)</p>
</dd>
<dt><a href="#ImageDrawCircle">ImageDrawCircle(dst, centerX, centerY, radius, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw circle within an image</p>
</dd>
<dt><a href="#ImageDrawCircleV">ImageDrawCircleV(dst, center, radius, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw circle within an image (Vector version)</p>
</dd>
<dt><a href="#ImageDrawRectangle">ImageDrawRectangle(dst, posX, posY, width, height, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw rectangle within an image</p>
</dd>
<dt><a href="#ImageDrawRectangleV">ImageDrawRectangleV(dst, position, size, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw rectangle within an image (Vector version)</p>
</dd>
<dt><a href="#ImageDrawRectangleRec">ImageDrawRectangleRec(dst, rec, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw rectangle within an image</p>
</dd>
<dt><a href="#ImageDrawRectangleLines">ImageDrawRectangleLines(dst, rec, thick, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw rectangle lines within an image</p>
</dd>
<dt><a href="#ImageDraw">ImageDraw(dst, src, srcRec, dstRec, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw a source image within a destination image (tint applied to source)</p>
</dd>
<dt><a href="#ImageDrawText">ImageDrawText(dst, text, posX, posY, fontSize, color)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw text (using default font) within an image (destination)</p>
</dd>
<dt><a href="#ImageDrawTextEx">ImageDrawTextEx(dst, font, text, position, fontSize, spacing, tint)</a> ⇒ <code>undefined</code></dt>
<dd><p>Draw text (custom sprite font) within an image (destination)</p>
</dd>
<dt><a href="#GenTextureMipmaps">GenTextureMipmaps(texture)</a> ⇒ <code>undefined</code></dt>
<dd><p>Generate GPU mipmaps for a texture</p>
</dd>
<dt><a href="#UploadMesh">UploadMesh(mesh, dynamic)</a> ⇒ <code>undefined</code></dt>
<dd><p>Upload mesh vertex data in GPU and provide VAO/VBO ids</p>
</dd>
<dt><a href="#GenMeshTangents">GenMeshTangents(mesh)</a> ⇒ <code>undefined</code></dt>
<dd><p>Compute mesh tangents</p>
</dd>
<dt><a href="#GenMeshBinormals">GenMeshBinormals(mesh)</a> ⇒ <code>undefined</code></dt>
<dd><p>Compute mesh binormals</p>
</dd>
<dt><a href="#SetModelMeshMaterial">SetModelMeshMaterial(model, meshId, materialId)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set material for a mesh</p>
</dd>
<dt><a href="#WaveFormat">WaveFormat(wave, sampleRate, sampleSize, channels)</a> ⇒ <code>undefined</code></dt>
<dd><p>Convert wave data to desired format</p>
</dd>
<dt><a href="#WaveCrop">WaveCrop(wave, initSample, finalSample)</a> ⇒ <code>undefined</code></dt>
<dd><p>Crop a wave to defined samples range</p>
</dd>
<dt><a href="#Color">Color(r, g, b, a)</a> ⇒ <code><a href="#Color">Color</a></code></dt>
<dd><p>Color, 4 components, R8G8B8A8 (32bit)</p>
</dd>
<dt><a href="#Vector2">Vector2(x, y)</a> ⇒ <code><a href="#Vector2">Vector2</a></code></dt>
<dd><p>Vector2, 2 components</p>
</dd>
<dt><a href="#Vector3">Vector3(x, y, z)</a> ⇒ <code><a href="#Vector3">Vector3</a></code></dt>
<dd><p>Vector3, 3 components</p>
</dd>
<dt><a href="#Vector4">Vector4(x, y, z, w)</a> ⇒ <code><a href="#Vector4">Vector4</a></code></dt>
<dd><p>Vector4, 4 components</p>
</dd>
<dt><a href="#Rectangle">Rectangle(x, y, width, height)</a> ⇒ <code><a href="#Rectangle">Rectangle</a></code></dt>
<dd><p>Rectangle, 4 components</p>
</dd>
<dt><a href="#Camera2D">Camera2D(offset, target, rotation, zoom)</a> ⇒ <code><a href="#Camera2D">Camera2D</a></code></dt>
<dd><p>Camera2D, defines position/orientation in 2d space</p>
</dd>
<dt><a href="#Camera3D">Camera3D(position, target, up, fovy, projection)</a> ⇒ <code><a href="#Camera3D">Camera3D</a></code></dt>
<dd><p>Camera, defines position/orientation in 3d space</p>
</dd>
<dt><a href="#SetShaderFloat">SetShaderFloat(shader, locIndex, value)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set shader uniform value float</p>
</dd>
<dt><a href="#SetShaderInt">SetShaderInt(shader, locIndex, value)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set shader uniform value float</p>
</dd>
<dt><a href="#SetShaderVec2">SetShaderVec2(shader, locIndex, value)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set shader uniform value vector2</p>
</dd>
<dt><a href="#SetShaderVec3">SetShaderVec3(shader, locIndex, value)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set shader uniform value vector3</p>
</dd>
<dt><a href="#SetShaderVec4">SetShaderVec4(shader, locIndex, value)</a> ⇒ <code>undefined</code></dt>
<dd><p>Set shader uniform value vector4</p>
</dd>
</dl>

<a name="InitWindow"></a>

## InitWindow(width, height, title) ⇒ <code>undefined</code>
Initialize window and OpenGL context

**Kind**: global function  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 
| title | <code>string</code> | 

<a name="WindowShouldClose"></a>

## WindowShouldClose() ⇒ <code>boolean</code>
Check if KEY_ESCAPE pressed or Close icon pressed

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  
<a name="CloseWindow"></a>

## CloseWindow() ⇒ <code>undefined</code>
Close window and unload OpenGL context

**Kind**: global function  
<a name="IsWindowReady"></a>

## IsWindowReady() ⇒ <code>boolean</code>
Check if window has been initialized successfully

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  
<a name="IsWindowFullscreen"></a>

## IsWindowFullscreen() ⇒ <code>boolean</code>
Check if window is currently fullscreen

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  
<a name="IsWindowHidden"></a>

## IsWindowHidden() ⇒ <code>boolean</code>
Check if window is currently hidden (only PLATFORM_DESKTOP)

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  
<a name="IsWindowMinimized"></a>

## IsWindowMinimized() ⇒ <code>boolean</code>
Check if window is currently minimized (only PLATFORM_DESKTOP)

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  
<a name="IsWindowMaximized"></a>

## IsWindowMaximized() ⇒ <code>boolean</code>
Check if window is currently maximized (only PLATFORM_DESKTOP)

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  
<a name="IsWindowFocused"></a>

## IsWindowFocused() ⇒ <code>boolean</code>
Check if window is currently focused (only PLATFORM_DESKTOP)

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  
<a name="IsWindowResized"></a>

## IsWindowResized() ⇒ <code>boolean</code>
Check if window has been resized last frame

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  
<a name="IsWindowState"></a>

## IsWindowState(flag) ⇒ <code>boolean</code>
Check if one specific window flag is enabled

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| flag | <code>number</code> | 

<a name="SetWindowState"></a>

## SetWindowState(flags) ⇒ <code>undefined</code>
Set window configuration state using flags (only PLATFORM_DESKTOP)

**Kind**: global function  

| Param | Type |
| --- | --- |
| flags | <code>number</code> | 

<a name="ClearWindowState"></a>

## ClearWindowState(flags) ⇒ <code>undefined</code>
Clear window configuration state flags

**Kind**: global function  

| Param | Type |
| --- | --- |
| flags | <code>number</code> | 

<a name="ToggleFullscreen"></a>

## ToggleFullscreen() ⇒ <code>undefined</code>
Toggle window state: fullscreen/windowed (only PLATFORM_DESKTOP)

**Kind**: global function  
<a name="MaximizeWindow"></a>

## MaximizeWindow() ⇒ <code>undefined</code>
Set window state: maximized, if resizable (only PLATFORM_DESKTOP)

**Kind**: global function  
<a name="MinimizeWindow"></a>

## MinimizeWindow() ⇒ <code>undefined</code>
Set window state: minimized, if resizable (only PLATFORM_DESKTOP)

**Kind**: global function  
<a name="RestoreWindow"></a>

## RestoreWindow() ⇒ <code>undefined</code>
Set window state: not minimized/maximized (only PLATFORM_DESKTOP)

**Kind**: global function  
<a name="SetWindowIcon"></a>

## SetWindowIcon(image) ⇒ <code>undefined</code>
Set icon for window (only PLATFORM_DESKTOP)

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 

<a name="SetWindowTitle"></a>

## SetWindowTitle(title) ⇒ <code>undefined</code>
Set title for window (only PLATFORM_DESKTOP)

**Kind**: global function  

| Param | Type |
| --- | --- |
| title | <code>string</code> | 

<a name="SetWindowPosition"></a>

## SetWindowPosition(x, y) ⇒ <code>undefined</code>
Set window position on screen (only PLATFORM_DESKTOP)

**Kind**: global function  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

<a name="SetWindowMonitor"></a>

## SetWindowMonitor(monitor) ⇒ <code>undefined</code>
Set monitor for the current window (fullscreen mode)

**Kind**: global function  

| Param | Type |
| --- | --- |
| monitor | <code>number</code> | 

<a name="SetWindowMinSize"></a>

## SetWindowMinSize(width, height) ⇒ <code>undefined</code>
Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE)

**Kind**: global function  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 

<a name="SetWindowSize"></a>

## SetWindowSize(width, height) ⇒ <code>undefined</code>
Set window dimensions

**Kind**: global function  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 

<a name="GetWindowHandle"></a>

## GetWindowHandle() ⇒ <code>number</code>
Get native window handle

**Kind**: global function  
**Returns**: <code>number</code> - The resulting void *.  
<a name="GetScreenWidth"></a>

## GetScreenWidth() ⇒ <code>number</code>
Get current screen width

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="GetScreenHeight"></a>

## GetScreenHeight() ⇒ <code>number</code>
Get current screen height

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="GetMonitorCount"></a>

## GetMonitorCount() ⇒ <code>number</code>
Get number of connected monitors

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="GetCurrentMonitor"></a>

## GetCurrentMonitor() ⇒ <code>number</code>
Get current connected monitor

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="GetMonitorPosition"></a>

## GetMonitorPosition(monitor) ⇒ [<code>Vector2</code>](#Vector2)
Get specified monitor position

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The resulting Vector2.  

| Param | Type |
| --- | --- |
| monitor | <code>number</code> | 

<a name="GetMonitorWidth"></a>

## GetMonitorWidth(monitor) ⇒ <code>number</code>
Get specified monitor width (max available by monitor)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| monitor | <code>number</code> | 

<a name="GetMonitorHeight"></a>

## GetMonitorHeight(monitor) ⇒ <code>number</code>
Get specified monitor height (max available by monitor)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| monitor | <code>number</code> | 

<a name="GetMonitorPhysicalWidth"></a>

## GetMonitorPhysicalWidth(monitor) ⇒ <code>number</code>
Get specified monitor physical width in millimetres

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| monitor | <code>number</code> | 

<a name="GetMonitorPhysicalHeight"></a>

## GetMonitorPhysicalHeight(monitor) ⇒ <code>number</code>
Get specified monitor physical height in millimetres

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| monitor | <code>number</code> | 

<a name="GetMonitorRefreshRate"></a>

## GetMonitorRefreshRate(monitor) ⇒ <code>number</code>
Get specified monitor refresh rate

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| monitor | <code>number</code> | 

<a name="GetWindowPosition"></a>

## GetWindowPosition() ⇒ [<code>Vector2</code>](#Vector2)
Get window position XY on monitor

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The resulting Vector2.  
<a name="GetWindowScaleDPI"></a>

## GetWindowScaleDPI() ⇒ [<code>Vector2</code>](#Vector2)
Get window scale DPI factor

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The resulting Vector2.  
<a name="GetMonitorName"></a>

## GetMonitorName(monitor) ⇒ <code>string</code>
Get the human-readable, UTF-8 encoded name of the primary monitor

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  

| Param | Type |
| --- | --- |
| monitor | <code>number</code> | 

<a name="SetClipboardText"></a>

## SetClipboardText(text) ⇒ <code>undefined</code>
Set clipboard text content

**Kind**: global function  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="GetClipboardText"></a>

## GetClipboardText() ⇒ <code>string</code>
Get clipboard text content

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  
<a name="SwapScreenBuffer"></a>

## SwapScreenBuffer() ⇒ <code>undefined</code>
Swap back buffer with front buffer (screen drawing)

**Kind**: global function  
<a name="PollInputEvents"></a>

## PollInputEvents() ⇒ <code>undefined</code>
Register all input events

**Kind**: global function  
<a name="WaitTime"></a>

## WaitTime(ms) ⇒ <code>undefined</code>
Wait for some milliseconds (halt program execution)

**Kind**: global function  

| Param | Type |
| --- | --- |
| ms | <code>number</code> | 

<a name="ShowCursor"></a>

## ShowCursor() ⇒ <code>undefined</code>
Shows cursor

**Kind**: global function  
<a name="HideCursor"></a>

## HideCursor() ⇒ <code>undefined</code>
Hides cursor

**Kind**: global function  
<a name="IsCursorHidden"></a>

## IsCursorHidden() ⇒ <code>boolean</code>
Check if cursor is not visible

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  
<a name="EnableCursor"></a>

## EnableCursor() ⇒ <code>undefined</code>
Enables cursor (unlock cursor)

**Kind**: global function  
<a name="DisableCursor"></a>

## DisableCursor() ⇒ <code>undefined</code>
Disables cursor (lock cursor)

**Kind**: global function  
<a name="IsCursorOnScreen"></a>

## IsCursorOnScreen() ⇒ <code>boolean</code>
Check if cursor is on the screen

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  
<a name="ClearBackground"></a>

## ClearBackground(color) ⇒ <code>undefined</code>
Set background color (framebuffer clear color)

**Kind**: global function  

| Param | Type |
| --- | --- |
| color | [<code>Color</code>](#Color) | 

<a name="BeginDrawing"></a>

## BeginDrawing() ⇒ <code>undefined</code>
Setup canvas (framebuffer) to start drawing

**Kind**: global function  
<a name="EndDrawing"></a>

## EndDrawing() ⇒ <code>undefined</code>
End canvas drawing and swap buffers (double buffering)

**Kind**: global function  
<a name="BeginMode2D"></a>

## BeginMode2D(camera) ⇒ <code>undefined</code>
Begin 2D mode with custom camera (2D)

**Kind**: global function  

| Param | Type |
| --- | --- |
| camera | [<code>Camera2D</code>](#Camera2D) | 

<a name="EndMode2D"></a>

## EndMode2D() ⇒ <code>undefined</code>
Ends 2D mode with custom camera

**Kind**: global function  
<a name="BeginMode3D"></a>

## BeginMode3D(camera) ⇒ <code>undefined</code>
Begin 3D mode with custom camera (3D)

**Kind**: global function  

| Param | Type |
| --- | --- |
| camera | [<code>Camera3D</code>](#Camera3D) | 

<a name="EndMode3D"></a>

## EndMode3D() ⇒ <code>undefined</code>
Ends 3D mode and returns to default 2D orthographic mode

**Kind**: global function  
<a name="BeginTextureMode"></a>

## BeginTextureMode(target) ⇒ <code>undefined</code>
Begin drawing to render texture

**Kind**: global function  

| Param | Type |
| --- | --- |
| target | <code>RenderTexture2D</code> | 

<a name="EndTextureMode"></a>

## EndTextureMode() ⇒ <code>undefined</code>
Ends drawing to render texture

**Kind**: global function  
<a name="BeginShaderMode"></a>

## BeginShaderMode(shader) ⇒ <code>undefined</code>
Begin custom shader drawing

**Kind**: global function  

| Param | Type |
| --- | --- |
| shader | <code>Shader</code> | 

<a name="EndShaderMode"></a>

## EndShaderMode() ⇒ <code>undefined</code>
End custom shader drawing (use default shader)

**Kind**: global function  
<a name="BeginBlendMode"></a>

## BeginBlendMode(mode) ⇒ <code>undefined</code>
Begin blending mode (alpha, additive, multiplied, subtract, custom)

**Kind**: global function  

| Param | Type |
| --- | --- |
| mode | <code>number</code> | 

<a name="EndBlendMode"></a>

## EndBlendMode() ⇒ <code>undefined</code>
End blending mode (reset to default: alpha blending)

**Kind**: global function  
<a name="BeginScissorMode"></a>

## BeginScissorMode(x, y, width, height) ⇒ <code>undefined</code>
Begin scissor mode (define screen area for following drawing)

**Kind**: global function  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 
| width | <code>number</code> | 
| height | <code>number</code> | 

<a name="EndScissorMode"></a>

## EndScissorMode() ⇒ <code>undefined</code>
End scissor mode

**Kind**: global function  
<a name="EndVrStereoMode"></a>

## EndVrStereoMode() ⇒ <code>undefined</code>
End stereo rendering (requires VR simulator)

**Kind**: global function  
<a name="LoadShader"></a>

## LoadShader(vsFileName, fsFileName) ⇒ <code>Shader</code>
Load shader from files and bind default locations

**Kind**: global function  
**Returns**: <code>Shader</code> - The resulting Shader.  

| Param | Type |
| --- | --- |
| vsFileName | <code>string</code> | 
| fsFileName | <code>string</code> | 

<a name="LoadShaderFromMemory"></a>

## LoadShaderFromMemory(vsCode, fsCode) ⇒ <code>Shader</code>
Load shader from code strings and bind default locations

**Kind**: global function  
**Returns**: <code>Shader</code> - The resulting Shader.  

| Param | Type |
| --- | --- |
| vsCode | <code>string</code> | 
| fsCode | <code>string</code> | 

<a name="GetShaderLocation"></a>

## GetShaderLocation(shader, uniformName) ⇒ <code>number</code>
Get shader uniform location

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| shader | <code>Shader</code> | 
| uniformName | <code>string</code> | 

<a name="GetShaderLocationAttrib"></a>

## GetShaderLocationAttrib(shader, attribName) ⇒ <code>number</code>
Get shader attribute location

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| shader | <code>Shader</code> | 
| attribName | <code>string</code> | 

<a name="SetShaderValueMatrix"></a>

## SetShaderValueMatrix(shader, locIndex, mat) ⇒ <code>undefined</code>
Set shader uniform value (matrix 4x4)

**Kind**: global function  

| Param | Type |
| --- | --- |
| shader | <code>Shader</code> | 
| locIndex | <code>number</code> | 
| mat | <code>Matrix</code> | 

<a name="SetShaderValueTexture"></a>

## SetShaderValueTexture(shader, locIndex, texture) ⇒ <code>undefined</code>
Set shader uniform value for texture (sampler2d)

**Kind**: global function  

| Param | Type |
| --- | --- |
| shader | <code>Shader</code> | 
| locIndex | <code>number</code> | 
| texture | <code>Texture2D</code> | 

<a name="UnloadShader"></a>

## UnloadShader(shader) ⇒ <code>undefined</code>
Unload shader from GPU memory (VRAM)

**Kind**: global function  

| Param | Type |
| --- | --- |
| shader | <code>Shader</code> | 

<a name="GetMouseRay"></a>

## GetMouseRay(mousePosition, camera) ⇒ <code>Ray</code>
Get a ray trace from mouse position

**Kind**: global function  
**Returns**: <code>Ray</code> - The resulting Ray.  

| Param | Type |
| --- | --- |
| mousePosition | [<code>Vector2</code>](#Vector2) | 
| camera | <code>Camera</code> | 

<a name="GetCameraMatrix"></a>

## GetCameraMatrix(camera) ⇒ <code>Matrix</code>
Get camera transform matrix (view matrix)

**Kind**: global function  
**Returns**: <code>Matrix</code> - The resulting Matrix.  

| Param | Type |
| --- | --- |
| camera | <code>Camera</code> | 

<a name="GetCameraMatrix2D"></a>

## GetCameraMatrix2D(camera) ⇒ <code>Matrix</code>
Get camera 2d transform matrix

**Kind**: global function  
**Returns**: <code>Matrix</code> - The resulting Matrix.  

| Param | Type |
| --- | --- |
| camera | [<code>Camera2D</code>](#Camera2D) | 

<a name="GetWorldToScreen"></a>

## GetWorldToScreen(position, camera) ⇒ [<code>Vector2</code>](#Vector2)
Get the screen space position for a 3d world space position

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The resulting Vector2.  

| Param | Type |
| --- | --- |
| position | [<code>Vector3</code>](#Vector3) | 
| camera | <code>Camera</code> | 

<a name="GetWorldToScreenEx"></a>

## GetWorldToScreenEx(position, camera, width, height) ⇒ [<code>Vector2</code>](#Vector2)
Get size position for a 3d world space position

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The resulting Vector2.  

| Param | Type |
| --- | --- |
| position | [<code>Vector3</code>](#Vector3) | 
| camera | <code>Camera</code> | 
| width | <code>number</code> | 
| height | <code>number</code> | 

<a name="GetWorldToScreen2D"></a>

## GetWorldToScreen2D(position, camera) ⇒ [<code>Vector2</code>](#Vector2)
Get the screen space position for a 2d camera world space position

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The resulting Vector2.  

| Param | Type |
| --- | --- |
| position | [<code>Vector2</code>](#Vector2) | 
| camera | [<code>Camera2D</code>](#Camera2D) | 

<a name="GetScreenToWorld2D"></a>

## GetScreenToWorld2D(position, camera) ⇒ [<code>Vector2</code>](#Vector2)
Get the world space position for a 2d camera screen space position

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The resulting Vector2.  

| Param | Type |
| --- | --- |
| position | [<code>Vector2</code>](#Vector2) | 
| camera | [<code>Camera2D</code>](#Camera2D) | 

<a name="SetTargetFPS"></a>

## SetTargetFPS(fps) ⇒ <code>undefined</code>
Set target FPS (maximum)

**Kind**: global function  

| Param | Type |
| --- | --- |
| fps | <code>number</code> | 

<a name="GetFPS"></a>

## GetFPS() ⇒ <code>number</code>
Get current FPS

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="GetFrameTime"></a>

## GetFrameTime() ⇒ <code>number</code>
Get time in seconds for last frame drawn (delta time)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  
<a name="GetTime"></a>

## GetTime() ⇒ <code>number</code>
Get elapsed time in seconds since InitWindow()

**Kind**: global function  
**Returns**: <code>number</code> - The resulting double.  
<a name="GetRandomValue"></a>

## GetRandomValue(min, max) ⇒ <code>number</code>
Get a random value between min and max (both included)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| min | <code>number</code> | 
| max | <code>number</code> | 

<a name="SetRandomSeed"></a>

## SetRandomSeed(seed) ⇒ <code>undefined</code>
Set the seed for the random number generator

**Kind**: global function  

| Param | Type |
| --- | --- |
| seed | <code>number</code> | 

<a name="TakeScreenshot"></a>

## TakeScreenshot(fileName) ⇒ <code>undefined</code>
Takes a screenshot of current screen (filename extension defines format)

**Kind**: global function  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 

<a name="SetConfigFlags"></a>

## SetConfigFlags(flags) ⇒ <code>undefined</code>
Setup init configuration flags (view FLAGS)

**Kind**: global function  

| Param | Type |
| --- | --- |
| flags | <code>number</code> | 

<a name="SetTraceLogLevel"></a>

## SetTraceLogLevel(logLevel) ⇒ <code>undefined</code>
Set the current threshold (minimum) log level

**Kind**: global function  

| Param | Type |
| --- | --- |
| logLevel | <code>number</code> | 

<a name="MemAlloc"></a>

## MemAlloc(size) ⇒ <code>number</code>
Internal memory allocator

**Kind**: global function  
**Returns**: <code>number</code> - The resulting void *.  

| Param | Type |
| --- | --- |
| size | <code>number</code> | 

<a name="MemRealloc"></a>

## MemRealloc(ptr, size) ⇒ <code>number</code>
Internal memory reallocator

**Kind**: global function  
**Returns**: <code>number</code> - The resulting void *.  

| Param | Type |
| --- | --- |
| ptr | <code>number</code> | 
| size | <code>number</code> | 

<a name="MemFree"></a>

## MemFree(ptr) ⇒ <code>undefined</code>
Internal memory free

**Kind**: global function  

| Param | Type |
| --- | --- |
| ptr | <code>number</code> | 

<a name="LoadFileData"></a>

## LoadFileData(fileName, bytesRead) ⇒ <code>Buffer</code>
Load file data as byte array (read)

**Kind**: global function  
**Returns**: <code>Buffer</code> - The resulting unsigned char *.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 
| bytesRead | <code>number</code> | 

<a name="UnloadFileData"></a>

## UnloadFileData(data) ⇒ <code>undefined</code>
Unload file data allocated by LoadFileData()

**Kind**: global function  

| Param | Type |
| --- | --- |
| data | <code>Buffer</code> | 

<a name="SaveFileData"></a>

## SaveFileData(fileName, data, bytesToWrite) ⇒ <code>boolean</code>
Save data to file from byte array (write), returns true on success

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 
| data | <code>number</code> | 
| bytesToWrite | <code>number</code> | 

<a name="LoadFileText"></a>

## LoadFileText(fileName) ⇒ <code>string</code>
Load text data from file (read), returns a '\0' terminated string

**Kind**: global function  
**Returns**: <code>string</code> - The resulting char *.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 

<a name="UnloadFileText"></a>

## UnloadFileText(text) ⇒ <code>undefined</code>
Unload file text data allocated by LoadFileText()

**Kind**: global function  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="SaveFileText"></a>

## SaveFileText(fileName, text) ⇒ <code>boolean</code>
Save text data to file (write), string must be '\0' terminated, returns true on success

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 
| text | <code>string</code> | 

<a name="FileExists"></a>

## FileExists(fileName) ⇒ <code>boolean</code>
Check if file exists

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 

<a name="DirectoryExists"></a>

## DirectoryExists(dirPath) ⇒ <code>boolean</code>
Check if a directory path exists

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| dirPath | <code>string</code> | 

<a name="IsFileExtension"></a>

## IsFileExtension(fileName, ext) ⇒ <code>boolean</code>
Check file extension (including point: .png, .wav)

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 
| ext | <code>string</code> | 

<a name="GetFileExtension"></a>

## GetFileExtension(fileName) ⇒ <code>string</code>
Get pointer to extension for a filename string (includes dot: '.png')

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 

<a name="GetFileName"></a>

## GetFileName(filePath) ⇒ <code>string</code>
Get pointer to filename for a path string

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  

| Param | Type |
| --- | --- |
| filePath | <code>string</code> | 

<a name="GetFileNameWithoutExt"></a>

## GetFileNameWithoutExt(filePath) ⇒ <code>string</code>
Get filename string without extension (uses static string)

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  

| Param | Type |
| --- | --- |
| filePath | <code>string</code> | 

<a name="GetDirectoryPath"></a>

## GetDirectoryPath(filePath) ⇒ <code>string</code>
Get full path for a given fileName with path (uses static string)

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  

| Param | Type |
| --- | --- |
| filePath | <code>string</code> | 

<a name="GetPrevDirectoryPath"></a>

## GetPrevDirectoryPath(dirPath) ⇒ <code>string</code>
Get previous directory path for a given path (uses static string)

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  

| Param | Type |
| --- | --- |
| dirPath | <code>string</code> | 

<a name="GetWorkingDirectory"></a>

## GetWorkingDirectory() ⇒ <code>string</code>
Get current working directory (uses static string)

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  
<a name="GetDirectoryFiles"></a>

## GetDirectoryFiles(dirPath, count) ⇒ <code>number</code>
Get filenames in a directory path (memory should be freed)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting char **.  

| Param | Type |
| --- | --- |
| dirPath | <code>string</code> | 
| count | <code>number</code> | 

<a name="ClearDirectoryFiles"></a>

## ClearDirectoryFiles() ⇒ <code>undefined</code>
Clear directory files paths buffers (free memory)

**Kind**: global function  
<a name="ChangeDirectory"></a>

## ChangeDirectory(dir) ⇒ <code>boolean</code>
Change working directory, return true on success

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| dir | <code>string</code> | 

<a name="IsFileDropped"></a>

## IsFileDropped() ⇒ <code>boolean</code>
Check if a file has been dropped into window

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  
<a name="GetDroppedFiles"></a>

## GetDroppedFiles(count) ⇒ <code>number</code>
Get dropped files names (memory should be freed)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting char **.  

| Param | Type |
| --- | --- |
| count | <code>number</code> | 

<a name="ClearDroppedFiles"></a>

## ClearDroppedFiles() ⇒ <code>undefined</code>
Clear dropped files paths buffer (free memory)

**Kind**: global function  
<a name="GetFileModTime"></a>

## GetFileModTime(fileName) ⇒ <code>number</code>
Get file modification time (last write time)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting long.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 

<a name="CompressData"></a>

## CompressData(data, dataLength, compDataLength) ⇒ <code>Buffer</code>
Compress data (DEFLATE algorithm)

**Kind**: global function  
**Returns**: <code>Buffer</code> - The resulting unsigned char *.  

| Param | Type |
| --- | --- |
| data | <code>Buffer</code> | 
| dataLength | <code>number</code> | 
| compDataLength | <code>number</code> | 

<a name="DecompressData"></a>

## DecompressData(compData, compDataLength, dataLength) ⇒ <code>Buffer</code>
Decompress data (DEFLATE algorithm)

**Kind**: global function  
**Returns**: <code>Buffer</code> - The resulting unsigned char *.  

| Param | Type |
| --- | --- |
| compData | <code>Buffer</code> | 
| compDataLength | <code>number</code> | 
| dataLength | <code>number</code> | 

<a name="EncodeDataBase64"></a>

## EncodeDataBase64(data, dataLength, outputLength) ⇒ <code>string</code>
Encode data to Base64 string

**Kind**: global function  
**Returns**: <code>string</code> - The resulting char *.  

| Param | Type |
| --- | --- |
| data | <code>Buffer</code> | 
| dataLength | <code>number</code> | 
| outputLength | <code>number</code> | 

<a name="DecodeDataBase64"></a>

## DecodeDataBase64(data, outputLength) ⇒ <code>Buffer</code>
Decode Base64 string data

**Kind**: global function  
**Returns**: <code>Buffer</code> - The resulting unsigned char *.  

| Param | Type |
| --- | --- |
| data | <code>Buffer</code> | 
| outputLength | <code>number</code> | 

<a name="SaveStorageValue"></a>

## SaveStorageValue(position, value) ⇒ <code>boolean</code>
Save integer value to storage file (to defined position), returns true on success

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| position | <code>number</code> | 
| value | <code>number</code> | 

<a name="LoadStorageValue"></a>

## LoadStorageValue(position) ⇒ <code>number</code>
Load integer value from storage file (from defined position)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| position | <code>number</code> | 

<a name="OpenURL"></a>

## OpenURL(url) ⇒ <code>undefined</code>
Open URL with default system browser (if available)

**Kind**: global function  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

<a name="IsKeyPressed"></a>

## IsKeyPressed(key) ⇒ <code>boolean</code>
Check if a key has been pressed once

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| key | <code>number</code> | 

<a name="IsKeyDown"></a>

## IsKeyDown(key) ⇒ <code>boolean</code>
Check if a key is being pressed

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| key | <code>number</code> | 

<a name="IsKeyReleased"></a>

## IsKeyReleased(key) ⇒ <code>boolean</code>
Check if a key has been released once

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| key | <code>number</code> | 

<a name="IsKeyUp"></a>

## IsKeyUp(key) ⇒ <code>boolean</code>
Check if a key is NOT being pressed

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| key | <code>number</code> | 

<a name="SetExitKey"></a>

## SetExitKey(key) ⇒ <code>undefined</code>
Set a custom key to exit program (default is ESC)

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>number</code> | 

<a name="GetKeyPressed"></a>

## GetKeyPressed() ⇒ <code>number</code>
Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="GetCharPressed"></a>

## GetCharPressed() ⇒ <code>number</code>
Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="IsGamepadAvailable"></a>

## IsGamepadAvailable(gamepad) ⇒ <code>boolean</code>
Check if a gamepad is available

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| gamepad | <code>number</code> | 

<a name="GetGamepadName"></a>

## GetGamepadName(gamepad) ⇒ <code>string</code>
Get gamepad internal name id

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  

| Param | Type |
| --- | --- |
| gamepad | <code>number</code> | 

<a name="IsGamepadButtonPressed"></a>

## IsGamepadButtonPressed(gamepad, button) ⇒ <code>boolean</code>
Check if a gamepad button has been pressed once

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| gamepad | <code>number</code> | 
| button | <code>number</code> | 

<a name="IsGamepadButtonDown"></a>

## IsGamepadButtonDown(gamepad, button) ⇒ <code>boolean</code>
Check if a gamepad button is being pressed

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| gamepad | <code>number</code> | 
| button | <code>number</code> | 

<a name="IsGamepadButtonReleased"></a>

## IsGamepadButtonReleased(gamepad, button) ⇒ <code>boolean</code>
Check if a gamepad button has been released once

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| gamepad | <code>number</code> | 
| button | <code>number</code> | 

<a name="IsGamepadButtonUp"></a>

## IsGamepadButtonUp(gamepad, button) ⇒ <code>boolean</code>
Check if a gamepad button is NOT being pressed

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| gamepad | <code>number</code> | 
| button | <code>number</code> | 

<a name="GetGamepadButtonPressed"></a>

## GetGamepadButtonPressed() ⇒ <code>number</code>
Get the last gamepad button pressed

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="GetGamepadAxisCount"></a>

## GetGamepadAxisCount(gamepad) ⇒ <code>number</code>
Get gamepad axis count for a gamepad

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| gamepad | <code>number</code> | 

<a name="GetGamepadAxisMovement"></a>

## GetGamepadAxisMovement(gamepad, axis) ⇒ <code>number</code>
Get axis movement value for a gamepad axis

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| gamepad | <code>number</code> | 
| axis | <code>number</code> | 

<a name="SetGamepadMappings"></a>

## SetGamepadMappings(mappings) ⇒ <code>number</code>
Set internal gamepad mappings (SDL_GameControllerDB)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| mappings | <code>string</code> | 

<a name="IsMouseButtonPressed"></a>

## IsMouseButtonPressed(button) ⇒ <code>boolean</code>
Check if a mouse button has been pressed once

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| button | <code>number</code> | 

<a name="IsMouseButtonDown"></a>

## IsMouseButtonDown(button) ⇒ <code>boolean</code>
Check if a mouse button is being pressed

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| button | <code>number</code> | 

<a name="IsMouseButtonReleased"></a>

## IsMouseButtonReleased(button) ⇒ <code>boolean</code>
Check if a mouse button has been released once

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| button | <code>number</code> | 

<a name="IsMouseButtonUp"></a>

## IsMouseButtonUp(button) ⇒ <code>boolean</code>
Check if a mouse button is NOT being pressed

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| button | <code>number</code> | 

<a name="GetMouseX"></a>

## GetMouseX() ⇒ <code>number</code>
Get mouse position X

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="GetMouseY"></a>

## GetMouseY() ⇒ <code>number</code>
Get mouse position Y

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="GetMousePosition"></a>

## GetMousePosition() ⇒ [<code>Vector2</code>](#Vector2)
Get mouse position XY

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The resulting Vector2.  
<a name="GetMouseDelta"></a>

## GetMouseDelta() ⇒ [<code>Vector2</code>](#Vector2)
Get mouse delta between frames

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The resulting Vector2.  
<a name="SetMousePosition"></a>

## SetMousePosition(x, y) ⇒ <code>undefined</code>
Set mouse position XY

**Kind**: global function  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

<a name="SetMouseOffset"></a>

## SetMouseOffset(offsetX, offsetY) ⇒ <code>undefined</code>
Set mouse offset

**Kind**: global function  

| Param | Type |
| --- | --- |
| offsetX | <code>number</code> | 
| offsetY | <code>number</code> | 

<a name="SetMouseScale"></a>

## SetMouseScale(scaleX, scaleY) ⇒ <code>undefined</code>
Set mouse scaling

**Kind**: global function  

| Param | Type |
| --- | --- |
| scaleX | <code>number</code> | 
| scaleY | <code>number</code> | 

<a name="GetMouseWheelMove"></a>

## GetMouseWheelMove() ⇒ <code>number</code>
Get mouse wheel movement Y

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  
<a name="SetMouseCursor"></a>

## SetMouseCursor(cursor) ⇒ <code>undefined</code>
Set mouse cursor

**Kind**: global function  

| Param | Type |
| --- | --- |
| cursor | <code>number</code> | 

<a name="GetTouchX"></a>

## GetTouchX() ⇒ <code>number</code>
Get touch position X for touch point 0 (relative to screen size)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="GetTouchY"></a>

## GetTouchY() ⇒ <code>number</code>
Get touch position Y for touch point 0 (relative to screen size)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="GetTouchPosition"></a>

## GetTouchPosition(index) ⇒ [<code>Vector2</code>](#Vector2)
Get touch position XY for a touch point index (relative to screen size)

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The resulting Vector2.  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 

<a name="GetTouchPointId"></a>

## GetTouchPointId(index) ⇒ <code>number</code>
Get touch point identifier for given index

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 

<a name="GetTouchPointCount"></a>

## GetTouchPointCount() ⇒ <code>number</code>
Get number of touch points

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="SetGesturesEnabled"></a>

## SetGesturesEnabled(flags) ⇒ <code>undefined</code>
Enable a set of gestures using flags

**Kind**: global function  

| Param | Type |
| --- | --- |
| flags | <code>number</code> | 

<a name="IsGestureDetected"></a>

## IsGestureDetected(gesture) ⇒ <code>boolean</code>
Check if a gesture have been detected

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| gesture | <code>number</code> | 

<a name="GetGestureDetected"></a>

## GetGestureDetected() ⇒ <code>number</code>
Get latest detected gesture

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="GetGestureHoldDuration"></a>

## GetGestureHoldDuration() ⇒ <code>number</code>
Get gesture hold time in milliseconds

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  
<a name="GetGestureDragVector"></a>

## GetGestureDragVector() ⇒ [<code>Vector2</code>](#Vector2)
Get gesture drag vector

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The resulting Vector2.  
<a name="GetGestureDragAngle"></a>

## GetGestureDragAngle() ⇒ <code>number</code>
Get gesture drag angle

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  
<a name="GetGesturePinchVector"></a>

## GetGesturePinchVector() ⇒ [<code>Vector2</code>](#Vector2)
Get gesture pinch delta

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The resulting Vector2.  
<a name="GetGesturePinchAngle"></a>

## GetGesturePinchAngle() ⇒ <code>number</code>
Get gesture pinch angle

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  
<a name="SetCameraMode"></a>

## SetCameraMode(camera, mode) ⇒ <code>undefined</code>
Set camera mode (multiple camera modes available)

**Kind**: global function  

| Param | Type |
| --- | --- |
| camera | <code>Camera</code> | 
| mode | <code>number</code> | 

<a name="SetCameraPanControl"></a>

## SetCameraPanControl(keyPan) ⇒ <code>undefined</code>
Set camera pan key to combine with mouse movement (free camera)

**Kind**: global function  

| Param | Type |
| --- | --- |
| keyPan | <code>number</code> | 

<a name="SetCameraAltControl"></a>

## SetCameraAltControl(keyAlt) ⇒ <code>undefined</code>
Set camera alt key to combine with mouse movement (free camera)

**Kind**: global function  

| Param | Type |
| --- | --- |
| keyAlt | <code>number</code> | 

<a name="SetCameraSmoothZoomControl"></a>

## SetCameraSmoothZoomControl(keySmoothZoom) ⇒ <code>undefined</code>
Set camera smooth zoom key to combine with mouse (free camera)

**Kind**: global function  

| Param | Type |
| --- | --- |
| keySmoothZoom | <code>number</code> | 

<a name="SetCameraMoveControls"></a>

## SetCameraMoveControls(keyFront, keyBack, keyRight, keyLeft, keyUp, keyDown) ⇒ <code>undefined</code>
Set camera move controls (1st person and 3rd person cameras)

**Kind**: global function  

| Param | Type |
| --- | --- |
| keyFront | <code>number</code> | 
| keyBack | <code>number</code> | 
| keyRight | <code>number</code> | 
| keyLeft | <code>number</code> | 
| keyUp | <code>number</code> | 
| keyDown | <code>number</code> | 

<a name="SetShapesTexture"></a>

## SetShapesTexture(texture, source) ⇒ <code>undefined</code>
Set texture and rectangle to be used on shapes drawing

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| source | [<code>Rectangle</code>](#Rectangle) | 

<a name="DrawPixel"></a>

## DrawPixel(posX, posY, color) ⇒ <code>undefined</code>
Draw a pixel

**Kind**: global function  

| Param | Type |
| --- | --- |
| posX | <code>number</code> | 
| posY | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawPixelV"></a>

## DrawPixelV(position, color) ⇒ <code>undefined</code>
Draw a pixel (Vector version)

**Kind**: global function  

| Param | Type |
| --- | --- |
| position | [<code>Vector2</code>](#Vector2) | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawLine"></a>

## DrawLine(startPosX, startPosY, endPosX, endPosY, color) ⇒ <code>undefined</code>
Draw a line

**Kind**: global function  

| Param | Type |
| --- | --- |
| startPosX | <code>number</code> | 
| startPosY | <code>number</code> | 
| endPosX | <code>number</code> | 
| endPosY | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawLineV"></a>

## DrawLineV(startPos, endPos, color) ⇒ <code>undefined</code>
Draw a line (Vector version)

**Kind**: global function  

| Param | Type |
| --- | --- |
| startPos | [<code>Vector2</code>](#Vector2) | 
| endPos | [<code>Vector2</code>](#Vector2) | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawLineEx"></a>

## DrawLineEx(startPos, endPos, thick, color) ⇒ <code>undefined</code>
Draw a line defining thickness

**Kind**: global function  

| Param | Type |
| --- | --- |
| startPos | [<code>Vector2</code>](#Vector2) | 
| endPos | [<code>Vector2</code>](#Vector2) | 
| thick | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawLineBezier"></a>

## DrawLineBezier(startPos, endPos, thick, color) ⇒ <code>undefined</code>
Draw a line using cubic-bezier curves in-out

**Kind**: global function  

| Param | Type |
| --- | --- |
| startPos | [<code>Vector2</code>](#Vector2) | 
| endPos | [<code>Vector2</code>](#Vector2) | 
| thick | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawLineBezierQuad"></a>

## DrawLineBezierQuad(startPos, endPos, controlPos, thick, color) ⇒ <code>undefined</code>
Draw line using quadratic bezier curves with a control point

**Kind**: global function  

| Param | Type |
| --- | --- |
| startPos | [<code>Vector2</code>](#Vector2) | 
| endPos | [<code>Vector2</code>](#Vector2) | 
| controlPos | [<code>Vector2</code>](#Vector2) | 
| thick | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawLineBezierCubic"></a>

## DrawLineBezierCubic(startPos, endPos, startControlPos, endControlPos, thick, color) ⇒ <code>undefined</code>
Draw line using cubic bezier curves with 2 control points

**Kind**: global function  

| Param | Type |
| --- | --- |
| startPos | [<code>Vector2</code>](#Vector2) | 
| endPos | [<code>Vector2</code>](#Vector2) | 
| startControlPos | [<code>Vector2</code>](#Vector2) | 
| endControlPos | [<code>Vector2</code>](#Vector2) | 
| thick | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawLineStrip"></a>

## DrawLineStrip(points, pointCount, color) ⇒ <code>undefined</code>
Draw lines sequence

**Kind**: global function  

| Param | Type |
| --- | --- |
| points | <code>number</code> | 
| pointCount | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCircle"></a>

## DrawCircle(centerX, centerY, radius, color) ⇒ <code>undefined</code>
Draw a color-filled circle

**Kind**: global function  

| Param | Type |
| --- | --- |
| centerX | <code>number</code> | 
| centerY | <code>number</code> | 
| radius | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCircleSector"></a>

## DrawCircleSector(center, radius, startAngle, endAngle, segments, color) ⇒ <code>undefined</code>
Draw a piece of a circle

**Kind**: global function  

| Param | Type |
| --- | --- |
| center | [<code>Vector2</code>](#Vector2) | 
| radius | <code>number</code> | 
| startAngle | <code>number</code> | 
| endAngle | <code>number</code> | 
| segments | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCircleSectorLines"></a>

## DrawCircleSectorLines(center, radius, startAngle, endAngle, segments, color) ⇒ <code>undefined</code>
Draw circle sector outline

**Kind**: global function  

| Param | Type |
| --- | --- |
| center | [<code>Vector2</code>](#Vector2) | 
| radius | <code>number</code> | 
| startAngle | <code>number</code> | 
| endAngle | <code>number</code> | 
| segments | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCircleGradient"></a>

## DrawCircleGradient(centerX, centerY, radius, color1, color2) ⇒ <code>undefined</code>
Draw a gradient-filled circle

**Kind**: global function  

| Param | Type |
| --- | --- |
| centerX | <code>number</code> | 
| centerY | <code>number</code> | 
| radius | <code>number</code> | 
| color1 | [<code>Color</code>](#Color) | 
| color2 | [<code>Color</code>](#Color) | 

<a name="DrawCircleV"></a>

## DrawCircleV(center, radius, color) ⇒ <code>undefined</code>
Draw a color-filled circle (Vector version)

**Kind**: global function  

| Param | Type |
| --- | --- |
| center | [<code>Vector2</code>](#Vector2) | 
| radius | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCircleLines"></a>

## DrawCircleLines(centerX, centerY, radius, color) ⇒ <code>undefined</code>
Draw circle outline

**Kind**: global function  

| Param | Type |
| --- | --- |
| centerX | <code>number</code> | 
| centerY | <code>number</code> | 
| radius | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawEllipse"></a>

## DrawEllipse(centerX, centerY, radiusH, radiusV, color) ⇒ <code>undefined</code>
Draw ellipse

**Kind**: global function  

| Param | Type |
| --- | --- |
| centerX | <code>number</code> | 
| centerY | <code>number</code> | 
| radiusH | <code>number</code> | 
| radiusV | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawEllipseLines"></a>

## DrawEllipseLines(centerX, centerY, radiusH, radiusV, color) ⇒ <code>undefined</code>
Draw ellipse outline

**Kind**: global function  

| Param | Type |
| --- | --- |
| centerX | <code>number</code> | 
| centerY | <code>number</code> | 
| radiusH | <code>number</code> | 
| radiusV | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawRing"></a>

## DrawRing(center, innerRadius, outerRadius, startAngle, endAngle, segments, color) ⇒ <code>undefined</code>
Draw ring

**Kind**: global function  

| Param | Type |
| --- | --- |
| center | [<code>Vector2</code>](#Vector2) | 
| innerRadius | <code>number</code> | 
| outerRadius | <code>number</code> | 
| startAngle | <code>number</code> | 
| endAngle | <code>number</code> | 
| segments | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawRingLines"></a>

## DrawRingLines(center, innerRadius, outerRadius, startAngle, endAngle, segments, color) ⇒ <code>undefined</code>
Draw ring outline

**Kind**: global function  

| Param | Type |
| --- | --- |
| center | [<code>Vector2</code>](#Vector2) | 
| innerRadius | <code>number</code> | 
| outerRadius | <code>number</code> | 
| startAngle | <code>number</code> | 
| endAngle | <code>number</code> | 
| segments | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawRectangle"></a>

## DrawRectangle(posX, posY, width, height, color) ⇒ <code>undefined</code>
Draw a color-filled rectangle

**Kind**: global function  

| Param | Type |
| --- | --- |
| posX | <code>number</code> | 
| posY | <code>number</code> | 
| width | <code>number</code> | 
| height | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawRectangleV"></a>

## DrawRectangleV(position, size, color) ⇒ <code>undefined</code>
Draw a color-filled rectangle (Vector version)

**Kind**: global function  

| Param | Type |
| --- | --- |
| position | [<code>Vector2</code>](#Vector2) | 
| size | [<code>Vector2</code>](#Vector2) | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawRectangleRec"></a>

## DrawRectangleRec(rec, color) ⇒ <code>undefined</code>
Draw a color-filled rectangle

**Kind**: global function  

| Param | Type |
| --- | --- |
| rec | [<code>Rectangle</code>](#Rectangle) | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawRectanglePro"></a>

## DrawRectanglePro(rec, origin, rotation, color) ⇒ <code>undefined</code>
Draw a color-filled rectangle with pro parameters

**Kind**: global function  

| Param | Type |
| --- | --- |
| rec | [<code>Rectangle</code>](#Rectangle) | 
| origin | [<code>Vector2</code>](#Vector2) | 
| rotation | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawRectangleGradientV"></a>

## DrawRectangleGradientV(posX, posY, width, height, color1, color2) ⇒ <code>undefined</code>
Draw a vertical-gradient-filled rectangle

**Kind**: global function  

| Param | Type |
| --- | --- |
| posX | <code>number</code> | 
| posY | <code>number</code> | 
| width | <code>number</code> | 
| height | <code>number</code> | 
| color1 | [<code>Color</code>](#Color) | 
| color2 | [<code>Color</code>](#Color) | 

<a name="DrawRectangleGradientH"></a>

## DrawRectangleGradientH(posX, posY, width, height, color1, color2) ⇒ <code>undefined</code>
Draw a horizontal-gradient-filled rectangle

**Kind**: global function  

| Param | Type |
| --- | --- |
| posX | <code>number</code> | 
| posY | <code>number</code> | 
| width | <code>number</code> | 
| height | <code>number</code> | 
| color1 | [<code>Color</code>](#Color) | 
| color2 | [<code>Color</code>](#Color) | 

<a name="DrawRectangleGradientEx"></a>

## DrawRectangleGradientEx(rec, col1, col2, col3, col4) ⇒ <code>undefined</code>
Draw a gradient-filled rectangle with custom vertex colors

**Kind**: global function  

| Param | Type |
| --- | --- |
| rec | [<code>Rectangle</code>](#Rectangle) | 
| col1 | [<code>Color</code>](#Color) | 
| col2 | [<code>Color</code>](#Color) | 
| col3 | [<code>Color</code>](#Color) | 
| col4 | [<code>Color</code>](#Color) | 

<a name="DrawRectangleLines"></a>

## DrawRectangleLines(posX, posY, width, height, color) ⇒ <code>undefined</code>
Draw rectangle outline

**Kind**: global function  

| Param | Type |
| --- | --- |
| posX | <code>number</code> | 
| posY | <code>number</code> | 
| width | <code>number</code> | 
| height | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawRectangleLinesEx"></a>

## DrawRectangleLinesEx(rec, lineThick, color) ⇒ <code>undefined</code>
Draw rectangle outline with extended parameters

**Kind**: global function  

| Param | Type |
| --- | --- |
| rec | [<code>Rectangle</code>](#Rectangle) | 
| lineThick | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawRectangleRounded"></a>

## DrawRectangleRounded(rec, roundness, segments, color) ⇒ <code>undefined</code>
Draw rectangle with rounded edges

**Kind**: global function  

| Param | Type |
| --- | --- |
| rec | [<code>Rectangle</code>](#Rectangle) | 
| roundness | <code>number</code> | 
| segments | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawRectangleRoundedLines"></a>

## DrawRectangleRoundedLines(rec, roundness, segments, lineThick, color) ⇒ <code>undefined</code>
Draw rectangle with rounded edges outline

**Kind**: global function  

| Param | Type |
| --- | --- |
| rec | [<code>Rectangle</code>](#Rectangle) | 
| roundness | <code>number</code> | 
| segments | <code>number</code> | 
| lineThick | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawTriangle"></a>

## DrawTriangle(v1, v2, v3, color) ⇒ <code>undefined</code>
Draw a color-filled triangle (vertex in counter-clockwise order!)

**Kind**: global function  

| Param | Type |
| --- | --- |
| v1 | [<code>Vector2</code>](#Vector2) | 
| v2 | [<code>Vector2</code>](#Vector2) | 
| v3 | [<code>Vector2</code>](#Vector2) | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawTriangleLines"></a>

## DrawTriangleLines(v1, v2, v3, color) ⇒ <code>undefined</code>
Draw triangle outline (vertex in counter-clockwise order!)

**Kind**: global function  

| Param | Type |
| --- | --- |
| v1 | [<code>Vector2</code>](#Vector2) | 
| v2 | [<code>Vector2</code>](#Vector2) | 
| v3 | [<code>Vector2</code>](#Vector2) | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawTriangleFan"></a>

## DrawTriangleFan(points, pointCount, color) ⇒ <code>undefined</code>
Draw a triangle fan defined by points (first vertex is the center)

**Kind**: global function  

| Param | Type |
| --- | --- |
| points | <code>number</code> | 
| pointCount | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawTriangleStrip"></a>

## DrawTriangleStrip(points, pointCount, color) ⇒ <code>undefined</code>
Draw a triangle strip defined by points

**Kind**: global function  

| Param | Type |
| --- | --- |
| points | <code>number</code> | 
| pointCount | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawPoly"></a>

## DrawPoly(center, sides, radius, rotation, color) ⇒ <code>undefined</code>
Draw a regular polygon (Vector version)

**Kind**: global function  

| Param | Type |
| --- | --- |
| center | [<code>Vector2</code>](#Vector2) | 
| sides | <code>number</code> | 
| radius | <code>number</code> | 
| rotation | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawPolyLines"></a>

## DrawPolyLines(center, sides, radius, rotation, color) ⇒ <code>undefined</code>
Draw a polygon outline of n sides

**Kind**: global function  

| Param | Type |
| --- | --- |
| center | [<code>Vector2</code>](#Vector2) | 
| sides | <code>number</code> | 
| radius | <code>number</code> | 
| rotation | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawPolyLinesEx"></a>

## DrawPolyLinesEx(center, sides, radius, rotation, lineThick, color) ⇒ <code>undefined</code>
Draw a polygon outline of n sides with extended parameters

**Kind**: global function  

| Param | Type |
| --- | --- |
| center | [<code>Vector2</code>](#Vector2) | 
| sides | <code>number</code> | 
| radius | <code>number</code> | 
| rotation | <code>number</code> | 
| lineThick | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="CheckCollisionRecs"></a>

## CheckCollisionRecs(rec1, rec2) ⇒ <code>boolean</code>
Check collision between two rectangles

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| rec1 | [<code>Rectangle</code>](#Rectangle) | 
| rec2 | [<code>Rectangle</code>](#Rectangle) | 

<a name="CheckCollisionCircles"></a>

## CheckCollisionCircles(center1, radius1, center2, radius2) ⇒ <code>boolean</code>
Check collision between two circles

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| center1 | [<code>Vector2</code>](#Vector2) | 
| radius1 | <code>number</code> | 
| center2 | [<code>Vector2</code>](#Vector2) | 
| radius2 | <code>number</code> | 

<a name="CheckCollisionCircleRec"></a>

## CheckCollisionCircleRec(center, radius, rec) ⇒ <code>boolean</code>
Check collision between circle and rectangle

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| center | [<code>Vector2</code>](#Vector2) | 
| radius | <code>number</code> | 
| rec | [<code>Rectangle</code>](#Rectangle) | 

<a name="CheckCollisionPointRec"></a>

## CheckCollisionPointRec(point, rec) ⇒ <code>boolean</code>
Check if point is inside rectangle

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| point | [<code>Vector2</code>](#Vector2) | 
| rec | [<code>Rectangle</code>](#Rectangle) | 

<a name="CheckCollisionPointCircle"></a>

## CheckCollisionPointCircle(point, center, radius) ⇒ <code>boolean</code>
Check if point is inside circle

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| point | [<code>Vector2</code>](#Vector2) | 
| center | [<code>Vector2</code>](#Vector2) | 
| radius | <code>number</code> | 

<a name="CheckCollisionPointTriangle"></a>

## CheckCollisionPointTriangle(point, p1, p2, p3) ⇒ <code>boolean</code>
Check if point is inside a triangle

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| point | [<code>Vector2</code>](#Vector2) | 
| p1 | [<code>Vector2</code>](#Vector2) | 
| p2 | [<code>Vector2</code>](#Vector2) | 
| p3 | [<code>Vector2</code>](#Vector2) | 

<a name="CheckCollisionLines"></a>

## CheckCollisionLines(startPos1, endPos1, startPos2, endPos2, collisionPoint) ⇒ <code>boolean</code>
Check the collision between two lines defined by two points each, returns collision point by reference

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| startPos1 | [<code>Vector2</code>](#Vector2) | 
| endPos1 | [<code>Vector2</code>](#Vector2) | 
| startPos2 | [<code>Vector2</code>](#Vector2) | 
| endPos2 | [<code>Vector2</code>](#Vector2) | 
| collisionPoint | <code>number</code> | 

<a name="CheckCollisionPointLine"></a>

## CheckCollisionPointLine(point, p1, p2, threshold) ⇒ <code>boolean</code>
Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold]

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| point | [<code>Vector2</code>](#Vector2) | 
| p1 | [<code>Vector2</code>](#Vector2) | 
| p2 | [<code>Vector2</code>](#Vector2) | 
| threshold | <code>number</code> | 

<a name="GetCollisionRec"></a>

## GetCollisionRec(rec1, rec2) ⇒ [<code>Rectangle</code>](#Rectangle)
Get collision rectangle for two rectangles collision

**Kind**: global function  
**Returns**: [<code>Rectangle</code>](#Rectangle) - The resulting Rectangle.  

| Param | Type |
| --- | --- |
| rec1 | [<code>Rectangle</code>](#Rectangle) | 
| rec2 | [<code>Rectangle</code>](#Rectangle) | 

<a name="LoadImage"></a>

## LoadImage(fileName) ⇒ <code>Image</code>
Load image from file into CPU memory (RAM)

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 

<a name="LoadImageRaw"></a>

## LoadImageRaw(fileName, width, height, format, headerSize) ⇒ <code>Image</code>
Load image from RAW file data

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 
| width | <code>number</code> | 
| height | <code>number</code> | 
| format | <code>number</code> | 
| headerSize | <code>number</code> | 

<a name="LoadImageAnim"></a>

## LoadImageAnim(fileName, frames) ⇒ <code>Image</code>
Load image sequence from file (frames appended to image.data)

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 
| frames | <code>number</code> | 

<a name="LoadImageFromMemory"></a>

## LoadImageFromMemory(fileType, fileData, dataSize) ⇒ <code>Image</code>
Load image from memory buffer, fileType refers to extension: i.e. '.png'

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| fileType | <code>string</code> | 
| fileData | <code>Buffer</code> | 
| dataSize | <code>number</code> | 

<a name="LoadImageFromTexture"></a>

## LoadImageFromTexture(texture) ⇒ <code>Image</code>
Load image from GPU texture data

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 

<a name="LoadImageFromScreen"></a>

## LoadImageFromScreen() ⇒ <code>Image</code>
Load image from screen buffer and (screenshot)

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  
<a name="UnloadImage"></a>

## UnloadImage(image) ⇒ <code>undefined</code>
Unload image from CPU memory (RAM)

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 

<a name="ExportImage"></a>

## ExportImage(image, fileName) ⇒ <code>boolean</code>
Export image data to file, returns true on success

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| fileName | <code>string</code> | 

<a name="ExportImageAsCode"></a>

## ExportImageAsCode(image, fileName) ⇒ <code>boolean</code>
Export image as code file defining an array of bytes, returns true on success

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| fileName | <code>string</code> | 

<a name="GenImageColor"></a>

## GenImageColor(width, height, color) ⇒ <code>Image</code>
Generate image: plain color

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="GenImageGradientV"></a>

## GenImageGradientV(width, height, top, bottom) ⇒ <code>Image</code>
Generate image: vertical gradient

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 
| top | [<code>Color</code>](#Color) | 
| bottom | [<code>Color</code>](#Color) | 

<a name="GenImageGradientH"></a>

## GenImageGradientH(width, height, left, right) ⇒ <code>Image</code>
Generate image: horizontal gradient

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 
| left | [<code>Color</code>](#Color) | 
| right | [<code>Color</code>](#Color) | 

<a name="GenImageGradientRadial"></a>

## GenImageGradientRadial(width, height, density, inner, outer) ⇒ <code>Image</code>
Generate image: radial gradient

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 
| density | <code>number</code> | 
| inner | [<code>Color</code>](#Color) | 
| outer | [<code>Color</code>](#Color) | 

<a name="GenImageChecked"></a>

## GenImageChecked(width, height, checksX, checksY, col1, col2) ⇒ <code>Image</code>
Generate image: checked

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 
| checksX | <code>number</code> | 
| checksY | <code>number</code> | 
| col1 | [<code>Color</code>](#Color) | 
| col2 | [<code>Color</code>](#Color) | 

<a name="GenImageWhiteNoise"></a>

## GenImageWhiteNoise(width, height, factor) ⇒ <code>Image</code>
Generate image: white noise

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 
| factor | <code>number</code> | 

<a name="GenImageCellular"></a>

## GenImageCellular(width, height, tileSize) ⇒ <code>Image</code>
Generate image: cellular algorithm, bigger tileSize means bigger cells

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 
| tileSize | <code>number</code> | 

<a name="ImageCopy"></a>

## ImageCopy(image) ⇒ <code>Image</code>
Create an image duplicate (useful for transformations)

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 

<a name="ImageFromImage"></a>

## ImageFromImage(image, rec) ⇒ <code>Image</code>
Create an image from another image piece

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| rec | [<code>Rectangle</code>](#Rectangle) | 

<a name="ImageText"></a>

## ImageText(text, fontSize, color) ⇒ <code>Image</code>
Create an image from text (default font)

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| fontSize | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageTextEx"></a>

## ImageTextEx(font, text, fontSize, spacing, tint) ⇒ <code>Image</code>
Create an image from text (custom sprite font)

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| font | <code>Font</code> | 
| text | <code>string</code> | 
| fontSize | <code>number</code> | 
| spacing | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="LoadImageColors"></a>

## LoadImageColors(image) ⇒ <code>number</code>
Load color data from image as a Color array (RGBA - 32bit)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting Color *.  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 

<a name="LoadImagePalette"></a>

## LoadImagePalette(image, maxPaletteSize, colorCount) ⇒ <code>number</code>
Load colors palette from image as a Color array (RGBA - 32bit)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting Color *.  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| maxPaletteSize | <code>number</code> | 
| colorCount | <code>number</code> | 

<a name="UnloadImageColors"></a>

## UnloadImageColors(colors) ⇒ <code>undefined</code>
Unload color data loaded with LoadImageColors()

**Kind**: global function  

| Param | Type |
| --- | --- |
| colors | <code>number</code> | 

<a name="UnloadImagePalette"></a>

## UnloadImagePalette(colors) ⇒ <code>undefined</code>
Unload colors palette loaded with LoadImagePalette()

**Kind**: global function  

| Param | Type |
| --- | --- |
| colors | <code>number</code> | 

<a name="GetImageAlphaBorder"></a>

## GetImageAlphaBorder(image, threshold) ⇒ [<code>Rectangle</code>](#Rectangle)
Get image alpha border rectangle

**Kind**: global function  
**Returns**: [<code>Rectangle</code>](#Rectangle) - The resulting Rectangle.  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| threshold | <code>number</code> | 

<a name="GetImageColor"></a>

## GetImageColor(image, x, y) ⇒ [<code>Color</code>](#Color)
Get image pixel color at (x, y) position

**Kind**: global function  
**Returns**: [<code>Color</code>](#Color) - The resulting Color.  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| x | <code>number</code> | 
| y | <code>number</code> | 

<a name="LoadTexture"></a>

## LoadTexture(fileName) ⇒ <code>Texture2D</code>
Load texture from file into GPU memory (VRAM)

**Kind**: global function  
**Returns**: <code>Texture2D</code> - The resulting Texture2D.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 

<a name="LoadTextureFromImage"></a>

## LoadTextureFromImage(image) ⇒ <code>Texture2D</code>
Load texture from image data

**Kind**: global function  
**Returns**: <code>Texture2D</code> - The resulting Texture2D.  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 

<a name="LoadTextureCubemap"></a>

## LoadTextureCubemap(image, layout) ⇒ <code>TextureCubemap</code>
Load cubemap from image, multiple image cubemap layouts supported

**Kind**: global function  
**Returns**: <code>TextureCubemap</code> - The resulting TextureCubemap.  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| layout | <code>number</code> | 

<a name="LoadRenderTexture"></a>

## LoadRenderTexture(width, height) ⇒ <code>RenderTexture2D</code>
Load texture for rendering (framebuffer)

**Kind**: global function  
**Returns**: <code>RenderTexture2D</code> - The resulting RenderTexture2D.  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 

<a name="UnloadTexture"></a>

## UnloadTexture(texture) ⇒ <code>undefined</code>
Unload texture from GPU memory (VRAM)

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 

<a name="UnloadRenderTexture"></a>

## UnloadRenderTexture(target) ⇒ <code>undefined</code>
Unload render texture from GPU memory (VRAM)

**Kind**: global function  

| Param | Type |
| --- | --- |
| target | <code>RenderTexture2D</code> | 

<a name="UpdateTexture"></a>

## UpdateTexture(texture, pixels) ⇒ <code>undefined</code>
Update GPU texture with new data

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| pixels | <code>number</code> | 

<a name="UpdateTextureRec"></a>

## UpdateTextureRec(texture, rec, pixels) ⇒ <code>undefined</code>
Update GPU texture rectangle with new data

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| rec | [<code>Rectangle</code>](#Rectangle) | 
| pixels | <code>number</code> | 

<a name="SetTextureFilter"></a>

## SetTextureFilter(texture, filter) ⇒ <code>undefined</code>
Set texture scaling filter mode

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| filter | <code>number</code> | 

<a name="SetTextureWrap"></a>

## SetTextureWrap(texture, wrap) ⇒ <code>undefined</code>
Set texture wrapping mode

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| wrap | <code>number</code> | 

<a name="DrawTexture"></a>

## DrawTexture(texture, posX, posY, tint) ⇒ <code>undefined</code>
Draw a Texture2D

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| posX | <code>number</code> | 
| posY | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawTextureV"></a>

## DrawTextureV(texture, position, tint) ⇒ <code>undefined</code>
Draw a Texture2D with position defined as Vector2

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| position | [<code>Vector2</code>](#Vector2) | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawTextureEx"></a>

## DrawTextureEx(texture, position, rotation, scale, tint) ⇒ <code>undefined</code>
Draw a Texture2D with extended parameters

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| position | [<code>Vector2</code>](#Vector2) | 
| rotation | <code>number</code> | 
| scale | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawTextureRec"></a>

## DrawTextureRec(texture, source, position, tint) ⇒ <code>undefined</code>
Draw a part of a texture defined by a rectangle

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| source | [<code>Rectangle</code>](#Rectangle) | 
| position | [<code>Vector2</code>](#Vector2) | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawTextureQuad"></a>

## DrawTextureQuad(texture, tiling, offset, quad, tint) ⇒ <code>undefined</code>
Draw texture quad with tiling and offset parameters

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| tiling | [<code>Vector2</code>](#Vector2) | 
| offset | [<code>Vector2</code>](#Vector2) | 
| quad | [<code>Rectangle</code>](#Rectangle) | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawTextureTiled"></a>

## DrawTextureTiled(texture, source, dest, origin, rotation, scale, tint) ⇒ <code>undefined</code>
Draw part of a texture (defined by a rectangle) with rotation and scale tiled into dest.

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| source | [<code>Rectangle</code>](#Rectangle) | 
| dest | [<code>Rectangle</code>](#Rectangle) | 
| origin | [<code>Vector2</code>](#Vector2) | 
| rotation | <code>number</code> | 
| scale | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawTexturePro"></a>

## DrawTexturePro(texture, source, dest, origin, rotation, tint) ⇒ <code>undefined</code>
Draw a part of a texture defined by a rectangle with 'pro' parameters

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| source | [<code>Rectangle</code>](#Rectangle) | 
| dest | [<code>Rectangle</code>](#Rectangle) | 
| origin | [<code>Vector2</code>](#Vector2) | 
| rotation | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawTextureNPatch"></a>

## DrawTextureNPatch(texture, nPatchInfo, dest, origin, rotation, tint) ⇒ <code>undefined</code>
Draws a texture (or part of it) that stretches or shrinks nicely

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| nPatchInfo | <code>NPatchInfo</code> | 
| dest | [<code>Rectangle</code>](#Rectangle) | 
| origin | [<code>Vector2</code>](#Vector2) | 
| rotation | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawTexturePoly"></a>

## DrawTexturePoly(texture, center, points, texcoords, pointCount, tint) ⇒ <code>undefined</code>
Draw a textured polygon

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| center | [<code>Vector2</code>](#Vector2) | 
| points | <code>number</code> | 
| texcoords | <code>number</code> | 
| pointCount | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="Fade"></a>

## Fade(color, alpha) ⇒ [<code>Color</code>](#Color)
Get color with alpha applied, alpha goes from 0.0f to 1.0f

**Kind**: global function  
**Returns**: [<code>Color</code>](#Color) - The resulting Color.  

| Param | Type |
| --- | --- |
| color | [<code>Color</code>](#Color) | 
| alpha | <code>number</code> | 

<a name="ColorToInt"></a>

## ColorToInt(color) ⇒ <code>number</code>
Get hexadecimal value for a Color

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| color | [<code>Color</code>](#Color) | 

<a name="ColorNormalize"></a>

## ColorNormalize(color) ⇒ [<code>Vector4</code>](#Vector4)
Get Color normalized as float [0..1]

**Kind**: global function  
**Returns**: [<code>Vector4</code>](#Vector4) - The resulting Vector4.  

| Param | Type |
| --- | --- |
| color | [<code>Color</code>](#Color) | 

<a name="ColorFromNormalized"></a>

## ColorFromNormalized(normalized) ⇒ [<code>Color</code>](#Color)
Get Color from normalized values [0..1]

**Kind**: global function  
**Returns**: [<code>Color</code>](#Color) - The resulting Color.  

| Param | Type |
| --- | --- |
| normalized | [<code>Vector4</code>](#Vector4) | 

<a name="ColorToHSV"></a>

## ColorToHSV(color) ⇒ [<code>Vector3</code>](#Vector3)
Get HSV values for a Color, hue [0..360], saturation/value [0..1]

**Kind**: global function  
**Returns**: [<code>Vector3</code>](#Vector3) - The resulting Vector3.  

| Param | Type |
| --- | --- |
| color | [<code>Color</code>](#Color) | 

<a name="ColorFromHSV"></a>

## ColorFromHSV(hue, saturation, value) ⇒ [<code>Color</code>](#Color)
Get a Color from HSV values, hue [0..360], saturation/value [0..1]

**Kind**: global function  
**Returns**: [<code>Color</code>](#Color) - The resulting Color.  

| Param | Type |
| --- | --- |
| hue | <code>number</code> | 
| saturation | <code>number</code> | 
| value | <code>number</code> | 

<a name="ColorAlpha"></a>

## ColorAlpha(color, alpha) ⇒ [<code>Color</code>](#Color)
Get color with alpha applied, alpha goes from 0.0f to 1.0f

**Kind**: global function  
**Returns**: [<code>Color</code>](#Color) - The resulting Color.  

| Param | Type |
| --- | --- |
| color | [<code>Color</code>](#Color) | 
| alpha | <code>number</code> | 

<a name="ColorAlphaBlend"></a>

## ColorAlphaBlend(dst, src, tint) ⇒ [<code>Color</code>](#Color)
Get src alpha-blended into dst color with tint

**Kind**: global function  
**Returns**: [<code>Color</code>](#Color) - The resulting Color.  

| Param | Type |
| --- | --- |
| dst | [<code>Color</code>](#Color) | 
| src | [<code>Color</code>](#Color) | 
| tint | [<code>Color</code>](#Color) | 

<a name="GetColor"></a>

## GetColor(hexValue) ⇒ [<code>Color</code>](#Color)
Get Color structure from hexadecimal value

**Kind**: global function  
**Returns**: [<code>Color</code>](#Color) - The resulting Color.  

| Param | Type |
| --- | --- |
| hexValue | <code>number</code> | 

<a name="GetPixelColor"></a>

## GetPixelColor(srcPtr, format) ⇒ [<code>Color</code>](#Color)
Get Color from a source pixel pointer of certain format

**Kind**: global function  
**Returns**: [<code>Color</code>](#Color) - The resulting Color.  

| Param | Type |
| --- | --- |
| srcPtr | <code>number</code> | 
| format | <code>number</code> | 

<a name="SetPixelColor"></a>

## SetPixelColor(dstPtr, color, format) ⇒ <code>undefined</code>
Set color formatted into destination pixel pointer

**Kind**: global function  

| Param | Type |
| --- | --- |
| dstPtr | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 
| format | <code>number</code> | 

<a name="GetPixelDataSize"></a>

## GetPixelDataSize(width, height, format) ⇒ <code>number</code>
Get pixel data size in bytes for certain format

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 
| format | <code>number</code> | 

<a name="GetFontDefault"></a>

## GetFontDefault() ⇒ <code>Font</code>
Get the default Font

**Kind**: global function  
**Returns**: <code>Font</code> - The resulting Font.  
<a name="LoadFont"></a>

## LoadFont(fileName) ⇒ <code>Font</code>
Load font from file into GPU memory (VRAM)

**Kind**: global function  
**Returns**: <code>Font</code> - The resulting Font.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 

<a name="LoadFontEx"></a>

## LoadFontEx(fileName, fontSize, fontChars, glyphCount) ⇒ <code>Font</code>
Load font from file with extended parameters, use NULL for fontChars and 0 for glyphCount to load the default character set

**Kind**: global function  
**Returns**: <code>Font</code> - The resulting Font.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 
| fontSize | <code>number</code> | 
| fontChars | <code>number</code> | 
| glyphCount | <code>number</code> | 

<a name="LoadFontFromImage"></a>

## LoadFontFromImage(image, key, firstChar) ⇒ <code>Font</code>
Load font from Image (XNA style)

**Kind**: global function  
**Returns**: <code>Font</code> - The resulting Font.  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| key | [<code>Color</code>](#Color) | 
| firstChar | <code>number</code> | 

<a name="LoadFontFromMemory"></a>

## LoadFontFromMemory(fileType, fileData, dataSize, fontSize, fontChars, glyphCount) ⇒ <code>Font</code>
Load font from memory buffer, fileType refers to extension: i.e. '.ttf'

**Kind**: global function  
**Returns**: <code>Font</code> - The resulting Font.  

| Param | Type |
| --- | --- |
| fileType | <code>string</code> | 
| fileData | <code>Buffer</code> | 
| dataSize | <code>number</code> | 
| fontSize | <code>number</code> | 
| fontChars | <code>number</code> | 
| glyphCount | <code>number</code> | 

<a name="LoadFontData"></a>

## LoadFontData(fileData, dataSize, fontSize, fontChars, glyphCount, type) ⇒ <code>number</code>
Load font data for further use

**Kind**: global function  
**Returns**: <code>number</code> - The resulting GlyphInfo *.  

| Param | Type |
| --- | --- |
| fileData | <code>Buffer</code> | 
| dataSize | <code>number</code> | 
| fontSize | <code>number</code> | 
| fontChars | <code>number</code> | 
| glyphCount | <code>number</code> | 
| type | <code>number</code> | 

<a name="GenImageFontAtlas"></a>

## GenImageFontAtlas(chars, recs, glyphCount, fontSize, padding, packMethod) ⇒ <code>Image</code>
Generate image font atlas using chars info

**Kind**: global function  
**Returns**: <code>Image</code> - The resulting Image.  

| Param | Type |
| --- | --- |
| chars | <code>number</code> | 
| recs | <code>number</code> | 
| glyphCount | <code>number</code> | 
| fontSize | <code>number</code> | 
| padding | <code>number</code> | 
| packMethod | <code>number</code> | 

<a name="UnloadFontData"></a>

## UnloadFontData(chars, glyphCount) ⇒ <code>undefined</code>
Unload font chars info data (RAM)

**Kind**: global function  

| Param | Type |
| --- | --- |
| chars | <code>number</code> | 
| glyphCount | <code>number</code> | 

<a name="UnloadFont"></a>

## UnloadFont(font) ⇒ <code>undefined</code>
Unload font from GPU memory (VRAM)

**Kind**: global function  

| Param | Type |
| --- | --- |
| font | <code>Font</code> | 

<a name="DrawFPS"></a>

## DrawFPS(posX, posY) ⇒ <code>undefined</code>
Draw current FPS

**Kind**: global function  

| Param | Type |
| --- | --- |
| posX | <code>number</code> | 
| posY | <code>number</code> | 

<a name="DrawText"></a>

## DrawText(text, posX, posY, fontSize, color) ⇒ <code>undefined</code>
Draw text (using default font)

**Kind**: global function  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| posX | <code>number</code> | 
| posY | <code>number</code> | 
| fontSize | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawTextEx"></a>

## DrawTextEx(font, text, position, fontSize, spacing, tint) ⇒ <code>undefined</code>
Draw text using font and additional parameters

**Kind**: global function  

| Param | Type |
| --- | --- |
| font | <code>Font</code> | 
| text | <code>string</code> | 
| position | [<code>Vector2</code>](#Vector2) | 
| fontSize | <code>number</code> | 
| spacing | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawTextPro"></a>

## DrawTextPro(font, text, position, origin, rotation, fontSize, spacing, tint) ⇒ <code>undefined</code>
Draw text using Font and pro parameters (rotation)

**Kind**: global function  

| Param | Type |
| --- | --- |
| font | <code>Font</code> | 
| text | <code>string</code> | 
| position | [<code>Vector2</code>](#Vector2) | 
| origin | [<code>Vector2</code>](#Vector2) | 
| rotation | <code>number</code> | 
| fontSize | <code>number</code> | 
| spacing | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawTextCodepoint"></a>

## DrawTextCodepoint(font, codepoint, position, fontSize, tint) ⇒ <code>undefined</code>
Draw one character (codepoint)

**Kind**: global function  

| Param | Type |
| --- | --- |
| font | <code>Font</code> | 
| codepoint | <code>number</code> | 
| position | [<code>Vector2</code>](#Vector2) | 
| fontSize | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="MeasureText"></a>

## MeasureText(text, fontSize) ⇒ <code>number</code>
Measure string width for default font

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| fontSize | <code>number</code> | 

<a name="MeasureTextEx"></a>

## MeasureTextEx(font, text, fontSize, spacing) ⇒ [<code>Vector2</code>](#Vector2)
Measure string size for Font

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The resulting Vector2.  

| Param | Type |
| --- | --- |
| font | <code>Font</code> | 
| text | <code>string</code> | 
| fontSize | <code>number</code> | 
| spacing | <code>number</code> | 

<a name="GetGlyphIndex"></a>

## GetGlyphIndex(font, codepoint) ⇒ <code>number</code>
Get glyph index position in font for a codepoint (unicode character), fallback to '?' if not found

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| font | <code>Font</code> | 
| codepoint | <code>number</code> | 

<a name="GetGlyphInfo"></a>

## GetGlyphInfo(font, codepoint) ⇒ <code>GlyphInfo</code>
Get glyph font info data for a codepoint (unicode character), fallback to '?' if not found

**Kind**: global function  
**Returns**: <code>GlyphInfo</code> - The resulting GlyphInfo.  

| Param | Type |
| --- | --- |
| font | <code>Font</code> | 
| codepoint | <code>number</code> | 

<a name="GetGlyphAtlasRec"></a>

## GetGlyphAtlasRec(font, codepoint) ⇒ [<code>Rectangle</code>](#Rectangle)
Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to '?' if not found

**Kind**: global function  
**Returns**: [<code>Rectangle</code>](#Rectangle) - The resulting Rectangle.  

| Param | Type |
| --- | --- |
| font | <code>Font</code> | 
| codepoint | <code>number</code> | 

<a name="LoadCodepoints"></a>

## LoadCodepoints(text, count) ⇒ <code>number</code>
Load all codepoints from a UTF-8 text string, codepoints count returned by parameter

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int *.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| count | <code>number</code> | 

<a name="UnloadCodepoints"></a>

## UnloadCodepoints(codepoints) ⇒ <code>undefined</code>
Unload codepoints data from memory

**Kind**: global function  

| Param | Type |
| --- | --- |
| codepoints | <code>number</code> | 

<a name="GetCodepointCount"></a>

## GetCodepointCount(text) ⇒ <code>number</code>
Get total number of codepoints in a UTF-8 encoded string

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="GetCodepoint"></a>

## GetCodepoint(text, bytesProcessed) ⇒ <code>number</code>
Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| bytesProcessed | <code>number</code> | 

<a name="CodepointToUTF8"></a>

## CodepointToUTF8(codepoint, byteSize) ⇒ <code>string</code>
Encode one codepoint into UTF-8 byte array (array length returned as parameter)

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  

| Param | Type |
| --- | --- |
| codepoint | <code>number</code> | 
| byteSize | <code>number</code> | 

<a name="TextCodepointsToUTF8"></a>

## TextCodepointsToUTF8(codepoints, length) ⇒ <code>string</code>
Encode text as codepoints array into UTF-8 text string (WARNING: memory must be freed!)

**Kind**: global function  
**Returns**: <code>string</code> - The resulting char *.  

| Param | Type |
| --- | --- |
| codepoints | <code>number</code> | 
| length | <code>number</code> | 

<a name="TextCopy"></a>

## TextCopy(dst, src) ⇒ <code>number</code>
Copy one string to another, returns bytes copied

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| dst | <code>string</code> | 
| src | <code>string</code> | 

<a name="TextIsEqual"></a>

## TextIsEqual(text1, text2) ⇒ <code>boolean</code>
Check if two text string are equal

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| text1 | <code>string</code> | 
| text2 | <code>string</code> | 

<a name="TextLength"></a>

## TextLength(text) ⇒ <code>number</code>
Get text length, checks for '\0' ending

**Kind**: global function  
**Returns**: <code>number</code> - The resulting unsigned int.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="TextSubtext"></a>

## TextSubtext(text, position, length) ⇒ <code>string</code>
Get a piece of a text string

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| position | <code>number</code> | 
| length | <code>number</code> | 

<a name="TextReplace"></a>

## TextReplace(text, replace, by) ⇒ <code>string</code>
Replace text string (WARNING: memory must be freed!)

**Kind**: global function  
**Returns**: <code>string</code> - The resulting char *.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| replace | <code>string</code> | 
| by | <code>string</code> | 

<a name="TextInsert"></a>

## TextInsert(text, insert, position) ⇒ <code>string</code>
Insert text in a position (WARNING: memory must be freed!)

**Kind**: global function  
**Returns**: <code>string</code> - The resulting char *.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| insert | <code>string</code> | 
| position | <code>number</code> | 

<a name="TextJoin"></a>

## TextJoin(textList, count, delimiter) ⇒ <code>string</code>
Join text strings with delimiter

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  

| Param | Type |
| --- | --- |
| textList | <code>number</code> | 
| count | <code>number</code> | 
| delimiter | <code>string</code> | 

<a name="TextSplit"></a>

## TextSplit(text, delimiter, count) ⇒ <code>number</code>
Split text into multiple strings

**Kind**: global function  
**Returns**: <code>number</code> - The resulting const char **.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| delimiter | <code>string</code> | 
| count | <code>number</code> | 

<a name="TextAppend"></a>

## TextAppend(text, append, position) ⇒ <code>undefined</code>
Append text at specific position and move cursor!

**Kind**: global function  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| append | <code>string</code> | 
| position | <code>number</code> | 

<a name="TextFindIndex"></a>

## TextFindIndex(text, find) ⇒ <code>number</code>
Find first text occurrence within a string

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 
| find | <code>string</code> | 

<a name="TextToUpper"></a>

## TextToUpper(text) ⇒ <code>string</code>
Get upper case version of provided string

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="TextToLower"></a>

## TextToLower(text) ⇒ <code>string</code>
Get lower case version of provided string

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="TextToPascal"></a>

## TextToPascal(text) ⇒ <code>string</code>
Get Pascal case notation version of provided string

**Kind**: global function  
**Returns**: <code>string</code> - The resulting const char *.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="TextToInteger"></a>

## TextToInteger(text) ⇒ <code>number</code>
Get integer value from text (negative values not supported)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="DrawLine3D"></a>

## DrawLine3D(startPos, endPos, color) ⇒ <code>undefined</code>
Draw a line in 3D world space

**Kind**: global function  

| Param | Type |
| --- | --- |
| startPos | [<code>Vector3</code>](#Vector3) | 
| endPos | [<code>Vector3</code>](#Vector3) | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawPoint3D"></a>

## DrawPoint3D(position, color) ⇒ <code>undefined</code>
Draw a point in 3D space, actually a small line

**Kind**: global function  

| Param | Type |
| --- | --- |
| position | [<code>Vector3</code>](#Vector3) | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCircle3D"></a>

## DrawCircle3D(center, radius, rotationAxis, rotationAngle, color) ⇒ <code>undefined</code>
Draw a circle in 3D world space

**Kind**: global function  

| Param | Type |
| --- | --- |
| center | [<code>Vector3</code>](#Vector3) | 
| radius | <code>number</code> | 
| rotationAxis | [<code>Vector3</code>](#Vector3) | 
| rotationAngle | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawTriangle3D"></a>

## DrawTriangle3D(v1, v2, v3, color) ⇒ <code>undefined</code>
Draw a color-filled triangle (vertex in counter-clockwise order!)

**Kind**: global function  

| Param | Type |
| --- | --- |
| v1 | [<code>Vector3</code>](#Vector3) | 
| v2 | [<code>Vector3</code>](#Vector3) | 
| v3 | [<code>Vector3</code>](#Vector3) | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawTriangleStrip3D"></a>

## DrawTriangleStrip3D(points, pointCount, color) ⇒ <code>undefined</code>
Draw a triangle strip defined by points

**Kind**: global function  

| Param | Type |
| --- | --- |
| points | <code>number</code> | 
| pointCount | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCube"></a>

## DrawCube(position, width, height, length, color) ⇒ <code>undefined</code>
Draw cube

**Kind**: global function  

| Param | Type |
| --- | --- |
| position | [<code>Vector3</code>](#Vector3) | 
| width | <code>number</code> | 
| height | <code>number</code> | 
| length | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCubeV"></a>

## DrawCubeV(position, size, color) ⇒ <code>undefined</code>
Draw cube (Vector version)

**Kind**: global function  

| Param | Type |
| --- | --- |
| position | [<code>Vector3</code>](#Vector3) | 
| size | [<code>Vector3</code>](#Vector3) | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCubeWires"></a>

## DrawCubeWires(position, width, height, length, color) ⇒ <code>undefined</code>
Draw cube wires

**Kind**: global function  

| Param | Type |
| --- | --- |
| position | [<code>Vector3</code>](#Vector3) | 
| width | <code>number</code> | 
| height | <code>number</code> | 
| length | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCubeWiresV"></a>

## DrawCubeWiresV(position, size, color) ⇒ <code>undefined</code>
Draw cube wires (Vector version)

**Kind**: global function  

| Param | Type |
| --- | --- |
| position | [<code>Vector3</code>](#Vector3) | 
| size | [<code>Vector3</code>](#Vector3) | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCubeTexture"></a>

## DrawCubeTexture(texture, position, width, height, length, color) ⇒ <code>undefined</code>
Draw cube textured

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| position | [<code>Vector3</code>](#Vector3) | 
| width | <code>number</code> | 
| height | <code>number</code> | 
| length | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCubeTextureRec"></a>

## DrawCubeTextureRec(texture, source, position, width, height, length, color) ⇒ <code>undefined</code>
Draw cube with a region of a texture

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 
| source | [<code>Rectangle</code>](#Rectangle) | 
| position | [<code>Vector3</code>](#Vector3) | 
| width | <code>number</code> | 
| height | <code>number</code> | 
| length | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawSphere"></a>

## DrawSphere(centerPos, radius, color) ⇒ <code>undefined</code>
Draw sphere

**Kind**: global function  

| Param | Type |
| --- | --- |
| centerPos | [<code>Vector3</code>](#Vector3) | 
| radius | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawSphereEx"></a>

## DrawSphereEx(centerPos, radius, rings, slices, color) ⇒ <code>undefined</code>
Draw sphere with extended parameters

**Kind**: global function  

| Param | Type |
| --- | --- |
| centerPos | [<code>Vector3</code>](#Vector3) | 
| radius | <code>number</code> | 
| rings | <code>number</code> | 
| slices | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawSphereWires"></a>

## DrawSphereWires(centerPos, radius, rings, slices, color) ⇒ <code>undefined</code>
Draw sphere wires

**Kind**: global function  

| Param | Type |
| --- | --- |
| centerPos | [<code>Vector3</code>](#Vector3) | 
| radius | <code>number</code> | 
| rings | <code>number</code> | 
| slices | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCylinder"></a>

## DrawCylinder(position, radiusTop, radiusBottom, height, slices, color) ⇒ <code>undefined</code>
Draw a cylinder/cone

**Kind**: global function  

| Param | Type |
| --- | --- |
| position | [<code>Vector3</code>](#Vector3) | 
| radiusTop | <code>number</code> | 
| radiusBottom | <code>number</code> | 
| height | <code>number</code> | 
| slices | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCylinderEx"></a>

## DrawCylinderEx(startPos, endPos, startRadius, endRadius, sides, color) ⇒ <code>undefined</code>
Draw a cylinder with base at startPos and top at endPos

**Kind**: global function  

| Param | Type |
| --- | --- |
| startPos | [<code>Vector3</code>](#Vector3) | 
| endPos | [<code>Vector3</code>](#Vector3) | 
| startRadius | <code>number</code> | 
| endRadius | <code>number</code> | 
| sides | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCylinderWires"></a>

## DrawCylinderWires(position, radiusTop, radiusBottom, height, slices, color) ⇒ <code>undefined</code>
Draw a cylinder/cone wires

**Kind**: global function  

| Param | Type |
| --- | --- |
| position | [<code>Vector3</code>](#Vector3) | 
| radiusTop | <code>number</code> | 
| radiusBottom | <code>number</code> | 
| height | <code>number</code> | 
| slices | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawCylinderWiresEx"></a>

## DrawCylinderWiresEx(startPos, endPos, startRadius, endRadius, sides, color) ⇒ <code>undefined</code>
Draw a cylinder wires with base at startPos and top at endPos

**Kind**: global function  

| Param | Type |
| --- | --- |
| startPos | [<code>Vector3</code>](#Vector3) | 
| endPos | [<code>Vector3</code>](#Vector3) | 
| startRadius | <code>number</code> | 
| endRadius | <code>number</code> | 
| sides | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawPlane"></a>

## DrawPlane(centerPos, size, color) ⇒ <code>undefined</code>
Draw a plane XZ

**Kind**: global function  

| Param | Type |
| --- | --- |
| centerPos | [<code>Vector3</code>](#Vector3) | 
| size | [<code>Vector2</code>](#Vector2) | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawRay"></a>

## DrawRay(ray, color) ⇒ <code>undefined</code>
Draw a ray line

**Kind**: global function  

| Param | Type |
| --- | --- |
| ray | <code>Ray</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawGrid"></a>

## DrawGrid(slices, spacing) ⇒ <code>undefined</code>
Draw a grid (centered at (0, 0, 0))

**Kind**: global function  

| Param | Type |
| --- | --- |
| slices | <code>number</code> | 
| spacing | <code>number</code> | 

<a name="LoadModel"></a>

## LoadModel(fileName) ⇒ <code>Model</code>
Load model from files (meshes and materials)

**Kind**: global function  
**Returns**: <code>Model</code> - The resulting Model.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 

<a name="LoadModelFromMesh"></a>

## LoadModelFromMesh(mesh) ⇒ <code>Model</code>
Load model from generated mesh (default material)

**Kind**: global function  
**Returns**: <code>Model</code> - The resulting Model.  

| Param | Type |
| --- | --- |
| mesh | <code>Mesh</code> | 

<a name="UnloadModel"></a>

## UnloadModel(model) ⇒ <code>undefined</code>
Unload model (including meshes) from memory (RAM and/or VRAM)

**Kind**: global function  

| Param | Type |
| --- | --- |
| model | <code>Model</code> | 

<a name="UnloadModelKeepMeshes"></a>

## UnloadModelKeepMeshes(model) ⇒ <code>undefined</code>
Unload model (but not meshes) from memory (RAM and/or VRAM)

**Kind**: global function  

| Param | Type |
| --- | --- |
| model | <code>Model</code> | 

<a name="GetModelBoundingBox"></a>

## GetModelBoundingBox(model) ⇒ <code>BoundingBox</code>
Compute model bounding box limits (considers all meshes)

**Kind**: global function  
**Returns**: <code>BoundingBox</code> - The resulting BoundingBox.  

| Param | Type |
| --- | --- |
| model | <code>Model</code> | 

<a name="DrawModel"></a>

## DrawModel(model, position, scale, tint) ⇒ <code>undefined</code>
Draw a model (with texture if set)

**Kind**: global function  

| Param | Type |
| --- | --- |
| model | <code>Model</code> | 
| position | [<code>Vector3</code>](#Vector3) | 
| scale | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawModelEx"></a>

## DrawModelEx(model, position, rotationAxis, rotationAngle, scale, tint) ⇒ <code>undefined</code>
Draw a model with extended parameters

**Kind**: global function  

| Param | Type |
| --- | --- |
| model | <code>Model</code> | 
| position | [<code>Vector3</code>](#Vector3) | 
| rotationAxis | [<code>Vector3</code>](#Vector3) | 
| rotationAngle | <code>number</code> | 
| scale | [<code>Vector3</code>](#Vector3) | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawModelWires"></a>

## DrawModelWires(model, position, scale, tint) ⇒ <code>undefined</code>
Draw a model wires (with texture if set)

**Kind**: global function  

| Param | Type |
| --- | --- |
| model | <code>Model</code> | 
| position | [<code>Vector3</code>](#Vector3) | 
| scale | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawModelWiresEx"></a>

## DrawModelWiresEx(model, position, rotationAxis, rotationAngle, scale, tint) ⇒ <code>undefined</code>
Draw a model wires (with texture if set) with extended parameters

**Kind**: global function  

| Param | Type |
| --- | --- |
| model | <code>Model</code> | 
| position | [<code>Vector3</code>](#Vector3) | 
| rotationAxis | [<code>Vector3</code>](#Vector3) | 
| rotationAngle | <code>number</code> | 
| scale | [<code>Vector3</code>](#Vector3) | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawBoundingBox"></a>

## DrawBoundingBox(box, color) ⇒ <code>undefined</code>
Draw bounding box (wires)

**Kind**: global function  

| Param | Type |
| --- | --- |
| box | <code>BoundingBox</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="DrawBillboard"></a>

## DrawBillboard(camera, texture, position, size, tint) ⇒ <code>undefined</code>
Draw a billboard texture

**Kind**: global function  

| Param | Type |
| --- | --- |
| camera | <code>Camera</code> | 
| texture | <code>Texture2D</code> | 
| position | [<code>Vector3</code>](#Vector3) | 
| size | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawBillboardRec"></a>

## DrawBillboardRec(camera, texture, source, position, size, tint) ⇒ <code>undefined</code>
Draw a billboard texture defined by source

**Kind**: global function  

| Param | Type |
| --- | --- |
| camera | <code>Camera</code> | 
| texture | <code>Texture2D</code> | 
| source | [<code>Rectangle</code>](#Rectangle) | 
| position | [<code>Vector3</code>](#Vector3) | 
| size | [<code>Vector2</code>](#Vector2) | 
| tint | [<code>Color</code>](#Color) | 

<a name="DrawBillboardPro"></a>

## DrawBillboardPro(camera, texture, source, position, up, size, origin, rotation, tint) ⇒ <code>undefined</code>
Draw a billboard texture defined by source and rotation

**Kind**: global function  

| Param | Type |
| --- | --- |
| camera | <code>Camera</code> | 
| texture | <code>Texture2D</code> | 
| source | [<code>Rectangle</code>](#Rectangle) | 
| position | [<code>Vector3</code>](#Vector3) | 
| up | [<code>Vector3</code>](#Vector3) | 
| size | [<code>Vector2</code>](#Vector2) | 
| origin | [<code>Vector2</code>](#Vector2) | 
| rotation | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="UpdateMeshBuffer"></a>

## UpdateMeshBuffer(mesh, index, data, dataSize, offset) ⇒ <code>undefined</code>
Update mesh vertex data in GPU for a specific buffer index

**Kind**: global function  

| Param | Type |
| --- | --- |
| mesh | <code>Mesh</code> | 
| index | <code>number</code> | 
| data | <code>number</code> | 
| dataSize | <code>number</code> | 
| offset | <code>number</code> | 

<a name="UnloadMesh"></a>

## UnloadMesh(mesh) ⇒ <code>undefined</code>
Unload mesh data from CPU and GPU

**Kind**: global function  

| Param | Type |
| --- | --- |
| mesh | <code>Mesh</code> | 

<a name="ExportMesh"></a>

## ExportMesh(mesh, fileName) ⇒ <code>boolean</code>
Export mesh data to file, returns true on success

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| mesh | <code>Mesh</code> | 
| fileName | <code>string</code> | 

<a name="GetMeshBoundingBox"></a>

## GetMeshBoundingBox(mesh) ⇒ <code>BoundingBox</code>
Compute mesh bounding box limits

**Kind**: global function  
**Returns**: <code>BoundingBox</code> - The resulting BoundingBox.  

| Param | Type |
| --- | --- |
| mesh | <code>Mesh</code> | 

<a name="GenMeshPoly"></a>

## GenMeshPoly(sides, radius) ⇒ <code>Mesh</code>
Generate polygonal mesh

**Kind**: global function  
**Returns**: <code>Mesh</code> - The resulting Mesh.  

| Param | Type |
| --- | --- |
| sides | <code>number</code> | 
| radius | <code>number</code> | 

<a name="GenMeshPlane"></a>

## GenMeshPlane(width, length, resX, resZ) ⇒ <code>Mesh</code>
Generate plane mesh (with subdivisions)

**Kind**: global function  
**Returns**: <code>Mesh</code> - The resulting Mesh.  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| length | <code>number</code> | 
| resX | <code>number</code> | 
| resZ | <code>number</code> | 

<a name="GenMeshCube"></a>

## GenMeshCube(width, height, length) ⇒ <code>Mesh</code>
Generate cuboid mesh

**Kind**: global function  
**Returns**: <code>Mesh</code> - The resulting Mesh.  

| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 
| length | <code>number</code> | 

<a name="GenMeshSphere"></a>

## GenMeshSphere(radius, rings, slices) ⇒ <code>Mesh</code>
Generate sphere mesh (standard sphere)

**Kind**: global function  
**Returns**: <code>Mesh</code> - The resulting Mesh.  

| Param | Type |
| --- | --- |
| radius | <code>number</code> | 
| rings | <code>number</code> | 
| slices | <code>number</code> | 

<a name="GenMeshHemiSphere"></a>

## GenMeshHemiSphere(radius, rings, slices) ⇒ <code>Mesh</code>
Generate half-sphere mesh (no bottom cap)

**Kind**: global function  
**Returns**: <code>Mesh</code> - The resulting Mesh.  

| Param | Type |
| --- | --- |
| radius | <code>number</code> | 
| rings | <code>number</code> | 
| slices | <code>number</code> | 

<a name="GenMeshCylinder"></a>

## GenMeshCylinder(radius, height, slices) ⇒ <code>Mesh</code>
Generate cylinder mesh

**Kind**: global function  
**Returns**: <code>Mesh</code> - The resulting Mesh.  

| Param | Type |
| --- | --- |
| radius | <code>number</code> | 
| height | <code>number</code> | 
| slices | <code>number</code> | 

<a name="GenMeshCone"></a>

## GenMeshCone(radius, height, slices) ⇒ <code>Mesh</code>
Generate cone/pyramid mesh

**Kind**: global function  
**Returns**: <code>Mesh</code> - The resulting Mesh.  

| Param | Type |
| --- | --- |
| radius | <code>number</code> | 
| height | <code>number</code> | 
| slices | <code>number</code> | 

<a name="GenMeshTorus"></a>

## GenMeshTorus(radius, size, radSeg, sides) ⇒ <code>Mesh</code>
Generate torus mesh

**Kind**: global function  
**Returns**: <code>Mesh</code> - The resulting Mesh.  

| Param | Type |
| --- | --- |
| radius | <code>number</code> | 
| size | <code>number</code> | 
| radSeg | <code>number</code> | 
| sides | <code>number</code> | 

<a name="GenMeshKnot"></a>

## GenMeshKnot(radius, size, radSeg, sides) ⇒ <code>Mesh</code>
Generate trefoil knot mesh

**Kind**: global function  
**Returns**: <code>Mesh</code> - The resulting Mesh.  

| Param | Type |
| --- | --- |
| radius | <code>number</code> | 
| size | <code>number</code> | 
| radSeg | <code>number</code> | 
| sides | <code>number</code> | 

<a name="GenMeshHeightmap"></a>

## GenMeshHeightmap(heightmap, size) ⇒ <code>Mesh</code>
Generate heightmap mesh from image data

**Kind**: global function  
**Returns**: <code>Mesh</code> - The resulting Mesh.  

| Param | Type |
| --- | --- |
| heightmap | <code>Image</code> | 
| size | [<code>Vector3</code>](#Vector3) | 

<a name="GenMeshCubicmap"></a>

## GenMeshCubicmap(cubicmap, cubeSize) ⇒ <code>Mesh</code>
Generate cubes-based map mesh from image data

**Kind**: global function  
**Returns**: <code>Mesh</code> - The resulting Mesh.  

| Param | Type |
| --- | --- |
| cubicmap | <code>Image</code> | 
| cubeSize | [<code>Vector3</code>](#Vector3) | 

<a name="LoadModelAnimations"></a>

## LoadModelAnimations(fileName, animCount) ⇒ <code>number</code>
Load model animations from file

**Kind**: global function  
**Returns**: <code>number</code> - The resulting ModelAnimation *.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 
| animCount | <code>number</code> | 

<a name="UpdateModelAnimation"></a>

## UpdateModelAnimation(model, anim, frame) ⇒ <code>undefined</code>
Update model animation pose

**Kind**: global function  

| Param | Type |
| --- | --- |
| model | <code>Model</code> | 
| anim | <code>ModelAnimation</code> | 
| frame | <code>number</code> | 

<a name="UnloadModelAnimation"></a>

## UnloadModelAnimation(anim) ⇒ <code>undefined</code>
Unload animation data

**Kind**: global function  

| Param | Type |
| --- | --- |
| anim | <code>ModelAnimation</code> | 

<a name="UnloadModelAnimations"></a>

## UnloadModelAnimations(animations, count) ⇒ <code>undefined</code>
Unload animation array data

**Kind**: global function  

| Param | Type |
| --- | --- |
| animations | <code>number</code> | 
| count | <code>number</code> | 

<a name="IsModelAnimationValid"></a>

## IsModelAnimationValid(model, anim) ⇒ <code>boolean</code>
Check model animation skeleton match

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| model | <code>Model</code> | 
| anim | <code>ModelAnimation</code> | 

<a name="CheckCollisionSpheres"></a>

## CheckCollisionSpheres(center1, radius1, center2, radius2) ⇒ <code>boolean</code>
Check collision between two spheres

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| center1 | [<code>Vector3</code>](#Vector3) | 
| radius1 | <code>number</code> | 
| center2 | [<code>Vector3</code>](#Vector3) | 
| radius2 | <code>number</code> | 

<a name="CheckCollisionBoxes"></a>

## CheckCollisionBoxes(box1, box2) ⇒ <code>boolean</code>
Check collision between two bounding boxes

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| box1 | <code>BoundingBox</code> | 
| box2 | <code>BoundingBox</code> | 

<a name="CheckCollisionBoxSphere"></a>

## CheckCollisionBoxSphere(box, center, radius) ⇒ <code>boolean</code>
Check collision between box and sphere

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| box | <code>BoundingBox</code> | 
| center | [<code>Vector3</code>](#Vector3) | 
| radius | <code>number</code> | 

<a name="GetRayCollisionSphere"></a>

## GetRayCollisionSphere(ray, center, radius) ⇒ <code>RayCollision</code>
Get collision info between ray and sphere

**Kind**: global function  
**Returns**: <code>RayCollision</code> - The resulting RayCollision.  

| Param | Type |
| --- | --- |
| ray | <code>Ray</code> | 
| center | [<code>Vector3</code>](#Vector3) | 
| radius | <code>number</code> | 

<a name="GetRayCollisionBox"></a>

## GetRayCollisionBox(ray, box) ⇒ <code>RayCollision</code>
Get collision info between ray and box

**Kind**: global function  
**Returns**: <code>RayCollision</code> - The resulting RayCollision.  

| Param | Type |
| --- | --- |
| ray | <code>Ray</code> | 
| box | <code>BoundingBox</code> | 

<a name="GetRayCollisionModel"></a>

## GetRayCollisionModel(ray, model) ⇒ <code>RayCollision</code>
Get collision info between ray and model

**Kind**: global function  
**Returns**: <code>RayCollision</code> - The resulting RayCollision.  

| Param | Type |
| --- | --- |
| ray | <code>Ray</code> | 
| model | <code>Model</code> | 

<a name="GetRayCollisionMesh"></a>

## GetRayCollisionMesh(ray, mesh, transform) ⇒ <code>RayCollision</code>
Get collision info between ray and mesh

**Kind**: global function  
**Returns**: <code>RayCollision</code> - The resulting RayCollision.  

| Param | Type |
| --- | --- |
| ray | <code>Ray</code> | 
| mesh | <code>Mesh</code> | 
| transform | <code>Matrix</code> | 

<a name="GetRayCollisionTriangle"></a>

## GetRayCollisionTriangle(ray, p1, p2, p3) ⇒ <code>RayCollision</code>
Get collision info between ray and triangle

**Kind**: global function  
**Returns**: <code>RayCollision</code> - The resulting RayCollision.  

| Param | Type |
| --- | --- |
| ray | <code>Ray</code> | 
| p1 | [<code>Vector3</code>](#Vector3) | 
| p2 | [<code>Vector3</code>](#Vector3) | 
| p3 | [<code>Vector3</code>](#Vector3) | 

<a name="GetRayCollisionQuad"></a>

## GetRayCollisionQuad(ray, p1, p2, p3, p4) ⇒ <code>RayCollision</code>
Get collision info between ray and quad

**Kind**: global function  
**Returns**: <code>RayCollision</code> - The resulting RayCollision.  

| Param | Type |
| --- | --- |
| ray | <code>Ray</code> | 
| p1 | [<code>Vector3</code>](#Vector3) | 
| p2 | [<code>Vector3</code>](#Vector3) | 
| p3 | [<code>Vector3</code>](#Vector3) | 
| p4 | [<code>Vector3</code>](#Vector3) | 

<a name="InitAudioDevice"></a>

## InitAudioDevice() ⇒ <code>undefined</code>
Initialize audio device and context

**Kind**: global function  
<a name="CloseAudioDevice"></a>

## CloseAudioDevice() ⇒ <code>undefined</code>
Close the audio device and context

**Kind**: global function  
<a name="IsAudioDeviceReady"></a>

## IsAudioDeviceReady() ⇒ <code>boolean</code>
Check if audio device has been initialized successfully

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  
<a name="SetMasterVolume"></a>

## SetMasterVolume(volume) ⇒ <code>undefined</code>
Set master volume (listener)

**Kind**: global function  

| Param | Type |
| --- | --- |
| volume | <code>number</code> | 

<a name="LoadWave"></a>

## LoadWave(fileName) ⇒ <code>Wave</code>
Load wave data from file

**Kind**: global function  
**Returns**: <code>Wave</code> - The resulting Wave.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 

<a name="LoadWaveFromMemory"></a>

## LoadWaveFromMemory(fileType, fileData, dataSize) ⇒ <code>Wave</code>
Load wave from memory buffer, fileType refers to extension: i.e. '.wav'

**Kind**: global function  
**Returns**: <code>Wave</code> - The resulting Wave.  

| Param | Type |
| --- | --- |
| fileType | <code>string</code> | 
| fileData | <code>Buffer</code> | 
| dataSize | <code>number</code> | 

<a name="LoadSound"></a>

## LoadSound(fileName) ⇒ <code>Sound</code>
Load sound from file

**Kind**: global function  
**Returns**: <code>Sound</code> - The resulting Sound.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 

<a name="LoadSoundFromWave"></a>

## LoadSoundFromWave(wave) ⇒ <code>Sound</code>
Load sound from wave data

**Kind**: global function  
**Returns**: <code>Sound</code> - The resulting Sound.  

| Param | Type |
| --- | --- |
| wave | <code>Wave</code> | 

<a name="UpdateSound"></a>

## UpdateSound(sound, data, sampleCount) ⇒ <code>undefined</code>
Update sound buffer with new data

**Kind**: global function  

| Param | Type |
| --- | --- |
| sound | <code>Sound</code> | 
| data | <code>number</code> | 
| sampleCount | <code>number</code> | 

<a name="UnloadWave"></a>

## UnloadWave(wave) ⇒ <code>undefined</code>
Unload wave data

**Kind**: global function  

| Param | Type |
| --- | --- |
| wave | <code>Wave</code> | 

<a name="UnloadSound"></a>

## UnloadSound(sound) ⇒ <code>undefined</code>
Unload sound

**Kind**: global function  

| Param | Type |
| --- | --- |
| sound | <code>Sound</code> | 

<a name="ExportWave"></a>

## ExportWave(wave, fileName) ⇒ <code>boolean</code>
Export wave data to file, returns true on success

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| wave | <code>Wave</code> | 
| fileName | <code>string</code> | 

<a name="ExportWaveAsCode"></a>

## ExportWaveAsCode(wave, fileName) ⇒ <code>boolean</code>
Export wave sample data to code (.h), returns true on success

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| wave | <code>Wave</code> | 
| fileName | <code>string</code> | 

<a name="PlaySound"></a>

## PlaySound(sound) ⇒ <code>undefined</code>
Play a sound

**Kind**: global function  

| Param | Type |
| --- | --- |
| sound | <code>Sound</code> | 

<a name="StopSound"></a>

## StopSound(sound) ⇒ <code>undefined</code>
Stop playing a sound

**Kind**: global function  

| Param | Type |
| --- | --- |
| sound | <code>Sound</code> | 

<a name="PauseSound"></a>

## PauseSound(sound) ⇒ <code>undefined</code>
Pause a sound

**Kind**: global function  

| Param | Type |
| --- | --- |
| sound | <code>Sound</code> | 

<a name="ResumeSound"></a>

## ResumeSound(sound) ⇒ <code>undefined</code>
Resume a paused sound

**Kind**: global function  

| Param | Type |
| --- | --- |
| sound | <code>Sound</code> | 

<a name="PlaySoundMulti"></a>

## PlaySoundMulti(sound) ⇒ <code>undefined</code>
Play a sound (using multichannel buffer pool)

**Kind**: global function  

| Param | Type |
| --- | --- |
| sound | <code>Sound</code> | 

<a name="StopSoundMulti"></a>

## StopSoundMulti() ⇒ <code>undefined</code>
Stop any sound playing (using multichannel buffer pool)

**Kind**: global function  
<a name="GetSoundsPlaying"></a>

## GetSoundsPlaying() ⇒ <code>number</code>
Get number of sounds playing in the multichannel

**Kind**: global function  
**Returns**: <code>number</code> - The resulting int.  
<a name="IsSoundPlaying"></a>

## IsSoundPlaying(sound) ⇒ <code>boolean</code>
Check if a sound is currently playing

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| sound | <code>Sound</code> | 

<a name="SetSoundVolume"></a>

## SetSoundVolume(sound, volume) ⇒ <code>undefined</code>
Set volume for a sound (1.0 is max level)

**Kind**: global function  

| Param | Type |
| --- | --- |
| sound | <code>Sound</code> | 
| volume | <code>number</code> | 

<a name="SetSoundPitch"></a>

## SetSoundPitch(sound, pitch) ⇒ <code>undefined</code>
Set pitch for a sound (1.0 is base level)

**Kind**: global function  

| Param | Type |
| --- | --- |
| sound | <code>Sound</code> | 
| pitch | <code>number</code> | 

<a name="WaveCopy"></a>

## WaveCopy(wave) ⇒ <code>Wave</code>
Copy a wave to a new wave

**Kind**: global function  
**Returns**: <code>Wave</code> - The resulting Wave.  

| Param | Type |
| --- | --- |
| wave | <code>Wave</code> | 

<a name="LoadWaveSamples"></a>

## LoadWaveSamples(wave) ⇒ <code>number</code>
Load samples data from wave as a floats array

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float *.  

| Param | Type |
| --- | --- |
| wave | <code>Wave</code> | 

<a name="UnloadWaveSamples"></a>

## UnloadWaveSamples(samples) ⇒ <code>undefined</code>
Unload samples data loaded with LoadWaveSamples()

**Kind**: global function  

| Param | Type |
| --- | --- |
| samples | <code>number</code> | 

<a name="LoadMusicStream"></a>

## LoadMusicStream(fileName) ⇒ <code>Music</code>
Load music stream from file

**Kind**: global function  
**Returns**: <code>Music</code> - The resulting Music.  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 

<a name="LoadMusicStreamFromMemory"></a>

## LoadMusicStreamFromMemory(fileType, data, dataSize) ⇒ <code>Music</code>
Load music stream from data

**Kind**: global function  
**Returns**: <code>Music</code> - The resulting Music.  

| Param | Type |
| --- | --- |
| fileType | <code>string</code> | 
| data | <code>Buffer</code> | 
| dataSize | <code>number</code> | 

<a name="UnloadMusicStream"></a>

## UnloadMusicStream(music) ⇒ <code>undefined</code>
Unload music stream

**Kind**: global function  

| Param | Type |
| --- | --- |
| music | <code>Music</code> | 

<a name="PlayMusicStream"></a>

## PlayMusicStream(music) ⇒ <code>undefined</code>
Start music playing

**Kind**: global function  

| Param | Type |
| --- | --- |
| music | <code>Music</code> | 

<a name="IsMusicStreamPlaying"></a>

## IsMusicStreamPlaying(music) ⇒ <code>boolean</code>
Check if music is playing

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| music | <code>Music</code> | 

<a name="UpdateMusicStream"></a>

## UpdateMusicStream(music) ⇒ <code>undefined</code>
Updates buffers for music streaming

**Kind**: global function  

| Param | Type |
| --- | --- |
| music | <code>Music</code> | 

<a name="StopMusicStream"></a>

## StopMusicStream(music) ⇒ <code>undefined</code>
Stop music playing

**Kind**: global function  

| Param | Type |
| --- | --- |
| music | <code>Music</code> | 

<a name="PauseMusicStream"></a>

## PauseMusicStream(music) ⇒ <code>undefined</code>
Pause music playing

**Kind**: global function  

| Param | Type |
| --- | --- |
| music | <code>Music</code> | 

<a name="ResumeMusicStream"></a>

## ResumeMusicStream(music) ⇒ <code>undefined</code>
Resume playing paused music

**Kind**: global function  

| Param | Type |
| --- | --- |
| music | <code>Music</code> | 

<a name="SeekMusicStream"></a>

## SeekMusicStream(music, position) ⇒ <code>undefined</code>
Seek music to a position (in seconds)

**Kind**: global function  

| Param | Type |
| --- | --- |
| music | <code>Music</code> | 
| position | <code>number</code> | 

<a name="SetMusicVolume"></a>

## SetMusicVolume(music, volume) ⇒ <code>undefined</code>
Set volume for music (1.0 is max level)

**Kind**: global function  

| Param | Type |
| --- | --- |
| music | <code>Music</code> | 
| volume | <code>number</code> | 

<a name="SetMusicPitch"></a>

## SetMusicPitch(music, pitch) ⇒ <code>undefined</code>
Set pitch for a music (1.0 is base level)

**Kind**: global function  

| Param | Type |
| --- | --- |
| music | <code>Music</code> | 
| pitch | <code>number</code> | 

<a name="GetMusicTimeLength"></a>

## GetMusicTimeLength(music) ⇒ <code>number</code>
Get music time length (in seconds)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| music | <code>Music</code> | 

<a name="GetMusicTimePlayed"></a>

## GetMusicTimePlayed(music) ⇒ <code>number</code>
Get current music time played (in seconds)

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| music | <code>Music</code> | 

<a name="LoadAudioStream"></a>

## LoadAudioStream(sampleRate, sampleSize, channels) ⇒ <code>AudioStream</code>
Load audio stream (to stream raw audio pcm data)

**Kind**: global function  
**Returns**: <code>AudioStream</code> - The resulting AudioStream.  

| Param | Type |
| --- | --- |
| sampleRate | <code>number</code> | 
| sampleSize | <code>number</code> | 
| channels | <code>number</code> | 

<a name="UnloadAudioStream"></a>

## UnloadAudioStream(stream) ⇒ <code>undefined</code>
Unload audio stream and free memory

**Kind**: global function  

| Param | Type |
| --- | --- |
| stream | <code>AudioStream</code> | 

<a name="UpdateAudioStream"></a>

## UpdateAudioStream(stream, data, frameCount) ⇒ <code>undefined</code>
Update audio stream buffers with data

**Kind**: global function  

| Param | Type |
| --- | --- |
| stream | <code>AudioStream</code> | 
| data | <code>number</code> | 
| frameCount | <code>number</code> | 

<a name="IsAudioStreamProcessed"></a>

## IsAudioStreamProcessed(stream) ⇒ <code>boolean</code>
Check if any audio stream buffers requires refill

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| stream | <code>AudioStream</code> | 

<a name="PlayAudioStream"></a>

## PlayAudioStream(stream) ⇒ <code>undefined</code>
Play audio stream

**Kind**: global function  

| Param | Type |
| --- | --- |
| stream | <code>AudioStream</code> | 

<a name="PauseAudioStream"></a>

## PauseAudioStream(stream) ⇒ <code>undefined</code>
Pause audio stream

**Kind**: global function  

| Param | Type |
| --- | --- |
| stream | <code>AudioStream</code> | 

<a name="ResumeAudioStream"></a>

## ResumeAudioStream(stream) ⇒ <code>undefined</code>
Resume audio stream

**Kind**: global function  

| Param | Type |
| --- | --- |
| stream | <code>AudioStream</code> | 

<a name="IsAudioStreamPlaying"></a>

## IsAudioStreamPlaying(stream) ⇒ <code>boolean</code>
Check if audio stream is playing

**Kind**: global function  
**Returns**: <code>boolean</code> - The resulting bool.  

| Param | Type |
| --- | --- |
| stream | <code>AudioStream</code> | 

<a name="StopAudioStream"></a>

## StopAudioStream(stream) ⇒ <code>undefined</code>
Stop audio stream

**Kind**: global function  

| Param | Type |
| --- | --- |
| stream | <code>AudioStream</code> | 

<a name="SetAudioStreamVolume"></a>

## SetAudioStreamVolume(stream, volume) ⇒ <code>undefined</code>
Set volume for audio stream (1.0 is max level)

**Kind**: global function  

| Param | Type |
| --- | --- |
| stream | <code>AudioStream</code> | 
| volume | <code>number</code> | 

<a name="SetAudioStreamPitch"></a>

## SetAudioStreamPitch(stream, pitch) ⇒ <code>undefined</code>
Set pitch for audio stream (1.0 is base level)

**Kind**: global function  

| Param | Type |
| --- | --- |
| stream | <code>AudioStream</code> | 
| pitch | <code>number</code> | 

<a name="SetAudioStreamBufferSizeDefault"></a>

## SetAudioStreamBufferSizeDefault(size) ⇒ <code>undefined</code>
Default size for new audio streams

**Kind**: global function  

| Param | Type |
| --- | --- |
| size | <code>number</code> | 

<a name="EaseLinearNone"></a>

## EaseLinearNone(t, b, c, d) ⇒ <code>number</code>
Easing: EaseLinearNone.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseLinearIn"></a>

## EaseLinearIn(t, b, c, d) ⇒ <code>number</code>
Easing: EaseLinearIn.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseLinearOut"></a>

## EaseLinearOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseLinearOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseLinearInOut"></a>

## EaseLinearInOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseLinearInOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseSineIn"></a>

## EaseSineIn(t, b, c, d) ⇒ <code>number</code>
Easing: EaseSineIn.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseSineOut"></a>

## EaseSineOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseSineOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseSineInOut"></a>

## EaseSineInOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseSineInOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseCircIn"></a>

## EaseCircIn(t, b, c, d) ⇒ <code>number</code>
Easing: EaseCircIn.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseCircOut"></a>

## EaseCircOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseCircOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseCircInOut"></a>

## EaseCircInOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseCircInOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseCubicIn"></a>

## EaseCubicIn(t, b, c, d) ⇒ <code>number</code>
Easing: EaseCubicIn.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseCubicOut"></a>

## EaseCubicOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseCubicOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseCubicInOut"></a>

## EaseCubicInOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseCubicInOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseQuadIn"></a>

## EaseQuadIn(t, b, c, d) ⇒ <code>number</code>
Easing: EaseQuadIn.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseQuadOut"></a>

## EaseQuadOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseQuadOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseQuadInOut"></a>

## EaseQuadInOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseQuadInOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseExpoIn"></a>

## EaseExpoIn(t, b, c, d) ⇒ <code>number</code>
Easing: EaseExpoIn.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseExpoOut"></a>

## EaseExpoOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseExpoOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseExpoInOut"></a>

## EaseExpoInOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseExpoInOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseBackIn"></a>

## EaseBackIn(t, b, c, d) ⇒ <code>number</code>
Easing: EaseBackIn.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseBackOut"></a>

## EaseBackOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseBackOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseBackInOut"></a>

## EaseBackInOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseBackInOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseBounceOut"></a>

## EaseBounceOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseBounceOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseBounceIn"></a>

## EaseBounceIn(t, b, c, d) ⇒ <code>number</code>
Easing: EaseBounceIn.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseBounceInOut"></a>

## EaseBounceInOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseBounceInOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseElasticIn"></a>

## EaseElasticIn(t, b, c, d) ⇒ <code>number</code>
Easing: EaseElasticIn.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseElasticOut"></a>

## EaseElasticOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseElasticOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="EaseElasticInOut"></a>

## EaseElasticInOut(t, b, c, d) ⇒ <code>number</code>
Easing: EaseElasticInOut.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting float.  

| Param | Type |
| --- | --- |
| t | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 

<a name="UpdateCamera"></a>

## UpdateCamera(camera) ⇒ <code>undefined</code>
Update camera position for selected mode

**Kind**: global function  

| Param | Type |
| --- | --- |
| camera | <code>Camera</code> | 

<a name="ImageFormat"></a>

## ImageFormat(image, newFormat) ⇒ <code>undefined</code>
Convert image data to desired format

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| newFormat | <code>number</code> | 

<a name="ImageToPOT"></a>

## ImageToPOT(image, fill) ⇒ <code>undefined</code>
Convert image to POT (power-of-two)

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| fill | [<code>Color</code>](#Color) | 

<a name="ImageCrop"></a>

## ImageCrop(image, crop) ⇒ <code>undefined</code>
Crop an image to a defined rectangle

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| crop | [<code>Rectangle</code>](#Rectangle) | 

<a name="ImageAlphaCrop"></a>

## ImageAlphaCrop(image, threshold) ⇒ <code>undefined</code>
Crop image depending on alpha value

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| threshold | <code>number</code> | 

<a name="ImageAlphaClear"></a>

## ImageAlphaClear(image, color, threshold) ⇒ <code>undefined</code>
Clear alpha channel to desired color

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| color | [<code>Color</code>](#Color) | 
| threshold | <code>number</code> | 

<a name="ImageAlphaMask"></a>

## ImageAlphaMask(image, alphaMask) ⇒ <code>undefined</code>
Apply alpha mask to image

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| alphaMask | <code>Image</code> | 

<a name="ImageAlphaPremultiply"></a>

## ImageAlphaPremultiply(image) ⇒ <code>undefined</code>
Premultiply alpha channel

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 

<a name="ImageResize"></a>

## ImageResize(image, newWidth, newHeight) ⇒ <code>undefined</code>
Resize image (Bicubic scaling algorithm)

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| newWidth | <code>number</code> | 
| newHeight | <code>number</code> | 

<a name="ImageResizeNN"></a>

## ImageResizeNN(image, newWidth, newHeight) ⇒ <code>undefined</code>
Resize image (Nearest-Neighbor scaling algorithm)

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| newWidth | <code>number</code> | 
| newHeight | <code>number</code> | 

<a name="ImageResizeCanvas"></a>

## ImageResizeCanvas(image, newWidth, newHeight, offsetX, offsetY, fill) ⇒ <code>undefined</code>
Resize canvas and fill with color

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| newWidth | <code>number</code> | 
| newHeight | <code>number</code> | 
| offsetX | <code>number</code> | 
| offsetY | <code>number</code> | 
| fill | [<code>Color</code>](#Color) | 

<a name="ImageMipmaps"></a>

## ImageMipmaps(image) ⇒ <code>undefined</code>
Compute all mipmap levels for a provided image

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 

<a name="ImageDither"></a>

## ImageDither(image, rBpp, gBpp, bBpp, aBpp) ⇒ <code>undefined</code>
Dither image data to 16bpp or lower (Floyd-Steinberg dithering)

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| rBpp | <code>number</code> | 
| gBpp | <code>number</code> | 
| bBpp | <code>number</code> | 
| aBpp | <code>number</code> | 

<a name="ImageFlipVertical"></a>

## ImageFlipVertical(image) ⇒ <code>undefined</code>
Flip image vertically

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 

<a name="ImageFlipHorizontal"></a>

## ImageFlipHorizontal(image) ⇒ <code>undefined</code>
Flip image horizontally

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 

<a name="ImageRotateCW"></a>

## ImageRotateCW(image) ⇒ <code>undefined</code>
Rotate image clockwise 90deg

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 

<a name="ImageRotateCCW"></a>

## ImageRotateCCW(image) ⇒ <code>undefined</code>
Rotate image counter-clockwise 90deg

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 

<a name="ImageColorTint"></a>

## ImageColorTint(image, color) ⇒ <code>undefined</code>
Modify image color: tint

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageColorInvert"></a>

## ImageColorInvert(image) ⇒ <code>undefined</code>
Modify image color: invert

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 

<a name="ImageColorGrayscale"></a>

## ImageColorGrayscale(image) ⇒ <code>undefined</code>
Modify image color: grayscale

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 

<a name="ImageColorContrast"></a>

## ImageColorContrast(image, contrast) ⇒ <code>undefined</code>
Modify image color: contrast (-100 to 100)

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| contrast | <code>number</code> | 

<a name="ImageColorBrightness"></a>

## ImageColorBrightness(image, brightness) ⇒ <code>undefined</code>
Modify image color: brightness (-255 to 255)

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| brightness | <code>number</code> | 

<a name="ImageColorReplace"></a>

## ImageColorReplace(image, color, replace) ⇒ <code>undefined</code>
Modify image color: replace color

**Kind**: global function  

| Param | Type |
| --- | --- |
| image | <code>Image</code> | 
| color | [<code>Color</code>](#Color) | 
| replace | [<code>Color</code>](#Color) | 

<a name="ImageClearBackground"></a>

## ImageClearBackground(dst, color) ⇒ <code>undefined</code>
Clear image background with given color

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageDrawPixel"></a>

## ImageDrawPixel(dst, posX, posY, color) ⇒ <code>undefined</code>
Draw pixel within an image

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| posX | <code>number</code> | 
| posY | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageDrawPixelV"></a>

## ImageDrawPixelV(dst, position, color) ⇒ <code>undefined</code>
Draw pixel within an image (Vector version)

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| position | [<code>Vector2</code>](#Vector2) | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageDrawLine"></a>

## ImageDrawLine(dst, startPosX, startPosY, endPosX, endPosY, color) ⇒ <code>undefined</code>
Draw line within an image

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| startPosX | <code>number</code> | 
| startPosY | <code>number</code> | 
| endPosX | <code>number</code> | 
| endPosY | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageDrawLineV"></a>

## ImageDrawLineV(dst, start, end, color) ⇒ <code>undefined</code>
Draw line within an image (Vector version)

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| start | [<code>Vector2</code>](#Vector2) | 
| end | [<code>Vector2</code>](#Vector2) | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageDrawCircle"></a>

## ImageDrawCircle(dst, centerX, centerY, radius, color) ⇒ <code>undefined</code>
Draw circle within an image

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| centerX | <code>number</code> | 
| centerY | <code>number</code> | 
| radius | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageDrawCircleV"></a>

## ImageDrawCircleV(dst, center, radius, color) ⇒ <code>undefined</code>
Draw circle within an image (Vector version)

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| center | [<code>Vector2</code>](#Vector2) | 
| radius | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageDrawRectangle"></a>

## ImageDrawRectangle(dst, posX, posY, width, height, color) ⇒ <code>undefined</code>
Draw rectangle within an image

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| posX | <code>number</code> | 
| posY | <code>number</code> | 
| width | <code>number</code> | 
| height | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageDrawRectangleV"></a>

## ImageDrawRectangleV(dst, position, size, color) ⇒ <code>undefined</code>
Draw rectangle within an image (Vector version)

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| position | [<code>Vector2</code>](#Vector2) | 
| size | [<code>Vector2</code>](#Vector2) | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageDrawRectangleRec"></a>

## ImageDrawRectangleRec(dst, rec, color) ⇒ <code>undefined</code>
Draw rectangle within an image

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| rec | [<code>Rectangle</code>](#Rectangle) | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageDrawRectangleLines"></a>

## ImageDrawRectangleLines(dst, rec, thick, color) ⇒ <code>undefined</code>
Draw rectangle lines within an image

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| rec | [<code>Rectangle</code>](#Rectangle) | 
| thick | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageDraw"></a>

## ImageDraw(dst, src, srcRec, dstRec, tint) ⇒ <code>undefined</code>
Draw a source image within a destination image (tint applied to source)

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| src | <code>Image</code> | 
| srcRec | [<code>Rectangle</code>](#Rectangle) | 
| dstRec | [<code>Rectangle</code>](#Rectangle) | 
| tint | [<code>Color</code>](#Color) | 

<a name="ImageDrawText"></a>

## ImageDrawText(dst, text, posX, posY, fontSize, color) ⇒ <code>undefined</code>
Draw text (using default font) within an image (destination)

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| text | <code>string</code> | 
| posX | <code>number</code> | 
| posY | <code>number</code> | 
| fontSize | <code>number</code> | 
| color | [<code>Color</code>](#Color) | 

<a name="ImageDrawTextEx"></a>

## ImageDrawTextEx(dst, font, text, position, fontSize, spacing, tint) ⇒ <code>undefined</code>
Draw text (custom sprite font) within an image (destination)

**Kind**: global function  

| Param | Type |
| --- | --- |
| dst | <code>Image</code> | 
| font | <code>Font</code> | 
| text | <code>string</code> | 
| position | [<code>Vector2</code>](#Vector2) | 
| fontSize | <code>number</code> | 
| spacing | <code>number</code> | 
| tint | [<code>Color</code>](#Color) | 

<a name="GenTextureMipmaps"></a>

## GenTextureMipmaps(texture) ⇒ <code>undefined</code>
Generate GPU mipmaps for a texture

**Kind**: global function  

| Param | Type |
| --- | --- |
| texture | <code>Texture2D</code> | 

<a name="UploadMesh"></a>

## UploadMesh(mesh, dynamic) ⇒ <code>undefined</code>
Upload mesh vertex data in GPU and provide VAO/VBO ids

**Kind**: global function  

| Param | Type |
| --- | --- |
| mesh | <code>Mesh</code> | 
| dynamic | <code>boolean</code> | 

<a name="GenMeshTangents"></a>

## GenMeshTangents(mesh) ⇒ <code>undefined</code>
Compute mesh tangents

**Kind**: global function  

| Param | Type |
| --- | --- |
| mesh | <code>Mesh</code> | 

<a name="GenMeshBinormals"></a>

## GenMeshBinormals(mesh) ⇒ <code>undefined</code>
Compute mesh binormals

**Kind**: global function  

| Param | Type |
| --- | --- |
| mesh | <code>Mesh</code> | 

<a name="SetModelMeshMaterial"></a>

## SetModelMeshMaterial(model, meshId, materialId) ⇒ <code>undefined</code>
Set material for a mesh

**Kind**: global function  

| Param | Type |
| --- | --- |
| model | <code>Model</code> | 
| meshId | <code>number</code> | 
| materialId | <code>number</code> | 

<a name="WaveFormat"></a>

## WaveFormat(wave, sampleRate, sampleSize, channels) ⇒ <code>undefined</code>
Convert wave data to desired format

**Kind**: global function  

| Param | Type |
| --- | --- |
| wave | <code>Wave</code> | 
| sampleRate | <code>number</code> | 
| sampleSize | <code>number</code> | 
| channels | <code>number</code> | 

<a name="WaveCrop"></a>

## WaveCrop(wave, initSample, finalSample) ⇒ <code>undefined</code>
Crop a wave to defined samples range

**Kind**: global function  

| Param | Type |
| --- | --- |
| wave | <code>Wave</code> | 
| initSample | <code>number</code> | 
| finalSample | <code>number</code> | 

<a name="Color"></a>

## Color(r, g, b, a) ⇒ [<code>Color</code>](#Color)
Color, 4 components, R8G8B8A8 (32bit)

**Kind**: global function  
**Returns**: [<code>Color</code>](#Color) - The new Color.  

| Param | Type | Description |
| --- | --- | --- |
| r | <code>number</code> | Color red value |
| g | <code>number</code> | Color green value |
| b | <code>number</code> | Color blue value |
| a | <code>number</code> | Color alpha value |

<a name="Vector2"></a>

## Vector2(x, y) ⇒ [<code>Vector2</code>](#Vector2)
Vector2, 2 components

**Kind**: global function  
**Returns**: [<code>Vector2</code>](#Vector2) - The new Vector2.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Vector x component |
| y | <code>number</code> | Vector y component |

<a name="Vector3"></a>

## Vector3(x, y, z) ⇒ [<code>Vector3</code>](#Vector3)
Vector3, 3 components

**Kind**: global function  
**Returns**: [<code>Vector3</code>](#Vector3) - The new Vector3.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Vector x component |
| y | <code>number</code> | Vector y component |
| z | <code>number</code> | Vector z component |

<a name="Vector4"></a>

## Vector4(x, y, z, w) ⇒ [<code>Vector4</code>](#Vector4)
Vector4, 4 components

**Kind**: global function  
**Returns**: [<code>Vector4</code>](#Vector4) - The new Vector4.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Vector x component |
| y | <code>number</code> | Vector y component |
| z | <code>number</code> | Vector z component |
| w | <code>number</code> | Vector w component |

<a name="Rectangle"></a>

## Rectangle(x, y, width, height) ⇒ [<code>Rectangle</code>](#Rectangle)
Rectangle, 4 components

**Kind**: global function  
**Returns**: [<code>Rectangle</code>](#Rectangle) - The new Rectangle.  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | Rectangle top-left corner position x |
| y | <code>number</code> | Rectangle top-left corner position y |
| width | <code>number</code> | Rectangle width |
| height | <code>number</code> | Rectangle height |

<a name="Camera2D"></a>

## Camera2D(offset, target, rotation, zoom) ⇒ [<code>Camera2D</code>](#Camera2D)
Camera2D, defines position/orientation in 2d space

**Kind**: global function  
**Returns**: [<code>Camera2D</code>](#Camera2D) - The new Camera2D.  

| Param | Type | Description |
| --- | --- | --- |
| offset | [<code>Vector2</code>](#Vector2) | Camera offset (displacement from target) |
| target | [<code>Vector2</code>](#Vector2) | Camera target (rotation and zoom origin) |
| rotation | <code>number</code> | Camera rotation in degrees |
| zoom | <code>number</code> | Camera zoom (scaling), should be 1.0f by default |

<a name="Camera3D"></a>

## Camera3D(position, target, up, fovy, projection) ⇒ [<code>Camera3D</code>](#Camera3D)
Camera, defines position/orientation in 3d space

**Kind**: global function  
**Returns**: [<code>Camera3D</code>](#Camera3D) - The new Camera3D.  

| Param | Type | Description |
| --- | --- | --- |
| position | [<code>Vector3</code>](#Vector3) | Camera position |
| target | [<code>Vector3</code>](#Vector3) | Camera target it looks-at |
| up | [<code>Vector3</code>](#Vector3) | Camera up vector (rotation over its axis) |
| fovy | <code>number</code> | Camera field-of-view apperture in Y (degrees) in perspective, used as near plane width in orthographic |
| projection | <code>number</code> | Camera projection: CAMERA_PERSPECTIVE or CAMERA_ORTHOGRAPHIC |

<a name="SetShaderFloat"></a>

## SetShaderFloat(shader, locIndex, value) ⇒ <code>undefined</code>
Set shader uniform value float

**Kind**: global function  

| Param | Type |
| --- | --- |
| shader | <code>Shader</code> | 
| locIndex | <code>number</code> | 
| value | <code>number</code> | 

<a name="SetShaderInt"></a>

## SetShaderInt(shader, locIndex, value) ⇒ <code>undefined</code>
Set shader uniform value float

**Kind**: global function  

| Param | Type |
| --- | --- |
| shader | <code>Shader</code> | 
| locIndex | <code>number</code> | 
| value | <code>number</code> | 

<a name="SetShaderVec2"></a>

## SetShaderVec2(shader, locIndex, value) ⇒ <code>undefined</code>
Set shader uniform value vector2

**Kind**: global function  

| Param | Type |
| --- | --- |
| shader | <code>Shader</code> | 
| locIndex | <code>number</code> | 
| value | [<code>Vector2</code>](#Vector2) | 

<a name="SetShaderVec3"></a>

## SetShaderVec3(shader, locIndex, value) ⇒ <code>undefined</code>
Set shader uniform value vector3

**Kind**: global function  

| Param | Type |
| --- | --- |
| shader | <code>Shader</code> | 
| locIndex | <code>number</code> | 
| value | [<code>Vector3</code>](#Vector3) | 

<a name="SetShaderVec4"></a>

## SetShaderVec4(shader, locIndex, value) ⇒ <code>undefined</code>
Set shader uniform value vector4

**Kind**: global function  

| Param | Type |
| --- | --- |
| shader | <code>Shader</code> | 
| locIndex | <code>number</code> | 
| value | [<code>Vector4</code>](#Vector4) | 


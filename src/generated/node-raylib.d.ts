// GENERATED CODE: DO NOT MODIFY
declare module "raylib" {
  /** Vector2, 2 components */
  export interface Vector2 {
    /** Vector x component */
    x: number
    /** Vector y component */
    y: number
  }
  /** Vector3, 3 components */
  export interface Vector3 {
    /** Vector x component */
    x: number
    /** Vector y component */
    y: number
    /** Vector z component */
    z: number
  }
  /** Vector4, 4 components */
  export interface Vector4 {
    /** Vector x component */
    x: number
    /** Vector y component */
    y: number
    /** Vector z component */
    z: number
    /** Vector w component */
    w: number
  }
  /** Matrix, 4x4 components, column major, OpenGL style, right handed */
  export interface Matrix {
    /** Matrix first row (4 components) */
    m0: number
    /** Matrix second row (4 components) */
    m1: number
    /** Matrix third row (4 components) */
    m2: number
    /** Matrix fourth row (4 components) */
    m3: number
    /** Matrix first row (4 components) */
    m4: number
    /** Matrix second row (4 components) */
    m5: number
    /** Matrix third row (4 components) */
    m6: number
    /** Matrix fourth row (4 components) */
    m7: number
    /** Matrix first row (4 components) */
    m8: number
    /** Matrix second row (4 components) */
    m9: number
    /** Matrix third row (4 components) */
    m10: number
    /** Matrix fourth row (4 components) */
    m11: number
    /** Matrix first row (4 components) */
    m12: number
    /** Matrix second row (4 components) */
    m13: number
    /** Matrix third row (4 components) */
    m14: number
    /** Matrix fourth row (4 components) */
    m15: number
  }
  /** Color, 4 components, R8G8B8A8 (32bit) */
  export interface Color {
    /** Color red value */
    r: number
    /** Color green value */
    g: number
    /** Color blue value */
    b: number
    /** Color alpha value */
    a: number
  }
  /** Rectangle, 4 components */
  export interface Rectangle {
    /** Rectangle top-left corner position x */
    x: number
    /** Rectangle top-left corner position y */
    y: number
    /** Rectangle width */
    width: number
    /** Rectangle height */
    height: number
  }
  /** Image, pixel data stored in CPU memory (RAM) */
  export interface Image {
    /** Image raw data */
    data: number
    /** Image base width */
    width: number
    /** Image base height */
    height: number
    /** Mipmap levels, 1 by default */
    mipmaps: number
    /** Data format (PixelFormat type) */
    format: number
  }
  /** Texture, tex data stored in GPU memory (VRAM) */
  export interface Texture {
    /** OpenGL texture id */
    id: number
    /** Texture base width */
    width: number
    /** Texture base height */
    height: number
    /** Mipmap levels, 1 by default */
    mipmaps: number
    /** Data format (PixelFormat type) */
    format: number
  }
  /** RenderTexture, fbo for texture rendering */
  export interface RenderTexture {
    /** OpenGL framebuffer object id */
    id: number
    /** Color buffer attachment texture */
    texture: Texture
    /** Depth buffer attachment texture */
    depth: Texture
  }
  /** NPatchInfo, n-patch layout info */
  export interface NPatchInfo {
    /** Texture source rectangle */
    source: Rectangle
    /** Left border offset */
    left: number
    /** Top border offset */
    top: number
    /** Right border offset */
    right: number
    /** Bottom border offset */
    bottom: number
    /** Layout of the n-patch: 3x3, 1x3 or 3x1 */
    layout: number
  }
  /** GlyphInfo, font characters glyphs info */
  export interface GlyphInfo {
    /** Character value (Unicode) */
    value: number
    /** Character offset X when drawing */
    offsetX: number
    /** Character offset Y when drawing */
    offsetY: number
    /** Character advance position X */
    advanceX: number
    /** Character image data */
    image: Image
  }
  /** Font, font texture and GlyphInfo array data */
  export interface Font {
    /** Base size (default chars height) */
    baseSize: number
    /** Number of glyph characters */
    glyphCount: number
    /** Padding around the glyph characters */
    glyphPadding: number
    /** Texture atlas containing the glyphs */
    texture: Texture
    /** Rectangles in texture for the glyphs */
    recs: number
    /** Glyphs info data */
    glyphs: number
  }
  /** Camera, defines position/orientation in 3d space */
  export interface Camera3D {
    /** Camera position */
    position: Vector3
    /** Camera target it looks-at */
    target: Vector3
    /** Camera up vector (rotation over its axis) */
    up: Vector3
    /** Camera field-of-view apperture in Y (degrees) in perspective, used as near plane width in orthographic */
    fovy: number
    /** Camera projection: CAMERA_PERSPECTIVE or CAMERA_ORTHOGRAPHIC */
    projection: number
  }
  /** Camera2D, defines position/orientation in 2d space */
  export interface Camera2D {
    /** Camera offset (displacement from target) */
    offset: Vector2
    /** Camera target (rotation and zoom origin) */
    target: Vector2
    /** Camera rotation in degrees */
    rotation: number
    /** Camera zoom (scaling), should be 1.0f by default */
    zoom: number
  }
  /** Mesh, vertex data and vao/vbo */
  export interface Mesh {
    /** Number of vertices stored in arrays */
    vertexCount: number
    /** Number of triangles stored (indexed or not) */
    triangleCount: number
    /** Vertex position (XYZ - 3 components per vertex) (shader-location = 0) */
    vertices: number
    /** Vertex texture coordinates (UV - 2 components per vertex) (shader-location = 1) */
    texcoords: number
    /** Vertex second texture coordinates (useful for lightmaps) (shader-location = 5) */
    texcoords2: number
    /** Vertex normals (XYZ - 3 components per vertex) (shader-location = 2) */
    normals: number
    /** Vertex tangents (XYZW - 4 components per vertex) (shader-location = 4) */
    tangents: number
    /** Vertex colors (RGBA - 4 components per vertex) (shader-location = 3) */
    colors: Buffer
    /** Vertex indices (in case vertex data comes indexed) */
    indices: number
    /** Animated vertex positions (after bones transformations) */
    animVertices: number
    /** Animated normals (after bones transformations) */
    animNormals: number
    /** Vertex bone ids, max 255 bone ids, up to 4 bones influence by vertex (skinning) */
    boneIds: Buffer
    /** Vertex bone weight, up to 4 bones influence by vertex (skinning) */
    boneWeights: number
    /** OpenGL Vertex Array Object id */
    vaoId: number
    /** OpenGL Vertex Buffer Objects id (default vertex data) */
    vboId: number
  }
  /** Shader */
  export interface Shader {
    /** Shader program id */
    id: number
    /** Shader locations array (RL_MAX_SHADER_LOCATIONS) */
    locs: number
  }
  /** MaterialMap */
  export interface MaterialMap {
    /** Material map texture */
    texture: Texture
    /** Material map color */
    color: Color
    /** Material map value */
    value: number
  }
  /** Material, includes shader and maps */
  export interface Material {
    /** Material shader */
    shader: Shader
    /** Material maps array (MAX_MATERIAL_MAPS) */
    maps: number
    /** Material generic parameters (if required) */
    params: number
  }
  /** Transform, vectex transformation data */
  export interface Transform {
    /** Translation */
    translation: Vector3
    /** Rotation */
    rotation: Vector4
    /** Scale */
    scale: Vector3
  }
  /** Bone, skeletal animation bone */
  export interface BoneInfo {
    /** Bone name */
    name: string
    /** Bone parent */
    parent: string
  }
  /** Model, meshes, materials and animation data */
  export interface Model {
    /** Local transform matrix */
    transform: Matrix
    /** Number of meshes */
    meshCount: number
    /** Number of materials */
    materialCount: number
    /** Meshes array */
    meshes: number
    /** Materials array */
    materials: number
    /** Mesh material number */
    meshMaterial: number
    /** Number of bones */
    boneCount: number
    /** Bones information (skeleton) */
    bones: number
    /** Bones base transformation (pose) */
    bindPose: number
  }
  /** ModelAnimation */
  export interface ModelAnimation {
    /** Number of bones */
    boneCount: number
    /** Number of animation frames */
    frameCount: number
    /** Bones information (skeleton) */
    bones: number
    /** Poses array by frame */
    framePoses: number
  }
  /** Ray, ray for raycasting */
  export interface Ray {
    /** Ray position (origin) */
    position: Vector3
    /** Ray direction */
    direction: Vector3
  }
  /** RayCollision, ray hit information */
  export interface RayCollision {
    /** Did the ray hit something? */
    hit: boolean
    /** Distance to nearest hit */
    distance: number
    /** Point of nearest hit */
    point: Vector3
    /** Surface normal of hit */
    normal: Vector3
  }
  /** BoundingBox */
  export interface BoundingBox {
    /** Minimum vertex box-corner */
    min: Vector3
    /** Maximum vertex box-corner */
    max: Vector3
  }
  /** Wave, audio wave data */
  export interface Wave {
    /** Total number of frames (considering channels) */
    frameCount: number
    /** Frequency (samples per second) */
    sampleRate: number
    /** Bit depth (bits per sample): 8, 16, 32 (24 not supported) */
    sampleSize: number
    /** Number of channels (1-mono, 2-stereo, ...) */
    channels: number
    /** Buffer data pointer */
    data: number
  }
  /** AudioStream, custom audio stream */
  export interface AudioStream {
    /** Pointer to internal data used by the audio system */
    buffer: number
    /** Frequency (samples per second) */
    sampleRate: number
    /** Bit depth (bits per sample): 8, 16, 32 (24 not supported) */
    sampleSize: number
    /** Number of channels (1-mono, 2-stereo, ...) */
    channels: number
  }
  /** Sound */
  export interface Sound {
    /** Audio stream */
    stream: AudioStream
    /** Total number of frames (considering channels) */
    frameCount: number
  }
  /** Music, audio stream, anything longer than ~10 seconds should be streamed */
  export interface Music {
    /** Audio stream */
    stream: AudioStream
    /** Total number of frames (considering channels) */
    frameCount: number
    /** Music looping enable */
    looping: boolean
    /** Type of music context (audio filetype) */
    ctxType: number
    /** Audio context data, depends on type */
    ctxData: number
  }
  /** VrDeviceInfo, Head-Mounted-Display device parameters */
  export interface VrDeviceInfo {
    /** Horizontal resolution in pixels */
    hResolution: number
    /** Vertical resolution in pixels */
    vResolution: number
    /** Horizontal size in meters */
    hScreenSize: number
    /** Vertical size in meters */
    vScreenSize: number
    /** Screen center in meters */
    vScreenCenter: number
    /** Distance between eye and display in meters */
    eyeToScreenDistance: number
    /** Lens separation distance in meters */
    lensSeparationDistance: number
    /** IPD (distance between pupils) in meters */
    interpupillaryDistance: number
    /** Lens distortion constant parameters */
    lensDistortionValues: number
    /** Chromatic aberration correction parameters */
    chromaAbCorrection: number
  }
  /** VrStereoConfig, VR stereo rendering configuration for simulator */
  export interface VrStereoConfig {
    /** VR projection matrices (per eye) */
    projection: Matrix
    /** VR view offset matrices (per eye) */
    viewOffset: Matrix
    /** VR left lens center */
    leftLensCenter: number
    /** VR right lens center */
    rightLensCenter: number
    /** VR left screen center */
    leftScreenCenter: number
    /** VR right screen center */
    rightScreenCenter: number
    /** VR distortion scale */
    scale: number
    /** VR distortion scale in */
    scaleIn: number
  }

  /** RenderTexture, fbo for texture rendering */
  export type RenderTexture2D = RenderTexture

  /** Texture, tex data stored in GPU memory (VRAM) */
  export type Texture2D = Texture

  /** Texture, tex data stored in GPU memory (VRAM) */
  export type TextureCubemap = Texture

  /** Camera, defines position/orientation in 3d space */
  export type Camera = Camera3D | Camera2D

  /** Initialize window and OpenGL context */
  export function InitWindow(width: number, height: number, title: string): void
  
  /** Check if KEY_ESCAPE pressed or Close icon pressed */
  export function WindowShouldClose(): boolean
  
  /** Close window and unload OpenGL context */
  export function CloseWindow(): void
  
  /** Check if window has been initialized successfully */
  export function IsWindowReady(): boolean
  
  /** Check if window is currently fullscreen */
  export function IsWindowFullscreen(): boolean
  
  /** Check if window is currently hidden (only PLATFORM_DESKTOP) */
  export function IsWindowHidden(): boolean
  
  /** Check if window is currently minimized (only PLATFORM_DESKTOP) */
  export function IsWindowMinimized(): boolean
  
  /** Check if window is currently maximized (only PLATFORM_DESKTOP) */
  export function IsWindowMaximized(): boolean
  
  /** Check if window is currently focused (only PLATFORM_DESKTOP) */
  export function IsWindowFocused(): boolean
  
  /** Check if window has been resized last frame */
  export function IsWindowResized(): boolean
  
  /** Check if one specific window flag is enabled */
  export function IsWindowState(flag: number): boolean
  
  /** Set window configuration state using flags (only PLATFORM_DESKTOP) */
  export function SetWindowState(flags: number): void
  
  /** Clear window configuration state flags */
  export function ClearWindowState(flags: number): void
  
  /** Toggle window state: fullscreen/windowed (only PLATFORM_DESKTOP) */
  export function ToggleFullscreen(): void
  
  /** Set window state: maximized, if resizable (only PLATFORM_DESKTOP) */
  export function MaximizeWindow(): void
  
  /** Set window state: minimized, if resizable (only PLATFORM_DESKTOP) */
  export function MinimizeWindow(): void
  
  /** Set window state: not minimized/maximized (only PLATFORM_DESKTOP) */
  export function RestoreWindow(): void
  
  /** Set icon for window (only PLATFORM_DESKTOP) */
  export function SetWindowIcon(image: Image): void
  
  /** Set title for window (only PLATFORM_DESKTOP) */
  export function SetWindowTitle(title: string): void
  
  /** Set window position on screen (only PLATFORM_DESKTOP) */
  export function SetWindowPosition(x: number, y: number): void
  
  /** Set monitor for the current window (fullscreen mode) */
  export function SetWindowMonitor(monitor: number): void
  
  /** Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE) */
  export function SetWindowMinSize(width: number, height: number): void
  
  /** Set window dimensions */
  export function SetWindowSize(width: number, height: number): void
  
  /** Get native window handle */
  export function GetWindowHandle(): number
  
  /** Get current screen width */
  export function GetScreenWidth(): number
  
  /** Get current screen height */
  export function GetScreenHeight(): number
  
  /** Get number of connected monitors */
  export function GetMonitorCount(): number
  
  /** Get current connected monitor */
  export function GetCurrentMonitor(): number
  
  /** Get specified monitor position */
  export function GetMonitorPosition(monitor: number): Vector2
  
  /** Get specified monitor width (max available by monitor) */
  export function GetMonitorWidth(monitor: number): number
  
  /** Get specified monitor height (max available by monitor) */
  export function GetMonitorHeight(monitor: number): number
  
  /** Get specified monitor physical width in millimetres */
  export function GetMonitorPhysicalWidth(monitor: number): number
  
  /** Get specified monitor physical height in millimetres */
  export function GetMonitorPhysicalHeight(monitor: number): number
  
  /** Get specified monitor refresh rate */
  export function GetMonitorRefreshRate(monitor: number): number
  
  /** Get window position XY on monitor */
  export function GetWindowPosition(): Vector2
  
  /** Get window scale DPI factor */
  export function GetWindowScaleDPI(): Vector2
  
  /** Get the human-readable, UTF-8 encoded name of the primary monitor */
  export function GetMonitorName(monitor: number): string
  
  /** Set clipboard text content */
  export function SetClipboardText(text: string): void
  
  /** Get clipboard text content */
  export function GetClipboardText(): string
  
  /** Swap back buffer with front buffer (screen drawing) */
  export function SwapScreenBuffer(): void
  
  /** Register all input events */
  export function PollInputEvents(): void
  
  /** Wait for some milliseconds (halt program execution) */
  export function WaitTime(ms: number): void
  
  /** Shows cursor */
  export function ShowCursor(): void
  
  /** Hides cursor */
  export function HideCursor(): void
  
  /** Check if cursor is not visible */
  export function IsCursorHidden(): boolean
  
  /** Enables cursor (unlock cursor) */
  export function EnableCursor(): void
  
  /** Disables cursor (lock cursor) */
  export function DisableCursor(): void
  
  /** Check if cursor is on the screen */
  export function IsCursorOnScreen(): boolean
  
  /** Set background color (framebuffer clear color) */
  export function ClearBackground(color: Color): void
  
  /** Setup canvas (framebuffer) to start drawing */
  export function BeginDrawing(): void
  
  /** End canvas drawing and swap buffers (double buffering) */
  export function EndDrawing(): void
  
  /** Begin 2D mode with custom camera (2D) */
  export function BeginMode2D(camera: Camera2D): void
  
  /** Ends 2D mode with custom camera */
  export function EndMode2D(): void
  
  /** Begin 3D mode with custom camera (3D) */
  export function BeginMode3D(camera: Camera3D): void
  
  /** Ends 3D mode and returns to default 2D orthographic mode */
  export function EndMode3D(): void
  
  /** Begin drawing to render texture */
  export function BeginTextureMode(target: RenderTexture): void
  
  /** Ends drawing to render texture */
  export function EndTextureMode(): void
  
  /** Begin custom shader drawing */
  export function BeginShaderMode(shader: Shader): void
  
  /** End custom shader drawing (use default shader) */
  export function EndShaderMode(): void
  
  /** Begin blending mode (alpha, additive, multiplied, subtract, custom) */
  export function BeginBlendMode(mode: number): void
  
  /** End blending mode (reset to default: alpha blending) */
  export function EndBlendMode(): void
  
  /** Begin scissor mode (define screen area for following drawing) */
  export function BeginScissorMode(x: number, y: number, width: number, height: number): void
  
  /** End scissor mode */
  export function EndScissorMode(): void
  
  /** End stereo rendering (requires VR simulator) */
  export function EndVrStereoMode(): void
  
  /** Load shader from files and bind default locations */
  export function LoadShader(vsFileName: string, fsFileName: string): Shader
  
  /** Load shader from code strings and bind default locations */
  export function LoadShaderFromMemory(vsCode: string, fsCode: string): Shader
  
  /** Get shader uniform location */
  export function GetShaderLocation(shader: Shader, uniformName: string): number
  
  /** Get shader attribute location */
  export function GetShaderLocationAttrib(shader: Shader, attribName: string): number
  
  /** Set shader uniform value (matrix 4x4) */
  export function SetShaderValueMatrix(shader: Shader, locIndex: number, mat: Matrix): void
  
  /** Set shader uniform value for texture (sampler2d) */
  export function SetShaderValueTexture(shader: Shader, locIndex: number, texture: Texture): void
  
  /** Unload shader from GPU memory (VRAM) */
  export function UnloadShader(shader: Shader): void
  
  /** Get a ray trace from mouse position */
  export function GetMouseRay(mousePosition: Vector2, camera: Camera3D): Ray
  
  /** Get camera transform matrix (view matrix) */
  export function GetCameraMatrix(camera: Camera3D): Matrix
  
  /** Get camera 2d transform matrix */
  export function GetCameraMatrix2D(camera: Camera2D): Matrix
  
  /** Get the screen space position for a 3d world space position */
  export function GetWorldToScreen(position: Vector3, camera: Camera3D): Vector2
  
  /** Get size position for a 3d world space position */
  export function GetWorldToScreenEx(position: Vector3, camera: Camera3D, width: number, height: number): Vector2
  
  /** Get the screen space position for a 2d camera world space position */
  export function GetWorldToScreen2D(position: Vector2, camera: Camera2D): Vector2
  
  /** Get the world space position for a 2d camera screen space position */
  export function GetScreenToWorld2D(position: Vector2, camera: Camera2D): Vector2
  
  /** Set target FPS (maximum) */
  export function SetTargetFPS(fps: number): void
  
  /** Get current FPS */
  export function GetFPS(): number
  
  /** Get time in seconds for last frame drawn (delta time) */
  export function GetFrameTime(): number
  
  /** Get elapsed time in seconds since InitWindow() */
  export function GetTime(): number
  
  /** Get a random value between min and max (both included) */
  export function GetRandomValue(min: number, max: number): number
  
  /** Set the seed for the random number generator */
  export function SetRandomSeed(seed: number): void
  
  /** Takes a screenshot of current screen (filename extension defines format) */
  export function TakeScreenshot(fileName: string): void
  
  /** Setup init configuration flags (view FLAGS) */
  export function SetConfigFlags(flags: number): void
  
  /** Set the current threshold (minimum) log level */
  export function SetTraceLogLevel(logLevel: number): void
  
  /** Internal memory allocator */
  export function MemAlloc(size: number): number
  
  /** Internal memory reallocator */
  export function MemRealloc(ptr: number, size: number): number
  
  /** Internal memory free */
  export function MemFree(ptr: number): void
  
  /** Load file data as byte array (read) */
  export function LoadFileData(fileName: string, bytesRead: number): Buffer
  
  /** Unload file data allocated by LoadFileData() */
  export function UnloadFileData(data: Buffer): void
  
  /** Save data to file from byte array (write), returns true on success */
  export function SaveFileData(fileName: string, data: number, bytesToWrite: number): boolean
  
  /** Load text data from file (read), returns a '\0' terminated string */
  export function LoadFileText(fileName: string): string
  
  /** Unload file text data allocated by LoadFileText() */
  export function UnloadFileText(text: string): void
  
  /** Save text data to file (write), string must be '\0' terminated, returns true on success */
  export function SaveFileText(fileName: string, text: string): boolean
  
  /** Check if file exists */
  export function FileExists(fileName: string): boolean
  
  /** Check if a directory path exists */
  export function DirectoryExists(dirPath: string): boolean
  
  /** Check file extension (including point: .png, .wav) */
  export function IsFileExtension(fileName: string, ext: string): boolean
  
  /** Get pointer to extension for a filename string (includes dot: '.png') */
  export function GetFileExtension(fileName: string): string
  
  /** Get pointer to filename for a path string */
  export function GetFileName(filePath: string): string
  
  /** Get filename string without extension (uses static string) */
  export function GetFileNameWithoutExt(filePath: string): string
  
  /** Get full path for a given fileName with path (uses static string) */
  export function GetDirectoryPath(filePath: string): string
  
  /** Get previous directory path for a given path (uses static string) */
  export function GetPrevDirectoryPath(dirPath: string): string
  
  /** Get current working directory (uses static string) */
  export function GetWorkingDirectory(): string
  
  /** Get filenames in a directory path (memory should be freed) */
  export function GetDirectoryFiles(dirPath: string, count: number): number
  
  /** Clear directory files paths buffers (free memory) */
  export function ClearDirectoryFiles(): void
  
  /** Change working directory, return true on success */
  export function ChangeDirectory(dir: string): boolean
  
  /** Check if a file has been dropped into window */
  export function IsFileDropped(): boolean
  
  /** Get dropped files names (memory should be freed) */
  export function GetDroppedFiles(count: number): number
  
  /** Clear dropped files paths buffer (free memory) */
  export function ClearDroppedFiles(): void
  
  /** Get file modification time (last write time) */
  export function GetFileModTime(fileName: string): number
  
  /** Compress data (DEFLATE algorithm) */
  export function CompressData(data: Buffer, dataLength: number, compDataLength: number): Buffer
  
  /** Decompress data (DEFLATE algorithm) */
  export function DecompressData(compData: Buffer, compDataLength: number, dataLength: number): Buffer
  
  /** Encode data to Base64 string */
  export function EncodeDataBase64(data: Buffer, dataLength: number, outputLength: number): string
  
  /** Decode Base64 string data */
  export function DecodeDataBase64(data: Buffer, outputLength: number): Buffer
  
  /** Save integer value to storage file (to defined position), returns true on success */
  export function SaveStorageValue(position: number, value: number): boolean
  
  /** Load integer value from storage file (from defined position) */
  export function LoadStorageValue(position: number): number
  
  /** Open URL with default system browser (if available) */
  export function OpenURL(url: string): void
  
  /** Check if a key has been pressed once */
  export function IsKeyPressed(key: number): boolean
  
  /** Check if a key is being pressed */
  export function IsKeyDown(key: number): boolean
  
  /** Check if a key has been released once */
  export function IsKeyReleased(key: number): boolean
  
  /** Check if a key is NOT being pressed */
  export function IsKeyUp(key: number): boolean
  
  /** Set a custom key to exit program (default is ESC) */
  export function SetExitKey(key: number): void
  
  /** Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty */
  export function GetKeyPressed(): number
  
  /** Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty */
  export function GetCharPressed(): number
  
  /** Check if a gamepad is available */
  export function IsGamepadAvailable(gamepad: number): boolean
  
  /** Get gamepad internal name id */
  export function GetGamepadName(gamepad: number): string
  
  /** Check if a gamepad button has been pressed once */
  export function IsGamepadButtonPressed(gamepad: number, button: number): boolean
  
  /** Check if a gamepad button is being pressed */
  export function IsGamepadButtonDown(gamepad: number, button: number): boolean
  
  /** Check if a gamepad button has been released once */
  export function IsGamepadButtonReleased(gamepad: number, button: number): boolean
  
  /** Check if a gamepad button is NOT being pressed */
  export function IsGamepadButtonUp(gamepad: number, button: number): boolean
  
  /** Get the last gamepad button pressed */
  export function GetGamepadButtonPressed(): number
  
  /** Get gamepad axis count for a gamepad */
  export function GetGamepadAxisCount(gamepad: number): number
  
  /** Get axis movement value for a gamepad axis */
  export function GetGamepadAxisMovement(gamepad: number, axis: number): number
  
  /** Set internal gamepad mappings (SDL_GameControllerDB) */
  export function SetGamepadMappings(mappings: string): number
  
  /** Check if a mouse button has been pressed once */
  export function IsMouseButtonPressed(button: number): boolean
  
  /** Check if a mouse button is being pressed */
  export function IsMouseButtonDown(button: number): boolean
  
  /** Check if a mouse button has been released once */
  export function IsMouseButtonReleased(button: number): boolean
  
  /** Check if a mouse button is NOT being pressed */
  export function IsMouseButtonUp(button: number): boolean
  
  /** Get mouse position X */
  export function GetMouseX(): number
  
  /** Get mouse position Y */
  export function GetMouseY(): number
  
  /** Get mouse position XY */
  export function GetMousePosition(): Vector2
  
  /** Get mouse delta between frames */
  export function GetMouseDelta(): Vector2
  
  /** Set mouse position XY */
  export function SetMousePosition(x: number, y: number): void
  
  /** Set mouse offset */
  export function SetMouseOffset(offsetX: number, offsetY: number): void
  
  /** Set mouse scaling */
  export function SetMouseScale(scaleX: number, scaleY: number): void
  
  /** Get mouse wheel movement Y */
  export function GetMouseWheelMove(): number
  
  /** Set mouse cursor */
  export function SetMouseCursor(cursor: number): void
  
  /** Get touch position X for touch point 0 (relative to screen size) */
  export function GetTouchX(): number
  
  /** Get touch position Y for touch point 0 (relative to screen size) */
  export function GetTouchY(): number
  
  /** Get touch position XY for a touch point index (relative to screen size) */
  export function GetTouchPosition(index: number): Vector2
  
  /** Get touch point identifier for given index */
  export function GetTouchPointId(index: number): number
  
  /** Get number of touch points */
  export function GetTouchPointCount(): number
  
  /** Enable a set of gestures using flags */
  export function SetGesturesEnabled(flags: number): void
  
  /** Check if a gesture have been detected */
  export function IsGestureDetected(gesture: number): boolean
  
  /** Get latest detected gesture */
  export function GetGestureDetected(): number
  
  /** Get gesture hold time in milliseconds */
  export function GetGestureHoldDuration(): number
  
  /** Get gesture drag vector */
  export function GetGestureDragVector(): Vector2
  
  /** Get gesture drag angle */
  export function GetGestureDragAngle(): number
  
  /** Get gesture pinch delta */
  export function GetGesturePinchVector(): Vector2
  
  /** Get gesture pinch angle */
  export function GetGesturePinchAngle(): number
  
  /** Set camera mode (multiple camera modes available) */
  export function SetCameraMode(camera: Camera3D, mode: number): void
  
  /** Update camera position for selected mode */
  export function UpdateCamera(camera: Camera3D): void
  
  /** Set camera pan key to combine with mouse movement (free camera) */
  export function SetCameraPanControl(keyPan: number): void
  
  /** Set camera alt key to combine with mouse movement (free camera) */
  export function SetCameraAltControl(keyAlt: number): void
  
  /** Set camera smooth zoom key to combine with mouse (free camera) */
  export function SetCameraSmoothZoomControl(keySmoothZoom: number): void
  
  /** Set camera move controls (1st person and 3rd person cameras) */
  export function SetCameraMoveControls(keyFront: number, keyBack: number, keyRight: number, keyLeft: number, keyUp: number, keyDown: number): void
  
  /** Set texture and rectangle to be used on shapes drawing */
  export function SetShapesTexture(texture: Texture, source: Rectangle): void
  
  /** Draw a pixel */
  export function DrawPixel(posX: number, posY: number, color: Color): void
  
  /** Draw a pixel (Vector version) */
  export function DrawPixelV(position: Vector2, color: Color): void
  
  /** Draw a line */
  export function DrawLine(startPosX: number, startPosY: number, endPosX: number, endPosY: number, color: Color): void
  
  /** Draw a line (Vector version) */
  export function DrawLineV(startPos: Vector2, endPos: Vector2, color: Color): void
  
  /** Draw a line defining thickness */
  export function DrawLineEx(startPos: Vector2, endPos: Vector2, thick: number, color: Color): void
  
  /** Draw a line using cubic-bezier curves in-out */
  export function DrawLineBezier(startPos: Vector2, endPos: Vector2, thick: number, color: Color): void
  
  /** Draw line using quadratic bezier curves with a control point */
  export function DrawLineBezierQuad(startPos: Vector2, endPos: Vector2, controlPos: Vector2, thick: number, color: Color): void
  
  /** Draw line using cubic bezier curves with 2 control points */
  export function DrawLineBezierCubic(startPos: Vector2, endPos: Vector2, startControlPos: Vector2, endControlPos: Vector2, thick: number, color: Color): void
  
  /** Draw lines sequence */
  export function DrawLineStrip(points: number, pointCount: number, color: Color): void
  
  /** Draw a color-filled circle */
  export function DrawCircle(centerX: number, centerY: number, radius: number, color: Color): void
  
  /** Draw a piece of a circle */
  export function DrawCircleSector(center: Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: Color): void
  
  /** Draw circle sector outline */
  export function DrawCircleSectorLines(center: Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: Color): void
  
  /** Draw a gradient-filled circle */
  export function DrawCircleGradient(centerX: number, centerY: number, radius: number, color1: Color, color2: Color): void
  
  /** Draw a color-filled circle (Vector version) */
  export function DrawCircleV(center: Vector2, radius: number, color: Color): void
  
  /** Draw circle outline */
  export function DrawCircleLines(centerX: number, centerY: number, radius: number, color: Color): void
  
  /** Draw ellipse */
  export function DrawEllipse(centerX: number, centerY: number, radiusH: number, radiusV: number, color: Color): void
  
  /** Draw ellipse outline */
  export function DrawEllipseLines(centerX: number, centerY: number, radiusH: number, radiusV: number, color: Color): void
  
  /** Draw ring */
  export function DrawRing(center: Vector2, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: Color): void
  
  /** Draw ring outline */
  export function DrawRingLines(center: Vector2, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: Color): void
  
  /** Draw a color-filled rectangle */
  export function DrawRectangle(posX: number, posY: number, width: number, height: number, color: Color): void
  
  /** Draw a color-filled rectangle (Vector version) */
  export function DrawRectangleV(position: Vector2, size: Vector2, color: Color): void
  
  /** Draw a color-filled rectangle */
  export function DrawRectangleRec(rec: Rectangle, color: Color): void
  
  /** Draw a color-filled rectangle with pro parameters */
  export function DrawRectanglePro(rec: Rectangle, origin: Vector2, rotation: number, color: Color): void
  
  /** Draw a vertical-gradient-filled rectangle */
  export function DrawRectangleGradientV(posX: number, posY: number, width: number, height: number, color1: Color, color2: Color): void
  
  /** Draw a horizontal-gradient-filled rectangle */
  export function DrawRectangleGradientH(posX: number, posY: number, width: number, height: number, color1: Color, color2: Color): void
  
  /** Draw a gradient-filled rectangle with custom vertex colors */
  export function DrawRectangleGradientEx(rec: Rectangle, col1: Color, col2: Color, col3: Color, col4: Color): void
  
  /** Draw rectangle outline */
  export function DrawRectangleLines(posX: number, posY: number, width: number, height: number, color: Color): void
  
  /** Draw rectangle outline with extended parameters */
  export function DrawRectangleLinesEx(rec: Rectangle, lineThick: number, color: Color): void
  
  /** Draw rectangle with rounded edges */
  export function DrawRectangleRounded(rec: Rectangle, roundness: number, segments: number, color: Color): void
  
  /** Draw rectangle with rounded edges outline */
  export function DrawRectangleRoundedLines(rec: Rectangle, roundness: number, segments: number, lineThick: number, color: Color): void
  
  /** Draw a color-filled triangle (vertex in counter-clockwise order!) */
  export function DrawTriangle(v1: Vector2, v2: Vector2, v3: Vector2, color: Color): void
  
  /** Draw triangle outline (vertex in counter-clockwise order!) */
  export function DrawTriangleLines(v1: Vector2, v2: Vector2, v3: Vector2, color: Color): void
  
  /** Draw a triangle fan defined by points (first vertex is the center) */
  export function DrawTriangleFan(points: number, pointCount: number, color: Color): void
  
  /** Draw a triangle strip defined by points */
  export function DrawTriangleStrip(points: number, pointCount: number, color: Color): void
  
  /** Draw a regular polygon (Vector version) */
  export function DrawPoly(center: Vector2, sides: number, radius: number, rotation: number, color: Color): void
  
  /** Draw a polygon outline of n sides */
  export function DrawPolyLines(center: Vector2, sides: number, radius: number, rotation: number, color: Color): void
  
  /** Draw a polygon outline of n sides with extended parameters */
  export function DrawPolyLinesEx(center: Vector2, sides: number, radius: number, rotation: number, lineThick: number, color: Color): void
  
  /** Check collision between two rectangles */
  export function CheckCollisionRecs(rec1: Rectangle, rec2: Rectangle): boolean
  
  /** Check collision between two circles */
  export function CheckCollisionCircles(center1: Vector2, radius1: number, center2: Vector2, radius2: number): boolean
  
  /** Check collision between circle and rectangle */
  export function CheckCollisionCircleRec(center: Vector2, radius: number, rec: Rectangle): boolean
  
  /** Check if point is inside rectangle */
  export function CheckCollisionPointRec(point: Vector2, rec: Rectangle): boolean
  
  /** Check if point is inside circle */
  export function CheckCollisionPointCircle(point: Vector2, center: Vector2, radius: number): boolean
  
  /** Check if point is inside a triangle */
  export function CheckCollisionPointTriangle(point: Vector2, p1: Vector2, p2: Vector2, p3: Vector2): boolean
  
  /** Check the collision between two lines defined by two points each, returns collision point by reference */
  export function CheckCollisionLines(startPos1: Vector2, endPos1: Vector2, startPos2: Vector2, endPos2: Vector2, collisionPoint: number): boolean
  
  /** Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold] */
  export function CheckCollisionPointLine(point: Vector2, p1: Vector2, p2: Vector2, threshold: number): boolean
  
  /** Get collision rectangle for two rectangles collision */
  export function GetCollisionRec(rec1: Rectangle, rec2: Rectangle): Rectangle
  
  /** Load image from file into CPU memory (RAM) */
  export function LoadImage(fileName: string): Image
  
  /** Load image from RAW file data */
  export function LoadImageRaw(fileName: string, width: number, height: number, format: number, headerSize: number): Image
  
  /** Load image sequence from file (frames appended to image.data) */
  export function LoadImageAnim(fileName: string, frames: number): Image
  
  /** Load image from memory buffer, fileType refers to extension: i.e. '.png' */
  export function LoadImageFromMemory(fileType: string, fileData: Buffer, dataSize: number): Image
  
  /** Load image from GPU texture data */
  export function LoadImageFromTexture(texture: Texture): Image
  
  /** Load image from screen buffer and (screenshot) */
  export function LoadImageFromScreen(): Image
  
  /** Unload image from CPU memory (RAM) */
  export function UnloadImage(image: Image): void
  
  /** Export image data to file, returns true on success */
  export function ExportImage(image: Image, fileName: string): boolean
  
  /** Export image as code file defining an array of bytes, returns true on success */
  export function ExportImageAsCode(image: Image, fileName: string): boolean
  
  /** Generate image: plain color */
  export function GenImageColor(width: number, height: number, color: Color): Image
  
  /** Generate image: vertical gradient */
  export function GenImageGradientV(width: number, height: number, top: Color, bottom: Color): Image
  
  /** Generate image: horizontal gradient */
  export function GenImageGradientH(width: number, height: number, left: Color, right: Color): Image
  
  /** Generate image: radial gradient */
  export function GenImageGradientRadial(width: number, height: number, density: number, inner: Color, outer: Color): Image
  
  /** Generate image: checked */
  export function GenImageChecked(width: number, height: number, checksX: number, checksY: number, col1: Color, col2: Color): Image
  
  /** Generate image: white noise */
  export function GenImageWhiteNoise(width: number, height: number, factor: number): Image
  
  /** Generate image: cellular algorithm, bigger tileSize means bigger cells */
  export function GenImageCellular(width: number, height: number, tileSize: number): Image
  
  /** Create an image duplicate (useful for transformations) */
  export function ImageCopy(image: Image): Image
  
  /** Create an image from another image piece */
  export function ImageFromImage(image: Image, rec: Rectangle): Image
  
  /** Create an image from text (default font) */
  export function ImageText(text: string, fontSize: number, color: Color): Image
  
  /** Create an image from text (custom sprite font) */
  export function ImageTextEx(font: Font, text: string, fontSize: number, spacing: number, tint: Color): Image
  
  /** Convert image data to desired format */
  export function ImageFormat(image: Image, newFormat: number): void
  
  /** Convert image to POT (power-of-two) */
  export function ImageToPOT(image: Image, fill: Color): void
  
  /** Crop an image to a defined rectangle */
  export function ImageCrop(image: Image, crop: Rectangle): void
  
  /** Crop image depending on alpha value */
  export function ImageAlphaCrop(image: Image, threshold: number): void
  
  /** Clear alpha channel to desired color */
  export function ImageAlphaClear(image: Image, color: Color, threshold: number): void
  
  /** Apply alpha mask to image */
  export function ImageAlphaMask(image: Image, alphaMask: Image): void
  
  /** Premultiply alpha channel */
  export function ImageAlphaPremultiply(image: Image): void
  
  /** Resize image (Bicubic scaling algorithm) */
  export function ImageResize(image: Image, newWidth: number, newHeight: number): void
  
  /** Resize image (Nearest-Neighbor scaling algorithm) */
  export function ImageResizeNN(image: Image, newWidth: number, newHeight: number): void
  
  /** Resize canvas and fill with color */
  export function ImageResizeCanvas(image: Image, newWidth: number, newHeight: number, offsetX: number, offsetY: number, fill: Color): void
  
  /** Compute all mipmap levels for a provided image */
  export function ImageMipmaps(image: Image): void
  
  /** Dither image data to 16bpp or lower (Floyd-Steinberg dithering) */
  export function ImageDither(image: Image, rBpp: number, gBpp: number, bBpp: number, aBpp: number): void
  
  /** Flip image vertically */
  export function ImageFlipVertical(image: Image): void
  
  /** Flip image horizontally */
  export function ImageFlipHorizontal(image: Image): void
  
  /** Rotate image clockwise 90deg */
  export function ImageRotateCW(image: Image): void
  
  /** Rotate image counter-clockwise 90deg */
  export function ImageRotateCCW(image: Image): void
  
  /** Modify image color: tint */
  export function ImageColorTint(image: Image, color: Color): void
  
  /** Modify image color: invert */
  export function ImageColorInvert(image: Image): void
  
  /** Modify image color: grayscale */
  export function ImageColorGrayscale(image: Image): void
  
  /** Modify image color: contrast (-100 to 100) */
  export function ImageColorContrast(image: Image, contrast: number): void
  
  /** Modify image color: brightness (-255 to 255) */
  export function ImageColorBrightness(image: Image, brightness: number): void
  
  /** Modify image color: replace color */
  export function ImageColorReplace(image: Image, color: Color, replace: Color): void
  
  /** Load color data from image as a Color array (RGBA - 32bit) */
  export function LoadImageColors(image: Image): number
  
  /** Load colors palette from image as a Color array (RGBA - 32bit) */
  export function LoadImagePalette(image: Image, maxPaletteSize: number, colorCount: number): number
  
  /** Unload color data loaded with LoadImageColors() */
  export function UnloadImageColors(colors: number): void
  
  /** Unload colors palette loaded with LoadImagePalette() */
  export function UnloadImagePalette(colors: number): void
  
  /** Get image alpha border rectangle */
  export function GetImageAlphaBorder(image: Image, threshold: number): Rectangle
  
  /** Get image pixel color at (x, y) position */
  export function GetImageColor(image: Image, x: number, y: number): Color
  
  /** Clear image background with given color */
  export function ImageClearBackground(dst: Image, color: Color): void
  
  /** Draw pixel within an image */
  export function ImageDrawPixel(dst: Image, posX: number, posY: number, color: Color): void
  
  /** Draw pixel within an image (Vector version) */
  export function ImageDrawPixelV(dst: Image, position: Vector2, color: Color): void
  
  /** Draw line within an image */
  export function ImageDrawLine(dst: Image, startPosX: number, startPosY: number, endPosX: number, endPosY: number, color: Color): void
  
  /** Draw line within an image (Vector version) */
  export function ImageDrawLineV(dst: Image, start: Vector2, end: Vector2, color: Color): void
  
  /** Draw circle within an image */
  export function ImageDrawCircle(dst: Image, centerX: number, centerY: number, radius: number, color: Color): void
  
  /** Draw circle within an image (Vector version) */
  export function ImageDrawCircleV(dst: Image, center: Vector2, radius: number, color: Color): void
  
  /** Draw rectangle within an image */
  export function ImageDrawRectangle(dst: Image, posX: number, posY: number, width: number, height: number, color: Color): void
  
  /** Draw rectangle within an image (Vector version) */
  export function ImageDrawRectangleV(dst: Image, position: Vector2, size: Vector2, color: Color): void
  
  /** Draw rectangle within an image */
  export function ImageDrawRectangleRec(dst: Image, rec: Rectangle, color: Color): void
  
  /** Draw rectangle lines within an image */
  export function ImageDrawRectangleLines(dst: Image, rec: Rectangle, thick: number, color: Color): void
  
  /** Draw a source image within a destination image (tint applied to source) */
  export function ImageDraw(dst: Image, src: Image, srcRec: Rectangle, dstRec: Rectangle, tint: Color): void
  
  /** Draw text (using default font) within an image (destination) */
  export function ImageDrawText(dst: Image, text: string, posX: number, posY: number, fontSize: number, color: Color): void
  
  /** Draw text (custom sprite font) within an image (destination) */
  export function ImageDrawTextEx(dst: Image, font: Font, text: string, position: Vector2, fontSize: number, spacing: number, tint: Color): void
  
  /** Load texture from file into GPU memory (VRAM) */
  export function LoadTexture(fileName: string): Texture2D
  
  /** Load texture from image data */
  export function LoadTextureFromImage(image: Image): Texture2D
  
  /** Load cubemap from image, multiple image cubemap layouts supported */
  export function LoadTextureCubemap(image: Image, layout: number): TextureCubemap
  
  /** Load texture for rendering (framebuffer) */
  export function LoadRenderTexture(width: number, height: number): RenderTexture2D
  
  /** Unload texture from GPU memory (VRAM) */
  export function UnloadTexture(texture: Texture): void
  
  /** Unload render texture from GPU memory (VRAM) */
  export function UnloadRenderTexture(target: RenderTexture): void
  
  /** Update GPU texture with new data */
  export function UpdateTexture(texture: Texture, pixels: number): void
  
  /** Update GPU texture rectangle with new data */
  export function UpdateTextureRec(texture: Texture, rec: Rectangle, pixels: number): void
  
  /** Generate GPU mipmaps for a texture */
  export function GenTextureMipmaps(texture: Texture): void
  
  /** Set texture scaling filter mode */
  export function SetTextureFilter(texture: Texture, filter: number): void
  
  /** Set texture wrapping mode */
  export function SetTextureWrap(texture: Texture, wrap: number): void
  
  /** Draw a Texture2D */
  export function DrawTexture(texture: Texture, posX: number, posY: number, tint: Color): void
  
  /** Draw a Texture2D with position defined as Vector2 */
  export function DrawTextureV(texture: Texture, position: Vector2, tint: Color): void
  
  /** Draw a Texture2D with extended parameters */
  export function DrawTextureEx(texture: Texture, position: Vector2, rotation: number, scale: number, tint: Color): void
  
  /** Draw a part of a texture defined by a rectangle */
  export function DrawTextureRec(texture: Texture, source: Rectangle, position: Vector2, tint: Color): void
  
  /** Draw texture quad with tiling and offset parameters */
  export function DrawTextureQuad(texture: Texture, tiling: Vector2, offset: Vector2, quad: Rectangle, tint: Color): void
  
  /** Draw part of a texture (defined by a rectangle) with rotation and scale tiled into dest. */
  export function DrawTextureTiled(texture: Texture, source: Rectangle, dest: Rectangle, origin: Vector2, rotation: number, scale: number, tint: Color): void
  
  /** Draw a part of a texture defined by a rectangle with 'pro' parameters */
  export function DrawTexturePro(texture: Texture, source: Rectangle, dest: Rectangle, origin: Vector2, rotation: number, tint: Color): void
  
  /** Draws a texture (or part of it) that stretches or shrinks nicely */
  export function DrawTextureNPatch(texture: Texture, nPatchInfo: NPatchInfo, dest: Rectangle, origin: Vector2, rotation: number, tint: Color): void
  
  /** Draw a textured polygon */
  export function DrawTexturePoly(texture: Texture, center: Vector2, points: number, texcoords: number, pointCount: number, tint: Color): void
  
  /** Get color with alpha applied, alpha goes from 0.0f to 1.0f */
  export function Fade(color: Color, alpha: number): Color
  
  /** Get hexadecimal value for a Color */
  export function ColorToInt(color: Color): number
  
  /** Get Color normalized as float [0..1] */
  export function ColorNormalize(color: Color): Vector4
  
  /** Get Color from normalized values [0..1] */
  export function ColorFromNormalized(normalized: Vector4): Color
  
  /** Get HSV values for a Color, hue [0..360], saturation/value [0..1] */
  export function ColorToHSV(color: Color): Vector3
  
  /** Get a Color from HSV values, hue [0..360], saturation/value [0..1] */
  export function ColorFromHSV(hue: number, saturation: number, value: number): Color
  
  /** Get color with alpha applied, alpha goes from 0.0f to 1.0f */
  export function ColorAlpha(color: Color, alpha: number): Color
  
  /** Get src alpha-blended into dst color with tint */
  export function ColorAlphaBlend(dst: Color, src: Color, tint: Color): Color
  
  /** Get Color structure from hexadecimal value */
  export function GetColor(hexValue: number): Color
  
  /** Get Color from a source pixel pointer of certain format */
  export function GetPixelColor(srcPtr: number, format: number): Color
  
  /** Set color formatted into destination pixel pointer */
  export function SetPixelColor(dstPtr: number, color: Color, format: number): void
  
  /** Get pixel data size in bytes for certain format */
  export function GetPixelDataSize(width: number, height: number, format: number): number
  
  /** Get the default Font */
  export function GetFontDefault(): Font
  
  /** Load font from file into GPU memory (VRAM) */
  export function LoadFont(fileName: string): Font
  
  /** Load font from file with extended parameters, use NULL for fontChars and 0 for glyphCount to load the default character set */
  export function LoadFontEx(fileName: string, fontSize: number, fontChars: number, glyphCount: number): Font
  
  /** Load font from Image (XNA style) */
  export function LoadFontFromImage(image: Image, key: Color, firstChar: number): Font
  
  /** Load font from memory buffer, fileType refers to extension: i.e. '.ttf' */
  export function LoadFontFromMemory(fileType: string, fileData: Buffer, dataSize: number, fontSize: number, fontChars: number, glyphCount: number): Font
  
  /** Load font data for further use */
  export function LoadFontData(fileData: Buffer, dataSize: number, fontSize: number, fontChars: number, glyphCount: number, type: number): number
  
  /** Generate image font atlas using chars info */
  export function GenImageFontAtlas(chars: number, recs: number, glyphCount: number, fontSize: number, padding: number, packMethod: number): Image
  
  /** Unload font chars info data (RAM) */
  export function UnloadFontData(chars: number, glyphCount: number): void
  
  /** Unload font from GPU memory (VRAM) */
  export function UnloadFont(font: Font): void
  
  /** Draw current FPS */
  export function DrawFPS(posX: number, posY: number): void
  
  /** Draw text (using default font) */
  export function DrawText(text: string, posX: number, posY: number, fontSize: number, color: Color): void
  
  /** Draw text using font and additional parameters */
  export function DrawTextEx(font: Font, text: string, position: Vector2, fontSize: number, spacing: number, tint: Color): void
  
  /** Draw text using Font and pro parameters (rotation) */
  export function DrawTextPro(font: Font, text: string, position: Vector2, origin: Vector2, rotation: number, fontSize: number, spacing: number, tint: Color): void
  
  /** Draw one character (codepoint) */
  export function DrawTextCodepoint(font: Font, codepoint: number, position: Vector2, fontSize: number, tint: Color): void
  
  /** Measure string width for default font */
  export function MeasureText(text: string, fontSize: number): number
  
  /** Measure string size for Font */
  export function MeasureTextEx(font: Font, text: string, fontSize: number, spacing: number): Vector2
  
  /** Get glyph index position in font for a codepoint (unicode character), fallback to '?' if not found */
  export function GetGlyphIndex(font: Font, codepoint: number): number
  
  /** Get glyph font info data for a codepoint (unicode character), fallback to '?' if not found */
  export function GetGlyphInfo(font: Font, codepoint: number): GlyphInfo
  
  /** Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to '?' if not found */
  export function GetGlyphAtlasRec(font: Font, codepoint: number): Rectangle
  
  /** Load all codepoints from a UTF-8 text string, codepoints count returned by parameter */
  export function LoadCodepoints(text: string, count: number): number
  
  /** Unload codepoints data from memory */
  export function UnloadCodepoints(codepoints: number): void
  
  /** Get total number of codepoints in a UTF-8 encoded string */
  export function GetCodepointCount(text: string): number
  
  /** Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure */
  export function GetCodepoint(text: string, bytesProcessed: number): number
  
  /** Encode one codepoint into UTF-8 byte array (array length returned as parameter) */
  export function CodepointToUTF8(codepoint: number, byteSize: number): string
  
  /** Encode text as codepoints array into UTF-8 text string (WARNING: memory must be freed!) */
  export function TextCodepointsToUTF8(codepoints: number, length: number): string
  
  /** Copy one string to another, returns bytes copied */
  export function TextCopy(dst: string, src: string): number
  
  /** Check if two text string are equal */
  export function TextIsEqual(text1: string, text2: string): boolean
  
  /** Get text length, checks for '\0' ending */
  export function TextLength(text: string): number
  
  /** Get a piece of a text string */
  export function TextSubtext(text: string, position: number, length: number): string
  
  /** Replace text string (WARNING: memory must be freed!) */
  export function TextReplace(text: string, replace: string, by: string): string
  
  /** Insert text in a position (WARNING: memory must be freed!) */
  export function TextInsert(text: string, insert: string, position: number): string
  
  /** Join text strings with delimiter */
  export function TextJoin(textList: number, count: number, delimiter: string): string
  
  /** Split text into multiple strings */
  export function TextSplit(text: string, delimiter: string, count: number): number
  
  /** Append text at specific position and move cursor! */
  export function TextAppend(text: string, append: string, position: number): void
  
  /** Find first text occurrence within a string */
  export function TextFindIndex(text: string, find: string): number
  
  /** Get upper case version of provided string */
  export function TextToUpper(text: string): string
  
  /** Get lower case version of provided string */
  export function TextToLower(text: string): string
  
  /** Get Pascal case notation version of provided string */
  export function TextToPascal(text: string): string
  
  /** Get integer value from text (negative values not supported) */
  export function TextToInteger(text: string): number
  
  /** Draw a line in 3D world space */
  export function DrawLine3D(startPos: Vector3, endPos: Vector3, color: Color): void
  
  /** Draw a point in 3D space, actually a small line */
  export function DrawPoint3D(position: Vector3, color: Color): void
  
  /** Draw a circle in 3D world space */
  export function DrawCircle3D(center: Vector3, radius: number, rotationAxis: Vector3, rotationAngle: number, color: Color): void
  
  /** Draw a color-filled triangle (vertex in counter-clockwise order!) */
  export function DrawTriangle3D(v1: Vector3, v2: Vector3, v3: Vector3, color: Color): void
  
  /** Draw a triangle strip defined by points */
  export function DrawTriangleStrip3D(points: number, pointCount: number, color: Color): void
  
  /** Draw cube */
  export function DrawCube(position: Vector3, width: number, height: number, length: number, color: Color): void
  
  /** Draw cube (Vector version) */
  export function DrawCubeV(position: Vector3, size: Vector3, color: Color): void
  
  /** Draw cube wires */
  export function DrawCubeWires(position: Vector3, width: number, height: number, length: number, color: Color): void
  
  /** Draw cube wires (Vector version) */
  export function DrawCubeWiresV(position: Vector3, size: Vector3, color: Color): void
  
  /** Draw cube textured */
  export function DrawCubeTexture(texture: Texture, position: Vector3, width: number, height: number, length: number, color: Color): void
  
  /** Draw cube with a region of a texture */
  export function DrawCubeTextureRec(texture: Texture, source: Rectangle, position: Vector3, width: number, height: number, length: number, color: Color): void
  
  /** Draw sphere */
  export function DrawSphere(centerPos: Vector3, radius: number, color: Color): void
  
  /** Draw sphere with extended parameters */
  export function DrawSphereEx(centerPos: Vector3, radius: number, rings: number, slices: number, color: Color): void
  
  /** Draw sphere wires */
  export function DrawSphereWires(centerPos: Vector3, radius: number, rings: number, slices: number, color: Color): void
  
  /** Draw a cylinder/cone */
  export function DrawCylinder(position: Vector3, radiusTop: number, radiusBottom: number, height: number, slices: number, color: Color): void
  
  /** Draw a cylinder with base at startPos and top at endPos */
  export function DrawCylinderEx(startPos: Vector3, endPos: Vector3, startRadius: number, endRadius: number, sides: number, color: Color): void
  
  /** Draw a cylinder/cone wires */
  export function DrawCylinderWires(position: Vector3, radiusTop: number, radiusBottom: number, height: number, slices: number, color: Color): void
  
  /** Draw a cylinder wires with base at startPos and top at endPos */
  export function DrawCylinderWiresEx(startPos: Vector3, endPos: Vector3, startRadius: number, endRadius: number, sides: number, color: Color): void
  
  /** Draw a plane XZ */
  export function DrawPlane(centerPos: Vector3, size: Vector2, color: Color): void
  
  /** Draw a ray line */
  export function DrawRay(ray: Ray, color: Color): void
  
  /** Draw a grid (centered at (0, 0, 0)) */
  export function DrawGrid(slices: number, spacing: number): void
  
  /** Load model from files (meshes and materials) */
  export function LoadModel(fileName: string): Model
  
  /** Load model from generated mesh (default material) */
  export function LoadModelFromMesh(mesh: Mesh): Model
  
  /** Unload model (including meshes) from memory (RAM and/or VRAM) */
  export function UnloadModel(model: Model): void
  
  /** Unload model (but not meshes) from memory (RAM and/or VRAM) */
  export function UnloadModelKeepMeshes(model: Model): void
  
  /** Compute model bounding box limits (considers all meshes) */
  export function GetModelBoundingBox(model: Model): BoundingBox
  
  /** Draw a model (with texture if set) */
  export function DrawModel(model: Model, position: Vector3, scale: number, tint: Color): void
  
  /** Draw a model with extended parameters */
  export function DrawModelEx(model: Model, position: Vector3, rotationAxis: Vector3, rotationAngle: number, scale: Vector3, tint: Color): void
  
  /** Draw a model wires (with texture if set) */
  export function DrawModelWires(model: Model, position: Vector3, scale: number, tint: Color): void
  
  /** Draw a model wires (with texture if set) with extended parameters */
  export function DrawModelWiresEx(model: Model, position: Vector3, rotationAxis: Vector3, rotationAngle: number, scale: Vector3, tint: Color): void
  
  /** Draw bounding box (wires) */
  export function DrawBoundingBox(box: BoundingBox, color: Color): void
  
  /** Draw a billboard texture */
  export function DrawBillboard(camera: Camera3D, texture: Texture, position: Vector3, size: number, tint: Color): void
  
  /** Draw a billboard texture defined by source */
  export function DrawBillboardRec(camera: Camera3D, texture: Texture, source: Rectangle, position: Vector3, size: Vector2, tint: Color): void
  
  /** Draw a billboard texture defined by source and rotation */
  export function DrawBillboardPro(camera: Camera3D, texture: Texture, source: Rectangle, position: Vector3, up: Vector3, size: Vector2, origin: Vector2, rotation: number, tint: Color): void
  
  /** Upload mesh vertex data in GPU and provide VAO/VBO ids */
  export function UploadMesh(mesh: Mesh, dynamic: boolean): void
  
  /** Update mesh vertex data in GPU for a specific buffer index */
  export function UpdateMeshBuffer(mesh: Mesh, index: number, data: number, dataSize: number, offset: number): void
  
  /** Unload mesh data from CPU and GPU */
  export function UnloadMesh(mesh: Mesh): void
  
  /** Export mesh data to file, returns true on success */
  export function ExportMesh(mesh: Mesh, fileName: string): boolean
  
  /** Compute mesh bounding box limits */
  export function GetMeshBoundingBox(mesh: Mesh): BoundingBox
  
  /** Compute mesh tangents */
  export function GenMeshTangents(mesh: Mesh): void
  
  /** Compute mesh binormals */
  export function GenMeshBinormals(mesh: Mesh): void
  
  /** Generate polygonal mesh */
  export function GenMeshPoly(sides: number, radius: number): Mesh
  
  /** Generate plane mesh (with subdivisions) */
  export function GenMeshPlane(width: number, length: number, resX: number, resZ: number): Mesh
  
  /** Generate cuboid mesh */
  export function GenMeshCube(width: number, height: number, length: number): Mesh
  
  /** Generate sphere mesh (standard sphere) */
  export function GenMeshSphere(radius: number, rings: number, slices: number): Mesh
  
  /** Generate half-sphere mesh (no bottom cap) */
  export function GenMeshHemiSphere(radius: number, rings: number, slices: number): Mesh
  
  /** Generate cylinder mesh */
  export function GenMeshCylinder(radius: number, height: number, slices: number): Mesh
  
  /** Generate cone/pyramid mesh */
  export function GenMeshCone(radius: number, height: number, slices: number): Mesh
  
  /** Generate torus mesh */
  export function GenMeshTorus(radius: number, size: number, radSeg: number, sides: number): Mesh
  
  /** Generate trefoil knot mesh */
  export function GenMeshKnot(radius: number, size: number, radSeg: number, sides: number): Mesh
  
  /** Generate heightmap mesh from image data */
  export function GenMeshHeightmap(heightmap: Image, size: Vector3): Mesh
  
  /** Generate cubes-based map mesh from image data */
  export function GenMeshCubicmap(cubicmap: Image, cubeSize: Vector3): Mesh
  
  /** Set material for a mesh */
  export function SetModelMeshMaterial(model: Model, meshId: number, materialId: number): void
  
  /** Load model animations from file */
  export function LoadModelAnimations(fileName: string, animCount: number): number
  
  /** Update model animation pose */
  export function UpdateModelAnimation(model: Model, anim: ModelAnimation, frame: number): void
  
  /** Unload animation data */
  export function UnloadModelAnimation(anim: ModelAnimation): void
  
  /** Unload animation array data */
  export function UnloadModelAnimations(animations: number, count: number): void
  
  /** Check model animation skeleton match */
  export function IsModelAnimationValid(model: Model, anim: ModelAnimation): boolean
  
  /** Check collision between two spheres */
  export function CheckCollisionSpheres(center1: Vector3, radius1: number, center2: Vector3, radius2: number): boolean
  
  /** Check collision between two bounding boxes */
  export function CheckCollisionBoxes(box1: BoundingBox, box2: BoundingBox): boolean
  
  /** Check collision between box and sphere */
  export function CheckCollisionBoxSphere(box: BoundingBox, center: Vector3, radius: number): boolean
  
  /** Get collision info between ray and sphere */
  export function GetRayCollisionSphere(ray: Ray, center: Vector3, radius: number): RayCollision
  
  /** Get collision info between ray and box */
  export function GetRayCollisionBox(ray: Ray, box: BoundingBox): RayCollision
  
  /** Get collision info between ray and model */
  export function GetRayCollisionModel(ray: Ray, model: Model): RayCollision
  
  /** Get collision info between ray and mesh */
  export function GetRayCollisionMesh(ray: Ray, mesh: Mesh, transform: Matrix): RayCollision
  
  /** Get collision info between ray and triangle */
  export function GetRayCollisionTriangle(ray: Ray, p1: Vector3, p2: Vector3, p3: Vector3): RayCollision
  
  /** Get collision info between ray and quad */
  export function GetRayCollisionQuad(ray: Ray, p1: Vector3, p2: Vector3, p3: Vector3, p4: Vector3): RayCollision
  
  /** Initialize audio device and context */
  export function InitAudioDevice(): void
  
  /** Close the audio device and context */
  export function CloseAudioDevice(): void
  
  /** Check if audio device has been initialized successfully */
  export function IsAudioDeviceReady(): boolean
  
  /** Set master volume (listener) */
  export function SetMasterVolume(volume: number): void
  
  /** Load wave data from file */
  export function LoadWave(fileName: string): Wave
  
  /** Load wave from memory buffer, fileType refers to extension: i.e. '.wav' */
  export function LoadWaveFromMemory(fileType: string, fileData: Buffer, dataSize: number): Wave
  
  /** Load sound from file */
  export function LoadSound(fileName: string): Sound
  
  /** Load sound from wave data */
  export function LoadSoundFromWave(wave: Wave): Sound
  
  /** Update sound buffer with new data */
  export function UpdateSound(sound: Sound, data: number, sampleCount: number): void
  
  /** Unload wave data */
  export function UnloadWave(wave: Wave): void
  
  /** Unload sound */
  export function UnloadSound(sound: Sound): void
  
  /** Export wave data to file, returns true on success */
  export function ExportWave(wave: Wave, fileName: string): boolean
  
  /** Export wave sample data to code (.h), returns true on success */
  export function ExportWaveAsCode(wave: Wave, fileName: string): boolean
  
  /** Play a sound */
  export function PlaySound(sound: Sound): void
  
  /** Stop playing a sound */
  export function StopSound(sound: Sound): void
  
  /** Pause a sound */
  export function PauseSound(sound: Sound): void
  
  /** Resume a paused sound */
  export function ResumeSound(sound: Sound): void
  
  /** Play a sound (using multichannel buffer pool) */
  export function PlaySoundMulti(sound: Sound): void
  
  /** Stop any sound playing (using multichannel buffer pool) */
  export function StopSoundMulti(): void
  
  /** Get number of sounds playing in the multichannel */
  export function GetSoundsPlaying(): number
  
  /** Check if a sound is currently playing */
  export function IsSoundPlaying(sound: Sound): boolean
  
  /** Set volume for a sound (1.0 is max level) */
  export function SetSoundVolume(sound: Sound, volume: number): void
  
  /** Set pitch for a sound (1.0 is base level) */
  export function SetSoundPitch(sound: Sound, pitch: number): void
  
  /** Convert wave data to desired format */
  export function WaveFormat(wave: Wave, sampleRate: number, sampleSize: number, channels: number): void
  
  /** Copy a wave to a new wave */
  export function WaveCopy(wave: Wave): Wave
  
  /** Crop a wave to defined samples range */
  export function WaveCrop(wave: Wave, initSample: number, finalSample: number): void
  
  /** Load samples data from wave as a floats array */
  export function LoadWaveSamples(wave: Wave): number
  
  /** Unload samples data loaded with LoadWaveSamples() */
  export function UnloadWaveSamples(samples: number): void
  
  /** Load music stream from file */
  export function LoadMusicStream(fileName: string): Music
  
  /** Load music stream from data */
  export function LoadMusicStreamFromMemory(fileType: string, data: Buffer, dataSize: number): Music
  
  /** Unload music stream */
  export function UnloadMusicStream(music: Music): void
  
  /** Start music playing */
  export function PlayMusicStream(music: Music): void
  
  /** Check if music is playing */
  export function IsMusicStreamPlaying(music: Music): boolean
  
  /** Updates buffers for music streaming */
  export function UpdateMusicStream(music: Music): void
  
  /** Stop music playing */
  export function StopMusicStream(music: Music): void
  
  /** Pause music playing */
  export function PauseMusicStream(music: Music): void
  
  /** Resume playing paused music */
  export function ResumeMusicStream(music: Music): void
  
  /** Seek music to a position (in seconds) */
  export function SeekMusicStream(music: Music, position: number): void
  
  /** Set volume for music (1.0 is max level) */
  export function SetMusicVolume(music: Music, volume: number): void
  
  /** Set pitch for a music (1.0 is base level) */
  export function SetMusicPitch(music: Music, pitch: number): void
  
  /** Get music time length (in seconds) */
  export function GetMusicTimeLength(music: Music): number
  
  /** Get current music time played (in seconds) */
  export function GetMusicTimePlayed(music: Music): number
  
  /** Load audio stream (to stream raw audio pcm data) */
  export function LoadAudioStream(sampleRate: number, sampleSize: number, channels: number): AudioStream
  
  /** Unload audio stream and free memory */
  export function UnloadAudioStream(stream: AudioStream): void
  
  /** Update audio stream buffers with data */
  export function UpdateAudioStream(stream: AudioStream, data: number, frameCount: number): void
  
  /** Check if any audio stream buffers requires refill */
  export function IsAudioStreamProcessed(stream: AudioStream): boolean
  
  /** Play audio stream */
  export function PlayAudioStream(stream: AudioStream): void
  
  /** Pause audio stream */
  export function PauseAudioStream(stream: AudioStream): void
  
  /** Resume audio stream */
  export function ResumeAudioStream(stream: AudioStream): void
  
  /** Check if audio stream is playing */
  export function IsAudioStreamPlaying(stream: AudioStream): boolean
  
  /** Stop audio stream */
  export function StopAudioStream(stream: AudioStream): void
  
  /** Set volume for audio stream (1.0 is max level) */
  export function SetAudioStreamVolume(stream: AudioStream, volume: number): void
  
  /** Set pitch for audio stream (1.0 is base level) */
  export function SetAudioStreamPitch(stream: AudioStream, pitch: number): void
  
  /** Default size for new audio streams */
  export function SetAudioStreamBufferSizeDefault(size: number): void
  
  /** Easing: EaseLinearNone. */
  export function EaseLinearNone(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseLinearIn. */
  export function EaseLinearIn(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseLinearOut. */
  export function EaseLinearOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseLinearInOut. */
  export function EaseLinearInOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseSineIn. */
  export function EaseSineIn(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseSineOut. */
  export function EaseSineOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseSineInOut. */
  export function EaseSineInOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseCircIn. */
  export function EaseCircIn(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseCircOut. */
  export function EaseCircOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseCircInOut. */
  export function EaseCircInOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseCubicIn. */
  export function EaseCubicIn(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseCubicOut. */
  export function EaseCubicOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseCubicInOut. */
  export function EaseCubicInOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseQuadIn. */
  export function EaseQuadIn(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseQuadOut. */
  export function EaseQuadOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseQuadInOut. */
  export function EaseQuadInOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseExpoIn. */
  export function EaseExpoIn(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseExpoOut. */
  export function EaseExpoOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseExpoInOut. */
  export function EaseExpoInOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseBackIn. */
  export function EaseBackIn(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseBackOut. */
  export function EaseBackOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseBackInOut. */
  export function EaseBackInOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseBounceOut. */
  export function EaseBounceOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseBounceIn. */
  export function EaseBounceIn(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseBounceInOut. */
  export function EaseBounceInOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseElasticIn. */
  export function EaseElasticIn(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseElasticOut. */
  export function EaseElasticOut(t: number, b: number, c: number, d: number): number
  
  /** Easing: EaseElasticInOut. */
  export function EaseElasticInOut(t: number, b: number, c: number, d: number): number
  

  /** Set shader uniform float */
  export function SetShaderFloat(shader: Shader, locIndex: number, value: number): void
  /** Set shader uniform int */
  export function SetShaderInt(shader: Shader, locIndex: number, value: number): void
  /** Set shader uniform Vec2 */
  export function SetShaderVec2(shader: Shader, locIndex: number, value: Vector2): void
  /** Set shader uniform Vec3 */
  export function SetShaderVector3(shader: Shader, locIndex: number, value: Vector3): void
  /** Set shader uniform Vec4 */
  export function SetShaderVector4(shader: Shader, locIndex: number, value: Vector4): void

    /** Set to try enabling V-Sync on GPU */
  export const FLAG_VSYNC_HINT = 64
  /** Set to run program in fullscreen */
  export const FLAG_FULLSCREEN_MODE = 2
  /** Set to allow resizable window */
  export const FLAG_WINDOW_RESIZABLE = 4
  /** Set to disable window decoration (frame and buttons) */
  export const FLAG_WINDOW_UNDECORATED = 8
  /** Set to hide window */
  export const FLAG_WINDOW_HIDDEN = 128
  /** Set to minimize window (iconify) */
  export const FLAG_WINDOW_MINIMIZED = 512
  /** Set to maximize window (expanded to monitor) */
  export const FLAG_WINDOW_MAXIMIZED = 1024
  /** Set to window non focused */
  export const FLAG_WINDOW_UNFOCUSED = 2048
  /** Set to window always on top */
  export const FLAG_WINDOW_TOPMOST = 4096
  /** Set to allow windows running while minimized */
  export const FLAG_WINDOW_ALWAYS_RUN = 256
  /** Set to allow transparent framebuffer */
  export const FLAG_WINDOW_TRANSPARENT = 16
  /** Set to support HighDPI */
  export const FLAG_WINDOW_HIGHDPI = 8192
  /** Set to try enabling MSAA 4X */
  export const FLAG_MSAA_4X_HINT = 32
  /** Set to try enabling interlaced video format (for V3D) */
  export const FLAG_INTERLACED_HINT = 65536
  /** Display all logs */
  export const LOG_ALL = 0
  /** Trace logging, intended for internal use only */
  export const LOG_TRACE = 1
  /** Debug logging, used for internal debugging, it should be disabled on release builds */
  export const LOG_DEBUG = 2
  /** Info logging, used for program execution info */
  export const LOG_INFO = 3
  /** Warning logging, used on recoverable failures */
  export const LOG_WARNING = 4
  /** Error logging, used on unrecoverable failures */
  export const LOG_ERROR = 5
  /** Fatal logging, used to abort program: exit(EXIT_FAILURE) */
  export const LOG_FATAL = 6
  /** Disable logging */
  export const LOG_NONE = 7
  /** Key: NULL, used for no key pressed */
  export const KEY_NULL = 0
  /** Key: ' */
  export const KEY_APOSTROPHE = 39
  /** Key: , */
  export const KEY_COMMA = 44
  /** Key: - */
  export const KEY_MINUS = 45
  /** Key: . */
  export const KEY_PERIOD = 46
  /** Key: / */
  export const KEY_SLASH = 47
  /** Key: 0 */
  export const KEY_ZERO = 48
  /** Key: 1 */
  export const KEY_ONE = 49
  /** Key: 2 */
  export const KEY_TWO = 50
  /** Key: 3 */
  export const KEY_THREE = 51
  /** Key: 4 */
  export const KEY_FOUR = 52
  /** Key: 5 */
  export const KEY_FIVE = 53
  /** Key: 6 */
  export const KEY_SIX = 54
  /** Key: 7 */
  export const KEY_SEVEN = 55
  /** Key: 8 */
  export const KEY_EIGHT = 56
  /** Key: 9 */
  export const KEY_NINE = 57
  /** Key: ; */
  export const KEY_SEMICOLON = 59
  /** Key: = */
  export const KEY_EQUAL = 61
  /** Key: A | a */
  export const KEY_A = 65
  /** Key: B | b */
  export const KEY_B = 66
  /** Key: C | c */
  export const KEY_C = 67
  /** Key: D | d */
  export const KEY_D = 68
  /** Key: E | e */
  export const KEY_E = 69
  /** Key: F | f */
  export const KEY_F = 70
  /** Key: G | g */
  export const KEY_G = 71
  /** Key: H | h */
  export const KEY_H = 72
  /** Key: I | i */
  export const KEY_I = 73
  /** Key: J | j */
  export const KEY_J = 74
  /** Key: K | k */
  export const KEY_K = 75
  /** Key: L | l */
  export const KEY_L = 76
  /** Key: M | m */
  export const KEY_M = 77
  /** Key: N | n */
  export const KEY_N = 78
  /** Key: O | o */
  export const KEY_O = 79
  /** Key: P | p */
  export const KEY_P = 80
  /** Key: Q | q */
  export const KEY_Q = 81
  /** Key: R | r */
  export const KEY_R = 82
  /** Key: S | s */
  export const KEY_S = 83
  /** Key: T | t */
  export const KEY_T = 84
  /** Key: U | u */
  export const KEY_U = 85
  /** Key: V | v */
  export const KEY_V = 86
  /** Key: W | w */
  export const KEY_W = 87
  /** Key: X | x */
  export const KEY_X = 88
  /** Key: Y | y */
  export const KEY_Y = 89
  /** Key: Z | z */
  export const KEY_Z = 90
  /** Key: [ */
  export const KEY_LEFT_BRACKET = 91
  /** Key: '\' */
  export const KEY_BACKSLASH = 92
  /** Key: ] */
  export const KEY_RIGHT_BRACKET = 93
  /** Key: ` */
  export const KEY_GRAVE = 96
  /** Key: Space */
  export const KEY_SPACE = 32
  /** Key: Esc */
  export const KEY_ESCAPE = 256
  /** Key: Enter */
  export const KEY_ENTER = 257
  /** Key: Tab */
  export const KEY_TAB = 258
  /** Key: Backspace */
  export const KEY_BACKSPACE = 259
  /** Key: Ins */
  export const KEY_INSERT = 260
  /** Key: Del */
  export const KEY_DELETE = 261
  /** Key: Cursor right */
  export const KEY_RIGHT = 262
  /** Key: Cursor left */
  export const KEY_LEFT = 263
  /** Key: Cursor down */
  export const KEY_DOWN = 264
  /** Key: Cursor up */
  export const KEY_UP = 265
  /** Key: Page up */
  export const KEY_PAGE_UP = 266
  /** Key: Page down */
  export const KEY_PAGE_DOWN = 267
  /** Key: Home */
  export const KEY_HOME = 268
  /** Key: End */
  export const KEY_END = 269
  /** Key: Caps lock */
  export const KEY_CAPS_LOCK = 280
  /** Key: Scroll down */
  export const KEY_SCROLL_LOCK = 281
  /** Key: Num lock */
  export const KEY_NUM_LOCK = 282
  /** Key: Print screen */
  export const KEY_PRINT_SCREEN = 283
  /** Key: Pause */
  export const KEY_PAUSE = 284
  /** Key: F1 */
  export const KEY_F1 = 290
  /** Key: F2 */
  export const KEY_F2 = 291
  /** Key: F3 */
  export const KEY_F3 = 292
  /** Key: F4 */
  export const KEY_F4 = 293
  /** Key: F5 */
  export const KEY_F5 = 294
  /** Key: F6 */
  export const KEY_F6 = 295
  /** Key: F7 */
  export const KEY_F7 = 296
  /** Key: F8 */
  export const KEY_F8 = 297
  /** Key: F9 */
  export const KEY_F9 = 298
  /** Key: F10 */
  export const KEY_F10 = 299
  /** Key: F11 */
  export const KEY_F11 = 300
  /** Key: F12 */
  export const KEY_F12 = 301
  /** Key: Shift left */
  export const KEY_LEFT_SHIFT = 340
  /** Key: Control left */
  export const KEY_LEFT_CONTROL = 341
  /** Key: Alt left */
  export const KEY_LEFT_ALT = 342
  /** Key: Super left */
  export const KEY_LEFT_SUPER = 343
  /** Key: Shift right */
  export const KEY_RIGHT_SHIFT = 344
  /** Key: Control right */
  export const KEY_RIGHT_CONTROL = 345
  /** Key: Alt right */
  export const KEY_RIGHT_ALT = 346
  /** Key: Super right */
  export const KEY_RIGHT_SUPER = 347
  /** Key: KB menu */
  export const KEY_KB_MENU = 348
  /** Key: Keypad 0 */
  export const KEY_KP_0 = 320
  /** Key: Keypad 1 */
  export const KEY_KP_1 = 321
  /** Key: Keypad 2 */
  export const KEY_KP_2 = 322
  /** Key: Keypad 3 */
  export const KEY_KP_3 = 323
  /** Key: Keypad 4 */
  export const KEY_KP_4 = 324
  /** Key: Keypad 5 */
  export const KEY_KP_5 = 325
  /** Key: Keypad 6 */
  export const KEY_KP_6 = 326
  /** Key: Keypad 7 */
  export const KEY_KP_7 = 327
  /** Key: Keypad 8 */
  export const KEY_KP_8 = 328
  /** Key: Keypad 9 */
  export const KEY_KP_9 = 329
  /** Key: Keypad . */
  export const KEY_KP_DECIMAL = 330
  /** Key: Keypad / */
  export const KEY_KP_DIVIDE = 331
  /** Key: Keypad * */
  export const KEY_KP_MULTIPLY = 332
  /** Key: Keypad - */
  export const KEY_KP_SUBTRACT = 333
  /** Key: Keypad + */
  export const KEY_KP_ADD = 334
  /** Key: Keypad Enter */
  export const KEY_KP_ENTER = 335
  /** Key: Keypad = */
  export const KEY_KP_EQUAL = 336
  /** Key: Android back button */
  export const KEY_BACK = 4
  /** Key: Android menu button */
  export const KEY_MENU = 82
  /** Key: Android volume up button */
  export const KEY_VOLUME_UP = 24
  /** Key: Android volume down button */
  export const KEY_VOLUME_DOWN = 25
  /** Mouse button left */
  export const MOUSE_BUTTON_LEFT = 0
  /** Mouse button right */
  export const MOUSE_BUTTON_RIGHT = 1
  /** Mouse button middle (pressed wheel) */
  export const MOUSE_BUTTON_MIDDLE = 2
  /** Mouse button side (advanced mouse device) */
  export const MOUSE_BUTTON_SIDE = 3
  /** Mouse button extra (advanced mouse device) */
  export const MOUSE_BUTTON_EXTRA = 4
  /** Mouse button fordward (advanced mouse device) */
  export const MOUSE_BUTTON_FORWARD = 5
  /** Mouse button back (advanced mouse device) */
  export const MOUSE_BUTTON_BACK = 6
  /** Default pointer shape */
  export const MOUSE_CURSOR_DEFAULT = 0
  /** Arrow shape */
  export const MOUSE_CURSOR_ARROW = 1
  /** Text writing cursor shape */
  export const MOUSE_CURSOR_IBEAM = 2
  /** Cross shape */
  export const MOUSE_CURSOR_CROSSHAIR = 3
  /** Pointing hand cursor */
  export const MOUSE_CURSOR_POINTING_HAND = 4
  /** Horizontal resize/move arrow shape */
  export const MOUSE_CURSOR_RESIZE_EW = 5
  /** Vertical resize/move arrow shape */
  export const MOUSE_CURSOR_RESIZE_NS = 6
  /** Top-left to bottom-right diagonal resize/move arrow shape */
  export const MOUSE_CURSOR_RESIZE_NWSE = 7
  /** The top-right to bottom-left diagonal resize/move arrow shape */
  export const MOUSE_CURSOR_RESIZE_NESW = 8
  /** The omni-directional resize/move cursor shape */
  export const MOUSE_CURSOR_RESIZE_ALL = 9
  /** The operation-not-allowed shape */
  export const MOUSE_CURSOR_NOT_ALLOWED = 10
  /** Unknown button, just for error checking */
  export const GAMEPAD_BUTTON_UNKNOWN = 0
  /** Gamepad left DPAD up button */
  export const GAMEPAD_BUTTON_LEFT_FACE_UP = 1
  /** Gamepad left DPAD right button */
  export const GAMEPAD_BUTTON_LEFT_FACE_RIGHT = 2
  /** Gamepad left DPAD down button */
  export const GAMEPAD_BUTTON_LEFT_FACE_DOWN = 3
  /** Gamepad left DPAD left button */
  export const GAMEPAD_BUTTON_LEFT_FACE_LEFT = 4
  /** Gamepad right button up (i.e. PS3: Triangle, Xbox: Y) */
  export const GAMEPAD_BUTTON_RIGHT_FACE_UP = 5
  /** Gamepad right button right (i.e. PS3: Square, Xbox: X) */
  export const GAMEPAD_BUTTON_RIGHT_FACE_RIGHT = 6
  /** Gamepad right button down (i.e. PS3: Cross, Xbox: A) */
  export const GAMEPAD_BUTTON_RIGHT_FACE_DOWN = 7
  /** Gamepad right button left (i.e. PS3: Circle, Xbox: B) */
  export const GAMEPAD_BUTTON_RIGHT_FACE_LEFT = 8
  /** Gamepad top/back trigger left (first), it could be a trailing button */
  export const GAMEPAD_BUTTON_LEFT_TRIGGER_1 = 9
  /** Gamepad top/back trigger left (second), it could be a trailing button */
  export const GAMEPAD_BUTTON_LEFT_TRIGGER_2 = 10
  /** Gamepad top/back trigger right (one), it could be a trailing button */
  export const GAMEPAD_BUTTON_RIGHT_TRIGGER_1 = 11
  /** Gamepad top/back trigger right (second), it could be a trailing button */
  export const GAMEPAD_BUTTON_RIGHT_TRIGGER_2 = 12
  /** Gamepad center buttons, left one (i.e. PS3: Select) */
  export const GAMEPAD_BUTTON_MIDDLE_LEFT = 13
  /** Gamepad center buttons, middle one (i.e. PS3: PS, Xbox: XBOX) */
  export const GAMEPAD_BUTTON_MIDDLE = 14
  /** Gamepad center buttons, right one (i.e. PS3: Start) */
  export const GAMEPAD_BUTTON_MIDDLE_RIGHT = 15
  /** Gamepad joystick pressed button left */
  export const GAMEPAD_BUTTON_LEFT_THUMB = 16
  /** Gamepad joystick pressed button right */
  export const GAMEPAD_BUTTON_RIGHT_THUMB = 17
  /** Gamepad left stick X axis */
  export const GAMEPAD_AXIS_LEFT_X = 0
  /** Gamepad left stick Y axis */
  export const GAMEPAD_AXIS_LEFT_Y = 1
  /** Gamepad right stick X axis */
  export const GAMEPAD_AXIS_RIGHT_X = 2
  /** Gamepad right stick Y axis */
  export const GAMEPAD_AXIS_RIGHT_Y = 3
  /** Gamepad back trigger left, pressure level: [1..-1] */
  export const GAMEPAD_AXIS_LEFT_TRIGGER = 4
  /** Gamepad back trigger right, pressure level: [1..-1] */
  export const GAMEPAD_AXIS_RIGHT_TRIGGER = 5
  /** Albedo material (same as: MATERIAL_MAP_DIFFUSE) */
  export const MATERIAL_MAP_ALBEDO = 0
  /** Metalness material (same as: MATERIAL_MAP_SPECULAR) */
  export const MATERIAL_MAP_METALNESS = 1
  /** Normal material */
  export const MATERIAL_MAP_NORMAL = 2
  /** Roughness material */
  export const MATERIAL_MAP_ROUGHNESS = 3
  /** Ambient occlusion material */
  export const MATERIAL_MAP_OCCLUSION = 4
  /** Emission material */
  export const MATERIAL_MAP_EMISSION = 5
  /** Heightmap material */
  export const MATERIAL_MAP_HEIGHT = 6
  /** Cubemap material (NOTE: Uses GL_TEXTURE_CUBE_MAP) */
  export const MATERIAL_MAP_CUBEMAP = 7
  /** Irradiance material (NOTE: Uses GL_TEXTURE_CUBE_MAP) */
  export const MATERIAL_MAP_IRRADIANCE = 8
  /** Prefilter material (NOTE: Uses GL_TEXTURE_CUBE_MAP) */
  export const MATERIAL_MAP_PREFILTER = 9
  /** Brdf material */
  export const MATERIAL_MAP_BRDF = 10
  /** Shader location: vertex attribute: position */
  export const SHADER_LOC_VERTEX_POSITION = 0
  /** Shader location: vertex attribute: texcoord01 */
  export const SHADER_LOC_VERTEX_TEXCOORD01 = 1
  /** Shader location: vertex attribute: texcoord02 */
  export const SHADER_LOC_VERTEX_TEXCOORD02 = 2
  /** Shader location: vertex attribute: normal */
  export const SHADER_LOC_VERTEX_NORMAL = 3
  /** Shader location: vertex attribute: tangent */
  export const SHADER_LOC_VERTEX_TANGENT = 4
  /** Shader location: vertex attribute: color */
  export const SHADER_LOC_VERTEX_COLOR = 5
  /** Shader location: matrix uniform: model-view-projection */
  export const SHADER_LOC_MATRIX_MVP = 6
  /** Shader location: matrix uniform: view (camera transform) */
  export const SHADER_LOC_MATRIX_VIEW = 7
  /** Shader location: matrix uniform: projection */
  export const SHADER_LOC_MATRIX_PROJECTION = 8
  /** Shader location: matrix uniform: model (transform) */
  export const SHADER_LOC_MATRIX_MODEL = 9
  /** Shader location: matrix uniform: normal */
  export const SHADER_LOC_MATRIX_NORMAL = 10
  /** Shader location: vector uniform: view */
  export const SHADER_LOC_VECTOR_VIEW = 11
  /** Shader location: vector uniform: diffuse color */
  export const SHADER_LOC_COLOR_DIFFUSE = 12
  /** Shader location: vector uniform: specular color */
  export const SHADER_LOC_COLOR_SPECULAR = 13
  /** Shader location: vector uniform: ambient color */
  export const SHADER_LOC_COLOR_AMBIENT = 14
  /** Shader location: sampler2d texture: albedo (same as: SHADER_LOC_MAP_DIFFUSE) */
  export const SHADER_LOC_MAP_ALBEDO = 15
  /** Shader location: sampler2d texture: metalness (same as: SHADER_LOC_MAP_SPECULAR) */
  export const SHADER_LOC_MAP_METALNESS = 16
  /** Shader location: sampler2d texture: normal */
  export const SHADER_LOC_MAP_NORMAL = 17
  /** Shader location: sampler2d texture: roughness */
  export const SHADER_LOC_MAP_ROUGHNESS = 18
  /** Shader location: sampler2d texture: occlusion */
  export const SHADER_LOC_MAP_OCCLUSION = 19
  /** Shader location: sampler2d texture: emission */
  export const SHADER_LOC_MAP_EMISSION = 20
  /** Shader location: sampler2d texture: height */
  export const SHADER_LOC_MAP_HEIGHT = 21
  /** Shader location: samplerCube texture: cubemap */
  export const SHADER_LOC_MAP_CUBEMAP = 22
  /** Shader location: samplerCube texture: irradiance */
  export const SHADER_LOC_MAP_IRRADIANCE = 23
  /** Shader location: samplerCube texture: prefilter */
  export const SHADER_LOC_MAP_PREFILTER = 24
  /** Shader location: sampler2d texture: brdf */
  export const SHADER_LOC_MAP_BRDF = 25
  /** Shader uniform type: float */
  export const SHADER_UNIFORM_FLOAT = 0
  /** Shader uniform type: vec2 (2 float) */
  export const SHADER_UNIFORM_VEC2 = 1
  /** Shader uniform type: vec3 (3 float) */
  export const SHADER_UNIFORM_VEC3 = 2
  /** Shader uniform type: vec4 (4 float) */
  export const SHADER_UNIFORM_VEC4 = 3
  /** Shader uniform type: int */
  export const SHADER_UNIFORM_INT = 4
  /** Shader uniform type: ivec2 (2 int) */
  export const SHADER_UNIFORM_IVEC2 = 5
  /** Shader uniform type: ivec3 (3 int) */
  export const SHADER_UNIFORM_IVEC3 = 6
  /** Shader uniform type: ivec4 (4 int) */
  export const SHADER_UNIFORM_IVEC4 = 7
  /** Shader uniform type: sampler2d */
  export const SHADER_UNIFORM_SAMPLER2D = 8
  /** Shader attribute type: float */
  export const SHADER_ATTRIB_FLOAT = 0
  /** Shader attribute type: vec2 (2 float) */
  export const SHADER_ATTRIB_VEC2 = 1
  /** Shader attribute type: vec3 (3 float) */
  export const SHADER_ATTRIB_VEC3 = 2
  /** Shader attribute type: vec4 (4 float) */
  export const SHADER_ATTRIB_VEC4 = 3
  /** 8 bit per pixel (no alpha) */
  export const PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = 1
  /** 8*2 bpp (2 channels) */
  export const PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = 2
  /** 16 bpp */
  export const PIXELFORMAT_UNCOMPRESSED_R5G6B5 = 3
  /** 24 bpp */
  export const PIXELFORMAT_UNCOMPRESSED_R8G8B8 = 4
  /** 16 bpp (1 bit alpha) */
  export const PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = 5
  /** 16 bpp (4 bit alpha) */
  export const PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = 6
  /** 32 bpp */
  export const PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = 7
  /** 32 bpp (1 channel - float) */
  export const PIXELFORMAT_UNCOMPRESSED_R32 = 8
  /** 32*3 bpp (3 channels - float) */
  export const PIXELFORMAT_UNCOMPRESSED_R32G32B32 = 9
  /** 32*4 bpp (4 channels - float) */
  export const PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = 10
  /** 4 bpp (no alpha) */
  export const PIXELFORMAT_COMPRESSED_DXT1_RGB = 11
  /** 4 bpp (1 bit alpha) */
  export const PIXELFORMAT_COMPRESSED_DXT1_RGBA = 12
  /** 8 bpp */
  export const PIXELFORMAT_COMPRESSED_DXT3_RGBA = 13
  /** 8 bpp */
  export const PIXELFORMAT_COMPRESSED_DXT5_RGBA = 14
  /** 4 bpp */
  export const PIXELFORMAT_COMPRESSED_ETC1_RGB = 15
  /** 4 bpp */
  export const PIXELFORMAT_COMPRESSED_ETC2_RGB = 16
  /** 8 bpp */
  export const PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 17
  /** 4 bpp */
  export const PIXELFORMAT_COMPRESSED_PVRT_RGB = 18
  /** 4 bpp */
  export const PIXELFORMAT_COMPRESSED_PVRT_RGBA = 19
  /** 8 bpp */
  export const PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 20
  /** 2 bpp */
  export const PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 21
  /** No filter, just pixel approximation */
  export const TEXTURE_FILTER_POINT = 0
  /** Linear filtering */
  export const TEXTURE_FILTER_BILINEAR = 1
  /** Trilinear filtering (linear with mipmaps) */
  export const TEXTURE_FILTER_TRILINEAR = 2
  /** Anisotropic filtering 4x */
  export const TEXTURE_FILTER_ANISOTROPIC_4X = 3
  /** Anisotropic filtering 8x */
  export const TEXTURE_FILTER_ANISOTROPIC_8X = 4
  /** Anisotropic filtering 16x */
  export const TEXTURE_FILTER_ANISOTROPIC_16X = 5
  /** Repeats texture in tiled mode */
  export const TEXTURE_WRAP_REPEAT = 0
  /** Clamps texture to edge pixel in tiled mode */
  export const TEXTURE_WRAP_CLAMP = 1
  /** Mirrors and repeats the texture in tiled mode */
  export const TEXTURE_WRAP_MIRROR_REPEAT = 2
  /** Mirrors and clamps to border the texture in tiled mode */
  export const TEXTURE_WRAP_MIRROR_CLAMP = 3
  /** Automatically detect layout type */
  export const CUBEMAP_LAYOUT_AUTO_DETECT = 0
  /** Layout is defined by a vertical line with faces */
  export const CUBEMAP_LAYOUT_LINE_VERTICAL = 1
  /** Layout is defined by an horizontal line with faces */
  export const CUBEMAP_LAYOUT_LINE_HORIZONTAL = 2
  /** Layout is defined by a 3x4 cross with cubemap faces */
  export const CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR = 3
  /** Layout is defined by a 4x3 cross with cubemap faces */
  export const CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE = 4
  /** Layout is defined by a panorama image (equirectangular map) */
  export const CUBEMAP_LAYOUT_PANORAMA = 5
  /** Default font generation, anti-aliased */
  export const FONT_DEFAULT = 0
  /** Bitmap font generation, no anti-aliasing */
  export const FONT_BITMAP = 1
  /** SDF font generation, requires external shader */
  export const FONT_SDF = 2
  /** Blend textures considering alpha (default) */
  export const BLEND_ALPHA = 0
  /** Blend textures adding colors */
  export const BLEND_ADDITIVE = 1
  /** Blend textures multiplying colors */
  export const BLEND_MULTIPLIED = 2
  /** Blend textures adding colors (alternative) */
  export const BLEND_ADD_COLORS = 3
  /** Blend textures subtracting colors (alternative) */
  export const BLEND_SUBTRACT_COLORS = 4
  /** Belnd textures using custom src/dst factors (use rlSetBlendMode()) */
  export const BLEND_CUSTOM = 5
  /** No gesture */
  export const GESTURE_NONE = 0
  /** Tap gesture */
  export const GESTURE_TAP = 1
  /** Double tap gesture */
  export const GESTURE_DOUBLETAP = 2
  /** Hold gesture */
  export const GESTURE_HOLD = 4
  /** Drag gesture */
  export const GESTURE_DRAG = 8
  /** Swipe right gesture */
  export const GESTURE_SWIPE_RIGHT = 16
  /** Swipe left gesture */
  export const GESTURE_SWIPE_LEFT = 32
  /** Swipe up gesture */
  export const GESTURE_SWIPE_UP = 64
  /** Swipe down gesture */
  export const GESTURE_SWIPE_DOWN = 128
  /** Pinch in gesture */
  export const GESTURE_PINCH_IN = 256
  /** Pinch out gesture */
  export const GESTURE_PINCH_OUT = 512
  /** Custom camera */
  export const CAMERA_CUSTOM = 0
  /** Free camera */
  export const CAMERA_FREE = 1
  /** Orbital camera */
  export const CAMERA_ORBITAL = 2
  /** First person camera */
  export const CAMERA_FIRST_PERSON = 3
  /** Third person camera */
  export const CAMERA_THIRD_PERSON = 4
  /** Perspective projection */
  export const CAMERA_PERSPECTIVE = 0
  /** Orthographic projection */
  export const CAMERA_ORTHOGRAPHIC = 1
  /** Npatch layout: 3x3 tiles */
  export const NPATCH_NINE_PATCH = 0
  /** Npatch layout: 1x3 tiles */
  export const NPATCH_THREE_PATCH_VERTICAL = 1
  /** Npatch layout: 3x1 tiles */
  export const NPATCH_THREE_PATCH_HORIZONTAL = 2

  export const LIGHTGRAY: { r: 200, g: 200, b: 200, a: 255 }
  export const GRAY: { r: 130, g: 130, b: 130, a: 255 }
  export const DARKGRAY: { r: 80, g: 80, b: 80, a: 255 }
  export const YELLOW: { r: 253, g: 249, b: 0, a: 255 }
  export const GOLD: { r: 255, g: 203, b: 0, a: 255 }
  export const ORANGE: { r: 255, g: 161, b: 0, a: 255 }
  export const PINK: { r: 255, g: 109, b: 194, a: 255 }
  export const RED: { r: 230, g: 41, b: 55, a: 255 }
  export const MAROON: { r: 190, g: 33, b: 55, a: 255 }
  export const GREEN: { r: 0, g: 228, b: 48, a: 255 }
  export const LIME: { r: 0, g: 158, b: 47, a: 255 }
  export const DARKGREEN: { r: 0, g: 117, b: 44, a: 255 }
  export const SKYBLUE: { r: 102, g: 191, b: 255, a: 255 }
  export const BLUE: { r: 0, g: 121, b: 241, a: 255 }
  export const DARKBLUE: { r: 0, g: 82, b: 172, a: 255 }
  export const PURPLE: { r: 200, g: 122, b: 255, a: 255 }
  export const VIOLET: { r: 135, g: 60, b: 190, a: 255 }
  export const DARKPURPLE: { r: 112, g: 31, b: 126, a: 255 }
  export const BEIGE: { r: 211, g: 176, b: 131, a: 255 }
  export const BROWN: { r: 127, g: 106, b: 79, a: 255 }
  export const DARKBROWN: { r: 76, g: 63, b: 47, a: 255 }
  export const WHITE: { r: 255, g: 255, b: 255, a: 255 }
  export const BLACK: { r: 0, g: 0, b: 0, a: 255 }
  export const BLANK: { r: 0, g: 0, b: 0, a: 0 }
  export const MAGENTA: { r: 255, g: 0, b: 255, a: 255 }
  export const RAYWHITE: { r: 245, g: 245, b: 245, a: 255 }
}

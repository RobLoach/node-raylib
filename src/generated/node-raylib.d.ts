// GENERATED CODE: DO NOT MODIFY
declare module "raylib" {
  /** Vector2, 2 components */
  export interface Vector2 {
    /** Vector x component. (float) */
    x: number
    /** Vector y component. (float) */
    y: number
  }
  /** Vector3, 3 components */
  export interface Vector3 {
    /** Vector x component. (float) */
    x: number
    /** Vector y component. (float) */
    y: number
    /** Vector z component. (float) */
    z: number
  }
  /** Vector4, 4 components */
  export interface Vector4 {
    /** Vector x component. (float) */
    x: number
    /** Vector y component. (float) */
    y: number
    /** Vector z component. (float) */
    z: number
    /** Vector w component. (float) */
    w: number
  }
  /** Matrix, 4x4 components, column major, OpenGL style, right-handed */
  export interface Matrix {
    /** Matrix first row (4 components). (float) */
    m0: number
    /** Matrix first row (4 components). (float) */
    m4: number
    /** Matrix first row (4 components). (float) */
    m8: number
    /** Matrix first row (4 components). (float) */
    m12: number
    /** Matrix second row (4 components). (float) */
    m1: number
    /** Matrix second row (4 components). (float) */
    m5: number
    /** Matrix second row (4 components). (float) */
    m9: number
    /** Matrix second row (4 components). (float) */
    m13: number
    /** Matrix third row (4 components). (float) */
    m2: number
    /** Matrix third row (4 components). (float) */
    m6: number
    /** Matrix third row (4 components). (float) */
    m10: number
    /** Matrix third row (4 components). (float) */
    m14: number
    /** Matrix fourth row (4 components). (float) */
    m3: number
    /** Matrix fourth row (4 components). (float) */
    m7: number
    /** Matrix fourth row (4 components). (float) */
    m11: number
    /** Matrix fourth row (4 components). (float) */
    m15: number
  }
  /** Color, 4 components, R8G8B8A8 (32bit) */
  export interface Color {
    /** Color red value. (unsigned char) */
    r: number
    /** Color green value. (unsigned char) */
    g: number
    /** Color blue value. (unsigned char) */
    b: number
    /** Color alpha value. (unsigned char) */
    a: number
  }
  /** Rectangle, 4 components */
  export interface Rectangle {
    /** Rectangle top-left corner position x. (float) */
    x: number
    /** Rectangle top-left corner position y. (float) */
    y: number
    /** Rectangle width. (float) */
    width: number
    /** Rectangle height. (float) */
    height: number
  }
  /** Image, pixel data stored in CPU memory (RAM) */
  export interface Image {
    /** Image raw data. (void *) */
    data: number
    /** Image base width. (int) */
    width: number
    /** Image base height. (int) */
    height: number
    /** Mipmap levels, 1 by default. (int) */
    mipmaps: number
    /** Data format (PixelFormat type). (int) */
    format: number
  }
  /** Texture, tex data stored in GPU memory (VRAM) */
  export interface Texture {
    /** OpenGL texture id. (unsigned int) */
    id: number
    /** Texture base width. (int) */
    width: number
    /** Texture base height. (int) */
    height: number
    /** Mipmap levels, 1 by default. (int) */
    mipmaps: number
    /** Data format (PixelFormat type). (int) */
    format: number
  }
  /** RenderTexture, fbo for texture rendering */
  export interface RenderTexture {
    /** OpenGL framebuffer object id. (unsigned int) */
    id: number
    /** Color buffer attachment texture. (Texture) */
    texture: Texture
    /** Depth buffer attachment texture. (Texture) */
    depth: Texture
  }
  /** NPatchInfo, n-patch layout info */
  export interface NPatchInfo {
    /** Texture source rectangle. (Rectangle) */
    source: Rectangle
    /** Left border offset. (int) */
    left: number
    /** Top border offset. (int) */
    top: number
    /** Right border offset. (int) */
    right: number
    /** Bottom border offset. (int) */
    bottom: number
    /** Layout of the n-patch: 3x3, 1x3 or 3x1. (int) */
    layout: number
  }
  /** GlyphInfo, font characters glyphs info */
  export interface GlyphInfo {
    /** Character value (Unicode). (int) */
    value: number
    /** Character offset X when drawing. (int) */
    offsetX: number
    /** Character offset Y when drawing. (int) */
    offsetY: number
    /** Character advance position X. (int) */
    advanceX: number
    /** Character image data. (Image) */
    image: Image
  }
  /** Font, font texture and GlyphInfo array data */
  export interface Font {
    /** Base size (default chars height). (int) */
    baseSize: number
    /** Number of glyph characters. (int) */
    glyphCount: number
    /** Padding around the glyph characters. (int) */
    glyphPadding: number
    /** Texture atlas containing the glyphs. (Texture) */
    texture: Texture
    /** Rectangles in texture for the glyphs. (Rectangle *) */
    recs: number
    /** Glyphs info data. (GlyphInfo *) */
    glyphs: number
  }
  /** Camera, defines position/orientation in 3d space */
  export interface Camera3D {
    /** Camera position. (Vector3) */
    position: Vector3
    /** Camera target it looks-at. (Vector3) */
    target: Vector3
    /** Camera up vector (rotation over its axis). (Vector3) */
    up: Vector3
    /** Camera field-of-view aperture in Y (degrees) in perspective, used as near plane width in orthographic. (float) */
    fovy: number
    /** Camera projection: CAMERA_PERSPECTIVE or CAMERA_ORTHOGRAPHIC. (int) */
    projection: number
  }
  /** Camera2D, defines position/orientation in 2d space */
  export interface Camera2D {
    /** Camera offset (displacement from target). (Vector2) */
    offset: Vector2
    /** Camera target (rotation and zoom origin). (Vector2) */
    target: Vector2
    /** Camera rotation in degrees. (float) */
    rotation: number
    /** Camera zoom (scaling), should be 1.0f by default. (float) */
    zoom: number
  }
  /** Mesh, vertex data and vao/vbo */
  export interface Mesh {
    /** Number of vertices stored in arrays. (int) */
    vertexCount: number
    /** Number of triangles stored (indexed or not). (int) */
    triangleCount: number
    /** Vertex position (XYZ - 3 components per vertex) (shader-location = 0). (float *) */
    vertices: number
    /** Vertex texture coordinates (UV - 2 components per vertex) (shader-location = 1). (float *) */
    texcoords: number
    /** Vertex texture second coordinates (UV - 2 components per vertex) (shader-location = 5). (float *) */
    texcoords2: number
    /** Vertex normals (XYZ - 3 components per vertex) (shader-location = 2). (float *) */
    normals: number
    /** Vertex tangents (XYZW - 4 components per vertex) (shader-location = 4). (float *) */
    tangents: number
    /** Vertex colors (RGBA - 4 components per vertex) (shader-location = 3). (unsigned char *) */
    colors: Buffer
    /** Vertex indices (in case vertex data comes indexed). (unsigned short *) */
    indices: number
    /** Animated vertex positions (after bones transformations). (float *) */
    animVertices: number
    /** Animated normals (after bones transformations). (float *) */
    animNormals: number
    /** Vertex bone ids, max 255 bone ids, up to 4 bones influence by vertex (skinning) (shader-location = 6). (unsigned char *) */
    boneIds: Buffer
    /** Vertex bone weight, up to 4 bones influence by vertex (skinning) (shader-location = 7). (float *) */
    boneWeights: number
    /** Bones animated transformation matrices. (Matrix *) */
    boneMatrices: number
    /** Number of bones. (int) */
    boneCount: number
    /** OpenGL Vertex Array Object id. (unsigned int) */
    vaoId: number
    /** OpenGL Vertex Buffer Objects id (default vertex data). (unsigned int *) */
    vboId: number
  }
  /** Shader */
  export interface Shader {
    /** Shader program id. (unsigned int) */
    id: number
    /** Shader locations array (RL_MAX_SHADER_LOCATIONS). (int *) */
    locs: number
  }
  /** MaterialMap */
  export interface MaterialMap {
    /** Material map texture. (Texture) */
    texture: Texture
    /** Material map color. (Color) */
    color: Color
    /** Material map value. (float) */
    value: number
  }
  /** Material, includes shader and maps */
  export interface Material {
    /** Material shader. (Shader) */
    shader: Shader
    /** Material maps array (MAX_MATERIAL_MAPS). (MaterialMap *) */
    maps: number
    /** Material generic parameters (if required). (float) */
    params: number
  }
  /** Transform, vertex transformation data */
  export interface Transform {
    /** Translation. (Vector3) */
    translation: Vector3
    /** Rotation. (Vector4) */
    rotation: Vector4
    /** Scale. (Vector3) */
    scale: Vector3
  }
  /** Bone, skeletal animation bone */
  export interface BoneInfo {
    /** Bone name. (char) */
    name: string
    /** Bone parent. (int) */
    parent: number
  }
  /** Model, meshes, materials and animation data */
  export interface Model {
    /** Local transform matrix. (Matrix) */
    transform: Matrix
    /** Number of meshes. (int) */
    meshCount: number
    /** Number of materials. (int) */
    materialCount: number
    /** Meshes array. (Mesh *) */
    meshes: number
    /** Materials array. (Material *) */
    materials: number
    /** Mesh material number. (int *) */
    meshMaterial: number
    /** Number of bones. (int) */
    boneCount: number
    /** Bones information (skeleton). (BoneInfo *) */
    bones: number
    /** Bones base transformation (pose). (Transform *) */
    bindPose: number
  }
  /** ModelAnimation */
  export interface ModelAnimation {
    /** Number of bones. (int) */
    boneCount: number
    /** Number of animation frames. (int) */
    frameCount: number
    /** Bones information (skeleton). (BoneInfo *) */
    bones: number
    /** Poses array by frame. (Transform **) */
    framePoses: number
    /** Animation name. (char) */
    name: string
  }
  /** Ray, ray for raycasting */
  export interface Ray {
    /** Ray position (origin). (Vector3) */
    position: Vector3
    /** Ray direction (normalized). (Vector3) */
    direction: Vector3
  }
  /** RayCollision, ray hit information */
  export interface RayCollision {
    /** Did the ray hit something?. (bool) */
    hit: boolean
    /** Distance to the nearest hit. (float) */
    distance: number
    /** Point of the nearest hit. (Vector3) */
    point: Vector3
    /** Surface normal of hit. (Vector3) */
    normal: Vector3
  }
  /** BoundingBox */
  export interface BoundingBox {
    /** Minimum vertex box-corner. (Vector3) */
    min: Vector3
    /** Maximum vertex box-corner. (Vector3) */
    max: Vector3
  }
  /** Wave, audio wave data */
  export interface Wave {
    /** Total number of frames (considering channels). (unsigned int) */
    frameCount: number
    /** Frequency (samples per second). (unsigned int) */
    sampleRate: number
    /** Bit depth (bits per sample): 8, 16, 32 (24 not supported). (unsigned int) */
    sampleSize: number
    /** Number of channels (1-mono, 2-stereo, ...). (unsigned int) */
    channels: number
    /** Buffer data pointer. (void *) */
    data: number
  }
  /** AudioStream, custom audio stream */
  export interface AudioStream {
    /** Pointer to internal data used by the audio system. (rAudioBuffer *) */
    buffer: number
    /** Pointer to internal data processor, useful for audio effects. (rAudioProcessor *) */
    processor: number
    /** Frequency (samples per second). (unsigned int) */
    sampleRate: number
    /** Bit depth (bits per sample): 8, 16, 32 (24 not supported). (unsigned int) */
    sampleSize: number
    /** Number of channels (1-mono, 2-stereo, ...). (unsigned int) */
    channels: number
  }
  /** Sound */
  export interface Sound {
    /** Audio stream. (AudioStream) */
    stream: AudioStream
    /** Total number of frames (considering channels). (unsigned int) */
    frameCount: number
  }
  /** Music, audio stream, anything longer than ~10 seconds should be streamed */
  export interface Music {
    /** Audio stream. (AudioStream) */
    stream: AudioStream
    /** Total number of frames (considering channels). (unsigned int) */
    frameCount: number
    /** Music looping enable. (bool) */
    looping: boolean
    /** Type of music context (audio filetype). (int) */
    ctxType: number
    /** Audio context data, depends on type. (void *) */
    ctxData: number
  }
  /** VrDeviceInfo, Head-Mounted-Display device parameters */
  export interface VrDeviceInfo {
    /** Horizontal resolution in pixels. (int) */
    hResolution: number
    /** Vertical resolution in pixels. (int) */
    vResolution: number
    /** Horizontal size in meters. (float) */
    hScreenSize: number
    /** Vertical size in meters. (float) */
    vScreenSize: number
    /** Distance between eye and display in meters. (float) */
    eyeToScreenDistance: number
    /** Lens separation distance in meters. (float) */
    lensSeparationDistance: number
    /** IPD (distance between pupils) in meters. (float) */
    interpupillaryDistance: number
    /** Lens distortion constant parameters. (float) */
    lensDistortionValues: number
    /** Chromatic aberration correction parameters. (float) */
    chromaAbCorrection: number
  }
  /** VrStereoConfig, VR stereo rendering configuration for simulator */
  export interface VrStereoConfig {
    /** VR projection matrices (per eye). (Matrix) */
    projection: Matrix
    /** VR view offset matrices (per eye). (Matrix) */
    viewOffset: Matrix
    /** VR left lens center. (float) */
    leftLensCenter: number
    /** VR right lens center. (float) */
    rightLensCenter: number
    /** VR left screen center. (float) */
    leftScreenCenter: number
    /** VR right screen center. (float) */
    rightScreenCenter: number
    /** VR distortion scale. (float) */
    scale: number
    /** VR distortion scale in. (float) */
    scaleIn: number
  }
  /** File path list */
  export interface FilePathList {
    /** Filepaths max entries. (unsigned int) */
    capacity: number
    /** Filepaths entries count. (unsigned int) */
    count: number
    /** Filepaths entries. (char **) */
    paths: number
  }
  /** Automation event */
  export interface AutomationEvent {
    /** Event frame. (unsigned int) */
    frame: number
    /** Event type (AutomationEventType). (unsigned int) */
    type: number
    /** Event parameters (if required). (int) */
    params: number
  }
  /** Automation event list */
  export interface AutomationEventList {
    /** Events max entries (MAX_AUTOMATION_EVENTS). (unsigned int) */
    capacity: number
    /** Events entries count. (unsigned int) */
    count: number
    /** Events entries. (AutomationEvent *) */
    events: number
  }
  /** Dynamic vertex buffers (position + texcoords + colors + indices arrays) */
  export interface rlVertexBuffer {
    /** Number of elements in the buffer (QUADS). (int) */
    elementCount: number
    /** Vertex position (XYZ - 3 components per vertex) (shader-location = 0). (float *) */
    vertices: number
    /** Vertex texture coordinates (UV - 2 components per vertex) (shader-location = 1). (float *) */
    texcoords: number
    /** Vertex normal (XYZ - 3 components per vertex) (shader-location = 2). (float *) */
    normals: number
    /** Vertex indices (in case vertex data comes indexed) (6 indices per quad). (unsigned int *) */
    indices: number
    /** OpenGL Vertex Array Object id. (unsigned int) */
    vaoId: number
    /** OpenGL Vertex Buffer Objects id (5 types of vertex data). (unsigned int[5]) */
    vboId: number
  }
  /** of those state-change happens (this is done in core module) */
  export interface rlDrawCall {
    /** Drawing mode: LINES, TRIANGLES, QUADS. (int) */
    mode: number
    /** Number of vertex of the draw. (int) */
    vertexCount: number
    /** Number of vertex required for index alignment (LINES, TRIANGLES). (int) */
    vertexAlignment: number
    /** Texture id to be used on the draw -> Use to create new draw call if changes. (unsigned int) */
    textureId: number
  }
  /** rlRenderBatch type */
  export interface rlRenderBatch {
    /** Number of vertex buffers (multi-buffering support). (int) */
    bufferCount: number
    /** Current buffer tracking in case of multi-buffering. (int) */
    currentBuffer: number
    /** Dynamic buffer(s) for vertex data. (rlVertexBuffer *) */
    vertexBuffer: number
    /** Draw calls array, depends on textureId. (rlDrawCall *) */
    draws: number
    /** Draw calls counter. (int) */
    drawCounter: number
    /** Current depth value for next draw. (float) */
    currentDepth: number
  }

  /** RenderTexture, fbo for texture rendering */
  export type RenderTexture2D = RenderTexture

  /** Texture, tex data stored in GPU memory (VRAM) */
  export type Texture2D = Texture

  /** Texture, tex data stored in GPU memory (VRAM) */
  export type TextureCubemap = Texture

  /** Camera, defines position/orientation in 3d space */
  export type Camera = Camera3D | Camera2D

  /** Quaternion, same as Vector4 */
  export type Quaternion = Vector4
  /** Initialize window and OpenGL context */
  export function InitWindow(width: number, height: number, title: string): void
  
  /** Close window and unload OpenGL context */
  export function CloseWindow(): void
  
  /** Check if application should close (KEY_ESCAPE pressed or windows close icon clicked) */
  export function WindowShouldClose(): boolean
  
  /** Check if window has been initialized successfully */
  export function IsWindowReady(): boolean
  
  /** Check if window is currently fullscreen */
  export function IsWindowFullscreen(): boolean
  
  /** Check if window is currently hidden */
  export function IsWindowHidden(): boolean
  
  /** Check if window is currently minimized */
  export function IsWindowMinimized(): boolean
  
  /** Check if window is currently maximized */
  export function IsWindowMaximized(): boolean
  
  /** Check if window is currently focused */
  export function IsWindowFocused(): boolean
  
  /** Check if window has been resized last frame */
  export function IsWindowResized(): boolean
  
  /** Check if one specific window flag is enabled */
  export function IsWindowState(flag: number): boolean
  
  /** Set window configuration state using flags */
  export function SetWindowState(flags: number): void
  
  /** Clear window configuration state flags */
  export function ClearWindowState(flags: number): void
  
  /** Toggle window state: fullscreen/windowed, resizes monitor to match window resolution */
  export function ToggleFullscreen(): void
  
  /** Toggle window state: borderless windowed, resizes window to match monitor resolution */
  export function ToggleBorderlessWindowed(): void
  
  /** Set window state: maximized, if resizable */
  export function MaximizeWindow(): void
  
  /** Set window state: minimized, if resizable */
  export function MinimizeWindow(): void
  
  /** Set window state: not minimized/maximized */
  export function RestoreWindow(): void
  
  /** Set icon for window (single image, RGBA 32bit) */
  export function SetWindowIcon(image: Image): void
  
  /** Set icon for window (multiple images, RGBA 32bit) */
  export function SetWindowIcons(images: number, count: number): void
  
  /** Set title for window */
  export function SetWindowTitle(title: string): void
  
  /** Set window position on screen */
  export function SetWindowPosition(x: number, y: number): void
  
  /** Set monitor for the current window */
  export function SetWindowMonitor(monitor: number): void
  
  /** Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE) */
  export function SetWindowMinSize(width: number, height: number): void
  
  /** Set window maximum dimensions (for FLAG_WINDOW_RESIZABLE) */
  export function SetWindowMaxSize(width: number, height: number): void
  
  /** Set window dimensions */
  export function SetWindowSize(width: number, height: number): void
  
  /** Set window opacity [0.0f..1.0f] */
  export function SetWindowOpacity(opacity: number): void
  
  /** Set window focused */
  export function SetWindowFocused(): void
  
  /** Get native window handle */
  export function GetWindowHandle(): number
  
  /** Get current screen width */
  export function GetScreenWidth(): number
  
  /** Get current screen height */
  export function GetScreenHeight(): number
  
  /** Get current render width (it considers HiDPI) */
  export function GetRenderWidth(): number
  
  /** Get current render height (it considers HiDPI) */
  export function GetRenderHeight(): number
  
  /** Get number of connected monitors */
  export function GetMonitorCount(): number
  
  /** Get current monitor where window is placed */
  export function GetCurrentMonitor(): number
  
  /** Get specified monitor position */
  export function GetMonitorPosition(monitor: number): Vector2
  
  /** Get specified monitor width (current video mode used by monitor) */
  export function GetMonitorWidth(monitor: number): number
  
  /** Get specified monitor height (current video mode used by monitor) */
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
  
  /** Get the human-readable, UTF-8 encoded name of the specified monitor */
  export function GetMonitorName(monitor: number): string
  
  /** Set clipboard text content */
  export function SetClipboardText(text: string): void
  
  /** Get clipboard text content */
  export function GetClipboardText(): string
  
  /** Get clipboard image content */
  export function GetClipboardImage(): Image
  
  /** Enable waiting for events on EndDrawing(), no automatic event polling */
  export function EnableEventWaiting(): void
  
  /** Disable waiting for events on EndDrawing(), automatic events polling */
  export function DisableEventWaiting(): void
  
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
  
  /** Check if a shader is valid (loaded on GPU) */
  export function IsShaderValid(shader: Shader): boolean
  
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
  
  /** Get a ray trace from screen position (i.e mouse) */
  export function GetScreenToWorldRay(position: Vector2, camera: Camera3D): Ray
  
  /** Get a ray trace from screen position (i.e mouse) in a viewport */
  export function GetScreenToWorldRayEx(position: Vector2, camera: Camera3D, width: number, height: number): Ray
  
  /** Get the screen space position for a 3d world space position */
  export function GetWorldToScreen(position: Vector3, camera: Camera3D): Vector2
  
  /** Get size position for a 3d world space position */
  export function GetWorldToScreenEx(position: Vector3, camera: Camera3D, width: number, height: number): Vector2
  
  /** Get the screen space position for a 2d camera world space position */
  export function GetWorldToScreen2D(position: Vector2, camera: Camera2D): Vector2
  
  /** Get the world space position for a 2d camera screen space position */
  export function GetScreenToWorld2D(position: Vector2, camera: Camera2D): Vector2
  
  /** Get camera transform matrix (view matrix) */
  export function GetCameraMatrix(camera: Camera3D): Matrix
  
  /** Get camera 2d transform matrix */
  export function GetCameraMatrix2D(camera: Camera2D): Matrix
  
  /** Set target FPS (maximum) */
  export function SetTargetFPS(fps: number): void
  
  /** Get time in seconds for last frame drawn (delta time) */
  export function GetFrameTime(): number
  
  /** Get elapsed time in seconds since InitWindow() */
  export function GetTime(): number
  
  /** Get current FPS */
  export function GetFPS(): number
  
  /** Swap back buffer with front buffer (screen drawing) */
  export function SwapScreenBuffer(): void
  
  /** Register all input events */
  export function PollInputEvents(): void
  
  /** Wait for some time (halt program execution) */
  export function WaitTime(seconds: number): void
  
  /** Set the seed for the random number generator */
  export function SetRandomSeed(seed: number): void
  
  /** Get a random value between min and max (both included) */
  export function GetRandomValue(min: number, max: number): number
  
  /** Load random values sequence, no values repeated */
  export function LoadRandomSequence(count: number, min: number, max: number): number
  
  /** Unload random values sequence */
  export function UnloadRandomSequence(sequence: number): void
  
  /** Takes a screenshot of current screen (filename extension defines format) */
  export function TakeScreenshot(fileName: string): void
  
  /** Setup init configuration flags (view FLAGS) */
  export function SetConfigFlags(flags: number): void
  
  /** Open URL with default system browser (if available) */
  export function OpenURL(url: string): void
  
  /** Set the current threshold (minimum) log level */
  export function SetTraceLogLevel(logLevel: number): void
  
  /** Internal memory allocator */
  export function MemAlloc(size: number): number
  
  /** Internal memory reallocator */
  export function MemRealloc(ptr: number, size: number): number
  
  /** Internal memory free */
  export function MemFree(ptr: number): void
  
  /** Load file data as byte array (read) */
  export function LoadFileData(fileName: string, dataSize: number): Buffer
  
  /** Unload file data allocated by LoadFileData() */
  export function UnloadFileData(data: Buffer): void
  
  /** Save data to file from byte array (write), returns true on success */
  export function SaveFileData(fileName: string, data: number, dataSize: number): boolean
  
  /** Export data to code (.h), returns true on success */
  export function ExportDataAsCode(data: Buffer, dataSize: number, fileName: string): boolean
  
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
  
  /** Get file length in bytes (NOTE: GetFileSize() conflicts with windows.h) */
  export function GetFileLength(fileName: string): number
  
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
  
  /** Get the directory of the running application (uses static string) */
  export function GetApplicationDirectory(): string
  
  /** Create directories (including full path requested), returns 0 on success */
  export function MakeDirectory(dirPath: string): number
  
  /** Change working directory, return true on success */
  export function ChangeDirectory(dir: string): boolean
  
  /** Check if a given path is a file or a directory */
  export function IsPathFile(path: string): boolean
  
  /** Check if fileName is valid for the platform/OS */
  export function IsFileNameValid(fileName: string): boolean
  
  /** Load directory filepaths */
  export function LoadDirectoryFiles(dirPath: string): FilePathList
  
  /** Load directory filepaths with extension filtering and recursive directory scan. Use 'DIR' in the filter string to include directories in the result */
  export function LoadDirectoryFilesEx(basePath: string, filter: string, scanSubdirs: boolean): FilePathList
  
  /** Unload filepaths */
  export function UnloadDirectoryFiles(files: FilePathList): void
  
  /** Check if a file has been dropped into window */
  export function IsFileDropped(): boolean
  
  /** Load dropped filepaths */
  export function LoadDroppedFiles(): FilePathList
  
  /** Unload dropped filepaths */
  export function UnloadDroppedFiles(files: FilePathList): void
  
  /** Get file modification time (last write time) */
  export function GetFileModTime(fileName: string): number
  
  /** Compress data (DEFLATE algorithm), memory must be MemFree() */
  export function CompressData(data: Buffer, dataSize: number, compDataSize: number): Buffer
  
  /** Decompress data (DEFLATE algorithm), memory must be MemFree() */
  export function DecompressData(compData: Buffer, compDataSize: number, dataSize: number): Buffer
  
  /** Encode data to Base64 string, memory must be MemFree() */
  export function EncodeDataBase64(data: Buffer, dataSize: number, outputSize: number): string
  
  /** Decode Base64 string data, memory must be MemFree() */
  export function DecodeDataBase64(data: Buffer, outputSize: number): Buffer
  
  /** Compute CRC32 hash code */
  export function ComputeCRC32(data: Buffer, dataSize: number): number
  
  /** Compute MD5 hash code, returns static int[4] (16 bytes) */
  export function ComputeMD5(data: Buffer, dataSize: number): number
  
  /** Compute SHA1 hash code, returns static int[5] (20 bytes) */
  export function ComputeSHA1(data: Buffer, dataSize: number): number
  
  /** Load automation events list from file, NULL for empty list, capacity = MAX_AUTOMATION_EVENTS */
  export function LoadAutomationEventList(fileName: string): AutomationEventList
  
  /** Unload automation events list from file */
  export function UnloadAutomationEventList(list: AutomationEventList): void
  
  /** Export automation events list as text file */
  export function ExportAutomationEventList(list: AutomationEventList, fileName: string): boolean
  
  /** Set automation event list to record to */
  export function SetAutomationEventList(list: number): void
  
  /** Set automation event internal base frame to start recording */
  export function SetAutomationEventBaseFrame(frame: number): void
  
  /** Start recording automation events (AutomationEventList must be set) */
  export function StartAutomationEventRecording(): void
  
  /** Stop recording automation events */
  export function StopAutomationEventRecording(): void
  
  /** Check if a key has been pressed once */
  export function IsKeyPressed(key: number): boolean
  
  /** Check if a key has been pressed again */
  export function IsKeyPressedRepeat(key: number): boolean
  
  /** Check if a key is being pressed */
  export function IsKeyDown(key: number): boolean
  
  /** Check if a key has been released once */
  export function IsKeyReleased(key: number): boolean
  
  /** Check if a key is NOT being pressed */
  export function IsKeyUp(key: number): boolean
  
  /** Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty */
  export function GetKeyPressed(): number
  
  /** Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty */
  export function GetCharPressed(): number
  
  /** Set a custom key to exit program (default is ESC) */
  export function SetExitKey(key: number): void
  
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
  
  /** Set gamepad vibration for both motors (duration in seconds) */
  export function SetGamepadVibration(gamepad: number, leftMotor: number, rightMotor: number, duration: number): void
  
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
  
  /** Get mouse wheel movement for X or Y, whichever is larger */
  export function GetMouseWheelMove(): number
  
  /** Get mouse wheel movement for both X and Y */
  export function GetMouseWheelMoveV(): Vector2
  
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
  
  /** Get gesture hold time in seconds */
  export function GetGestureHoldDuration(): number
  
  /** Get gesture drag vector */
  export function GetGestureDragVector(): Vector2
  
  /** Get gesture drag angle */
  export function GetGestureDragAngle(): number
  
  /** Get gesture pinch delta */
  export function GetGesturePinchVector(): Vector2
  
  /** Get gesture pinch angle */
  export function GetGesturePinchAngle(): number
  
  /** Update camera position for selected mode */
  export function UpdateCamera(camera: Camera3D, mode: number): void
  
  /** Update camera movement/rotation */
  export function UpdateCameraPro(camera: number, movement: Vector3, rotation: Vector3, zoom: number): void
  
  /** Set texture and rectangle to be used on shapes drawing */
  export function SetShapesTexture(texture: Texture, source: Rectangle): void
  
  /** Get texture that is used for shapes drawing */
  export function GetShapesTexture(): Texture2D
  
  /** Get texture source rectangle that is used for shapes drawing */
  export function GetShapesTextureRectangle(): Rectangle
  
  /** Draw a pixel using geometry [Can be slow, use with care] */
  export function DrawPixel(posX: number, posY: number, color: Color): void
  
  /** Draw a pixel using geometry (Vector version) [Can be slow, use with care] */
  export function DrawPixelV(position: Vector2, color: Color): void
  
  /** Draw a line */
  export function DrawLine(startPosX: number, startPosY: number, endPosX: number, endPosY: number, color: Color): void
  
  /** Draw a line (using gl lines) */
  export function DrawLineV(startPos: Vector2, endPos: Vector2, color: Color): void
  
  /** Draw a line (using triangles/quads) */
  export function DrawLineEx(startPos: Vector2, endPos: Vector2, thick: number, color: Color): void
  
  /** Draw lines sequence (using gl lines) */
  export function DrawLineStrip(points: number, pointCount: number, color: Color): void
  
  /** Draw line segment cubic-bezier in-out interpolation */
  export function DrawLineBezier(startPos: Vector2, endPos: Vector2, thick: number, color: Color): void
  
  /** Draw a color-filled circle */
  export function DrawCircle(centerX: number, centerY: number, radius: number, color: Color): void
  
  /** Draw a piece of a circle */
  export function DrawCircleSector(center: Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: Color): void
  
  /** Draw circle sector outline */
  export function DrawCircleSectorLines(center: Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: Color): void
  
  /** Draw a gradient-filled circle */
  export function DrawCircleGradient(centerX: number, centerY: number, radius: number, inner: Color, outer: Color): void
  
  /** Draw a color-filled circle (Vector version) */
  export function DrawCircleV(center: Vector2, radius: number, color: Color): void
  
  /** Draw circle outline */
  export function DrawCircleLines(centerX: number, centerY: number, radius: number, color: Color): void
  
  /** Draw circle outline (Vector version) */
  export function DrawCircleLinesV(center: Vector2, radius: number, color: Color): void
  
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
  export function DrawRectangleGradientV(posX: number, posY: number, width: number, height: number, top: Color, bottom: Color): void
  
  /** Draw a horizontal-gradient-filled rectangle */
  export function DrawRectangleGradientH(posX: number, posY: number, width: number, height: number, left: Color, right: Color): void
  
  /** Draw a gradient-filled rectangle with custom vertex colors */
  export function DrawRectangleGradientEx(rec: Rectangle, topLeft: Color, bottomLeft: Color, topRight: Color, bottomRight: Color): void
  
  /** Draw rectangle outline */
  export function DrawRectangleLines(posX: number, posY: number, width: number, height: number, color: Color): void
  
  /** Draw rectangle outline with extended parameters */
  export function DrawRectangleLinesEx(rec: Rectangle, lineThick: number, color: Color): void
  
  /** Draw rectangle with rounded edges */
  export function DrawRectangleRounded(rec: Rectangle, roundness: number, segments: number, color: Color): void
  
  /** Draw rectangle lines with rounded edges */
  export function DrawRectangleRoundedLines(rec: Rectangle, roundness: number, segments: number, color: Color): void
  
  /** Draw rectangle with rounded edges outline */
  export function DrawRectangleRoundedLinesEx(rec: Rectangle, roundness: number, segments: number, lineThick: number, color: Color): void
  
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
  
  /** Draw spline: Linear, minimum 2 points */
  export function DrawSplineLinear(points: number, pointCount: number, thick: number, color: Color): void
  
  /** Draw spline: B-Spline, minimum 4 points */
  export function DrawSplineBasis(points: number, pointCount: number, thick: number, color: Color): void
  
  /** Draw spline: Catmull-Rom, minimum 4 points */
  export function DrawSplineCatmullRom(points: number, pointCount: number, thick: number, color: Color): void
  
  /** Draw spline: Quadratic Bezier, minimum 3 points (1 control point): [p1, c2, p3, c4...] */
  export function DrawSplineBezierQuadratic(points: number, pointCount: number, thick: number, color: Color): void
  
  /** Draw spline: Cubic Bezier, minimum 4 points (2 control points): [p1, c2, c3, p4, c5, c6...] */
  export function DrawSplineBezierCubic(points: number, pointCount: number, thick: number, color: Color): void
  
  /** Draw spline segment: Linear, 2 points */
  export function DrawSplineSegmentLinear(p1: Vector2, p2: Vector2, thick: number, color: Color): void
  
  /** Draw spline segment: B-Spline, 4 points */
  export function DrawSplineSegmentBasis(p1: Vector2, p2: Vector2, p3: Vector2, p4: Vector2, thick: number, color: Color): void
  
  /** Draw spline segment: Catmull-Rom, 4 points */
  export function DrawSplineSegmentCatmullRom(p1: Vector2, p2: Vector2, p3: Vector2, p4: Vector2, thick: number, color: Color): void
  
  /** Draw spline segment: Quadratic Bezier, 2 points, 1 control point */
  export function DrawSplineSegmentBezierQuadratic(p1: Vector2, c2: Vector2, p3: Vector2, thick: number, color: Color): void
  
  /** Draw spline segment: Cubic Bezier, 2 points, 2 control points */
  export function DrawSplineSegmentBezierCubic(p1: Vector2, c2: Vector2, c3: Vector2, p4: Vector2, thick: number, color: Color): void
  
  /** Get (evaluate) spline point: Linear */
  export function GetSplinePointLinear(startPos: Vector2, endPos: Vector2, t: number): Vector2
  
  /** Get (evaluate) spline point: B-Spline */
  export function GetSplinePointBasis(p1: Vector2, p2: Vector2, p3: Vector2, p4: Vector2, t: number): Vector2
  
  /** Get (evaluate) spline point: Catmull-Rom */
  export function GetSplinePointCatmullRom(p1: Vector2, p2: Vector2, p3: Vector2, p4: Vector2, t: number): Vector2
  
  /** Get (evaluate) spline point: Quadratic Bezier */
  export function GetSplinePointBezierQuad(p1: Vector2, c2: Vector2, p3: Vector2, t: number): Vector2
  
  /** Get (evaluate) spline point: Cubic Bezier */
  export function GetSplinePointBezierCubic(p1: Vector2, c2: Vector2, c3: Vector2, p4: Vector2, t: number): Vector2
  
  /** Check collision between two rectangles */
  export function CheckCollisionRecs(rec1: Rectangle, rec2: Rectangle): boolean
  
  /** Check collision between two circles */
  export function CheckCollisionCircles(center1: Vector2, radius1: number, center2: Vector2, radius2: number): boolean
  
  /** Check collision between circle and rectangle */
  export function CheckCollisionCircleRec(center: Vector2, radius: number, rec: Rectangle): boolean
  
  /** Check if circle collides with a line created betweeen two points [p1] and [p2] */
  export function CheckCollisionCircleLine(center: Vector2, radius: number, p1: Vector2, p2: Vector2): boolean
  
  /** Check if point is inside rectangle */
  export function CheckCollisionPointRec(point: Vector2, rec: Rectangle): boolean
  
  /** Check if point is inside circle */
  export function CheckCollisionPointCircle(point: Vector2, center: Vector2, radius: number): boolean
  
  /** Check if point is inside a triangle */
  export function CheckCollisionPointTriangle(point: Vector2, p1: Vector2, p2: Vector2, p3: Vector2): boolean
  
  /** Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold] */
  export function CheckCollisionPointLine(point: Vector2, p1: Vector2, p2: Vector2, threshold: number): boolean
  
  /** Check if point is within a polygon described by array of vertices */
  export function CheckCollisionPointPoly(point: Vector2, points: number, pointCount: number): boolean
  
  /** Check the collision between two lines defined by two points each, returns collision point by reference */
  export function CheckCollisionLines(startPos1: Vector2, endPos1: Vector2, startPos2: Vector2, endPos2: Vector2, collisionPoint: number): boolean
  
  /** Get collision rectangle for two rectangles collision */
  export function GetCollisionRec(rec1: Rectangle, rec2: Rectangle): Rectangle
  
  /** Load image from file into CPU memory (RAM) */
  export function LoadImage(fileName: string): Image
  
  /** Load image from RAW file data */
  export function LoadImageRaw(fileName: string, width: number, height: number, format: number, headerSize: number): Image
  
  /** Load image sequence from file (frames appended to image.data) */
  export function LoadImageAnim(fileName: string, frames: number): Image
  
  /** Load image sequence from memory buffer */
  export function LoadImageAnimFromMemory(fileType: string, fileData: Buffer, dataSize: number, frames: number): Image
  
  /** Load image from memory buffer, fileType refers to extension: i.e. '.png' */
  export function LoadImageFromMemory(fileType: string, fileData: Buffer, dataSize: number): Image
  
  /** Load image from GPU texture data */
  export function LoadImageFromTexture(texture: Texture): Image
  
  /** Load image from screen buffer and (screenshot) */
  export function LoadImageFromScreen(): Image
  
  /** Check if an image is valid (data and parameters) */
  export function IsImageValid(image: Image): boolean
  
  /** Unload image from CPU memory (RAM) */
  export function UnloadImage(image: Image): void
  
  /** Export image data to file, returns true on success */
  export function ExportImage(image: Image, fileName: string): boolean
  
  /** Export image to memory buffer */
  export function ExportImageToMemory(image: Image, fileType: string, fileSize: number): Buffer
  
  /** Export image as code file defining an array of bytes, returns true on success */
  export function ExportImageAsCode(image: Image, fileName: string): boolean
  
  /** Generate image: plain color */
  export function GenImageColor(width: number, height: number, color: Color): Image
  
  /** Generate image: linear gradient, direction in degrees [0..360], 0=Vertical gradient */
  export function GenImageGradientLinear(width: number, height: number, direction: number, start: Color, end: Color): Image
  
  /** Generate image: radial gradient */
  export function GenImageGradientRadial(width: number, height: number, density: number, inner: Color, outer: Color): Image
  
  /** Generate image: square gradient */
  export function GenImageGradientSquare(width: number, height: number, density: number, inner: Color, outer: Color): Image
  
  /** Generate image: checked */
  export function GenImageChecked(width: number, height: number, checksX: number, checksY: number, col1: Color, col2: Color): Image
  
  /** Generate image: white noise */
  export function GenImageWhiteNoise(width: number, height: number, factor: number): Image
  
  /** Generate image: perlin noise */
  export function GenImagePerlinNoise(width: number, height: number, offsetX: number, offsetY: number, scale: number): Image
  
  /** Generate image: cellular algorithm, bigger tileSize means bigger cells */
  export function GenImageCellular(width: number, height: number, tileSize: number): Image
  
  /** Generate image: grayscale image from text data */
  export function GenImageText(width: number, height: number, text: string): Image
  
  /** Create an image duplicate (useful for transformations) */
  export function ImageCopy(image: Image): Image
  
  /** Create an image from another image piece */
  export function ImageFromImage(image: Image, rec: Rectangle): Image
  
  /** Create an image from a selected channel of another image (GRAYSCALE) */
  export function ImageFromChannel(image: Image, selectedChannel: number): Image
  
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
  
  /** Apply Gaussian blur using a box blur approximation */
  export function ImageBlurGaussian(image: number, blurSize: number): void
  
  /** Apply custom square convolution kernel to image */
  export function ImageKernelConvolution(image: number, kernel: number, kernelSize: number): void
  
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
  
  /** Rotate image by input angle in degrees (-359 to 359) */
  export function ImageRotate(image: number, degrees: number): void
  
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
  
  /** Draw a line defining thickness within an image */
  export function ImageDrawLineEx(dst: number, start: Vector2, end: Vector2, thick: number, color: Color): void
  
  /** Draw a filled circle within an image */
  export function ImageDrawCircle(dst: Image, centerX: number, centerY: number, radius: number, color: Color): void
  
  /** Draw a filled circle within an image (Vector version) */
  export function ImageDrawCircleV(dst: Image, center: Vector2, radius: number, color: Color): void
  
  /** Draw circle outline within an image */
  export function ImageDrawCircleLines(dst: number, centerX: number, centerY: number, radius: number, color: Color): void
  
  /** Draw circle outline within an image (Vector version) */
  export function ImageDrawCircleLinesV(dst: number, center: Vector2, radius: number, color: Color): void
  
  /** Draw rectangle within an image */
  export function ImageDrawRectangle(dst: Image, posX: number, posY: number, width: number, height: number, color: Color): void
  
  /** Draw rectangle within an image (Vector version) */
  export function ImageDrawRectangleV(dst: Image, position: Vector2, size: Vector2, color: Color): void
  
  /** Draw rectangle within an image */
  export function ImageDrawRectangleRec(dst: Image, rec: Rectangle, color: Color): void
  
  /** Draw rectangle lines within an image */
  export function ImageDrawRectangleLines(dst: Image, rec: Rectangle, thick: number, color: Color): void
  
  /** Draw triangle within an image */
  export function ImageDrawTriangle(dst: number, v1: Vector2, v2: Vector2, v3: Vector2, color: Color): void
  
  /** Draw triangle with interpolated colors within an image */
  export function ImageDrawTriangleEx(dst: number, v1: Vector2, v2: Vector2, v3: Vector2, c1: Color, c2: Color, c3: Color): void
  
  /** Draw triangle outline within an image */
  export function ImageDrawTriangleLines(dst: number, v1: Vector2, v2: Vector2, v3: Vector2, color: Color): void
  
  /** Draw a triangle fan defined by points within an image (first vertex is the center) */
  export function ImageDrawTriangleFan(dst: number, points: number, pointCount: number, color: Color): void
  
  /** Draw a triangle strip defined by points within an image */
  export function ImageDrawTriangleStrip(dst: number, points: number, pointCount: number, color: Color): void
  
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
  
  /** Check if a texture is valid (loaded in GPU) */
  export function IsTextureValid(texture: Texture): boolean
  
  /** Unload texture from GPU memory (VRAM) */
  export function UnloadTexture(texture: Texture): void
  
  /** Check if a render texture is valid (loaded in GPU) */
  export function IsRenderTextureValid(target: RenderTexture): boolean
  
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
  
  /** Draw a part of a texture defined by a rectangle with 'pro' parameters */
  export function DrawTexturePro(texture: Texture, source: Rectangle, dest: Rectangle, origin: Vector2, rotation: number, tint: Color): void
  
  /** Draws a texture (or part of it) that stretches or shrinks nicely */
  export function DrawTextureNPatch(texture: Texture, nPatchInfo: NPatchInfo, dest: Rectangle, origin: Vector2, rotation: number, tint: Color): void
  
  /** Check if two colors are equal */
  export function ColorIsEqual(col1: Color, col2: Color): boolean
  
  /** Get color with alpha applied, alpha goes from 0.0f to 1.0f */
  export function Fade(color: Color, alpha: number): Color
  
  /** Get hexadecimal value for a Color (0xRRGGBBAA) */
  export function ColorToInt(color: Color): number
  
  /** Get Color normalized as float [0..1] */
  export function ColorNormalize(color: Color): Vector4
  
  /** Get Color from normalized values [0..1] */
  export function ColorFromNormalized(normalized: Vector4): Color
  
  /** Get HSV values for a Color, hue [0..360], saturation/value [0..1] */
  export function ColorToHSV(color: Color): Vector3
  
  /** Get a Color from HSV values, hue [0..360], saturation/value [0..1] */
  export function ColorFromHSV(hue: number, saturation: number, value: number): Color
  
  /** Get color multiplied with another color */
  export function ColorTint(color: Color, tint: Color): Color
  
  /** Get color with brightness correction, brightness factor goes from -1.0f to 1.0f */
  export function ColorBrightness(color: Color, factor: number): Color
  
  /** Get color with contrast correction, contrast values between -1.0f and 1.0f */
  export function ColorContrast(color: Color, contrast: number): Color
  
  /** Get color with alpha applied, alpha goes from 0.0f to 1.0f */
  export function ColorAlpha(color: Color, alpha: number): Color
  
  /** Get src alpha-blended into dst color with tint */
  export function ColorAlphaBlend(dst: Color, src: Color, tint: Color): Color
  
  /** Get color lerp interpolation between two colors, factor [0.0f..1.0f] */
  export function ColorLerp(color1: Color, color2: Color, factor: number): Color
  
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
  
  /** Load font from file with extended parameters, use NULL for codepoints and 0 for codepointCount to load the default character set, font size is provided in pixels height */
  export function LoadFontEx(fileName: string, fontSize: number, codepoints: number, codepointCount: number): Font
  
  /** Load font from Image (XNA style) */
  export function LoadFontFromImage(image: Image, key: Color, firstChar: number): Font
  
  /** Load font from memory buffer, fileType refers to extension: i.e. '.ttf' */
  export function LoadFontFromMemory(fileType: string, fileData: Buffer, dataSize: number, fontSize: number, codepoints: number, codepointCount: number): Font
  
  /** Check if a font is valid (font data loaded, WARNING: GPU texture not checked) */
  export function IsFontValid(font: Font): boolean
  
  /** Load font data for further use */
  export function LoadFontData(fileData: Buffer, dataSize: number, fontSize: number, codepoints: number, codepointCount: number, type: number): number
  
  /** Generate image font atlas using chars info */
  export function GenImageFontAtlas(glyphs: number, glyphRecs: number, glyphCount: number, fontSize: number, padding: number, packMethod: number): Image
  
  /** Unload font chars info data (RAM) */
  export function UnloadFontData(glyphs: number, glyphCount: number): void
  
  /** Unload font from GPU memory (VRAM) */
  export function UnloadFont(font: Font): void
  
  /** Export font as code file, returns true on success */
  export function ExportFontAsCode(font: Font, fileName: string): boolean
  
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
  
  /** Draw multiple character (codepoint) */
  export function DrawTextCodepoints(font: Font, codepoints: number, codepointCount: number, position: Vector2, fontSize: number, spacing: number, tint: Color): void
  
  /** Set vertical line spacing when drawing with line-breaks */
  export function SetTextLineSpacing(spacing: number): void
  
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
  
  /** Load UTF-8 text encoded from codepoints array */
  export function LoadUTF8(codepoints: number, length: number): string
  
  /** Unload UTF-8 text encoded from codepoints array */
  export function UnloadUTF8(text: string): void
  
  /** Load all codepoints from a UTF-8 text string, codepoints count returned by parameter */
  export function LoadCodepoints(text: string, count: number): number
  
  /** Unload codepoints data from memory */
  export function UnloadCodepoints(codepoints: number): void
  
  /** Get total number of codepoints in a UTF-8 encoded string */
  export function GetCodepointCount(text: string): number
  
  /** Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure */
  export function GetCodepoint(text: string, codepointSize: number): number
  
  /** Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure */
  export function GetCodepointNext(text: string, codepointSize: number): number
  
  /** Get previous codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure */
  export function GetCodepointPrevious(text: string, codepointSize: number): number
  
  /** Encode one codepoint into UTF-8 byte array (array length returned as parameter) */
  export function CodepointToUTF8(codepoint: number, utf8Size: number): string
  
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
  
  /** Get Snake case notation version of provided string */
  export function TextToSnake(text: string): string
  
  /** Get Camel case notation version of provided string */
  export function TextToCamel(text: string): string
  
  /** Get integer value from text (negative values not supported) */
  export function TextToInteger(text: string): number
  
  /** Get float value from text (negative values not supported) */
  export function TextToFloat(text: string): number
  
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
  
  /** Draw a capsule with the center of its sphere caps at startPos and endPos */
  export function DrawCapsule(startPos: Vector3, endPos: Vector3, radius: number, slices: number, rings: number, color: Color): void
  
  /** Draw capsule wireframe with the center of its sphere caps at startPos and endPos */
  export function DrawCapsuleWires(startPos: Vector3, endPos: Vector3, radius: number, slices: number, rings: number, color: Color): void
  
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
  
  /** Check if a model is valid (loaded in GPU, VAO/VBOs) */
  export function IsModelValid(model: Model): boolean
  
  /** Unload model (including meshes) from memory (RAM and/or VRAM) */
  export function UnloadModel(model: Model): void
  
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
  
  /** Draw a model as points */
  export function DrawModelPoints(model: Model, position: Vector3, scale: number, tint: Color): void
  
  /** Draw a model as points with extended parameters */
  export function DrawModelPointsEx(model: Model, position: Vector3, rotationAxis: Vector3, rotationAngle: number, scale: Vector3, tint: Color): void
  
  /** Draw bounding box (wires) */
  export function DrawBoundingBox(box: BoundingBox, color: Color): void
  
  /** Draw a billboard texture */
  export function DrawBillboard(camera: Camera3D, texture: Texture, position: Vector3, scale: number, tint: Color): void
  
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
  
  /** Compute mesh bounding box limits */
  export function GetMeshBoundingBox(mesh: Mesh): BoundingBox
  
  /** Compute mesh tangents */
  export function GenMeshTangents(mesh: Mesh): void
  
  /** Export mesh data to file, returns true on success */
  export function ExportMesh(mesh: Mesh, fileName: string): boolean
  
  /** Export mesh as code file (.h) defining multiple arrays of vertex attributes */
  export function ExportMeshAsCode(mesh: Mesh, fileName: string): boolean
  
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
  
  /** Get master volume (listener) */
  export function GetMasterVolume(): number
  
  /** Load wave data from file */
  export function LoadWave(fileName: string): Wave
  
  /** Load wave from memory buffer, fileType refers to extension: i.e. '.wav' */
  export function LoadWaveFromMemory(fileType: string, fileData: Buffer, dataSize: number): Wave
  
  /** Checks if wave data is valid (data loaded and parameters) */
  export function IsWaveValid(wave: Wave): boolean
  
  /** Load sound from file */
  export function LoadSound(fileName: string): Sound
  
  /** Load sound from wave data */
  export function LoadSoundFromWave(wave: Wave): Sound
  
  /** Create a new sound that shares the same sample data as the source sound, does not own the sound data */
  export function LoadSoundAlias(source: Sound): Sound
  
  /** Checks if a sound is valid (data loaded and buffers initialized) */
  export function IsSoundValid(sound: Sound): boolean
  
  /** Update sound buffer with new data */
  export function UpdateSound(sound: Sound, data: number, sampleCount: number): void
  
  /** Unload wave data */
  export function UnloadWave(wave: Wave): void
  
  /** Unload sound */
  export function UnloadSound(sound: Sound): void
  
  /** Unload a sound alias (does not deallocate sample data) */
  export function UnloadSoundAlias(alias: Sound): void
  
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
  
  /** Check if a sound is currently playing */
  export function IsSoundPlaying(sound: Sound): boolean
  
  /** Set volume for a sound (1.0 is max level) */
  export function SetSoundVolume(sound: Sound, volume: number): void
  
  /** Set pitch for a sound (1.0 is base level) */
  export function SetSoundPitch(sound: Sound, pitch: number): void
  
  /** Set pan for a sound (0.5 is center) */
  export function SetSoundPan(sound: Sound, pan: number): void
  
  /** Copy a wave to a new wave */
  export function WaveCopy(wave: Wave): Wave
  
  /** Crop a wave to defined frames range */
  export function WaveCrop(wave: Wave, initFrame: number, finalFrame: number): void
  
  /** Convert wave data to desired format */
  export function WaveFormat(wave: Wave, sampleRate: number, sampleSize: number, channels: number): void
  
  /** Load samples data from wave as a 32bit float data array */
  export function LoadWaveSamples(wave: Wave): number
  
  /** Unload samples data loaded with LoadWaveSamples() */
  export function UnloadWaveSamples(samples: number): void
  
  /** Load music stream from file */
  export function LoadMusicStream(fileName: string): Music
  
  /** Load music stream from data */
  export function LoadMusicStreamFromMemory(fileType: string, data: Buffer, dataSize: number): Music
  
  /** Checks if a music stream is valid (context and buffers initialized) */
  export function IsMusicValid(music: Music): boolean
  
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
  
  /** Set pan for a music (0.5 is center) */
  export function SetMusicPan(music: Music, pan: number): void
  
  /** Get music time length (in seconds) */
  export function GetMusicTimeLength(music: Music): number
  
  /** Get current music time played (in seconds) */
  export function GetMusicTimePlayed(music: Music): number
  
  /** Load audio stream (to stream raw audio pcm data) */
  export function LoadAudioStream(sampleRate: number, sampleSize: number, channels: number): AudioStream
  
  /** Checks if an audio stream is valid (buffers initialized) */
  export function IsAudioStreamValid(stream: AudioStream): boolean
  
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
  
  /** Set pan for audio stream (0.5 is centered) */
  export function SetAudioStreamPan(stream: AudioStream, pan: number): void
  
  /** Default size for new audio streams */
  export function SetAudioStreamBufferSizeDefault(size: number): void
  
  /** Ease: Linear */
  export function EaseLinearNone(t: number, b: number, c: number, d: number): number
  
  /** Ease: Linear In */
  export function EaseLinearIn(t: number, b: number, c: number, d: number): number
  
  /** Ease: Linear Out */
  export function EaseLinearOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Linear In Out */
  export function EaseLinearInOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Sine In */
  export function EaseSineIn(t: number, b: number, c: number, d: number): number
  
  /** Ease: Sine Out */
  export function EaseSineOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Sine Out */
  export function EaseSineInOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Circular In */
  export function EaseCircIn(t: number, b: number, c: number, d: number): number
  
  /** Ease: Circular Out */
  export function EaseCircOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Circular In Out */
  export function EaseCircInOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Cubic In */
  export function EaseCubicIn(t: number, b: number, c: number, d: number): number
  
  /** Ease: Cubic Out */
  export function EaseCubicOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Cubic In Out */
  export function EaseCubicInOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Quadratic In */
  export function EaseQuadIn(t: number, b: number, c: number, d: number): number
  
  /** Ease: Quadratic Out */
  export function EaseQuadOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Quadratic In Out */
  export function EaseQuadInOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Exponential In */
  export function EaseExpoIn(t: number, b: number, c: number, d: number): number
  
  /** Ease: Exponential Out */
  export function EaseExpoOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Exponential In Out */
  export function EaseExpoInOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Back In */
  export function EaseBackIn(t: number, b: number, c: number, d: number): number
  
  /** Ease: Back Out */
  export function EaseBackOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Back In Out */
  export function EaseBackInOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Bounce Out */
  export function EaseBounceOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Bounce In */
  export function EaseBounceIn(t: number, b: number, c: number, d: number): number
  
  /** Ease: Bounce In Out */
  export function EaseBounceInOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Elastic In */
  export function EaseElasticIn(t: number, b: number, c: number, d: number): number
  
  /** Ease: Elastic Out */
  export function EaseElasticOut(t: number, b: number, c: number, d: number): number
  
  /** Ease: Elastic In Out */
  export function EaseElasticInOut(t: number, b: number, c: number, d: number): number
  
  /**  */
  export function Clamp(value: number, min: number, max: number): number
  
  /**  */
  export function Lerp(start: number, end: number, amount: number): number
  
  /**  */
  export function Normalize(value: number, start: number, end: number): number
  
  /**  */
  export function Remap(value: number, inputStart: number, inputEnd: number, outputStart: number, outputEnd: number): number
  
  /**  */
  export function Wrap(value: number, min: number, max: number): number
  
  /**  */
  export function FloatEquals(x: number, y: number): number
  
  /**  */
  export function Vector2Zero(): Vector2
  
  /**  */
  export function Vector2One(): Vector2
  
  /**  */
  export function Vector2Add(v1: Vector2, v2: Vector2): Vector2
  
  /**  */
  export function Vector2AddValue(v: Vector2, add: number): Vector2
  
  /**  */
  export function Vector2Subtract(v1: Vector2, v2: Vector2): Vector2
  
  /**  */
  export function Vector2SubtractValue(v: Vector2, sub: number): Vector2
  
  /**  */
  export function Vector2Length(v: Vector2): number
  
  /**  */
  export function Vector2LengthSqr(v: Vector2): number
  
  /**  */
  export function Vector2DotProduct(v1: Vector2, v2: Vector2): number
  
  /**  */
  export function Vector2Distance(v1: Vector2, v2: Vector2): number
  
  /**  */
  export function Vector2DistanceSqr(v1: Vector2, v2: Vector2): number
  
  /**  */
  export function Vector2Angle(v1: Vector2, v2: Vector2): number
  
  /**  */
  export function Vector2LineAngle(start: Vector2, end: Vector2): number
  
  /**  */
  export function Vector2Scale(v: Vector2, scale: number): Vector2
  
  /**  */
  export function Vector2Multiply(v1: Vector2, v2: Vector2): Vector2
  
  /**  */
  export function Vector2Negate(v: Vector2): Vector2
  
  /**  */
  export function Vector2Divide(v1: Vector2, v2: Vector2): Vector2
  
  /**  */
  export function Vector2Normalize(v: Vector2): Vector2
  
  /**  */
  export function Vector2Transform(v: Vector2, mat: Matrix): Vector2
  
  /**  */
  export function Vector2Lerp(v1: Vector2, v2: Vector2, amount: number): Vector2
  
  /**  */
  export function Vector2Reflect(v: Vector2, normal: Vector2): Vector2
  
  /**  */
  export function Vector2Min(v1: Vector2, v2: Vector2): Vector2
  
  /**  */
  export function Vector2Max(v1: Vector2, v2: Vector2): Vector2
  
  /**  */
  export function Vector2Rotate(v: Vector2, angle: number): Vector2
  
  /**  */
  export function Vector2MoveTowards(v: Vector2, target: Vector2, maxDistance: number): Vector2
  
  /**  */
  export function Vector2Invert(v: Vector2): Vector2
  
  /**  */
  export function Vector2Clamp(v: Vector2, min: Vector2, max: Vector2): Vector2
  
  /**  */
  export function Vector2ClampValue(v: Vector2, min: number, max: number): Vector2
  
  /**  */
  export function Vector2Equals(p: Vector2, q: Vector2): number
  
  /**  */
  export function Vector2Refract(v: Vector2, n: Vector2, r: number): Vector2
  
  /**  */
  export function Vector3Zero(): Vector3
  
  /**  */
  export function Vector3One(): Vector3
  
  /**  */
  export function Vector3Add(v1: Vector3, v2: Vector3): Vector3
  
  /**  */
  export function Vector3AddValue(v: Vector3, add: number): Vector3
  
  /**  */
  export function Vector3Subtract(v1: Vector3, v2: Vector3): Vector3
  
  /**  */
  export function Vector3SubtractValue(v: Vector3, sub: number): Vector3
  
  /**  */
  export function Vector3Scale(v: Vector3, scalar: number): Vector3
  
  /**  */
  export function Vector3Multiply(v1: Vector3, v2: Vector3): Vector3
  
  /**  */
  export function Vector3CrossProduct(v1: Vector3, v2: Vector3): Vector3
  
  /**  */
  export function Vector3Perpendicular(v: Vector3): Vector3
  
  /**  */
  export function Vector3Length(v: Vector3): number
  
  /**  */
  export function Vector3LengthSqr(v: Vector3): number
  
  /**  */
  export function Vector3DotProduct(v1: Vector3, v2: Vector3): number
  
  /**  */
  export function Vector3Distance(v1: Vector3, v2: Vector3): number
  
  /**  */
  export function Vector3DistanceSqr(v1: Vector3, v2: Vector3): number
  
  /**  */
  export function Vector3Angle(v1: Vector3, v2: Vector3): number
  
  /**  */
  export function Vector3Negate(v: Vector3): Vector3
  
  /**  */
  export function Vector3Divide(v1: Vector3, v2: Vector3): Vector3
  
  /**  */
  export function Vector3Normalize(v: Vector3): Vector3
  
  /**  */
  export function Vector3Project(v1: Vector3, v2: Vector3): Vector3
  
  /**  */
  export function Vector3Reject(v1: Vector3, v2: Vector3): Vector3
  
  /**  */
  export function Vector3OrthoNormalize(v1: number, v2: number): void
  
  /**  */
  export function Vector3Transform(v: Vector3, mat: Matrix): Vector3
  
  /**  */
  export function Vector3RotateByQuaternion(v: Vector3, q: Quaternion): Vector3
  
  /**  */
  export function Vector3RotateByAxisAngle(v: Vector3, axis: Vector3, angle: number): Vector3
  
  /**  */
  export function Vector3MoveTowards(v: Vector3, target: Vector3, maxDistance: number): Vector3
  
  /**  */
  export function Vector3Lerp(v1: Vector3, v2: Vector3, amount: number): Vector3
  
  /**  */
  export function Vector3CubicHermite(v1: Vector3, tangent1: Vector3, v2: Vector3, tangent2: Vector3, amount: number): Vector3
  
  /**  */
  export function Vector3Reflect(v: Vector3, normal: Vector3): Vector3
  
  /**  */
  export function Vector3Min(v1: Vector3, v2: Vector3): Vector3
  
  /**  */
  export function Vector3Max(v1: Vector3, v2: Vector3): Vector3
  
  /**  */
  export function Vector3Barycenter(p: Vector3, a: Vector3, b: Vector3, c: Vector3): Vector3
  
  /**  */
  export function Vector3Unproject(source: Vector3, projection: Matrix, view: Matrix): Vector3
  
  /**  */
  export function Vector3Invert(v: Vector3): Vector3
  
  /**  */
  export function Vector3Clamp(v: Vector3, min: Vector3, max: Vector3): Vector3
  
  /**  */
  export function Vector3ClampValue(v: Vector3, min: number, max: number): Vector3
  
  /**  */
  export function Vector3Equals(p: Vector3, q: Vector3): number
  
  /**  */
  export function Vector3Refract(v: Vector3, n: Vector3, r: number): Vector3
  
  /**  */
  export function Vector4Zero(): Vector4
  
  /**  */
  export function Vector4One(): Vector4
  
  /**  */
  export function Vector4Add(v1: Vector4, v2: Vector4): Vector4
  
  /**  */
  export function Vector4AddValue(v: Vector4, add: number): Vector4
  
  /**  */
  export function Vector4Subtract(v1: Vector4, v2: Vector4): Vector4
  
  /**  */
  export function Vector4SubtractValue(v: Vector4, add: number): Vector4
  
  /**  */
  export function Vector4Length(v: Vector4): number
  
  /**  */
  export function Vector4LengthSqr(v: Vector4): number
  
  /**  */
  export function Vector4DotProduct(v1: Vector4, v2: Vector4): number
  
  /**  */
  export function Vector4Distance(v1: Vector4, v2: Vector4): number
  
  /**  */
  export function Vector4DistanceSqr(v1: Vector4, v2: Vector4): number
  
  /**  */
  export function Vector4Scale(v: Vector4, scale: number): Vector4
  
  /**  */
  export function Vector4Multiply(v1: Vector4, v2: Vector4): Vector4
  
  /**  */
  export function Vector4Negate(v: Vector4): Vector4
  
  /**  */
  export function Vector4Divide(v1: Vector4, v2: Vector4): Vector4
  
  /**  */
  export function Vector4Normalize(v: Vector4): Vector4
  
  /**  */
  export function Vector4Min(v1: Vector4, v2: Vector4): Vector4
  
  /**  */
  export function Vector4Max(v1: Vector4, v2: Vector4): Vector4
  
  /**  */
  export function Vector4Lerp(v1: Vector4, v2: Vector4, amount: number): Vector4
  
  /**  */
  export function Vector4MoveTowards(v: Vector4, target: Vector4, maxDistance: number): Vector4
  
  /**  */
  export function Vector4Invert(v: Vector4): Vector4
  
  /**  */
  export function Vector4Equals(p: Vector4, q: Vector4): number
  
  /**  */
  export function MatrixDeterminant(mat: Matrix): number
  
  /**  */
  export function MatrixTrace(mat: Matrix): number
  
  /**  */
  export function MatrixTranspose(mat: Matrix): Matrix
  
  /**  */
  export function MatrixInvert(mat: Matrix): Matrix
  
  /**  */
  export function MatrixIdentity(): Matrix
  
  /**  */
  export function MatrixAdd(left: Matrix, right: Matrix): Matrix
  
  /**  */
  export function MatrixSubtract(left: Matrix, right: Matrix): Matrix
  
  /**  */
  export function MatrixMultiply(left: Matrix, right: Matrix): Matrix
  
  /**  */
  export function MatrixTranslate(x: number, y: number, z: number): Matrix
  
  /**  */
  export function MatrixRotate(axis: Vector3, angle: number): Matrix
  
  /**  */
  export function MatrixRotateX(angle: number): Matrix
  
  /**  */
  export function MatrixRotateY(angle: number): Matrix
  
  /**  */
  export function MatrixRotateZ(angle: number): Matrix
  
  /**  */
  export function MatrixRotateXYZ(angle: Vector3): Matrix
  
  /**  */
  export function MatrixRotateZYX(angle: Vector3): Matrix
  
  /**  */
  export function MatrixScale(x: number, y: number, z: number): Matrix
  
  /**  */
  export function MatrixFrustum(left: number, right: number, bottom: number, top: number, nearPlane: number, farPlane: number): Matrix
  
  /**  */
  export function MatrixPerspective(fovY: number, aspect: number, nearPlane: number, farPlane: number): Matrix
  
  /**  */
  export function MatrixOrtho(left: number, right: number, bottom: number, top: number, nearPlane: number, farPlane: number): Matrix
  
  /**  */
  export function MatrixLookAt(eye: Vector3, target: Vector3, up: Vector3): Matrix
  
  /**  */
  export function QuaternionAdd(q1: Quaternion, q2: Quaternion): Quaternion
  
  /**  */
  export function QuaternionAddValue(q: Quaternion, add: number): Quaternion
  
  /**  */
  export function QuaternionSubtract(q1: Quaternion, q2: Quaternion): Quaternion
  
  /**  */
  export function QuaternionSubtractValue(q: Quaternion, sub: number): Quaternion
  
  /**  */
  export function QuaternionIdentity(): Quaternion
  
  /**  */
  export function QuaternionLength(q: Quaternion): number
  
  /**  */
  export function QuaternionNormalize(q: Quaternion): Quaternion
  
  /**  */
  export function QuaternionInvert(q: Quaternion): Quaternion
  
  /**  */
  export function QuaternionMultiply(q1: Quaternion, q2: Quaternion): Quaternion
  
  /**  */
  export function QuaternionScale(q: Quaternion, mul: number): Quaternion
  
  /**  */
  export function QuaternionDivide(q1: Quaternion, q2: Quaternion): Quaternion
  
  /**  */
  export function QuaternionLerp(q1: Quaternion, q2: Quaternion, amount: number): Quaternion
  
  /**  */
  export function QuaternionNlerp(q1: Quaternion, q2: Quaternion, amount: number): Quaternion
  
  /**  */
  export function QuaternionSlerp(q1: Quaternion, q2: Quaternion, amount: number): Quaternion
  
  /**  */
  export function QuaternionCubicHermiteSpline(q1: Quaternion, outTangent1: Quaternion, q2: Quaternion, inTangent2: Quaternion, t: number): Quaternion
  
  /**  */
  export function QuaternionFromVector3ToVector3(from: Vector3, to: Vector3): Quaternion
  
  /**  */
  export function QuaternionFromMatrix(mat: Matrix): Quaternion
  
  /**  */
  export function QuaternionToMatrix(q: Quaternion): Matrix
  
  /**  */
  export function QuaternionFromAxisAngle(axis: Vector3, angle: number): Quaternion
  
  /**  */
  export function QuaternionToAxisAngle(q: Quaternion, outAxis: number, outAngle: number): void
  
  /**  */
  export function QuaternionFromEuler(pitch: number, yaw: number, roll: number): Quaternion
  
  /**  */
  export function QuaternionToEuler(q: Quaternion): Vector3
  
  /**  */
  export function QuaternionTransform(q: Quaternion, mat: Matrix): Quaternion
  
  /**  */
  export function QuaternionEquals(p: Quaternion, q: Quaternion): number
  
  /**  */
  export function MatrixDecompose(mat: Matrix, translation: number, rotation: number, scale: number): void
  
  /** Enable gui controls (global state) */
  export function GuiEnable(): void
  
  /** Disable gui controls (global state) */
  export function GuiDisable(): void
  
  /** Lock gui controls (global state) */
  export function GuiLock(): void
  
  /** Unlock gui controls (global state) */
  export function GuiUnlock(): void
  
  /** Check if gui is locked (global state) */
  export function GuiIsLocked(): boolean
  
  /** Set gui controls alpha (global state), alpha goes from 0.0f to 1.0f */
  export function GuiSetAlpha(alpha: number): void
  
  /** Set gui state (global state) */
  export function GuiSetState(state: number): void
  
  /** Get gui state (global state) */
  export function GuiGetState(): number
  
  /** Set gui custom font (global state) */
  export function GuiSetFont(font: Font): void
  
  /** Get gui custom font (global state) */
  export function GuiGetFont(): Font
  
  /** Set one style property */
  export function GuiSetStyle(control: number, property: number, value: number): void
  
  /** Get one style property */
  export function GuiGetStyle(control: number, property: number): number
  
  /** Load style file over global style variable (.rgs) */
  export function GuiLoadStyle(fileName: string): void
  
  /** Load style default over global style */
  export function GuiLoadStyleDefault(): void
  
  /** Enable gui tooltips (global state) */
  export function GuiEnableTooltip(): void
  
  /** Disable gui tooltips (global state) */
  export function GuiDisableTooltip(): void
  
  /** Set tooltip string */
  export function GuiSetTooltip(tooltip: string): void
  
  /** Get text with icon id prepended (if supported) */
  export function GuiIconText(iconId: number, text: string): string
  
  /** Set default icon drawing size */
  export function GuiSetIconScale(scale: number): void
  
  /** Get raygui icons data pointer */
  export function GuiGetIcons(): number
  
  /** Load raygui icons file (.rgi) into internal icons data */
  export function GuiLoadIcons(fileName: string, loadIconsName: boolean): number
  
  /** Draw icon using pixel size at specified position */
  export function GuiDrawIcon(iconId: number, posX: number, posY: number, pixelSize: number, color: Color): void
  
  /** Window Box control, shows a window that can be closed */
  export function GuiWindowBox(bounds: Rectangle, title: string): number
  
  /** Group Box control with text name */
  export function GuiGroupBox(bounds: Rectangle, text: string): number
  
  /** Line separator control, could contain text */
  export function GuiLine(bounds: Rectangle, text: string): number
  
  /** Panel control, useful to group controls */
  export function GuiPanel(bounds: Rectangle, text: string): number
  
  /** Tab Bar control, returns TAB to be closed or -1 */
  export function GuiTabBar(bounds: Rectangle, text: number, count: number, active: number): number
  
  /** Scroll Panel control */
  export function GuiScrollPanel(bounds: Rectangle, text: string, content: Rectangle, scroll: number, view: number): number
  
  /** Label control */
  export function GuiLabel(bounds: Rectangle, text: string): number
  
  /** Button control, returns true when clicked */
  export function GuiButton(bounds: Rectangle, text: string): number
  
  /** Label button control, returns true when clicked */
  export function GuiLabelButton(bounds: Rectangle, text: string): number
  
  /** Toggle Button control */
  export function GuiToggle(bounds: Rectangle, text: string, active: number): number
  
  /** Toggle Group control */
  export function GuiToggleGroup(bounds: Rectangle, text: string, active: number): number
  
  /** Toggle Slider control */
  export function GuiToggleSlider(bounds: Rectangle, text: string, active: number): number
  
  /** Check Box control, returns true when active */
  export function GuiCheckBox(bounds: Rectangle, text: string, checked: number): number
  
  /** Combo Box control */
  export function GuiComboBox(bounds: Rectangle, text: string, active: number): number
  
  /** Dropdown Box control */
  export function GuiDropdownBox(bounds: Rectangle, text: string, active: number, editMode: boolean): number
  
  /** Spinner control */
  export function GuiSpinner(bounds: Rectangle, text: string, value: number, minValue: number, maxValue: number, editMode: boolean): number
  
  /** Value Box control, updates input text with numbers */
  export function GuiValueBox(bounds: Rectangle, text: string, value: number, minValue: number, maxValue: number, editMode: boolean): number
  
  /** Value box control for float values */
  export function GuiValueBoxFloat(bounds: Rectangle, text: string, textValue: string, value: number, editMode: boolean): number
  
  /** Text Box control, updates input text */
  export function GuiTextBox(bounds: Rectangle, text: string, textSize: number, editMode: boolean): number
  
  /** Slider control */
  export function GuiSlider(bounds: Rectangle, textLeft: string, textRight: string, value: number, minValue: number, maxValue: number): number
  
  /** Slider Bar control */
  export function GuiSliderBar(bounds: Rectangle, textLeft: string, textRight: string, value: number, minValue: number, maxValue: number): number
  
  /** Progress Bar control */
  export function GuiProgressBar(bounds: Rectangle, textLeft: string, textRight: string, value: number, minValue: number, maxValue: number): number
  
  /** Status Bar control, shows info text */
  export function GuiStatusBar(bounds: Rectangle, text: string): number
  
  /** Dummy control for placeholders */
  export function GuiDummyRec(bounds: Rectangle, text: string): number
  
  /** Grid control */
  export function GuiGrid(bounds: Rectangle, text: string, spacing: number, subdivs: number, mouseCell: number): number
  
  /** List View control */
  export function GuiListView(bounds: Rectangle, text: string, scrollIndex: number, active: number): number
  
  /** List View with extended parameters */
  export function GuiListViewEx(bounds: Rectangle, text: number, count: number, scrollIndex: number, active: number, focus: number): number
  
  /** Message Box control, displays a message */
  export function GuiMessageBox(bounds: Rectangle, title: string, message: string, buttons: string): number
  
  /** Text Input Box control, ask for text, supports secret */
  export function GuiTextInputBox(bounds: Rectangle, title: string, message: string, buttons: string, text: string, textMaxSize: number, secretViewActive: number): number
  
  /** Color Picker control (multiple color controls) */
  export function GuiColorPicker(bounds: Rectangle, text: string, color: number): number
  
  /** Color Panel control */
  export function GuiColorPanel(bounds: Rectangle, text: string, color: number): number
  
  /** Color Bar Alpha control */
  export function GuiColorBarAlpha(bounds: Rectangle, text: string, alpha: number): number
  
  /** Color Bar Hue control */
  export function GuiColorBarHue(bounds: Rectangle, text: string, value: number): number
  
  /** Color Picker control that avoids conversion to RGB on each call (multiple color controls) */
  export function GuiColorPickerHSV(bounds: Rectangle, text: string, colorHsv: number): number
  
  /** Color Panel control that updates Hue-Saturation-Value color value, used by GuiColorPickerHSV() */
  export function GuiColorPanelHSV(bounds: Rectangle, text: string, colorHsv: number): number
  
  /** Choose the current matrix to be transformed */
  export function rlMatrixMode(mode: number): void
  
  /** Push the current matrix to stack */
  export function rlPushMatrix(): void
  
  /** Pop latest inserted matrix from stack */
  export function rlPopMatrix(): void
  
  /** Reset current matrix to identity matrix */
  export function rlLoadIdentity(): void
  
  /** Multiply the current matrix by a translation matrix */
  export function rlTranslatef(x: number, y: number, z: number): void
  
  /** Multiply the current matrix by a rotation matrix */
  export function rlRotatef(angle: number, x: number, y: number, z: number): void
  
  /** Multiply the current matrix by a scaling matrix */
  export function rlScalef(x: number, y: number, z: number): void
  
  /** Multiply the current matrix by another matrix */
  export function rlMultMatrixf(matf: number): void
  
  /**  */
  export function rlFrustum(left: number, right: number, bottom: number, top: number, znear: number, zfar: number): void
  
  /**  */
  export function rlOrtho(left: number, right: number, bottom: number, top: number, znear: number, zfar: number): void
  
  /** Set the viewport area */
  export function rlViewport(x: number, y: number, width: number, height: number): void
  
  /** Set clip planes distances */
  export function rlSetClipPlanes(nearPlane: number, farPlane: number): void
  
  /** Get cull plane distance near */
  export function rlGetCullDistanceNear(): number
  
  /** Get cull plane distance far */
  export function rlGetCullDistanceFar(): number
  
  /** Initialize drawing mode (how to organize vertex) */
  export function rlBegin(mode: number): void
  
  /** Finish vertex providing */
  export function rlEnd(): void
  
  /** Define one vertex (position) - 2 int */
  export function rlVertex2i(x: number, y: number): void
  
  /** Define one vertex (position) - 2 float */
  export function rlVertex2f(x: number, y: number): void
  
  /** Define one vertex (position) - 3 float */
  export function rlVertex3f(x: number, y: number, z: number): void
  
  /** Define one vertex (texture coordinate) - 2 float */
  export function rlTexCoord2f(x: number, y: number): void
  
  /** Define one vertex (normal) - 3 float */
  export function rlNormal3f(x: number, y: number, z: number): void
  
  /** Define one vertex (color) - 4 byte */
  export function rlColor4ub(r: number, g: number, b: number, a: number): void
  
  /** Define one vertex (color) - 3 float */
  export function rlColor3f(x: number, y: number, z: number): void
  
  /** Define one vertex (color) - 4 float */
  export function rlColor4f(x: number, y: number, z: number, w: number): void
  
  /** Enable vertex array (VAO, if supported) */
  export function rlEnableVertexArray(vaoId: number): boolean
  
  /** Disable vertex array (VAO, if supported) */
  export function rlDisableVertexArray(): void
  
  /** Enable vertex buffer (VBO) */
  export function rlEnableVertexBuffer(id: number): void
  
  /** Disable vertex buffer (VBO) */
  export function rlDisableVertexBuffer(): void
  
  /** Enable vertex buffer element (VBO element) */
  export function rlEnableVertexBufferElement(id: number): void
  
  /** Disable vertex buffer element (VBO element) */
  export function rlDisableVertexBufferElement(): void
  
  /** Enable vertex attribute index */
  export function rlEnableVertexAttribute(index: number): void
  
  /** Disable vertex attribute index */
  export function rlDisableVertexAttribute(index: number): void
  
  /** Select and active a texture slot */
  export function rlActiveTextureSlot(slot: number): void
  
  /** Enable texture */
  export function rlEnableTexture(id: number): void
  
  /** Disable texture */
  export function rlDisableTexture(): void
  
  /** Enable texture cubemap */
  export function rlEnableTextureCubemap(id: number): void
  
  /** Disable texture cubemap */
  export function rlDisableTextureCubemap(): void
  
  /** Set texture parameters (filter, wrap) */
  export function rlTextureParameters(id: number, param: number, value: number): void
  
  /** Set cubemap parameters (filter, wrap) */
  export function rlCubemapParameters(id: number, param: number, value: number): void
  
  /** Enable shader program */
  export function rlEnableShader(id: number): void
  
  /** Disable shader program */
  export function rlDisableShader(): void
  
  /** Enable render texture (fbo) */
  export function rlEnableFramebuffer(id: number): void
  
  /** Disable render texture (fbo), return to default framebuffer */
  export function rlDisableFramebuffer(): void
  
  /** Get the currently active render texture (fbo), 0 for default framebuffer */
  export function rlGetActiveFramebuffer(): number
  
  /** Activate multiple draw color buffers */
  export function rlActiveDrawBuffers(count: number): void
  
  /** Blit active framebuffer to main framebuffer */
  export function rlBlitFramebuffer(srcX: number, srcY: number, srcWidth: number, srcHeight: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, bufferMask: number): void
  
  /** Bind framebuffer (FBO) */
  export function rlBindFramebuffer(target: number, framebuffer: number): void
  
  /** Enable color blending */
  export function rlEnableColorBlend(): void
  
  /** Disable color blending */
  export function rlDisableColorBlend(): void
  
  /** Enable depth test */
  export function rlEnableDepthTest(): void
  
  /** Disable depth test */
  export function rlDisableDepthTest(): void
  
  /** Enable depth write */
  export function rlEnableDepthMask(): void
  
  /** Disable depth write */
  export function rlDisableDepthMask(): void
  
  /** Enable backface culling */
  export function rlEnableBackfaceCulling(): void
  
  /** Disable backface culling */
  export function rlDisableBackfaceCulling(): void
  
  /** Color mask control */
  export function rlColorMask(r: boolean, g: boolean, b: boolean, a: boolean): void
  
  /** Set face culling mode */
  export function rlSetCullFace(mode: number): void
  
  /** Enable scissor test */
  export function rlEnableScissorTest(): void
  
  /** Disable scissor test */
  export function rlDisableScissorTest(): void
  
  /** Scissor test */
  export function rlScissor(x: number, y: number, width: number, height: number): void
  
  /** Enable wire mode */
  export function rlEnableWireMode(): void
  
  /** Enable point mode */
  export function rlEnablePointMode(): void
  
  /** Disable wire (and point) mode */
  export function rlDisableWireMode(): void
  
  /** Set the line drawing width */
  export function rlSetLineWidth(width: number): void
  
  /** Get the line drawing width */
  export function rlGetLineWidth(): number
  
  /** Enable line aliasing */
  export function rlEnableSmoothLines(): void
  
  /** Disable line aliasing */
  export function rlDisableSmoothLines(): void
  
  /** Enable stereo rendering */
  export function rlEnableStereoRender(): void
  
  /** Disable stereo rendering */
  export function rlDisableStereoRender(): void
  
  /** Check if stereo render is enabled */
  export function rlIsStereoRenderEnabled(): boolean
  
  /** Clear color buffer with color */
  export function rlClearColor(r: number, g: number, b: number, a: number): void
  
  /** Clear used screen buffers (color and depth) */
  export function rlClearScreenBuffers(): void
  
  /** Check and log OpenGL error codes */
  export function rlCheckErrors(): void
  
  /** Set blending mode */
  export function rlSetBlendMode(mode: number): void
  
  /** Set blending mode factor and equation (using OpenGL factors) */
  export function rlSetBlendFactors(glSrcFactor: number, glDstFactor: number, glEquation: number): void
  
  /** Set blending mode factors and equations separately (using OpenGL factors) */
  export function rlSetBlendFactorsSeparate(glSrcRGB: number, glDstRGB: number, glSrcAlpha: number, glDstAlpha: number, glEqRGB: number, glEqAlpha: number): void
  
  /** Initialize rlgl (buffers, shaders, textures, states) */
  export function rlglInit(width: number, height: number): void
  
  /** De-initialize rlgl (buffers, shaders, textures) */
  export function rlglClose(): void
  
  /** Load OpenGL extensions (loader function required) */
  export function rlLoadExtensions(loader: number): void
  
  /** Get current OpenGL version */
  export function rlGetVersion(): number
  
  /** Set current framebuffer width */
  export function rlSetFramebufferWidth(width: number): void
  
  /** Get default framebuffer width */
  export function rlGetFramebufferWidth(): number
  
  /** Set current framebuffer height */
  export function rlSetFramebufferHeight(height: number): void
  
  /** Get default framebuffer height */
  export function rlGetFramebufferHeight(): number
  
  /** Get default texture id */
  export function rlGetTextureIdDefault(): number
  
  /** Get default shader id */
  export function rlGetShaderIdDefault(): number
  
  /** Get default shader locations */
  export function rlGetShaderLocsDefault(): number
  
  /** Load a render batch system */
  export function rlLoadRenderBatch(numBuffers: number, bufferElements: number): rlRenderBatch
  
  /** Unload render batch system */
  export function rlUnloadRenderBatch(batch: rlRenderBatch): void
  
  /** Draw render batch data (Update->Draw->Reset) */
  export function rlDrawRenderBatch(batch: number): void
  
  /** Set the active render batch for rlgl (NULL for default internal) */
  export function rlSetRenderBatchActive(batch: number): void
  
  /** Update and draw internal render batch */
  export function rlDrawRenderBatchActive(): void
  
  /** Check internal buffer overflow for a given number of vertex */
  export function rlCheckRenderBatchLimit(vCount: number): boolean
  
  /** Set current texture for render batch and check buffers limits */
  export function rlSetTexture(id: number): void
  
  /** Load vertex array (vao) if supported */
  export function rlLoadVertexArray(): number
  
  /** Load a vertex buffer object */
  export function rlLoadVertexBuffer(buffer: number, size: number, dynamic: boolean): number
  
  /** Load vertex buffer elements object */
  export function rlLoadVertexBufferElement(buffer: number, size: number, dynamic: boolean): number
  
  /** Update vertex buffer object data on GPU buffer */
  export function rlUpdateVertexBuffer(bufferId: number, data: number, dataSize: number, offset: number): void
  
  /** Update vertex buffer elements data on GPU buffer */
  export function rlUpdateVertexBufferElements(id: number, data: number, dataSize: number, offset: number): void
  
  /** Unload vertex array (vao) */
  export function rlUnloadVertexArray(vaoId: number): void
  
  /** Unload vertex buffer object */
  export function rlUnloadVertexBuffer(vboId: number): void
  
  /** Set vertex attribute data configuration */
  export function rlSetVertexAttribute(index: number, compSize: number, type: number, normalized: boolean, stride: number, offset: number): void
  
  /** Set vertex attribute data divisor */
  export function rlSetVertexAttributeDivisor(index: number, divisor: number): void
  
  /** Set vertex attribute default value, when attribute to provided */
  export function rlSetVertexAttributeDefault(locIndex: number, value: number, attribType: number, count: number): void
  
  /** Draw vertex array (currently active vao) */
  export function rlDrawVertexArray(offset: number, count: number): void
  
  /** Draw vertex array elements */
  export function rlDrawVertexArrayElements(offset: number, count: number, buffer: number): void
  
  /** Draw vertex array (currently active vao) with instancing */
  export function rlDrawVertexArrayInstanced(offset: number, count: number, instances: number): void
  
  /** Draw vertex array elements with instancing */
  export function rlDrawVertexArrayElementsInstanced(offset: number, count: number, buffer: number, instances: number): void
  
  /** Load texture data */
  export function rlLoadTexture(data: number, width: number, height: number, format: number, mipmapCount: number): number
  
  /** Load depth texture/renderbuffer (to be attached to fbo) */
  export function rlLoadTextureDepth(width: number, height: number, useRenderBuffer: boolean): number
  
  /** Load texture cubemap data */
  export function rlLoadTextureCubemap(data: number, size: number, format: number, mipmapCount: number): number
  
  /** Update texture with new data on GPU */
  export function rlUpdateTexture(id: number, offsetX: number, offsetY: number, width: number, height: number, format: number, data: number): void
  
  /** Get OpenGL internal formats */
  export function rlGetGlTextureFormats(format: number, glInternalFormat: number, glFormat: number, glType: number): void
  
  /** Get name string for pixel format */
  export function rlGetPixelFormatName(format: number): string
  
  /** Unload texture from GPU memory */
  export function rlUnloadTexture(id: number): void
  
  /** Generate mipmap data for selected texture */
  export function rlGenTextureMipmaps(id: number, width: number, height: number, format: number, mipmaps: number): void
  
  /** Read texture pixel data */
  export function rlReadTexturePixels(id: number, width: number, height: number, format: number): number
  
  /** Read screen pixel data (color buffer) */
  export function rlReadScreenPixels(width: number, height: number): Buffer
  
  /** Load an empty framebuffer */
  export function rlLoadFramebuffer(): number
  
  /** Attach texture/renderbuffer to a framebuffer */
  export function rlFramebufferAttach(fboId: number, texId: number, attachType: number, texType: number, mipLevel: number): void
  
  /** Verify framebuffer is complete */
  export function rlFramebufferComplete(id: number): boolean
  
  /** Delete framebuffer from GPU */
  export function rlUnloadFramebuffer(id: number): void
  
  /** Load shader from code strings */
  export function rlLoadShaderCode(vsCode: string, fsCode: string): number
  
  /** Compile custom shader and return shader id (type: RL_VERTEX_SHADER, RL_FRAGMENT_SHADER, RL_COMPUTE_SHADER) */
  export function rlCompileShader(shaderCode: string, type: number): number
  
  /** Load custom shader program */
  export function rlLoadShaderProgram(vShaderId: number, fShaderId: number): number
  
  /** Unload shader program */
  export function rlUnloadShaderProgram(id: number): void
  
  /** Get shader location uniform */
  export function rlGetLocationUniform(shaderId: number, uniformName: string): number
  
  /** Get shader location attribute */
  export function rlGetLocationAttrib(shaderId: number, attribName: string): number
  
  /** Set shader value uniform */
  export function rlSetUniform(locIndex: number, value: number, uniformType: number, count: number): void
  
  /** Set shader value matrix */
  export function rlSetUniformMatrix(locIndex: number, mat: Matrix): void
  
  /** Set shader value matrices */
  export function rlSetUniformMatrices(locIndex: number, mat: number, count: number): void
  
  /** Set shader value sampler */
  export function rlSetUniformSampler(locIndex: number, textureId: number): void
  
  /** Set shader currently active (id and locations) */
  export function rlSetShader(id: number, locs: number): void
  
  /** Load compute shader program */
  export function rlLoadComputeShaderProgram(shaderId: number): number
  
  /** Dispatch compute shader (equivalent to *draw* for graphics pipeline) */
  export function rlComputeShaderDispatch(groupX: number, groupY: number, groupZ: number): void
  
  /** Load shader storage buffer object (SSBO) */
  export function rlLoadShaderBuffer(size: number, data: number, usageHint: number): number
  
  /** Unload shader storage buffer object (SSBO) */
  export function rlUnloadShaderBuffer(ssboId: number): void
  
  /** Update SSBO buffer data */
  export function rlUpdateShaderBuffer(id: number, data: number, dataSize: number, offset: number): void
  
  /** Bind SSBO buffer */
  export function rlBindShaderBuffer(id: number, index: number): void
  
  /** Read SSBO buffer data (GPU->CPU) */
  export function rlReadShaderBuffer(id: number, dest: number, count: number, offset: number): void
  
  /** Copy SSBO data between buffers */
  export function rlCopyShaderBuffer(destId: number, srcId: number, destOffset: number, srcOffset: number, count: number): void
  
  /** Get SSBO buffer size */
  export function rlGetShaderBufferSize(id: number): number
  
  /** Bind image texture */
  export function rlBindImageTexture(id: number, index: number, format: number, readonly: boolean): void
  
  /** Get internal modelview matrix */
  export function rlGetMatrixModelview(): Matrix
  
  /** Get internal projection matrix */
  export function rlGetMatrixProjection(): Matrix
  
  /** Get internal accumulated transform matrix */
  export function rlGetMatrixTransform(): Matrix
  
  /** Get internal projection matrix for stereo render (selected eye) */
  export function rlGetMatrixProjectionStereo(eye: number): Matrix
  
  /** Get internal view offset matrix for stereo render (selected eye) */
  export function rlGetMatrixViewOffsetStereo(eye: number): Matrix
  
  /** Set a custom projection matrix (replaces internal projection matrix) */
  export function rlSetMatrixProjection(proj: Matrix): void
  
  /** Set a custom modelview matrix (replaces internal modelview matrix) */
  export function rlSetMatrixModelview(view: Matrix): void
  
  /** Set eyes projection matrices for stereo rendering */
  export function rlSetMatrixProjectionStereo(right: Matrix, left: Matrix): void
  
  /** Set eyes view offsets matrices for stereo rendering */
  export function rlSetMatrixViewOffsetStereo(right: Matrix, left: Matrix): void
  
  /** Load and draw a cube */
  export function rlLoadDrawCube(): void
  
  /** Load and draw a quad */
  export function rlLoadDrawQuad(): void
  

  /** Set shader uniform float */
  export function SetShaderFloat(shader: Shader, locIndex: number, value: number): void
  /** Set shader uniform int */
  export function SetShaderInt(shader: Shader, locIndex: number, value: number): void
  /** Set shader uniform Vec2 */
  export function SetShaderVec2(shader: Shader, locIndex: number, value: Vector2): void
  /** Set shader uniform Vec3 */
  export function SetShaderVec3(shader: Shader, locIndex: number, value: Vector3): void
  /** Set shader uniform Vec4 */
  export function SetShaderVec4(shader: Shader, locIndex: number, value: Vector4): void

  export function Camera3D(
  /** Camera position. (Vector3) */
  position: Vector3,
  /** Camera target it looks-at. (Vector3) */
  target: Vector3,
  /** Camera up vector (rotation over its axis). (Vector3) */
  up: Vector3,
  /** Camera field-of-view aperture in Y (degrees) in perspective, used as near plane width in orthographic. (float) */
  fovy: number,
  /** Camera projection: CAMERA_PERSPECTIVE or CAMERA_ORTHOGRAPHIC. (int) */
  projection: number,
  ): Camera3D

  export function Vector3(
    /** Vector x component. (float) */
    x: number,
    /** Vector y component. (float) */
    y: number,
    /** Vector z component. (float) */
    z: number,
  ): Vector3

  export function Vector2(
    /** Vector x component. (float) */
    x: number,
    /** Vector y component. (float) */
    y: number,
  ): Vector2

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
  /** Set to support mouse passthrough, only supported when FLAG_WINDOW_UNDECORATED */
  export const FLAG_WINDOW_MOUSE_PASSTHROUGH = 16384
  /** Set to run program in borderless windowed mode */
  export const FLAG_BORDERLESS_WINDOWED_MODE = 32768
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
  export const KEY_MENU = 5
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
  /** Mouse button forward (advanced mouse device) */
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
  /** The omnidirectional resize/move cursor shape */
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
  /** Gamepad right button right (i.e. PS3: Circle, Xbox: B) */
  export const GAMEPAD_BUTTON_RIGHT_FACE_RIGHT = 6
  /** Gamepad right button down (i.e. PS3: Cross, Xbox: A) */
  export const GAMEPAD_BUTTON_RIGHT_FACE_DOWN = 7
  /** Gamepad right button left (i.e. PS3: Square, Xbox: X) */
  export const GAMEPAD_BUTTON_RIGHT_FACE_LEFT = 8
  /** Gamepad top/back trigger left (first), it could be a trailing button */
  export const GAMEPAD_BUTTON_LEFT_TRIGGER_1 = 9
  /** Gamepad top/back trigger left (second), it could be a trailing button */
  export const GAMEPAD_BUTTON_LEFT_TRIGGER_2 = 10
  /** Gamepad top/back trigger right (first), it could be a trailing button */
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
  /** Shader location: vertex attribute: boneIds */
  export const SHADER_LOC_VERTEX_BONEIDS = 26
  /** Shader location: vertex attribute: boneWeights */
  export const SHADER_LOC_VERTEX_BONEWEIGHTS = 27
  /** Shader location: array of matrices uniform: boneMatrices */
  export const SHADER_LOC_BONE_MATRICES = 28
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
  /** 16 bpp (1 channel - half float) */
  export const PIXELFORMAT_UNCOMPRESSED_R16 = 11
  /** 16*3 bpp (3 channels - half float) */
  export const PIXELFORMAT_UNCOMPRESSED_R16G16B16 = 12
  /** 16*4 bpp (4 channels - half float) */
  export const PIXELFORMAT_UNCOMPRESSED_R16G16B16A16 = 13
  /** 4 bpp (no alpha) */
  export const PIXELFORMAT_COMPRESSED_DXT1_RGB = 14
  /** 4 bpp (1 bit alpha) */
  export const PIXELFORMAT_COMPRESSED_DXT1_RGBA = 15
  /** 8 bpp */
  export const PIXELFORMAT_COMPRESSED_DXT3_RGBA = 16
  /** 8 bpp */
  export const PIXELFORMAT_COMPRESSED_DXT5_RGBA = 17
  /** 4 bpp */
  export const PIXELFORMAT_COMPRESSED_ETC1_RGB = 18
  /** 4 bpp */
  export const PIXELFORMAT_COMPRESSED_ETC2_RGB = 19
  /** 8 bpp */
  export const PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 20
  /** 4 bpp */
  export const PIXELFORMAT_COMPRESSED_PVRT_RGB = 21
  /** 4 bpp */
  export const PIXELFORMAT_COMPRESSED_PVRT_RGBA = 22
  /** 8 bpp */
  export const PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 23
  /** 2 bpp */
  export const PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 24
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
  /** Layout is defined by a horizontal line with faces */
  export const CUBEMAP_LAYOUT_LINE_HORIZONTAL = 2
  /** Layout is defined by a 3x4 cross with cubemap faces */
  export const CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR = 3
  /** Layout is defined by a 4x3 cross with cubemap faces */
  export const CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE = 4
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
  /** Blend premultiplied textures considering alpha */
  export const BLEND_ALPHA_PREMULTIPLY = 5
  /** Blend textures using custom src/dst factors (use rlSetBlendFactors()) */
  export const BLEND_CUSTOM = 6
  /** Blend textures using custom rgb/alpha separate src/dst factors (use rlSetBlendFactorsSeparate()) */
  export const BLEND_CUSTOM_SEPARATE = 7
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
  /** Camera custom, controlled by user (UpdateCamera() does nothing) */
  export const CAMERA_CUSTOM = 0
  /** Camera free mode */
  export const CAMERA_FREE = 1
  /** Camera orbital, around target, zoom supported */
  export const CAMERA_ORBITAL = 2
  /** Camera first person */
  export const CAMERA_FIRST_PERSON = 3
  /** Camera third person */
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
  /**  */
  export const STATE_NORMAL = 0
  /**  */
  export const STATE_FOCUSED = 1
  /**  */
  export const STATE_PRESSED = 2
  /**  */
  export const STATE_DISABLED = 3
  /**  */
  export const TEXT_ALIGN_LEFT = 0
  /**  */
  export const TEXT_ALIGN_CENTER = 1
  /**  */
  export const TEXT_ALIGN_RIGHT = 2
  /**  */
  export const TEXT_ALIGN_TOP = 0
  /**  */
  export const TEXT_ALIGN_MIDDLE = 1
  /**  */
  export const TEXT_ALIGN_BOTTOM = 2
  /**  */
  export const TEXT_WRAP_NONE = 0
  /**  */
  export const TEXT_WRAP_CHAR = 1
  /**  */
  export const TEXT_WRAP_WORD = 2
  /**  */
  export const DEFAULT = 0
  /** Used also for: LABELBUTTON */
  export const LABEL = 1
  /**  */
  export const BUTTON = 2
  /** Used also for: TOGGLEGROUP */
  export const TOGGLE = 3
  /** Used also for: SLIDERBAR, TOGGLESLIDER */
  export const SLIDER = 4
  /**  */
  export const PROGRESSBAR = 5
  /**  */
  export const CHECKBOX = 6
  /**  */
  export const COMBOBOX = 7
  /**  */
  export const DROPDOWNBOX = 8
  /** Used also for: TEXTBOXMULTI */
  export const TEXTBOX = 9
  /**  */
  export const VALUEBOX = 10
  /** Uses: BUTTON, VALUEBOX */
  export const SPINNER = 11
  /**  */
  export const LISTVIEW = 12
  /**  */
  export const COLORPICKER = 13
  /**  */
  export const SCROLLBAR = 14
  /**  */
  export const STATUSBAR = 15
  /** Control border color in STATE_NORMAL */
  export const BORDER_COLOR_NORMAL = 0
  /** Control base color in STATE_NORMAL */
  export const BASE_COLOR_NORMAL = 1
  /** Control text color in STATE_NORMAL */
  export const TEXT_COLOR_NORMAL = 2
  /** Control border color in STATE_FOCUSED */
  export const BORDER_COLOR_FOCUSED = 3
  /** Control base color in STATE_FOCUSED */
  export const BASE_COLOR_FOCUSED = 4
  /** Control text color in STATE_FOCUSED */
  export const TEXT_COLOR_FOCUSED = 5
  /** Control border color in STATE_PRESSED */
  export const BORDER_COLOR_PRESSED = 6
  /** Control base color in STATE_PRESSED */
  export const BASE_COLOR_PRESSED = 7
  /** Control text color in STATE_PRESSED */
  export const TEXT_COLOR_PRESSED = 8
  /** Control border color in STATE_DISABLED */
  export const BORDER_COLOR_DISABLED = 9
  /** Control base color in STATE_DISABLED */
  export const BASE_COLOR_DISABLED = 10
  /** Control text color in STATE_DISABLED */
  export const TEXT_COLOR_DISABLED = 11
  /** Control border size, 0 for no border */
  export const BORDER_WIDTH = 12
  /** Control text padding, not considering border */
  export const TEXT_PADDING = 13
  /** Control text horizontal alignment inside control text bound (after border and padding) */
  export const TEXT_ALIGNMENT = 14
  /** Text size (glyphs max height) */
  export const TEXT_SIZE = 16
  /** Text spacing between glyphs */
  export const TEXT_SPACING = 17
  /** Line control color */
  export const LINE_COLOR = 18
  /** Background color */
  export const BACKGROUND_COLOR = 19
  /** Text spacing between lines */
  export const TEXT_LINE_SPACING = 20
  /** Text vertical alignment inside text bounds (after border and padding) */
  export const TEXT_ALIGNMENT_VERTICAL = 21
  /** Text wrap-mode inside text bounds */
  export const TEXT_WRAP_MODE = 22
  /** ToggleGroup separation between toggles */
  export const GROUP_PADDING = 16
  /** Slider size of internal bar */
  export const SLIDER_WIDTH = 16
  /** Slider/SliderBar internal bar padding */
  export const SLIDER_PADDING = 17
  /** ProgressBar internal padding */
  export const PROGRESS_PADDING = 16
  /** ScrollBar arrows size */
  export const ARROWS_SIZE = 16
  /** ScrollBar arrows visible */
  export const ARROWS_VISIBLE = 17
  /** ScrollBar slider internal padding */
  export const SCROLL_SLIDER_PADDING = 18
  /** ScrollBar slider size */
  export const SCROLL_SLIDER_SIZE = 19
  /** ScrollBar scroll padding from arrows */
  export const SCROLL_PADDING = 20
  /** ScrollBar scrolling speed */
  export const SCROLL_SPEED = 21
  /** CheckBox internal check padding */
  export const CHECK_PADDING = 16
  /** ComboBox right button width */
  export const COMBO_BUTTON_WIDTH = 16
  /** ComboBox button separation */
  export const COMBO_BUTTON_SPACING = 17
  /** DropdownBox arrow separation from border and items */
  export const ARROW_PADDING = 16
  /** DropdownBox items separation */
  export const DROPDOWN_ITEMS_SPACING = 17
  /** DropdownBox arrow hidden */
  export const DROPDOWN_ARROW_HIDDEN = 18
  /** DropdownBox roll up flag (default rolls down) */
  export const DROPDOWN_ROLL_UP = 19
  /** TextBox in read-only mode: 0-text editable, 1-text no-editable */
  export const TEXT_READONLY = 16
  /** Spinner left/right buttons width */
  export const SPIN_BUTTON_WIDTH = 16
  /** Spinner buttons separation */
  export const SPIN_BUTTON_SPACING = 17
  /** ListView items height */
  export const LIST_ITEMS_HEIGHT = 16
  /** ListView items separation */
  export const LIST_ITEMS_SPACING = 17
  /** ListView scrollbar size (usually width) */
  export const SCROLLBAR_WIDTH = 18
  /** ListView scrollbar side (0-SCROLLBAR_LEFT_SIDE, 1-SCROLLBAR_RIGHT_SIDE) */
  export const SCROLLBAR_SIDE = 19
  /** ListView items border width */
  export const LIST_ITEMS_BORDER_WIDTH = 20
  /**  */
  export const COLOR_SELECTOR_SIZE = 16
  /** ColorPicker right hue bar width */
  export const HUEBAR_WIDTH = 17
  /** ColorPicker right hue bar separation from panel */
  export const HUEBAR_PADDING = 18
  /** ColorPicker right hue bar selector height */
  export const HUEBAR_SELECTOR_HEIGHT = 19
  /** ColorPicker right hue bar selector overflow */
  export const HUEBAR_SELECTOR_OVERFLOW = 20
  /**  */
  export const ICON_NONE = 0
  /**  */
  export const ICON_FOLDER_FILE_OPEN = 1
  /**  */
  export const ICON_FILE_SAVE_CLASSIC = 2
  /**  */
  export const ICON_FOLDER_OPEN = 3
  /**  */
  export const ICON_FOLDER_SAVE = 4
  /**  */
  export const ICON_FILE_OPEN = 5
  /**  */
  export const ICON_FILE_SAVE = 6
  /**  */
  export const ICON_FILE_EXPORT = 7
  /**  */
  export const ICON_FILE_ADD = 8
  /**  */
  export const ICON_FILE_DELETE = 9
  /**  */
  export const ICON_FILETYPE_TEXT = 10
  /**  */
  export const ICON_FILETYPE_AUDIO = 11
  /**  */
  export const ICON_FILETYPE_IMAGE = 12
  /**  */
  export const ICON_FILETYPE_PLAY = 13
  /**  */
  export const ICON_FILETYPE_VIDEO = 14
  /**  */
  export const ICON_FILETYPE_INFO = 15
  /**  */
  export const ICON_FILE_COPY = 16
  /**  */
  export const ICON_FILE_CUT = 17
  /**  */
  export const ICON_FILE_PASTE = 18
  /**  */
  export const ICON_CURSOR_HAND = 19
  /**  */
  export const ICON_CURSOR_POINTER = 20
  /**  */
  export const ICON_CURSOR_CLASSIC = 21
  /**  */
  export const ICON_PENCIL = 22
  /**  */
  export const ICON_PENCIL_BIG = 23
  /**  */
  export const ICON_BRUSH_CLASSIC = 24
  /**  */
  export const ICON_BRUSH_PAINTER = 25
  /**  */
  export const ICON_WATER_DROP = 26
  /**  */
  export const ICON_COLOR_PICKER = 27
  /**  */
  export const ICON_RUBBER = 28
  /**  */
  export const ICON_COLOR_BUCKET = 29
  /**  */
  export const ICON_TEXT_T = 30
  /**  */
  export const ICON_TEXT_A = 31
  /**  */
  export const ICON_SCALE = 32
  /**  */
  export const ICON_RESIZE = 33
  /**  */
  export const ICON_FILTER_POINT = 34
  /**  */
  export const ICON_FILTER_BILINEAR = 35
  /**  */
  export const ICON_CROP = 36
  /**  */
  export const ICON_CROP_ALPHA = 37
  /**  */
  export const ICON_SQUARE_TOGGLE = 38
  /**  */
  export const ICON_SYMMETRY = 39
  /**  */
  export const ICON_SYMMETRY_HORIZONTAL = 40
  /**  */
  export const ICON_SYMMETRY_VERTICAL = 41
  /**  */
  export const ICON_LENS = 42
  /**  */
  export const ICON_LENS_BIG = 43
  /**  */
  export const ICON_EYE_ON = 44
  /**  */
  export const ICON_EYE_OFF = 45
  /**  */
  export const ICON_FILTER_TOP = 46
  /**  */
  export const ICON_FILTER = 47
  /**  */
  export const ICON_TARGET_POINT = 48
  /**  */
  export const ICON_TARGET_SMALL = 49
  /**  */
  export const ICON_TARGET_BIG = 50
  /**  */
  export const ICON_TARGET_MOVE = 51
  /**  */
  export const ICON_CURSOR_MOVE = 52
  /**  */
  export const ICON_CURSOR_SCALE = 53
  /**  */
  export const ICON_CURSOR_SCALE_RIGHT = 54
  /**  */
  export const ICON_CURSOR_SCALE_LEFT = 55
  /**  */
  export const ICON_UNDO = 56
  /**  */
  export const ICON_REDO = 57
  /**  */
  export const ICON_REREDO = 58
  /**  */
  export const ICON_MUTATE = 59
  /**  */
  export const ICON_ROTATE = 60
  /**  */
  export const ICON_REPEAT = 61
  /**  */
  export const ICON_SHUFFLE = 62
  /**  */
  export const ICON_EMPTYBOX = 63
  /**  */
  export const ICON_TARGET = 64
  /**  */
  export const ICON_TARGET_SMALL_FILL = 65
  /**  */
  export const ICON_TARGET_BIG_FILL = 66
  /**  */
  export const ICON_TARGET_MOVE_FILL = 67
  /**  */
  export const ICON_CURSOR_MOVE_FILL = 68
  /**  */
  export const ICON_CURSOR_SCALE_FILL = 69
  /**  */
  export const ICON_CURSOR_SCALE_RIGHT_FILL = 70
  /**  */
  export const ICON_CURSOR_SCALE_LEFT_FILL = 71
  /**  */
  export const ICON_UNDO_FILL = 72
  /**  */
  export const ICON_REDO_FILL = 73
  /**  */
  export const ICON_REREDO_FILL = 74
  /**  */
  export const ICON_MUTATE_FILL = 75
  /**  */
  export const ICON_ROTATE_FILL = 76
  /**  */
  export const ICON_REPEAT_FILL = 77
  /**  */
  export const ICON_SHUFFLE_FILL = 78
  /**  */
  export const ICON_EMPTYBOX_SMALL = 79
  /**  */
  export const ICON_BOX = 80
  /**  */
  export const ICON_BOX_TOP = 81
  /**  */
  export const ICON_BOX_TOP_RIGHT = 82
  /**  */
  export const ICON_BOX_RIGHT = 83
  /**  */
  export const ICON_BOX_BOTTOM_RIGHT = 84
  /**  */
  export const ICON_BOX_BOTTOM = 85
  /**  */
  export const ICON_BOX_BOTTOM_LEFT = 86
  /**  */
  export const ICON_BOX_LEFT = 87
  /**  */
  export const ICON_BOX_TOP_LEFT = 88
  /**  */
  export const ICON_BOX_CENTER = 89
  /**  */
  export const ICON_BOX_CIRCLE_MASK = 90
  /**  */
  export const ICON_POT = 91
  /**  */
  export const ICON_ALPHA_MULTIPLY = 92
  /**  */
  export const ICON_ALPHA_CLEAR = 93
  /**  */
  export const ICON_DITHERING = 94
  /**  */
  export const ICON_MIPMAPS = 95
  /**  */
  export const ICON_BOX_GRID = 96
  /**  */
  export const ICON_GRID = 97
  /**  */
  export const ICON_BOX_CORNERS_SMALL = 98
  /**  */
  export const ICON_BOX_CORNERS_BIG = 99
  /**  */
  export const ICON_FOUR_BOXES = 100
  /**  */
  export const ICON_GRID_FILL = 101
  /**  */
  export const ICON_BOX_MULTISIZE = 102
  /**  */
  export const ICON_ZOOM_SMALL = 103
  /**  */
  export const ICON_ZOOM_MEDIUM = 104
  /**  */
  export const ICON_ZOOM_BIG = 105
  /**  */
  export const ICON_ZOOM_ALL = 106
  /**  */
  export const ICON_ZOOM_CENTER = 107
  /**  */
  export const ICON_BOX_DOTS_SMALL = 108
  /**  */
  export const ICON_BOX_DOTS_BIG = 109
  /**  */
  export const ICON_BOX_CONCENTRIC = 110
  /**  */
  export const ICON_BOX_GRID_BIG = 111
  /**  */
  export const ICON_OK_TICK = 112
  /**  */
  export const ICON_CROSS = 113
  /**  */
  export const ICON_ARROW_LEFT = 114
  /**  */
  export const ICON_ARROW_RIGHT = 115
  /**  */
  export const ICON_ARROW_DOWN = 116
  /**  */
  export const ICON_ARROW_UP = 117
  /**  */
  export const ICON_ARROW_LEFT_FILL = 118
  /**  */
  export const ICON_ARROW_RIGHT_FILL = 119
  /**  */
  export const ICON_ARROW_DOWN_FILL = 120
  /**  */
  export const ICON_ARROW_UP_FILL = 121
  /**  */
  export const ICON_AUDIO = 122
  /**  */
  export const ICON_FX = 123
  /**  */
  export const ICON_WAVE = 124
  /**  */
  export const ICON_WAVE_SINUS = 125
  /**  */
  export const ICON_WAVE_SQUARE = 126
  /**  */
  export const ICON_WAVE_TRIANGULAR = 127
  /**  */
  export const ICON_CROSS_SMALL = 128
  /**  */
  export const ICON_PLAYER_PREVIOUS = 129
  /**  */
  export const ICON_PLAYER_PLAY_BACK = 130
  /**  */
  export const ICON_PLAYER_PLAY = 131
  /**  */
  export const ICON_PLAYER_PAUSE = 132
  /**  */
  export const ICON_PLAYER_STOP = 133
  /**  */
  export const ICON_PLAYER_NEXT = 134
  /**  */
  export const ICON_PLAYER_RECORD = 135
  /**  */
  export const ICON_MAGNET = 136
  /**  */
  export const ICON_LOCK_CLOSE = 137
  /**  */
  export const ICON_LOCK_OPEN = 138
  /**  */
  export const ICON_CLOCK = 139
  /**  */
  export const ICON_TOOLS = 140
  /**  */
  export const ICON_GEAR = 141
  /**  */
  export const ICON_GEAR_BIG = 142
  /**  */
  export const ICON_BIN = 143
  /**  */
  export const ICON_HAND_POINTER = 144
  /**  */
  export const ICON_LASER = 145
  /**  */
  export const ICON_COIN = 146
  /**  */
  export const ICON_EXPLOSION = 147
  /**  */
  export const ICON_1UP = 148
  /**  */
  export const ICON_PLAYER = 149
  /**  */
  export const ICON_PLAYER_JUMP = 150
  /**  */
  export const ICON_KEY = 151
  /**  */
  export const ICON_DEMON = 152
  /**  */
  export const ICON_TEXT_POPUP = 153
  /**  */
  export const ICON_GEAR_EX = 154
  /**  */
  export const ICON_CRACK = 155
  /**  */
  export const ICON_CRACK_POINTS = 156
  /**  */
  export const ICON_STAR = 157
  /**  */
  export const ICON_DOOR = 158
  /**  */
  export const ICON_EXIT = 159
  /**  */
  export const ICON_MODE_2D = 160
  /**  */
  export const ICON_MODE_3D = 161
  /**  */
  export const ICON_CUBE = 162
  /**  */
  export const ICON_CUBE_FACE_TOP = 163
  /**  */
  export const ICON_CUBE_FACE_LEFT = 164
  /**  */
  export const ICON_CUBE_FACE_FRONT = 165
  /**  */
  export const ICON_CUBE_FACE_BOTTOM = 166
  /**  */
  export const ICON_CUBE_FACE_RIGHT = 167
  /**  */
  export const ICON_CUBE_FACE_BACK = 168
  /**  */
  export const ICON_CAMERA = 169
  /**  */
  export const ICON_SPECIAL = 170
  /**  */
  export const ICON_LINK_NET = 171
  /**  */
  export const ICON_LINK_BOXES = 172
  /**  */
  export const ICON_LINK_MULTI = 173
  /**  */
  export const ICON_LINK = 174
  /**  */
  export const ICON_LINK_BROKE = 175
  /**  */
  export const ICON_TEXT_NOTES = 176
  /**  */
  export const ICON_NOTEBOOK = 177
  /**  */
  export const ICON_SUITCASE = 178
  /**  */
  export const ICON_SUITCASE_ZIP = 179
  /**  */
  export const ICON_MAILBOX = 180
  /**  */
  export const ICON_MONITOR = 181
  /**  */
  export const ICON_PRINTER = 182
  /**  */
  export const ICON_PHOTO_CAMERA = 183
  /**  */
  export const ICON_PHOTO_CAMERA_FLASH = 184
  /**  */
  export const ICON_HOUSE = 185
  /**  */
  export const ICON_HEART = 186
  /**  */
  export const ICON_CORNER = 187
  /**  */
  export const ICON_VERTICAL_BARS = 188
  /**  */
  export const ICON_VERTICAL_BARS_FILL = 189
  /**  */
  export const ICON_LIFE_BARS = 190
  /**  */
  export const ICON_INFO = 191
  /**  */
  export const ICON_CROSSLINE = 192
  /**  */
  export const ICON_HELP = 193
  /**  */
  export const ICON_FILETYPE_ALPHA = 194
  /**  */
  export const ICON_FILETYPE_HOME = 195
  /**  */
  export const ICON_LAYERS_VISIBLE = 196
  /**  */
  export const ICON_LAYERS = 197
  /**  */
  export const ICON_WINDOW = 198
  /**  */
  export const ICON_HIDPI = 199
  /**  */
  export const ICON_FILETYPE_BINARY = 200
  /**  */
  export const ICON_HEX = 201
  /**  */
  export const ICON_SHIELD = 202
  /**  */
  export const ICON_FILE_NEW = 203
  /**  */
  export const ICON_FOLDER_ADD = 204
  /**  */
  export const ICON_ALARM = 205
  /**  */
  export const ICON_CPU = 206
  /**  */
  export const ICON_ROM = 207
  /**  */
  export const ICON_STEP_OVER = 208
  /**  */
  export const ICON_STEP_INTO = 209
  /**  */
  export const ICON_STEP_OUT = 210
  /**  */
  export const ICON_RESTART = 211
  /**  */
  export const ICON_BREAKPOINT_ON = 212
  /**  */
  export const ICON_BREAKPOINT_OFF = 213
  /**  */
  export const ICON_BURGER_MENU = 214
  /**  */
  export const ICON_CASE_SENSITIVE = 215
  /**  */
  export const ICON_REG_EXP = 216
  /**  */
  export const ICON_FOLDER = 217
  /**  */
  export const ICON_FILE = 218
  /**  */
  export const ICON_SAND_TIMER = 219
  /**  */
  export const ICON_WARNING = 220
  /**  */
  export const ICON_HELP_BOX = 221
  /**  */
  export const ICON_INFO_BOX = 222
  /**  */
  export const ICON_PRIORITY = 223
  /**  */
  export const ICON_LAYERS_ISO = 224
  /**  */
  export const ICON_LAYERS2 = 225
  /**  */
  export const ICON_MLAYERS = 226
  /**  */
  export const ICON_MAPS = 227
  /**  */
  export const ICON_HOT = 228
  /**  */
  export const ICON_229 = 229
  /**  */
  export const ICON_230 = 230
  /**  */
  export const ICON_231 = 231
  /**  */
  export const ICON_232 = 232
  /**  */
  export const ICON_233 = 233
  /**  */
  export const ICON_234 = 234
  /**  */
  export const ICON_235 = 235
  /**  */
  export const ICON_236 = 236
  /**  */
  export const ICON_237 = 237
  /**  */
  export const ICON_238 = 238
  /**  */
  export const ICON_239 = 239
  /**  */
  export const ICON_240 = 240
  /**  */
  export const ICON_241 = 241
  /**  */
  export const ICON_242 = 242
  /**  */
  export const ICON_243 = 243
  /**  */
  export const ICON_244 = 244
  /**  */
  export const ICON_245 = 245
  /**  */
  export const ICON_246 = 246
  /**  */
  export const ICON_247 = 247
  /**  */
  export const ICON_248 = 248
  /**  */
  export const ICON_249 = 249
  /**  */
  export const ICON_250 = 250
  /**  */
  export const ICON_251 = 251
  /**  */
  export const ICON_252 = 252
  /**  */
  export const ICON_253 = 253
  /**  */
  export const ICON_254 = 254
  /**  */
  export const ICON_255 = 255
  /** OpenGL 1.1 */
  export const RL_OPENGL_11 = 1
  /** OpenGL 2.1 (GLSL 120) */
  export const RL_OPENGL_21 = 2
  /** OpenGL 3.3 (GLSL 330) */
  export const RL_OPENGL_33 = 3
  /** OpenGL 4.3 (using GLSL 330) */
  export const RL_OPENGL_43 = 4
  /** OpenGL ES 2.0 (GLSL 100) */
  export const RL_OPENGL_ES_20 = 5
  /** OpenGL ES 3.0 (GLSL 300 es) */
  export const RL_OPENGL_ES_30 = 6
  /** Display all logs */
  export const RL_LOG_ALL = 0
  /** Trace logging, intended for internal use only */
  export const RL_LOG_TRACE = 1
  /** Debug logging, used for internal debugging, it should be disabled on release builds */
  export const RL_LOG_DEBUG = 2
  /** Info logging, used for program execution info */
  export const RL_LOG_INFO = 3
  /** Warning logging, used on recoverable failures */
  export const RL_LOG_WARNING = 4
  /** Error logging, used on unrecoverable failures */
  export const RL_LOG_ERROR = 5
  /** Fatal logging, used to abort program: exit(EXIT_FAILURE) */
  export const RL_LOG_FATAL = 6
  /** Disable logging */
  export const RL_LOG_NONE = 7
  /** 8 bit per pixel (no alpha) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = 1
  /** 8*2 bpp (2 channels) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = 2
  /** 16 bpp */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R5G6B5 = 3
  /** 24 bpp */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8 = 4
  /** 16 bpp (1 bit alpha) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = 5
  /** 16 bpp (4 bit alpha) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = 6
  /** 32 bpp */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = 7
  /** 32 bpp (1 channel - float) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R32 = 8
  /** 32*3 bpp (3 channels - float) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32 = 9
  /** 32*4 bpp (4 channels - float) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = 10
  /** 16 bpp (1 channel - half float) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R16 = 11
  /** 16*3 bpp (3 channels - half float) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R16G16B16 = 12
  /** 16*4 bpp (4 channels - half float) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R16G16B16A16 = 13
  /** 4 bpp (no alpha) */
  export const RL_PIXELFORMAT_COMPRESSED_DXT1_RGB = 14
  /** 4 bpp (1 bit alpha) */
  export const RL_PIXELFORMAT_COMPRESSED_DXT1_RGBA = 15
  /** 8 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_DXT3_RGBA = 16
  /** 8 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_DXT5_RGBA = 17
  /** 4 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_ETC1_RGB = 18
  /** 4 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_ETC2_RGB = 19
  /** 8 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 20
  /** 4 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_PVRT_RGB = 21
  /** 4 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_PVRT_RGBA = 22
  /** 8 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 23
  /** 2 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 24
  /** No filter, just pixel approximation */
  export const RL_TEXTURE_FILTER_POINT = 0
  /** Linear filtering */
  export const RL_TEXTURE_FILTER_BILINEAR = 1
  /** Trilinear filtering (linear with mipmaps) */
  export const RL_TEXTURE_FILTER_TRILINEAR = 2
  /** Anisotropic filtering 4x */
  export const RL_TEXTURE_FILTER_ANISOTROPIC_4X = 3
  /** Anisotropic filtering 8x */
  export const RL_TEXTURE_FILTER_ANISOTROPIC_8X = 4
  /** Anisotropic filtering 16x */
  export const RL_TEXTURE_FILTER_ANISOTROPIC_16X = 5
  /** Blend textures considering alpha (default) */
  export const RL_BLEND_ALPHA = 0
  /** Blend textures adding colors */
  export const RL_BLEND_ADDITIVE = 1
  /** Blend textures multiplying colors */
  export const RL_BLEND_MULTIPLIED = 2
  /** Blend textures adding colors (alternative) */
  export const RL_BLEND_ADD_COLORS = 3
  /** Blend textures subtracting colors (alternative) */
  export const RL_BLEND_SUBTRACT_COLORS = 4
  /** Blend premultiplied textures considering alpha */
  export const RL_BLEND_ALPHA_PREMULTIPLY = 5
  /** Blend textures using custom src/dst factors (use rlSetBlendFactors()) */
  export const RL_BLEND_CUSTOM = 6
  /** Blend textures using custom src/dst factors (use rlSetBlendFactorsSeparate()) */
  export const RL_BLEND_CUSTOM_SEPARATE = 7
  /** Shader location: vertex attribute: position */
  export const RL_SHADER_LOC_VERTEX_POSITION = 0
  /** Shader location: vertex attribute: texcoord01 */
  export const RL_SHADER_LOC_VERTEX_TEXCOORD01 = 1
  /** Shader location: vertex attribute: texcoord02 */
  export const RL_SHADER_LOC_VERTEX_TEXCOORD02 = 2
  /** Shader location: vertex attribute: normal */
  export const RL_SHADER_LOC_VERTEX_NORMAL = 3
  /** Shader location: vertex attribute: tangent */
  export const RL_SHADER_LOC_VERTEX_TANGENT = 4
  /** Shader location: vertex attribute: color */
  export const RL_SHADER_LOC_VERTEX_COLOR = 5
  /** Shader location: matrix uniform: model-view-projection */
  export const RL_SHADER_LOC_MATRIX_MVP = 6
  /** Shader location: matrix uniform: view (camera transform) */
  export const RL_SHADER_LOC_MATRIX_VIEW = 7
  /** Shader location: matrix uniform: projection */
  export const RL_SHADER_LOC_MATRIX_PROJECTION = 8
  /** Shader location: matrix uniform: model (transform) */
  export const RL_SHADER_LOC_MATRIX_MODEL = 9
  /** Shader location: matrix uniform: normal */
  export const RL_SHADER_LOC_MATRIX_NORMAL = 10
  /** Shader location: vector uniform: view */
  export const RL_SHADER_LOC_VECTOR_VIEW = 11
  /** Shader location: vector uniform: diffuse color */
  export const RL_SHADER_LOC_COLOR_DIFFUSE = 12
  /** Shader location: vector uniform: specular color */
  export const RL_SHADER_LOC_COLOR_SPECULAR = 13
  /** Shader location: vector uniform: ambient color */
  export const RL_SHADER_LOC_COLOR_AMBIENT = 14
  /** Shader location: sampler2d texture: albedo (same as: RL_SHADER_LOC_MAP_DIFFUSE) */
  export const RL_SHADER_LOC_MAP_ALBEDO = 15
  /** Shader location: sampler2d texture: metalness (same as: RL_SHADER_LOC_MAP_SPECULAR) */
  export const RL_SHADER_LOC_MAP_METALNESS = 16
  /** Shader location: sampler2d texture: normal */
  export const RL_SHADER_LOC_MAP_NORMAL = 17
  /** Shader location: sampler2d texture: roughness */
  export const RL_SHADER_LOC_MAP_ROUGHNESS = 18
  /** Shader location: sampler2d texture: occlusion */
  export const RL_SHADER_LOC_MAP_OCCLUSION = 19
  /** Shader location: sampler2d texture: emission */
  export const RL_SHADER_LOC_MAP_EMISSION = 20
  /** Shader location: sampler2d texture: height */
  export const RL_SHADER_LOC_MAP_HEIGHT = 21
  /** Shader location: samplerCube texture: cubemap */
  export const RL_SHADER_LOC_MAP_CUBEMAP = 22
  /** Shader location: samplerCube texture: irradiance */
  export const RL_SHADER_LOC_MAP_IRRADIANCE = 23
  /** Shader location: samplerCube texture: prefilter */
  export const RL_SHADER_LOC_MAP_PREFILTER = 24
  /** Shader location: sampler2d texture: brdf */
  export const RL_SHADER_LOC_MAP_BRDF = 25
  /** Shader uniform type: float */
  export const RL_SHADER_UNIFORM_FLOAT = 0
  /** Shader uniform type: vec2 (2 float) */
  export const RL_SHADER_UNIFORM_VEC2 = 1
  /** Shader uniform type: vec3 (3 float) */
  export const RL_SHADER_UNIFORM_VEC3 = 2
  /** Shader uniform type: vec4 (4 float) */
  export const RL_SHADER_UNIFORM_VEC4 = 3
  /** Shader uniform type: int */
  export const RL_SHADER_UNIFORM_INT = 4
  /** Shader uniform type: ivec2 (2 int) */
  export const RL_SHADER_UNIFORM_IVEC2 = 5
  /** Shader uniform type: ivec3 (3 int) */
  export const RL_SHADER_UNIFORM_IVEC3 = 6
  /** Shader uniform type: ivec4 (4 int) */
  export const RL_SHADER_UNIFORM_IVEC4 = 7
  /** Shader uniform type: unsigned int */
  export const RL_SHADER_UNIFORM_UINT = 8
  /** Shader uniform type: uivec2 (2 unsigned int) */
  export const RL_SHADER_UNIFORM_UIVEC2 = 9
  /** Shader uniform type: uivec3 (3 unsigned int) */
  export const RL_SHADER_UNIFORM_UIVEC3 = 10
  /** Shader uniform type: uivec4 (4 unsigned int) */
  export const RL_SHADER_UNIFORM_UIVEC4 = 11
  /** Shader uniform type: sampler2d */
  export const RL_SHADER_UNIFORM_SAMPLER2D = 12
  /** Shader attribute type: float */
  export const RL_SHADER_ATTRIB_FLOAT = 0
  /** Shader attribute type: vec2 (2 float) */
  export const RL_SHADER_ATTRIB_VEC2 = 1
  /** Shader attribute type: vec3 (3 float) */
  export const RL_SHADER_ATTRIB_VEC3 = 2
  /** Shader attribute type: vec4 (4 float) */
  export const RL_SHADER_ATTRIB_VEC4 = 3
  /** Framebuffer attachment type: color 0 */
  export const RL_ATTACHMENT_COLOR_CHANNEL0 = 0
  /** Framebuffer attachment type: color 1 */
  export const RL_ATTACHMENT_COLOR_CHANNEL1 = 1
  /** Framebuffer attachment type: color 2 */
  export const RL_ATTACHMENT_COLOR_CHANNEL2 = 2
  /** Framebuffer attachment type: color 3 */
  export const RL_ATTACHMENT_COLOR_CHANNEL3 = 3
  /** Framebuffer attachment type: color 4 */
  export const RL_ATTACHMENT_COLOR_CHANNEL4 = 4
  /** Framebuffer attachment type: color 5 */
  export const RL_ATTACHMENT_COLOR_CHANNEL5 = 5
  /** Framebuffer attachment type: color 6 */
  export const RL_ATTACHMENT_COLOR_CHANNEL6 = 6
  /** Framebuffer attachment type: color 7 */
  export const RL_ATTACHMENT_COLOR_CHANNEL7 = 7
  /** Framebuffer attachment type: depth */
  export const RL_ATTACHMENT_DEPTH = 100
  /** Framebuffer attachment type: stencil */
  export const RL_ATTACHMENT_STENCIL = 200
  /** Framebuffer texture attachment type: cubemap, +X side */
  export const RL_ATTACHMENT_CUBEMAP_POSITIVE_X = 0
  /** Framebuffer texture attachment type: cubemap, -X side */
  export const RL_ATTACHMENT_CUBEMAP_NEGATIVE_X = 1
  /** Framebuffer texture attachment type: cubemap, +Y side */
  export const RL_ATTACHMENT_CUBEMAP_POSITIVE_Y = 2
  /** Framebuffer texture attachment type: cubemap, -Y side */
  export const RL_ATTACHMENT_CUBEMAP_NEGATIVE_Y = 3
  /** Framebuffer texture attachment type: cubemap, +Z side */
  export const RL_ATTACHMENT_CUBEMAP_POSITIVE_Z = 4
  /** Framebuffer texture attachment type: cubemap, -Z side */
  export const RL_ATTACHMENT_CUBEMAP_NEGATIVE_Z = 5
  /** Framebuffer texture attachment type: texture2d */
  export const RL_ATTACHMENT_TEXTURE2D = 100
  /** Framebuffer texture attachment type: renderbuffer */
  export const RL_ATTACHMENT_RENDERBUFFER = 200
  /**  */
  export const RL_CULL_FACE_FRONT = 0
  /**  */
  export const RL_CULL_FACE_BACK = 1
  /**  */
  export const RL_DEFAULT_BATCH_BUFFER_ELEMENTS = 8192
  /** Default number of batch buffers (multi-buffering) */
  export const RL_DEFAULT_BATCH_BUFFERS = 1
  /** Default number of batch draw calls (by state changes: mode, texture) */
  export const RL_DEFAULT_BATCH_DRAWCALLS = 256
  /** Maximum number of textures units that can be activated on batch drawing (SetShaderValueTexture()) */
  export const RL_DEFAULT_BATCH_MAX_TEXTURE_UNITS = 4
  /** Maximum size of Matrix stack */
  export const RL_MAX_MATRIX_STACK_SIZE = 32
  /** Maximum number of shader locations supported */
  export const RL_MAX_SHADER_LOCATIONS = 32
  /** GL_TEXTURE_WRAP_S */
  export const RL_TEXTURE_WRAP_S = 10242
  /** GL_TEXTURE_WRAP_T */
  export const RL_TEXTURE_WRAP_T = 10243
  /** GL_TEXTURE_MAG_FILTER */
  export const RL_TEXTURE_MAG_FILTER = 10240
  /** GL_TEXTURE_MIN_FILTER */
  export const RL_TEXTURE_MIN_FILTER = 10241
  /** GL_NEAREST */
  export const RL_TEXTURE_FILTER_NEAREST = 9728
  /** GL_LINEAR */
  export const RL_TEXTURE_FILTER_LINEAR = 9729
  /** GL_NEAREST_MIPMAP_NEAREST */
  export const RL_TEXTURE_FILTER_MIP_NEAREST = 9984
  /** GL_NEAREST_MIPMAP_LINEAR */
  export const RL_TEXTURE_FILTER_NEAREST_MIP_LINEAR = 9986
  /** GL_LINEAR_MIPMAP_NEAREST */
  export const RL_TEXTURE_FILTER_LINEAR_MIP_NEAREST = 9985
  /** GL_LINEAR_MIPMAP_LINEAR */
  export const RL_TEXTURE_FILTER_MIP_LINEAR = 9987
  /** Anisotropic filter (custom identifier) */
  export const RL_TEXTURE_FILTER_ANISOTROPIC = 12288
  /** Texture mipmap bias, percentage ratio (custom identifier) */
  export const RL_TEXTURE_MIPMAP_BIAS_RATIO = 16384
  /** GL_REPEAT */
  export const RL_TEXTURE_WRAP_REPEAT = 10497
  /** GL_CLAMP_TO_EDGE */
  export const RL_TEXTURE_WRAP_CLAMP = 33071
  /** GL_MIRRORED_REPEAT */
  export const RL_TEXTURE_WRAP_MIRROR_REPEAT = 33648
  /** GL_MIRROR_CLAMP_EXT */
  export const RL_TEXTURE_WRAP_MIRROR_CLAMP = 34626
  /** GL_MODELVIEW */
  export const RL_MODELVIEW = 5888
  /** GL_PROJECTION */
  export const RL_PROJECTION = 5889
  /** GL_TEXTURE */
  export const RL_TEXTURE = 5890
  /** GL_LINES */
  export const RL_LINES = 1
  /** GL_TRIANGLES */
  export const RL_TRIANGLES = 4
  /** GL_QUADS */
  export const RL_QUADS = 7
  /** GL_UNSIGNED_BYTE */
  export const RL_UNSIGNED_BYTE = 5121
  /** GL_FLOAT */
  export const RL_FLOAT = 5126
  /** GL_STREAM_DRAW */
  export const RL_STREAM_DRAW = 35040
  /** GL_STREAM_READ */
  export const RL_STREAM_READ = 35041
  /** GL_STREAM_COPY */
  export const RL_STREAM_COPY = 35042
  /** GL_STATIC_DRAW */
  export const RL_STATIC_DRAW = 35044
  /** GL_STATIC_READ */
  export const RL_STATIC_READ = 35045
  /** GL_STATIC_COPY */
  export const RL_STATIC_COPY = 35046
  /** GL_DYNAMIC_DRAW */
  export const RL_DYNAMIC_DRAW = 35048
  /** GL_DYNAMIC_READ */
  export const RL_DYNAMIC_READ = 35049
  /** GL_DYNAMIC_COPY */
  export const RL_DYNAMIC_COPY = 35050
  /** GL_FRAGMENT_SHADER */
  export const RL_FRAGMENT_SHADER = 35632
  /** GL_VERTEX_SHADER */
  export const RL_VERTEX_SHADER = 35633
  /** GL_COMPUTE_SHADER */
  export const RL_COMPUTE_SHADER = 37305
  /** GL_ZERO */
  export const RL_ZERO = 0
  /** GL_ONE */
  export const RL_ONE = 1
  /** GL_SRC_COLOR */
  export const RL_SRC_COLOR = 768
  /** GL_ONE_MINUS_SRC_COLOR */
  export const RL_ONE_MINUS_SRC_COLOR = 769
  /** GL_SRC_ALPHA */
  export const RL_SRC_ALPHA = 770
  /** GL_ONE_MINUS_SRC_ALPHA */
  export const RL_ONE_MINUS_SRC_ALPHA = 771
  /** GL_DST_ALPHA */
  export const RL_DST_ALPHA = 772
  /** GL_ONE_MINUS_DST_ALPHA */
  export const RL_ONE_MINUS_DST_ALPHA = 773
  /** GL_DST_COLOR */
  export const RL_DST_COLOR = 774
  /** GL_ONE_MINUS_DST_COLOR */
  export const RL_ONE_MINUS_DST_COLOR = 775
  /** GL_SRC_ALPHA_SATURATE */
  export const RL_SRC_ALPHA_SATURATE = 776
  /** GL_CONSTANT_COLOR */
  export const RL_CONSTANT_COLOR = 32769
  /** GL_ONE_MINUS_CONSTANT_COLOR */
  export const RL_ONE_MINUS_CONSTANT_COLOR = 32770
  /** GL_CONSTANT_ALPHA */
  export const RL_CONSTANT_ALPHA = 32771
  /** GL_ONE_MINUS_CONSTANT_ALPHA */
  export const RL_ONE_MINUS_CONSTANT_ALPHA = 32772
  /** GL_FUNC_ADD */
  export const RL_FUNC_ADD = 32774
  /** GL_MIN */
  export const RL_MIN = 32775
  /** GL_MAX */
  export const RL_MAX = 32776
  /** GL_FUNC_SUBTRACT */
  export const RL_FUNC_SUBTRACT = 32778
  /** GL_FUNC_REVERSE_SUBTRACT */
  export const RL_FUNC_REVERSE_SUBTRACT = 32779
  /** GL_BLEND_EQUATION */
  export const RL_BLEND_EQUATION = 32777
  /** GL_BLEND_EQUATION_RGB   // (Same as BLEND_EQUATION) */
  export const RL_BLEND_EQUATION_RGB = 32777
  /** GL_BLEND_EQUATION_ALPHA */
  export const RL_BLEND_EQUATION_ALPHA = 34877
  /** GL_BLEND_DST_RGB */
  export const RL_BLEND_DST_RGB = 32968
  /** GL_BLEND_SRC_RGB */
  export const RL_BLEND_SRC_RGB = 32969
  /** GL_BLEND_DST_ALPHA */
  export const RL_BLEND_DST_ALPHA = 32970
  /** GL_BLEND_SRC_ALPHA */
  export const RL_BLEND_SRC_ALPHA = 32971
  /** GL_BLEND_COLOR */
  export const RL_BLEND_COLOR = 32773
  /** GL_READ_FRAMEBUFFER */
  export const RL_READ_FRAMEBUFFER = 36008
  /** GL_DRAW_FRAMEBUFFER */
  export const RL_DRAW_FRAMEBUFFER = 36009
  /**  */
  export const RL_DEFAULT_SHADER_ATTRIB_LOCATION_POSITION = 0
  /**  */
  export const RL_DEFAULT_SHADER_ATTRIB_LOCATION_TEXCOORD = 1
  /**  */
  export const RL_DEFAULT_SHADER_ATTRIB_LOCATION_NORMAL = 2
  /**  */
  export const RL_DEFAULT_SHADER_ATTRIB_LOCATION_COLOR = 3
  /**  */
  export const RL_DEFAULT_SHADER_ATTRIB_LOCATION_TANGENT = 4
  /**  */
  export const RL_DEFAULT_SHADER_ATTRIB_LOCATION_TEXCOORD2 = 5
  /**  */
  export const RL_DEFAULT_SHADER_ATTRIB_LOCATION_INDICES = 6
  /**  */
  export const RL_DEFAULT_SHADER_ATTRIB_LOCATION_BONEIDS = 7
  /**  */
  export const RL_DEFAULT_SHADER_ATTRIB_LOCATION_BONEWEIGHTS = 8

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

import r from "./bindings/raylib"
import { Color } from "./types/colors"
import { Vector2, Vector3, Vector4 } from "./types/maths"
import { Camera, Camera2D, Camera3D } from "./types/camera"


export const InitWindow: (width: number, height: number, title: string) => void = r.InitWindow //Initialize window and OpenGL context 
export const WindowShouldClose: () => boolean = r.WindowShouldClose //Check if KEY_ESCAPE pressed or Close icon pressed 
export const CloseWindow: () => void = r.CloseWindow //Close window and unload OpenGL context 
export const IsWindowReady: () => boolean = r.IsWindowReady //Check if window has been initialized successfully 
export const IsWindowMinimized: () => boolean = r.IsWindowMinimized //Check if window has been minimized (or lost focus) 
export const IsWindowResized: () => boolean = r.IsWindowResized //Check if window has been resized 
export const IsWindowHidden: () => boolean = r.IsWindowHidden //Check if window is currently hidden 
export const ToggleFullscreen: () => void = r.ToggleFullscreen //Toggle fullscreen mode (only PLATFORM_DESKTOP) 
export const UnhideWindow: () => void = r.UnhideWindow //Show the window 
export const HideWindow: () => void = r.HideWindow //Hide the window 
export const SetWindowIcon: (image: Image) => void = r.SetWindowIcon //Set icon for window (only PLATFORM_DESKTOP) 
export const SetWindowTitle: (title: string) => void = r.SetWindowTitle //Set title for window (only PLATFORM_DESKTOP) 
export const SetWindowPosition: (x: number, y: number) => void = r.SetWindowPosition //Set window position on screen (only PLATFORM_DESKTOP) 
export const SetWindowMonitor: (monitor: number) => void = r.SetWindowMonitor //Set monitor for the current window (fullscreen mode) 
export const SetWindowMinSize: (width: number, height: number) => void = r.SetWindowMinSize //Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE) 
export const SetWindowSize: (width: number, height: number) => void = r.SetWindowSize //Set window dimensions 
export const GetWindowHandle: () => void = r.GetWindowHandle //Get native window handle 
export const GetScreenWidth: () => number = r.GetScreenWidth //Get current screen width 
export const GetScreenHeight: () => number = r.GetScreenHeight //Get current screen height 
export const GetMonitorCount: () => number = r.GetMonitorCount //Get number of connected monitors 
export const GetMonitorWidth: (monitor: number) => number = r.GetMonitorWidth //Get primary monitor width 
export const GetMonitorHeight: (monitor: number) => number = r.GetMonitorHeight //Get primary monitor height 
export const GetMonitorPhysicalWidth: (monitor: number) => number = r.GetMonitorPhysicalWidth //Get primary monitor physical width in millimetres 
export const GetMonitorPhysicalHeight: (monitor: number) => number = r.GetMonitorPhysicalHeight //Get primary monitor physical height in millimetres 
export const GetMonitorName: (monitor: number) => string = r.GetMonitorName //Get the human-readable, UTF-8 encoded name of the primary monitor 
export const GetClipboardText: () => string = r.GetClipboardText //Get clipboard text content 
export const SetClipboardText: (text: string) => void = r.SetClipboardText //Set clipboard text content 
export const ShowCursor: () => void = r.ShowCursor //Shows cursor 
export const HideCursor: () => void = r.HideCursor //Hides cursor 
export const IsCursorHidden: () => boolean = r.IsCursorHidden //Check if cursor is not visible 
export const EnableCursor: () => void = r.EnableCursor //Enables cursor (unlock cursor) 
export const DisableCursor: () => void = r.DisableCursor //Disables cursor (lock cursor) 
export const ClearBackground: (color: Color) => void = r.ClearBackground //Set background color (framebuffer clear color) 
export const BeginDrawing: () => void = r.BeginDrawing //Setup canvas (framebuffer) to start drawing 
export const EndDrawing: () => void = r.EndDrawing //End canvas drawing and swap buffers (double buffering) 
export const BeginMode2D: (camera: Camera2D) => void = r.BeginMode2D //Initialize 2D mode with custom camera (2D) 
export const EndMode2D: () => void = r.EndMode2D //Ends 2D mode with custom camera 
export const BeginMode3D: (camera: Camera3D) => void = r.BeginMode3D //Initializes 3D mode with custom camera (3D) 
export const EndMode3D: () => void = r.EndMode3D //Ends 3D mode and returns to default 2D orthographic mode 
export const BeginTextureMode: (target: RenderTexture2D) => void = r.BeginTextureMode //Initializes render texture for drawing 
export const EndTextureMode: () => void = r.EndTextureMode //Ends drawing to render texture 
export const GetMouseRay: (mousePosition: Vector2, camera: Camera) => Ray = r.GetMouseRay //Returns a ray trace from mouse position 
export const GetWorldToScreen: (position: Vector3, camera: Camera) => Vector2 = r.GetWorldToScreen //Returns the screen space position for a 3d world space position 
export const GetCameraMatrix: (camera: Camera) => Matrix = r.GetCameraMatrix //Returns camera transform matrix (view matrix) 
export const SetTargetFPS: (fps: number) => void = r.SetTargetFPS //Set target FPS (maximum) 
export const GetFPS: () => number = r.GetFPS //Returns current FPS 
export const GetFrameTime: () => number = r.GetFrameTime //Returns time in seconds for last frame drawn 
export const GetTime: () => number = r.GetTime //Returns elapsed time in seconds since InitWindow() 
export const ColorToInt: (color: Color) => number = r.ColorToInt //Returns hexadecimal value for a Color 
export const ColorNormalize: (color: Color) => Vector4 = r.ColorNormalize //Returns color normalized as float [0..1] 
export const ColorToHSV: (color: Color) => Vector3 = r.ColorToHSV //Returns HSV values for a Color 
export const ColorFromHSV: (hsv: Vector3) => Color = r.ColorFromHSV //Returns a Color from HSV values 
export const GetColor: (hexValue: number) => Color = r.GetColor //Returns a Color struct from hexadecimal value 
export const Fade: (color: Color, alpha: number) => Color = r.Fade //Color fade-in or fade-out, alpha goes from 0.0f to 1.0f 
export const SetConfigFlags: (flags: number) => void = r.SetConfigFlags //Setup window configuration flags (view FLAGS) 
export const SetTraceLogLevel: (logType: number) => void = r.SetTraceLogLevel //Set the current threshold (minimum) log level 
export const SetTraceLogExit: (logType: number) => void = r.SetTraceLogExit //Set the exit threshold (minimum) log level 
export const SetTraceLogCallback: (callback: TraceLogCallback) => void = r.SetTraceLogCallback //Set a trace log callback to enable custom logging 
export const TraceLog: (logType: number, text: string, ...: any) => void = r.TraceLog //Show trace log messages (LOG_DEBUG, LOG_INFO, LOG_WARNING, LOG_ERROR) 
export const TakeScreenshot: (fileName: string) => void = r.TakeScreenshot //Takes a screenshot of current screen (saved a .png) 
export const GetRandomValue: (min: number, max: number) => number = r.GetRandomValue //Returns a random value between min and max (both included) 
export const FileExists: (fileName: string) => boolean = r.FileExists //Check if file exists 
export const IsFileExtension: (fileName: string, ext: string) => boolean = r.IsFileExtension //Check file extension 
export const GetExtension: (fileName: string) => string = r.GetExtension //Get pointer to extension for a filename string 
export const GetFileName: (filePath: string) => string = r.GetFileName //Get pointer to filename for a path string 
export const GetFileNameWithoutExt: (filePath: string) => string = r.GetFileNameWithoutExt //Get filename string without extension (memory should be freed) 
export const GetDirectoryPath: (fileName: string) => string = r.GetDirectoryPath //Get full path for a given fileName (uses static string) 
export const GetWorkingDirectory: () => string = r.GetWorkingDirectory //Get current working directory (uses static string) 
export const GetDirectoryFiles: (dirPath: string, count: number) => number = r.GetDirectoryFiles //Get filenames in a directory path (memory should be freed) 
export const ClearDirectoryFiles: () => void = r.ClearDirectoryFiles //Clear directory files paths buffers (free memory) 
export const ChangeDirectory: (dir: string) => boolean = r.ChangeDirectory //Change working directory, returns true if success 
export const IsFileDropped: () => boolean = r.IsFileDropped //Check if a file has been dropped into window 
export const GetDroppedFiles: (count: number) => number = r.GetDroppedFiles //Get dropped files names (memory should be freed) 
export const ClearDroppedFiles: () => void = r.ClearDroppedFiles //Clear dropped files paths buffer (free memory) 
export const GetFileModTime: (fileName: string) => number = r.GetFileModTime //Get file modification time (last write time) 
export const StorageSaveValue: (position: number, value: number) => void = r.StorageSaveValue //Save integer value to storage file (to defined position) 
export const StorageLoadValue: (position: number) => number = r.StorageLoadValue //Load integer value from storage file (from defined position) 
export const OpenURL: (url: string) => void = r.OpenURL //Open URL with default system browser (if available) 
export const IsKeyPressed: (key: number) => boolean = r.IsKeyPressed //Detect if a key has been pressed once 
export const IsKeyDown: (key: number) => boolean = r.IsKeyDown //Detect if a key is being pressed 
export const IsKeyReleased: (key: number) => boolean = r.IsKeyReleased //Detect if a key has been released once 
export const IsKeyUp: (key: number) => boolean = r.IsKeyUp //Detect if a key is NOT being pressed 
export const GetKeyPressed: () => number = r.GetKeyPressed //Get latest key pressed 
export const SetExitKey: (key: number) => void = r.SetExitKey //Set a custom key to exit program (default is ESC) 
export const IsGamepadAvailable: (gamepad: number) => boolean = r.IsGamepadAvailable //Detect if a gamepad is available 
export const IsGamepadName: (gamepad: number, name: string) => boolean = r.IsGamepadName //Check gamepad name (if available) 
export const GetGamepadName: (gamepad: number) => string = r.GetGamepadName //Return gamepad internal name id 
export const IsGamepadButtonPressed: (gamepad: number, button: number) => boolean = r.IsGamepadButtonPressed //Detect if a gamepad button has been pressed once 
export const IsGamepadButtonDown: (gamepad: number, button: number) => boolean = r.IsGamepadButtonDown //Detect if a gamepad button is being pressed 
export const IsGamepadButtonReleased: (gamepad: number, button: number) => boolean = r.IsGamepadButtonReleased //Detect if a gamepad button has been released once 
export const IsGamepadButtonUp: (gamepad: number, button: number) => boolean = r.IsGamepadButtonUp //Detect if a gamepad button is NOT being pressed 
export const GetGamepadButtonPressed: () => number = r.GetGamepadButtonPressed //Get the last gamepad button pressed 
export const GetGamepadAxisCount: (gamepad: number) => number = r.GetGamepadAxisCount //Return gamepad axis count for a gamepad 
export const GetGamepadAxisMovement: (gamepad: number, axis: number) => number = r.GetGamepadAxisMovement //Return axis movement value for a gamepad axis 
export const IsMouseButtonPressed: (button: number) => boolean = r.IsMouseButtonPressed //Detect if a mouse button has been pressed once 
export const IsMouseButtonDown: (button: number) => boolean = r.IsMouseButtonDown //Detect if a mouse button is being pressed 
export const IsMouseButtonReleased: (button: number) => boolean = r.IsMouseButtonReleased //Detect if a mouse button has been released once 
export const IsMouseButtonUp: (button: number) => boolean = r.IsMouseButtonUp //Detect if a mouse button is NOT being pressed 
export const GetMouseX: () => number = r.GetMouseX //Returns mouse position X 
export const GetMouseY: () => number = r.GetMouseY //Returns mouse position Y 
export const GetMousePosition: () => Vector2 = r.GetMousePosition //Returns mouse position XY 
export const SetMousePosition: (x: number, y: number) => void = r.SetMousePosition //Set mouse position XY 
export const SetMouseOffset: (offsetX: number, offsetY: number) => void = r.SetMouseOffset //Set mouse offset 
export const SetMouseScale: (scaleX: number, scaleY: number) => void = r.SetMouseScale //Set mouse scaling 
export const GetMouseWheelMove: () => number = r.GetMouseWheelMove //Returns mouse wheel movement Y 
export const GetTouchX: () => number = r.GetTouchX //Returns touch position X for touch point 0 (relative to screen size) 
export const GetTouchY: () => number = r.GetTouchY //Returns touch position Y for touch point 0 (relative to screen size) 
export const GetTouchPosition: (index: number) => Vector2 = r.GetTouchPosition //Returns touch position XY for a touch point index (relative to screen size) 
export const SetGesturesEnabled: (gestureFlags: number) => void = r.SetGesturesEnabled //Enable a set of gestures using flags 
export const IsGestureDetected: (gesture: number) => boolean = r.IsGestureDetected //Check if a gesture have been detected 
export const GetGestureDetected: () => number = r.GetGestureDetected //Get latest detected gesture 
export const GetTouchPointsCount: () => number = r.GetTouchPointsCount //Get touch points count 
export const GetGestureHoldDuration: () => number = r.GetGestureHoldDuration //Get gesture hold time in milliseconds 
export const GetGestureDragVector: () => Vector2 = r.GetGestureDragVector //Get gesture drag vector 
export const GetGestureDragAngle: () => number = r.GetGestureDragAngle //Get gesture drag angle 
export const GetGesturePinchVector: () => Vector2 = r.GetGesturePinchVector //Get gesture pinch delta 
export const GetGesturePinchAngle: () => number = r.GetGesturePinchAngle //Get gesture pinch angle 
export const SetCameraMode: (camera: Camera, mode: number) => void = r.SetCameraMode //Set camera mode (multiple camera modes available) 
export const UpdateCamera: (camera: Camera) => void = r.UpdateCamera //Update camera position for selected mode 
export const SetCameraPanControl: (panKey: number) => void = r.SetCameraPanControl //Set camera pan key to combine with mouse movement (free camera) 
export const SetCameraAltControl: (altKey: number) => void = r.SetCameraAltControl //Set camera alt key to combine with mouse movement (free camera) 
export const SetCameraSmoothZoomControl: (szKey: number) => void = r.SetCameraSmoothZoomControl //Set camera smooth zoom key to combine with mouse (free camera) 
export const SetCameraMoveControls: (frontKey: number, backKey: number, rightKey: number, leftKey: number, upKey: number, downKey: number) => void = r.SetCameraMoveControls //Set camera move controls (1st person and 3rd person cameras) 

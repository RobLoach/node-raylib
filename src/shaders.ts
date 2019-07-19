import r from "./bindings/raylib"
import { Camera } from "./types/camera"


export const LoadText: (fileName: string) => string = r.LoadText //Load chars array from text file 
export const LoadShader: (fsFileName: string) => Shader = r.LoadShader //Load shader from files and bind default locations 
export const LoadShaderCode: (fsCode: string) => Shader = r.LoadShaderCode //Load shader from code strings and bind default locations 
export const UnloadShader: (shader: Shader) => void = r.UnloadShader //Unload shader from GPU memory (VRAM) 
export const GetShaderDefault: () => Shader = r.GetShaderDefault //Get default shader 
export const GetTextureDefault: () => Texture2D = r.GetTextureDefault //Get default texture 
export const GetShaderLocation: (uniformName: string) => number = r.GetShaderLocation //Get shader uniform location 
export const SetShaderValue: (uniformType: number) => void = r.SetShaderValue //Set shader uniform value 
export const SetShaderValueV: (count: number) => void = r.SetShaderValueV //Set shader uniform value vector 
export const SetShaderValueMatrix: (mat: Matrix) => void = r.SetShaderValueMatrix //Set shader uniform value (matrix 4x4) 
export const SetShaderValueTexture: (texture: Texture2D) => void = r.SetShaderValueTexture //Set shader uniform value for texture 
export const SetMatrixProjection: (proj: Matrix) => void = r.SetMatrixProjection //Set a custom projection matrix (replaces internal projection matrix) 
export const SetMatrixModelview: (view: Matrix) => void = r.SetMatrixModelview //Set a custom modelview matrix (replaces internal modelview matrix) 
export const GetMatrixModelview: () => Matrix = r.GetMatrixModelview //Get internal modelview matrix 
export const BeginShaderMode: (shader: Shader) => void = r.BeginShaderMode //Begin custom shader drawing 
export const EndShaderMode: () => void = r.EndShaderMode //End custom shader drawing (use default shader) 
export const BeginBlendMode: (mode: number) => void = r.BeginBlendMode //Begin blending mode (alpha, additive, multiplied) 
export const EndBlendMode: () => void = r.EndBlendMode //End blending mode (reset to default: alpha blending) 
export const BeginScissorMode: (height: number) => void = r.BeginScissorMode //Begin scissor mode (define screen area for following drawing) 
export const EndScissorMode: () => void = r.EndScissorMode //End scissor mode 
export const InitVrSimulator: () => void = r.InitVrSimulator //Init VR simulator for selected device parameters 
export const CloseVrSimulator: () => void = r.CloseVrSimulator //Close VR simulator for current device 
export const UpdateVrTracking: (camera: Camera) => void = r.UpdateVrTracking //Update VR tracking (position and orientation) and camera 
export const SetVrConfiguration: (distortion: Shader) => void = r.SetVrConfiguration //Set stereo rendering configuration parameters 
export const IsVrSimulatorReady: () => boolean = r.IsVrSimulatorReady //Detect if VR simulator is ready 
export const ToggleVrMode: () => void = r.ToggleVrMode //Enable/Disable VR experience 
export const BeginVrDrawing: () => void = r.BeginVrDrawing //Begin VR simulator stereo rendering 
export const EndVrDrawing: () => void = r.EndVrDrawing //End VR simulator stereo rendering 

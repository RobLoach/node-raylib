import { Camera } from "./types/camera"
import { Texture2D } from "./types/texture"
import { Matrix } from "./types/maths"
import { VrDeviceInfo } from "./types/misc"
import { Shader } from "./types/shaders"

export default interface Shaders {
  LoadText: (fileName: string) => string //Load chars array from text file 
  LoadShader: (vsFileName: string, fsFileName: string) => Shader //Load shader from files and bind default locations 
  LoadShaderCode: (vsCode: string, fsCode: string) => Shader //Load shader from code strings and bind default locations 
  UnloadShader: (shader: Shader) => void //Unload shader from GPU memory (VRAM) 
  GetShaderDefault: () => Shader //Get default shader 
  GetTextureDefault: () => Texture2D //Get default texture 
  GetShaderLocation: (shader: Shader, uniformName: string) => number //Get shader uniform location 
  SetShaderValue: (shader: Shader, uniformLoc: number, value: any, uniformType: number) => void //Set shader uniform value 
  SetShaderValueV: (shader: Shader, uniformLoc: number, value: any, uniformType: number, count: number) => void //Set shader uniform value vector 
  SetShaderValueMatrix: (shader: Shader, uniformLoc: number, mat: Matrix) => void //Set shader uniform value (matrix 4x4) 
  SetShaderValueTexture: (shader: Shader, uniformLoc: number, texture: Texture2D) => void //Set shader uniform value for texture 
  SetMatrixProjection: (proj: Matrix) => void //Set a custom projection matrix (replaces internal projection matrix) 
  SetMatrixModelview: (view: Matrix) => void //Set a custom modelview matrix (replaces internal modelview matrix) 
  GetMatrixModelview: () => Matrix //Get internal modelview matrix 
  BeginShaderMode: (shader: Shader) => void //Begin custom shader drawing 
  EndShaderMode: () => void //End custom shader drawing (use default shader) 
  BeginBlendMode: (mode: number) => void //Begin blending mode (alpha, additive, multiplied) 
  EndBlendMode: () => void //End blending mode (reset to default: alpha blending) 
  BeginScissorMode: (x: number, y: number, width: number, height: number) => void //Begin scissor mode (define screen area for following drawing) 
  EndScissorMode: () => void //End scissor mode 
  InitVrSimulator: () => void //Init VR simulator for selected device parameters 
  CloseVrSimulator: () => void //Close VR simulator for current device 
  UpdateVrTracking: (camera: Camera) => void //Update VR tracking (position and orientation) and camera 
  SetVrConfiguration: (info: VrDeviceInfo, distortion: Shader) => void //Set stereo rendering configuration parameters 
  IsVrSimulatorReady: () => boolean //Detect if VR simulator is ready 
  ToggleVrMode: () => void //Enable/Disable VR experience 
  BeginVrDrawing: () => void //Begin VR simulator stereo rendering 
  EndVrDrawing: () => void //End VR simulator stereo rendering 
}


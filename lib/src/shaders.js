"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var raylib_1 = require("./bindings/raylib");
var Shader = /** @class */ (function () {
    function Shader(id, locs) {
        this.id = id;
        this.locs = locs;
    }
    return Shader;
}());
exports.Shader = Shader;
exports.LoadText = raylib_1.default.LoadText; //Load chars array from text file 
exports.LoadShader = raylib_1.default.LoadShader; //Load shader from files and bind default locations 
exports.LoadShaderCode = raylib_1.default.LoadShaderCode; //Load shader from code strings and bind default locations 
exports.UnloadShader = raylib_1.default.UnloadShader; //Unload shader from GPU memory (VRAM) 
exports.GetShaderDefault = raylib_1.default.GetShaderDefault; //Get default shader 
exports.GetTextureDefault = raylib_1.default.GetTextureDefault; //Get default texture 
exports.GetShaderLocation = raylib_1.default.GetShaderLocation; //Get shader uniform location 
exports.SetShaderValue = raylib_1.default.SetShaderValue; //Set shader uniform value 
exports.SetShaderValueV = raylib_1.default.SetShaderValueV; //Set shader uniform value vector 
exports.SetShaderValueMatrix = raylib_1.default.SetShaderValueMatrix; //Set shader uniform value (matrix 4x4) 
exports.SetShaderValueTexture = raylib_1.default.SetShaderValueTexture; //Set shader uniform value for texture 
exports.SetMatrixProjection = raylib_1.default.SetMatrixProjection; //Set a custom projection matrix (replaces internal projection matrix) 
exports.SetMatrixModelview = raylib_1.default.SetMatrixModelview; //Set a custom modelview matrix (replaces internal modelview matrix) 
exports.GetMatrixModelview = raylib_1.default.GetMatrixModelview; //Get internal modelview matrix 
exports.BeginShaderMode = raylib_1.default.BeginShaderMode; //Begin custom shader drawing 
exports.EndShaderMode = raylib_1.default.EndShaderMode; //End custom shader drawing (use default shader) 
exports.BeginBlendMode = raylib_1.default.BeginBlendMode; //Begin blending mode (alpha, additive, multiplied) 
exports.EndBlendMode = raylib_1.default.EndBlendMode; //End blending mode (reset to default: alpha blending) 
exports.BeginScissorMode = raylib_1.default.BeginScissorMode; //Begin scissor mode (define screen area for following drawing) 
exports.EndScissorMode = raylib_1.default.EndScissorMode; //End scissor mode 
exports.InitVrSimulator = raylib_1.default.InitVrSimulator; //Init VR simulator for selected device parameters 
exports.CloseVrSimulator = raylib_1.default.CloseVrSimulator; //Close VR simulator for current device 
exports.UpdateVrTracking = raylib_1.default.UpdateVrTracking; //Update VR tracking (position and orientation) and camera 
exports.SetVrConfiguration = raylib_1.default.SetVrConfiguration; //Set stereo rendering configuration parameters 
exports.IsVrSimulatorReady = raylib_1.default.IsVrSimulatorReady; //Detect if VR simulator is ready 
exports.ToggleVrMode = raylib_1.default.ToggleVrMode; //Enable/Disable VR experience 
exports.BeginVrDrawing = raylib_1.default.BeginVrDrawing; //Begin VR simulator stereo rendering 
exports.EndVrDrawing = raylib_1.default.EndVrDrawing; //End VR simulator stereo rendering 

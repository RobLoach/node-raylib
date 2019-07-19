import r from "./bindings/raylib"


export const InitAudioDevice: () => void = r.InitAudioDevice //Initialize audio device and context 
export const CloseAudioDevice: () => void = r.CloseAudioDevice //Close the audio device and context (and music stream) 
export const IsAudioDeviceReady: () => boolean = r.IsAudioDeviceReady //Check if audio device is ready 
export const SetMasterVolume: (volume: number) => void = r.SetMasterVolume //Set master volume (listener) 
export const LoadWave: (fileName: string) => Wave = r.LoadWave //Load wave data from file 
export const LoadWaveEx: (channels: number) => Wave = r.LoadWaveEx //Load wave data from raw array data 
export const LoadSound: (fileName: string) => Sound = r.LoadSound //Load sound from file 
export const LoadSoundFromWave: (wave: Wave) => Sound = r.LoadSoundFromWave //Load sound from wave data 
export const UpdateSound: (samplesCount: number) => void = r.UpdateSound //Update sound buffer with new data 
export const UnloadWave: (wave: Wave) => void = r.UnloadWave //Unload wave data 
export const UnloadSound: (sound: Sound) => void = r.UnloadSound //Unload sound 
export const ExportWave: (fileName: string) => void = r.ExportWave //Export wave data to file 
export const ExportWaveAsCode: (fileName: string) => void = r.ExportWaveAsCode //Export wave sample data to code (.h) 
export const PlaySound: (sound: Sound) => void = r.PlaySound //Play a sound 
export const PauseSound: (sound: Sound) => void = r.PauseSound //Pause a sound 
export const ResumeSound: (sound: Sound) => void = r.ResumeSound //Resume a paused sound 
export const StopSound: (sound: Sound) => void = r.StopSound //Stop playing a sound 
export const IsSoundPlaying: (sound: Sound) => boolean = r.IsSoundPlaying //Check if a sound is currently playing 
export const SetSoundVolume: (volume: number) => void = r.SetSoundVolume //Set volume for a sound (1.0 is max level) 
export const SetSoundPitch: (pitch: number) => void = r.SetSoundPitch //Set pitch for a sound (1.0 is base level) 
export const WaveFormat: (channels: number) => void = r.WaveFormat //Convert wave data to desired format 
export const WaveCopy: (wave: Wave) => Wave = r.WaveCopy //Copy a wave to a new wave 
export const WaveCrop: (finalSample: number) => void = r.WaveCrop //Crop a wave to defined samples range 
export const GetWaveData: (wave: Wave) => float = r.GetWaveData //Get samples data from wave as a floats array 
export const LoadMusicStream: (fileName: string) => Music = r.LoadMusicStream //Load music stream from file 
export const UnloadMusicStream: (music: Music) => void = r.UnloadMusicStream //Unload music stream 
export const PlayMusicStream: (music: Music) => void = r.PlayMusicStream //Start music playing 
export const UpdateMusicStream: (music: Music) => void = r.UpdateMusicStream //Updates buffers for music streaming 
export const StopMusicStream: (music: Music) => void = r.StopMusicStream //Stop music playing 
export const PauseMusicStream: (music: Music) => void = r.PauseMusicStream //Pause music playing 
export const ResumeMusicStream: (music: Music) => void = r.ResumeMusicStream //Resume playing paused music 
export const IsMusicPlaying: (music: Music) => boolean = r.IsMusicPlaying //Check if music is playing 
export const SetMusicVolume: (volume: number) => void = r.SetMusicVolume //Set volume for music (1.0 is max level) 
export const SetMusicPitch: (pitch: number) => void = r.SetMusicPitch //Set pitch for a music (1.0 is base level) 
export const SetMusicLoopCount: (count: number) => void = r.SetMusicLoopCount //Set music loop count (loop repeats) 
export const GetMusicTimeLength: (music: Music) => number = r.GetMusicTimeLength //Get music time length (in seconds) 
export const GetMusicTimePlayed: (music: Music) => number = r.GetMusicTimePlayed //Get current music time played (in seconds) 
export const InitAudioStream: (channels: number) => AudioStream = r.InitAudioStream //Init audio stream (to stream raw audio pcm data) 
export const UpdateAudioStream: (samplesCount: number) => void = r.UpdateAudioStream //Update audio stream buffers with data 
export const CloseAudioStream: (stream: AudioStream) => void = r.CloseAudioStream //Close audio stream and free memory 
export const IsAudioBufferProcessed: (stream: AudioStream) => boolean = r.IsAudioBufferProcessed //Check if any audio stream buffers requires refill 
export const PlayAudioStream: (stream: AudioStream) => void = r.PlayAudioStream //Play audio stream 
export const PauseAudioStream: (stream: AudioStream) => void = r.PauseAudioStream //Pause audio stream 
export const ResumeAudioStream: (stream: AudioStream) => void = r.ResumeAudioStream //Resume audio stream 
export const IsAudioStreamPlaying: (stream: AudioStream) => boolean = r.IsAudioStreamPlaying //Check if audio stream is playing 
export const StopAudioStream: (stream: AudioStream) => void = r.StopAudioStream //Stop audio stream 
export const SetAudioStreamVolume: (volume: number) => void = r.SetAudioStreamVolume //Set volume for audio stream (1.0 is max level) 
export const SetAudioStreamPitch: (pitch: number) => void = r.SetAudioStreamPitch //Set pitch for audio stream (1.0 is base level) 

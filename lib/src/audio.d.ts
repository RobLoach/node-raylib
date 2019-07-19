export interface Wave {
    sampleCount: number;
    sampleRate: number;
    sampleSize: number;
    channels: number;
    data: any;
}
export interface Sound {
    audioBuffer: any;
    source: number;
    buffer: number;
    format: number;
}
export interface AudioStream {
    sampleRate: number;
    sampleSize: number;
    channels: number;
    AudioBuffer: any;
    source: number;
    buffers: number[];
}
export interface MusicData {
    ctxType: any;
    ctxOgg: any;
    ctxFlac: any;
    ctxMp3: any;
    ctxXm: any;
    ctxMod: any;
    stream: AudioStream;
    loopCount: number;
    totalSamples: number;
    samplesLeft: number;
}
export declare type Music = MusicData;
export declare const InitAudioDevice: () => void;
export declare const CloseAudioDevice: () => void;
export declare const IsAudioDeviceReady: () => boolean;
export declare const SetMasterVolume: (volume: number) => void;
export declare const LoadWave: (fileName: string) => Wave;
export declare const LoadWaveEx: (data: void, sampleCount: number, sampleRate: number, sampleSize: number, channels: number) => Wave;
export declare const LoadSound: (fileName: string) => Sound;
export declare const LoadSoundFromWave: (wave: Wave) => Sound;
export declare const UpdateSound: (sound: Sound, data: any, samplesCount: number) => void;
export declare const UnloadWave: (wave: Wave) => void;
export declare const UnloadSound: (sound: Sound) => void;
export declare const ExportWave: (wave: Wave, fileName: string) => void;
export declare const ExportWaveAsCode: (wave: Wave, fileName: string) => void;
export declare const PlaySound: (sound: Sound) => void;
export declare const PauseSound: (sound: Sound) => void;
export declare const ResumeSound: (sound: Sound) => void;
export declare const StopSound: (sound: Sound) => void;
export declare const IsSoundPlaying: (sound: Sound) => boolean;
export declare const SetSoundVolume: (sound: Sound, volume: number) => void;
export declare const SetSoundPitch: (sound: Sound, pitch: number) => void;
export declare const WaveFormat: (wave: Wave, sampleRate: number, sampleSize: number, channels: number) => void;
export declare const WaveCopy: (wave: Wave) => Wave;
export declare const WaveCrop: (wave: Wave, initSample: number, finalSample: number) => void;
export declare const GetWaveData: (wave: Wave) => number;
export declare const LoadMusicStream: (fileName: string) => Music;
export declare const UnloadMusicStream: (music: Music) => void;
export declare const PlayMusicStream: (music: Music) => void;
export declare const UpdateMusicStream: (music: Music) => void;
export declare const StopMusicStream: (music: Music) => void;
export declare const PauseMusicStream: (music: Music) => void;
export declare const ResumeMusicStream: (music: Music) => void;
export declare const IsMusicPlaying: (music: Music) => boolean;
export declare const SetMusicVolume: (music: Music, volume: number) => void;
export declare const SetMusicPitch: (music: Music, pitch: number) => void;
export declare const SetMusicLoopCount: (music: Music, count: number) => void;
export declare const GetMusicTimeLength: (music: Music) => number;
export declare const GetMusicTimePlayed: (music: Music) => number;
export declare const InitAudioStream: (sampleRate: number, sampleSize: number, channels: number) => AudioStream;
export declare const UpdateAudioStream: (stream: AudioStream, data: any, samplesCount: number) => void;
export declare const CloseAudioStream: (stream: AudioStream) => void;
export declare const IsAudioBufferProcessed: (stream: AudioStream) => boolean;
export declare const PlayAudioStream: (stream: AudioStream) => void;
export declare const PauseAudioStream: (stream: AudioStream) => void;
export declare const ResumeAudioStream: (stream: AudioStream) => void;
export declare const IsAudioStreamPlaying: (stream: AudioStream) => boolean;
export declare const StopAudioStream: (stream: AudioStream) => void;
export declare const SetAudioStreamVolume: (stream: AudioStream, volume: number) => void;
export declare const SetAudioStreamPitch: (stream: AudioStream, pitch: number) => void;

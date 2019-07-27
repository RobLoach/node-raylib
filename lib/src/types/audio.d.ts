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

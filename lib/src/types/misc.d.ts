export declare type TraceLogCallback = (logType: number, text: string, ...vaArgs: any) => void;
export interface VrDeviceInfo {
    hResolution: number;
    vResolution: number;
    hScreenSize: number;
    vScreenSize: number;
    vScreenCenter: number;
    eyeToScreenDistance: number;
    lensSeparationDistance: number;
    lensDistortionValues: number[];
    chromaAbCorrection: number[];
}

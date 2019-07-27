export default interface Audio {
    InitAudioDevice: () => void;
    CloseAudioDevice: () => void;
    IsAudioDeviceReady: () => boolean;
    SetMasterVolume: (volume: number) => void;
}

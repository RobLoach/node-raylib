declare const exec: any;
declare const archiver: any;
declare const fs: any;
declare const path: any;
declare const package: any;
declare var binaryFilename: string;
declare var packageName: string;
declare var compression: string;
declare var compressOptions: {};
/**
 * Build the binary with pkg.
 */
declare function pkg(): Promise<void>;
/**
 * Compress the files into the archive.
 */
declare function compress(): Promise<void>;

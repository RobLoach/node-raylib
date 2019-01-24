#define EXTERNAL_CONFIG_FLAGS

// core.c
/* Camera module is included (camera.h) and multiple predefined cameras are available: free, 1st/3rd person, orbital */
//#define SUPPORT_CAMERA_SYSTEM 1
/* Gestures module is included (gestures.h) to support gestures detection: tap, hold, swipe, drag */
//#define SUPPORT_GESTURES_SYSTEM 1
/* Mouse gestures are directly mapped like touches and processed by gestures system. */
//#define SUPPORT_MOUSE_GESTURES 1
/* Use busy wait loop for timing sync, if not defined, a high-resolution timer is setup and used */
//#define SUPPORT_BUSY_WAIT_LOOP 1
/* Wait for events passively (sleeping while no events) instead of polling them actively every frame */
#define SUPPORT_EVENTS_WAITING 1
/* Allow automatic screen capture of current screen pressing F12, defined in KeyCallback() */
//#define SUPPORT_SCREEN_CAPTURE 1
/* Allow automatic gif recording of current screen pressing CTRL+F12, defined in KeyCallback() */
//#define SUPPORT_GIF_RECORDING 1

// rlgl.h
/* Support VR simulation functionality (stereo rendering) */
//#define SUPPORT_VR_SIMULATOR 1
/* Include stereo rendering distortion shader (shader_distortion.h) */
//#define SUPPORT_DISTORTION_SHADER 1

// shapes.c
//#define SUPPORT_FONT_TEXTURE 1
//#define SUPPORT_QUADS_DRAW_MODE 1

// textures.c
/* Selecte desired fileformats to be supported for image data loading. */
#define SUPPORT_FILEFORMAT_PNG 1
//#define SUPPORT_FILEFORMAT_DDS 1
//#define SUPPORT_FILEFORMAT_HDR 1
//#define SUPPORT_FILEFORMAT_KTX 1
//#define SUPPORT_FILEFORMAT_ASTC 1
//#define SUPPORT_FILEFORMAT_BMP 1
//#define SUPPORT_FILEFORMAT_TGA 1
//#define SUPPORT_FILEFORMAT_JPG 1
//#define SUPPORT_FILEFORMAT_GIF 1
//#define SUPPORT_FILEFORMAT_PSD 1
//#define SUPPORT_FILEFORMAT_PKM 1
//#define SUPPORT_FILEFORMAT_PVR 1

// Support image export functionality (.png, .bmp, .tga, .jpg)
//#define SUPPORT_IMAGE_EXPORT 1

/* Support multiple image editing functions to scale, adjust colors, flip, draw on images, crop... If not defined only three image editing functions supported: ImageFormat(), ImageAlphaMask(), ImageToPOT() */
//#define SUPPORT_IMAGE_MANIPULATION 1

/* Support procedural image generation functionality (gradient, spot, perlin-noise, cellular) */
//#define SUPPORT_IMAGE_GENERATION 1

// text.c
/* Default font is loaded on window initialization to be available for the user to render simple text. NOTE: If enabled, uses external module functions to load default raylib font (module: text) */
#define SUPPORT_DEFAULT_FONT 1
/* Selected desired fileformats to be supported for loading.  */
//#define SUPPORT_FILEFORMAT_FNT 1
//#define SUPPORT_FILEFORMAT_TTF 1

// models.c
/* Selected desired fileformats to be supported for loading. */
//#define SUPPORT_FILEFORMAT_OBJ 1
//#define SUPPORT_FILEFORMAT_MTL 1
/* Support procedural mesh generation functions, uses external par_shapes.h library
 * NOTE: Some generated meshes DO NOT include generated texture coordinates */
//#define SUPPORT_MESH_GENERATION 1

// raudio.c
/* Desired fileformats to be supported for loading. */
#define SUPPORT_FILEFORMAT_WAV 1
//#define SUPPORT_FILEFORMAT_OGG 1
//#define SUPPORT_FILEFORMAT_XM 1
//#define SUPPORT_FILEFORMAT_MOD 1
//#define SUPPORT_FILEFORMAT_FLAC 1

// utils.c
/* Show TraceLog() output messages. NOTE: By default LOG_DEBUG traces not shown */
#define SUPPORT_TRACELOG 1
/* Support saving image data as PNG fileformat. NOTE: Requires stb_image_write library */
//#define SUPPORT_SAVE_PNG 1
/* Support saving image data as PMP fileformat. NOTE: Requires stb_image_write library */
//#define SUPPORT_SAVE_BMP 1

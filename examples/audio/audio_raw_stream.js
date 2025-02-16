/*******************************************************************************************
*
*   raylib [audio] example - Raw audio streaming
*
*   This example has been created using raylib 1.6 (www.raylib.com)
*   raylib is licensed under an unmodified zlib/libpng license (View raylib.h for details)
*
*   Example created by Ramon Santamaria (@raysan5) and reviewed by James Hofmann (@triplefox)
*
*   Copyright (c) 2015-2019 Ramon Santamaria (@raysan5) and James Hofmann (@triplefox)
*   Ported to javascript 2022 by David Konsumer (@konsumer)
*
********************************************************************************************/

const r = require('../../index.js')

function memcpy (src, srcOffset, dst, dstOffset, length) {
  let i

  src = src.subarray || src.slice ? src : src.buffer
  dst = dst.subarray || dst.slice ? dst : dst.buffer

  src = srcOffset
    ? src.subarray
      ? src.subarray(srcOffset, length && srcOffset + length)
      : src.slice(srcOffset, length && srcOffset + length)
    : src

  if (dst.set) {
    dst.set(src, dstOffset)
  } else {
    for (i = 0; i < src.length; i++) {
      dst[i + dstOffset] = src[i]
    }
  }

  return dst
}

const MAX_SAMPLES = 512
const MAX_SAMPLES_PER_UPDATE = 4096

const screenWidth = 800
const screenHeight = 450

r.InitWindow(screenWidth, screenHeight, 'raylib [audio] example - raw audio streaming')

r.InitAudioDevice() // Initialize audio device

r.SetAudioStreamBufferSizeDefault(MAX_SAMPLES_PER_UPDATE)

// Init raw audio stream (sample rate: 22050, sample size: 16bit-short, channels: 1-mono)
const stream = r.LoadAudioStream(44100, 16, 1)

// Buffer for the single cycle waveform we are synthesizing
const data = new Uint8Array(MAX_SAMPLES)

// Frame buffer, describing the waveform when repeated over the course of a frame
const writeBuf = new Uint8Array(MAX_SAMPLES_PER_UPDATE)
let writeLength
let readLength

r.PlayAudioStream(stream) // Start processing stream buffer (no data loaded currently)

// Position read in to determine next frequency
let mousePosition = { x: -100, y: -100 }

// Cycles per second (hz)
let frequency = 440

// Previous value, used to test if sine needs to be rewritten, and to smoothly modulate frequency
let oldFrequency = 1

// Cursor to read and copy the samples of the sine wave buffer
let readCursor = 0

// Computed size in samples of the sine wave
let waveLength = 1
let oldWavelength = 1

const position = { x: 0, y: 0 }

r.SetTargetFPS(30) // Set our game to run at 30 frames-per-second

while (!r.WindowShouldClose()) {
  // Update
  // ----------------------------------------------------------------------------------

  // Sample mouse input.
  mousePosition = r.GetMousePosition()

  if (r.IsMouseButtonDown(r.MOUSE_BUTTON_LEFT)) {
    frequency = 40 + mousePosition.y
    const pan = mousePosition.x / screenWidth
    r.SetAudioStreamPan(stream, pan)
  }

  // Rewrite the sine wave.
  // Compute two cycles to allow the buffer padding, simplifying any modulation, resampling, etc.
  if (frequency !== oldFrequency) {
    // Compute wavelength. Limit size in both directions.
    oldWavelength = waveLength
    waveLength = 22050 / frequency
    if (waveLength > MAX_SAMPLES / 2) waveLength = MAX_SAMPLES / 2
    if (waveLength < 1) waveLength = 1

    // Write sine wave.
    for (let i = 0; i < waveLength * 2; i++) {
      data[i] = Math.sin((2 * Math.PI * i / waveLength) * 32000)
    }

    // Scale read cursor's position to minimize transition artifacts
    readCursor = (readCursor * (waveLength / oldWavelength))
    oldFrequency = frequency
  }

  // Refill audio stream if required
  if (r.IsAudioStreamProcessed(stream)) {
    // Synthesize a buffer that is exactly the requested size
    let writeCursor = 0

    while (writeCursor < MAX_SAMPLES_PER_UPDATE) {
      // Start by trying to write the whole chunk at once
      writeLength = MAX_SAMPLES_PER_UPDATE - writeCursor

      // Limit to the maximum readable size
      readLength = waveLength - readCursor

      if (writeLength > readLength) writeLength = readLength

      // Write the slice
      memcpy(writeBuf, writeCursor, data, readCursor, writeLength)

      // Update cursors and loop audio
      readCursor = (readCursor + writeLength) % waveLength

      writeCursor += writeLength
    }

    // Copy finished frame to audio stream
    r.UpdateAudioStream(stream, writeBuf, MAX_SAMPLES_PER_UPDATE)
  }
  // ----------------------------------------------------------------------------------

  // Draw
  // ----------------------------------------------------------------------------------
  r.BeginDrawing()

  r.ClearBackground(r.RAYWHITE)

  r.DrawText(`sine frequency: ${frequency}`, r.GetScreenWidth() - 220, 10, 20, r.RED)
  r.DrawText('click mouse button to change frequency or pan', 10, 10, 20, r.DARKGRAY)

  // Draw the current buffer state proportionate to the screen
  for (let i = 0; i < screenWidth; i++) {
    position.x = i
    position.y = 250 + 50 * data[i * MAX_SAMPLES / screenWidth] / 32000.0

    r.DrawPixelV(position, r.RED)
  }

  r.EndDrawing()
  // ----------------------------------------------------------------------------------
}

r.UnloadAudioStream(stream)
r.CloseAudioDevice()
r.CloseWindow()

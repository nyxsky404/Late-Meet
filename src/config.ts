// Shared Configuration Constants for Late Meet

/** The default OpenAI chat model used for meeting summarization and AI features. */
export const DEFAULT_CHAT_MODEL = "gpt-4o-mini";

/** The ElevenLabs speech-to-text model used for audio transcription. */
export const ELEVENLABS_STT_MODEL = "scribe_v2";

/** The OpenAI Whisper model used as the fallback speech-to-text engine. */
export const WHISPER_MODEL = "whisper-1";

/**
 * When true, enables verbose console logging for development.
 * Vite replaces `import.meta.env.DEV` at build time, ensuring production builds
 * never accidentally enable debug output by flipping this constant.
 */
export const DEBUG = import.meta.env?.DEV === true;

/**
 * Maximum permitted size (in bytes) for a single audio chunk blob forwarded
 * from the offscreen document to the background service worker via
 * chrome.runtime.sendMessage. Chrome's IPC message size limit is 64 MB, but
 * blobs larger than this threshold are a symptom of a stalled VAD timer or
 * MediaRecorder buffering multiple seconds of audio — both of which indicate
 * a problem upstream. Chunks exceeding this limit are discarded with a warning
 * rather than being forwarded, preventing memory exhaustion on long meetings.
 */
export const MAX_AUDIO_CHUNK_BYTES = 10 * 1024 * 1024; // 10 MB

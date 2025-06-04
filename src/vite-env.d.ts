// Ref: https://vite.dev/guide/env-and-mode#intellisense-for-typescript

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HARDCOVER_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

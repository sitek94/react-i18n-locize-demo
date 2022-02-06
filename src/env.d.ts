/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_LOCIZE_VERSION: string
  VITE_LOCIZE_PROJECT_ID: string
  VITE_LOCIZE_API_KEY: string
  VITE_LOCIZE_REFERENCE_LANGUAGE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROJECT_NAME: string;
  readonly VITE_API_URL: string;
  readonly VITE_INIT_DATA: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

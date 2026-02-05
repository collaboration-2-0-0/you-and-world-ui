// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_API_URL: string;
  readonly VITE_INIT_DATA: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

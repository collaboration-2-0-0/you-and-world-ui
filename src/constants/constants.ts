export const PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME;
export const ROOT_TITLE = PROJECT_NAME;
export const IS_DEV = import.meta.env.DEV;
export const API_URL =
  import.meta.env.VITE_API_PROXY === 'true'
    ? `${window.location.origin}/api`
    : `${import.meta.env.VITE_API_URL || window.location.origin}/api`;
export const INIT_DATA = import.meta.env.VITE_INIT_DATA || '';
export const REGEXP_END_ON_SLASH = /\/$/;
export const REGEXP_BAD_HASH = /^#[^/]/; // host/#tgWebAppData

export const IS_DEV = import.meta.env.DEV;
export const INIT_DATA = import.meta.env.VITE_INIT_DATA || '';
export const API_URL =
  import.meta.env.VITE_API_PROXY === 'true'
    ? `${window.location.origin}/api`
    : `${import.meta.env.VITE_API_URL || window.location.origin}/api`;

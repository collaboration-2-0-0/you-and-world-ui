import { MEMBER_STATUS } from '@shared/types/api';
import { createEnumFromArray } from '../server/transform.utils';

export enum AppStatus {
  INITING = 'initing',
  INITED = 'inited',
  LOADING = 'loading',
  READY = 'ready',
  ERROR = 'error',
}

export const MEMBER_STATUS_ENUM = createEnumFromArray(MEMBER_STATUS);

export const IS_DEV = import.meta.env.DEV;
export const INIT_DATA = import.meta.env.VITE_INIT_DATA || '';
export const API_URL =
  import.meta.env.VITE_API_PROXY === 'true'
    ? `${window.location.origin}/api`
    : `${import.meta.env.VITE_API_URL || window.location.origin}/api`;

export const CONNECTION_ATTEMPT_COUNT = 3;
export const CONNECTION_ATTEMPT_DELAY = 3000;
export const CONNECTION_TIMEOUT = 20000;

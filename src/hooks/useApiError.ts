import { app } from '@components/app/app.provider';

export const useApiError = () => {
  const { error, status } = app.apiService.useState(['error']);

  if (status === 'INIT') {
    return null;
  }

  return error && (error.cause as Error);
};

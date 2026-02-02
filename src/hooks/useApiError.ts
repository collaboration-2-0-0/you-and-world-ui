import { app } from '@components/app/app.provider';

export const useApiError = () => {
  const { error } = app.apiService.useState(['error']);

  return error;
};

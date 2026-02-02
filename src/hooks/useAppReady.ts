import { useEffect } from 'react';
import { app } from '@components/app/app.provider';

export const useAppReady = () => {
  const { status } = app.useStatus(['status']);

  useEffect(() => {
    app.init().catch(() => {});
  }, []);

  return status === 'READY';
};

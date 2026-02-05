import { useEffect } from 'react';
import { app } from '@components/app/app.provider';
import { useTelegram } from './useTelegram';

export const useAppReady = () => {
  useTelegram();
  const { status } = app.useStatus(['status']);

  useEffect(() => {
    app.init().catch(() => {});
  }, []);

  return status === 'READY';
};

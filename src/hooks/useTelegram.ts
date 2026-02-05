import { useEffect } from 'react';
import { app } from '@app/app.provider';

export const useTelegram = () => {
  useEffect(() => {
    const { tg } = app.getState();
    if (!tg) return;
    tg.expand?.();
  }, []);
};

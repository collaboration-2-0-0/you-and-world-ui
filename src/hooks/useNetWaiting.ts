import { useEffect, useState } from 'react';
import { INetWaiting } from '@server/types/net.types';
import { app } from '@app/app.provider';

export const useNetWaiting = () => {
  const [waiting, setWaiting] = useState<INetWaiting[]>([]);

  useEffect(() => {
    app.net
      .getNetWaiting()
      .then(setWaiting)
      .catch(() => setWaiting([]));
  }, []);

  return waiting;
};

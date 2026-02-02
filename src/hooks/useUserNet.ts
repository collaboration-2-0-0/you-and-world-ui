import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RoutesMap } from '@constants/router.constants';
import { app } from '@app/app.provider';
import { useMatchParam } from '@utils/utils';

const path = RoutesMap.NET.NET_ID.INDEX;

export const useUserNet = () => {
  const netId = useMatchParam('net_id', path, false) as number;
  const { netView = 'tree' } = useLocation().state || {};

  const { userNet } = app.net.state;
  const { net_id: curNetId } = userNet || {};
  const [loading, setLoading] = useState(false);

  const loaded = curNetId === netId;

  useEffect(() => {
    if (loaded || loading) return;
    setLoading(true);
    app.net
      .enter(netId)
      .then((success) => {
        success && app.net.setView(netView);
        setLoading(false);
      })
      .catch(() => null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  return !loading && loaded && userNet;
};

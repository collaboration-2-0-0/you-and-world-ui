import { useEffect } from 'react';
import { RoutesMap } from '@constants/router.constants';
import { useMatchParam } from '@utils/utils';
import { app } from '@app/app.provider';

const path = {
  circle: RoutesMap.NET.NET_ID.CIRCLE.NODE_ID.INDEX,
  tree: RoutesMap.NET.NET_ID.TREE.NODE_ID.INDEX,
};

export const useNetMember = () => {
  const { member, netView } = app.net.useState(['member', 'netView']);
  const memberData = member?.getMember();
  const nodeId = useMatchParam('node_id', path[netView!], false) as number;

  useEffect(() => {
    if (nodeId) {
      app.net.findMember(nodeId);
    }
  }, [nodeId]);

  return nodeId === memberData?.node_id ? memberData : null;
};

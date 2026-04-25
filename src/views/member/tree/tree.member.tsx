import { FC, useEffect } from 'react';
import { app } from '@app/app.provider';
import { useNavigateTo } from '@hooks/useNavigateTo';
import { MemberMenu } from '@components/member/menu/menu.info';

export const TreeMember: FC = () => {
  const navigate = useNavigateTo();

  useEffect(() => {
    const { userNet: net, member } = app.getState();
    const memberData = member?.get();
    const { memberStatus, node_id: nodeId } = memberData!;
    if (memberStatus === 'ACTIVE') return;
    if (memberStatus === 'FREE') return;
    const navigateTo = navigate.toNet(net!);
    if (memberStatus === 'CONNECTED') navigateTo.connected(nodeId);
    else navigateTo.invite(nodeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MemberMenu />;
};

import { FC, useEffect } from 'react';
import { app } from '@app/app.provider';
import { useNavigateTo } from '@hooks/useNavigateTo';
import { useMemberInfo } from '@hooks/useMemberInfo';
import { MemberInfoForm } from '@components/forms/member/info/info';

export const TreeMember: FC = () => {
  const navigate = useNavigateTo();
  const member = useMemberInfo();

  useEffect(() => {
    const { userNet: net, member } = app.getState();
    const memberData = member?.getMember();
    const { memberStatus, node_id: nodeId } = memberData!;
    if (memberStatus === 'ACTIVE') return;
    if (memberStatus === 'FREE') return;
    const navigateTo = navigate.toNet(net!);
    if (memberStatus === 'CONNECTED') navigateTo.connected(nodeId);
    else navigateTo.invite(nodeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return member && <MemberInfoForm member={member} />;
};

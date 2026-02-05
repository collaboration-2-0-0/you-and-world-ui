import { FC, useEffect } from 'react';
import { useNavigateTo } from '@hooks/useNavigateTo';
import { app } from '@app/app.provider';
import { FormContainer } from '@components/containers/form.container';
import { MemberConfirmForm } from '@components/forms/member/confirm/confirm';

export const TreeMemberConnected: FC = () => {
  const navigate = useNavigateTo();

  useEffect(() => {
    const { userNet: net, member } = app.getState();
    const { memberStatus, node_id: nodeId } = member!.getMember();
    if (memberStatus === 'CONNECTED') return;
    navigate.toNet(net!).treeMember(nodeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormContainer title="Підтвердити запрошення">
      <MemberConfirmForm />
    </FormContainer>
  );
};

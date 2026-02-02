import { useCallback } from 'react';
import { MessagesMap } from '@constants/messages';
import { modalService } from '@services/modal.service';
import { app } from '@app/app.provider';
import { useNetWaiting } from '@hooks/useNetWaiting';
import { useNavigateTo } from '@hooks/useNavigateTo';

const showSuccess = () => modalService.showMessage(MessagesMap.MEMBER_INVITE_CREATE_WAITING);
const showFail = () => modalService.showError(MessagesMap.MEMBER_INVITE_CREATE_FAIL);

export const useWaitingList = () => {
  const { userNet: net } = app.getState();
  const waiting = useNetWaiting();
  const navigate = useNavigateTo();

  const handleClick = useCallback(
    (userId: number) => {
      app.net
        .createInviteWaiting(userId)
        .then((token) => {
          if (!token) return showFail();
          showSuccess();
          const { tree } = app.net.state;
          const member = tree.find((m) => m.token === token);
          if (member) {
            navigate.toNet(net!).treeMember(member.node_id);
          } else {
            navigate.toNet(net!).id();
          }
        })
        .catch(() => showFail());
    },
    [navigate, net],
  );

  return { waiting, handleClick };
};

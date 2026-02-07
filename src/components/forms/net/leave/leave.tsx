import { FC } from 'react';
import { MessagesMap } from '@constants/messages';
import { useNavigateTo } from '@hooks/useNavigateTo';
import { app } from '@app/app.provider';
import { modalService } from '@services/modal.service';
import { format } from '@utils/format.utils';
import { Button } from '@components/buttons/button/button';
import { useStyles } from './leave.styles';

const { NET_LEAVE, NET_LEAVE_FAIL } = MessagesMap;
const showSuccess = (netName: string) => modalService.showMessage(format(NET_LEAVE, netName));
const showFail = () => modalService.showError(NET_LEAVE_FAIL);

export const NetLeaveForm: FC = () => {
  const { buttons } = useStyles();
  const navigate = useNavigateTo();

  const { userNet: net } = app.getState();
  const { parent_net_id: parentNetId, name } = net!;

  const handleConfirm = () => {
    app.net
      .leave()
      .then((success) => {
        if (!success) {
          return showFail();
        }
        showSuccess(name);
        parentNetId ? navigate.toNet({ net_id: parentNetId }).id(true) : navigate.toIndex(true);
      })
      .catch(() => null);
  };

  const message = format(MessagesMap.NET_LEAVE_CONFIRM, name);
  const handleLeave = () => modalService.showMessage(message, handleConfirm);

  return (
    <div className={buttons}>
      <Button type="submit" onClick={handleLeave} btnType="secondary">
        {"від'єднатись"}
      </Button>
    </div>
  );
};

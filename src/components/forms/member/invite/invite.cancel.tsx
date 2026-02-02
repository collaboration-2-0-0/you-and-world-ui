import { FC } from 'react';
import { MessagesMap } from '@constants/messages';
import { modalService } from '@services/modal.service';
import { app } from '@app/app.provider';
import { Button } from '@components/buttons/button/button';
import { makeTgUrl } from '@utils/format.utils';
import { RoutesMap } from '@constants/router.constants';
import { InputSimple } from '@components/controls/input/input.simple';
import { useStyles } from './invite.styles';

const pathToInvite = RoutesMap.NET.INVITE;
const showSuccess = () => modalService.showMessage(MessagesMap.MEMBER_INVITE_CANCEL);
const showFail = () => modalService.showError(MessagesMap.MEMBER_INVITE_CANCEL_FAIL);
const showCopySuccess = () => modalService.showMessage(MessagesMap.MEMBER_INVITE_CREATE);
const showCopyFail = () => modalService.showMessage(MessagesMap.MEMBER_INVITE_COPY_FAIL);

const handleCancel = () => {
  app.net.state
    .member!.inviteCancel()
    .then((success) => (success ? showSuccess() : showFail()))
    .catch(() => {});
};

const handleCopy = (url: string) => {
  navigator.clipboard
    .writeText(url)
    .then(() => showCopySuccess())
    .catch(() => showCopyFail());
};

export const MemberInviteCancelForm: FC = () => {
  const { buttons } = useStyles();
  const { member, bot } = app.getState();
  const memberData = member?.getMember();
  const inviteUrl = makeTgUrl(pathToInvite, memberData!.token || '', bot);

  return (
    <>
      <InputSimple label="Запрошення" defaultValue={inviteUrl} contentEditable={false} />
      <div className={buttons}>
        <Button btnType="primary" onClick={() => handleCopy(inviteUrl)}>
          копіювати
        </Button>
        <div />
        <Button btnType="secondary" onClick={handleCancel}>
          скасувати
        </Button>
      </div>
    </>
  );
};

import { FC, useCallback, MouseEvent } from 'react';
import clsx from 'clsx';
import { MemberStatusKeys } from '@shared/types/api';
import { app } from '@app/app.provider';
import { MessagesMap } from '@constants/messages';
import { modalService } from '@services/modal.service';
import { useStyles } from './member.dislike.styles';

interface MemberDislikeProps {
  nodeId: number;
  memberStatus: MemberStatusKeys;
  dislike: boolean | null;
}

export const MemberDislike: FC<MemberDislikeProps> = (props) => {
  const { nodeId, memberStatus, dislike } = props;
  const { root, [memberStatus]: status } = useStyles();

  const handleConfirm = useCallback(() => {
    app.net.memberActions.setDislike(nodeId).catch(() => {});
  }, [nodeId]);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      if (dislike) {
        app.net.memberActions.unsetDislike(nodeId).catch(() => {});
      } else {
        modalService.showMessage(MessagesMap.MEMBER_DISLIKE, handleConfirm);
      }
    },
    [dislike, handleConfirm, nodeId],
  );

  return (
    <div className={clsx(root, status, { dislike })} onClick={handleClick} aria-hidden="true">
      <span>DISLIKE</span>
    </div>
  );
};

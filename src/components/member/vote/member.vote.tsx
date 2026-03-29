import { FC, useCallback, MouseEvent } from 'react';
import clsx from 'clsx';
import { NetViewEnum, MemberStatusKeys } from '@shared/types/api';
import { app } from '@app/app.provider';
import { modalService } from '@services/modal.service';
import { MessagesMap } from '@constants/messages';
import { useStyles } from './member.vote.styles';

interface MemberVoteProps {
  nodeId: number;
  memberStatus: MemberStatusKeys;
  canVote: boolean;
  vote: boolean | null;
  voteCount: number;
  netView: NetViewEnum;
}

export const MemberVote: FC<MemberVoteProps> = (props) => {
  const { nodeId, memberStatus, canVote, vote, voteCount, netView } = props;
  const { root, [memberStatus]: status } = useStyles();

  const handleConfirm = useCallback(() => {
    app.net.memberActions.setVote(nodeId).catch(() => {});
  }, [nodeId]);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      if (vote) {
        app.net.memberActions.unsetVote(nodeId).catch(() => {});
      } else {
        modalService.showMessage(MessagesMap.MEMBER_VOTE, handleConfirm);
      }
    },
    [handleConfirm, nodeId, vote],
  );

  if (netView === 'tree' || !canVote) {
    return null;
  }

  return (
    <div
      className={clsx(root, status, { vote }, { voteCount })}
      onClick={handleClick}
      aria-hidden="true"
    >
      <span>{voteCount ? `ГОЛОСІВ: ${voteCount}` : 'ОБРАТИ'}</span>
    </div>
  );
};

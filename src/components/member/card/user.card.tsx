import { FC, useCallback, MouseEvent } from 'react';
import { NetViewEnum } from '@shared/types/api';
import { useNavigateTo } from '@hooks/useNavigateTo';
import { app } from '@app/app.provider';
import { MemberVote } from '../vote/member.vote';
import { MemberAvatar } from '../avatar/avatar';
import { useStyles } from './member.card.styles';

interface NetUserCardProps {
  netView: NetViewEnum;
}

export const UserCard: FC<NetUserCardProps> = (props) => {
  const { root, name: clsName } = useStyles();
  const { userNet: net, user, userNetData, circle } = app.getState();
  const { node_id: nodeId, confirmed, vote, vote_count: voteCount } = userNetData!;
  const memberStatus = confirmed ? 'ACTIVE' : 'CONNECTED';
  const navigate = useNavigateTo();
  const { netView } = props;

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (e.isDefaultPrevented()) return;
      const navigateTo = navigate.toNet(net!);
      netView === 'tree' ? navigateTo.treeUser() : navigateTo.circleUser();
    },
    [navigate, net, netView],
  );

  const userName = user?.name ? `Я (${user.name})` : 'Я';
  const photoUrl = user?.photo_url;

  return (
    <div className={root} onClick={handleClick} aria-hidden="true">
      <MemberAvatar memberStatus={memberStatus} photoUrl={photoUrl} />
      <div className={clsName}>{userName}</div>
      <MemberVote
        nodeId={nodeId}
        canVote={Boolean(circle.length)}
        memberStatus={memberStatus}
        vote={vote}
        voteCount={voteCount}
        netView={netView}
      />
    </div>
  );
};

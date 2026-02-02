import { FC, useCallback, MouseEvent } from 'react';
import { NetViewEnum } from '@server/types/types';
import { useNavigateTo } from '@hooks/useNavigateTo';
import { app } from '@app/app.provider';
import { Icon } from '@components/icon/icon';
import { MemberVote } from '../vote/member.vote';
import { useStyles } from './member.card.styles';

interface NetUserCardProps {
  netView: NetViewEnum;
}

export const UserCard: FC<NetUserCardProps> = (props) => {
  const { root, avatar, name: clsName } = useStyles();
  const { userNet: net, user, userNetData, circle } = app.getState();
  const { node_id: nodeId, confirmed, vote, vote_count: voteCount } = userNetData!;
  const memberStatus = confirmed ? 'ACTIVE' : 'CONNECTED';
  const { netView } = props;

  const navigate = useNavigateTo();
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (e.isDefaultPrevented()) return;
      const navigateTo = navigate.toNet(net!);
      netView === 'tree' ? navigateTo.treeUser() : navigateTo.circleUser();
    },
    [navigate, net, netView],
  );

  const userName = user!.name ? `Я (${user!.name})` : 'Я';
  return (
    <div className={root} onClick={handleClick} aria-hidden="true">
      {/* <div className={avatar} /> */}
      <Icon icon="avatar" className={avatar} />
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

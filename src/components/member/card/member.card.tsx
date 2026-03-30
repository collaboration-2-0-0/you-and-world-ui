import { FC, useCallback, MouseEvent } from 'react';
import clsx from 'clsx';
import { useNavigateTo } from '@hooks/useNavigateTo';
import { useMemberCard } from '@hooks/useMemberCard';
import { MemberCardProps } from './member.card.types';
import { MemberAvatar } from '../avatar/avatar';
import { MemberStatus } from '../status/member.status';
import { MemberVote } from '../vote/member.vote';
import { MemberDislike } from '../dislike/member.dislike';
import { MemberAddress } from '../address/member.addres';
import { useStyles } from './member.card.styles';

export const MemberCard: FC<MemberCardProps> = (props) => {
  const navigate = useNavigateTo();
  const [net, member, memberPosition] = useMemberCard(props);
  const {
    node_id: nodeId,
    member_name: memberName,
    photo_url: photoUrl,
    memberStatus = 'UNAVAILABLE',
    dislike,
    vote,
    vote_count: voteCount,
  } = member || {};
  const { root, name, [memberStatus]: status, avatar } = useStyles();
  const { netView } = props;

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (e.isDefaultPrevented()) return;
      const navigateTo = navigate.toNet(net!);
      netView === 'tree' ? navigateTo.treeMember(nodeId) : navigateTo.circleMember(nodeId);
    },
    [navigate, net, netView, nodeId],
  );

  if (!member) {
    return <div className={clsx(root, status)} aria-hidden="true" />;
  }

  return (
    <div className={clsx(root, status)} onClick={handleClick} aria-hidden="true">
      <MemberAvatar photoUrl={photoUrl} className={avatar} />
      <div className={name}>{memberName}</div>
      <MemberStatus memberStatus={memberStatus} />
      <MemberVote
        nodeId={nodeId}
        canVote={Boolean(memberPosition)}
        memberStatus={memberStatus}
        vote={vote}
        voteCount={voteCount}
        netView={netView}
      />
      <MemberDislike nodeId={nodeId} memberStatus={memberStatus} dislike={dislike} />
      <MemberAddress memberStatus={memberStatus} />
    </div>
  );
};

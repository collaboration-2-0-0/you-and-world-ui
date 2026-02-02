import { app } from '@app/app.provider';
import { MemberCardProps } from '@components/member/card/member.card.types';
import { getMemberPosition } from '@utils/utils';

export const useMemberCard = (props: MemberCardProps) => {
  const { netView, memberUiPosition } = props;
  const memberPosition = getMemberPosition(netView, memberUiPosition);
  const { userNet: net, [netView]: netViewData } = app.net.state;
  const member = netViewData[memberPosition];
  return [net, member, memberPosition] as const;
};

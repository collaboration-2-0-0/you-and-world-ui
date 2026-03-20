import { FC } from 'react';
import { TREE_MEMBERS_COUNT } from '@shared/server/constants';
import { useCircle } from '@hooks/useCircle';
import { MemberCard } from '@components/member/card/member.card';
import { UserCard } from '@components/member/card/user.card';
import { NetViewMenu } from '@components/menu/net.view.menu/net.view.menu';
import { useStyles } from './net.view.styles';

export const NetCircle: FC = () => {
  useCircle();
  const { root, cards } = useStyles();

  const circleJsx = new Array(TREE_MEMBERS_COUNT + 1)
    .fill('circle')
    .map((_, j) =>
      j === 1 ? (
        <UserCard key={`circle-${j}`} netView="circle" />
      ) : (
        <MemberCard key={`circle-${j}`} netView="circle" memberUiPosition={j} />
      ),
    );

  return (
    <div className={root}>
      <div className={cards}>{circleJsx}</div>
      <NetViewMenu netView="circle" />
    </div>
  );
};

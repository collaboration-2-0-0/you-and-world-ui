import { FC } from 'react';
import { useCircle } from '@hooks/useCircle';
import { MemberCard } from '@components/member/card/member.card';
import { UserCard } from '@components/member/card/user.card';
import { NetViewMenu } from '@components/menu/net.view.menu/net.view.menu';
import { useStyles } from './net.view.styles';

export const NetCircle: FC = () => {
  useCircle();
  const { root } = useStyles();

  const circleJsx = new Array(7)
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
      {circleJsx}
      <NetViewMenu netView="circle" />
    </div>
  );
};

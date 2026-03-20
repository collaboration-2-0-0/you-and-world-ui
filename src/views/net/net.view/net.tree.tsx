import { FC } from 'react';
import { TREE_MEMBERS_COUNT } from '@shared/server/constants';
import { useTree } from '@hooks/useTree';
import { MemberCard } from '@components/member/card/member.card';
import { UserCard } from '@components/member/card/user.card';
import { NetViewMenu } from '@components/menu/net.view.menu/net.view.menu';
import { useStyles } from './net.view.styles';

export const NetTree: FC = () => {
  useTree();
  const { root, cards } = useStyles();

  const treeJsx = new Array(TREE_MEMBERS_COUNT + 1)
    .fill('tree')
    .map((_, j) =>
      j === 0 ? (
        <UserCard key={`tree-${j}`} netView="tree" />
      ) : (
        <MemberCard key={`tree-${j}`} netView="tree" memberUiPosition={j} />
      ),
    );

  return (
    <div className={root}>
      <NetViewMenu netView="tree" />
      <div className={cards}>{treeJsx}</div>
    </div>
  );
};

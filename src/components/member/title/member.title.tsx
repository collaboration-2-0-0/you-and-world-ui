import { FC } from 'react';
import { Icon } from '@components/icon/icon';
import { useStyles } from './member.title.styles';

export const MemberTitle: FC<{ name: string }> = ({ name }) => {
  const { root, avatar } = useStyles();

  return (
    <div className={root}>
      {/* <div className={avatar} /> */}
      <Icon icon="avatar" className={avatar} />
      {name}
    </div>
  );
};

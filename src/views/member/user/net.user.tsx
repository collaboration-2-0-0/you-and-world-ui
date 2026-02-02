import { FC } from 'react';
import { useUser } from '@hooks/useUser';
import { MemberTitle } from '@components/member/title/member.title';
import { useStyles } from '../member.styles';

export const NetUser: FC = () => {
  const { root, content } = useStyles();
  const { user } = useUser();
  const name = user?.name ? `Я (${user.name})` : 'Я';

  return (
    <div className={root} aria-hidden="true">
      <MemberTitle name={name} />
      <div className={content}>Я</div>
    </div>
  );
};

import { FC, useEffect } from 'react';
import { app } from '@components/app/app.provider';
import { useUser } from '@hooks/useUser';
import { MemberTitle } from '@components/member/title/member.title';
import { MemberInfoAll } from '@components/member/info/member.info';
import { useStyles } from '../member.styles';

export const NetUser: FC = () => {
  const { root } = useStyles();
  const { user } = useUser();
  const name = user?.name ? `Я (${user.name})` : 'Я';

  const { userNet } = app.net.useState(['userNet']);
  const { node_id } = userNet || {};

  useEffect(() => {
    if (node_id) {
      app.net.findMember(node_id);
    }
  }, [node_id]);

  return (
    <div className={root}>
      <MemberTitle name={name} photoUrl={user?.photo_url} />
      <MemberInfoAll />;
    </div>
  );
};

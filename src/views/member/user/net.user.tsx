import { FC, useEffect } from 'react';
import { app } from '@app/app.provider';
import { useUser } from '@hooks/useUser';
import { useMemberInfo } from '@hooks/useMemberInfo';
import { MemberTitle } from '@components/member/title/member.title';
import { MemberMenu } from '@components/member/menu/menu.info';
import { useStyles } from '../member.styles';

export const NetUser: FC = () => {
  const { root } = useStyles();

  const { user } = useUser();
  const name = user?.name ? `Я (${user.name})` : 'Я';

  const { userNet } = app.net.useState(['userNet']);
  const { node_id } = userNet || {};

  const member = useMemberInfo();

  useEffect(() => {
    if (node_id) {
      app.net.findMember(node_id);
    }
  }, [node_id]);

  if (node_id !== member?.get().node_id) {
    return null;
  }

  return (
    <div className={root}>
      <MemberTitle name={name} photoUrl={user?.photo_url} />
      <MemberMenu />
    </div>
  );
};

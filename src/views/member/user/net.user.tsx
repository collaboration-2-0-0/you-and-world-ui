import { FC, useEffect } from 'react';
import { app } from '@components/app/app.provider';
import { useUser } from '@hooks/useUser';
import { useMemberInfo } from '@hooks/useMemberInfo';
import { MemberTitle } from '@components/member/title/member.title';
import { MemberInfoForm } from '@components/forms/member/info/info';
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

  return (
    <div className={root}>
      <MemberTitle name={name} photoUrl={user?.photo_url} />
      {member && <MemberInfoForm member={member} />}
    </div>
  );
};

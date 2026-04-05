import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useCircle } from '@hooks/useCircle';
import { useNetMember } from '@hooks/useNetMember';
import { MemberTitle } from '@components/member/title/member.title';
import { useStyles } from '../member.styles';

export const CircleMemberIndex: FC = () => {
  useCircle();
  const { root, content } = useStyles();
  const member = useNetMember();

  if (!member) {
    return null;
  }

  return (
    <div className={root}>
      <MemberTitle name={member.member_name} photoUrl={member.photo_url} />
      <div className={content}>
        <Outlet key={Math.random()} />
      </div>
    </div>
  );
};

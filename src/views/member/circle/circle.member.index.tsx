import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useNetMember } from '@hooks/useNetMember';
import { MemberTitle } from '@components/member/title/member.title';
import { useStyles } from '../member.styles';

export const CircleMemberIndex: FC = () => {
  const { root, content } = useStyles();
  const member = useNetMember();
  if (!member) return null;

  return (
    <div className={root} aria-hidden="true">
      <MemberTitle name={member.member_name} />
      <div className={content}>
        <Outlet key={Math.random()} />
      </div>
    </div>
  );
};

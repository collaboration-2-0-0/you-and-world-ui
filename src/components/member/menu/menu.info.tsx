import { FC } from 'react';
import { useMemberInfo } from '@hooks/useMemberInfo';
import { Tabs } from '@components/controls/tabs/tabs';
import { MemberSpaces } from '@components/member/spaces/spaces';
import { MemberInfoAll } from '../info/member.info';

export const MemberMenu: FC = () => {
  const member = useMemberInfo();

  if (!member) {
    return null;
  }

  return (
    <Tabs tabNames={['Бажання', 'Простір']}>
      <MemberInfoAll member={member} />
      <MemberSpaces member={member} />
    </Tabs>
  );
};

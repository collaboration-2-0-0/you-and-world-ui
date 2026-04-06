import { FC } from 'react';
import { useMemberInfo } from '@hooks/useMemberInfo';
import { Tabs } from '@components/controls/tabs/tabs';
import { MemberInfoForm } from '@components/forms/member/info/info';
import { MemberInfoField } from '@components/forms/member/info/info.types';

export const MemberInfoAll: FC = () => {
  const member = useMemberInfo();

  if (!member) {
    return null;
  }

  return (
    <Tabs tabNames={['Бажання', 'Мета', 'Діяльність', 'Роль']}>
      <MemberInfoForm member={member} field={MemberInfoField.MEMBER_DESIRE} />
      <MemberInfoForm member={member} field={MemberInfoField.MEMBER_GOAL} />
      <MemberInfoForm member={member} field={MemberInfoField.MEMBER_ACTIVITY} />
      <MemberInfoForm member={member} field={MemberInfoField.MEMBER_ROLE} />
    </Tabs>
  );
};

import { FC } from 'react';
import { Member } from '@client/services/member.service';
import { Tabs } from '@components/controls/tabs/tabs';
import { MemberInfoForm } from '@components/forms/member/info/info';
import { MemberInfoField } from '@components/forms/member/info/info.types';

export const MemberInfoAll: FC<{ member: Member }> = ({ member }) => {
  return (
    <Tabs key={member.get().node_id} tabNames={['Бажання', 'Мета', 'Діяльність', 'Роль']}>
      <MemberInfoForm member={member} field={MemberInfoField.MEMBER_DESIRE} />
      <MemberInfoForm member={member} field={MemberInfoField.MEMBER_GOAL} />
      <MemberInfoForm member={member} field={MemberInfoField.MEMBER_ACTIVITY} />
      <MemberInfoForm member={member} field={MemberInfoField.MEMBER_ROLE} />
    </Tabs>
  );
};

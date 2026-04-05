import { useEffect } from 'react';
import { Member } from '@shared/client/services/member.service';
import { app } from '@app/app.provider';

export const useMemberInfo = (): Member | null => {
  const { member } = app.net.useState(['member']);

  useEffect(() => {
    if (!member) {
      return;
    }

    if (member.state.info) {
      return;
    }

    member
      .getInfo()
      .then()
      .catch(() => null);
  }, [member]);

  return member;
};

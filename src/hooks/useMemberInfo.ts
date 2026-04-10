import { useEffect } from 'react';
import { app } from '@app/app.provider';

export const useMemberInfo = () => {
  const { member } = app.net.useState(['member']);

  useEffect(() => {
    if (!member) {
      return;
    }

    member
      .getInfo()
      .then()
      .catch(() => null);
  }, [member]);

  return member;
};

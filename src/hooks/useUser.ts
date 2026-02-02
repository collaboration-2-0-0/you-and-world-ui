import { useEffect } from 'react';
import { app } from '@app/app.provider';
import { useNavigateTo } from './useNavigateTo';

export const useUser = () => {
  const { user } = app.account.useState(['user']);
  const { userStatus } = app.useState(['userStatus']);
  const navigate = useNavigateTo();

  useEffect(() => {
    if (!user) return;
    const pathname = localStorage.getItem('pathname');
    localStorage.removeItem('pathname');
    pathname && navigate.to(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { user, userStatus };
};

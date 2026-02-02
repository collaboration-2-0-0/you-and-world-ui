import { FC, useEffect } from 'react';
import { useStyles } from './net.styles';
import { app } from '@app/app.provider';
import { useNavigateTo } from '@hooks/useNavigateTo';

export const Net: FC = () => {
  const { root, content } = useStyles();
  const navigate = useNavigateTo();
  const { allNets, waitNets } = app.userNets.useState(['allNets', 'waitNets']);
  const [net] = allNets;

  useEffect(() => {
    if (net) {
      navigate.to('/net/1');
    } else if (waitNets.length) {
      navigate.toWaitNets();
    } else {
      navigate.to('/net/wait/create/cca1f9f0a4d3743c');
    }
  }, [navigate, net, waitNets]);

  return (
    <div className={root}>
      <div className={content}>НЕ В СПІЛЬНОТI</div>
    </div>
  );
};

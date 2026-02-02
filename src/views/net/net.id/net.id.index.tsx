import { FC } from 'react';
import { useUserNet } from '@hooks/useUserNet';
import { Outlet } from 'react-router-dom';
import { useEvents } from '@hooks/useEvents';

export const NetIdIndex: FC = () => {
  const net = useUserNet();
  useEvents('net');
  if (!net) return null;
  return <Outlet key={Math.random()} />;
};

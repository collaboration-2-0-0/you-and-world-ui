import { NetViewEnum } from '@server/types/types';
import { app } from '@app/app.provider';

export const useNetView = (netView: NetViewEnum) => {
  const { netView: curNetView } = app.getState();
  const loaded = curNetView === netView;
  !loaded && app.net.setView(netView);
  return netView;
};

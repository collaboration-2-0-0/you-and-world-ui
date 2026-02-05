import { app } from '@app/app.provider';

export const useNet = () => {
  const { userNet: net } = app.net.useState(['userNet']);
  const { allNets, nets } = app.userNets.useState(['allNets', 'nets']);

  const { circle, tree } = app.getState();

  return [net, nets, allNets, circle, tree] as const;
};

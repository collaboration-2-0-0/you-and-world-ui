import { app } from '@app/app.provider';

export const useNet = () => {
  const { userNet: net } = app.net.useState(['userNet']);
  const { allNets: nets } = app.userNets.useState(['allNets']);

  const { circle, tree } = app.getState();

  return [net, nets, circle, tree] as const;
};

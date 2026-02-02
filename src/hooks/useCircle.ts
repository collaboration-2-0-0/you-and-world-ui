import { app } from '@app/app.provider';

export const useCircle = () => {
  const { circle } = app.net.useState(['circle']);

  return circle;
};

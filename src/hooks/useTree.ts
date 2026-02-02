import { app } from '@app/app.provider';

export const useTree = () => {
  const { tree } = app.net.useState(['tree']);

  return tree;
};

import { RoutesMap } from '@constants/router.constants';
import { app } from '@app/app.provider';

export const useTgHref = () => {
  const { tg, bot } = app.getState();
  if (tg) return;
  const pathname = localStorage.getItem('pathname') || RoutesMap.ROOT;
  const hash = `#${pathname}`;
  const tgHref = `tg://resolve?domain=${bot}&start=path${btoa(hash)}`;
  return tgHref;
};

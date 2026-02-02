import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { USER_STATUS_MAP } from '@server/types/types';
import { MENU_ITEMS, MENU_NET_ITEMS } from '@constants/menu.constants';
import { RoutesMap } from '@constants/router.constants';
import { ROOT_TITLE } from '@constants/constants';
import { getMenuItems } from '@utils/menu.utils';
import { makeDynamicPathname } from '@utils/format.utils';
import { modalService } from '@services/modal.service';
import { useUser } from '@hooks/useUser';
import { useNet } from '@hooks/useNet';
import { useEventsCount } from './useEventsCount';

// const { ROOT, ACCOUNT, NET } = RoutesMap;
const { ROOT, NET } = RoutesMap;

export const useMenuItems = () => {
  const { userStatus } = useUser();
  // const [net, nets] = useNet();
  const [net] = useNet();
  const eventsCount = useEventsCount();
  const { pathname } = useLocation();

  const { name = ROOT_TITLE, net_id: netId } = net || {};

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mainMenuItems = useMemo(() => getMenuItems(MENU_ITEMS), [userStatus]);

  const netMenuItems = useMemo(() => {
    const items = getMenuItems(MENU_NET_ITEMS);
    // const { parentNets, siblingNets, childNets } = nets;
    // const { parentEvents, siblingEvents, childEvents } = getNetEvents();
    // const parentItems = createNetMenuItems(parentNets, parentEvents, 'arrowUp');
    // const siblingItems = createNetMenuItems(siblingNets, siblingEvents, 'arrowRight');
    // const childItems = createNetMenuItems(childNets, childEvents, 'arrowRight');
    // return { parentItems, siblingItems, childItems, items };
    return { items };
    // }, [nets, user, eventsCount]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userStatus]);

  // const href = ROOT;
  const href = useMemo(
    () => (netId ? makeDynamicPathname(NET.NET_ID.INDEX, netId!) : ROOT),
    [netId],
  );

  const openMainMenu = useCallback(
    () => modalService.openMenu({ items: mainMenuItems }),
    [mainMenuItems],
  );
  // const openNetMenu = useCallback(() => modalService.openMenu(netMenuItems), [netMenuItems]);
  // const showBackBtn = href !== pathname && pathname !== ACCOUNT.LOGIN;
  const showBackBtn = href !== pathname;

  const showMainMenu = USER_STATUS_MAP[userStatus] < USER_STATUS_MAP.INVITING || undefined;
  // const showNetMenu = !showMainMenu || undefined;

  return {
    name,
    href,
    netMenuItems,
    eventsCount,
    openMainMenu: showMainMenu && openMainMenu,
    // openNetMenu: showNetMenu && openNetMenu,
    showBackBtn,
  };
};

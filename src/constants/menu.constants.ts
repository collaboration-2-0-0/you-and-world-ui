import { RoutesMap } from '@constants/router.constants';
import { IMenuItem } from '@components/menu/menu.types';
import { APP_NAME } from './constants';

export const MENU_ITEMS: IMenuItem[] = [
  {
    label: `Про ${APP_NAME}`,
    href: RoutesMap.ABOUT,
    icon: 'about',
    allowForUser: 'NOT_LOGGED_IN',
  },
  {
    label: `Довідка`,
    href: RoutesMap.HELP,
    icon: 'create',
    allowForUser: 'NOT_LOGGED_IN',
  },
  {
    label: `Контакти`,
    href: RoutesMap.CONTACTS,
    icon: 'message',
    allowForUser: 'NOT_LOGGED_IN',
  },
  // {
  //   label: 'Підписка',
  //   href: RoutesMap.SUBSCRIPTION,
  //   icon: 'board',
  //   allowForUser: ['LOGGED_IN'],
  // },
  // {
  //   label: `Спільнота`,
  //   href: RoutesMap.NET.INDEX,
  //   icon: 'net',
  //   allowForUser: 'LOGGED_IN',
  // },
  {
    label: 'Налаштування',
    href: RoutesMap.ACCOUNT.INDEX,
    icon: 'account',
    allowForUser: 'NOT_CONFIRMED',
  },
];

export const MENU_NET_ITEMS: IMenuItem[] = [
  // {
  //   label: 'Підписка',
  //   href: RoutesMap.SUBSCRIPTION,
  //   icon: 'board',
  //   allowForUser: ['LOGGED_IN'],
  // },
  // {
  //   label: 'Спільнота',
  //   href: RoutesMap.NET.INDEX,
  //   icon: 'net',
  //   allowForUser: ['LOGGED_IN'],
  // },
  {
    label: 'Створити спільноту',
    href: RoutesMap.NET.CREATE,
    icon: 'create',
    allowForUser: ['LOGGED_IN'],
  },
];

export const MENU_INSIDE_NET_ITEMS: IMenuItem[] = [
  {
    label: 'Мета',
    href: RoutesMap.NET.NET_ID.GOAL,
    icon: 'goal',
    allowForUser: 'INVITING',
  },
  {
    label: 'Правила',
    href: RoutesMap.NET.NET_ID.RULES,
    icon: 'rules',
    allowForUser: 'INVITING',
  },
  {
    label: 'Інфо',
    href: RoutesMap.NET.NET_ID.INFO,
    icon: 'about',
    allowForUser: 'INSIDE_NET',
  },
  // {
  //   label: 'Board',
  //   href: RoutesMap.NET.NET_ID.BOARD,
  //   icon: 'board',
  //   allowForUser: 'INSIDE_NET',
  // },
  {
    label: 'Створити спільноту в спільноті',
    href: RoutesMap.NET.NET_ID.CREATE,
    icon: 'create',
    allowForUser: 'INSIDE_NET',
  },
  // {
  //   label: 'Чат',
  //   href: RoutesMap.NET.NET_ID.CHAT,
  //   icon: 'post',
  //   allowForUser: 'INSIDE_NET',
  // },
  {
    label: 'Запити на вхід',
    href: RoutesMap.NET.NET_ID.WAITING,
    icon: 'wait',
    allowForUser: 'INSIDE_NET',
  },
  {
    label: "Від'єднатись",
    href: RoutesMap.NET.NET_ID.LEAVE,
    icon: 'remove',
    allowForUser: 'INVITING',
  },
];

export const MENU_TREE_ITEMS: IMenuItem[] = [
  {
    label: 'Інфо',
    href: RoutesMap.NET.NET_ID.TREE.INFO,
    icon: 'about',
    allowForUser: 'INSIDE_NET',
  },
  // {
  //   label: 'Чат',
  //   href: RoutesMap.NET.NET_ID.TREE.CHAT,
  //   icon: 'post',
  //   allowForUser: 'INSIDE_NET',
  // },
];

export const MENU_CIRCLE_ITEMS: IMenuItem[] = [
  {
    label: 'Інфо',
    href: RoutesMap.NET.NET_ID.CIRCLE.INFO,
    icon: 'about',
    allowForUser: 'INSIDE_NET',
  },
  // {
  //   label: 'Чат',
  //   href: RoutesMap.NET.NET_ID.CIRCLE.CHAT,
  //   icon: 'post',
  //   allowForUser: 'INSIDE_NET',
  // },
];

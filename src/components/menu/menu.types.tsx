import { UserStatusKey } from '@server/types/types';
import { ICONS } from '@components/icon/icons';

export interface IMenuItem {
  label: string;
  href: string;
  end?: boolean;
  icon: ICONS;
  allowForUser: UserStatusKey | UserStatusKey[];
  forTg?: boolean; // default: true
  notification?: boolean;
}

export interface MenuItemProps extends IMenuItem {
  onClick: () => void;
}

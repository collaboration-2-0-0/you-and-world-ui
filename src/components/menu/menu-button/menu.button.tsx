import { FC } from 'react';
import { RoutesMap } from '@constants/router.constants';
import { IconButton } from '@components/buttons/icon.button/icon.button';

interface MenuButtonProps {
  href: string;
  openMainMenu?: () => void;
  showBackBtn: boolean;
  className?: string;
}

export const MenuButton: FC<MenuButtonProps> = (props) => {
  const { href, openMainMenu, showBackBtn, className } = props;

  return (
    <>
      {openMainMenu && !showBackBtn && (
        <IconButton icon="menu" onClick={openMainMenu} className={className} />
      )}
      {!openMainMenu && !showBackBtn && (
        <IconButton icon="home" href={RoutesMap.ROOT} className={className} />
      )}
      {showBackBtn && <IconButton icon="arrowLeft" href={href} className={className} />}
    </>
  );
};

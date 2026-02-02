import { FC } from 'react';
import { RoutesMap } from '@constants/router.constants';
import { IconButton } from '@components/buttons/icon.button/icon.button';
import { useStyles } from './menu.button.styles';

interface MenuButtonProps {
  href: string;
  openMainMenu?: () => void;
  showBackBtn: boolean;
}

export const MenuButton: FC<MenuButtonProps> = (props) => {
  const { button } = useStyles();
  const { href, openMainMenu, showBackBtn } = props;

  return (
    <>
      {openMainMenu && !showBackBtn && (
        <IconButton icon="menu" onClick={openMainMenu} className={button} />
      )}
      {!openMainMenu && !showBackBtn && (
        <IconButton icon="home" href={RoutesMap.ROOT} className={button} />
      )}
      {showBackBtn && <IconButton icon="arrowLeft" href={href} className={button} />}
    </>
  );
};

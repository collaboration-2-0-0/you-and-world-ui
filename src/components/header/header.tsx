import { FC } from 'react';
import { useMenuItems } from '@hooks/useMenuItems';
import { Button } from '@components/buttons/button/button';
import { IconButton } from '@components/buttons/icon.button/icon.button';
import { MenuButton } from '../menu/menu-button/menu.button';
import { useStyles } from './header.styles';

export const Header: FC = () => {
  const { root, titleButton, button } = useStyles();
  const { name, href, openMainMenu, openNetMenu, openInsideNetMenu, showBackBtn } = useMenuItems();

  return (
    <div className={root}>
      <MenuButton
        href={href}
        openMainMenu={openMainMenu}
        showBackBtn={showBackBtn}
        className={button}
      />
      <Button href={href} btnType="text" className={titleButton}>
        {name}
      </Button>
      {openNetMenu && (
        <>
          <IconButton icon="menu" onClick={openInsideNetMenu} className={button} />
          <IconButton
            icon="net"
            onClick={openNetMenu}
            className={button}
            // classNameIcon={eventsCount ? icon : undefined}
          />
        </>
      )}
    </div>
  );
};

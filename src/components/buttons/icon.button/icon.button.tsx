import { FC, memo, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Icon } from '@components/icon/icon';
import { ICONS } from '@components/icon/icons';
import { useStyles } from './icon.button.styles';

interface IconButtonProps {
  icon: ICONS;
  href?: string;
  end?: boolean;
  iconPosition?: 'left' | 'right';
  className?: string;
  classNameIcon?: string;
  onClick?: () => void;
}

export const IconButton: FC<PropsWithChildren<IconButtonProps>> = memo((props) => {
  const { root, withChildren } = useStyles();
  const {
    icon,
    href,
    end = true,
    iconPosition = 'left',
    className,
    classNameIcon,
    onClick,
    children,
  } = props;
  const cls = clsx(root, { [withChildren]: children }, className);

  if (href) {
    return (
      <NavLink to={href} end={end} className={cls} onClick={onClick}>
        <span>{iconPosition === 'right' && children}</span>
        <Icon icon={icon} className={classNameIcon} />
        <span>{iconPosition === 'left' && children}</span>
      </NavLink>
    );
  }

  return (
    <button className={cls} type="button" onClick={onClick}>
      <span>{iconPosition === 'right' && children}</span>
      <Icon icon={icon} className={classNameIcon} />
      <span>{iconPosition === 'left' && children}</span>
    </button>
  );
});

IconButton.displayName = 'IconButton';

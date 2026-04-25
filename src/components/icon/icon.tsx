import { FC, MouseEvent, memo, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { useStyles } from './icon.styles';
import { ICONS, ICONS_MAP } from './icons';

interface IconProps {
  icon: ICONS;
  raw?: boolean;
  className?: string;
  onClick?: ((e: MouseEvent) => void) | (() => void);
}

export const Icon: FC<PropsWithChildren<IconProps>> = memo(
  ({ icon, raw, className, ...restProps }) => {
    const classes = useStyles();
    if (!icon) {
      return null;
    }

    return (
      <i
        {...restProps}
        className={clsx('icon', classes.root, className, { raw })}
        dangerouslySetInnerHTML={{ __html: ICONS_MAP[icon] }}
      />
    );
  },
);
Icon.displayName = 'Icon';

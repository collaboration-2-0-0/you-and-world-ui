import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ mixins, vars }) => ({
    root: {
      ...mixins.size(42),
      ...mixins.flexCenter,
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'start',
    },
    withChildren: {
      ...mixins.size('auto'),
      fontWeight: vars.fontWeight.semiBold,
      textTransform: 'uppercase',
      '& .icon': {
        margin: vars.gap.S,
      },
      '& span': {
        whiteSpace: 'break-spaces',
        wordBreak: 'keep-all',
        lineClamp: 2,
        WebkitLineClamp: 2,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      },
    },
  }),
  {
    name: 'IconButton',
  },
);

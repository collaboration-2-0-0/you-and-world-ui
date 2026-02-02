import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, mixins, vars }) => ({
    root: {
      zIndex: 1,
      height: '100%',
      ...mixins.flexCenter,
      color: palette.font.light,
      background: palette.bg.first,
      padding: vars.gap.main,
    },
    titleButton: {
      flex: '1 0 0',
    },
  }),
  { name: 'Header' },
);

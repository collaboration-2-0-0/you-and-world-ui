import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, vars }) => ({
    button: {
      width: 'auto',
      height: 'auto',
      padding: 0,
      color: palette.font.light,
    },
    icon: {
      height: '100%',
      color: palette.font.second,
      animationName: 'light',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      animationDuration: vars.transition.XL,
    },
  }),
  { name: 'MenuButton' },
);

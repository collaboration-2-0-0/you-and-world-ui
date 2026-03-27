import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ vars }) => ({
    root: {
      height: '100%',
      display: 'grid',
      gap: vars.gap.SS,
      overflow: 'hidden',
    },
    tree: {
      gridTemplateRows: '80px auto',
    },
    circle: {
      gridTemplateRows: 'auto 80px',
    },
    menu: {
      alignSelf: 'center',
    },
    cards: {
      display: 'grid',
      gridTemplateRows: 'repeat(13, 80px)',
      alignItems: 'center',
      gap: vars.gap.SS,
      overflow: 'auto',
    },
  }),
  { name: 'NetView' },
);

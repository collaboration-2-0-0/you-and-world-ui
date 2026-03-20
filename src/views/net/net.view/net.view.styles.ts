import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ vars }) => ({
    root: {
      height: '100%',
      display: 'grid',
      gap: vars.gap.S,
      overflow: 'hidden',
    },
    cards: {
      display: 'grid',
      gridTemplateRows: 'repeat(13, minmax(80px, 1fr))',
      alignItems: 'center',
      gap: vars.gap.SS,
      overflow: 'auto',
    },
  }),
  { name: 'NetView' },
);

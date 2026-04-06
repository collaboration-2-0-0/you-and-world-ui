import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ vars }) => ({
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: vars.gap.L,
    },
  }),
  { name: 'Member' },
);

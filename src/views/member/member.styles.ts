import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ vars }) => ({
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: vars.gap.L,
    },
    content: {
      flex: '1 0 0',
      marginTop: 60,
    },
  }),
  { name: 'Member' },
);

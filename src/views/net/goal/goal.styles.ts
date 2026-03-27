import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ vars }) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: `0 ${vars.gap.L}`,
    },
  }),
  { name: 'NetGoal' },
);

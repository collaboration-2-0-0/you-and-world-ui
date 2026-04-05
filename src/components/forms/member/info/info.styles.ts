import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ vars }) => ({
    root: {
      height: '100%',
      display: 'grid',
      gridTemplateRows: '1fr 1fr 1fr 1fr',
      gap: vars.gap.S,
    },
  }),
  { name: 'MemberInfo' },
);

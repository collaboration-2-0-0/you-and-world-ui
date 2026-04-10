import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ vars }) => ({
    link: {
      marginTop: 50,
    },
    netName: {
      marginTop: 50,
    },
    buttons: {
      display: 'grid',
      gridTemplateRows: '2fr 1fr 2fr',
      gap: 5,
      marginTop: vars.gap.XL,
      alignItems: 'end',
    },
  }),
  { name: 'NetInfo' },
);

import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'strech',
      '& button': {
        margin: '40px 20px',
        width: 'initial',
      },
    },
  },
  { name: 'Subscription' },
);

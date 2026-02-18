import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette }) => ({
    root: {
      color: palette.add.main,
      '& span': {
        color: palette.first.main,
      },
    },
  }),
  { name: 'Contacts' },
);

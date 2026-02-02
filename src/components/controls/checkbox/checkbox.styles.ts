import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, vars }) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: vars.fontSize.L,
      padding: '10px 0',
      '& label': {
        color: palette.add.main,
      },
      '& input': {
        width: 20,
        height: 20,
      },
    },
  }),
  { name: 'Checkbox' },
);

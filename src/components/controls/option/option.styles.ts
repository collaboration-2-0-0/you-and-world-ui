import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, vars }) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: vars.fontSize.M,
      padding: '5px 0',
      '& label': {
        color: palette.first.main,
      },
      '& .ant-checkbox-checked .ant-checkbox-inner': {
        background: palette.first.main,
      },
      '& .ant-checkbox-inner': {
        width: 20,
        height: 20,
        '&:after': {
          height: 13,
        },
      },
    },
  }),
  { name: 'Option' },
);

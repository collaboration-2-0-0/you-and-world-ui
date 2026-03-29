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
        '--ant-color-primary': palette.first.main,
        '--ant-color-primary-hover': palette.first.light,
      },
      '& .ant-checkbox': {
        width: 18,
        height: 18,
        '&:after': {
          height: 12,
        },
      },
    },
  }),
  { name: 'Option' },
);

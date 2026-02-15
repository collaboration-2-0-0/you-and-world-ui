import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ vars, palette }) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: vars.gap.S,
      padding: vars.gap.S,
      background: 'rgb(0,0, 0, 0.03)',
      borderRadius: vars.radius.main,
      '& span': {
        userSelect: 'text',
      },
      '& button': {
        fontSize: vars.fontSize.M,
      },
    },
    name: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: vars.gap.M,
      width: '100%',
      '& span': {
        fontSize: vars.fontSize.M,
        color: palette.add.main,
      },
      '& a': {
        color: palette.light.main,
        background: palette.first.medium,
        borderRadius: 100,
        width: 24,
        height: 24,
        '& i': {
          widht: 18,
          height: 18,
        },
      },
    },
    comment: {
      color: palette.first.main,
      fontSize: vars.fontSize.M,
    },
  }),
  { name: 'WaitingItem' },
);

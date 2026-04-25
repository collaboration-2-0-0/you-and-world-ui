import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, vars }) => ({
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: vars.gap.S,
    },
    btns: {
      display: 'flex',
      background: palette.first.extraLight,
      padding: vars.gap.S,
      borderRadius: vars.gap.S,
      '& button': {
        border: '1px solid',
        borderColor: palette.light.main,
        borderRadius: vars.gap.SS,
      },
      '& button:not(.active)': {
        paddingRight: vars.gap.S,
        paddingLeft: vars.gap.S,
        margin: '0 4px',
      },
      '& button.active': {
        paddingRight: vars.gap.S,
        paddingLeft: vars.gap.S,
        margin: '0 4px',
        color: palette.first.light,
        background: palette.font.light,
      },
    },
    tabs: {
      flex: '1 0 0',
      '& > *': {
        height: '100%',
      },
      '& > *:not(.active)': {
        display: 'none',
      },
    },
  }),
  { name: 'Tabs' },
);

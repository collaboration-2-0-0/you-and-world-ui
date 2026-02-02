import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, vars, mixins }) => ({
    root: {
      width: '100%',
      padding: `${vars.gap.S} ${vars.gap.S}`,
      color: palette.font.light,
      background: palette.first.extraLight,
      borderRadius: vars.radius.S,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontWeight: vars.fontWeight.semiBold,
      // position: 'relative',
      // left: '50%',
      // transform: 'translateX(-50%)',

      display: 'flex',
      '& button': {
        border: '1px solid',
        borderColor: palette.light.main,
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
    section: {
      ...mixins.flexCenter,
    },
    button: {
      ...mixins.size(28),
      color: 'currentColor',
      marginLeft: `calc(${vars.gap.main} - ${vars.gap.SS} / 2)`,
      borderRadius: 100,
      '&.active': {
        color: palette.font.light,
        background: palette.first.light,
      },
    },
  }),
  { name: 'NetSubmenu' },
);

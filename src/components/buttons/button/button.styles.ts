import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, mixins, vars }) => ({
    root: {
      ...mixins.size('100%', 36),
      ...mixins.flexCenter,
      background: palette.bg.add,
      color: palette.font.light,
      padding: vars.gap.SS,
      borderRadius: vars.radius.S,
      textTransform: 'uppercase',
      cursor: 'pointer',
      '&:not(.text)': {
        boxShadow: '6px 6px 6px 0px rgba(0, 0, 0, 0.2)',
      },
      '&:link, &:visited': {
        color: palette.font.light,
      },
      '&.secondary': {
        background: palette.bg.second,
      },
      '&.telegram': {
        background: palette.bg.first,
      },
      '&.refuse': {
        background: palette.bg.dark,
      },
      '&.text': {
        ...mixins.size('auto'),
        display: 'block',
        background: 'none',
        padding: 0,
        margin: `0 ${vars.gap.main}`,
        fontWeight: vars.fontWeight.bold,
        fontSize: vars.fontSize.M,
        lineHeight: vars.lineHeight.dense,
      },
      '&:disabled': {
        opacity: 0.5,
      },
    },
  }),
  {
    name: 'Button',
  },
);

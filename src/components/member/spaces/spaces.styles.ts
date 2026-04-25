import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, vars }) => ({
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: vars.gap.S,
      marginBottom: vars.gap.M,
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      gap: vars.gap.S,
      padding: `${vars.gap.SS} ${vars.gap.S}`,
      borderRadius: vars.radius.S,
      border: `1px solid ${palette.add.main}aa`,
      background: `${palette.add.main}22`,
    },
    name: {
      flex: 1,
      fontWeight: vars.fontWeight.semiBold,
      fontSize: vars.fontSize.M,
      color: palette.add.main,
      position: 'relative',
      '&:hover $description': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    description: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: 0,
      zIndex: 10,
      background: palette.dark.main,
      color: palette.font.light,
      fontSize: vars.fontSize.S,
      borderRadius: vars.radius.SS,
      padding: `${vars.gap.SS} ${vars.gap.S}`,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      opacity: 0,
      transform: 'translateY(4px)',
      transition: `opacity ${vars.transition.quick}, transform ${vars.transition.quick}`,
    },
    actions: {
      flexShrink: 0,
      '& button': {
        width: 32,
        height: 32,
      },
      '& .icon': {
        color: `${palette.add.main}aa`,
      },
    },
  }),
  { name: 'MemberSpaces' },
);

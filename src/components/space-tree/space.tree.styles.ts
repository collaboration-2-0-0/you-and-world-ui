import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, vars }) => ({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    node: {
      display: 'flex',
      flexDirection: 'column',
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      gap: vars.gap.S,
      padding: `${vars.gap.SS} ${vars.gap.S}`,
      borderRadius: vars.radius.SS,
      cursor: 'pointer',
      color: palette.font.second,
      transition: `background ${vars.transition.quick}`,
      userSelect: 'none',
      '&:hover': {
        background: `${palette.add.main}22`,
      },
    },
    toggle: {
      flexShrink: 0,
      width: 20,
      height: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: palette.first.main,
      transition: `transform ${vars.transition.quick}`,
      '&.expanded': {
        transform: 'rotate(90deg)',
      },
    },
    togglePlaceholder: {
      flexShrink: 0,
      width: 20,
    },
    dot: {
      flexShrink: 0,
      width: 24,
      height: 24,
      borderRadius: '50%',
      border: `2px solid ${palette.first.light}`,
      background: palette.light.main,
    },
    name: {
      fontWeight: vars.fontWeight.semiBold,
      fontSize: 20,
      color: palette.font.first,
      flex: 1,
      position: 'relative',
    },
    description: {
      position: 'absolute',
      bottom: 'calc(100% + 6px)',
      left: 0,
      zIndex: 10,
      background: palette.dark.main,
      color: palette.font.light,
      fontSize: vars.fontSize.SS,
      borderRadius: vars.radius.SS,
      padding: `${vars.gap.SS} ${vars.gap.S}`,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      opacity: 0,
      transform: 'translateY(4px)',
      transition: `opacity ${vars.transition.quick}, transform ${vars.transition.quick}`,
      '$row:hover &': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    children: {
      display: 'flex',
      flexDirection: 'column',
      borderLeft: `2px solid ${palette.first.extraLight}`,
      marginLeft: vars.gap.M,
    },
  }),
  { name: 'SpaceTree' },
);

import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, vars, mixins }) => ({
    root: {
      height: 60,
      display: 'flex',
      alignItems: 'center',
      gap: vars.gap.S,
      padding: vars.gap.S,
      // border: `2px solid ${palette.add.main}`,
      borderRadius: vars.gap.main,
      // background: palette.light.main,
      color: palette.first.main,
      fontWeight: vars.fontWeight.semiBold,
    },
    avatar: {
      ...mixins.size(54),
      // border: `1px solid ${palette.add.main}`,
      // borderRadius: 100,
    },
  }),
  { name: 'MemberTitle' },
);

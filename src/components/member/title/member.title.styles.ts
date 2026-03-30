import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, vars, mixins }) => ({
    root: {
      height: 60,
      display: 'flex',
      alignItems: 'center',
      gap: vars.gap.S,
      padding: vars.gap.S,
      borderRadius: vars.gap.main,
      color: palette.first.main,
      fontWeight: vars.fontWeight.semiBold,
    },
    avatar: {
      ...mixins.size(54),
    },
  }),
  { name: 'MemberTitle' },
);

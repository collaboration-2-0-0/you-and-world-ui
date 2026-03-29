import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(
  ({ palette, mixins }) => ({
    root: {
      gridArea: 'avatar',
      ...mixins.size(54),
      color: palette.first.extraLight,
      borderRadius: 100,
      overflow: 'hidden',
    },
    photo: {
      border: `1px solid ${palette.first.main}`,
    },
  }),
  { name: 'MemberCard' },
);

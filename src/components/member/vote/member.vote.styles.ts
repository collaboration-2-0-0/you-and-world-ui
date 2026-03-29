import { createUseStyles } from 'react-jss';
import { MEMBER_STATUS_ENUM } from '@client/constants';

export const useStyles = createUseStyles(
  ({ palette, vars, mixins }) => ({
    root: {
      gridArea: 'status',
      ...mixins.size('100%'),
      ...mixins.flexCenter,
      color: palette.dark.extraLight,
      border: '1px solid',
      borderRadius: vars.radius.S,
      fontSize: vars.fontSize.S,
      fontWeight: vars.fontWeight.semiBold,
      letterSpacing: vars.letterGap.XL,
      background: palette.bg.disabled,
      display: 'none',
      boxShadow: vars.boxShadow.smallButton,
      '&.voteCount': {
        background: 'none',
        color: palette.font.add,
      },
      '&.vote': {
        background: palette.add.main,
        color: palette.font.light,
      },
    },
    [MEMBER_STATUS_ENUM.ACTIVE]: {
      display: 'flex',
    },
  }),
  { name: 'MemberVote' },
);

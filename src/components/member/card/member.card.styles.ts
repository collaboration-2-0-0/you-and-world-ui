import { createUseStyles } from 'react-jss';
import { MEMBER_STATUS_ENUM } from '@client/constants';

export const useStyles = createUseStyles(
  ({ palette, vars }) => ({
    root: {
      display: 'grid',
      gridTemplate: `
        "avatar address status"
        "avatar name dislike"
      `,
      gridTemplateColumns: '50px 1fr 80px',
      gridTemplateRows: '1fr 1fr',
      alignItems: 'center',
      padding: vars.gap.S,
      color: palette.first.dark,
      border: `1px solid ${palette.first.light}`,
      borderRadius: vars.radius.S,
      background: palette.light.main,
      cursor: 'pointer',
      height: '100%',
      gridColumnGap: vars.gap.S,
      gridRowGap: vars.gap.S,
    },
    name: {
      gridArea: 'name',
      fontWeight: vars.fontWeight.semiBold,
      letterSpacing: 0.5,
    },
    [MEMBER_STATUS_ENUM.ACTIVE]: {},
    [MEMBER_STATUS_ENUM.CONNECTED]: {},
    [MEMBER_STATUS_ENUM.INVITED]: {},
    [MEMBER_STATUS_ENUM.FREE]: {
      '& $avatar': {
        display: 'none',
      },
      '& $name': {
        display: 'none',
      },
    },
    [MEMBER_STATUS_ENUM.EMPTY]: {
      '& $avatar': {
        display: 'none',
      },
      '& $name': {
        display: 'none',
      },
      background: `${palette.first.main}05`,
    },
    [MEMBER_STATUS_ENUM.UNAVAILABLE]: {
      opacity: 0,
    },
  }),
  { name: 'MemberCard' },
);

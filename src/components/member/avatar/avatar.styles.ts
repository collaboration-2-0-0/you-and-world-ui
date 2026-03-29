import { createUseStyles } from 'react-jss';
import { MEMBER_STATUS_ENUM } from '@shared/client/constants';

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
    [MEMBER_STATUS_ENUM.ACTIVE]: {},
    [MEMBER_STATUS_ENUM.CONNECTED]: {},
    [MEMBER_STATUS_ENUM.INVITED]: {},
    [MEMBER_STATUS_ENUM.FREE]: {
      display: 'none',
    },
    [MEMBER_STATUS_ENUM.EMPTY]: {
      display: 'none',
    },
  }),
  { name: 'MemberCard' },
);

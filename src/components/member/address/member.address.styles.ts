import { createUseStyles } from 'react-jss';
import { MEMBER_STATUS_ENUM } from '@client/constants';

export const useStyles = createUseStyles(
  {
    root: {
      gridArea: 'address',
      display: 'none',
    },
    [MEMBER_STATUS_ENUM.ACTIVE]: {},
    [MEMBER_STATUS_ENUM.CONNECTED]: {},
    [MEMBER_STATUS_ENUM.INVITED]: {},
    [MEMBER_STATUS_ENUM.FREE]: {},
    [MEMBER_STATUS_ENUM.EMPTY]: {},
  },
  { name: 'MemberAddress' },
);

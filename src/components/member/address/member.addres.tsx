import { FC } from 'react';
import clsx from 'clsx';
import { MemberStatusKeys } from '@shared/types/api';
import { useStyles } from './member.address.styles';

interface MemberAddressProps {
  memberStatus: MemberStatusKeys;
}

export const MemberAddress: FC<MemberAddressProps> = (props) => {
  const { memberStatus } = props;
  const { root, [memberStatus]: status } = useStyles();

  return (
    <div className={clsx(root, status)}>
      <span>0-0-0-0</span>
    </div>
  );
};

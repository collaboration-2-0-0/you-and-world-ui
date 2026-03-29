import { FC } from 'react';
import clsx from 'clsx';
import { MemberStatusKeys } from '@shared/types/api';
import { Icon } from '@components/icon/icon';
import { useStyles } from './avatar.styles';

interface MemberAvatarProps {
  memberStatus: MemberStatusKeys;
  photoUrl?: string | null;
}

export const MemberAvatar: FC<MemberAvatarProps> = ({ memberStatus, photoUrl }) => {
  const { root, photo, [memberStatus]: status } = useStyles();

  if (!photoUrl) {
    return <Icon icon="avatar" className={clsx(root, status)} />;
  }

  return (
    <div className={clsx(root, photo, status)}>
      <img src={photoUrl} />
    </div>
  );
};

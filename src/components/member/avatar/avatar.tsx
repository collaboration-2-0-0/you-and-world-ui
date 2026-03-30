import { FC } from 'react';
import clsx from 'clsx';
import { Icon } from '@components/icon/icon';
import { useStyles } from './avatar.styles';

interface MemberAvatarProps {
  photoUrl?: string | null;
  className?: string;
}

export const MemberAvatar: FC<MemberAvatarProps> = ({ photoUrl, className }) => {
  const { root, photo } = useStyles();

  if (!photoUrl) {
    return <Icon icon="avatar" className={clsx(root, className)} />;
  }

  return (
    <div className={clsx(root, photo, status)}>
      <img src={photoUrl} />
    </div>
  );
};

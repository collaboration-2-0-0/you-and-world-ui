import { FC } from 'react';
import clsx from 'clsx';
import { Icon } from '@components/icon/icon';
import { useStyles } from './avatar.styles';

interface MemberAvatarProps {
  photoUrl?: string | null;
}

export const MemberAvatar: FC<MemberAvatarProps> = ({ photoUrl }) => {
  const { root, photo } = useStyles();

  if (!photoUrl) {
    return <Icon icon="avatar" className={root} />;
  }

  return (
    <div className={clsx(root, photo)}>
      <img src={photoUrl} />
    </div>
  );
};

import { FC } from 'react';
import { MemberAvatar } from '../avatar/avatar';
import { useStyles } from './member.title.styles';

interface MemberTitleProps {
  name: string;
  photoUrl?: string | null;
}

export const MemberTitle: FC<MemberTitleProps> = (props) => {
  const { root } = useStyles();
  const { photoUrl, name } = props;

  return (
    <div className={root}>
      <MemberAvatar photoUrl={photoUrl} />
      {name}
    </div>
  );
};

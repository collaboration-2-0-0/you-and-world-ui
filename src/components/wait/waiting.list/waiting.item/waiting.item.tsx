import { FC } from 'react';
import { INetWaiting } from '@common/types/net.types';
import { makeTgUserUrl } from '@utils/format.utils';
import { Button } from '@components/buttons/button/button';
import { IconButton } from '@components/buttons/icon.button/icon.button';
import { useStyles } from './waiting.item.styles';

interface WaitingItemProps {
  item: INetWaiting;
  onClick: (userId: number) => void;
}

export const WaitingItem: FC<WaitingItemProps> = (props) => {
  const { root, ...cls } = useStyles();
  const { item, onClick } = props;
  const { user_id, name, comment, username } = item;

  return (
    <li className={root}>
      <div className={cls.name}>
        <span>{name}</span>
        {username && <IconButton icon="telegram" href={makeTgUserUrl(username)} />}
      </div>

      <span className={cls.comment}>{comment}</span>

      <Button btnType="secondary" onClick={() => onClick(user_id)}>
        Надіслати запрошення
      </Button>
    </li>
  );
};

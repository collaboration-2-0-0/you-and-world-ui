import { FC } from 'react';
import { INetWaiting } from '@server/types/net.types';
import { Button } from '@components/buttons/button/button';
import { useStyles } from './waiting.item.styles';

interface WaitingItemProps {
  item: INetWaiting;
  onClick: (userId: number) => void;
}

export const WaitingItem: FC<WaitingItemProps> = (props) => {
  const { root } = useStyles();
  const { item, onClick } = props;
  const { user_id, name, comment } = item;

  return (
    <li className={root}>
      <span>{name}</span>
      <span>{comment}</span>
      <Button btnType="secondary" onClick={() => onClick(user_id)}>
        Надіслати запрошення
      </Button>
    </li>
  );
};

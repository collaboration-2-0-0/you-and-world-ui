import { FC } from 'react';
import { useWaitingList } from '../../../hooks/useWaitingList';
import { WaitingItem } from './waiting.item/waiting.item';
import { useStyles } from './waiting.list.styles';

export const WaitingList: FC = () => {
  const { root, list } = useStyles();
  const { waiting, handleClick } = useWaitingList();

  const itemsJsx = waiting.map((item, i) => (
    <WaitingItem key={i} item={item} onClick={handleClick} />
  ));

  return (
    <div className={root}>
      <div className={list}>{itemsJsx}</div>
    </div>
  );
};

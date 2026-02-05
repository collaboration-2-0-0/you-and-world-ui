import { FC } from 'react';
import { APP_NAME } from '@constants/constants';
import { useStyles } from './footer.styles';

export const Footer: FC = () => {
  const { root } = useStyles();
  return <div className={root}>{APP_NAME}</div>;
};

import { FC } from 'react';
import { PROJECT_NAME } from '@constants/constants';
import { useStyles } from './footer.styles';

export const Footer: FC = () => {
  const { root } = useStyles();
  return <div className={root}>{PROJECT_NAME}</div>;
};

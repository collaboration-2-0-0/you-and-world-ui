import { FC } from 'react';
import { app } from '@components/app/app.provider';
import { Icon } from '@components/icon/icon';
import { useStyles } from './loading.styles';

export const Loading: FC = () => {
  const { root, icon } = useStyles();
  const loading = app.apiService.useLoading(200, 200);

  if (!loading) return null;

  return (
    <div className={root}>
      <Icon icon="spinner" className={icon} />
    </div>
  );
};

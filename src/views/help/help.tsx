import { FC } from 'react';
import { FormContainer } from '@components/containers/form.container';
import { useStyles } from './help.styles';

export const Help: FC = () => {
  const { root } = useStyles();

  return (
    <FormContainer title="ДОВІДКА">
      <div className={root}>
        <p>Довідка про функції бота</p>
      </div>
    </FormContainer>
  );
};

import { FC } from 'react';
import { app } from '@app/app.provider';
import { FormContainer } from '@components/containers/form.container';
import { NetCreateForm } from '@components/forms/net/create/create';

export const NetCreate: FC = () => {
  const { net_id: netId } = app.getState().userNet || {};

  const title = netId ? 'Створити спільноту в спільноті' : 'Створити спільноту';
  return (
    <FormContainer title={title}>
      <NetCreateForm />
    </FormContainer>
  );
};

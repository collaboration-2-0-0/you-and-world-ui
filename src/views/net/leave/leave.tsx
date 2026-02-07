import { FC } from 'react';
import { FormContainer } from '@components/containers/form.container';
import { NetLeaveForm } from '@components/forms/net/leave/leave';

export const NetLeave: FC = () => {
  return (
    <FormContainer title="Від'єднатись від спільноти">
      <NetLeaveForm />
    </FormContainer>
  );
};

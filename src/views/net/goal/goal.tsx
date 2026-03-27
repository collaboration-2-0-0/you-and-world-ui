import { FC } from 'react';
import { FormContainer } from '@components/containers/form.container';
import { NetGoalForm } from '@components/forms/net/goal/goal';
import { useStyles } from './goal.styles';

export const NetGoal: FC = () => {
  const { container } = useStyles();

  return (
    <FormContainer title="Мета спільноти" className={container}>
      <NetGoalForm />
    </FormContainer>
  );
};

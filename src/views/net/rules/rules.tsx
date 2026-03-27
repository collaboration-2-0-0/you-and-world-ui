import { FC } from 'react';
import { FormContainer } from '@components/containers/form.container';
import { NetRulesForm } from '@components/forms/net/rules/rules';
import { useStyles } from './rules.styles';

export const NetRules: FC = () => {
  const { container } = useStyles();

  return (
    <FormContainer title="Правила спільноти" className={container}>
      <NetRulesForm />
    </FormContainer>
  );
};

import { FC } from 'react';
import { FormContainer } from '@components/containers/form.container';
import { useStyles } from './contacts.styles';

export const Contacts: FC = () => {
  const { root } = useStyles();

  return (
    <FormContainer title="КОНТАКТИ">
      <div className={root}>
        <p>{`Контакти для зв'язку`}</p>
      </div>
    </FormContainer>
  );
};

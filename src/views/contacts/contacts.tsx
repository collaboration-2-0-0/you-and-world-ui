import { FC } from 'react';
import { FormContainer } from '@components/containers/form.container';
import { useStyles } from './contacts.styles';

export const Contacts: FC = () => {
  const { root } = useStyles();

  return (
    <FormContainer title="КОНТАКТИ">
      <div className={root}>
        <a href="mailto://m.vaskivnyuk@gmail.com">
          Електронна пошта: <span>m.vaskivnyuk@gmail.com</span>
        </a>
      </div>
    </FormContainer>
  );
};

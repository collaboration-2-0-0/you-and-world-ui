import { FormContainer } from '@components/containers/form.container';
import { Subscription } from '@components/subscription/subscription';

export const SubscriptionView = () => {
  return (
    <FormContainer title="ПІДПИСКА НА ПОВІДОМЛЕННЯ">
      <Subscription />
    </FormContainer>
  );
};

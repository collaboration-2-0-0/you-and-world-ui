import { useCallback, useEffect } from 'react';
import { ISubscription } from '@shared/local/imports';
import { MessagesMap } from '@constants/messages';
import { modalService } from '@services/modal.service';
import { OptionProps } from '@components/controls/option/option';
import { app } from '../app/app.provider';

const showUpdateSuccess = () => modalService.showMessage(MessagesMap.SUBSCRIPTION_UPDATE_SUCCES);
const showRemoveSuccess = () => modalService.showMessage(MessagesMap.SUBSCRIPTION_REMOVE_SUCCES);

export const useSubscription = () => {
  const { status, subscriptions } = app.net.subscription.useState(['status', 'subscriptions']);

  const remove = useCallback((subscription?: ISubscription) => {
    app.net.subscription
      .remove(subscription)
      .then(showRemoveSuccess)
      .catch(() => {});
  }, []);

  const update: OptionProps<ISubscription>['onChange'] = useCallback(
    (v, checked) => {
      if (checked) {
        app.net.subscription
          .update(v)
          .then(showUpdateSuccess)
          .catch(() => {});
      } else {
        remove(v);
      }
    },
    [remove],
  );

  useEffect(() => {
    if (status === 'INIT') {
      app.net.subscription.read().catch(() => null);
    }
  }, [status]);

  return { update, remove, subscriptions };
};

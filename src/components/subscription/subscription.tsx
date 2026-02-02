import { useStyles } from './subscription.styles';
import { Button } from '@components/buttons/button/button';
import { useSubscription } from './useSubscription';
import { SubscriptionSubjectKeys } from '@server/types/subscription.types';
import { Subject } from './subject/subject';

export const Subscription = () => {
  const { root } = useStyles();
  const { update, remove, subscriptions } = useSubscription();

  const subjectsJsx = Object.entries(subscriptions).map(([subject, types]) => (
    <Subject
      key={subject}
      subject={subject as SubscriptionSubjectKeys}
      types={types}
      update={update}
    />
  ));

  const enabled = Object.values(subscriptions).reduce((acc, it) => {
    return acc || Object.values(it).reduce((acc2, it2) => acc2 || it2, false);
  }, false);

  return (
    <div className={root}>
      {subjectsJsx}
      <Button type="button" btnType="telegram" onClick={() => remove()} disabled={!enabled}>
        скасувати підписку
      </Button>
    </div>
  );
};

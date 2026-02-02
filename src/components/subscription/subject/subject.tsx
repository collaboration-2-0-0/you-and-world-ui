import { useStyles } from './subject.styles';
import { Option } from '@components/controls/option/option';
import {
  ISubscription,
  SubscriptionSubjectKeys,
  SubscriptionTypeKeys,
} from '@server/types/subscription.types';
import { FC } from 'react';

interface SubjectProps {
  subject: SubscriptionSubjectKeys;
  types: Record<SubscriptionTypeKeys, boolean>;
  update: (subscription: ISubscription, checked: boolean) => void;
}

const SUBJECTS: Record<SubscriptionSubjectKeys, string> = {
  REPORT: 'Звіти за період та поточні потреби',
  URGENT: 'Термінові новини та оголошення',
};

const TYPES: Record<SubscriptionTypeKeys, string> = {
  ON_UPDATE: 'Відразу',
  ONE_WEEK: 'Щотижня',
  TWO_WEEK: 'Раз на два тижні',
  ONE_MONTH: 'Щомісяця',
};

export const Subject: FC<SubjectProps> = (props) => {
  const { root, title } = useStyles();
  const { subject, update } = props;

  let types = Object.entries(props.types);
  if (subject === 'URGENT') {
    types = types.filter(([type]) => type === 'ON_UPDATE');
  }

  const optionsJsx = types.map(([type, checked]) => (
    <Option
      key={type}
      id={`${subject}-${type}`}
      label={TYPES[type as SubscriptionTypeKeys]}
      value={{ subject, type }}
      onChange={update}
      checked={checked}
    />
  ));

  return (
    <div className={root}>
      <div className={title}>{SUBJECTS[subject]}</div>
      {optionsJsx}
    </div>
  );
};

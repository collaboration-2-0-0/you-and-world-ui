import { FC } from 'react';
import * as T from '@shared/local/imports';
import { Option } from '@components/controls/option/option';
import { useStyles } from './subject.styles';

interface SubjectProps {
  subject: T.SubscriptionSubjectKeys;
  types: Record<T.SubscriptionTypeKeys, boolean>;
  update: (subscription: T.ISubscription, checked: boolean) => void;
}

// const SUBJECTS: Record<SubscriptionSubjectKeys, string> = {
//   REPORT: 'Звіти за період та поточні потреби',
//   URGENT: 'Новини та оголошення',
// };

const TYPES: Record<T.SubscriptionTypeKeys, string> = {
  ON_UPDATE: 'Новини та оголошення',
  ONE_WEEK: 'Щотижня',
  TWO_WEEK: 'Раз на два тижні',
  ONE_MONTH: 'Щомісяця',
};

export const Subject: FC<SubjectProps> = (props) => {
  const { root, option } = useStyles();
  const { subject, update } = props;

  let types = Object.entries(props.types);
  if (subject === 'URGENT') {
    types = types.filter(([type]) => type === 'ON_UPDATE');
  }

  const optionsJsx = types.map(([type, checked]) => (
    <Option
      key={type}
      id={`${subject}-${type}`}
      label={TYPES[type as T.SubscriptionTypeKeys]}
      value={{ subject, type }}
      onChange={update}
      checked={checked}
      className={option}
    />
  ));

  return (
    <div className={root}>
      {/* <div className={title}>{SUBJECTS[subject]}</div> */}
      {optionsJsx}
    </div>
  );
};

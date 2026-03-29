import { FC } from 'react';
import { FormContainer } from '@components/containers/form.container';
import { app } from '@app/app.provider';
import { Table } from '@components/table/table';

export const CircleInfo: FC = () => {
  const { userNetData, circle } = app.getState();

  const notEmpty = circle.length;
  const userCountOfMembers = userNetData!.count_of_members;

  const count = {
    title: 'Кількість учасників всього',
    value: notEmpty ? circle[0].count_of_members : userCountOfMembers,
  };

  const userCount = {
    title: 'Я',
    value: userCountOfMembers,
  };

  const data = circle
    .filter(({ memberStatus }, i) => i > 0 && memberStatus === 'ACTIVE')
    .map(({ member_name: title, count_of_members: v }) => ({ title, value: v }));

  const items = [count];
  items.push(userCount, ...data);

  return (
    <FormContainer title="Інформація про коло">
      <Table items={items} />
    </FormContainer>
  );
};

import { FC } from 'react';
import { FormContainer } from '@components/containers/form.container';
import { app } from '@app/app.provider';
import { Table } from '@components/table/table';

export const TreeInfo: FC = () => {
  const { userNet, tree } = app.net.state;

  const count = {
    title: 'Всього',
    value: userNet!.count_of_members,
  };

  const data = tree
    .filter(({ memberStatus }) => memberStatus === 'ACTIVE')
    .map(({ member_name: title, count_of_members: value }) => ({ title, value }));

  const items = [count, ...data];

  return (
    <FormContainer title="Інформація про дерево">
      <Table items={items} />
    </FormContainer>
  );
};

import { FC } from 'react';
import { FormContainer } from '@components/containers/form.container';
import { app } from '@app/app.provider';
import { Table } from '@components/table/table';

export const TreeInfo: FC = () => {
  const { userNetData, tree } = app.getState();

  const count = {
    title: 'Кількість учасників всього',
    value: userNetData!.count_of_members,
  };

  const data = tree
    .filter(({ memberStatus }) => memberStatus === 'ACTIVE')
    .map(({ member_name: title, count_of_members: v }) => ({ title, value: v }));

  const items = [count, ...data];

  return (
    <FormContainer title="Інформація про дерево">
      <Table items={items} />
    </FormContainer>
  );
};

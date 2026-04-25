import { FC, useEffect, useState } from 'react';
import { ISpace } from '@shared/types/db';
import { app } from '@app/app.provider';
import { SpaceTree } from '@components/space-tree/space.tree';
import { FormContainer } from '@components/containers/form.container';

interface SpaceTreeSelectProps {
  onSelect: (space: ISpace) => void;
}

export const SpaceTreeSelect: FC<SpaceTreeSelectProps> = ({ onSelect }) => {
  const [treeData, setTreeData] = useState<ISpace[]>([]);

  useEffect(() => {
    app.api.space
      .getTree({ parent_space_id: null, depth: null })
      .then(setTreeData)
      .catch(() => null);
  }, []);

  return (
    <FormContainer title="обрати простір" modal>
      <SpaceTree data={treeData} onClick={onSelect} />
    </FormContainer>
  );
};

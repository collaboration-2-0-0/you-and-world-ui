import { FC, useCallback, useEffect, useState } from 'react';
import { FormContainer } from '@components/containers/form.container';
import { SpaceTree } from '@components/space-tree/space.tree';
import { ISpace } from '@shared/types/db';
import { app } from '@components/app/app.provider';

export const SpacePage: FC = () => {
  const [treeData, setTreeData] = useState<ISpace[]>([]);

  const handleClick = useCallback((node: ISpace) => {
    console.log('space node clicked', node);
  }, []);

  useEffect(() => {
    app.api.space
      .getTree({ parent_space_id: null, depth: null })
      .then(setTreeData)
      .catch(() => null);
  }, []);

  return (
    <FormContainer title="ДОВІДНИК ПРОСТОРІВ">
      <SpaceTree data={treeData} onClick={handleClick} />
    </FormContainer>
  );
};

import { FC } from 'react';
import { NetStructureView } from '@components/net-structure-view/net.structure.view';
import { net } from './utils';
import { useStyles } from './structure.styles';

export const NetStructure: FC = () => {
  const { root } = useStyles();

  return (
    <div className={root}>
      <NetStructureView data={net} maxNodeLevel={2} nodeDiameter={8} />
    </div>
  );
};

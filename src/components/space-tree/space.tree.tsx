import { FC, useCallback, useMemo, useState } from 'react';
import { ISpace } from '@shared/types/db';
import { buildTree } from './space.tree.utils';
import { TreeNodeView } from './space.tree.node';
import { useStyles } from './space.tree.styles';

interface SpaceTreeProps {
  data: ISpace[];
  onClick: (node: ISpace) => void;
}

export const SpaceTree: FC<SpaceTreeProps> = ({ data, onClick }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const tree = useMemo(() => buildTree(data), [data]);

  const handleToggle = useCallback((id: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <div className={classes.root}>
      {tree.map((treeNode) => (
        <TreeNodeView
          key={treeNode.node.space_rel_id}
          treeNode={treeNode}
          expanded={expanded}
          onToggle={handleToggle}
          onClick={onClick}
          classes={classes}
        />
      ))}
    </div>
  );
};

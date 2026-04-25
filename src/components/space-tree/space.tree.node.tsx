import { FC, MouseEvent } from 'react';
import clsx from 'clsx';
import { ISpace } from '@shared/types/db';
import { Icon } from '@components/icon/icon';
import { TreeNode } from './space.tree.utils';
import { useStyles } from './space.tree.styles';

interface TreeNodeViewProps {
  treeNode: TreeNode;
  expanded: Set<number>;
  onToggle: (id: number) => void;
  onClick: (node: ISpace) => void;
  classes: ReturnType<typeof useStyles>;
}

export const TreeNodeView: FC<TreeNodeViewProps> = ({
  treeNode,
  expanded,
  onToggle,
  onClick,
  classes,
}) => {
  const { node, children } = treeNode;
  const hasChildren = children.length > 0;
  const isExpanded = expanded.has(node.space_rel_id);

  const handleToggle = (e: MouseEvent) => {
    if (e.nativeEvent.defaultPrevented) {
      return;
    }
    e.preventDefault();
    if (hasChildren) {
      onToggle(node.space_rel_id);
    }
  };

  const handleClick = (e: MouseEvent) => {
    console.log({ event: e.nativeEvent.defaultPrevented });
    if (e.nativeEvent.defaultPrevented) {
      return;
    }
    onClick(node);
  };

  return (
    <div className={classes.node}>
      <div className={classes.row} onClick={handleClick}>
        {hasChildren ? (
          <span className={clsx(classes.toggle, { expanded: isExpanded })} onClick={handleToggle}>
            <Icon icon="arrowRight" />
          </span>
        ) : (
          <span className={classes.toggle}>
            <span className={classes.dot} />
          </span>
        )}
        <span className={classes.name}>
          {node.name}
          {node.description && <span className={classes.description}>{node.description}</span>}
        </span>
      </div>
      {hasChildren && isExpanded && (
        <div className={classes.children}>
          {children.map((child) => (
            <TreeNodeView
              key={child.node.space_rel_id}
              treeNode={child}
              expanded={expanded}
              onToggle={onToggle}
              onClick={onClick}
              classes={classes}
            />
          ))}
        </div>
      )}
    </div>
  );
};

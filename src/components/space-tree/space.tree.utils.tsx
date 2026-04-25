import { ISpace } from '@shared/types/db';

export interface TreeNode {
  node: ISpace;
  children: TreeNode[];
}

export const buildTree = (flat: ISpace[]): TreeNode[] => {
  const map = new Map<number, TreeNode>();
  const roots: TreeNode[] = [];

  for (const node of flat) {
    map.set(node.space_rel_id, { node, children: [] });
  }

  for (const node of flat) {
    const treeNode = map.get(node.space_rel_id)!;
    if (node.parent_space_id === null) {
      roots.push(treeNode);
    } else {
      // find parent by space_id match
      const parentEntry = flat.find((n) => n.space_id === node.parent_space_id);
      if (parentEntry) {
        map.get(parentEntry.space_rel_id)?.children.push(treeNode);
      } else {
        roots.push(treeNode);
      }
    }
  }

  return roots;
};

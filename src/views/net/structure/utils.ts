import { NetData, NetNode } from '@components/net-structure-view/net.structure.view';

let counter = 0;
const maxNodeLevel = 2;

const getNode = (parentNode: NetNode, index: number): NetNode => {
  const { node_level, node_id } = parentNode;

  return {
    node_id: ++counter,
    parent_node_id: node_id,
    node_level: node_level + 1,
    node_position: index,
    count_of_members: 1,
  };
};

const getNet = (node: NetNode): NetData => {
  if (node.node_level === maxNodeLevel) {
    return { node, tree: null };
  }

  return { node, tree: Array.from({ length: 12 }, (_, index) => getNet(getNode(node, index))) };
};

const rootNode = {
  node_id: 0,
  parent_node_id: null,
  node_level: 0,
  node_position: 0,
  count_of_members: 1,
};

export const net = getNet(rootNode);

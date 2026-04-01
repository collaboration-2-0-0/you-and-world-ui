import { FC, useRef, useEffect } from 'react';
import { useStyles } from './net.structure.view.styles';

export type NetNode = {
  node_id: number;
  parent_node_id: number | null;
  node_level: number;
  node_position: number;
  count_of_members: number;
};

export type NetData = {
  node: NetNode;
  tree: NetData[] | null;
};

interface NetViewProps {
  data: NetData;
  maxNodeLevel: number;
  nodeDiameter: number;
}

// Palette colors (hex) for canvas drawing — matches theme palette
const LEVEL_COLORS = [
  '#2e7bb3', // level 0 — first.main (root)
  '#119636', // level 1 — add.main
  '#fc7b03', // level 2 — second.main
  '#1e5c88', // level 3 — first.dark
  '#0d6b27', // level 4 — add.dark
  '#c46002', // level 5 — second.dark
];

function levelColor(level: number): string {
  return LEVEL_COLORS[level % LEVEL_COLORS.length];
}

export const NetStructureView: FC<NetViewProps> = ({ data, maxNodeLevel, nodeDiameter }) => {
  const classes = useStyles();
  console.log(data);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // BFS — collect nodes per level in tree order and parent→child edges
    const levelNodes: NetNode[][] = [];
    const edges: Array<[number, number]> = [];
    const nodeToLevel = new Map<number, number>();

    const queue: NetData[] = [data];
    while (queue.length > 0) {
      const current = queue.shift()!;
      const { node, tree } = current;
      const lvl = node.node_level;
      if (!levelNodes[lvl]) levelNodes[lvl] = [];
      levelNodes[lvl].push(node);
      nodeToLevel.set(node.node_id, lvl);
      if (tree) {
        for (const child of tree) {
          edges.push([node.node_id, child.node.node_id]);
          queue.push(child);
        }
      }
    }

    // Compute ring radius for each level
    // minRadius = (nodesAtLevel * nodeDiameter) / (2 * π)
    // actual radius = max(minRadius, prevRadius + nodeDiameter * 2)
    const radii: number[] = [0]; // level 0 sits at the center
    for (let i = 1; i <= maxNodeLevel; i++) {
      const count = levelNodes[i]?.length ?? 0;
      const minRadius = count > 0 ? (count * nodeDiameter) / (2 * Math.PI) : nodeDiameter * 2;
      radii[i] = Math.max(minRadius, (radii[i - 1] ?? 0) + nodeDiameter * 2);
    }

    const outerRadius = radii[maxNodeLevel] ?? radii[radii.length - 1] ?? 0;
    const padding = nodeDiameter * 2;
    const size = Math.max(2 * (outerRadius + padding), nodeDiameter * 6);

    canvas.width = size;
    canvas.height = size;
    const cx = size / 2;
    const cy = size / 2;
    const nodeRadius = nodeDiameter / 2;

    ctx.clearRect(0, 0, size, size);

    // Compute (x, y) for every node
    const positions = new Map<number, { x: number; y: number }>();
    positions.set(data.node.node_id, { x: cx, y: cy });

    for (let lvl = 1; lvl < levelNodes.length; lvl++) {
      const nodes = levelNodes[lvl];
      if (!nodes?.length) continue;
      const r = radii[lvl];
      nodes.forEach((node, idx) => {
        // start from the top (-π/2) and distribute evenly
        const angle = (idx / nodes.length) * 2 * Math.PI - Math.PI / 2;
        positions.set(node.node_id, {
          x: cx + r * Math.cos(angle),
          y: cy + r * Math.sin(angle),
        });
      });
    }

    // 1 — guide rings (faint)
    for (let lvl = 1; lvl < levelNodes.length; lvl++) {
      if (!levelNodes[lvl]?.length) continue;
      ctx.beginPath();
      ctx.arc(cx, cy, radii[lvl], 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(46,123,179,0.10)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // 2 — edges
    for (const [parentId, childId] of edges) {
      const p = positions.get(parentId);
      const c = positions.get(childId);
      if (!p || !c) continue;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(c.x, c.y);
      ctx.strokeStyle = 'rgba(46,123,179,0.22)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // 3 — nodes
    for (const [nodeId, pos] of positions) {
      const lvl = nodeToLevel.get(nodeId) ?? 0;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, nodeRadius, 0, 2 * Math.PI);
      ctx.fillStyle = levelColor(lvl);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.75)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }, [data, maxNodeLevel, nodeDiameter]);

  return (
    <div className={classes.root}>
      <canvas ref={canvasRef} className={classes.canvas} />
    </div>
  );
};

node

```dbml
Table nodes {
  "node_id" bigint [primary key, not null]
  "node_level" integer [not null, default: 0]
  "parent_node_id" bigint [default: NULL]
  "net_id" bigint [not null]
  "node_position" integer [not null, default: 0]
  "count_of_members" integer [not null, default: 0]
  "updated" timestamp [not null, default: 'now()']
  Indexes {
    parent_node_id [name: "sk_nodes_parent_node"]
  }
}
```

```typescript
type Node = {
    node_id: number;
    parent_node_id: number;
    node_level: number;
    node_position: number;
    count_of_members: number;
}

type Net = {
    node: Node;
    /*
        Net with node which has node_level === MAX_NODE_LEVEL is null
        Net[] array has 12 items
    */
    tree: Net[] | null; 
}

```

```js
/* example */
const rootNode = {
    node_id: 0,
    parent_node_id: null,
    node_level: 0,
    node_position: 0,
    count_of_members: 13
}

const node_1 = {
    node_id: 1,
    parent_node_id: 0,
    node_level: 1,
    node_position: 0,
    count_of_members: 1
}

/* ... */

const node_12 = {
    node_id: 12,
    parent_node_id: 0,
    node_level: 1,
    node_position: 11,
    count_of_members: 1
}
```
Create React component to vizualize net structure.
It receives parameters:
```ts
type Paramaters = {
    data: Net;
    maxNodeLevel: number;
    nodeDiameter: number;
}
```
Using canvas draw net structure.
Draw node as small circle with nodeDiameter.
Draw n circles. Each circle for each node_level.
Minimum Radius of each circle: (count of nodes with the same node_level * nodeDiameter) / (2 * pi).
Set rootNode in the center of circle.
Set its tree's nodes around rootNode evenly by first circle .
Set their tree's nodes evenly by second circle and so on.

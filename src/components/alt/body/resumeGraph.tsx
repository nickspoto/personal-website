import { useCallback, useState } from "react";
import {
  applyNodeChanges,
  Background,
  Controls,
  MiniMap,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Stack } from "@mui/material";
import { DefaultNode } from "./flowComponents/nodeObject";

//TODO: Move these to a separate json config file
const initialNodes = [
  {
    id: "n1",
    type: "defaultNode",
    position: { x: 0, y: 0 },
    data: { label: "Node 1" },
  },
  {
    id: "n2",
    type: "defaultNode",
    position: { x: 0, y: 100 },
    data: { label: "Node 2" },
  },
];
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];
const nodeTypes = {
  defaultNode: DefaultNode,
};

export const ResumeGraph = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  return (
    <Stack height="500px" width="100%" border="1px solid #ccc">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        zoomOnScroll={false}
        preventScrolling={false}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} color="black" />
      </ReactFlow>
    </Stack>
  );
};

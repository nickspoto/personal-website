import { Typography, useTheme } from "@mui/material";
import { Handle, Position, type NodeProps } from "@xyflow/react";
export const DefaultNode = ({ data, id, selected }: NodeProps) => {
  const theme = useTheme();
  return (
    <div
      id={id}
      className="text-updater-node"
      style={{
        padding: 10,
        border: "1px solid #999",
        borderRadius: 8,
        backgroundColor: selected ? theme.palette.grey[300] : "white",
      }}
    >
      <Handle type="target" position={Position.Top} />
      <Typography variant="body1">{String(data.label ?? "")}</Typography>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

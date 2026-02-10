import { useState } from "react";

const nodes = [
  {
    id: "superstan",
    label: "SuperStan",
    sublabel: "Claude Opus 4.6 · Anthropic Cloud",
    x: 400,
    y: 60,
    future: false,
  },
  {
    id: "casey",
    label: "Casey",
    sublabel: "Human Circuit Breaker",
    x: 400,
    y: 200,
    future: false,
  },
  {
    id: "mater",
    label: "Mater",
    sublabel: "Home PC · Canyon Lake, TX",
    x: 250,
    y: 360,
    future: false,
    children: [{ label: "Stan", sublabel: "Claude Haiku · OpenClaw" }],
  },
  {
    id: "lightning",
    label: "Lightning",
    sublabel: "Laptop · ASUS TUF A16",
    x: 550,
    y: 360,
    future: true,
    children: [{ label: "Jake", sublabel: "Claude Haiku · OpenClaw" }],
  },
];

const connections = [
  { from: "superstan", to: "casey", label: "Strategy ↕ Corrections" },
  { from: "casey", to: "mater", label: "SSH · Telegram" },
  { from: "casey", to: "lightning", label: "Direct · Desktop Commander", future: true },
];

export default function FleetBrainDiagram() {
  const [hovered, setHovered] = useState(null);

  const getNode = (id) => nodes.find((n) => n.id === id);

  return (
    <div
      style={{
        background: "#08080d",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif",
      }}
    >
      <h2
        style={{
          color: "#edf2fc",
          fontSize: "18px",
          fontWeight: 600,
          marginBottom: "8px",
          letterSpacing: "0.5px",
        }}
      >
        <span style={{ color: "#edf2fc" }}>fleet</span>
        <span style={{ color: "#3b82f6" }}>brain</span>
        <span style={{ color: "#64748b", fontWeight: 400 }}> · logical architecture</span>
      </h2>
      <p style={{ color: "#64748b", fontSize: "13px", marginBottom: "32px" }}>
        Dashed = future deployment
      </p>

      <svg viewBox="0 0 800 520" width="800" height="520">
        {connections.map((conn, i) => {
          const from = getNode(conn.from);
          const to = getNode(conn.to);
          const fromY = from.children ? from.y + 20 : from.y + 20;
          const toY = to.y - 30;
          const midY = (fromY + toY) / 2;
          const midX = (from.x + to.x) / 2;

          return (
            <g key={i}>
              <path
                d={`M ${from.x} ${fromY + 20} C ${from.x} ${midY}, ${to.x} ${midY}, ${to.x} ${toY}`}
                fill="none"
                stroke={conn.future ? "#334155" : "#3b82f6"}
                strokeWidth="2"
                strokeDasharray={conn.future ? "6 4" : "none"}
                opacity={0.6}
              />
              <text
                x={midX}
                y={midY - 6}
                textAnchor="middle"
                fill={conn.future ? "#475569" : "#64748b"}
                fontSize="11"
                fontFamily="'Source Sans 3', sans-serif"
              >
                {conn.label}
              </text>
            </g>
          );
        })}

        {nodes.map((node) => {
          const isHovered = hovered === node.id;
          const boxW = 260;
          const hasChild = node.children && node.children.length > 0;
          const boxH = hasChild ? 120 : 70;
          const x = node.x - boxW / 2;
          const y = node.y - 25;

          return (
            <g
              key={node.id}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "default" }}
            >
              <rect
                x={x}
                y={y}
                width={boxW}
                height={boxH}
                rx="8"
                fill={node.future ? "#0f1118" : "#111827"}
                stroke={
                  isHovered
                    ? "#3b82f6"
                    : node.future
                    ? "#1e293b"
                    : "#1e3a5f"
                }
                strokeWidth={isHovered ? 2 : 1}
                strokeDasharray={node.future ? "6 4" : "none"}
              />

              <text
                x={node.x}
                y={y + 22}
                textAnchor="middle"
                fill={node.future ? "#94a3b8" : "#edf2fc"}
                fontSize="16"
                fontWeight="600"
                fontFamily="'Source Sans 3', sans-serif"
              >
                {node.label}
              </text>

              <text
                x={node.x}
                y={y + 40}
                textAnchor="middle"
                fill={node.future ? "#475569" : "#64748b"}
                fontSize="12"
                fontFamily="'Source Sans 3', sans-serif"
              >
                {node.sublabel}
              </text>

              {hasChild &&
                node.children.map((child, ci) => {
                  const childY = y + 54;
                  const childW = boxW - 24;
                  const childX = x + 12;

                  return (
                    <g key={ci}>
                      <rect
                        x={childX}
                        y={childY}
                        width={childW}
                        height={48}
                        rx="6"
                        fill={node.future ? "#080a10" : "#0a1628"}
                        stroke={node.future ? "#1e293b" : "#1e3a5f"}
                        strokeWidth="1"
                        strokeDasharray={node.future ? "4 3" : "none"}
                      />
                      <text
                        x={node.x}
                        y={childY + 20}
                        textAnchor="middle"
                        fill={node.future ? "#64748b" : "#3b82f6"}
                        fontSize="14"
                        fontWeight="600"
                        fontFamily="'Source Sans 3', sans-serif"
                      >
                        {child.label}
                      </text>
                      <text
                        x={node.x}
                        y={childY + 36}
                        textAnchor="middle"
                        fill={node.future ? "#334155" : "#64748b"}
                        fontSize="11"
                        fontFamily="'Source Sans 3', sans-serif"
                      >
                        {child.sublabel}
                      </text>
                    </g>
                  );
                })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

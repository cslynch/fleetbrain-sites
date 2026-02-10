import { useState } from "react";

export default function MaterDiagram() {
  const [hovered, setHovered] = useState(null);

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
        <span style={{ color: "#64748b", fontWeight: 400 }}>
          {" "}· Mater detail
        </span>
      </h2>
      <p style={{ color: "#64748b", fontSize: "13px", marginBottom: "32px" }}>
        Windows host · Canyon Lake, TX
      </p>

      <svg viewBox="0 0 820 680" width="820" height="680">
        <rect x={40} y={30} width={740} height={620} rx="12" fill="#0c0f16" stroke="#1e3a5f" strokeWidth="2" />
        <text x={60} y={58} fill="#edf2fc" fontSize="18" fontWeight="700" fontFamily="'Source Sans 3', sans-serif">Mater</text>
        <text x={130} y={58} fill="#64748b" fontSize="14" fontFamily="'Source Sans 3', sans-serif">Windows 11 · Home PC</text>

        <rect x={60} y={78} width={340} height={310} rx="8" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
        <text x={80} y={102} fill="#3b82f6" fontSize="15" fontWeight="600" fontFamily="'Source Sans 3', sans-serif">Claude Desktop</text>
        <text x={80} y={118} fill="#475569" fontSize="11" fontFamily="'Source Sans 3', sans-serif">SuperStan's execution endpoint</text>

        {[
          { label: "Filesystem", detail: "R/W local files" },
          { label: "GitHub", detail: "R/W repos, PRs, issues" },
          { label: "Trello", detail: "R/W StanOps board" },
          { label: "Perplexity", detail: "Deep research + citations" },
          { label: "Desktop Commander", detail: "Terminal access on Mater" },
          { label: "Zapier", detail: "Email send, calendar create" },
          { label: "Google Drive", detail: "Read-only" },
          { label: "Gmail", detail: "Read-only" },
          { label: "Calendar", detail: "Read-only" },
        ].map((mcp, i) => {
          const col = i < 5 ? 0 : 1;
          const row = i < 5 ? i : i - 5;
          const bx = 76 + col * 156;
          const by = 134 + row * 36;
          const isH = hovered === `mcp-${i}`;
          return (
            <g key={i} onMouseEnter={() => setHovered(`mcp-${i}`)} onMouseLeave={() => setHovered(null)} style={{ cursor: "default" }}>
              <rect x={bx} y={by} width={148} height={30} rx="4" fill={isH ? "#1a2744" : "#0f172a"} stroke={isH ? "#3b82f6" : "#1e293b"} strokeWidth="1" />
              <text x={bx + 10} y={by + 18} fill={isH ? "#edf2fc" : "#94a3b8"} fontSize="12" fontFamily="'Source Sans 3', sans-serif">{mcp.label}</text>
              {isH && <text x={bx + 148 + 8} y={by + 18} fill="#64748b" fontSize="11" fontFamily="'Source Sans 3', sans-serif">{mcp.detail}</text>}
            </g>
          );
        })}

        <rect x={420} y={78} width={340} height={130} rx="8" fill="#111827" stroke="#1e3a5f" strokeWidth="1" />
        <text x={440} y={102} fill="#edf2fc" fontSize="14" fontWeight="600" fontFamily="'Source Sans 3', sans-serif">Access to Stan VM</text>
        <text x={440} y={118} fill="#475569" fontSize="11" fontFamily="'Source Sans 3', sans-serif">All from Mater only — Stan is isolated</text>

        {[
          { label: "Hyper-V Manager", detail: "Console" },
          { label: "SSH", detail: "clawdbot@172.19.89.139" },
          { label: "RDP", detail: "Remote desktop" },
          { label: "WinSCP", detail: "File transfer" },
        ].map((acc, i) => (
          <g key={i}>
            <text x={436} y={130 + i * 18} fill="#94a3b8" fontSize="12" fontFamily="'Source Sans 3', sans-serif">•</text>
            <text x={450} y={130 + i * 18} fill="#edf2fc" fontSize="12" fontWeight="500" fontFamily="'Source Sans 3', sans-serif">{acc.label}</text>
            <text x={596} y={130 + i * 18} fill="#64748b" fontSize="11" fontFamily="'Source Sans 3', sans-serif">{acc.detail}</text>
          </g>
        ))}

        <rect x={420} y={220} width={340} height={48} rx="8" fill="#1a0a0a" stroke="#7f1d1d" strokeWidth="1" />
        <text x={440} y={242} fill="#ef4444" fontSize="12" fontWeight="600" fontFamily="'Source Sans 3', sans-serif">Security Boundary</text>
        <text x={440} y={258} fill="#94a3b8" fontSize="11" fontFamily="'Source Sans 3', sans-serif">No inbound connections from outside Mater</text>

        <path d="M 230 388 L 230 420" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
        <text x={244} y={410} fill="#64748b" fontSize="11" fontFamily="'Source Sans 3', sans-serif">Desktop Commander → SSH</text>

        <defs>
          <marker id="arrowBlue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>
        </defs>

        <rect x={60} y={430} width={700} height={200} rx="10" fill="#0a1628" stroke="#1e3a5f" strokeWidth="2" />
        <rect x={72} y={442} width={70} height={20} rx="4" fill="#1e3a5f" />
        <text x={107} y={456} textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600" fontFamily="'Source Sans 3', sans-serif">Ubuntu</text>
        <text x={152} y={457} fill="#3b82f6" fontSize="17" fontWeight="700" fontFamily="'Source Sans 3', sans-serif">Stan VM</text>
        <text x={260} y={457} fill="#64748b" fontSize="13" fontFamily="'Source Sans 3', sans-serif">Hyper-V · Isolated</text>

        <text x={540} y={453} fill="#475569" fontSize="12" fontFamily="'Source Sans 3', sans-serif">eth0: 172.19.89.139</text>
        <text x={540} y={469} fill="#475569" fontSize="12" fontFamily="'Source Sans 3', sans-serif">tailscale0: 100.71.67.28</text>

        {[
          { label: "OpenClaw v2026.2.6", w: 180 },
          { label: "Telegram Bot", w: 120 },
          { label: "25 Skills", w: 100 },
        ].map((item, i) => {
          const bx = 80 + i * (item.w + 16);
          return (
            <g key={i}>
              <rect x={bx} y={480} width={item.w} height={32} rx="4" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
              <text x={bx + item.w / 2} y={500} textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="'Source Sans 3', sans-serif">{item.label}</text>
            </g>
          );
        })}

        {[
          { label: "Google OAuth Token", w: 160 },
          { label: "Git Backup (daily 2am)", w: 180 },
          { label: "Brave Search", w: 120 },
        ].map((item, i) => {
          const bx = 80 + i * (item.w + 16);
          return (
            <g key={i}>
              <rect x={bx} y={522} width={item.w} height={32} rx="4" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
              <text x={bx + item.w / 2} y={542} textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="'Source Sans 3', sans-serif">{item.label}</text>
            </g>
          );
        })}

        <text x={540} y={498} fill="#334155" fontSize="11" fontFamily="'Source Code Pro', monospace">/home/clawdbot/.openclaw/</text>
        <text x={540} y={514} fill="#334155" fontSize="11" fontFamily="'Source Code Pro', monospace">├── openclaw.json</text>
        <text x={540} y={530} fill="#334155" fontSize="11" fontFamily="'Source Code Pro', monospace">├── workspace/.env</text>
        <text x={540} y={546} fill="#334155" fontSize="11" fontFamily="'Source Code Pro', monospace">└── credentials/</text>

        <text x={420} y={300} fill="#64748b" fontSize="12" fontWeight="600" fontFamily="'Source Sans 3', sans-serif">Mater → External</text>
        {[
          "Anthropic API (SuperStan)",
          "Google APIs (OAuth)",
          "GitHub (git push)",
          "Telegram (bot gateway)",
          "Tailscale (remote access)",
        ].map((svc, i) => (
          <text key={i} x={436} y={318 + i * 17} fill="#475569" fontSize="11" fontFamily="'Source Sans 3', sans-serif">• {svc}</text>
        ))}
      </svg>
    </div>
  );
}

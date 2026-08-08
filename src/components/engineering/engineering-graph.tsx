interface EngineeringGraphProps {
  selectedSystem: string;
  onSelectSystem: (id: string) => void;
  selectedCategory: string;
}

type NodeDef = {
  id: string;
  label: string;
  category: "power" | "communication" | "control" | "sensing" | "actuation";
  x: number;
  y: number;
};

const CATEGORY_COLOR: Record<string, string> = {
  power: "oklch(0.78 0.14 70)",
  communication: "oklch(0.75 0.13 210)",
  control: "oklch(0.72 0.15 278)",
  sensing: "oklch(0.75 0.12 330)",
  actuation: "oklch(0.75 0.13 150)",
};

const NODE_W = 132;
const NODE_H = 52;

const NODES: NodeDef[] = [
  { id: "battery", label: "Battery", category: "power", x: 80, y: 80 },
  { id: "pdu", label: "Power Dist.", category: "power", x: 80, y: 196 },
  { id: "roborio", label: "roboRIO 2.0", category: "control", x: 270, y: 80 },
  { id: "can-bus", label: "CAN Bus", category: "communication", x: 270, y: 196 },
  { id: "radio", label: "Radio", category: "communication", x: 270, y: 320 },
  { id: "networktables", label: "NetworkTables", category: "communication", x: 270, y: 430 },
  { id: "gyro", label: "IMU / Gyro", category: "sensing", x: 470, y: 80 },
  { id: "vision", label: "Vision", category: "sensing", x: 470, y: 210 },
  { id: "motor-controllers", label: "Motor Controllers", category: "actuation", x: 650, y: 60 },
  { id: "swerve", label: "Swerve Drive", category: "actuation", x: 650, y: 196 },
  { id: "pneumatics", label: "Pneumatics", category: "actuation", x: 650, y: 330 },
  { id: "intake", label: "Intake", category: "actuation", x: 820, y: 80 },
  { id: "elevator", label: "Elevator / Arm", category: "actuation", x: 820, y: 210 },
  { id: "climber", label: "Climber", category: "actuation", x: 820, y: 340 },
];

const EDGES: [string, string][] = [
  ["battery", "pdu"],
  ["pdu", "roborio"],
  ["pdu", "can-bus"],
  ["pdu", "radio"],
  ["can-bus", "roborio"],
  ["can-bus", "motor-controllers"],
  ["can-bus", "pneumatics"],
  ["can-bus", "gyro"],
  ["can-bus", "vision"],
  ["radio", "networktables"],
  ["networktables", "vision"],
  ["motor-controllers", "swerve"],
  ["motor-controllers", "intake"],
  ["motor-controllers", "elevator"],
  ["motor-controllers", "climber"],
  ["pneumatics", "climber"],
  ["pneumatics", "intake"],
];

function nodeCenter(id: string): { x: number; y: number } | null {
  const node = NODES.find((n) => n.id === id);
  if (!node) return null;
  return { x: node.x, y: node.y };
}

export function EngineeringGraph({
  selectedSystem,
  onSelectSystem,
  selectedCategory,
}: EngineeringGraphProps) {
  return (
    <svg
      viewBox="0 0 1000 480"
      className="relative z-10 h-auto w-full"
      role="img"
      aria-label="Electrical architecture diagram: battery feed, CAN backbone, controllers, sensing, and actuation"
    >
      <defs>
        <pattern id="edgePulse" width="10" height="6" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="3" r="2" fill="currentColor" />
        </pattern>
      </defs>

      {EDGES.map(([from, to]) => {
        const fromPos = nodeCenter(from);
        const toPos = nodeCenter(to);
        if (!fromPos || !toPos) return null;

        const x1 = fromPos.x + NODE_W / 2;
        const y1 = fromPos.y + NODE_H / 2;
        const x2 = toPos.x + NODE_W / 2;
        const y2 = toPos.y + NODE_H / 2;

        const fromNode = NODES.find((n) => n.id === from);
        const toNode = NODES.find((n) => n.id === to);
        const isActive =
          selectedSystem === from ||
          selectedSystem === to ||
          (fromNode?.category === selectedCategory && toNode?.category === selectedCategory);

        return (
          <g key={`${from}-${to}`} className="edge">
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isActive ? CATEGORY_COLOR[fromNode?.category ?? "control"] : "oklch(0.6 0.02 270 / 0.35)"}
              strokeWidth={isActive ? 1.6 : 1}
              className={isActive ? "is-active" : ""}
            />
          </g>
        );
      })}

      {NODES.map((node) => {
        const isSelected = selectedSystem === node.id;
        const color = CATEGORY_COLOR[node.category];
        const dim = selectedCategory !== node.category && !isSelected;
        const evenNode = node.y < 260;

        return (
          <g
            key={node.id}
            role="button"
            tabIndex={0}
            aria-label={`${node.label}, ${node.category} subsystem`}
            onPointerEnter={() => onSelectSystem(node.id)}
            onClick={() => onSelectSystem(node.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectSystem(node.id);
              }
            }}
            className={`graph-node ${isSelected ? "is-selected" : ""}`}
            style={{ cursor: "pointer", opacity: dim ? 0.38 : 1 }}
          >
            <rect
              x={node.x}
              y={node.y}
              width={NODE_W}
              height={NODE_H}
              rx={10}
              fill="oklch(0.14 0.012 265 / 0.85)"
              stroke={isSelected ? color : "oklch(1 0 0 / 0.12)"}
              strokeWidth={isSelected ? 2 : 1}
            />
            <circle
              cx={node.x + 14}
              cy={node.y + NODE_H / 2}
              r={evenNode ? 2.5 : 3.5}
              fill={color}
            />
            <text
              x={node.x + 26}
              y={node.y + 22}
              fill="oklch(0.96 0.004 80)"
              fontSize="12"
              fontWeight="600"
              fontFamily="var(--font-geist-mono)"
            >
              {node.label}
            </text>
            <text
              x={node.x + 26}
              y={node.y + 38}
              fill="oklch(0.6 0.02 270 / 0.85)"
              fontSize="9"
              letterSpacing="0.12em"
              fontFamily="var(--font-geist-mono)"
            >
              {node.category.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  type: "user" | "course" | "agent";
  color?: string;
}

interface Edge {
  from: string;
  to: string;
}

const KnowledgeGraph = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [nodes, setNodes] = useState<Node[]>([
    { id: "user", x: 400, y: 300, label: "Вы", type: "user" },
    { id: "course1", x: 200, y: 200, label: "React Basics", type: "course" },
    { id: "course2", x: 600, y: 200, label: "TypeScript", type: "course" },
    { id: "course3", x: 300, y: 450, label: "Node.js", type: "course" },
  ]);
  const [edges] = useState<Edge[]>([
    { from: "user", to: "course1" },
    { from: "user", to: "course2" },
    { from: "user", to: "course3" },
  ]);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);

  const handleMouseDown = (nodeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDraggingNode(nodeId);
    const node = nodes.find(n => n.id === nodeId);
    setSelectedNode(node || null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggingNode || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setNodes(prev => prev.map(node => 
      node.id === draggingNode ? { ...node, x, y } : node
    ));
  };

  const handleMouseUp = () => {
    setDraggingNode(null);
  };

  const getNodeColor = (type: string) => {
    switch (type) {
      case "user": return "hsl(var(--node-user))";
      case "course": return "hsl(var(--node-default))";
      case "agent": return "hsl(var(--accent))";
      default: return "hsl(var(--node-default))";
    }
  };

  return (
    <div className="relative w-full h-full bg-fill-ai-bg-canvas">
      {/* Canvas */}
      <div
        ref={canvasRef}
        className="w-full h-full relative"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={() => setSelectedNode(null)}
      >
        {/* Draw edges */}
        <svg className="absolute inset-0 pointer-events-none">
          {edges.map((edge, i) => {
            const fromNode = nodes.find(n => n.id === edge.from);
            const toNode = nodes.find(n => n.id === edge.to);
            if (!fromNode || !toNode) return null;

            return (
              <line
                key={i}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="hsl(var(--connection-line))"
                strokeWidth="2"
                opacity="0.3"
              />
            );
          })}
        </svg>

        {/* Draw nodes */}
        {nodes.map(node => (
          <div
            key={node.id}
            className={`absolute w-20 h-20 rounded-full flex items-center justify-center cursor-move select-none transition-transform hover:scale-110 shadow-lg ${
              selectedNode?.id === node.id ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background scale-110' : ''
            }`}
            style={{
              left: node.x - 40,
              top: node.y - 40,
              backgroundColor: getNodeColor(node.type),
            }}
            onMouseDown={(e) => handleMouseDown(node.id, e)}
          >
            <span className="text-xs text-center font-light px-2 text-background">
              {node.label}
            </span>
          </div>
        ))}
      </div>

      {/* Node details panel */}
      {selectedNode && selectedNode.type === "course" && (
        <div className="absolute right-6 top-6 bg-card border border-border rounded-lg p-6 w-80 shadow-xl">
          <h3 className="text-lg font-light mb-4">{selectedNode.label}</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Курс по основам разработки
          </p>
          <div className="space-y-2">
            <Button 
              size="sm" 
              className="w-full justify-start"
              onClick={() => navigate(`/course/${selectedNode.id}`)}
            >
              <Eye className="h-4 w-4 mr-2" />
              Открыть курс
            </Button>
            <Button size="sm" variant="outline" className="w-full justify-start">
              <Plus className="h-4 w-4 mr-2" />
              Редактировать
            </Button>
            <Button size="sm" variant="outline" className="w-full justify-start text-destructive">
              <Trash2 className="h-4 w-4 mr-2" />
              Удалить
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeGraph;

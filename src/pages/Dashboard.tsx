import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const [query, setQuery] = useState("");

  const handleGenerate = () => {
    if (!query.trim()) {
      toast.error("Введите запрос для генерации");
      return;
    }
    
    toast.success("Генерирую курс...", {
      description: `Создаю материалы по теме: "${query}"`
    });
    
    // Mock: в реальности здесь будет вызов Lovable AI
    setTimeout(() => {
      toast.success("Курс создан!", {
        description: "Новый узел добавлен в граф знаний"
      });
    }, 2000);
  };

  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />
      
      <main className="ml-64 flex-1 flex flex-col">
        {/* Search Bar */}
        <div className="bg-card border-b border-border px-6 py-4 flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Что вы хотите узнать или сгенерировать?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
              className="pl-10 bg-background border-border"
            />
          </div>
          <Button onClick={handleGenerate}>
            <Sparkles className="h-4 w-4 mr-2" />
            Генерировать
          </Button>
        </div>

        {/* Knowledge Graph */}
        <div className="flex-1 relative">
          <KnowledgeGraph />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

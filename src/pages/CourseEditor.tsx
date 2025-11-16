import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Sparkles, Save } from "lucide-react";
import { toast } from "sonner";

const CourseEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notes, setNotes] = useState("# Введение в React\n\nReact - это библиотека JavaScript для создания пользовательских интерфейсов...");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateContent = () => {
    setIsGenerating(true);
    toast.success("Генерирую улучшенный контент...");
    
    // Mock AI generation
    setTimeout(() => {
      setIsGenerating(false);
      toast.success("Контент улучшен!");
    }, 2000);
  };

  const handleSave = () => {
    toast.success("Курс сохранён!");
  };

  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />
      
      <main className="ml-64 flex-1 overflow-y-auto">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-xl font-light">React Basics</h1>
                <p className="text-sm text-muted-foreground">Курс ID: {id}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleGenerateContent} disabled={isGenerating}>
                <Sparkles className="h-4 w-4 mr-2" />
                {isGenerating ? "Генерация..." : "Улучшить AI"}
              </Button>
              <Button onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Сохранить
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 px-6 py-6">
            <Tabs defaultValue="notes" className="h-full">
              <TabsList className="mb-6">
                <TabsTrigger value="notes">Конспект</TabsTrigger>
                <TabsTrigger value="tests">Тесты</TabsTrigger>
                <TabsTrigger value="video">Видео</TabsTrigger>
              </TabsList>

              <TabsContent value="notes" className="h-[calc(100%-60px)]">
                <div className="h-full">
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="h-full min-h-[600px] bg-card border-border font-mono text-sm resize-none"
                    placeholder="Начните писать конспект или используйте AI для генерации..."
                  />
                </div>
              </TabsContent>

              <TabsContent value="tests" className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-light mb-4">Генерация тестов</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    AI автоматически создаст вопросы на основе конспекта
                  </p>
                  <Button onClick={() => toast.info("Генерация тестов скоро будет доступна!")}>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Создать тесты
                  </Button>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-light mb-3">Пример вопроса</h4>
                  <p className="text-sm mb-3">Что такое React?</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="q1" id="a1" />
                      <label htmlFor="a1">Фреймворк для создания серверов</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" name="q1" id="a2" />
                      <label htmlFor="a2">Библиотека для создания UI</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" name="q1" id="a3" />
                      <label htmlFor="a3">Язык программирования</label>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="video" className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-light mb-4">Генерация видео-сценария</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    AI создаст структурированный сценарий для видео на основе конспекта
                  </p>
                  <Button onClick={() => toast.info("Генерация видео-сценариев скоро будет доступна!")}>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Создать сценарий
                  </Button>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="aspect-video bg-muted rounded flex items-center justify-center mb-4">
                    <p className="text-muted-foreground text-sm">Превью видео</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    После генерации сценария здесь появится превью
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseEditor;

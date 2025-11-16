import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, UserPlus, Search } from "lucide-react";
import { toast } from "sonner";

const Friends = () => {
  const mockFriends = [
    { id: "1", name: "Алексей Петров", status: "online", lastSeen: "онлайн" },
    { id: "2", name: "Мария Иванова", status: "offline", lastSeen: "2 часа назад" },
    { id: "3", name: "Дмитрий Смирнов", status: "online", lastSeen: "онлайн" },
  ];

  const handleSendMessage = (friendName: string) => {
    toast.success(`Открываю чат с ${friendName}`);
  };

  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />
      
      <main className="ml-64 flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-light mb-2">Друзья</h1>
              <p className="text-muted-foreground text-sm">
                Общайтесь и делитесь знаниями с друзьями
              </p>
            </div>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Добавить друга
            </Button>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Поиск друзей..."
                className="pl-10 bg-card border-border"
              />
            </div>
          </div>

          {/* Friends List */}
          <div className="space-y-4">
            {mockFriends.map(friend => (
              <div
                key={friend.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-foreground/20 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {friend.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {friend.status === "online" && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-light">{friend.name}</h3>
                    <p className="text-sm text-muted-foreground">{friend.lastSeen}</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSendMessage(friend.name)}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Написать
                </Button>
              </div>
            ))}
          </div>

          {/* AI Chat Section */}
          <div className="mt-12 bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                AI
              </div>
              <div>
                <h3 className="font-light">AI Ассистент</h3>
                <p className="text-sm text-muted-foreground">Всегда онлайн</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Задайте любой вопрос AI ассистенту для быстрой помощи
            </p>
            <Button onClick={() => toast.info("Функция чата с AI скоро будет доступна!")}>
              <MessageSquare className="h-4 w-4 mr-2" />
              Начать чат с AI
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Friends;

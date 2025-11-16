import Sidebar from "@/components/Sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Edit } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />
      
      <main className="ml-64 flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Profile Header */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    У
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-light mb-2">Пользователь</h1>
                  <p className="text-muted-foreground text-sm mb-3">user@example.com</p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Free Plan</Badge>
                    <Badge variant="outline">Новичок</Badge>
                  </div>
                </div>
              </div>
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Редактировать
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <span className="text-2xl font-light">3</span>
                </div>
                <p className="text-sm text-muted-foreground">Курсов создано</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="text-2xl font-light">3</span>
                </div>
                <p className="text-sm text-muted-foreground">Друзей</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-muted-foreground" />
                  <span className="text-2xl font-light">0</span>
                </div>
                <p className="text-sm text-muted-foreground">Достижений</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-light mb-6">Последняя активность</h2>
            <div className="space-y-4">
              <ActivityItem
                action="Создан курс"
                title="React Basics"
                time="2 дня назад"
              />
              <ActivityItem
                action="Добавлен друг"
                title="Алексей Петров"
                time="5 дней назад"
              />
              <ActivityItem
                action="Опубликован курс"
                title="TypeScript Advanced"
                time="1 неделю назад"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const ActivityItem = ({ action, title, time }: { action: string; title: string; time: string }) => (
  <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
    <div>
      <p className="text-sm font-light">
        <span className="text-muted-foreground">{action}:</span> {title}
      </p>
    </div>
    <span className="text-xs text-muted-foreground">{time}</span>
  </div>
);

export default Profile;

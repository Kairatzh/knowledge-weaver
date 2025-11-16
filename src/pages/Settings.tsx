import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Settings = () => {
  const [aiTone, setAiTone] = useState([50]);
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    toast.success("Настройки сохранены!");
  };

  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />
      
      <main className="ml-64 flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-light mb-2">Настройки</h1>
            <p className="text-muted-foreground text-sm">
              Персонализируйте ваш опыт работы с Fill.AI
            </p>
          </div>

          {/* Account Settings */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-light mb-6">Аккаунт</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-sm font-light">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="user@example.com"
                  className="bg-background border-border mt-2"
                />
              </div>

              <div>
                <Label htmlFor="name" className="text-sm font-light">Имя</Label>
                <Input
                  id="name"
                  type="text"
                  defaultValue="Пользователь"
                  className="bg-background border-border mt-2"
                />
              </div>
            </div>
          </div>

          {/* AI Personalization */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-light mb-6">Персонализация AI</h2>
            
            <div className="space-y-6">
              <div>
                <Label className="text-sm font-light mb-4 block">
                  Тон общения AI ассистента
                </Label>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground w-24">Формальный</span>
                  <Slider
                    value={aiTone}
                    onValueChange={setAiTone}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-xs text-muted-foreground w-24 text-right">Дружелюбный</span>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-light">Детальные объяснения</Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    AI будет давать более подробные ответы
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-light">Примеры кода</Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Включать примеры кода в генерируемые материалы
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Agent Settings */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-light mb-6">Агенты знаний</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-light">Автоматическая группировка</Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Агенты автоматически группируют курсы по темам
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-light">Предлагать связи</Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Показывать рекомендации по связям между курсами
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-light mb-6">Уведомления</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-light">Email уведомления</Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Получать обновления на почту
                  </p>
                </div>
                <Switch
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-light">Сообщения от друзей</Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    Уведомления о новых сообщениях
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end gap-3">
            <Button variant="outline">Отмена</Button>
            <Button onClick={handleSave}>Сохранить изменения</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;

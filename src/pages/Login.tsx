import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Infinity } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock auth - в реальности здесь будет Lovable Cloud auth
    if (email && password) {
      toast.success("Добро пожаловать!");
      navigate("/dashboard");
    } else {
      toast.error("Заполните все поля");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-3xl font-light tracking-wider mb-4">
            FILL<span className="text-muted-foreground font-extralight">.AI</span>
            <Infinity className="h-6 w-6 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-light mb-2">Вход в систему</h1>
          <p className="text-sm text-muted-foreground">Продолжайте своё обучение</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-light">Email</Label>
            <Input 
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-card border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-light">Пароль</Label>
            <Input 
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-card border-border"
            />
          </div>

          <Button type="submit" className="w-full">
            Войти
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Нет аккаунта?{" "}
            <button 
              onClick={() => navigate("/register")}
              className="text-foreground hover:underline font-light"
            >
              Зарегистрироваться
            </button>
          </p>
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate("/")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← На главную
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, Network, BookOpen, Video, MessageSquare, Infinity } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-12 py-5 flex justify-between items-center bg-background/80 backdrop-blur-xl border-b border-border z-50">
        <div className="text-2xl font-light tracking-wider">
          FILL<span className="text-muted-foreground font-extralight">.AI</span>
        </div>
        <ul className="hidden md:flex gap-10 text-sm text-muted-foreground">
          <li><a href="#features" className="hover:text-foreground transition-colors">Возможности</a></li>
          <li><a href="#pricing" className="hover:text-foreground transition-colors">Тарифы</a></li>
          <li><a href="#about" className="hover:text-foreground transition-colors">О нас</a></li>
        </ul>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate('/register')}
          className="border-border hover:border-foreground transition-all"
        >
          Начать бесплатно
        </Button>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight">
            Развивайся, расти и<br />стремись к бесконечности
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
            Создавай персонализированные курсы через граф знаний
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/register')}
            className="px-8 py-6 text-base bg-primary hover:bg-primary/90 transition-all"
          >
            Начать создавать
            <Infinity className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-20 w-full max-w-5xl mx-auto">
          <div className="aspect-video bg-card rounded-lg border border-border flex items-center justify-center animate-pulse-glow">
            <Network className="h-32 w-32 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20">
            Ваше решение для обучения
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Sparkles className="h-8 w-8" />}
              title="Генерация AI курсов"
              description="Создавайте конспекты, тесты и видео-сценарии с помощью мощного AI"
            />
            <FeatureCard 
              icon={<Network className="h-8 w-8" />}
              title="Граф знаний"
              description="Визуализируйте связи между темами в интуитивном 2D графе"
            />
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8" />}
              title="Библиотека курсов"
              description="Управляйте, публикуйте и монетизируйте ваши курсы"
            />
            <FeatureCard 
              icon={<Video className="h-8 w-8" />}
              title="Видео-контент"
              description="Генерируйте сценарии и создавайте обучающие видео"
            />
            <FeatureCard 
              icon={<MessageSquare className="h-8 w-8" />}
              title="Сообщество"
              description="Делитесь курсами и учитесь у других пользователей"
            />
            <FeatureCard 
              icon={<Infinity className="h-8 w-8" />}
              title="Агенты знаний"
              description="Автоматическая группировка курсов по темам"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20">
            Тарифные планы
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard 
              name="Free"
              price="0"
              features={[
                "До 5 курсов",
                "10 AI генераций в день",
                "Базовый граф знаний",
                "Публикация в Community"
              ]}
              cta="Начать бесплатно"
              onClick={() => navigate('/register')}
            />
            <PricingCard 
              name="Premium"
              price="990"
              features={[
                "Безлимитные курсы",
                "Безлимитные генерации",
                "Продвинутый граф",
                "Приоритетная поддержка",
                "Аналитика и экспорт",
                "Монетизация курсов"
              ]}
              cta="Попробовать Premium"
              highlighted
              onClick={() => navigate('/register')}
            />
            <PricingCard 
              name="Enterprise"
              price="По запросу"
              features={[
                "Всё из Premium",
                "Корпоративные интеграции",
                "Белый лейбл",
                "Персональный менеджер",
                "SLA гарантии"
              ]}
              cta="Связаться"
              onClick={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2024 Fill.AI. Все права защищены.
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Условия</a>
            <a href="#" className="hover:text-foreground transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-8 bg-card border border-border rounded hover:border-foreground/20 transition-all group">
    <div className="text-muted-foreground group-hover:text-foreground transition-colors mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-light mb-3">{title}</h3>
    <p className="text-muted-foreground text-sm font-light leading-relaxed">{description}</p>
  </div>
);

const PricingCard = ({ 
  name, 
  price, 
  features, 
  cta, 
  highlighted, 
  onClick 
}: { 
  name: string; 
  price: string; 
  features: string[]; 
  cta: string; 
  highlighted?: boolean;
  onClick: () => void;
}) => (
  <div className={`p-8 bg-card border rounded ${highlighted ? 'border-foreground' : 'border-border'} transition-all hover:border-foreground/50`}>
    <h3 className="text-2xl font-light mb-2">{name}</h3>
    <div className="text-4xl font-light mb-8">
      {price === "По запросу" ? price : `₽${price}`}
      {price !== "По запросу" && <span className="text-sm text-muted-foreground">/мес</span>}
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
          <span className="text-foreground mt-0.5">✓</span>
          {feature}
        </li>
      ))}
    </ul>
    <Button 
      className="w-full" 
      variant={highlighted ? "default" : "outline"}
      onClick={onClick}
    >
      {cta}
    </Button>
  </div>
);

export default Landing;

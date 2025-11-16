import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, Share2, DollarSign, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  description: string;
  status: "draft" | "published" | "paid";
  modules: number;
  createdAt: string;
}

const Library = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const mockCourses: Course[] = [
    {
      id: "course1",
      title: "React Basics",
      description: "Изучите основы React и создайте свое первое приложение",
      status: "published",
      modules: 12,
      createdAt: "2024-01-15"
    },
    {
      id: "course2",
      title: "TypeScript Advanced",
      description: "Продвинутые концепции TypeScript для профессионалов",
      status: "draft",
      modules: 8,
      createdAt: "2024-01-20"
    },
    {
      id: "course3",
      title: "Node.js Backend Development",
      description: "Полное руководство по backend разработке на Node.js",
      status: "paid",
      modules: 15,
      createdAt: "2024-02-01"
    },
  ];

  const getStatusBadge = (status: Course["status"]) => {
    const variants = {
      draft: { label: "Черновик", variant: "outline" as const },
      published: { label: "Опубликован", variant: "default" as const },
      paid: { label: "Платный", variant: "secondary" as const },
    };
    return variants[status];
  };

  const filteredCourses = mockCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />
      
      <main className="ml-64 flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-light mb-2">Библиотека курсов</h1>
              <p className="text-muted-foreground text-sm">
                Управляйте вашими курсами, публикуйте и монетизируйте
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Поиск курсов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => {
              const statusBadge = getStatusBadge(course.status);
              
              return (
                <div
                  key={course.id}
                  className="bg-card border border-border rounded-lg p-6 hover:border-foreground/20 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-light">{course.title}</h3>
                    <Badge variant={statusBadge.variant} className="text-xs">
                      {statusBadge.label}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                    <span>{course.modules} модулей</span>
                    <span>•</span>
                    <span>{new Date(course.createdAt).toLocaleDateString('ru-RU')}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => navigate(`/course/${course.id}`)}
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      Открыть
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="h-3 w-3" />
                    </Button>
                    {course.status === "paid" && (
                      <Button size="sm" variant="outline">
                        <DollarSign className="h-3 w-3" />
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Курсы не найдены</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Library;

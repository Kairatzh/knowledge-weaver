import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, Bookmark, MessageCircle, Star } from "lucide-react";
import { toast } from "sonner";

interface CommunityCourse {
  id: string;
  title: string;
  author: string;
  description: string;
  rating: number;
  likes: number;
  bookmarks: number;
  comments: number;
  tags: string[];
  isPaid: boolean;
  price?: number;
}

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const mockCourses: CommunityCourse[] = [
    {
      id: "1",
      title: "Fullstack разработка с React и Node.js",
      author: "Алексей Петров",
      description: "Комплексный курс для создания современных веб-приложений",
      rating: 4.8,
      likes: 342,
      bookmarks: 128,
      comments: 45,
      tags: ["React", "Node.js", "TypeScript"],
      isPaid: true,
      price: 2990
    },
    {
      id: "2",
      title: "Python для Data Science",
      author: "Мария Иванова",
      description: "От основ до машинного обучения и визуализации данных",
      rating: 4.9,
      likes: 512,
      bookmarks: 234,
      comments: 78,
      tags: ["Python", "ML", "Data Science"],
      isPaid: false
    },
    {
      id: "3",
      title: "UI/UX дизайн с нуля",
      author: "Дмитрий Смирнов",
      description: "Научитесь создавать красивые и удобные интерфейсы",
      rating: 4.7,
      likes: 298,
      bookmarks: 156,
      comments: 34,
      tags: ["Design", "Figma", "UI/UX"],
      isPaid: true,
      price: 1990
    },
  ];

  const handleLike = (courseId: string) => {
    toast.success("Добавлено в избранное!");
  };

  const handleBookmark = (courseId: string) => {
    toast.success("Сохранено в закладки!");
  };

  const filteredCourses = mockCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />
      
      <main className="ml-64 flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-light mb-2">Сообщество</h1>
            <p className="text-muted-foreground text-sm">
              Открывайте и делитесь курсами с другими пользователями
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Поиск по курсам, тегам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
          </div>

          {/* Courses Feed */}
          <div className="space-y-6">
            {filteredCourses.map(course => (
              <div
                key={course.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-foreground/20 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-light mb-1">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      от {course.author}
                    </p>
                  </div>
                  {course.isPaid && (
                    <Badge variant="secondary" className="text-sm">
                      ₽{course.price}
                    </Badge>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {course.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {course.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Stats & Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current text-primary" />
                      {course.rating}
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {course.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <Bookmark className="h-4 w-4" />
                      {course.bookmarks}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {course.comments}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleLike(course.id)}
                    >
                      <Heart className="h-4 w-4 mr-1" />
                      Нравится
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleBookmark(course.id)}
                    >
                      <Bookmark className="h-4 w-4 mr-1" />
                      Сохранить
                    </Button>
                  </div>
                </div>
              </div>
            ))}
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

export default Community;

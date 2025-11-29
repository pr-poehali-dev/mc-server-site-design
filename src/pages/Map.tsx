import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Map = () => {
  const mapFeatures = [
    {
      name: 'Центральный спавн',
      description: 'Главная точка сервера с порталами и магазинами',
      icon: 'MapPin',
      color: 'from-primary to-secondary',
    },
    {
      name: 'PvP Арены',
      description: 'Специальные зоны для сражений',
      icon: 'Sword',
      color: 'from-secondary to-accent',
    },
    {
      name: 'Торговые районы',
      description: 'Зоны с магазинами игроков',
      icon: 'Store',
      color: 'from-accent to-primary',
    },
    {
      name: 'Квестовые зоны',
      description: 'Области с NPC и заданиями',
      icon: 'Target',
      color: 'from-primary to-accent',
    },
  ];

  const dimensions = [
    {
      name: 'Обычный мир',
      description: 'Основной мир для строительства и выживания',
      size: '20000x20000 блоков',
      icon: 'Globe',
    },
    {
      name: 'Нижний мир',
      description: 'Опасный мир с уникальными ресурсами',
      size: '10000x10000 блоков',
      icon: 'Flame',
    },
    {
      name: 'Край',
      description: 'Эндер мир с драконом и городами',
      size: '15000x15000 блоков',
      icon: 'Sparkles',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Карта мира DragonDawn
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Исследуйте огромный мир с уникальными локациями и возможностями
            </p>
          </div>

          <Card className="overflow-hidden border-primary/50 animate-fade-in">
            <div
              className="w-full h-96 bg-cover bg-center relative"
              style={{
                backgroundImage: `url('https://cdn.poehali.dev/projects/322d36d3-8ebc-41ee-b2ce-831aec7a63c8/files/4995b459-8ba8-41c7-a02a-cd3697737e4e.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-wrap gap-2">
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <Icon name="MapPin" size={14} className="text-primary" />
                    <span>Размер мира: 20k x 20k</span>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <Icon name="Users" size={14} className="text-secondary" />
                    <span>500+ активных регионов</span>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <Icon name="Home" size={14} className="text-accent" />
                    <span>1000+ построек</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Ключевые локации
          </h2>
          <p className="text-muted-foreground text-lg">
            Интересные места, которые стоит посетить
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mapFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon name={feature.icon as any} size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Измерения сервера
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="world" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="world">Обычный мир</TabsTrigger>
                <TabsTrigger value="nether">Нижний мир</TabsTrigger>
                <TabsTrigger value="end">Край</TabsTrigger>
              </TabsList>

              {dimensions.map((dimension, index) => (
                <TabsContent key={index} value={dimension.name === 'Обычный мир' ? 'world' : dimension.name === 'Нижний мир' ? 'nether' : 'end'}>
                  <Card className="p-8">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name={dimension.icon as any} size={36} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-4">{dimension.name}</h3>
                        <p className="text-muted-foreground text-lg mb-4">{dimension.description}</p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="Maximize2" size={18} />
                          <span>Размер: {dimension.size}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <Card className="p-8 max-w-4xl mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Интерактивная карта</h3>
              <p className="text-muted-foreground mb-6">
                Используйте онлайн-карту для навигации по миру в реальном времени. 
                Отслеживайте игроков, находите интересные места и планируйте маршруты.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Обновление в реальном времени</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Поиск по координатам</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-48 h-48 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform">
                <Icon name="Map" size={80} className="text-white group-hover:scale-110 transition-transform" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background px-4 py-2 rounded-full text-sm whitespace-nowrap">
                  map.dragondawn.ru
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Map;

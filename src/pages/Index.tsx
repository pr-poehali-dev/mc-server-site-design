import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DonateModal from '@/components/DonateModal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenDonateModal = () => {
      setDonateModalOpen(true);
    };

    window.addEventListener('open-donate-modal', handleOpenDonateModal);
    return () => {
      window.removeEventListener('open-donate-modal', handleOpenDonateModal);
    };
  }, []);

  const features = [
    {
      icon: 'Sword',
      title: 'PvP Арены',
      description: 'Сражайтесь с другими игроками в специальных аренах',
    },
    {
      icon: 'Home',
      title: 'Приватные территории',
      description: 'Защитите свои постройки от грифферов',
    },
    {
      icon: 'TrendingUp',
      title: 'Экономика',
      description: 'Развитая игровая экономика и торговля',
    },
    {
      icon: 'Users',
      title: 'Кланы',
      description: 'Создавайте кланы и сражайтесь за территории',
    },
    {
      icon: 'Sparkles',
      title: 'Уникальные квесты',
      description: 'Более 100 квестов с наградами',
    },
    {
      icon: 'Zap',
      title: 'Быстрые сервера',
      description: 'Без лагов и с поддержкой 24/7',
    },
  ];

  const stats = [
    { value: '1000+', label: 'Игроков онлайн' },
    { value: '50+', label: 'Уникальных режимов' },
    { value: '99.9%', label: 'Аптайм серверов' },
    { value: '24/7', label: 'Поддержка' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/322d36d3-8ebc-41ee-b2ce-831aec7a63c8/files/8d5a4eda-03cf-4a56-9c58-99f7313a42aa.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              DragonDawn
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Погрузитесь в мир приключений, где каждый найдет что-то для себя
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2"
                onClick={() => setDonateModalOpen(true)}
              >
                <Icon name="Heart" size={20} className="mr-2" />
                Поддержать проект
              </Button>
            </div>

            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full border border-border">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-sm">IP: play.dragondawn.ru</span>
              <Button
                variant="ghost"
                size="sm"
                className="ml-2 h-6 px-2"
                onClick={() => navigator.clipboard.writeText('play.dragondawn.ru')}
              >
                <Icon name="Copy" size={14} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Возможности сервера
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мы предлагаем уникальный игровой опыт с множеством возможностей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name={feature.icon as any} size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section
        className="py-32 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/322d36d3-8ebc-41ee-b2ce-831aec7a63c8/files/3f1212dd-1ae0-40d6-8400-bd31c408dfa7.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Готовы начать приключение?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам игроков уже сегодня
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg px-8 py-6"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать играть сейчас
          </Button>
        </div>
      </section>

      <Footer />
      <DonateModal open={donateModalOpen} onOpenChange={setDonateModalOpen} />
    </div>
  );
};

export default Index;

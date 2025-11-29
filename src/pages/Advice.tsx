import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Advice = () => {
  const adviceList = [
    {
      category: 'Для новичков',
      icon: 'Sparkles',
      tips: [
        'Начните с изучения спавна - там есть все необходимые подсказки',
        'Используйте команду /help для просмотра доступных команд',
        'Присоединитесь к нашему Discord для быстрой помощи',
        'Не стесняйтесь задавать вопросы в общем чате',
      ],
    },
    {
      category: 'Выживание',
      icon: 'Heart',
      tips: [
        'Всегда носите с собой дополнительную еду и инструменты',
        'Создайте приват для защиты своих построек командой /claim',
        'Изучите систему торговли для быстрого развития',
        'Объединяйтесь с другими игроками для совместных проектов',
      ],
    },
    {
      category: 'PvP',
      icon: 'Sword',
      tips: [
        'Тренируйтесь на специальных аренах перед реальными боями',
        'Используйте зелья и зачарования для преимущества',
        'Изучите комбо-атаки для эффективного боя',
        'Следите за выносливостью и не забывайте о регенерации',
      ],
    },
    {
      category: 'Экономика',
      icon: 'TrendingUp',
      tips: [
        'Создайте свой магазин для пассивного дохода',
        'Изучите цены на рынке перед покупкой/продажей',
        'Участвуйте в аукционах для выгодных сделок',
        'Инвестируйте в редкие ресурсы для будущей прибыли',
      ],
    },
  ];

  const proTips = [
    {
      title: 'Автоматизация',
      description: 'Создавайте автоматические фермы для экономии времени',
      icon: 'Cog',
    },
    {
      title: 'Командная игра',
      description: 'Создайте клан и захватывайте территории вместе',
      icon: 'Users',
    },
    {
      title: 'Квесты',
      description: 'Выполняйте ежедневные квесты для получения наград',
      icon: 'Target',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Советы от MrVoldex
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Проверенные советы от основателя сервера для максимально эффективной игры
            </p>
          </div>

          <Card className="p-8 mb-12 border-primary/50 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm animate-fade-in">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={36} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Приветствие от основателя</h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Привет! Я MrVoldex, основатель DragonDawn. За годы работы над сервером я собрал 
                  множество полезных советов, которые помогут вам быстрее освоиться и добиться успеха. 
                  Эти рекомендации основаны на опыте тысяч игроков нашего комьюнити.
                </p>
                <p className="text-muted-foreground italic">
                  "Помните: в DragonDawn нет предела совершенству. Каждый день - это возможность стать лучше!"
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="space-y-12">
          {adviceList.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="animate-fade-in"
              style={{ animationDelay: `${sectionIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name={section.icon as any} size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold">{section.category}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {section.tips.map((tip, tipIndex) => (
                  <Card
                    key={tipIndex}
                    className="p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{tip}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Pro советы
            </h2>
            <p className="text-muted-foreground text-lg">
              Эксклюзивные рекомендации для продвинутых игроков
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {proTips.map((tip, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <Icon name={tip.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 max-w-4xl mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Нужна персональная помощь?</h3>
              <p className="text-muted-foreground mb-6">
                Наша администрация всегда готова помочь с любыми вопросами
              </p>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с поддержкой
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Advice;

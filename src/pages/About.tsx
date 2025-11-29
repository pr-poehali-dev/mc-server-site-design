import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Основание',
      description: 'Запуск первого сервера DragonDawn',
    },
    {
      year: '2021',
      title: 'Рост комьюнити',
      description: 'Более 500 активных игроков',
    },
    {
      year: '2022',
      title: 'Новые режимы',
      description: 'Добавлено 20+ уникальных режимов',
    },
    {
      year: '2023',
      title: 'Международное признание',
      description: 'Топ-10 серверов России',
    },
    {
      year: '2024',
      title: 'Сегодня',
      description: '1000+ игроков онлайн ежедневно',
    },
  ];

  const team = [
    { role: 'Основатель', name: 'MrVoldex', description: 'Создатель и главный разработчик' },
    { role: 'Администрация', name: 'Команда модераторов', description: '24/7 поддержка игроков' },
    { role: 'Разработка', name: 'Dev Team', description: 'Создание уникального контента' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              О Dragon Craft
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              История создания самого атмосферного и технологичного Minecraft сервера
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold">Наша миссия</h2>
              <p className="text-muted-foreground text-lg">
                Dragon Craft был создан с целью предоставить игрокам уникальный опыт в мире Minecraft. 
                Мы стремимся создать дружелюбное комьюнити, где каждый может найти что-то для себя.
              </p>
              <p className="text-muted-foreground text-lg">
                Наши сервера работают на современном оборудовании, что гарантирует стабильную работу 
                без лагов и задержек. Мы постоянно развиваемся и добавляем новые возможности.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Стабильная работа</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Честная администрация</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>Уникальный контент</span>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl overflow-hidden shadow-2xl animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <img
                src="https://cdn.poehali.dev/projects/322d36d3-8ebc-41ee-b2ce-831aec7a63c8/files/3f1212dd-1ae0-40d6-8400-bd31c408dfa7.jpg"
                alt="DragonDawn Server"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            История развития
          </h2>
          <p className="text-muted-foreground text-lg">
            От идеи до одного из лучших серверов
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 mb-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">
                  {item.year}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-1 h-full bg-gradient-to-b from-primary to-secondary/20 mt-2" />
                )}
              </div>
              <Card className="flex-1 p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Наша команда
            </h2>
            <p className="text-muted-foreground text-lg">
              Профессионалы, которые делают сервер лучше каждый день
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <div className="text-sm text-muted-foreground mb-2">{member.role}</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
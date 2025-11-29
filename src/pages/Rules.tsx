import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Rules = () => {
  const generalRules = [
    {
      title: 'Уважение к игрокам',
      description: 'Запрещены оскорбления, угрозы и любые формы дискриминации по отношению к другим игрокам.',
    },
    {
      title: 'Честная игра',
      description: 'Использование читов, багов и эксплойтов строго запрещено. Играйте честно!',
    },
    {
      title: 'Спам и реклама',
      description: 'Запрещен спам в чате и реклама других серверов без разрешения администрации.',
    },
    {
      title: 'Гриферство',
      description: 'Разрушение чужих построек и кража без согласия владельца запрещены.',
    },
  ];

  const punishments = [
    { violation: 'Первое нарушение', punishment: 'Предупреждение', icon: 'AlertTriangle' },
    { violation: 'Второе нарушение', punishment: 'Мут на 24 часа', icon: 'AlertCircle' },
    { violation: 'Третье нарушение', punishment: 'Бан на 7 дней', icon: 'XCircle' },
    { violation: 'Грубые нарушения', punishment: 'Перманентный бан', icon: 'Ban' },
  ];

  const faqItems = [
    {
      question: 'Можно ли использовать модификации?',
      answer: 'Разрешены только косметические модификации и оптимизация (OptiFine, Sodium). Любые модификации, дающие преимущество в игре, запрещены.',
    },
    {
      question: 'Как пожаловаться на нарушителя?',
      answer: 'Используйте команду /report [ник игрока] [причина] в игре или создайте тикет в нашем Discord сервере с доказательствами нарушения.',
    },
    {
      question: 'Можно ли обжаловать бан?',
      answer: 'Да, вы можете подать апелляцию на нашем форуме в разделе "Обжалование наказаний". Укажите ваш ник, причину бана и объяснение ситуации.',
    },
    {
      question: 'Какие команды доступны игрокам?',
      answer: 'Базовые команды: /home, /spawn, /tpa, /trade. Донатеры имеют доступ к дополнительным командам в зависимости от привилегии.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Правила сервера
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Соблюдайте правила, чтобы сделать игру комфортной для всех
            </p>
          </div>

          <Card className="p-8 mb-12 border-primary/50 bg-card/50 backdrop-blur-sm animate-fade-in">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Важно знать</h3>
                <p className="text-muted-foreground">
                  Незнание правил не освобождает от ответственности. Администрация оставляет за собой право 
                  изменять правила без предварительного уведомления. Следите за обновлениями!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Основные правила
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {generalRules.map((rule, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Check" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{rule.title}</h3>
                  <p className="text-muted-foreground">{rule.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Система наказаний
            </h2>
            <p className="text-muted-foreground text-lg">
              За нарушение правил предусмотрены следующие меры
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {punishments.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2">{item.violation}</h3>
                <p className="text-muted-foreground text-sm">{item.punishment}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rules;
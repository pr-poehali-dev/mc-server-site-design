import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const donationTiers = [
    {
      amount: 100,
      title: 'Поддержка',
      perks: ['Благодарность в чате', 'Доступ к эксклюзивным смайликам', 'Роль Supporter'],
      color: 'from-primary to-accent',
    },
    {
      amount: 500,
      title: 'VIP',
      perks: ['Все из предыдущего', 'VIP префикс', 'Приоритетный вход', 'Дополнительные слоты для домов', '5% скидка в магазине'],
      color: 'from-accent to-secondary',
      popular: true,
    },
    {
      amount: 1000,
      title: 'Premium',
      perks: ['Все из предыдущего', 'Premium префикс', 'Уникальные питомцы', 'Эффекты частиц', '15% скидка в магазине', 'Доступ к /fly'],
      color: 'from-secondary to-primary',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Поддержи Dragon Craft
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Твоя поддержка помогает нам развивать сервер, добавлять новый контент и поддерживать инфраструктуру
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {donationTiers.map((tier, index) => (
              <Card
                key={index}
                className={`p-8 relative overflow-hidden transition-all hover:scale-105 cursor-pointer ${
                  selectedAmount === tier.amount ? 'border-primary border-2 shadow-lg shadow-primary/50' : ''
                } ${tier.popular ? 'border-accent border-2' : ''}`}
                onClick={() => setSelectedAmount(tier.amount)}
              >
                {tier.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Популярное
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon name="Heart" size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {tier.amount}₽
                  </span>
                </div>
                
                <div className="space-y-3">
                  {tier.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{perk}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-card border border-primary/20 p-8 rounded-2xl mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Выбери сумму доната</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[100, 200, 500, 1000, 2000, 5000, 10000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                    selectedAmount === amount
                      ? 'border-primary bg-primary/10'
                      : 'border-primary/20 hover:border-primary/50'
                  }`}
                >
                  <span className="text-2xl font-bold">{amount}₽</span>
                </button>
              ))}
              <button
                onClick={() => setSelectedAmount(0)}
                className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                  selectedAmount === 0
                    ? 'border-accent bg-accent/10'
                    : 'border-primary/20 hover:border-accent/50'
                }`}
              >
                <span className="text-lg font-bold">Своя сумма</span>
              </button>
            </div>

            {selectedAmount !== null && (
              <div className="space-y-4 animate-fade-in">
                {selectedAmount === 0 && (
                  <div>
                    <label className="block text-sm font-semibold mb-2">Введи сумму</label>
                    <input
                      type="number"
                      placeholder="Сумма в рублях"
                      className="w-full px-4 py-3 bg-muted border border-primary/20 rounded-lg focus:border-primary outline-none"
                    />
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Твой никнейм в игре</label>
                  <input
                    type="text"
                    placeholder="Введи никнейм"
                    className="w-full px-4 py-3 bg-muted border border-primary/20 rounded-lg focus:border-primary outline-none"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-accent text-white text-lg py-6 hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105">
                  <Icon name="CreditCard" size={24} className="mr-2" />
                  Перейти к оплате
                </Button>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-lg">Безопасность</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Все платежи защищены SSL-шифрованием и обрабатываются через проверенные платежные системы
              </p>
            </Card>

            <Card className="p-6 border-accent/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-lg">Мгновенно</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Привилегии активируются автоматически сразу после успешной оплаты
              </p>
            </Card>

            <Card className="p-6 border-secondary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                  <Icon name="LifeBuoy" size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-lg">Поддержка</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Если возникли проблемы с платежом, наша служба поддержки работает 24/7
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;

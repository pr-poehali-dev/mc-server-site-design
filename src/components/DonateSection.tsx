import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const DonateSection = () => {
  const [amount, setAmount] = useState('');
  const [nickname, setNickname] = useState('');

  const donationTiers = [
    {
      name: 'VIP',
      price: '299₽',
      color: 'from-green-600 to-emerald-600',
      features: ['Префикс [VIP]', 'Доступ к /fly', '5 домов', 'Приоритет входа'],
      icon: 'Star',
    },
    {
      name: 'PREMIUM',
      price: '599₽',
      color: 'from-blue-600 to-cyan-600',
      features: ['Префикс [PREMIUM]', 'Все привилегии VIP', '10 домов', 'Цветной ник', 'Кит раз в день'],
      icon: 'Crown',
      popular: true,
    },
    {
      name: 'LEGEND',
      price: '999₽',
      color: 'from-purple-600 to-pink-600',
      features: ['Префикс [LEGEND]', 'Все привилегии PREMIUM', '20 домов', '/god режим', 'Эксклюзивные киты'],
      icon: 'Sparkles',
    },
  ];

  const quickAmounts = [100, 300, 500, 1000];

  return (
    <section id="donate" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 mb-4 shadow-lg shadow-pink-500/30">
            <Icon name="Heart" size={32} className="text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            Поддержать проект
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Твоя поддержка помогает серверу развиваться и становиться лучше каждый день
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {donationTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 animate-fade-in p-6 ${
                tier.popular ? 'ring-2 ring-emerald-500/50 shadow-2xl shadow-emerald-500/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  ПОПУЛЯРНОЕ
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4 shadow-lg`}>
                <Icon name={tier.icon as any} size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-black text-white mb-2">{tier.name}</h3>
              <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-6">
                {tier.price}
              </div>
              
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                    <Icon name="CheckCircle" size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full bg-gradient-to-r ${tier.color} hover:opacity-90 text-white font-bold shadow-lg`}
              >
                Купить {tier.name}
              </Button>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-emerald-500/30 p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Произвольная сумма</h3>
          
          <div className="max-w-xl mx-auto space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Твой никнейм в игре</label>
              <Input
                placeholder="Введи никнейм"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="bg-black/30 border-emerald-500/30 text-white placeholder:text-gray-500"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Сумма пожертвования</label>
              <Input
                type="number"
                placeholder="Введи сумму"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-black/30 border-emerald-500/30 text-white placeholder:text-gray-500"
              />
              
              <div className="flex gap-2 mt-3">
                {quickAmounts.map((amt) => (
                  <Button
                    key={amt}
                    variant="outline"
                    size="sm"
                    onClick={() => setAmount(amt.toString())}
                    className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/30"
                  >
                    {amt}₽
                  </Button>
                ))}
              </div>
            </div>
            
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold shadow-lg shadow-emerald-500/30"
            >
              <Icon name="Heart" size={20} className="mr-2" />
              Поддержать проект
            </Button>
          </div>
          
          <p className="text-center text-sm text-gray-400 mt-6">
            Все средства идут на оплату хостинга, обновление сервера и проведение ивентов
          </p>
        </Card>
      </div>
    </section>
  );
};

export default DonateSection;

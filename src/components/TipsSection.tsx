import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TipsSection = () => {
  const tips = [
    {
      icon: 'Home',
      title: 'Начни с постройки дома',
      description: 'Первым делом построй себе безопасное убежище и заприваться территорию. Это защитит твои ресурсы от других игроков.',
    },
    {
      icon: 'Users',
      title: 'Найди союзников',
      description: 'В одиночку выжить сложнее. Вступай в кланы или создай свой - вместе веселее и безопаснее!',
    },
    {
      icon: 'Coins',
      title: 'Развивай экономику',
      description: 'Создай свой магазин, торгуй с игроками, зарабатывай игровую валюту. Экономика - ключ к успеху!',
    },
    {
      icon: 'Pickaxe',
      title: 'Не забывай про ресурсы',
      description: 'Регулярно добывай ресурсы - дерево, камень, руду. Они понадобятся для развития и крафта.',
    },
    {
      icon: 'Shield',
      title: 'Качай броню и оружие',
      description: 'Хорошая экипировка спасёт тебя в PvP боях и при исследовании опасных мест.',
    },
    {
      icon: 'Star',
      title: 'Проходи квесты',
      description: 'Выполняй квесты от NPC и других игроков - получай опыт, валюту и уникальные предметы.',
    },
  ];

  return (
    <section id="tips" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 mb-4 shadow-lg shadow-yellow-500/30">
            <Icon name="Lightbulb" size={32} className="text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
            Совет от MrVoldex
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Основатель сервера делится секретами успешной игры
          </p>
        </div>

        <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-sm border-yellow-500/30 p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center text-5xl shadow-2xl shadow-yellow-500/30 flex-shrink-0">
              👑
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Приветствую тебя, игрок!</h3>
              <p className="text-gray-300 leading-relaxed">
                Я - <span className="text-yellow-400 font-bold">MrVoldex</span>, создатель этого сервера. 
                За годы существования ЧОЁТ я увидел тысячи игроков, и знаю, что нужно для успеха. 
                Главное правило - <span className="text-emerald-400 font-bold">играй честно, помогай другим и развивайся</span>. 
                Не гонись за быстрыми победами через читы или баги - настоящее удовольствие приходит от честной игры. 
                Помни: на этом сервере ты не один, здесь целое сообщество. Уважай других, и тебя будут уважать!
              </p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 animate-fade-in p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center mb-4 shadow-lg">
                <Icon name={tip.icon as any} size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
              <p className="text-gray-400 text-sm">{tip.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const MapSection = () => {
  return (
    <section id="map" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Icon name="Map" size={48} className="text-emerald-400 mx-auto mb-4" />
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
            Карта мира
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Исследуй огромный мир ЧОЁТ с помощью интерактивной карты
          </p>
        </div>

        <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-emerald-500/30 overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-emerald-900/30 to-green-900/30 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200')] bg-cover bg-center opacity-20" />
            <div className="relative z-10 text-center space-y-6 p-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center shadow-2xl shadow-emerald-500/30 mb-4">
                <Icon name="MapPin" size={48} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Интерактивная карта</h3>
              <p className="text-gray-300 max-w-xl mx-auto">
                Открой полную карту мира в браузере, чтобы увидеть все биомы, постройки игроков, 
                торговые точки и важные локации
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold shadow-lg shadow-emerald-500/30"
              >
                <Icon name="ExternalLink" size={20} className="mr-2" />
                Открыть карту
              </Button>
            </div>
          </div>
          
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-3 shadow-lg">
                <Icon name="Navigation" size={28} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Навигация</h4>
              <p className="text-sm text-gray-400">Легко находи нужные локации и координаты</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-3 shadow-lg">
                <Icon name="Users" size={28} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Игроки онлайн</h4>
              <p className="text-sm text-gray-400">Смотри, кто сейчас в игре и где находится</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center mb-3 shadow-lg">
                <Icon name="Flag" size={28} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Метки</h4>
              <p className="text-sm text-gray-400">Отмечай важные места и делись с друзьями</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MapSection;

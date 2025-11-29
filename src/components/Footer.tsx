import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-emerald-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/d49dfe2b-21b1-43d9-ad6b-de9e42aa00d4.png" 
                alt="Logo" 
                className="w-12 h-12"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
                ЧОЁТ
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Лучший Minecraft сервер с уникальными режимами и дружным сообществом
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Главная</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">О сервере</a></li>
              <li><a href="#rules" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Правила</a></li>
              <li><a href="#tips" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Советы</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <Icon name="Server" size={16} className="text-emerald-400" />
                IP: play.choet.ru
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <Icon name="Zap" size={16} className="text-emerald-400" />
                Версия: 1.20.x
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-emerald-400" />
                Работает 24/7
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Соцсети</h4>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/30 hover:border-emerald-500/50"
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/30 hover:border-emerald-500/50"
              >
                <Icon name="Youtube" size={20} />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/30 hover:border-emerald-500/50"
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-emerald-500/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 ЧОЁТ Minecraft Server. Все права защищены. Создано с ❤️ для игроков
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
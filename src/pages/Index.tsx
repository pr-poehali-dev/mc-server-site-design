import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-8 animate-float">
            <img 
              src="https://cdn.poehali.dev/files/ef916990-e671-4666-903f-920a23581dbb.png" 
              alt="Dragon Logo" 
              className="h-32 w-32 mx-auto drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in">
            Dragon Craft Server
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Присоединяйся к легендарному серверу с уникальными возможностями
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <div className="bg-card border border-primary/30 px-8 py-4 rounded-lg flex items-center gap-3">
              <Icon name="Server" size={24} className="text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">IP сервера</p>
                <p className="text-lg font-bold text-primary">play.dragoncraft.ru</p>
              </div>
            </div>
            
            <div className="bg-card border border-accent/30 px-8 py-4 rounded-lg flex items-center gap-3">
              <Icon name="Users" size={24} className="text-accent" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Онлайн</p>
                <p className="text-lg font-bold text-accent">256 / 500</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <Link
              to="/donate"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            >
              Поддержать проект
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-card border-2 border-primary/30 text-foreground rounded-lg font-semibold text-lg hover:border-primary transition-all hover:scale-105"
            >
              Узнать больше
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Особенности сервера
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-primary/20 p-8 rounded-xl hover:border-primary/50 transition-all hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Swords" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">PvP Арены</h3>
              <p className="text-muted-foreground">
                Сражайся на специальных аренах с уникальными механиками и получай награды
              </p>
            </div>

            <div className="bg-card border border-accent/20 p-8 rounded-xl hover:border-accent/50 transition-all hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Pickaxe" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Экономика</h3>
              <p className="text-muted-foreground">
                Развитая игровая экономика с магазинами, аукционами и торговлей между игроками
              </p>
            </div>

            <div className="bg-card border border-secondary/20 p-8 rounded-xl hover:border-secondary/50 transition-all hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Map" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Уникальные миры</h3>
              <p className="text-muted-foreground">
                Исследуй кастомные миры с особыми биомами, данжами и боссами
              </p>
            </div>

            <div className="bg-card border border-primary/20 p-8 rounded-xl hover:border-primary/50 transition-all hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Защита от гриферов</h3>
              <p className="text-muted-foreground">
                Надежная система защиты территорий и активная модерация
              </p>
            </div>

            <div className="bg-card border border-accent/20 p-8 rounded-xl hover:border-accent/50 transition-all hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Crown" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Система рангов</h3>
              <p className="text-muted-foreground">
                Прокачивай свой ранг и получай эксклюзивные привилегии и возможности
              </p>
            </div>

            <div className="bg-card border border-secondary/20 p-8 rounded-xl hover:border-secondary/50 transition-all hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Heart" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Дружное комьюнити</h3>
              <p className="text-muted-foreground">
                Тысячи активных игроков, события, конкурсы и дружелюбная атмосфера
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Начни играть прямо сейчас!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Скопируй IP адрес сервера и начни свое приключение в Dragon Craft
          </p>
          <div className="inline-flex items-center gap-4 bg-card border border-primary/30 px-8 py-4 rounded-lg">
            <Icon name="Copy" size={24} className="text-primary" />
            <span className="text-2xl font-bold text-primary">play.dragoncraft.ru</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

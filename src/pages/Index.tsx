import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-dark via-minecraft-gray to-minecraft-brown font-body">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-minecraft-dark/95 backdrop-blur-sm border-b-4 border-minecraft-green">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-minecraft-brown border-2 border-minecraft-gold" />
              <h1 className="text-xl md:text-2xl font-minecraft text-minecraft-green">MINECRAFT HOSTING</h1>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {['Главная', 'Тарифы', 'Возможности', 'FAQ', 'Поддержка', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-minecraft-gold transition-colors font-medium text-sm"
                >
                  {item}
                </button>
              ))}
            </div>

            <Button className="bg-minecraft-green hover:bg-minecraft-green/80 text-white font-minecraft text-xs md:text-sm border-2 border-minecraft-gold">
              ВОЙТИ
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block animate-float mb-8">
            <div className="w-24 h-24 bg-minecraft-brown border-4 border-minecraft-green mx-auto" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-minecraft text-minecraft-green mb-6 animate-pixel-fade">
            ПОСТРОЙ СВОЙ МИР
          </h2>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Профессиональный хостинг серверов Minecraft с мгновенным запуском и круглосуточной поддержкой
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('тарифы')}
              className="bg-minecraft-green hover:bg-minecraft-green/80 text-white font-minecraft text-lg px-8 py-6 border-4 border-minecraft-gold"
            >
              ВЫБРАТЬ ТАРИФ
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-transparent border-4 border-white text-white hover:bg-white hover:text-minecraft-dark font-minecraft text-lg px-8 py-6"
            >
              ПОПРОБОВАТЬ
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: 'Server', label: 'SSD диски', value: '99.9%' },
              { icon: 'Zap', label: 'Мгновенный старт', value: '30 сек' },
              { icon: 'Users', label: 'Игроков онлайн', value: '10K+' },
              { icon: 'Shield', label: 'DDoS защита', value: '24/7' }
            ].map((stat) => (
              <Card key={stat.label} className="bg-minecraft-dark/80 border-2 border-minecraft-green">
                <CardContent className="pt-6 text-center">
                  <Icon name={stat.icon} className="mx-auto mb-3 text-minecraft-gold" size={32} />
                  <p className="text-2xl font-minecraft text-minecraft-green mb-2">{stat.value}</p>
                  <p className="text-white text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="тарифы" className="py-20 px-4 bg-minecraft-dark/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-minecraft text-center text-minecraft-gold mb-12">
            ТАРИФЫ
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: 'БАЗОВЫЙ',
                price: '150₽',
                period: '/месяц',
                players: 'До 8 игроков',
                ram: '1 GB RAM',
                storage: '5 GB NVMe',
                features: ['DDoS защита', 'Панель управления', 'Автозапуск', 'Техподдержка'],
                color: 'minecraft-green',
                popular: false
              },
              {
                name: 'СТАНДАРТ',
                price: '300₽',
                period: '/месяц',
                players: 'До 20 игроков',
                ram: '2 GB RAM',
                storage: '15 GB NVMe',
                features: ['Всё из Базового', 'FTP доступ', 'Автобэкап каждые 6ч', 'Установка модов'],
                color: 'minecraft-gold',
                popular: true
              },
              {
                name: 'ПРОДВИНУТЫЙ',
                price: '600₽',
                period: '/месяц',
                players: 'До 50 игроков',
                ram: '4 GB RAM',
                storage: '30 GB NVMe',
                features: ['Всё из Стандарт', 'MySQL база данных', 'Приоритет поддержки', 'Выделенный IP'],
                color: 'minecraft-brown',
                popular: false
              },
              {
                name: 'МАКСИМАЛЬНЫЙ',
                price: '1200₽',
                period: '/месяц',
                players: 'До 100 игроков',
                ram: '8 GB RAM',
                storage: '60 GB NVMe',
                features: ['Всё из Продвинутый', 'Бесплатный домен', 'Кастомные плагины', 'Выделенное ядро CPU'],
                color: 'minecraft-green',
                popular: false
              }
            ].map((plan) => (
              <Card 
                key={plan.name} 
                className={`bg-minecraft-dark border-4 ${
                  plan.popular 
                    ? 'border-minecraft-gold scale-105 shadow-2xl' 
                    : 'border-minecraft-green'
                } relative overflow-hidden hover:scale-105 transition-transform`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-minecraft-gold text-minecraft-dark font-minecraft text-xs px-4 py-2">
                    ПОПУЛЯРНО
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className={`text-2xl font-minecraft text-${plan.color} text-center mb-4`}>
                    {plan.name}
                  </CardTitle>
                  
                  <div className="text-center">
                    <span className="text-5xl font-minecraft text-white">{plan.price}</span>
                    <span className="text-white text-sm">{plan.period}</span>
                  </div>
                  
                  <CardDescription className="text-center mt-4">
                    <p className="text-minecraft-gold font-semibold text-lg">{plan.players}</p>
                    <p className="text-white">{plan.ram} • {plan.storage}</p>
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-white">
                        <Icon name="Check" className="text-minecraft-green mt-1 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full bg-${plan.color} hover:bg-${plan.color}/80 text-white font-minecraft border-2 border-minecraft-dark`}
                  >
                    ВЫБРАТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="возможности" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-minecraft text-center text-minecraft-green mb-12">
            ВОЗМОЖНОСТИ
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'Pickaxe', title: 'Моды и плагины', desc: 'Устанавливайте любые моды в один клик' },
              { icon: 'Database', title: 'Автобэкапы', desc: 'Ежедневное сохранение вашего мира' },
              { icon: 'Gauge', title: 'Панель управления', desc: 'Простой интерфейс для настройки сервера' },
              { icon: 'Wifi', title: 'DDoS защита', desc: 'Защита от атак 24/7' },
              { icon: 'Globe', title: 'Свой домен', desc: 'Подключите уникальный адрес сервера' },
              { icon: 'Headphones', title: 'Поддержка', desc: 'Команда экспертов всегда на связи' }
            ].map((feature) => (
              <Card 
                key={feature.title} 
                className="bg-minecraft-dark border-2 border-minecraft-green hover:border-minecraft-gold transition-all hover:scale-105"
              >
                <CardHeader>
                  <Icon name={feature.icon} className="text-minecraft-gold mb-4" size={40} />
                  <CardTitle className="text-xl font-minecraft text-minecraft-green">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-white">
                    {feature.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-minecraft-dark/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-minecraft text-center text-minecraft-gold mb-12">
            ЧАСТЫЕ ВОПРОСЫ
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Как быстро активируется сервер?',
                a: 'Сервер запускается автоматически в течение 30 секунд после оплаты. Вы сразу получите доступ к панели управления и сможете начать игру.'
              },
              {
                q: 'Какие версии Minecraft поддерживаются?',
                a: 'Мы поддерживаем все версии от 1.8 до последней 1.20+, включая Java и Bedrock Edition. Версию можно менять в любой момент.'
              },
              {
                q: 'Можно ли установить моды?',
                a: 'Да! В панели управления есть автоматическая установка популярных модов и плагинов (Forge, Fabric, Spigot, Paper). Также можно загружать свои моды через FTP.'
              },
              {
                q: 'Что делать если сервер не запускается?',
                a: 'Наша техподдержка работает 24/7 в Discord, Telegram и онлайн-чате. Обычно отвечаем в течение 5 минут и решаем 95% проблем удалённо.'
              },
              {
                q: 'Можно ли сменить тариф?',
                a: 'Конечно! Апгрейд происходит мгновенно, даунгрейд — в начале следующего периода. Все данные сохраняются при любых изменениях.'
              }
            ].map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="bg-minecraft-dark border-2 border-minecraft-green px-6"
              >
                <AccordionTrigger className="text-white hover:text-minecraft-gold font-semibold text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="поддержка" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-minecraft text-center text-minecraft-green mb-12">
            ПОДДЕРЖКА
          </h2>
          
          <Card className="bg-minecraft-dark border-4 border-minecraft-gold">
            <CardHeader>
              <CardTitle className="text-2xl font-minecraft text-minecraft-gold text-center">
                ЕСТЬ ВОПРОС?
              </CardTitle>
              <CardDescription className="text-white text-center">
                Наша команда ответит в течение 5 минут
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-minecraft-gray border-2 border-minecraft-green text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-minecraft-gray border-2 border-minecraft-green text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Опишите вашу проблему..." 
                    rows={5}
                    className="bg-minecraft-gray border-2 border-minecraft-green text-white placeholder:text-white/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-minecraft-green hover:bg-minecraft-green/80 text-white font-minecraft text-lg py-6 border-2 border-minecraft-gold"
                >
                  ОТПРАВИТЬ
                </Button>
              </form>

              <div className="flex justify-center gap-6 mt-8 pt-8 border-t-2 border-minecraft-green">
                <Button variant="ghost" className="text-white hover:text-minecraft-gold">
                  <Icon name="MessageCircle" size={24} />
                </Button>
                <Button variant="ghost" className="text-white hover:text-minecraft-gold">
                  <Icon name="Send" size={24} />
                </Button>
                <Button variant="ghost" className="text-white hover:text-minecraft-gold">
                  <Icon name="Mail" size={24} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-minecraft-dark/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-minecraft text-center text-minecraft-gold mb-8">
            КОНТАКТЫ
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="bg-minecraft-dark border-2 border-minecraft-green">
              <CardContent className="pt-6 text-center">
                <Icon name="Mail" className="mx-auto mb-3 text-minecraft-gold" size={32} />
                <p className="text-white font-semibold mb-2">Email</p>
                <p className="text-minecraft-green">support@mchost.ru</p>
              </CardContent>
            </Card>

            <Card className="bg-minecraft-dark border-2 border-minecraft-green">
              <CardContent className="pt-6 text-center">
                <Icon name="MessageCircle" className="mx-auto mb-3 text-minecraft-gold" size={32} />
                <p className="text-white font-semibold mb-2">Discord</p>
                <p className="text-minecraft-green">discord.gg/mchost</p>
              </CardContent>
            </Card>

            <Card className="bg-minecraft-dark border-2 border-minecraft-green">
              <CardContent className="pt-6 text-center">
                <Icon name="Send" className="mx-auto mb-3 text-minecraft-gold" size={32} />
                <p className="text-white font-semibold mb-2">Telegram</p>
                <p className="text-minecraft-green">@mchost_support</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-white/60 text-sm">
            © 2024 Minecraft Hosting. Все права защищены.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
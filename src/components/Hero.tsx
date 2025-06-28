import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/10 to-primary/5 blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 golden-text">
            Цифровые владения
            <br />в загробной жизни
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Подготовьтесь к вечности с уникальными NFT, которые представляют
            ваши владения в духовном мире
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 spiritual-glow font-medium"
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Исследовать коллекции
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 spiritual-glow">
                <Icon name="Crown" size={24} className="text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">
                Духовные артефакты
              </h3>
              <p className="text-sm text-muted-foreground">
                Коллекция священных предметов для загробной жизни
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 spiritual-glow">
                <Icon name="Gem" size={24} className="text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">
                Вечные владения
              </h3>
              <p className="text-sm text-muted-foreground">
                Недвижимость и сокровища в духовном мире
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 spiritual-glow">
                <Icon name="Star" size={24} className="text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">
                Мистические силы
              </h3>
              <p className="text-sm text-muted-foreground">
                Магические способности и духовная защита
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Золотые храмы",
      description: "Священные места поклонения в загробном мире",
      image:
        "https://images.unsplash.com/photo-1544077960-604201fe74bc?w=300&h=300&fit=crop",
      price: "0.5 ETH",
      items: 12,
    },
    {
      id: 2,
      title: "Духовные амулеты",
      description: "Защитные талисманы для вечного путешествия",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      price: "0.3 ETH",
      items: 24,
    },
    {
      id: 3,
      title: "Небесные сады",
      description: "Райские уголки для душевного покоя",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      price: "1.2 ETH",
      items: 8,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-montserrat font-bold mb-4 golden-text">
            Избранные коллекции
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя уникальные NFT коллекции, созданные для вашего
            духовного путешествия
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card
              key={collection.id}
              className="bg-card/50 backdrop-blur-sm border-primary/20 spiritual-glow hover:spiritual-glow transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-sm font-medium">
                    {collection.items} NFT
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold mb-2 golden-text">
                    {collection.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {collection.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name="Coins" size={16} className="text-primary" />
                      <span className="font-medium">{collection.price}</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 spiritual-glow"
                    >
                      <Icon name="Eye" size={16} className="mr-2" />
                      Смотреть
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
          >
            <Icon name="Grid3x3" size={20} className="mr-2" />
            Все коллекции
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;

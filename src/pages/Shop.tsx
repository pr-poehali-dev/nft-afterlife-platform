import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const nftItems = [
    {
      id: 1,
      title: "Душа Феникса",
      description: "Мистический артефакт возрождения",
      price: "0.5 ETH",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      category: "spirit",
      rarity: "legendary",
    },
    {
      id: 2,
      title: "Оберег Вечности",
      description: "Защитный талисман загробного мира",
      price: "0.3 ETH",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
      category: "protection",
      rarity: "rare",
    },
    {
      id: 3,
      title: "Память Предков",
      description: "Кристалл с энергией предков",
      price: "0.7 ETH",
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=400",
      category: "memory",
      rarity: "epic",
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "bg-gradient-to-r from-yellow-400 to-orange-500";
      case "epic":
        return "bg-gradient-to-r from-purple-400 to-pink-500";
      case "rare":
        return "bg-gradient-to-r from-blue-400 to-cyan-500";
      default:
        return "bg-gradient-to-r from-gray-400 to-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold golden-text mb-4">
            ✨ Магазин Духовных NFT
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя уникальные цифровые артефакты для загробной жизни
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
              />
              <Input
                placeholder="Поиск NFT..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все категории</SelectItem>
              <SelectItem value="spirit">Духовные</SelectItem>
              <SelectItem value="protection">Защитные</SelectItem>
              <SelectItem value="memory">Память</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nftItems.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-border/20 hover:border-primary/30"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge
                  className={`absolute top-2 right-2 ${getRarityColor(item.rarity)} text-white border-0`}
                >
                  {item.rarity}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="golden-text text-lg">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {item.price}
                  </span>
                  <Badge variant="outline">{item.category}</Badge>
                </div>

                <Button className="w-full golden-gradient hover:opacity-90 transition-opacity">
                  <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                  Купить NFT
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="golden-border">
            <Icon name="Plus" className="mr-2 h-4 w-4" />
            Загрузить еще
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Shop;

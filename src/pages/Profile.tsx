import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Profile = () => {
  const [connectedWallet] = useState("0x742d35Cc6634C0532925a3b8D");

  const ownedNFTs = [
    {
      id: 1,
      name: "Душа Феникса",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200",
      price: "0.5 ETH",
      acquired: "2024-01-15",
    },
    {
      id: 2,
      name: "Оберег Вечности",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200",
      price: "0.3 ETH",
      acquired: "2024-01-20",
    },
  ];

  const transactions = [
    {
      id: 1,
      type: "purchase",
      nft: "Душа Феникса",
      amount: "0.5 ETH",
      date: "2024-01-15",
      status: "completed",
    },
    {
      id: 2,
      type: "purchase",
      nft: "Оберег Вечности",
      amount: "0.3 ETH",
      date: "2024-01-20",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold golden-text mb-4">
            👤 Личный Кабинет
          </h1>
          <p className="text-xl text-muted-foreground">
            Управляйте своей коллекцией духовных NFT
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="spiritual-card">
            <CardHeader className="text-center">
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80" />
                <AvatarFallback className="golden-bg text-white text-2xl">
                  У
                </AvatarFallback>
              </Avatar>
              <CardTitle className="golden-text">
                Духовный Коллекционер
              </CardTitle>
              <CardDescription>Уровень: Посвященный</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Кошелек:</span>
                <Badge variant="outline" className="golden-border">
                  {connectedWallet.slice(0, 8)}...{connectedWallet.slice(-4)}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  NFT в коллекции:
                </span>
                <Badge className="golden-gradient text-white">
                  {ownedNFTs.length}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Общая стоимость:
                </span>
                <span className="font-bold text-primary">0.8 ETH</span>
              </div>
            </CardContent>
          </Card>

          <Card className="spiritual-card">
            <CardHeader>
              <CardTitle className="golden-text flex items-center">
                <Icon name="Trophy" className="mr-2 h-5 w-5" />
                Достижения
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge className="golden-gradient text-white">🔥</Badge>
                <span className="text-sm">Первый NFT приобретен</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="golden-gradient text-white">✨</Badge>
                <span className="text-sm">
                  Коллекционер духовных артефактов
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="golden-border">
                  🌟
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Мистический уровень (скоро)
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="spiritual-card">
            <CardHeader>
              <CardTitle className="golden-text flex items-center">
                <Icon name="Zap" className="mr-2 h-5 w-5" />
                Духовная Энергия
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Уровень энергии:</span>
                  <span className="font-bold">750/1000</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="golden-gradient h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Накапливайте духовную энергию, приобретая и взаимодействуя с NFT
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="collection" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="collection">Моя Коллекция</TabsTrigger>
            <TabsTrigger value="transactions">Транзакции</TabsTrigger>
            <TabsTrigger value="settings">Настройки</TabsTrigger>
          </TabsList>

          <TabsContent value="collection" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ownedNFTs.map((nft) => (
                <Card key={nft.id} className="spiritual-card">
                  <div className="relative">
                    <img
                      src={nft.image}
                      alt={nft.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="golden-text">{nft.name}</CardTitle>
                    <CardDescription>
                      Приобретено: {nft.acquired}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">
                        {nft.price}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="golden-border"
                      >
                        <Icon name="Eye" className="mr-1 h-4 w-4" />
                        Посмотреть
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="mt-6">
            <Card className="spiritual-card">
              <CardHeader>
                <CardTitle className="golden-text">
                  История Транзакций
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between p-4 border rounded-lg border-border/20"
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          name="ShoppingCart"
                          className="h-5 w-5 text-primary"
                        />
                        <div>
                          <p className="font-medium">{tx.nft}</p>
                          <p className="text-sm text-muted-foreground">
                            {tx.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{tx.amount}</p>
                        <Badge variant="outline" className="golden-border">
                          {tx.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card className="spiritual-card">
              <CardHeader>
                <CardTitle className="golden-text">
                  Настройки Аккаунта
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Уведомления</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded"
                      />
                      <span>Новые NFT в коллекциях</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded"
                      />
                      <span>Изменения цен</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Мистические события</span>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="golden-gradient hover:opacity-90 transition-opacity">
                    <Icon name="Save" className="mr-2 h-4 w-4" />
                    Сохранить Настройки
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Concept = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold golden-text mb-6">
            🌟 О Концепции AfterLife NFT
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Революционная платформа для создания и торговли цифровыми
            артефактами, предназначенными для загробной жизни в цифровой
            вселенной
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="spiritual-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 golden-gradient rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={32} className="text-white" />
              </div>
              <CardTitle className="text-2xl golden-text">
                Духовная Миссия
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Мы верим, что цифровые активы могут стать мостом между
                физическим и духовным мирами, позволяя сохранить частицу души в
                цифровой вечности.
              </p>
              <Badge className="golden-gradient text-white">Духовность</Badge>
            </CardContent>
          </Card>

          <Card className="spiritual-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 golden-gradient rounded-full flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <CardTitle className="text-2xl golden-text">
                Защита Памяти
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Каждый NFT содержит уникальную энергетическую подпись, которая
                защищает воспоминания и наследие от забвения.
              </p>
              <Badge className="golden-gradient text-white">Защита</Badge>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold golden-text mb-8">
            Как Это Работает
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto golden-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Создание</h3>
              <p className="text-muted-foreground">
                Художники создают уникальные духовные артефакты с особой
                энергетикой
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto golden-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Освящение</h3>
              <p className="text-muted-foreground">
                Каждый NFT проходит специальный ритуал освящения в блокчейне
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto golden-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Вечность</h3>
              <p className="text-muted-foreground">
                Артефакт становится вашим спутником в цифровой загробной жизни
              </p>
            </div>
          </div>
        </div>

        <Card className="mb-16 spiritual-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl golden-text mb-4">
              Философия Проекта
            </CardTitle>
            <CardDescription className="text-lg">
              Мы создаем новую парадигму цифрового бессмертия
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                В эпоху цифровой трансформации мы стоим на пороге нового
                понимания бессмертия. AfterLife NFT не просто торговая площадка
                — это священное пространство, где цифровые артефакты становятся
                проводниками духовной энергии.
              </p>
              <p>
                Каждый NFT в нашей коллекции создается с глубоким пониманием
                духовных традиций и современных технологий блокчейна. Мы верим,
                что эти цифровые талисманы могут стать мостом между мирами,
                храня память и защищая душу в цифровой вечности.
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="golden-gradient hover:opacity-90 transition-opacity"
              >
                <Icon name="Heart" className="mr-2 h-5 w-5" />
                Присоединиться к Миссии
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Concept;

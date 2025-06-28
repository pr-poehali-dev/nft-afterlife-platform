import WalletConnect from "./WalletConnect";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="border-b border-border/20 bg-card/30 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={28} className="text-primary" />
            <h1 className="text-2xl font-montserrat font-bold golden-text">
              AfterLife NFT
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="font-medium">
              Главная
            </Button>
            <Button variant="ghost" className="font-medium">
              Магазин
            </Button>
            <Button variant="ghost" className="font-medium">
              О проекте
            </Button>
            <Button variant="ghost" className="font-medium">
              Профиль
            </Button>
          </nav>

          <div className="flex items-center gap-4">
            <WalletConnect />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

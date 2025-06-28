import { Link } from "react-router-dom";
import WalletConnect from "./WalletConnect";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="border-b border-border/20 bg-card/30 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Sparkles" size={28} className="text-primary" />
            <h1 className="text-2xl font-montserrat font-bold golden-text">
              AfterLife NFT
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/">
              <Button variant="ghost" className="font-medium">
                Главная
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="ghost" className="font-medium">
                Магазин
              </Button>
            </Link>
            <Link to="/concept">
              <Button variant="ghost" className="font-medium">
                О концепции
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" className="font-medium">
                Личный кабинет
              </Button>
            </Link>
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

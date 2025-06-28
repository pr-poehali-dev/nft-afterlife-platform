import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface WalletConnectProps {
  className?: string;
}

const WalletConnect = ({ className = "" }: WalletConnectProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const connectMetaMask = async () => {
    setIsConnecting(true);
    try {
      // Имитация подключения MetaMask
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsConnected(true);
      setWalletAddress("0x742d35Cc6634C0532925a3b8D45C4532425d9532");
    } catch (error) {
      console.error("Ошибка подключения MetaMask:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  const connectTrustWallet = async () => {
    setIsConnecting(true);
    try {
      // Имитация подключения Trust Wallet
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsConnected(true);
      setWalletAddress("0x8ba1f109551bD432803012645Hac136c22C309c95");
    } catch (error) {
      console.error("Ошибка подключения Trust Wallet:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = () => {
    setIsConnected(false);
    setWalletAddress("");
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (isConnected) {
    return (
      <Card
        className={`p-4 border-primary/20 bg-card/50 backdrop-blur-sm spiritual-glow ${className}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm font-medium golden-text">
                Кошелёк подключен
              </p>
              <p className="text-xs text-muted-foreground font-mono">
                {formatAddress(walletAddress)}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={disconnect}
            className="text-destructive hover:text-destructive/80"
          >
            <Icon name="LogOut" size={16} />
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <Button
        onClick={connectMetaMask}
        disabled={isConnecting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium spiritual-glow transition-all duration-300"
      >
        <Icon name="Wallet" size={20} className="mr-2" />
        {isConnecting ? "Подключение..." : "MetaMask"}
      </Button>

      <Button
        onClick={connectTrustWallet}
        disabled={isConnecting}
        variant="outline"
        className="w-full border-primary/30 hover:bg-primary/10 font-medium transition-all duration-300"
      >
        <Icon name="Shield" size={20} className="mr-2" />
        {isConnecting ? "Подключение..." : "Trust Wallet"}
      </Button>
    </div>
  );
};

export default WalletConnect;

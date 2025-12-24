import { Button } from "@/components/ui/button";

interface HeaderProps {
  onSignIn: () => void;
  onRegister: () => void;
}

const Header = ({ onSignIn, onRegister }: HeaderProps) => {
  const navItems = ["Profile", "Stock", "Billing", "Plans", "Reports", "Reviews", "Feedback"];

  return (
    <header className="w-full bg-card border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary" />
          <span className="text-xl font-bold text-foreground">StockEasy</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onRegister}
            className="text-sm text-primary hover:text-coral-dark transition-colors font-medium"
          >
            Register
          </button>
          <Button onClick={onSignIn} size="sm">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

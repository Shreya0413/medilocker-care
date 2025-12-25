import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  onSignIn: () => void;
  onRegister: () => void;
  activeNav?: string;
}

const Header = ({ onSignIn, onRegister, activeNav }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { name: "Profile", path: "/" },
    { name: "Stock", path: "/stock" },
    { name: "Customer", path: "/customer" },
    { name: "Payment", path: "/payment" },
    { name: "Reports", path: "/reports" },
    { name: "Sales", path: "/sales" },
  ];

  const isActive = (item: { name: string; path: string }) => {
    if (activeNav) return activeNav === item.name;
    return location.pathname === item.path && item.path !== "/";
  };

  return (
    <header className="w-full bg-card border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary" />
          <span className="text-xl font-bold text-foreground">StockEasy</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`text-sm transition-colors ${
                isActive(item)
                  ? "text-primary font-medium"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onRegister}
            className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

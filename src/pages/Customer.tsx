import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doctors.png";

type AuthView = "signIn" | "register" | "forgotPassword";
type FilterType = "all" | "lastMonth" | "currentMonth";

const currentMonthData = [
  { date: "11-Dec-2024", phone: "8945632500", email: "john@gmail.com", amount: 320.00 },
  { date: "15-Dec-2024", phone: "9123456780", email: "sarah@gmail.com", amount: 185.50 },
  { date: "20-Dec-2024", phone: "7890123456", email: "mike@gmail.com", amount: 450.00 },
];

const lastMonthData = [
  { date: "05-Nov-2024", phone: "8567890123", email: "emma@gmail.com", amount: 275.00 },
  { date: "12-Nov-2024", phone: "9012345678", email: "david@gmail.com", amount: 390.00 },
  { date: "25-Nov-2024", phone: "7654321098", email: "lisa@gmail.com", amount: 210.50 },
];

const Customer = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<AuthView>("signIn");
  const [filter, setFilter] = useState<FilterType>("all");

  const openAuth = (view: AuthView) => {
    setAuthView(view);
    setIsAuthOpen(true);
  };

  const getFilteredData = () => {
    switch (filter) {
      case "currentMonth":
        return currentMonthData;
      case "lastMonth":
        return lastMonthData;
      case "all":
      default:
        return [...lastMonthData, ...currentMonthData];
    }
  };

  const filteredData = getFilteredData();
  const totalSales = filteredData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSignIn={() => openAuth("signIn")}
        onRegister={() => openAuth("register")}
        activeNav="Customer"
      />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Left Panel */}
          <div className="flex-1">
            {/* Filter Buttons */}
            <div className="flex gap-3 mb-6 flex-wrap">
              <Button 
                onClick={() => setFilter("all")}
                variant={filter === "all" ? "outline" : "default"}
                className={filter === "all" ? "border-primary text-primary" : "bg-primary text-primary-foreground"}
                size="sm"
              >
                All
              </Button>
              <Button 
                onClick={() => setFilter("lastMonth")}
                className="bg-primary text-primary-foreground"
                size="sm"
              >
                Last Month
              </Button>
              <Button 
                onClick={() => setFilter("currentMonth")}
                className="bg-primary text-primary-foreground"
                size="sm"
              >
                Current Month
              </Button>
            </div>

            {/* Data Table */}
            <div className="space-y-3">
              {filteredData.map((record, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b border-border">
                  <span className="text-muted-foreground">{record.date}</span>
                  <span className="text-muted-foreground">{record.phone}</span>
                  <span className="text-muted-foreground">{record.email}</span>
                  <span className="text-foreground font-medium text-right">{record.amount.toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Total Sales */}
            <div className="flex items-center gap-4 mt-6">
              <Button className="bg-primary text-primary-foreground" size="sm">
                Total Sales
              </Button>
              <span className="bg-muted px-4 py-2 rounded text-foreground font-medium">
                {totalSales.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Right Panel - Hero */}
          <div className="hidden lg:block w-96 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">StockEasy</h2>
            <p className="text-muted-foreground mb-6">
              Now it is very easy to maintain stock.<br />
              Save your time and enjoy the day.
            </p>
            <img src={heroImage} alt="Doctors illustration" className="w-full" />
          </div>
        </div>
      </main>

      <Footer />
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialView={authView}
      />
    </div>
  );
};

export default Customer;

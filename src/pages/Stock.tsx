import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Eye, ShoppingCart } from "lucide-react";
import heroImage from "@/assets/hero-doctors.png";

type AuthView = "signIn" | "register" | "forgotPassword";
type StockView = "add" | "view" | "sell";

const dummyRecords = [
  { batchNo: "B123", medName: "MDemo", manfName: "MDemo", manfDate: "01-Aug-2022", expDate: "01-Sep-2024", buyingCost: 1000, mrp: 1500, discountCost: 10, consumerCost: 1350, prescription: "Y" },
  { batchNo: "B456", medName: "Paracetamol", manfName: "PharmaCo", manfDate: "15-Mar-2023", expDate: "15-Mar-2025", buyingCost: 500, mrp: 800, discountCost: 5, consumerCost: 760, prescription: "N" },
  { batchNo: "B789", medName: "Amoxicillin", manfName: "MediLabs", manfDate: "20-Jun-2023", expDate: "20-Jun-2025", buyingCost: 1200, mrp: 1800, discountCost: 15, consumerCost: 1530, prescription: "Y" },
];

const Stock = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<AuthView>("signIn");
  const [stockView, setStockView] = useState<StockView>("add");

  const openAuth = (view: AuthView) => {
    setAuthView(view);
    setIsAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSignIn={() => openAuth("signIn")}
        onRegister={() => openAuth("register")}
        activeNav="Stock"
      />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Left Panel */}
          <div className="flex-1">
            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <Button 
                onClick={() => setStockView("add")}
                className={`${stockView === "add" ? "bg-primary" : "bg-primary/80"} text-primary-foreground`}
              >
                Add Record <Plus className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={() => setStockView("view")}
                className={`${stockView === "view" ? "bg-primary" : "bg-primary/80"} text-primary-foreground`}
              >
                View Record <Eye className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={() => setStockView("sell")}
                className={`${stockView === "sell" ? "bg-primary" : "bg-primary/80"} text-primary-foreground`}
              >
                Sell <ShoppingCart className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Content based on view */}
            {stockView === "add" && (
              <div className="space-y-4 max-w-xl">
                <div className="grid grid-cols-3 gap-4">
                  <Input placeholder="Batch No" className="bg-muted border-0" />
                  <Input placeholder="Med Name" className="bg-muted border-0" />
                  <Input placeholder="Manf. Name" className="bg-muted border-0" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Manf. Date" className="bg-muted border-0" />
                  <Input placeholder="Exp. Date" className="bg-muted border-0" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Input placeholder="Buying Cost" className="bg-muted border-0" />
                  <Input placeholder="MRP" className="bg-muted border-0" />
                  <Input placeholder="Discount Cost" className="bg-muted border-0" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Consumer Cost" className="bg-muted border-0" />
                  <Input placeholder="Prescription Needed" className="bg-muted border-0" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Input placeholder="Seller Id" className="bg-muted border-0" />
                  <Input placeholder="Seller Name" className="bg-muted border-0" />
                  <Input placeholder="Category" className="bg-muted border-0" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Client ID" className="bg-muted border-0" />
                  <Input placeholder="Date of Entry" className="bg-muted border-0" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Date of Dispatch" className="bg-muted border-0" />
                  <Input placeholder="Qty" className="bg-muted border-0" />
                </div>
                <Input placeholder="Type of Medicine" className="bg-muted border-0" />
                <Button className="w-full bg-primary text-primary-foreground">
                  SAVE
                </Button>
              </div>
            )}

            {stockView === "view" && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-foreground font-medium">
                      <th className="py-2 px-2">Batch No</th>
                      <th className="py-2 px-2">Med Name</th>
                      <th className="py-2 px-2">Manf.Name</th>
                      <th className="py-2 px-2">Manf Date</th>
                      <th className="py-2 px-2">Exp. Date</th>
                      <th className="py-2 px-2">Buying Cost</th>
                      <th className="py-2 px-2">MRP</th>
                      <th className="py-2 px-2">Discount Cost</th>
                      <th className="py-2 px-2">Consumer Cost</th>
                      <th className="py-2 px-2">Prescription</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dummyRecords.map((record, index) => (
                      <tr key={index} className="text-muted-foreground border-t border-border">
                        <td className="py-3 px-2">{record.batchNo}</td>
                        <td className="py-3 px-2">{record.medName}</td>
                        <td className="py-3 px-2">{record.manfName}</td>
                        <td className="py-3 px-2">{record.manfDate}</td>
                        <td className="py-3 px-2">{record.expDate}</td>
                        <td className="py-3 px-2">{record.buyingCost}</td>
                        <td className="py-3 px-2">{record.mrp}</td>
                        <td className="py-3 px-2">{record.discountCost}</td>
                        <td className="py-3 px-2">{record.consumerCost}</td>
                        <td className="py-3 px-2">{record.prescription}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {stockView === "sell" && (
              <div className="space-y-4 max-w-md">
                <Input placeholder="Medicine Name" className="bg-muted border-0" />
                <Input placeholder="Medicine Manf." className="bg-muted border-0" />
                <Input placeholder="Seller Name" className="bg-muted border-0" />
                <Input placeholder="Type of Medicine" className="bg-muted border-0" />
                <Input placeholder="QTY" className="bg-muted border-0" />
                <Button className="w-full bg-primary text-primary-foreground">
                  Go
                </Button>
              </div>
            )}
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

export default Stock;

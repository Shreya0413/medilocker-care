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
    <div className="min-h-screen bg-background flex flex-col">
      <Header
        onSignIn={() => openAuth("signIn")}
        onRegister={() => openAuth("register")}
        activeNav="Stock"
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Panel - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={() => setStockView("add")}
                variant={stockView === "add" ? "default" : "secondary"}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Record
              </Button>
              <Button 
                onClick={() => setStockView("view")}
                variant={stockView === "view" ? "default" : "secondary"}
                className="flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                View Record
              </Button>
              <Button 
                onClick={() => setStockView("sell")}
                variant={stockView === "sell" ? "default" : "secondary"}
                className="flex items-center gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                Sell
              </Button>
            </div>

            {/* Content based on view */}
            {stockView === "add" && (
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Add New Stock Record</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Input placeholder="Batch No" className="bg-muted" />
                  <Input placeholder="Med Name" className="bg-muted" />
                  <Input placeholder="Manf. Name" className="bg-muted" />
                  <Input placeholder="Manf. Date" className="bg-muted" />
                  <Input placeholder="Exp. Date" className="bg-muted" />
                  <Input placeholder="Buying Cost" className="bg-muted" />
                  <Input placeholder="MRP" className="bg-muted" />
                  <Input placeholder="Discount Cost" className="bg-muted" />
                  <Input placeholder="Consumer Cost" className="bg-muted" />
                  <Input placeholder="Prescription Needed" className="bg-muted" />
                  <Input placeholder="Seller Id" className="bg-muted" />
                  <Input placeholder="Seller Name" className="bg-muted" />
                  <Input placeholder="Category" className="bg-muted" />
                  <Input placeholder="Client ID" className="bg-muted" />
                  <Input placeholder="Date of Entry" className="bg-muted" />
                  <Input placeholder="Date of Dispatch" className="bg-muted" />
                  <Input placeholder="Qty" className="bg-muted" />
                  <Input placeholder="Type of Medicine" className="bg-muted" />
                </div>
                <Button className="w-full mt-6">
                  SAVE
                </Button>
              </div>
            )}

            {stockView === "view" && (
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Stock Records</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="py-3 px-3 text-left font-medium text-foreground border-r border-border">Batch No</th>
                        <th className="py-3 px-3 text-left font-medium text-foreground border-r border-border">Med Name</th>
                        <th className="py-3 px-3 text-left font-medium text-foreground border-r border-border">Manf. Name</th>
                        <th className="py-3 px-3 text-left font-medium text-foreground border-r border-border">Manf Date</th>
                        <th className="py-3 px-3 text-left font-medium text-foreground border-r border-border">Exp. Date</th>
                        <th className="py-3 px-3 text-left font-medium text-foreground border-r border-border">Buying Cost</th>
                        <th className="py-3 px-3 text-left font-medium text-foreground border-r border-border">MRP</th>
                        <th className="py-3 px-3 text-left font-medium text-foreground border-r border-border">Discount</th>
                        <th className="py-3 px-3 text-left font-medium text-foreground border-r border-border">Consumer Cost</th>
                        <th className="py-3 px-3 text-left font-medium text-foreground">Rx</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dummyRecords.map((record, index) => (
                        <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-3 text-muted-foreground border-r border-border">{record.batchNo}</td>
                          <td className="py-3 px-3 text-muted-foreground border-r border-border">{record.medName}</td>
                          <td className="py-3 px-3 text-muted-foreground border-r border-border">{record.manfName}</td>
                          <td className="py-3 px-3 text-muted-foreground border-r border-border">{record.manfDate}</td>
                          <td className="py-3 px-3 text-muted-foreground border-r border-border">{record.expDate}</td>
                          <td className="py-3 px-3 text-muted-foreground border-r border-border">{record.buyingCost}</td>
                          <td className="py-3 px-3 text-muted-foreground border-r border-border">{record.mrp}</td>
                          <td className="py-3 px-3 text-muted-foreground border-r border-border">{record.discountCost}%</td>
                          <td className="py-3 px-3 text-muted-foreground border-r border-border">{record.consumerCost}</td>
                          <td className="py-3 px-3 text-muted-foreground">{record.prescription}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {stockView === "sell" && (
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border max-w-md">
                <h3 className="text-lg font-semibold text-foreground mb-4">Sell Medicine</h3>
                <div className="space-y-4">
                  <Input placeholder="Medicine Name" className="bg-muted" />
                  <Input placeholder="Medicine Manf." className="bg-muted" />
                  <Input placeholder="Seller Name" className="bg-muted" />
                  <Input placeholder="Type of Medicine" className="bg-muted" />
                  <Input placeholder="QTY" className="bg-muted" />
                  <Button className="w-full">
                    Go
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Hero */}
          <div className="hidden lg:flex flex-col items-center text-center bg-card rounded-lg p-6 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-2">StockEasy</h2>
            <p className="text-muted-foreground text-sm mb-4">
              Now it is very easy to maintain stock.<br />
              Save your time and enjoy the day.
            </p>
            <img src={heroImage} alt="Doctors illustration" className="w-full max-w-[280px]" />
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

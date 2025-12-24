import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";

type AuthView = "signIn" | "register" | "forgotPassword";

const Payment = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<AuthView>("signIn");

  const openAuth = (view: AuthView) => {
    setAuthView(view);
    setIsAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSignIn={() => openAuth("signIn")}
        onRegister={() => openAuth("register")}
        activeNav="Payment"
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-6 justify-center">
          {/* Pricing Table */}
          <div className="bg-card rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-4 text-left"></th>
                  <th className="p-4 text-left">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">TRIAL PERIOD</div>
                    <div className="text-2xl font-bold text-foreground">10 Days Left</div>
                  </th>
                  <th className="p-4 text-left">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">BUSINESS</div>
                    <div className="text-2xl font-bold text-foreground">700 <span className="text-sm font-normal">/mo</span></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-4 font-medium text-foreground">Features</td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4 font-medium text-foreground">Storage</td>
                  <td className="p-4 text-muted-foreground">100 MB</td>
                  <td className="p-4 text-muted-foreground">1 GB</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4 font-medium text-foreground">Reports</td>
                  <td className="p-4 text-muted-foreground">Limited</td>
                  <td className="p-4 text-muted-foreground">Customization Allowed</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4 font-medium text-foreground">Email Support</td>
                  <td className="p-4 text-muted-foreground">No</td>
                  <td className="p-4 text-muted-foreground">Yes</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4 font-medium text-foreground">Call Support</td>
                  <td className="p-4 text-muted-foreground">No</td>
                  <td className="p-4 text-muted-foreground">No</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4"></td>
                  <td className="p-4">
                    <Button className="bg-primary text-primary-foreground w-full">
                      Current Plan
                    </Button>
                  </td>
                  <td className="p-4">
                    <Button className="bg-primary text-primary-foreground w-full">
                      Upgrade
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Special Plan */}
          <div className="bg-card rounded-lg shadow-sm border-2 border-primary p-6 w-64">
            <div className="text-xs text-primary uppercase tracking-wide mb-2">SPECIAL</div>
            <div className="text-4xl font-bold text-foreground mb-6">∞</div>
            
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li>Unlimited Storage</li>
              <li>Stock Reports</li>
              <li>Stock Unavailable Reports</li>
              <li>Call Support</li>
            </ul>

            <Button className="bg-primary text-primary-foreground w-full mb-4">
              Call Now
            </Button>

            <div className="text-center">
              <button className="text-primary text-sm font-medium hover:underline">
                Upgrade ⓘ
              </button>
            </div>
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

export default Payment;

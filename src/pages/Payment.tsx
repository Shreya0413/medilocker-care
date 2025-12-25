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
    <div className="min-h-screen bg-background flex flex-col">
      <Header
        onSignIn={() => openAuth("signIn")}
        onRegister={() => openAuth("register")}
        activeNav="Payment"
      />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-6 justify-center items-start">
          {/* Trial Period Plan */}
          <div className="bg-card rounded-lg shadow-sm border-2 border-primary p-6 w-72">
            <div className="text-xs text-primary uppercase tracking-wide font-medium mb-1">TRIAL PERIOD</div>
            <div className="text-3xl font-bold text-foreground mb-6">10 Days Left</div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="font-medium text-foreground">Storage</span>
                <span className="text-muted-foreground">100 MB</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="font-medium text-foreground">Reports</span>
                <span className="text-muted-foreground">Limited</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="font-medium text-foreground">Email Support</span>
                <span className="text-muted-foreground">No</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="font-medium text-foreground">Call Support</span>
                <span className="text-muted-foreground">No</span>
              </div>
            </div>

            <Button className="w-full">
              Current Plan
            </Button>
          </div>

          {/* Business Plan */}
          <div className="bg-card rounded-lg shadow-sm border-2 border-primary p-6 w-72">
            <div className="text-xs text-primary uppercase tracking-wide font-medium mb-1">BUSINESS</div>
            <div className="text-3xl font-bold text-foreground mb-6">700 <span className="text-lg font-normal">/mo</span></div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="font-medium text-foreground">Storage</span>
                <span className="text-muted-foreground">1 GB</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="font-medium text-foreground">Reports</span>
                <span className="text-muted-foreground">Customization Allowed</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="font-medium text-foreground">Email Support</span>
                <span className="text-muted-foreground">Yes</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="font-medium text-foreground">Call Support</span>
                <span className="text-muted-foreground">No</span>
              </div>
            </div>

            <Button className="w-full">
              Upgrade
            </Button>
          </div>

          {/* Special Plan */}
          <div className="bg-card rounded-lg shadow-sm border-2 border-primary p-6 w-72">
            <div className="text-xs text-primary uppercase tracking-wide font-medium mb-1">SPECIAL</div>
            <div className="text-4xl font-bold text-foreground mb-6">∞</div>
            
            <ul className="space-y-3 text-sm text-muted-foreground mb-6">
              <li className="border-b border-border pb-2">Unlimited Storage</li>
              <li className="border-b border-border pb-2">Stock Reports</li>
              <li className="border-b border-border pb-2">Stock Unavailable Reports</li>
              <li className="pb-2">Call Support</li>
            </ul>

            <Button className="w-full mb-3">
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

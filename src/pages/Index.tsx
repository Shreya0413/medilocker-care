import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";

type AuthView = "signIn" | "register" | "forgotPassword";

const Index = () => {
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
      />
      <HeroSection onGetStarted={() => openAuth("signIn")} />
      <FeaturesSection />
      <Footer />
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialView={authView}
      />
    </div>
  );
};

export default Index;

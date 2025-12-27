import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import heroImage from "@/assets/hero-doctors.png";

type AuthView = "signIn" | "register" | "forgotPassword";
type UserType = "user" | "admin";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: AuthView;
}

const AuthModal = ({ isOpen, onClose, initialView = "signIn" }: AuthModalProps) => {
  const [view, setView] = useState<AuthView>(initialView);
  const [userType, setUserType] = useState<UserType>("user");

  useEffect(() => {
    if (isOpen) {
      setView(initialView);
    }
  }, [isOpen, initialView]);

  const handleBack = () => {
    onClose();
  };

  const renderSignIn = () => (
    <div className="space-y-5">
      <button
        onClick={handleBack}
        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft size={16} />
        <span className="text-sm">Back</span>
      </button>

      <div>
        <h2 className="text-2xl font-bold">
          <span className="text-foreground">Medi</span>
          <span className="text-primary">Vault</span>
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
          Now it is very easy to maintain stock.
          <br />
          Save your time and enjoy the day.
        </p>
      </div>

      <div className="flex border-b border-border">
        <button
          onClick={() => setUserType("user")}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
            userType === "user"
              ? "text-foreground border-b-2 border-foreground"
              : "text-muted-foreground"
          }`}
        >
          User
        </button>
        <button
          onClick={() => setUserType("admin")}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
            userType === "admin"
              ? "text-foreground border-b-2 border-foreground"
              : "text-muted-foreground"
          }`}
        >
          Admin
        </button>
      </div>

      <div className="space-y-3">
        {userType === "user" ? (
          <>
            <Input label="Email Id" placeholder="Enter your email" type="email" />
            <Input label="Password" placeholder="Enter your password" type="password" />
          </>
        ) : (
          <>
            <Input label="Admin Email Id" placeholder="Enter admin email" type="email" />
            <Input label="Admin Password" placeholder="Enter admin password" type="password" />
            <Input label="Admin Access Code" placeholder="Enter admin access code" type="text" />
          </>
        )}

        <Button className="w-full" size="lg">
          {userType === "user" ? "SIGN IN AS USER" : "SIGN IN AS ADMIN"}
        </Button>

        <div className="flex items-center justify-center gap-2 text-sm">
          <button
            onClick={() => setView("forgotPassword")}
            className="text-foreground font-semibold hover:underline"
          >
            Forget Password?
          </button>
          <span className="text-muted-foreground">|</span>
          <button
            onClick={() => setView("register")}
            className="text-primary hover:underline"
          >
            Create new account
          </button>
        </div>
      </div>
    </div>
  );

  const renderRegister = () => (
    <div className="flex gap-6">
      <div className="flex-1 space-y-4 max-h-[70vh] overflow-y-auto pr-2">
        <button
          onClick={handleBack}
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Back</span>
        </button>

        <div className="flex border-b border-border">
          <button
            onClick={() => setUserType("user")}
            className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
              userType === "user"
                ? "text-foreground border-b-2 border-foreground"
                : "text-muted-foreground"
            }`}
          >
            User Registration
          </button>
          <button
            onClick={() => setUserType("admin")}
            className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
              userType === "admin"
                ? "text-foreground border-b-2 border-foreground"
                : "text-muted-foreground"
            }`}
          >
            Admin Registration
          </button>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <Input label="First Name" placeholder="First Name" />
            <Input label="Middle Name" placeholder="Middle Name" />
            <Input label="Last Name" placeholder="Last Name" />
          </div>

          <Input label="Business Name" placeholder="Business Name" />

          {userType === "user" ? (
            <>
              <div className="grid grid-cols-2 gap-2">
                <Input label="GST Number" placeholder="GST Number" />
                <Input label="Pan Card Number" placeholder="Pan Card Number" />
              </div>

              <Input label="Admin Email Id" placeholder="Admin Email Id" type="email" />
              <Input label="Phone Number" placeholder="Phone Number" type="tel" />
              <Input label="Admin Password" placeholder="Create Admin Password" type="password" />
              <Input label="Admin Access Code" placeholder="Enter Admin Access Code" type="text" />
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-2">
                <Input label="GST Number" placeholder="GST Number" />
                <Input label="Pan Card Number" placeholder="Pan Card Number" />
              </div>

              <Input label="Admin Email Id" placeholder="Admin Email Id" type="email" />
              <Input label="Phone Number" placeholder="Phone Number" type="tel" />
              <Input label="Admin Password" placeholder="Create Admin Password" type="password" />
              <Input label="Admin Access Code" placeholder="Enter Admin Access Code" type="text" />
            </>
          )}

          <Button className="w-full" size="lg">
            {userType === "user" ? "REGISTER AS USER" : "REGISTER AS ADMIN"}
          </Button>

          <p className="text-center text-sm pb-2">
            <span className="text-muted-foreground">Have you already an account? </span>
            <button
              onClick={() => setView("signIn")}
              className="text-primary hover:underline"
            >
              Sign in Here
            </button>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex flex-col justify-center flex-1">
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-foreground">Medi</span>
          <span className="text-primary">Vault</span>
        </h2>
        <p className="text-muted-foreground text-sm mb-4">
          Now it is very easy to maintain stock.
          <br />
          Save your time and enjoy the day.
        </p>
        <div className="rounded-lg overflow-hidden">
          <img
            src={heroImage}
            alt="Healthcare professionals"
            className="w-full h-auto max-w-xs"
          />
        </div>
      </div>
    </div>
  );

  const renderForgotPassword = () => (
    <div className="space-y-5">
      <button
        onClick={handleBack}
        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft size={16} />
        <span className="text-sm">Back</span>
      </button>

      <div>
        <h2 className="text-2xl font-bold">
          <span className="text-foreground">Medi</span>
          <span className="text-primary">Vault</span>
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
          Now it is very easy to maintain stock.
          <br />
          Save your time and enjoy the day.
        </p>
      </div>

      <div className="space-y-4">
        <Input label="Email Id" placeholder="Enter your email" type="email" />
        <Button className="w-full" size="lg">
          SEND OTP
        </Button>
      </div>
    </div>
  );

  const isWideModal = view === "register";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`p-6 bg-muted max-h-[90vh] overflow-hidden ${isWideModal ? "sm:max-w-3xl" : "sm:max-w-md"}`}>
        {view === "signIn" && renderSignIn()}
        {view === "register" && renderRegister()}
        {view === "forgotPassword" && renderForgotPassword()}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;

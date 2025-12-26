import { Facebook, Twitter, Instagram, Square } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm mb-4">
          © Copyright - MediVault
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Square size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

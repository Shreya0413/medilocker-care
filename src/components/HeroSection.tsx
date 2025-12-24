import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doctors.png";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="bg-hero-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              StockEasy
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Now it is very easy to maintain stock.
              <br />
              Save your time and enjoy the day.
            </p>
            <Button onClick={onGetStarted} size="lg">
              Get Started
            </Button>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg max-w-md w-full">
              <img
                src={heroImage}
                alt="Healthcare professionals illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

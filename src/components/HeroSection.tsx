import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doctors.png";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="bg-hero-bg py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex-1 max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              StockEasy
            </h1>
            <p className="text-muted-foreground text-base mb-4">
              Now it is very easy to maintain stock.
              <br />
              Save your time and enjoy the day.
            </p>
            <Button onClick={onGetStarted} size="lg">
              Get Started
            </Button>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="rounded-lg overflow-hidden shadow-lg max-w-xs w-full">
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

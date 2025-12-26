import { Package, Heart, TrendingDown, Clock } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Smart Stock Management",
    description:
      "Efficiently track and manage your medicine inventory with real-time updates and automated alerts.",
  },
  {
    icon: Heart,
    title: "Patient Care Focused",
    description:
      "Ensure medicine availability for better patient care and treatment outcomes.",
  },
  {
    icon: TrendingDown,
    title: "Waste Reduction",
    description:
      "Minimize medicine waste through expiry tracking and intelligent stock rotation.",
  },
  {
    icon: Clock,
    title: "Time Saving",
    description:
      "Automate routine inventory tasks and focus more on patient care and business growth.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-8 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Why Choose MediVault?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our medicine management system helps healthcare providers streamline
            operations, reduce waste, and improve patient care through intelligent
            stock management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-12 h-12 flex items-center justify-center text-primary mb-4">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doctors.png";

type AuthView = "signIn" | "register" | "forgotPassword";
type FilterType = "all" | "last6Months" | "last3Months" | "currentMonth" | "currentWeek" | "today";
type ViewMode = "dateWise" | "customerWise";

const filterLabels: Record<FilterType, string> = {
  all: "All",
  last6Months: "Last 6 Months",
  last3Months: "Last 3 Months",
  currentMonth: "Current Month",
  currentWeek: "Current Week",
  today: "Today",
};

// Dummy sales data for each filter (5 records each)
const salesData: Record<FilterType, { customerName: string; phoneNo: string; emailId: string; sales: string }[]> = {
  all: [
    { customerName: "John Smith", phoneNo: "9876543210", emailId: "john@email.com", sales: "₹15,000" },
    { customerName: "Sarah Johnson", phoneNo: "9876543211", emailId: "sarah@email.com", sales: "₹12,500" },
    { customerName: "Mike Brown", phoneNo: "9876543212", emailId: "mike@email.com", sales: "₹18,200" },
    { customerName: "Emily Davis", phoneNo: "9876543213", emailId: "emily@email.com", sales: "₹9,800" },
    { customerName: "Chris Wilson", phoneNo: "9876543214", emailId: "chris@email.com", sales: "₹22,100" },
  ],
  last6Months: [
    { customerName: "Alice Cooper", phoneNo: "9123456780", emailId: "alice@email.com", sales: "₹8,500" },
    { customerName: "Bob Martin", phoneNo: "9123456781", emailId: "bob@email.com", sales: "₹11,200" },
    { customerName: "Carol White", phoneNo: "9123456782", emailId: "carol@email.com", sales: "₹14,800" },
    { customerName: "David Lee", phoneNo: "9123456783", emailId: "david@email.com", sales: "₹7,300" },
    { customerName: "Eva Green", phoneNo: "9123456784", emailId: "eva@email.com", sales: "₹16,500" },
  ],
  last3Months: [
    { customerName: "Frank Miller", phoneNo: "9234567890", emailId: "frank@email.com", sales: "₹13,200" },
    { customerName: "Grace Hall", phoneNo: "9234567891", emailId: "grace@email.com", sales: "₹9,100" },
    { customerName: "Henry Clark", phoneNo: "9234567892", emailId: "henry@email.com", sales: "₹17,600" },
    { customerName: "Ivy Turner", phoneNo: "9234567893", emailId: "ivy@email.com", sales: "₹6,800" },
    { customerName: "Jack Adams", phoneNo: "9234567894", emailId: "jack@email.com", sales: "₹19,400" },
  ],
  currentMonth: [
    { customerName: "Karen Scott", phoneNo: "9345678901", emailId: "karen@email.com", sales: "₹5,200" },
    { customerName: "Leo King", phoneNo: "9345678902", emailId: "leo@email.com", sales: "₹8,700" },
    { customerName: "Mia Wright", phoneNo: "9345678903", emailId: "mia@email.com", sales: "₹4,300" },
    { customerName: "Noah Hill", phoneNo: "9345678904", emailId: "noah@email.com", sales: "₹11,500" },
    { customerName: "Olivia Young", phoneNo: "9345678905", emailId: "olivia@email.com", sales: "₹7,900" },
  ],
  currentWeek: [
    { customerName: "Paul Baker", phoneNo: "9456789012", emailId: "paul@email.com", sales: "₹2,100" },
    { customerName: "Quinn Ross", phoneNo: "9456789013", emailId: "quinn@email.com", sales: "₹3,500" },
    { customerName: "Rose Cox", phoneNo: "9456789014", emailId: "rose@email.com", sales: "₹1,800" },
    { customerName: "Sam Reed", phoneNo: "9456789015", emailId: "sam@email.com", sales: "₹4,200" },
    { customerName: "Tina Ward", phoneNo: "9456789016", emailId: "tina@email.com", sales: "₹2,900" },
  ],
  today: [
    { customerName: "Uma Price", phoneNo: "9567890123", emailId: "uma@email.com", sales: "₹800" },
    { customerName: "Victor Long", phoneNo: "9567890124", emailId: "victor@email.com", sales: "₹1,200" },
    { customerName: "Wendy Fox", phoneNo: "9567890125", emailId: "wendy@email.com", sales: "₹650" },
    { customerName: "Xavier Cole", phoneNo: "9567890126", emailId: "xavier@email.com", sales: "₹1,500" },
    { customerName: "Yara Bell", phoneNo: "9567890127", emailId: "yara@email.com", sales: "₹950" },
  ],
};

const Sales = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<AuthView>("signIn");
  const [filter, setFilter] = useState<FilterType>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("dateWise");

  const openAuth = (view: AuthView) => {
    setAuthView(view);
    setIsAuthOpen(true);
  };

  const filters: FilterType[] = ["all", "last6Months", "last3Months", "currentMonth", "currentWeek", "today"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header
        onSignIn={() => openAuth("signIn")}
        onRegister={() => openAuth("register")}
        activeNav="Sales"
      />

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Table */}
          <div className="flex-1">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-4">
              {filters.map((f) => (
                <Button
                  key={f}
                  variant={filter === f ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(f)}
                  className={filter === f ? "bg-primary text-primary-foreground" : "border-primary text-primary hover:bg-primary/10"}
                >
                  {filterLabels[f]}
                </Button>
              ))}
            </div>

            {/* View Mode Radio Buttons */}
            <div className="flex gap-6 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="viewMode"
                  checked={viewMode === "dateWise"}
                  onChange={() => setViewMode("dateWise")}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm text-foreground">Date Wise</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="viewMode"
                  checked={viewMode === "customerWise"}
                  onChange={() => setViewMode("customerWise")}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm text-muted-foreground">Customer Wise</span>
              </label>
            </div>

            {/* Sales Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-medium text-foreground">Customer Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-foreground">Phone No.</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-foreground">Email ID</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-foreground">Sales</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData[filter].map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 px-4 text-sm text-primary">{row.customerName}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{row.phoneNo}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{row.emailId}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{row.sales}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Side - Branding */}
          <div className="lg:w-72 flex flex-col items-center justify-start pt-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">MediVault</h2>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Now it is very easy to maintain stock.
              <br />
              Save your time and enjoy the day.
            </p>
            <div className="w-48">
              <img
                src={heroImage}
                alt="Healthcare professionals"
                className="w-full h-auto"
              />
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

export default Sales;

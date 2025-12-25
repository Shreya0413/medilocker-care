import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Area,
  AreaChart,
} from "recharts";

type AuthView = "signIn" | "register" | "forgotPassword";
type FilterType = "all" | "last6Months" | "last3Months" | "currentMonth" | "currentWeek" | "today";

const filterLabels: Record<FilterType, string> = {
  all: "All",
  last6Months: "Last 6 Months",
  last3Months: "Last 3 Months",
  currentMonth: "Current Month",
  currentWeek: "Current Week",
  today: "Today",
};

// Dummy data for different filters
const revenueData: Record<FilterType, { year: string; revenue: string }[]> = {
  all: [
    { year: "Revenues in 2020", revenue: "14.2K" },
    { year: "Revenues in 2021", revenue: "17.5K" },
    { year: "Revenues in 2022", revenue: "21.8K" },
  ],
  last6Months: [
    { year: "Jul 2022", revenue: "3.2K" },
    { year: "Sep 2022", revenue: "4.1K" },
    { year: "Dec 2022", revenue: "5.5K" },
  ],
  last3Months: [
    { year: "Oct 2022", revenue: "2.8K" },
    { year: "Nov 2022", revenue: "3.5K" },
    { year: "Dec 2022", revenue: "4.2K" },
  ],
  currentMonth: [
    { year: "Week 1", revenue: "1.2K" },
    { year: "Week 2", revenue: "1.8K" },
    { year: "Week 3", revenue: "2.1K" },
  ],
  currentWeek: [
    { year: "Mon", revenue: "0.4K" },
    { year: "Wed", revenue: "0.6K" },
    { year: "Fri", revenue: "0.8K" },
  ],
  today: [
    { year: "9 AM", revenue: "0.1K" },
    { year: "1 PM", revenue: "0.2K" },
    { year: "5 PM", revenue: "0.3K" },
  ],
};

const lineChartData: Record<FilterType, { month: string; value: number }[]> = {
  all: [
    { month: "Jan", value: 30 },
    { month: "Feb", value: 45 },
    { month: "Mar", value: 35 },
    { month: "Apr", value: 55 },
    { month: "May", value: 48 },
    { month: "Jun", value: 62 },
  ],
  last6Months: [
    { month: "Jul", value: 40 },
    { month: "Aug", value: 52 },
    { month: "Sep", value: 45 },
    { month: "Oct", value: 58 },
    { month: "Nov", value: 65 },
    { month: "Dec", value: 72 },
  ],
  last3Months: [
    { month: "Oct", value: 55 },
    { month: "Nov", value: 62 },
    { month: "Dec", value: 70 },
  ],
  currentMonth: [
    { month: "Week 1", value: 20 },
    { month: "Week 2", value: 35 },
    { month: "Week 3", value: 45 },
    { month: "Week 4", value: 55 },
  ],
  currentWeek: [
    { month: "Mon", value: 12 },
    { month: "Tue", value: 18 },
    { month: "Wed", value: 22 },
    { month: "Thu", value: 28 },
    { month: "Fri", value: 35 },
  ],
  today: [
    { month: "9AM", value: 5 },
    { month: "12PM", value: 15 },
    { month: "3PM", value: 22 },
    { month: "6PM", value: 30 },
  ],
};

const pieChartData: Record<FilterType, { name: string; value: number; color: string }[]> = {
  all: [
    { name: "Downloads", value: 28, color: "#f97316" },
    { name: "Subscribes", value: 37, color: "#e5e7eb" },
    { name: "Users", value: 22, color: "#fdba74" },
    { name: "Products", value: 13, color: "#d1d5db" },
  ],
  last6Months: [
    { name: "Downloads", value: 32, color: "#f97316" },
    { name: "Subscribes", value: 30, color: "#e5e7eb" },
    { name: "Users", value: 25, color: "#fdba74" },
    { name: "Products", value: 13, color: "#d1d5db" },
  ],
  last3Months: [
    { name: "Downloads", value: 25, color: "#f97316" },
    { name: "Subscribes", value: 40, color: "#e5e7eb" },
    { name: "Users", value: 20, color: "#fdba74" },
    { name: "Products", value: 15, color: "#d1d5db" },
  ],
  currentMonth: [
    { name: "Downloads", value: 35, color: "#f97316" },
    { name: "Subscribes", value: 25, color: "#e5e7eb" },
    { name: "Users", value: 28, color: "#fdba74" },
    { name: "Products", value: 12, color: "#d1d5db" },
  ],
  currentWeek: [
    { name: "Downloads", value: 30, color: "#f97316" },
    { name: "Subscribes", value: 35, color: "#e5e7eb" },
    { name: "Users", value: 20, color: "#fdba74" },
    { name: "Products", value: 15, color: "#d1d5db" },
  ],
  today: [
    { name: "Downloads", value: 40, color: "#f97316" },
    { name: "Subscribes", value: 30, color: "#e5e7eb" },
    { name: "Users", value: 18, color: "#fdba74" },
    { name: "Products", value: 12, color: "#d1d5db" },
  ],
};

const areaChartData: Record<FilterType, { month: string; value: number }[]> = {
  all: [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 25 },
    { month: "Apr", value: 45 },
    { month: "May", value: 30 },
    { month: "Jun", value: 50 },
    { month: "Jul", value: 40 },
    { month: "Aug", value: 55 },
  ],
  last6Months: [
    { month: "Jul", value: 30 },
    { month: "Aug", value: 42 },
    { month: "Sep", value: 35 },
    { month: "Oct", value: 48 },
    { month: "Nov", value: 55 },
    { month: "Dec", value: 60 },
  ],
  last3Months: [
    { month: "Oct", value: 40 },
    { month: "Nov", value: 52 },
    { month: "Dec", value: 58 },
  ],
  currentMonth: [
    { month: "W1", value: 15 },
    { month: "W2", value: 25 },
    { month: "W3", value: 35 },
    { month: "W4", value: 42 },
  ],
  currentWeek: [
    { month: "Mon", value: 8 },
    { month: "Tue", value: 12 },
    { month: "Wed", value: 18 },
    { month: "Thu", value: 22 },
    { month: "Fri", value: 28 },
  ],
  today: [
    { month: "9AM", value: 3 },
    { month: "12PM", value: 10 },
    { month: "3PM", value: 18 },
    { month: "6PM", value: 25 },
  ],
};

const barChartData: Record<FilterType, { month: string; value1: number; value2: number }[]> = {
  all: [
    { month: "Jan", value1: 20, value2: 15 },
    { month: "Feb", value1: 25, value2: 20 },
    { month: "Mar", value1: 30, value2: 22 },
    { month: "Apr", value1: 35, value2: 28 },
    { month: "May", value1: 40, value2: 32 },
    { month: "Jun", value1: 45, value2: 38 },
    { month: "Jul", value1: 50, value2: 42 },
  ],
  last6Months: [
    { month: "Jul", value1: 28, value2: 20 },
    { month: "Aug", value1: 32, value2: 25 },
    { month: "Sep", value1: 36, value2: 28 },
    { month: "Oct", value1: 42, value2: 35 },
    { month: "Nov", value1: 48, value2: 40 },
    { month: "Dec", value1: 55, value2: 45 },
  ],
  last3Months: [
    { month: "Oct", value1: 38, value2: 30 },
    { month: "Nov", value1: 45, value2: 36 },
    { month: "Dec", value1: 52, value2: 42 },
  ],
  currentMonth: [
    { month: "W1", value1: 12, value2: 8 },
    { month: "W2", value1: 18, value2: 14 },
    { month: "W3", value1: 25, value2: 20 },
    { month: "W4", value1: 32, value2: 26 },
  ],
  currentWeek: [
    { month: "Mon", value1: 5, value2: 3 },
    { month: "Tue", value1: 8, value2: 6 },
    { month: "Wed", value1: 12, value2: 9 },
    { month: "Thu", value1: 16, value2: 12 },
    { month: "Fri", value1: 20, value2: 16 },
  ],
  today: [
    { month: "9AM", value1: 2, value2: 1 },
    { month: "12PM", value1: 6, value2: 4 },
    { month: "3PM", value1: 10, value2: 8 },
    { month: "6PM", value1: 14, value2: 11 },
  ],
};

const Reports = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<AuthView>("signIn");
  const [filter, setFilter] = useState<FilterType>("all");

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
        activeNav="Reports"
      />

      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
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

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Line Chart with Revenue Stats */}
          <Card className="p-4">
            <CardContent className="p-0">
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineChartData[filter]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#f97316"
                      strokeWidth={2}
                      dot={{ fill: "#f97316", r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
                {revenueData[filter].map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="text-xs text-muted-foreground">{item.year}</p>
                    <p className="text-lg font-bold text-foreground">{item.revenue}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="p-4">
            <CardContent className="p-0">
              <div className="flex items-center justify-center gap-6">
                <div className="h-40 w-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieChartData[filter]}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {pieChartData[filter].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {pieChartData[filter].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <p className="text-lg font-bold">{item.value}%</p>
                        <p className="text-xs text-muted-foreground">{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Area Chart - Sales */}
          <Card className="p-4">
            <CardContent className="p-0">
              <h3 className="text-sm font-medium mb-3 text-center">Sales</h3>
              <div className="h-36">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaChartData[filter]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#f97316"
                      fill="#fed7aa"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card className="p-4">
            <CardContent className="p-0">
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData[filter]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip />
                    <Bar dataKey="value1" fill="#f97316" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="value2" fill="#fdba74" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
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

export default Reports;

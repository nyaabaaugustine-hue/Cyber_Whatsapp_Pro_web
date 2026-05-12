import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check, Zap, Shield, Star, Clock, Users } from "lucide-react";

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly" | null>(null);

  const plans = [
    {
      id: "monthly",
      name: "Monthly Plan",
      price: "100",
      currency: "GHS",
      period: "/month",
      description: "Perfect for trying out the extension",
      features: [
        "Full access to all features",
        "Bulk message sending",
        "Contact management",
        "Auto-reply templates",
        "Priority support",
        "Regular updates"
      ],
      popular: false,
      savings: null
    },
    {
      id: "yearly",
      name: "Yearly Plan",
      price: "75",
      currency: "GHS",
      period: "/month",
      description: "Best value - Save 25% with annual billing",
      features: [
        "Everything in Monthly",
        "Advanced automation",
        "Custom templates",
        "Analytics dashboard",
        "Priority support 24/7",
        "Early access to new features",
        "Dedicated account manager"
      ],
      popular: true,
      savings: "Save 300 GHS/year",
      originalPrice: "1,200 GHS/year",
      discountedPrice: "900 GHS/year"
    }
  ];

  const handleSelectPlan = (planId: "monthly" | "yearly") => {
    setSelectedPlan(planId);
    document.getElementById("instructions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-emerald-200 rounded-3xl transform -rotate-3 scale-105 opacity-50" />
            
            <img
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778561452/make_marketing_social_media_ad_202605120336_ji0mkt.jpg"
              alt="Cyber WhatsApp Pro Features"
              className="relative w-full h-auto rounded-2xl shadow-2xl shadow-slate-300"
            />
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">5,000+</p>
                  <p className="text-xs text-slate-500">Active Users</p>
                </div>
              </div>
            </div>

            {/* Floating Logo */}
            <div className="absolute -top-4 -right-4 bg-white p-2 rounded-xl shadow-lg border border-slate-100">
              <img
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778439347/cybbber_xhblm2.png"
                alt="Cyber WhatsApp Pro"
                className="w-10 h-10"
              />
            </div>
          </div>
          
          {/* Right - Pricing Cards */}
          <div className="order-1 lg:order-2">
            {/* Section Header */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                <span>Simple, Transparent Pricing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Choose Your Plan
              </h2>
              <p className="text-slate-600">
                Start monthly or save more with yearly billing. No hidden fees.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="space-y-6">
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`relative p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                    plan.popular
                      ? "border-emerald-500 shadow-lg shadow-emerald-100"
                      : "border-slate-200 hover:border-slate-300"
                  } ${selectedPlan === plan.id ? "ring-4 ring-emerald-200" : ""}`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 right-4">
                      <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Left - Plan Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-slate-900">
                          {plan.name}
                        </h3>
                        {plan.savings && (
                          <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                            {plan.savings}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 mb-3">
                        {plan.description}
                      </p>
                      
                      {/* Features - Show first 3 */}
                      <div className="flex flex-wrap gap-2">
                        {plan.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-50 px-2 py-1 rounded-lg">
                            <Check className="w-3 h-3 text-emerald-600" />
                            {feature}
                          </span>
                        ))}
                        {plan.features.length > 3 && (
                          <span className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-lg">
                            +{plan.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Right - Price & CTA */}
                    <div className="text-center sm:text-right">
                      <div className="flex items-baseline justify-center sm:justify-end gap-1 mb-1">
                        <span className="text-sm text-slate-500">{plan.currency}</span>
                        <span className="text-4xl font-bold text-slate-900">
                          {plan.price}
                        </span>
                        <span className="text-slate-500">{plan.period}</span>
                      </div>
                      
                      {plan.originalPrice && (
                        <p className="text-xs text-slate-400 mb-2">
                          <span className="line-through">{plan.originalPrice}</span>
                          <span className="ml-1 text-emerald-600 font-medium">{plan.discountedPrice}</span>
                        </p>
                      )}
                      
                      <Button
                        onClick={() => handleSelectPlan(plan.id as "monthly" | "yearly")}
                        className={`mt-2 px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                          plan.popular
                            ? "bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white"
                            : "bg-slate-900 hover:bg-slate-800 text-white"
                        }`}
                      >
                        {plan.popular ? "Get Started" : "Choose Plan"}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Clock className="w-4 h-4 text-cyan-600" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Star className="w-4 h-4 text-amber-500" />
                <span>7-Day Refund</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
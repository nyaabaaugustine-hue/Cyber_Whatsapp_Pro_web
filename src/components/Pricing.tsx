import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Shield, Star, Clock, Users } from "lucide-react";

const plans = [
  {
    id: "monthly",
    name: "Monthly Plan",
    price: "100",
    period: "/month",
    description: "Perfect for trying out the extension",
    features: [
      "Full access to all features",
      "Bulk message sending",
      "Contact management",
      "Auto-reply templates",
      "Priority support",
      "Regular updates",
    ],
    popular: false,
    annualNote: null,
  },
  {
    id: "yearly",
    name: "Yearly Plan",
    price: "87",
    period: "/month",
    description: "Best value — save GHS 156 per year",
    features: [
      "Everything in Monthly",
      "Advanced automation",
      "Custom templates",
      "Analytics dashboard",
      "Priority support 24/7",
      "Early access to new features",
      "Dedicated account manager",
    ],
    popular: true,
    annualNote: "GHS 1,044 billed annually",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-emerald-500 shadow-lg shadow-emerald-100"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-3 right-4">
                  <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                    BEST VALUE
                  </div>
                </div>
              )}

              <h3 className="text-xl font-semibold text-slate-900 mb-1">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-slate-500">GHS</span>
                  <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 text-sm">{plan.period}</span>
                </div>
                {plan.annualNote && (
                  <p className="text-emerald-600 text-sm mt-1 font-medium">{plan.annualNote}</p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 mt-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 text-base font-semibold ${
                  plan.popular
                    ? "bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
                onClick={() => document.getElementById("instructions")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Clock className="w-4 h-4 text-cyan-600" />
            <span>Instant Access</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Users className="w-4 h-4 text-violet-600" />
            <span>5,000+ Users</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Star className="w-4 h-4 text-amber-500" />
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

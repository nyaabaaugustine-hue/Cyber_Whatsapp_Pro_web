import { Check } from "lucide-react"
import { Button } from "../components/ui/button"

const plans = [
  {
    name: "Monthly",
    price: "100",
    period: "per month",
    description: "Perfect for trying out the tool",
    features: [
      "Unlimited bulk messages",
      "Contact management",
      "Message templates",
      "Basic analytics",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Yearly",
    price: "87",
    period: "per month, billed yearly",
    description: "Save 156 GHS per year",
    features: [
      "Everything in Monthly",
      "Priority support",
      "Advanced analytics",
      "Custom templates",
      "API access",
      "Dedicated account manager"
    ],
    popular: true
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-600 text-lg">
            Choose the plan that works best for you
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-emerald-500 scale-[1.02]' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                  BEST VALUE
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">
                      GHS {plan.price}
                    </span>
                    <span className="text-slate-500 text-sm">
                      /{plan.period}
                    </span>
                  </div>
                  {plan.name === "Yearly" && (
                    <p className="text-emerald-600 text-sm mt-1 font-medium">
                      GHS 1,044 billed annually
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-6 text-lg ${
                    plan.popular 
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  GetStarted
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <p className="text-center text-slate-500 text-sm mt-8">
          🔒 Secure payment • Cancel anytime • No hidden fees
        </p>
      </div>
    </section>
  )
}
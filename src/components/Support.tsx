import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { MessageCircle, Mail, Phone, ExternalLink } from "lucide-react";

export function Support() {
  const phoneNumber = "233541988383";
  const message = encodeURIComponent("Hi! I need help with Cyber WhatsApp Pro installation.");

  return (
    <section id="support" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Need Help?
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Our support team is ready to assist you with installation or any questions
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* WhatsApp */}
          <Card className="p-6 border-2 border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg group text-center">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
              <MessageCircle className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900 mb-1">WhatsApp</h3>
            <p className="text-emerald-600 font-medium text-sm mb-1">+233 54 198 8383</p>
            <p className="text-slate-500 text-xs mb-4">Instant response</p>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
              onClick={() =>
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
              }
            >
              Chat Now
            </Button>
          </Card>

          {/* Phone */}
          <Card className="p-6 border-2 border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <Phone className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900 mb-1">Call Us</h3>
            <p className="text-blue-600 font-medium text-sm mb-1">+233 54 198 8383</p>
            <p className="text-slate-500 text-xs mb-4">Mon–Fri, 9am–5pm GMT</p>
            <Button
              variant="outline"
              className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
              onClick={() => {
                window.location.href = "tel:+233541988383";
              }}
            >
              Call Now
            </Button>
          </Card>

          {/* Email */}
          <Card className="p-6 border-2 border-slate-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg group text-center">
            <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-200 transition-colors">
              <Mail className="w-7 h-7 text-cyan-600" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900 mb-1">Email</h3>
            <p className="text-cyan-600 font-medium text-sm mb-1">cybertechgh@gmail.com</p>
            <p className="text-slate-500 text-xs mb-4">24–48h response</p>
            <Button
              variant="outline"
              className="w-full border-cyan-200 text-cyan-700 hover:bg-cyan-50"
              onClick={() =>
                window.open("mailto:cybertechgh@gmail.com", "_blank")
              }
            >
              Send Email
            </Button>
          </Card>
        </div>

        {/* FAQ Teaser */}
        <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">Check our FAQ</p>
                <p className="text-slate-400 text-sm">Find answers to common questions</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              View Documentation
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

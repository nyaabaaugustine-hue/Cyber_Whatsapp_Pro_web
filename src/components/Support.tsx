import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { MessageCircle, Mail, ExternalLink } from "lucide-react";

export function Support() {
  return (
    <section className="py-20 px-4 bg-white">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WhatsApp Support */}
          <Card className="p-8 border-2 border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg group">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <MessageCircle className="w-7 h-7 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-xl text-slate-900 mb-2">
                  WhatsApp Support
                </h3>
                <p className="text-slate-600 mb-4">
                  Chat with our team directly on WhatsApp for instant help
                </p>
                <Button
                  className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Email Support */}
          <Card className="p-8 border-2 border-slate-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg group">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                <Mail className="w-7 h-7 text-cyan-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-xl text-slate-900 mb-2">
                  Email Support
                </h3>
                <p className="text-slate-600 mb-4">
                  Send us an email and we'll respond within 24 hours
                </p>
                <Button
                  variant="outline"
                  className="w-full border-cyan-200 text-cyan-700 hover:bg-cyan-50"
                  onClick={() => window.open('mailto:support@cyberwhatsapp.pro', '_blank')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        {/* FAQ Teaser */}
        <div className="mt-12 p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl">
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
import { Download, Shield, Zap, Users, ArrowRight } from "lucide-react";

interface HeroProps {
  isChrome: boolean;
}

export function Hero({ isChrome }: HeroProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/downloads/cyber-whatsapp-pro.zip";
    link.download = "cyber-whatsapp-pro.zip";
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-28">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Shield className="w-4 h-4 flex-shrink-0" />
              <span>Secure &amp; Verified Extension</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Install{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Cyber WhatsApp Pro
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Bulk WhatsApp automation tool for Chrome. Send messages, manage contacts, and automate
              your workflow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 text-base font-semibold rounded-xl shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 transition-all duration-300 flex items-center justify-center gap-3"
              >
                View Pricing
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </a>

              <button
                onClick={handleDownload}
                disabled={!isChrome}
                className="bg-white text-slate-700 px-8 py-4 text-base font-semibold rounded-xl shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-slate-200 transition-all duration-300 flex items-center justify-center gap-3 border border-slate-200 hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-5 h-5 flex-shrink-0" />
                Download Extension
              </button>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Lightning Fast</h3>
                  <p className="text-xs text-slate-500">Bulk messaging</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Contact Manager</h3>
                  <p className="text-xs text-slate-500">Easy organization</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Safe &amp; Secure</h3>
                  <p className="text-xs text-slate-500">Private data</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-cyan-200 rounded-3xl transform rotate-3 scale-105 opacity-50" />

            {/* Main Image */}
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778561452/improve_marketing_ad_poster_and_202605120333_gh2j6s.jpg"
                alt="Cyber WhatsApp Pro - Marketing Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl shadow-slate-300"
              />

              {/* Floating Logo Badge */}
              <div className="absolute -top-4 -right-4 bg-white p-2 rounded-xl shadow-lg border border-slate-100">
                <img
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778439347/cybbber_xhblm2.png"
                  alt="Cyber WhatsApp Pro"
                  className="w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

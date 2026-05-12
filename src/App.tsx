import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { InstallationSteps } from "./components/InstallationSteps";
import { VideoGuide } from "./components/VideoGuide";
import { Support } from "./components/Support";
import { BrowserWarning } from "./components/BrowserWarning";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

function App() {
  const [isChrome, setIsChrome] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const isChromeBrowser = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    setIsChrome(isChromeBrowser);
    if (!isChromeBrowser) {
      setShowWarning(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <BrowserWarning show={showWarning} onClose={() => setShowWarning(false)} />
      
      {/* Header */}
      <Header />
      
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 translate-x-1/2" />
        
        <main className="relative z-10">
          <Hero isChrome={isChrome} />
          <Pricing />
          <InstallationSteps />
          <VideoGuide />
          <Support />
        </main>
      </div>
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778439347/cybbber_xhblm2.png"
                  alt="Cyber WhatsApp Pro"
                  className="w-12 h-12"
                />
                <span className="text-white font-semibold text-lg">Cyber WhatsApp Pro</span>
              </div>
              <p className="text-sm text-slate-500 max-w-xs">
                The most powerful WhatsApp automation tool for businesses and professionals.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#pricing" className="text-sm hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#instructions" className="text-sm hover:text-white transition-colors">Installation Guide</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#support" className="text-sm hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              © 2024 Cyber WhatsApp Pro. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              This extension is not affiliated with WhatsApp Inc. or Meta Platforms.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
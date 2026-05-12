import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { InstallationSteps } from "./components/InstallationSteps";
import { VideoGuide } from "./components/VideoGuide";
import { Support } from "./components/Support";
import { BrowserWarning } from "./components/BrowserWarning";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;

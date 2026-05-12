import { useState, useEffect } from "react";
import { MessageCircle, X, Download } from "lucide-react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "233541988383";
    const message = encodeURIComponent("Hello! I'm interested in Cyber WhatsApp Pro. Can you help me with more information?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
      {/* Expanded Panel */}
      <div className={`absolute bottom-20 right-0 w-80 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
          {/* Image Header */}
          <div className="relative h-40 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1778561984/download_c9fduz.jpg"
              alt="Cyber WhatsApp Pro"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-white font-semibold text-sm">Need Help Installing?</p>
              <p className="text-white/80 text-xs">Chat with our support team</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-4">
            {/* Quick Actions */}
            <div className="space-y-2 mb-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-3 rounded-xl text-sm font-medium hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-200"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </button>
              
              <a
                href="#instructions"
                onClick={() => setIsOpen(false)}
                className="w-full bg-slate-100 text-slate-700 py-3 rounded-xl text-sm font-medium hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                View Installation Guide
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900">Support Team</p>
                <p className="text-xs text-slate-500 truncate">+233 54 198 8383</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs text-emerald-600 font-medium">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group ${
          isOpen 
            ? "bg-slate-800 shadow-slate-300" 
            : "bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-emerald-300 hover:shadow-emerald-400"
        }`}
      >
        {/* Pulse Animation */}
        {!isOpen && (
          <>
            <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
            <div className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse opacity-30" />
          </>
        )}
        
        {/* Icon */}
        <div className="relative flex items-center justify-center w-full h-full">
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          )}
        </div>
        
        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        )}
      </button>

      {/* Quick Action Buttons - Show when panel is closed */}
      <div className={`absolute bottom-20 right-0 flex flex-col gap-3 transition-all duration-300 ${!isOpen && isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-100"
        >
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-sm font-medium text-slate-700 whitespace-nowrap">Chat Now</span>
        </button>
        
        <a
          href="#pricing"
          className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-100"
        >
          <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
            <span className="text-cyan-600 text-sm font-bold">₵</span>
          </div>
          <span className="text-sm font-medium text-slate-700 whitespace-nowrap">View Pricing</span>
        </a>
      </div>
    </div>
  );
}
import { useState } from "react";
import { MessageCircle, X, Download } from "lucide-react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "233541988383";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in Cyber WhatsApp Pro. Can you help me with more information?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Backdrop for mobile — closes panel when tapping outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Fixed container — sits above backdrop */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {/* Expanded Panel */}
        <div
          className={`absolute transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          style={{
            bottom: "calc(100% + 1rem)",
            /* On mobile: pin left edge to viewport + 1rem, right edge to 0 (aligns with button) */
            right: 0,
            width: "min(320px, calc(100vw - 2rem))",
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            {/* Image Header */}
            <div className="relative h-32 sm:h-40 overflow-hidden">
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
          aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group ${
            isOpen
              ? "bg-slate-800 shadow-slate-300"
              : "bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-emerald-300 hover:shadow-emerald-400"
          }`}
        >
          {/* Pulse rings */}
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
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-white group-hover:scale-110 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            )}
          </div>

          {/* Notification badge */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-lg pointer-events-none">
              <span className="text-white text-xs font-bold leading-none">1</span>
            </div>
          )}
        </button>
      </div>
    </>
  );
}

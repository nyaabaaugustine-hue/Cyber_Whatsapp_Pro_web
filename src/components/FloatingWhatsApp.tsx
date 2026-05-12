import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {
  const phoneNumber = "233541988383"
  const message = "Hi! I need help with Cyber WhatsApp Pro installation."

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-slate-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          <p className="font-medium">Need help? Chat now!</p>
          <p className="text-green-400 text-xs">+233 54 198 8383</p>
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900" />
        </div>
      </div>
    </a>
  )
}
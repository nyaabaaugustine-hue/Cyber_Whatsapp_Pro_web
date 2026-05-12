import { MessageCircle, Mail, Phone } from "lucide-react"
import { Button } from "../components/ui/button"

export default function Support() {
  const phoneNumber = "233541988383"
  const message = "Hi! I need help with Cyber WhatsApp Pro installation."

  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Need Help?
        </h2>
        <p className="text-slate-600 text-lg mb-10">
          Our support team is ready to assist you with installation or any questions.
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {/* WhatsApp */}
          <a 
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-50 hover:bg-green-100 rounded-xl p-6 transition-all duration-300"
          >
            <div className="bg-green-500 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">WhatsApp</h3>
            <p className="text-green-600 font-medium">+233 54 198 8383</p>
            <p className="text-slate-500 text-sm mt-1">Instant response</p>
          </a>

          {/* Phone */}
          <a 
            href="tel:+233541988383"
            className="group bg-blue-50 hover:bg-blue-100 rounded-xl p-6 transition-all duration-300"
          >
            <div className="bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
            <p className="text-blue-600 font-medium">+233 54 198 8383</p>
            <p className="text-slate-500 text-sm mt-1">Mon-Fri, 9am-5pm GMT</p>
          </a>

          {/* Email */}
          <a 
            href="mailto:cybertechgh@gmail.com"
            className="group bg-purple-50 hover:bg-purple-100 rounded-xl p-6 transition-all duration-300"
          >
            <div className="bg-purple-500 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
            <p className="text-purple-600 font-medium text-sm">cybertechgh@gmail.com</p>
            <p className="text-slate-500 text-sm mt-1">24-48h response</p>
          </a>
        </div>

        {/* CTA Button */}
        <Button 
          asChild
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg"
        >
          <a 
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  )
}
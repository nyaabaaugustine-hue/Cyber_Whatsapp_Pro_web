import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const phoneNumber = "233541988383";

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778439347/cybbber_xhblm2.png"
              alt="Cyber WhatsApp Pro"
              className="h-10 mb-4"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Bulk WhatsApp automation tool for Chrome. Save time and boost productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "#pricing", label: "Pricing" },
                { href: "#instructions", label: "Installation Guide" },
                { href: "#video", label: "Video Guides" },
                { href: "#testimonials", label: "Reviews" },
                { href: "#faq", label: "FAQ" },
                { href: "#support", label: "Support" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+233541988383"
                  className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">+233 54 198 8383</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:cybertechgh@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">cybertechgh@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Cyber WhatsApp Pro. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">Made with ❤️ in Ghana</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

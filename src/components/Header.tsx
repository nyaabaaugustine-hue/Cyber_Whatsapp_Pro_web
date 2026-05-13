import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#pricing", label: "Pricing" },
    { href: "#instructions", label: "Installation" },
    { href: "#video", label: "Video Guides" },
    { href: "#faq", label: "FAQ" },
    { href: "#support", label: "Support" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778439347/cybbber_xhblm2.png"
              alt="Cyber WhatsApp Pro Logo"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span
                className={`font-bold text-lg transition-colors duration-300 ${
                  isScrolled ? "text-slate-900" : "text-slate-800"
                }`}
              >
                Cyber WhatsApp Pro
              </span>
              <p className="text-xs text-slate-500 -mt-0.5">Bulk Automation Tool</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-emerald-600 ${
                  isScrolled ? "text-slate-600" : "text-slate-700"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://paystack.com/buy/cyber-whatsapp-pro-upvbbs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 transition-all duration-300"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-slate-800 hover:bg-white/50"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-4 pt-4 border-t border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 hover:text-emerald-600 font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://paystack.com/buy/cyber-whatsapp-pro-upvbbs"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-5 py-3 rounded-xl text-sm font-semibold text-center shadow-lg shadow-emerald-200"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778439347/cybbber_xhblm2.png" 
              alt="Cyber WhatsApp Pro Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-lg text-slate-900">Cyber WhatsApp Pro</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('steps')} className="text-slate-600 hover:text-slate-900 transition-colors">
              Installation
            </button>
            <button onClick={() => scrollTo('video')} className="text-slate-600 hover:text-slate-900 transition-colors">
              Video Guide
            </button>
            <button onClick={() => scrollTo('pricing')} className="text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollTo('support')} className="text-slate-600 hover:text-slate-900 transition-colors">
              Support
            </button>
            <a
              href="/downloads/cyber-whatsapp-pro.zip"
              download
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
            >
              Download
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollTo('steps')} className="text-slate-600 hover:text-slate-900 transition-colors text-left">
                Installation
              </button>
              <button onClick={() => scrollTo('video')} className="text-slate-600 hover:text-slate-900 transition-colors text-left">
                Video Guide
              </button>
              <button onClick={() => scrollTo('pricing')} className="text-slate-600 hover:text-slate-900 transition-colors text-left">
                Pricing
              </button>
              <button onClick={() => scrollTo('support')} className="text-slate-600 hover:text-slate-900 transition-colors text-left">
                Support
              </button>
              <a
                href="/downloads/cyber-whatsapp-pro.zip"
                download
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
              >
                Download
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
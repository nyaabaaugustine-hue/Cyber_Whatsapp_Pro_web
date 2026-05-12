import { useState, useEffect } from 'react'
import { Download, Check, Copy, Shield, Users, Clock, ArrowRight } from 'lucide-react'
import Header from './components/Header'
import BrowserWarning from './components/BrowserWarning'
import InstallationSteps from './components/InstallationSteps'
import VideoGuide from './components/VideoGuide'
import Support from './components/Support'
import Pricing from './components/Pricing'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  const [isChrome, setIsChrome] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent
    setIsChrome(userAgent.includes('Chrome') && !userAgent.includes('Edg'))
  }, [])

  const handleCopyInstructions = () => {
    const instructions = `1. Download the ZIP file
2. Extract the folder
3. Open Chrome → go to chrome://extensions
4. Enable Developer Mode (top right)
5. Click "Load Unpacked"
6. Select the extracted folder
7. Confirm extension is active`
    
    navigator.clipboard.writeText(instructions)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {!isChrome && <BrowserWarning />}

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Safe & Secure Installation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Install{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  Cyber WhatsApp Pro
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-xl">
                Bulk WhatsApp automation tool for Chrome. Send messages in bulk, auto-replies, and more.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <a
                  href="/downloads/cyber-whatsapp-pro.zip"
                  download
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 hover:-translate-y-0.5"
                >
                  <Download className="w-5 h-5" />
                  Download Extension
                </a>
                
                <button
                  onClick={handleCopyInstructions}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-6 py-4 rounded-xl font-medium border-2 border-slate-200 hover:border-slate-300 transition-all duration-200"
                >
                  {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                  {copied ? 'Copied!' : 'Copy Instructions'}
                </button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-500">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <span>10,000+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <span>5 min Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  <span>100% Safe</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778561452/improve_marketing_ad_poster_and_202605120333_gh2j6s.jpg" 
                  alt="Cyber WhatsApp Pro Dashboard" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Verified</p>
                  <p className="text-sm text-slate-500">Chrome Extension</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Image Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to automate your WhatsApp marketing
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778561452/make_marketing_social_media_ad_202605120336_ji0mkt.jpg" 
              alt="Cyber WhatsApp Pro Features" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Bulk Messaging</h3>
              <p className="text-slate-600 text-sm">Send messages to thousands of contacts at once</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Auto-Replies</h3>
              <p className="text-slate-600 text-sm">Set up automatic responses 24/7</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-violet-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Safe & Secure</h3>
              <p className="text-slate-600 text-sm">Your data stays private and protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <InstallationSteps />

      {/* Video Guide */}
      <VideoGuide />

      {/* Pricing */}
      <Pricing />

      {/* Support */}
      <Support />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778439347/cybbber_xhblm2.png" 
                alt="Cyber WhatsApp Pro Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-lg">Cyber WhatsApp Pro</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2024 Cyber WhatsApp Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
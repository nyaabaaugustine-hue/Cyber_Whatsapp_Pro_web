import { Download, FileArchive, Settings, Power, Upload, CheckCircle, ExternalLink } from 'lucide-react'

const steps = [
  {
    icon: Download,
    title: 'Download the ZIP',
    description: 'Click the download button to get the extension file',
    tip: 'The file is ~2MB and downloads instantly'
  },
  {
    icon: FileArchive,
    title: 'Extract the folder',
    description: 'Right-click the ZIP and select "Extract All"',
    tip: 'Remember where you extract it'
  },
  {
    icon: Settings,
    title: 'Open Chrome Extensions',
    description: 'Type chrome://extensions in your address bar',
    tip: 'Or use Menu → More Tools → Extensions'
  },
  {
    icon: Power,
    title: 'Enable Developer Mode',
    description: 'Toggle the switch in the top-right corner',
    tip: 'This allows loading custom extensions'
  },
  {
    icon: Upload,
    title: 'Click "Load Unpacked"',
    description: 'Select the extracted extension folder',
    tip: 'Choose the folder, not individual files'
  },
  {
    icon: CheckCircle,
    title: 'Confirm Installation',
    description: 'You should see the extension in your toolbar',
    tip: 'Pin it for easy access!'
  }
]

export default function InstallationSteps() {
  return (
    <section id="steps" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Installation Steps
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Follow these simple steps to install Cyber WhatsApp Pro in under 5 minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-2">{step.description}</p>
                  <p className="text-emerald-600 text-xs font-medium flex items-center gap-1">
                    <span>💡</span> {step.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Link */}
        <div className="mt-12 text-center">
          <a
            href="chrome://extensions"
            target="_blank"
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Open Chrome Extensions Page
          </a>
        </div>
      </div>
    </section>
  )
}
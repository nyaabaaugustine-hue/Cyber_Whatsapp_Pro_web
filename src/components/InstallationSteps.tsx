import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Download, Settings, Check, Copy, ArrowRight, CheckCircle } from "lucide-react";

// Custom Chrome icon
const ChromeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" y1="8" x2="12" y2="8" />
    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
  </svg>
);

// Custom Puzzle icon
const PuzzleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.439 7.85c-.049.322-.059.68-.028 1.076.051.648.177 1.27.371 1.852a4.5 4.5 0 0 1-3.59 4.472 4.5 4.5 0 0 1-3.59-4.472c.194-.582.32-1.204.371-1.852.031-.396.021-.754-.028-1.076" />
    <path d="M19.439 7.85a4.5 4.5 0 0 0-3.59-4.472 4.5 4.5 0 0 0-3.59 4.472" />
    <path d="M12.223 7.85a4.5 4.5 0 0 0-3.59-4.472 4.5 4.5 0 0 0-3.59 4.472" />
    <path d="M12.223 7.85c-.049.322-.059.68-.028 1.076.051.648.177 1.27.371 1.852a4.5 4.5 0 0 1-3.59 4.472 4.5 4.5 0 0 1-3.59-4.472c.194-.582.32-1.204.371-1.852.031-.396.021-.754-.028-1.076" />
  </svg>
);

// Custom folder icon
const folderOpen = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.8 1.1l2.38 4.76A2 2 0 0 1 22 18H6" />
    <path d="M2 18h2" />
    <path d="M2 6h20" />
    <path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
  </svg>
);

const steps = [
  {
    icon: Download,
    title: "Download the ZIP File",
    description: "Click the download button above to get the extension package",
    tip: "The file will be saved to your Downloads folder"
  },
  {
    icon: folderOpen,
    title: "Extract the folder",
    description: "Right-click the ZIP file and select 'Extract All' or use your preferred extraction tool",
    tip: "Remember where you extract it - you'll need this location"
  },
  {
    icon: ChromeIcon,
    title: "Open Chrome Extensions",
    description: "Type chrome://extensions in your address bar and press Enter",
    tip: "You can also find this via Menu → More Tools → Extensions"
  },
  {
    icon: Settings,
    title: "Enable Developer Mode",
    description: "Toggle the 'Developer mode' switch in the top-right corner",
    tip: "This allows you to load unpacked extensions"
  },
  {
    icon: PuzzleIcon,
    title: "Click 'Load Unpacked'",
    description: "Select the 'Load unpacked' button that appears in the top-left",
    tip: "This opens a folder selection dialog"
  },
  {
    icon: folderOpen,
    title: "Select Extracted folder",
    description: "Navigate to and select the extracted extension folder",
    tip: "Choose the folder containing 'manifest.json'"
  },
  {
    icon: CheckCircle,
    title: "Confirm Installation",
    description: "The extension should now appear in your extensions list",
    tip: "Pin it for easy access!"
  }
];

export function InstallationSteps() {
  const [copied, setCopied] = useState(false);

  const copyInstructions = () => {
    const text = steps.map((step, i) => 
      `${i + 1}. ${step.title}: ${step.description}`
    ).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="instructions" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Installation Guide
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Follow these simple steps to install Cyber WhatsApp Pro manually. 
            Takes less than 2 minutes!
          </p>
        </div>
        
        {/* Copy Button */}
        <div className="flex justify-end mb-8">
          <Button
            onClick={copyInstructions}
            variant="outline"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Instructions
              </>
            )}
          </Button>
        </div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <Card
                key={index}
                className={`relative p-6 border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isLast 
                    ? 'border-emerald-200 bg-gradient-to-br from-emerald-50 to-cyan-50' 
                    : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  isLast 
                    ? 'bg-emerald-100' 
                    : 'bg-slate-100'
                }`}>
                  <div className={isLast ? 'text-emerald-600' : 'text-slate-600'}>
                    <Icon />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  {step.description}
                </p>
                
                {/* Tip */}
                <div className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                  <p className="text-xs text-slate-500">
                    <span className="font-medium">Tip:</span> {step.tip}
                  </p>
                </div>
                
                {/* Connector Arrow (for non-last items in a row) */}
                {index % 3 !== 2 && index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>
        
        {/* Chrome URL Helper */}
        <div className="mt-12 p-6 bg-slate-900 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <ChromeIcon />
              </div>
              <div>
                <p className="text-white font-medium">Quick Access</p>
                <p className="text-slate-400 text-sm">Copy this URL and paste in Chrome</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl">
              <code className="text-emerald-400 font-mono text-sm">chrome://extensions</code>
              <button
                onClick={() => navigator.clipboard.writeText('chrome://extensions')}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
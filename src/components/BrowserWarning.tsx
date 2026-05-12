import { useState, useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";

interface BrowserWarningProps {
  show: boolean;
  onClose: () => void;
}

const ChromeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" y1="8" x2="12" y2="8" />
    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
  </svg>
);

export function BrowserWarning({ show, onClose }: BrowserWarningProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => setVisible(true), 100);
    } else {
      setVisible(false);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${visible ? "bg-slate-900/50 backdrop-blur-sm" : "bg-transparent"}`}>
      <div className={`bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative transition-all duration-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-slate-400" />
        </button>

        <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8 text-amber-600" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 text-center mb-2">
          Chrome Browser Required
        </h3>
        <p className="text-slate-600 text-center mb-6">
          This extension is designed for Google Chrome. Please open this page in Chrome to download and install.
        </p>

        <div className="flex items-center justify-center gap-2 p-4 bg-slate-50 rounded-xl mb-4">
          <ChromeIcon />
          <span className="text-slate-700 font-medium">Google Chrome</span>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 text-slate-600 hover:text-slate-900 font-medium transition-colors"
        >
          Continue Anyway
        </button>
      </div>
    </div>
  );
}

import { AlertTriangle } from 'lucide-react'

export default function BrowserWarning() {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-amber-500 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <AlertTriangle className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm sm:text-base">
          <strong>Note:</strong> This extension only works in Google Chrome.{' '}
          <a
            href="https://www.google.com/chrome/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline font-semibold"
          >
            Download Chrome
          </a>
        </p>
      </div>
    </div>
  )
}
import { Play } from 'lucide-react'

export default function VideoGuide() {
  return (
    <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Watch Setup in 60 Seconds
          </h2>
          <p className="text-lg text-slate-600">
            A quick video guide to help you get started
          </p>
        </div>

        {/* Video Placeholder with Image */}
        <div className="relative aspect-video bg-slate-100 rounded-2xl overflow-hidden border-2 border-slate-200 group cursor-pointer hover:border-emerald-300 transition-all shadow-lg">
          <img 
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1778561452/make_marketing_social_media_ad_202605120336_ji0mkt.jpg" 
            alt="Video Tutorial Thumbnail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-emerald-600 ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-white text-sm font-medium bg-slate-900/50 inline-block px-4 py-2 rounded-full">
              ▶ Click to watch tutorial
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
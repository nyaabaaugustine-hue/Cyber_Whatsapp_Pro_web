import { Play } from "lucide-react";

export function VideoGuide() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Watch Setup in 60 Seconds
          </h2>
          <p className="text-lg text-slate-600">
            A quick video tutorial to guide you through the installation process
          </p>
        </div>
        
        {/* Video Container */}
        <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
          {/* Placeholder for video */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <div className="text-center">
              {/* Play Button */}
              <button className="group w-20 h-20 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-110">
                <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
              </button>
              
              <p className="mt-6 text-slate-400 text-sm">
                Video tutorial coming soon
              </p>
              
              {/* Duration Badge */}
              <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">1:00</span>
              </div>
            </div>
          </div>
          
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-emerald-500/50 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-emerald-500/50 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-emerald-500/50 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-emerald-500/50 rounded-br-lg" />
        </div>
        
        {/* Video Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="font-medium text-slate-900 text-sm">Step-by-Step</p>
              <p className="text-xs text-slate-500">Visual walkthrough</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
              <span className="text-cyan-600 font-bold text-sm">HD</span>
            </div>
            <div>
              <p className="font-medium text-slate-900 text-sm">HD Quality</p>
              <p className="text-xs text-slate-500">Crystal clear video</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100">
            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
              <span className="text-violet-600 font-bold text-sm">60s</span>
            </div>
            <div>
              <p className="font-medium text-slate-900 text-sm">Quick Watch</p>
              <p className="text-xs text-slate-500">Under a minute</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
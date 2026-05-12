import React from 'react';
import { Play } from 'lucide-react';

export const VideoGuide: React.FC = () => {
  return (
    <section id="video" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Watch Setup in 60 Seconds</h2>
          <p className="text-lg text-slate-600">A quick video tutorial to guide you through the installation process</p>
        </div>

        <div className="flex flex-col items-center">
          {/* Kapwing Vertical Video Embed */}
          <div className="relative shadow-2xl rounded-2xl overflow-hidden bg-slate-900 border-4 border-white" style={{ height: '533.33px', width: '300.00px' }}>
            <iframe
              allow="autoplay; gyroscope;"
              allowFullScreen
              height="100%"
              referrerPolicy="strict-origin"
              src="https://www.kapwing.com/e/6a032a54e6a976e69b33345b"
              style={{ border: 0, height: '100%', left: 0, overflow: 'hidden', position: 'absolute', top: 0, width: '100%' }}
              title="Embedded content made on Kapwing"
              width="100%"
            />
          </div>
          <p className="w-[300px] mt-4 text-[12px] text-right text-slate-500">
            Video edited on <a href="https://www.kapwing.com/video-editor" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors underline font-medium">Kapwing</a>
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Play className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="font-medium text-slate-900 text-sm">Step-by-Step</p>
              <p className="text-xs text-slate-500">Visual walkthrough</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-cyan-600 text-sm">HD</div>
            <div>
              <p className="font-medium text-slate-900 text-sm">HD Quality</p>
              <p className="text-xs text-slate-500">Crystal clear video</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-violet-600 text-sm">60s</div>
            <div>
              <p className="font-medium text-slate-900 text-sm">Quick Watch</p>
              <p className="text-xs text-slate-500">Under a minute</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
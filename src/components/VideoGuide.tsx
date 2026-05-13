import React from 'react';
import { Play, Monitor, Clock } from 'lucide-react';

export const VideoGuide: React.FC = () => {
  return (
    <section id="video" className="py-20 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Video Guides</h2>
          <p className="text-lg text-slate-600">Visual tutorials to help you master Cyber WhatsApp Pro</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* YouTube Installation Video */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 text-lg">1</span>
              How to Install
            </h3>
            <div className="w-full aspect-video shadow-2xl rounded-2xl overflow-hidden bg-slate-900 border-4 border-white">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/g37uhggGLxU?si=1ut2zgjIgGAX3u3l"
                title="How to Install Cyber WhatsApp Pro"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Follow this step-by-step guide to learn how to manually install the Cyber WhatsApp Pro extension on your Chrome browser.
            </p>
          </div>

          {/* Kapwing Marketing Video */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="w-full lg:w-[300px]">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 text-lg">2</span>
                Marketing Overview
              </h3>
              <div className="relative shadow-2xl rounded-2xl overflow-hidden bg-slate-900 border-4 border-white aspect-[9/16]">
                <iframe
                  allow="autoplay; gyroscope;"
                  allowFullScreen
                  referrerPolicy="strict-origin"
                  src="https://www.kapwing.com/e/6a032a54e6a976e69b33345b"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  title="Cyber WhatsApp Pro Marketing Overview"
                />
              </div>
              <p className="mt-6 text-slate-600 text-center lg:text-right">
                Take a quick tour of our automation features and premium dashboard.
              </p>
            </div>
          </div>
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
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Monitor className="w-5 h-5 text-cyan-600" />
            </div>
            <div>
              <p className="font-medium text-slate-900 text-sm">HD Quality</p>
              <p className="text-xs text-slate-500">Crystal clear video</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-violet-600" />
            </div>
            <div>
              <p className="font-medium text-slate-900 text-sm">Quick Watch</p>
              <p className="text-xs text-slate-500">Efficient walkthroughs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { SectorItem, NavPage } from '../types';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe, Building2, Calendar, Activity, X } from 'lucide-react';

interface SectorPageProps {
  sector: SectorItem;
  onNavigate: (page: NavPage) => void;
  onOpenInquire: () => void;
}

export const SectorPage: React.FC<SectorPageProps> = ({
  sector,
  onNavigate,
  onOpenInquire
}) => {
  const [selectedVenture, setSelectedVenture] = useState<SectorItem['portfolio'][0] | null>(null);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Back Button & Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
        <div className="flex items-center gap-3 text-xs font-mono text-[#8c7e6e]">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-[#c0a080] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </button>
          <span>/</span>
          <span className="text-[#c0a080] font-bold uppercase">SECTOR [{sector.code}] — {sector.title}</span>
        </div>
      </div>

      {/* Sector Hero Header */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-sm overflow-hidden bg-[#121212] text-[#f2ece4] min-h-[380px] flex flex-col justify-end p-8 sm:p-12 border border-[#3d3226] shadow-2xl">
          <img
            src={sector.heroImage}
            alt={sector.title}
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12100d] via-[#12100d]/70 to-transparent" />

          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181512]/90 border border-[#3d3226] text-xs font-mono text-[#c0a080] rounded-sm">
              <span>SECTOR [{sector.code}]</span>
              <span>•</span>
              <span className="text-[#c0a080] font-bold">{sector.subtitle}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-cinzel font-bold tracking-tight text-[#f2ece4]">
              {sector.title}
            </h1>

            <p className="text-base sm:text-lg text-[#ad9e8e] font-sans leading-relaxed">
              {sector.fullOverview}
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#181512] p-6 border border-[#2d251d] rounded-sm font-mono shadow-md">
          {sector.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-[10px] text-[#8c7e6e] uppercase tracking-wider">{stat.label}</div>
              <div className="text-2xl font-bold font-cinzel text-[#f2ece4]">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-[#2a241c] pb-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#c0a080]">
            [STRUCTURAL DOMAINS]
          </div>
          <h2 className="text-2xl font-cinzel font-bold text-[#f2ece4]">
            Primary Focus Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sector.focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#181512] p-6 border border-[#2d251d] rounded-sm space-y-3 shadow-md"
            >
              <div className="text-xs font-mono text-[#c0a080] font-bold">
                [0{idx + 1}]
              </div>
              <h3 className="text-base font-cinzel font-bold text-[#f2ece4]">
                {area.title}
              </h3>
              <p className="text-xs text-[#a39788] font-sans leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Active Operating Portfolio Units */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex items-center justify-between border-b border-[#2a241c] pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#c0a080]">
              [PORTFOLIO UNITS]
            </div>
            <h2 className="text-2xl font-cinzel font-bold text-[#f2ece4]">
              Active Operating Ventures in {sector.title}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#8c7e6e]">
            {sector.portfolio.length} ACTIVE UNITS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sector.portfolio.map((venture) => (
            <div
              key={venture.name}
              onClick={() => setSelectedVenture(venture)}
              className="bg-[#181512] p-6 border border-[#2d251d] rounded-sm space-y-4 hover:border-[#c0a080] transition-colors cursor-pointer group flex flex-col justify-between shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2 py-0.5 bg-[#251f18] text-[#c0a080] border border-[#3d3226] rounded font-bold">
                    {venture.status}
                  </span>
                  <span className="text-[#8c7e6e]">EST. {venture.founded}</span>
                </div>

                <h3 className="text-xl font-cinzel font-bold text-[#f2ece4] group-hover:text-[#c0a080] transition-colors">
                  {venture.name}
                </h3>

                <p className="text-xs text-[#a39788] font-sans">
                  {venture.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2d251d] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8c7e6e] text-[10px]">HQ LOCATION:</span>
                  <span className="text-[#d6cdbe] font-semibold">{venture.location}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8c7e6e] text-[10px]">CORE METRIC:</span>
                  <span className="text-[#c0a080] font-bold">{venture.metric}</span>
                </div>

                <div className="pt-2 flex items-center justify-end text-xs font-mono text-[#c0a080] font-bold group-hover:translate-x-0.5 transition-transform">
                  <span>Inspect Operating Data →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sector Direct Pitch CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#181512] p-8 rounded-sm border border-[#3d3226] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="text-xs font-mono text-[#c0a080] uppercase tracking-widest">
              [SECTOR ALLOCATION]
            </div>
            <h3 className="text-xl font-cinzel font-bold text-[#f2ece4] mt-1">
              Have an enterprise pitch in {sector.title}?
            </h3>
            <p className="text-xs text-[#a39788] font-sans mt-1">
              Our partners review sector-specific proposals directly on a 48-hour SLAs.
            </p>
          </div>
          <button
            onClick={onOpenInquire}
            className="px-6 py-3 bg-[#c0a080] text-[#121212] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#d4b494] transition-colors cursor-pointer rounded-sm shrink-0 shadow-lg"
          >
            Submit {sector.title} Pitch
          </button>
        </div>
      </section>

      {/* Venture Detail Modal */}
      {selectedVenture && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-[#181512] border border-[#3d3226] text-[#f2ece4] p-6 rounded-sm shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#2d251d] pb-4">
              <div>
                <span className="text-[10px] font-mono text-[#c0a080] uppercase tracking-widest">
                  [{sector.title} Operating Unit]
                </span>
                <h3 className="text-2xl font-cinzel font-bold text-[#f2ece4] mt-0.5">
                  {selectedVenture.name}
                </h3>
              </div>
              <button onClick={() => setSelectedVenture(null)} className="p-1 text-[#8c7e6e] hover:text-[#c0a080]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div>
                <div className="text-[#8c7e6e] uppercase text-[10px]">Tagline</div>
                <div className="text-[#d6cdbe] text-sm mt-0.5">{selectedVenture.tagline}</div>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-[#12100d] p-4 border border-[#2d251d] rounded">
                <div>
                  <div className="text-[#8c7e6e] text-[10px]">Headquarters</div>
                  <div className="font-bold text-[#f2ece4] mt-0.5">{selectedVenture.location}</div>
                </div>
                <div>
                  <div className="text-[#8c7e6e] text-[10px]">Founding Year</div>
                  <div className="font-bold text-[#f2ece4] mt-0.5">{selectedVenture.founded}</div>
                </div>
                <div>
                  <div className="text-[#8c7e6e] text-[10px]">Operating Status</div>
                  <div className="font-bold text-[#c0a080] mt-0.5">{selectedVenture.status}</div>
                </div>
                <div>
                  <div className="text-[#8c7e6e] text-[10px]">Primary Scale Index</div>
                  <div className="font-bold text-[#f2ece4] mt-0.5">{selectedVenture.metric}</div>
                </div>
              </div>

              <p className="text-[#a39788] font-sans text-xs leading-relaxed pt-2">
                This unit operates as an autonomous subsidiary under JBR&apos;s capital structure, utilizing shared JBR edge technology and infrastructure corridors.
              </p>
            </div>

            <div className="pt-4 border-t border-[#2d251d] flex items-center justify-between">
              <button
                onClick={() => setSelectedVenture(null)}
                className="px-4 py-2 border border-[#3d3226] text-[#a39788] font-mono text-xs uppercase hover:bg-[#251f18] rounded cursor-pointer transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedVenture(null);
                  onOpenInquire();
                }}
                className="px-4 py-2 bg-[#c0a080] text-[#121212] font-mono text-xs font-bold uppercase hover:bg-[#d4b494] rounded cursor-pointer transition-colors"
              >
                Inquire About Venture
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

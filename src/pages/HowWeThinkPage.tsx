import React from 'react';
import { NavPage } from '../types';
import { PRINCIPLES } from '../data/jbrData';
import { ArrowLeft, CheckCircle2, Shield, Zap, Sparkles, HelpCircle, X } from 'lucide-react';

interface HowWeThinkPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenInquire: () => void;
}

export const HowWeThinkPage: React.FC<HowWeThinkPageProps> = ({
  onNavigate,
  onOpenInquire
}) => {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Breadcrumb Header */}
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
          <span className="text-[#c0a080] font-bold uppercase">HOW WE THINK — PHILOSOPHY</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181512] border border-[#3d3226] text-xs font-mono text-[#c0a080] uppercase tracking-widest rounded-sm">
          <span>[JBR CORE FRAMEWORK]</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-cinzel font-bold text-[#f2ece4] tracking-tight max-w-4xl">
          Three principles that hold across every sector.
        </h1>

        <p className="text-base sm:text-lg text-[#ad9e8e] font-sans max-w-3xl leading-relaxed">
          Most venture firms optimize for consumer metrics or financial arbitrage. JBR evaluates every potential operating unit through three non-negotiable mental models.
        </p>
      </section>

      {/* Detailed Principles Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {PRINCIPLES.map((principle, index) => (
          <div
            key={principle.code}
            className="bg-[#181512] p-8 sm:p-12 border border-[#2d251d] rounded-sm shadow-xl space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2d251d] pb-6">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 bg-[#c0a080] text-[#121212] font-mono font-bold text-base flex items-center justify-center rounded-sm">
                  {principle.code}
                </span>
                <div>
                  <div className="text-xs font-mono text-[#c0a080] uppercase tracking-widest">
                    PRINCIPLE [{principle.code}]
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#f2ece4]">
                    {principle.title}
                  </h2>
                </div>
              </div>

              <div className="text-sm font-mono text-[#a39788] italic">
                &quot;{principle.short}&quot;
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#d6cdbe] font-sans leading-relaxed">
              {principle.description}
            </p>

            {/* Comparison Table for Principle */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-[#12100d] p-6 border border-[#2d251d] rounded-sm space-y-3">
                <div className="text-xs font-mono text-[#e06c6c] font-bold uppercase flex items-center gap-1.5">
                  <X className="w-4 h-4" />
                  <span>Conventional Industry Thinking</span>
                </div>
                <p className="text-xs text-[#a39788] leading-relaxed font-sans">
                  {index === 0 && 'Accepting existing regulatory and operational consensus. Managing legacy software patches instead of upgrading core hardware.'}
                  {index === 1 && 'Treating 15% annual logistics downtime or 40% agricultural water loss as an unchangeable cost of doing business.'}
                  {index === 2 && 'Waiting for government subsidies or competitor validation before investing in mass electric truck corridors or mass timber.'}
                </p>
              </div>

              <div className="bg-[#12100d] p-6 border border-[#3d3226] rounded-sm space-y-3">
                <div className="text-xs font-mono text-[#c0a080] font-bold uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c0a080]" />
                  <span>JBR Execution Model</span>
                </div>
                <p className="text-xs text-[#d6cdbe] leading-relaxed font-sans">
                  {index === 0 && 'Deconstructing physical bottlenecks down to spectrographic, thermal, and kinematic limits before writing a single line of software.'}
                  {index === 1 && 'Embedding real-time edge telemetry and automated dispatch to reclaim 100% of hidden operational friction.'}
                  {index === 2 && 'Pre-building deep physical asset networks that achieve exponential capital velocity when cost curves reach parity.'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#181512] text-[#f2ece4] p-10 rounded-sm border border-[#3d3226] text-center space-y-6 shadow-2xl">
          <h3 className="text-2xl font-cinzel font-bold text-[#f2ece4]">
            Align with the JBR First-Principles Philosophy?
          </h3>
          <p className="text-xs sm:text-sm text-[#a39788] max-w-xl mx-auto font-sans leading-relaxed">
            We actively converse with researchers, industrial operators, and venture founders who think in 10-year horizons.
          </p>
          <button
            onClick={onOpenInquire}
            className="px-8 py-3 bg-[#c0a080] text-[#121212] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#d4b494] transition-colors cursor-pointer rounded-sm shadow-xl"
          >
            Start A Conversation
          </button>
        </div>
      </section>

    </div>
  );
};

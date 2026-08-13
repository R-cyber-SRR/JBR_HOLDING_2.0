import React from 'react';
import { NavPage, SectorItem, JournalArticle, FounderNote } from '../types';
import { SECTORS, PRINCIPLES, FOUNDER_NOTES, JOURNAL_ARTICLES } from '../data/jbrData';
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap, Globe, Layers, Bookmark } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onOpenInquire: () => void;
  onSelectJournalArticle: (article: JournalArticle) => void;
  onSelectFounderNote: (note: FounderNote) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenInquire,
  onSelectJournalArticle,
  onSelectFounderNote
}) => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 border-b border-[#2a241c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1c1814] border border-[#3d3226] text-xs font-mono text-[#c0a080] uppercase tracking-widest rounded-sm">
                <span className="w-2 h-2 rounded-full bg-[#c0a080]"></span>
                <span>JBR HOLDING COMPANY</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif text-[#f2ece4] tracking-tight leading-[1.1]">
                We build categories, <br className="hidden sm:block" />
                <span className="italic font-serif font-normal text-[#c0a080]">not just companies.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#ad9e8e] font-sans leading-relaxed max-w-2xl">
                JBR is an independent holding company operating across <strong className="text-[#f2ece4] font-semibold">agriculture</strong>, <strong className="text-[#f2ece4] font-semibold">real estate</strong>, <strong className="text-[#f2ece4] font-semibold">transport</strong>, and <strong className="text-[#f2ece4] font-semibold">technology</strong>. We back ideas that eliminate structural friction in physical civilization.
              </p>
            </div>

            {/* Quick Stats Box */}
            <div className="lg:w-80 bg-[#181512] p-6 border border-[#2d251d] rounded-sm font-mono space-y-4 shadow-xl">
              <div className="text-[11px] text-[#c0a080] uppercase tracking-widest font-bold border-b border-[#2d251d] pb-2">
                [JBR Operating Scale]
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-[#f2ece4] font-cinzel">$1.8B+</div>
                  <div className="text-[10px] text-[#8c7e6e] uppercase tracking-wider">Portfolio Assets</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#f2ece4] font-cinzel">12</div>
                  <div className="text-[10px] text-[#8c7e6e] uppercase tracking-wider">Operating Units</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#f2ece4] font-cinzel">4</div>
                  <div className="text-[10px] text-[#8c7e6e] uppercase tracking-wider">Sectors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#c0a080] font-cinzel">89%</div>
                  <div className="text-[10px] text-[#8c7e6e] uppercase tracking-wider">Clean Energy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors 4-Column Architectural Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8 border-b border-[#2a241c] pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#c0a080]">
              [PRIMARY DIVISIONS]
            </div>
            <h2 className="text-2xl font-cinzel font-bold text-[#f2ece4]">
              Four Critical Sectors
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('sector-ag')}
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-bold text-[#c0a080] hover:underline cursor-pointer"
          >
            <span>EXPLORE ALL SECTORS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTORS.map((sector) => (
            <div
              key={sector.id}
              onClick={() => onNavigate(sector.slug)}
              className="group relative artistic-card rounded-sm overflow-hidden cursor-pointer flex flex-col justify-between shadow-lg"
            >
              {/* Sector Image Header */}
              <div className="relative h-48 overflow-hidden bg-[#121212]">
                <img
                  src={sector.heroImage}
                  alt={sector.title}
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181512] via-[#181512]/30 to-transparent" />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-[#12100d]/90 backdrop-blur-md text-[10px] font-mono text-[#c0a080] border border-[#3d3226] rounded-sm">
                  SECTOR [{sector.code}]
                </div>
                
                <div className="absolute bottom-3 left-3 right-3 text-[#f2ece4]">
                  <div className="text-xs font-mono text-[#a39788] uppercase tracking-widest">
                    {sector.subtitle}
                  </div>
                  <h3 className="text-xl font-cinzel font-bold text-[#f2ece4]">
                    {sector.title}
                  </h3>
                </div>
              </div>

              {/* Body details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#a39788] font-sans leading-relaxed">
                  {sector.description}
                </p>

                {/* Key Stat pill */}
                <div className="pt-3 border-t border-[#2d251d] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8c7e6e] text-[10px] uppercase">{sector.stats[0].label}:</span>
                  <span className="font-bold text-[#c0a080]">{sector.stats[0].value}</span>
                </div>

                <div className="flex items-center gap-1 text-xs font-mono font-bold text-[#c0a080] group-hover:underline pt-1">
                  <span>Enter {sector.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Think Principles Teaser */}
      <section className="bg-[#181512] text-[#f2ece4] py-16 border-y border-[#2a241c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#c0a080]">
                [JBR PHILOSOPHY]
              </div>
              <h2 className="text-3xl font-cinzel font-bold text-[#f2ece4] mt-1">
                Three principles that hold across every sector.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('how-we-think')}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#c0a080] hover:underline cursor-pointer"
            >
              <span>READ FULL PHILOSOPHY FRAMEWORK</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRINCIPLES.map((principle) => (
              <div key={principle.code} className="bg-[#12100d] p-6 border border-[#2d251d] rounded-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#c0a080] font-bold">
                    [PRINCIPLE {principle.code}]
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#c0a080]" />
                </div>
                <h3 className="text-xl font-cinzel font-bold text-[#f2ece4]">
                  {principle.title}
                </h3>
                <p className="text-xs font-mono text-[#a39788]">
                  {principle.short}
                </p>
                <p className="text-xs text-[#ad9e8e] font-sans leading-relaxed pt-2 border-t border-[#2d251d]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Notes Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8 border-b border-[#2a241c] pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#c0a080]">
              [FOUNDER ESSAYS]
            </div>
            <h2 className="text-2xl font-cinzel font-bold text-[#f2ece4]">
              Notes From The Partners
            </h2>
          </div>
          <button
            onClick={() => onNavigate('founder-notes')}
            className="text-xs font-mono font-bold text-[#c0a080] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>VIEW ALL NOTES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FOUNDER_NOTES.slice(0, 2).map((note) => (
            <div
              key={note.id}
              onClick={() => onSelectFounderNote(note)}
              className="bg-[#181512] p-8 border border-[#2d251d] rounded-sm space-y-6 hover:border-[#c0a080] transition-colors cursor-pointer group flex flex-col justify-between shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#8c7e6e]">
                  <span className="text-[#c0a080]">NOTE [{note.code}]</span>
                  <span>{note.date} • {note.readTime}</span>
                </div>
                <h3 className="text-xl font-cinzel font-bold text-[#f2ece4] group-hover:text-[#c0a080] transition-colors">
                  {note.title}
                </h3>
                <blockquote className="pl-4 border-l-2 border-[#c0a080] italic font-serif text-sm text-[#d6cdbe]">
                  &quot;{note.quote}&quot;
                </blockquote>
                <p className="text-xs text-[#a39788] line-clamp-2">
                  {note.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2d251d] flex items-center gap-1 text-xs font-mono font-bold text-[#c0a080] group-hover:translate-x-1 transition-transform">
                <span>Read Founder Essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journal Papers Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8 border-b border-[#2a241c] pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#c0a080]">
              [PUBLISHED DISPATCHES]
            </div>
            <h2 className="text-2xl font-cinzel font-bold text-[#f2ece4]">
              JBR Journal
            </h2>
          </div>
          <button
            onClick={() => onNavigate('journal')}
            className="text-xs font-mono font-bold text-[#c0a080] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>ALL PAPERS & DISPATCHES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {JOURNAL_ARTICLES.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectJournalArticle(article)}
              className="bg-[#181512] p-6 border border-[#2d251d] rounded-sm space-y-4 hover:border-[#c0a080] transition-colors cursor-pointer group flex flex-col justify-between shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="px-2 py-0.5 bg-[#251f18] text-[#c0a080] rounded border border-[#3d3226]">
                    {article.category}
                  </span>
                  <span className="text-[#8c7e6e]">{article.date}</span>
                </div>
                <h3 className="text-base font-serif font-bold text-[#f2ece4] group-hover:text-[#c0a080] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-[#a39788] font-sans line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 text-[11px] font-mono text-[#8c7e6e] flex items-center justify-between border-t border-[#2d251d]">
                <span>{article.author}</span>
                <span className="font-bold text-[#c0a080] group-hover:underline">READ →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Pitch Inquire Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#181512] text-[#f2ece4] p-8 sm:p-12 rounded-sm border border-[#3d3226] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono text-[#c0a080] uppercase tracking-widest">
              [INQUIRE & ALLOCATION]
            </div>
            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#f2ece4]">
              Building or scaling critical physical infrastructure?
            </h3>
            <p className="text-xs sm:text-sm text-[#a39788] font-sans leading-relaxed">
              JBR actively allocates capital and operator horsepower into founders and teams solving structural friction in agriculture, real estate, transport, and technology.
            </p>
          </div>
          <button
            onClick={onOpenInquire}
            className="px-8 py-4 bg-[#c0a080] text-[#121212] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#d4b494] transition-colors cursor-pointer rounded-sm shrink-0 shadow-xl border border-[#e4d3c0]/40"
          >
            [Initiate Conversation]
          </button>
        </div>
      </section>

    </div>
  );
};

import React, { useState } from 'react';
import { NavPage, JournalArticle } from '../types';
import { JOURNAL_ARTICLES } from '../data/jbrData';
import { ArrowLeft, Clock, X, Search, FileText, Share2, Check } from 'lucide-react';

interface JournalPageProps {
  onNavigate: (page: NavPage) => void;
  selectedArticle: JournalArticle | null;
  onSelectArticle: (article: JournalArticle | null) => void;
  onOpenInquire: () => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({
  onNavigate,
  selectedArticle,
  onSelectArticle,
  onOpenInquire
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'Agriculture', 'Real Estate', 'Transport', 'Technology', 'Capital'];

  const filteredArticles = JOURNAL_ARTICLES.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesQuery = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const featured = JOURNAL_ARTICLES.find(a => a.featured) || JOURNAL_ARTICLES[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <span className="text-[#c0a080] font-bold uppercase">JBR JOURNAL — RESEARCH & PAPERS</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181512] border border-[#3d3226] text-xs font-mono text-[#c0a080] uppercase tracking-widest rounded-sm">
          <span>[RESEARCH & INDUSTRIAL DISPATCHES]</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-cinzel font-bold text-[#f2ece4] tracking-tight max-w-4xl">
          Most of what JBR is thinking about, we publish before we build it.
        </h1>

        <p className="text-base sm:text-lg text-[#ad9e8e] font-sans max-w-3xl leading-relaxed">
          Open research papers on mass timber engineering, sub-surface agronomy probes, megawatt truck corridors, and edge micro-kernels.
        </p>
      </section>

      {/* Featured Paper Banner */}
      {featured && activeCategory === 'All' && !searchQuery && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            onClick={() => onSelectArticle(featured)}
            className="bg-[#181512] text-[#f2ece4] p-8 sm:p-12 border border-[#3d3226] rounded-sm hover:border-[#c0a080] transition-colors cursor-pointer group space-y-6 shadow-2xl"
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="px-2.5 py-1 bg-[#251f18] text-[#c0a080] border border-[#3d3226] font-bold rounded">
                FEATURED PAPER • {featured.category}
              </span>
              <span className="text-[#8c7e6e]">{featured.date} • {featured.readTime}</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold group-hover:text-[#c0a080] transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-sm sm:text-base text-[#a39788] font-sans leading-relaxed max-w-3xl">
                {featured.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#2d251d] flex items-center justify-between font-mono text-xs text-[#8c7e6e]">
              <span>AUTHOR: {featured.author}</span>
              <span className="text-[#c0a080] font-bold group-hover:translate-x-1 transition-transform">
                Read Full Research Paper →
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[#2a241c] pb-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-sm transition-colors cursor-pointer shrink-0 border ${
                  activeCategory === cat
                    ? 'bg-[#c0a080] text-[#121212] border-[#e4d3c0]/40 font-bold'
                    : 'bg-[#181512] text-[#a39788] border-[#2d251d] hover:text-[#f2ece4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#c0a080]" />
            <input
              type="text"
              placeholder="Filter papers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181512] border border-[#2d251d] pl-8 pr-3 py-1.5 text-xs font-mono text-[#f2ece4] placeholder-[#7d7162] focus:outline-none focus:border-[#c0a080] rounded-sm"
            />
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-[#181512] p-6 border border-[#2d251d] rounded-sm space-y-4 hover:border-[#c0a080] transition-colors cursor-pointer group flex flex-col justify-between shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="px-2 py-0.5 bg-[#251f18] text-[#c0a080] border border-[#3d3226] rounded font-semibold">
                    {article.category}
                  </span>
                  <span className="text-[#8c7e6e]">{article.date}</span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#f2ece4] group-hover:text-[#c0a080] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#a39788] font-sans line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2d251d] flex items-center justify-between font-mono text-[11px] text-[#8c7e6e]">
                <span className="truncate max-w-[140px]">{article.author}</span>
                <span className="font-bold text-[#c0a080] group-hover:underline">Read Paper →</span>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="py-12 text-center text-xs font-mono text-[#8c7e6e]">
            No JBR research dispatches found matching your search parameters.
          </div>
        )}
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#181512] border border-[#3d3226] text-[#f2ece4] shadow-2xl rounded-sm overflow-hidden my-auto max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="p-6 border-b border-[#2d251d] flex items-center justify-between bg-[#12100d]">
              <div className="flex items-center gap-3 text-xs font-mono text-[#a39788]">
                <span className="px-2 py-0.5 bg-[#251f18] text-[#c0a080] rounded font-bold border border-[#3d3226]">
                  {selectedArticle.category}
                </span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="p-1.5 text-[#8c7e6e] hover:text-[#c0a080] transition-colors cursor-pointer"
                  title="Share link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectArticle(null)}
                  className="p-1.5 text-[#8c7e6e] hover:text-[#c0a080] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 overflow-y-auto space-y-6 font-sans">
              {copied && (
                <div className="text-xs font-mono text-[#c0a080] bg-[#251f18] p-2 rounded text-center border border-[#3d3226]">
                  Paper link copied to clipboard.
                </div>
              )}

              <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#f2ece4] leading-snug">
                {selectedArticle.title}
              </h2>

              <div className="flex items-center gap-2 text-xs font-mono text-[#8c7e6e] border-b border-[#2d251d] pb-4">
                <FileText className="w-3.5 h-3.5 text-[#c0a080]" />
                <span>AUTHOR: {selectedArticle.author}</span>
                <span>•</span>
                <span>READ TIME: {selectedArticle.readTime}</span>
              </div>

              <div className="space-y-4 text-sm text-[#ad9e8e] leading-relaxed font-sans">
                {selectedArticle.content.trim().split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#2d251d] bg-[#12100d] flex items-center justify-between">
              <button
                onClick={() => onSelectArticle(null)}
                className="px-4 py-2 border border-[#3d3226] text-[#a39788] font-mono text-xs uppercase hover:bg-[#251f18] rounded cursor-pointer transition-colors"
              >
                Close Paper
              </button>
              <button
                onClick={() => {
                  onSelectArticle(null);
                  onOpenInquire();
                }}
                className="px-4 py-2 bg-[#c0a080] text-[#121212] font-mono text-xs font-bold uppercase hover:bg-[#d4b494] rounded cursor-pointer transition-colors"
              >
                Inquire With Author
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

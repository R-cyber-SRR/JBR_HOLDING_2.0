import React, { useState, useEffect, useRef } from 'react';
import { NavPage } from '../types';
import { SECTORS, JOURNAL_ARTICLES, FOUNDER_NOTES } from '../data/jbrData';
import { Search, X, ArrowRight, FileText, Layers, Bookmark, Building } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: NavPage) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut listener for Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via parent handler
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const lowerQuery = query.toLowerCase().trim();

  // Filter Sectors
  const filteredSectors = SECTORS.filter(s => 
    s.title.toLowerCase().includes(lowerQuery) ||
    s.subtitle.toLowerCase().includes(lowerQuery) ||
    s.description.toLowerCase().includes(lowerQuery)
  );

  // Filter Journal Articles
  const filteredJournal = JOURNAL_ARTICLES.filter(j =>
    j.title.toLowerCase().includes(lowerQuery) ||
    j.category.toLowerCase().includes(lowerQuery) ||
    j.excerpt.toLowerCase().includes(lowerQuery)
  );

  // Filter Founder Notes
  const filteredNotes = FOUNDER_NOTES.filter(n =>
    n.title.toLowerCase().includes(lowerQuery) ||
    n.summary.toLowerCase().includes(lowerQuery)
  );

  // Filter Portfolio Ventures
  const allVentures = SECTORS.flatMap(s => s.portfolio.map(p => ({ ...p, sectorSlug: s.slug })));
  const filteredVentures = allVentures.filter(v =>
    v.name.toLowerCase().includes(lowerQuery) ||
    v.tagline.toLowerCase().includes(lowerQuery) ||
    v.location.toLowerCase().includes(lowerQuery)
  );

  const handleSelect = (page: NavPage) => {
    onNavigate(page);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-[#181512] border border-[#3d3226] text-[#f2ece4] shadow-2xl rounded-sm overflow-hidden my-auto">
        
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#2d251d] bg-[#12100d]">
          <Search className="w-4 h-4 text-[#c0a080]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search JBR sectors, papers, ventures, or notes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none text-sm font-mono text-[#f2ece4] placeholder-[#7d7162] focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-[#8c7e6e] hover:text-[#c0a080]">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-[#251f18] text-[#c0a080] rounded border border-[#3d3226]">ESC</kbd>
        </div>

        {/* Results Container */}
        <div className="p-2 max-h-[60vh] overflow-y-auto space-y-4 font-mono text-xs">
          
          {/* Quick Sectors */}
          {filteredSectors.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-[10px] text-[#c0a080] uppercase tracking-widest font-bold">
                Operating Sectors
              </div>
              {filteredSectors.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => handleSelect(sector.slug)}
                  className="w-full text-left px-3 py-2 rounded-sm hover:bg-[#251f18] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-3.5 h-3.5 text-[#c0a080]" />
                    <div>
                      <span className="font-bold text-[#f2ece4]">[{sector.code}] {sector.title}</span>
                      <span className="text-[#a39788] text-[11px] ml-2">— {sector.subtitle}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8c7e6e] group-hover:text-[#c0a080] transition-colors" />
                </button>
              ))}
            </div>
          )}

          {/* Portfolio Companies */}
          {filteredVentures.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-[10px] text-[#c0a080] uppercase tracking-widest font-bold">
                Portfolio Operating Ventures
              </div>
              {filteredVentures.map((venture) => (
                <button
                  key={venture.name}
                  onClick={() => handleSelect(venture.sectorSlug)}
                  className="w-full text-left px-3 py-2 rounded-sm hover:bg-[#251f18] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Building className="w-3.5 h-3.5 text-[#c0a080]" />
                    <div>
                      <span className="font-bold text-[#f2ece4]">{venture.name}</span>
                      <span className="text-[#a39788] text-[11px] ml-2">({venture.tagline})</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#c0a080] bg-[#251f18] px-1.5 py-0.5 rounded border border-[#3d3226]">
                    {venture.metric}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Founder Notes */}
          {filteredNotes.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-[10px] text-[#c0a080] uppercase tracking-widest font-bold">
                Founder Essays & Notes
              </div>
              {filteredNotes.map((note) => (
                <button
                  key={note.id}
                  onClick={() => handleSelect('founder-notes')}
                  className="w-full text-left px-3 py-2 rounded-sm hover:bg-[#251f18] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Bookmark className="w-3.5 h-3.5 text-[#c0a080]" />
                    <div>
                      <span className="text-[#d6cdbe] font-bold">[{note.code}] {note.title}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#8c7e6e]">{note.readTime}</span>
                </button>
              ))}
            </div>
          )}

          {/* Journal Articles */}
          {filteredJournal.length > 0 && (
            <div>
              <div className="px-3 py-1.5 text-[10px] text-[#c0a080] uppercase tracking-widest font-bold">
                Published Journal Papers
              </div>
              {filteredJournal.map((journal) => (
                <button
                  key={journal.id}
                  onClick={() => handleSelect('journal')}
                  className="w-full text-left px-3 py-2 rounded-sm hover:bg-[#251f18] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-3.5 h-3.5 text-[#c0a080]" />
                    <div className="truncate max-w-sm">
                      <span className="text-[#d6cdbe] font-semibold">{journal.title}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#a39788] bg-[#251f18] px-1.5 py-0.5 rounded border border-[#3d3226]">
                    {journal.category}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Empty state */}
          {filteredSectors.length === 0 && filteredJournal.length === 0 && filteredNotes.length === 0 && filteredVentures.length === 0 && (
            <div className="py-8 text-center text-[#8c7e6e] font-mono text-xs">
              No matching JBR records found for &quot;{query}&quot;.
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-[#2d251d] bg-[#12100d] flex items-center justify-between text-[10px] font-mono text-[#8c7e6e]">
          <span>JBR GLOBAL DIRECTORY</span>
          <span>PRESS ENTER TO NAVIGATE</span>
        </div>
      </div>
    </div>
  );
};

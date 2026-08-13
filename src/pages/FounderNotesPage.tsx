import React, { useState } from 'react';
import { NavPage, FounderNote } from '../types';
import { FOUNDER_NOTES } from '../data/jbrData';
import { ArrowLeft, ArrowRight, Bookmark, Clock, X, Quote, Share2 } from 'lucide-react';

interface FounderNotesPageProps {
  onNavigate: (page: NavPage) => void;
  selectedNote: FounderNote | null;
  onSelectNote: (note: FounderNote | null) => void;
  onOpenInquire: () => void;
}

export const FounderNotesPage: React.FC<FounderNotesPageProps> = ({
  onNavigate,
  selectedNote,
  onSelectNote,
  onOpenInquire
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = (noteTitle: string) => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Breadcrumb Navigation */}
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
          <span className="text-[#c0a080] font-bold uppercase">FOUNDER NOTES — ARCHIVE</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181512] border border-[#3d3226] text-xs font-mono text-[#c0a080] uppercase tracking-widest rounded-sm">
          <span>[JBR PARTNER DISPATCHES]</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-cinzel font-bold text-[#f2ece4] tracking-tight max-w-4xl">
          Three friends, one idea, three years before it became a company.
        </h1>

        <p className="text-base sm:text-lg text-[#ad9e8e] font-sans max-w-3xl leading-relaxed">
          Observations on non-consensus capital allocation, industrial operator culture, and long-term asset building from the founders of JBR.
        </p>
      </section>

      {/* Notes List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-[#2a241c] pb-4 flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-widest text-[#c0a080]">
            [CHRONOLOGICAL ARCHIVE]
          </span>
          <span className="text-xs font-mono text-[#8c7e6e]">
            {FOUNDER_NOTES.length} PUBLISHED ESSAYS
          </span>
        </div>

        <div className="space-y-6">
          {FOUNDER_NOTES.map((note) => (
            <div
              key={note.id}
              onClick={() => onSelectNote(note)}
              className="bg-[#181512] p-8 border border-[#2d251d] rounded-sm hover:border-[#c0a080] transition-colors cursor-pointer group flex flex-col md:flex-row justify-between gap-8 shadow-md"
            >
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center gap-3 text-xs font-mono text-[#8c7e6e]">
                  <span className="font-bold text-[#c0a080]">NOTE [{note.code}]</span>
                  <span>•</span>
                  <span>{note.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#c0a080]" />
                    {note.readTime}
                  </span>
                </div>

                <h2 className="text-2xl font-cinzel font-bold text-[#f2ece4] group-hover:text-[#c0a080] transition-colors leading-snug">
                  {note.title}
                </h2>

                <blockquote className="pl-4 border-l-2 border-[#c0a080] italic font-serif text-sm text-[#d6cdbe]">
                  &quot;{note.quote}&quot;
                </blockquote>

                <p className="text-xs text-[#a39788] font-sans leading-relaxed">
                  {note.summary}
                </p>
              </div>

              <div className="md:w-48 shrink-0 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#2d251d] pt-4 md:pt-0 md:pl-6">
                <div className="text-[10px] font-mono text-[#8c7e6e] uppercase">
                  PARTNER JOURNAL
                </div>

                <div className="pt-4 flex items-center gap-1.5 text-xs font-mono font-bold text-[#c0a080] group-hover:translate-x-1 transition-transform">
                  <span>Read Full Essay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reader Modal Overlay */}
      {selectedNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#181512] border border-[#3d3226] text-[#f2ece4] shadow-2xl rounded-sm overflow-hidden my-auto max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="p-6 border-b border-[#2d251d] flex items-center justify-between bg-[#12100d]">
              <div className="flex items-center gap-3 text-xs font-mono text-[#a39788]">
                <span className="text-[#c0a080] font-bold">FOUNDER NOTE [{selectedNote.code}]</span>
                <span>•</span>
                <span>{selectedNote.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleShare(selectedNote.title)}
                  className="p-1.5 text-[#8c7e6e] hover:text-[#c0a080] transition-colors cursor-pointer"
                  title="Share link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectNote(null)}
                  className="p-1.5 text-[#8c7e6e] hover:text-[#c0a080] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Note Reader Body */}
            <div className="p-8 overflow-y-auto space-y-6 font-sans">
              {copied && (
                <div className="text-xs font-mono text-[#c0a080] bg-[#251f18] p-2 rounded text-center border border-[#3d3226]">
                  Essay link copied to clipboard.
                </div>
              )}

              <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#f2ece4] leading-snug">
                {selectedNote.title}
              </h2>

              <blockquote className="p-4 bg-[#12100d] border-l-4 border-[#c0a080] italic font-serif text-base text-[#d6cdbe] my-4">
                &quot;{selectedNote.quote}&quot;
              </blockquote>

              <div className="space-y-4 text-sm text-[#ad9e8e] leading-relaxed">
                {selectedNote.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#2d251d] flex items-center justify-between font-mono text-xs text-[#8c7e6e]">
                <span>EST. READ TIME: {selectedNote.readTime}</span>
                <span>JBR PARTNER DISPATCH</span>
              </div>
            </div>

            {/* Footer action */}
            <div className="p-4 border-t border-[#2d251d] bg-[#12100d] flex items-center justify-between">
              <button
                onClick={() => onSelectNote(null)}
                className="px-4 py-2 border border-[#3d3226] text-[#a39788] font-mono text-xs uppercase hover:bg-[#251f18] rounded cursor-pointer transition-colors"
              >
                Close Essay
              </button>
              <button
                onClick={() => {
                  onSelectNote(null);
                  onOpenInquire();
                }}
                className="px-4 py-2 bg-[#c0a080] text-[#121212] font-mono text-xs font-bold uppercase hover:bg-[#d4b494] rounded cursor-pointer transition-colors"
              >
                Inquire With Partners
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

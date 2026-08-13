import React, { useState, useEffect } from 'react';
import { NavPage } from '../types';
import { SECTORS } from '../data/jbrData';
import { Search, ChevronDown, Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenInquire: () => void;
  onOpenSearch: () => void;
  darkMode: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenInquire,
  onOpenSearch,
  darkMode,
  onToggleTheme
}) => {
  const [utcTime, setUtcTime] = useState<string>('');
  const [sectorsMenuOpen, setSectorsMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const mins = String(now.getUTCMinutes()).padStart(2, '0');
      const secs = String(now.getUTCSeconds()).padStart(2, '0');
      setUtcTime(`${hours}:${mins}:${secs} UTC`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNav = (page: NavPage) => {
    onNavigate(page);
    setSectorsMenuOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSectorActive = currentPage.startsWith('sector-');

  return (
    <header className="sticky top-0 z-40 border-b border-[#2a241c] bg-[#121212]/95 backdrop-blur-md transition-colors duration-200">
      {/* Top Utility Status Bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 border-b border-[#2a241c]/60 text-[11px] font-mono tracking-wider text-[#9e9080]">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-[#c0a080]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c0a080] animate-pulse"></span>
            PORTFOLIO ACTIVE
          </span>
          <span className="text-[#3a3228]">|</span>
          <span>4 SECTORS</span>
          <span className="text-[#3a3228]">|</span>
          <span>12 VENTURES</span>
        </div>
        <div className="flex items-center gap-4">
          <span>LONDON / NY / TOKYO</span>
          <span className="text-[#3a3228]">|</span>
          <span className="text-[#f2ece4] font-semibold">{utcTime}</span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 bg-[#1f1a14] border border-[#3e3428] text-[#c0a080] font-cinzel font-bold text-base flex items-center justify-center rounded-sm group-hover:border-[#c0a080] group-hover:text-[#f3e5d8] transition-all">
            J
          </div>
          <div>
            <div className="font-cinzel text-lg font-bold tracking-widest text-[#f2ece4] group-hover:text-[#c0a080] transition-colors flex items-center gap-1">
              JBR<span className="text-[#c0a080] font-normal">.</span>
            </div>
            <div className="text-[9px] font-mono tracking-widest text-[#9e9080] uppercase hidden sm:block">
              Journey Beyond Results
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider uppercase">
          {/* Sectors Dropdown Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setSectorsMenuOpen(true)}
            onMouseLeave={() => setSectorsMenuOpen(false)}
          >
            <button
              onClick={() => handleNav('sector-ag')}
              className={`flex items-center gap-1 py-2 cursor-pointer transition-colors ${
                isSectorActive ? 'text-[#c0a080] font-bold border-b-2 border-[#c0a080]' : 'text-[#a39788] hover:text-[#f2ece4]'
              }`}
            >
              <span>Sectors</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${sectorsMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Card */}
            {sectorsMenuOpen && (
              <div className="absolute top-full left-0 w-72 bg-[#181512] text-[#e8e2d8] border border-[#332b22] shadow-2xl p-2 rounded-sm z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 text-[10px] font-mono text-[#c0a080] uppercase tracking-widest border-b border-[#2d251d] mb-1">
                  Operating Sectors
                </div>
                {SECTORS.map((sector) => (
                  <button
                    key={sector.id}
                    onClick={() => handleNav(sector.slug)}
                    className="w-full text-left px-3 py-2.5 rounded-sm hover:bg-[#251f18] transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-semibold flex items-center gap-2 text-[#e8e2d8] group-hover:text-[#c0a080]">
                        <span className="text-[#8c7e6e] font-mono text-[10px]">[{sector.code}]</span>
                        {sector.title}
                      </div>
                      <div className="text-[11px] text-[#a39788] font-sans tracking-normal mt-0.5">
                        {sector.subtitle}
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8c7e6e] group-hover:text-[#c0a080] transition-colors" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('how-we-think')}
            className={`py-2 cursor-pointer transition-colors ${
              currentPage === 'how-we-think' ? 'text-[#c0a080] font-bold border-b-2 border-[#c0a080]' : 'text-[#a39788] hover:text-[#f2ece4]'
            }`}
          >
            How We Think
          </button>

          <button
            onClick={() => handleNav('founder-notes')}
            className={`py-2 cursor-pointer transition-colors ${
              currentPage === 'founder-notes' ? 'text-[#c0a080] font-bold border-b-2 border-[#c0a080]' : 'text-[#a39788] hover:text-[#f2ece4]'
            }`}
          >
            Founder Notes
          </button>

          <button
            onClick={() => handleNav('journal')}
            className={`py-2 cursor-pointer transition-colors ${
              currentPage === 'journal' ? 'text-[#c0a080] font-bold border-b-2 border-[#c0a080]' : 'text-[#a39788] hover:text-[#f2ece4]'
            }`}
          >
            Journal
          </button>

          <button
            onClick={() => handleNav('contact')}
            className={`py-2 cursor-pointer transition-colors ${
              currentPage === 'contact' ? 'text-[#c0a080] font-bold border-b-2 border-[#c0a080]' : 'text-[#a39788] hover:text-[#f2ece4]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-[#a39788] border border-[#2d251d] rounded-sm hover:border-[#c0a080] hover:text-[#f2ece4] transition-colors cursor-pointer bg-[#181512]"
            title="Search JBR"
          >
            <Search className="w-3.5 h-3.5 text-[#c0a080]" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 text-[9px] bg-[#221c16] text-[#c0a080] rounded border border-[#382f25]">⌘K</kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 text-[#a39788] hover:text-[#f2ece4] border border-[#2d251d] bg-[#181512] rounded-sm hover:border-[#c0a080] transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#c0a080]" /> : <Moon className="w-4 h-4 text-[#c0a080]" />}
          </button>

          {/* Primary Inquire CTA */}
          <button
            onClick={onOpenInquire}
            className="px-4 py-2 bg-gradient-to-r from-[#c0a080] to-[#a3805f] hover:from-[#d4b494] hover:to-[#b89472] text-[#121212] text-xs font-mono tracking-widest uppercase font-bold rounded-sm shadow-md transition-all cursor-pointer border border-[#e4d3c0]/30"
          >
            [Inquire]
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#e8e2d8] hover:text-[#c0a080] cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#2a241c] bg-[#121212] px-6 py-6 font-mono text-sm uppercase tracking-wider space-y-4 animate-in fade-in duration-150">
          <div className="text-xs text-[#c0a080] font-bold tracking-widest border-b border-[#2a241c] pb-2">
            Sectors
          </div>
          <div className="pl-3 space-y-2">
            {SECTORS.map((sector) => (
              <button
                key={sector.id}
                onClick={() => handleNav(sector.slug)}
                className="block w-full text-left py-1 text-[#d6cdbe] hover:text-[#c0a080]"
              >
                [{sector.code}] {sector.title} — <span className="text-xs text-[#8c7e6e]">{sector.subtitle}</span>
              </button>
            ))}
          </div>

          <div className="text-xs text-[#c0a080] font-bold tracking-widest border-b border-[#2a241c] pt-4 pb-2">
            Company
          </div>
          <button
            onClick={() => handleNav('how-we-think')}
            className="block w-full text-left py-1 text-[#e8e2d8]"
          >
            How We Think
          </button>
          <button
            onClick={() => handleNav('founder-notes')}
            className="block w-full text-left py-1 text-[#e8e2d8]"
          >
            Founder Notes
          </button>
          <button
            onClick={() => handleNav('journal')}
            className="block w-full text-left py-1 text-[#e8e2d8]"
          >
            Journal
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="block w-full text-left py-1 text-[#e8e2d8]"
          >
            Contact
          </button>

          <div className="pt-4 border-t border-[#2a241c] flex items-center justify-between text-xs text-[#8c7e6e]">
            <span>LIVE UTC: {utcTime}</span>
            <button 
              onClick={onOpenSearch} 
              className="text-[#c0a080] underline font-bold"
            >
              SEARCH JBR
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

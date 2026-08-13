import React, { useState, useEffect } from 'react';
import { NavPage, SectorItem, JournalArticle, FounderNote } from './types';
import { SECTORS, JOURNAL_ARTICLES, FOUNDER_NOTES } from './data/jbrData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InquireModal } from './components/InquireModal';
import { CommandPalette } from './components/CommandPalette';
import { HomePage } from './pages/HomePage';
import { SectorPage } from './pages/SectorPage';
import { HowWeThinkPage } from './pages/HowWeThinkPage';
import { FounderNotesPage } from './pages/FounderNotesPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [inquireModalOpen, setInquireModalOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  
  // Active reading modal states
  const [selectedJournalArticle, setSelectedJournalArticle] = useState<JournalArticle | null>(null);
  const [selectedFounderNote, setSelectedFounderNote] = useState<FounderNote | null>(null);

  // Sync dark mode class on HTML document root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentSector: SectorItem | undefined = SECTORS.find(s => s.slug === currentPage);

  return (
    <div className={`min-h-screen bg-[#121212] text-[#f2ece4] font-sans selection:bg-[#c0a080] selection:text-[#121212] transition-colors duration-200 flex flex-col justify-between antialiased`}>
      
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenInquire={() => setInquireModalOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenInquire={() => setInquireModalOpen(true)}
            onSelectJournalArticle={(article) => setSelectedJournalArticle(article)}
            onSelectFounderNote={(note) => setSelectedFounderNote(note)}
          />
        )}

        {currentSector && (
          <SectorPage
            sector={currentSector}
            onNavigate={handleNavigate}
            onOpenInquire={() => setInquireModalOpen(true)}
          />
        )}

        {currentPage === 'how-we-think' && (
          <HowWeThinkPage
            onNavigate={handleNavigate}
            onOpenInquire={() => setInquireModalOpen(true)}
          />
        )}

        {currentPage === 'founder-notes' && (
          <FounderNotesPage
            onNavigate={handleNavigate}
            selectedNote={selectedFounderNote}
            onSelectNote={setSelectedFounderNote}
            onOpenInquire={() => setInquireModalOpen(true)}
          />
        )}

        {currentPage === 'journal' && (
          <JournalPage
            onNavigate={handleNavigate}
            selectedArticle={selectedJournalArticle}
            onSelectArticle={setSelectedJournalArticle}
            onOpenInquire={() => setInquireModalOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenInquire={() => setInquireModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquire={() => setInquireModalOpen(true)}
      />

      {/* Inquire Modal / Drawer */}
      <InquireModal
        isOpen={inquireModalOpen}
        onClose={() => setInquireModalOpen(false)}
      />

      {/* Quick Search Command Palette */}
      <CommandPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}

import React, { useState } from 'react';
import { NavPage } from '../types';
import { OFFICES, SECTORS } from '../data/jbrData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenInquire: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquire }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="border-t border-[#2a241c] bg-[#121212] text-[#f2ece4] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#2a241c]">
          
          {/* Col 1 & 2: Brand & Dispatch Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <div className="font-cinzel text-2xl font-bold tracking-widest text-[#f2ece4] flex items-center gap-2">
                JBR<span className="text-[#c0a080] font-normal">.</span>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#c0a080]">
                Holding Company for Critical Physical & Digital Infrastructure
              </p>
            </div>
            
            <p className="text-sm text-[#a39788] font-sans max-w-md leading-relaxed">
              We build categories, not just companies. Operating across agriculture, real estate, transport, and technology.
            </p>

            {/* Newsletter Dispatch Box */}
            <div className="pt-2 max-w-md">
              <div className="text-xs font-mono uppercase tracking-widest text-[#c0a080] mb-2">
                [JBR Journal Dispatch]
              </div>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-mono text-[#c0a080] bg-[#1a1612] p-3 rounded border border-[#3d3226]">
                  <CheckCircle2 className="w-4 h-4 text-[#c0a080]" />
                  <span>Subscribed to JBR Journal Dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter institutional email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-[#181512] border border-[#2d251d] px-3 py-2 text-xs font-mono text-[#f2ece4] placeholder-[#7d7162] focus:outline-none focus:border-[#c0a080] rounded-sm"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#c0a080] hover:bg-[#d4b494] text-[#121212] text-xs font-mono font-bold tracking-wider uppercase rounded-sm transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 3: Sectors Links */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-[#c0a080] uppercase tracking-widest font-bold">
              [Sectors]
            </div>
            <ul className="space-y-2">
              {SECTORS.map((sector) => (
                <li key={sector.id}>
                  <button
                    onClick={() => {
                      onNavigate(sector.slug);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#c0a080] text-[#a39788] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <span className="text-[#8c7e6e]">[{sector.code}]</span>
                    <span>{sector.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Platform Navigation */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-[#c0a080] uppercase tracking-widest font-bold">
              [Platform]
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    onNavigate('how-we-think');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#c0a080] text-[#a39788] transition-colors cursor-pointer"
                >
                  How We Think
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('founder-notes');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#c0a080] text-[#a39788] transition-colors cursor-pointer"
                >
                  Founder Notes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('journal');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#c0a080] text-[#a39788] transition-colors cursor-pointer"
                >
                  Journal & Papers
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#c0a080] text-[#a39788] transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenInquire}
                  className="text-[#c0a080] font-bold hover:underline flex items-center gap-1 cursor-pointer pt-1"
                >
                  <span>Submit Pitch</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Global Offices */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-[#c0a080] uppercase tracking-widest font-bold">
              [Offices]
            </div>
            <div className="space-y-3">
              {OFFICES.map((office) => (
                <div key={office.city} className="space-y-0.5">
                  <div className="font-bold text-[#f2ece4] flex items-center justify-between">
                    <span>{office.city}</span>
                    <span className="text-[10px] text-[#8c7e6e]">{office.timezone}</span>
                  </div>
                  <div className="text-[11px] text-[#a39788] font-sans">
                    {office.address}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8c7e6e]">
          <div>
            © {new Date().getFullYear()} JBR HOLDING COMPANY GROUP LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('JBR Privacy & Data Policy: We collect zero non-essential telemetry.'); }} className="hover:text-[#c0a080] transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('JBR Operating Terms: Institutional governance and portfolio standards.'); }} className="hover:text-[#c0a080] transition-colors">
              TERMS OF GOVERNANCE
            </a>
            <span className="text-[#3a3228]">|</span>
            <span className="text-[#c0a080]">ALL SYSTEMS NOMINAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

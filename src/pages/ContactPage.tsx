import React, { useState } from 'react';
import { NavPage } from '../types';
import { OFFICES } from '../data/jbrData';
import { ArrowLeft, CheckCircle2, Send, MapPin, Mail, Phone, Clock, Upload } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: NavPage) => void;
  onOpenInquire: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenInquire
}) => {
  const [track, setTrack] = useState<'building' | 'investing' | 'reporting'>('building');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'JBR-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(code);
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
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
          <span className="text-[#c0a080] font-bold uppercase">CONTACT & OFFICES</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181512] border border-[#3d3226] text-xs font-mono text-[#c0a080] uppercase tracking-widest rounded-sm">
          <span>[DIRECT PARTNER COMMUNICATION]</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-cinzel font-bold text-[#f2ece4] tracking-tight max-w-4xl">
          One address covers three conversations.
        </h1>

        <p className="text-base sm:text-lg text-[#ad9e8e] font-sans max-w-3xl leading-relaxed">
          Whether you are building a category-defining physical venture, allocating institutional capital, or conducting research reporting—reach out directly.
        </p>
      </section>

      {/* Main Grid Section: Global Offices + Direct Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-b border-[#2a241c] pb-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#c0a080]">
                [GLOBAL HUBS]
              </div>
              <h2 className="text-2xl font-cinzel font-bold text-[#f2ece4]">
                JBR Offices
              </h2>
            </div>

            <div className="space-y-6">
              {OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="bg-[#181512] p-6 border border-[#2d251d] rounded-sm space-y-3 shadow-md"
                >
                  <div className="flex items-center justify-between border-b border-[#2d251d] pb-2 font-mono">
                    <h3 className="text-lg font-cinzel font-bold text-[#f2ece4]">
                      {office.city}
                    </h3>
                    <span className="text-xs text-[#c0a080] font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#c0a080]" />
                      {office.timezone}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs font-mono text-[#a39788]">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#c0a080] shrink-0 mt-0.5" />
                      <span className="font-sans text-[#d6cdbe]">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#c0a080] shrink-0" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#c0a080] shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Embedded Track Inquiry Form */}
          <div className="lg:col-span-7 bg-[#181512] p-8 sm:p-10 border border-[#3d3226] rounded-sm shadow-2xl">
            <div className="border-b border-[#2d251d] pb-6 mb-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#c0a080]">
                [JBR TRACK SELECTOR]
              </div>
              <h2 className="text-2xl font-cinzel font-bold text-[#f2ece4] mt-1">
                Initiate Inquiry
              </h2>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200 font-mono">
                <div className="w-12 h-12 bg-[#251f18] text-[#c0a080] rounded-full flex items-center justify-center mx-auto border border-[#3d3226]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-cinzel font-bold text-[#f2ece4]">Communication Dispatched</h3>
                <p className="text-xs text-[#a39788] max-w-md mx-auto">
                  Your inquiry has been logged into the JBR dispatch system under reference ID:
                </p>
                <div className="inline-block px-4 py-2 bg-[#12100d] border border-[#3d3226] text-sm font-bold text-[#c0a080] rounded">
                  {refCode}
                </div>
                <p className="text-xs text-[#d6cdbe] font-sans max-w-md mx-auto leading-relaxed pt-2">
                  Our partners in London, New York, and Tokyo review submissions daily. Expect a reply within 48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#c0a080] text-[#121212] text-xs font-bold uppercase tracking-wider rounded-sm cursor-pointer hover:bg-[#d4b494] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Track Selector buttons */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#a39788]">
                    Select Communication Track
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setTrack('building')}
                      className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                        track === 'building'
                          ? 'bg-[#c0a080] border-[#e4d3c0]/40 text-[#121212] font-bold'
                          : 'bg-[#12100d] border-[#2d251d] text-[#a39788] hover:border-[#3d3226]'
                      }`}
                    >
                      <div className="text-xs font-mono">1. Building Something</div>
                      <div className="text-[10px] opacity-80 mt-0.5 font-sans font-normal">Ventures & Founders</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTrack('investing')}
                      className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                        track === 'investing'
                          ? 'bg-[#c0a080] border-[#e4d3c0]/40 text-[#121212] font-bold'
                          : 'bg-[#12100d] border-[#2d251d] text-[#a39788] hover:border-[#3d3226]'
                      }`}
                    >
                      <div className="text-xs font-mono">2. Investing</div>
                      <div className="text-[10px] opacity-80 mt-0.5 font-sans font-normal">Capital Allocation</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTrack('reporting')}
                      className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                        track === 'reporting'
                          ? 'bg-[#c0a080] border-[#e4d3c0]/40 text-[#121212] font-bold'
                          : 'bg-[#12100d] border-[#2d251d] text-[#a39788] hover:border-[#3d3226]'
                      }`}
                    >
                      <div className="text-xs font-mono">3. Reporting</div>
                      <div className="text-[10px] opacity-80 mt-0.5 font-sans font-normal">Media & Research</div>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#a39788] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alistair Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#12100d] border border-[#2d251d] px-3 py-2 text-xs font-mono text-[#f2ece4] placeholder-[#7d7162] focus:outline-none focus:border-[#c0a080] rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#a39788] mb-1">
                      Institutional Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. vance@terra-systems.io"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#12100d] border border-[#2d251d] px-3 py-2 text-xs font-mono text-[#f2ece4] placeholder-[#7d7162] focus:outline-none focus:border-[#c0a080] rounded-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a39788] mb-1">
                    Organization / Firm Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Terra Systems Inc. / Sovereign Capital"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full bg-[#12100d] border border-[#2d251d] px-3 py-2 text-xs font-mono text-[#f2ece4] placeholder-[#7d7162] focus:outline-none focus:border-[#c0a080] rounded-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a39788] mb-1">
                    Structural Summary & Proposal Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Provide a clear, high-level summary of your inquiry..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#12100d] border border-[#2d251d] p-3 text-xs font-mono text-[#f2ece4] placeholder-[#7d7162] focus:outline-none focus:border-[#c0a080] rounded-sm resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a39788] mb-1">
                    Attach Pitch Deck or Whitepaper (Optional PDF)
                  </label>
                  <div className="relative border border-dashed border-[#3d3226] bg-[#12100d] p-3 rounded-sm text-center cursor-pointer hover:border-[#c0a080] transition-colors">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#8c7e6e]">
                      <Upload className="w-4 h-4 text-[#c0a080]" />
                      {fileName ? (
                        <span className="text-[#c0a080] font-bold">{fileName}</span>
                      ) : (
                        <span>Drop file here or click to browse</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#8c7e6e] uppercase">
                    CONFIDENTIAL ENCRYPTED DISPATCH
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#c0a080] text-[#121212] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#d4b494] transition-colors rounded-sm flex items-center gap-2 cursor-pointer shadow-xl"
                  >
                    <span>Dispatch Communication</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

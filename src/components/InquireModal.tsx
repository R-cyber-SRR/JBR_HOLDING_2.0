import React, { useState } from 'react';
import { X, Send, CheckCircle2, Upload, ArrowRight } from 'lucide-react';

interface InquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrack?: 'building' | 'investing' | 'reporting';
}

export const InquireModal: React.FC<InquireModalProps> = ({
  isOpen,
  onClose,
  initialTrack = 'building'
}) => {
  const [track, setTrack] = useState<'building' | 'investing' | 'reporting'>(initialTrack);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'JBR-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setOrganization('');
    setMessage('');
    setFileName(null);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#181512] border border-[#3d3226] text-[#f2ece4] shadow-2xl rounded-sm overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-[#2d251d] flex items-center justify-between bg-[#12100d]">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#c0a080]">
              [JBR Direct Conversation]
            </div>
            <h2 className="text-xl font-cinzel font-bold tracking-tight text-[#f2ece4] mt-1">
              One Address. Three Tracks.
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#a39788] hover:text-[#c0a080] hover:bg-[#251f18] rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 font-sans">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 bg-[#251f18] border border-[#c0a080]/40 text-[#c0a080] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-[#c0a080]" />
              </div>
              <h3 className="text-lg font-cinzel font-bold text-[#f2ece4]">Inquiry Dispatched</h3>
              <p className="text-xs font-mono text-[#a39788] max-w-md mx-auto">
                Your communication has been logged into the JBR track system under reference:
              </p>
              <div className="inline-block px-4 py-2 bg-[#12100d] border border-[#3d3226] font-mono text-sm font-bold text-[#c0a080] rounded">
                {refCode}
              </div>
              <p className="text-xs text-[#a39788] max-w-md mx-auto leading-relaxed pt-2">
                Our team reviews inquiries daily across London, New York, and Tokyo offices. Expect a response within 48 hours if aligned with active allocation parameters.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#c0a080] text-[#121212] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#d4b494] transition-colors cursor-pointer rounded-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Track Selection Buttons */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#c0a080] mb-2">
                  Select Inquiry Track
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setTrack('building')}
                    className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                      track === 'building'
                        ? 'bg-[#28211a] border-[#c0a080] text-[#f2ece4] font-semibold'
                        : 'bg-[#12100d] border-[#2d251d] text-[#8c7e6e] hover:text-[#f2ece4] hover:border-[#3d3226]'
                    }`}
                  >
                    <div className="text-xs font-mono font-bold">Building Something</div>
                    <div className="text-[10px] opacity-75 mt-0.5 font-normal">Founders & Ventures</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTrack('investing')}
                    className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                      track === 'investing'
                        ? 'bg-[#28211a] border-[#c0a080] text-[#f2ece4] font-semibold'
                        : 'bg-[#12100d] border-[#2d251d] text-[#8c7e6e] hover:text-[#f2ece4] hover:border-[#3d3226]'
                    }`}
                  >
                    <div className="text-xs font-mono font-bold">Investing</div>
                    <div className="text-[10px] opacity-75 mt-0.5 font-normal">Capital & Allocation</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTrack('reporting')}
                    className={`p-3 text-left border rounded-sm transition-all cursor-pointer ${
                      track === 'reporting'
                        ? 'bg-[#28211a] border-[#c0a080] text-[#f2ece4] font-semibold'
                        : 'bg-[#12100d] border-[#2d251d] text-[#8c7e6e] hover:text-[#f2ece4] hover:border-[#3d3226]'
                    }`}
                  >
                    <div className="text-xs font-mono font-bold">Reporting</div>
                    <div className="text-[10px] opacity-75 mt-0.5 font-normal">Media & Research</div>
                  </button>
                </div>
              </div>

              {/* Form Input Fields */}
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    Organization / Venture / Firm
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
                    Core Proposal & Structural Outline *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={
                      track === 'building'
                        ? 'Describe your category, physical/digital architecture, and key operational bottleneck...'
                        : track === 'investing'
                        ? 'Specify capital allocation scale, investment horizon, and co-investment interest...'
                        : 'Specify publication outlet, inquiry topic, and research deadline...'
                    }
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#12100d] border border-[#2d251d] p-3 text-xs font-mono text-[#f2ece4] placeholder-[#7d7162] focus:outline-none focus:border-[#c0a080] rounded-sm resize-none"
                  />
                </div>

                {/* File Upload Attachment Simulation */}
                <div>
                  <label className="block text-xs font-mono text-[#a39788] mb-1">
                    Attach Deck / Brief (Optional PDF, max 25MB)
                  </label>
                  <div className="relative border border-dashed border-[#2d251d] bg-[#12100d] hover:border-[#c0a080] p-3 rounded-sm text-center cursor-pointer transition-colors">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.ppt,.pptx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#a39788]">
                      <Upload className="w-4 h-4 text-[#c0a080]" />
                      {fileName ? (
                        <span className="text-[#c0a080] font-bold">{fileName}</span>
                      ) : (
                        <span>Drop pitch deck or click to select file</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Submit Action */}
                <div className="pt-2 flex items-center justify-between border-t border-[#2d251d]">
                  <div className="text-[10px] font-mono text-[#8c7e6e]">
                    DIRECT DISPATCH TO JBR PARTNERS
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#c0a080] text-[#121212] hover:bg-[#d4b494] text-xs font-mono uppercase font-bold tracking-wider rounded-sm transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

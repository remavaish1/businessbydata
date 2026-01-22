// App.tsx (updated end-to-end)
// - Fixes icon mismatch by using a consistent outline icon style for ALL footer links
// - Adds Instagram + Phone + WhatsApp (same number)
// - Keeps your existing structure intact (no behavioural changes to routing/navigation)
// - Replace PHONE_E164 + PHONE_DISPLAY once and you're done

import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { PRIMARY_CTA_TEXT, DISCOVERY_CALL_LINK } from "./constants";

// ====== CONFIG (Update these once) ======
const EMAIL = "connect@businessbydata.co";

// Use E.164 without "+" for WhatsApp wa.me links (e.g., 2348012345678)
const PHONE_E164  = "2349116281642";
// For display (e.g., +234 801 234 5678)
const PHONE_DISPLAY = "+2349116281642";

const LINKEDIN_URL = "https://www.linkedin.com/in/rema-vaish/";
const INSTAGRAM_URL = "https://www.instagram.com/businessbydata.rema/";

// ====== Simple Outline Icons (consistent style) ======
const IconMail = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15A2.25 2.25 0 012.25 17.25V6.75
         M21.75 6.75 12 13.5 2.25 6.75"
    />
  </svg>
);

const IconPhone = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 4.5A2.25 2.25 0 014.5 2.25h2.25
         c.621 0 1.153.435 1.275 1.043l.6 3
         a1.125 1.125 0 01-.648 1.26l-1.8.9
         a11.25 11.25 0 005.25 5.25l.9-1.8
         a1.125 1.125 0 011.26-.648l3 .6
         a1.275 1.275 0 011.043 1.275V19.5
         A2.25 2.25 0 0119.5 21.75h-.75
         C9.246 21.75 2.25 14.754 2.25 6.75V4.5z"
    />
  </svg>
);

const IconChat = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.625 9.75h6.75M8.625 12.75h4.5
         M21 12c0 4.97-4.03 9-9 9
         a9.72 9.72 0 01-4.33-1.03l-3.42 1.14
         1.14-3.42A9.72 9.72 0 013 12
         c0-4.97 4.03-9 9-9s9 4.03 9 9z"
    />
  </svg>
);

const IconLinkedIn = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2
         2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 9h4v12H2z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 4a2 2 0 110 4 2 2 0 010-4z"
    />
  </svg>
);

const IconInstagram = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="4" ry="4" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17.5" cy="6.5" r="1" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
  <Link to="/" className="flex items-center gap-3">
    <img
      src="/logo_BBD.png"
      alt="Business By Data"
      className="h-7 w-auto"
    />

    <div className="flex flex-col leading-tight">
      <span className="text-xl md:text-2xl font-bold tracking-tighter text-zinc-900">
        Business By Data<span className="text-zinc-400">.</span>
      </span>

      <span className="text-[11px] md:text-xs text-zinc-500 tracking-wide">
        Simplifying Data, Amplifying Actions
      </span>
    </div>
  </Link>
</div>


          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-zinc-900"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 hover:text-zinc-900 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-100 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-zinc-600 hover:text-zinc-900"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo_BBD.png" alt="Business By Data" className="h-7 w-auto" />
              <span className="text-2xl font-bold tracking-tighter text-zinc-900 leading-none">
                Business By Data<span className="text-zinc-400">.</span>
              </span>
            </Link>

            <p className="mt-4 text-zinc-500 max-w-sm leading-relaxed">
              Executive-level data strategy and measurement logic for organizations that value clarity over complexity.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">

               <li>
                <Link to="/" className="text-sm text-zinc-500 hover:text-zinc-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-zinc-500 hover:text-zinc-900">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-zinc-500 hover:text-zinc-900">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-zinc-500 hover:text-zinc-900">
                  Founder
                </Link>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-4">
              Location
            </h3>
            <p className="text-sm text-zinc-500">Lagos, Nigeria</p>

            {/* Contact Links (consistent icon style) */}
            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              {/* Email */}
              <a
                href={`mailto:${EMAIL}?subject=Business%20Inquiry`}
                className="flex items-center gap-3 hover:text-zinc-900 transition-colors"
              >
                <IconMail className="w-4 h-4 text-zinc-400" />
                {EMAIL}
              </a>

              {/* Phone */}
             <a
  href={`tel:${PHONE_E164}`}
  className="flex items-center gap-3 hover:text-zinc-900 transition-colors"
>
  <IconPhone className="w-4 h-4 text-zinc-400" />
  {PHONE_E164}
</a>

              {/* WhatsApp (same number) */}
              <a
  href={`https://wa.me/${PHONE_WA_DIGITS}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 hover:text-zinc-900 transition-colors"
>
  <IconChat className="w-4 h-4 text-zinc-400" />
  WhatsApp: {PHONE_E164}
</a>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-zinc-900 transition-colors"
              >
                <IconLinkedIn className="w-4 h-4 text-zinc-400" />
                LinkedIn
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-zinc-900 transition-colors"
              >
                <IconInstagram className="w-4 h-4 text-zinc-400" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Business By Data. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Design & Strategy for Decision Makers.</p>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

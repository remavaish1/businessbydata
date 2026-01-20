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

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            {/* Brand: Logo + Text */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo_BBD.png"
                alt="Business By Data"
                className="h-7 w-auto"
              />
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-zinc-900 leading-none">
                Business By Data<span className="text-zinc-400">.</span>
              </span>
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
            <Link
              to={DISCOVERY_CALL_LINK.replace("#", "")}
              className="bg-zinc-900 text-white px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-zinc-800 transition-all shadow-sm"
            >
              {PRIMARY_CTA_TEXT}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 hover:text-zinc-900 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
          <Link
            to={DISCOVERY_CALL_LINK.replace("#", "")}
            onClick={() => setIsOpen(false)}
            className="block text-center bg-zinc-900 text-white px-4 py-3 text-sm font-medium rounded-sm"
          >
            {PRIMARY_CTA_TEXT}
          </Link>
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
            {/* Footer Brand: Logo + Text */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo_BBD.png"
                alt="Business By Data"
                className="h-7 w-auto"
              />
              <span className="text-2xl font-bold tracking-tighter text-zinc-900 leading-none">
                Business By Data<span className="text-zinc-400">.</span>
              </span>
            </Link>

            <p className="mt-4 text-zinc-500 max-w-sm leading-relaxed">
              Executive-level data strategy and measurement logic for
              organizations that value clarity over complexity.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-sm text-zinc-500 hover:text-zinc-900"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-sm text-zinc-500 hover:text-zinc-900"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-zinc-500 hover:text-zinc-900"
                >
                  Founder
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-zinc-500 hover:text-zinc-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-4">
              Location
            </h3>
            <p className="text-sm text-zinc-500">Lagos, Nigeria</p>

            {/* Updated email */}
            <p className="text-sm text-zinc-500 mt-2">
              <a
                href="mailto:connect@businessbydata.co?subject=Business%20Inquiry"
                className="hover:text-zinc-900"
              >
                connect@businessbydata.co
              </a>
            </p>

            {/* Updated LinkedIn */}
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/rema-vaish/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-zinc-900 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

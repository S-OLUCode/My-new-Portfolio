import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
  icon: React.JSX.Element;
}

const NAV_LINKS: NavItem[] = [
  {
    label: "About",
    href: "#about",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    label: "Projects",
    href: "#services",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    label: "Skills",
    href: "#stack",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export function Nav() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="w-full bg-[var(--PortfolioBlack)] dark:bg-[var(--PortfolioBlack)] light:bg-zinc-50 border-b border-zinc-900 dark:border-zinc-900 light:border-zinc-200 sticky top-0 z-50 backdrop-blur-md bg-opacity-95 transition-all duration-300">
      <div className="max-w-[1300px] h-20 md:h-24 mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between">

        {/* Left Side: Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden items-center justify-center p-2 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 bg-zinc-950/40 text-zinc-400 hover:text-[var(--PortfolioPurple)] transition-all duration-200 cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-3 px-4 lg:px-5 py-2.5 rounded-xl text-sm lg:text-base font-medium text-zinc-400 dark:text-zinc-400 light:text-zinc-600 border border-transparent hover:border-zinc-800/80 dark:hover:border-zinc-800/80 light:hover:border-zinc-300 hover:bg-zinc-900/40 dark:hover:bg-zinc-900/40 light:hover:bg-zinc-200/50 hover:text-[var(--PortfolioPurple)] transition-all duration-300 ease-out"
            >
              <span className="text-zinc-500 dark:text-zinc-500 light:text-zinc-400 group-hover:text-[var(--PortfolioPurple)] transition-colors duration-300">
                {link.icon}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Right Side Actions Cluster */}
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="relative w-14 h-8 rounded-full bg-zinc-200 dark:bg-zinc-900 border border-zinc-300/80 dark:border-zinc-800 transition-all duration-300 p-1 flex items-center shadow-inner cursor-pointer"
            aria-label="Toggle Theme Mode"
          >
            <div
              className={`h-5.5 w-5.5 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${isDarkMode
                  ? 'translate-x-6 bg-[var(--PortfolioPurple)] text-[var(--PortfoliohWhite)] shadow-[0_0_10px_rgba(147,51,234,0.6)]'
                  : 'translate-x-0 bg-white text-[var(--PortfolioPurple)] shadow-[0_2px_6px_rgba(0,0,0,0.15)]'
                }`}
            >
              {isDarkMode ? (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.5-.1 1 .2 1.1.7.2.5 0 1.1-.5 1.4-2.8 1.9-4.3 5.2-3.8 8.7.5 3.5 3.4 6.1 6.9 6.2 1.7 0 3.3-.6 4.6-1.7.4-.3 1-.3 1.3.1.3.4.3 1 0 1.3-2 1.9-4.8 3.1-7.7 3.1z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )}
            </div>
          </button>

          <a
            href="#cv"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--PortfolioPurple)]/10 border border-[var(--PortfolioPurple)]/20 text-[var(--PortfolioPurple)] text-sm font-bold tracking-wide hover:bg-[var(--PortfolioPurple)] hover:text-[var(--PortfoliohWhite)] transition-all duration-300 shadow-sm shadow-purple-500/5 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] active:scale-98 group"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="uppercase font-mono tracking-widest text-xs">Download CV</span>
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Panel Menu Drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-zinc-950/20 bg-[var(--PortfolioBlack)] dark:bg-[var(--PortfolioBlack)] light:bg-zinc-100 ${isMobileMenuOpen ? 'max-h-80 border-t py-4 shadow-xl' : 'max-h-0 py-0 border-t-0'}`}>
        <div className="flex flex-col gap-1 px-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-4 px-5 py-3 rounded-xl text-base font-medium text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:bg-zinc-900/60 dark:hover:bg-zinc-900/60 light:hover:bg-zinc-200/80 hover:text-[var(--PortfolioPurple)] transition-all duration-200"
            >
              <span className="text-zinc-500 dark:text-zinc-500 light:text-zinc-400">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
import React, { useState, useEffect, useRef } from 'react';
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  return null;
}

function scrollToTopWithEasing() {
  const startY = window.pageYOffset;
  const startTime = performance.now();
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / 800, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY * (1 - eased));
    if (elapsed < 800) {
      requestAnimationFrame(step);
    }
  };
  requestAnimationFrame(step);
}

// ----------------------------------------------------
// FULL LOGO
// ----------------------------------------------------
function AppFullLogo({ src, size = '' }) {
  return (
    <Link to="/home" className={`block ${size}`}>
      <img src={src} alt="Brand logo" className="w-100 mx-auto" />
    </Link>
  );
}

// ----------------------------------------------------
// HAMBURGER MENU ANIMATION
// ----------------------------------------------------
function HamburgerMenuAnim({ isDark, isActive, onToggle }) {
  return (
    <button
      type="button"
      id="hamburger-6"
      className={`hamburger ${isActive ? 'is-active' : ''}`}
      onClick={onToggle}
      aria-label="Toggle navigation menu"
    >
      <span className={isDark ? 'line-dark' : 'line'} />
      <span className={isDark ? 'line-dark' : 'line'} />
      <span className={isDark ? 'line-dark' : 'line'} />
    </button>
  );
}

// ----------------------------------------------------
// NAVIGATION COMPONENT
// ----------------------------------------------------
function Navbar({ isDark = false }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const africasReturnLinks = [
    { label: 'Vision Statement: The Rise of Royals', to: '/africas-return#vision' },
    { label: 'African Sovereignty Manifesto', to: '/africas-return#manifesto' },
    { label: "Africa's Call to Action", to: '/africas-return#call-to-action' },
    { label: 'Declaration of Purpose', to: '/africas-return#purpose' },
    { label: 'The School of Becoming', to: '/africas-return#school' },
  ];

  return (
    <div className="hidden md:block">
      {!isDark ? (
        <nav className="w-full relative">
          <div className="mx-auto absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl z-10">
            <div className="flex justify-center items-center">
              <AppFullLogo
                src="/assets/imgs/icons/logos/full_logo_white.png"
                size="w-[150px] mx-auto mt-3"
              />
            </div>
            <div className="navlinks text-lg bg-light-gray md:flex justify-between items-center gap-x-8 hidden py-4 px-5 my-5">
              <NavLink to="/home" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
                About
              </NavLink>

              {/* Africa's Return Dropdown */}
              <div
                className="nav-dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <NavLink
                  to="/africas-return"
                  className={({ isActive }) => `trajan-pro flex items-center gap-1 ${isActive ? 'active-link' : ''}`}
                >
                  Africa’s Return
                  <span className="text-[0.65rem] opacity-75">▼</span>
                </NavLink>
                <div className={`nav-dropdown-menu ${dropdownOpen ? 'menu-visible' : 'menu-hidden'}`}>
                  {africasReturnLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="nav-dropdown-item trajan-pro"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink to="/leadership" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
                Thought Leadership
              </NavLink>
              <NavLink to="/legacy-of-impact" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
                Legacy of Impact
              </NavLink>
              <NavLink to="/engagement" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
                Engagement
              </NavLink>
              <NavLink to="/movement" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
                Movement
              </NavLink>
              <NavLink to="/contact-us" className="trajan-pro nav-cta-blue rounded-xs">
                BOOK LRE
              </NavLink>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="w-full relative">
          <div className="mx-auto relative top-0 w-full max-w-6xl z-10">
            <div className="flex justify-center items-center">
              <AppFullLogo
                src="/assets/imgs/icons/logos/full_logo_black.png"
                size="w-[150px] mx-auto mt-3"
              />
            </div>
            <div className="navlinks-dark text-lg bg-light-gray md:flex justify-between items-center gap-x-1 hidden py-4 px-5 my-5">
              <NavLink to="/home" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
                About
              </NavLink>

              {/* Africa's Return Dropdown */}
              <div
                className="nav-dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <NavLink
                  to="/africas-return"
                  className={({ isActive }) => `trajan-pro flex items-center gap-1 ${isActive ? 'active-link' : ''}`}
                >
                  Africa’s Return
                  <span className="text-[0.65rem] opacity-75">▼</span>
                </NavLink>
                <div className={`nav-dropdown-menu ${dropdownOpen ? 'menu-visible' : 'menu-hidden'}`}>
                  {africasReturnLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="nav-dropdown-item trajan-pro"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink to="/leadership" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
                Thought Leadership
              </NavLink>
              <NavLink to="/legacy-of-impact" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
                Legacy of Impact
              </NavLink>
              <NavLink to="/engagement" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
                Engagement
              </NavLink>
              <NavLink to="/movement" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
                Movement
              </NavLink>
              <NavLink to="/contact-us" className="trajan-pro nav-cta-blue rounded-xs">
                BOOK LRE
              </NavLink>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

function NavSm({ isDark = false, className = '' }) {
  const [navOpen, setNavOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setNavOpen(false);
    setMobileSubmenuOpen(false);
  }, [location.pathname]);

  return (
    <div className={`md:hidden ${className}`}>
      <nav className={`w-full relative ${isDark ? 'bg-(--white)' : ''}`}>
        <div className={isDark ? 'w-full max-w-7xl z-10' : 'absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-7xl z-10'}>
          <div className="flex justify-center items-center">
            <AppFullLogo
              src={isDark ? '/assets/imgs/icons/logos/full_logo_black.png' : '/assets/imgs/icons/logos/full_logo_white.png'}
              size="w-[150px] mx-auto mt-3"
            />
          </div>
          <div className="md:hidden absolute z-12 left-6 sm:left-10 top-12">
            <HamburgerMenuAnim
              isDark={isDark}
              isActive={navOpen}
              onToggle={() => setNavOpen((prev) => !prev)}
            />
          </div>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-15 left-6 sm:left-10 z-[999] text-md ${
            isDark ? 'bg-(--grey-bg)' : 'bg-(--nav-black-bg)'
          } w-[80%] max-w-xs flex flex-col justify-between items-start space-y-4 py-8 sm:py-10 px-6 sm:px-8 my-5 shadow-2xl ${
            navOpen ? 'menu-visible' : 'menu-hidden'
          }`}
        >
          <NavLink to="/home" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
            About
          </NavLink>

          {/* Africa's Return mobile link */}
          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <NavLink to="/africas-return" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
                Africa’s Return
              </NavLink>
              <button
                type="button"
                onClick={() => setMobileSubmenuOpen((prev) => !prev)}
                className="text-xs px-2 py-1 opacity-70"
              >
                {mobileSubmenuOpen ? '▲' : '▼'}
              </button>
            </div>
            {mobileSubmenuOpen && (
              <div className="pl-4 mt-2 space-y-2 border-l border-white/20">
                <Link to="/africas-return#vision" className="block text-xs trajan-pro opacity-80">
                  Vision: The Rise of Royals
                </Link>
                <Link to="/africas-return#manifesto" className="block text-xs trajan-pro opacity-80">
                  Sovereignty Manifesto
                </Link>
                <Link to="/africas-return#call-to-action" className="block text-xs trajan-pro opacity-80">
                  Call to Action
                </Link>
                <Link to="/africas-return#school" className="block text-xs trajan-pro opacity-80">
                  The School of Becoming
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/leadership" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
            Thought Leadership
          </NavLink>
          <NavLink to="/legacy-of-impact" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
            Legacy of Impact
          </NavLink>
          <NavLink to="/engagement" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
            Engagement
          </NavLink>
          <NavLink to="/movement" className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}>
            Movement
          </NavLink>
          <NavLink to="/contact-us" className="trajan-pro nav-cta-blue rounded-xs">
            BOOK LRE
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

// ----------------------------------------------------
// INTERSECTION & HEADER-BG HELPERS
// ----------------------------------------------------
function AppIntersection({ externalClass = '', children }) {
  return (
    <div className={`relative w-full flex flex-col items-center justify-center py-4 sm:py-6 md:py-8 text-center ${externalClass}`}>
      {children}
    </div>
  );
}

function AppHeaderBg({ externalClass = '', children }) {
  return (
    <section className={`p-8 flex text-center justify-center items-end min-h-[80vh] bg-cover bg-center bg-no-repeat ${externalClass}`}>
      <div>{children}</div>
    </section>
  );
}

// ----------------------------------------------------
// FOOTER COMPONENT (FULLY RESPONSIVE ACROSS ALL DEVICES)
// ----------------------------------------------------
function Footer({ color = false, secondaryColor = false }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    const subject = encodeURIComponent('Sovereign Dispatch subscription request');
    const body = encodeURIComponent(`Please add ${newsletterEmail} to the Sovereign Dispatch mailing list.`);
    window.location.href = `mailto:LRE@luckyerherha.com?subject=${subject}&body=${body}`;
    setNewsletterSubscribed(true);
  };

  const bgClass = color
    ? (secondaryColor ? 'bg-[var(--secondary-color)]' : 'bg-[var(--footer-black)]')
    : 'bg-[url(/assets/imgs/home/Footer1.png)] bg-cover bg-center bg-no-repeat';

  return (
    <footer className={`relative ${bgClass} text-white w-full overflow-hidden`}>
      {/* Subtle overlay gradient for the image variant to guarantee pristine legibility */}
      {!color && (
        <div className="footer-image-overlay absolute inset-0 pointer-events-none z-0" />
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-5">
        
        {/* Tier 1: The Sovereign Dispatch (Global Standard Institutional Newsletter Band) */}
        <div className="pb-5 border-b border-white/15">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="trajan-pro text-amber-400 text-[10px] tracking-[0.18em] uppercase font-bold block mb-1">
                THE SOVEREIGN DISPATCH
              </span>
              <h3 className="trajan-pro text-white text-base sm:text-lg font-bold leading-snug">
                Dispatches from Lucky R. Erherha
              </h3>
            </div>

            <div className="footer-dispatch-form w-full sm:w-auto sm:min-w-[24rem]">
                {newsletterSubscribed ? (
                  <div className="text-amber-200 manrope text-xs" role="status">
                    Your email app may open a request. The subscription is not complete until you send it.
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <input
                      type="email"
                      required
                      aria-label="Email address for the Sovereign Dispatch"
                      placeholder="Email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="min-w-0 flex-1 px-3 py-2 bg-black/60 border border-white/25 rounded text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400 text-xs manrope"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold trajan-pro text-[10px] tracking-wider rounded transition-colors shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                    >
                      REQUEST
                    </button>
                  </form>
                )}
            </div>
          </div>
        </div>

        {/* Main footer groups */}
        <div className="footer-link-grid py-5 sm:py-6 gap-x-5 gap-y-6 sm:gap-x-8 lg:gap-x-10">
          {/* Brand, contact, and support */}
          <div className="footer-brand-column">
            <AppFullLogo src="/assets/imgs/icons/logos/full_logo_white.png" size="footer-brand-mark" />
            <p className="trajan-pro text-amber-400 text-[9px] tracking-[0.16em] uppercase font-bold mt-1 mb-3">
              The Rise of Royals &bull; Africa&apos;s Return
            </p>
            <Link to="/contact-us" className="footer-primary-link">BOOK LRE &rarr;</Link>
            <Link to="/contact-us#support" className="footer-support-link">
              SUPPORT THE MISSION
            </Link>
            <div className="footer-contact-details">
              <a href="mailto:LRE@luckyerherha.com">LRE@luckyerherha.com</a>
              <a href="tel:+2347045068663">+234 704 506 8663</a>
              <span>Abuja &bull; Lagos &bull; London &bull; Pan-Africa</span>
            </div>
            <button
              type="button"
              onClick={scrollToTopWithEasing}
              className="footer-back-top"
            >
              <img src="/assets/imgs/icons/footer/to_top.png" alt="" />
              BACK TO TOP
            </button>
          </div>

          {/* Column 1: Navigation */}
          <div className="footer-group">
            <h4 className="trajan-pro text-[11px] sm:text-xs text-amber-400 tracking-[0.2em] uppercase font-bold mb-3 sm:mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
              NAVIGATION
            </h4>
            <nav className="space-y-2 sm:space-y-2.5 manrope text-xs sm:text-sm">
              <Link to="/home" className="block text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-200">
                Home
              </Link>
              <Link to="/about" className="block text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-200">
                About LRE
              </Link>
              <Link to="/africas-return" className="block text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-200">
                Africa’s Return
              </Link>
              <Link to="/leadership" className="block text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-200">
                Thought Leadership
              </Link>
              <Link to="/legacy-of-impact" className="block text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-200">
                Legacy of Impact
              </Link>
              <Link to="/engagement" className="block text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-200">
                Engagement
              </Link>
              <Link to="/movement" className="block text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-200">
                Movement
              </Link>
            </nav>
          </div>

          {/* Column 2: Pillars & Archive */}
          <div className="footer-group">
            <h4 className="trajan-pro text-[11px] sm:text-xs text-amber-400 tracking-[0.2em] uppercase font-bold mb-3 sm:mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
              PILLARS &amp; ARCHIVE
            </h4>
            <div className="space-y-2 sm:space-y-2.5 manrope text-xs sm:text-sm">
              <Link to="/home#legacy" className="block text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-200">
                The Rise of Royals (Book)
              </Link>
              <Link to="/africas-return#school" className="block text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-200">
                The School of Becoming
              </Link>
              <Link to="/africas-return#manifesto" className="block text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-200">
                Sovereignty Manifesto
              </Link>
              <Link to="/legacy-of-impact" className="block text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-200">
                Zumera Landmark Real Estate
              </Link>
              <Link to="/africas-return#purpose" className="block text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-200">
                Declaration of Purpose
              </Link>
              <Link to="/terms" className="block text-white/80 hover:text-amber-300 hover:translate-x-1 transition-all duration-200">
                Legal &amp; Intellectual Terms
              </Link>
            </div>
          </div>

          {/* Column 3: Community & Diplomatic Channels */}
          <div className="footer-group">
            <h4 className="trajan-pro text-[11px] sm:text-xs text-amber-400 tracking-[0.2em] uppercase font-bold mb-3 sm:mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
              COMMUNITY
            </h4>
            <div className="footer-community-links manrope text-xs sm:text-sm">
              <a
                href="https://www.facebook.com/share/18tZawxAqR/?mibextid=qi2Omg"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-amber-300 transition-all duration-200 p-1 rounded hover:bg-white/5"
              >
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <img src="/assets/imgs/icons/footer/facebook.png" alt="" className="w-3.5 h-auto opacity-80" />
                </div>
                <span className="truncate">FACEBOOK</span>
              </a>
              <a
                href="https://www.instagram.com/luckyrerherha?igsh=MXZuamE4YTJoZHZidQ==&utm_source=ig_contact_invite"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-amber-300 transition-all duration-200 p-1 rounded hover:bg-white/5"
              >
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <img src="/assets/imgs/icons/footer/insta.png" alt="" className="w-3.5 h-auto opacity-80" />
                </div>
                <span className="truncate">INSTAGRAM</span>
              </a>
              <a
                href="http://www.LinkedIn.com/in/luckyrerherha"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-amber-300 transition-all duration-200 p-1 rounded hover:bg-white/5"
              >
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <img src="/assets/imgs/icons/footer/linkedin.png" alt="" className="w-3.5 h-auto opacity-80" />
                </div>
                <span className="truncate">LINKEDIN</span>
              </a>
              <a
                href="https://www.threads.com/@luckyerherha?invite=0"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-amber-300 transition-all duration-200 p-1 rounded hover:bg-white/5"
              >
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <img src="/assets/imgs/icons/footer/thread.png" alt="" className="w-3.5 h-auto opacity-80" />
                </div>
                <span className="truncate">THREADS</span>
              </a>
              <a
                href="https://www.tiktok.com/@lucky.r..erherha?_t=ZS-8ySGnj39cn3&_r=1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-amber-300 transition-all duration-200 p-1 rounded hover:bg-white/5"
              >
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <img src="/assets/imgs/icons/footer/tiktok.png" alt="" className="w-3.5 h-auto opacity-80" />
                </div>
                <span className="truncate">TIKTOK</span>
              </a>
              <a
                href="https://x.com/luckyrerherha?s=21"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-amber-300 transition-all duration-200 p-1 rounded hover:bg-white/5"
              >
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <img src="/assets/imgs/icons/footer/twitter.png" alt="" className="w-3.5 h-auto opacity-80" />
                </div>
                <span className="truncate">X (TWITTER)</span>
              </a>
              <a
                href="https://youtube.com/@luckyrerherha?si=BTtNAUEU46Uc5e0Z"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-amber-300 transition-all duration-200 p-1 rounded hover:bg-white/5"
              >
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  <img src="/assets/imgs/icons/footer/yt.png" alt="" className="w-3.5 h-auto opacity-80" />
                </div>
                <span className="truncate">YOUTUBE</span>
              </a>
            </div>
          </div>

        </div>

        {/* Tier 4: Bottom Ribbon (Horizontal 3-Column System Across All Devices) */}
        <div className="footer-bottom-grid border-t border-white/15 pt-3 mt-1 gap-2 items-center text-[10px] sm:text-xs manrope text-white/75">
          <p className="text-left leading-tight">
            &copy; {new Date().getFullYear()} Lucky R. Erherha.<span className="hidden sm:inline"> All Rights Reserved.</span>
          </p>
          <p className="trajan-pro text-amber-400 text-[8px] sm:text-xs tracking-wider sm:tracking-widest text-center font-semibold">
            THE RISE OF ROYALS<span className="hidden md:inline"> &bull; AFRICA’S RETURN</span>
          </p>
          <div className="flex items-center justify-end gap-2 sm:gap-4 text-right">
            <Link to="/terms" className="hover:text-amber-300 transition-colors">
              Terms<span className="hidden sm:inline"> &amp; Privacy</span>
            </Link>
            <span className="text-white/30">&bull;</span>
            <Link to="/contact-us" className="hover:text-amber-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ----------------------------------------------------
// 1. ONBOARDING PAGE
// ----------------------------------------------------
function OnboardingPage() {
  return (
    <div className="relative bg-[url(/assets/imgs/onboard/onboard-img.jpg)] bg-cover bg-center bg-no-repeat h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/75 pointer-events-none" />
      <div className="flex justify-center items-center h-full flex-col relative z-10 px-4 text-center max-w-5xl mx-auto">
        <span className="trajan-pro text-amber-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-bold mb-4 drop-shadow">
          THE AWAKENING &bull; AFRICA&apos;S RETURN
        </span>
        <h1 className="trajan-pro text-center text-white text-[2.2rem] sm:text-[3.5rem] md:text-[5.2rem] mx-auto leading-tight font-black tracking-wide drop-shadow-2xl">
          LEFTOVERS ARE FOR SLAVES
        </h1>

        <div className="mt-8 md:mt-10 flex flex-col justify-center items-center">
          <p className="text-xs sm:text-sm pb-3 trajan-pro text-amber-300/90 tracking-widest uppercase">
            ENTER THE SANCTUARY <span className="animate-bounce inline-block ml-1">&darr;</span>
          </p>
          <Link
            to="/home"
            className="trajan-pro px-8 py-3.5 sm:px-10 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm sm:text-base tracking-[0.15em] rounded-lg transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] hover:-translate-y-0.5"
          >
            THE RISE OF ROYALS &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 2. HOME PAGE (UPDATED WITH 61M, BOOK, SCHOOL, ZUMERA)
// ----------------------------------------------------
function HomePage() {
  const [selectedModal, setSelectedModal] = useState(null);

  return (
    <div>
      <Navbar isDark={false} />
      <NavSm isDark={false} />

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[130vh] w-full overflow-hidden bg-[url(/assets/imgs/home/throne.jpg)] md:bg-[url(/assets/imgs/home/throne.jpg)] flex items-end p-5 md:items-center bg-cover bg-center md:bg-top bg-no-repeat">
        <div className="container max-w-7xl mx-auto font-black z-2 px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-0">
          <h1 className="trajan-pro text-[1.5rem] sm:text-[2.2rem] md:text-[3rem] leading-tight">
            Africa, take your <br /> throne.
          </h1>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/15 z-1" />
      </section>

      {/* Declaration Section */}
      <section className="relative h-[80vh] md:h-[100vh] w-full overflow-hidden bg-[url(/assets/imgs/home/decleration.jpg)] md:bg-[url(/assets/imgs/home/decleration.jpg)] flex items-end p-5 md:items-center bg-cover bg-center bg-no-repeat md:bg-size-[80%]" />

      {/* Legacy of Impact Section */}
      <div id="legacy" className="bg-[url(/assets/imgs/home/legacy.png)] text-(--primary-color) mb-[3rem] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="home-legacy-brand">
            <img src="/assets/imgs/home/lre_logo.png" alt="Lucky R. Erherha monogram" />
          </div>
          {/* Section Header */}
          <div className="home-legacy-heading pb-8 sm:pb-10 text-center max-w-3xl mx-auto">
            <span className="trajan-pro text-amber-400 text-xs md:text-sm tracking-[0.25em] uppercase font-bold block mb-3">
              Sovereign Footprints
            </span>
            <h2 className="trajan-pro text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wider">
              LEGACY OF IMPACT
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4 mb-4" />
            <p className="manrope text-white/80 text-sm md:text-base font-light leading-relaxed">
              Four monumental pillars awakening continental consciousness, codifying original systems, and erecting permanent African monuments.
            </p>
          </div>

          {/* 4 Balanced Pillar Cards */}
          <div className="pb-24">
            <div className="home-legacy-grid grid gap-4 md:gap-5 items-stretch">
              {/* Pillar 1: 61 Million Africans Reached */}
              <div className="group flex flex-col justify-between bg-black/55 hover:bg-black/75 backdrop-blur-md border border-white/10 hover:border-amber-400/50 rounded-lg p-3 sm:p-4 md:p-5 transition-all duration-300 shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1 w-full">
                <div>
                  {/* Top Emblem / Category Header */}
                  <div className="home-legacy-card-label">
                    <span className="trajan-pro text-amber-400 text-[10px] tracking-widest uppercase">The Movement</span>
                  </div>

                  {/* Media Showcase */}
                  <div className="home-legacy-media group-hover:border-amber-400/60">
                    <Link to="/movement" className="block w-full h-full">
                      <img
                        src="/assets/imgs/home/9m.jpg"
                        alt="Over 61 million Africans reached"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="trajan-pro text-[10px] sm:text-xs text-amber-300 bg-black/85 px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-amber-400/50 tracking-wider shadow-lg">
                          VIEW MOVEMENT
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Text Details */}
                  <span className="trajan-pro text-amber-400 text-[9px] sm:text-[10px] md:text-[11px] tracking-widest uppercase block mb-1">
                    CONTINENTAL REACH
                  </span>
                  <h3 className="trajan-pro text-white font-bold text-xs sm:text-base md:text-lg leading-snug min-h-[2rem] sm:min-h-[2.6rem] flex items-center">
                    The Great Awakening
                  </h3>
                  <p className="text-amber-300/80 text-[10px] sm:text-xs mb-1.5 sm:mb-2.5 manrope">
                    61+ Million Africans Reached
                  </p>
                  <p className="manrope text-white/80 text-[11px] sm:text-xs md:text-sm font-light leading-relaxed mb-3 sm:mb-4">
                    Over <strong className="font-bold text-amber-300">61 million</strong> Africans awakened to the sacred glory of their ancestral heritage and creative authority.
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="mt-auto pt-2.5 sm:pt-4 border-t border-white/10">
                  <Link
                    to="/movement"
                    className="inline-flex items-center text-[10px] sm:text-xs trajan-pro text-amber-300 hover:text-white transition-colors duration-200"
                  >
                    <span>Explore Movement</span>
                    <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Pillar 2: LRE's Book */}
              <div className="group flex flex-col justify-between bg-black/55 hover:bg-black/75 backdrop-blur-md border border-white/10 hover:border-amber-400/50 rounded-lg p-3 sm:p-4 md:p-5 transition-all duration-300 shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1 w-full">
                <div>
                  {/* Top Category Header */}
                  <div className="home-legacy-card-label">
                    <span className="trajan-pro text-amber-400 text-[10px] sm:text-xs tracking-widest uppercase border-b border-amber-400/50 pb-1 font-semibold">
                      THE LITERARY WORK
                    </span>
                  </div>

                  {/* Media Showcase */}
                  <div className="home-legacy-media group-hover:border-amber-400/60" onClick={() => setSelectedModal('book')}>
                    <img
                      src="/assets/imgs/home/lre_book.jpg"
                      alt="The Rise of Royals Book"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="trajan-pro text-[10px] sm:text-xs text-amber-300 bg-black/85 px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-amber-400/50 tracking-wider shadow-lg">
                        PREVIEW BOOK
                      </span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <span className="trajan-pro text-amber-400 text-[9px] sm:text-[10px] md:text-[11px] tracking-widest uppercase block mb-1">
                    FOUNDATIONAL TEXT
                  </span>
                  <h3 className="trajan-pro text-white font-bold text-xs sm:text-base md:text-lg leading-snug min-h-[2rem] sm:min-h-[2.6rem] flex items-center">
                    The Rise of Royals
                  </h3>
                  <p className="text-amber-300/80 text-[10px] sm:text-xs mb-1.5 sm:mb-2.5 manrope">
                    By Lucky R. Erherha
                  </p>
                  <p className="manrope text-white/80 text-[11px] sm:text-xs md:text-sm font-light leading-relaxed mb-3 sm:mb-4">
                    Returning the African to the consciousness of sacred responsibility, self-mastery, and sovereign enterprise.
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="mt-auto pt-2.5 sm:pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setSelectedModal('book')}
                    className="inline-flex items-center text-[10px] sm:text-xs trajan-pro text-amber-300 hover:text-white transition-colors duration-200"
                  >
                    <span>Read Excerpt</span>
                    <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                  </button>
                </div>
              </div>

              {/* Pillar 3: Africa's Return School of Economies */}
              <div className="group flex flex-col justify-between bg-black/55 hover:bg-black/75 backdrop-blur-md border border-white/10 hover:border-amber-400/50 rounded-lg p-3 sm:p-4 md:p-5 transition-all duration-300 shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1 w-full">
                <div>
                  {/* Top Category Header */}
                  <div className="home-legacy-card-label">
                    <span className="trajan-pro text-amber-400 text-[10px] sm:text-xs tracking-widest uppercase border-b border-amber-400/50 pb-1 font-semibold">
                      THE ACADEMY
                    </span>
                  </div>

                  {/* Media Showcase */}
                  <div className="home-legacy-media group-hover:border-amber-400/60" onClick={() => setSelectedModal('school')}>
                    <img
                      src="/assets/imgs/home/school_of_economies.jpg"
                      alt="The School of Becoming"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="trajan-pro text-[10px] sm:text-xs text-amber-300 bg-black/85 px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-amber-400/50 tracking-wider shadow-lg">
                        EXPLORE FELLOWSHIP
                      </span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <span className="trajan-pro text-amber-400 text-[9px] sm:text-[10px] md:text-[11px] tracking-widest uppercase block mb-1">
                    ORIGINAL SYSTEMS
                  </span>
                  <h3 className="trajan-pro text-white font-bold text-xs sm:text-base md:text-lg leading-snug min-h-[2rem] sm:min-h-[2.6rem] flex items-center">
                    School of Becoming
                  </h3>
                  <p className="text-amber-300/80 text-[10px] sm:text-xs mb-1.5 sm:mb-2.5 manrope truncate">
                    School of Economies
                  </p>
                  <p className="manrope text-white/80 text-[11px] sm:text-xs md:text-sm font-light leading-relaxed mb-3 sm:mb-4">
                    First-principle thinking and original economic systems rendering the language of &ldquo;catching up&rdquo; irrelevant.
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="mt-auto pt-2.5 sm:pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setSelectedModal('school')}
                    className="inline-flex items-center text-[10px] sm:text-xs trajan-pro text-amber-300 hover:text-white transition-colors duration-200"
                  >
                    <span>Curriculum</span>
                    <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                  </button>
                </div>
              </div>

              {/* Pillar 4: Zumera */}
              <div className="group flex flex-col justify-between bg-black/55 hover:bg-black/75 backdrop-blur-md border border-white/10 hover:border-amber-400/50 rounded-lg p-3 sm:p-4 md:p-5 transition-all duration-300 shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1 w-full">
                <div>
                  {/* Top Category Header */}
                  <div className="home-legacy-card-label">
                    <img src="/assets/imgs/home/zumera_logo.png" alt="Zumera Logo" className="h-6 sm:h-8 md:h-9 w-auto object-contain brightness-125" />
                  </div>

                  {/* Media Showcase */}
                  <div className="home-legacy-media group-hover:border-amber-400/60">
                    <Link to="/legacy-of-impact" className="block w-full h-full">
                      <img
                        src="/assets/imgs/rj-brand/BB1.jpg"
                        alt="Zumera Developments"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="trajan-pro text-[10px] sm:text-xs text-amber-300 bg-black/85 px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-amber-400/50 tracking-wider shadow-lg">
                          VIEW ARCHITECTURE
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Text Details */}
                  <span className="trajan-pro text-amber-400 text-[9px] sm:text-[10px] md:text-[11px] tracking-widest uppercase block mb-1">
                    PHYSICAL SOVEREIGNTY
                  </span>
                  <h3 className="trajan-pro text-white font-bold text-xs sm:text-base md:text-lg leading-snug min-h-[2rem] sm:min-h-[2.6rem] flex items-center">
                    Zumera Developments
                  </h3>
                  <p className="text-amber-300/80 text-[10px] sm:text-xs mb-1.5 sm:mb-2.5 manrope truncate">
                    Landmark Real Estate
                  </p>
                  <p className="manrope text-white/80 text-[11px] sm:text-xs md:text-sm font-light leading-relaxed mb-3 sm:mb-4">
                    African communities inspired towards an enduring future with landmark real estate and structures of African truth.
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="mt-auto pt-2.5 sm:pt-4 border-t border-white/10">
                  <Link
                    to="/legacy-of-impact"
                    className="inline-flex items-center text-[10px] sm:text-xs trajan-pro text-amber-300 hover:text-white transition-colors duration-200"
                  >
                    <span>Architecture</span>
                    <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Excerpt Modal */}
      {selectedModal === 'book' && (
        <div className="modal-overlay" onClick={() => setSelectedModal(null)}>
          <div className="bg-[#111] border border-amber-500/40 p-6 md:p-10 max-w-2xl w-full text-white max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 trajan-pro">LRE Literary Archive</span>
                <h2 className="trajan-pro text-2xl md:text-3xl font-bold mt-1">THE RISE OF ROYALS</h2>
                <p className="text-sm text-gray-400">By Lucky R. Erherha</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedModal(null)}
                className="text-gray-400 hover:text-white text-2xl font-mono"
              >
                &times;
              </button>
            </div>
            <div className="space-y-4 text-gray-200 manrope leading-relaxed text-sm md:text-base">
              <p className="italic text-amber-200">
                &ldquo;Royalty here is not about crowns, titles or inherited privilege. It is a consciousness of responsibility.&rdquo;
              </p>
              <p>
                Africa’s Return exists because we believe that something essential was interrupted. There was a time when the African did not need to be reminded of his worth. He built, governed, reasoned, traded, created, cultivated, defended and imagined his future from within himself.
              </p>
              <p>
                His understanding of the world did not begin with the question, &ldquo;What does someone elsewhere think of me?&rdquo; It began with a more powerful question: &ldquo;What is possible, and what can I create?&rdquo;
              </p>
              <p>
                Somewhere along the line, our relationship with our own possibility was interrupted. The Rise of Royals is the return of the African to that possibility. A royal understands that he is not merely living inside a world someone else designed; he has the capacity to participate in designing the world he inhabits.
              </p>
              <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                <Link to="/contact-us#support" className="trajan-pro nav-cta-blue rounded-xs text-xs" onClick={() => setSelectedModal(null)}>
                  REQUEST MANUSCRIPT
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedModal(null)}
                  className="text-xs text-gray-400 hover:text-white uppercase tracking-wider"
                >
                  Close Reader
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* School of Becoming Modal */}
      {selectedModal === 'school' && (
        <div className="modal-overlay" onClick={() => setSelectedModal(null)}>
          <div className="bg-[#111] border border-amber-500/40 p-6 md:p-10 max-w-2xl w-full text-white max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 trajan-pro">Institutional Sanctuary</span>
                <h2 className="trajan-pro text-2xl md:text-3xl font-bold mt-1">THE SCHOOL OF BECOMING</h2>
                <p className="text-sm text-gray-400">Africa's Return School of Economies</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedModal(null)}
                className="text-gray-400 hover:text-white text-2xl font-mono"
              >
                &times;
              </button>
            </div>
            <div className="space-y-4 text-gray-200 manrope leading-relaxed text-sm md:text-base">
              <p className="italic text-amber-200">
                &ldquo;Rather than asking how Africa can catch up, we ask what Africa could build that would make the language of 'catching up' irrelevant.&rdquo;
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <h4 className="trajan-pro text-amber-400 font-bold mb-1 text-sm">Faculty I: Sovereignty of Thought</h4>
                  <p className="text-xs text-gray-300">Examining continental challenges from first principles rather than copying borrowed formulas.</p>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <h4 className="trajan-pro text-amber-400 font-bold mb-1 text-sm">Faculty II: Original Economies</h4>
                  <p className="text-xs text-gray-300">Building production systems and wealth architecture grounded in authentic African realities.</p>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <h4 className="trajan-pro text-amber-400 font-bold mb-1 text-sm">Faculty III: Monumental Construction</h4>
                  <p className="text-xs text-gray-300">Translating intellectual clarity into enduring infrastructure, cities, and institutions.</p>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <h4 className="trajan-pro text-amber-400 font-bold mb-1 text-sm">Faculty IV: Civilizational Custodianship</h4>
                  <p className="text-xs text-gray-300">Raising generations who refuse to shrink and accept stewardship of the future.</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                <Link to="/contact-us#support" className="trajan-pro nav-cta-blue rounded-xs text-xs" onClick={() => setSelectedModal(null)}>
                  APPLY FOR FELLOWSHIP
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedModal(null)}
                  className="text-xs text-gray-400 hover:text-white uppercase tracking-wider"
                >
                  Close Overview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer color={false} />
    </div>
  );
}

// ----------------------------------------------------
// 3. ABOUT PAGE (UPDATED WITH PDF SECTIONS 5 & 6)
// ----------------------------------------------------
function AboutPage() {
  return (
    <div className="min-h-screen text-(--primary-color) bg-white">
      <Navbar isDark={true} />
      <NavSm isDark={true} />

      <section className="min-h-screen text-(--primary-color)">
        <AppIntersection externalClass="bg-white/95 backdrop-blur-md sticky top-0 z-20 w-full border-b border-gray-100/80 text-center py-3.5 sm:py-4 px-4 shadow-xs">
          <span className="text-2xl md:text-3xl lg:text-[2.5rem] text-(--primary-color) uppercase trajan-pro font-black">
            About Africa’s Return
          </span>
        </AppIntersection>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col-reverse md:flex-row gap-8">
            <div className="md:w-[50%]">
              <div>
                <h2 className="text-2xl text-center md:text-start md:text-5xl lg:text-4xl font-light mt-8 md:mt-0 mb-8 leading-tight tracking-[0.1em]">
                  <span className="block trajan-pro font-black">ORIGINALITY OF<br /> CREATION</span>
                </h2>
              </div>
              <div className="space-y-6 text-(--primary-color) leading-relaxed text-justify md:text-start">
                <p className="md:text-[1.15rem] manrope font-semibold text-gray-900">
                  Africa's Return is a movement built around a question: <br />
                  <span className="text-amber-800 font-bold">&ldquo;What if Africa could return to the originality of its creation?&rdquo;</span>
                </p>
                <p className="md:text-[1.15rem] manrope">
                  We are not using &ldquo;return&rdquo; to mean going backwards. We mean returning to the kind of consciousness from which original things can be created again.
                </p>
                <p className="md:text-[1.15rem] manrope">
                  Africa has a long history of producing people who could think, organise, build, govern, trade, cultivate knowledge and solve problems according to the realities around them.
                </p>
                <p className="md:text-[1.15rem] manrope">
                  Yet somewhere along the way, many Africans learned to see themselves primarily as recipients: recipients of knowledge, technology, systems, standards and definitions of progress created elsewhere.
                </p>
                <p className="md:text-[1.15rem] manrope">
                  <strong>We believe this can change.</strong> Africa's Return is a growing intellectual and creative movement committed to restoring Africa's power through first-principle thinking, original creation and a deeper understanding of what Africans are capable of becoming.
                </p>
                <p className="md:text-[1.15rem] manrope">
                  We explore the questions beneath the questions. Rather than asking only why a particular problem exists, we ask what produced the problem in the first place. Rather than asking how Africa can catch up, we ask what Africa could build that would make the language of &ldquo;catching up&rdquo; irrelevant.
                </p>
                <p className="md:text-[1.15rem] manrope font-medium">
                  At the centre of everything is a belief that sounds simple but carries enormous responsibility: <strong>the African is capable of creating.</strong> And when a people remember that they can create, they begin to relate differently to their future.
                </p>
              </div>
            </div>

            <div className="relative w-full md:w-[50%] flex flex-col justify-start md:justify-center">
              <div className="w-full rounded-lg overflow-hidden shadow-lg aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src="/assets/imgs/about/vanguard.jpg"
                  alt="Image of the African Renaissance"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy of Liberation Section (PDF Section 6) */}
        <section className="bg-gray-100 py-16 px-8 text-(--primary-color)">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-4xl text-center text-(--text-grey) mb-16 tracking-wide trajan-pro font-black">
              PHILOSOPHY OF LIBERATION
            </h2>
            <div className="flex flex-col-reverse md:flex-row justify-around">
              <div className="md:w-[45%] space-y-8">
                <h3 className="hidden md:block text-2xl md:text-3xl font-bold trajan-pro mb-6 leading-tight text-(--text-grey)">
                  THE CONSCIOUSNESS OF CAPACITY
                </h3>
                <div className="space-y-6 text-justify md:text-start text-gray-800 manrope text-[1.15rem]">
                  <p>
                    Liberation begins when a person discovers that the limits they have accepted are not necessarily the limits of their capacity. For Africa, this discovery must happen at the level of consciousness.
                  </p>
                  <p>
                    There is a difference between changing what surrounds a person and changing what a person believes is possible. One can give someone new tools without changing the imagination with which those tools are used. One can change a government, build new roads or introduce new technology while leaving the deeper assumptions about African possibility untouched.
                  </p>
                  <p>
                    <strong>Africa's Return is concerned with that deeper layer.</strong> Our philosophy of liberation begins with first principles: return to the beginning of a problem, question the assumptions beneath it, understand its actual cause, and then create from that understanding rather than simply copying an existing response.
                  </p>
                  <p>
                    True intellectual freedom means being able to learn from another person without becoming a smaller version of that person. We want Africans to move from consumers to creators, from observers to participants, from people waiting for solutions to people capable of producing them.
                  </p>
                </div>
              </div>

              <div className="relative md:w-[50%] mb-8 md:mt-0 flex flex-col justify-center">
                <div className="w-full mx-auto shadow-2xl rounded overflow-hidden">
                  <img
                    src="/assets/imgs/about/echoes.jpg"
                    alt="Image of the African Renaissance"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-8 bg-white p-6 border-l-4 border-amber-600 shadow-sm">
                  <p className="trajan-pro text-gray-900 font-bold text-lg mb-2">THE FINAL EXPRESSION</p>
                  <p className="manrope text-gray-700 italic">
                    &ldquo;The final expression of liberation is not simply having more. It is becoming more capable of creating what is needed.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer color={true} />
    </div>
  );
}

// ----------------------------------------------------
// 4. AFRICA'S RETURN PAGE (PDF SECTIONS 1, 2, 3, 4)
// ----------------------------------------------------
function AfricasReturnPage() {
  return (
    <div className="min-h-screen text-(--primary-color) bg-white">
      <Navbar isDark={true} />
      <NavSm isDark={true} />

      {/* Sticky Header */}
      <AppIntersection externalClass="bg-white/95 backdrop-blur-md sticky top-0 z-20 w-full border-b border-gray-100/80 text-center py-3.5 sm:py-4 px-4 shadow-xs">
        <h1 className="trajan-pro text-3xl md:text-4xl lg:text-[2.5rem] text-(--text-grey) font-[300]">
          Africa’s Return
        </h1>
      </AppIntersection>

      {/* Hero Banner */}
      <AppHeaderBg externalClass="bg-[url('/assets/imgs/mission/war.jpg')] md:bg-[url('/assets/imgs/mission/war.jpg')]">
        <span className="trajan-pro text-white text-[2.5rem] md:text-[4rem]">
          The Rise of Royals
        </span>
      </AppHeaderBg>

      {/* Section 1 & 2: Vision & African Sovereignty Manifesto */}
      <section id="vision" className="min-h-screen flex justify-center pt-12 md:p-12 bg-[url('/assets/imgs/mission/sov-sm.png')] md:bg-[url('/assets/imgs/mission/sovereignty.png')] relative bg-cover bg-center bg-no-repeat md:mt-[4rem]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1]" />
        <div className="w-full max-w-5xl z-[2]">
          {/* Vision Statement */}
          <div className="bg-(--grey) space-y-8 py-10 px-6 md:px-12 mb-10 rounded">
            <div className="h-full flex flex-col justify-center items-center text-justify md:text-center">
              <h2 className="text-(--text-grey) text-2xl md:text-3xl text-center font-black tracking-wide uppercase mb-4 trajan-pro">
                1. VISION STATEMENT: THE RISE OF ROYALS
              </h2>
              <p className="text-(--text-grey) text-base md:text-lg leading-relaxed font-normal manrope mb-4">
                Africa’s Return exists because we believe that something essential was interrupted.
              </p>
              <p className="text-(--text-grey) text-base leading-relaxed font-normal manrope mb-4">
                There was a time when the African did not need to be reminded of his worth. He built, governed, reasoned, traded, created, cultivated, defended and imagined his future from within himself. His understanding of the world did not begin with the question, &ldquo;What does someone elsewhere think of me?&rdquo; It began with a more powerful question: <span className="font-bold text-gray-900">&ldquo;What is possible, and what can I create?&rdquo;</span>
              </p>
              <p className="text-(--text-grey) text-base leading-relaxed font-normal manrope mb-4">
                Somewhere along the line, our relationship with our own possibility was interrupted. <strong>The Rise of Royals is the return of the African to that possibility.</strong>
              </p>
              <p className="text-(--text-grey) text-base leading-relaxed font-normal manrope">
                Royalty here is not about crowns, titles or inherited privilege. It is a consciousness of responsibility. A royal understands that he is not merely living inside a world someone else designed; he has the capacity to participate in designing the world he inhabits. The Africa we are returning to is not a romantic reconstruction of the past. It is an Africa capable of remembering what was once possible and making that memory into a reality that gives Africa domination on the world stage.
              </p>
            </div>
          </div>

          {/* Section 2: Sovereignty Manifesto */}
          <div id="manifesto" className="text-center space-y-8 text-(--grey) w-full max-w-5xl mx-auto pb-12">
            <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold trajan-pro text-amber-300">
              2. The African Sovereignty Manifesto
            </h2>
            <div className="space-y-6 text-justify md:text-center manrope text-[1.15rem]">
              <p>
                Sovereignty begins long before political independence. Africa's sovereignty must therefore become deeper than independence.
              </p>
              <p className="font-semibold text-white">
                We are interested in the sovereignty of thought. The sovereignty of imagination.
              </p>
              <p>
                The sovereignty to examine our problems without automatically reaching for solutions designed somewhere else, to study what has worked elsewhere without becoming ashamed of what can work here and to build systems that emerge from an honest understanding of African realities rather than an endless attempt to imitate foreign ones.
              </p>
              <p className="text-amber-200">
                This does not mean rejecting the world. <strong>Africa does not need isolation; it needs authorship.</strong>
              </p>
              <p>
                We can learn from everywhere without surrendering the authority to decide what belongs in our own land. We can admire another civilization without believing that civilization is superior. We can use technology created elsewhere while developing technologies that emerge from our own questions. We can participate in the global economy without allowing the global economy to become the measure of our human worth.
              </p>
              <blockquote className="border-l-2 md:border-l-0 md:border-y border-amber-400/50 py-4 italic text-amber-100">
                &ldquo;Sovereignty asks a difficult question: If nobody came to tell us what to build, what would we build?&rdquo;
              </blockquote>
              <p>
                Africa's Return is committed to asking that question repeatedly - not separation from humanity, but a fuller participation in humanity through the strength of our own mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action (PDF Section 3) */}
      <section id="call-to-action" className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-(--primary-color)">
          <div className="text-center mb-12">
            <span className="text-amber-700 uppercase tracking-widest text-xs font-bold trajan-pro">The Conversion of Concern into Creation</span>
            <h2 className="trajan-pro text-3xl md:text-5xl font-black mt-2 text-gray-900">
              3. Africa’s Call to Action
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 manrope text-[1.1rem] text-gray-800 leading-relaxed">
              <p>
                Africa does not lack people who care. What we lack is the <strong>conversion of concern into creation</strong>.
              </p>
              <p>
                We have become remarkably good at identifying what is wrong. We can describe corruption, unemployment, poor infrastructure, weak institutions, dependence, inequality and the countless ways our societies fail ordinary people. Yet identifying a problem is only the beginning of responsibility.
              </p>
              <p className="font-semibold text-gray-950">
                The harder question is what we intend to create in its place. Africa's Call to Action is an invitation to move from commentary to construction.
              </p>
              <ul className="space-y-3 pl-4 border-l-2 border-amber-600 italic text-gray-700">
                <li>• If education is failing, what should education become?</li>
                <li>• If our cities are struggling, what should an African city designed around African human beings actually look like?</li>
                <li>• If our young people are leaving because they cannot see a future here, what would we have to build for staying to become an attractive choice?</li>
                <li>• If we believe African products can compete with the best in the world, where are the products?</li>
              </ul>
              <p>
                These questions are uncomfortable because they return responsibility to us. They remind us that the future is not something waiting somewhere ahead of Africa. It is being produced every day by the decisions, inventions, businesses, institutions, stories and ideas that Africans choose to create.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded overflow-hidden shadow-2xl">
                <img src="/assets/imgs/mission/action.png" alt="Africa Call to Action" className="w-full" />
              </div>
              <div className="bg-gray-100 p-6 rounded border-t-2 border-gray-900">
                <p className="manrope text-sm font-medium text-gray-800">
                  You do not have to begin by changing a continent. Begin with a problem close enough to touch. Understand it deeply. Find its cause. Imagine what should exist instead. Build something useful. Improve it. Teach someone else. Let another person build on what you have made.
                </p>
                <p className="trajan-pro text-amber-800 font-bold text-xs uppercase mt-4">
                  This is how civilizations move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Declaration of Purpose (PDF Section 4) */}
      <section id="purpose" className="bg-[#101010] text-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-amber-400 uppercase tracking-widest text-xs font-bold trajan-pro">The Foundation</span>
          <h2 className="trajan-pro text-3xl md:text-4xl font-bold">
            4. Africa’s Return Declaration of Purpose
          </h2>
          <p className="manrope text-lg md:text-xl text-gray-300 leading-relaxed">
            Africa's Return was born from a simple but unsettling thought: <br />
            <span className="text-amber-300 font-semibold">&ldquo;What if the Africa we have been taught to accept is not the full expression of what Africa was created to become?&rdquo;</span>
          </p>
          <p className="manrope text-base text-gray-400">
            That question changes the conversation.
          </p>
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="trajan-pro text-xl text-amber-300 mb-4">Our Purpose</h3>
            <p className="manrope text-gray-200 leading-relaxed">
              Our purpose is to help Africans return to the deepest source of their creative identity. <br /><br />
              It is a return to originality. A return to the discipline of understanding causes rather than endlessly treating symptoms and to the confidence to ask questions for which there may be no existing African answer and then build the answer.
            </p>
          </div>
          <p className="manrope text-sm text-gray-400 italic">
            Africa's Return exists to nurture that consciousness through ideas, conversations, education, storytelling, community and creation.
          </p>
        </div>
      </section>

      {/* School of Becoming Spotlight */}
      <section id="school" className="bg-gray-50 py-16 px-6 md:px-12 border-t">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img src="/assets/imgs/home/school_of_economies.jpg" alt="School of Becoming" className="rounded-lg shadow-xl w-full" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <span className="trajan-pro text-xs text-amber-700 tracking-widest uppercase font-bold">The Educational Anchor</span>
            <h2 className="trajan-pro text-2xl md:text-3xl font-black text-gray-900">
              The School of Becoming
            </h2>
            <p className="text-amber-800 text-sm font-semibold">Africa’s Return School of Economies</p>
            <p className="manrope text-gray-700 text-sm leading-relaxed">
              A permanent intellectual institution designed to train African leaders, thinkers, architects, and entrepreneurs in sovereign systems, civilizational governance, and economic independence.
            </p>
            <div className="pt-2">
              <Link to="/contact-us#support" className="trajan-pro nav-cta-blue rounded-xs text-xs inline-block">
                ENDOW / JOIN THE SCHOOL
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer color={true} />
    </div>
  );
}

// ----------------------------------------------------
// 5. THOUGHT LEADERSHIP PAGE (PDF SECTION 7: ARSENAL OF KNOWLEDGE)
// ----------------------------------------------------
function LeadershipPage() {
  return (
    <div className="min-h-screen text-(--primary-color) bg-white">
      <Navbar isDark={true} />
      <NavSm isDark={true} />

      <AppIntersection externalClass="bg-white/95 backdrop-blur-md sticky top-0 z-20 w-full border-b border-gray-100/80 text-center py-3.5 sm:py-4 px-4 shadow-xs">
        <h1 className="trajan-pro text-3xl md:text-4xl lg:text-[2.5rem] text-(--text-grey) font-[300]">
          The Arsenal of Knowledge
        </h1>
      </AppIntersection>

      <AppHeaderBg externalClass="bg-[url('/assets/imgs/leadership/awakenings.png')] text-start justify-start mt-8">
        <div className="w-full max-w-7xl mx-auto text-white px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 flex flex-col justify-center">
          <span className="trajan-pro text-[2rem] sm:text-[2.4rem] md:text-[3rem] leading-tight">
            These are awakenings, <br /> not mere <br className="md:hidden" /> conversations.
          </span>
          <span className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] mt-2 leading-relaxed">
            Every word is crafted to reveal, not to please, as I speak <br className="hidden sm:inline" /> to your soul.
          </span>
        </div>
      </AppHeaderBg>

      {/* PDF Section 7: Africa's Return Arsenal of Knowledge */}
      <section className="my-12 max-w-4xl mx-auto px-6 text-gray-800 manrope leading-relaxed">
        <div className="text-center space-y-4 mb-10">
          <span className="trajan-pro text-amber-700 text-xs tracking-widest uppercase font-bold">7. Africa's Return Arsenal of Knowledge</span>
          <h2 className="trajan-pro text-3xl font-black text-gray-900">
            More Than Inspiration: Sharpness of Mind
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every serious movement needs more than inspiration. It needs knowledge that can sharpen the mind long after the emotion of a moment has passed.
          </p>
        </div>

        <div className="space-y-6 text-justify md:text-start text-[1.1rem]">
          <p>
            The Arsenal of Knowledge is where we gather the deeper conversations behind Africa's Return: full-length videos, teachings, interviews, intellectual explorations and discussions that give you enough room to think rather than simply react.
          </p>
          <p className="font-semibold text-gray-950">
            This is not a library designed to tell you what to think. It is a place designed to make you think more deeply.
          </p>
          <p>
            You will find conversations about Africa, creation, consciousness, history, business, civilisation, leadership, technology, identity and the future we are capable of building. Some ideas may confirm what you already believe. Others may challenge it. Both can be useful if they make you examine your assumptions more honestly.
          </p>
          <p>
            Take your time here. Watch beyond the headline. Follow an argument to its roots. Return to a conversation when your understanding has changed. Share an idea that forces someone else to ask a better question because knowledge becomes powerful when it changes the quality of the questions we are able to ask.
          </p>
          <div className="bg-gray-100 p-8 rounded-lg text-center my-8 border-y-2 border-gray-900">
            <h3 className="trajan-pro text-xl font-bold mb-2">ENTER THE ARSENAL</h3>
            <p className="italic text-gray-700 mb-6">Watch deeply. Think freely. Create deliberately.</p>
            <a
              href="https://youtube.com/@luckyrerherha?si=BTtNAUEU46Uc5e0Z"
              target="_blank"
              rel="noreferrer"
              className="trajan-pro cta-blue text-sm uppercase inline-block rounded-xs"
            >
              ACCESS ALL ARCHIVED TALKS ON YOUTUBE
            </a>
          </div>
        </div>
      </section>

      <Footer color={true} />
    </div>
  );
}

// ----------------------------------------------------
// 6. LEGACY OF IMPACT (RJ BRAND & INVESTOR REMOVED, FOCUSED ON ZUMERA)
// ----------------------------------------------------
function LegacyPage() {
  return (
    <div className="min-h-screen text-(--primary-color) bg-white">
      <Navbar isDark={true} />
      <NavSm isDark={true} />

      {/* Responsive Section Header */}
      <div className="border-b border-gray-200/80 bg-white py-6 sm:py-8 md:py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="trajan-pro text-amber-700 text-[11px] sm:text-xs tracking-[0.25em] uppercase font-bold block mb-1.5">
            Physical Sovereignty
          </span>
          <h1 className="trajan-pro text-(--text-grey) text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Building Monuments to Resistance.
          </h1>
        </div>
      </div>

      {/* Main Architectural Showcase */}
      <section className="max-w-7xl mx-auto my-8 sm:my-12 md:my-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-start">
          {/* Column 1: Architectural Render & Brand Crest (Constrained & Responsive) */}
          <article className="w-full">
            <div className="w-full rounded-xl overflow-hidden shadow-xl border border-gray-200 group relative aspect-[4/3] sm:aspect-[16/10] md:h-[360px] lg:h-[400px]">
              <img
                src="/assets/imgs/rj-brand/BB1.jpg"
                alt="Zumera Landmark Architecture"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200/80 flex flex-row items-center justify-between gap-3">
              <img src="/assets/imgs/home/zumera_logo.png" alt="Zumera Logo" className="legacy-brand-logo h-auto object-contain brightness-0" />
              <p className="trajan-pro text-[10px] sm:text-xs text-gray-700 tracking-wider uppercase font-medium text-right">
                Property &bull; Heritage
              </p>
            </div>
          </article>

          {/* Column 2: Narrative & Philosophy */}
          <article className="w-full space-y-4 sm:space-y-5 text-gray-800 manrope text-sm sm:text-base leading-relaxed">
            <div className="border-b border-gray-200 pb-3 sm:pb-4">
              <span className="trajan-pro text-amber-700 text-xs tracking-widest uppercase font-bold block mb-1">
                Civilizational Infrastructure
              </span>
              <h2 className="trajan-pro text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Zumera Group
              </h2>
            </div>

            <p>
              Zumera is the heart of Africa’s new architectural age; a property development, management, and investment company shaping the continent’s skyline with grandeur and permanence.
            </p>
            <p>
              We are more than builders of structures. We are custodians of legacy, translating the dignity, ambition, and prestige of Africa into landmark real estate that endures through generations.
            </p>
            <p>
              From luxury residences to monumental commercial projects, every Zumera development stands as an emblem of vision, precision, and African pride. Our work is driven by a belief that property should not just appreciate in financial value, but in continental heritage.
            </p>

            {/* Mission & Vision Cards (Responsive 2-Column Horizontal System) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div className="bg-gray-50 p-3 sm:p-5 rounded-lg border-l-4 border-gray-900 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="trajan-pro text-[10px] sm:text-xs font-bold uppercase text-gray-900 block mb-1">Our Mission</span>
                  <p className="text-[11px] sm:text-sm text-gray-700 leading-snug sm:leading-relaxed">
                    We strive to offer the highest possible standard, the most innovative solution, and the best value to Nigerians, one community, one project at a time.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-3 sm:p-5 rounded-lg border-l-4 border-amber-600 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="trajan-pro text-[10px] sm:text-xs font-bold uppercase text-amber-800 block mb-1">Our Vision</span>
                  <p className="text-[11px] sm:text-sm text-gray-700 leading-snug sm:leading-relaxed">
                    To build an inspiring and sustainable future for African communities, starting with Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* 3 Pillars of Physical Sovereignty (Responsive 3-Column Horizontal System) */}
        <div className="mt-10 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <span className="trajan-pro text-amber-700 text-xs tracking-widest uppercase font-bold block mb-1.5">
              Foundations of Built Heritage
            </span>
            <h3 className="trajan-pro text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Pillars of Physical Sovereignty
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 xl:gap-6 items-stretch">
            <div className="p-4 sm:p-5 lg:p-7 bg-gray-50 rounded-xl border border-gray-200/80 hover:border-amber-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="trajan-pro text-base sm:text-xl lg:text-2xl text-amber-700 font-bold block mb-1 sm:mb-2">01</span>
                <h4 className="trajan-pro text-xs sm:text-base lg:text-lg font-bold text-gray-900 mb-1 leading-snug">Grandeur &amp; Permanence</h4>
                <p className="manrope text-[11px] sm:text-xs lg:text-sm text-gray-600 leading-relaxed">
                  Rejecting temporary solutions to construct enduring structures that anchor African pride for centuries to come.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 lg:p-7 bg-gray-50 rounded-xl border border-gray-200/80 hover:border-amber-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="trajan-pro text-base sm:text-xl lg:text-2xl text-amber-700 font-bold block mb-1 sm:mb-2">02</span>
                <h4 className="trajan-pro text-xs sm:text-base lg:text-lg font-bold text-gray-900 mb-1 leading-snug">Original African Truth</h4>
                <p className="manrope text-[11px] sm:text-xs lg:text-sm text-gray-600 leading-relaxed">
                  Spaces conceptualized from first principles, reflecting the deep aesthetic dignity and civilizational identity of our continent.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 lg:p-7 bg-gray-50 rounded-xl border border-gray-200/80 hover:border-amber-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="trajan-pro text-base sm:text-xl lg:text-2xl text-amber-700 font-bold block mb-1 sm:mb-2">03</span>
                <h4 className="trajan-pro text-xs sm:text-base lg:text-lg font-bold text-gray-900 mb-1 leading-snug">Generational Custodianship</h4>
                <p className="manrope text-[11px] sm:text-xs lg:text-sm text-gray-600 leading-relaxed">
                  Transforming property from mere commercial assets into monuments of communal resilience and economic sovereignty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer color={true} secondaryColor={true} />
    </div>
  );
}

// ----------------------------------------------------
// 7. ENGAGEMENT PAGE (PDF SECTION 8: REMOVED "NOT DECORATION")
// ----------------------------------------------------
function EngagementPage() {
  return (
    <div className="min-h-screen text-(--primary-color) bg-white">
      <Navbar isDark={true} />
      <NavSm isDark={true} />

      <AppIntersection externalClass="bg-white/95 backdrop-blur-md sticky top-0 z-20 w-full border-b border-gray-100/80 text-center py-3.5 sm:py-4 px-4 shadow-xs">
        <h1 className="trajan-pro text-center text-3xl md:text-4xl lg:text-[2.5rem] text-(--text-grey) font-[300]">
          Spreading the Fire
        </h1>
      </AppIntersection>

      <div className="relative w-full min-h-[80vh]">
        <img src="/assets/imgs/engagement/fire.jpg" alt="Background" className="w-full h-full object-cover hidden md:block" />
        <img src="/assets/imgs/engagement/fire-1.jpg" alt="Background" className="w-full h-full object-cover md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white w-full px-4">
          <h1 className="trajan-pro text-center text-[2rem] sm:text-[2.5rem] md:text-[3rem] text-shadow-lg">
            SPREADING THE FIRE
          </h1>
        </div>
      </div>

      <section className="bg-(--secondary-color) py-8 my-12 text-white">
        <article className="max-w-5xl mx-auto flex justify-center md:justify-between items-center">
          <div className="space-y-8 text-[1.1rem] md:w-[50%] p-4">
            <p>
              I am not a keynote speaker. I am the echo of a <br /> thousand ancestors.
            </p>
            <p>
              I do not deliver talks. I deliver identity in its raw, <br /> unshaken, unrehearsed form.
            </p>
            <p>
              Every platform I touch becomes sacred ground. <br /> A place for truth.
            </p>
            <p>
              If your stage is ready for awakening, then let us <br /> begin.
            </p>
            <div className="md:hidden justify-center max-w-sm md:w-[50%]">
              <div className="w-full md:w-[75%]">
                <img src="/assets/imgs/engagement/keynote.jpg" alt="" className="w-full" />
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link to="/contact-us" className="trajan-pro cta-grey text-[1.1rem] self-center">
                BOOK NOW
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center w-[50%]">
            <div className="w-[100%]">
              <img src="/assets/imgs/engagement/keynote.jpg" alt="" className="w-full" />
            </div>
          </div>
        </article>
      </section>

      <section>
        <div className="max-w-md md:max-w-7xl mx-auto py-12 mb-[5rem] flex flex-col justify-center items-center">
          <div className="pb-10">
            <h2 className="trajan-pro text-center text-[1.5rem] md:text-[1.8rem] lg:text-[2.3rem] text-(--black)">
              &ldquo; Many have tried to refine my voice. To filter, <br className="hidden md:block" /> soften, brand it. I said no. Africa has been <br className="hidden md:block" /> filtered enough. For me, every microphone is <br className="hidden md:block" /> a megaphone for truth and every interview is <br className="hidden md:block" /> a reckoning. &rdquo;
            </h2>
          </div>
          <div className="text-center w-[75%] md:w-[35%] border-top-black text-(--black) pt-2">
            <h2 className="rogan-bold text-[1.5rem]">LUCKY R. ERHERHA</h2>
            <p className="text-[1.1rem]">CEO/Founder ZUMERA</p>
          </div>
        </div>
      </section>

      <section>
        <img src="/assets/imgs/engagement/speech.jpg" alt="" className="w-full" />
      </section>

      <section className="py-8 my-12">
        <article className="w-full max-w-7xl mx-auto px-4">
          <div className="space-y-2 text-[1.1rem] text-center text-(--black)">
            <h2 className="rogan-bold text-[1.6rem] uppercase">
              You want me on your platform?
            </h2>
            <p className="text-[1.1rem] md:text-[1.7rem] md:font-light mb-10">
              Then do not ask me to &ldquo;tone it down.&rdquo; If your platform is <br className="hidden md:block" /> not ready for truth, do not bother.
            </p>
            <Link to="/contact-us" className="trajan-pro cta-blue text-[1.1rem]">
              BOOKING FORM
            </Link>
          </div>
        </article>
      </section>

      <Footer color={true} />
    </div>
  );
}

// ----------------------------------------------------
// 8. MOVEMENT PAGE (PDF SECTIONS 9 & 10)
// ----------------------------------------------------
function MovementPage() {
  return (
    <div className="min-h-screen text-(--primary-color) bg-white">
      <Navbar isDark={true} />
      <NavSm isDark={true} />

      <div className="sentinel" />

      <AppIntersection externalClass="bg-white/95 backdrop-blur-md sticky top-0 z-20 w-full border-b border-gray-100/80 text-center py-3.5 sm:py-4 px-4 shadow-xs">
        <h1 className="w-full max-w-7xl mx-auto px-4 trajan-pro text-(--text-grey) text-3xl md:text-4xl text-center md:text-left">
          The Growing Kingdom.
        </h1>
      </AppIntersection>

      {/* PDF Section 9: Community of Custodians */}
      <section>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center py-12 px-6 gap-8">
          <div className="w-full md:w-[50%] text-(--text-grey) space-y-6 text-center md:text-left">
            <span className="trajan-pro text-xs text-amber-800 tracking-widest uppercase font-bold">9. The Growing Kingdom</span>
            <h2 className="trajan-pro text-3xl font-black">
              COMMUNITY OF <br /> CUSTODIANS
            </h2>
            <div className="md:hidden max-w-sm mx-auto">
              <img src="/assets/imgs/movement/custodians_new.jpg" alt="custodian images" className="w-full rounded" />
            </div>
            <div className="leading-relaxed space-y-4 text-[1.1rem] manrope">
              <p>
                The Growing Kingdom is the community of people who have decided that Africa's future is not somebody else's responsibility. They may come from different countries, professions, generations and backgrounds, but they share a willingness to think deeply, create meaningfully and contribute to something beyond themselves.
              </p>
              <p className="font-semibold text-gray-950">
                We call them Custodians because the future is something we have been entrusted with, not something we own.
              </p>
              <p>
                A custodian understands that what we build today becomes the environment another generation inherits. The businesses we establish, the knowledge we preserve, the children we teach, the technologies we develop, the institutions we strengthen and even the questions we choose to ask all become part of the world that comes after us.
              </p>
              <p>
                This community is for thinkers, builders, entrepreneurs, creatives, educators, students, professionals, leaders and ordinary people who believe that extraordinary change often begins with someone taking an ordinary responsibility seriously.
              </p>
              <p className="italic text-gray-900">
                You do not need to have everything figured out before you belong here. You only need the willingness to keep learning, to question honestly, to build where you can and to remember that your contribution does not have to be enormous to matter.
              </p>
              <p className="font-bold trajan-pro text-amber-900 pt-2">
                Every civilisation is carried by people who decide to care for what they did not personally create and improve what they did not personally inherit. <br />
                Become a Custodian. Help carry the future.
              </p>
            </div>
          </div>
          <div className="w-[50%] hidden md:block">
            <img src="/assets/imgs/movement/custodians_new.jpg" alt="Community of Custodians" className="w-full rounded shadow-xl" />
          </div>
        </div>
      </section>

      {/* PDF Section 10: Join the Resistance Now */}
      <section className="bg-(--grey) mb-8 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8">
          <div className="w-[50%] hidden md:block">
            <img src="/assets/imgs/movement/movement.jpg" alt="Join the Resistance" className="w-full rounded shadow-xl" />
          </div>
          <div className="w-full md:w-[50%] text-(--text-grey) space-y-6 text-center md:text-left">
            <span className="trajan-pro text-xs text-amber-800 tracking-widest uppercase font-bold">10. The Awakening</span>
            <h2 className="trajan-pro text-3xl font-black">
              Join the Resistance now
            </h2>
            <div className="md:hidden max-w-sm mx-auto">
              <img src="/assets/imgs/movement/movement.jpg" alt="Movement" className="w-full rounded" />
            </div>
            <div className="leading-relaxed space-y-4 text-[1.1rem] manrope">
              <p>
                The resistance begins much closer to home than most people think. It begins in the mind - the moment you stop accepting limitation as an explanation for who you are and stop waiting for other people to demonstrate what is possible before you believe you can do it too.
              </p>
              <p className="font-bold text-gray-950">
                This is not a resistance against another race, another country or another people. It is a resistance against the ideas that keep Africa small in its own imagination.
              </p>
              <p>
                Join us to learn, to question and to build. Join us because you are unwilling to leave the next generation with only the world we inherited.
              </p>
              <p className="text-lg font-bold text-amber-900">
                The return happens every time an African mind chooses possibility over limitation and creation over dependence.
              </p>
              <p className="trajan-pro text-2xl font-black text-gray-950 pt-2">
                If you are that African, come in.
              </p>
              <div className="pt-4">
                <Link to="/contact-us#support" className="trajan-pro nav-cta-blue rounded-xs inline-block">
                  ENTER THE KINGDOM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer color={true} />
    </div>
  );
}

// ----------------------------------------------------
// 9. BOOK LRE & SUPPORT SECTION WITH PAYMENT GATEWAY
// ----------------------------------------------------
function ContactPage() {
  const [activeTab, setActiveTab] = useState('book'); // 'book' or 'support'
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#support') {
      setActiveTab('support');
    }
  }, [location.hash]);

  useEffect(() => {
    if (location.hash === '#support' && activeTab === 'support') {
      requestAnimationFrame(() => {
        document.getElementById('support')?.scrollIntoView({ block: 'start' });
      });
    }
  }, [activeTab, location.hash]);

  // Booking Form State
  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    email: '',
    countryCode: 'NG',
    phone: '',
    eventType: '',
    message: '',
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Support request state. Payment processing is not available on this site.
  const [currency, setCurrency] = useState('USD');
  const [selectedTier, setSelectedTier] = useState(250);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [amountError, setAmountError] = useState('');
  const [supportRequestStatus, setSupportRequestStatus] = useState('');
  const [certificateData, setCertificateData] = useState(null);
  const supportFormRef = useRef(null);

  const eventTypes = [
    'A Keynote Address',
    'A Corporate Event',
    'An Academic or Policy Dialogue',
    'A Brand & Product Launch',
    'A Political & Socioeconomic Gathering',
    'A Private Conversation or Fireside Dialogue',
  ];

  const currencyRates = {
    USD: { symbol: '$', rate: 1, tiers: [50, 250, 1000, 5000] },
    NGN: { symbol: '₦', rate: 1500, tiers: [75000, 375000, 1500000, 7500000] },
    GBP: { symbol: '£', rate: 0.78, tiers: [40, 200, 800, 4000] },
    EUR: { symbol: '€', rate: 0.92, tiers: [45, 230, 920, 4600] },
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
    const bodyText = `
Booking with LRE (Lucky R. Erherha)
Name: ${bookingData.firstName} ${bookingData.lastName}
Company: ${bookingData.company}
Country: ${bookingData.country}
Email: ${bookingData.email}
Phone: ${bookingData.countryCode} ${bookingData.phone}
Booking For: ${bookingData.eventType}
Message:
${bookingData.message}
    `.trim();

    const subject = encodeURIComponent('Booking Inquiry with LRE');
    window.location.href = `mailto:LRE@luckyerherha.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  const selectedAmount = customAmount === '' ? selectedTier : Number(customAmount);

  const handleSupportRequest = (e) => {
    e.preventDefault();
    if (!Number.isFinite(selectedAmount) || selectedAmount <= 0) {
      setAmountError('Enter a custom amount greater than zero.');
      return;
    }

    const subject = encodeURIComponent('Support instructions request');
    const body = encodeURIComponent(
      `Support instructions request (not a payment)\nName: ${donorName}\nEmail: ${donorEmail}\nIntended amount: ${currencyRates[currency].symbol}${selectedAmount.toLocaleString()} ${currency}`,
    );
    window.location.href = `mailto:LRE@luckyerherha.com?subject=${subject}&body=${body}`;
    setSupportRequestStatus('Your email app may open a draft. The request is not sent until you review and send it. No payment has been made.');
  };

  const handleCertificatePreview = () => {
    if (!supportFormRef.current?.reportValidity()) return;
    if (!Number.isFinite(selectedAmount) || selectedAmount <= 0) {
      setAmountError('Enter a custom amount greater than zero.');
      return;
    }
    setCertificateData({
      name: donorName,
      amount: selectedAmount,
      currency,
      symbol: currencyRates[currency].symbol,
    });
  };

  return (
    <div className="min-h-screen text-(--primary-color) bg-white">
      <Navbar isDark={true} />
      <NavSm isDark={true} />

      <AppIntersection externalClass="bg-white/95 backdrop-blur-md sticky top-0 z-20 w-full border-b border-gray-100/80 text-center py-3.5 sm:py-4 px-4 shadow-xs">
        <h1 className="trajan-pro text-3xl md:text-4xl text-(--text-grey)">
          The Gates of the Kingdom.
        </h1>
      </AppIntersection>

      {/* Mode Switcher */}
      <div className="max-w-md mx-auto my-6 px-4">
        <div className="flex bg-gray-100 p-1.5 rounded-lg border border-gray-300">
          <button
            type="button"
            onClick={() => setActiveTab('book')}
            className={`flex-1 py-2.5 text-xs md:text-sm trajan-pro font-bold rounded transition-all ${
              activeTab === 'book'
                ? 'bg-black text-white shadow'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            BOOK LRE FOR ENGAGEMENTS
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('support')}
            className={`flex-1 py-2.5 text-xs md:text-sm trajan-pro font-bold rounded transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'support'
                ? 'bg-amber-600 text-white shadow'
                : 'text-gray-600 hover:text-amber-700'
            }`}
          >
            ★ SUPPORT AFRICA’S RETURN
          </button>
        </div>
      </div>

      {/* TAB 1: BOOKING FORM */}
      {activeTab === 'book' && (
        <div className="min-h-[100vh] flex items-start justify-start py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto justify-between">
            <div className="lg:w-1/2 p-4 sm:p-8 lg:p-12 flex flex-col md:items-start text-justify md:text-left mb-10">
              <div className="w-full max-w-md mx-auto">
                <h1 className="text-3xl lg:text-4xl font-light text-gray-900 manrope md:trajan-pro leading-tight mb-8 start-text">
                  Events &amp; Engagements <br className="hidden md:block" /> with LRE <br className="hidden md:block" /> (Lucky R. Erherha).
                </h1>
                <div className="space-y-4 text-gray-700 text-justify md:text-left">
                  <p>
                    LRE is not a speaker. He is an awakening. <br /> Every appearance, whether in a private boardroom or a grand auditorium, leaves audiences with conviction, cultural pride, intellectual clarity and restoration to their fullest potential&nbsp;as&nbsp;Africans.
                  </p>
                  <div className="leading-6 space-y-6">
                    <p>Book LRE for events of high importance and seriousness.</p>
                    <ul className="list-disc list-inside space-y-4">
                      <li>
                        <span className="font-black uppercase trajan-pro">Keynote Addresses:</span>
                        {' '}Leadership, Nation-Building, African Identity, The Future of Legacy. <br />
                      </li>
                      <li>
                        <span className="font-black uppercase trajan-pro">Corporate Events:</span>
                        {' '}Executive retreats, investor conferences, brand vision summits. <br />
                      </li>
                      <li>
                        <span className="font-black uppercase trajan-pro">Academic &amp; Policy Dialogues:</span>
                        {' '}Higher education forums, cultural symposia, continental think tanks. <br />
                      </li>
                      <li>
                        <span className="font-black uppercase trajan-pro">Brand &amp; Product Launches:</span>
                        {' '}Where heritage, storytelling, and strategy intertwine. <br />
                      </li>
                      <li>
                        <span className="font-black uppercase trajan-pro">Political &amp; Socioeconomic Gatherings:</span>
                        {' '}Speeches that restore direction, dignity, and destiny. <br />
                      </li>
                      <li>
                        <span className="font-black uppercase trajan-pro">Private Conversations &amp; Fireside Dialogues:</span>
                        {' '}Intimate, unfiltered discussions that reshape perspectives, for private individuals and organizations. <br />
                      </li>
                    </ul>
                    <p className="mt-6">
                      Every engagement with LRE is a masterclass in clarity and command, blending philosophy, leadership, and continental purpose in a way few voices can. Book LRE for events that deserve gravitas.
                    </p>
                    <p>
                      <a href="mailto:LRE@luckyerherha.com" className="hover:underline font-semibold">LRE@luckyerherha.com</a>
                      {' '}·{' '}
                      <a href="tel:+2347045068663" className="hover:underline font-semibold">+2347045068663</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-1/2 bg-(--footer-black) py-10 md:py-[6rem] px-5 sm:px-8 md:px-[3rem] h-full max-w-[42rem] rounded-lg">
              <form onSubmit={handleBookingSubmit} className="space-y-8 w-full h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      First name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="First name"
                      value={bookingData.firstName}
                      onChange={(e) => setBookingData({ ...bookingData, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 contact-form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                      Last name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Last name"
                      value={bookingData.lastName}
                      onChange={(e) => setBookingData({ ...bookingData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 contact-form-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="The name of your company"
                      value={bookingData.company}
                      onChange={(e) => setBookingData({ ...bookingData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 contact-form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-white mb-2">
                      Country <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      placeholder="Where are you booking from?"
                      value={bookingData.country}
                      onChange={(e) => setBookingData({ ...bookingData, country: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 contact-form-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    value={bookingData.email}
                    onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 contact-form-input"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone number <span className="text-red-400">*</span>
                  </label>
                  <div className="flex">
                    <div className="relative">
                      <select
                        name="countryCode"
                        value={bookingData.countryCode}
                        onChange={(e) => setBookingData({ ...bookingData, countryCode: e.target.value })}
                        className="appearance-none bg-white border border-gray-300 rounded-l-md px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 pr-8 contact-form-input"
                      >
                        <option value="NG">NG</option>
                        <option value="US">US</option>
                        <option value="UK">UK</option>
                        <option value="CA">CA</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+234 802 677 3682"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      className="flex-1 px-4 py-3 bg-white border border-l-0 border-gray-300 rounded-r-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 contact-form-input contact-phone-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    What would you like to Book LRE for?
                  </label>
                  {eventTypes.map((type) => (
                    <div key={type} className="flex items-center mb-1">
                      <input
                        type="radio"
                        name="eventType"
                        id={type}
                        required
                        value={type}
                        checked={bookingData.eventType === type}
                        onChange={() => setBookingData({ ...bookingData, eventType: type })}
                        className="mr-2 focus:ring-2 focus:ring-amber-400 text-amber-500 accent-amber-500"
                      />
                      <label htmlFor={type} className="text-white text-sm">
                        {type}
                      </label>
                    </div>
                  ))}
                  {!bookingData.eventType && bookingSubmitted && (
                    <div className="text-red-500 text-sm mt-1">Please select an event type.</div>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Share more details <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    placeholder="Leave us a message..."
                    value={bookingData.message}
                    onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 resize-none contact-form-textarea"
                  />
                </div>

                <div className="pt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                  <p className="text-gray-300 text-xs max-w-xs">
                    This space is for platforms with courage, partners with backbone, and audiences unafraid to face strength and truth.
                  </p>
                  <button
                    type="submit"
                    className="bg-gray-200 hover:bg-white text-gray-800 font-bold py-3 px-8 rounded uppercase tracking-wide transition-all duration-200 min-w-[120px] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
                  >
                    SEND BOOKING
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SUPPORT REQUESTS */}
      {activeTab === 'support' && (
        <section id="support" className="support-section">
          <div className="support-heading">
            <span className="trajan-pro">Patronage &amp; Endowments</span>
            <h2 className="trajan-pro">
              Support Africa’s Return
            </h2>
            <p className="manrope">
              Every civilisation is carried by people who decide to care for what they did not personally create. Your patronage funds sovereign research, literature distribution, the School of Becoming, and continental awakenings.
            </p>
          </div>

          <div className="support-panel">
            <div className="support-notice" role="status">
              <strong>Support requests only</strong>
              <span>No payment is collected on this website. Card, digital wallet, and bank transfer options are not currently available here.</span>
            </div>

            <form id="support-request-form" ref={supportFormRef} onSubmit={handleSupportRequest} className="support-form">
              <fieldset className="support-group">
                <legend>Choose an intended amount</legend>
                <div className="support-currency-row">
                  <span className="support-field-label">Currency</span>
                  <div className="support-currency-options" role="group" aria-label="Currency">
                    {Object.keys(currencyRates).map((curr) => (
                      <button
                        key={curr}
                        type="button"
                        aria-pressed={currency === curr}
                        onClick={() => {
                          setCurrency(curr);
                          setSelectedTier(currencyRates[curr].tiers[1]);
                          setCustomAmount('');
                          setAmountError('');
                        }}
                        className={`support-currency ${currency === curr ? 'is-selected' : ''}`}
                      >
                        {curr} <span>{currencyRates[curr].symbol}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="support-tier-grid">
                  {currencyRates[currency].tiers.map((tier, idx) => {
                    const tierTitles = ['Custodian Patron', 'Sovereign Builder', 'Fellowship Endower', 'Monumental Founder'];
                    const tierDescs = [
                      'Funds literature & manifesto distribution.',
                      'Expands Arsenal of Knowledge productions.',
                      'Endows School of Becoming fellowships.',
                      'Accelerates permanent research infrastructure.',
                    ];
                    const isSelected = selectedTier === tier && !customAmount;
                    return (
                      <button
                        key={tier}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => {
                          setSelectedTier(tier);
                          setCustomAmount('');
                          setAmountError('');
                        }}
                        className={`support-tier ${isSelected ? 'is-selected' : ''}`}
                      >
                        <span className="support-tier-name">{tierTitles[idx]}</span>
                        <span className="support-tier-amount">{currencyRates[currency].symbol}{tier.toLocaleString()}</span>
                        <span className="support-tier-description">{tierDescs[idx]}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="support-custom-amount">
                  <label htmlFor="custom-support-amount" className="support-field-label">
                    Or enter a custom amount ({currencyRates[currency].symbol})
                  </label>
                  <input
                    id="custom-support-amount"
                    type="number"
                    min="0.01"
                    step="0.01"
                    inputMode="decimal"
                    placeholder="Custom amount"
                    value={customAmount}
                    aria-invalid={Boolean(amountError)}
                    aria-describedby={amountError ? 'support-amount-error' : undefined}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmountError(e.target.value && Number(e.target.value) <= 0 ? 'Enter an amount greater than zero.' : '');
                    }}
                  />
                  {amountError && <span className="support-error" id="support-amount-error" role="alert">{amountError}</span>}
                </div>
              </fieldset>

              <fieldset className="support-group support-contact-group">
                <legend>Request confirmed support instructions</legend>
                <p className="support-group-copy">Share your contact details and intended amount. This opens an email draft to the Secretariat; it does not make a payment or confirm a contribution.</p>
                <div className="support-contact-fields">
                  <div>
                    <label htmlFor="support-donor-name" className="support-field-label">Name</label>
                    <input id="support-donor-name" type="text" autoComplete="name" required value={donorName} onChange={(e) => setDonorName(e.target.value)} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="support-donor-email" className="support-field-label">Email address</label>
                    <input id="support-donor-email" type="email" autoComplete="email" required value={donorEmail} onChange={(e) => setDonorEmail(e.target.value)} placeholder="you@example.com" />
                  </div>
                </div>
              </fieldset>

              <div className="support-methods" aria-labelledby="support-methods-title">
                <h3 id="support-methods-title">Payment methods</h3>
                <p>Not available through this website</p>
                <div className="support-method-list">
                  <span>Card checkout <b>Unavailable</b></span>
                  <span>Digital wallet <b>Unavailable</b></span>
                  <span>Bank transfer <b>Instructions by request only</b></span>
                </div>
                <p className="support-method-note">No card details are requested or stored. Bank details are not published here; confirm official instructions directly with the Secretariat before sending funds.</p>
              </div>

              <div className="support-actions">
                <button type="submit" className="support-request-button">Request support instructions</button>
                <button type="button" onClick={handleCertificatePreview} className="support-preview-button">Preview draft certificate</button>
              </div>
              {supportRequestStatus && <p className="support-request-status" role="status">{supportRequestStatus}</p>}
            </form>
          </div>
        </section>
      )}

      {/* Certificate draft preview; it is not evidence of a payment. */}
      {certificateData && (
        <div className="modal-overlay" onClick={() => setCertificateData(null)}>
          <div className="certificate-frame p-6 sm:p-8 md:p-12 max-w-2xl w-full text-center text-white rounded-lg relative" role="dialog" aria-modal="true" aria-labelledby="certificate-title" onClick={(e) => e.stopPropagation()}>
            <div className="absolute top-4 right-4">
              <button
                type="button"
                aria-label="Close draft preview"
                onClick={() => setCertificateData(null)}
                className="text-gray-400 hover:text-white text-2xl font-mono"
              >
                &times;
              </button>
            </div>
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-amber-400 rounded-full flex items-center justify-center text-amber-400 text-2xl">
              ♕
            </div>
            <span className="trajan-pro text-amber-300 text-xs tracking-widest uppercase block mb-1">
              DRAFT PREVIEW &bull; NOT PROOF OF PAYMENT
            </span>
            <h2 id="certificate-title" className="trajan-pro text-2xl md:text-3xl font-black gold-gradient-text mb-4">
              AFRICA’S RETURN
            </h2>
            <p className="manrope text-xs text-gray-300 mb-6 italic">
              &ldquo;The return happens every time an African mind chooses possibility over limitation and creation over dependence.&rdquo;
            </p>
            <div className="border-y border-amber-500/30 py-6 my-6 space-y-2">
              <p className="text-xs uppercase text-gray-400 tracking-wider">Draft prepared for</p>
              <h3 className="trajan-pro text-xl md:text-2xl font-bold text-white">{certificateData.name}</h3>
              <p className="text-amber-400 font-mono text-sm pt-2">
                Intended amount: {certificateData.symbol}{certificateData.amount.toLocaleString()} {certificateData.currency}
              </p>
            </div>
            <p className="text-xs text-gray-400 manrope max-w-md mx-auto mb-6">
              This is only a visual draft. No payment was collected or verified, and this preview is not a receipt or proof of contribution.
            </p>
            <button
              type="button"
              onClick={() => setCertificateData(null)}
              className="trajan-pro nav-cta-blue rounded-xs text-xs px-6 py-2"
            >
              COMPLETE &amp; CLOSE
            </button>
          </div>
        </div>
      )}

      <Footer color={true} />
    </div>
  );
}

// ----------------------------------------------------
// 10. TERMS AND CONDITIONS PAGE
// ----------------------------------------------------
function TermsPage() {
  return (
    <div className="min-h-screen text-(--primary-color) bg-white">
      <Navbar isDark={true} />
      <NavSm isDark={true} />

      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 terms-header">
        <h1>Terms and Conditions</h1>
        <p className="terms-muted">
          Please read these terms carefully. By accessing or using this website or other digital platforms, you agree to be bound by the terms and conditions described herein and all terms incorporated by reference.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 terms-main">
        <section aria-labelledby="overview">
          <h2 id="overview">Overview</h2>
          <p>
            If you do not agree to all of these terms, do not use this website or other digital platforms of the site’s owner.
          </p>
          <p>
            This website is a personal platform through which I, <strong>Romeo Jackson Lucky Erherha</strong>, share my views, experiences, and occasional topics related to business, culture, and life.
          </p>
          <p>
            By accessing or using this site, you agree that you are doing so voluntarily and are either of legal adult age in your jurisdiction (generally 18 years or older, though this may vary) or have obtained the appropriate parental or legal guardian consent to engage with the content herein. This website is not intended for individuals under the age of 18, and we do not knowingly collect personal information from minors.
          </p>
          <p>
            Your use of this site does not create any advisory, fiduciary, or business relationship between us.
          </p>
        </section>

        <section aria-labelledby="opinions">
          <h2 id="opinions">Opinions and Third‑Party Content</h2>
          <p>
            All opinions expressed are solely mine unless clearly stated otherwise. They do not represent the views of Zumera Group Limited, its partners, affiliates, or any businesses referenced.
          </p>
          <p>
            I am not responsible for the views of guest contributors, third‑party advertisers, commenters, or any external content linked or promoted here. Inclusion of any such materials does not imply endorsement or verification. Visitors are advised to independently evaluate any advice, claims, or products mentioned.
          </p>
        </section>

        <section aria-labelledby="intellectual-property">
          <h2 id="intellectual-property">Intellectual Property</h2>
          <p>
            All content on this website, including text, images, videos, and other materials, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify any content without prior written consent. Usage is limited to personal, informational, and non‑commercial purposes.
          </p>
        </section>

        <section aria-labelledby="governing-law">
          <h2 id="governing-law">Governing Law &amp; Updates</h2>
          <p>
            This site operates under Nigerian law and is intended to remain compliant with applicable international standards concerning privacy, intellectual property, and digital expression. I reserve the right to update or modify these terms without prior notice. By continuing to access the website, you acknowledge that you do so at your own discretion and agree that I am not liable for any loss, misunderstanding, or action taken based on content found here.
          </p>
        </section>

        <section aria-labelledby="disclaimers">
          <h2 id="disclaimers">Disclaimers</h2>
          <p>
            The content provided on this website is for informational purposes only and does not constitute business, moral, or legal advice. While I strive to keep information up to date, I do not guarantee the accuracy, reliability, or completeness of any content.
          </p>
        </section>

        <section aria-labelledby="liability">
          <h2 id="liability">Limitation of Liability</h2>
          <p>
            I am not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website or its materials.
          </p>
        </section>

        <section aria-labelledby="privacy">
          <h2 id="privacy">Privacy Policy</h2>
          <p>
            I respect your privacy and remain committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data in compliance with local and international privacy laws, including the Nigerian Data Protection Regulation (NDPR) and the General Data Protection Regulation (GDPR).
          </p>

          <h3 id="collect">Information We May Collect</h3>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and other details you provide via contact forms or newsletter sign‑ups.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, and website usage data collected through cookies and analytics tools.
            </li>
          </ul>

          <h3 id="use">How We Use Your Information</h3>
          <ul>
            <li>To respond to inquiries and provide requested services.</li>
            <li>To send updates, newsletters, or promotional materials (with your consent).</li>
            <li>To improve the functionality and user experience of our website.</li>
          </ul>

          <h3 id="sharing">Sharing of Information</h3>
          <p>We do not sell, rent, or share your personal information with third parties except:</p>
          <ul>
            <li>When required by law.</li>
            <li>With trusted service providers assisting in website operations (e.g., hosting and analytics).</li>
            <li>When necessary to protect our rights or comply with legal obligations.</li>
          </ul>

          <h3 id="security">Data Security</h3>
          <p>
            We implement appropriate technical and organizational measures to safeguard your personal information against unauthorized access, alteration, or disclosure.
          </p>

          <h3 id="rights">Your Rights</h3>
          <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
          <ul>
            <li>The right to access, update, or delete your personal information.</li>
            <li>The right to withdraw consent for data processing.</li>
            <li>The right to lodge a complaint with a data protection authority if you believe your rights have been violated.</li>
          </ul>

          <h3 id="cookies">Cookies</h3>
          <p>
            This website uses cookies to enhance your browsing experience. By continuing to use the site, you consent to the use of cookies. You can manage your cookie preferences through your browser settings.
          </p>
        </section>
      </main>

      <Footer color={true} />
    </div>
  );
}

// ----------------------------------------------------
// MAIN APP ROUTER
// ----------------------------------------------------
export default function App() {
  return (
    <>
      <ScrollToTopOnRoute />
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/onboard" element={<OnboardingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Africa's Return route with /mission&vision redirect */}
        <Route path="/africas-return" element={<AfricasReturnPage />} />
        <Route path="/mission&vision" element={<Navigate to="/africas-return" replace />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/legacy-of-impact" element={<LegacyPage />} />
        <Route path="/legacy-of-impact/:tab" element={<LegacyPage />} />
        <Route path="/Rj-brand" element={<Navigate to="/legacy-of-impact" replace />} />
        <Route path="/engagement" element={<EngagementPage />} />
        <Route path="/movement" element={<MovementPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/support" element={<Navigate to="/contact-us#support" replace />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

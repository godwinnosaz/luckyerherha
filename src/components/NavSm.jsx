import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import FullLogo from './FullLogo';
import HamburgerMenu from './HamburgerMenu';

export default function NavSm({ isDark = false }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(prev => !prev);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const logoSrc = isDark
    ? 'assets/imgs/icons/logos/full_logo_black.png'
    : 'assets/imgs/icons/logos/full_logo_white.png';

  const menuBgClass = isDark ? 'bg-(--grey-bg)' : 'bg-(--nav-black-bg)';

  return (
    <>
      <style>{`
        .active-link {
          text-decoration: underline;
          text-underline-offset: 5px;
        }
        .menu-hidden {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-12px);
          transition: all .3s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }
        .menu-visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          transition: all .35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .menu-visible a {
          animation: fadeInLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .menu-visible a:nth-child(1) { animation-delay: 0.04s; }
        .menu-visible a:nth-child(2) { animation-delay: 0.08s; }
        .menu-visible a:nth-child(3) { animation-delay: 0.12s; }
        .menu-visible a:nth-child(4) { animation-delay: 0.16s; }
        .menu-visible a:nth-child(5) { animation-delay: 0.20s; }
        .menu-visible a:nth-child(6) { animation-delay: 0.24s; }
        .menu-visible a:nth-child(7) { animation-delay: 0.28s; }
        .menu-visible a:nth-child(8) { animation-delay: 0.32s; }
        .nav-cta-blue {
          background-color: var(--secondary-color);
          padding: .8rem;
          color: var(--accent);
          font-weight: 700;
          font-size: .8rem;
        }
      `}</style>
      <nav className={`w-full relative ${isDark ? 'bg-(--white)' : ''}`}>
        {isDark ? (
          <div className="w-full max-w-7xl z-10">
            <div className="flex justify-center items-center">
              <FullLogo src={logoSrc} size="w-[100px] mx-auto mt-3" />
            </div>
            <div className="md:hidden absolute z-12 left-10 top-12">
              <HamburgerMenu dark={true} isActive={navOpen} onToggle={toggleNav} />
            </div>
          </div>
        ) : (
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-7xl z-10">
            <div className="flex justify-center items-center">
              <FullLogo src={logoSrc} size="w-[100px] mx-auto mt-3" />
            </div>
            <div className="md:hidden absolute z-12 left-10 top-12">
              <HamburgerMenu dark={false} isActive={navOpen} onToggle={toggleNav} />
            </div>
          </div>
        )}

        <div
          className={`absolute top-15 left-10 z-[999] text-md ${menuBgClass} w-[65%] flex flex-col justify-between items-start space-y-4 py-13 px-8 my-5 ${
            navOpen ? 'menu-visible' : 'menu-hidden'
          }`}
        >
          <NavLink
            to="/home"
            className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
            onClick={closeNav}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
            onClick={closeNav}
          >
            About
          </NavLink>
          <NavLink
            to="/mission&vision"
            className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
            onClick={closeNav}
          >
            Africa’s Return
          </NavLink>
          <NavLink
            to="/legacy-of-impact"
            className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
            onClick={closeNav}
          >
            Zumera
          </NavLink>
          <NavLink
            to="/leadership"
            className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
            onClick={closeNav}
          >
            Thought Leadership
          </NavLink>
          <NavLink
            to="/engagement"
            className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
            onClick={closeNav}
          >
            Engagement
          </NavLink>
          <NavLink
            to="/movement"
            className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
            onClick={closeNav}
          >
            Movement
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `trajan-pro nav-cta-blue rounded-xs ${isActive ? 'active-link' : ''}`
            }
            onClick={closeNav}
          >
            BOOK LRE
          </NavLink>
        </div>
      </nav>
    </>
  );
}

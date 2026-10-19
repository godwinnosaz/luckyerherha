import React from 'react';
import { NavLink } from 'react-router-dom';
import FullLogo from './FullLogo';

export default function Navbar({ isDark = false, className = '' }) {
  return (
    <>
      <style>{`
        .navlinks {
          border-top: 1px solid var(--accent);
          border-bottom: 1px solid var(--accent);
          color: var(--accent);
        }
        .navlinks-dark {
          border-top: 1px solid var(--primary-color);
          border-bottom: 1px solid var(--primary-color);
          color: var(--primary-color);
        }
        .navlinks a:hover, .navlinks-dark a:hover, .active-link {
          text-decoration: underline;
          text-underline-offset: 5px;
        }
        .nav-cta-blue {
          background-color: var(--secondary-color);
          padding: .8rem;
          color: var(--accent);
          font-weight: 700;
          font-size: .8rem;
        }
      `}</style>
      <nav className={`w-full relative ${className}`}>
        {isDark ? (
          <div className="mx-auto relative top-0 w-full max-w-7xl z-10">
            <div className="flex justify-center items-center">
              <FullLogo
                src="assets/imgs/icons/logos/full_logo_black.png"
                size="w-[150px] mx-auto mt-3"
              />
            </div>
            <div className="navlinks-dark text-lg bg-light-gray md:flex justify-between items-center gap-x-8 hidden py-4 px-5 my-5">
              <NavLink
                to="/home"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                About
              </NavLink>
              <NavLink
                to="/mission&vision"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Africa’s Return
              </NavLink>
              <NavLink
                to="/leadership"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Thought Leadership
              </NavLink>
              <NavLink
                to="/legacy-of-impact"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Zumera
              </NavLink>
              <NavLink
                to="/engagement"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Engagement
              </NavLink>
              <NavLink
                to="/movement"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Movement
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `trajan-pro nav-cta-blue rounded-xs ${isActive ? 'active-link' : ''}`
                }
              >
                BOOK LRE
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="mx-auto absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl z-10">
            <div className="flex justify-center items-center">
              <FullLogo
                src="assets/imgs/icons/logos/full_logo_white.png"
                size="w-[150px] mx-auto mt-3"
              />
            </div>
            <div className="navlinks text-lg bg-light-gray md:flex justify-between items-center gap-x-8 hidden py-4 px-5 my-5">
              <NavLink
                to="/home"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                About
              </NavLink>
              <NavLink
                to="/mission&vision"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Africa’s Return
              </NavLink>
              <NavLink
                to="/leadership"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Thought Leadership
              </NavLink>
              <NavLink
                to="/legacy-of-impact"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Zumera
              </NavLink>
              <NavLink
                to="/engagement"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Engagement
              </NavLink>
              <NavLink
                to="/movement"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Movement
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `trajan-pro nav-cta-blue rounded-xs ${isActive ? 'active-link' : ''}`
                }
              >
                BOOK LRE
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

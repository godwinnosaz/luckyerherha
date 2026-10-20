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
        .nav-desktop-links {
          width: fit-content;
          max-width: 100%;
          margin-inline: auto;
          justify-content: center;
          gap: clamp(0.75rem, 1.5vw, 1.5rem);
        }
        .nav-desktop-links .nav-cta-blue {
          flex-shrink: 0;
        }
        .navlinks a:hover, .navlinks-dark a:hover, .active-link {
          text-decoration: none !important;
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
                src="assets/imgs/icons/logos/new-logo.png"
                size="mx-auto mt-3"
                invert
              />
            </div>
            <div className="navlinks-dark nav-desktop-links text-lg bg-light-gray md:flex items-center hidden py-4 px-5 my-5">
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
                LRE
              </NavLink>
              <NavLink
                to="/legacy-of-impact"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Zumera
              </NavLink>
              <NavLink
                to="/leadership"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Thought Leadership
              </NavLink>
              <NavLink
                to="/movement"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                The Moment
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
                src="assets/imgs/icons/logos/new-logo.png"
                size="mx-auto mt-3"
              />
            </div>
            <div className="navlinks nav-desktop-links text-lg bg-light-gray md:flex items-center hidden py-4 px-5 my-5">
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
                LRE
              </NavLink>
              <NavLink
                to="/legacy-of-impact"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Zumera
              </NavLink>
              <NavLink
                to="/leadership"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                Thought Leadership
              </NavLink>
              <NavLink
                to="/movement"
                className={({ isActive }) => `trajan-pro ${isActive ? 'active-link' : ''}`}
              >
                The Moment
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

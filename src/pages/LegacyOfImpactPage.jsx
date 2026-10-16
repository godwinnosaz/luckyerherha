import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NavSm from '../components/NavSm';
import AppIntersection from '../components/AppIntersection';
import Footer from '../components/Footer';

export default function LegacyOfImpactPage() {
  return (
    <>
      <style>{`
        .navlinks-dark {
          border-top: 1px solid var(--primary-color);
          border-bottom: 1px solid var(--primary-color);
          color: var(--primary-color);
        }
        .navlinks-dark a:hover, .active-link {
          text-decoration: underline;
          text-underline-offset: 5px;
        }
      `}</style>
      <div className="hidden md:block">
        <Navbar isDark={true} />
      </div>
      <div className="md:hidden">
        <NavSm isDark={true} />
      </div>

      <AppIntersection externalClass="bg-(--white) sticky top-0 z-15">
        <h1 className="trajan-pro text-(--text-grey) text-4xl text-center md:text-left">
          Building Monuments to Resistance.
        </h1>
      </AppIntersection>

      <section className="max-w-sm md:max-w-2xl mx-auto">
        <div className="navlinks-dark text-lg bg-light-gray flex justify-between items-center gap-x-2 md:gap-x-8 py-5 px-5 my-5">
          <NavLink
            to="/legacy-of-impact/rj-brand"
            className={({ isActive }) =>
              `trajan-pro text-[0.8rem] md:text-[1.1rem] ${isActive ? 'active-link' : ''}`
            }
          >
            Rj Brand
          </NavLink>
          <NavLink
            to="/legacy-of-impact/zumera"
            className={({ isActive }) =>
              `trajan-pro text-[0.8rem] md:text-[1.1rem] ${isActive ? 'active-link' : ''}`
            }
          >
            Zumera
          </NavLink>
          <NavLink
            to="/legacy-of-impact/investor-info"
            className={({ isActive }) =>
              `trajan-pro text-[0.8rem] md:text-[1.1rem] ${isActive ? 'active-link' : ''}`
            }
          >
            Investor Manifesto.
          </NavLink>
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-15 relative md:h-[calc(70vh-6rem)] overflow-hidden">
        <Outlet />
      </section>

      <Footer color={true} secondaryColor={true} />
    </>
  );
}

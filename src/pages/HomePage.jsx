import React from 'react';
import Navbar from '../components/Navbar';
import NavSm from '../components/NavSm';
import AppIntersection from '../components/AppIntersection';
import Footer from '../components/Footer';
import declarationImage from '../../assets/imgs/home/declaration.png';

export default function HomePage() {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden">
        <NavSm />
      </div>

      <section className="home-throne-hero relative h-[80vh] md:h-[130vh] w-full overflow-hidden flex items-center p-5">
        <div className="absolute inset-0 bg-cover bg-center md:bg-top bg-no-repeat bg-[url(/assets/imgs/home/throne.jpg)] md:bg-[url(/assets/imgs/home/throne.jpg)] hero-image-motion pointer-events-none"></div>
        <div className="home-throne-copy w-full max-w-7xl lg:max-w-[94rem] mx-auto font-black z-2 relative">
          <h1 className="trajan-pro hero-throne-title text-white drop-shadow-2xl animate-hero-title-reveal">
            AFRICA,<br />
            TAKE YOUR<br />
            THRONE
          </h1>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/25 z-1"></div>
      </section>

      <section className="home-declaration-section relative w-full overflow-hidden flex items-end p-5 md:items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-image-motion pointer-events-none"
          style={{ backgroundImage: `url(${declarationImage})` }}
        ></div>
      </section>
{/* 
      <section className="home-declaration-copy">
        <div className="home-declaration-copy-inner">
          <h2>Africa's Return Declaration of Purpose</h2>
          <p className="home-declaration-lead">
            Africa's Return started with one uncomfortable truth: the Africa we were taught to accept is nowhere near what we were meant to be.
          </p>
          <p>That single thought changes everything.</p>
          <p>Africa's Return exists to spark a return to who we truly are - to raw originality.</p>
          <p>We are attacking root causes rather than treating symptoms.</p>
          <p>
            Hand in hand, we are building, creating and keying into the deepest source of their creative identity; nurturing that consciousness through ideas, conversations, education, storytelling, community and creation.
          </p>
        </div>
      </section> */}

      {/* <AppIntersection externalClass="bg-[url(/assets/imgs/home/legacy.png)] text-(--primary-color) mb-[3rem] bg-cover bg-center bg-no-repeat">
        <h2 className="text-3xl font-bold text-center text-(--accent) mb-[2rem] py-[5rem]">
          LEGACY OF IMPACT
        </h2>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="max-w-7xl mx-auto pb-[5rem] px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center group">
                <div className="h-16 flex items-center justify-center mb-4">
                  <img src="/assets/imgs/home/lre_logo.png" alt="" className="w-32" />
                </div>
                <div className="w-full max-w-[280px] h-[340px] bg-gray-300 mb-6 shadow-2xl transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                  <img src="/assets/imgs/home/9m.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <p className="manrope text-(--accent) text-base md:text-lg font-light leading-relaxed max-w-xs text-start">
                  Over 61 million Africans reached and awakened to the glory of their African heritage.
                </p>
              </div>

              <div className="flex flex-col items-center group">
                <div className="h-16 flex items-center justify-center mb-4">
                  <img src="/assets/imgs/home/zumera_logo.png" alt="" className="w-48" />
                </div>
                <div className="w-full max-w-[280px] h-[340px] bg-gray-300 mb-6 shadow-2xl transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                  <img src="/assets/imgs/rj-brand/BB1.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <p className="manrope text-(--accent) text-base md:text-lg font-light leading-relaxed max-w-xs text-start">
                  African communities inspired towards a better future with structures of African truth
                </p>
              </div>

              <div className="flex flex-col items-center group">
                <div className="h-16 flex items-center justify-center mb-4 text-center">
                  <span className="trajan-pro text-base md:text-lg font-bold tracking-wider text-(--accent)">
                    LRE’S BOOK
                  </span>
                </div>
                <div className="w-full max-w-[280px] h-[340px] bg-gray-300 mb-6 shadow-2xl transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                  <img src="/assets/imgs/home/lre_book.jpg" alt="LRE's Book" className="w-full h-full object-cover" />
                </div>
                <p className="manrope text-(--accent) text-base md:text-lg font-light leading-relaxed max-w-xs text-start">
                  The Rise of Royals — Restoring the consciousness of African royalty, authorship, and creative responsibility.
                </p>
              </div>

              <div className="flex flex-col items-center group">
                <div className="h-16 flex items-center justify-center mb-4 text-center px-2">
                  <span className="trajan-pro text-sm md:text-base font-bold tracking-wider text-(--accent) leading-tight">
                    THE SCHOOL OF BECOMING
                  </span>
                </div>
                <div className="w-full max-w-[280px] h-[340px] bg-gray-300 mb-6 shadow-2xl transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                  <img src="/assets/imgs/home/school_of_becoming.jpg" alt="School of Becoming" className="w-full h-full object-cover" />
                </div>
                <p className="manrope text-(--accent) text-base md:text-lg font-light leading-relaxed max-w-xs text-start">
                  Africa’s Return School of Economies: The School of Becoming — Equipping African minds to move from consumers to creators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AppIntersection> */}

      <Footer />
    </>
  );
}



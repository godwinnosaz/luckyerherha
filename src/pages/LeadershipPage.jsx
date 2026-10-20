import React from 'react';
import Navbar from '../components/Navbar';
import NavSm from '../components/NavSm';
import AppIntersection from '../components/AppIntersection';
import AppHeaderBg from '../components/AppHeaderBg';
import Footer from '../components/Footer';

export default function LeadershipPage() {
  return (
    <>
      <div className="hidden md:block">
        <Navbar isDark={true} />
      </div>
      <div className="md:hidden mb-[3.5rem]">
        <NavSm isDark={true} />
      </div>

      <AppIntersection externalClass="bg-(--white) sticky top-0 z-15">
        <div className="text-center">
          <h1 className="trajan-pro text-4xl md:text-5xl lg:text-[2.8rem] text-(--text-grey) font-extrabold tracking-wide">
            The Arsenal of Knowledge
          </h1>
        </div>
      </AppIntersection>

      <AppHeaderBg externalClass="bg-[url('/assets/imgs/leadership/awakenings.png')] text-start justify-start mt-8">
        
      </AppHeaderBg>

      <section className="my-12">
        <article className="flex justify-center items-center py-8">
          <div
            className="text-(--black) space-y-8 w-[90%] md:w-[80%] max-w-5xl mx-auto text-[1.15rem] manrope"
            style={{ color: '#1a202c' }}
          >
            <div className="text-center space-y-4 pb-2 animate-editorial-lead">
              <h2 className="trajan-pro text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-wide">
                Africa's Return Arsenal of Knowledge
              </h2>
              <p className="manrope text-base sm:text-lg md:text-xl font-medium text-gray-700 italic max-w-2xl mx-auto leading-relaxed">
                Inspiration fades. Real movements are built on conviction that lasts.
              </p>
            </div>

            {/* Subtle Divider */}
            <div className="w-24 h-[2px] bg-gray-300 mx-auto"></div>

            {/* Editorial Body Text */}
            <div className="space-y-6 text-justify md:text-center leading-relaxed text-gray-800 text-[1.1rem] md:text-[1.15rem]">
              <p>
                The Arsenal of Knowledge is where we gather the intellectual weight behind Africa’s Return. This is not a library designed to tell you what to think; it is a training ground to make you think harder, deeper, and clearer.
              </p>
              <p>
                Here, you’ll find unfiltered conversations, long-form teachings and tough inquiries into history, technology, leadership, and the future we are bound to build.
              </p>
              <p>
                Some ideas will validate you while others will shatter your assumptions. Good. Growth requires friction.
              </p>
              <p>Challenge what you know, then pass it on to force someone else to ask a better question.</p>
              <p className="trajan-pro font-bold text-xl md:text-2xl text-(--text-grey) pt-4 tracking-wide">
                Enter the Arsenal. Watch deeply. Think freely. Create deliberately.
              </p>
            </div>

            {/* Action Button */}
            <div className="action-btns flex items-center justify-center pt-4">
              <a
                href="https://youtube.com/@luckyrerherha?si=BTtNAUEU46Uc5e0Z"
                target="_blank"
                rel="noreferrer"
                className="trajan-pro cta-grey text-[1.1rem] tracking-wider uppercase font-bold hover:scale-105 active:scale-95 shadow-md hover:shadow-xl transition-all duration-300"
              >
                ENTER THE ARSENAL
              </a>
            </div>
          </div>
        </article>
      </section>

      <Footer color={true} />
    </>
  );
}

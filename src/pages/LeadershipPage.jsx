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
            {/* Awakenings Lead */}
            <div className="text-center space-y-4 pb-2 animate-editorial-lead">
              <h2 className="trajan-pro text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-wide">
                These are awakenings, <br className="hidden sm:inline" /> not mere conversations.
              </h2>
              <p className="manrope text-base sm:text-lg md:text-xl font-medium text-gray-700 italic max-w-2xl mx-auto leading-relaxed">
                Every word is crafted to reveal, not to please, as I speak to your soul.
              </p>
            </div>

            {/* Subtle Divider */}
            <div className="w-24 h-[2px] bg-gray-300 mx-auto"></div>

            {/* Section Headline */}
            <h3
              className="trajan-pro text-(--text-grey) font-bold text-center"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', lineHeight: 1.25 }}
            >
              Africa's Return Arsenal of Knowledge
            </h3>

            {/* Editorial Body Text */}
            <div className="space-y-6 text-justify md:text-center leading-relaxed text-gray-800 text-[1.1rem] md:text-[1.15rem]">
              <p className="font-bold text-lg md:text-xl text-black">
                Every serious movement needs more than inspiration. It needs knowledge that can sharpen the mind long after the emotion of a moment has passed.
              </p>
              <p>
                The Arsenal of Knowledge is where we gather the deeper conversations behind Africa's Return: full-length videos, teachings, interviews, intellectual explorations and discussions that give you enough room to think rather than simply react.
              </p>
              <p className="font-semibold text-black">
                This is not a library designed to tell you what to think. It is a place designed to make you think more deeply.
              </p>
              <p>
                You will find conversations about Africa, creation, consciousness, history, business, civilisation, leadership, technology, identity and the future we are capable of building. Some ideas may confirm what you already believe. Others may challenge it. Both can be useful if they make you examine your assumptions more honestly.
              </p>
              <p className="font-extrabold text-black text-lg md:text-xl tracking-wide">
                Take your time here.
              </p>
              <p>
                Watch beyond the headline. Follow an argument to its roots. Return to a conversation when your understanding has changed. Share an idea that forces someone else to ask a better question because knowledge becomes powerful when it changes the quality of the questions we are able to ask.
              </p>
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

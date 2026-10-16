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
          <h1 className="trajan-pro text-4xl md:text-5xl lg:text-[2.5rem] text-(--text-grey) font-[300]">
            The Arsenal of Knowledge
          </h1>
        </div>
      </AppIntersection>

      <AppHeaderBg externalClass="bg-[url('/assets/imgs/leadership/awakenings.png')] text-start justify-start mt-8">
        <div className="max-w-xs md:max-w-7xl md:ms-[15rem] p-7 flex flex-col">
          <span className="trajan-pro text-[2.2rem] md:text-[3rem]">
            These are awakenings, <br /> not mere <br className="md:hidden" /> conversations.
          </span>
          <span className="text-[1.1rem] md:text-[1.2rem]">
            Every word is crafted to reveal, not to please, as I speak <br /> to your soul.
          </span>
        </div>
      </AppHeaderBg>

      <section className="my-10">
        <article className="flex justify-center items-center py-12 gap-[3rem]">
          <div className="text-(--black) space-y-6 w-[85%] md:w-[50%] text-[1.15rem] manrope">
            <h2 className="trajan-pro text-(--text-grey) text-[2rem] md:text-[2.5rem] font-bold text-center">
              Africa's Return Arsenal of Knowledge
            </h2>
            <div className="space-y-4 text-justify md:text-center leading-relaxed">
              <p className="font-semibold text-lg text-black">
                Every serious movement needs more than inspiration. It needs knowledge that can sharpen the mind long after the emotion of a moment has passed.
              </p>
              <p>
                The Arsenal of Knowledge is where we gather the deeper conversations behind Africa's Return: full-length videos, teachings, interviews, intellectual explorations and discussions that give you enough room to think rather than simply react.
              </p>
              <p className="font-semibold">
                This is not a library designed to tell you what to think. It is a place designed to make you think more deeply.
              </p>
              <p>
                You will find conversations about Africa, creation, consciousness, history, business, civilisation, leadership, technology, identity and the future we are capable of building. Some ideas may confirm what you already believe. Others may challenge it. Both can be useful if they make you examine your assumptions more honestly.
              </p>
              <p className="font-bold text-black">
                Take your time here.
              </p>
              <p>
                Watch beyond the headline. Follow an argument to its roots. Return to a conversation when your understanding has changed. Share an idea that forces someone else to ask a better question because knowledge becomes powerful when it changes the quality of the questions we are able to ask.
              </p>
              <p className="trajan-pro font-bold text-xl text-(--text-grey) pt-2">
                Enter the Arsenal. Watch deeply. Think freely. Create deliberately.
              </p>
            </div>
            <div className="action-btns flex items-center justify-center gap-4 pt-4">
              <a
                href="https://youtube.com/@luckyrerherha?si=BTtNAUEU46Uc5e0Z"
                target="_blank"
                rel="noreferrer"
                className="trajan-pro cta-grey text-[1.1rem]"
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

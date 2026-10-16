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
          <div className="text-(--black) space-y-6 w-[70%] md:w-[50%] text-[1.3rem]">
            <h2 className="trajan-pro text-(--text-grey) text-[2.5rem] font-bold text-center">
              The battle cries
            </h2>
            <p className="text-justify md:text-center">
              I do not take stages to <br className="hidden md:block" /> entertain. I rise to call the{' '}
              <br className="hidden md:block" /> forgotten home.
            </p>
            <p className="text-justify md:text-center">
              Each speech is a cleansing fire, <br className="hidden md:block" /> soft enough to awaken,
              sharp <br className="hidden md:block" /> enough to cut chains.
            </p>
            <p className="text-justify md:text-center">
              Download them. Share them. <br className="hidden md:block" /> Let the embers light fires
              in <br className="hidden md:block" /> every city, every soul.
            </p>
            <div className="action-btns flex items-center justify-center gap-4">
              <a
                href="https://youtube.com/@luckyrerherha?si=BTtNAUEU46Uc5e0Z"
                target="_blank"
                rel="noreferrer"
                className="trajan-pro cta-grey text-[1rem]"
              >
                WATCH NOW
              </a>
            </div>
          </div>
        </article>
      </section>

      <Footer color={true} />
    </>
  );
}

import React from 'react';
import Navbar from '../components/Navbar';
import NavSm from '../components/NavSm';
import AppIntersection from '../components/AppIntersection';
import AppButton from '../components/AppButton';
import Footer from '../components/Footer';

export default function EngagementPage() {
  return (
    <>
      <style>{`
        .border-top {
          border-top: 2px solid var(--black);
        }
      `}</style>
      <div className="hidden md:block">
        <Navbar isDark={true} />
      </div>
      <div className="md:hidden">
        <NavSm isDark={true} />
      </div>

      <AppIntersection externalClass="bg-(--white) sticky top-0 z-15">
        <h1 className="trajan-pro text-center text-4xl md:text-5xl lg:text-[2.5rem] text-(--text-grey) font-[300] text-shadow-lg">
          Spreading the Fire
        </h1>
      </AppIntersection>

      <div className="relative w-full min-h-[80vh]">
        <img
          src="assets/imgs/engagement/fire.jpg"
          alt="Background"
          className="w-full h-full object-cover hidden md:block"
        />
        <img
          src="assets/imgs/engagement/fire-1.jpg"
          alt="Background"
          className="w-full h-full object-cover md:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
          <h1 className="trajan-pro text-start text-[3rem] text-shadow-lg">
            SPREADING THE FIRE
          </h1>
        </div>
      </div>

      <section className="bg-(--secondary-color) py-8 my-12">
        <article className="max-w-5xl mx-auto flex justify-center md:justify-between items-center">
          <div className="space-y-8 text-[1.1rem] md:w-[50%]">
            <p>
              I am not a keynote speaker. I am the echo of a <br /> thousand ancestors.{' '}
            </p>
            <p>
              I do not deliver talks. I deliver identity in its raw, <br /> unshaken, unrehearsed
              form.{' '}
            </p>
            <p>
              Every platform I touch becomes sacred ground. <br /> A place for truth.{' '}
            </p>
            <p>
              If your stage is ready for awakening, then let us <br /> begin.{' '}
            </p>
            <div className="md:hidden justify-center max-w-sm md:w-[50%]">
              <div className="w-full md:w-[75%]">
                <img src="assets/imgs/engagement/keynote.jpg" alt="" className="w-full" />
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <AppButton
                routerLink="/contact-us"
                className="trajan-pro cta-grey text-[1.1rem] self-center"
              >
                BOOK NOW
              </AppButton>
            </div>
          </div>
          <div className="hidden md:flex justify-center w-[50%]">
            <div className="w-[100%]">
              <img src="assets/imgs/engagement/keynote.jpg" alt="" className="w-full" />
            </div>
          </div>
        </article>
      </section>

      <section>
        <div className="max-w-md md:max-w-7xl mx-auto py-12 mb-[5rem] flex flex-col justify-center items-center">
          <div className="pb-10">
            <h2 className="trajan-pro text-center text-[1.5rem] md:text-[1.8rem] lg:text-[2.3rem] text-(--black)">
              “ Many have tried to refine my voice. To filter, <br className="hidden md:block" />{' '}
              soften, brand it. I said no. Africa has been <br className="hidden md:block" />{' '}
              filtered enough. For me, every microphone is <br className="hidden md:block" /> a
              megaphone for truth and every interview is <br className="hidden md:block" /> a
              reckoning. ”{' '}
            </h2>
          </div>
          <div className="text-center w-[75%] md:w-[35%] border-top text-(--black) pt-2">
            <h2 className="rogan-bold text-[1.5rem]">LUCKY R. ERHERHA</h2>
            <p className="text-[1.1rem]">CEO/Founder ZUMERA</p>
          </div>
        </div>
      </section>

      <section>
        <img src="assets/imgs/engagement/speech.jpg" alt="" className="w-full" />
      </section>

      <section className="py-8 my-12">
        <article className="max-w-sm md:max-w-7xl mx-auto">
          <div className="space-y-2 text-[1.1rem] text-center text-(--black)">
            <h2 className="rogan-bold text-[1.6rem] uppercase">
              You want me on your platform?
            </h2>
            <p className="text-[1.1rem] md:text-[1.7rem] md:font-light mb-10">
              Then do not ask me to “tone it down.” If your platform is{' '}
              <br className="hidden md:block" /> not ready for truth, do not bother.
            </p>
            <AppButton routerLink="/contact-us" className="trajan-pro cta-blue text-[1.1rem]">
              BOOKING FORM
            </AppButton>
          </div>
        </article>
      </section>

      <Footer color={true} />
    </>
  );
}

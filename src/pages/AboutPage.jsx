import React from 'react';
import Navbar from '../components/Navbar';
import NavSm from '../components/NavSm';
import AppIntersection from '../components/AppIntersection';
import Footer from '../components/Footer';
import MissionPage from './MissionPage';

export default function AboutPage() {
  return (
    <>
      <div className="hidden md:block">
        <Navbar isDark={true} />
      </div>
      <div className="md:hidden">
        <NavSm isDark={true} />
      </div>

      <section className="min-h-screen text-(--primary-color)">
        <AppIntersection
          externalClass="bg-(--white) sticky top-0 z-15"
          className="w-full max-w-7xl mx-auto text-center pb-8 md:pb-[8rem] pt-3 px-4"
        >
          <span className="text-2xl md:text-3xl lg:text-[2.7rem] text-(--primary-color) uppercase trajan-pro font-black">
            The Vanguard of the African Renaissance
          </span>
        </AppIntersection>

        <div className="about-vanguard-content">
          <div className="about-vanguard-image image-zoom-frame">
            <img
              src="assets/imgs/about/vanguard.jpg"
              alt="Image of the African Renaissance"
              className="about-vanguard-photo w-full h-auto object-cover transition-transform duration-700 ease-out"
            />
          </div>
          <div className="about-vanguard-copy">
            <h2 className="about-vanguard-title text-3xl md:text-4xl trajan-pro font-black">AFRICA’S RETURN</h2>
            <div className="space-y-4 text-(--primary-color) leading-relaxed manrope text-base md:text-[1.05rem]">
                <p className="trajan-pro text-xl font-bold text-black">
                  What if we returned to the raw, original power we once owned?
                </p>
                <p>
                  We are done trying to “catch up.” Catching up is a trap that keeps us chasing someone else's path. The real question is: What will we build that makes us focus on our own creations and forget about “catching up”?
                </p>
                <p>
                  Beyond discussing the future; we are here to forge it.
                </p>
                <p className="font-bold text-black text-lg">
                  Africans are creators, not consumers.
                </p>
                <p>
                  The second an African remembers they can create, the world changes forever.
                </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-8 text-(--primary-color)">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-4xl text-center text-(--text-grey) mb-16 tracking-wide trajan-pro font-black">
            ECHOES OF RESISTANCE & INFLUENCE
          </h2>
          <div className="echoes-feature-layout">
            <div className="echoes-feature-frame image-zoom-frame w-full rounded-lg shadow-xl">
              <img
                src="assets/imgs/about/echoes.jpg"
                alt="Image of the African Renaissance"
                className="echoes-feature-image w-full object-cover shadow-lg"
              />
            </div>
            <div className="echoes-feature-copy">
              <h3 className="text-3xl md:text-4xl font-bold trajan-pro mb-6 leading-tight text-(--text-grey)">
                AFRICA’S RETURN PHILOSOPHY OF LIBERATION
              </h3>
              <div className="space-y-4 text-justify md:text-start manrope text-base md:text-[1.05rem] leading-relaxed">
                <p className="font-semibold">
                  Real freedom starts in the mind.
                </p>
                <p>
                  Changing what is around us changes nothing if our minds remain unchanged. Give a man new technology without transforming his imagination and he will only ever copy the man who built it.
                </p>
                <p>
                  Our philosophy of liberation begins with first principles: return to the beginning of a problem, question the assumptions beneath it, understand its actual cause, and then create from that understanding rather than simply copying an existing response.
                </p>
                <p className="font-semibold">
                  True intellectual freedom means being able to learn from another person without becoming a smaller version of that person.
                </p>
                <p>
                  True liberation is creative and Africans must unlock their levels of consciousness to tap into their original creativity.
                </p>
                <p>
                  Africa's Return is moving Africans from consumer to creator. From passive observer to active builder. From waiting for solutions to producing them.
                </p>
                <p className="font-semibold text-(--text-grey) text-lg pt-2 border-t border-gray-300">
                  Freedom isn't just about having more. It is becoming capable of building whatever we need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MissionPage embedded />

      <Footer color={true} />
    </>
  );
}

import React from 'react';
import Navbar from '../components/Navbar';
import NavSm from '../components/NavSm';
import AppIntersection from '../components/AppIntersection';
import AppHeaderBg from '../components/AppHeaderBg';
import Footer from '../components/Footer';

export default function MissionPage({ embedded = false }) {
  return (
    <>
      {!embedded && (
        <>
          <div className="hidden md:block">
            <Navbar isDark={true} />
          </div>
          <div className="md:hidden">
            <NavSm isDark={true} />
          </div>
        </>
      )}

      <AppIntersection externalClass="bg-(--white) sticky top-0 z-15 py-[2rem]">
        <div className="text-center mt-[3.5rem]">
          <h1 className="trajan-pro text-4xl md:text-5xl lg:text-[2.8rem] text-(--text-grey) font-extrabold tracking-wide">
            The War for Africa's Soul
          </h1>
        </div>
      </AppIntersection>

      <AppHeaderBg externalClass="bg-[url('/assets/imgs/mission/war.jpg')] md:bg-[url('/assets/imgs/mission/war.jpg')]">
        <span className="trajan-pro text-[2.5rem] md:text-[4rem]">
          The War for Africa's Soul
        </span>
      </AppHeaderBg>

      <section className="min-h-screen flex justify-center pt-12 md:p-12 relative md:mt-[4rem] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/imgs/mission/sov-sm.png')] md:bg-[url('/assets/imgs/mission/sovereignty.png')] bg-cover bg-center bg-no-repeat hero-image-motion pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1]"></div>
        <div className="w-full max-w-5xl z-[2] relative">
          {/* Vision Statement Section (Up) */}
          <div className="bg-(--grey) py-16 px-6 md:py-20 md:px-14 mb-20 md:mb-24 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl animate-fade-in-up">
            <div className="flex flex-col justify-center items-center">
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-lg md:text-2xl font-bold tracking-[0.25em] uppercase text-(--text-grey) opacity-70 trajan-pro mb-3">
                  VISION STATEMENT
                </h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-(--text-grey) trajan-pro leading-tight">
                  The Rise of Royals
                </h3>
                <div className="w-16 h-1 bg-(--secondary-color)/40 mx-auto mt-4 rounded-full"></div>
              </div>

              <div
                className="text-(--text-grey) text-lg md:text-[1.2rem] leading-relaxed font-medium manrope space-y-6 max-w-3xl mx-auto px-4"
                style={{ textAlign: 'justify', textAlignLast: 'center' }}
              >
                <p className="font-bold text-black text-xl md:text-2xl">
                  Africa’s Return is The New Era of Creators.
                </p>
                <p>
                  There is no time.
                </p>
                <p>
                  Africa’s Return exists because something real was taken from us and if we don’t take it now, we never will.
                </p>
                <p>
                  Look back at our history. Our people knew exactly who they were. We built our own homes, ran our own lives, and decided our own future.
                </p>
                <p>
                  That was taken from us. We were disconnected from our own strength and we’ve been living on other people’s terms ever since.
                </p>
                <p>
                  We are done with that. The Rise of Royals means taking total responsibility for our lives.
                </p>
                <p>
                  Africa’s Return is simple. Remember what we can do. Stop playing small. It is time Africa runs its own show and makes the world respect us.
                </p>
              </div>
            </div>
          </div>

          {/* Declaration of Purpose Section (Down) */}
          <div className="bg-(--grey) py-16 px-6 md:py-20 md:px-14 mb-20 md:mb-24 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl animate-fade-in-up">
            <div className="flex flex-col justify-center items-center">
              <div
                className="text-(--text-grey) text-lg md:text-[1.2rem] leading-relaxed font-medium manrope space-y-6 max-w-3xl mx-auto px-4"
                style={{ textAlign: 'justify', textAlignLast: 'center' }}
              >
                <p className="font-semibold text-gray-900 text-xl">
                  Africa's Return was born from a simple but unsettling thought: what if the Africa we have been taught to accept is not the full expression of what Africa was created to become?
                </p>
                <p className="font-bold text-black text-xl">
                  That question changes the conversation.
                </p>
                <p className="font-extrabold text-2xl md:text-[1.6rem] text-black bg-white/60 p-5 rounded-xl border-l-4 border-(--secondary-color)">
                  Our purpose is to help Africans return to the deepest source of their creative identity.
                </p>
                <p className="font-bold text-lg">
                  It is a return to originality.
                </p>
                <p>
                  A return to the discipline of understanding causes rather than endlessly treating symptoms and to the confidence to ask questions for which there may be no existing African answer and then build the answer.
                </p>
                <p className="font-bold text-black text-xl">
                  Africa's Return exists to nurture that consciousness through ideas, conversations, education, storytelling, community and creation.
                </p>
              </div>
            </div>
          </div>
<br /> <br />
          {/* The African Sovereignty Manifesto */}
          <div className="text-center space-y-10 text-(--grey) max-w-3xl mx-auto px-4 mt-20 md:mt-32 pt-10 md:pt-14 pb-20 md:pb-28 border-t border-white/10">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black trajan-pro text-center text-white mb-4 leading-tight">
                The African Sovereignty Manifesto
              </h2>
              <div className="w-16 h-1 bg-white/40 mx-auto rounded-full"></div>
            </div>
            <div
              className="space-y-6 manrope text-base md:text-[1.15rem] leading-relaxed text-(--grey)"
              style={{ textAlign: 'justify', textAlignLast: 'center' }}
            >
              <p>
                A flag on a pole doesn’t make you free. If you do not control your own mind, you are still playing someone else’s game.
              </p>
              <p>
                We are starving for real freedom - the freedom to think for ourselves and build what we actually need.
              </p>
              <p>
                For decades, we have copied the West and it hasn't worked for us. It is time to stop copying and start building.
              </p>
              <p>
                We rely on ourselves, we trust our own brains and we take our place at the front starting today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white flex items-center justify-center p-6 md:p-12 lg:p-[3rem]">
          <div className="max-w-7xl w-full">
            <div className="flex flex-col gap-8 md:gap-12">
              <h2 className="text-3xl md:text-4xl text-center font-black text-(--text-grey) trajan-pro tracking-wide uppercase">
                Africa's Call to Action
              </h2>
              <div className="mission-action-image image-zoom-frame w-full rounded-2xl shadow-2xl">
                <img
                  src="/assets/imgs/mission/action.png"
                  alt="Africa's Call to Action"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mission-action-copy w-full mx-auto space-y-20">
                <div className="space-y-20 text-gray-700 text-base md:text-lg leading-relaxed manrope">
                  <p className="font-semibold text-gray-900">
                    Africa has plenty of people who care. That is not the problem. The problem is that anger and talk do not build anything.
                  </p>
                  <p>
                    We are experts at sitting in a room listing everything that seems wrong but pointing at a house on fire does not put the flames out.
                  </p>
                  <p>
                    Transformation happens when Africans become solution driven. This is how civilizations are born.
                  </p>
                  <p className="font-bold text-gray-900">
                    We must become useful in building the future we desire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!embedded && <Footer color={true} />}
    </>
  );
}

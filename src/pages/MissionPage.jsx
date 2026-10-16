import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import NavSm from '../components/NavSm';
import AppIntersection from '../components/AppIntersection';
import AppHeaderBg from '../components/AppHeaderBg';
import Footer from '../components/Footer';

export default function MissionPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const callsToAction = [
    { text: 'Create. Do not just consume.' },
    { text: 'Own. And do not apologize for it.' },
    { text: 'Burn the slave mindset.' },
    { text: 'Rebuild. Without waiting for Western validation.' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <Navbar isDark={true} />
      </div>
      <div className="md:hidden">
        <NavSm isDark={true} />
      </div>

      <AppIntersection externalClass="bg-(--white) sticky top-0 z-15 py-[2rem]">
        <div className="text-center mt-[3.5rem]">
          <h1 className="trajan-pro text-4xl md:text-5xl lg:text-[2.5rem] text-(--text-grey) font-[300]">
            The War for Africa's Soul
          </h1>
        </div>
      </AppIntersection>

      <AppHeaderBg externalClass="bg-[url('/assets/imgs/mission/war.jpg')] md:bg-[url('/assets/imgs/mission/war.jpg')]">
        <span className="trajan-pro text-[2.5rem] md:text-[4rem]">
          The War for Africa's Soul
        </span>
      </AppHeaderBg>

      <section className="min-h-screen flex justify-center pt-12 md:p-12 bg-[url('/assets/imgs/mission/sov-sm.png')] md:bg-[url('/assets/imgs/mission/sovereignty.png')] relative bg-cover bg-center bg-no-repeat md:mt-[4rem]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1]"></div>
        <div className="w-full max-w-5xl z-[2]">
          <div className="bg-(--grey) space-y-8 py-8 mb-10 rounded">
            {activeSlide === 0 ? (
              <div className="h-full flex flex-col justify-center items-center text-justify md:text-center px-4 transition-opacity duration-500">
                <h2 className="text-(--text-grey) text-3xl md:text-4xl text-center font-black tracking-wide uppercase mb-4 trajan-pro">
                  VISION STATEMENT
                </h2>
                <h3 className="text-(--text-grey) text-lg md:text-3xl mb-2 font-bold md:font-light manrope">
                  The Rise of Royals
                </h3>
                <p className="text-(--text-grey) text-base leading-relaxed font-normal whitespace-pre-line manrope text-[1.2rem]">
                  Africa does not need pity. Africa returns, not as a charity case, <br />
                  but as a powerful kingdom. <br />
                  It needs sons and daughters who remember the crown.
                </p>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-justify md:text-center px-4 transition-opacity duration-500">
                <h2 className="text-(--text-grey) text-3xl md:text-4xl text-center font-black tracking-wide uppercase mb-4 trajan-pro">
                  MISSION STATEMENT
                </h2>
                <p className="text-(--text-grey) text-base leading-relaxed font-normal whitespace-pre-line manrope text-[1.5rem]">
                  Restoring Africa's Power.
                </p>
              </div>
            )}
            <div className="flex justify-center space-x-2 pt-2">
              <button
                type="button"
                onClick={() => setActiveSlide(0)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeSlide === 0 ? 'bg-(--footer-black)' : 'bg-gray-400'
                }`}
                aria-label="Slide 1"
              />
              <button
                type="button"
                onClick={() => setActiveSlide(1)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeSlide === 1 ? 'bg-(--footer-black)' : 'bg-gray-400'
                }`}
                aria-label="Slide 2"
              />
            </div>
          </div>

          <div className="text-center space-y-8 text-(--grey) max-w-sm md:max-w-5xl mx-auto pb-12 md:pb-0">
            <h2 className="text-[1.5rem] md:text-[2rem] font-bold trajan-pro">
              African Sovereignty Manifesto
            </h2>
            <div className="space-y-6 text-justify md:text-center">
              <p className="text-[1.2rem]">
                We were taught to be quiet; mistaking silence for wisdom.{' '}
                <br className="hidden md:block" /> To shrink ourselves. To blend in. To forget our gold and{' '}
                <br className="hidden md:block" /> glory.
              </p>
              <p className="text-[1.2rem]">
                But we must be reminded of this: Africa was not made for{' '}
                <br className="hidden md:block" /> servitude. We are the blood of kings and queens who led with{' '}
                <br className="hidden md:block" /> grace and built enviable kingdoms.
              </p>
              <p className="text-[1.2rem]">
                We are not servants in another man’s dream. We are the{' '}
                <br className="hidden md:block" /> authors of our own rebirth.
              </p>
              <p className="text-[1.2rem]">Let this fire spread. It is time to return.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white flex items-center justify-center p-[3rem]">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-around">
              <div className="space-y-8">
                <div className="relative">
                  <h2 className="text-4xl md:text-4xl text-center md:text-start font-black text-(--text-grey) trajan-pro tracking-wide uppercase">
                    CALLS TO ACTION
                  </h2>
                </div>
                <div className="md:hidden">
                  <img src="assets/imgs/mission/action.png" alt="" className="w-full" />
                </div>
                <div className="space-y-1">
                  {callsToAction.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-3 h-3 bg-(--footer-black) rounded-full mt-2"></div>
                      <p className="text-gray-700 text-lg leading-relaxed font-normal">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <img src="assets/imgs/mission/action.png" alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer color={true} />
    </>
  );
}

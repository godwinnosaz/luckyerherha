import React from 'react';
import Navbar from '../components/Navbar';
import NavSm from '../components/NavSm';
import AppIntersection from '../components/AppIntersection';
import Footer from '../components/Footer';

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
          className="max-w-sm md:max-w-7xl mx-auto text-center pb-8 md:pb-[8rem] pt-3 px-4"
        >
          <span className="text-2xl md:text-3xl lg:text-[2.7rem] text-(--primary-color) uppercase trajan-pro font-black">
            The Vanguard of the African Renaissance
          </span>
        </AppIntersection>

        <div className="max-w-sm md:max-w-7xl mx-auto px-4 lg:px-8 mb-8">
          <div className="flex flex-col-reverse md:flex-row space-x-8">
            <div className="md:w-[40%]">
              <div>
                <h2 className="text-2xl text-center md:text-start md:text-5xl lg:text-4xl font-light mt-8 md:mt-0 mb-8 leading-tight tracking-[0.1em]">
                  <span className="block trajan-pro font-black">
                    THE <br /> MISSION
                  </span>
                </h2>
              </div>
              <div className="space-y-6 text-(--primary-color) leading-relaxed text-justify md:text-start">
                <p className="md:text-[1.15rem] manrope">
                  I did not create a brand. <br className="hidden md:block" /> I accepted a responsibility.
                </p>
                <p className="md:text-[1.15rem] manrope">
                  Africa’s voice was missing, silenced, reshaped, <br className="hidden md:block" /> and returned to us in unrecognizable pieces. <br className="hidden md:block" /> Generations have grown up disconnected from their own heritage, unsure of the power that <br className="hidden md:block" /> once defined us.
                </p>
                <p className="md:text-[1.15rem] manrope">I chose to change that.</p>
                <p className="md:text-[1.15rem] manrope">
                  My mission is clear: to restore Africa’s place as a leader, a pioneer, and a force the world must reckon with. I carry the torch that calls us back to unity, dignity, and strength.
                </p>
                <p className="md:text-[1.15rem] manrope">
                  This work is about truth, not applause. It is about reminding Africans that our past was not weakness, but greatness and our future will not be dictated by others, but by us.
                </p>
                <p className="md:text-[1.15rem] manrope">
                  I am LRE. <br className="hidden md:block" /> I stand as a torchbearer and an advocate, holding Africa together, speaking with conviction, and building the path forward.
                </p>
                <p className="md:text-[1.15rem] manrope">
                  Until Africa stands tall again, respected, united, and leading, I will not stop.
                </p>
              </div>
            </div>
            <div className="relative md:w-[60%] md:h-[50%]">
              <img
                src="assets/imgs/about/vanguard.jpg"
                alt="Image of the African Renaissance"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-8 text-(--primary-color)">
        <div className="max-w-sm md:max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-4xl text-center text-(--text-grey) mb-16 tracking-wide trajan-pro font-black">
            ECHOES OF RESISTANCE & INFLUENCE
          </h2>
          <div className="flex flex-col-reverse md:flex-row justify-around">
            <div className="md:w-[40%] space-y-8">
              <h3 className="hidden md:block text-3xl md:text-4xl font-bold trajan-pro mb-8 leading-tight text-(--text-grey)">
                PHILOSOPHY OF<br /> LIBERATION
              </h3>
              <div className="space-y-6 text-justify md:text-start">
                <div className="philosophy-item">
                  <p className="leading-relaxed manrope text-[1.2rem]">
                    <b className="text-lg font-md">SOVEREIGNTY:</b> We do not knock on <br className="hidden md:block" /> doors that were built on our soil.
                  </p>
                </div>
                <div className="philosophy-item">
                  <p className="leading-relaxed manrope text-[1.2rem]">
                    <b className="text-lg font-md">LEGACY:</b> When they erase our <br className="hidden md:block" /> names, we etch them in stone.
                  </p>
                </div>
                <div className="philosophy-item">
                  <p className="leading-relaxed manrope text-[1.2rem]">
                    <b className="text-lg font-md">POWER:</b> Not rented. Not handed <br className="hidden md:block" /> down. But claimed with wisdom.
                  </p>
                </div>
                <div className="philosophy-item">
                  <p className="leading-relaxed manrope text-[1.2rem]">
                    <b className="text-lg font-md">TRUTH:</b> Africa does not need rising. <br className="hidden md:block" /> We have always been gold.
                  </p>
                </div>
              </div>
              <div className="mt-12 mb-8 md:mt-0 text-center md:text-start">
                <h3 className="text-3xl md:text-4xl font-bold text-(--text-grey) trajan-pro mb-4 leading-tight">
                  4 PILLARS.<br /> 0 APOLOGIES.
                </h3>
                <p className="leading-relaxed max-w-md text-[1.2rem] manrope">
                  This is our mindset. If you still think <br /> leftovers are enough, leave now.
                </p>
              </div>
            </div>
            <div className="relative md:w-[60%] md:h-[50%] mb-8 md:mt-0">
              <div className="w-full md:w-[80%] mx-auto">
                <img
                  src="assets/imgs/about/echoes.jpg"
                  alt="Image of the African Renaissance"
                  className="w-full h-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer color={true} />
    </>
  );
}

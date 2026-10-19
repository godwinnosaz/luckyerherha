import React from 'react';
import Navbar from '../components/Navbar';
import NavSm from '../components/NavSm';
import AppIntersection from '../components/AppIntersection';
import Footer from '../components/Footer';

export default function MovementPage() {
  return (
    <>
      <div className="hidden md:block">
        <Navbar isDark={true} />
      </div>
      <div className="md:hidden">
        <NavSm isDark={true} />
      </div>

      <div className="sentinel"></div>
      <AppIntersection externalClass="bg-(--white) sticky top-0 z-15">
        <h1 className="max-w-sm md:max-w-7xl mx-auto trajan-pro text-(--text-grey) text-4xl md:text-5xl font-extrabold tracking-wide">
          The Growing Kingdom.
        </h1>
      </AppIntersection>

      <section>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center py-12 px-4 gap-8">
          <div className="w-full md:w-[50%] text-(--text-grey) space-y-6 text-center md:text-left">
            <h2 className="trajan-pro text-2xl md:text-4xl font-black">
              THE GROWING KINGDOM:<br /> COMMUNITY OF CUSTODIANS
            </h2>
            <div className="md:hidden max-w-sm mx-auto image-zoom-frame rounded-lg shadow-xl">
              <img
                src="assets/imgs/movement/custodians_new.jpg"
                alt="custiodian images"
                className="w-full object-cover transition-transform duration-700 ease-out"
              />
            </div>
            <div className="leading-relaxed space-y-4 text-base md:text-[1.05rem] manrope text-justify md:text-left">
              <p>
                The Growing Kingdom is the community of people who have decided that Africa's future is not somebody else's responsibility. They may come from different countries, professions, generations and backgrounds, but they share a willingness to think deeply, create meaningfully and contribute to something beyond themselves.
              </p>
              <p className="font-semibold text-black">
                We call them Custodians because the future is something we have been entrusted with, not something we own.
              </p>
              <p>
                A custodian understands that what we build today becomes the environment another generation inherits. The businesses we establish, the knowledge we preserve, the children we teach, the technologies we develop, the institutions we strengthen and even the questions we choose to ask all become part of the world that comes after us.
              </p>
              <p>
                This community is for thinkers, builders, entrepreneurs, creatives, educators, students, professionals, leaders and ordinary people who believe that extraordinary change often begins with someone taking an ordinary responsibility seriously.
              </p>
              <p className="font-semibold">
                You do not need to have everything figured out before you belong here.
              </p>
              <p>
                You only need the willingness to keep learning, to question honestly, to build where you can and to remember that your contribution does not have to be enormous to matter.
              </p>
              <p>
                Every civilisation is carried by people who decide to care for what they did not personally create and improve what they did not personally inherit.
              </p>
              <p className="trajan-pro font-bold text-lg text-black pt-2">
                Become a Custodian. Help carry the future.
              </p>
            </div>
          </div>
          <div className="w-[50%] hidden md:block image-zoom-frame rounded-lg shadow-xl">
            <img src="assets/imgs/movement/custodians_new.jpg" alt="" className="w-full object-cover transition-transform duration-700 ease-out" />
          </div>
        </div>
      </section>

      <section className="bg-(--grey) mb-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center py-12 px-4 gap-8">
          <div className="w-[50%] hidden md:block image-zoom-frame rounded-lg shadow-xl">
            <img src="assets/imgs/movement/movement.jpg" alt="" className="w-full object-cover transition-transform duration-700 ease-out" />
          </div>
          <div className="w-full md:w-[50%] text-(--text-grey) space-y-6 text-center md:text-left">
            <h2 className="trajan-pro text-2xl md:text-3xl font-black">Join the Resistance now</h2>
            <div className="md:hidden max-w-sm mx-auto image-zoom-frame rounded-lg shadow-xl">
              <img src="assets/imgs/movement/movement.jpg" alt="" className="w-full object-cover transition-transform duration-700 ease-out" />
            </div>
            <div className="leading-relaxed space-y-4 text-base md:text-[1.05rem] manrope text-justify md:text-left">
              <p>
                The resistance begins much closer to home than most people think. It begins in the mind - the moment you stop accepting limitation as an explanation for who you are and stop waiting for other people to demonstrate what is possible before you believe you can do it too.
              </p>
              <p className="font-semibold text-black">
                This is not a resistance against another race, another country or another people. It is a resistance against the ideas that keep Africa small in its own imagination.
              </p>
              <p>
                Join us to learn, to question and to build. Join us because you are unwilling to leave the next generation with only the world we inherited.
              </p>
              <p>
                The return happens every time an African mind chooses possibility over limitation and creation over dependence.
              </p>
              <p className="trajan-pro font-bold text-xl text-black pt-2">
                If you are that African, come in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer color={true} />
    </>
  );
}

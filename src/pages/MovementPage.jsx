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
        <h1 className="w-full max-w-7xl mx-auto px-4 trajan-pro text-(--text-grey) text-4xl md:text-5xl font-extrabold tracking-wide">
          The Growing Kingdom.
        </h1>
      </AppIntersection>

      <section>
        <div className="max-w-7xl mx-auto flex flex-col py-12 px-4 gap-10 md:gap-14">
          <div className="image-zoom-frame w-full rounded-lg shadow-xl">
            <img
              src="assets/imgs/movement/custodians_new.jpg"
              alt="Custodians gathered in conversation"
              className="w-full h-auto object-cover transition-transform duration-700 ease-out"
            />
          </div>
          <div className="w-full text-(--text-grey) space-y-6 text-center md:text-left">
            <h2 className="trajan-pro text-2xl md:text-4xl font-black">
              THE GROWING KINGDOM:<br /> THE NEW GENERATION OF AFRICAN CREATORS
            </h2>
            <div className="leading-relaxed space-y-4 text-base md:text-[1.05rem] manrope text-justify md:text-left">
              <p>
                Civilizations are not saved by miracles. They are preserved by human beings like you and I. The future of Africa is not someone else's job. It is ours.
              </p>
              <p className="font-semibold text-black">
                The Growing Kingdom is a community bound by one shared truth: Africa's destiny will be built by those willing to think deeply, create fiercely, and live for something bigger than themselves.
              </p>
              <p>
                We call them The New Generation of African Creators.
              </p>
              <p>
                This is not about age: it is for anyone young at heart who understands stewardship.
              </p>
              <p>
                This is a home for thinkers, builders, entrepreneurs, educators, and leaders. It is for anyone who knows that extraordinary change starts when ordinary people take responsibility seriously.
              </p>
              <p>
                Everything we do today shapes the ground the next generation walks on.
              </p>
            </div>
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
            <div className="md:hidden max-w-md mx-auto image-zoom-frame rounded-lg shadow-xl">
              <img src="assets/imgs/movement/movement.jpg" alt="" className="w-full object-cover transition-transform duration-700 ease-out" />
            </div>
            <div className="leading-relaxed space-y-4 text-base md:text-[1.05rem] manrope text-justify md:text-left">
              <p>
                The resistance does not start out there - it starts within you. It begins the exact moment you stop accepting limitations as an excuse and stop waiting for someone else to prove what is possible before you dare to try.
              </p>
              <p className="font-semibold text-black">
                This is not a war against another country, another race, or another people. This is a war against the ideas that keep Africa small in its own imagination.
              </p>
              <p>
                The Return happens every single time an African mind chooses possibility over limitation, and creation over dependence.
              </p>
              <p className="trajan-pro font-bold text-xl text-black pt-2">
                If you are that African, step inside.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer color={true} />
    </>
  );
}

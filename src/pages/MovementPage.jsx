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
        <h1 className="max-w-sm md:max-w-7xl mx-auto trajan-pro text-(--text-grey) text-4xl">
          The Growing Kingdom.
        </h1>
      </AppIntersection>

      <section>
        <div className="max-w-7xl mx-auto flex justify-around items-center py-12">
          <div className="w-50% text-(--text-grey) space-y-6 text-center md:text-left">
            <h2 className="trajan-pro text-3xl font-black">
              COMMUNITY OF <br /> CUSTODIANS
            </h2>
            <div className="md:hidden max-w-sm">
              <img
                src="assets/imgs/movement/custodians_new.jpg"
                alt="custiodian images"
                className="w-full"
              />
            </div>
            <div className="leading-relaxed space-y-4 text-[1.1rem]">
              <p>
                From the crowded streets of Accra to the <br /> ivo ry towers of Europe, a quiet
                rumble is <br /> becoming a roar.
              </p>
              <p>Africa is remembering.</p>
              <p>This is not a movement. It is resurrection.</p>
            </div>
          </div>
          <div className="w-[50%] hidden md:block">
            <img src="assets/imgs/movement/custodians_new.jpg" alt="" className="w-full" />
          </div>
        </div>
      </section>

      <section className="bg-(--grey) mb-8">
        <div className="max-w-7xl mx-auto flex justify-around items-center py-12">
          <div className="w-[50%] hidden md:block">
            <img src="assets/imgs/movement/movement.jpg" alt="" className="w-full" />
          </div>
          <div className="w-50% text-(--text-grey) space-y-6 text-center md:text-left">
            <h2 className="trajan-pro text-3xl font-black">Join the Resistance</h2>
            <div className="md:hidden max-w-sm">
              <img src="assets/imgs/movement/movement.jpg" alt="" className="w-full" />
            </div>
            <div className="leading-relaxed space-y-4 text-[1.1rem]">
              <p>
                I am not building a fan base. I am raising a <br /> lineage of protectors.
              </p>
              <p>
                Say this aloud. Say it with your chest: “I will not <br /> shrink.”
              </p>
              <p>
                I will not beg. I arise. In dignity. In memory. In <br /> truth.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer color={true} />
    </>
  );
}

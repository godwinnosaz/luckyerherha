import React from 'react';

export default function TheStoryTab() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center">
      <article className="md:w-[50%]">
        <div className="w-[90%] md:w-[75%] mx-auto">
          <img src="assets/imgs/rj-brand/rj.png" alt="" className="w-full" />
        </div>
      </article>
      <article className="w-[90%] md:w-[50%] text-center md:text-left space-y-6 text-(--black) text-[1.15rem] md:text-[1.25rem] font-medium leading-relaxed mt-5 md:mt-0">
        <h3 className="text-2xl md:text-3xl font-extrabold text-black trajan-pro">About The RJ Brand</h3>
        <p className="font-bold text-lg text-black">Power. Prestige. Style.</p>
        <p>
          The RJ Brand is the world’s most exclusive African experience. It provides the essence for
          those who command influence, live beautifully, and think in centuries. It is where luxury
          finds discipline and heritage finds modern expression.{' '}
        </p>
        <p>
          Every RJ experience, from our private clubs to our tailored estates, is designed to refine
          the taste of power and to remind Africa’s finest that elegance is not an act of vanity, but
          an act of identity.
        </p>
        <p className="font-semibold text-black">
          The RJ Brand exists to crown a new class of African leadership - men and women who embody
          quiet power, cultural pride, and timeless sophistication.
        </p>
        <div>
          <h4 className="text-xl font-extrabold text-black">Mission</h4>
          <p className="font-bold text-black">Revealing African royalty.</p>
        </div>
        <div>
          <h4 className="text-xl font-extrabold text-black">Vision</h4>
          <p>
            To stand as the ultimate emblem of African distinction where heritage, affluence, and
            timeless style converge into a single, unforgettable name: RJ.
          </p>
        </div>
      </article>
    </section>
  );
}

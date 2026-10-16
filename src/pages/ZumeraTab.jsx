import React from 'react';

export default function ZumeraTab() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start">
      <article className="md:w-[50%]">
        <div className="w-[90%] md:w-[75%] mx-auto">
          <img src="assets/imgs/rj-brand/BB1.jpg" alt="" className="w-full" />
        </div>
      </article>
      <article className="w-[90%] md:w-[50%] text-center md:text-left space-y-6 text-(--black) text-[1.1rem]">
        <p>
          Zumera is the heart of Africa’s new architectural age; a property development, management,
          and investment company shaping the continent’s skyline with grandeur and permanence.{' '}
        </p>
        <p>
          We are more than builders of structures. We are custodians of legacy, translating the
          dignity, ambition, and prestige of Africa into landmark real estate that endures through
          generations.{' '}
        </p>
        <p>
          From luxury residences to monumental commercial projects, every Zumera development stands
          as an emblem of vision, precision, and African pride. Our work is driven by a belief that
          property should not just appreciate in value, but in heritage.
        </p>
        <div className="space-y-2">
          <h4 className="font-bold">Mission:</h4>
          <p>
            We strive to offer the highest possible standard, the most innovative solution, and the
            best value to Nigerians, one community, one project at a time.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold">Vision:</h4>
          <p>
            To build an inspiring and sustainable future for African communities, starting with
            Nigeria.{' '}
          </p>
        </div>
      </article>
    </section>
  );
}

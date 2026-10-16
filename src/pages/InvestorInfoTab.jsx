import React from 'react';

export default function InvestorInfoTab() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center">
      <article className="md:w-[50%]">
        <div className="w-[90%] md:w-[75%] mx-auto">
          <img src="assets/imgs/rj-brand/investors.png" alt="" className="w-full" />
        </div>
      </article>
      <article className="w-[90%] md:w-[50%] text-center md:text-left space-y-6 text-(--black) text-[1.1rem] mt-5 md:mt-0">
        <h4 className="text-[1.3rem]">Investor Manifesto for the Zumera Tower</h4>
        <p>
          The Zumera Tower is not another project. It is a statement, a declaration that Africa’s
          architectural dominance has arrived.{' '}
        </p>
        <p>
          Every generation produces one defining landmark: a structure that shifts perception,
          commands pride, and secures legacy. Zumera Tower is ours. Rising from the heart of the
          South-South, it stands as the largest, most iconic tower ever conceived in the region - a
          fusion of power, artistry, and vision.
        </p>
        <p>
          For investors, this is foresight. It is the chance to own equity in a symbol of destiny;
          a property expected to yield exponential financial and cultural returns for decades.
        </p>
        <p>
          Our model is clear: when you invest in Zumera Tower, you are acquiring influence,
          reputation, and legacy, as you position yourself in history.
        </p>
        <p>Welcome to Zumera Tower. Where legacy pays dividends.</p>
      </article>
    </section>
  );
}

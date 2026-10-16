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
        <div className="w-full md:w-[60%] max-w-5xl z-[2]">
          <div className="bg-(--grey) space-y-8 py-8 px-6 mb-10 rounded">
            {activeSlide === 0 ? (
              <div className="h-full flex flex-col justify-center items-center text-justify md:text-center px-4 transition-opacity duration-500">
                <h2 className="text-(--text-grey) text-3xl md:text-4xl text-center font-black tracking-wide uppercase mb-4 trajan-pro">
                  VISION STATEMENT
                </h2>
                <h3 className="text-(--text-grey) text-xl md:text-2xl mb-4 font-bold trajan-pro">
                  The Rise of Royals
                </h3>
                <div className="text-(--text-grey) text-base md:text-[1.1rem] leading-relaxed font-normal manrope space-y-4 max-w-4xl text-justify md:text-center">
                  <p>
                    Africa’s Return exists because we believe that something essential was interrupted.
                  </p>
                  <p>
                    There was a time when the African did not need to be reminded of his worth. He built, governed, reasoned, traded, created, cultivated, defended and imagined his future from within himself. His understanding of the world did not begin with the question, “What does someone elsewhere think of me ?” It began with a more powerful question: “What is possible, and what can I create?”
                  </p>
                  <p>
                    Somewhere along the line, our relationship with our own possibility was interrupted.
                  </p>
                  <p>
                    The Rise of Royals is the return of the African to that possibility. Royalty here is not about crowns, titles or inherited privilege. It is a consciousness of responsibility. A royal understands that he is not merely living inside a world someone else designed; he has the capacity to participate in designing the world he inhabits.
                  </p>
                  <p>
                    The Africa we are returning to is not a romantic reconstruction of the past. It is an Africa capable of remembering what was once possible and making that memory into a reality that gives Africa domination on the world stage.
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-justify md:text-center px-4 transition-opacity duration-500">
                <h2 className="text-(--text-grey) text-3xl md:text-4xl text-center font-black tracking-wide uppercase mb-4 trajan-pro">
                  DECLARATION OF PURPOSE
                </h2>
                <h3 className="text-(--text-grey) text-xl md:text-2xl mb-4 font-bold trajan-pro">
                  Africa's Return Declaration of Purpose
                </h3>
                <div className="text-(--text-grey) text-base md:text-[1.1rem] leading-relaxed font-normal manrope space-y-4 max-w-4xl text-justify md:text-center">
                  <p>
                    Africa's Return was born from a simple but unsettling thought: what if the Africa we have been taught to accept is not the full expression of what Africa was created to become?
                  </p>
                  <p>
                    That question changes the conversation.
                  </p>
                  <p className="font-semibold text-lg text-black">
                    Our purpose is to help Africans return to the deepest source of their creative identity.
                  </p>
                  <p>
                    It is a return to originality.
                  </p>
                  <p>
                    A return to the discipline of understanding causes rather than endlessly treating symptoms and to the confidence to ask questions for which there may be no existing African answer and then build the answer.
                  </p>
                  <p>
                    Africa's Return exists to nurture that consciousness through ideas, conversations, education, storytelling, community and creation.
                  </p>
                </div>
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
              The African Sovereignty Manifesto
            </h2>
            <div className="space-y-6 text-justify md:text-center manrope text-[1.1rem] leading-relaxed">
              <p>
                Sovereignty begins long before political independence. Africa's sovereignty must therefore become deeper than independence.
              </p>
              <p>
                We are interested in the sovereignty of thought. The sovereignty of imagination.
              </p>
              <p>
                The sovereignty to examine our problems without automatically reaching for solutions designed somewhere else, to study what has worked elsewhere without becoming ashamed of what can work here and to build systems that emerge from an honest understanding of African realities rather than an endless attempt to imitate foreign ones.
              </p>
              <p className="font-semibold text-white">
                This does not mean rejecting the world. Africa does not need isolation; it needs authorship.
              </p>
              <p>
                We can learn from everywhere without surrendering the authority to decide what belongs in our own land. We can admire another civilization without believing that civilization is superior. We can use technology created elsewhere while developing technologies that emerge from our own questions. We can participate in the global economy without allowing the global economy to become the measure of our human worth.
              </p>
              <p>
                Sovereignty asks a difficult question: If nobody came to tell us what to build, what would we build?
              </p>
              <p>
                Africa's Return is committed to asking that question repeatedly - not separation from humanity, but a fuller participation in humanity through the strength of our own mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white flex items-center justify-center p-[3rem]">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-around gap-12">
              <div className="space-y-6">
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl text-center md:text-start font-black text-(--text-grey) trajan-pro tracking-wide uppercase">
                    Africa's Call to Action
                  </h2>
                </div>
                <div className="md:hidden">
                  <img src="assets/imgs/mission/action.png" alt="" className="w-full" />
                </div>
                <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed manrope text-justify md:text-left">
                  <p className="font-semibold text-gray-900">
                    Africa does not lack people who care. What we lack is the conversion of concern into creation.
                  </p>
                  <p>
                    We have become remarkably good at identifying what is wrong. We can describe corruption, unemployment, poor infrastructure, weak institutions, dependence, inequality and the countless ways our societies fail ordinary people. Yet identifying a problem is only the beginning of responsibility.
                  </p>
                  <p>
                    The harder question is what we intend to create in its place. Africa's Call to Action is an invitation to move from commentary to construction.
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-2 text-gray-800">
                    <li>If education is failing, what should education become?</li>
                    <li>If our cities are struggling, what should an African city designed around African human beings actually look like?</li>
                    <li>If our young people are leaving because they cannot see a future here, what would we have to build for staying to become an attractive choice?</li>
                    <li>If we believe African products can compete with the best in the world, where are the products?</li>
                  </ul>
                  <p>
                    These questions are uncomfortable because they return responsibility to us. They remind us that the future is not something waiting somewhere ahead of Africa. It is being produced every day by the decisions, inventions, businesses, institutions, stories and ideas that Africans choose to create.
                  </p>
                  <p>
                    You do not have to begin by changing a continent. Begin with a problem close enough to touch. Understand it deeply. Find its cause. Imagine what should exist instead. Build something useful. Improve it. Teach someone else. Let another person build on what you have made. This is how civilizations move.
                  </p>
                  <p className="font-bold text-gray-900">
                    Africa's Call to Action is therefore not simply a call to protest what is wrong. It is a call to become increasingly useful to the future we say we desire.
                  </p>
                  <p className="trajan-pro text-gray-900 font-bold text-base md:text-xl">
                    The question is no longer only, “What happened to Africa?” The question is, “What are we going to build now?”
                  </p>
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

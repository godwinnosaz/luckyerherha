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
                    ABOUT <br /> AFRICA’S RETURN
                  </span>
                </h2>
              </div>
              <div className="space-y-4 text-(--primary-color) leading-relaxed text-justify md:text-start manrope text-base md:text-[1.05rem]">
                <p className="font-semibold text-lg">
                  Africa's Return is a movement built around a question:
                </p>
                <p className="trajan-pro text-xl font-bold text-black">
                  What if Africa could return to the originality of its creation?
                </p>
                <p>
                  We are not using “return” to mean going backwards. We mean returning to the kind of consciousness from which original things can be created again.
                </p>
                <p>
                  Africa has a long history of producing people who could think, organise, build, govern, trade, cultivate knowledge and solve problems according to the realities around them.
                </p>
                <p>
                  Yet somewhere along the way, many Africans learned to see themselves primarily as recipients: recipients of knowledge, technology, systems, standards and definitions of progress created elsewhere.
                </p>
                <p className="font-semibold">
                  We believe this can change.
                </p>
                <p>
                  Africa's Return is a growing intellectual and creative movement committed to restoring Africa's power through first-principle thinking, original creation and a deeper understanding of what Africans are capable of becoming.
                </p>
                <p>
                  We explore the questions beneath the questions. Rather than asking only why a particular problem exists, we ask what produced the problem in the first place. Rather than asking how Africa can catch up, we ask what Africa could build that would make the language of “catching up” irrelevant.
                </p>
                <p>
                  Our work moves through ideas, conversations, books, films, education, business, community and the stories we tell about ourselves.
                </p>
                <p className="font-bold text-black text-lg">
                  At the centre of everything is a belief that sounds simple but carries enormous responsibility: the African is capable of creating.
                </p>
                <p>
                  And when a people remember that they can create, they begin to relate differently to their future.
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
          <div className="flex flex-col-reverse md:flex-row justify-around gap-8">
            <div className="md:w-[48%] space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold trajan-pro mb-6 leading-tight text-(--text-grey)">
                AFRICA’S RETURN<br /> PHILOSOPHY OF LIBERATION
              </h3>
              <div className="space-y-4 text-justify md:text-start manrope text-base md:text-[1.05rem] leading-relaxed">
                <p className="font-semibold">
                  Liberation begins when a person discovers that the limits they have accepted are not necessarily the limits of their capacity.
                </p>
                <p>
                  For Africa, this discovery must happen at the level of consciousness.
                </p>
                <p>
                  There is a difference between changing what surrounds a person and changing what a person believes is possible. One can give someone new tools without changing the imagination with which those tools are used. One can change a government, build new roads or introduce new technology while leaving the deeper assumptions about African possibility untouched.
                </p>
                <p className="font-semibold text-(--text-grey)">
                  Africa's Return is concerned with that deeper layer.
                </p>
                <p>
                  Our philosophy of liberation begins with first principles: return to the beginning of a problem, question the assumptions beneath it, understand its actual cause, and then create from that understanding rather than simply copying an existing response.
                </p>
                <p>
                  We believe this is essential because a people who only inherit solutions will always remain dependent on the people who first imagined them.
                </p>
                <p>
                  The goal is not to reject everything that came from outside Africa. Knowledge belongs to humanity and wisdom should travel. The goal is to become capable of receiving knowledge without losing the ability to generate it.
                </p>
                <p className="font-semibold">
                  True intellectual freedom means being able to learn from another person without becoming a smaller version of that person.
                </p>
                <p>
                  It means knowing our history without becoming trapped inside it, embracing our identity without turning identity into an excuse, and looking at the world with enough confidence to say, “We can learn from what exists, but we can also create what does not.”
                </p>
                <p className="font-bold text-(--text-grey) text-lg">
                  This is why our liberation is fundamentally creative.
                </p>
                <p>
                  We want Africans to move from consumers to creators, from observers to participants, from people waiting for solutions to people capable of producing them.
                </p>
                <p className="font-semibold text-(--text-grey) text-lg pt-2 border-t border-gray-300">
                  The final expression of liberation is not simply having more. It is becoming more capable of creating what is needed.
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

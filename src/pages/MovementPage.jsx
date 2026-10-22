import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NavSm from '../components/NavSm';
import AppIntersection from '../components/AppIntersection';
import AppHeaderBg from '../components/AppHeaderBg';
import Footer from '../components/Footer';

export default function MovementPage() {
  const [activeScreen, setActiveScreen] = useState('kingdom');

  const handleTabKeyDown = event => {
    const nextScreen = event.key === 'ArrowRight'
      ? 'resistance'
      : event.key === 'ArrowLeft'
        ? 'kingdom'
        : null;

    if (!nextScreen) return;

    event.preventDefault();
    setActiveScreen(nextScreen);
    document.getElementById(nextScreen === 'kingdom' ? 'movement-tab-era' : 'movement-tab-generation').focus();
  };

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
          The Returning Royals.
        </h1>
      </AppIntersection>

      <AppHeaderBg
        externalClass="bg-[url('/assets/imgs/movement/midnight.png')] movement-hero mt-8"
      >
        <div className="movement-hero-content">
          <img
            src="assets/imgs/icons/logos/new-logo.png"
            alt="Lucky R. Erherha logo"
            className="movement-hero-logo"
          />
          <blockquote className="movement-hero-quote">
            "it is time for our people to dream new dreams."
          </blockquote>
          <p className="movement-hero-name">Lucky R. Erherha</p>
        </div>
      </AppHeaderBg>

      <div className="movement-switch max-w-7xl mx-auto px-4">
        <div className="movement-tabs" role="tablist" aria-label="Movement stories">
          <button
            id="movement-tab-era"
            type="button"
            role="tab"
            aria-selected={activeScreen === 'kingdom'}
            aria-controls="movement-panel"
            tabIndex={activeScreen === 'kingdom' ? 0 : -1}
            className={activeScreen === 'kingdom' ? 'movement-tab is-active' : 'movement-tab'}
            onClick={() => setActiveScreen('kingdom')}
            onKeyDown={handleTabKeyDown}
          >
            The Reset: The Originality of Creation
          </button>
          <button
            id="movement-tab-generation"
            type="button"
            role="tab"
            aria-selected={activeScreen === 'resistance'}
            aria-controls="movement-panel"
            tabIndex={activeScreen === 'resistance' ? 0 : -1}
            className={activeScreen === 'resistance' ? 'movement-tab is-active' : 'movement-tab'}
            onClick={() => setActiveScreen('resistance')}
            onKeyDown={handleTabKeyDown}
          >
            The New Generation of African Creators
          </button>
        </div>

        <section
          key={activeScreen}
          id="movement-panel"
          role="tabpanel"
          aria-labelledby={activeScreen === 'kingdom' ? 'movement-tab-era' : 'movement-tab-generation'}
          className={`movement-screen ${activeScreen === 'resistance' ? 'is-resistance' : ''}`}
        >
          {activeScreen === 'kingdom' ? (
            <div className="movement-screen-inner">
              <div className="movement-image-frame image-zoom-frame rounded-lg shadow-xl">
                <img
                  src="assets/imgs/movement/custodians_new.jpg"
                  alt="Custodians gathered in conversation"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out"
                />
              </div>
              <div className="movement-copy">
                <h2 className="trajan-pro text-2xl md:text-4xl font-black">The Reset: The Originality of Creation</h2>
                <div className="movement-paragraphs leading-relaxed text-base md:text-[1.05rem] manrope text-justify md:text-left">
                  <p>
                    Civilizations are not saved by miracles. They are preserved by human beings like you and I. The future of Africa is not someone else's job. It is ours.
                  </p>
                  <p className="font-semibold text-black">
                    The Growing Kingdom is a community bound by one shared truth: Africa's destiny will be built by those willing to think deeply, create fiercely, and live for something bigger than themselves.
                  </p>
                  <p>We call them The New Generation of African Creators.</p>
                  <p>This is not about age: it is for anyone young at heart who understands stewardship.</p>
                  <p>
                    This is a home for thinkers, builders, entrepreneurs, educators, and leaders. It is for anyone who knows that extraordinary change starts when ordinary people take responsibility seriously.
                  </p>
                  <p>Everything we do today shapes the ground the next generation walks on.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="movement-screen-inner">
              <div className="movement-image-frame image-zoom-frame rounded-lg shadow-xl">
                <img
                  src="assets/imgs/movement/movement.jpg"
                  alt="The Movement"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out"
                />
              </div>
              <div className="movement-copy">
                <h2 className="trajan-pro text-2xl md:text-3xl font-black">The New Generation of African Creators</h2>
                <div className="movement-paragraphs leading-relaxed text-base md:text-[1.05rem] manrope text-justify md:text-left">
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
          )}
        </section>
      </div>

      <Footer color={true} />
    </>
  );
}
